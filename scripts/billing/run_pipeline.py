#!/usr/bin/env python3
"""
Google Ads Billing Pipeline Wrapper
Runs all processing steps in order to generate dashboard data

Usage:
    python3 run_pipeline.py           # Quick mode (only changed files)
    python3 run_pipeline.py --full    # Full mode (all files)
"""

import sys
import subprocess
from pathlib import Path

# Get the directory containing this script
SCRIPT_DIR = Path(__file__).parent

def run_script(script_name, args=[]):
    """Run a Python script and return success status"""
    script_path = SCRIPT_DIR / script_name
    cmd = [sys.executable, str(script_path)] + args

    print(f"\n{'='*60}")
    print(f"Running: {script_name}")
    print(f"{'='*60}")

    result = subprocess.run(cmd, cwd=SCRIPT_DIR)
    return result.returncode == 0

def main():
    """Run the complete billing data pipeline"""

    # Parse arguments
    full_mode = '--full' in sys.argv
    mode_args = ['--full'] if full_mode else []

    mode_str = "FULL" if full_mode else "QUICK"
    print(f"\n🚀 Starting Google Ads Billing Pipeline [{mode_str} MODE]")
    print(f"Working directory: {SCRIPT_DIR}")

    # Step 1: Validate raw CSVs
    if not run_script('00_validate_raw.py', mode_args):
        print("\n❌ Validation failed! Fix errors before continuing.")
        return 1

    # Step 2: Clean to staging
    if not run_script('10_clean_to_staging.py', mode_args):
        print("\n❌ Cleaning failed!")
        return 1

    # Step 3: Build curated dataset (no --full flag support)
    if not run_script('20_build_curated.py'):
        print("\n❌ Curation failed!")
        return 1

    # Step 4: Build exports (JSON for dashboard) (no --full flag support)
    if not run_script('30_build_exports.py'):
        print("\n❌ Export generation failed!")
        return 1

    print(f"\n{'='*60}")
    print("✅ Pipeline completed successfully!")
    print(f"{'='*60}")
    print("\nGenerated files:")
    print(f"  → {SCRIPT_DIR}/data/exports/for_website/")
    print("\nNext steps:")
    print("  1. Copy JSON to /lib/data/ for Next.js dashboard")
    print("  2. Run: npm run build")

    return 0

if __name__ == '__main__':
    sys.exit(main())
