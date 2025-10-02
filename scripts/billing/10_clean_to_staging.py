#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
10_clean_to_staging.py - Clean raw CSV files and save to staging

This script performs basic cleaning operations on raw CSV files:
- Removes UTF-8 BOM markers
- Decodes HTML entities (&#39; � ', &amp; � &)
- Validates data structure
- Saves cleaned files to staging directory

Author: Trevor Brown
Repository: Google Ads Billing Pipeline
"""

import os
import sys
import csv
import codecs
from pathlib import Path
from datetime import datetime
import logging

# Add parent directory to path for imports
SCRIPT_DIR = Path(__file__).parent
sys.path.append(str(SCRIPT_DIR))

# Import cleaning functions
from cleaning_functions import clean_html_entities, clean_amount

# Setup paths
PROJECT_DIR = SCRIPT_DIR
DATA_DIR = PROJECT_DIR / "data"
RAW_DIR = DATA_DIR / "raw"
STAGING_DIR = DATA_DIR / "staging"
LOGS_DIR = PROJECT_DIR / "logs"

# Setup logging
LOGS_DIR.mkdir(exist_ok=True)
log_file = LOGS_DIR / f"cleaning_{datetime.now().strftime('%Y%m%d_%H%M%S')}.log"
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
    """Print a formatted header"""
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.BLUE}{message}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.END}\n")

def print_success(message):
    """Print a success message in green"""
    print(f"{Colors.GREEN} {message}{Colors.END}")
    logger.info(message)

def print_warning(message):
    """Print a warning message in yellow"""
    print(f"{Colors.YELLOW}� {message}{Colors.END}")
    logger.warning(message)

def print_error(message):
    """Print an error message in red"""
    print(f"{Colors.RED} {message}{Colors.END}")
    logger.error(message)

def remove_bom(file_path):
    """Remove UTF-8 BOM from file if present"""
    with open(file_path, 'rb') as f:
        raw_content = f.read()

    # Check for UTF-8 BOM (EF BB BF)
    if raw_content.startswith(codecs.BOM_UTF8):
        logger.info(f"Removing BOM from {file_path.name}")
        return raw_content[len(codecs.BOM_UTF8):].decode('utf-8')
    else:
        return raw_content.decode('utf-8')

def clean_csv_file(input_path, output_path):
    """Clean a single CSV file and save to staging"""
    try:
        # Remove BOM and read content
        content = remove_bom(input_path)

        # Parse CSV
        rows = list(csv.DictReader(content.splitlines()))

        if not rows:
            print_warning(f"No data found in {input_path.name}")
            return False

        # Expected columns
        expected_columns = {'Date', 'Description', 'Amount (USD)'}
        actual_columns = set(rows[0].keys())

        if not expected_columns.issubset(actual_columns):
            print_error(f"Missing columns in {input_path.name}")
            print(f"  Expected: {expected_columns}")
            print(f"  Found: {actual_columns}")
            return False

        # Clean each row
        cleaned_rows = []
        changes_made = 0

        for row_num, row in enumerate(rows, 1):
            cleaned_row = {}

            # Clean each field
            for field, value in row.items():
                if field == 'Description':
                    cleaned_value = clean_html_entities(value)
                    if cleaned_value != value:
                        changes_made += 1
                elif field == 'Amount (USD)':
                    cleaned_value = clean_amount(value)
                else:
                    cleaned_value = value

                cleaned_row[field] = cleaned_value

            cleaned_rows.append(cleaned_row)

        # Write cleaned data to staging
        output_path.parent.mkdir(parents=True, exist_ok=True)

        with open(output_path, 'w', newline='', encoding='utf-8') as f:
            if cleaned_rows:
                writer = csv.DictWriter(f, fieldnames=cleaned_rows[0].keys())
                writer.writeheader()
                writer.writerows(cleaned_rows)

        print_success(f"Cleaned {input_path.name} � {output_path.name}")
        if changes_made > 0:
            print(f"  Made {changes_made} HTML entity corrections")
        print(f"  Processed {len(cleaned_rows)} rows")

        return True

    except Exception as e:
        print_error(f"Failed to clean {input_path.name}: {str(e)}")
        logger.exception(f"Error cleaning {input_path.name}")
        return False

def main():
    """Main cleaning pipeline"""
    print_header("DATA CLEANING: RAW � STAGING")
    print(f"Raw directory: {RAW_DIR}")
    print(f"Staging directory: {STAGING_DIR}")

    # Create staging directory if it doesn't exist
    STAGING_DIR.mkdir(parents=True, exist_ok=True)

    # Get all CSV files from raw directory
    raw_files = sorted(RAW_DIR.glob("account_activities_*.csv"))

    if not raw_files:
        print_error("No raw CSV files found!")
        print(f"Looking in: {RAW_DIR}")
        return 1

    print(f"\nFound {len(raw_files)} raw files to process")

    # Track results
    successful = 0
    failed = 0

    # Process each file
    for raw_file in raw_files:
        output_file = STAGING_DIR / raw_file.name

        if clean_csv_file(raw_file, output_file):
            successful += 1
        else:
            failed += 1

    # Summary
    print_header("CLEANING SUMMARY")
    print(f"Total files processed: {len(raw_files)}")
    print_success(f"Successfully cleaned: {successful}")

    if failed > 0:
        print_error(f"Failed to clean: {failed}")
        return 1

    # List staging directory contents
    print(f"\nStaging directory contents:")
    staging_files = sorted(STAGING_DIR.glob("*.csv"))
    for f in staging_files:
        size = f.stat().st_size / 1024  # KB
        print(f"  • {f.name} ({size:.1f} KB)")

    print_success("\nCleaning stage completed successfully!")
    return 0

if __name__ == "__main__":
    sys.exit(main())