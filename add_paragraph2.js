
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read existing JSON and add remaining data
const basePath = path.resolve(__dirname, 'left_brained_complete.json');
const baseData = JSON.parse(fs.readFileSync(basePath, 'utf8'));

// Add paragraph 2 sentences
baseData.content.push({
    "paragraphId": 2,
    "sentences": [
        {
            "id": 7,
            "text": "Neuroscientists studying brain connectivity have made some clarifying observations using modern fMRI technology.",
            "translation": "脳の接続性を研究する神経科学者たちは、現代のfMRI技術を使用して、いくつかの明確化する観察を行った。",
            "grammarAnalysis": {
                "mainVerbs": ["have made"],
                "structureHtml": "<span class='chunk S-group'><span class='text'>Neuroscientists (studying brain connectivity)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some clarifying observations</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(using modern fMRI technology)</span><span class='tag'>M</span></span>.",
                "translationHtml": "<span class='t-S'>神経科学者たちは(脳の接続性を研究する)</span> <span class='t-V'>行った</span> <span class='t-O'>いくつかの明確化する観察を</span> <span class='t-M'>(現代のfMRI技術を使用して)</span>。",
                "naturalTranslation": "脳の接続性を研究する神経科学者たちは、現代のfMRI技術を使用して、いくつかの明確化する観察を行った。",
                "vocabulary": [
                    { "word": "connectivity", "meaning": "接続性" },
                    { "word": "fMRI", "meaning": "機能的磁気共鳴画像法" },
                    { "word": "clarifying", "meaning": "明確化する" }
                ],
                "grammarNotes": [
                    { "phrase": "studying brain connectivity", "explanation": "<b>現在分詞</b>: Neuroscientistsを修飾する形容詞句。" },
                    { "phrase": "using modern fMRI technology", "explanation": "<b>分詞構文</b>: 手段を表す。「〜を使って」。" }
                ]
            }
        },
        {
            "id": 8,
            "text": "They found that while certain functions are indeed localized—for example, language processing is typically centered in the left hemisphere—complex cognitive tasks require the integrated effort of the entire brain which functions like a highly coordinated network.",
            "translation": "彼らは、特定の機能は確かに局在化している—例えば、言語処理は通常左半球に集中している—一方で、複雑な認知課題は、高度に調整されたネットワークのように機能する脳全体の統合された努力を必要とすることを発見した。",
            "grammarAnalysis": {
                "mainVerbs": ["found", "are localized", "require"],
                "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>found</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that (while ... localized—...) <span class='chunk S2-group'><span class='text'>complex cognitive tasks</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>require</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the integrated effort</span><span class='tag'>O'</span></span></span><span class='tag'>O</span></span>.",
                "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>発見した</span> <span class='t-O'>that (while...一方で) [<span class='t-S2'>複雑な認知課題は</span> <span class='t-V2'>必要とする</span> <span class='t-O2'>統合された努力を</span>]</span>。",
                "naturalTranslation": "彼らは、特定の機能は確かに局在化している一方で、複雑な認知課題は脳全体の統合された努力を必要とすることを発見した。",
                "vocabulary": [
                    { "word": "localized", "meaning": "局在化した" },
                    { "word": "cognitive", "meaning": "認知の" },
                    { "word": "integrated", "meaning": "統合された" }
                ],
                "grammarNotes": [
                    { "phrase": "while certain functions are indeed localized", "explanation": "<b>譲歩のwhile節構造</b>:<ul><li><b>S'</b>: certain functions</li><li><b>V'</b>: are localized</li></ul>「〜である一方で」という譲歩を表す。" },
                    { "phrase": "—for example, language processing is typically centered—", "explanation": "<b>ダッシュによる挿入</b>: 具体例を挿入。読み飛ばしても文意は通る。" },
                    { "phrase": "which functions like a highly coordinated network", "explanation": "<b>関係代名詞節</b>: the entire brainを説明。" }
                ]
            }
        },
        {
            "id": 9,
            "text": "Solving a math problem (stereotypically left-brain) requires visualization (stereotypically right-brain), just as painting a picture requires planning and technique.",
            "translation": "数学の問題を解くこと（ステレオタイプ的には左脳）は、絵を描くことが計画と技術を必要とするのと同様に、視覚化（ステレオタイプ的には右脳）を必要とする。",
            "grammarAnalysis": {
                "mainVerbs": ["requires"],
                "structureHtml": "<span class='chunk S-group'><span class='text'>Solving a math problem (stereotypically left-brain)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>requires</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>visualization (stereotypically right-brain)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(just as <span class='chunk S2-group'><span class='text'>painting a picture</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>requires</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>planning and technique</span><span class='tag'>O'</span></span>)</span><span class='tag'>M</span></span>.",
                "translationHtml": "<span class='t-S'>数学の問題を解くことは</span> <span class='t-V'>必要とする</span> <span class='t-O'>視覚化を</span>、<span class='t-M'>(just as <span class='t-S2'>絵を描くことが</span> <span class='t-V2'>必要とする</span> <span class='t-O2'>計画と技術を</span>のと同様に)</span>。",
                "naturalTranslation": "数学の問題を解くこと（ステレオタイプ的には左脳）は、絵を描くことが計画と技術を必要とするのと同様に、視覚化（ステレオタイプ的には右脳）を必要とする。",
                "vocabulary": [
                    { "word": "stereotypically", "meaning": "ステレオタイプ的に" },
                    { "word": "visualization", "meaning": "視覚化" }
                ],
                "grammarNotes": [
                    { "phrase": "Solving a math problem", "explanation": "<b>動名詞</b>: 文の主語。" },
                    { "phrase": "(stereotypically left-brain)", "explanation": "<b>括弧による挿入</b>: 補足説明。" },
                    { "phrase": "just as painting a picture requires", "explanation": "<b>just as節構造</b>:<ul><li><b>S'</b>: painting a picture</li><li><b>V'</b>: requires</li><li><b>O'</b>: planning and technique</li></ul>「〜するのと同様に」。" }
                ]
            }
        },
        {
            "id": 10,
            "text": "This integrated system allows for a flexibility and power that a divided brain could never achieve.",
            "translation": "この統合されたシステムは、分割された脳では決して達成できない柔軟性と力を可能にする。",
            "grammarAnalysis": {
                "mainVerbs": ["allows"],
                "structureHtml": "<span class='chunk S-group'><span class='text'>This integrated system</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allows for</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a flexibility and power (that <span class='chunk S2-group'><span class='text'>a divided brain</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>could never achieve</span><span class='tag'>V'</span></span>)</span><span class='tag'>O</span></span>.",
                "translationHtml": "<span class='t-S'>この統合されたシステムは</span> <span class='t-V'>可能にする</span> <span class='t-O'>柔軟性と力を (that <span class='t-S2'>分割された脳が</span> <span class='t-V2'>決して達成できない</span>)</span>。",
                "naturalTranslation": "この統合されたシステムは、分割された脳では決して達成できない柔軟性と力を可能にする。",
                "vocabulary": [
                    { "word": "allows for", "meaning": "〜を可能にする" },
                    { "word": "flexibility", "meaning": "柔軟性" }
                ],
                "grammarNotes": [
                    { "phrase": "that a divided brain could never achieve", "explanation": "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: a divided brain</li><li><b>V'</b>: could never achieve</li></ul>flexibility and powerを修飾。" }
                ]
            }
        },
        {
            "id": 11,
            "text": "As one researcher puts it, labeling someone as \"right-brained\" is as scientifically inaccurate as saying they use only their right lung; the system is designed to function as a whole.",
            "translation": "ある研究者が言うように、誰かを「右脳型」とラベル付けすることは、彼らが右肺だけを使うと言うのと同じくらい科学的に不正確である。システムは全体として機能するように設計されている。",
            "grammarAnalysis": {
                "mainVerbs": ["is", "is designed"],
                "structureHtml": "<span class='chunk M-group'><span class='text'>(As one researcher puts it)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>labeling someone as \"right-brained\"</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>as scientifically inaccurate as saying...</span><span class='tag'>C</span></span>.",
                "translationHtml": "<span class='t-M'>(ある研究者が言うように)</span>、<span class='t-S'>誰かを「右脳型」とラベル付けすることは</span> <span class='t-V'>である</span> <span class='t-C'>〜と言うのと同じくらい科学的に不正確</span>。",
                "naturalTranslation": "ある研究者が言うように、誰かを「右脳型」とラベル付けすることは、彼らが右肺だけを使うと言うのと同じくらい科学的に不正確である。",
                "vocabulary": [
                    { "word": "labeling", "meaning": "ラベル付けする" },
                    { "word": "inaccurate", "meaning": "不正確な" }
                ],
                "grammarNotes": [
                    { "phrase": "As one researcher puts it", "explanation": "<b>分詞構文的表現</b>: 「〜が言うように」。" },
                    { "phrase": "as ... as saying", "explanation": "<b>同等比較</b>: 「〜と同じくらい...」。" },
                    { "phrase": "the system is designed to function", "explanation": "<b>受動態+不定詞</b>: 「〜するように設計されている」。" }
                ]
            }
        }
    ]
});

// Save updated JSON
fs.writeFileSync(basePath, JSON.stringify(baseData, null, 4), 'utf8');
console.log('Added paragraph 2 to left_brained_complete.json');
