# Monthly Google Ads Billing Update Guide
**Simple Step-by-Step Instructions (No Tech Knowledge Required)**

This guide shows you how to update your website's Google Ads billing data each month. Anyone can follow these steps!

---

## 📋 What This Does

Every month, you need to:
1. Download your billing data from Google Ads
2. Save it in the right folder
3. Run a simple command
4. Publish the updated website

The system automatically processes the data and updates your admin dashboard.

---

## 🔄 Monthly Update Steps

### Step 1: Download Billing Data from Google Ads

1. **Log into Google Ads** at [ads.google.com](https://ads.google.com)
2. Click **Billing** in the left menu
3. Click **Transactions**
4. Click **All Transactions**
5. **Set the date range:**
   - **For a complete month:** Select 1st day to last day of that month
   - **For mid-month update:** Select 1st day to today
6. Click the **Download** button (looks like a down arrow)
7. Select **CSV** format
8. The file will download to your computer (usually goes to Downloads folder)

### Step 2: Rename the File

Google gives the file a generic name. You need to rename it:

**For a complete month (after month ends):**
- Format: `account_activities_YYYYMM.csv`
- Example for September 2025: `account_activities_202509.csv`

**For a partial month (mid-month update):**
- Format: `account_activities_YYYYMM_thruDD.csv`
- Example for October 1st 2025: `account_activities_202510_thru01.csv`

**Year/Month/Day Codes:**
- `YYYY` = 4-digit year (2025)
- `MM` = 2-digit month (01 for January, 12 for December)
- `DD` = 2-digit day (01, 15, 31, etc.)

### Step 3: Add File to Project

1. **Find the raw data folder:**
   - Navigate to: `kab-dentist-2024/scripts/billing/data/raw/`

2. **Copy your renamed file** into this folder

3. **Clean up old files (optional):**
   - If you had a partial month file (like `account_activities_202509_thru26.csv`)
   - And now you have the complete month (like `account_activities_202509.csv`)
   - You can delete the partial file (the system will automatically use the complete one)

### Step 4: Run the Update

1. **Open Terminal** (on Mac) or **Command Prompt** (on Windows)

2. **Navigate to the project folder:**
   ```bash
   cd Desktop/2025/kab-dentist-2024
   ```

3. **Run the update command:**
   ```bash
   npm run billing:update
   ```

4. **Wait for it to finish** (takes about 10-30 seconds)
   - You'll see green checkmarks ✅ when each step completes
   - If you see red X's ❌, read the error message and fix the issue

### Step 5: Verify Everything Worked

After the update completes, check:

1. **Look for this message:**
   ```
   ✅ Pipeline completed successfully!
   ```

2. **Check the file was updated:**
   ```bash
   ls -lh lib/data/google-ads-billing.json
   ```
   - The date/time should be recent (just now)

3. **Copy the new data to the website:**
   ```bash
   cp scripts/billing/data/exports/for_website/monthly_data_*.json lib/data/google-ads-billing.json
   ```

### Step 6: Test Locally (Optional but Recommended)

1. **Start the local development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** and go to: `http://localhost:3000/admin`

3. **Check the Google Ads billing section** - you should see the new month's data

4. **Stop the server** by pressing `Ctrl+C` in Terminal

### Step 7: Deploy to Production

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **If the build succeeds**, push to GitHub/Vercel:
   ```bash
   git add .
   git commit -m "Update Google Ads billing data for [Month] [Year]"
   git push
   ```

3. **Vercel will automatically deploy** your changes (takes 2-5 minutes)

---

## 📅 When to Update

**Recommended Schedule:**

- **Mid-month check (around the 15th):** Get a partial snapshot
  - Example file: `account_activities_202510_thru15.csv`

- **End of month (after month closes):** Get the complete data
  - Example file: `account_activities_202510.csv`
  - Delete the partial file from earlier

**Why update mid-month?**
- See how your ads are performing
- Catch any issues early
- Track spending trends

---

## 🎯 Quick Reference

### File Naming Examples

| Situation | Filename Example |
|-----------|-----------------|
| Complete September 2025 | `account_activities_202509.csv` |
| Partial October 2025 (through 1st) | `account_activities_202510_thru01.csv` |
| Complete October 2025 | `account_activities_202510.csv` |
| Partial November 2025 (through 15th) | `account_activities_202511_thru15.csv` |

### Commands Cheat Sheet

```bash
# Navigate to project
cd Desktop/2025/kab-dentist-2024

# Full update (processes all files)
npm run billing:update

# Quick update (only processes changed files - faster)
npm run billing:quick

# Test locally
npm run dev

# Build for production
npm run build
```

---

## 🔍 What Happens Behind the Scenes

When you run `npm run billing:update`, the system automatically:

1. **Validates** - Checks that all CSV files are formatted correctly
2. **Cleans** - Removes weird characters and formatting issues
3. **Merges** - Combines all months into one master dataset
4. **Categorizes** - Separates Google Ads vs Local Services Ads spending
5. **Exports** - Creates a clean JSON file for the website
6. **Updates** - Copies the data to where the admin dashboard can find it

**You don't need to understand how this works - just follow the steps!**

---

## ❓ Troubleshooting

### "No CSV files found"
- **Problem:** Files aren't in the right folder
- **Solution:** Make sure files are in `scripts/billing/data/raw/`

### "Invalid filename format"
- **Problem:** File isn't named correctly
- **Solution:** Double-check the naming format (see examples above)

### "Dashboard shows old data"
- **Problem:** The JSON file wasn't copied
- **Solution:** Run this command:
  ```bash
  cp scripts/billing/data/exports/for_website/monthly_data_*.json lib/data/google-ads-billing.json
  ```

### "Build failed" or red errors
- **Problem:** There might be a code issue
- **Solution:** Take a screenshot of the error and contact technical support

---

## 📞 Need Help?

If you get stuck:

1. **Read the error message carefully** - it often tells you what's wrong
2. **Check the log files** in `scripts/billing/logs/` - they have detailed info
3. **Contact technical support** with:
   - Screenshot of the error
   - Which step you were on
   - The file name you're trying to process

---

## ✅ Success Checklist

After each monthly update, verify:

- [ ] Downloaded CSV from Google Ads
- [ ] Renamed file correctly
- [ ] Copied file to `scripts/billing/data/raw/`
- [ ] Ran `npm run billing:update` successfully
- [ ] Saw green checkmarks ✅ for all steps
- [ ] Copied JSON to `lib/data/google-ads-billing.json`
- [ ] Tested locally (optional but recommended)
- [ ] Built and deployed to production
- [ ] Checked admin dashboard shows new data

---

**Last Updated:** October 2, 2025
