import { readingData } from './src/data/readingData.js';

const targetGrade = "4級";
console.log(`Filtering for grade: "${targetGrade}"`);

const filtered = readingData.filter(p => p.grade === targetGrade);

console.log(`Matched items: ${filtered.length}`);
filtered.forEach(p => {
    console.log(`MATCH: ID=${p.id}, Grade="${p.grade}", Title="${p.title}"`);
});

// Also check specifically for Meritocracy and its grade property
const meritocracy = readingData.filter(p => p.title && p.title.includes("Meritocracy"));
console.log(`\nMeritocracy items: ${meritocracy.length}`);
meritocracy.forEach(p => {
    console.log(`ID=${p.id}, Grade="${p.grade}", GradeType=${typeof p.grade}, Match4? ${p.grade === targetGrade}`);
    // Check for invisible chars
    console.log(`Grade char codes: ${p.grade.split('').map(c => c.charCodeAt(0)).join(',')}`);
});
