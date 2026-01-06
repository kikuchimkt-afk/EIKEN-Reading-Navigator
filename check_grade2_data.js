import { readingData } from './src/data/readingData.js';

const targetGrade = "2級";
const items = readingData.filter(p => p.grade === targetGrade);

console.log(`Checking ${items.length} items for grade ${targetGrade}...`);

let allValid = true;
items.forEach(item => {
    const hasContent = item.content && Array.isArray(item.content) && item.content.length > 0;
    const hasQuestions = item.questions && Array.isArray(item.questions) && item.questions.length > 0;

    if (!hasContent || !hasQuestions) {
        console.log(`[FAIL] Item ID: ${item.id} - Content: ${hasContent}, Questions: ${hasQuestions}`);
        allValid = false;
    }
});

if (allValid) {
    console.log("✅ All Grade 2 items have valid 'content' and 'questions' arrays.");
} else {
    console.log("❌ Some items are missing required data.");
    process.exit(1);
}
