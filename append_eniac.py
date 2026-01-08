
import os

reading_data_path = 'src/data/readingData.js'
temp_data_path = 'src/data/eniac_temp.js'

try:
    with open(reading_data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    with open(temp_data_path, 'r', encoding='utf-8') as f:
        new_entry = f.read()

    # Find the last closing bracket of the array
    insert_pos = content.rfind('];')
    
    if insert_pos == -1:
        print("Error: Could not find end of array '];'")
        exit(1)

    # Check if we need a comma for the previous element
    # Look backwards from insert_pos for the last non-whitespace char
    check_pos = insert_pos - 1
    while check_pos >= 0 and content[check_pos].isspace():
        check_pos -= 1
    
    prefix = ""
    if content[check_pos] != ',':
        prefix = ","

    # Construct new content
    new_content = content[:insert_pos] + prefix + "\n" + new_entry + "\n];" + content[insert_pos+2:]

    with open(reading_data_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("Successfully appended ENIAC data.")
    
    # Clean up
    os.remove(temp_data_path)

except Exception as e:
    print(f"Error: {e}")
    exit(1)
