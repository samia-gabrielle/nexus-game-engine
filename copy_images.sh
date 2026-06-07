#!/bin/bash

# Copy all images from 36-scenes to game engine images folder with clean names
# Map each image to its scene ID

SRC="c:/Users/54547130159/nexus/art-reference/36-scenes"
DST="c:/Users/54547130159/nexus/game-engine/public/images"

# Create mapping of filenames to scene IDs
declare -A mapping=(
  ["Image  Scene 6A The Archivist Path.png"]="scene_6a_archive_discovery.png"
  ["Image  Scene 7A Names on Walls.png"]="scene_7a_names_walls.png"
  ["Image  Scene 8A Lyra's Confession.png"]="scene_8a_confession.png"
  ["Image  Scene 6B Underground Movement.png"]="scene_6b_underground.png"
  ["Image  Scene 7B Reva's Story.png"]="scene_7b_reva.png"
  ["Image  Scene 8B Weapons Cache.png"]="scene_8b_weapons.png"
  ["Image  Scene 6C Meditation Space.png"]="scene_6c_meditation.png"
  ["Image  Scene 7C Echo Visitations.png"]="scene_7c_echoes.png"
  ["Image  Scene 8C Thomas Appears.png"]="scene_8c_thomas.png"
  ["Image Scene 13 Deep City Hub.png"]="scene_13_deep_city.png"
  ["Image Scene 14 The Assembly.png"]="scene_14_assembly.png"
  ["Image Scene 15A Corridor to 2050.png"]="scene_15a_corridor.png"
  ["Image Scene 16A The Director's Office.png"]="scene_16a_director.png"
  ["Image Scene 17A Treaty Signing.png"]="scene_17a_treaty.png"
  ["Image cene 18A Ethics of Division.png"]="scene_18a_ethics.png"
  ["Image  Scene 15B The Uprising Begins.png"]="scene_15b_uprising.png"
  ["Image  Scene 16B Sabotage Action.png"]="scene_16b_sabotage.png"
  ["Image  Scene 17B The Nexus Breaks.png"]="scene_17b_nexus_breaks.png"
  ["Image  Scene 18B Crisis Management.png"]="scene_18b_crisis.png"
  ["Image Scene 15C The Monastery.png"]="scene_15c_monastery.png"
  ["ImageScene 16C Ancient Wisdom.png"]="scene_16c_wisdom.png"
  ["Image Scene 17C The Third Option Emerges.png"]="scene_17c_third_option.png"
  ["Image Scene 18C Ritual of Acceptance.png"]="scene_18c_ritual.png"
  ["Image Scene 27A The Return (Restoration Complete).png"]="scene_27a_return.png"
  ["Image Scene 27B The Measured Return (Selective Restoration).png"]="scene_27b_measured.png"
  ["Image Scene 27C The Ritual of Release (Acceptance).png"]="scene_27c_release.png"
  ["Image Scene 30A The New Nexus (Complete Restoration Ending).png"]="scene_30a_new_nexus.png"
  ["Image Scene 30B The Eternal Compromise (Control Ending).png"]="scene_30b_compromise.png"
  ["Image Scene 30C The Quiet Ending (Acceptance Ending).png"]="scene_30c_quiet.png"
)

# Copy each file
for src_file in "${!mapping[@]}"; do
  dst_file="${mapping[$src_file]}"
  echo "Copying: $src_file → $dst_file"
  cp "$SRC/$src_file" "$DST/$dst_file" 2>/dev/null || echo "  ⚠️ Not found: $src_file"
done

echo "✅ Done!"
