const fs = require('fs');

const content = fs.readFileSync('./src/data/readingData_clean.txt', 'utf8');
const lines = content.split('\n');

const problems = [];
let currentProblem = null;
let braceCount = 0;
let inDataBase = false;

if (!fs.existsSync('./src/data/problems')) {
    fs.mkdirSync('./src/data/problems');
}

for (const line of lines) {
    if (line.includes('const readingDataBase = [')) {
        inDataBase = true;
        continue;
    }
    if (inDataBase && line === '];') {
        inDataBase = false;
        break;
    }

    if (inDataBase) {
        if (line === '{' && braceCount === 0) {
            currentProblem = [];
            braceCount = 0;
        }

        if (currentProblem !== null) {
            currentProblem.push(line);
            const opens = (line.match(/{/g) || []).length;
            const closes = (line.match(/}/g) || []).length;
            braceCount += (opens - closes);

            if (braceCount === 0 && (line === '}' || line === '},')) {
                problems.push(currentProblem.join('\n'));
                currentProblem = null;
            }
        }
    }
}

console.log(`Extracted ${problems.length} potential problem blocks.`);

problems.forEach((p, i) => {
    // Try to find ID to name the file
    const idMatch = p.match(/id:\s*["']?(.*?)["']?,/);
    const id = idMatch ? idMatch[1].replace(/["']/g, '') : `problem_${i}`;
    fs.writeFileSync(`./src/data/problems/${id}.json.txt`, p, 'utf8');
});

console.log('Saved blocks to ./src/data/problems/');
