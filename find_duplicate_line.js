import { readFileSync } from 'fs';
const path = './src/data/readingData.js';

const content = readFileSync(path, 'utf8');
const lines = content.split('\n');

let count = 0;
console.log(`Total lines: ${lines.length}`);

lines.forEach((line, index) => {
    if (line.includes('Keeping Up-to-Date')) {
        count++;
        console.log(`Found "Keeping Up-to-Date" at line ${index + 1} (Count: ${count})`);
    }
});
