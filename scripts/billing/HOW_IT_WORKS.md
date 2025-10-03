# How the Google Ads Billing Pipeline Works
**Visual Guide for Understanding the Data Flow**

This document explains how your Google Ads billing data flows from Google to your website dashboard.

---

## 🎯 The Big Picture

```
Google Ads → Download CSV → Put in Folder → Run Command → Website Updates
```

That's it! Everything in between happens automatically.

---

## 📊 Detailed Data Flow

### 1. You Download from Google Ads
```
[Google Ads Billing Page]
         ↓
[Download Transaction CSV]
         ↓
[Your Computer: Downloads Folder]
```

**What you get:**
- A CSV file (like a spreadsheet)
- Contains all billing transactions for the month
- Includes charges, credits, campaign names, click counts, lead counts

---

### 2. You Rename and Move the File
```
[Downloads/Transactions.csv]
         ↓
    [Rename to]
         ↓
[account_activities_202510.csv]
         ↓
    [Move to]
         ↓
[kab-dentist-2024/scripts/billing/data/raw/]
```

**Why rename?**
- The system needs a specific naming pattern to know what month it is
- Format: `account_activities_YYYYMM.csv`

---

### 3. You Run the Update Command
```
Terminal/Command Prompt
         ↓
[npm run billing:update]
         ↓
[Python scripts run automatically]
```

---

### 4. The Pipeline Processes Your Data (Automatic)

#### Step A: Validation
```
[00_validate_raw.py]
         ↓
Checks: ✓ File format correct?
        ✓ Dates make sense?
        ✓ No missing months?
        ✓ CSV structure valid?
         ↓
   [Pass ✅ / Fail ❌]
```

If validation fails, you'll see an error message telling you what's wrong.

---

#### Step B: Cleaning
```
[10_clean_to_staging.py]
         ↓
Fixes: • HTML codes like &#39; → '
       • Special characters
       • Removes BOM markers
         ↓
[Clean CSV files]
         ↓
   [Saved to staging/]
```

**What gets cleaned:**
- `&#39;` becomes `'` (apostrophe)
- `&amp;` becomes `&` (ampersand)
- Removes invisible characters that cause problems

---

#### Step C: Merging and Categorizing
```
[20_build_curated.py]
         ↓
Actions: 1. Merge all months together
         2. Categorize each transaction:
            • Google Ads spending
            • Local Services Ads (LSA)
            • Credits/refunds
            • Payments
            • Fees
         3. Calculate totals
         4. Count clicks and leads
         ↓
[Master dataset with all data]
         ↓
   [Saved to curated/]
```

**Transaction Categories:**

| Type | Example | What it means |
|------|---------|---------------|
| **Google Ads** | "Campaign: Keith Brown DDS, FAGD: 15 clicks" | Regular search ads spending |
| **LSA** | "Home Services Ads activity: 2 leads" | Local Services Ads leads |
| **Credit** | "Invalid activity - Original Invoice..." | Google refunding bad clicks |
| **Payment** | "Monthly charge: Visa •••• 3505" | Your payment to Google |
| **Fee** | Small bank charges | Processing fees |

---

#### Step D: Export for Website
```
[30_build_exports.py]
         ↓
Creates: 1. monthly_data_[date].json
            ↓
         [Website-ready format]

         2. spend_summary_[date].json
            ↓
         [Quick summary stats]

         3. CSV files for:
            • Looker Studio
            • Internal finance review
         ↓
   [Saved to exports/for_website/]
```

**Final JSON Structure:**
```json
{
  "summary": {
    "total_spend": 28644.05,
    "google_ads_spend": 10684.84,
    "lsa_spend": 17959.21,
    "total_clicks": 8428,
    "total_leads": 173
  },
  "monthly_data": [
    {
      "year": 2025,
      "month": 10,
      "total_spend": 1824.01,
      "google_ads": {...},
      "lsa": {...}
    },
    ...
  ]
}
```

---

### 5. Data Gets Copied to Website
```
[exports/for_website/monthly_data_[date].json]
         ↓
   [Manual copy command]
         ↓
[lib/data/google-ads-billing.json]
         ↓
   [Admin Dashboard reads this file]
```

**Note:** This step should be manual to ensure you review the data before it goes live.

---

### 6. You Build and Deploy
```
[npm run build]
         ↓
[Next.js builds static pages]
         ↓
[Vercel deployment]
         ↓
[Live website updated]
```

---

## 🗂️ File Organization

Here's where everything lives:

```
kab-dentist-2024/
├── scripts/billing/
│   ├── data/
│   │   ├── raw/                  ← You put CSV files here
│   │   │   ├── account_activities_202406.csv
│   │   │   ├── account_activities_202407.csv
│   │   │   └── ...
│   │   │
│   │   ├── staging/              ← Cleaned files (auto-generated)
│   │   │   └── [cleaned CSVs]
│   │   │
│   │   ├── curated/              ← Merged master data (auto-generated)
│   │   │   └── billing_curated_[date].csv
│   │   │
│   │   └── exports/              ← Final exports (auto-generated)
│   │       ├── for_website/
│   │       │   ├── monthly_data_[date].json  ← The important one!
│   │       │   └── spend_summary_[date].json
│   │       ├── for_looker/
│   │       └── for_internal/
│   │
│   ├── logs/                     ← Detailed processing logs
│   ├── run_pipeline.py           ← Main script that runs everything
│   └── [other Python files]      ← Individual processing steps
│
└── lib/data/
    └── google-ads-billing.json   ← Admin dashboard reads this
```

---

## 🔄 Complete Monthly Update Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. DOWNLOAD                                                 │
│    Google Ads → Export CSV                                  │
└────────────────────────────┬────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. PREPARE                                                  │
│    • Rename file to account_activities_YYYYMM.csv          │
│    • Move to scripts/billing/data/raw/                     │
└────────────────────────────┬────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. PROCESS                                                  │
│    Run: npm run billing:update                             │
│    ┌───────────────────────────────────────────────┐      │
│    │ → Validates CSV files                         │      │
│    │ → Cleans data                                 │      │
│    │ → Merges all months                           │      │
│    │ → Categorizes transactions                    │      │
│    │ → Generates JSON                              │      │
│    └───────────────────────────────────────────────┘      │
└────────────────────────────┬────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. UPDATE WEBSITE                                           │
│    Copy JSON to lib/data/google-ads-billing.json           │
└────────────────────────────┬────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. TEST (Optional)                                          │
│    npm run dev → Check http://localhost:3000/admin         │
└────────────────────────────┬────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. DEPLOY                                                   │
│    • npm run build                                          │
│    • git commit & push                                      │
│    • Vercel auto-deploys                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 💡 Key Points to Remember

### Complete vs Partial Month Files

**Complete Month:**
- `account_activities_202509.csv`
- Contains entire month (Sep 1-30)
- Use after month ends

**Partial Month:**
- `account_activities_202509_thru15.csv`
- Contains partial month (Sep 1-15)
- Use for mid-month updates

**What happens with both?**
- System automatically prefers complete files
- Safe to keep both; it won't double-count

---

### The Two Update Modes

**Full Mode** (`npm run billing:update`):
- Processes ALL files, even unchanged ones
- Takes longer (20-30 seconds)
- Use after adding new month or fixing data issues
- Recommended for safety

**Quick Mode** (`npm run billing:quick`):
- Only processes changed files
- Faster (5-10 seconds)
- Use when you know only one file changed
- Advanced users only

---

### Data Safety

**What's Backed Up:**
- ✅ Original CSV files in `data/raw/` (YOU manage these)
- ✅ Final JSON in `lib/data/` (Git-tracked)

**What's Temporary:**
- ⚠️ Files in `staging/`, `curated/`, `exports/` (can be regenerated)
- ⚠️ Log files (just for debugging)

**Golden Rule:** Always keep your original CSV files from Google Ads!

---

## 🎓 Technical Notes (For Developers)

### Why Python, Not JavaScript?

- CSV processing is more robust in Python
- Standard library has everything needed (no npm packages)
- Easier to debug data transformation issues
- Cross-platform compatible

### Script Dependencies

All scripts use only Python 3 standard library:
- `csv` - Reading/writing CSV files
- `json` - JSON export
- `pathlib` - File path handling
- `datetime` - Date parsing
- `re` - Pattern matching
- `collections` - Data structures

**No pip install needed!**

### Error Handling

Each step validates before proceeding:
- Step fails → Pipeline stops
- Error message shows exactly what went wrong
- Fix the issue and re-run (safe to re-run)

---

**Questions?** See `MONTHLY_UPDATE_GUIDE.md` for step-by-step instructions!

**Last Updated:** October 2, 2025
