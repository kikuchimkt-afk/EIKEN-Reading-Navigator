const fs = require('fs');
const path = require('path');

const file1 = 'c:\\Users\\makoto\\Documents\\アプリ開発\\Reading Navigatorコピー\\src\\data\\grade3OriginalData.js';
const file2 = 'c:\\Users\\makoto\\Documents\\アプリ開発\\Reading Navigator\\reading-technique-app\\src\\data\\grade3OriginalData.js';

function extractIds(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const idRegex = /id:\s*["']([^"']+)["']/g;
        const ids = [];
        let match;
        while ((match = idRegex.exec(content)) !== null) {
            // We only care about top-level IDs, but regex is simple. 
            // Let's filter for IDs that look like problem IDs (usually start with grade-3)
            if (match[1].startsWith('grade-3')) {
                ids.push(match[1]);
            }
        }
        return ids;
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e);
        return [];
    }
}

const ids1 = extractIds(file1);
const ids2 = extractIds(file2);

console.log(`Source File (${file1}): ${ids1.length} items`);
console.log('IDs:', ids1);

console.log(`Dest File (${file2}): ${ids2.length} items`);
console.log('IDs:', ids2);

const missingInDest = ids1.filter(id => !ids2.includes(id));
console.log('Missing in Destination:', missingInDest);
