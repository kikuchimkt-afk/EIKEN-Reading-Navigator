// Left-Brained Thinker - Questions and Summary

const questionsAndSummary = {
    questions: [
        {
            id: 1,
            text: "The idea of people being \"left-brained\" or \"right-brained\" is described as a myth because",
            textTranslation: "人々が「左脳型」か「右脳型」かという考えが神話であると説明されているのは、なぜですか？",
            choices: [
                { id: 1, text: "it was invented by corporate trainers to sell personality tests to companies.", translation: "企業研修講師が企業に性格テストを売り込むために作り上げたから。", isCorrect: false },
                { id: 2, text: "it assumes that the left hemisphere controls creativity while the right controls logic, which is the reverse of reality.", translation: "左半球が創造性を、右半球が論理を制御すると仮定しているが、これは現実の逆だから。", isCorrect: false },
                { id: 3, text: "it originated from a misunderstanding of research done on patients who had a specific medical procedure.", translation: "特定の医療処置を受けた患者に対して行われた研究の誤解から生じたから。", isCorrect: true, highlight: "originated from a misunderstanding ... specific medical procedure" },
                { id: 4, text: "researchers found that people with epilepsy actually use their brains more efficiently than healthy people.", translation: "てんかん患者が実際には健康な人よりも脳を効率的に使っていることを研究者が発見したから。", isCorrect: false }
            ],
            hint: {
                paragraphId: 1,
                description: "第1段落。この神話がどこから生じたか（originated）について述べている部分を探しましょう。",
                targetSentenceId: 3,
                highlightWord: "misinterpretations of Nobel Prize-winning research",
                highlightWordSentenceId: 3
            },
            keywords: ["myth", "because"],
            keywordExplanations: {
                "myth": "神話。本文でそのまま使用。",
                "because": "理由を問う問題。originated（生じた）の原因を探す。"
            },
            keywordMatches: [
                { sentenceId: 2, text: "myth", keyword: "myth" },
                { sentenceId: 3, text: "originated from misinterpretations", keyword: "because" }
            ],
            choiceAdvice: "1: 企業研修講師が作った？ 2: 左右の役割が逆？ 3: 研究の誤解から？ 4: てんかん患者の方が効率的？",
            logic: [
                { type: "text", content: "本文(Sentence 3): 「1960年代のてんかん治療のための分離脳手術を受けた患者に関するノーベル賞受賞研究の誤解(misinterpretations)から生じた(originated)ようである」" },
                { type: "text", content: "【決定要因】特定の医療処置(split-brain surgery)を受けた患者の研究がmisinterpret(誤解)されたことが原因。" },
                { type: "arrow", content: "↓" },
                { type: "text", content: "選択肢3「特定の医療処置を受けた患者に対する研究の誤解から生じた」と一致する。" },
                { type: "conclusion", content: "正解: 3" }
            ]
        },
        {
            id: 2,
            text: "What have neuroscientists learned using modern technology?",
            textTranslation: "神経科学者たちは現代の技術を使って何を学びましたか？",
            choices: [
                { id: 1, text: "Complex tasks require the whole brain to work together as a network rather than relying on one side.", translation: "複雑な課題は、片側に頼るのではなく、ネットワークとして脳全体が協力して働くことを必要とする。", isCorrect: true, highlight: "whole brain to work together as a network" },
                { id: 2, text: "Language processing is the only function that is evenly distributed across both hemispheres.", translation: "言語処理は両半球に均等に分布している唯一の機能である。", isCorrect: false },
                { id: 3, text: "The brain connects the two hemispheres only when a person is performing an artistic task.", translation: "脳は、芸術的な課題を行っているときにのみ両半球を接続する。", isCorrect: false },
                { id: 4, text: "Most people actually have a dominant hemisphere, but it changes depending on the time of day.", translation: "ほとんどの人は実際には優位な半球を持っているが、それは時間帯によって変わる。", isCorrect: false }
            ],
            hint: {
                paragraphId: 2,
                description: "第2段落。fMRI技術を使って発見したこと（found that）を探しましょう。",
                targetSentenceId: 8,
                highlightWord: "integrated effort of the entire brain",
                highlightWordSentenceId: 8
            },
            keywords: ["neuroscientists", "modern technology", "learned"],
            keywordExplanations: {
                "neuroscientists": "神経科学者。第2段落冒頭にそのまま登場。",
                "modern technology": "現代の技術。fMRI technologyと対応。"
            },
            keywordMatches: [
                { sentenceId: 7, text: "Neuroscientists", keyword: "neuroscientists" },
                { sentenceId: 7, text: "modern fMRI technology", keyword: "modern technology" }
            ],
            choiceAdvice: "1: 脳全体がネットワークとして働く？ 2: 言語処理だけ均等分布？ 3: 芸術課題のときだけ接続？ 4: 優位な半球が時間で変わる？",
            logic: [
                { type: "text", content: "本文(Sentence 8): 「複雑な認知課題は、高度に調整されたネットワークのように機能する脳全体(the entire brain)の統合された努力(integrated effort)を必要とする」" },
                { type: "text", content: "【決定要因】entire brain（脳全体）、integrated effort（統合された努力）、network（ネットワーク）が選択肢1と合致。" },
                { type: "arrow", content: "↓" },
                { type: "text", content: "選択肢1「複雑な課題は片側に頼るのではなく脳全体がネットワークとして働くことを必要とする」と一致する。" },
                { type: "conclusion", content: "正解: 1" }
            ]
        },
        {
            id: 3,
            text: "According to the passage, what is a negative consequence of believing in this myth?",
            textTranslation: "この文章によると、この神話を信じることの否定的な結果は何ですか？",
            choices: [
                { id: 1, text: "Schools may stop teaching art and music because they are seen as less important than math.", translation: "学校は芸術と音楽が数学より重要でないと見なされるため、教えなくなるかもしれない。", isCorrect: false },
                { id: 2, text: "People may limit their own potential by avoiding subjects they believe they are not biologically suited for.", translation: "人々は、自分が生物学的に向いていないと信じる科目を避けることで、自分の可能性を制限するかもしれない。", isCorrect: true, highlight: "limit their own potential by avoiding subjects" },
                { id: 3, text: "Companies might fire employees who are identified as \"right-brained\" because they are seen as disorganized.", translation: "企業は「右脳型」と特定された従業員を無秩序だと見なされるため解雇するかもしれない。", isCorrect: false },
                { id: 4, text: "Students with a \"growth mindset\" are often discouraged from taking standardized tests.", translation: "「成長マインドセット」を持つ学生は標準化テストを受けることを思いとどまらせられることが多い。", isCorrect: false }
            ],
            hint: {
                paragraphId: 3,
                description: "第3段落。神話を信じることでどのような悪影響があるか（may avoid）を探しましょう。",
                targetSentenceId: 13,
                highlightWord: "may avoid developing skills",
                highlightWordSentenceId: 13
            },
            keywords: ["negative consequence", "believing", "myth"],
            keywordExplanations: {
                "negative consequence": "否定的な結果。may avoid（避けるかもしれない）などネガティブな影響。",
                "believing": "信じること。第3段落のbelieveと対応。"
            },
            keywordMatches: [
                { sentenceId: 13, text: "believe they are biologically limited", keyword: "believing" },
                { sentenceId: 13, text: "may avoid developing skills", keyword: "negative consequence" }
            ],
            choiceAdvice: "1: 芸術・音楽を教えなくなる？ 2: 自分の可能性を制限？ 3: 右脳型は解雇？ 4: 成長マインドセットの学生がテストを避ける？",
            logic: [
                { type: "text", content: "本文(Sentence 13): 「個人が自分は生物学的に一つの思考様式に限定されていると信じると、彼らは『反対側』に関連するスキルの発達を避ける(may avoid developing skills)可能性がある」" },
                { type: "text", content: "本文(Sentence 14): 例として「『右脳型』とラベル付けされた学生は数学をあまりにも簡単に諦めてしまうかもしれない」" },
                { type: "text", content: "【決定要因】自分の可能性を制限(limit potential) = スキル発達を避ける(avoid developing skills)。" },
                { type: "arrow", content: "↓" },
                { type: "text", content: "選択肢2「人々は自分が生物学的に向いていないと信じる科目を避けることで、自分の可能性を制限するかもしれない」と一致する。" },
                { type: "conclusion", content: "正解: 2" }
            ]
        }
    ],
    summaryForInstructors: {
        title: "The Myth of the 'Left-Brained' Thinker（「左脳型」思考者の神話）",
        intro: "「左脳型」（論理的）か「右脳型」（創造的）という二分法が科学的に根拠のない神話であることを解説したパッセージ。この俗説の起源、現代神経科学による反証、そして教育への悪影響について論じています。",
        points: [
            { label: "1. 神話の起源（第1段落）", text: "左脳/右脳神話は1960年代のてんかん治療のための分離脳手術研究の誤解から生じた。手術により脳梁が切断された患者では確かに左右が独立して機能したが、通常の脳では両半球は常に連携している。脳スキャンは優位な側の証拠を示さない。" },
            { label: "2. 現代神経科学の知見（第2段落）", text: "fMRI技術を用いた研究により、複雑な認知課題は脳全体の統合された努力を必要とすることが判明。数学問題を解く（左脳的）には視覚化（右脳的）が必要であり、その逆も同様。「右脳型」というラベルは「右肺だけ使う」と言うのと同じくらい不正確。" },
            { label: "3. 教育への悪影響と成長マインドセット（第3段落）", text: "科学的証拠がないにもかかわらず神話は教育や企業研修に根強く残る。自分が「右脳型」だと信じると数学を諦めやすくなるなど、可能性を制限してしまう。「成長マインドセット」の概念は、脳は可塑的で生涯を通じて発達できることを示唆し、能力は固定的でなく練習で向上できると考えるよう促す。" }
        ]
    }
};

module.exports = questionsAndSummary;
