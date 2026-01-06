import { readingData } from './src/data/readingData.js';

const pre1 = readingData.filter(d => d.grade === '準1級');

console.log(`Total Pre-1 items: ${pre1.length}`);

const missingContent = pre1.filter(d => !d.content || d.content.length === 0);
const missingQuestions = pre1.filter(d => !d.questions || d.questions.length === 0);

if (missingContent.length > 0) {
    console.log(`Items missing content: ${missingContent.length}`);
    missingContent.forEach(d => console.log(` - ${d.id}: ${d.title}`));
} else {
    console.log("All Pre-1 items have content.");
}

if (missingQuestions.length > 0) {
    console.log(`Items missing questions: ${missingQuestions.length}`);
    missingQuestions.forEach(d => console.log(` - ${d.id}: ${d.title}`));
} else {
    console.log("All Pre-1 items have questions.");
}
