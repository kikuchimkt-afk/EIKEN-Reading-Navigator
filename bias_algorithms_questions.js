// The Bias in Algorithms - Questions and Summary

const questions = [
    {
        id: 1,
        text: "What point does the author make about algorithms in the first paragraph?",
        textTranslation: "第1段落でアルゴリズムについて著者はどのような点を述べていますか？",
        questionIntent: {
            basedOnSentences: [4, 5],
            focusPoints: "第1段落後半の Sentence 4「However, there is growing evidence...」と Sentence 5「Because algorithms are trained on historical data...」に注目。Howeverの後が著者の主張ポイント。",
            selectionGuidance: "選択肢1は「偏見を排除した」→本文は「perpetuate inequalities」なので逆。選択肢3は「採用や刑事司法より融資承認で効果的」→本文にそのような比較なし。選択肢4は「歴史的データはバイアスがない」→本文は「reflects past discrimination」なので真逆。消去法で2が残る。"
        },
        choices: [
            { id: 1, text: "They have successfully eliminated most of the prejudices that human decision-makers hold.", translation: "人間の意思決定者が持つ偏見のほとんどを排除することに成功した。", isCorrect: false },
            { id: 2, text: "Although they were intended to ensure fairness, they may actually reinforce existing social inequalities.", translation: "公正さを確保することを意図していたが、実際には既存の社会的不平等を強化してしまう可能性がある。", isCorrect: true, highlight: "reinforce existing social inequalities" },
            { id: 3, text: "They are most effective when used in fields like hiring and criminal justice rather than loan approvals.", translation: "融資承認よりも採用や刑事司法のような分野で使用する場合に最も効果的である。", isCorrect: false },
            { id: 4, text: "The historical data used to train them is usually free from the biases found in society.", translation: "それらを訓練するために使用される歴史的データは通常、社会に見られるバイアスがない。", isCorrect: false }
        ],
        hint: {
            paragraphId: 1,
            description: "第1段落後半。「However」から始まる Sentence 4 が著者の主要な主張です。",
            targetSentenceId: 4,
            highlightWord: "perpetuate the very inequalities",
            highlightWordSentenceId: 4
        },
        keywords: ["first paragraph", "algorithms", "point"],
        keywordExplanations: {
            "first paragraph": "第1段落に答えがある。",
            "algorithms": "アルゴリズムについての著者の見解。",
            "point": "著者の主張・論点。"
        },
        keywordMatches: [
            { sentenceId: 4, text: "perpetuate the very inequalities", keyword: "algorithms" },
            { sentenceId: 5, text: "can learn to favor candidates", keyword: "algorithms" }
        ],
        choiceAdvice: "選択肢の主張内容を確認: 1=偏見排除に成功、2=不平等を強化、3=分野別の効果比較、4=データにバイアスなし。本文で「However」の後に述べられている内容と照合。",
        logic: [
            { type: "text", content: "本文(Sentence 4): 「However, there is growing evidence that these systems often <b>perpetuate the very inequalities</b> they were meant to eliminate.」" },
            { type: "text", content: "【決定要因】perpetuate inequalities（不平等を永続させる）= 選択肢2の reinforce existing social inequalities（既存の社会的不平等を強化する）は言い換え。" },
            { type: "text", content: "本文(Sentence 5): アルゴリズムは過去の差別を反映する歴史データで訓練されるため、過去に成功した人々（裕福な白人男性）を好むことを学習しうる。" },
            { type: "arrow", content: "↓" },
            { type: "text", content: "選択肢2: 「Although they were intended to ensure fairness, they may actually reinforce existing social inequalities.」" },
            { type: "conclusion", content: "正解: 2" }
        ]
    },
    {
        id: 2,
        text: "What did the study of the hiring algorithm reveal?",
        textTranslation: "採用アルゴリズムの研究は何を明らかにしましたか？",
        questionIntent: {
            basedOnSentences: [7, 8, 9],
            focusPoints: "第2段落の Sentence 7-9 に注目。特に Sentence 9「When the company tried to correct this by programming the system to ignore gender, it still found proxies...」が決定的。",
            selectionGuidance: "選択肢1は「性別を無視するようプログラムしたらバイアスが完全に排除された」→本文は「it still found proxies」なのでバイアスは続いた。選択肢2は「男性候補者の方が資格が低かった」→本文にそのような記述なし。選択肢3は「趣味を考慮したら効率が上がった」→趣味は「バイアス継続の代理変数」として言及。消去法で4。"
        },
        choices: [
            { id: 1, text: "The system was able to completely eliminate gender bias once programmers told it to ignore gender.", translation: "プログラマーが性別を無視するよう指示したら、システムはジェンダーバイアスを完全に排除できた。", isCorrect: false },
            { id: 2, text: "Male candidates were generally less qualified than female candidates, but the system favored them anyway.", translation: "男性候補者は一般的に女性候補者より資格が低かったが、システムはそれでも男性を好んだ。", isCorrect: false },
            { id: 3, text: "The algorithm's efficiency improved significantly when it was allowed to consider the applicant's hobbies.", translation: "応募者の趣味を考慮することが許可されたとき、アルゴリズムの効率は大幅に向上した。", isCorrect: false },
            { id: 4, text: "The system found indirect ways to identify and discriminate against female applicants even when gender was hidden.", translation: "性別が隠されていても、システムは女性応募者を特定し差別する間接的な方法を見つけた。", isCorrect: true, highlight: "indirect ways to identify and discriminate" }
        ],
        hint: {
            paragraphId: 2,
            description: "第2段落の Sentence 9。会社が性別を無視するようプログラムした後にも何が起きたかを確認しましょう。",
            targetSentenceId: 9,
            highlightWord: "found proxies for gender",
            highlightWordSentenceId: 9
        },
        keywords: ["study", "hiring algorithm", "reveal"],
        keywordExplanations: {
            "study": "第2段落冒頭の「In one study」を指す。",
            "hiring algorithm": "採用アルゴリズム。",
            "reveal": "明らかにする。"
        },
        keywordMatches: [
            { sentenceId: 7, text: "In one study involving a hiring algorithm", keyword: "study" },
            { sentenceId: 9, text: "found proxies for gender", keyword: "reveal" }
        ],
        choiceAdvice: "研究の「結果」を問う問題。Sentence 9 の「still found proxies」に注目。proxies = indirect ways（間接的な方法）。",
        logic: [
            { type: "text", content: "本文(Sentence 9): 「When the company tried to correct this by programming the system to ignore gender, it <b>still found proxies for gender</b>, such as language patterns or hobbies, to continue the bias.」" },
            { type: "text", content: "【決定要因】still found proxies for gender（それでも性別の代理変数を見つけた）= 選択肢4の found indirect ways to identify（間接的な方法を見つけた）は言い換え。" },
            { type: "text", content: "「to continue the bias」= 選択肢4の「discriminate against female applicants」。" },
            { type: "arrow", content: "↓" },
            { type: "text", content: "選択肢4: 「The system found indirect ways to identify and discriminate against female applicants even when gender was hidden.」" },
            { type: "conclusion", content: "正解: 4" }
        ]
    },
    {
        id: 3,
        text: "According to Cathy O'Neil, one problem with algorithmic decision-making is that",
        textTranslation: "キャシー・オニールによれば、アルゴリズムによる意思決定の1つの問題は",
        questionIntent: {
            basedOnSentences: [11, 12, 13],
            focusPoints: "第3段落の Sentence 11-13 に注目。Cathy O'Neil の主張を探す。特に Sentence 12「algorithms often operate as 'black boxes' where the logic is hidden」が決定的。",
            selectionGuidance: "選択肢2は「富裕層がターゲットにされやすい」→本文は「particularly dangerous for the poor」なので逆。選択肢3は「人間の方が説明責任がない」→本文は「algorithms are opaque and unaccountable」なのでアルゴリズムの方が説明責任がない。選択肢4は「プロのアドバイスが間違っている」→本文にそのような記述なし。"
        },
        choices: [
            { id: 1, text: "it is difficult for people to understand why a decision was made because the process is not transparent.", translation: "プロセスが透明でないため、なぜ決定が下されたかを人々が理解するのが難しい。", isCorrect: true, highlight: "not transparent" },
            { id: 2, text: "wealthy people are more likely to be unfairly targeted by automated systems than poor people.", translation: "富裕層は貧しい人々よりも自動化システムによって不当にターゲットにされる可能性が高い。", isCorrect: false },
            { id: 3, text: "human decision-makers are generally less accountable for their actions than computer systems.", translation: "人間の意思決定者は一般的にコンピューターシステムよりも自分の行動に対する説明責任が低い。", isCorrect: false },
            { id: 4, text: "the professionals hired to navigate these systems often give incorrect advice to their clients.", translation: "これらのシステムを操作するために雇われたプロフェッショナルはしばしば顧客に間違ったアドバイスを与える。", isCorrect: false }
        ],
        hint: {
            paragraphId: 3,
            description: "第3段落。Cathy O'Neil の警告について Sentence 11-12 で述べられています。「opaque」「black boxes」がキーワード。",
            targetSentenceId: 12,
            highlightWord: "black boxes",
            highlightWordSentenceId: 12
        },
        keywords: ["Cathy O'Neil", "problem", "algorithmic decision-making"],
        keywordExplanations: {
            "Cathy O'Neil": "本文で言及されるデータサイエンティスト。",
            "problem": "問題点。",
            "algorithmic decision-making": "アルゴリズムによる意思決定。"
        },
        keywordMatches: [
            { sentenceId: 11, text: "Cathy O'Neil warn", keyword: "Cathy O'Neil" },
            { sentenceId: 12, text: "black boxes", keyword: "problem", type: "paraphrase" }
        ],
        choiceAdvice: "O'Neil の主張を問う問題。Sentence 11-12 で「opaque and unaccountable」「black boxes where the logic is hidden」と述べられている。",
        logic: [
            { type: "text", content: "本文(Sentence 11): 「Critics like data scientist Cathy O'Neil warn that these ... are <b>opaque and unaccountable</b>.」" },
            { type: "text", content: "本文(Sentence 12): 「algorithms often operate as '<b>black boxes</b>' where the <b>logic is hidden</b> even from the creators.」" },
            { type: "text", content: "【決定要因】opaque（不透明）/ logic is hidden（論理が隠されている）= 選択肢1の「the process is not transparent」「difficult to understand why a decision was made」の言い換え。" },
            { type: "arrow", content: "↓" },
            { type: "text", content: "選択肢1: 「it is difficult for people to understand why a decision was made because the process is not transparent.」" },
            { type: "conclusion", content: "正解: 1" }
        ]
    },
    {
        id: 4,
        text: "How has public opinion regarding technology changed recently?",
        textTranslation: "テクノロジーに関する世論は最近どのように変化しましたか？",
        questionIntent: {
            basedOnSentences: [16, 17, 18, 19, 20],
            focusPoints: "第4段落全体、特に Sentence 17「However, recent surveys show a significant shift in attitude」と Sentence 20「The blind faith in digital neutrality is fading, replaced by a demand for human oversight」に注目。",
            selectionGuidance: "選択肢1は「テクノロジーへの信頼が高まっている」→本文は「shift」「fading」なので逆。選択肢2は「AIツールの方がバイアスが少ない」→本文は「more likely to exhibit bias than human managers」なので逆。選択肢4は「規制をやめた」→本文は「proposing regulations」なので逆。"
        },
        choices: [
            { id: 1, text: "People are becoming more confident that technology can solve complex social problems without human intervention.", translation: "人々は、テクノロジーが人間の介入なしに複雑な社会問題を解決できるとますます確信するようになっている。", isCorrect: false },
            { id: 2, text: "Most Americans now believe that AI tools are less biased than human managers in hiring and policing.", translation: "今やほとんどのアメリカ人は、採用や警察活動においてAIツールは人間の管理者よりバイアスが少ないと信じている。", isCorrect: false },
            { id: 3, text: "There is growing doubt about the neutrality of digital tools and a desire for greater regulation and oversight.", translation: "デジタルツールの中立性への疑念が高まっており、より大きな規制と監視への要求がある。", isCorrect: true, highlight: "growing doubt ... desire for greater regulation" },
            { id: 4, text: "Policymakers have decided to stop regulating tech companies because the public trusts them to self-correct.", translation: "政策立案者たちは、大衆がテック企業の自己修正を信頼しているため、規制をやめることを決定した。", isCorrect: false }
        ],
        hint: {
            paragraphId: 4,
            description: "第4段落。Sentence 17「a significant shift in attitude」と Sentence 20「The blind faith in digital neutrality is fading」が決定的。",
            targetSentenceId: 20,
            highlightWord: "demand for human oversight",
            highlightWordSentenceId: 20
        },
        keywords: ["public opinion", "technology", "changed recently"],
        keywordExplanations: {
            "public opinion": "世論。第4段落の「the public」「A majority of Americans」など。",
            "changed recently": "最近の変化。「However, recent surveys show」「shift」を探す。"
        },
        keywordMatches: [
            { sentenceId: 17, text: "significant shift in attitude", keyword: "changed" },
            { sentenceId: 20, text: "is fading", keyword: "changed" }
        ],
        choiceAdvice: "第4段落全体が「変化」について述べている。Sentence 16 の「For years ... accepted」（以前）と Sentence 17 以降の「However」（現在）の対比を把握する。",
        logic: [
            { type: "text", content: "本文(Sentence 18): アメリカ人の大多数は「<b>skepticism</b> about the use of AI in hiring and policing」を表明。" },
            { type: "text", content: "本文(Sentence 19): 「<b>calls for 'algorithmic accountability'</b>」につながり、政策立案者が「<b>regulations</b>」を提案。" },
            { type: "text", content: "本文(Sentence 20): 「The blind faith in digital neutrality <b>is fading</b>, replaced by a <b>demand for human oversight</b>.」" },
            { type: "text", content: "【決定要因】skepticism / is fading = 選択肢3の「growing doubt」、demand for human oversight / calls for regulations = 選択肢3の「desire for greater regulation and oversight」。" },
            { type: "arrow", content: "↓" },
            { type: "text", content: "選択肢3: 「There is growing doubt about the neutrality of digital tools and a desire for greater regulation and oversight.」" },
            { type: "conclusion", content: "正解: 3" }
        ]
    }
];

const summaryForInstructors = {
    title: "The Bias in Algorithms（アルゴリズムのバイアス）",
    intro: "アルゴリズムが採用や刑事司法などで使われる中、公正さを保証するはずが逆に社会的不平等を強化してしまう問題を論じたパッセージ。データサイエンティスト Cathy O'Neil の警告と、世論の変化にも言及。",
    points: [
        { label: "1. アルゴリズムの隠れたバイアス（第1段落）", text: "アルゴリズムは歴史的データで訓練されるため、過去の差別を学習し、過去に成功した人々（多くは裕福な白人男性）を好む傾向がある。公正さを目指したはずが、不平等を永続させている。" },
        { label: "2. 採用アルゴリズムの実例（第2段落）", text: "大手テック企業の採用AIは、『女性の』という言葉を含む履歴書を減点。性別を無視するようプログラムしても、言語パターンや趣味などの代理変数（proxy）を使ってバイアスを継続した。" },
        { label: "3. ブラックボックス問題と貧富の格差（第3段落）", text: "O'Neil はアルゴリズムを『数学的破壊兵器』と呼び、不透明で説明責任がないと警告。貧困層はこれらのシステムで判断されやすい一方、富裕層はプロを雇って回避できる格差が存在。" },
        { label: "4. 世論の変化と規制への動き（第4段落）", text: "長年信じられてきた『テック・ソリューショニズム』への信頼は薄れつつあり、AIに対する懐疑論が高まっている。欧米では『アルゴリズム説明責任』を求める規制が提案されている。" }
    ]
};

module.exports = { questions, summaryForInstructors };
