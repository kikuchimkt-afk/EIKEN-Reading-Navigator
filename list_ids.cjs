const fs = require('fs');
const content = fs.readFileSync('./src/data/readingData.js.bak', 'utf8');
const start = content.indexOf('const readingDataBase = [');
const end = content.lastIndexOf('];');

if (start === -1 || end === -1) {
    console.log('Could not find readingDataBase');
    process.exit(1);
}

const arrContent = content.substring(start + 25, end);
// Use a more robust regex that scans for "id: " followed by quotes
const idRegex = /id:\s*["'](.*?)["']/g;
let match;
const ids = [];
while ((match = idRegex.exec(arrContent)) !== null) {
    ids.push(match[1]);
}

console.log(`Found ${ids.length} problem IDs.`);
if (ids.length > 0) {
    console.log('First 20 IDs:');
    ids.slice(0, 20).forEach(id => console.log(' - ' + id));
    console.log('...');
    console.log('Last 20 IDs:');
    ids.slice(-20).forEach(id => console.log(' - ' + id));
}
