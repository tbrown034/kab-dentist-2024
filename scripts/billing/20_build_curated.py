#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
20_build_curated.py - Build master curated dataset from staged files

This script merges all staging CSV files into a single master dataset:
- Handles partial month replacements
- Adds calculated fields (month, year, campaign_name, platform)
- Categorizes transaction types
- Sorts chronologically

Author: Trevor Brown
Repository: Google Ads Billing Pipeline
"""

import os
import sys
import csv
import json
import re
import argparse
from pathlib import Path
from datetime import datetime
from collections import defaultdict
import logging

# Setup paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR
DATA_DIR = PROJECT_DIR / "data"
STAGING_DIR = DATA_DIR / "staging"
CURATED_DIR = DATA_DIR / "curated"
LOGS_DIR = PROJECT_DIR / "logs"

# Setup logging
LOGS_DIR.mkdir(exist_ok=True)
log_file = LOGS_DIR / f"curated_{datetime.now().strftime('%Y%m%d_%H%M%S')}.log"
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(log_file),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# ANSI color codes for console output
class Colors:
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BLUE = '\033[94m'
    BOLD = '\033[1m'
    END = '\033[0m'

def print_header(message):
    """Print a formatted section header"""
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.BLUE}{message}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.END}")

def print_success(message):
    """Print success message in green"""
    print(f"{Colors.GREEN} {message}{Colors.END}")

def print_warning(message):
    """Print warning message in yellow"""
    print(f"{Colors.YELLOW}WARNING {message}{Colors.END}")

def print_error(message):
    """Print error message in red"""
    print(f"{Colors.RED} {message}{Colors.END}")

def parse_date_range(date_str):
    """
    Parse various date formats from Google Ads
    Returns: (start_date, end_date, is_range)
    """
    if not date_str:
        return None, None, False

    # Check for date range (e.g., "Jun 25  30, 2024" or "Jun 25 - 30, 2024")
    range_patterns = [
        r'(\w{3})\s+(\d{1,2})\s*[\u2013\u2014\-–—]\s*(\d{1,2}),\s*(\d{4})',  # Jun 25 – 30, 2024
        r'(\w{3})\s+(\d{1,2})\s*[\u2013\u2014\-–—]\s*(\w{3})\s+(\d{1,2}),\s*(\d{4})',  # Jun 25 – Jul 2, 2024
    ]

    for pattern in range_patterns:
        match = re.match(pattern, date_str)
        if match:
            if len(match.groups()) == 4:
                # Same month range
                month_str, start_day, end_day, year = match.groups()
                month = datetime.strptime(month_str, '%b').month
                start_date = datetime(int(year), month, int(start_day))
                end_date = datetime(int(year), month, int(end_day))
                return start_date, end_date, True
            elif len(match.groups()) == 5:
                # Cross-month range
                start_month, start_day, end_month, end_day, year = match.groups()
                start_m = datetime.strptime(start_month, '%b').month
                end_m = datetime.strptime(end_month, '%b').month
                start_date = datetime(int(year), start_m, int(start_day))
                end_date = datetime(int(year), end_m, int(end_day))
                return start_date, end_date, True

    # Single date (e.g., "Jun 1, 2024")
    try:
        single_date = datetime.strptime(date_str, '%b %d, %Y')
        return single_date, single_date, False
    except:
        pass

    # Alternative single date format
    try:
        single_date = datetime.strptime(date_str, '%B %d, %Y')
        return single_date, single_date, False
    except:
        pass

    logger.warning(f"Could not parse date: {date_str}")
    return None, None, False

def categorize_transaction(description):
    """
    Categorize transaction based on description
    Returns: (category, subcategory, campaign_name, platform)
    """
    desc_lower = description.lower()

    # Starting/Ending balance
    if 'starting balance' in desc_lower:
        return 'balance', 'starting', None, None
    if 'ending balance' in desc_lower:
        return 'balance', 'ending', None, None

    # Payments and charges
    if 'threshold charge' in desc_lower or 'monthly charge' in desc_lower:
        return 'payment', 'automatic', None, None
    if 'manual payment' in desc_lower:
        if 'cancelled' in desc_lower:
            return 'payment', 'cancelled', None, None
        return 'payment', 'manual', None, None

    # Invalid activity credits
    if 'invalid activity' in desc_lower:
        return 'credit', 'invalid_activity', None, None

    # Promotion code credits
    if 'promotion code' in desc_lower:
        return 'credit', 'promotion', None, None

    # Regulatory fees
    if 'regulatory' in desc_lower or 'dst fee' in desc_lower:
        return 'fee', 'regulatory', None, None

    # Campaign activity
    if 'clicks' in desc_lower:
        # Extract campaign name (everything before the colon and clicks count)
        match = re.match(r'^(.*?):\s*\d+\s+clicks?', description, re.IGNORECASE)
        if match:
            campaign_name = match.group(1).strip()
            # Determine platform
            if 'local services' in desc_lower or 'lsa' in desc_lower:
                platform = 'LSA'
            else:
                platform = 'Google Ads'
            return 'campaign', 'clicks', campaign_name, platform

    if 'leads' in desc_lower:
        # LSA leads
        match = re.match(r'^(.*?):\s*\d+\s+leads?', description, re.IGNORECASE)
        if match:
            campaign_name = match.group(1).strip()
            return 'campaign', 'leads', campaign_name, 'LSA'

    # Default
    return 'other', 'uncategorized', None, None

def process_staging_files():
    """
    Process all staging files into a master curated dataset
    """
    print_header("Building Curated Master Dataset")

    # Create curated directory
    CURATED_DIR.mkdir(parents=True, exist_ok=True)

    # Get all staging CSV files
    staging_files = sorted(STAGING_DIR.glob("account_activities_*.csv"))

    if not staging_files:
        print_error("No staging files found")
        return False

    print(f"Found {len(staging_files)} staging files")

    # Group files by month to handle partial replacements
    files_by_month = defaultdict(list)
    for filepath in staging_files:
        # Extract YYYYMM from filename
        match = re.search(r'account_activities_(\d{6})', filepath.name)
        if match:
            year_month = match.group(1)
            is_partial = '_thru' in filepath.name
            files_by_month[year_month].append({
                'path': filepath,
                'is_partial': is_partial,
                'name': filepath.name
            })

    # Process each month, preferring complete over partial
    all_rows = []
    months_processed = []

    for year_month in sorted(files_by_month.keys()):
        files = files_by_month[year_month]

        # Choose file to use (prefer complete over partial)
        file_to_use = None
        if len(files) == 1:
            file_to_use = files[0]
        else:
            # Multiple files for same month - prefer complete
            complete_files = [f for f in files if not f['is_partial']]
            if complete_files:
                file_to_use = complete_files[0]
                print_warning(f"Month {year_month}: Using complete file over partial")
            else:
                # Use the latest partial
                file_to_use = files[-1]

        if file_to_use:
            print(f"\nProcessing {file_to_use['name']}...")

            # Read the file
            with open(file_to_use['path'], 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                month_rows = 0

                for row in reader:
                    # Parse date
                    start_date, end_date, is_range = parse_date_range(row['Date'])

                    # Categorize transaction
                    category, subcategory, campaign_name, platform = categorize_transaction(row['Description'])

                    # Build enriched row
                    enriched_row = {
                        'Date': row['Date'],
                        'Description': row['Description'],
                        'Amount (USD)': row['Amount (USD)'],
                        'source_file': row.get('source_file', file_to_use['name']),
                        'source_row': row.get('source_row', ''),
                        'start_date': start_date.strftime('%Y-%m-%d') if start_date else '',
                        'end_date': end_date.strftime('%Y-%m-%d') if end_date else '',
                        'is_date_range': 'Yes' if is_range else 'No',
                        'year': start_date.year if start_date else '',
                        'month': start_date.month if start_date else '',
                        'month_name': start_date.strftime('%B') if start_date else '',
                        'category': category,
                        'subcategory': subcategory,
                        'campaign_name': campaign_name or '',
                        'platform': platform or '',
                        'is_partial_month': 'Yes' if file_to_use['is_partial'] else 'No'
                    }

                    all_rows.append(enriched_row)
                    month_rows += 1

                months_processed.append(year_month)
                print_success(f"  Processed {month_rows} rows")

    # Sort all rows by date
    def get_sort_date(row):
        if row['start_date']:
            return row['start_date']
        return '9999-12-31'  # Put unparseable dates at the end

    all_rows.sort(key=get_sort_date)

    # Write master curated file
    output_file = CURATED_DIR / f"billing_curated_{datetime.now().strftime('%Y%m%d')}.csv"

    fieldnames = [
        'Date', 'Description', 'Amount (USD)',
        'start_date', 'end_date', 'is_date_range',
        'year', 'month', 'month_name',
        'category', 'subcategory', 'campaign_name', 'platform',
        'is_partial_month', 'source_file', 'source_row'
    ]

    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(all_rows)

    # Calculate summary statistics
    print_header("Summary Statistics")

    # Count by category
    category_counts = defaultdict(int)
    category_amounts = defaultdict(float)
    platform_amounts = defaultdict(float)

    for row in all_rows:
        category_counts[row['category']] += 1
        try:
            amount = float(row['Amount (USD)'])
            category_amounts[row['category']] += amount
            if row['platform']:
                platform_amounts[row['platform']] += amount
        except:
            pass

    print(f"\n{Colors.BOLD}Transactions by Category:{Colors.END}")
    for cat in sorted(category_counts.keys()):
        print(f"  {cat}: {category_counts[cat]} transactions, ${category_amounts[cat]:,.2f}")

    print(f"\n{Colors.BOLD}Campaign Spend by Platform:{Colors.END}")
    for platform in sorted(platform_amounts.keys()):
        print(f"  {platform}: ${platform_amounts[platform]:,.2f}")

    print(f"\n{Colors.BOLD}Output:{Colors.END}")
    print(f"  Total rows: {len(all_rows)}")
    print(f"  Months processed: {len(months_processed)}")
    print(f"  Output file: {output_file}")

    # Write summary log
    summary = {
        'timestamp': datetime.now().isoformat(),
        'files_processed': len(staging_files),
        'months_processed': months_processed,
        'total_rows': len(all_rows),
        'output_file': str(output_file),
        'category_counts': dict(category_counts),
        'category_amounts': {k: round(v, 2) for k, v in category_amounts.items()},
        'platform_amounts': {k: round(v, 2) for k, v in platform_amounts.items()}
    }

    summary_file = LOGS_DIR / f"curated_summary_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(summary_file, 'w') as f:
        json.dump(summary, f, indent=2)

    print(f"\n Summary saved: {summary_file}")

    return True

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(
        description="Build master curated dataset from staging files"
    )
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Enable verbose logging'
    )

    args = parser.parse_args()

    # Set logging level
    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)

    # Process files
    success = process_staging_files()

    if success:
        print_success("\nCURATED DATASET BUILT SUCCESSFULLY ")
    else:
        print_error("\nFAILED TO BUILD CURATED DATASET")

    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()