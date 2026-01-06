import { readingData } from './src/data/readingData.js';

const targetGrade = "3級";
console.log(`\nChecking items for grade: "${targetGrade}"...`);

const items = readingData.filter(p => p.grade === targetGrade);

if (items.length === 0) {
    console.log(`[WARN] No items found for grade "${targetGrade}".`);
} else {
    console.log(`Found ${items.length} items.`);
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
        console.log(`✅ All items for "${targetGrade}" are valid.`);
    } else {
        console.log(`❌ Some items for "${targetGrade}" are missing required data.`);
        process.exit(1);
    }
}
