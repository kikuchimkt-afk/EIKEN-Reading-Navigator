const fs = require('fs');
const content = fs.readFileSync('./src/data/readingData.js', 'utf8');
const lines = content.split('\n');
let odd = 0;
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const doubleQuotes = (line.match(/\"/g) || []).length;
    if (doubleQuotes % 2 !== 0) {
        if (odd < 20) {
            console.log(`Line ${i + 1}: ${line.trim()}`);
        }
        odd++;
    }
}
console.log('Total lines with odd quotes:', odd);
