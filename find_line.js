import fs from 'fs';

const content = fs.readFileSync('./src/data/readingData.js', 'utf8');
const lines = content.split('\n');

lines.forEach((line, i) => {
    if (line.includes('Relying on Nature')) {
        console.log(`Line ${i + 1}: ${line.trim().substring(0, 100)}`);
    }
});
