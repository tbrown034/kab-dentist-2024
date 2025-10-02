#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
30_build_exports.py - Generate export files for different use cases

This script creates optimized export formats from the curated dataset:
- Looker Studio format (simplified schema, aggregated)
- Website/API format (JSON with monthly summaries)
- Internal finance format (full detail CSV)

Author: Trevor Brown
Repository: Google Ads Billing Pipeline
"""

import os
import sys
import csv
import json
import argparse
from pathlib import Path
from datetime import datetime
from collections import defaultdict
import logging

# Setup paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR
DATA_DIR = PROJECT_DIR / "data"
CURATED_DIR = DATA_DIR / "curated"
EXPORTS_DIR = DATA_DIR / "exports"
LOOKER_DIR = EXPORTS_DIR / "for_looker"
WEBSITE_DIR = EXPORTS_DIR / "for_website"
INTERNAL_DIR = EXPORTS_DIR / "for_internal"
LOGS_DIR = PROJECT_DIR / "logs"

# Setup logging
LOGS_DIR.mkdir(exist_ok=True)
log_file = LOGS_DIR / f"exports_{datetime.now().strftime('%Y%m%d_%H%M%S')}.log"
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
    print(f"{Colors.YELLOW}! {message}{Colors.END}")

def print_error(message):
    """Print error message in red"""
    print(f"{Colors.RED} {message}{Colors.END}")

def get_latest_curated_file():
    """Find the most recent curated file"""
    # Try new naming convention first
    curated_files = list(CURATED_DIR.glob("billing_curated_*.csv"))
    if not curated_files:
        # Fall back to old naming convention for backward compatibility
        curated_files = list(CURATED_DIR.glob("master_billing_curated_*.csv"))
    if not curated_files:
        return None
    # Sort by filename (which includes date) and get the latest
    return sorted(curated_files)[-1]

def export_looker_format(curated_data, output_dir):
    """
    Export data optimized for Looker Studio
    - Simplified schema
    - Campaign spend only (no payments/balances)
    - Monthly aggregations
    """
    print("\n=! Generating Looker Studio export...")

    output_dir.mkdir(parents=True, exist_ok=True)

    # Filter for campaign transactions only
    campaign_data = [row for row in curated_data if row['category'] == 'campaign']

    # Monthly aggregation
    monthly_totals = defaultdict(lambda: {
        'total_spend': 0.0,
        'google_ads_spend': 0.0,
        'lsa_spend': 0.0,
        'clicks': 0,
        'leads': 0,
        'campaigns': set()
    })

    for row in campaign_data:
        if row['year'] and row['month']:
            month_key = f"{row['year']}-{str(row['month']).zfill(2)}"
            amount = float(row['Amount (USD)'])
            monthly_totals[month_key]['total_spend'] += amount

            if row['platform'] == 'Google Ads':
                monthly_totals[month_key]['google_ads_spend'] += amount
                if row['subcategory'] == 'clicks':
                    # Extract click count from description
                    import re
                    match = re.search(r'(\d+)\s+clicks?', row['Description'])
                    if match:
                        monthly_totals[month_key]['clicks'] += int(match.group(1))
            elif row['platform'] == 'LSA':
                monthly_totals[month_key]['lsa_spend'] += amount
                if row['subcategory'] == 'leads':
                    # Extract lead count from description
                    match = re.search(r'(\d+)\s+leads?', row['Description'])
                    if match:
                        monthly_totals[month_key]['leads'] += int(match.group(1))

            if row['campaign_name']:
                monthly_totals[month_key]['campaigns'].add(row['campaign_name'])

    # Write aggregated monthly data
    monthly_file = output_dir / f"monthly_spend_{datetime.now().strftime('%Y%m%d')}.csv"

    with open(monthly_file, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['month', 'total_spend', 'google_ads_spend', 'lsa_spend',
                     'clicks', 'leads', 'campaign_count', 'cost_per_click', 'cost_per_lead']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for month in sorted(monthly_totals.keys()):
            data = monthly_totals[month]

            # Calculate metrics
            cpc = data['google_ads_spend'] / data['clicks'] if data['clicks'] > 0 else 0
            cpl = data['lsa_spend'] / data['leads'] if data['leads'] > 0 else 0

            writer.writerow({
                'month': month,
                'total_spend': round(data['total_spend'], 2),
                'google_ads_spend': round(data['google_ads_spend'], 2),
                'lsa_spend': round(data['lsa_spend'], 2),
                'clicks': data['clicks'],
                'leads': data['leads'],
                'campaign_count': len(data['campaigns']),
                'cost_per_click': round(cpc, 2),
                'cost_per_lead': round(cpl, 2)
            })

    # Also write detailed campaign data (excluding payments/balances)
    campaign_file = output_dir / f"campaign_details_{datetime.now().strftime('%Y%m%d')}.csv"

    with open(campaign_file, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['date', 'month', 'campaign_name', 'platform', 'amount', 'description']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for row in campaign_data:
            if row['year'] and row['month']:
                writer.writerow({
                    'date': row['start_date'] or row['Date'],
                    'month': f"{row['year']}-{str(row['month']).zfill(2)}",
                    'campaign_name': row['campaign_name'],
                    'platform': row['platform'],
                    'amount': row['Amount (USD)'],
                    'description': row['Description']
                })

    print_success(f"  Monthly aggregation: {monthly_file.name}")
    print_success(f"  Campaign details: {campaign_file.name}")

    return len(monthly_totals)

def export_website_format(curated_data, output_dir):
    """
    Export data as JSON for website/API consumption
    - Monthly summaries
    - Campaign performance metrics
    - Trend data
    """
    print("\n< Generating website/API export...")

    output_dir.mkdir(parents=True, exist_ok=True)

    # Build comprehensive monthly data
    monthly_data = defaultdict(lambda: {
        'year': None,
        'month': None,
        'month_name': None,
        'total_spend': 0.0,
        'google_ads': {
            'spend': 0.0,
            'clicks': 0,
            'campaigns': []
        },
        'lsa': {
            'spend': 0.0,
            'leads': 0
        },
        'credits': 0.0,
        'fees': 0.0,
        'payments': 0.0,
        'is_partial': False
    })

    for row in curated_data:
        if row['year'] and row['month']:
            month_key = f"{row['year']}-{str(row['month']).zfill(2)}"
            month_data = monthly_data[month_key]

            # Set basic month info
            if not month_data['year']:
                month_data['year'] = int(row['year'])
                month_data['month'] = int(row['month'])
                month_data['month_name'] = row['month_name']
                month_data['is_partial'] = row['is_partial_month'] == 'Yes'

            amount = float(row['Amount (USD)'])

            # Categorize transactions
            if row['category'] == 'campaign':
                month_data['total_spend'] += amount

                if row['platform'] == 'Google Ads':
                    month_data['google_ads']['spend'] += amount
                    if row['campaign_name'] and row['campaign_name'] not in month_data['google_ads']['campaigns']:
                        month_data['google_ads']['campaigns'].append(row['campaign_name'])

                    # Extract clicks
                    import re
                    match = re.search(r'(\d+)\s+clicks?', row['Description'])
                    if match:
                        month_data['google_ads']['clicks'] += int(match.group(1))

                elif row['platform'] == 'LSA':
                    month_data['lsa']['spend'] += amount
                    # Extract leads
                    match = re.search(r'(\d+)\s+leads?', row['Description'])
                    if match:
                        month_data['lsa']['leads'] += int(match.group(1))

            elif row['category'] == 'credit':
                month_data['credits'] += amount
            elif row['category'] == 'fee':
                month_data['fees'] += amount
            elif row['category'] == 'payment':
                month_data['payments'] += amount

    # Convert to list and sort
    monthly_list = []
    for month_key in sorted(monthly_data.keys()):
        data = monthly_data[month_key]

        # Calculate metrics
        data['google_ads']['spend'] = round(data['google_ads']['spend'], 2)
        data['google_ads']['cost_per_click'] = round(
            data['google_ads']['spend'] / data['google_ads']['clicks']
            if data['google_ads']['clicks'] > 0 else 0, 2
        )

        data['lsa']['spend'] = round(data['lsa']['spend'], 2)
        data['lsa']['cost_per_lead'] = round(
            data['lsa']['spend'] / data['lsa']['leads']
            if data['lsa']['leads'] > 0 else 0, 2
        )

        data['total_spend'] = round(data['total_spend'], 2)
        data['credits'] = round(data['credits'], 2)
        data['fees'] = round(data['fees'], 2)
        data['payments'] = round(data['payments'], 2)

        monthly_list.append(data)

    # Calculate summary statistics
    summary = {
        'generated_date': datetime.now().isoformat(),
        'data_range': {
            'start': monthly_list[0]['year'] if monthly_list else None,
            'end': monthly_list[-1]['year'] if monthly_list else None,
            'months_count': len(monthly_list)
        },
        'totals': {
            'all_time_spend': round(sum(m['total_spend'] for m in monthly_list), 2),
            'google_ads_spend': round(sum(m['google_ads']['spend'] for m in monthly_list), 2),
            'lsa_spend': round(sum(m['lsa']['spend'] for m in monthly_list), 2),
            'total_clicks': sum(m['google_ads']['clicks'] for m in monthly_list),
            'total_leads': sum(m['lsa']['leads'] for m in monthly_list)
        },
        'averages': {
            'monthly_spend': round(
                sum(m['total_spend'] for m in monthly_list if not m['is_partial']) /
                len([m for m in monthly_list if not m['is_partial']])
                if any(not m['is_partial'] for m in monthly_list) else 0, 2
            ),
            'cost_per_click': round(
                sum(m['google_ads']['spend'] for m in monthly_list) /
                sum(m['google_ads']['clicks'] for m in monthly_list)
                if sum(m['google_ads']['clicks'] for m in monthly_list) > 0 else 0, 2
            ),
            'cost_per_lead': round(
                sum(m['lsa']['spend'] for m in monthly_list) /
                sum(m['lsa']['leads'] for m in monthly_list)
                if sum(m['lsa']['leads'] for m in monthly_list) > 0 else 0, 2
            )
        }
    }

    # Write JSON files
    monthly_json = output_dir / f"monthly_data_{datetime.now().strftime('%Y%m%d')}.json"
    with open(monthly_json, 'w', encoding='utf-8') as f:
        json.dump({
            'summary': summary,
            'monthly_data': monthly_list
        }, f, indent=2, default=str)

    # Also create a simplified version for quick website display
    simple_json = output_dir / f"spend_summary_{datetime.now().strftime('%Y%m%d')}.json"
    simple_data = {
        'last_updated': datetime.now().isoformat(),
        'current_month': monthly_list[-1] if monthly_list else None,
        'last_12_months': monthly_list[-12:] if len(monthly_list) >= 12 else monthly_list,
        'year_to_date': [m for m in monthly_list if m['year'] == datetime.now().year]
    }

    with open(simple_json, 'w', encoding='utf-8') as f:
        json.dump(simple_data, f, indent=2, default=str)

    print_success(f"  Full monthly data: {monthly_json.name}")
    print_success(f"  Simple summary: {simple_json.name}")

    return len(monthly_list)

def export_internal_format(curated_data, output_dir):
    """
    Export complete data for internal finance use
    - All transaction details
    - Reconciliation information
    - Full audit trail
    """
    print("\n=! Generating internal finance export...")

    output_dir.mkdir(parents=True, exist_ok=True)

    # Full detail export with additional calculated fields
    detail_file = output_dir / f"complete_billing_detail_{datetime.now().strftime('%Y%m%d')}.csv"

    with open(detail_file, 'w', newline='', encoding='utf-8') as f:
        # Add additional fields for finance
        fieldnames = list(curated_data[0].keys()) if curated_data else []
        fieldnames.extend(['net_amount', 'running_balance', 'fiscal_quarter'])

        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        running_balance = 0.0

        for row in curated_data:
            # Calculate net amount (considering credits as negative)
            amount = float(row['Amount (USD)'])
            net_amount = amount

            # Update running balance (excluding balance rows)
            if row['category'] not in ['balance']:
                running_balance += amount

            # Determine fiscal quarter
            quarter = 'Q?'
            if row['month']:
                month = int(row['month'])
                if month <= 3:
                    quarter = 'Q1'
                elif month <= 6:
                    quarter = 'Q2'
                elif month <= 9:
                    quarter = 'Q3'
                else:
                    quarter = 'Q4'

            # Write enhanced row
            enhanced_row = dict(row)
            enhanced_row['net_amount'] = round(net_amount, 2)
            enhanced_row['running_balance'] = round(running_balance, 2)
            enhanced_row['fiscal_quarter'] = f"{row['year']}-{quarter}" if row['year'] else ''

            writer.writerow(enhanced_row)

    # Create reconciliation summary
    reconciliation_file = output_dir / f"reconciliation_summary_{datetime.now().strftime('%Y%m%d')}.csv"

    # Group by month for reconciliation
    monthly_recon = defaultdict(lambda: {
        'charges': 0.0,
        'payments': 0.0,
        'credits': 0.0,
        'fees': 0.0,
        'net_activity': 0.0
    })

    for row in curated_data:
        if row['year'] and row['month']:
            month_key = f"{row['year']}-{str(row['month']).zfill(2)}"
            amount = float(row['Amount (USD)'])

            if row['category'] == 'campaign':
                monthly_recon[month_key]['charges'] += amount
            elif row['category'] == 'payment':
                monthly_recon[month_key]['payments'] += amount
            elif row['category'] == 'credit':
                monthly_recon[month_key]['credits'] += amount
            elif row['category'] == 'fee':
                monthly_recon[month_key]['fees'] += amount

            if row['category'] not in ['balance']:
                monthly_recon[month_key]['net_activity'] += amount

    with open(reconciliation_file, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['month', 'charges', 'payments', 'credits', 'fees', 'net_activity', 'check_balance']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for month in sorted(monthly_recon.keys()):
            data = monthly_recon[month]

            # Check if charges + credits + fees H payments (should be close to 0)
            check_balance = data['charges'] + data['credits'] + data['fees'] + data['payments']

            writer.writerow({
                'month': month,
                'charges': round(data['charges'], 2),
                'payments': round(data['payments'], 2),
                'credits': round(data['credits'], 2),
                'fees': round(data['fees'], 2),
                'net_activity': round(data['net_activity'], 2),
                'check_balance': round(check_balance, 2)
            })

    print_success(f"  Complete detail: {detail_file.name}")
    print_success(f"  Reconciliation: {reconciliation_file.name}")

    return len(curated_data)

def generate_exports():
    """Main function to generate all export formats"""
    print_header("Generating Export Files")

    # Find latest curated file
    curated_file = get_latest_curated_file()

    if not curated_file:
        print_error("No curated master file found!")
        print("Please run 20_build_curated.py first")
        return False

    print(f"Using curated file: {curated_file.name}")

    # Read curated data
    curated_data = []
    with open(curated_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        curated_data = list(reader)

    print(f"Loaded {len(curated_data)} rows")

    # Generate exports
    results = {}

    try:
        # Looker Studio format
        results['looker'] = export_looker_format(curated_data, LOOKER_DIR)

        # Website/API format
        results['website'] = export_website_format(curated_data, WEBSITE_DIR)

        # Internal finance format
        results['internal'] = export_internal_format(curated_data, INTERNAL_DIR)

    except Exception as e:
        print_error(f"Export generation failed: {str(e)}")
        logger.error(f"Export generation failed: {str(e)}", exc_info=True)
        return False

    # Summary
    print_header("Export Summary")

    print(f"\n{Colors.BOLD}Files Generated:{Colors.END}")
    print(f"  Looker Studio: {results.get('looker', 0)} months aggregated")
    print(f"  Website/API: {results.get('website', 0)} months exported")
    print(f"  Internal Finance: {results.get('internal', 0)} rows processed")

    print(f"\n{Colors.BOLD}Output Locations:{Colors.END}")
    print(f"  =! {LOOKER_DIR}")
    print(f"  < {WEBSITE_DIR}")
    print(f"  =! {INTERNAL_DIR}")

    # Write export log
    log_data = {
        'timestamp': datetime.now().isoformat(),
        'source_file': str(curated_file),
        'rows_processed': len(curated_data),
        'exports_generated': {
            'looker': results.get('looker', 0),
            'website': results.get('website', 0),
            'internal': results.get('internal', 0)
        }
    }

    log_file = LOGS_DIR / f"export_summary_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(log_file, 'w') as f:
        json.dump(log_data, f, indent=2)

    print(f"\n Export log: {log_file.name}")

    return True

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(
        description="Generate export files from curated billing data"
    )
    parser.add_argument(
        '--format',
        choices=['looker', 'website', 'internal', 'all'],
        default='all',
        help='Specific format to export (default: all)'
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

    # Generate exports
    success = generate_exports()

    if success:
        print_success("\nEXPORTS GENERATED SUCCESSFULLY ")
    else:
        print_error("\nEXPORT GENERATION FAILED")

    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()