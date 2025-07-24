"use client";

import { useState, useEffect } from "react";
import { telNumber, displayNumber } from "@/lib/constants/constants";

export default function DisplayNumber({ 
  officeNumber = telNumber, 
  displayText = displayNumber,
  asLink = true 
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (asLink) {
    return (
      <a href={`tel:${officeNumber}`}>
        {displayText}
      </a>
    );
  }

  return <span>{displayText}</span>;
}