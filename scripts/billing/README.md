# Google Ads Billing Pipeline

Processes monthly Google Ads billing CSVs and generates dashboard data.

## Monthly Update Process

### 1. Export CSV from Google Ads
- Go to: **Google Ads → Billing → Transactions → All Transactions**
- Set date range: **1st → last day of month**
- Export as CSV
- Save to your computer

### 2. Rename the File
Google exports with generic names. Rename to:
- **Complete month**: `account_activities_YYYYMM.csv`
  - Example: `account_activities_202510.csv`
- **Partial month**: `account_activities_YYYYMM_thruDD.csv`
  - Example: `account_activities_202510_thru15.csv`

### 3. Add to Project
Copy the renamed CSV to: `scripts/billing/data/raw/`

### 4. Run the Pipeline
```bash
# Full mode (processes all files)
npm run billing:update

# Quick mode (only processes changed files)
npm run billing:quick
```

### 5. Deploy
```bash
npm run build
# Then deploy to Vercel
```

## How It Works

The pipeline runs 4 steps automatically:

1. **Validate** (`00_validate_raw.py`) - Checks CSV format and data integrity
2. **Clean** (`10_clean_to_staging.py`) - Removes HTML entities and BOM markers
3. **Curate** (`20_build_curated.py`) - Merges data and categorizes transactions
4. **Export** (`30_build_exports.py`) - Generates JSON for dashboard

Output: `data/exports/for_website/monthly_data_YYYYMMDD.json`

This JSON is automatically copied to `/lib/data/google-ads-billing.json` and used by the admin dashboard.

## Data Storage

- **data/raw/** - Original CSV files (gitignored)
- **data/staging/** - Cleaned CSVs (gitignored)
- **data/curated/** - Merged & categorized data (gitignored)
- **data/exports/** - Final JSON files (gitignored)

All data files are gitignored except the final dashboard JSON in `/lib/data/`.

## Troubleshooting

**Pipeline fails with "No CSV files":**
- Check files are in `scripts/billing/data/raw/`
- Ensure filenames match: `account_activities_YYYYMM.csv`

**Dashboard shows old data:**
- Run `npm run billing:update`
- Check `/lib/data/google-ads-billing.json` updated
- Rebuild: `npm run build`

**Need Python?**
- Uses Python 3.x (built-in on macOS)
- No external packages required
- All imports are from Python standard library
