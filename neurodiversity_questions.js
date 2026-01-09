// Designing for Neurodiversity - Questions and Summary

const questionsAndSummary = {
    questions: [
        {
            id: 1,
            text: "What led to the emergence of the neurodiverse design movement?",
            textTranslation: "ニューロダイバースデザイン運動の出現につながったのは何ですか？",
            choices: [
                { id: 1, text: "A decrease in the number of companies willing to adopt open-plan office layouts due to high costs.", translation: "高コストのためオープンプランオフィスのレイアウトを採用しようとする企業の数が減少したこと。", isCorrect: false },
                { id: 2, text: "The realization that standard office environments were often unsuitable for employees with neurological differences.", translation: "標準的なオフィス環境が神経学的差異を持つ従業員には適していないことが多いという認識。", isCorrect: true, highlight: "standard office environments were often unsuitable" },
                { id: 3, text: "A desire among architects to return to more traditional, private office designs from the past.", translation: "建築家の間で過去のより伝統的でプライベートなオフィスデザインに戻りたいという願望。", isCorrect: false },
                { id: 4, text: "The discovery that neurotypical employees were also dissatisfied with the noise levels in open offices.", translation: "定型発達の従業員もオープンオフィスの騒音レベルに不満を持っていたという発見。", isCorrect: false }
            ],
            hint: {
                paragraphId: 1,
                description: "第1段落。この運動がなぜ出現したか（What led to）について述べている部分を探しましょう。",
                targetSentenceId: 3,
                highlightWord: "fail to accommodate employees with neurological differences",
                highlightWordSentenceId: 3
            },
            keywords: ["led to", "emergence", "neurodiverse design movement"],
            keywordExplanations: {
                "led to": "「〜につながった」。原因を問う表現。",
                "emergence": "出現。第1段落のhas emergedと対応。"
            },
            keywordMatches: [
                { sentenceId: 2, text: "has emerged", keyword: "emergence" },
                { sentenceId: 3, text: "fail to accommodate employees with neurological differences", keyword: "led to" }
            ],
            choiceAdvice: "1: 高コストで企業数減少？ 2: 神経学的差異に不適切？ 3: 伝統的デザインへ回帰願望？ 4: 定型発達者も騒音不満？",
            logic: [
                { type: "text", content: "本文(Sentence 3): 「この運動の支持者たちは、従来のオフィスは...自閉症、ADHD、失読症などの神経学的差異を持つ従業員に対応できない(fail to accommodate)ことが多いと主張している」" },
                { type: "text", content: "【決定要因】神経学的差異(neurological differences)を持つ従業員にオフィス環境が不適切(fail to accommodate = unsuitable)。" },
                { type: "arrow", content: "↓" },
                { type: "text", content: "選択肢2「標準的なオフィス環境が神経学的差異を持つ従業員には適していないことが多いという認識」と一致する。" },
                { type: "conclusion", content: "正解: 2" }
            ]
        },
        {
            id: 2,
            text: "What is one problem with the open-plan office design mentioned in the second paragraph?",
            textTranslation: "第2段落で述べられているオープンプランオフィスデザインの問題点は何ですか？",
            choices: [
                { id: 1, text: "It discourages collaboration among employees because it creates too many distractions.", translation: "気が散る要因が多すぎるため、従業員間のコラボレーションを妨げる。", isCorrect: false },
                { id: 2, text: "It relies on natural lighting, which is often insufficient for detailed work during the winter months.", translation: "自然光に頼っているが、冬季には詳細な作業には不十分なことが多い。", isCorrect: false },
                { id: 3, text: "It is based on the sensory needs of the average person and ignores those who are sensitive to stimuli.", translation: "平均的な人の感覚的ニーズに基づいており、刺激に敏感な人を無視している。", isCorrect: true, highlight: "based on the sensory needs of the average person" },
                { id: 4, text: "It is often too expensive for smaller companies to implement effectively compared to traditional layouts.", translation: "従来のレイアウトと比較して小規模企業には効果的に実装するには高すぎることが多い。", isCorrect: false }
            ],
            hint: {
                paragraphId: 2,
                description: "第2段落。オープンプランオフィスの問題点（based on / hypersensitive）を探しましょう。",
                targetSentenceId: 6,
                highlightWord: "is based on the sensory tolerance of the \"neurotypical\" or average person",
                highlightWordSentenceId: 6
            },
            keywords: ["problem", "open-plan office design", "second paragraph"],
            keywordExplanations: {
                "problem": "問題点。第2段落のcan be overwhelmingなど否定的な影響。",
                "open-plan office design": "オープンプランオフィスデザイン。第2段落のメイントピック。"
            },
            keywordMatches: [
                { sentenceId: 6, text: "is based on the sensory tolerance of the \"neurotypical\" or average person", keyword: "problem" },
                { sentenceId: 8, text: "hypersensitive to sensory stimuli", keyword: "problem" }
            ],
            choiceAdvice: "1: コラボレーションを妨げる？ 2: 自然光が不十分？ 3: 平均的な人に基づき敏感な人を無視？ 4: 小企業には高すぎる？",
            logic: [
                { type: "text", content: "本文(Sentence 6): 「このレイアウトは、『定型発達』または平均的な人(average person)の感覚的許容度に基づいている(is based on)」" },
                { type: "text", content: "本文(Sentence 8): 「感覚刺激に過敏な人々(hypersensitive to sensory stimuli)にとって、これらの要素は圧倒的なものとなりうる」" },
                { type: "text", content: "【決定要因】average person(平均的な人)に基づき(based on)、hypersensitive(過敏な人)を無視(ignores)している。" },
                { type: "arrow", content: "↓" },
                { type: "text", content: "選択肢3「平均的な人の感覚的ニーズに基づいており、刺激に敏感な人を無視している」と一致する。" },
                { type: "conclusion", content: "正解: 3" }
            ]
        },
        {
            id: 3,
            text: "Advocates of neurodiverse design argue against focusing on the \"standard\" user because",
            textTranslation: "ニューロダイバースデザインの支持者が「標準的な」ユーザーに焦点を当てることに反対する理由は？",
            choices: [
                { id: 1, text: "it is impossible to define what a standard user is in today's diverse workforce.", translation: "今日の多様な労働力において標準的なユーザーとは何かを定義することは不可能だから。", isCorrect: false },
                { id: 2, text: "doing so fails to acknowledge the fact that people process sensory information in different ways.", translation: "そうすることは、人々が感覚情報を異なる方法で処理するという事実を認めないことになるから。", isCorrect: true, highlight: "fails to acknowledge ... people process sensory information in different ways" },
                { id: 3, text: "most employees prefer to have a fixed desk rather than moving between different work zones.", translation: "ほとんどの従業員は異なるワークゾーン間を移動するよりも固定席を好むから。", isCorrect: false },
                { id: 4, text: "architects usually do not have enough data to determine what the average preferences are.", translation: "建築家は通常、平均的な好みを決定するのに十分なデータを持っていないから。", isCorrect: false }
            ],
            hint: {
                paragraphId: 3,
                description: "第3段落。なぜ「標準的な」ユーザーに焦点を当てることに反対するか（because）を探しましょう。",
                targetSentenceId: 10,
                highlightWord: "human brains process information differently",
                highlightWordSentenceId: 10
            },
            keywords: ["argue against", "standard user", "because"],
            keywordExplanations: {
                "argue against": "〜に反対する。第3段落のrejectsと対応。",
                "because": "理由を問う。that節の内容を探す。"
            },
            keywordMatches: [
                { sentenceId: 9, text: "rejects the idea of a \"standard\" user", keyword: "argue against" },
                { sentenceId: 10, text: "human brains process information differently", keyword: "because" }
            ],
            choiceAdvice: "1: 標準を定義不可能？ 2: 感覚情報を異なる方法で処理？ 3: 固定席を好む？ 4: データ不足？",
            logic: [
                { type: "text", content: "本文(Sentence 9): 「ニューロダイバースデザインは『標準的な』ユーザーという概念を拒否する(rejects)」" },
                { type: "text", content: "本文(Sentence 10): 「支持者たちは、人間の脳が情報を異なる方法で処理する(process information differently)ことを認識することで、建築家はより良いワークスペースを作れると論じている」" },
                { type: "text", content: "【決定要因】脳が情報を異なる方法で処理する(process differently)→ 選択肢2のprocess sensory information in different waysと対応。" },
                { type: "arrow", content: "↓" },
                { type: "text", content: "選択肢2「人々が感覚情報を異なる方法で処理するという事実を認めないことになるから」と一致する。" },
                { type: "conclusion", content: "正解: 2" }
            ]
        },
        {
            id: 4,
            text: "Which of the following statements best describes the impact of neurodiverse design?",
            textTranslation: "ニューロダイバースデザインの影響を最もよく表している文はどれですか？",
            choices: [
                { id: 1, text: "It has forced companies to spend significantly more money on construction without seeing clear benefits.", translation: "明確なメリットを得ることなく、企業に建設にはるかに多くの費用を費やさせることを余儀なくさせた。", isCorrect: false },
                { id: 2, text: "It has led to a separation of neurodivergent and neurotypical employees into different buildings.", translation: "神経発達症の従業員と定型発達の従業員を異なる建物に分離することにつながった。", isCorrect: false },
                { id: 3, text: "It has resulted in better work environments that benefit the entire workforce, not just neurodivergent people.", translation: "神経発達症の人々だけでなく、全従業員に利益をもたらすより良い労働環境をもたらした。", isCorrect: true, highlight: "benefit the entire workforce, not just neurodivergent people" },
                { id: 4, text: "It has caused architects to stop using virtual reality technology because it does not accurately reflect real-world sensory experiences.", translation: "バーチャルリアリティ技術が現実世界の感覚体験を正確に反映しないため、建築家がそれを使用しなくなった。", isCorrect: false }
            ],
            hint: {
                paragraphId: 5,
                description: "第5段落。ニューロダイバースデザインの影響（impact）について述べている部分を探しましょう。",
                targetSentenceId: 18,
                highlightWord: "universally beneficial",
                highlightWordSentenceId: 18
            },
            keywords: ["impact", "neurodiverse design", "best describes"],
            keywordExplanations: {
                "impact": "影響。第5段落冒頭にそのまま登場。",
                "best describes": "最も良く表す。全体的な結論を探す。"
            },
            keywordMatches: [
                { sentenceId: 17, text: "extends beyond just helping a specific group", keyword: "impact" },
                { sentenceId: 18, text: "universally beneficial", keyword: "impact" }
            ],
            choiceAdvice: "1: 費用増加でメリットなし？ 2: 異なる建物に分離？ 3: 全従業員に利益？ 4: VR使用中止？",
            logic: [
                { type: "text", content: "本文(Sentence 17): 「ニューロダイバースデザインの影響は、特定の従業員グループを助けることだけにとどまらない(extends beyond just helping a specific group)；それはすべての人の労働環境を改善している(improving the work environment for everyone)」" },
                { type: "text", content: "本文(Sentence 18): 「その原則は普遍的に有益(universally beneficial)であることが証明されている」" },
                { type: "text", content: "【決定要因】for everyone（すべての人）= the entire workforce（全従業員）。not just a specific group = not just neurodivergent people。" },
                { type: "arrow", content: "↓" },
                { type: "text", content: "選択肢3「神経発達症の人々だけでなく、全従業員に利益をもたらすより良い労働環境をもたらした」と一致する。" },
                { type: "conclusion", content: "正解: 3" }
            ]
        }
    ],
    summaryForInstructors: {
        title: "Designing for Neurodiversity（ニューロダイバーシティのためのデザイン）",
        intro: "職場環境を神経多様性の観点から再設計する「ニューロダイバースデザイン」運動について解説したパッセージ。オープンプランオフィスの問題点、新しいデザイン哲学の原則、具体的な実践例、そしてすべての従業員への普遍的な恩恵について論じています。",
        points: [
            { label: "1. 運動の出現（第1段落）", text: "近年、「ニューロダイバースデザイン」という運動が出現。支持者は従来のオープンプランオフィスが騒音やプライバシー欠如により、自閉症・ADHD・失読症などの神経学的差異を持つ従業員に対応できていないと主張。比較的新しいが、ワークスペース創造へのアプローチに既に影響を与えている。" },
            { label: "2. オープンプランの問題点（第2段落）", text: "オープンプランオフィスは「定型発達」または平均的な人の感覚的許容度に基づいて設計されている。大多数には対処可能な煩わしさでも、感覚刺激に過敏な神経発達症の人々には圧倒的で、深刻な不安や生産性低下を招く。" },
            { label: "3. 新しいデザイン哲学（第3段落）", text: "ニューロダイバースデザインは「標準的な」ユーザーという概念を拒否。人間の脳が情報を異なる方法で処理することを認識し、神経発達症の従業員に適応を強制するのではなく、多様な感覚体験を提供する柔軟な環境を作ることを提案。" },
            { label: "4. 具体的な実践例（第4段落）", text: "「静寂ゾーン」「集中ルーム」の設置、ちらつく照明や模様入りカーペットなどのトリガー特定、吸音材・調節可能な照明・プライベートポッドの設置。VRシミュレーションで建設前にスタッフがレイアウトをテストし、フィードバックを提供する事例も。" },
            { label: "5. 普遍的な恩恵（第5段落）", text: "ニューロダイバースデザインの影響は特定グループを超え、すべての人の労働環境を改善。原則は普遍的に有益であることが証明されている。柔軟性・快適さ・個人の選択を優先することで全労働者が環境をコントロール可能に。結果として全従業員のより高い満足度と生産性につながる。" }
        ]
    }
};

module.exports = questionsAndSummary;
