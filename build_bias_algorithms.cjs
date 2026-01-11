// Build script to combine all parts and output final JSON for The Bias in Algorithms

const fs = require('fs');

// Import all parts (simulating - we'll just combine them here)

const completeData = {
    id: "grade-pre1-original-bias-algorithms",
    grade: "準1級",
    title: "The Bias in Algorithms",
    subTitle: "問題13",
    genre: "テクノロジー / 社会",
    similarProblems: {
        exam: "2023年度 第3回",
        title: "Meritocracy"
    },
    isOriginal: true,
    images: {
        content: "https://placehold.co/600x400?text=Algorithm+Bias",
        question: "https://placehold.co/600x400?text=Question+Image"
    },
    content: [
        // Paragraph 1
        {
            paragraphId: 1,
            sentences: [
                {
                    id: 1,
                    text: "Algorithms, sets of rules for solving problems or calculations, are increasingly used to make decisions in areas ranging from hiring to criminal justice.",
                    translation: "アルゴリズム、すなわち問題解決や計算のための規則の集合は、採用から刑事司法に至るまで様々な分野で意思決定に使われることが増えている。",
                    grammarAnalysis: {
                        mainVerbs: ["are used"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Algorithms</span><span class='tag'>S</span></span>, <span class='chunk M-group'><span class='text'>(sets of rules for solving problems or calculations)</span><span class='tag'>M/同格</span></span>, <span class='chunk V-group'><span class='text'>are increasingly used</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to make decisions)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in areas ranging from hiring to criminal justice)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>アルゴリズムは</span>、<span class='t-M'>(問題解決や計算のための規則の集合（として）)</span>、<span class='t-V'>ますます使われている</span> <span class='t-M'>(意思決定をするために)</span> <span class='t-M'>(採用から刑事司法まで様々な分野で)</span>。",
                        naturalTranslation: "アルゴリズム、すなわち問題解決や計算のための規則の集合は、採用から刑事司法に至るまで様々な分野で意思決定に使われることが増えている。",
                        vocabulary: [
                            { word: "algorithms", meaning: "「アルゴリズム」。問題解決や計算の手順を定めた規則の集合。" },
                            { word: "criminal justice", meaning: "「刑事司法」。犯罪を扱う法システム。" },
                            { word: "ranging from A to B", meaning: "「AからBに及ぶ」「AからBまで様々な」。" }
                        ],
                        grammarNotes: [
                            { phrase: "sets of rules for solving problems or calculations", explanation: "<b>同格の挿入句</b>: Algorithms と同格で、アルゴリズムとは何かを説明。" },
                            { phrase: "are increasingly used", explanation: "<b>are increasingly used</b>: 受動態 + 副詞。「ますます使われている」。" },
                            { phrase: "ranging from ... to ...", explanation: "<b>ranging from A to B</b>: 現在分詞がareasを修飾。「AからBに及ぶ」。" }
                        ]
                    }
                },
                {
                    id: 2,
                    text: "Proponents argue that replacing fallible human judgment with machine logic creates a fairer society, free from the prejudices that have historically marginalized certain groups.",
                    translation: "支持者たちは、誤りがちな人間の判断を機械の論理に置き換えることで、歴史的に特定のグループを周縁化してきた偏見のない、より公正な社会が生まれると主張している。",
                    grammarAnalysis: {
                        mainVerbs: ["argue"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Proponents</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>argue</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>replacing fallible human judgment with machine logic</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>creates</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>a fairer society</span><span class='tag'>O'</span></span>, (free from the prejudices (that have historically marginalized certain groups))]</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>支持者たちは</span> <span class='t-V'>主張している</span> <span class='t-O'>that [誤りがちな人間の判断を機械の論理で置き換えることが より公正な社会を作り出す、(歴史的に特定グループを周縁化してきた偏見のない)]ことを</span>。",
                        naturalTranslation: "支持者たちは、誤りがちな人間の判断を機械の論理に置き換えることで、歴史的に特定のグループを周縁化してきた偏見のない、より公正な社会が生まれると主張している。",
                        vocabulary: [
                            { word: "proponents", meaning: "「支持者」「提唱者」。" },
                            { word: "fallible", meaning: "「誤りがちな」「間違いを犯しうる」。" },
                            { word: "marginalized", meaning: "「周縁化した」「社会の主流から排除した」。" },
                            { word: "prejudices", meaning: "「偏見」。" }
                        ],
                        grammarNotes: [
                            { phrase: "replacing ... with ...", explanation: "<b>動名詞句が主語</b>: 「〜を...に置き換えること」がthat節内の主語。" },
                            { phrase: "free from the prejudices", explanation: "<b>形容詞句</b>: a fairer societyを後置修飾。「偏見のない」。" },
                            { phrase: "that have historically marginalized", explanation: "<b>関係代名詞節</b>: prejudicesを修飾。「歴史的に特定のグループを周縁化してきた」偏見。" }
                        ]
                    }
                },
                {
                    id: 3,
                    text: "Indeed, early implementations in loan approvals seemed to expand access to credit for some underserved populations.",
                    translation: "実際、融資承認における初期の導入は、一部の十分にサービスを受けられていない人々に対する信用へのアクセスを拡大したように見えた。",
                    grammarAnalysis: {
                        mainVerbs: ["seemed"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Indeed)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>early implementations in loan approvals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>seemed</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to expand access to credit (for some underserved populations)</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-M'>(実際)</span>、<span class='t-S'>融資承認における初期の導入は</span> <span class='t-V'>〜したように見えた</span> <span class='t-C'>信用へのアクセスを拡大した (一部の十分にサービスを受けられていない人々に対して)</span>。",
                        naturalTranslation: "実際、融資承認における初期の導入は、一部の十分にサービスを受けられていない人々に対する信用へのアクセスを拡大したように見えた。",
                        vocabulary: [
                            { word: "implementations", meaning: "「導入」「実施」。" },
                            { word: "loan approvals", meaning: "「融資承認」「ローンの審査」。" },
                            { word: "underserved", meaning: "「十分なサービスを受けていない」。社会的に不利な立場の意味。" }
                        ],
                        grammarNotes: [
                            { phrase: "seemed to expand", explanation: "<b>seem to do</b>: 「〜したように見える」。第2文型（SVC）。" },
                            { phrase: "access to credit", explanation: "<b>access to ~</b>: 「〜へのアクセス」。" }
                        ]
                    }
                },
                {
                    id: 4,
                    text: "However, there is growing evidence that these systems often perpetuate the very inequalities they were meant to eliminate.",
                    translation: "しかし、これらのシステムがまさに排除するはずだった不平等をしばしば永続させているという証拠が増えている。",
                    grammarAnalysis: {
                        mainVerbs: ["is"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>there</span><span class='tag'>仮S</span></span> <span class='chunk V-group'><span class='text'>is growing</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>evidence [that these systems often perpetuate the very inequalities (they were meant to eliminate)]</span><span class='tag'>真S</span></span>.",
                        translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-V'>増えている</span> <span class='t-S'>証拠が [that これらのシステムがしばしば永続させている まさにその不平等を (それらが排除するはずだった)]</span>。",
                        naturalTranslation: "しかし、これらのシステムがまさに排除するはずだった不平等をしばしば永続させているという証拠が増えている。",
                        vocabulary: [
                            { word: "perpetuate", meaning: "「永続させる」「恒久化する」。" },
                            { word: "inequalities", meaning: "「不平等」。" },
                            { word: "the very", meaning: "「まさにその〜」。強調表現。" }
                        ],
                        grammarNotes: [
                            { phrase: "there is growing evidence", explanation: "<b>there is構文</b>: 「〜がある」。growingはevidenceを修飾する現在分詞。" },
                            { phrase: "that these systems often perpetuate", explanation: "<b>同格のthat節</b>: evidenceの内容を説明。「〜という証拠」。" },
                            { phrase: "they were meant to eliminate", explanation: "<b>関係代名詞節（目的格省略）</b>: be meant to do: 「〜するはずである」。" }
                        ]
                    }
                },
                {
                    id: 5,
                    text: "Because algorithms are trained on historical data, which reflects past discrimination, they can learn to favor candidates who resemble those who have succeeded in the past, often wealthy white males, while unfairly filtering out others.",
                    translation: "アルゴリズムは過去の差別を反映する歴史的データで訓練されるため、過去に成功した人々（多くの場合、裕福な白人男性）に似た候補者を好むことを学習し、他の人々を不当に除外してしまう可能性がある。",
                    grammarAnalysis: {
                        mainVerbs: ["can learn"],
                        structureHtml: "◆ Because節（理由）:<br><span class='chunk M-group'><span class='text'>(Because algorithms are trained on historical data, (which reflects past discrimination))</span><span class='tag'>M</span></span>,<br><br>◆ 主節:<br><span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can learn</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to favor candidates (who resemble those (who have succeeded in the past, often wealthy white males))</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(while unfairly filtering out others)</span><span class='tag'>M</span></span>.",
                        translationHtml: "◆ Because節: (Because アルゴリズムは訓練されるので 歴史的データで, (それは過去の差別を反映する)),<br><br>◆ 主節: それらは 学習しうる 候補者を好むことを (その候補者は似ている (過去に成功した人々に, しばしば裕福な白人男性)), (一方で他の人を不当に除外しながら)。",
                        naturalTranslation: "アルゴリズムは過去の差別を反映する歴史的データで訓練されるため、過去に成功した人々（多くの場合、裕福な白人男性）に似た候補者を好むことを学習し、他の人々を不当に除外してしまう可能性がある。",
                        vocabulary: [
                            { word: "trained on", meaning: "「〜で訓練される」。機械学習用語。" },
                            { word: "resemble", meaning: "「〜に似ている」。" },
                            { word: "filtering out", meaning: "「除外する」「ふるい落とす」。" }
                        ],
                        grammarNotes: [
                            { phrase: "Because algorithms are trained on historical data", explanation: "<b>理由を表す副詞節</b>: 「アルゴリズムが歴史的データで訓練されるから」。" },
                            { phrase: "which reflects past discrimination", explanation: "<b>非制限用法の関係代名詞節</b>: historical data を補足説明。" },
                            { phrase: "while unfairly filtering out others", explanation: "<b>while + 分詞構文</b>: 「一方で〜しながら」。対比・同時進行を表す。" }
                        ]
                    }
                }
            ]
        },
        // Paragraph 2
        {
            paragraphId: 2,
            sentences: [
                {
                    id: 6,
                    text: "Research has highlighted how this improved efficiency can come at the cost of fairness.",
                    translation: "研究は、この改善された効率性がいかに公正さを犠牲にしうるかを浮き彫りにしてきた。",
                    grammarAnalysis: {
                        mainVerbs: ["has highlighted"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Research</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has highlighted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how [this improved efficiency can come at the cost of fairness]</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>研究は</span> <span class='t-V'>浮き彫りにしてきた</span> <span class='t-O'>how [この改善された効率性が公正さを犠牲にしうる]かを</span>。",
                        naturalTranslation: "研究は、この改善された効率性がいかに公正さを犠牲にしうるかを浮き彫りにしてきた。",
                        vocabulary: [
                            { word: "highlighted", meaning: "「浮き彫りにした」「強調した」。" },
                            { word: "at the cost of", meaning: "「〜を犠牲にして」。" },
                            { word: "fairness", meaning: "「公正さ」「公平性」。" }
                        ],
                        grammarNotes: [
                            { phrase: "how ... can come", explanation: "<b>間接疑問文</b>: 「いかに〜しうるか」。highlightedの目的語。" },
                            { phrase: "at the cost of fairness", explanation: "<b>at the cost of ~</b>: 「〜を犠牲にして」「〜の代償として」。" }
                        ]
                    }
                },
                {
                    id: 7,
                    text: "In one study involving a hiring algorithm developed by a major tech company, the system taught itself that male candidates were preferable.",
                    translation: "大手テック企業が開発した採用アルゴリズムを含むある研究で、そのシステムは男性候補者のほうが好ましいと自ら学習した。",
                    grammarAnalysis: {
                        mainVerbs: ["taught"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In one study involving a hiring algorithm (developed by a major tech company))</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the system</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>taught</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>itself</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>that [male candidates were preferable]</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-M'>(大手テック企業によって開発された採用アルゴリズムを含むある研究で)</span>、<span class='t-S'>そのシステムは</span> <span class='t-V'>教えた</span> <span class='t-O'>自分自身に</span> <span class='t-C'>that [男性候補者がより好ましい]と</span>。",
                        naturalTranslation: "大手テック企業が開発した採用アルゴリズムを含むある研究で、そのシステムは男性候補者のほうが好ましいと自ら学習した。",
                        vocabulary: [
                            { word: "involving", meaning: "「〜を含む」「〜に関わる」。" },
                            { word: "preferable", meaning: "「より好ましい」「望ましい」。" },
                            { word: "taught itself", meaning: "「自ら学んだ」「独学した」。" }
                        ],
                        grammarNotes: [
                            { phrase: "involving a hiring algorithm", explanation: "<b>現在分詞</b>: studyを修飾。「〜を含む」。" },
                            { phrase: "developed by a major tech company", explanation: "<b>過去分詞</b>: algorithmを修飾。「〜によって開発された」。" },
                            { phrase: "taught itself that ...", explanation: "<b>teach O that節</b>: SVOC。再帰代名詞itselfは「自分自身」。" }
                        ]
                    }
                },
                {
                    id: 8,
                    text: "It penalized résumés that included the word \"women's,\" such as \"women's chess club captain,\" and downgraded graduates of two all-women's colleges.",
                    translation: "それは「女性の」という言葉を含む履歴書を減点し（例えば「女性チェスクラブのキャプテン」など）、2つの女子大の卒業生を格下げした。",
                    grammarAnalysis: {
                        mainVerbs: ["penalized", "downgraded"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>penalized</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>résumés (that included the word \"women's\")</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(such as \"women's chess club captain\")</span><span class='tag'>M</span></span>, and <span class='chunk V-group'><span class='text'>downgraded</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>graduates of two all-women's colleges</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>減点した</span> <span class='t-O'>履歴書を (that「女性の」という言葉を含んでいた)</span>、<span class='t-M'>(「女性チェスクラブのキャプテン」など)</span>、そして <span class='t-V'>格下げした</span> <span class='t-O'>2つの女子大の卒業生を</span>。",
                        naturalTranslation: "それは「女性の」という言葉を含む履歴書を減点し（例えば「女性チェスクラブのキャプテン」など）、2つの女子大の卒業生を格下げした。",
                        vocabulary: [
                            { word: "penalized", meaning: "「罰した」「減点した」。" },
                            { word: "résumés", meaning: "「履歴書」。" },
                            { word: "downgraded", meaning: "「格下げした」「評価を下げた」。" }
                        ],
                        grammarNotes: [
                            { phrase: "that included the word", explanation: "<b>関係代名詞節</b>: résuméを修飾。" },
                            { phrase: "penalized ... and downgraded", explanation: "<b>並列構造</b>: 同じ主語に対して2つの動詞が並ぶ。" },
                            { phrase: "such as", explanation: "<b>such as</b>: 「〜のような」。具体例を挿入。" }
                        ]
                    }
                },
                {
                    id: 9,
                    text: "When the company tried to correct this by programming the system to ignore gender, it still found proxies for gender, such as language patterns or hobbies, to continue the bias.",
                    translation: "会社がシステムに性別を無視するようプログラムすることでこれを修正しようとしたとき、システムはそれでも言語パターンや趣味などの性別の代理変数を見つけ出し、バイアスを継続した。",
                    grammarAnalysis: {
                        mainVerbs: ["found"],
                        structureHtml: "◆ When節（時）:<br><span class='chunk M-group'><span class='text'>(When the company tried to correct this by programming the system to ignore gender)</span><span class='tag'>M</span></span>,<br><br>◆ 主節:<br><span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(still)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>found</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>proxies for gender, (such as language patterns or hobbies)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(to continue the bias)</span><span class='tag'>M</span></span>.",
                        translationHtml: "◆ When節: (When 会社が修正しようとした これを システムに性別を無視するようプログラムすることで),<br><br>◆ 主節: それは (それでも) 見つけた 性別の代理変数を, (言語パターンや趣味など), (バイアスを継続するために)。",
                        naturalTranslation: "会社がシステムに性別を無視するようプログラムすることでこれを修正しようとしたとき、システムはそれでも言語パターンや趣味などの性別の代理変数を見つけ出し、バイアスを継続した。",
                        vocabulary: [
                            { word: "proxies", meaning: "「代理」「代理変数」。機械学習では間接的に情報を推測する変数のこと。" },
                            { word: "language patterns", meaning: "「言語パターン」。" },
                            { word: "bias", meaning: "「偏り」「バイアス」。" }
                        ],
                        grammarNotes: [
                            { phrase: "When the company tried to correct this", explanation: "<b>時を表す副詞節</b>。" },
                            { phrase: "by programming the system to ignore gender", explanation: "<b>by + 動名詞</b>: 手段を表す。「〜することによって」。" },
                            { phrase: "to continue the bias", explanation: "<b>結果を表す不定詞</b>: 「その結果バイアスを継続した」。" }
                        ]
                    }
                },
                {
                    id: 10,
                    text: "This suggests that without careful oversight, algorithms will inevitably reproduce the societal hierarchies embedded in the data they are fed.",
                    translation: "これは、注意深い監視がなければ、アルゴリズムは与えられたデータに埋め込まれた社会的序列を必然的に再生産することを示唆している。",
                    grammarAnalysis: {
                        mainVerbs: ["suggests"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suggests</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [without careful oversight, algorithms will inevitably reproduce the societal hierarchies (embedded in the data (they are fed))]</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>示唆している</span> <span class='t-O'>that [注意深い監視がなければ、アルゴリズムは必然的に再生産する 社会的序列を (データに埋め込まれた (それらが与えられる))]ことを</span>。",
                        naturalTranslation: "これは、注意深い監視がなければ、アルゴリズムは与えられたデータに埋め込まれた社会的序列を必然的に再生産することを示唆している。",
                        vocabulary: [
                            { word: "oversight", meaning: "「監視」「監督」。" },
                            { word: "hierarchies", meaning: "「序列」「階層構造」。" },
                            { word: "embedded in", meaning: "「〜に埋め込まれた」。" }
                        ],
                        grammarNotes: [
                            { phrase: "without careful oversight", explanation: "<b>without ~</b>: 仮定法的ニュアンス。「〜がなければ」。" },
                            { phrase: "embedded in the data", explanation: "<b>過去分詞</b>: hierarchiesを後置修飾。" },
                            { phrase: "they are fed", explanation: "<b>関係代名詞節（目的格省略）</b>: feed A B: 「AにBを与える」→ 受動態。" }
                        ]
                    }
                }
            ]
        },
        // Paragraph 3
        {
            paragraphId: 3,
            sentences: [
                {
                    id: 11,
                    text: "Critics like data scientist Cathy O'Neil warn that these \"weapons of math destruction\" are opaque and unaccountable.",
                    translation: "データサイエンティストのキャシー・オニールのような批評家たちは、これらの「数学的破壊兵器」は不透明で説明責任がないと警告している。",
                    grammarAnalysis: {
                        mainVerbs: ["warn"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Critics (like data scientist Cathy O'Neil)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>warn</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [these \"weapons of math destruction\" are opaque and unaccountable]</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>批評家たちは (データサイエンティストのCathy O'Neilのような)</span> <span class='t-V'>警告している</span> <span class='t-O'>that [これらの「数学的破壊兵器」は不透明で説明責任がない]と</span>。",
                        naturalTranslation: "データサイエンティストのキャシー・オニールのような批評家たちは、これらの「数学的破壊兵器」は不透明で説明責任がないと警告している。",
                        vocabulary: [
                            { word: "opaque", meaning: "「不透明な」「わかりにくい」。" },
                            { word: "unaccountable", meaning: "「説明責任がない」「責任を問えない」。" },
                            { word: "weapons of math destruction", meaning: "「数学的破壊兵器」。Cathy O'Neil の造語でWMDのもじり。" }
                        ],
                        grammarNotes: [
                            { phrase: "like data scientist Cathy O'Neil", explanation: "<b>挿入句</b>: Criticsの具体例を示す。" },
                            { phrase: "warn that ...", explanation: "<b>warn that節</b>: 「〜と警告する」。" }
                        ]
                    }
                },
                {
                    id: 12,
                    text: "Unlike human decision-makers, who can be questioned about their reasoning, algorithms often operate as \"black boxes\" where the logic is hidden even from the creators.",
                    translation: "その推論について質問することができる人間の意思決定者とは異なり、アルゴリズムはしばしば、作成者からさえも論理が隠されている「ブラックボックス」として機能する。",
                    grammarAnalysis: {
                        mainVerbs: ["operate"],
                        structureHtml: "◆ Unlike句（対比）:<br><span class='chunk M-group'><span class='text'>(Unlike human decision-makers, (who can be questioned about their reasoning))</span><span class='tag'>M</span></span>,<br><br>◆ 主節:<br><span class='chunk S-group'><span class='text'>algorithms</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(often)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>operate</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>as \"black boxes\" (where the logic is hidden even from the creators)</span><span class='tag'>C</span></span>.",
                        translationHtml: "◆ Unlike句: (人間の意思決定者とは異なり, (whoその推論について質問されうる)),<br><br>◆ 主節: アルゴリズムは (しばしば) 機能する 「ブラックボックス」として (whereその論理が作成者からさえ隠されている)。",
                        naturalTranslation: "その推論について質問することができる人間の意思決定者とは異なり、アルゴリズムはしばしば、作成者からさえも論理が隠されている「ブラックボックス」として機能する。",
                        vocabulary: [
                            { word: "reasoning", meaning: "「推論」「理由付け」。" },
                            { word: "black boxes", meaning: "「ブラックボックス」。内部の仕組みがわからないシステムのこと。" },
                            { word: "creators", meaning: "「作成者」「開発者」。" }
                        ],
                        grammarNotes: [
                            { phrase: "Unlike human decision-makers", explanation: "<b>Unlike + 名詞</b>: 「〜とは異なり」。対比を導く前置詞句。" },
                            { phrase: "who can be questioned about their reasoning", explanation: "<b>非制限用法の関係代名詞節</b>: 補足説明。" },
                            { phrase: "where the logic is hidden", explanation: "<b>関係副詞節</b>: black boxesを説明。" }
                        ]
                    }
                },
                {
                    id: 13,
                    text: "O'Neil argues that this lack of transparency is particularly dangerous for the poor, who are more likely to be judged by automated systems in housing, employment, and law enforcement.",
                    translation: "オニールは、この透明性の欠如は特に貧しい人々にとって危険であると主張している。彼らは住宅、雇用、法執行において自動化されたシステムによって判断される可能性がより高いからである。",
                    grammarAnalysis: {
                        mainVerbs: ["argues"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>O'Neil</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>argues</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [this lack of transparency is particularly dangerous (for the poor, (who are more likely to be judged by automated systems in housing, employment, and law enforcement))]</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>O'Neilは</span> <span class='t-V'>主張する</span> <span class='t-O'>that [この透明性の欠如は特に危険 (貧しい人々にとって, (who自動化システムに判断される可能性がより高い 住宅、雇用、法執行において))]と</span>。",
                        naturalTranslation: "オニールは、この透明性の欠如は特に貧しい人々にとって危険であると主張している。彼らは住宅、雇用、法執行において自動化されたシステムによって判断される可能性がより高いからである。",
                        vocabulary: [
                            { word: "transparency", meaning: "「透明性」。" },
                            { word: "law enforcement", meaning: "「法執行」。警察活動など。" },
                            { word: "automated systems", meaning: "「自動化されたシステム」。" }
                        ],
                        grammarNotes: [
                            { phrase: "argues that ...", explanation: "<b>argue that節</b>: 「〜と主張する」。" },
                            { phrase: "who are more likely to be judged", explanation: "<b>非制限用法の関係代名詞節</b>: the poorを補足説明。" },
                            { phrase: "be likely to be judged", explanation: "<b>be likely to do</b>: 「〜する可能性が高い」+ 受動態。" }
                        ]
                    }
                },
                {
                    id: 14,
                    text: "Meanwhile, the wealthy can often bypass these digital gatekeepers or hire professionals to help them navigate the system, further widening the gap between the haves and have-nots.",
                    translation: "一方、富裕層はしばしばこれらのデジタルの門番を迂回したり、システムを操作する手助けをするプロフェッショナルを雇うことができ、持てる者と持たざる者との格差をさらに広げている。",
                    grammarAnalysis: {
                        mainVerbs: ["can bypass", "hire"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Meanwhile)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the wealthy</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can often bypass</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>these digital gatekeepers</span><span class='tag'>O</span></span> or <span class='chunk V-group'><span class='text'>hire</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>professionals (to help them navigate the system)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(further widening the gap between the haves and have-nots)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(一方)</span>、<span class='t-S'>富裕層は</span> <span class='t-V'>しばしば迂回できる</span> <span class='t-O'>これらのデジタルの門番を</span> または <span class='t-V'>雇える</span> <span class='t-O'>プロフェッショナルを</span>、<span class='t-M'>(持てる者と持たざる者との格差をさらに広げながら)</span>。",
                        naturalTranslation: "一方、富裕層はしばしばこれらのデジタルの門番を迂回したり、システムを操作する手助けをするプロフェッショナルを雇うことができ、持てる者と持たざる者との格差をさらに広げている。",
                        vocabulary: [
                            { word: "bypass", meaning: "「迂回する」「回避する」。" },
                            { word: "gatekeepers", meaning: "「門番」。アクセスを制御するものの比喩。" },
                            { word: "navigate", meaning: "「操作する」「進む」。" },
                            { word: "the haves and have-nots", meaning: "「持てる者と持たざる者」。富者と貧者。" }
                        ],
                        grammarNotes: [
                            { phrase: "can often bypass ... or hire", explanation: "<b>並列構造</b>: can に続く2つの動詞。" },
                            { phrase: "to help them navigate", explanation: "<b>目的を表す不定詞</b>: help O (to) do。" },
                            { phrase: "further widening the gap", explanation: "<b>分詞構文</b>: 結果・付帯状況を表す。" }
                        ]
                    }
                },
                {
                    id: 15,
                    text: "The pressure to conform to algorithmic standards also creates a new form of anxiety, as people struggle to optimize their lives for machine approval.",
                    translation: "アルゴリズムの基準に従うプレッシャーは、人々が機械の承認を得るために人生を最適化しようと苦闘する中で、新たな形の不安を生み出している。",
                    grammarAnalysis: {
                        mainVerbs: ["creates"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>The pressure (to conform to algorithmic standards)</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>creates</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a new form of anxiety</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(as people struggle to optimize their lives for machine approval)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>プレッシャーは (アルゴリズムの基準に従うという)</span> <span class='t-M'>(また)</span> <span class='t-V'>生み出す</span> <span class='t-O'>新たな形の不安を</span>、<span class='t-M'>(as 人々が最適化しようと苦闘する 彼らの人生を 機械の承認を得るために)</span>。",
                        naturalTranslation: "アルゴリズムの基準に従うプレッシャーは、人々が機械の承認を得るために人生を最適化しようと苦闘する中で、新たな形の不安を生み出している。",
                        vocabulary: [
                            { word: "conform to", meaning: "「〜に従う」「〜に適合する」。" },
                            { word: "optimize", meaning: "「最適化する」。" },
                            { word: "machine approval", meaning: "「機械の承認」。アルゴリズムに評価されること。" }
                        ],
                        grammarNotes: [
                            { phrase: "to conform to algorithmic standards", explanation: "<b>不定詞の形容詞的用法</b>: pressureを修飾。" },
                            { phrase: "as people struggle to optimize", explanation: "<b>as節（時・状況）</b>: 「人々が〜しようと苦闘する中で」。" }
                        ]
                    }
                }
            ]
        },
        // Paragraph 4
        {
            paragraphId: 4,
            sentences: [
                {
                    id: 16,
                    text: "For years, the public generally accepted the \"tech solutionism\" narrative—that technology could solve complex social problems.",
                    translation: "長年にわたり、世間一般はテクノロジーが複雑な社会問題を解決できるという「テック・ソリューショニズム」の物語を受け入れてきた。",
                    grammarAnalysis: {
                        mainVerbs: ["accepted"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(For years)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the public</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(generally)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>accepted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the \"tech solutionism\" narrative—[that technology could solve complex social problems]</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-M'>(長年にわたり)</span>、<span class='t-S'>世間一般は</span> <span class='t-M'>(概して)</span> <span class='t-V'>受け入れてきた</span> <span class='t-O'>「テック・ソリューショニズム」の物語を—[that テクノロジーが解決できる 複雑な社会問題を]</span>。",
                        naturalTranslation: "長年にわたり、世間一般はテクノロジーが複雑な社会問題を解決できるという「テック・ソリューショニズム」の物語を受け入れてきた。",
                        vocabulary: [
                            { word: "tech solutionism", meaning: "「テック・ソリューショニズム」。テクノロジーがあらゆる問題を解決できるという信念。" },
                            { word: "narrative", meaning: "「物語」「語り」。ここでは「通説」の意味。" },
                            { word: "the public", meaning: "「世間一般」「大衆」。" }
                        ],
                        grammarNotes: [
                            { phrase: "the ... narrative—that ...", explanation: "<b>同格のthat節</b>: ダッシュの後にnarrativeの内容を説明。" },
                            { phrase: "For years", explanation: "<b>期間を表す副詞句</b>: 「長年」。" }
                        ]
                    }
                },
                {
                    id: 17,
                    text: "However, recent surveys show a significant shift in attitude.",
                    translation: "しかし、最近の調査は態度の大きな変化を示している。",
                    grammarAnalysis: {
                        mainVerbs: ["show"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>recent surveys</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>show</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a significant shift in attitude</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>最近の調査は</span> <span class='t-V'>示している</span> <span class='t-O'>態度の大きな変化を</span>。",
                        naturalTranslation: "しかし、最近の調査は態度の大きな変化を示している。",
                        vocabulary: [
                            { word: "surveys", meaning: "「調査」「アンケート」。" },
                            { word: "significant", meaning: "「大きな」「重要な」。" },
                            { word: "shift", meaning: "「変化」「転換」。" }
                        ],
                        grammarNotes: [
                            { phrase: "However", explanation: "<b>However</b>: 逆接の副詞。前段落との対比を示す。" }
                        ]
                    }
                },
                {
                    id: 18,
                    text: "A majority of Americans now express skepticism about the use of AI in hiring and policing, with many believing that these tools are more likely to exhibit bias than human managers.",
                    translation: "今やアメリカ人の大多数は採用や警察活動におけるAIの使用について懐疑的な見解を示しており、多くの人がこれらのツールは人間の管理者よりもバイアスを示す可能性が高いと考えている。",
                    grammarAnalysis: {
                        mainVerbs: ["express"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>A majority of Americans</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(now)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>express</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>skepticism (about the use of AI in hiring and policing)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(with many believing that [these tools are more likely to exhibit bias than human managers])</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>アメリカ人の大多数は</span> <span class='t-M'>(今や)</span> <span class='t-V'>示している</span> <span class='t-O'>懐疑的見解を (採用や警察活動におけるAIの使用について)</span>、<span class='t-M'>(with 多くの人が信じている that [これらのツールは人間の管理者よりバイアスを示す可能性が高い]と)</span>。",
                        naturalTranslation: "今やアメリカ人の大多数は採用や警察活動におけるAIの使用について懐疑的な見解を示しており、多くの人がこれらのツールは人間の管理者よりもバイアスを示す可能性が高いと考えている。",
                        vocabulary: [
                            { word: "skepticism", meaning: "「懐疑主義」「疑念」。" },
                            { word: "policing", meaning: "「警察活動」「取り締まり」。" },
                            { word: "exhibit", meaning: "「示す」「呈する」。" }
                        ],
                        grammarNotes: [
                            { phrase: "with many believing", explanation: "<b>付帯状況のwith + O + 分詞</b>: 「多くの人が〜と信じる中で」。" },
                            { phrase: "more likely to exhibit bias than", explanation: "<b>比較級</b>: 「〜よりもバイアスを示す可能性が高い」。" }
                        ]
                    }
                },
                {
                    id: 19,
                    text: "This change has led to calls for \"algorithmic accountability,\" with policymakers in Europe and the US proposing regulations that would require companies to audit their systems for bias and explain automated decisions.",
                    translation: "この変化は「アルゴリズム説明責任」を求める声につながっており、欧州と米国の政策立案者たちは、企業にシステムのバイアスを監査し自動化された決定を説明することを求める規制を提案している。",
                    grammarAnalysis: {
                        mainVerbs: ["has led"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>This change</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has led</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to calls for \"algorithmic accountability\")</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(with policymakers in Europe and the US proposing regulations (that would require companies to audit their systems for bias and explain automated decisions))</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>この変化は</span> <span class='t-V'>つながった</span> <span class='t-M'>(「アルゴリズム説明責任」への呼びかけに)</span>、<span class='t-M'>(with 欧州と米国の政策立案者が提案している 規制を (that 企業にシステムのバイアス監査と自動化決定の説明を要求する))</span>。",
                        naturalTranslation: "この変化は「アルゴリズム説明責任」を求める声につながっており、欧州と米国の政策立案者たちは、企業にシステムのバイアスを監査し自動化された決定を説明することを求める規制を提案している。",
                        vocabulary: [
                            { word: "algorithmic accountability", meaning: "「アルゴリズム説明責任」。" },
                            { word: "policymakers", meaning: "「政策立案者」。" },
                            { word: "audit", meaning: "「監査する」「検査する」。" }
                        ],
                        grammarNotes: [
                            { phrase: "has led to calls for", explanation: "<b>lead to ~</b>: 「〜につながる」「〜をもたらす」。" },
                            { phrase: "with policymakers ... proposing", explanation: "<b>付帯状況のwith + O + 分詞</b>。" },
                            { phrase: "that would require companies to audit", explanation: "<b>関係代名詞節</b>: regulationsを修飾。wouldは仮定法的ニュアンス。" }
                        ]
                    }
                },
                {
                    id: 20,
                    text: "The blind faith in digital neutrality is fading, replaced by a demand for human oversight.",
                    translation: "デジタルの中立性への盲目的な信仰は薄れつつあり、人間による監視への要求に取って代わられている。",
                    grammarAnalysis: {
                        mainVerbs: ["is fading"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>The blind faith (in digital neutrality)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is fading</span><span class='tag'>V</span></span>, <span class='chunk M-group'><span class='text'>(replaced by a demand for human oversight)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>盲目的な信仰は (デジタルの中立性への)</span> <span class='t-V'>薄れつつある</span>、<span class='t-M'>(人間による監視への要求に取って代わられて)</span>。",
                        naturalTranslation: "デジタルの中立性への盲目的な信仰は薄れつつあり、人間による監視への要求に取って代わられている。",
                        vocabulary: [
                            { word: "blind faith", meaning: "「盲目的な信仰」「無条件の信頼」。" },
                            { word: "neutrality", meaning: "「中立性」。" },
                            { word: "fading", meaning: "「薄れつつある」「消えゆく」。" },
                            { word: "oversight", meaning: "「監視」「監督」。" }
                        ],
                        grammarNotes: [
                            { phrase: "is fading", explanation: "<b>現在進行形</b>: 変化の進行中を表す。" },
                            { phrase: "replaced by a demand", explanation: "<b>過去分詞による分詞構文</b>: being replaced by の being が省略。" }
                        ]
                    }
                }
            ]
        }
    ],
    // Questions will be added from separate file
    questions: [],
    summaryForInstructors: {}
};

// Output as JSON
fs.writeFileSync('bias_algorithms_complete.json', JSON.stringify(completeData, null, 2), 'utf8');
console.log('Created bias_algorithms_complete.json');
