const fs = require('fs');
const path = require('path');

const dir = './src/data/problems';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json.txt'));

const MOJI_MAP = {
    '蟷ｴ': '年', '隨ｬ': '第', '蝗・': '回', '螟ｧ': '大', '蝠城｡・': '問題', '豁ｴ': '歴', '蜿ｲ': '史', '繝・': 'テ', '繧ｯ': 'ク', '繝弱Ο': 'ノロ', '繧ｸ': 'ジ', '繝ｼ': 'ー', '螳・': '実', '髫・': '隠', '縺・': 'い', '縺・': 'た', '縺｣': 'っ', '縺・': 'な', '縺ｮ': 'の', '縺ｯ': 'は', '縺・': 'が', '縲・': '。', '縲・': '、'
};

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Protect apostrophes
    content = content.replace(/(\w)'(\w)/g, '$1\x02$2');
    content = content.replace(/"/g, ''); // Clear existing quotes

    // Step 0: Super Atomize
    content = content.replace(/([{}[\],])/g, '\n$1\n');

    // Step 1: Clean and Merge KV pairs
    const raw = content.split('\n').map(l => l.trim()).filter(l => l);
    const atomized = [];
    for (let i = 0; i < raw.length; i++) {
        let line = raw[i];
        if (line.endsWith(':')) {
            if (i + 1 < raw.length && !/^[{}[\],]$/.test(raw[i + 1])) {
                atomized.push(line + ' ' + raw[i + 1]);
                i++;
                continue;
            }
        }
        atomized.push(line);
    }

    const processed = [];
    atomized.forEach(l => {
        if (/^[{}[\],]$/.test(l)) {
            processed.push(l.replace(/\x02/g, "'"));
            return;
        }

        const kv = l.match(/^([^:]+):\s*(.*)$/);
        if (kv) {
            let key = kv[1].trim();
            let val = kv[2].trim();
            let safeKey = (/[^a-zA-Z0-9_]/.test(key) || /^\d/.test(key)) ? `"${key}"` : key;

            let finalVal = "";
            if (val === "" || val === '""') finalVal = '""';
            else if (val === 'true' || val === 'false' || /^-?\d+\.?\d*$/.test(val)) finalVal = val;
            else {
                Object.keys(MOJI_MAP).forEach(m => { val = val.split(m).join(MOJI_MAP[m]); });
                finalVal = JSON.stringify(val.replace(/\x02/g, "'"));
            }
            processed.push(`${safeKey}: ${finalVal}`);
        } else {
            // Naked value
            let val = l;
            let finalVal = "";
            if (val === 'true' || val === 'false' || /^-?\d+\.?\d*$/.test(val)) finalVal = val;
            else {
                Object.keys(MOJI_MAP).forEach(m => { val = val.split(m).join(MOJI_MAP[m]); });
                finalVal = JSON.stringify(val.replace(/\x02/g, "'"));
            }
            processed.push(finalVal);
        }
    });

    // Step 2: Assemble with correct commas
    const finalLines = [];
    for (let i = 0; i < processed.length; i++) {
        let line = processed[i];
        let next = processed[i + 1];

        let needsComma = false;
        if (next) {
            // Comma needed if next is NOT a structural closer or a comma itself
            if (!/^[}\],]$/.test(next)) {
                needsComma = !/^[{}[\],]$/.test(line) || line === "}" || line === "]";
            }
        }

        if (line === ",") continue; // Ignore existing commas in processing

        finalLines.push("    " + line + (needsComma ? "," : ""));
    }

    const baseName = file.replace('.json.txt', '').replace(/[^a-zA-Z0-9]/g, '_');
    const output = `export const problem_${baseName} = [\n${finalLines.join('\n')}\n];`;
    fs.writeFileSync(filePath.replace('.json.txt', '.js'), output, 'utf8');
});

console.log('Fixed all blocks with Super Atomizer V2.');
