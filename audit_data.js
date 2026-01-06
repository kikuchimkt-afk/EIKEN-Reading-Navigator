import { readingData } from './src/data/readingData.js';

// Configuration for Grade <-> ID Prefix checks
// Based on observed patterns: 
// 準1級 -> pre1
// 2級 -> grade2 (or g2? need to verify)
// 準2級 -> pre2
// 3級 -> g3
// 4級 -> g4
// Note: "準2級プラス" might be distinct.

const gradePrefixMap = {
    "準1級": "pre1",
    "2級": "grade2",
    "準2級": "pre2",
    "3級": "g3",
    "4級": "g4",
    "準2級プラス": "pre2plus" // Guessing, will adjust if anomalies appear
};

console.log("=== STARTING DATA AUDIT ===\n");
console.log(`Total Items in readingData: ${readingData.length}\n`);

// 1. DUPLICATE CHECKS
const seenIds = new Map();
const seenTitles = new Map();
const duplicates = [];

readingData.forEach((item, index) => {
    // Check ID Duplicates
    if (seenIds.has(item.id)) {
        duplicates.push({ type: 'ID', val: item.id, indices: [seenIds.get(item.id), index] });
    } else {
        seenIds.set(item.id, index);
    }

    // Check Title Duplicates (Strict exact match)
    if (seenTitles.has(item.title)) {
        duplicates.push({ type: 'Title', val: item.title, indices: [seenTitles.get(item.title), index] });
    } else {
        seenTitles.set(item.title, index);
    }
});

if (duplicates.length > 0) {
    console.log("!! DUPLICATES FOUND !!");
    duplicates.forEach(d => {
        console.log(`- [${d.type}] "${d.val}" at indices ${d.indices.join(' and ')}`);
    });
} else {
    console.log("✅ No duplicates found (IDs or Titles).");
}

console.log("\n2. GRADE CONSISTENCY CHECK");
const gradeCounts = {};
const inconsistentItems = [];

readingData.forEach((item, index) => {
    // Count per grade
    gradeCounts[item.grade] = (gradeCounts[item.grade] || 0) + 1;

    // Check consistency
    // We expect the ID to start with the prefix mapped to the grade.
    // However, some IDs might be just numbers? I saw "id: 16" in the raw file views? 
    // Wait, the "id: 16" was inside "sentences". 
    // The top level IDs I saw were "pre1-..." etc.

    // Let's verify if ID is a string.
    if (typeof item.id !== 'string') {
        // Warning if top level ID is not a string (unless that's expected for some grades?)
        // console.log(`[Info] Item at index ${index} has non-string ID: ${item.id} (${typeof item.id})`);
    }

    // Heuristic Check
    const expectedPrefix = gradePrefixMap[item.grade];
    if (expectedPrefix) {
        if (typeof item.id === 'string' && !item.id.startsWith(expectedPrefix)) {
            // For 2級, sometimes it might be just "g2"? Let's be permissive or just log it.
            // If item.id starts with "g2" and expectation is "grade2", we might flag it.
            // Let's just log mismatches for review.
            inconsistentItems.push({
                index,
                id: item.id,
                grade: item.grade,
                expectedPrefix
            });
        }
    } else {
        // console.log(`[Info] No prefix rule for grade: "${item.grade}" (Index ${index}, ID: ${item.id})`);
    }
});

if (inconsistentItems.length > 0) {
    console.log("\nPotential Grade/ID Mismatches:");
    inconsistentItems.forEach(item => {
        console.log(`- Index ${item.index}: Grade="${item.grade}" but ID="${item.id}" (Expected start: "${item.expectedPrefix}")`);
    });
} else {
    console.log("✅ All items match their expected ID prefixes (where defined).");
}

console.log("\n3. ITEM COUNTS PER GRADE");
Object.entries(gradeCounts).forEach(([grade, count]) => {
    console.log(`- ${grade}: ${count} items`);
});

console.log("\n=== AUDIT COMPLETE ===");
