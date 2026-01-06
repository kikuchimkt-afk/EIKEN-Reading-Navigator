import { readingData } from './src/data/readingData.js';

console.log(`Total items: ${readingData.length}`);
readingData.forEach((d, i) => {
    console.log(`[${i}] ID: ${d.id}, Grade: "${d.grade}", Title: "${d.title}"`);
});
