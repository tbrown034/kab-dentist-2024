"use client";

import { useState, useEffect } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { telNumber, displayNumber } from "@/lib/constants/constants";

export default function DisplayNumber({
  officeNumber = telNumber,     // digits only (6303579358)
  displayText = displayNumber,  // formatted ((630) 357-9358)
  className = "",
  showIcon = false,
  iconComponent: Icon = null,
  prefixText = "",              // e.g., "Call Now: "
}) {
  // Use provided icon or default to PhoneIcon
  const IconToUse = Icon || PhoneIcon;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Simple blank spacer - no digits for CallRail to grab
    return (
      <span
        className={className}
        style={{ display: "inline-block", minWidth: "10ch" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <a
      href={`tel:${officeNumber}`}
      className={className}
      aria-label={`Call ${displayText}`}
    >
      {showIcon && <IconToUse className="w-5 h-5 inline-block flex-shrink-0" />}
      {prefixText && <span>{prefixText}</span>}
      <span className="callrail-phone">{displayText}</span>
    </a>
  );
}