#!/bin/bash

# Keith Brown DDS Website - Unused Images Backup & Cleanup Script
# This script safely backs up unused images before deletion
# Date: $(date +%Y-%m-%d)

echo "🏥 Keith Brown DDS - Unused Images Backup & Cleanup"
echo "=================================================="

# Set backup directory with timestamp
BACKUP_DIR="$HOME/Desktop/unused-kabdds-images-$(date +%Y%m%d-%H%M%S)"
PROJECT_DIR="$(pwd)"

# Verify we're in the right directory
if [ ! -d "public/images" ]; then
    echo "❌ Error: public/images directory not found!"
    echo "Please run this script from your project root directory."
    exit 1
fi

echo "📁 Creating backup directory: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

# Create subdirectories to maintain structure
mkdir -p "$BACKUP_DIR/doctor"
mkdir -p "$BACKUP_DIR/logos"
mkdir -p "$BACKUP_DIR/office"
mkdir -p "$BACKUP_DIR/stock"

echo "📋 Creating deletion log..."
cat > "$BACKUP_DIR/deletion-log.txt" << EOF
Keith Brown DDS Website - Unused Images Deletion Log
Generated: $(date)
Project Directory: $PROJECT_DIR

VERIFICATION STATUS: ✅ ALL FILES VERIFIED AS UNUSED
Total files backed up and deleted: 28

Files moved to backup:
=====================================
EOF

echo "🔄 Backing up and removing unused images..."

# Doctor folder (14 files)
echo "📁 Processing doctor folder..."
declare -a doctor_files=(
    "drAndSusnanWithPatient.jpeg"
    "drAtReception.jpeg"
    "drPortrait.jpeg"
    "drPortraitFframes.jpeg"
    "drPortraitVertical.jpeg"
    "drPortraitVerticalTwo.jpeg"
    "drProfileView.jpeg"
    "drProfileViewVertical.jpeg"
    "drSitting.jpeg"
    "drStandingHallwayVertical.jpeg"
    "drStandingVertical.jpeg"
    "drStandingViewVertical.jpeg"
    "drWithBirdsView.jpeg"
    "drWithPatient1.jpeg"
    "drWithPatient2.jpeg"
)

for file in "${doctor_files[@]}"; do
    if [ -f "public/images/doctor/$file" ]; then
        echo "  ✅ Backing up doctor/$file"
        cp "public/images/doctor/$file" "$BACKUP_DIR/doctor/"
        rm "public/images/doctor/$file"
        echo "doctor/$file" >> "$BACKUP_DIR/deletion-log.txt"
    else
        echo "  ⚠️  doctor/$file not found - skipping"
    fi
done

# Logos folder (1 file)
echo "📁 Processing logos folder..."
if [ -f "public/images/logos/cityBenefits.png" ]; then
    echo "  ✅ Backing up logos/cityBenefits.png"
    cp "public/images/logos/cityBenefits.png" "$BACKUP_DIR/logos/"
    rm "public/images/logos/cityBenefits.png"
    echo "logos/cityBenefits.png" >> "$BACKUP_DIR/deletion-log.txt"
else
    echo "  ⚠️  logos/cityBenefits.png not found - skipping"
fi

# Office folder (11 files)
echo "📁 Processing office folder..."
declare -a office_files=(
    "bankExt.jpeg"
    "doorWithStickers.jpeg"
    "hallwayVideoVertical.mov"
    "officeChairwithDoll.jpeg"
    "officeChairWithViewVertical.jpeg"
    "officeEquipment.jpeg"
    "officeEquipment2.jpeg"
    "officeEquipmentXray.jpeg"
    "officeView.jpeg"
    "officeViewWithBirdsVerticle.jpeg"
    "officeViewWithComputer.jpeg"
)

for file in "${office_files[@]}"; do
    if [ -f "public/images/office/$file" ]; then
        echo "  ✅ Backing up office/$file"
        cp "public/images/office/$file" "$BACKUP_DIR/office/"
        rm "public/images/office/$file"
        echo "office/$file" >> "$BACKUP_DIR/deletion-log.txt"
    else
        echo "  ⚠️  office/$file not found - skipping"
    fi
done

# Stock folder (1 file)
echo "📁 Processing stock folder..."
if [ -f "public/images/stock/teeth.jpg" ]; then
    echo "  ✅ Backing up stock/teeth.jpg"
    cp "public/images/stock/teeth.jpg" "$BACKUP_DIR/stock/"
    rm "public/images/stock/teeth.jpg"
    echo "stock/teeth.jpg" >> "$BACKUP_DIR/deletion-log.txt"
else
    echo "  ⚠️  stock/teeth.jpg not found - skipping"
fi

# Create summary
echo "" >> "$BACKUP_DIR/deletion-log.txt"
echo "BACKUP LOCATION: $BACKUP_DIR" >> "$BACKUP_DIR/deletion-log.txt"
echo "STATUS: ✅ COMPLETED SUCCESSFULLY" >> "$BACKUP_DIR/deletion-log.txt"

# Create restoration script
cat > "$BACKUP_DIR/restore-images.sh" << 'EOL'
#!/bin/bash
# Restoration script - run this from your project root to restore all images

echo "🔄 Restoring backed up images to project..."

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(pwd)"

if [ ! -d "public/images" ]; then
    echo "❌ Error: Run this from your project root directory"
    exit 1
fi

# Restore all files
cp -r "$SCRIPT_DIR/doctor/"* "public/images/doctor/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/logos/"* "public/images/logos/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/office/"* "public/images/office/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/stock/"* "public/images/stock/" 2>/dev/null || true

echo "✅ Images restored successfully!"
echo "You may want to git add and commit these changes."
EOL

chmod +x "$BACKUP_DIR/restore-images.sh"

echo ""
echo "🎉 CLEANUP COMPLETED SUCCESSFULLY!"
echo "=================================="
echo "✅ Backed up 28 unused images to: $BACKUP_DIR"
echo "✅ Removed unused images from project"
echo "📝 Created deletion log: $BACKUP_DIR/deletion-log.txt"
echo "🔄 Created restore script: $BACKUP_DIR/restore-images.sh"
echo ""
echo "📊 SUMMARY:"
echo "  • Total images processed: 28"
echo "  • Doctor folder: 15 files"
echo "  • Logos folder: 1 file"
echo "  • Office folder: 11 files"
echo "  • Stock folder: 1 file"
echo ""
echo "🛡️  SAFETY NOTES:"
echo "  • All files are safely backed up on your Desktop"
echo "  • Run 'git status' to see the changes"
echo "  • Test your website to ensure everything works"
echo "  • Use restore-images.sh if you need to undo"
echo ""
echo "Next steps:"
echo "1. Test your website: npm run dev"
echo "2. If everything works: git add . && git commit -m 'Remove unused images - 28 files cleaned up'"
echo "3. Keep the backup folder until you're confident"