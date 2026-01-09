# -*- coding: utf-8 -*-
"""
Left-Brained Thinker - 完全データ挿入スクリプト
このスクリプトは4つのデータファイルを読み込み、readingData.jsに追加します。
"""

import re

def extract_js_object(content, var_name):
    """Extract JavaScript object from file content"""
    # Remove comments and module.exports
    content = re.sub(r'//.*\n', '\n', content)
    content = re.sub(r'module\.exports.*$', '', content, flags=re.MULTILINE)
    # Find the object assignment
    pattern = rf'const\s+{var_name}\s*=\s*(\{{[\s\S]*\}})\s*;'
    match = re.search(pattern, content)
    if match:
        return match.group(1)
    return None

# Read all the data files
with open('left_brained_data_p1.js', 'r', encoding='utf-8') as f:
    p1_content = f.read()

with open('left_brained_data_p2.js', 'r', encoding='utf-8') as f:
    p2_content = f.read()

with open('left_brained_data_p3.js', 'r', encoding='utf-8') as f:
    p3_content = f.read()

with open('left_brained_data_questions.js', 'r', encoding='utf-8') as f:
    q_content = f.read()

# Read the current readingData.js
with open('src/data/readingData.js', 'r', encoding='utf-8') as f:
    reading_data_lines = f.readlines()

# Find the line with "    }," after summaryForInstructors for 問題8 (around line 4864)
# We need to find line 4864 and insert after it
insert_after_line = 4863  # 0-indexed, so 4864 - 1

# Build the complete entry - we'll extract and format properly
# For now, let's just print the location
print(f"Will insert after line {insert_after_line + 1}")
print(f"Current content at that line: {reading_data_lines[insert_after_line].strip()}")

# Check if this is the correct location (should end with "},")
if reading_data_lines[insert_after_line].strip() == "},":
    print("✓ Correct insertion point found!")
else:
    print("✗ Line content doesn't match expected '},'. Please verify.")
    
print("\nData files ready for manual insertion if needed.")
