
/**
 * Escapes special characters in a string for use in a regular expression.
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Validates the grammar analysis data, specifically focusing on mainVerbs.
 * It checks if the defined verbs actually exist in the sentence text and if they appear multiple times.
 * 
 * @param {Array} readingData - The entire reading data structure.
 */
export const verifyGrammarData = (readingData) => {
    try {
        console.group('🔍 Grammar Data Validation Started');
        let errorCount = 0;
        let warningCount = 0;

        readingData.forEach(passage => {
            passage.content.forEach(paragraph => {
                paragraph.sentences.forEach(sentence => {
                    if (!sentence.grammarAnalysis || !sentence.grammarAnalysis.mainVerbs) return;

                    const { id, text, grammarAnalysis } = sentence;
                    const { mainVerbs } = grammarAnalysis;

                    mainVerbs.forEach(verb => {
                        // Check 1: Existence & Boundary Check
                        // We use the same regex logic as the highlighter: word boundaries \b
                        const pattern = `\\b${escapeRegExp(verb)}\\b`;
                        const regex = new RegExp(pattern, 'g');
                        const matches = text.match(regex);

                        // Check 2: Multi-word phrase check (Handling intervening words like adverbs)
                        // If the verb contains spaces (e.g. "will continue") and is NOT found as a whole phrase
                        if (!matches && verb.includes(' ')) {
                            const words = verb.split(/\s+/);
                            const allWordsFound = words.every(word => {
                                const wordPattern = `\\b${escapeRegExp(word)}\\b`;
                                return new RegExp(wordPattern).test(text);
                            });

                            if (allWordsFound) {
                                console.error(`❌ [Interrupted Phrase] Passage: "${passage.title}", Sentence ID: ${id}`);
                                console.error(`   Phrase: "${verb}" is not found as a continuous string in: "${text}"`);
                                console.error(`   💡 ADVICE: It seems the words exist separately (perhaps separated by an adverb).`);
                                console.error(`      Please split the array: ["${words.join('", "')}"] instead of ["${verb}"].`);
                                errorCount++;
                                return; // Skip standard missing error
                            }
                        }

                        // Error: Verb not found in text (and not caught by the split check above)
                        if (!matches) {
                            console.error(`❌ [Missing Verb] Passage: "${passage.title}", Sentence ID: ${id}`);
                            console.error(`   Verb: "${verb}" is NOT found in text: "${text}"`);
                            errorCount++;
                        }
                        // Warning: Verb found multiple times (Risk of ambiguous highlighting)
                        else if (matches.length > 1) {
                            console.warn(`⚠️ [Ambiguous Verb] Passage: "${passage.title}", Sentence ID: ${id}`);
                            console.warn(`   Verb: "${verb}" appears ${matches.length} times in text. It might highlight incorrect parts.`);
                            console.warn(`   Text: "${text}"`);
                            warningCount++;
                        }
                    });

                    // Check 2: Verbs inside Translation HTML (Consistency check - optional but good)
                    // (Skipped for now to focus on Main Verb detection as requested)
                });
            });
        });

        if (errorCount === 0 && warningCount === 0) {
            console.log('✅ Validation Passed: All main verbs are correctly defined and unique in their sentences.');
        } else {
            console.log(`🏁 Validation Finished with ${errorCount} Errors and ${warningCount} Warnings.`);
        }
    } catch (error) {
        console.error('💥 Grammar Validation Crashed:', error);
    } finally {
        console.groupEnd();
    }
};
