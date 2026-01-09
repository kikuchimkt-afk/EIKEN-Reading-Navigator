import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read paragraph files
const p1Lines = fs.readFileSync(path.resolve(__dirname, 'peakoil_p1.js'), 'utf8');
const p2Lines = fs.readFileSync(path.resolve(__dirname, 'peakoil_p2.js'), 'utf8');
const p3Lines = fs.readFileSync(path.resolve(__dirname, 'peakoil_p3.js'), 'utf8');
const qLines = fs.readFileSync(path.resolve(__dirname, 'peakoil_questions.js'), 'utf8');

// Extract data using eval (simplified for this use case)
const extractData = (fileContent) => {
    const match = fileContent.match(/const \w+ = ({[\s\S]*});[\s\S]*module\.exports/);
    if (match) return eval('(' + match[1] + ')');
    return null;
};

const para1 = extractData(p1Lines);
const para2 = extractData(p2Lines);
const para3 = extractData(p3Lines);
const qData = extractData(qLines);

// Build complete data
const peakoilData = {
    "id": "grade-pre1-original-peakoil",
    "grade": "準1級",
    "title": "The Peak Oil Prophecy",
    "subTitle": "問題11",
    "genre": "エネルギー / 経済",
    "similarProblems": { "exam": "2023年度 第3回", "title": "The Bet" },
    "isOriginal": true,
    "images": { "content": "https://placehold.co/600x400?text=Peak+Oil", "question": "https://placehold.co/600x400?text=Question+Image" },
    "content": [para1, para2, para3],
    "questions": qData.questions,
    "summaryForInstructors": qData.summaryForInstructors
};

// Save JSON
const jsonPath = path.resolve(__dirname, 'peakoil_complete.json');
fs.writeFileSync(jsonPath, JSON.stringify(peakoilData, null, 4), 'utf8');
console.log('✅ Created peakoil_complete.json');

// Append to readingData.js
const readingDataPath = path.resolve(__dirname, 'src/data/readingData.js');
let content = fs.readFileSync(readingDataPath, 'utf8');

const lastBracketIndex = content.lastIndexOf('];');
if (lastBracketIndex === -1) {
    console.error('Could not find the end of the array');
    process.exit(1);
}

let hasComma = false;
for (let i = lastBracketIndex - 1; i >= 0; i--) {
    const char = content[i];
    if (/\s/.test(char)) continue;
    if (char === ',') hasComma = true;
    break;
}

const newDataString = JSON.stringify(peakoilData, null, 4);
let insertion = hasComma ? '\n    ' + newDataString : ',\n    ' + newDataString;
const newContent = content.substring(0, lastBracketIndex) + insertion + '\n' + content.substring(lastBracketIndex);

fs.writeFileSync(readingDataPath, newContent, 'utf8');
console.log('✅ Successfully appended The Peak Oil Prophecy (問題11) data to readingData.js!');
