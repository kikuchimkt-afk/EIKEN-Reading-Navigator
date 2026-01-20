const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = './src/data/problems';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    try {
        // Correct import syntax for checking
        execSync(`node --input-type=module -e "import * as data from './src/data/problems/${file}';"`, { stdio: 'pipe' });
        console.log(`✅ ${file} is valid.`);
    } catch (e) {
        console.error(`❌ ${file} has syntax errors:`);
        console.error(e.stderr ? e.stderr.toString() : e.message);
    }
});
