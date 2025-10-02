#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
validate_raw_functions.py - Core validation functions

Extracted functions from 00_validate_raw.py for testing purposes.
"""

import re
import csv
from datetime import datetime
from pathlib import Path

# Expected file pattern
FILE_PATTERN = re.compile(r'^account_activities_(\d{6})(_thru(\d{2}))?\.csv$')

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