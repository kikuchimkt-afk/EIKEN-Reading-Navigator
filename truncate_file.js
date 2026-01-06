import { readFileSync, writeFileSync } from 'fs';

const path = './src/data/readingData.js';
const content = readFileSync(path, 'utf8');
const lines = content.split('\n');

// We want to keep lines up to index 23905 (line 23906 in 1-based)
// Line 23906 was the comma.
// The previous edit replaced lines 23906-23910 with "];"
// So now the file has "];" at line 23906.
// But lines 23911+ are still there (now shifting?).
// Actually, let's just find the first "];" line and truncate after it.
// Or safer: Find the line with "grade2-2023-3-3B" which I tried to remove.
// Wait, I messed up the file state.
// Let's look for "];" at line 23906.

const newLines = [];
let truncated = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '];') {
        newLines.push(lines[i]);
        truncated = true;
        break;
    }
    newLines.push(lines[i]);
}

if (truncated) {
    writeFileSync(path, newLines.join('\n'), 'utf8');
    console.log(`Truncated file at line ${newLines.length}`);
} else {
    console.log('Could not find truncation point "];"');
}
