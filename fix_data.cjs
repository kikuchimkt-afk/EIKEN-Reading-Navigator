const fs = require('fs');

const buffer = fs.readFileSync('./src/data/readingData.js');
let content = buffer.toString('utf8');
if (buffer[0] === 0xef && buffer[1] === 0xbb && buffer[2] === 0xbf) {
    content = buffer.slice(3).toString('utf8');
}

// 1. Protect internal single quotes (apostrophes)
content = content.replace(/(\w)'(\w)/g, '$1\x02$2');

// 2. Wipe ALL quotes and sashes
content = content.replace(/["'\\]/g, '');

const lines = content.split('\n');

const newLines = lines.map(line => {
    let l = line.trimEnd().replace(/\x02/g, "'");

    // Fix imports
    if (l.includes('import {') || l.includes('import{')) {
        return l.replace(/import\s+{\s*(\w+)\s*}\s*from\s*(.*?);/g, 'import { $1 } from "$2";');
    }

    // Fix export
    if (l.includes('export const readingData =')) {
        return l;
    }

    // Match any key: value
    const match = l.match(/^(\s*)(\w+):\s*(.*)$/);
    if (match) {
        const indent = match[1];
        const key = match[2];
        let val = match[3].trim();

        let endsWithComma = val.endsWith(',');
        if (endsWithComma) val = val.slice(0, -1).trim();

        // Re-quote anything that isn't structural or a primitive
        if (val !== '{' && val !== '[' && val !== 'true' && val !== 'false' && !/^-?\d+(\.\d+)?$/.test(val) && val !== '') {
            // If it starts with [ but has content inside on the same line (like mainVerbs)
            if (val.startsWith('[') && val.endsWith(']')) {
                const content = val.slice(1, -1).trim();
                const elements = content.split(',').map(e => JSON.stringify(e.trim()));
                return `${indent}${key}: [ ${elements.join(', ')} ]${endsWithComma ? ',' : ''}`;
            }
            return `${indent}${key}: ${JSON.stringify(val)}${endsWithComma ? ',' : ''}`;
        }
    }

    return l;
});

let finalContent = newLines.join('\n');
finalContent = finalContent.replace(/\x02/g, "'");

console.log('Total structural rebuild complete.');
fs.writeFileSync('./src/data/readingData.js', finalContent, 'utf8');
