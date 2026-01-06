import { readingData } from './src/data/readingData.js';

const target = readingData.filter(d => 
    (d.grade === '準1級' || d.id.includes('pre1')) && 
    (d.subTitle.includes('2025') || d.id.includes('2025'))
);

console.log(`Found ${target.length} items.`);
target.forEach(t => {
   console.log(`ID: ${t.id}, Title: ${t.title}, SubTitle: ${t.subTitle}`); 
   console.log(`Has Content: ${!!t.content && t.content.length > 0}`);
   console.log(`Has Questions: ${!!t.questions && t.questions.length > 0}`);
});
