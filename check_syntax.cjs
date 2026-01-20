const fs = require('fs');
const content = fs.readFileSync('./src/data/readingData.js', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('translation:')) {
        const firstQuote = line.indexOf('"');
        const lastQuote = line.lastIndexOf('"');
        if (firstQuote === -1 || firstQuote === lastQuote) {
            console.log(`Line ${i + 1}: ${line.trim()}`);
        }
    }
}
