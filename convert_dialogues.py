#!/usr/bin/env python3
"""
Converter: Dialogue.md → JavaScript Scene Objects
Reads all dialogue files and generates scene structure for inkEngine.js
"""

import os
import re
import json
from pathlib import Path

DIALOGUE_DIR = r'c:\Users\54547130159\nexus\narrative\dialogues'

def extract_scene_id(filename):
    """Extract scene ID from filename"""
    match = re.match(r'(ch\d+_scene\d+_[a-z_]+)\.dialogue\.md', filename)
    return match.group(1) if match else None

def extract_narrative(content):
    """Extract narrative text blocks"""
    lines = []
    in_narrative = False
    skip_next = False

    for line in content.split('\n'):
        # Skip metadata blocks
        if line.startswith('**File:**') or line.startswith('**Location:**') or line.startswith('**Scene ID:**'):
            continue
        if line.startswith('**Characters:**') or line.startswith('**Tone:**') or line.startswith('**Duration:**'):
            in_narrative = False
            continue
        if line.startswith('#'):
            skip_next = False
            continue

        # Extract narrative
        if '**NARRATOR:**' in line or '**PLAYER:**' in line or '**[A-Z]+:**' in line:
            skip_next = False
            # Get the text after the speaker
            text = re.sub(r'\*\*[A-Z\s]+:\*\*\s*', '', line).strip()
            if text and not text.startswith('('):
                lines.append(text)
        elif line.strip() and not line.startswith('---') and not line.startswith('**') and not line.startswith('#') and not line.startswith('`') and not line.startswith('['):
            cleaned = line.strip()
            if cleaned and not cleaned.startswith('>'):
                lines.append(cleaned)

    # Filter out empty lines but keep structure
    return [l for l in lines if l.strip()][:50]  # Limit to 50 lines per scene

def extract_choices(content):
    """Extract choice options"""
    choices = []
    lines = content.split('\n')

    i = 0
    while i < len(lines):
        line = lines[i]

        # Look for choice markers
        if re.match(r'##\s+Option\s+[ABC]', line):
            # Get next non-empty line for choice text
            j = i + 1
            while j < len(lines) and not lines[j].strip():
                j += 1

            if j < len(lines) and '**Text:**' in lines[j]:
                # Extract text between quotes
                text_match = re.search(r'"([^"]+)"', lines[j])
                if text_match:
                    choice_text = text_match.group(1)
                    # Next scene is usually "**Go to:**" or "-> next_scene"
                    next_scene = f'ch01_scene05_return_with_the_first_lie'  # Default
                    for k in range(j, min(j+20, len(lines))):
                        if '**Go to:**' in lines[k]:
                            next_match = re.search(r'`([a-z0-9_]+)`', lines[k])
                            if next_match:
                                next_scene = next_match.group(1)
                        elif '->' in lines[k]:
                            next_match = re.search(r'->\\s+([a-z0-9_]+)', lines[k])
                            if next_match:
                                next_scene = next_match.group(1)

                    choices.append({
                        'text': choice_text,
                        'nextScene': next_scene
                    })

        i += 1

    return choices if choices else [
        {'text': 'Continue', 'nextScene': 'ch02_scene01_deep_city_after_first_lie'}
    ]

def process_all_dialogues():
    """Process all dialogue files"""
    scenes = {}

    files = sorted([f for f in os.listdir(DIALOGUE_DIR) if f.endswith('.dialogue.md')])

    for filename in files:
        scene_id = extract_scene_id(filename)
        if not scene_id:
            continue

        filepath = os.path.join(DIALOGUE_DIR, filename)

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            narrative = extract_narrative(content)
            choices = extract_choices(content)

            # Default flags
            flags = {
                'player_crossed_first_time': 'ch01_scene01' in scene_id,
                'mara_encountered': 'scene03' in scene_id or 'scene04' in scene_id,
            }

            scenes[scene_id] = {
                'narrative': narrative,
                'choices': choices,
                'flags': flags
            }

            print(f"✅ {scene_id}: {len(narrative)} lines, {len(choices)} choices")

        except Exception as e:
            print(f"❌ Error processing {filename}: {e}")

    return scenes

if __name__ == '__main__':
    print("Converting dialogue files to scene objects...")
    scenes = process_all_dialogues()

    # Output as JavaScript
    output = "// Auto-generated from dialogue files\nconst STORY_SCENES = {\n"
    for scene_id, scene_data in sorted(scenes.items()):
        output += f"  '{scene_id}': {json.dumps(scene_data, ensure_ascii=False, indent=4)},\n"
    output += "};\n\nmodule.exports = { STORY_SCENES };"

    with open(r'c:\Users\54547130159\nexus\scenes_generated.js', 'w', encoding='utf-8') as f:
        f.write(output)

    print(f"\n✅ Generated scenes_generated.js with {len(scenes)} scenes")
