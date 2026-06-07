#!/bin/bash

# NEXUS Ink Compilation Script
# Compiles nexus-main.ink to JSON for use in Node.js

set -e

INK_FILE="nexus-main.ink"
OUTPUT_FILE="compiled/nexus-main.json"

# Check if input file exists
if [ ! -f "$INK_FILE" ]; then
    echo "Error: $INK_FILE not found"
    exit 1
fi

# Create output directory
mkdir -p compiled

echo "🎮 Compiling NEXUS story..."
echo "  Input:  $INK_FILE"
echo "  Output: $OUTPUT_FILE"

# Check for inklecate (Ink compiler)
if command -v inklecate &> /dev/null; then
    inklecate -o "$OUTPUT_FILE" "$INK_FILE"
    echo "✅ Compilation successful!"
else
    echo "⚠️  inklecate not found. Using Inky editor to compile instead:"
    echo "   1. Download Inky: https://github.com/inkle/inky/releases"
    echo "   2. Open $INK_FILE in Inky"
    echo "   3. File → Export Story JSON As... → $OUTPUT_FILE"
    exit 1
fi
