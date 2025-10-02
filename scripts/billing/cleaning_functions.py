#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cleaning functions extracted for reusability and testing
"""

import html
import logging

logger = logging.getLogger(__name__)

def clean_html_entities(text):
    """
    Decode HTML entities in text
    Common entities in Google Ads data:
    - &#39; → ' (apostrophe)
    - &amp; → & (ampersand)
    - &lt; → < (less than)
    - &gt; → > (greater than)
    """
    if not text:
        return text

    # Use html.unescape to decode all HTML entities
    cleaned = html.unescape(text)

    # Log if any changes were made
    if cleaned != text:
        logger.debug(f"Decoded HTML entities: '{text}' → '{cleaned}'")

    return cleaned

def clean_amount(amount_str):
    """
    Clean and standardize amount values
    - Remove currency symbols
    - Handle various negative value formats
    - Ensure proper decimal format
    """
    if not amount_str:
        return "0.00"

    # Remove common currency symbols and whitespace
    cleaned = amount_str.strip()
    cleaned = cleaned.replace('$', '').replace(',', '').strip()

    # Handle parentheses for negative values
    if cleaned.startswith('(') and cleaned.endswith(')'):
        cleaned = '-' + cleaned[1:-1]

    # Handle various Unicode dash characters for negative values
    if cleaned:
        # Check if first character is a Unicode dash/minus
        first_char_code = ord(cleaned[0])
        # Unicode dashes: U+2212 (minus sign), U+2013 (en-dash), U+2014 (em-dash), U+2010-U+2015 (various dashes)
        if first_char_code in [0x2212, 0x2013, 0x2014, 0x2010, 0x2011, 0x2012, 0x2015]:
            cleaned = '-' + cleaned[1:]

    # Validate it's a number
    try:
        float(cleaned)
        return cleaned
    except ValueError:
        logger.warning(f"Invalid amount format: '{amount_str}' - keeping original")
        return amount_str