import fs from 'fs';

// Read the file
let content = fs.readFileSync('./src/data/readingData.js', 'utf8');

// Define all the corrections needed
// Format: { questionId: correctChoiceId }
const corrections = {
    // Meritocracy (pre1-2023-3-3-3)
    'Q38': 1, 'Q39': 4, 'Q40': 3, 'Q41': 1,
    // Purple Straw Wheat (grade2-2023-2-3B) - Q30-33
    'Q30_2023-2-3B': 2, 'Q31_2023-2-3B': 1, 'Q32_2023-2-3B': 2, 'Q33_2023-2-3B': 1,
    // Keeping Up-to-Date (grade2-2023-3-3B) - Q30-33
    'Q30_2023-3-3B': 1, 'Q31_2023-3-3B': 3, 'Q32_2023-3-3B': 4, 'Q33_2023-3-3B': 4,
    // Venice's Books (grade2-2023-2-3C) - Q34-38
    'Q34_2023-2-3C': 4, 'Q35_2023-2-3C': 1, 'Q36_2023-2-3C': 4, 'Q37_2023-2-3C': 3, 'Q38_2023-2-3C': 1,
    // An Extraordinary Machine (grade2-2023-1-3B) - Q30-33
    'Q30_2023-1-3B': 4, 'Q31_2023-1-3B': 1, 'Q32_2023-1-3B': 4, 'Q33_2023-1-3B': 1,
    // Living the Dream (grade2-2023-1-3C) - Q34-38
    'Q34_2023-1-3C': 2, 'Q35_2023-1-3C': 4, 'Q36_2023-1-3C': 2, 'Q37_2023-1-3C': 1, 'Q38_2023-1-3C': 1
};

// Function to add isCorrect: true to the correct choice
function addIsCorrectToChoice(content, questionId, correctChoiceNum) {
    // Pattern: { id: X, text: "...", translation: "..." }
    // Need to add isCorrect: true to the correct choice
    const pattern = new RegExp(
        `(\\{ id: ${correctChoiceNum}, text: ".*?", translation: ".*?")( \\})`,
        'g'
    );

    // This is a simplified approach - we'll need a more targeted fix
    return content;
}

// Let's do a more targeted search and replace
const lines = content.split('\n');
let currentItem = null;
let currentQuestionId = null;
let modified = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect which item we're in
    if (line.includes('id: "pre1-2023-3-3-3"') || line.includes('"id": "pre1-2023-3-3-3"')) {
        currentItem = 'meritocracy';
    } else if (line.includes('id: "grade2-2023-2-3B"') || line.includes('"id": "grade2-2023-2-3B"')) {
        currentItem = '2023-2-3B';
    } else if (line.includes('id: "grade2-2023-3-3B"') || line.includes('"id": "grade2-2023-3-3B"')) {
        currentItem = '2023-3-3B';
    } else if (line.includes('id: "grade2-2023-2-3C"') || line.includes('"id": "grade2-2023-2-3C"')) {
        currentItem = '2023-2-3C';
    } else if (line.includes('id: "grade2-2023-1-3B"') || line.includes('"id": "grade2-2023-1-3B"')) {
        currentItem = '2023-1-3B';
    } else if (line.includes('id: "grade2-2023-1-3C"') || line.includes('"id": "grade2-2023-1-3C"')) {
        currentItem = '2023-1-3C';
    }

    // Detect question id
    const qMatch = line.match(/id:\s*(\d+),?\s*$/);
    if (qMatch) {
        currentQuestionId = parseInt(qMatch[1]);
    }

    // Check if this line needs isCorrect added
    if (currentItem && currentQuestionId) {
        let correctChoice = null;

        if (currentItem === 'meritocracy') {
            if (currentQuestionId === 38) correctChoice = 1;
            else if (currentQuestionId === 39) correctChoice = 4;
            else if (currentQuestionId === 40) correctChoice = 3;
            else if (currentQuestionId === 41) correctChoice = 1;
        } else if (currentItem === '2023-2-3B') {
            if (currentQuestionId === 30) correctChoice = 2;
            else if (currentQuestionId === 31) correctChoice = 1;
            else if (currentQuestionId === 32) correctChoice = 2;
            else if (currentQuestionId === 33) correctChoice = 1;
        } else if (currentItem === '2023-3-3B') {
            if (currentQuestionId === 30) correctChoice = 1;
            else if (currentQuestionId === 31) correctChoice = 3;
            else if (currentQuestionId === 32) correctChoice = 4;
            else if (currentQuestionId === 33) correctChoice = 4;
        } else if (currentItem === '2023-2-3C') {
            if (currentQuestionId === 34) correctChoice = 4;
            else if (currentQuestionId === 35) correctChoice = 1;
            else if (currentQuestionId === 36) correctChoice = 4;
            else if (currentQuestionId === 37) correctChoice = 3;
            else if (currentQuestionId === 38) correctChoice = 1;
        } else if (currentItem === '2023-1-3B') {
            if (currentQuestionId === 30) correctChoice = 4;
            else if (currentQuestionId === 31) correctChoice = 1;
            else if (currentQuestionId === 32) correctChoice = 4;
            else if (currentQuestionId === 33) correctChoice = 1;
        } else if (currentItem === '2023-1-3C') {
            if (currentQuestionId === 34) correctChoice = 2;
            else if (currentQuestionId === 35) correctChoice = 4;
            else if (currentQuestionId === 36) correctChoice = 2;
            else if (currentQuestionId === 37) correctChoice = 1;
            else if (currentQuestionId === 38) correctChoice = 1;
        }

        if (correctChoice) {
            // Check if this is a choice line with the correct id
            const choicePattern = new RegExp(`\\{ id: ${correctChoice}, text:`);
            if (choicePattern.test(line) && !line.includes('isCorrect')) {
                // Add isCorrect: true before the closing }
                lines[i] = line.replace(/( \})$/, ', isCorrect: true }').replace(/(\s*\},?\s*)$/, ', isCorrect: true$1');
                if (!lines[i].includes('isCorrect')) {
                    // Try another pattern
                    lines[i] = line.replace(/" \}/, '", isCorrect: true }');
                }
                modified = true;
                console.log(`Modified line ${i + 1}: Q${currentQuestionId} choice ${correctChoice}`);
            }
        }
    }
}

if (modified) {
    fs.writeFileSync('./src/data/readingData.js', lines.join('\n'));
    console.log('File updated successfully!');
} else {
    console.log('No modifications made - trying alternative approach');
}
