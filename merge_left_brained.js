// Script to merge all Left-Brained Thinker data and generate the final JSON entry
const fs = require('fs');
const path = require('path');

// Read all data files
const p1 = require('./left_brained_data_p1.js');
const p2 = require('./left_brained_data_p2.js');
const p3 = require('./left_brained_data_p3.js');
const qAndS = require('./left_brained_data_questions.js');

// Merge into complete data structure
const completeData = {
    id: p1.id,
    grade: p1.grade,
    title: p1.title,
    subTitle: p1.subTitle,
    genre: p1.genre,
    similarProblems: p1.similarProblems,
    isOriginal: p1.isOriginal,
    images: p1.images,
    content: [
        p1.content[0],  // paragraph 1
        p2,             // paragraph 2
        p3              // paragraph 3
    ],
    questions: qAndS.questions,
    summaryForInstructors: qAndS.summaryForInstructors
};

// Output as JSON
const jsonOutput = JSON.stringify(completeData, null, 4);
console.log(jsonOutput);

// Write to file for reference
fs.writeFileSync(
    path.join(__dirname, 'left_brained_complete.json'),
    jsonOutput,
    'utf8'
);

console.log('\nComplete data written to left_brained_complete.json');
