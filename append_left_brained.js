
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readingDataPath = path.resolve(__dirname, 'src/data/readingData.js');
const leftBrainedDataPath = path.resolve(__dirname, 'left_brained_complete.json');

console.log(`Reading data from: ${leftBrainedDataPath}`);
const leftBrainedData = JSON.parse(fs.readFileSync(leftBrainedDataPath, 'utf8'));

console.log(`Appending to: ${readingDataPath}`);
let content = fs.readFileSync(readingDataPath, 'utf8');

// Find the last "];"
const lastBracketIndex = content.lastIndexOf('];');

if (lastBracketIndex === -1) {
    console.error('Could not find the end of the array (];) in readingData.js');
    process.exit(1);
}

// Check for preceding comma
let hasComma = false;
for (let i = lastBracketIndex - 1; i >= 0; i--) {
    const char = content[i];
    if (/\s/.test(char)) continue;
    if (char === ',') {
        hasComma = true;
    }
    break;
}

const newDataString = JSON.stringify(leftBrainedData, null, 4);

let insertion;
if (hasComma) {
    insertion = '\n    ' + newDataString;
} else {
    insertion = ',\n    ' + newDataString;
}

const newContent = content.substring(0, lastBracketIndex) + insertion + '\n' + content.substring(lastBracketIndex);

fs.writeFileSync(readingDataPath, newContent, 'utf8');
console.log('Successfully appended Left-Brained Thinker data to readingData.js');
