import { readingData } from './src/data/readingData.js';

const targetGrades = ["準2級", "準2級プラス"];

targetGrades.forEach(grade => {
    console.log(`\nChecking items for grade: "${grade}"...`);
    const items = readingData.filter(p => p.grade === grade);

    if (items.length === 0) {
        console.log(`[WARN] No items found for grade "${grade}".`);
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
            console.log(`✅ All items for "${grade}" are valid.`);
        } else {
            console.log(`❌ Some items for "${grade}" are missing required data.`);
        }
    }
});
