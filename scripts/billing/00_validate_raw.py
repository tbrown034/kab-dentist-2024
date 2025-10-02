#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
00_validate_raw.py - Validate raw Google Ads billing CSV files

This script validates the integrity and consistency of raw billing data files
before they enter the processing pipeline.

Author: Trevor Brown
Repository: Google Ads Billing Pipeline
"""

import os
import sys
import csv
import re
from datetime import datetime, timedelta
from pathlib import Path
from collections import defaultdict
import json
import argparse

# Add manifest manager
sys.path.insert(0, str(Path(__file__).parent))
from manifest_manager import ManifestManager

# Configuration
DATA_DIR = Path(__file__).parent / "data"
RAW_DIR = DATA_DIR / "raw"
LOGS_DIR = Path(__file__).parent / "logs"

# Expected file pattern
FILE_PATTERN = re.compile(r'^account_activities_(\d{6})(_thru(\d{2}))?\.csv$')

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
    print(f"{Colors.YELLOW}� {message}{Colors.END}")

def print_error(message):
    """Print error message in red"""
    print(f"{Colors.RED} {message}{Colors.END}")

def validate_filename(filename):
    """
    Validate filename follows expected pattern
    Returns: (is_valid, year_month, is_partial, day_if_partial)
    """
    match = FILE_PATTERN.match(filename)
    if not match:
        return False, None, False, None

    year_month = match.group(1)
    is_partial = match.group(2) is not None
    partial_day = match.group(3) if is_partial else None

    return True, year_month, is_partial, partial_day

def check_utf8_bom(filepath):
    """Check if file starts with UTF-8 BOM"""
    with open(filepath, 'rb') as f:
        first_bytes = f.read(3)
        return first_bytes == b'\xef\xbb\xbf'

def validate_csv_structure(filepath):
    """
    Validate CSV structure and return details
    Returns: (is_valid, num_columns, headers, num_rows, issues)
    """
    issues = []

    try:
        # First check for BOM and read accordingly
        has_bom = check_utf8_bom(filepath)
        encoding = 'utf-8-sig' if has_bom else 'utf-8'

        with open(filepath, 'r', encoding=encoding) as f:
            reader = csv.reader(f)

            # Check headers
            try:
                headers = next(reader)
            except StopIteration:
                return False, 0, [], 0, ["Empty file"]

            # Expected headers
            expected_headers = ["Date", "Description", "Amount (USD)"]
            if headers != expected_headers:
                issues.append(f"Unexpected headers: {headers}")

            # Count rows and check consistency
            row_count = 0
            for row_num, row in enumerate(reader, start=2):
                row_count += 1
                if len(row) != len(headers):
                    issues.append(f"Row {row_num} has {len(row)} columns, expected {len(headers)}")

            is_valid = len(issues) == 0
            return is_valid, len(headers), headers, row_count, issues

    except Exception as e:
        return False, 0, [], 0, [f"Error reading file: {str(e)}"]

def check_date_continuity(files_data):
    """
    Check for gaps in monthly coverage
    Returns: (missing_months, duplicate_months)
    """
    # Extract year-month from all files (excluding partials for duplicates check)
    complete_months = set()
    all_months = set()

    for filename, data in files_data.items():
        if data['is_valid']:
            year_month = data['year_month']
            all_months.add(year_month)
            if not data['is_partial']:
                complete_months.add(year_month)

    if not all_months:
        return [], []

    # Convert to dates for continuity check
    month_dates = []
    for ym in all_months:
        try:
            year = int(ym[:4])
            month = int(ym[4:6])
            month_dates.append(datetime(year, month, 1))
        except:
            continue

    if not month_dates:
        return [], []

    month_dates.sort()

    # Find gaps
    missing_months = []
    for i in range(len(month_dates) - 1):
        current = month_dates[i]
        next_month = month_dates[i + 1]

        # Calculate expected next month
        if current.month == 12:
            expected = datetime(current.year + 1, 1, 1)
        else:
            expected = datetime(current.year, current.month + 1, 1)

        # Check for gap
        while expected < next_month:
            missing_months.append(expected.strftime("%Y%m"))
            if expected.month == 12:
                expected = datetime(expected.year + 1, 1, 1)
            else:
                expected = datetime(expected.year, expected.month + 1, 1)

    # Find duplicate months (complete + partial for same month)
    duplicate_months = []
    for filename, data in files_data.items():
        if data['is_valid'] and data['is_partial']:
            base_month = data['year_month']
            # Check if there's also a complete file for this month
            for other_file, other_data in files_data.items():
                if (other_data['is_valid'] and
                    not other_data['is_partial'] and
                    other_data['year_month'] == base_month):
                    duplicate_months.append(base_month)
                    break

    return missing_months, duplicate_months

def main():
    """Main validation routine"""
    # Parse arguments
    parser = argparse.ArgumentParser(description='Validate Google Ads billing CSV files')
    parser.add_argument('--quick', action='store_true',
                        help='Quick mode: only validate changed files using manifest')
    parser.add_argument('--full', action='store_true',
                        help='Full mode: validate all files regardless of manifest')
    parser.add_argument('--update-manifest', action='store_true', default=True,
                        help='Update manifest after validation (default: True)')
    args = parser.parse_args()

    print_header("Google Ads Billing Data Validation")
    print(f"Validating files in: {RAW_DIR}")

    # Create logs directory if it doesn't exist
    LOGS_DIR.mkdir(exist_ok=True)

    # Initialize manifest manager
    manifest = ManifestManager(Path(__file__).parent)

    # Check for changes if not in full mode
    if not args.full:
        manifest.print_summary(RAW_DIR)

        if not manifest.needs_processing(RAW_DIR):
            print_success("\n✓ No changes detected - skipping validation")
            print("Use --full flag to force validation of all files")
            return 0

        # Get only files that need processing
        csv_files = manifest.get_files_to_process(RAW_DIR)
        print(f"\n[92mValidating {len(csv_files)} changed files[0m")
    else:
        print("\n[93mFull mode: validating all files[0m")
        csv_files = list(RAW_DIR.glob("*.csv"))

    if not csv_files:
        print_error(f"No CSV files to process")
        return 0

    print(f"\nFound {len(csv_files)} CSV files to validate")

    # Initialize counters and storage
    total_files = 0
    valid_files = 0
    issues_found = []
    files_data = {}

    # Validate each file
    print_header("File Validation")

    for filepath in sorted(csv_files):
        filename = filepath.name
        total_files += 1
        file_issues = []

        print(f"\n{Colors.BOLD}Checking: {filename}{Colors.END}")

        # Validate filename
        is_valid_name, year_month, is_partial, partial_day = validate_filename(filename)

        if not is_valid_name:
            print_error(f"  Invalid filename format")
            file_issues.append("Invalid filename format")
        else:
            if is_partial:
                print(f"  =� Partial month file through day {partial_day}")
            else:
                print(f"  =� Complete month: {year_month[:4]}-{year_month[4:6]}")

        # Check UTF-8 BOM
        has_bom = check_utf8_bom(filepath)
        if has_bom:
            print_success(f"  UTF-8 BOM present (expected)")
        else:
            print_warning(f"  No UTF-8 BOM found (unusual)")
            file_issues.append("Missing UTF-8 BOM")

        # Validate CSV structure
        is_valid_csv, num_cols, headers, num_rows, csv_issues = validate_csv_structure(filepath)

        if is_valid_csv:
            print_success(f"  Valid CSV structure: {num_cols} columns, {num_rows} data rows")
        else:
            print_error(f"  CSV structure issues:")
            for issue in csv_issues:
                print_error(f"    - {issue}")
                file_issues.extend(csv_issues)

        # Check file size
        file_size = filepath.stat().st_size
        if file_size == 0:
            print_error(f"  Empty file!")
            file_issues.append("Empty file")
        elif file_size < 100:
            print_warning(f"  Very small file: {file_size} bytes")
            file_issues.append(f"Suspiciously small: {file_size} bytes")
        else:
            print_success(f"  File size: {file_size:,} bytes")

        # Store file data
        files_data[filename] = {
            'is_valid': is_valid_name and is_valid_csv,
            'year_month': year_month,
            'is_partial': is_partial,
            'partial_day': partial_day,
            'has_bom': has_bom,
            'num_rows': num_rows,
            'issues': file_issues
        }

        if len(file_issues) == 0:
            valid_files += 1
            print_success(f"  File passed all checks")
        else:
            issues_found.extend([(filename, issue) for issue in file_issues])

    # Check date continuity
    print_header("Date Continuity Check")

    missing_months, duplicate_months = check_date_continuity(files_data)

    if missing_months:
        print_warning(f"Missing months detected:")
        for month in missing_months:
            print(f"  - {month[:4]}-{month[4:6]}")
    else:
        print_success("No gaps in monthly coverage")

    if duplicate_months:
        print_warning(f"Months with both complete and partial files:")
        for month in duplicate_months:
            print(f"  - {month[:4]}-{month[4:6]}")

    # Summary
    print_header("Validation Summary")

    print(f"\n{Colors.BOLD}Statistics:{Colors.END}")
    print(f"  Total files: {total_files}")
    print(f"  Valid files: {valid_files}")
    print(f"  Files with issues: {total_files - valid_files}")

    # Date range
    valid_months = [d['year_month'] for d in files_data.values() if d['is_valid']]
    if valid_months:
        min_month = min(valid_months)
        max_month = max(valid_months)
        print(f"  Date range: {min_month[:4]}-{min_month[4:6]} to {max_month[:4]}-{max_month[4:6]}")

    # Overall result
    print(f"\n{Colors.BOLD}Overall Result:{Colors.END}")
    if valid_files == total_files and not missing_months:
        print_success("ALL VALIDATIONS PASSED ")
        exit_code = 0
    elif valid_files == total_files:
        print_warning("Files valid but date gaps detected")
        exit_code = 0
    else:
        print_error(f"VALIDATION FAILED - {len(issues_found)} issues found")
        exit_code = 1

    # Write detailed log
    log_file = LOGS_DIR / f"validation_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    log_data = {
        'timestamp': datetime.now().isoformat(),
        'summary': {
            'total_files': total_files,
            'valid_files': valid_files,
            'issues_count': len(issues_found)
        },
        'files': files_data,
        'missing_months': missing_months,
        'duplicate_months': duplicate_months,
        'issues': [{'file': f, 'issue': i} for f, i in issues_found]
    }

    with open(log_file, 'w') as f:
        json.dump(log_data, f, indent=2)

    print(f"\n=� Detailed log written to: {log_file}")

    # Update manifest if validation was successful and update is enabled
    if args.update_manifest and exit_code == 0:
        print("\n[94mUpdating manifest...[0m")
        for filepath in csv_files:
            if filepath.name in files_data and files_data[filepath.name]['is_valid']:
                manifest.update_file_entry(filepath, {
                    'validated': True,
                    'rows': files_data[filepath.name]['num_rows']
                })
        manifest.save_manifest()
        print_success("Manifest updated successfully")

    return exit_code

if __name__ == "__main__":
    sys.exit(main())