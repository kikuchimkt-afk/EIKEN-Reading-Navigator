import { readingData } from './src/data/readingData.js';

console.log("=== COMPREHENSIVE DATA AUDIT ===\n");
console.log(`Total Items: ${readingData.length}\n`);

let errors = [];
let warnings = [];

readingData.forEach((item, index) => {
    const prefix = `[${index}] ${item.id}`;

    // 1. Basic structure checks
    if (!item.id) errors.push(`${prefix}: Missing 'id'`);
    if (!item.grade) errors.push(`${prefix}: Missing 'grade'`);
    if (!item.title) errors.push(`${prefix}: Missing 'title'`);
    if (!item.subTitle) warnings.push(`${prefix}: Missing 'subTitle'`);

    // 2. Content checks (skip demo)
    if (item.id && item.id.includes('demo')) {
        console.log(`⏭️  Skipping demo item: ${item.id}`);
        return;
    }

    // Content must exist
    if (!item.content || !Array.isArray(item.content) || item.content.length === 0) {
        errors.push(`${prefix}: Missing or empty 'content' array`);
    } else {
        // Check each paragraph
        item.content.forEach((para, pIndex) => {
            if (!para.paragraphId) errors.push(`${prefix}: Para ${pIndex} missing 'paragraphId'`);
            if (!para.sentences || !Array.isArray(para.sentences) || para.sentences.length === 0) {
                errors.push(`${prefix}: Para ${para.paragraphId || pIndex} missing sentences`);
            } else {
                // Check each sentence
                para.sentences.forEach((sent, sIndex) => {
                    const sentPrefix = `${prefix} > P${para.paragraphId} > S${sent.id || sIndex}`;

                    if (!sent.id) errors.push(`${sentPrefix}: Missing sentence 'id'`);
                    if (!sent.text) errors.push(`${sentPrefix}: Missing 'text'`);
                    if (!sent.translation) warnings.push(`${sentPrefix}: Missing 'translation'`);

                    // Grammar analysis checks
                    if (!sent.grammarAnalysis) {
                        warnings.push(`${sentPrefix}: Missing 'grammarAnalysis'`);
                    } else {
                        const ga = sent.grammarAnalysis;
                        if (!ga.mainVerbs || ga.mainVerbs.length === 0) {
                            warnings.push(`${sentPrefix}: Empty 'mainVerbs'`);
                        }
                        if (!ga.structureHtml) {
                            warnings.push(`${sentPrefix}: Missing 'structureHtml'`);
                        }
                        if (!ga.translationHtml) {
                            warnings.push(`${sentPrefix}: Missing 'translationHtml'`);
                        }
                    }
                });
            }
        });
    }

    // 3. Questions checks
    if (!item.questions || !Array.isArray(item.questions) || item.questions.length === 0) {
        errors.push(`${prefix}: Missing or empty 'questions' array`);
    } else {
        item.questions.forEach((q, qIndex) => {
            const qPrefix = `${prefix} > Q${q.id || qIndex}`;

            if (!q.id) errors.push(`${qPrefix}: Missing question 'id'`);
            if (!q.text) errors.push(`${qPrefix}: Missing question 'text'`);
            if (!q.translation) warnings.push(`${qPrefix}: Missing question 'translation'`);

            // Choices checks
            if (!q.choices || !Array.isArray(q.choices) || q.choices.length < 4) {
                errors.push(`${qPrefix}: Missing or incomplete 'choices' (need 4)`);
            } else {
                const correctCount = q.choices.filter(c => c.isCorrect).length;
                if (correctCount !== 1) {
                    errors.push(`${qPrefix}: Expected 1 correct answer, found ${correctCount}`);
                }
                q.choices.forEach((c, cIndex) => {
                    if (!c.text) errors.push(`${qPrefix} > Choice ${c.id || cIndex}: Missing 'text'`);
                    if (!c.translation) warnings.push(`${qPrefix} > Choice ${c.id || cIndex}: Missing 'translation'`);
                });
            }

            // Hint checks
            if (!q.hint) {
                warnings.push(`${qPrefix}: Missing 'hint'`);
            } else {
                if (!q.hint.paragraphId) warnings.push(`${qPrefix}: hint missing 'paragraphId'`);
                if (!q.hint.description) warnings.push(`${qPrefix}: hint missing 'description'`);
            }

            // Logic checks
            if (!q.logic || !Array.isArray(q.logic) || q.logic.length === 0) {
                warnings.push(`${qPrefix}: Missing or empty 'logic' array`);
            }
        });
    }

    // 4. Original item checks
    if (item.isOriginal) {
        if (!item.genre) warnings.push(`${prefix}: Original item missing 'genre'`);
        if (!item.similarProblems) warnings.push(`${prefix}: Original item missing 'similarProblems'`);
    }
});

console.log("\n=== ERRORS (Must Fix) ===");
if (errors.length === 0) {
    console.log("✅ No errors found!");
} else {
    errors.forEach(e => console.log(`❌ ${e}`));
}

console.log(`\n=== WARNINGS (Should Review) === (${warnings.length} total)`);
if (warnings.length === 0) {
    console.log("✅ No warnings!");
} else if (warnings.length > 20) {
    console.log("(Showing first 20)");
    warnings.slice(0, 20).forEach(w => console.log(`⚠️  ${w}`));
    console.log(`... and ${warnings.length - 20} more warnings`);
} else {
    warnings.forEach(w => console.log(`⚠️  ${w}`));
}

console.log("\n=== SUMMARY ===");
console.log(`Total Errors: ${errors.length}`);
console.log(`Total Warnings: ${warnings.length}`);
console.log(`\nErrors by type:`);

const errorTypes = {};
errors.forEach(e => {
    const match = e.match(/Missing ['"]?(\w+)['"]?/);
    if (match) {
        const type = match[1];
        errorTypes[type] = (errorTypes[type] || 0) + 1;
    }
});
Object.entries(errorTypes).forEach(([type, count]) => {
    console.log(`  - ${type}: ${count}`);
});

console.log("\n=== AUDIT COMPLETE ===");
