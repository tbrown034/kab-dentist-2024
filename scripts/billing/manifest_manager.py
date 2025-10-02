#!/usr/bin/env python3
"""
Manifest Manager for Google Ads Billing Pipeline
Tracks file changes to enable incremental processing
"""

import json
import hashlib
import os
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional, Tuple

class ManifestManager:
    """Manages the pipeline manifest for tracking file changes"""

    def __init__(self, project_dir: Path):
        self.project_dir = project_dir
        self.manifest_path = project_dir / "data" / "manifest.json"
        self.manifest = self.load_manifest()

    def load_manifest(self) -> Dict:
        """Load existing manifest or create new one"""
        if self.manifest_path.exists():
            with open(self.manifest_path, 'r') as f:
                return json.load(f)
        return {
            "version": "1.0",
            "last_run": None,
            "files_processed": {},
            "pipeline_state": {
                "last_complete_month": None,
                "total_spend": 0,
                "months_processed": 0
            }
        }

    def save_manifest(self):
        """Save manifest to disk"""
        self.manifest["last_run"] = datetime.now().isoformat()

        # Ensure directory exists
        self.manifest_path.parent.mkdir(parents=True, exist_ok=True)

        with open(self.manifest_path, 'w') as f:
            json.dump(self.manifest, f, indent=2, default=str)

    def get_file_hash(self, file_path: Path) -> str:
        """Calculate SHA256 hash of file contents"""
        sha256_hash = hashlib.sha256()
        with open(file_path, "rb") as f:
            for byte_block in iter(lambda: f.read(4096), b""):
                sha256_hash.update(byte_block)
        return sha256_hash.hexdigest()

    def is_partial_file(self, filename: str) -> bool:
        """Check if file is a partial month"""
        return '_thru' in filename.lower() or 'thru' in filename.lower()

    def get_month_key(self, filename: str) -> str:
        """Extract month key from filename (e.g., '202509')"""
        # Remove extension and prefix
        name = Path(filename).stem
        # Extract YYYYMM pattern
        for part in name.split('_'):
            if part.isdigit() and len(part) == 6:
                return part
        return ""

    def check_file_changes(self, raw_dir: Path) -> Dict[str, List[Path]]:
        """
        Check for file changes since last manifest
        Returns dict with: new, modified, unchanged, replaced_partials
        """
        changes = {
            "new": [],
            "modified": [],
            "unchanged": [],
            "replaced_partials": []
        }

        # Get all CSV files in raw directory
        raw_files = sorted(raw_dir.glob("account_activities_*.csv"))

        for file_path in raw_files:
            filename = file_path.name

            # Skip backup files
            if '.backup' in filename:
                continue

            current_hash = self.get_file_hash(file_path)
            current_size = file_path.stat().st_size
            current_mtime = datetime.fromtimestamp(file_path.stat().st_mtime)
            is_partial = self.is_partial_file(filename)
            month_key = self.get_month_key(filename)

            # Check if we've seen this file before
            if filename in self.manifest["files_processed"]:
                stored_info = self.manifest["files_processed"][filename]

                if stored_info["hash"] == current_hash:
                    changes["unchanged"].append(file_path)
                else:
                    changes["modified"].append(file_path)
            else:
                # Check if this is replacing a partial
                if not is_partial:
                    # Look for existing partial for this month
                    for existing_file, info in self.manifest["files_processed"].items():
                        if (self.get_month_key(existing_file) == month_key and
                            self.is_partial_file(existing_file)):
                            changes["replaced_partials"].append((file_path, existing_file))
                            break
                    else:
                        changes["new"].append(file_path)
                else:
                    changes["new"].append(file_path)

        return changes

    def update_file_entry(self, file_path: Path, metadata: Dict = None):
        """Update manifest entry for a file"""
        filename = file_path.name

        self.manifest["files_processed"][filename] = {
            "hash": self.get_file_hash(file_path),
            "size": file_path.stat().st_size,
            "modified": datetime.fromtimestamp(file_path.stat().st_mtime).isoformat(),
            "processed": datetime.now().isoformat(),
            "is_partial": self.is_partial_file(filename),
            "month_key": self.get_month_key(filename)
        }

        # Add any additional metadata
        if metadata:
            self.manifest["files_processed"][filename].update(metadata)

    def remove_file_entry(self, filename: str):
        """Remove a file from the manifest"""
        if filename in self.manifest["files_processed"]:
            del self.manifest["files_processed"][filename]

    def update_pipeline_state(self, state: Dict):
        """Update overall pipeline state"""
        self.manifest["pipeline_state"].update(state)

    def get_files_to_process(self, raw_dir: Path) -> List[Path]:
        """Get list of files that need processing"""
        changes = self.check_file_changes(raw_dir)

        files_to_process = []
        files_to_process.extend(changes["new"])
        files_to_process.extend(changes["modified"])

        # Handle replaced partials
        for complete_file, partial_file in changes["replaced_partials"]:
            files_to_process.append(complete_file)
            # Remove the partial from manifest
            self.remove_file_entry(partial_file)

        return sorted(files_to_process)

    def needs_processing(self, raw_dir: Path) -> bool:
        """Check if any files need processing"""
        changes = self.check_file_changes(raw_dir)
        return bool(changes["new"] or changes["modified"] or changes["replaced_partials"])

    def get_summary(self, raw_dir: Path) -> Dict:
        """Get summary of changes"""
        changes = self.check_file_changes(raw_dir)

        return {
            "total_files": len(list(raw_dir.glob("account_activities_*.csv"))),
            "new_files": len(changes["new"]),
            "modified_files": len(changes["modified"]),
            "unchanged_files": len(changes["unchanged"]),
            "replaced_partials": len(changes["replaced_partials"]),
            "needs_processing": self.needs_processing(raw_dir),
            "last_run": self.manifest.get("last_run", "Never")
        }

    def print_summary(self, raw_dir: Path):
        """Print a summary of changes"""
        summary = self.get_summary(raw_dir)
        changes = self.check_file_changes(raw_dir)

        print("\n[94m============================================================[0m")
        print("[94mManifest Check Summary[0m")
        print("[94m============================================================[0m")

        print(f"\nLast pipeline run: {summary['last_run']}")
        print(f"Total files found: {summary['total_files']}")

        if summary['needs_processing']:
            print("\n[93mChanges detected:[0m")
            if changes["new"]:
                print(f"  • New files: {len(changes['new'])}")
                for f in changes["new"]:
                    print(f"    - {f.name}")

            if changes["modified"]:
                print(f"  • Modified files: {len(changes['modified'])}")
                for f in changes["modified"]:
                    print(f"    - {f.name}")

            if changes["replaced_partials"]:
                print(f"  • Replaced partials: {len(changes['replaced_partials'])}")
                for complete, partial in changes["replaced_partials"]:
                    print(f"    - {complete.name} replaces {partial}")

            print(f"\n[92m➜ {len(self.get_files_to_process(raw_dir))} files need processing[0m")
        else:
            print("\n[92m✓ No changes detected - all files up to date[0m")

        if changes["unchanged"]:
            print(f"\nUnchanged files (will be skipped): {len(changes['unchanged'])}")


def main():
    """Test the manifest manager"""
    from pathlib import Path

    project_dir = Path(__file__).parent
    raw_dir = project_dir / "data" / "raw"

    manager = ManifestManager(project_dir)
    manager.print_summary(raw_dir)

    if manager.needs_processing(raw_dir):
        files = manager.get_files_to_process(raw_dir)
        print(f"\nFiles to process: {[f.name for f in files]}")
    else:
        print("\nNo processing needed!")


if __name__ == "__main__":
    main()