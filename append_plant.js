
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readingDataPath = path.resolve(__dirname, 'src/data/readingData.js');
const plantDataPath = path.resolve(__dirname, 'plant_data.json');

console.log(`Reading data from: ${plantDataPath}`);
const plantData = JSON.parse(fs.readFileSync(plantDataPath, 'utf8'));

console.log(`Appending to: ${readingDataPath}`);
let content = fs.readFileSync(readingDataPath, 'utf8');

// Find the last "];"
const lastBracketIndex = content.lastIndexOf('];');

if (lastBracketIndex === -1) {
    console.error('Could not find the end of the array (];) in readingData.js');
    process.exit(1);
}

// Check for preceding comma
// We look at the text before `];` to see if there is a comma.
// We scan backwards from lastBracketIndex
let insertPos = lastBracketIndex;
let hasComma = false;

// Scan backwards skipping whitespace/newlines
for (let i = lastBracketIndex - 1; i >= 0; i--) {
    const char = content[i];
    if (/\s/.test(char)) continue; // skip whitespace
    if (char === ',') {
        hasComma = true;
    }
    // If not comma and not whitespace (e.g. '}'), then we need a comma
    break;
}

const newDataString = JSON.stringify(plantData, null, 4);

let insertion;
if (hasComma) {
    insertion = '\n    ' + newDataString;
} else {
    insertion = ',\n    ' + newDataString;
}

const newContent = content.substring(0, lastBracketIndex) + insertion + '\n' + content.substring(lastBracketIndex);

fs.writeFileSync(readingDataPath, newContent, 'utf8');
console.log('Successfully appended Plant Communication data to readingData.js');
