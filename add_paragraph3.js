
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.resolve(__dirname, 'left_brained_complete.json');
const baseData = JSON.parse(fs.readFileSync(basePath, 'utf8'));

// Add paragraph 3 sentences
baseData.content.push({
    "paragraphId": 3,
    "sentences": [
        {
            "id": 12,
            "text": "Despite the lack of scientific evidence, the left-brain/right-brain myth persists in education and corporate training.",
            "translation": "科学的証拠の欠如にもかかわらず、左脳/右脳神話は教育や企業研修において根強く残っている。",
            "grammarAnalysis": {
                "mainVerbs": ["persists"],
                "structureHtml": "<span class='chunk M-group'><span class='text'>(Despite the lack of scientific evidence)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the left-brain/right-brain myth</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>persists</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in education and corporate training)</span><span class='tag'>M</span></span>.",
                "translationHtml": "<span class='t-M'>(科学的証拠の欠如にもかかわらず)</span>、<span class='t-S'>左脳/右脳神話は</span> <span class='t-V'>根強く残っている</span> <span class='t-M'>(教育や企業研修において)</span>。",
                "naturalTranslation": "科学的証拠の欠如にもかかわらず、左脳/右脳神話は教育や企業研修において根強く残っている。",
                "vocabulary": [
                    { "word": "Despite", "meaning": "〜にもかかわらず" },
                    { "word": "persists", "meaning": "持続する、根強く残る" },
                    { "word": "corporate training", "meaning": "企業研修" }
                ],
                "grammarNotes": [
                    { "phrase": "Despite the lack of", "explanation": "<b>Despite + 名詞</b>: 「〜にもかかわらず」。" }
                ]
            }
        },
        {
            "id": 13,
            "text": "When individuals believe they are biologically limited to one mode of thinking, they may avoid developing skills associated with the \"other\" side.",
            "translation": "個人が自分は生物学的に一つの思考様式に限定されていると信じると、彼らは「反対側」に関連するスキルの発達を避ける可能性がある。",
            "grammarAnalysis": {
                "mainVerbs": ["may avoid"],
                "structureHtml": "<span class='chunk M-group'><span class='text'>(When <span class='chunk S2-group'><span class='text'>individuals</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>believe</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>they are biologically limited...</span><span class='tag'>O'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>may avoid</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>developing skills</span><span class='tag'>O</span></span>.",
                "translationHtml": "<span class='t-M'>(When <span class='t-S2'>個人が</span> <span class='t-V2'>信じると</span> <span class='t-O2'>自分が生物学的に限定されていると</span>)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>避ける可能性がある</span> <span class='t-O'>スキルを発達させることを</span>。",
                "naturalTranslation": "個人が自分は生物学的に一つの思考様式に限定されていると信じると、彼らは「反対側」に関連するスキルの発達を避ける可能性がある。",
                "vocabulary": [
                    { "word": "biologically", "meaning": "生物学的に" },
                    { "word": "mode of thinking", "meaning": "思考様式" }
                ],
                "grammarNotes": [
                    { "phrase": "When individuals believe", "explanation": "<b>when節構造</b>:<ul><li><b>S'</b>: individuals</li><li><b>V'</b>: believe</li><li><b>O'</b>: they are biologically limited...</li></ul>条件を表す。" },
                    { "phrase": "may avoid developing", "explanation": "<b>avoid + 動名詞</b>: 「〜することを避ける」。" }
                ]
            }
        },
        {
            "id": 14,
            "text": "For instance, a student labeled as \"right-brained\" might give up on mathematics too easily.",
            "translation": "例えば、「右脳型」とラベル付けされた学生は、数学をあまりにも簡単に諦めてしまうかもしれない。",
            "grammarAnalysis": {
                "mainVerbs": ["might give up"],
                "structureHtml": "<span class='chunk M-group'><span class='text'>(For instance)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a student (labeled as \"right-brained\")</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might give up</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on mathematics) (too easily)</span><span class='tag'>M</span></span>.",
                "translationHtml": "<span class='t-M'>(例えば)</span>、<span class='t-S'>学生は(「右脳型」とラベル付けされた)</span> <span class='t-V'>諦めてしまうかもしれない</span> <span class='t-M'>(数学を)(あまりにも簡単に)</span>。",
                "naturalTranslation": "例えば、「右脳型」とラベル付けされた学生は、数学をあまりにも簡単に諦めてしまうかもしれない。",
                "vocabulary": [
                    { "word": "give up on", "meaning": "〜を諦める" }
                ],
                "grammarNotes": [
                    { "phrase": "labeled as \"right-brained\"", "explanation": "<b>過去分詞</b>: a studentを修飾する形容詞句。" }
                ]
            }
        },
        {
            "id": 15,
            "text": "Recently, psychologists have focused on the concept of \"growth mindset,\" which suggests that the brain is plastic and can develop new pathways throughout life.",
            "translation": "最近、心理学者たちは「成長マインドセット」という概念に焦点を当てている。これは、脳は可塑的であり、生涯を通じて新しい経路を発達させることができることを示唆している。",
            "grammarAnalysis": {
                "mainVerbs": ["have focused"],
                "structureHtml": "<span class='chunk M-group'><span class='text'>(Recently)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>psychologists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have focused</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on the concept of \"growth mindset,\" (which suggests that...))</span><span class='tag'>M</span></span>.",
                "translationHtml": "<span class='t-M'>(最近)</span>、<span class='t-S'>心理学者たちは</span> <span class='t-V'>焦点を当てている</span> <span class='t-M'>(「成長マインドセット」という概念に (which...を示唆する))</span>。",
                "naturalTranslation": "最近、心理学者たちは「成長マインドセット」という概念に焦点を当てている。これは、脳は可塑的であり、生涯を通じて新しい経路を発達させることができることを示唆している。",
                "vocabulary": [
                    { "word": "growth mindset", "meaning": "成長マインドセット" },
                    { "word": "plastic", "meaning": "可塑的な、柔軟な" },
                    { "word": "pathways", "meaning": "経路、道筋" }
                ],
                "grammarNotes": [
                    { "phrase": "have focused on", "explanation": "<b>現在完了</b>: 最近の傾向を表す。" },
                    { "phrase": "which suggests that the brain is plastic", "explanation": "<b>関係代名詞節（非制限用法）構造</b>:<ul><li><b>S'</b>: which (= growth mindset)</li><li><b>V'</b>: suggests</li><li><b>O'</b>: that the brain is plastic...</li></ul>conceptを補足説明。" }
                ]
            }
        },
        {
            "id": 16,
            "text": "This perspective encourages people to view their cognitive abilities not as fixed traits determined by a dominant hemisphere, but as malleable skills that can be improved with practice.",
            "translation": "この視点は、人々に認知能力を優位な半球によって決定された固定的な特性としてではなく、練習で向上できる可鍛性のあるスキルとして見るよう促している。",
            "grammarAnalysis": {
                "mainVerbs": ["encourages"],
                "structureHtml": "<span class='chunk S-group'><span class='text'>This perspective</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>encourages</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to view their cognitive abilities (not as ... but as ...)</span><span class='tag'>C</span></span>.",
                "translationHtml": "<span class='t-S'>この視点は</span> <span class='t-V'>促す</span> <span class='t-O'>人々に</span> <span class='t-C'>認知能力を見るよう (〜としてではなく、〜として)</span>。",
                "naturalTranslation": "この視点は、人々に認知能力を優位な半球によって決定された固定的な特性としてではなく、練習で向上できる可鍛性のあるスキルとして見るよう促している。",
                "vocabulary": [
                    { "word": "fixed traits", "meaning": "固定的な特性" },
                    { "word": "malleable", "meaning": "可鍛性のある、柔軟な" }
                ],
                "grammarNotes": [
                    { "phrase": "encourages people to view", "explanation": "<b>encourage O to do</b>: 「Oに〜するよう促す」。" },
                    { "phrase": "not as ... but as ...", "explanation": "<b>not A but B構造</b>:<ul><li><b>A</b>: fixed traits determined by a dominant hemisphere</li><li><b>B</b>: malleable skills that can be improved with practice</li></ul>「AとしてではなくBとして」。" },
                    { "phrase": "determined by a dominant hemisphere", "explanation": "<b>過去分詞</b>: fixed traitsを修飾。" },
                    { "phrase": "that can be improved with practice", "explanation": "<b>関係代名詞節</b>: malleable skillsを修飾。" }
                ]
            }
        },
        {
            "id": 17,
            "text": "The human brain remains a complex web of connections, resisting simple labels.",
            "translation": "人間の脳は、単純なラベルに抵抗しながら、複雑な接続の網として残り続けている。",
            "grammarAnalysis": {
                "mainVerbs": ["remains"],
                "structureHtml": "<span class='chunk S-group'><span class='text'>The human brain</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>remains</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a complex web of connections</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(resisting simple labels)</span><span class='tag'>M</span></span>.",
                "translationHtml": "<span class='t-S'>人間の脳は</span> <span class='t-V'>〜のままである</span> <span class='t-C'>複雑な接続の網</span>、<span class='t-M'>(単純なラベルに抵抗しながら)</span>。",
                "naturalTranslation": "人間の脳は、単純なラベルに抵抗しながら、複雑な接続の網として残り続けている。",
                "vocabulary": [
                    { "word": "web of connections", "meaning": "接続の網" },
                    { "word": "resisting", "meaning": "抵抗する" }
                ],
                "grammarNotes": [
                    { "phrase": "resisting simple labels", "explanation": "<b>分詞構文</b>: 付帯状況を表す。「〜しながら」。" }
                ]
            }
        }
    ]
});

fs.writeFileSync(basePath, JSON.stringify(baseData, null, 4), 'utf8');
console.log('Added paragraph 3 to left_brained_complete.json');
