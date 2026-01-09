
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build complete data inline for Designing for Neurodiversity
const neurodiversityData = {
    "id": "grade-pre1-original-neurodiversity",
    "grade": "準1級",
    "title": "Designing for Neurodiversity",
    "subTitle": "問題10",
    "genre": "建築 / 心理学",
    "similarProblems": {
        "exam": "2024年度 第1回",
        "title": "Feminist Architecture"
    },
    "isOriginal": true,
    "images": {
        "content": "https://placehold.co/600x400?text=Neurodiverse+Design",
        "question": "https://placehold.co/600x400?text=Question+Image"
    },
    "content": [
        {
            "paragraphId": 1,
            "sentences": [
                {
                    "id": 1,
                    "text": "When walking into a modern office, most people do not question the open-plan layout that has become standard in corporate environments.",
                    "translation": "現代のオフィスに入るとき、ほとんどの人は企業環境で標準となっているオープンプランのレイアウトに疑問を持たない。",
                    "grammarAnalysis": {
                        "mainVerbs": ["do not question"],
                        "structureHtml": "<span class='chunk M-group'><span class='text'>(When walking into a modern office)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>most people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>do not question</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the open-plan layout (that <span class='chunk S2-group'><span class='text'>_</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>has become</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>standard</span><span class='tag'>C'</span></span>)</span><span class='tag'>O</span></span>.",
                        "translationHtml": "<span class='t-M'>(現代のオフィスに入るとき)</span>、<span class='t-S'>ほとんどの人は</span> <span class='t-V'>疑問を持たない</span> <span class='t-O'>オープンプランのレイアウトに (that <span class='t-S2'>_が</span> <span class='t-V2'>なった</span> <span class='t-C2'>標準に</span>)</span>。",
                        "naturalTranslation": "現代のオフィスに入るとき、ほとんどの人は企業環境で標準となっているオープンプランのレイアウトに疑問を持たない。",
                        "vocabulary": [
                            { "word": "open-plan layout", "meaning": "オープンプランのレイアウト（壁のない開放的な間取り）" },
                            { "word": "corporate environments", "meaning": "企業環境" }
                        ],
                        "grammarNotes": [
                            { "phrase": "When walking into", "explanation": "<b>分詞構文</b>: 時を表す。「〜するとき」。主語省略（= When they walk into）。" },
                            { "phrase": "that has become standard", "explanation": "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: that (= layout)</li><li><b>V'</b>: has become</li><li><b>C'</b>: standard</li></ul>layoutを修飾。" }
                        ]
                    }
                },
                {
                    "id": 2,
                    "text": "However, in recent years, a movement known as \"neurodiverse design\" has emerged, challenging the assumption that workspace environments typically cater to the needs of the majority.",
                    "translation": "しかしながら、近年、「ニューロダイバースデザイン」として知られる動きが出現し、職場環境が通常、多数派のニーズに応えているという仮定に異議を唱えている。",
                    "grammarAnalysis": {
                        "mainVerbs": ["has emerged"],
                        "structureHtml": "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(in recent years)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a movement (known as \"neurodiverse design\")</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has emerged</span><span class='tag'>V</span></span>, <span class='chunk M-group'><span class='text'>(challenging the assumption that...)</span><span class='tag'>M</span></span>.",
                        "translationHtml": "<span class='t-M'>(しかしながら)</span>、<span class='t-M'>(近年)</span>、<span class='t-S'>動きが(「ニューロダイバースデザイン」として知られる)</span> <span class='t-V'>出現した</span>、<span class='t-M'>(仮定に異議を唱えながら that...)</span>。",
                        "naturalTranslation": "しかしながら、近年、「ニューロダイバースデザイン」として知られる動きが出現し、職場環境が通常、多数派のニーズに応えているという仮定に異議を唱えている。",
                        "vocabulary": [
                            { "word": "neurodiverse design", "meaning": "ニューロダイバースデザイン（神経多様性を考慮した設計）" },
                            { "word": "cater to", "meaning": "〜のニーズに応える" },
                            { "word": "the majority", "meaning": "多数派" }
                        ],
                        "grammarNotes": [
                            { "phrase": "known as \"neurodiverse design\"", "explanation": "<b>過去分詞</b>: a movementを修飾する形容詞句。" },
                            { "phrase": "challenging the assumption", "explanation": "<b>分詞構文</b>: 結果または付帯状況を表す。「〜しながら/〜して」。" },
                            { "phrase": "that workspace environments typically cater to", "explanation": "<b>同格のthat節構造</b>:<ul><li><b>S'</b>: workspace environments</li><li><b>V'</b>: cater to</li><li><b>O'</b>: the needs of the majority</li></ul>assumptionの内容を説明。" }
                        ]
                    }
                },
                {
                    "id": 3,
                    "text": "Proponents of this movement argue that traditional offices, with their noise and lack of privacy, often fail to accommodate employees with neurological differences such as autism, ADHD, and dyslexia.",
                    "translation": "この運動の支持者たちは、従来のオフィスは騒音やプライバシーの欠如があり、自閉症、ADHD、失読症などの神経学的差異を持つ従業員に対応できないことが多いと主張している。",
                    "grammarAnalysis": {
                        "mainVerbs": ["argue"],
                        "structureHtml": "<span class='chunk S-group'><span class='text'>Proponents of this movement</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>argue</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that <span class='chunk S2-group'><span class='text'>traditional offices</span><span class='tag'>S'</span></span>, (with their noise and lack of privacy), <span class='chunk M2-group'><span class='text'>often</span><span class='tag'>M'</span></span> <span class='chunk V2-group'><span class='text'>fail to accommodate</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>employees</span><span class='tag'>O'</span></span></span><span class='tag'>O</span></span>.",
                        "translationHtml": "<span class='t-S'>この運動の支持者たちは</span> <span class='t-V'>主張している</span> <span class='t-O'>that [<span class='t-S2'>従来のオフィスは</span>、(騒音やプライバシーの欠如があり)、<span class='t-M2'>しばしば</span> <span class='t-V2'>対応できない</span> <span class='t-O2'>従業員に</span>]</span>。",
                        "naturalTranslation": "この運動の支持者たちは、従来のオフィスは騒音やプライバシーの欠如があり、自閉症、ADHD、失読症などの神経学的差異を持つ従業員に対応できないことが多いと主張している。",
                        "vocabulary": [
                            { "word": "proponents", "meaning": "支持者、提唱者" },
                            { "word": "accommodate", "meaning": "〜に対応する、受け入れる" },
                            { "word": "neurological differences", "meaning": "神経学的差異" },
                            { "word": "dyslexia", "meaning": "失読症" }
                        ],
                        "grammarNotes": [
                            { "phrase": "argue that", "explanation": "<b>that節構造</b>:<ul><li><b>S'</b>: traditional offices</li><li><b>V'</b>: fail to accommodate</li><li><b>O'</b>: employees with neurological differences</li></ul>主張の内容。" },
                            { "phrase": "with their noise and lack of privacy", "explanation": "<b>with + 名詞</b>: 付帯状況。「〜を伴って」。挿入句として機能。" },
                            { "phrase": "such as autism, ADHD, and dyslexia", "explanation": "<b>such as</b>: 例示。「〜のような」。" }
                        ]
                    }
                },
                {
                    "id": 4,
                    "text": "While relatively new, this design philosophy is already influencing how architects and companies approach the creation of workspaces.",
                    "translation": "比較的新しいものであるが、このデザイン哲学はすでに、建築家や企業がワークスペースの創造にどのようにアプローチするかに影響を与えている。",
                    "grammarAnalysis": {
                        "mainVerbs": ["is influencing"],
                        "structureHtml": "<span class='chunk M-group'><span class='text'>(While relatively new)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this design philosophy</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is already influencing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how <span class='chunk S2-group'><span class='text'>architects and companies</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>approach</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the creation</span><span class='tag'>O'</span></span></span><span class='tag'>O</span></span>.",
                        "translationHtml": "<span class='t-M'>(比較的新しいものであるが)</span>、<span class='t-S'>このデザイン哲学は</span> <span class='t-V'>すでに影響を与えている</span> <span class='t-O'>how [<span class='t-S2'>建築家や企業が</span> <span class='t-V2'>アプローチするか</span> <span class='t-O2'>創造に</span>]</span>。",
                        "naturalTranslation": "比較的新しいものであるが、このデザイン哲学はすでに、建築家や企業がワークスペースの創造にどのようにアプローチするかに影響を与えている。",
                        "vocabulary": [
                            { "word": "design philosophy", "meaning": "デザイン哲学" },
                            { "word": "approach", "meaning": "〜にアプローチする、取り組む" }
                        ],
                        "grammarNotes": [
                            { "phrase": "While relatively new", "explanation": "<b>譲歩のwhile</b>: 主語・動詞が省略。= While it is relatively new。「比較的新しいが」。" },
                            { "phrase": "how architects and companies approach", "explanation": "<b>間接疑問文（名詞節）構造</b>:<ul><li><b>S'</b>: architects and companies</li><li><b>V'</b>: approach</li><li><b>O'</b>: the creation of workspaces</li></ul>influencingの目的語。" }
                        ]
                    }
                }
            ]
        }
    ]
};

// Save initial JSON
const jsonPath = path.resolve(__dirname, 'neurodiversity_complete.json');
fs.writeFileSync(jsonPath, JSON.stringify(neurodiversityData, null, 4), 'utf8');
console.log('Created paragraph 1 JSON.');
