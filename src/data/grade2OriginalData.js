// 英検2級 オリジナル問題データ
// このファイルは2級のオリジナル問題のみを格納します

export const grade2OriginalData = [
    {
        id: "grade-2-original-animal-self-control",
        grade: "2級",
        title: "Animal Self-Control",
        subTitle: "問題1",
        genre: "自然科学 / 動物行動学",
        similarProblems: {
            exam: "2025年度 第2回",
            title: "The Mirror Test"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Cuttlefish+Self-Control",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Introduction - Self-Control
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "People often think about the future, but do animals do the same?",
                        translation: "人々はよく将来について考えるが、動物も同じことをするのだろうか？",
                        grammarAnalysis: {
                            mainVerbs: ["think", "do"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(often)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>think</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(about the future)</span><span class='tag'>M</span></span>, but <span class='chunk V-group'><span class='text'>do</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>animals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>do</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the same</span><span class='tag'>O</span></span>?",
                            translationHtml: "<span class='t-S'>人々は</span> <span class='t-M'>(よく)</span> <span class='t-V'>考える</span> <span class='t-M'>(将来について)</span>、しかし <span class='t-S'>動物も</span> <span class='t-V'>するのか</span> <span class='t-O'>同じことを</span>？",
                            naturalTranslation: "人々はよく将来について考えるが、動物も同じことをするのだろうか？",
                            vocabulary: [
                                { word: "think about", meaning: "「〜について考える」" },
                                { word: "the future", meaning: "「将来」「未来」" },
                                { word: "the same", meaning: "「同じこと」" }
                            ],
                            grammarNotes: [
                                { phrase: "do animals do the same", explanation: "<b>疑問文</b>: 助動詞doで始まる疑問文。「動物は同じことをするのか？」という問いかけ。" },
                                { phrase: "but", explanation: "<b>等位接続詞</b>: 前半と後半を対比的につなぐ。「しかし」。" },
                                { phrase: "the same", explanation: "<b>名詞句</b>: 「the same thing」の省略形。「同じこと」を指す。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "One important sign of intelligence is self-control.",
                        translation: "知能の重要な兆候の一つは自制心である。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>One important sign (of intelligence)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>self-control</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>知能の重要な兆候の一つは</span> <span class='t-V'>である</span> <span class='t-C'>自制心</span>。",
                            naturalTranslation: "知能の重要な兆候の一つは自制心である。",
                            vocabulary: [
                                { word: "sign", meaning: "「兆候」「しるし」" },
                                { word: "intelligence", meaning: "「知能」「知性」" },
                                { word: "self-control", meaning: "「自制心」「自己制御」" }
                            ],
                            grammarNotes: [
                                { phrase: "One important sign of intelligence", explanation: "<b>主語</b>: 「知能の重要な兆候の一つ」。ofは所有・属性を表す。" },
                                { phrase: "is", explanation: "<b>第2文型（SVC）</b>: S = C の関係。「AはBである」。" },
                                { phrase: "self-control", explanation: "<b>複合名詞</b>: self（自己）+ control（制御）= 自制心。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "This is the ability to wait for a better reward instead of taking a small one right away.",
                        translation: "これは、すぐに小さな報酬を受け取る代わりに、より良い報酬を待つ能力のことである。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the ability (to wait for a better reward) (instead of taking a small one right away)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>である</span> <span class='t-C'>能力（より良い報酬を待つ）（すぐに小さいものを取る代わりに）</span>。",
                            naturalTranslation: "これは、すぐに小さな報酬を受け取る代わりに、より良い報酬を待つ能力のことである。",
                            vocabulary: [
                                { word: "ability", meaning: "「能力」" },
                                { word: "reward", meaning: "「報酬」「ご褒美」" },
                                { word: "instead of", meaning: "「〜の代わりに」" },
                                { word: "right away", meaning: "「すぐに」「ただちに」" }
                            ],
                            grammarNotes: [
                                { phrase: "to wait for a better reward", explanation: "<b>不定詞の形容詞的用法</b>: 「より良い報酬を待つための」。abilityを修飾する。" },
                                { phrase: "instead of taking", explanation: "<b>instead of + 動名詞</b>: 「〜する代わりに」。前置詞ofの後なので動名詞。" },
                                { phrase: "a small one", explanation: "<b>代名詞one</b>: 前述のrewardを指す。繰り返しを避ける用法。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "In humans, this is often tested using the \"marshmallow test\" with children.",
                        translation: "人間の場合、これは子供を対象とした「マシュマロテスト」を使ってしばしば試される。",
                        grammarAnalysis: {
                            mainVerbs: ["is tested"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In humans)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is often tested</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(using the \"marshmallow test\" with children)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(人間では)</span>、<span class='t-S'>これは</span> <span class='t-V'>しばしば試される</span> <span class='t-M'>(子供を対象としたマシュマロテストを使って)</span>。",
                            naturalTranslation: "人間の場合、これは子供を対象とした「マシュマロテスト」を使ってしばしば試される。",
                            vocabulary: [
                                { word: "tested", meaning: "「試される」「テストされる」" },
                                { word: "marshmallow test", meaning: "「マシュマロテスト」。自制心を測る有名な心理実験。" },
                                { word: "with children", meaning: "「子供を対象に」" }
                            ],
                            grammarNotes: [
                                { phrase: "is often tested", explanation: "<b>受動態</b>: be + 過去分詞。「テストされる」。" },
                                { phrase: "using the \"marshmallow test\"", explanation: "<b>分詞構文</b>: 手段を表す。「〜を使って」。" },
                                { phrase: "In humans", explanation: "<b>前置詞句</b>: 対象・範囲を限定。「人間においては」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "Recently, researchers wanted to see if animals could also pass this kind of test.",
                        translation: "最近、研究者たちは動物もこの種のテストに合格できるかどうかを確認したいと考えた。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Recently)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>researchers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to see [if <span class='chunk S2-group'><span class='text'>animals</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>could also pass</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>this kind of test</span><span class='tag'>O'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(最近)</span>、<span class='t-S'>研究者たちは</span> <span class='t-V'>〜したかった</span> <span class='t-O'>[if <span class='t-S2'>動物も</span> <span class='t-V2'>合格できるかどうか</span> <span class='t-O2'>この種のテストに</span>]を確認することを</span>。",
                            naturalTranslation: "最近、研究者たちは動物もこの種のテストに合格できるかどうかを確認したいと考えた。",
                            vocabulary: [
                                { word: "researchers", meaning: "「研究者たち」" },
                                { word: "pass", meaning: "「合格する」「通過する」" },
                                { word: "this kind of", meaning: "「この種の」「このような」" }
                            ],
                            grammarNotes: [
                                { phrase: "wanted to see", explanation: "<b>want to do</b>: 「〜したい」。不定詞を目的語にとる。" },
                                { phrase: "if animals could also pass", explanation: "<b>if節（名詞節）</b>: 「〜かどうか」。seeの目的語。whether と同義。" },
                                { phrase: "could also pass", explanation: "<b>could</b>: canの過去形。時制の一致による。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "They used a special experiment to find out.",
                        translation: "彼らはそれを調べるために特別な実験を使用した。",
                        grammarAnalysis: {
                            mainVerbs: ["used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a special experiment</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to find out)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>使った</span> <span class='t-O'>特別な実験を</span> <span class='t-M'>(調べるために)</span>。",
                            naturalTranslation: "彼らはそれを調べるために特別な実験を使用した。",
                            vocabulary: [
                                { word: "special", meaning: "「特別な」" },
                                { word: "experiment", meaning: "「実験」" },
                                { word: "find out", meaning: "「調べる」「発見する」" }
                            ],
                            grammarNotes: [
                                { phrase: "to find out", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「調べるために」。" },
                                { phrase: "find out", explanation: "<b>句動詞</b>: 「調べる」「明らかにする」。目的語が省略されている（前文の内容を指す）。" },
                                { phrase: "They", explanation: "<b>代名詞</b>: 前文の researchers を指す。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: The Experiment on Cuttlefish
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "A study was done on cuttlefish to test their self-control.",
                        translation: "コウイカの自制心をテストするためにある研究が行われた。",
                        grammarAnalysis: {
                            mainVerbs: ["was done"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>A study</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was done</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on cuttlefish)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to test their self-control)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ある研究が</span> <span class='t-V'>行われた</span> <span class='t-M'>(コウイカに対して)</span> <span class='t-M'>(彼らの自制心をテストするために)</span>。",
                            naturalTranslation: "コウイカの自制心をテストするためにある研究が行われた。",
                            vocabulary: [
                                { word: "study", meaning: "「研究」「調査」" },
                                { word: "cuttlefish", meaning: "「コウイカ」。イカの仲間の軟体動物。" },
                                { word: "self-control", meaning: "「自制心」" }
                            ],
                            grammarNotes: [
                                { phrase: "was done", explanation: "<b>受動態</b>: do（行う）の受動態。「行われた」。" },
                                { phrase: "to test their self-control", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「自制心をテストするために」。" },
                                { phrase: "on cuttlefish", explanation: "<b>前置詞on</b>: 対象・範囲を表す。「〜に対して」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "Cuttlefish are sea creatures related to squid.",
                        translation: "コウイカはイカに関連する海の生き物である。",
                        grammarAnalysis: {
                            mainVerbs: ["are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Cuttlefish</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>sea creatures (related to squid)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>コウイカは</span> <span class='t-V'>である</span> <span class='t-C'>海の生き物（イカに関連する）</span>。",
                            naturalTranslation: "コウイカはイカに関連する海の生き物である。",
                            vocabulary: [
                                { word: "sea creatures", meaning: "「海の生き物」" },
                                { word: "related to", meaning: "「〜に関連する」「〜の仲間で」" },
                                { word: "squid", meaning: "「イカ」" }
                            ],
                            grammarNotes: [
                                { phrase: "are", explanation: "<b>第2文型（SVC）</b>: S = C の関係。「AはBである」。" },
                                { phrase: "related to squid", explanation: "<b>過去分詞の形容詞的用法</b>: 「イカに関連する」。creaturesを後置修飾。" },
                                { phrase: "Cuttlefish", explanation: "<b>単複同形</b>: fishと同様、単数・複数ともにcuttlefish。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "In the experiment, researchers offered the cuttlefish two types of food.",
                        translation: "その実験で、研究者たちはコウイカに2種類の餌を提供した。",
                        grammarAnalysis: {
                            mainVerbs: ["offered"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the experiment)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>researchers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>offered</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the cuttlefish</span><span class='tag'>O1</span></span> <span class='chunk O-group'><span class='text'>two types of food</span><span class='tag'>O2</span></span>.",
                            translationHtml: "<span class='t-M'>(その実験で)</span>、<span class='t-S'>研究者たちは</span> <span class='t-V'>提供した</span> <span class='t-O'>コウイカに</span> <span class='t-O'>2種類の餌を</span>。",
                            naturalTranslation: "その実験で、研究者たちはコウイカに2種類の餌を提供した。",
                            vocabulary: [
                                { word: "offered", meaning: "「提供した」「差し出した」" },
                                { word: "two types of", meaning: "「2種類の」" },
                                { word: "food", meaning: "「食べ物」「餌」" }
                            ],
                            grammarNotes: [
                                { phrase: "offered the cuttlefish two types of food", explanation: "<b>第4文型（SVOO）</b>: offer O1 O2。「O1にO2を提供する」。" },
                                { phrase: "In the experiment", explanation: "<b>前置詞句</b>: 状況を設定。「その実験で」。" },
                                { phrase: "two types of food", explanation: "<b>数量表現</b>: 「2種類の食べ物」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "One was a piece of king prawn, which the cuttlefish loved.",
                        translation: "一つはクルマエビの一切れで、コウイカはそれが大好きだった。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "loved"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>One</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a piece of king prawn</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(which <span class='chunk S2-group'><span class='text'>the cuttlefish</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>loved</span><span class='tag'>V'</span></span>)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>一つは</span> <span class='t-V'>だった</span> <span class='t-C'>クルマエビの一切れ</span>、<span class='t-M'>(which <span class='t-S2'>コウイカが</span> <span class='t-V2'>大好きだった</span>)</span>。",
                            naturalTranslation: "一つはクルマエビの一切れで、コウイカはそれが大好きだった。",
                            vocabulary: [
                                { word: "a piece of", meaning: "「一切れの」「一片の」" },
                                { word: "king prawn", meaning: "「クルマエビ」。大型のエビ。" },
                                { word: "loved", meaning: "「大好きだった」" }
                            ],
                            grammarNotes: [
                                { phrase: "which the cuttlefish loved", explanation: "<b>関係代名詞（非制限用法）</b>: 補足説明。先行詞はa piece of king prawn。" },
                                { phrase: "One", explanation: "<b>代名詞</b>: 前文の「two types of food」の一つを指す。" },
                                { phrase: "a piece of", explanation: "<b>不可算名詞の数え方</b>: 「一切れ/一片」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "The other was a piece of crab, which they liked less.",
                        translation: "もう一つはカニの一切れで、彼らはそれほど好きではなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "liked"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The other</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a piece of crab</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(which <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>liked less</span><span class='tag'>V'</span></span>)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>もう一方は</span> <span class='t-V'>だった</span> <span class='t-C'>カニの一切れ</span>、<span class='t-M'>(which <span class='t-S2'>彼らが</span> <span class='t-V2'>あまり好きでなかった</span>)</span>。",
                            naturalTranslation: "もう一つはカニの一切れで、彼らはそれほど好きではなかった。",
                            vocabulary: [
                                { word: "the other", meaning: "「もう一方」。2つのうちの残り。" },
                                { word: "crab", meaning: "「カニ」" },
                                { word: "liked less", meaning: "「あまり好きでなかった」。比較級。" }
                            ],
                            grammarNotes: [
                                { phrase: "The other", explanation: "<b>対照表現</b>: One ... The other ...「一方は...もう一方は...」。" },
                                { phrase: "which they liked less", explanation: "<b>関係代名詞（非制限用法）</b>: 補足説明。lessは比較級で「より少なく」。" },
                                { phrase: "liked less", explanation: "<b>比較級</b>: 「（エビより）好きでなかった」。暗黙の比較対象はprawn。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "The researchers taught the cuttlefish that if they did not eat the crab immediately, they would be given the prawn later.",
                        translation: "研究者たちはコウイカに、もしすぐにカニを食べなければ、後でエビがもらえると教えた。",
                        grammarAnalysis: {
                            mainVerbs: ["taught", "would be given"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The researchers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>taught</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the cuttlefish</span><span class='tag'>O1</span></span> <span class='chunk O-group'><span class='text'>that [if <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>did not eat</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the crab</span><span class='tag'>O'</span></span> <span class='chunk M2-group'><span class='text'>immediately</span><span class='tag'>M'</span></span>], <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>would be given</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the prawn</span><span class='tag'>O'</span></span> <span class='chunk M2-group'><span class='text'>later</span><span class='tag'>M'</span></span>]</span><span class='tag'>O2</span></span>.",
                            translationHtml: "<span class='t-S'>研究者たちは</span> <span class='t-V'>教えた</span> <span class='t-O'>コウイカに</span> <span class='t-O'>that [if <span class='t-S2'>彼らが</span> <span class='t-V2'>食べなければ</span> <span class='t-O2'>カニを</span> <span class='t-M2'>すぐに</span>], <span class='t-S2'>彼らは</span> <span class='t-V2'>与えられるだろう</span> <span class='t-O2'>エビを</span> <span class='t-M2'>後で</span>]</span>。",
                            naturalTranslation: "研究者たちはコウイカに、もしすぐにカニを食べなければ、後でエビがもらえると教えた。",
                            vocabulary: [
                                { word: "taught", meaning: "「教えた」。teachの過去形。" },
                                { word: "immediately", meaning: "「すぐに」「直ちに」" },
                                { word: "would be given", meaning: "「与えられるだろう」" }
                            ],
                            grammarNotes: [
                                { phrase: "taught the cuttlefish that", explanation: "<b>第4文型（SVOO）</b>: teach O1 O2（that節）。「O1にO2を教える」。" },
                                { phrase: "if they did not eat the crab immediately", explanation: "<b>条件節</b>: 「もし〜しなければ」。第1条件（現実的な仮定）。" },
                                { phrase: "would be given", explanation: "<b>助動詞would + 受動態</b>: 「〜を与えられるだろう」。will be givenの時制の一致。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "If they ate the crab, the prawn was taken away.",
                        translation: "もし彼らがカニを食べたら、エビは取り上げられた。",
                        grammarAnalysis: {
                            mainVerbs: ["ate", "was taken"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(If <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>ate</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the crab</span><span class='tag'>O'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the prawn</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was taken away</span><span class='tag'>V</span></span>.",
                            translationHtml: "<span class='t-M'>(If <span class='t-S2'>彼らが</span> <span class='t-V2'>食べたら</span> <span class='t-O2'>カニを</span>)</span>、<span class='t-S'>エビは</span> <span class='t-V'>取り上げられた</span>。",
                            naturalTranslation: "もし彼らがカニを食べたら、エビは取り上げられた。",
                            vocabulary: [
                                { word: "ate", meaning: "「食べた」。eatの過去形。" },
                                { word: "taken away", meaning: "「取り上げられた」「持ち去られた」" },
                                { word: "prawn", meaning: "「エビ」" }
                            ],
                            grammarNotes: [
                                { phrase: "If they ate the crab", explanation: "<b>条件節</b>: 「もし〜したら」。過去形だが時制の一致。" },
                                { phrase: "was taken away", explanation: "<b>受動態 + 句動詞</b>: take away（取り上げる）の受動態。" },
                                { phrase: "the prawn", explanation: "<b>定冠詞the</b>: 前述の「エビ」を指す。特定化。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: The Results
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 14,
                        text: "The results were surprising.",
                        translation: "結果は驚くべきものだった。",
                        grammarAnalysis: {
                            mainVerbs: ["were"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The results</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>surprising</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>結果は</span> <span class='t-V'>だった</span> <span class='t-C'>驚くべき</span>。",
                            naturalTranslation: "結果は驚くべきものだった。",
                            vocabulary: [
                                { word: "results", meaning: "「結果」" },
                                { word: "surprising", meaning: "「驚くべき」「意外な」" }
                            ],
                            grammarNotes: [
                                { phrase: "were", explanation: "<b>第2文型（SVC）</b>: S = C の関係。" },
                                { phrase: "surprising", explanation: "<b>現在分詞の形容詞用法</b>: 「驚かせる」→「驚くべき」。" },
                                { phrase: "The results", explanation: "<b>定冠詞the</b>: 前述の実験の結果を指す。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "The cuttlefish were able to wait for the prawn.",
                        translation: "コウイカはエビを待つことができた。",
                        grammarAnalysis: {
                            mainVerbs: ["were able to wait"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The cuttlefish</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were able to wait</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for the prawn)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>コウイカは</span> <span class='t-V'>待つことができた</span> <span class='t-M'>(エビを)</span>。",
                            naturalTranslation: "コウイカはエビを待つことができた。",
                            vocabulary: [
                                { word: "were able to", meaning: "「〜することができた」。couldと同義。" },
                                { word: "wait for", meaning: "「〜を待つ」" },
                                { word: "prawn", meaning: "「エビ」" }
                            ],
                            grammarNotes: [
                                { phrase: "were able to wait", explanation: "<b>be able to do</b>: 「〜できる」。couldよりも「実際にできた」というニュアンスが強い。" },
                                { phrase: "wait for", explanation: "<b>自動詞 + 前置詞</b>: waitは自動詞なので対象にはforが必要。" },
                                { phrase: "The cuttlefish", explanation: "<b>単複同形</b>: ここでは複数（wereから判断）。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "They looked at the crab but did not attack it.",
                        translation: "彼らはカニを見たが、攻撃はしなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["looked", "did not attack"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>looked at</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the crab</span><span class='tag'>O</span></span> but <span class='chunk V-group'><span class='text'>did not attack</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>見た</span> <span class='t-O'>カニを</span> しかし <span class='t-V'>攻撃しなかった</span> <span class='t-O'>それを</span>。",
                            naturalTranslation: "彼らはカニを見たが、攻撃はしなかった。",
                            vocabulary: [
                                { word: "looked at", meaning: "「〜を見た」" },
                                { word: "attack", meaning: "「攻撃する」" },
                                { word: "crab", meaning: "「カニ」" }
                            ],
                            grammarNotes: [
                                { phrase: "looked at the crab but did not attack it", explanation: "<b>等位接続詞but</b>: 対照的な2つの動作をつなぐ。「見た」けれど「攻撃しなかった」。" },
                                { phrase: "did not attack", explanation: "<b>否定の過去形</b>: 助動詞did + not + 原形。" },
                                { phrase: "it", explanation: "<b>代名詞</b>: the crabを指す。繰り返しを避ける。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "They waited for up to two minutes to get the food they preferred.",
                        translation: "彼らは好みの餌を手に入れるために最大2分間待った。",
                        grammarAnalysis: {
                            mainVerbs: ["waited", "preferred"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>waited</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for up to two minutes)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to get the food [<span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>preferred</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>待った</span> <span class='t-M'>(最大2分間)</span> <span class='t-M'>(the food [<span class='t-S2'>彼らが</span> <span class='t-V2'>好んだ</span>]を得るために)</span>。",
                            naturalTranslation: "彼らは好みの餌を手に入れるために最大2分間待った。",
                            vocabulary: [
                                { word: "up to", meaning: "「最大で」「〜まで」" },
                                { word: "preferred", meaning: "「より好んだ」。preferの過去形。" },
                                { word: "get", meaning: "「手に入れる」「得る」" }
                            ],
                            grammarNotes: [
                                { phrase: "for up to two minutes", explanation: "<b>期間を表す前置詞句</b>: up to は「〜まで」で上限を示す。" },
                                { phrase: "to get the food", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「〜を得るために」。" },
                                { phrase: "the food they preferred", explanation: "<b>関係代名詞の省略</b>: the food (which/that) they preferred。「彼らが好んだ食べ物」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "This behavior showed that cuttlefish could plan for the future.",
                        translation: "この行動は、コウイカが将来の計画を立てられることを示した。",
                        grammarAnalysis: {
                            mainVerbs: ["showed", "could plan"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This behavior</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>showed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>cuttlefish</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>could plan</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>for the future</span><span class='tag'>M'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>この行動は</span> <span class='t-V'>示した</span> <span class='t-O'>that [<span class='t-S2'>コウイカが</span> <span class='t-V2'>計画を立てられる</span> <span class='t-M2'>将来のために</span>]ことを</span>。",
                            naturalTranslation: "この行動は、コウイカが将来の計画を立てられることを示した。",
                            vocabulary: [
                                { word: "behavior", meaning: "「行動」「振る舞い」" },
                                { word: "showed", meaning: "「示した」" },
                                { word: "plan for", meaning: "「〜のために計画を立てる」" }
                            ],
                            grammarNotes: [
                                { phrase: "showed that", explanation: "<b>that節を目的語にとる動詞</b>: show that ...「〜ということを示す」。" },
                                { phrase: "could plan for the future", explanation: "<b>could + 動詞</b>: 能力を表す。「将来のために計画できる」。" },
                                { phrase: "This behavior", explanation: "<b>指示代名詞this</b>: 前述の「カニを待った行動」を指す。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "Before this, many scientists thought only animals like monkeys and crows could do this.",
                        translation: "これ以前、多くの科学者はサルやカラスのような動物だけがこれができると考えていた。",
                        grammarAnalysis: {
                            mainVerbs: ["thought", "could do"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Before this)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>thought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[<span class='chunk S2-group'><span class='text'>only animals like monkeys and crows</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>could do</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>this</span><span class='tag'>O'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(これ以前)</span>、<span class='t-S'>多くの科学者は</span> <span class='t-V'>考えていた</span> <span class='t-O'>[<span class='t-S2'>サルやカラスのような動物だけが</span> <span class='t-V2'>できる</span> <span class='t-O2'>これを</span>]と</span>。",
                            naturalTranslation: "これ以前、多くの科学者はサルやカラスのような動物だけがこれができると考えていた。",
                            vocabulary: [
                                { word: "before this", meaning: "「これ以前」「この前まで」" },
                                { word: "only", meaning: "「〜だけ」" },
                                { word: "like", meaning: "「〜のような」。前置詞。" }
                            ],
                            grammarNotes: [
                                { phrase: "thought", explanation: "<b>that節の省略</b>: thought (that) only animals... と接続詞thatが省略されている。" },
                                { phrase: "only animals like monkeys and crows", explanation: "<b>like + 名詞</b>: 「〜のような」。例示を表す前置詞。" },
                                { phrase: "could do this", explanation: "<b>could</b>: 能力を表す。「これができる」。thisは自制心・将来計画能力を指す。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Discussion
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 20,
                        text: "The study has changed how people view animal intelligence.",
                        translation: "この研究は、人々の動物の知能に対する見方を変えた。",
                        grammarAnalysis: {
                            mainVerbs: ["has changed", "view"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The study</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has changed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how [<span class='chunk S2-group'><span class='text'>people</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>view</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>animal intelligence</span><span class='tag'>O'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>この研究は</span> <span class='t-V'>変えた</span> <span class='t-O'>how [<span class='t-S2'>人々が</span> <span class='t-V2'>見る</span> <span class='t-O2'>動物の知能を</span>]かを</span>。",
                            naturalTranslation: "この研究は、人々の動物の知能に対する見方を変えた。",
                            vocabulary: [
                                { word: "study", meaning: "「研究」" },
                                { word: "has changed", meaning: "「変えた」。現在完了形。" },
                                { word: "view", meaning: "「見る」「考える」" }
                            ],
                            grammarNotes: [
                                { phrase: "has changed", explanation: "<b>現在完了形</b>: 過去の出来事が現在に影響。「変えてしまった（今も影響がある）」。" },
                                { phrase: "how people view", explanation: "<b>疑問詞how + 節</b>: 名詞節として機能。「人々がどのように見るか」。" },
                                { phrase: "animal intelligence", explanation: "<b>名詞 + 名詞</b>: 「動物の知能」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "However, some researchers point out that hunger levels can change the results.",
                        translation: "しかし、一部の研究者は、空腹のレベルが結果を変える可能性があると指摘している。",
                        grammarAnalysis: {
                            mainVerbs: ["point out", "can change"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some researchers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>point out</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>hunger levels</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>can change</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the results</span><span class='tag'>O'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>一部の研究者は</span> <span class='t-V'>指摘している</span> <span class='t-O'>that [<span class='t-S2'>空腹レベルが</span> <span class='t-V2'>変える可能性がある</span> <span class='t-O2'>結果を</span>]と</span>。",
                            naturalTranslation: "しかし、一部の研究者は、空腹のレベルが結果を変える可能性があると指摘している。",
                            vocabulary: [
                                { word: "point out", meaning: "「指摘する」" },
                                { word: "hunger levels", meaning: "「空腹のレベル」「飢餓度」" },
                                { word: "results", meaning: "「結果」" }
                            ],
                            grammarNotes: [
                                { phrase: "point out that", explanation: "<b>point out + that節</b>: 「〜と指摘する」。that節が目的語。" },
                                { phrase: "However", explanation: "<b>接続副詞</b>: 前文と対照・逆接を示す。「しかしながら」。" },
                                { phrase: "can change", explanation: "<b>助動詞can</b>: 可能性を表す。「〜しうる」「〜する可能性がある」。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "If an animal is very hungry, it might not wait, even if it has self-control.",
                        translation: "もし動物が非常に空腹であれば、たとえ自制心があったとしても待たないかもしれない。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "might not wait", "has"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(If <span class='chunk S2-group'><span class='text'>an animal</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>very hungry</span><span class='tag'>C'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might not wait</span><span class='tag'>V</span></span>, <span class='chunk M-group'><span class='text'>(even if <span class='chunk S2-group'><span class='text'>it</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>has</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>self-control</span><span class='tag'>O'</span></span>)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(If <span class='t-S2'>動物が</span> <span class='t-V2'>であれば</span> <span class='t-C2'>非常に空腹</span>)</span>、<span class='t-S'>それは</span> <span class='t-V'>待たないかもしれない</span>、<span class='t-M'>(even if <span class='t-S2'>それに</span> <span class='t-V2'>あっても</span> <span class='t-O2'>自制心が</span>)</span>。",
                            naturalTranslation: "もし動物が非常に空腹であれば、たとえ自制心があったとしても待たないかもしれない。",
                            vocabulary: [
                                { word: "hungry", meaning: "「空腹の」" },
                                { word: "might not wait", meaning: "「待たないかもしれない」" },
                                { word: "even if", meaning: "「たとえ〜だとしても」" }
                            ],
                            grammarNotes: [
                                { phrase: "If an animal is very hungry", explanation: "<b>条件節</b>: 「もし〜であれば」。仮定を表す。" },
                                { phrase: "might not wait", explanation: "<b>助動詞might</b>: 推量。「〜しないかもしれない」。mayより控えめ。" },
                                { phrase: "even if it has self-control", explanation: "<b>譲歩節</b>: 「たとえ〜だとしても」。一般的な条件とは別に譲歩の意味を加える。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "Therefore, checking an animal's physical condition is important before saying it is not smart.",
                        translation: "したがって、動物が賢くないと言う前に、その身体状態を確認することが重要である。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Therefore)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>checking an animal's physical condition</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(before saying [<span class='chunk S2-group'><span class='text'>it</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is not</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>smart</span><span class='tag'>C'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(したがって)</span>、<span class='t-S'>動物の身体状態を確認することは</span> <span class='t-V'>である</span> <span class='t-C'>重要</span> <span class='t-M'>(before saying [<span class='t-S2'>それが</span> <span class='t-V2'>ではない</span> <span class='t-C2'>賢く</span>]と)</span>。",
                            naturalTranslation: "したがって、動物が賢くないと言う前に、その身体状態を確認することが重要である。",
                            vocabulary: [
                                { word: "Therefore", meaning: "「したがって」「それゆえに」" },
                                { word: "physical condition", meaning: "「身体状態」「健康状態」" },
                                { word: "smart", meaning: "「賢い」「頭が良い」" }
                            ],
                            grammarNotes: [
                                { phrase: "checking an animal's physical condition", explanation: "<b>動名詞が主語</b>: 「〜することは」。動詞チェックする + 名詞句。" },
                                { phrase: "before saying", explanation: "<b>before + 動名詞</b>: 「〜する前に」。前置詞の後なので動名詞。" },
                                { phrase: "Therefore", explanation: "<b>接続副詞</b>: 前文を受けて結論を導く。「したがって」。" }
                            ]
                        }
                    },
                    {
                        id: 24,
                        text: "Self-control might be more common in the animal world than we thought.",
                        translation: "自制心は、私たちが考えていたよりも動物界で一般的であるかもしれない。",
                        grammarAnalysis: {
                            mainVerbs: ["might be", "thought"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Self-control</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>more common (in the animal world)</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(than <span class='chunk S2-group'><span class='text'>we</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>thought</span><span class='tag'>V'</span></span>)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>自制心は</span> <span class='t-V'>かもしれない</span> <span class='t-C'>より一般的(動物界で)</span> <span class='t-M'>(than <span class='t-S2'>私たちが</span> <span class='t-V2'>考えていた</span>よりも)</span>。",
                            naturalTranslation: "自制心は、私たちが考えていたよりも動物界で一般的であるかもしれない。",
                            vocabulary: [
                                { word: "common", meaning: "「一般的な」「よくある」" },
                                { word: "animal world", meaning: "「動物界」" },
                                { word: "thought", meaning: "「考えた」。thinkの過去形。" }
                            ],
                            grammarNotes: [
                                { phrase: "might be more common", explanation: "<b>助動詞might + 比較級</b>: 「より〜かもしれない」。推量を表す。" },
                                { phrase: "than we thought", explanation: "<b>比較構文</b>: than + 節。「私たちが考えていた以上に」。" },
                                { phrase: "in the animal world", explanation: "<b>前置詞句</b>: 範囲・場所を示す。「動物界において」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: What is the "marshmallow test" used to check?
            {
                id: 1,
                text: "What is the \"marshmallow test\" used to check?",
                textTranslation: "「マシュマロテスト」は何を確認するために使われますか？",
                choices: [
                    { id: 1, text: "If a subject has the ability to wait for a better reward.", translation: "被験者がより良い報酬を待つ能力があるかどうか。", isCorrect: true, highlight: "ability to wait for a better reward" },
                    { id: 2, text: "How fast an animal can find food in a hidden place.", translation: "動物がどれだけ速く隠れた場所で食べ物を見つけられるか。", isCorrect: false },
                    { id: 3, text: "Whether children prefer eating sweets or healthy food.", translation: "子供がお菓子と健康的な食べ物のどちらを好むか。", isCorrect: false },
                    { id: 4, text: "If animals can recognize their own reflection in a mirror.", translation: "動物が鏡に映る自分自身を認識できるかどうか。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。自制心の定義（Sentence 3）を確認しましょう。",
                    targetSentenceId: 3,
                    highlightWord: "the ability to wait for a better reward",
                    highlightWordSentenceId: 3
                },
                keywords: ["marshmallow test", "used to check"],
                keywordExplanations: {
                    "marshmallow test": "マシュマロテスト。自制心を測る心理実験。",
                    "used to check": "確認するために使われる。目的を問う。"
                },
                keywordMatches: [
                    { sentenceId: 4, text: "marshmallow test", keyword: "marshmallow test" },
                    { sentenceId: 3, text: "the ability to wait for a better reward", keyword: "used to check", type: "paraphrase" }
                ],
                choiceAdvice: "1: より良い報酬を待つ能力? 2: 隠れた場所で食べ物を見つける速さ? 3: お菓子か健康食品か? 4: 鏡での認識?",
                logic: [
                    { type: "text", content: "本文(Sentence 2-3): 知能の兆候の一つは自制心。これは「より良い報酬を待つ能力」。" },
                    { type: "text", content: "本文(Sentence 4): 人間では、これは子供を対象とした「マシュマロテスト」で試される。" },
                    { type: "text", content: "【決定要因】マシュマロテストは自制心（= より良い報酬を待つ能力）を確認するためのテスト。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢1「被験者がより良い報酬を待つ能力があるかどうか」と一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            // Q2: In the experiment, what did the cuttlefish have to do to get the prawn?
            {
                id: 2,
                text: "In the experiment, what did the cuttlefish have to do to get the prawn?",
                textTranslation: "実験で、コウイカはエビを手に入れるために何をしなければなりませんでしたか？",
                choices: [
                    { id: 1, text: "They had to catch the crab as fast as possible.", translation: "彼らはできるだけ速くカニを捕まえなければならなかった。", isCorrect: false },
                    { id: 2, text: "They had to move the crab to a different part of the tank.", translation: "彼らはカニを水槽の別の場所に移動させなければならなかった。", isCorrect: false },
                    { id: 3, text: "They had to stop themselves from eating the crab.", translation: "彼らはカニを食べるのを我慢しなければならなかった。", isCorrect: true, highlight: "stop themselves from eating the crab" },
                    { id: 4, text: "They had to show that they liked the crab more than the prawn.", translation: "彼らはエビよりカニが好きなことを示さなければならなかった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。実験のルール（Sentence 12）を確認しましょう。",
                    targetSentenceId: 12,
                    highlightWord: "if they did not eat the crab immediately",
                    highlightWordSentenceId: 12
                },
                keywords: ["experiment", "get the prawn"],
                keywordExplanations: {
                    "experiment": "実験。第2段落の内容。",
                    "get the prawn": "エビを得る。条件を問う。"
                },
                keywordMatches: [
                    { sentenceId: 12, text: "if they did not eat the crab immediately", keyword: "get the prawn" },
                    { sentenceId: 12, text: "they would be given the prawn later", keyword: "get the prawn" }
                ],
                choiceAdvice: "1: カニを捕まえる? 2: カニを移動? 3: カニを食べるのを我慢? 4: カニが好きと示す?",
                logic: [
                    { type: "text", content: "本文(Sentence 12): 研究者たちはコウイカに「もしすぐにカニを食べなければ、後でエビがもらえる」と教えた。" },
                    { type: "text", content: "【決定要因】エビを得る条件 = カニを食べない（我慢する）こと。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢3「カニを食べるのを我慢しなければならなかった」が正解。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            // Q3: What did the cuttlefish do during the test?
            {
                id: 3,
                text: "What did the cuttlefish do during the test?",
                textTranslation: "テスト中、コウイカは何をしましたか？",
                choices: [
                    { id: 1, text: "They ignored the crab to get the food they liked more.", translation: "彼らはより好きな餌を得るためにカニを無視した。", isCorrect: true, highlight: "ignored the crab to get the food they liked more" },
                    { id: 2, text: "They attacked the reflection of the prawn in the glass.", translation: "彼らはガラスに映るエビの反射を攻撃した。", isCorrect: false },
                    { id: 3, text: "They ate the crab first and then waited for the prawn.", translation: "彼らはまずカニを食べてから、エビを待った。", isCorrect: false },
                    { id: 4, text: "They tried to escape from the tank to find more food.", translation: "彼らはもっと餌を見つけるために水槽から逃げようとした。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。コウイカの行動（Sentence 16-17）を確認しましょう。",
                    targetSentenceId: 16,
                    highlightWord: "looked at the crab but did not attack it",
                    highlightWordSentenceId: 16
                },
                keywords: ["cuttlefish do", "during the test"],
                keywordExplanations: {
                    "cuttlefish do": "コウイカがしたこと。行動を問う。",
                    "during the test": "テスト中。結果の段落。"
                },
                keywordMatches: [
                    { sentenceId: 16, text: "looked at the crab but did not attack it", keyword: "cuttlefish do" },
                    { sentenceId: 17, text: "waited for up to two minutes", keyword: "cuttlefish do" }
                ],
                choiceAdvice: "1: カニを無視? 2: エビの反射を攻撃? 3: カニを食べてからエビを待つ? 4: 水槽から逃げる?",
                logic: [
                    { type: "text", content: "本文(Sentence 16): 彼らはカニを見たが、攻撃はしなかった（= 無視した）。" },
                    { type: "text", content: "本文(Sentence 17): 彼らは好みの餌（エビ）を得るために最大2分間待った。" },
                    { type: "text", content: "【決定要因】カニを見たが攻撃しなかった = 無視。より好きな餌（エビ）を得るため。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢1「より好きな餌を得るためにカニを無視した」が正解。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            // Q4: What has been pointed out about the test results?
            {
                id: 4,
                text: "What has been pointed out about the test results?",
                textTranslation: "テスト結果について何が指摘されていますか？",
                choices: [
                    { id: 1, text: "The test only works on animals that live in the sea.", translation: "このテストは海に住む動物にのみ有効である。", isCorrect: false },
                    { id: 2, text: "Cuttlefish are not smart enough to understand the rules.", translation: "コウイカはルールを理解するほど賢くない。", isCorrect: false },
                    { id: 3, text: "The type of food does not matter to the animals.", translation: "食べ物の種類は動物にとって関係ない。", isCorrect: false },
                    { id: 4, text: "An animal's hunger can affect how it performs in the test.", translation: "動物の空腹がテストでのパフォーマンスに影響を与えうる。", isCorrect: true, highlight: "hunger can affect" }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。研究者の指摘（Sentence 21）を確認しましょう。",
                    targetSentenceId: 21,
                    highlightWord: "hunger levels can change the results",
                    highlightWordSentenceId: 21
                },
                keywords: ["pointed out", "test results"],
                keywordExplanations: {
                    "pointed out": "指摘された。point outと対応。",
                    "test results": "テスト結果。第4段落の議論。"
                },
                keywordMatches: [
                    { sentenceId: 21, text: "some researchers point out", keyword: "pointed out" },
                    { sentenceId: 21, text: "hunger levels can change the results", keyword: "test results" }
                ],
                choiceAdvice: "1: 海の動物のみ? 2: コウイカは賢くない? 3: 餌の種類は無関係? 4: 空腹が影響?",
                logic: [
                    { type: "text", content: "本文(Sentence 21): 一部の研究者は「空腹レベルが結果を変える可能性がある」と指摘している。" },
                    { type: "text", content: "【決定要因】hunger levels = An animal's hunger / change the results = affect how it performs。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢4「動物の空腹がテストでのパフォーマンスに影響を与えうる」が正解。" },
                    { type: "conclusion", content: "正解: 4" }
                ]
            },
            // Q5: Which of the following statements is true?
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の文のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "The researchers found that cuttlefish prefer crab over king prawn.", translation: "研究者たちはコウイカがクルマエビよりカニを好むことを発見した。", isCorrect: false },
                    { id: 2, text: "Cuttlefish showed they have the ability to make plans for the future.", translation: "コウイカは将来の計画を立てる能力があることを示した。", isCorrect: true, highlight: "ability to make plans for the future" },
                    { id: 3, text: "Scientists already knew that cuttlefish had the same intelligence as monkeys.", translation: "科学者たちはすでにコウイカがサルと同じ知能を持っていることを知っていた。", isCorrect: false },
                    { id: 4, text: "The cuttlefish ate the crab immediately because they were very hungry.", translation: "コウイカは非常に空腹だったのですぐにカニを食べた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落の結論（Sentence 18）を確認しましょう。",
                    targetSentenceId: 18,
                    highlightWord: "cuttlefish could plan for the future",
                    highlightWordSentenceId: 18
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい。本文との一致を確認。",
                    "statements": "文。各選択肢を検証。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "cuttlefish could plan for the future", keyword: "true" }
                ],
                choiceAdvice: "1: カニ > エビ? (逆) 2: 将来計画能力? 3: 以前から知っていた? (新発見) 4: すぐ食べた? (待った)",
                logic: [
                    { type: "text", content: "本文(Sentence 18): この行動は、コウイカが将来の計画を立てられることを示した。" },
                    { type: "text", content: "【検証】選択肢1: 逆（エビが好き）×  選択肢3: 以前は知らなかった（新発見）×  選択肢4: 待った（すぐ食べなかった）×" },
                    { type: "text", content: "【決定要因】plan for the future = make plans for the future。コウイカは将来計画能力を示した。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢2「コウイカは将来の計画を立てる能力があることを示した」が正解。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Animal Self-Control（動物の自制心）",
            intro: "本文は、動物の知能、特に「自制心（将来のために我慢する能力）」に関する実験についての説明です。コウイカを用いた実験を通して、無脊椎動物でも将来を見越した計画的な行動がとれる可能性を示唆しつつ、その結果を評価する際の注意点にも触れています。",
            points: [
                { label: "1. 自制心の定義（第1段落）", text: "人間には将来を考えて行動する自制心（マシュマロテストで測られるような能力）があるが、動物にも同様の能力があるかを調べるため、研究者たちは特別な実験を行った。" },
                { label: "2. 実験の内容（第2段落）", text: "コウイカ（イカの仲間）に対し、大好物のエビと、それほどでもないカニを提示する実験を行った。「すぐにカニを食べなければ、後でエビがもらえる」というルールを学習させた。" },
                { label: "3. 実験結果（第3段落）", text: "驚くべきことに、コウイカはカニを無視して最大2分間待ち、より好みのエビを手に入れた。これは、サルやカラスだけでなく、コウイカも将来の計画を立てられることを示している。" },
                { label: "4. 議論と結論（第4段落）", text: "この研究は動物の知能に対する見方を変えたが、空腹レベルなどの身体的条件が結果に影響を与える可能性も指摘されている。テストに失敗しても、単に賢くないわけではない可能性がある。" }
            ]
        }
    },
    // 2級 オリジナル問題2: History of Potato Chips
    {
        id: "grade-2-original-potato-chips",
        grade: "2級",
        title: "History of Potato Chips",
        subTitle: "問題2",
        genre: "歴史 / 食文化",
        similarProblems: {
            exam: "2025年度 第1回",
            title: "History of Tea Bags"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Potato+Chips+History",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: The Invention
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "In the summer of 1853, George Crum, a chef in New York, unintentionally created potato chips.",
                        translation: "1853年の夏、ニューヨークのシェフであるジョージ・クラムは、意図せずポテトチップスを生み出した。",
                        grammarAnalysis: {
                            mainVerbs: ["created"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the summer of 1853)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>George Crum, a chef in New York,</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(unintentionally)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>created</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>potato chips</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(1853年の夏)</span>、<span class='t-S'>ニューヨークのシェフ、ジョージ・クラムは</span> <span class='t-M'>(意図せず)</span> <span class='t-V'>生み出した</span> <span class='t-O'>ポテトチップスを</span>。",
                            naturalTranslation: "1853年の夏、ニューヨークのシェフであるジョージ・クラムは、意図せずポテトチップスを生み出した。",
                            vocabulary: [
                                { word: "unintentionally", meaning: "「意図せず」「偶然に」" },
                                { word: "chef", meaning: "「シェフ」「料理長」" },
                                { word: "created", meaning: "「生み出した」「創造した」" }
                            ],
                            grammarNotes: [
                                { phrase: "George Crum, a chef in New York,", explanation: "<b>同格</b>: カンマで区切られた「a chef in New York」がGeorge Crumを説明。" },
                                { phrase: "unintentionally", explanation: "<b>副詞</b>: 「意図せず」。動詞createdを修飾。" },
                                { phrase: "In the summer of 1853", explanation: "<b>時を表す前置詞句</b>: 出来事の時期を示す。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "One evening, a customer at his restaurant kept sending his fried potatoes back to the kitchen.",
                        translation: "ある晩、彼のレストランの客が、フライドポテトを何度も厨房に送り返してきた。",
                        grammarAnalysis: {
                            mainVerbs: ["kept sending"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(One evening)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a customer (at his restaurant)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>kept sending</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>his fried potatoes</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(back to the kitchen)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(ある晩)</span>、<span class='t-S'>彼のレストランの客が</span> <span class='t-V'>送り返し続けた</span> <span class='t-O'>彼のフライドポテトを</span> <span class='t-M'>(厨房に)</span>。",
                            naturalTranslation: "ある晩、彼のレストランの客が、フライドポテトを何度も厨房に送り返してきた。",
                            vocabulary: [
                                { word: "kept sending", meaning: "「送り続けた」「何度も送った」" },
                                { word: "fried potatoes", meaning: "「フライドポテト」" },
                                { word: "back to", meaning: "「〜に戻して」" }
                            ],
                            grammarNotes: [
                                { phrase: "kept sending", explanation: "<b>keep + 動名詞</b>: 「〜し続ける」。繰り返しの動作を表す。" },
                                { phrase: "back to the kitchen", explanation: "<b>副詞句</b>: 「厨房に戻って」。方向を示す。" },
                                { phrase: "One evening", explanation: "<b>時を表す副詞句</b>: 「ある晩」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "The customer complained that they were too thick and soft.",
                        translation: "その客は、それらが厚すぎて柔らかすぎると文句を言った。",
                        grammarAnalysis: {
                            mainVerbs: ["complained", "were"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The customer</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>complained</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>were</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>too thick and soft</span><span class='tag'>C'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>その客は</span> <span class='t-V'>文句を言った</span> <span class='t-O'>that [<span class='t-S2'>それらが</span> <span class='t-V2'>だった</span> <span class='t-C2'>厚すぎて柔らかすぎる</span>]と</span>。",
                            naturalTranslation: "その客は、それらが厚すぎて柔らかすぎると文句を言った。",
                            vocabulary: [
                                { word: "complained", meaning: "「文句を言った」「不平を言った」" },
                                { word: "too thick", meaning: "「厚すぎる」" },
                                { word: "soft", meaning: "「柔らかい」" }
                            ],
                            grammarNotes: [
                                { phrase: "complained that", explanation: "<b>complain + that節</b>: 「〜と文句を言う」。that節が目的語。" },
                                { phrase: "too thick and soft", explanation: "<b>too + 形容詞</b>: 「〜すぎる」。否定的なニュアンス。" },
                                { phrase: "they", explanation: "<b>代名詞</b>: 前文のfried potatoesを指す。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "Annoyed by this, Crum sliced the potatoes as thinly as possible, fried them until they were hard, and put a lot of salt on them.",
                        translation: "これに腹を立てたクラムは、ジャガイモをできる限り薄くスライスし、硬くなるまで揚げ、大量の塩を振った。",
                        grammarAnalysis: {
                            mainVerbs: ["sliced", "fried", "put"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Annoyed by this)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Crum</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>sliced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the potatoes</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(as thinly as possible)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>fried</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(until they were hard)</span><span class='tag'>M</span></span>, and <span class='chunk V-group'><span class='text'>put</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a lot of salt</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(on them)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(これに腹を立て)</span>、<span class='t-S'>クラムは</span> <span class='t-V'>スライスした</span> <span class='t-O'>ジャガイモを</span> <span class='t-M'>(できる限り薄く)</span>、<span class='t-V'>揚げた</span> <span class='t-O'>それらを</span> <span class='t-M'>(硬くなるまで)</span>、そして <span class='t-V'>かけた</span> <span class='t-O'>大量の塩を</span> <span class='t-M'>(それらに)</span>。",
                            naturalTranslation: "これに腹を立てたクラムは、ジャガイモをできる限り薄くスライスし、硬くなるまで揚げ、大量の塩を振った。",
                            vocabulary: [
                                { word: "annoyed", meaning: "「腹を立てた」「いらいらした」" },
                                { word: "sliced", meaning: "「スライスした」「薄く切った」" },
                                { word: "as thinly as possible", meaning: "「できる限り薄く」" }
                            ],
                            grammarNotes: [
                                { phrase: "Annoyed by this", explanation: "<b>分詞構文</b>: 過去分詞で始まり、理由・状況を表す。「これに腹を立てて」。" },
                                { phrase: "as thinly as possible", explanation: "<b>as ... as possible</b>: 「できる限り〜」。最大限を表す。" },
                                { phrase: "until they were hard", explanation: "<b>until節</b>: 「〜するまで」。時を表す副詞節。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "To his surprise, the customer loved the crispy snack.",
                        translation: "驚いたことに、その客はこのパリパリしたスナックを気に入った。",
                        grammarAnalysis: {
                            mainVerbs: ["loved"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To his surprise)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the customer</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>loved</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the crispy snack</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(彼が驚いたことに)</span>、<span class='t-S'>その客は</span> <span class='t-V'>気に入った</span> <span class='t-O'>そのパリパリしたスナックを</span>。",
                            naturalTranslation: "驚いたことに、その客はこのパリパリしたスナックを気に入った。",
                            vocabulary: [
                                { word: "to his surprise", meaning: "「彼が驚いたことに」" },
                                { word: "loved", meaning: "「気に入った」「大好きだった」" },
                                { word: "crispy", meaning: "「パリパリした」「カリカリの」" }
                            ],
                            grammarNotes: [
                                { phrase: "To his surprise", explanation: "<b>慣用表現</b>: 「彼が驚いたことに」。感情を表す独立不定詞句。" },
                                { phrase: "loved", explanation: "<b>動詞</b>: 「大好きだった」。予想外の反応を示す。" },
                                { phrase: "crispy", explanation: "<b>形容詞</b>: 食感を表す。「パリパリした」。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "They became a hit at the restaurant and were soon known as \"Saratoga Chips.\"",
                        translation: "それらはレストランで大ヒットし、すぐに「サラトガ・チップス」として知られるようになった。",
                        grammarAnalysis: {
                            mainVerbs: ["became", "were known"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a hit</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(at the restaurant)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>were soon known</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(as \"Saratoga Chips\")</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それらは</span> <span class='t-V'>なった</span> <span class='t-C'>大ヒットに</span> <span class='t-M'>(レストランで)</span> そして <span class='t-V'>すぐに知られた</span> <span class='t-M'>(「サラトガ・チップス」として)</span>。",
                            naturalTranslation: "それらはレストランで大ヒットし、すぐに「サラトガ・チップス」として知られるようになった。",
                            vocabulary: [
                                { word: "became a hit", meaning: "「大ヒットになった」" },
                                { word: "were known as", meaning: "「〜として知られた」" },
                                { word: "Saratoga Chips", meaning: "「サラトガ・チップス」。ポテトチップスの初期の名称。" }
                            ],
                            grammarNotes: [
                                { phrase: "became a hit", explanation: "<b>第2文型（SVC）</b>: become + 名詞。「〜になる」。" },
                                { phrase: "were known as", explanation: "<b>受動態</b>: be known as 〜。「〜として知られる」。" },
                                { phrase: "soon", explanation: "<b>副詞</b>: 「すぐに」。時間の経過を示す。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: Packaging Evolution
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "For a long time, chips were only served in restaurants or sold in barrels.",
                        translation: "長い間、チップスはレストランで提供されるか、樽に入れて売られるだけだった。",
                        grammarAnalysis: {
                            mainVerbs: ["were served", "sold"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For a long time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>chips</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were only served</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in restaurants)</span><span class='tag'>M</span></span> or <span class='chunk V-group'><span class='text'>sold</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in barrels)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(長い間)</span>、<span class='t-S'>チップスは</span> <span class='t-V'>提供されるだけだった</span> <span class='t-M'>(レストランで)</span> または <span class='t-V'>売られた</span> <span class='t-M'>(樽に入れて)</span>。",
                            naturalTranslation: "長い間、チップスはレストランで提供されるか、樽に入れて売られるだけだった。",
                            vocabulary: [
                                { word: "for a long time", meaning: "「長い間」" },
                                { word: "served", meaning: "「提供された」" },
                                { word: "barrels", meaning: "「樽」" }
                            ],
                            grammarNotes: [
                                { phrase: "were only served", explanation: "<b>受動態</b>: be + 過去分詞。onlyは限定を強調。" },
                                { phrase: "or sold", explanation: "<b>等位接続詞or</b>: 「または」。2つの選択肢を示す。" },
                                { phrase: "in barrels", explanation: "<b>前置詞句</b>: 「樽に入れて」。容器を示す。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "This caused a problem because the chips at the bottom of the barrel would often get crushed and go stale.",
                        translation: "樽の底にあるチップスはしばしば砕けたり湿気ったりしてしまうため、これは問題を引き起こした。",
                        grammarAnalysis: {
                            mainVerbs: ["caused", "would get", "go"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>caused</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a problem</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(because [<span class='chunk S2-group'><span class='text'>the chips (at the bottom of the barrel)</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>would often get crushed</span><span class='tag'>V'</span></span> and <span class='chunk V2-group'><span class='text'>go stale</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>引き起こした</span> <span class='t-O'>問題を</span> <span class='t-M'>(because [<span class='t-S2'>樽の底のチップスが</span> <span class='t-V2'>しばしば砕け</span> そして <span class='t-V2'>湿気る</span>]ため)</span>。",
                            naturalTranslation: "樽の底にあるチップスはしばしば砕けたり湿気ったりしてしまうため、これは問題を引き起こした。",
                            vocabulary: [
                                { word: "caused a problem", meaning: "「問題を引き起こした」" },
                                { word: "get crushed", meaning: "「砕ける」「つぶれる」" },
                                { word: "go stale", meaning: "「湿気る」「古くなる」" }
                            ],
                            grammarNotes: [
                                { phrase: "because the chips would often", explanation: "<b>because節</b>: 理由を説明。would は過去の習慣的動作。" },
                                { phrase: "get crushed", explanation: "<b>get + 過去分詞</b>: 状態変化を表す。「砕かれた状態になる」。" },
                                { phrase: "go stale", explanation: "<b>go + 形容詞</b>: 悪い状態への変化。「古くなる」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "In the 1920s, a businesswoman named Laura Scudder had an idea to solve this.",
                        translation: "1920年代、ローラ・スカダーという女性実業家がこれを解決するアイデアを持っていた。",
                        grammarAnalysis: {
                            mainVerbs: ["had"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the 1920s)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a businesswoman (named Laura Scudder)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an idea (to solve this)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(1920年代)</span>、<span class='t-S'>ローラ・スカダーという女性実業家が</span> <span class='t-V'>持っていた</span> <span class='t-O'>アイデアを（これを解決するための）</span>。",
                            naturalTranslation: "1920年代、ローラ・スカダーという女性実業家がこれを解決するアイデアを持っていた。",
                            vocabulary: [
                                { word: "businesswoman", meaning: "「女性実業家」" },
                                { word: "named", meaning: "「〜という名の」" },
                                { word: "solve", meaning: "「解決する」" }
                            ],
                            grammarNotes: [
                                { phrase: "named Laura Scudder", explanation: "<b>過去分詞の形容詞的用法</b>: 「ローラ・スカダーと名付けられた」→「〜という」。" },
                                { phrase: "to solve this", explanation: "<b>不定詞の形容詞的用法</b>: 「これを解決するための」。ideaを修飾。" },
                                { phrase: "In the 1920s", explanation: "<b>時を表す前置詞句</b>: 「1920年代に」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "She asked her workers to iron sheets of wax paper together to make bags.",
                        translation: "彼女は従業員に、ワックスペーパーのシートをアイロンで張り合わせて袋を作るように頼んだ。",
                        grammarAnalysis: {
                            mainVerbs: ["asked"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>asked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her workers</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to iron sheets of wax paper together</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(to make bags)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>頼んだ</span> <span class='t-O'>従業員に</span> <span class='t-C'>ワックスペーパーのシートを一緒にアイロンするように</span> <span class='t-M'>(袋を作るために)</span>。",
                            naturalTranslation: "彼女は従業員に、ワックスペーパーのシートをアイロンで張り合わせて袋を作るように頼んだ。",
                            vocabulary: [
                                { word: "asked ... to", meaning: "「〜に…するよう頼んだ」" },
                                { word: "iron", meaning: "「アイロンをかける」（動詞）" },
                                { word: "wax paper", meaning: "「ワックスペーパー」「蝋紙」" }
                            ],
                            grammarNotes: [
                                { phrase: "asked her workers to iron", explanation: "<b>ask O to do</b>: 「Oに〜するよう頼む」。第5文型。" },
                                { phrase: "sheets of wax paper", explanation: "<b>不可算名詞の数え方</b>: 「紙を数える場合はsheets ofを使う」。" },
                                { phrase: "to make bags", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「袋を作るために」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "These bags kept the chips fresh and allowed them to be transported to stores.",
                        translation: "これらの袋はチップスを新鮮に保ち、店へ輸送することを可能にした。",
                        grammarAnalysis: {
                            mainVerbs: ["kept", "allowed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These bags</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>kept</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the chips</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>fresh</span><span class='tag'>C</span></span> and <span class='chunk V-group'><span class='text'>allowed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to be transported to stores</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これらの袋は</span> <span class='t-V'>保った</span> <span class='t-O'>チップスを</span> <span class='t-C'>新鮮に</span> そして <span class='t-V'>可能にした</span> <span class='t-O'>それらが</span> <span class='t-C'>店に輸送されることを</span>。",
                            naturalTranslation: "これらの袋はチップスを新鮮に保ち、店へ輸送することを可能にした。",
                            vocabulary: [
                                { word: "kept ... fresh", meaning: "「〜を新鮮に保った」" },
                                { word: "allowed ... to", meaning: "「〜が…することを可能にした」" },
                                { word: "transported", meaning: "「輸送された」" }
                            ],
                            grammarNotes: [
                                { phrase: "kept the chips fresh", explanation: "<b>keep O C</b>: 「OをCの状態に保つ」。第5文型。" },
                                { phrase: "allowed them to be transported", explanation: "<b>allow O to do</b>: 「Oが〜することを可能にする」。受動態不定詞。" },
                                { phrase: "to be transported", explanation: "<b>受動態の不定詞</b>: 「輸送されること」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "This invention helped potato chips become a mass-market product.",
                        translation: "この発明は、ポテトチップスが大量消費製品になるのを助けた。",
                        grammarAnalysis: {
                            mainVerbs: ["helped"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This invention</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>potato chips</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>become a mass-market product</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>この発明は</span> <span class='t-V'>助けた</span> <span class='t-O'>ポテトチップスが</span> <span class='t-C'>大量消費製品になることを</span>。",
                            naturalTranslation: "この発明は、ポテトチップスが大量消費製品になるのを助けた。",
                            vocabulary: [
                                { word: "invention", meaning: "「発明」" },
                                { word: "helped ... become", meaning: "「〜が…になるのを助けた」" },
                                { word: "mass-market product", meaning: "「大量消費製品」" }
                            ],
                            grammarNotes: [
                                { phrase: "helped potato chips become", explanation: "<b>help O (to) do</b>: 「Oが〜するのを助ける」。toは省略可能。" },
                                { phrase: "mass-market", explanation: "<b>複合形容詞</b>: 「大量市場向けの」。ハイフンで結合。" },
                                { phrase: "This invention", explanation: "<b>指示代名詞this</b>: 前述のワックスペーパー袋を指す。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Flavor Innovation
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "While potato chips were popular in the United States, they were usually sold without any flavor.",
                        translation: "ポテトチップスはアメリカで人気があったが、通常は味付けなしで売られていた。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "were sold"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While [<span class='chunk S2-group'><span class='text'>potato chips</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>were popular</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>in the United States</span><span class='tag'>M'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were usually sold</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(without any flavor)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(While [<span class='t-S2'>ポテトチップスは</span> <span class='t-V2'>人気があった</span> <span class='t-M2'>アメリカで</span>]が)</span>、<span class='t-S'>それらは</span> <span class='t-V'>通常売られていた</span> <span class='t-M'>(味付けなしで)</span>。",
                            naturalTranslation: "ポテトチップスはアメリカで人気があったが、通常は味付けなしで売られていた。",
                            vocabulary: [
                                { word: "While", meaning: "「〜である一方で」「〜だが」" },
                                { word: "popular", meaning: "「人気がある」" },
                                { word: "without any flavor", meaning: "「何の味もなしで」" }
                            ],
                            grammarNotes: [
                                { phrase: "While potato chips were popular", explanation: "<b>While節</b>: 譲歩「〜である一方で」。対照を示す。" },
                                { phrase: "were usually sold", explanation: "<b>受動態</b>: 「通常売られていた」。usuallyは頻度を表す副詞。" },
                                { phrase: "without any flavor", explanation: "<b>without + 名詞</b>: 「〜なしで」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "A small packet of salt was sometimes included in the bag for customers to add themselves.",
                        translation: "客が自分で加えるための塩の小袋が袋の中に含まれていることもあった。",
                        grammarAnalysis: {
                            mainVerbs: ["was included"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>A small packet of salt</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was sometimes included</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the bag)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(for customers to add themselves)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>塩の小袋が</span> <span class='t-V'>時々含まれていた</span> <span class='t-M'>(袋の中に)</span> <span class='t-M'>(客が自分で加えるための)</span>。",
                            naturalTranslation: "客が自分で加えるための塩の小袋が袋の中に含まれていることもあった。",
                            vocabulary: [
                                { word: "packet", meaning: "「小袋」「パケット」" },
                                { word: "included", meaning: "「含まれていた」" },
                                { word: "add themselves", meaning: "「自分で加える」" }
                            ],
                            grammarNotes: [
                                { phrase: "was sometimes included", explanation: "<b>受動態</b>: 「時々含まれていた」。sometimesは頻度副詞。" },
                                { phrase: "for customers to add", explanation: "<b>for O to do</b>: 「Oが〜するために」。目的を表す不定詞構文。" },
                                { phrase: "A small packet of salt", explanation: "<b>数量表現</b>: 「塩の小袋」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "This changed in the 1950s when the owner of an Irish company invented a new technology to add seasoning directly to the chips.",
                        translation: "これは1950年代に、アイルランドの会社のオーナーがチップスに直接調味料を加える新しい技術を発明したことで変わった。",
                        grammarAnalysis: {
                            mainVerbs: ["changed", "invented"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>changed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the 1950s)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(when [<span class='chunk S2-group'><span class='text'>the owner of an Irish company</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>invented</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>a new technology (to add seasoning directly to the chips)</span><span class='tag'>O'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>変わった</span> <span class='t-M'>(1950年代に)</span> <span class='t-M'>(when [<span class='t-S2'>アイルランドの会社のオーナーが</span> <span class='t-V2'>発明した</span> <span class='t-O2'>新技術を（チップスに直接調味料を加える）</span>])</span>。",
                            naturalTranslation: "これは1950年代に、アイルランドの会社のオーナーがチップスに直接調味料を加える新しい技術を発明したことで変わった。",
                            vocabulary: [
                                { word: "changed", meaning: "「変わった」" },
                                { word: "invented", meaning: "「発明した」" },
                                { word: "seasoning", meaning: "「調味料」「味付け」" }
                            ],
                            grammarNotes: [
                                { phrase: "This changed", explanation: "<b>指示代名詞</b>: Thisは前文の「味なしで売られていた」状況を指す。" },
                                { phrase: "when the owner invented", explanation: "<b>関係副詞when</b>: 「〜したとき」。時の状況を説明。" },
                                { phrase: "to add seasoning directly", explanation: "<b>不定詞の形容詞的用法</b>: 「調味料を直接加えるための」。technologyを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "He introduced the first flavored chips: Cheese and Onion.",
                        translation: "彼は最初の味付きチップスである「チーズ＆オニオン」を導入した。",
                        grammarAnalysis: {
                            mainVerbs: ["introduced"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>introduced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the first flavored chips: Cheese and Onion</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>導入した</span> <span class='t-O'>最初の味付きチップス：チーズ＆オニオンを</span>。",
                            naturalTranslation: "彼は最初の味付きチップスである「チーズ＆オニオン」を導入した。",
                            vocabulary: [
                                { word: "introduced", meaning: "「導入した」「紹介した」" },
                                { word: "flavored", meaning: "「味付きの」" },
                                { word: "Cheese and Onion", meaning: "「チーズ＆オニオン」。最初のフレーバー。" }
                            ],
                            grammarNotes: [
                                { phrase: "introduced", explanation: "<b>動詞</b>: 「導入した」。新しいものを市場に出す。" },
                                { phrase: "the first flavored chips", explanation: "<b>序数詞 + 形容詞</b>: 「最初の味付きチップス」。" },
                                { phrase: ": Cheese and Onion", explanation: "<b>コロン</b>: 具体的な例・説明を導入。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "This innovation led to a global explosion of chip flavors that matched local food cultures.",
                        translation: "この革新は、地元の食文化に合ったチップスのフレーバーの世界的な爆発的増加につながった。",
                        grammarAnalysis: {
                            mainVerbs: ["led", "matched"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This innovation</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>led to</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a global explosion of chip flavors (that [<span class='chunk S2-group'><span class='text'>_</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>matched</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>local food cultures</span><span class='tag'>O'</span></span>])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>この革新は</span> <span class='t-V'>つながった</span> <span class='t-O'>フレーバーの世界的な爆発的増加に（that [<span class='t-V2'>合った</span> <span class='t-O2'>地元の食文化に</span>]）</span>。",
                            naturalTranslation: "この革新は、地元の食文化に合ったチップスのフレーバーの世界的な爆発的増加につながった。",
                            vocabulary: [
                                { word: "innovation", meaning: "「革新」「イノベーション」" },
                                { word: "led to", meaning: "「〜につながった」" },
                                { word: "matched", meaning: "「〜に合った」「一致した」" }
                            ],
                            grammarNotes: [
                                { phrase: "led to", explanation: "<b>句動詞</b>: lead to 〜。「〜につながる」。" },
                                { phrase: "that matched local food cultures", explanation: "<b>関係代名詞that</b>: chip flavorsを修飾。「地元の食文化に合った」。" },
                                { phrase: "a global explosion", explanation: "<b>比喩表現</b>: 「爆発的増加」。急激な増加を表す。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Modern Trends
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 18,
                        text: "Potato chips continue to evolve to meet modern needs.",
                        translation: "ポテトチップスは現代のニーズを満たすために進化し続けている。",
                        grammarAnalysis: {
                            mainVerbs: ["continue"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Potato chips</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>continue</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to evolve</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(to meet modern needs)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ポテトチップスは</span> <span class='t-V'>続けている</span> <span class='t-C'>進化することを</span> <span class='t-M'>(現代のニーズを満たすために)</span>。",
                            naturalTranslation: "ポテトチップスは現代のニーズを満たすために進化し続けている。",
                            vocabulary: [
                                { word: "continue", meaning: "「続ける」" },
                                { word: "evolve", meaning: "「進化する」" },
                                { word: "meet needs", meaning: "「ニーズを満たす」" }
                            ],
                            grammarNotes: [
                                { phrase: "continue to evolve", explanation: "<b>continue to do</b>: 「〜し続ける」。不定詞を目的語にとる。" },
                                { phrase: "to meet modern needs", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「現代のニーズを満たすために」。" },
                                { phrase: "modern needs", explanation: "<b>名詞句</b>: 「現代の要求・ニーズ」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "In recent years, concerns about health have led to changes in how chips are made.",
                        translation: "近年、健康への懸念がチップスの製造方法の変化につながっている。",
                        grammarAnalysis: {
                            mainVerbs: ["have led", "are made"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In recent years)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>concerns (about health)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have led to</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>changes (in [how <span class='chunk S2-group'><span class='text'>chips</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are made</span><span class='tag'>V'</span></span>])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(近年)</span>、<span class='t-S'>健康への懸念が</span> <span class='t-V'>つながった</span> <span class='t-O'>変化に（in [how <span class='t-S2'>チップスが</span> <span class='t-V2'>作られるか</span>]）</span>。",
                            naturalTranslation: "近年、健康への懸念がチップスの製造方法の変化につながっている。",
                            vocabulary: [
                                { word: "concerns about", meaning: "「〜についての懸念」" },
                                { word: "have led to", meaning: "「〜につながった」現在完了。" },
                                { word: "how chips are made", meaning: "「チップスがどのように作られるか」" }
                            ],
                            grammarNotes: [
                                { phrase: "have led to", explanation: "<b>現在完了形</b>: 過去から現在まで続く結果を示す。" },
                                { phrase: "how chips are made", explanation: "<b>疑問詞how + 受動態</b>: 「どのように作られるか」。名詞節。" },
                                { phrase: "concerns about health", explanation: "<b>名詞 + 前置詞about</b>: 「健康についての懸念」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Companies now offer baked chips or chips made from vegetables other than potatoes to lower fat and calories.",
                        translation: "企業は現在、脂肪やカロリーを下げるために、ベイクド（焼き）チップスやジャガイモ以外の野菜で作られたチップスを提供している。",
                        grammarAnalysis: {
                            mainVerbs: ["offer"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Companies</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(now)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>offer</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>baked chips or chips (made from vegetables other than potatoes)</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to lower fat and calories)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>企業は</span> <span class='t-M'>(現在)</span> <span class='t-V'>提供している</span> <span class='t-O'>ベイクドチップスまたはチップス（ジャガイモ以外の野菜で作られた）を</span> <span class='t-M'>(脂肪とカロリーを下げるために)</span>。",
                            naturalTranslation: "企業は現在、脂肪やカロリーを下げるために、ベイクド（焼き）チップスやジャガイモ以外の野菜で作られたチップスを提供している。",
                            vocabulary: [
                                { word: "baked chips", meaning: "「ベイクドチップス」「焼きチップス」" },
                                { word: "other than", meaning: "「〜以外の」" },
                                { word: "to lower", meaning: "「下げるために」" }
                            ],
                            grammarNotes: [
                                { phrase: "made from vegetables other than potatoes", explanation: "<b>過去分詞の形容詞的用法</b>: 「ジャガイモ以外の野菜から作られた」。" },
                                { phrase: "to lower fat and calories", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「脂肪とカロリーを下げるために」。" },
                                { phrase: "other than", explanation: "<b>前置詞句</b>: 「〜以外の」。除外を表す。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "Also, there is a push for environmentally friendly packaging.",
                        translation: "また、環境に優しいパッケージへの後押しもある。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>a push (for environmentally friendly packaging)</span><span class='tag'>S</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-V'>ある</span> <span class='t-S'>後押しが（環境に優しいパッケージへの）</span>。",
                            naturalTranslation: "また、環境に優しいパッケージへの後押しもある。",
                            vocabulary: [
                                { word: "push for", meaning: "「〜への後押し」「〜への動き」" },
                                { word: "environmentally friendly", meaning: "「環境に優しい」" },
                                { word: "packaging", meaning: "「パッケージ」「包装」" }
                            ],
                            grammarNotes: [
                                { phrase: "there is", explanation: "<b>there構文</b>: 存在を表す。「〜がある」。" },
                                { phrase: "a push for", explanation: "<b>push for</b>: 「〜を求める動き」「〜への後押し」。" },
                                { phrase: "environmentally friendly", explanation: "<b>複合形容詞</b>: 「環境に優しい」。副詞 + 形容詞。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Manufacturers are trying to develop bags that are biodegradable.",
                        translation: "製造業者は、生分解性の袋を開発しようとしている。",
                        grammarAnalysis: {
                            mainVerbs: ["are trying", "are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Manufacturers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are trying</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to develop bags (that [<span class='chunk V2-group'><span class='text'>are biodegradable</span><span class='tag'>V'</span></span>])</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>製造業者は</span> <span class='t-V'>しようとしている</span> <span class='t-C'>袋を開発することを（that [<span class='t-V2'>生分解性である</span>]）</span>。",
                            naturalTranslation: "製造業者は、生分解性の袋を開発しようとしている。",
                            vocabulary: [
                                { word: "manufacturers", meaning: "「製造業者」「メーカー」" },
                                { word: "are trying to", meaning: "「〜しようとしている」" },
                                { word: "biodegradable", meaning: "「生分解性の」。自然に分解される。" }
                            ],
                            grammarNotes: [
                                { phrase: "are trying to develop", explanation: "<b>現在進行形 + 不定詞</b>: 「開発しようとしている」。努力を表す。" },
                                { phrase: "that are biodegradable", explanation: "<b>関係代名詞that</b>: bagsを修飾。「生分解性である」。" },
                                { phrase: "biodegradable", explanation: "<b>形容詞</b>: bio（生物）+ degradable（分解可能な）。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "These efforts aim to reduce the amount of plastic waste created by the snack industry.",
                        translation: "これらの取り組みは、スナック業界によって生み出されるプラスチック廃棄物の量を減らすことを目的としている。",
                        grammarAnalysis: {
                            mainVerbs: ["aim"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These efforts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>aim</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to reduce the amount of plastic waste (created by the snack industry)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これらの取り組みは</span> <span class='t-V'>目的とする</span> <span class='t-C'>プラスチック廃棄物の量を減らすことを（スナック業界によって生み出された）</span>。",
                            naturalTranslation: "これらの取り組みは、スナック業界によって生み出されるプラスチック廃棄物の量を減らすことを目的としている。",
                            vocabulary: [
                                { word: "efforts", meaning: "「取り組み」「努力」" },
                                { word: "aim to", meaning: "「〜を目的とする」" },
                                { word: "plastic waste", meaning: "「プラスチック廃棄物」" }
                            ],
                            grammarNotes: [
                                { phrase: "aim to reduce", explanation: "<b>aim to do</b>: 「〜することを目的とする」。" },
                                { phrase: "created by the snack industry", explanation: "<b>過去分詞の形容詞的用法</b>: 「スナック業界によって生み出された」。" },
                                { phrase: "the amount of", explanation: "<b>不可算名詞の量を表す表現</b>: 「〜の量」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: Why was George Crum surprised by the customer's reaction?
            {
                id: 1,
                text: "Why was George Crum surprised by the customer's reaction?",
                textTranslation: "なぜジョージ・クラムは客の反応に驚いたのですか？",
                choices: [
                    { id: 1, text: "The customer asked for a refund after eating the potatoes.", translation: "客はポテトを食べた後に返金を求めた。", isCorrect: false },
                    { id: 2, text: "The customer enjoyed the thin and hard potatoes he made.", translation: "客は彼が作った薄くて硬いポテトを気に入った。", isCorrect: true, highlight: "enjoyed the thin and hard potatoes" },
                    { id: 3, text: "The customer wanted to learn how to cook the potatoes.", translation: "客はポテトの調理法を学びたがった。", isCorrect: false },
                    { id: 4, text: "The customer complained that the new potatoes were too salty.", translation: "客は新しいポテトが塩辛すぎると文句を言った。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。クラムの驚き（Sentence 5）を確認しましょう。",
                    targetSentenceId: 5,
                    highlightWord: "To his surprise, the customer loved",
                    highlightWordSentenceId: 5
                },
                keywords: ["surprised", "customer's reaction"],
                keywordExplanations: {
                    "surprised": "驚いた。To his surpriseと対応。",
                    "customer's reaction": "客の反応。lovedという肯定的反応。"
                },
                keywordMatches: [
                    { sentenceId: 5, text: "To his surprise", keyword: "surprised" },
                    { sentenceId: 5, text: "the customer loved the crispy snack", keyword: "customer's reaction" }
                ],
                choiceAdvice: "1: 返金? 2: 薄くて硬いポテトを気に入った? 3: 調理法? 4: 塩辛すぎる?",
                logic: [
                    { type: "text", content: "本文(Sentence 4): クラムは腹を立て、ポテトを薄くスライスし、硬くなるまで揚げ、塩を振った。" },
                    { type: "text", content: "本文(Sentence 5): 「驚いたことに（To his surprise）、客はこのパリパリしたスナックを気に入った（loved）。」" },
                    { type: "text", content: "【決定要因】クラムは客に仕返しのつもりで作ったが、逆に気に入られたことに驚いた。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢2「客は彼が作った薄くて硬いポテトを気に入った」が正解。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            // Q2: What was the main benefit of Laura Scudder's invention?
            {
                id: 2,
                text: "What was the main benefit of Laura Scudder's invention?",
                textTranslation: "ローラ・スカダーの発明の主な利点は何でしたか？",
                choices: [
                    { id: 1, text: "It allowed chips to be kept fresh and sold in stores.", translation: "チップスを新鮮に保ち、店で販売することを可能にした。", isCorrect: true, highlight: "kept fresh and sold in stores" },
                    { id: 2, text: "It made it easier for workers to peel the potatoes.", translation: "労働者がジャガイモの皮をむくのを簡単にした。", isCorrect: false },
                    { id: 3, text: "It reduced the cost of frying the chips in oil.", translation: "油でチップスを揚げるコストを削減した。", isCorrect: false },
                    { id: 4, text: "It improved the taste of the chips by adding salt.", translation: "塩を加えることでチップスの味を改善した。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。袋の効果（Sentence 11）を確認しましょう。",
                    targetSentenceId: 11,
                    highlightWord: "kept the chips fresh and allowed them to be transported",
                    highlightWordSentenceId: 11
                },
                keywords: ["main benefit", "Laura Scudder's invention"],
                keywordExplanations: {
                    "main benefit": "主な利点。袋の効果を問う。",
                    "Laura Scudder's invention": "ローラ・スカダーの発明。ワックスペーパー袋。"
                },
                keywordMatches: [
                    { sentenceId: 11, text: "kept the chips fresh", keyword: "main benefit" },
                    { sentenceId: 11, text: "allowed them to be transported to stores", keyword: "main benefit" }
                ],
                choiceAdvice: "1: 鮮度保持+店販売? 2: 皮むき? 3: 揚げコスト? 4: 塩で味改善?",
                logic: [
                    { type: "text", content: "本文(Sentence 11): 「これらの袋はチップスを新鮮に保ち（kept fresh）、店へ輸送することを可能にした（allowed to be transported to stores）。」" },
                    { type: "text", content: "【決定要因】kept fresh = kept fresh / transported to stores = sold in stores。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢1「チップスを新鮮に保ち、店で販売することを可能にした」が正解。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            // Q3: How did potato chips change in the 1950s?
            {
                id: 3,
                text: "How did potato chips change in the 1950s?",
                textTranslation: "1950年代にポテトチップスはどのように変わりましたか？",
                choices: [
                    { id: 1, text: "They began to be sold in barrels instead of paper bags.", translation: "紙袋ではなく樽で売られるようになった。", isCorrect: false },
                    { id: 2, text: "The United States government banned the sale of flavored chips.", translation: "アメリカ政府が味付きチップスの販売を禁止した。", isCorrect: false },
                    { id: 3, text: "New technologies allowed flavors to be added to them.", translation: "新しい技術により、味付けが可能になった。", isCorrect: true, highlight: "New technologies allowed flavors to be added" },
                    { id: 4, text: "Customers stopped buying them because of health concerns.", translation: "健康上の懸念から客が買うのをやめた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。1950年代の変化（Sentence 15）を確認しましょう。",
                    targetSentenceId: 15,
                    highlightWord: "invented a new technology to add seasoning directly",
                    highlightWordSentenceId: 15
                },
                keywords: ["change", "1950s"],
                keywordExplanations: {
                    "change": "変化。Thisとchangedに対応。",
                    "1950s": "1950年代。時代の特定。"
                },
                keywordMatches: [
                    { sentenceId: 15, text: "This changed in the 1950s", keyword: "change 1950s" },
                    { sentenceId: 15, text: "a new technology to add seasoning directly", keyword: "change" }
                ],
                choiceAdvice: "1: 樽→紙袋? (逆) 2: 禁止? 3: 味付け技術? 4: 健康懸念?",
                logic: [
                    { type: "text", content: "本文(Sentence 15): 「これは1950年代に...チップスに直接調味料を加える新しい技術を発明したことで変わった。」" },
                    { type: "text", content: "【決定要因】a new technology to add seasoning = New technologies allowed flavors to be added。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢3「新しい技術により、味付けが可能になった」が正解。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            // Q4: Why are companies introducing baked or vegetable chips?
            {
                id: 4,
                text: "Why are companies introducing baked or vegetable chips?",
                textTranslation: "なぜ企業はベイクドチップスや野菜チップスを導入しているのですか？",
                choices: [
                    { id: 1, text: "To use up old potatoes that cannot be sold.", translation: "売れない古いジャガイモを使い切るため。", isCorrect: false },
                    { id: 2, text: "To address customers' concerns about health.", translation: "顧客の健康への懸念に対処するため。", isCorrect: true, highlight: "address customers' concerns about health" },
                    { id: 3, text: "To make the chips crispier than fried ones.", translation: "揚げたものよりカリカリにするため。", isCorrect: false },
                    { id: 4, text: "To reduce the cost of packaging materials.", translation: "包装材のコストを削減するため。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。導入の目的（Sentence 19-20）を確認しましょう。",
                    targetSentenceId: 20,
                    highlightWord: "to lower fat and calories",
                    highlightWordSentenceId: 20
                },
                keywords: ["Why", "baked or vegetable chips"],
                keywordExplanations: {
                    "Why": "理由。目的を問う。",
                    "baked or vegetable chips": "ベイクドまたは野菜チップス。第4段落の内容。"
                },
                keywordMatches: [
                    { sentenceId: 19, text: "concerns about health", keyword: "Why" },
                    { sentenceId: 20, text: "to lower fat and calories", keyword: "Why" }
                ],
                choiceAdvice: "1: 古いジャガイモ? 2: 健康懸念? 3: カリカリに? 4: 包装コスト?",
                logic: [
                    { type: "text", content: "本文(Sentence 19): 「健康への懸念がチップスの製造方法の変化につながっている。」" },
                    { type: "text", content: "本文(Sentence 20): 「脂肪やカロリーを下げるために、ベイクドチップスや野菜チップスを提供している。」" },
                    { type: "text", content: "【決定要因】concerns about health = customers' concerns about health / to lower fat and calories = address health concerns。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢2「顧客の健康への懸念に対処するため」が正解。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            // Q5: Which of the following statements is true?
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の文のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "George Crum intended to invent potato chips from the beginning.", translation: "ジョージ・クラムは最初からポテトチップスを発明しようとしていた。", isCorrect: false },
                    { id: 2, text: "Potato chips were originally sold with the seasoning already added.", translation: "ポテトチップスはもともと味付けされて売られていた。", isCorrect: false },
                    { id: 3, text: "Companies are looking for ways to make chip bags less harmful to the environment.", translation: "企業はチップスの袋を環境に優しくする方法を探している。", isCorrect: true, highlight: "less harmful to the environment" },
                    { id: 4, text: "Laura Scudder's invention made chips go stale faster than before.", translation: "ローラ・スカダーの発明でチップスが以前より早く湿気るようになった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。環境への取り組み（Sentence 21-22）を確認しましょう。",
                    targetSentenceId: 22,
                    highlightWord: "bags that are biodegradable",
                    highlightWordSentenceId: 22
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい。本文と一致するものを探す。",
                    "statements": "文。各選択肢を検証。"
                },
                keywordMatches: [
                    { sentenceId: 21, text: "environmentally friendly packaging", keyword: "true" },
                    { sentenceId: 22, text: "bags that are biodegradable", keyword: "true" }
                ],
                choiceAdvice: "1: 最初から発明? (偶然) 2: 最初から味付き? (味なし) 3: 環境に優しい袋? 4: スカダーで湿気る? (逆)",
                logic: [
                    { type: "text", content: "【検証】選択肢1: 本文(S1)「unintentionally（意図せず）」→×" },
                    { type: "text", content: "【検証】選択肢2: 本文(S13)「without any flavor（味なしで売られていた）」→×" },
                    { type: "text", content: "【検証】選択肢3: 本文(S21-22)「environmentally friendly packaging / biodegradable bags」→○" },
                    { type: "text", content: "【検証】選択肢4: 本文(S11)「kept the chips fresh（新鮮に保った）」→×" },
                    { type: "text", content: "【決定要因】biodegradable（生分解性）= less harmful to the environment（環境に害が少ない）。" },
                    { type: "arrow", content: "↓" },
                    { type: "text", content: "選択肢3「企業はチップスの袋を環境に優しくする方法を探している」が正解。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "History of Potato Chips（ポテトチップスの歴史）",
            intro: "本文は、ポテトチップスの歴史について述べています。偶然の発明から始まり、パッケージの改良による流通革命、味付け技術の進歩を経て、現代の健康・環境志向への適応までを解説しています。",
            points: [
                { label: "1. 発明（第1段落）", text: "1853年、ニューヨークのシェフ、ジョージ・クラムが、分厚いと文句を言う客への「仕返し」として極薄のポテトを揚げたところ、逆に大好評となり、ポテトチップスが誕生しました。" },
                { label: "2. パッケージの進化（第2段落）", text: "当初は樽で売られていたため、底のチップスが砕けたり湿気ったりする問題がありました。1920年代にローラ・スカダーがワックスペーパーの袋を考案し、鮮度保持と輸送を可能にしました。" },
                { label: "3. 味付けの革新（第3段落）", text: "当初は味付けなしで販売。1950年代にアイルランドの会社が直接味付けする技術を開発し、「チーズ＆オニオン」などのフレーバーが登場、世界中で多様なフレーバーが生まれました。" },
                { label: "4. 現代のトレンド（第4段落）", text: "健康志向（ノンフライ・野菜チップス）や環境配慮（生分解性パッケージ）への取り組みが進んでいます。" }
            ]
        }
    },
    // 2級 オリジナル問題3: Wolves and Dogs
    {
        id: "grade-2-original-wolves-dogs",
        grade: "2級",
        title: "Wolves and Dogs",
        subTitle: "問題3",
        genre: "自然科学 / 動物行動学",
        similarProblems: {
            exam: "2024年度 第3回",
            title: "Bonobos"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Wolves+and+Dogs",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Introduction - Common Assumptions
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Dogs are known as \"man's best friend,\" and they share a long history with humans.",
                        translation: "犬は「人間の最良の友」として知られており、人間と長い歴史を共有している。",
                        grammarAnalysis: {
                            mainVerbs: ["are known", "share"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Dogs</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are known</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>as \"man's best friend\"</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>share</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a long history</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with humans)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>犬は</span> <span class='t-V'>知られている</span> <span class='t-C'>「人間の最良の友」として</span>、そして <span class='t-S'>彼らは</span> <span class='t-V'>共有している</span> <span class='t-O'>長い歴史を</span> <span class='t-M'>(人間と)</span>。",
                            naturalTranslation: "犬は「人間の最良の友」として知られており、人間と長い歴史を共有している。",
                            vocabulary: [
                                { word: "are known as", meaning: "「〜として知られている」" },
                                { word: "man's best friend", meaning: "「人間の最良の友」。犬の代名詞的表現。" },
                                { word: "share", meaning: "「共有する」" }
                            ],
                            grammarNotes: [
                                { phrase: "are known as", explanation: "<b>受動態</b>: be known as 〜「〜として知られている」。" },
                                { phrase: "man's best friend", explanation: "<b>所有格</b>: man's = 人間の。犬を指す慣用表現。" },
                                { phrase: "share a long history with", explanation: "<b>動詞句</b>: 「〜と長い歴史を共有する」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "They originally came from wolves, so the two animals share many genes.",
                        translation: "彼らはもともとオオカミから派生したため、その2つの動物は多くの遺伝子を共有している。",
                        grammarAnalysis: {
                            mainVerbs: ["came", "share"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(originally)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>came</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(from wolves)</span><span class='tag'>M</span></span>, so <span class='chunk S-group'><span class='text'>the two animals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>share</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>many genes</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-M'>(もともと)</span> <span class='t-V'>派生した</span> <span class='t-M'>(オオカミから)</span>、だから <span class='t-S'>その2つの動物は</span> <span class='t-V'>共有している</span> <span class='t-O'>多くの遺伝子を</span>。",
                            naturalTranslation: "彼らはもともとオオカミから派生したため、その2つの動物は多くの遺伝子を共有している。",
                            vocabulary: [
                                { word: "originally", meaning: "「もともと」「元来」" },
                                { word: "came from", meaning: "「〜から由来した」「〜から派生した」" },
                                { word: "genes", meaning: "「遺伝子」" }
                            ],
                            grammarNotes: [
                                { phrase: "came from wolves", explanation: "<b>come from</b>: 「〜から来る」「〜に由来する」。" },
                                { phrase: "so", explanation: "<b>等位接続詞</b>: 「だから」。因果関係を示す。" },
                                { phrase: "the two animals", explanation: "<b>限定詞</b>: 前述の犬とオオカミを指す。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Because dogs are friendly and live closely with people, many people assume that dogs are naturally better at cooperation than wolves.",
                        translation: "犬は友好的で人と親密に暮らしているため、多くの人は犬の方がオオカミよりも生まれつき協力が得意だと思い込んでいる。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "live", "assume", "are"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Because [<span class='chunk S2-group'><span class='text'>dogs</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are friendly</span><span class='tag'>V'</span></span> and <span class='chunk V2-group'><span class='text'>live closely</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>with people</span><span class='tag'>M'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>assume</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [dogs are naturally better at cooperation than wolves]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(Because [<span class='t-S2'>犬は</span> <span class='t-V2'>友好的であり</span> <span class='t-V2'>親密に暮らしている</span> <span class='t-M2'>人と</span>]ため)</span>、<span class='t-S'>多くの人は</span> <span class='t-V'>思い込んでいる</span> <span class='t-O'>that [犬は生まれつきオオカミより協力が得意だ]と</span>。",
                            naturalTranslation: "犬は友好的で人と親密に暮らしているため、多くの人は犬の方がオオカミよりも生まれつき協力が得意だと思い込んでいる。",
                            vocabulary: [
                                { word: "friendly", meaning: "「友好的な」" },
                                { word: "assume", meaning: "「思い込む」「仮定する」" },
                                { word: "naturally", meaning: "「生まれつき」「自然に」" },
                                { word: "cooperation", meaning: "「協力」" }
                            ],
                            grammarNotes: [
                                { phrase: "Because dogs are friendly", explanation: "<b>Because節</b>: 理由を表す副詞節。" },
                                { phrase: "assume that", explanation: "<b>動詞 + that節</b>: 「〜だと思い込む」。that以下が目的語。" },
                                { phrase: "better at cooperation than", explanation: "<b>比較級</b>: 「〜より協力が得意だ」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "Wolves are often seen as wild and aggressive animals that fight with each other.",
                        translation: "オオカミはしばしば、互いに争う野生的で攻撃的な動物だと見なされている。",
                        grammarAnalysis: {
                            mainVerbs: ["are seen", "fight"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Wolves</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are often seen</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>as wild and aggressive animals (that [<span class='chunk V2-group'><span class='text'>fight</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>with each other</span><span class='tag'>M'</span></span>])</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>オオカミは</span> <span class='t-V'>しばしば見なされている</span> <span class='t-C'>野生的で攻撃的な動物として（that [<span class='t-V2'>争う</span> <span class='t-M2'>互いに</span>]）</span>。",
                            naturalTranslation: "オオカミはしばしば、互いに争う野生的で攻撃的な動物だと見なされている。",
                            vocabulary: [
                                { word: "are seen as", meaning: "「〜として見なされている」" },
                                { word: "wild", meaning: "「野生の」「野蛮な」" },
                                { word: "aggressive", meaning: "「攻撃的な」" },
                                { word: "fight with each other", meaning: "「互いに争う」" }
                            ],
                            grammarNotes: [
                                { phrase: "are often seen as", explanation: "<b>受動態</b>: be seen as 〜「〜として見なされる」。" },
                                { phrase: "that fight with each other", explanation: "<b>関係代名詞that</b>: animalsを修飾。「互いに争う」。" },
                                { phrase: "each other", meaning: "<b>相互代名詞</b>: 「互いに」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "However, recent research suggests that when it comes to working with their own kind, wolves may actually be more cooperative than dogs.",
                        translation: "しかし、最近の研究は、同種同士で協力することに関しては、オオカミの方が実際には犬よりも協力的かもしれないことを示唆している。",
                        grammarAnalysis: {
                            mainVerbs: ["suggests", "may be"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>recent research</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suggests</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [(when it comes to working with their own kind), <span class='chunk S2-group'><span class='text'>wolves</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>may actually be more cooperative</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>than dogs</span><span class='tag'>M'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>最近の研究は</span> <span class='t-V'>示唆している</span> <span class='t-O'>that [(同種と協力することに関しては)、<span class='t-S2'>オオカミの方が</span> <span class='t-V2'>実際にはより協力的かもしれない</span> <span class='t-M2'>犬よりも</span>]</span>。",
                            naturalTranslation: "しかし、最近の研究は、同種同士で協力することに関しては、オオカミの方が実際には犬よりも協力的かもしれないことを示唆している。",
                            vocabulary: [
                                { word: "recent research", meaning: "「最近の研究」" },
                                { word: "suggests", meaning: "「示唆する」" },
                                { word: "when it comes to", meaning: "「〜に関しては」「〜となると」" },
                                { word: "their own kind", meaning: "「自分と同種の仲間」" },
                                { word: "cooperative", meaning: "「協力的な」" }
                            ],
                            grammarNotes: [
                                { phrase: "However", explanation: "<b>接続副詞</b>: 「しかし」。前文との対比を示す。" },
                                { phrase: "when it comes to + -ing", explanation: "<b>慣用表現</b>: 「〜に関しては」。" },
                                { phrase: "may actually be more cooperative", explanation: "<b>助動詞may + 比較級</b>: 「実際にはより協力的かもしれない」。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: The Rope Test
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "In one study conducted at a research center in Austria, scientists tested how well wolves and dogs could work together.",
                        translation: "オーストリアの研究センターで行われたある研究で、科学者たちはオオカミと犬がどれだけうまく協力できるかをテストした。",
                        grammarAnalysis: {
                            mainVerbs: ["tested", "could work"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In one study conducted at a research center in Austria)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>tested</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how well [wolves and dogs could work together]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(オーストリアの研究センターで行われたある研究で)</span>、<span class='t-S'>科学者たちは</span> <span class='t-V'>テストした</span> <span class='t-O'>how well [オオカミと犬がどれだけ協力できるか]を</span>。",
                            naturalTranslation: "オーストリアの研究センターで行われたある研究で、科学者たちはオオカミと犬がどれだけうまく協力できるかをテストした。",
                            vocabulary: [
                                { word: "conducted", meaning: "「行われた」「実施された」" },
                                { word: "research center", meaning: "「研究センター」" },
                                { word: "work together", meaning: "「一緒に働く」「協力する」" }
                            ],
                            grammarNotes: [
                                { phrase: "conducted at", explanation: "<b>過去分詞の形容詞的用法</b>: 「〜で行われた」。studyを修飾。" },
                                { phrase: "how well", explanation: "<b>疑問副詞 + 副詞</b>: 「どれだけうまく」。間接疑問文。" },
                                { phrase: "could work together", explanation: "<b>助動詞could</b>: 「協力できるか」。能力を問う。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "They used a simple task involving a tray of food.",
                        translation: "彼らは食べ物の載ったトレイを含む単純な課題を使用した。",
                        grammarAnalysis: {
                            mainVerbs: ["used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a simple task (involving a tray of food)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>使用した</span> <span class='t-O'>単純な課題を（食べ物のトレイを含む）</span>。",
                            naturalTranslation: "彼らは食べ物の載ったトレイを含む単純な課題を使用した。",
                            vocabulary: [
                                { word: "task", meaning: "「課題」「タスク」" },
                                { word: "involving", meaning: "「〜を含む」" },
                                { word: "tray", meaning: "「トレイ」「盆」" }
                            ],
                            grammarNotes: [
                                { phrase: "involving a tray", explanation: "<b>現在分詞の形容詞的用法</b>: 「〜を含む」。taskを修飾。" },
                                { phrase: "a tray of food", explanation: "<b>数量表現</b>: 「一盆の食べ物」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "To get the food, two animals had to pull two ends of a rope at the same time.",
                        translation: "食べ物を得るためには、2頭の動物がロープの両端を同時に引かなければならなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["had to pull"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To get the food)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>two animals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had to pull</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>two ends of a rope</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at the same time)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(食べ物を得るために)</span>、<span class='t-S'>2頭の動物が</span> <span class='t-V'>引かなければならなかった</span> <span class='t-O'>ロープの両端を</span> <span class='t-M'>(同時に)</span>。",
                            naturalTranslation: "食べ物を得るためには、2頭の動物がロープの両端を同時に引かなければならなかった。",
                            vocabulary: [
                                { word: "To get", meaning: "「得るために」" },
                                { word: "had to pull", meaning: "「引かなければならなかった」" },
                                { word: "at the same time", meaning: "「同時に」" }
                            ],
                            grammarNotes: [
                                { phrase: "To get the food", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「食べ物を得るために」。" },
                                { phrase: "had to pull", explanation: "<b>have to の過去形</b>: 「〜しなければならなかった」。" },
                                { phrase: "two ends of a rope", explanation: "<b>数量表現</b>: 「ロープの両端」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "If only one pulled, the rope would come loose, and the food would stay out of reach.",
                        translation: "もし1頭だけが引くと、ロープは外れてしまい、食べ物は手の届かないままになってしまう。",
                        grammarAnalysis: {
                            mainVerbs: ["pulled", "would come", "would stay"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(If [only one <span class='chunk V2-group'><span class='text'>pulled</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the rope</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>would come loose</span><span class='tag'>V</span></span>, and <span class='chunk S-group'><span class='text'>the food</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>would stay</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>out of reach</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(If [1頭だけが <span class='t-V2'>引くと</span>])</span>、<span class='t-S'>ロープは</span> <span class='t-V'>外れてしまう</span>、そして <span class='t-S'>食べ物は</span> <span class='t-V'>〜のままになる</span> <span class='t-C'>手の届かない</span>。",
                            naturalTranslation: "もし1頭だけが引くと、ロープは外れてしまい、食べ物は手の届かないままになってしまう。",
                            vocabulary: [
                                { word: "come loose", meaning: "「外れる」「緩む」" },
                                { word: "out of reach", meaning: "「手の届かないところに」" }
                            ],
                            grammarNotes: [
                                { phrase: "If only one pulled", explanation: "<b>仮定法過去</b>: 「もし1頭だけが引いたら」。条件節。" },
                                { phrase: "would come loose", explanation: "<b>仮定法の帰結節</b>: 「外れてしまうだろう」。" },
                                { phrase: "out of reach", explanation: "<b>前置詞句</b>: 「手の届かないところに」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "The results showed that wolves were very successful at this task.",
                        translation: "結果は、オオカミがこの課題において非常に成功したことを示した。",
                        grammarAnalysis: {
                            mainVerbs: ["showed", "were"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The results</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>showed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>wolves</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>were very successful</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>at this task</span><span class='tag'>M'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>結果は</span> <span class='t-V'>示した</span> <span class='t-O'>that [<span class='t-S2'>オオカミが</span> <span class='t-V2'>非常に成功した</span> <span class='t-M2'>この課題において</span>]</span>。",
                            naturalTranslation: "結果は、オオカミがこの課題において非常に成功したことを示した。",
                            vocabulary: [
                                { word: "results", meaning: "「結果」" },
                                { word: "showed that", meaning: "「〜ということを示した」" },
                                { word: "successful at", meaning: "「〜で成功した」" }
                            ],
                            grammarNotes: [
                                { phrase: "showed that", explanation: "<b>動詞 + that節</b>: 「〜ということを示した」。" },
                                { phrase: "successful at this task", explanation: "<b>形容詞 + at</b>: 「〜において成功した」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "They waited for a partner and pulled the rope together.",
                        translation: "彼らはパートナーを待ち、一緒にロープを引いた。",
                        grammarAnalysis: {
                            mainVerbs: ["waited", "pulled"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>waited</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for a partner)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>pulled</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the rope</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(together)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>待ち</span> <span class='t-M'>(パートナーを)</span> そして <span class='t-V'>引いた</span> <span class='t-O'>ロープを</span> <span class='t-M'>(一緒に)</span>。",
                            naturalTranslation: "彼らはパートナーを待ち、一緒にロープを引いた。",
                            vocabulary: [
                                { word: "waited for", meaning: "「〜を待った」" },
                                { word: "partner", meaning: "「パートナー」「相棒」" },
                                { word: "together", meaning: "「一緒に」" }
                            ],
                            grammarNotes: [
                                { phrase: "waited for a partner", explanation: "<b>wait for</b>: 「〜を待つ」。" },
                                { phrase: "and pulled", explanation: "<b>等位接続詞and</b>: 2つの動作を連結。" },
                                { phrase: "together", explanation: "<b>副詞</b>: 「一緒に」。協力を示す重要語。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "Dogs, on the other hand, often failed because they tried to get the food alone or did not wait for the other dog.",
                        translation: "一方、犬は自分だけで食べ物を得ようとしたり、他の犬を待たなかったりしたため、しばしば失敗した。",
                        grammarAnalysis: {
                            mainVerbs: ["failed", "tried", "did not wait"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Dogs</span><span class='tag'>S</span></span>, <span class='chunk M-group'><span class='text'>(on the other hand)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>often failed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(because [<span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>tried to get</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the food</span><span class='tag'>O'</span></span> <span class='chunk M2-group'><span class='text'>alone</span><span class='tag'>M'</span></span>] or [<span class='chunk V2-group'><span class='text'>did not wait</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>for the other dog</span><span class='tag'>M'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>犬は</span>、<span class='t-M'>(一方で)</span>、<span class='t-V'>しばしば失敗した</span> <span class='t-M'>(because [<span class='t-S2'>彼らが</span> <span class='t-V2'>得ようとした</span> <span class='t-O2'>食べ物を</span> <span class='t-M2'>1頭で</span>] または [<span class='t-V2'>待たなかった</span> <span class='t-M2'>他の犬を</span>]ため)</span>。",
                            naturalTranslation: "一方、犬は自分だけで食べ物を得ようとしたり、他の犬を待たなかったりしたため、しばしば失敗した。",
                            vocabulary: [
                                { word: "on the other hand", meaning: "「一方で」「他方では」" },
                                { word: "failed", meaning: "「失敗した」" },
                                { word: "alone", meaning: "「1人で」「1頭で」" }
                            ],
                            grammarNotes: [
                                { phrase: "on the other hand", explanation: "<b>接続副詞</b>: 「一方で」。対比を示す。" },
                                { phrase: "tried to get the food alone", explanation: "<b>try to do</b>: 「〜しようとする」。" },
                                { phrase: "did not wait for", explanation: "<b>否定形</b>: 「〜を待たなかった」。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Food Sharing
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "Another difference was found in how they shared food.",
                        translation: "別の違いは、彼らがどのように食べ物を分け合うかという点で見つかった。",
                        grammarAnalysis: {
                            mainVerbs: ["was found", "shared"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Another difference</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was found</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in [how <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>shared</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>food</span><span class='tag'>O'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>別の違いは</span> <span class='t-V'>見つかった</span> <span class='t-M'>(in [how <span class='t-S2'>彼らが</span> <span class='t-V2'>分け合ったか</span> <span class='t-O2'>食べ物を</span>]において)</span>。",
                            naturalTranslation: "別の違いは、彼らがどのように食べ物を分け合うかという点で見つかった。",
                            vocabulary: [
                                { word: "Another difference", meaning: "「別の違い」" },
                                { word: "was found", meaning: "「見つかった」" },
                                { word: "shared", meaning: "「分け合った」" }
                            ],
                            grammarNotes: [
                                { phrase: "was found in", explanation: "<b>受動態</b>: 「〜において見つかった」。" },
                                { phrase: "how they shared food", explanation: "<b>疑問詞how</b>: 「どのように〜したか」。間接疑問文。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "In the wild, wolves hunt large animals like deer or moose as a team.",
                        translation: "野生では、オオカミはチームとしてシカやヘラジカのような大きな動物を狩る。",
                        grammarAnalysis: {
                            mainVerbs: ["hunt"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the wild)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>wolves</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>hunt</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>large animals (like deer or moose)</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(as a team)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(野生では)</span>、<span class='t-S'>オオカミは</span> <span class='t-V'>狩る</span> <span class='t-O'>大きな動物を（シカやヘラジカのような）</span> <span class='t-M'>(チームとして)</span>。",
                            naturalTranslation: "野生では、オオカミはチームとしてシカやヘラジカのような大きな動物を狩る。",
                            vocabulary: [
                                { word: "In the wild", meaning: "「野生では」" },
                                { word: "hunt", meaning: "「狩る」" },
                                { word: "moose", meaning: "「ヘラジカ」" },
                                { word: "as a team", meaning: "「チームとして」" }
                            ],
                            grammarNotes: [
                                { phrase: "In the wild", explanation: "<b>前置詞句</b>: 「野生において」。場所・状況を示す。" },
                                { phrase: "like deer or moose", explanation: "<b>例示のlike</b>: 「〜のような」。" },
                                { phrase: "as a team", explanation: "<b>前置詞as</b>: 「〜として」。役割・様態を示す。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "After a successful hunt, they share the meat with the pack.",
                        translation: "狩りが成功した後、彼らは肉を群れで分け合う。",
                        grammarAnalysis: {
                            mainVerbs: ["share"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After a successful hunt)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>share</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the meat</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with the pack)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(成功した狩りの後)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>分け合う</span> <span class='t-O'>肉を</span> <span class='t-M'>(群れと)</span>。",
                            naturalTranslation: "狩りが成功した後、彼らは肉を群れで分け合う。",
                            vocabulary: [
                                { word: "successful hunt", meaning: "「成功した狩り」" },
                                { word: "share ... with", meaning: "「〜と…を分け合う」" },
                                { word: "pack", meaning: "「群れ」（オオカミの群れ）" }
                            ],
                            grammarNotes: [
                                { phrase: "After a successful hunt", explanation: "<b>前置詞句</b>: 「成功した狩りの後で」。時を表す。" },
                                { phrase: "share ... with the pack", explanation: "<b>share O with 〜</b>: 「〜とOを分け合う」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "Even the lower-ranking wolves are allowed to eat.",
                        translation: "地位の低いオオカミでさえ食べることが許される。",
                        grammarAnalysis: {
                            mainVerbs: ["are allowed"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Even)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>the lower-ranking wolves</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are allowed</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to eat</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(〜でさえ)</span> <span class='t-S'>地位の低いオオカミは</span> <span class='t-V'>許される</span> <span class='t-C'>食べることを</span>。",
                            naturalTranslation: "地位の低いオオカミでさえ食べることが許される。",
                            vocabulary: [
                                { word: "Even", meaning: "「〜でさえ」" },
                                { word: "lower-ranking", meaning: "「地位の低い」" },
                                { word: "are allowed to", meaning: "「〜することを許される」" }
                            ],
                            grammarNotes: [
                                { phrase: "Even", explanation: "<b>副詞</b>: 「〜でさえ」。強調。" },
                                { phrase: "lower-ranking", explanation: "<b>複合形容詞</b>: 「より低い順位の」。" },
                                { phrase: "are allowed to eat", explanation: "<b>be allowed to do</b>: 「〜することを許される」。受動態不定詞。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "In contrast, dogs have a stricter social hierarchy.",
                        translation: "対照的に、犬はより厳格な社会的階層を持っている。",
                        grammarAnalysis: {
                            mainVerbs: ["have"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In contrast)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>dogs</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a stricter social hierarchy</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(対照的に)</span>、<span class='t-S'>犬は</span> <span class='t-V'>持っている</span> <span class='t-O'>より厳格な社会的階層を</span>。",
                            naturalTranslation: "対照的に、犬はより厳格な社会的階層を持っている。",
                            vocabulary: [
                                { word: "In contrast", meaning: "「対照的に」" },
                                { word: "stricter", meaning: "「より厳格な」（比較級）" },
                                { word: "social hierarchy", meaning: "「社会的階層」" }
                            ],
                            grammarNotes: [
                                { phrase: "In contrast", explanation: "<b>接続副詞</b>: 「対照的に」。対比を示す。" },
                                { phrase: "stricter", explanation: "<b>比較級</b>: strict → stricter。" },
                                { phrase: "social hierarchy", explanation: "<b>名詞句</b>: 「社会的な階層・序列」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "In experiments where dogs were given food, the dominant dog usually ate everything and did not let the others come close.",
                        translation: "犬に食べ物が与えられた実験では、支配的な犬が通常すべてを食べてしまい、他の犬を近づけさせなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["were given", "ate", "did not let"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In experiments [where <span class='chunk S2-group'><span class='text'>dogs</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>were given</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>food</span><span class='tag'>O'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the dominant dog</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>usually ate</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>everything</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>did not let</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the others</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>come close</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(実験で [where <span class='t-S2'>犬が</span> <span class='t-V2'>与えられた</span> <span class='t-O2'>食べ物を</span>])</span>、<span class='t-S'>支配的な犬が</span> <span class='t-V'>通常食べた</span> <span class='t-O'>すべてを</span> そして <span class='t-V'>させなかった</span> <span class='t-O'>他の犬が</span> <span class='t-C'>近づくことを</span>。",
                            naturalTranslation: "犬に食べ物が与えられた実験では、支配的な犬が通常すべてを食べてしまい、他の犬を近づけさせなかった。",
                            vocabulary: [
                                { word: "experiments", meaning: "「実験」" },
                                { word: "dominant", meaning: "「支配的な」「優位な」" },
                                { word: "did not let ... come close", meaning: "「〜を近づけさせなかった」" }
                            ],
                            grammarNotes: [
                                { phrase: "where dogs were given food", explanation: "<b>関係副詞where</b>: experimentsを修飾。「犬に食べ物が与えられた実験」。" },
                                { phrase: "did not let the others come close", explanation: "<b>let O 原形不定詞</b>: 「Oに〜させる」の否定形。" },
                                { phrase: "come close", explanation: "<b>原形不定詞</b>: 「近づく」。letの後は原形。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "This suggests that wolves care more about fairness within their group.",
                        translation: "これは、オオカミの方が集団内の公平性をより気にかけていることを示唆している。",
                        grammarAnalysis: {
                            mainVerbs: ["suggests", "care"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suggests</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>wolves</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>care more</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>about fairness within their group</span><span class='tag'>M'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>示唆している</span> <span class='t-O'>that [<span class='t-S2'>オオカミが</span> <span class='t-V2'>より気にかけている</span> <span class='t-M2'>集団内の公平性を</span>]</span>。",
                            naturalTranslation: "これは、オオカミの方が集団内の公平性をより気にかけていることを示唆している。",
                            vocabulary: [
                                { word: "suggests that", meaning: "「〜ということを示唆する」" },
                                { word: "care about", meaning: "「〜を気にかける」" },
                                { word: "fairness", meaning: "「公平性」" }
                            ],
                            grammarNotes: [
                                { phrase: "This suggests that", explanation: "<b>動詞 + that節</b>: 「これは〜ということを示唆する」。" },
                                { phrase: "care more about", explanation: "<b>care about の比較級</b>: 「より〜を気にかける」。" },
                                { phrase: "within their group", explanation: "<b>前置詞within</b>: 「〜の中で」。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: The Reason - Evolution
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 20,
                        text: "The reason for these differences lies in how they evolved.",
                        translation: "これらの違いの理由は、彼らがどのように進化したかにある。",
                        grammarAnalysis: {
                            mainVerbs: ["lies", "evolved"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The reason (for these differences)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>lies</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in [how <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>evolved</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>理由は（これらの違いの）</span> <span class='t-V'>ある</span> <span class='t-M'>(in [how <span class='t-S2'>彼らが</span> <span class='t-V2'>進化したか</span>]に)</span>。",
                            naturalTranslation: "これらの違いの理由は、彼らがどのように進化したかにある。",
                            vocabulary: [
                                { word: "The reason for", meaning: "「〜の理由」" },
                                { word: "lies in", meaning: "「〜にある」" },
                                { word: "evolved", meaning: "「進化した」" }
                            ],
                            grammarNotes: [
                                { phrase: "lies in", explanation: "<b>動詞lie + 前置詞in</b>: 「〜にある」。存在を示す。" },
                                { phrase: "how they evolved", explanation: "<b>疑問詞how</b>: 「どのように進化したか」。間接疑問文。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "When humans started living with dogs, humans became the leaders.",
                        translation: "人間が犬と暮らし始めたとき、人間がリーダーになった。",
                        grammarAnalysis: {
                            mainVerbs: ["started", "became"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When [<span class='chunk S2-group'><span class='text'>humans</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>started living</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>with dogs</span><span class='tag'>M'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>humans</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the leaders</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(When [<span class='t-S2'>人間が</span> <span class='t-V2'>暮らし始めた</span> <span class='t-M2'>犬と</span>])</span>、<span class='t-S'>人間が</span> <span class='t-V'>なった</span> <span class='t-C'>リーダーに</span>。",
                            naturalTranslation: "人間が犬と暮らし始めたとき、人間がリーダーになった。",
                            vocabulary: [
                                { word: "started living with", meaning: "「〜と暮らし始めた」" },
                                { word: "became", meaning: "「〜になった」" },
                                { word: "leaders", meaning: "「リーダー」" }
                            ],
                            grammarNotes: [
                                { phrase: "When humans started", explanation: "<b>時を表す副詞節</b>: 「人間が〜し始めたとき」。" },
                                { phrase: "started living", explanation: "<b>start + -ing</b>: 「〜し始める」。動名詞を目的語に。" },
                                { phrase: "became the leaders", explanation: "<b>become + C</b>: 「〜になる」。第2文型。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs.",
                        translation: "犬は食べ物や指示を人間に頼ることを学んだため、他の犬と問題を解決する必要性を失った。",
                        grammarAnalysis: {
                            mainVerbs: ["learned", "lost"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Dogs</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>learned</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to depend on humans (for food and instructions)</span><span class='tag'>C</span></span>, so <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>lost</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the need (to solve problems with other dogs)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>犬は</span> <span class='t-V'>学んだ</span> <span class='t-C'>人間に頼ることを（食べ物や指示を）</span>、だから <span class='t-S'>彼らは</span> <span class='t-V'>失った</span> <span class='t-O'>必要性を（他の犬と問題を解決する）</span>。",
                            naturalTranslation: "犬は食べ物や指示を人間に頼ることを学んだため、他の犬と問題を解決する必要性を失った。",
                            vocabulary: [
                                { word: "depend on", meaning: "「〜に頼る」" },
                                { word: "instructions", meaning: "「指示」" },
                                { word: "lost the need to", meaning: "「〜する必要性を失った」" }
                            ],
                            grammarNotes: [
                                { phrase: "learned to depend on", explanation: "<b>learn to do</b>: 「〜することを学ぶ」。" },
                                { phrase: "depend on humans for", explanation: "<b>depend on A for B</b>: 「BをAに頼る」。" },
                                { phrase: "the need to solve", explanation: "<b>名詞 + 不定詞</b>: 「〜する必要性」。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "Wolves, however, continued to live in the wild.",
                        translation: "しかし、オオカミは野生で生き続けた。",
                        grammarAnalysis: {
                            mainVerbs: ["continued"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Wolves</span><span class='tag'>S</span></span>, <span class='chunk M-group'><span class='text'>(however)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>continued</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to live (in the wild)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>オオカミは</span>、<span class='t-M'>(しかし)</span>、<span class='t-V'>続けた</span> <span class='t-C'>生きることを（野生で）</span>。",
                            naturalTranslation: "しかし、オオカミは野生で生き続けた。",
                            vocabulary: [
                                { word: "however", meaning: "「しかしながら」" },
                                { word: "continued to", meaning: "「〜し続けた」" },
                                { word: "in the wild", meaning: "「野生で」" }
                            ],
                            grammarNotes: [
                                { phrase: "however", explanation: "<b>接続副詞</b>: 「しかしながら」。対比を示す。" },
                                { phrase: "continued to live", explanation: "<b>continue to do</b>: 「〜し続ける」。" },
                                { phrase: "in the wild", explanation: "<b>前置詞句</b>: 「野生において」。" }
                            ]
                        }
                    },
                    {
                        id: 24,
                        text: "They had to rely on each other to survive and raise their young.",
                        translation: "彼らは生き残り、子を育てるために互いに頼り合わなければならなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["had to rely"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had to rely</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on each other)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to survive and raise their young)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>頼らなければならなかった</span> <span class='t-M'>(互いに)</span> <span class='t-M'>(生き残り、子を育てるために)</span>。",
                            naturalTranslation: "彼らは生き残り、子を育てるために互いに頼り合わなければならなかった。",
                            vocabulary: [
                                { word: "had to rely on", meaning: "「〜に頼らなければならなかった」" },
                                { word: "each other", meaning: "「互いに」" },
                                { word: "raise their young", meaning: "「子を育てる」" }
                            ],
                            grammarNotes: [
                                { phrase: "had to rely on each other", explanation: "<b>have to の過去形</b>: 「〜しなければならなかった」。" },
                                { phrase: "to survive and raise", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「生き残り、育てるために」。" },
                                { phrase: "their young", explanation: "<b>形容詞の名詞化</b>: 「彼らの子ども」。" }
                            ]
                        }
                    },
                    {
                        id: 25,
                        text: "This forced them to maintain a high level of cooperation and teamwork that dogs no longer need.",
                        translation: "これは彼らに、犬がもはや必要としない高いレベルの協力とチームワークを維持することを強いた。",
                        grammarAnalysis: {
                            mainVerbs: ["forced", "need"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>forced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to maintain a high level of cooperation and teamwork (that [<span class='chunk S2-group'><span class='text'>dogs</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>no longer need</span><span class='tag'>V'</span></span>])</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>強いた</span> <span class='t-O'>彼らに</span> <span class='t-C'>維持することを：高いレベルの協力とチームワークを（that [<span class='t-S2'>犬が</span> <span class='t-V2'>もはや必要としない</span>]）</span>。",
                            naturalTranslation: "これは彼らに、犬がもはや必要としない高いレベルの協力とチームワークを維持することを強いた。",
                            vocabulary: [
                                { word: "forced ... to", meaning: "「〜に…することを強いた」" },
                                { word: "maintain", meaning: "「維持する」" },
                                { word: "no longer", meaning: "「もはや〜ない」" }
                            ],
                            grammarNotes: [
                                { phrase: "forced them to maintain", explanation: "<b>force O to do</b>: 「Oに〜することを強いる」。" },
                                { phrase: "a high level of", explanation: "<b>数量表現</b>: 「高いレベルの〜」。" },
                                { phrase: "that dogs no longer need", explanation: "<b>関係代名詞that</b>: cooperation and teamworkを修飾。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Common Assumptions
            {
                id: 1,
                text: "What do many people often assume about dogs and wolves?",
                textTranslation: "多くの人は犬とオオカミについて何を思い込んでいることが多いですか？",
                choices: [
                    { id: 1, text: "Dogs are less intelligent than wolves because they live with humans.", translation: "犬は人間と暮らしているため、オオカミより知能が低い。", isCorrect: false },
                    { id: 2, text: "Wolves are more friendly to humans than dogs are.", translation: "オオカミは犬よりも人間に対して友好的である。", isCorrect: false },
                    { id: 3, text: "Dogs are better at working together than wolves are.", translation: "犬はオオカミよりも協力が得意である。", isCorrect: true, highlight: "better at working together" },
                    { id: 4, text: "Wolves and dogs have completely different genes.", translation: "オオカミと犬は完全に異なる遺伝子を持っている。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落に「多くの人が思い込んでいること」が述べられています。assumeという動詞に注目。",
                    targetSentenceId: 3,
                    highlightWord: "assume",
                    highlightWordSentenceId: 3
                },
                keywords: ["assume", "dogs", "wolves"],
                keywordExplanations: {
                    "assume": "「思い込む」という動詞。設問のキーワード。本文で何を思い込んでいるか探す。",
                    "dogs": "犬について人々が思っていること。",
                    "wolves": "オオカミとの比較。"
                },
                keywordMatches: [
                    { sentenceId: 3, text: "many people assume that dogs are naturally better at cooperation than wolves", keyword: "assume" }
                ],
                choiceAdvice: "選択肢は「一般的な思い込み」について問うています。本文で assume（思い込む）の後に何が書かれているかを確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"many people assume that dogs are naturally better at cooperation than wolves\"" },
                    { type: "arrow", content: "「多くの人は犬がオオカミより協力が得意だと思い込んでいる」" },
                    { type: "text", content: "選択肢3: \"Dogs are better at working together than wolves are.\"" },
                    { type: "conclusion", content: "cooperation = working together → 正解: 3" }
                ]
            },
            // Q2: 第2段落 - The Rope Test
            {
                id: 2,
                text: "In the rope-pulling experiment, why were wolves successful?",
                textTranslation: "ロープ引き実験で、なぜオオカミは成功しましたか？",
                choices: [
                    { id: 1, text: "They were stronger than the dogs and could pull the heavy tray alone.", translation: "彼らは犬より強く、重いトレイを1頭で引くことができた。", isCorrect: false },
                    { id: 2, text: "They coordinated their actions and pulled the rope at the same time.", translation: "彼らは行動を調整し、同時にロープを引いた。", isCorrect: true, highlight: "coordinated their actions" },
                    { id: 3, text: "They were given more food than the dogs as a reward.", translation: "彼らは報酬として犬より多くの餌を与えられた。", isCorrect: false },
                    { id: 4, text: "They used their paws to hold the rope instead of their mouths.", translation: "彼らは口ではなく足でロープを持った。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落でオオカミが成功した理由が述べられています。「待つ」「一緒に」というキーワードに注目。",
                    targetSentenceId: 11,
                    highlightWord: "waited for a partner and pulled the rope together",
                    highlightWordSentenceId: 11
                },
                keywords: ["wolves", "successful", "rope"],
                keywordExplanations: {
                    "wolves": "オオカミの成功理由を探す。",
                    "successful": "「成功した」という結果。その理由を本文で探す。",
                    "rope": "ロープ引き実験の詳細。"
                },
                keywordMatches: [
                    { sentenceId: 11, text: "They waited for a partner and pulled the rope together", keyword: "successful" }
                ],
                choiceAdvice: "選択肢はオオカミの成功理由について問うています。第2段落でオオカミの具体的な行動を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"They waited for a partner and pulled the rope together.\"" },
                    { type: "arrow", content: "「パートナーを待ち、一緒にロープを引いた」= 「行動を調整し、同時に引いた」" },
                    { type: "text", content: "選択肢2: \"They coordinated their actions and pulled the rope at the same time.\"" },
                    { type: "conclusion", content: "waited + together = coordinated + at the same time → 正解: 2" }
                ]
            },
            // Q3: 第3段落 - Food Sharing
            {
                id: 3,
                text: "How did the eating behavior of dogs differ from that of wolves?",
                textTranslation: "犬の食事行動はオオカミとどのように異なりましたか？",
                choices: [
                    { id: 1, text: "Dogs preferred to eat vegetables instead of meat.", translation: "犬は肉よりも野菜を好んで食べた。", isCorrect: false },
                    { id: 2, text: "Stronger dogs prevented other dogs from eating the food.", translation: "強い犬は他の犬が食べ物を食べるのを妨げた。", isCorrect: true, highlight: "Stronger dogs prevented other dogs" },
                    { id: 3, text: "Dogs shared their food equally with every member of the group.", translation: "犬は食べ物をグループの全員と平等に分け合った。", isCorrect: false },
                    { id: 4, text: "Dogs hid their food in the ground to eat it later.", translation: "犬は後で食べるために食べ物を地面に隠した。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で犬の食事行動が述べられています。dominant dog（支配的な犬）がどうしたかに注目。",
                    targetSentenceId: 18,
                    highlightWord: "the dominant dog usually ate everything and did not let the others come close",
                    highlightWordSentenceId: 18
                },
                keywords: ["eating behavior", "dogs", "differ"],
                keywordExplanations: {
                    "eating behavior": "食事行動の違い。",
                    "dogs": "犬の行動に焦点を当てる。",
                    "differ": "オオカミとの違い。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "the dominant dog usually ate everything and did not let the others come close", keyword: "eating behavior" }
                ],
                choiceAdvice: "選択肢は犬の食事行動について問うています。第3段落でdominant dog（支配的な犬）の行動を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"the dominant dog usually ate everything and did not let the others come close.\"" },
                    { type: "arrow", content: "「支配的な犬がすべてを食べ、他の犬を近づけさせなかった」= 「強い犬が他の犬の食事を妨げた」" },
                    { type: "text", content: "選択肢2: \"Stronger dogs prevented other dogs from eating the food.\"" },
                    { type: "conclusion", content: "dominant = Stronger, did not let = prevented → 正解: 2" }
                ]
            },
            // Q4: 第4段落 - Evolution
            {
                id: 4,
                text: "According to the passage, why did dogs lose some of their cooperative skills?",
                textTranslation: "本文によると、なぜ犬は協力スキルの一部を失いましたか？",
                choices: [
                    { id: 1, text: "They began to rely on humans to lead them and provide food.", translation: "彼らは人間にリーダーシップと食べ物を頼るようになった。", isCorrect: true, highlight: "rely on humans" },
                    { id: 2, text: "They started to live in smaller groups than wolves.", translation: "彼らはオオカミより小さなグループで暮らし始めた。", isCorrect: false },
                    { id: 3, text: "They became too aggressive to work with other animals.", translation: "彼らは攻撃的になりすぎて他の動物と協力できなくなった。", isCorrect: false },
                    { id: 4, text: "They needed to compete with wolves for territory.", translation: "彼らはオオカミと縄張りを競う必要があった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で犬が協力スキルを失った理由が述べられています。depend on（〜に頼る）に注目。",
                    targetSentenceId: 22,
                    highlightWord: "depend on humans for food and instructions",
                    highlightWordSentenceId: 22
                },
                keywords: ["lose", "cooperative skills", "dogs"],
                keywordExplanations: {
                    "lose": "「失う」。なぜ失ったかを探す。",
                    "cooperative skills": "協力スキル。",
                    "dogs": "犬が失った理由。"
                },
                keywordMatches: [
                    { sentenceId: 22, text: "Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs", keyword: "lose" }
                ],
                choiceAdvice: "選択肢は犬が協力スキルを失った理由について問うています。第4段落でdepend on（頼る）の内容を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs.\"" },
                    { type: "arrow", content: "「人間に食べ物と指示を頼るようになった」= 「人間にリードされ食べ物を与えられた」" },
                    { type: "text", content: "選択肢1: \"They began to rely on humans to lead them and provide food.\"" },
                    { type: "conclusion", content: "depend on = rely on, instructions = lead → 正解: 1" }
                ]
            },
            // Q5: 全体 - True Statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次のうち正しい記述はどれですか？",
                choices: [
                    { id: 1, text: "The research in Austria showed that dogs are better problem solvers than wolves.", translation: "オーストリアの研究は、犬がオオカミより問題解決が得意だと示した。", isCorrect: false },
                    { id: 2, text: "Wolves have a strict hierarchy where only the leader is allowed to eat.", translation: "オオカミはリーダーだけが食べることを許される厳格な階層を持つ。", isCorrect: false },
                    { id: 3, text: "Domestication made dogs more independent and less reliant on others.", translation: "家畜化により犬はより独立し、他者への依存が減った。", isCorrect: false },
                    { id: 4, text: "Wolves maintained their teamwork skills because they needed them to survive in the wild.", translation: "オオカミは野生で生き残るためにチームワークスキルを維持した。", isCorrect: true, highlight: "maintained their teamwork skills" }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落の結論部分で、オオカミがチームワークを維持した理由が述べられています。",
                    targetSentenceId: 25,
                    highlightWord: "forced them to maintain a high level of cooperation and teamwork",
                    highlightWordSentenceId: 25
                },
                keywords: ["true statement", "wolves", "teamwork"],
                keywordExplanations: {
                    "true statement": "正しい記述を探す。",
                    "wolves": "オオカミについての正しい情報。",
                    "teamwork": "チームワークの維持理由。"
                },
                keywordMatches: [
                    { sentenceId: 25, text: "This forced them to maintain a high level of cooperation and teamwork that dogs no longer need", keyword: "teamwork" }
                ],
                choiceAdvice: "各選択肢が本文と一致するかを確認します。特にオオカミのチームワークについての記述に注目。",
                logic: [
                    { type: "text", content: "本文: \"They had to rely on each other to survive and raise their young. This forced them to maintain a high level of cooperation and teamwork.\"" },
                    { type: "arrow", content: "「生き残るために互いに頼り合い → 高いレベルの協力とチームワークを維持」" },
                    { type: "text", content: "選択肢4: \"Wolves maintained their teamwork skills because they needed them to survive in the wild.\"" },
                    { type: "conclusion", content: "survive = survive, maintain cooperation/teamwork = maintained teamwork skills → 正解: 4" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Wolves and Dogs - 講師用要約",
            intro: "本文は、犬とオオカミの社会的行動の違い、特に「同種間の協力」に焦点を当てた比較文化（動物行動学）的な文章です。一般的に犬は人懐っこく協力的だと思われていますが、実はオオカミの方が仲間同士のチームワークや公平な分配において優れていることを、実験結果を交えて説明しています。",
            points: [
                { label: "1. 導入と一般通念（第1段落）", text: "犬はオオカミから進化した近縁種だが、一般的に犬は協力的、オオカミは攻撃的と思われている。しかし最近の研究は、仲間同士の協力においてはオオカミの方が優れている可能性を示唆。" },
                { label: "2. ロープ引き実験（第2段落）", text: "オーストリアの研究で、2頭同時にロープを引かないと餌が取れない実験を実施。オオカミはパートナーを待って協力できたが、犬は単独で取ろうとして失敗することが多かった。" },
                { label: "3. 食料の分配（第3段落）", text: "野生のオオカミは狩りの獲物を群れで分かち合い、地位の低いオオカミも食事が許される。一方、犬は厳格な階層社会を持ち、支配的な犬が餌を独占して他の犬を近づけさせない。" },
                { label: "4. 進化の理由（第4段落）", text: "犬は人間をリーダーとして頼るように進化したため、犬同士の協力スキルが低下。オオカミは野生で生き残り子を育てるために、高度なチームワークを維持する必要があった。" }
            ]
        }
    },
    // 2級 オリジナル問題4: The Rise of Vertical Farming
    {
        id: "grade-2-original-vertical-farming",
        grade: "2級",
        title: "The Rise of Vertical Farming",
        subTitle: "問題4",
        genre: "テクノロジー / 農業",
        similarProblems: {
            exam: "2024年度 第2回",
            title: "Community Gardens in Urban Areas"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Vertical+Farming",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Introduction - The Need for Vertical Farming
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Traditional agriculture has always depended on large areas of flat land and favorable weather conditions.",
                        translation: "従来の農業は、常に広大な平地と良好な天候条件に依存してきました。",
                        grammarAnalysis: {
                            mainVerbs: ["has depended"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Traditional agriculture</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has always depended</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on large areas of flat land and favorable weather conditions)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>従来の農業は</span> <span class='t-V'>常に依存してきた</span> <span class='t-M'>(広大な平地と良好な天候条件に)</span>。",
                            naturalTranslation: "従来の農業は、常に広大な平地と良好な天候条件に依存してきました。",
                            vocabulary: [
                                { word: "traditional agriculture", meaning: "「従来の農業」" },
                                { word: "depended on", meaning: "「〜に依存してきた」" },
                                { word: "favorable", meaning: "「好ましい」「良好な」" }
                            ],
                            grammarNotes: [
                                { phrase: "has always depended", explanation: "<b>現在完了形</b>: 過去から現在まで続く状態。「ずっと依存してきた」。" },
                                { phrase: "depend on", explanation: "<b>句動詞</b>: 「〜に依存する」。" },
                                { phrase: "flat land", explanation: "<b>名詞句</b>: 「平地」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "However, as the global population continues to grow, finding enough space to produce food is becoming increasingly difficult.",
                        translation: "しかし、世界人口が増え続けるにつれて、食料を生産するための十分なスペースを見つけることはますます困難になっています。",
                        grammarAnalysis: {
                            mainVerbs: ["continues", "is becoming"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(as [the global population <span class='chunk V2-group'><span class='text'>continues to grow</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>finding enough space to produce food</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is becoming</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>increasingly difficult</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-M'>(as [世界人口が <span class='t-V2'>増え続けるにつれて</span>])</span>、<span class='t-S'>食料を生産するための十分なスペースを見つけることは</span> <span class='t-V'>なりつつある</span> <span class='t-C'>ますます困難に</span>。",
                            naturalTranslation: "しかし、世界人口が増え続けるにつれて、食料を生産するための十分なスペースを見つけることはますます困難になっています。",
                            vocabulary: [
                                { word: "global population", meaning: "「世界人口」" },
                                { word: "continues to grow", meaning: "「増え続ける」" },
                                { word: "increasingly", meaning: "「ますます」" }
                            ],
                            grammarNotes: [
                                { phrase: "as the global population continues", explanation: "<b>as節</b>: 「〜するにつれて」。時間的な推移を示す。" },
                                { phrase: "finding enough space", explanation: "<b>動名詞句が主語</b>: 「十分なスペースを見つけること」。" },
                                { phrase: "is becoming", explanation: "<b>進行形</b>: 「〜になりつつある」。変化の過程。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "To solve this problem, a new method called vertical farming has gained attention.",
                        translation: "この問題を解決するために、垂直農業と呼ばれる新しい方法が注目を集めています。",
                        grammarAnalysis: {
                            mainVerbs: ["has gained"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To solve this problem)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a new method (called vertical farming)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has gained</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>attention</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(この問題を解決するために)</span>、<span class='t-S'>新しい方法（垂直農業と呼ばれる）が</span> <span class='t-V'>集めてきた</span> <span class='t-O'>注目を</span>。",
                            naturalTranslation: "この問題を解決するために、垂直農業と呼ばれる新しい方法が注目を集めています。",
                            vocabulary: [
                                { word: "To solve", meaning: "「解決するために」" },
                                { word: "vertical farming", meaning: "「垂直農業」" },
                                { word: "gained attention", meaning: "「注目を集めた」" }
                            ],
                            grammarNotes: [
                                { phrase: "To solve this problem", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「問題を解決するために」。" },
                                { phrase: "called vertical farming", explanation: "<b>過去分詞の形容詞的用法</b>: 「垂直農業と呼ばれる」。" },
                                { phrase: "has gained attention", explanation: "<b>現在完了形</b>: 「注目を集めてきた」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "This involves growing crops in layers stacked one above the other, often inside tall buildings.",
                        translation: "これには、しばしば高層ビルの中で、作物を積み重ねられた層で育てることが含まれます。",
                        grammarAnalysis: {
                            mainVerbs: ["involves"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>involves</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>growing crops (in layers stacked one above the other)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(often inside tall buildings)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>含む</span> <span class='t-O'>作物を育てることを（層で積み重ねられた）</span>、<span class='t-M'>(しばしば高層ビルの中で)</span>。",
                            naturalTranslation: "これには、しばしば高層ビルの中で、作物を積み重ねられた層で育てることが含まれます。",
                            vocabulary: [
                                { word: "involves", meaning: "「〜を含む」「〜を伴う」" },
                                { word: "layers", meaning: "「層」" },
                                { word: "stacked", meaning: "「積み重ねられた」" }
                            ],
                            grammarNotes: [
                                { phrase: "involves growing", explanation: "<b>involve + -ing</b>: 「〜することを含む」。動名詞を目的語に取る。" },
                                { phrase: "stacked one above the other", explanation: "<b>過去分詞句</b>: 「上に積み重ねられた」。layersを修飾。" },
                                { phrase: "inside tall buildings", explanation: "<b>前置詞句</b>: 「高層ビルの中で」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "By using this method, farmers can produce a large amount of food in small urban spaces, reducing the need for traditional farmland outside of cities.",
                        translation: "この方法を使用することで、農家は都市の狭いスペースで大量の食料を生産でき、都市の外にある従来の農地の必要性を減らすことができます。",
                        grammarAnalysis: {
                            mainVerbs: ["can produce"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(By using this method)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can produce</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a large amount of food</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in small urban spaces)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(reducing the need for traditional farmland outside of cities)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(この方法を使用することで)</span>、<span class='t-S'>農家は</span> <span class='t-V'>生産できる</span> <span class='t-O'>大量の食料を</span> <span class='t-M'>(都市の狭いスペースで)</span>、<span class='t-M'>(従来の農地の必要性を減らしながら)</span>。",
                            naturalTranslation: "この方法を使用することで、農家は都市の狭いスペースで大量の食料を生産でき、都市の外にある従来の農地の必要性を減らすことができます。",
                            vocabulary: [
                                { word: "By using", meaning: "「〜を使用することで」" },
                                { word: "urban spaces", meaning: "「都市空間」" },
                                { word: "reducing the need for", meaning: "「〜の必要性を減らしながら」" }
                            ],
                            grammarNotes: [
                                { phrase: "By using this method", explanation: "<b>by + -ing</b>: 「〜することで」。手段・方法を示す。" },
                                { phrase: "can produce", explanation: "<b>助動詞can</b>: 「〜できる」。能力・可能性。" },
                                { phrase: "reducing the need", explanation: "<b>分詞構文</b>: 結果を表す。「〜を減らしながら」。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: Technology-Controlled Environment
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "Vertical farming relies heavily on advanced technology to create the perfect environment for plants.",
                        translation: "垂直農業は、植物にとって完璧な環境を作り出すために高度な技術に大きく依存しています。",
                        grammarAnalysis: {
                            mainVerbs: ["relies"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Vertical farming</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>relies heavily</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on advanced technology)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to create the perfect environment for plants)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>垂直農業は</span> <span class='t-V'>大きく依存している</span> <span class='t-M'>(高度な技術に)</span> <span class='t-M'>(植物にとって完璧な環境を作り出すために)</span>。",
                            naturalTranslation: "垂直農業は、植物にとって完璧な環境を作り出すために高度な技術に大きく依存しています。",
                            vocabulary: [
                                { word: "relies heavily on", meaning: "「〜に大きく依存している」" },
                                { word: "advanced technology", meaning: "「高度な技術」" },
                                { word: "create the perfect environment", meaning: "「完璧な環境を作り出す」" }
                            ],
                            grammarNotes: [
                                { phrase: "relies heavily on", explanation: "<b>rely on</b>: 「〜に依存する」。heavilyで強調。" },
                                { phrase: "to create", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「作り出すために」。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "Instead of using natural sunlight, these farms use LED lights that provide the exact colors of light needed for growth.",
                        translation: "自然光を使う代わりに、これらの農場は成長に必要な正確な色の光を提供するLEDライトを使用します。",
                        grammarAnalysis: {
                            mainVerbs: ["use"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Instead of using natural sunlight)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>these farms</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>LED lights (that [<span class='chunk V2-group'><span class='text'>provide</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the exact colors of light needed for growth</span><span class='tag'>O'</span></span>])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(自然光を使う代わりに)</span>、<span class='t-S'>これらの農場は</span> <span class='t-V'>使用する</span> <span class='t-O'>LEDライトを（that [<span class='t-V2'>提供する</span> <span class='t-O2'>成長に必要な正確な色の光を</span>]）</span>。",
                            naturalTranslation: "自然光を使う代わりに、これらの農場は成長に必要な正確な色の光を提供するLEDライトを使用します。",
                            vocabulary: [
                                { word: "Instead of", meaning: "「〜の代わりに」" },
                                { word: "LED lights", meaning: "「LED照明」" },
                                { word: "exact colors", meaning: "「正確な色」" }
                            ],
                            grammarNotes: [
                                { phrase: "Instead of using", explanation: "<b>Instead of + -ing</b>: 「〜する代わりに」。対比を示す。" },
                                { phrase: "that provide", explanation: "<b>関係代名詞that</b>: LED lightsを修飾。" },
                                { phrase: "needed for growth", explanation: "<b>過去分詞句</b>: 「成長に必要な」。colorsを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "Additionally, the temperature and humidity are carefully controlled by computers to ensure that crops can be harvested all year round.",
                        translation: "さらに、作物が一年中収穫できることを確実にするために、温度と湿度はコンピュータによって注意深く制御されています。",
                        grammarAnalysis: {
                            mainVerbs: ["are controlled", "can be harvested"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Additionally)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the temperature and humidity</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are carefully controlled</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(by computers)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to ensure that [<span class='chunk S2-group'><span class='text'>crops</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>can be harvested</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>all year round</span><span class='tag'>M'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-S'>温度と湿度は</span> <span class='t-V'>注意深く制御されている</span> <span class='t-M'>(コンピュータによって)</span> <span class='t-M'>(to ensure that [<span class='t-S2'>作物が</span> <span class='t-V2'>収穫できる</span> <span class='t-M2'>一年中</span>]ために)</span>。",
                            naturalTranslation: "さらに、作物が一年中収穫できることを確実にするために、温度と湿度はコンピュータによって注意深く制御されています。",
                            vocabulary: [
                                { word: "Additionally", meaning: "「さらに」" },
                                { word: "humidity", meaning: "「湿度」" },
                                { word: "all year round", meaning: "「一年中」" }
                            ],
                            grammarNotes: [
                                { phrase: "are carefully controlled by", explanation: "<b>受動態</b>: 「〜によって制御されている」。" },
                                { phrase: "to ensure that", explanation: "<b>不定詞の副詞的用法（目的）+ that節</b>: 「〜を確実にするために」。" },
                                { phrase: "can be harvested", explanation: "<b>受動態の助動詞</b>: 「収穫されることができる」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "Because the environment is kept inside a closed building, there is no need to worry about pests or bad weather.",
                        translation: "環境が密閉された建物の中に保たれているため、害虫や悪天候を心配する必要はありません。",
                        grammarAnalysis: {
                            mainVerbs: ["is kept", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Because [<span class='chunk S2-group'><span class='text'>the environment</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is kept</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>inside a closed building</span><span class='tag'>M'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>there</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>no need to worry about pests or bad weather</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(Because [<span class='t-S2'>環境が</span> <span class='t-V2'>保たれている</span> <span class='t-M2'>密閉された建物の中に</span>]ため)</span>、<span class='t-S'>there</span> <span class='t-V'>is</span> <span class='t-C'>害虫や悪天候を心配する必要はない</span>。",
                            naturalTranslation: "環境が密閉された建物の中に保たれているため、害虫や悪天候を心配する必要はありません。",
                            vocabulary: [
                                { word: "is kept inside", meaning: "「〜の中に保たれている」" },
                                { word: "closed building", meaning: "「密閉された建物」" },
                                { word: "pests", meaning: "「害虫」" }
                            ],
                            grammarNotes: [
                                { phrase: "Because the environment is kept", explanation: "<b>Because節 + 受動態</b>: 理由を表す。" },
                                { phrase: "there is no need to", explanation: "<b>there is構文 + 不定詞</b>: 「〜する必要がない」。" },
                                { phrase: "worry about", explanation: "<b>句動詞</b>: 「〜を心配する」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "This allows farmers to grow high-quality vegetables without using any harmful chemical pesticides.",
                        translation: "これにより、農家は有害な化学農薬を使用することなく、高品質の野菜を育てることができます。",
                        grammarAnalysis: {
                            mainVerbs: ["allows"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allows</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>farmers</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to grow high-quality vegetables (without using any harmful chemical pesticides)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>可能にする</span> <span class='t-O'>農家に</span> <span class='t-C'>高品質の野菜を育てることを（有害な化学農薬を使用することなく）</span>。",
                            naturalTranslation: "これにより、農家は有害な化学農薬を使用することなく、高品質の野菜を育てることができます。",
                            vocabulary: [
                                { word: "allows ... to", meaning: "「〜が…することを可能にする」" },
                                { word: "high-quality", meaning: "「高品質の」" },
                                { word: "chemical pesticides", meaning: "「化学農薬」" }
                            ],
                            grammarNotes: [
                                { phrase: "allows farmers to grow", explanation: "<b>allow O to do</b>: 「Oが〜することを可能にする」。" },
                                { phrase: "without using", explanation: "<b>without + -ing</b>: 「〜することなく」。" },
                                { phrase: "harmful", explanation: "<b>形容詞</b>: 「有害な」。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Efficient Resource Use
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 11,
                        text: "One of the most significant advantages of vertical farming is its efficient use of natural resources.",
                        translation: "垂直農業の最も重要な利点の一つは、天然資源の効率的な利用です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>One of the most significant advantages (of vertical farming)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>its efficient use of natural resources</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>最も重要な利点の一つ（垂直農業の）は</span> <span class='t-V'>である</span> <span class='t-C'>天然資源の効率的な利用</span>。",
                            naturalTranslation: "垂直農業の最も重要な利点の一つは、天然資源の効率的な利用です。",
                            vocabulary: [
                                { word: "One of the most significant", meaning: "「最も重要な〜の一つ」" },
                                { word: "advantages", meaning: "「利点」" },
                                { word: "efficient use", meaning: "「効率的な利用」" }
                            ],
                            grammarNotes: [
                                { phrase: "One of the most significant", explanation: "<b>最上級の表現</b>: 「最も重要な〜の一つ」。" },
                                { phrase: "its efficient use of", explanation: "<b>名詞句</b>: 「その効率的な利用」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "For instance, many vertical farms use a system where water is recycled and reused constantly.",
                        translation: "例えば、多くの垂直農場では、水が常にリサイクルされ再利用されるシステムを使用しています。",
                        grammarAnalysis: {
                            mainVerbs: ["use", "is recycled"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For instance)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many vertical farms</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a system (where [<span class='chunk S2-group'><span class='text'>water</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is recycled and reused</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>constantly</span><span class='tag'>M'</span></span>])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(例えば)</span>、<span class='t-S'>多くの垂直農場は</span> <span class='t-V'>使用する</span> <span class='t-O'>システムを（where [<span class='t-S2'>水が</span> <span class='t-V2'>リサイクルされ再利用される</span> <span class='t-M2'>常に</span>]）</span>。",
                            naturalTranslation: "例えば、多くの垂直農場では、水が常にリサイクルされ再利用されるシステムを使用しています。",
                            vocabulary: [
                                { word: "For instance", meaning: "「例えば」" },
                                { word: "recycled and reused", meaning: "「リサイクルされ再利用される」" },
                                { word: "constantly", meaning: "「常に」「絶えず」" }
                            ],
                            grammarNotes: [
                                { phrase: "For instance", explanation: "<b>接続副詞</b>: 「例えば」。例を導入。" },
                                { phrase: "where water is recycled", explanation: "<b>関係副詞where</b>: systemを修飾。" },
                                { phrase: "is recycled and reused", explanation: "<b>受動態</b>: 「リサイクルされ再利用される」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "As a result, they use about 95 percent less water than traditional outdoor farms.",
                        translation: "その結果、従来の屋外農場よりも水の使用量が約95パーセント少なくなっています。",
                        grammarAnalysis: {
                            mainVerbs: ["use"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(As a result)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>about 95 percent less water</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(than traditional outdoor farms)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その結果)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>使用する</span> <span class='t-O'>約95%少ない水を</span> <span class='t-M'>(従来の屋外農場よりも)</span>。",
                            naturalTranslation: "その結果、従来の屋外農場よりも水の使用量が約95パーセント少なくなっています。",
                            vocabulary: [
                                { word: "As a result", meaning: "「その結果」" },
                                { word: "95 percent less", meaning: "「95%少ない」" },
                                { word: "traditional outdoor farms", meaning: "「従来の屋外農場」" }
                            ],
                            grammarNotes: [
                                { phrase: "As a result", explanation: "<b>接続副詞</b>: 「その結果」。結論を導く。" },
                                { phrase: "95 percent less water than", explanation: "<b>比較級</b>: 「〜より95%少ない水」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "Furthermore, since these buildings are located in or near major cities, the food does not have to be transported over long distances.",
                        translation: "さらに、これらの建物は主要都市の中またはその近くに位置しているため、食品を長距離輸送する必要がありません。",
                        grammarAnalysis: {
                            mainVerbs: ["are located", "does not have to be transported"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Furthermore)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(since [<span class='chunk S2-group'><span class='text'>these buildings</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are located</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>in or near major cities</span><span class='tag'>M'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the food</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>does not have to be transported</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(over long distances)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-M'>(since [<span class='t-S2'>これらの建物は</span> <span class='t-V2'>位置している</span> <span class='t-M2'>主要都市の中または近くに</span>]ため)</span>、<span class='t-S'>食品は</span> <span class='t-V'>輸送される必要がない</span> <span class='t-M'>(長距離を)</span>。",
                            naturalTranslation: "さらに、これらの建物は主要都市の中またはその近くに位置しているため、食品を長距離輸送する必要がありません。",
                            vocabulary: [
                                { word: "Furthermore", meaning: "「さらに」" },
                                { word: "are located in", meaning: "「〜に位置している」" },
                                { word: "transported over long distances", meaning: "「長距離輸送される」" }
                            ],
                            grammarNotes: [
                                { phrase: "Furthermore", explanation: "<b>接続副詞</b>: 「さらに」。追加情報を導く。" },
                                { phrase: "since these buildings are located", explanation: "<b>since節</b>: 「〜ため」。理由を表す。" },
                                { phrase: "does not have to be transported", explanation: "<b>否定のhave to + 受動態</b>: 「輸送される必要がない」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "This significantly reduces the amount of fuel used for delivery and ensures that consumers receive the freshest possible products soon after they are picked.",
                        translation: "これにより、配送に使用される燃料の量が大幅に削減され、消費者が収穫後すぐに可能な限り新鮮な製品を受け取ることが保証されます。",
                        grammarAnalysis: {
                            mainVerbs: ["reduces", "ensures", "receive", "are picked"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>significantly reduces</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the amount of fuel (used for delivery)</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>ensures</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [consumers receive the freshest possible products (soon after they are picked)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>大幅に削減する</span> <span class='t-O'>燃料の量を（配送に使用される）</span> そして <span class='t-V'>確保する</span> <span class='t-O'>that [消費者が最も新鮮な製品を受け取ること（収穫後すぐに）]</span>。",
                            naturalTranslation: "これにより、配送に使用される燃料の量が大幅に削減され、消費者が収穫後すぐに可能な限り新鮮な製品を受け取ることが保証されます。",
                            vocabulary: [
                                { word: "significantly reduces", meaning: "「大幅に削減する」" },
                                { word: "fuel used for delivery", meaning: "「配送に使用される燃料」" },
                                { word: "the freshest possible", meaning: "「可能な限り最も新鮮な」" }
                            ],
                            grammarNotes: [
                                { phrase: "significantly reduces", explanation: "<b>副詞 + 動詞</b>: 「大幅に削減する」。" },
                                { phrase: "used for delivery", explanation: "<b>過去分詞句</b>: 「配送に使用される」。fuelを修飾。" },
                                { phrase: "ensures that", explanation: "<b>動詞 + that節</b>: 「〜を確保する」。" },
                                { phrase: "soon after they are picked", explanation: "<b>時を表す副詞節</b>: 「収穫されてすぐに」。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Economic Challenges
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 16,
                        text: "Despite its potential, vertical farming still faces some economic obstacles.",
                        translation: "その可能性があるにもかかわらず、垂直農業は依然としていくつかの経済的な障害に直面しています。",
                        grammarAnalysis: {
                            mainVerbs: ["faces"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Despite its potential)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>vertical farming</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>still faces</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some economic obstacles</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(その可能性があるにもかかわらず)</span>、<span class='t-S'>垂直農業は</span> <span class='t-V'>依然として直面している</span> <span class='t-O'>いくつかの経済的障害に</span>。",
                            naturalTranslation: "その可能性があるにもかかわらず、垂直農業は依然としていくつかの経済的な障害に直面しています。",
                            vocabulary: [
                                { word: "Despite", meaning: "「〜にもかかわらず」" },
                                { word: "potential", meaning: "「可能性」「潜在力」" },
                                { word: "economic obstacles", meaning: "「経済的障害」" }
                            ],
                            grammarNotes: [
                                { phrase: "Despite its potential", explanation: "<b>Despite + 名詞</b>: 「〜にもかかわらず」。譲歩を示す。" },
                                { phrase: "still faces", explanation: "<b>副詞still</b>: 「依然として」。状況の継続を示す。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "The biggest challenge is the high cost of electricity required to run the lights and climate control systems.",
                        translation: "最大の課題は、照明や気候制御システムを稼働させるために必要な電気代が高いことです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The biggest challenge</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the high cost of electricity (required to run the lights and climate control systems)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>最大の課題は</span> <span class='t-V'>である</span> <span class='t-C'>電気代の高さ（照明や気候制御システムを稼働させるために必要な）</span>。",
                            naturalTranslation: "最大の課題は、照明や気候制御システムを稼働させるために必要な電気代が高いことです。",
                            vocabulary: [
                                { word: "The biggest challenge", meaning: "「最大の課題」" },
                                { word: "high cost of electricity", meaning: "「電気代の高さ」" },
                                { word: "climate control systems", meaning: "「気候制御システム」" }
                            ],
                            grammarNotes: [
                                { phrase: "The biggest challenge is", explanation: "<b>最上級 + be動詞</b>: 「最大の課題は〜である」。" },
                                { phrase: "required to run", explanation: "<b>過去分詞句</b>: 「稼働させるために必要な」。electricityを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "In some cases, the energy needed to grow vegetables indoors is much more expensive than the cost of growing them in a field.",
                        translation: "場合によっては、屋内で野菜を育てるために必要なエネルギーは、畑で育てるコストよりもはるかに高くなります。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In some cases)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the energy (needed to grow vegetables indoors)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>much more expensive (than the cost of growing them in a field)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(場合によっては)</span>、<span class='t-S'>エネルギーは（屋内で野菜を育てるために必要な）</span> <span class='t-V'>である</span> <span class='t-C'>はるかに高い（畑で育てるコストよりも）</span>。",
                            naturalTranslation: "場合によっては、屋内で野菜を育てるために必要なエネルギーは、畑で育てるコストよりもはるかに高くなります。",
                            vocabulary: [
                                { word: "In some cases", meaning: "「場合によっては」" },
                                { word: "much more expensive", meaning: "「はるかに高い」" },
                                { word: "indoors", meaning: "「屋内で」" }
                            ],
                            grammarNotes: [
                                { phrase: "In some cases", explanation: "<b>前置詞句</b>: 「場合によっては」。限定条件を示す。" },
                                { phrase: "needed to grow vegetables", explanation: "<b>過去分詞句</b>: 「野菜を育てるために必要な」。" },
                                { phrase: "much more expensive than", explanation: "<b>比較級の強調</b>: 「〜よりはるかに高い」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "Some experts also point out that only a limited variety of crops, such as leafy greens and herbs, are currently profitable to grow this way.",
                        translation: "一部の専門家はまた、現在この方法で育てて利益が出るのは、葉物野菜やハーブなど、限られた種類の作物だけであると指摘しています。",
                        grammarAnalysis: {
                            mainVerbs: ["point out", "are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Some experts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>also point out</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [only a limited variety of crops, (such as leafy greens and herbs), <span class='chunk V2-group'><span class='text'>are currently profitable</span><span class='tag'>V'</span></span> to grow this way]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>一部の専門家は</span> <span class='t-V'>また指摘している</span> <span class='t-O'>that [限られた種類の作物だけが、（葉物野菜やハーブなど）、<span class='t-V2'>現在この方法で育てて利益が出る</span>]</span>。",
                            naturalTranslation: "一部の専門家はまた、現在この方法で育てて利益が出るのは、葉物野菜やハーブなど、限られた種類の作物だけであると指摘しています。",
                            vocabulary: [
                                { word: "point out that", meaning: "「〜と指摘する」" },
                                { word: "a limited variety of", meaning: "「限られた種類の」" },
                                { word: "leafy greens", meaning: "「葉物野菜」" },
                                { word: "profitable", meaning: "「利益が出る」「儲かる」" }
                            ],
                            grammarNotes: [
                                { phrase: "point out that", explanation: "<b>動詞 + that節</b>: 「〜と指摘する」。" },
                                { phrase: "such as leafy greens and herbs", explanation: "<b>such as</b>: 「〜のような」。例を挙げる。" },
                                { phrase: "are currently profitable to grow", explanation: "<b>形容詞 + 不定詞</b>: 「育てて利益が出る」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Nevertheless, researchers are working on ways to lower energy costs and expand the types of food that can be produced.",
                        translation: "それにもかかわらず、研究者たちはエネルギーコストを下げ、生産できる食品の種類を増やす方法に取り組んでいます。",
                        grammarAnalysis: {
                            mainVerbs: ["are working", "can be produced"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Nevertheless)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>researchers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are working</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on ways to lower energy costs and expand the types of food (that [<span class='chunk V2-group'><span class='text'>can be produced</span><span class='tag'>V'</span></span>]))</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(それにもかかわらず)</span>、<span class='t-S'>研究者たちは</span> <span class='t-V'>取り組んでいる</span> <span class='t-M'>(方法に：エネルギーコストを下げ、生産できる食品の種類を増やす)</span>。",
                            naturalTranslation: "それにもかかわらず、研究者たちはエネルギーコストを下げ、生産できる食品の種類を増やす方法に取り組んでいます。",
                            vocabulary: [
                                { word: "Nevertheless", meaning: "「それにもかかわらず」" },
                                { word: "are working on", meaning: "「〜に取り組んでいる」" },
                                { word: "lower energy costs", meaning: "「エネルギーコストを下げる」" }
                            ],
                            grammarNotes: [
                                { phrase: "Nevertheless", explanation: "<b>接続副詞</b>: 「それにもかかわらず」。譲歩の後の展開。" },
                                { phrase: "are working on ways to", explanation: "<b>work on + 名詞</b>: 「〜に取り組む」。" },
                                { phrase: "that can be produced", explanation: "<b>関係代名詞that + 受動態</b>: 「生産できる」。" }
                            ]
                        }
                    }
                ]
            },
            // 第5段落: Conclusion - Future Promise
            {
                paragraphId: 5,
                sentences: [
                    {
                        id: 21,
                        text: "Vertical farming offers a promising solution to the food challenges of the future.",
                        translation: "垂直農業は、将来の食料課題に対する有望な解決策を提供します。",
                        grammarAnalysis: {
                            mainVerbs: ["offers"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Vertical farming</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>offers</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a promising solution (to the food challenges of the future)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>垂直農業は</span> <span class='t-V'>提供する</span> <span class='t-O'>有望な解決策を（将来の食料課題に対する）</span>。",
                            naturalTranslation: "垂直農業は、将来の食料課題に対する有望な解決策を提供します。",
                            vocabulary: [
                                { word: "offers", meaning: "「提供する」" },
                                { word: "a promising solution", meaning: "「有望な解決策」" },
                                { word: "food challenges", meaning: "「食料課題」" }
                            ],
                            grammarNotes: [
                                { phrase: "offers a promising solution", explanation: "<b>offer + O</b>: 「〜を提供する」。" },
                                { phrase: "to the food challenges of the future", explanation: "<b>前置詞to</b>: 「〜に対する」。解決の対象。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "While the initial costs are high, the benefits of saving water and producing food locally are very clear.",
                        translation: "初期費用は高いものの、節水や食品の地元生産といった利点は非常に明確です。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "are"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While [<span class='chunk S2-group'><span class='text'>the initial costs</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are high</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the benefits (of saving water and producing food locally)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very clear</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(While [<span class='t-S2'>初期費用が</span> <span class='t-V2'>高い</span>]ものの)</span>、<span class='t-S'>利点は（節水や地元での食品生産の）</span> <span class='t-V'>である</span> <span class='t-C'>非常に明確</span>。",
                            naturalTranslation: "初期費用は高いものの、節水や食品の地元生産といった利点は非常に明確です。",
                            vocabulary: [
                                { word: "While", meaning: "「〜だけれども」" },
                                { word: "initial costs", meaning: "「初期費用」" },
                                { word: "producing food locally", meaning: "「地元で食品を生産すること」" }
                            ],
                            grammarNotes: [
                                { phrase: "While the initial costs are high", explanation: "<b>While節</b>: 「〜だけれども」。譲歩を示す。" },
                                { phrase: "the benefits of saving water", explanation: "<b>名詞 + of + 動名詞</b>: 「〜の利点」。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "As technology improves and becomes more affordable, it is likely that more cities will adopt this innovative method.",
                        translation: "技術が向上し、より手頃な価格になるにつれて、より多くの都市がこの革新的な方法を採用する可能性があります。",
                        grammarAnalysis: {
                            mainVerbs: ["improves", "becomes", "is", "will adopt"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(As [<span class='chunk S2-group'><span class='text'>technology</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>improves and becomes more affordable</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is likely</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that [more cities will adopt this innovative method]</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(As [<span class='t-S2'>技術が</span> <span class='t-V2'>向上し、より手頃になる</span>につれて])</span>、<span class='t-S'>it</span> <span class='t-V'>is likely</span> <span class='t-C'>that [より多くの都市がこの革新的な方法を採用するだろう]</span>。",
                            naturalTranslation: "技術が向上し、より手頃な価格になるにつれて、より多くの都市がこの革新的な方法を採用する可能性があります。",
                            vocabulary: [
                                { word: "improves", meaning: "「向上する」" },
                                { word: "affordable", meaning: "「手頃な価格の」" },
                                { word: "it is likely that", meaning: "「〜する可能性がある」" },
                                { word: "adopt", meaning: "「採用する」" },
                                { word: "innovative method", meaning: "「革新的な方法」" }
                            ],
                            grammarNotes: [
                                { phrase: "As technology improves", explanation: "<b>as節</b>: 「〜するにつれて」。時間的推移。" },
                                { phrase: "it is likely that", explanation: "<b>形式主語it + that節</b>: 「〜する可能性がある」。" },
                                { phrase: "will adopt", explanation: "<b>未来形</b>: 「〜するだろう」。" }
                            ]
                        }
                    },
                    {
                        id: 24,
                        text: "By combining technology with agriculture, vertical farming could help provide a stable food supply for the world's growing urban population.",
                        translation: "技術と農業を組み合わせることで、垂直農業は世界の増え続ける都市人口に対して安定した食料供給を支援することができるでしょう。",
                        grammarAnalysis: {
                            mainVerbs: ["could help provide"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(By combining technology with agriculture)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>vertical farming</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could help provide</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a stable food supply (for the world's growing urban population)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(技術と農業を組み合わせることで)</span>、<span class='t-S'>垂直農業は</span> <span class='t-V'>提供を助けることができる</span> <span class='t-O'>安定した食料供給を（世界の増加する都市人口に対して）</span>。",
                            naturalTranslation: "技術と農業を組み合わせることで、垂直農業は世界の増え続ける都市人口に対して安定した食料供給を支援することができるでしょう。",
                            vocabulary: [
                                { word: "By combining ... with", meaning: "「〜を…と組み合わせることで」" },
                                { word: "could help provide", meaning: "「提供を助けることができる」" },
                                { word: "stable food supply", meaning: "「安定した食料供給」" },
                                { word: "growing urban population", meaning: "「増加する都市人口」" }
                            ],
                            grammarNotes: [
                                { phrase: "By combining technology with agriculture", explanation: "<b>by + -ing</b>: 「〜することで」。手段を示す。" },
                                { phrase: "could help provide", explanation: "<b>could + help + 原形</b>: 「〜する助けとなりうる」。" },
                                { phrase: "for the world's growing urban population", explanation: "<b>前置詞for</b>: 「〜に対して」。受益者を示す。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Why Vertical Farming
            {
                id: 1,
                text: "Why has vertical farming become an important topic recently?",
                textTranslation: "なぜ垂直農業は最近重要なトピックになりましたか？",
                choices: [
                    { id: 1, text: "Because traditional farmers want to move their farms into tall buildings.", translation: "従来の農家が農場を高層ビルに移したいと思っているから。", isCorrect: false },
                    { id: 2, text: "Because it is getting harder to find enough land to feed the growing population.", translation: "増え続ける人口を養うための十分な土地を見つけることが難しくなっているから。", isCorrect: true, highlight: "getting harder to find enough land" },
                    { id: 3, text: "Because weather conditions around the world have become perfect for farming.", translation: "世界中の天候が農業に最適になったから。", isCorrect: false },
                    { id: 4, text: "Because people prefer to eat food that is grown in layers.", translation: "人々が層状に育てられた食べ物を好むから。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落に垂直農業が注目される理由が述べられています。「difficult」という単語に注目。",
                    targetSentenceId: 2,
                    highlightWord: "finding enough space to produce food is becoming increasingly difficult",
                    highlightWordSentenceId: 2
                },
                keywords: ["vertical farming", "important", "recently"],
                keywordExplanations: {
                    "vertical farming": "垂直農業。本文の主題。",
                    "important": "なぜ重要かの理由を探す。",
                    "recently": "最近注目されている理由。"
                },
                keywordMatches: [
                    { sentenceId: 2, text: "finding enough space to produce food is becoming increasingly difficult", keyword: "important" }
                ],
                choiceAdvice: "選択肢は垂直農業が注目される理由について問うています。第1段落で人口増加と土地について述べられている部分を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"as the global population continues to grow, finding enough space to produce food is becoming increasingly difficult.\"" },
                    { type: "arrow", content: "「人口が増え続け、食料生産のスペースを見つけることが困難になっている」" },
                    { type: "text", content: "選択肢2: \"it is getting harder to find enough land to feed the growing population.\"" },
                    { type: "conclusion", content: "difficult = harder, space = land → 正解: 2" }
                ]
            },
            // Q2: 第2段落 - Technology
            {
                id: 2,
                text: "What is one way that vertical farming differs from traditional farming?",
                textTranslation: "垂直農業が従来の農業と異なる点の一つは何ですか？",
                choices: [
                    { id: 1, text: "It uses LED lights and controlled environments instead of sunlight and open fields.", translation: "日光や露地の代わりにLEDライトと制御された環境を使用する。", isCorrect: true, highlight: "LED lights and controlled environments" },
                    { id: 2, text: "It requires farmers to use more pesticides to keep the crops healthy.", translation: "作物を健康に保つためにより多くの農薬を使う必要がある。", isCorrect: false },
                    { id: 3, text: "It depends on natural rain to provide water for the plants.", translation: "植物に水を供給するために自然の雨に依存している。", isCorrect: false },
                    { id: 4, text: "It can only produce crops during certain seasons of the year.", translation: "一年の特定の季節にしか作物を生産できない。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落で垂直農業の技術的な特徴が述べられています。「Instead of」に注目。",
                    targetSentenceId: 7,
                    highlightWord: "Instead of using natural sunlight, these farms use LED lights",
                    highlightWordSentenceId: 7
                },
                keywords: ["differs", "traditional farming"],
                keywordExplanations: {
                    "differs": "「異なる」。従来との違いを探す。",
                    "traditional farming": "従来の農業との対比。"
                },
                keywordMatches: [
                    { sentenceId: 7, text: "Instead of using natural sunlight, these farms use LED lights", keyword: "differs" }
                ],
                choiceAdvice: "選択肢は垂直農業と従来の農業の違いについて問うています。第2段落で「Instead of」で始まる対比表現を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"Instead of using natural sunlight, these farms use LED lights...\" + \"the temperature and humidity are carefully controlled by computers\"" },
                    { type: "arrow", content: "「日光の代わりにLEDを使い」+「温度と湿度がコンピュータで制御」= 「LEDと制御環境を使用」" },
                    { type: "text", content: "選択肢1: \"It uses LED lights and controlled environments instead of sunlight and open fields.\"" },
                    { type: "conclusion", content: "LED lights + controlled → 正解: 1" }
                ]
            },
            // Q3: 第3段落 - Resource Use
            {
                id: 3,
                text: "What is mentioned as a benefit of vertical farming's resource use?",
                textTranslation: "垂直農業の資源利用のメリットとして何が挙げられていますか？",
                choices: [
                    { id: 1, text: "It allows farmers to use more fuel when delivering food to cities.", translation: "農家が都市に食料を届ける際により多くの燃料を使える。", isCorrect: false },
                    { id: 2, text: "It requires less water because the water is used multiple times.", translation: "水が複数回使用されるため、より少ない水で済む。", isCorrect: true, highlight: "less water" },
                    { id: 3, text: "It helps traditional outdoor farms find better ways to use soil.", translation: "従来の屋外農場がより良い土壌利用方法を見つけるのに役立つ。", isCorrect: false },
                    { id: 4, text: "It encourages consumers to travel longer distances to buy fresh food.", translation: "消費者が新鮮な食べ物を買うためにより長い距離を移動することを促す。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で資源利用のメリットが述べられています。「95 percent less water」に注目。",
                    targetSentenceId: 13,
                    highlightWord: "they use about 95 percent less water than traditional outdoor farms",
                    highlightWordSentenceId: 13
                },
                keywords: ["benefit", "resource use"],
                keywordExplanations: {
                    "benefit": "メリット・利点。",
                    "resource use": "資源利用。水や燃料など。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "they use about 95 percent less water than traditional outdoor farms", keyword: "resource use" }
                ],
                choiceAdvice: "選択肢は資源利用のメリットについて問うています。第3段落で水の再利用システムについて述べられている部分を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"many vertical farms use a system where water is recycled and reused constantly. As a result, they use about 95 percent less water\"" },
                    { type: "arrow", content: "「水がリサイクル・再利用される」→「95%少ない水で済む」= 「複数回使用で節水」" },
                    { type: "text", content: "選択肢2: \"It requires less water because the water is used multiple times.\"" },
                    { type: "conclusion", content: "recycled and reused = used multiple times → 正解: 2" }
                ]
            },
            // Q4: 第4段落 - Economic Challenges
            {
                id: 4,
                text: "What is a current disadvantage of vertical farming mentioned in the text?",
                textTranslation: "本文で述べられている垂直農業の現在の欠点は何ですか？",
                choices: [
                    { id: 1, text: "It is difficult to find enough people who want to work in tall buildings.", translation: "高層ビルで働きたい人を十分に見つけるのが難しい。", isCorrect: false },
                    { id: 2, text: "Most researchers believe that vertical farming will never be successful.", translation: "ほとんどの研究者は垂直農業が成功しないと信じている。", isCorrect: false },
                    { id: 3, text: "The energy needed to operate the farms can be very costly.", translation: "農場を運営するために必要なエネルギーは非常に高くつくことがある。", isCorrect: true, highlight: "energy can be very costly" },
                    { id: 4, text: "It is impossible to grow any herbs or leafy greens using this method.", translation: "この方法でハーブや葉物野菜を育てることは不可能である。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で経済的な課題が述べられています。「biggest challenge」「high cost」に注目。",
                    targetSentenceId: 17,
                    highlightWord: "The biggest challenge is the high cost of electricity",
                    highlightWordSentenceId: 17
                },
                keywords: ["disadvantage", "current"],
                keywordExplanations: {
                    "disadvantage": "欠点・デメリット。",
                    "current": "現在の課題を探す。"
                },
                keywordMatches: [
                    { sentenceId: 17, text: "The biggest challenge is the high cost of electricity required to run the lights", keyword: "disadvantage" }
                ],
                choiceAdvice: "選択肢は現在の欠点について問うています。第4段落で「biggest challenge」として述べられている内容を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"The biggest challenge is the high cost of electricity required to run the lights and climate control systems.\"" },
                    { type: "arrow", content: "「最大の課題は電気代が高いこと」= 「エネルギーコストが高い」" },
                    { type: "text", content: "選択肢3: \"The energy needed to operate the farms can be very costly.\"" },
                    { type: "conclusion", content: "high cost of electricity = energy can be very costly → 正解: 3" }
                ]
            },
            // Q5: 全体 - True Statement
            {
                id: 5,
                text: "Which of the following statements is true about vertical farming?",
                textTranslation: "垂直農業について正しい記述はどれですか？",
                choices: [
                    { id: 1, text: "It is already the most common way to grow food in every country.", translation: "すべての国で最も一般的な食料生産方法になっている。", isCorrect: false },
                    { id: 2, text: "It uses the same amount of water as traditional agriculture.", translation: "従来の農業と同じ量の水を使用する。", isCorrect: false },
                    { id: 3, text: "It could help provide a steady supply of food to people in cities.", translation: "都市の人々に安定した食料供給を支援できる可能性がある。", isCorrect: true, highlight: "steady supply of food to people in cities" },
                    { id: 4, text: "It has completely replaced the need for researchers in the food industry.", translation: "食品産業における研究者の必要性を完全に置き換えた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 5,
                    description: "第5段落の結論部分で、垂直農業の将来的な可能性が述べられています。",
                    targetSentenceId: 24,
                    highlightWord: "could help provide a stable food supply for the world's growing urban population",
                    highlightWordSentenceId: 24
                },
                keywords: ["true", "vertical farming"],
                keywordExplanations: {
                    "true": "正しい記述を探す。",
                    "vertical farming": "垂直農業についての正確な情報。"
                },
                keywordMatches: [
                    { sentenceId: 24, text: "vertical farming could help provide a stable food supply for the world's growing urban population", keyword: "true" }
                ],
                choiceAdvice: "各選択肢が本文と一致するかを確認します。特に第5段落の結論部分に注目。",
                logic: [
                    { type: "text", content: "本文: \"vertical farming could help provide a stable food supply for the world's growing urban population.\"" },
                    { type: "arrow", content: "「垂直農業は世界の都市人口に安定した食料供給を支援できる」" },
                    { type: "text", content: "選択肢3: \"It could help provide a steady supply of food to people in cities.\"" },
                    { type: "conclusion", content: "stable = steady, urban population = people in cities → 正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Rise of Vertical Farming - 講師用要約",
            intro: "人口増加に伴う農地不足の解決策として、ビル内で作物を育てる「垂直農業」が注目されています。最新技術を用いて資源を節約しつつ、都市部で新鮮な野菜を安定供給できる可能性を秘めていますが、高い電気代などのコスト面が現在の課題となっています。",
            points: [
                { label: "1. 垂直農業の登場（第1段落）", text: "人口増加により従来の平地での農業が難しくなる中、都市のビル内で多層的に栽培する垂直農業が注目されている。" },
                { label: "2. 技術による環境制御（第2段落）", text: "LEDライトやコンピュータ制御により、天候や害虫の影響を受けず、一年中無農薬で高品質な栽培が可能となる。" },
                { label: "3. 資源の効率利用（第3段落）", text: "水の再利用により95%の節水を実現し、都市近郊での生産により輸送燃料を削減、新鮮な食材を提供できる。" },
                { label: "4. 経済的な課題（第4段落）", text: "電気代の高さが最大の難点であり、現在は葉物野菜など一部の作物に限定されているが、改善に向けた研究が進んでいる。" },
                { label: "5. 将来の展望（第5段落）", text: "技術の向上とコスト削減により、都市人口への安定した食料供給を支援する有望な解決策となる可能性がある。" }
            ]
        }
    },
    // 2級 オリジナル問題5: The Slow Food Movement
    {
        id: "grade-2-original-slow-food",
        grade: "2級",
        title: "The Slow Food Movement",
        subTitle: "問題5",
        genre: "社会・文化 / 食文化",
        similarProblems: {
            exam: "2024年度 第1回",
            title: "The Arts and Crafts Movement"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Slow+Food",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Change in Eating Habits
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "In the late twentieth century, the way people ate began to change dramatically across the globe.",
                        translation: "20世紀後半、人々の食事の仕方は世界中で劇的に変化し始めた。",
                        grammarAnalysis: {
                            mainVerbs: ["began"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the late twentieth century)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the way (people ate)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>began to change</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>dramatically (across the globe)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(20世紀後半)</span>、<span class='t-S'>人々が食べる方法は</span> <span class='t-V'>変化し始めた</span> <span class='t-M'>劇的に（世界中で）</span>。",
                            naturalTranslation: "20世紀後半、人々の食事の仕方は世界中で劇的に変化し始めた。",
                            vocabulary: [
                                { word: "late twentieth century", meaning: "「20世紀後半」" },
                                { word: "the way people ate", meaning: "「人々の食べ方」" },
                                { word: "dramatically", meaning: "「劇的に」" }
                            ],
                            grammarNotes: [
                                { phrase: "the way people ate", explanation: "<b>関係副詞の省略</b>: the way (in which) people ate。「人々が食べる方法」。" },
                                { phrase: "began to change", explanation: "<b>begin to do</b>: 「〜し始める」。変化の開始を示す。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "For centuries, meals were cooked at home using fresh ingredients grown on local farms.",
                        translation: "何世紀もの間、食事は地元の農場で育てられた新鮮な食材を使って家庭で作られていた。",
                        grammarAnalysis: {
                            mainVerbs: ["were cooked"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For centuries)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>meals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were cooked</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(at home) (using fresh ingredients [grown on local farms])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(何世紀もの間)</span>、<span class='t-S'>食事は</span> <span class='t-V'>作られていた</span> <span class='t-M'>(家庭で)（新鮮な食材を使って[地元の農場で育てられた]）</span>。",
                            naturalTranslation: "何世紀もの間、食事は地元の農場で育てられた新鮮な食材を使って家庭で作られていた。",
                            vocabulary: [
                                { word: "For centuries", meaning: "「何世紀もの間」" },
                                { word: "fresh ingredients", meaning: "「新鮮な食材」" },
                                { word: "local farms", meaning: "「地元の農場」" }
                            ],
                            grammarNotes: [
                                { phrase: "were cooked", explanation: "<b>受動態</b>: 「作られていた」。" },
                                { phrase: "using fresh ingredients", explanation: "<b>分詞構文</b>: 「新鮮な食材を使いながら」。" },
                                { phrase: "grown on local farms", explanation: "<b>過去分詞句</b>: ingredientsを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Families would sit down together to eat and talk.",
                        translation: "家族は一緒に座って食事をし、会話をしたものだった。",
                        grammarAnalysis: {
                            mainVerbs: ["would sit"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Families</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>would sit down together</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to eat and talk)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>家族は</span> <span class='t-V'>一緒に座ったものだった</span> <span class='t-M'>(食事をし会話をするために)</span>。",
                            naturalTranslation: "家族は一緒に座って食事をし、会話をしたものだった。",
                            vocabulary: [
                                { word: "would sit down", meaning: "「座ったものだった」（過去の習慣）" },
                                { word: "together", meaning: "「一緒に」" }
                            ],
                            grammarNotes: [
                                { phrase: "would sit", explanation: "<b>過去の習慣を表すwould</b>: 「〜したものだった」。" },
                                { phrase: "to eat and talk", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「食事し会話するために」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "However, as new technologies made life faster and busier, fast food restaurants became very popular.",
                        translation: "しかし、新しい技術が生活をより速く、忙しくするにつれて、ファストフードレストランが非常に人気になった。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "became"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(as [<span class='chunk S2-group'><span class='text'>new technologies</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>made</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>life faster and busier</span><span class='tag'>O'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>fast food restaurants</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very popular</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-M'>(as [<span class='t-S2'>新しい技術が</span> <span class='t-V2'>した</span> <span class='t-O2'>生活をより速く忙しく</span>]につれて)</span>、<span class='t-S'>ファストフードレストランは</span> <span class='t-V'>なった</span> <span class='t-C'>非常に人気に</span>。",
                            naturalTranslation: "しかし、新しい技術が生活をより速く、忙しくするにつれて、ファストフードレストランが非常に人気になった。",
                            vocabulary: [
                                { word: "new technologies", meaning: "「新しい技術」" },
                                { word: "made life faster", meaning: "「生活をより速くした」" },
                                { word: "became very popular", meaning: "「非常に人気になった」" }
                            ],
                            grammarNotes: [
                                { phrase: "as new technologies made", explanation: "<b>as節</b>: 「〜するにつれて」。時間的推移と因果関係。" },
                                { phrase: "made life faster and busier", explanation: "<b>make O C</b>: 「OをCにする」。" },
                                { phrase: "became very popular", explanation: "<b>become + 形容詞</b>: 「〜になる」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "These restaurants allowed people to buy cheap meals that were prepared in minutes.",
                        translation: "これらのレストランによって、人々は数分で調理される安い食事を買うことができるようになった。",
                        grammarAnalysis: {
                            mainVerbs: ["allowed", "were prepared"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These restaurants</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allowed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to buy cheap meals (that [<span class='chunk V2-group'><span class='text'>were prepared</span><span class='tag'>V'</span></span> in minutes])</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これらのレストランは</span> <span class='t-V'>可能にした</span> <span class='t-O'>人々に</span> <span class='t-C'>安い食事を買うことを（that [<span class='t-V2'>調理された</span>数分で]）</span>。",
                            naturalTranslation: "これらのレストランによって、人々は数分で調理される安い食事を買うことができるようになった。",
                            vocabulary: [
                                { word: "allowed people to", meaning: "「人々が〜することを可能にした」" },
                                { word: "cheap meals", meaning: "「安い食事」" },
                                { word: "prepared in minutes", meaning: "「数分で調理された」" }
                            ],
                            grammarNotes: [
                                { phrase: "allowed people to buy", explanation: "<b>allow O to do</b>: 「Oが〜することを可能にする」。" },
                                { phrase: "that were prepared in minutes", explanation: "<b>関係代名詞that + 受動態</b>: 「数分で調理された」。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "While this was convenient, it meant that people started eating more processed foods and spent less time at the dinner table.",
                        translation: "これは便利ではあったが、人々がより多くの加工食品を食べ始め、食卓で過ごす時間が減ることを意味した。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "meant", "started", "spent"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While [<span class='chunk S2-group'><span class='text'>this</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>was convenient</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>meant</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [people started eating more processed foods and spent less time at the dinner table]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(While [<span class='t-S2'>これは</span> <span class='t-V2'>便利だった</span>]けれども)</span>、<span class='t-S'>it</span> <span class='t-V'>意味した</span> <span class='t-O'>that [人々がより多くの加工食品を食べ始め、食卓で過ごす時間が減ったこと]を</span>。",
                            naturalTranslation: "これは便利ではあったが、人々がより多くの加工食品を食べ始め、食卓で過ごす時間が減ることを意味した。",
                            vocabulary: [
                                { word: "While this was convenient", meaning: "「これは便利だったけれども」" },
                                { word: "processed foods", meaning: "「加工食品」" },
                                { word: "the dinner table", meaning: "「食卓」" }
                            ],
                            grammarNotes: [
                                { phrase: "While this was convenient", explanation: "<b>While節</b>: 「〜だけれども」。譲歩を示す。" },
                                { phrase: "it meant that", explanation: "<b>mean + that節</b>: 「〜を意味する」。" },
                                { phrase: "started eating", explanation: "<b>start + -ing</b>: 「〜し始める」。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: The Slow Food Movement
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "Many people were worried about this shift in food culture.",
                        translation: "多くの人々がこの食文化の変化を心配していた。",
                        grammarAnalysis: {
                            mainVerbs: ["were worried"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were worried</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(about this shift in food culture)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>多くの人々が</span> <span class='t-V'>心配していた</span> <span class='t-M'>(この食文化の変化について)</span>。",
                            naturalTranslation: "多くの人々がこの食文化の変化を心配していた。",
                            vocabulary: [
                                { word: "were worried about", meaning: "「〜を心配していた」" },
                                { word: "shift", meaning: "「変化」「移行」" },
                                { word: "food culture", meaning: "「食文化」" }
                            ],
                            grammarNotes: [
                                { phrase: "were worried about", explanation: "<b>be worried about</b>: 「〜を心配している」。受動態的な形容詞表現。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "In Italy, a man named Carlo Petrini believed that the rise of fast food was destroying traditional ways of life.",
                        translation: "イタリアでは、カルロ・ペトリーニという男性が、ファストフードの台頭が伝統的な生活様式を破壊していると信じていた。",
                        grammarAnalysis: {
                            mainVerbs: ["believed", "was destroying"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In Italy)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a man (named Carlo Petrini)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>believed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [the rise of fast food <span class='chunk V2-group'><span class='text'>was destroying</span><span class='tag'>V'</span></span> traditional ways of life]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(イタリアでは)</span>、<span class='t-S'>カルロ・ペトリーニという男性が</span> <span class='t-V'>信じていた</span> <span class='t-O'>that [ファストフードの台頭が <span class='t-V2'>破壊していた</span>伝統的な生活様式を]</span>。",
                            naturalTranslation: "イタリアでは、カルロ・ペトリーニという男性が、ファストフードの台頭が伝統的な生活様式を破壊していると信じていた。",
                            vocabulary: [
                                { word: "named Carlo Petrini", meaning: "「カルロ・ペトリーニという名の」" },
                                { word: "the rise of fast food", meaning: "「ファストフードの台頭」" },
                                { word: "traditional ways of life", meaning: "「伝統的な生活様式」" }
                            ],
                            grammarNotes: [
                                { phrase: "named Carlo Petrini", explanation: "<b>過去分詞句</b>: 「カルロ・ペトリーニと名付けられた」。a manを修飾。" },
                                { phrase: "believed that", explanation: "<b>動詞 + that節</b>: 「〜と信じていた」。" },
                                { phrase: "was destroying", explanation: "<b>過去進行形</b>: 「破壊しつつあった」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "In 1986, he founded the \"Slow Food\" movement to protect local food cultures and traditions.",
                        translation: "1986年、彼は地元の食文化と伝統を守るために「スローフード」運動を設立した。",
                        grammarAnalysis: {
                            mainVerbs: ["founded"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1986)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>founded</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the \"Slow Food\" movement</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to protect local food cultures and traditions)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1986年)</span>、<span class='t-S'>彼は</span> <span class='t-V'>設立した</span> <span class='t-O'>「スローフード」運動を</span> <span class='t-M'>(地元の食文化と伝統を守るために)</span>。",
                            naturalTranslation: "1986年、彼は地元の食文化と伝統を守るために「スローフード」運動を設立した。",
                            vocabulary: [
                                { word: "founded", meaning: "「設立した」" },
                                { word: "the Slow Food movement", meaning: "「スローフード運動」" },
                                { word: "local food cultures", meaning: "「地元の食文化」" }
                            ],
                            grammarNotes: [
                                { phrase: "founded", explanation: "<b>動詞の過去形</b>: 「設立した」。" },
                                { phrase: "to protect", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「守るために」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "The members of this group wanted to encourage people to slow down and enjoy their food.",
                        translation: "このグループのメンバーは、人々にペースを落とし、食事を楽しむよう奨励したかった。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The members (of this group)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to encourage people to slow down and enjoy their food</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>このグループのメンバーは</span> <span class='t-V'>望んでいた</span> <span class='t-O'>人々にペースを落とし食事を楽しむよう奨励することを</span>。",
                            naturalTranslation: "このグループのメンバーは、人々にペースを落とし、食事を楽しむよう奨励したかった。",
                            vocabulary: [
                                { word: "wanted to encourage", meaning: "「奨励したかった」" },
                                { word: "slow down", meaning: "「ペースを落とす」" },
                                { word: "enjoy their food", meaning: "「食事を楽しむ」" }
                            ],
                            grammarNotes: [
                                { phrase: "wanted to encourage", explanation: "<b>want to do</b>: 「〜したい」。" },
                                { phrase: "encourage people to", explanation: "<b>encourage O to do</b>: 「Oに〜するよう奨励する」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "They focused on preserving regional dishes, using high-quality ingredients, and supporting local farmers instead of large food companies.",
                        translation: "彼らは、大手の食品会社ではなく地元の農家を支援し、郷土料理を保存し、高品質な食材を使うことに焦点を当てた。",
                        grammarAnalysis: {
                            mainVerbs: ["focused"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>focused</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on [preserving regional dishes], [using high-quality ingredients], and [supporting local farmers instead of large food companies])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>焦点を当てた</span> <span class='t-M'>([郷土料理を保存すること]、[高品質な食材を使うこと]、[大企業ではなく地元の農家を支援すること]に)</span>。",
                            naturalTranslation: "彼らは、大手の食品会社ではなく地元の農家を支援し、郷土料理を保存し、高品質な食材を使うことに焦点を当てた。",
                            vocabulary: [
                                { word: "focused on", meaning: "「〜に焦点を当てた」" },
                                { word: "preserving regional dishes", meaning: "「郷土料理を保存すること」" },
                                { word: "instead of", meaning: "「〜の代わりに」" }
                            ],
                            grammarNotes: [
                                { phrase: "focused on", explanation: "<b>focus on</b>: 「〜に焦点を当てる」。" },
                                { phrase: "preserving, using, supporting", explanation: "<b>動名詞3つの並列</b>: 3つの活動を列挙。" },
                                { phrase: "instead of large food companies", explanation: "<b>instead of</b>: 「〜の代わりに」。対比を示す。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Carlo Petrini's Vision
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 12,
                        text: "Carlo Petrini was one of the strongest voices in this movement.",
                        translation: "カルロ・ペトリーニは、この運動の中で最も強力な発言者の一人だった。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Carlo Petrini</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>one of the strongest voices (in this movement)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>カルロ・ペトリーニは</span> <span class='t-V'>だった</span> <span class='t-C'>最も強力な発言者の一人（この運動の中で）</span>。",
                            naturalTranslation: "カルロ・ペトリーニは、この運動の中で最も強力な発言者の一人だった。",
                            vocabulary: [
                                { word: "one of the strongest", meaning: "「最も強い〜の一人」" },
                                { word: "voices", meaning: "「発言者」「声」" }
                            ],
                            grammarNotes: [
                                { phrase: "one of the strongest", explanation: "<b>one of the + 最上級 + 複数名詞</b>: 「最も〜な〜の一つ」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "He was not completely against modern convenience, but he criticized how the food industry separated people from the source of their food.",
                        translation: "彼は現代の利便性に完全に反対していたわけではなかったが、食品産業が人々を食の源から切り離している方法を批判した。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "criticized", "separated"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was not completely against</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>modern convenience</span><span class='tag'>O</span></span>, but <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>criticized</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how [the food industry <span class='chunk V2-group'><span class='text'>separated</span><span class='tag'>V'</span></span> people from the source of their food]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>完全には反対ではなかった</span> <span class='t-O'>現代の利便性に</span>、but <span class='t-S'>彼は</span> <span class='t-V'>批判した</span> <span class='t-O'>how [the food industry <span class='t-V2'>切り離した</span>人々を食の源から]</span>。",
                            naturalTranslation: "彼は現代の利便性に完全に反対していたわけではなかったが、食品産業が人々を食の源から切り離している方法を批判した。",
                            vocabulary: [
                                { word: "not completely against", meaning: "「完全には反対ではない」" },
                                { word: "modern convenience", meaning: "「現代の利便性」" },
                                { word: "separated A from B", meaning: "「AをBから切り離した」" }
                            ],
                            grammarNotes: [
                                { phrase: "not completely against", explanation: "<b>部分否定</b>: 「完全には〜ではない」。" },
                                { phrase: "criticized how", explanation: "<b>動詞 + 疑問詞節</b>: 「どのように〜かを批判した」。" },
                                { phrase: "separated A from B", explanation: "<b>separate A from B</b>: 「AをBから切り離す」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "In the fast food system, consumers rarely knew where their ingredients came from or who grew them.",
                        translation: "ファストフードのシステムでは、消費者は食材がどこから来たのか、誰が育てたのかをほとんど知らなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["knew", "came", "grew"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the fast food system)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>consumers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>rarely knew</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>where [their ingredients <span class='chunk V2-group'><span class='text'>came from</span><span class='tag'>V'</span></span>] or who [<span class='chunk V2-group'><span class='text'>grew</span><span class='tag'>V'</span></span> them]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(ファストフードのシステムでは)</span>、<span class='t-S'>消費者は</span> <span class='t-V'>ほとんど知らなかった</span> <span class='t-O'>where [食材が <span class='t-V2'>来た</span>]か、who [<span class='t-V2'>育てた</span>か]を</span>。",
                            naturalTranslation: "ファストフードのシステムでは、消費者は食材がどこから来たのか、誰が育てたのかをほとんど知らなかった。",
                            vocabulary: [
                                { word: "rarely knew", meaning: "「ほとんど知らなかった」" },
                                { word: "where ... came from", meaning: "「どこから来たのか」" },
                                { word: "who grew them", meaning: "「誰がそれらを育てたのか」" }
                            ],
                            grammarNotes: [
                                { phrase: "rarely knew", explanation: "<b>rarely</b>: 「ほとんど〜ない」。頻度の副詞。" },
                                { phrase: "where ... or who ...", explanation: "<b>間接疑問文の並列</b>: 2つの疑問節が目的語。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "Petrini thought that people would appreciate their meals more if they understood the history behind the food, bought directly from producers, and took the time to cook with care.",
                        translation: "ペトリーニは、もし人々が食の背後にある歴史を理解し、生産者から直接購入し、時間をかけて丁寧に料理すれば、食事をもっと大切にするだろうと考えた。",
                        grammarAnalysis: {
                            mainVerbs: ["thought", "would appreciate", "understood", "bought", "took"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Petrini</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>thought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [people would appreciate their meals more (if [they understood..., bought..., and took...])]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ペトリーニは</span> <span class='t-V'>考えた</span> <span class='t-O'>that [人々は食事をもっと大切にするだろう（if [理解し、購入し、時間をかければ]）]</span>。",
                            naturalTranslation: "ペトリーニは、もし人々が食の背後にある歴史を理解し、生産者から直接購入し、時間をかけて丁寧に料理すれば、食事をもっと大切にするだろうと考えた。",
                            vocabulary: [
                                { word: "thought that", meaning: "「〜と考えた」" },
                                { word: "appreciate", meaning: "「大切にする」「感謝する」" },
                                { word: "bought directly from", meaning: "「〜から直接購入する」" },
                                { word: "cook with care", meaning: "「丁寧に料理する」" }
                            ],
                            grammarNotes: [
                                { phrase: "would appreciate", explanation: "<b>仮定法過去</b>: if節に応答する帰結。" },
                                { phrase: "if they understood, bought, and took", explanation: "<b>if節の3つの動詞の並列</b>: 条件を3つ列挙。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Challenges and Legacy
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 16,
                        text: "The Slow Food movement quickly spread from Italy to other countries.",
                        translation: "スローフード運動は急速にイタリアから他の国々へと広がった。",
                        grammarAnalysis: {
                            mainVerbs: ["spread"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The Slow Food movement</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>quickly spread</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(from Italy to other countries)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>スローフード運動は</span> <span class='t-V'>急速に広がった</span> <span class='t-M'>(イタリアから他の国々へ)</span>。",
                            naturalTranslation: "スローフード運動は急速にイタリアから他の国々へと広がった。",
                            vocabulary: [
                                { word: "quickly spread", meaning: "「急速に広がった」" },
                                { word: "from Italy to other countries", meaning: "「イタリアから他の国々へ」" }
                            ],
                            grammarNotes: [
                                { phrase: "spread", explanation: "<b>不規則動詞</b>: spread-spread-spread。原形・過去形・過去分詞が同じ。" },
                                { phrase: "from A to B", explanation: "<b>前置詞句</b>: 「AからBへ」。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "It organized events to teach people about taste and where food comes from.",
                        translation: "それは、味覚や食べ物の由来について人々に教えるイベントを組織した。",
                        grammarAnalysis: {
                            mainVerbs: ["organized", "comes"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>organized</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>events (to teach people about taste and where [food comes from])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>組織した</span> <span class='t-O'>イベントを（味覚やwhere [食べ物が来る]かについて人々に教えるための）</span>。",
                            naturalTranslation: "それは、味覚や食べ物の由来について人々に教えるイベントを組織した。",
                            vocabulary: [
                                { word: "organized events", meaning: "「イベントを組織した」" },
                                { word: "taste", meaning: "「味覚」" },
                                { word: "where food comes from", meaning: "「食べ物がどこから来るか」" }
                            ],
                            grammarNotes: [
                                { phrase: "to teach people about", explanation: "<b>不定詞の形容詞的用法</b>: eventsを修飾。" },
                                { phrase: "where food comes from", explanation: "<b>間接疑問文</b>: 「食べ物がどこから来るか」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "However, in recent years, the movement has faced some challenges.",
                        translation: "しかし、近年、この運動はいくつかの課題に直面している。",
                        grammarAnalysis: {
                            mainVerbs: ["has faced"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(in recent years)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the movement</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has faced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some challenges</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-M'>(近年)</span>、<span class='t-S'>この運動は</span> <span class='t-V'>直面してきた</span> <span class='t-O'>いくつかの課題に</span>。",
                            naturalTranslation: "しかし、近年、この運動はいくつかの課題に直面している。",
                            vocabulary: [
                                { word: "However", meaning: "「しかし」" },
                                { word: "in recent years", meaning: "「近年」" },
                                { word: "has faced challenges", meaning: "「課題に直面してきた」" }
                            ],
                            grammarNotes: [
                                { phrase: "has faced", explanation: "<b>現在完了形</b>: 「直面してきた」。過去から現在への継続。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "Critics argue that \"slow food\" is often too expensive for ordinary families and that cooking fresh meals every day takes too much time.",
                        translation: "批評家たちは、「スローフード」は一般の家庭にとって高価すぎることが多く、毎日新鮮な食事を作るには時間がかかりすぎると主張している。",
                        grammarAnalysis: {
                            mainVerbs: ["argue", "is", "takes"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Critics</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>argue</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [\"slow food\" is often too expensive for ordinary families] and that [cooking fresh meals every day takes too much time]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>批評家たちは</span> <span class='t-V'>主張している</span> <span class='t-O'>that [スローフードは一般の家庭にとって高価すぎる] and that [毎日新鮮な食事を作ることは時間がかかりすぎる]</span>。",
                            naturalTranslation: "批評家たちは、「スローフード」は一般の家庭にとって高価すぎることが多く、毎日新鮮な食事を作るには時間がかかりすぎると主張している。",
                            vocabulary: [
                                { word: "Critics argue that", meaning: "「批評家たちは〜と主張する」" },
                                { word: "too expensive for", meaning: "「〜にとって高価すぎる」" },
                                { word: "ordinary families", meaning: "「一般の家庭」" },
                                { word: "takes too much time", meaning: "「時間がかかりすぎる」" }
                            ],
                            grammarNotes: [
                                { phrase: "argue that ... and that", explanation: "<b>2つのthat節の並列</b>: 2つの主張を述べる。" },
                                { phrase: "too expensive for", explanation: "<b>too + 形容詞 + for</b>: 「〜にとって〜すぎる」。" },
                                { phrase: "cooking fresh meals", explanation: "<b>動名詞句が主語</b>: 「新鮮な食事を作ること」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Despite these issues, the movement has successfully changed how many people think about healthy eating and the environment.",
                        translation: "これらの問題にもかかわらず、この運動は多くの人々が健康的な食事や環境について考える方法を変えることに成功した。",
                        grammarAnalysis: {
                            mainVerbs: ["has changed", "think"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Despite these issues)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the movement</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has successfully changed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how [many people <span class='chunk V2-group'><span class='text'>think</span><span class='tag'>V'</span></span> about healthy eating and the environment]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(これらの問題にもかかわらず)</span>、<span class='t-S'>この運動は</span> <span class='t-V'>うまく変えてきた</span> <span class='t-O'>how [多くの人々が <span class='t-V2'>考える</span>健康的な食事と環境について]</span>。",
                            naturalTranslation: "これらの問題にもかかわらず、この運動は多くの人々が健康的な食事や環境について考える方法を変えることに成功した。",
                            vocabulary: [
                                { word: "Despite these issues", meaning: "「これらの問題にもかかわらず」" },
                                { word: "has successfully changed", meaning: "「うまく変えてきた」" },
                                { word: "healthy eating", meaning: "「健康的な食事」" },
                                { word: "the environment", meaning: "「環境」" }
                            ],
                            grammarNotes: [
                                { phrase: "Despite these issues", explanation: "<b>Despite + 名詞</b>: 「〜にもかかわらず」。譲歩を示す。" },
                                { phrase: "has successfully changed", explanation: "<b>現在完了形 + 副詞</b>: 「うまく変えてきた」。" },
                                { phrase: "how many people think", explanation: "<b>間接疑問文</b>: 「どのように人々が考えるか」= 「人々の考え方」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - How eating habits changed
            {
                id: 1,
                text: "How did eating habits change in the late twentieth century?",
                textTranslation: "20世紀後半に食習慣はどのように変化しましたか？",
                choices: [
                    { id: 1, text: "People started growing their own vegetables in their gardens more often.", translation: "人々は自分の庭で野菜を育てることが多くなった。", isCorrect: false },
                    { id: 2, text: "Families began to spend more time cooking traditional meals together.", translation: "家族は一緒に伝統的な食事を作る時間が増えた。", isCorrect: false },
                    { id: 3, text: "People began eating fast food because it was quick and cheap.", translation: "人々は早くて安かったのでファストフードを食べ始めた。", isCorrect: true, highlight: "fast food because it was quick and cheap" },
                    { id: 4, text: "Restaurants stopped serving processed foods to improve health.", translation: "レストランは健康改善のため加工食品の提供をやめた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落に食習慣の変化が述べられています。「fast food restaurants became very popular」に注目。",
                    targetSentenceId: 4,
                    highlightWord: "fast food restaurants became very popular",
                    highlightWordSentenceId: 4
                },
                keywords: ["eating habits", "change", "late twentieth century"],
                keywordExplanations: {
                    "eating habits": "食習慣。",
                    "change": "変化を探す。",
                    "late twentieth century": "20世紀後半の時期。"
                },
                keywordMatches: [
                    { sentenceId: 4, text: "fast food restaurants became very popular", keyword: "change" },
                    { sentenceId: 5, text: "allowed people to buy cheap meals that were prepared in minutes", keyword: "quick and cheap" }
                ],
                choiceAdvice: "選択肢は20世紀後半の食習慣の変化について問うています。第1段落でファストフードについて述べられている部分を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"fast food restaurants became very popular\" + \"allowed people to buy cheap meals that were prepared in minutes\"" },
                    { type: "arrow", content: "「ファストフードが人気に」+「安くて数分で調理」= 「早くて安いファストフード」" },
                    { type: "text", content: "選択肢3: \"People began eating fast food because it was quick and cheap.\"" },
                    { type: "conclusion", content: "prepared in minutes = quick, cheap meals = cheap → 正解: 3" }
                ]
            },
            // Q2: 第2段落 - Main goal of Slow Food movement
            {
                id: 2,
                text: "What was the main goal of the Slow Food movement started by Carlo Petrini?",
                textTranslation: "カルロ・ペトリーニが始めたスローフード運動の主な目標は何でしたか？",
                choices: [
                    { id: 1, text: "To help large food companies sell their products to other countries.", translation: "大手食品会社が他国に製品を販売するのを助けること。", isCorrect: false },
                    { id: 2, text: "To protect traditional food cultures and encourage people to enjoy eating.", translation: "伝統的な食文化を守り、人々が食事を楽しむよう奨励すること。", isCorrect: true, highlight: "protect traditional food cultures and encourage" },
                    { id: 3, text: "To invent new technologies that could cook food faster than before.", translation: "以前より速く料理できる新しい技術を発明すること。", isCorrect: false },
                    { id: 4, text: "To open more fast food restaurants in Italy and across Europe.", translation: "イタリアやヨーロッパ全土でより多くのファストフードレストランを開くこと。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落でスローフード運動の目的が述べられています。「to protect」「to encourage」に注目。",
                    targetSentenceId: 9,
                    highlightWord: "to protect local food cultures and traditions",
                    highlightWordSentenceId: 9
                },
                keywords: ["main goal", "Slow Food movement", "Carlo Petrini"],
                keywordExplanations: {
                    "main goal": "主な目標・目的。",
                    "Slow Food movement": "スローフード運動。",
                    "Carlo Petrini": "創設者の名前。"
                },
                keywordMatches: [
                    { sentenceId: 9, text: "to protect local food cultures and traditions", keyword: "main goal" },
                    { sentenceId: 10, text: "encourage people to slow down and enjoy their food", keyword: "main goal" }
                ],
                choiceAdvice: "選択肢は運動の主な目的について問うています。第2段落で「to protect」と「to encourage」の目的表現を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"founded the 'Slow Food' movement to protect local food cultures and traditions\" + \"wanted to encourage people to slow down and enjoy their food\"" },
                    { type: "arrow", content: "「地元の食文化と伝統を守るため」+「人々に食事を楽しむよう奨励」" },
                    { type: "text", content: "選択肢2: \"To protect traditional food cultures and encourage people to enjoy eating.\"" },
                    { type: "conclusion", content: "protect + encourage = 正解: 2" }
                ]
            },
            // Q3: 第3段落 - Carlo Petrini's criticism
            {
                id: 3,
                text: "Carlo Petrini believed that the modern food industry",
                textTranslation: "カルロ・ペトリーニは、現代の食品産業が",
                choices: [
                    { id: 1, text: "helped people connect with the farmers who grew their vegetables.", translation: "野菜を育てた農家と人々をつなげるのに役立った。", isCorrect: false },
                    { id: 2, text: "made it difficult for people to know where their food came from.", translation: "人々が食べ物がどこから来たのか知ることを困難にした。", isCorrect: true, highlight: "difficult for people to know where their food came from" },
                    { id: 3, text: "improved the quality of ingredients used in everyday cooking.", translation: "日常料理に使われる食材の品質を向上させた。", isCorrect: false },
                    { id: 4, text: "should be supported because it provided jobs for many people.", translation: "多くの人に仕事を提供したので支援されるべきだ。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落でペトリーニの食品産業への批判が述べられています。「separated people from the source」「rarely knew where」に注目。",
                    targetSentenceId: 14,
                    highlightWord: "consumers rarely knew where their ingredients came from",
                    highlightWordSentenceId: 14
                },
                keywords: ["Carlo Petrini believed", "modern food industry"],
                keywordExplanations: {
                    "Carlo Petrini believed": "ペトリーニの考え。",
                    "modern food industry": "現代の食品産業。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "the food industry separated people from the source of their food", keyword: "modern food industry" },
                    { sentenceId: 14, text: "consumers rarely knew where their ingredients came from", keyword: "believed" }
                ],
                choiceAdvice: "選択肢はペトリーニの食品産業に対する考えを問うています。第3段落で「separated」「rarely knew」の表現を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"the food industry separated people from the source of their food\" + \"consumers rarely knew where their ingredients came from\"" },
                    { type: "arrow", content: "「食品産業が人々を食の源から切り離した」+「消費者は由来をほとんど知らなかった」= 「どこから来たか知ることを困難にした」" },
                    { type: "text", content: "選択肢2: \"made it difficult for people to know where their food came from.\"" },
                    { type: "conclusion", content: "separated + rarely knew = made it difficult to know → 正解: 2" }
                ]
            },
            // Q4: 第4段落 - Criticism of Slow Food
            {
                id: 4,
                text: "Why do some people criticize the Slow Food movement today?",
                textTranslation: "なぜ今日、一部の人々はスローフード運動を批判しているのですか？",
                choices: [
                    { id: 1, text: "The food recommended by the movement costs too much money.", translation: "運動が推奨する食品はお金がかかりすぎる。", isCorrect: true, highlight: "costs too much money" },
                    { id: 2, text: "The movement forces people to become farmers against their will.", translation: "運動は人々を意志に反して農家にさせる。", isCorrect: false },
                    { id: 3, text: "The dishes are too complicated for professional chefs to cook.", translation: "料理がプロのシェフでも作るのが複雑すぎる。", isCorrect: false },
                    { id: 4, text: "Eating fresh food is considered unhealthy by modern doctors.", translation: "新鮮な食べ物を食べることは現代の医師に不健康だと考えられている。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で批評家の意見が述べられています。「too expensive」「takes too much time」に注目。",
                    targetSentenceId: 19,
                    highlightWord: "slow food is often too expensive for ordinary families",
                    highlightWordSentenceId: 19
                },
                keywords: ["criticize", "Slow Food movement", "today"],
                keywordExplanations: {
                    "criticize": "批判する。批判の内容を探す。",
                    "Slow Food movement": "スローフード運動。",
                    "today": "現在の批判。"
                },
                keywordMatches: [
                    { sentenceId: 19, text: "slow food is often too expensive for ordinary families", keyword: "criticize" }
                ],
                choiceAdvice: "選択肢は現在の批判の理由を問うています。第4段落で「too expensive」という批判を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"Critics argue that 'slow food' is often too expensive for ordinary families\"" },
                    { type: "arrow", content: "「スローフードは一般の家庭にとって高価すぎる」= 「お金がかかりすぎる」" },
                    { type: "text", content: "選択肢1: \"The food recommended by the movement costs too much money.\"" },
                    { type: "conclusion", content: "too expensive = costs too much money → 正解: 1" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次のうち正しい記述はどれですか？",
                choices: [
                    { id: 1, text: "The Slow Food movement began in the United States and moved to Italy.", translation: "スローフード運動はアメリカで始まり、イタリアに移った。", isCorrect: false },
                    { id: 2, text: "Carlo Petrini wanted people to eat alone to save time.", translation: "カルロ・ペトリーニは時間を節約するために人々に一人で食べてほしかった。", isCorrect: false },
                    { id: 3, text: "Technology had little effect on how people ate in the twentieth century.", translation: "技術は20世紀の人々の食べ方にほとんど影響を与えなかった。", isCorrect: false },
                    { id: 4, text: "The movement has influenced people's views on healthy eating and the environment.", translation: "この運動は健康的な食事と環境に対する人々の考え方に影響を与えた。", isCorrect: true, highlight: "influenced people's views on healthy eating and the environment" }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落の結論部分で運動の成功が述べられています。",
                    targetSentenceId: 20,
                    highlightWord: "has successfully changed how many people think about healthy eating and the environment",
                    highlightWordSentenceId: 20
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい記述を探す。",
                    "statements": "各選択肢が本文と一致するか確認。"
                },
                keywordMatches: [
                    { sentenceId: 20, text: "the movement has successfully changed how many people think about healthy eating and the environment", keyword: "true" }
                ],
                choiceAdvice: "各選択肢が本文と一致するか確認します。特に第4段落の結論部分に注目。",
                logic: [
                    { type: "text", content: "本文: \"the movement has successfully changed how many people think about healthy eating and the environment.\"" },
                    { type: "arrow", content: "「運動は人々が健康的な食事と環境について考える方法を変えた」= 「考え方に影響を与えた」" },
                    { type: "text", content: "選択肢4: \"The movement has influenced people's views on healthy eating and the environment.\"" },
                    { type: "conclusion", content: "changed how people think = influenced people's views → 正解: 4" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Slow Food Movement - 講師用要約",
            intro: "本文は、食の産業化（ファストフード）への対抗運動としてイタリアで始まった「スローフード運動」についての説明文です。過去問の「アーツ・アンド・クラフツ運動（産業革命への対抗）」と同じ論理構造で展開されています。",
            points: [
                { label: "1. 食習慣の変化（第1段落）", text: "20世紀後半、技術の進歩により生活が忙しくなり、家庭での食事から便利で安いファストフードへと食習慣が変化した。これにより加工食品の摂取が増え、家族の団欒が減った。" },
                { label: "2. スローフード運動の設立（第2段落）", text: "この変化を懸念し、イタリアのカルロ・ペトリーニが1986年に「スローフード運動」を創設。地域の伝統料理を守り、地元の農家を支援することを目指した。" },
                { label: "3. ペトリーニの考え（第3段落）", text: "ペトリーニは、現代の食品産業が消費者と生産者を切り離していると批判した。彼は、消費者が食材の背景を知り、生産者から直接買うことで、食事の価値を再認識できると考えた。" },
                { label: "4. 課題と成功（第4段落）", text: "運動は世界に広がったが、「高価すぎる」「時間がかかりすぎる」という批判もある。しかし、健康や環境に対する人々の意識を変えるという点では成功を収めている。" }
            ]
        }
    },
    // 2級 オリジナル問題6: Keeping Maps Accurate
    {
        id: "grade-2-original-maps-accurate",
        grade: "2級",
        title: "Keeping Maps Accurate",
        subTitle: "問題6",
        genre: "テクノロジー / 地図",
        similarProblems: {
            exam: "2023年度 第3回",
            title: "Keeping Up-to-Date"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Digital+Maps",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: The Changing World and Maps
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Digital maps have become essential tools used by people all over the world to navigate their daily lives.",
                        translation: "デジタル地図は、世界中の人々が日常生活で移動するために使用する不可欠なツールとなっています。",
                        grammarAnalysis: {
                            mainVerbs: ["have become"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Digital maps</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have become</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>essential tools (used by people all over the world to navigate their daily lives)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>デジタル地図は</span> <span class='t-V'>なっている</span> <span class='t-C'>不可欠なツールに（世界中の人々が日常生活で移動するために使用する）</span>。",
                            naturalTranslation: "デジタル地図は、世界中の人々が日常生活で移動するために使用する不可欠なツールとなっています。",
                            vocabulary: [
                                { word: "have become", meaning: "「〜になっている」" },
                                { word: "essential tools", meaning: "「不可欠なツール」" },
                                { word: "navigate", meaning: "「移動する」「ナビゲートする」" }
                            ],
                            grammarNotes: [
                                { phrase: "have become", explanation: "<b>現在完了形</b>: 「〜になっている」。状態の継続。" },
                                { phrase: "used by people", explanation: "<b>過去分詞句</b>: toolsを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "Just like living languages, the physical environment is in a state of constant flux.",
                        translation: "生きた言語と全く同じように、物理的な環境も絶えず変化し続けています。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Just like living languages)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the physical environment</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>in a state of constant flux</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(生きた言語と同様に)</span>、<span class='t-S'>物理的な環境は</span> <span class='t-V'>ある</span> <span class='t-C'>絶えず変化する状態に</span>。",
                            naturalTranslation: "生きた言語と全く同じように、物理的な環境も絶えず変化し続けています。",
                            vocabulary: [
                                { word: "Just like", meaning: "「〜と全く同じように」" },
                                { word: "physical environment", meaning: "「物理的な環境」" },
                                { word: "constant flux", meaning: "「絶え間ない変化」" }
                            ],
                            grammarNotes: [
                                { phrase: "Just like living languages", explanation: "<b>比較表現</b>: 「〜と同様に」。類似性を示す。" },
                                { phrase: "in a state of constant flux", explanation: "<b>前置詞句</b>: 「絶え間ない変化の状態に」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "New highways are constructed, local businesses open their doors or shut down forever, and traffic rules are altered to improve safety.",
                        translation: "新しい幹線道路が建設され、地元の店が開店したり永久に閉店したりし、安全性を向上させるために交通ルールが変更されます。",
                        grammarAnalysis: {
                            mainVerbs: ["are constructed", "open", "shut down", "are altered"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>New highways</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are constructed</span><span class='tag'>V</span></span>, <span class='chunk S-group'><span class='text'>local businesses</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>open their doors or shut down forever</span><span class='tag'>V</span></span>, and <span class='chunk S-group'><span class='text'>traffic rules</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are altered</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to improve safety)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>新しい幹線道路が</span> <span class='t-V'>建設される</span>、<span class='t-S'>地元の店は</span> <span class='t-V'>開店したり閉店したりする</span>、and <span class='t-S'>交通ルールが</span> <span class='t-V'>変更される</span> <span class='t-M'>(安全性を向上させるために)</span>。",
                            naturalTranslation: "新しい幹線道路が建設され、地元の店が開店したり永久に閉店したりし、安全性を向上させるために交通ルールが変更されます。",
                            vocabulary: [
                                { word: "highways", meaning: "「幹線道路」" },
                                { word: "are constructed", meaning: "「建設される」" },
                                { word: "shut down forever", meaning: "「永久に閉店する」" },
                                { word: "are altered", meaning: "「変更される」" }
                            ],
                            grammarNotes: [
                                { phrase: "3つのSVの並列", explanation: "<b>等位接続詞and</b>: 3つの事象を列挙。" },
                                { phrase: "to improve safety", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「向上させるために」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "Consequently, the technology companies that develop these digital maps face a difficult challenge: they must update their databases continuously.",
                        translation: "その結果、これらのデジタル地図を開発するテクノロジー企業は困難な課題に直面しています。彼らはデータベースを継続的に更新しなければなりません。",
                        grammarAnalysis: {
                            mainVerbs: ["face", "must update"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Consequently)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the technology companies (that develop these digital maps)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>face</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a difficult challenge</span><span class='tag'>O</span></span>: <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>must update</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their databases continuously</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(その結果)</span>、<span class='t-S'>テクノロジー企業は（これらのデジタル地図を開発する）</span> <span class='t-V'>直面している</span> <span class='t-O'>困難な課題に</span>: <span class='t-S'>彼らは</span> <span class='t-V'>更新しなければならない</span> <span class='t-O'>データベースを継続的に</span>。",
                            naturalTranslation: "その結果、これらのデジタル地図を開発するテクノロジー企業は困難な課題に直面しています。彼らはデータベースを継続的に更新しなければなりません。",
                            vocabulary: [
                                { word: "Consequently", meaning: "「その結果」" },
                                { word: "face a challenge", meaning: "「課題に直面する」" },
                                { word: "continuously", meaning: "「継続的に」" }
                            ],
                            grammarNotes: [
                                { phrase: "Consequently", explanation: "<b>接続副詞</b>: 「その結果」。因果関係を示す。" },
                                { phrase: "that develop these digital maps", explanation: "<b>関係代名詞that</b>: companiesを修飾。" },
                                { phrase: "コロン(:)", explanation: "<b>same : 説明</b>: challengeの内容を具体的に説明。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "It is vital for them to ensure that the maps displayed on smartphone screens reflect reality with high precision.",
                        translation: "スマートフォンの画面に表示される地図が現実を高精度に反映していることを保証することは、彼らにとって極めて重要です。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "reflect"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is vital</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for them)</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>to ensure that [the maps (displayed on smartphone screens) reflect reality with high precision]</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>It</span> <span class='t-V'>is vital</span> <span class='t-M'>(彼らにとって)</span> <span class='t-C'>to ensure that [地図が（スマートフォンの画面に表示される）現実を高精度に反映する]</span>。",
                            naturalTranslation: "スマートフォンの画面に表示される地図が現実を高精度に反映していることを保証することは、彼らにとって極めて重要です。",
                            vocabulary: [
                                { word: "It is vital for ... to", meaning: "「〜にとって〜することが極めて重要」" },
                                { word: "ensure that", meaning: "「〜を確保する」" },
                                { word: "reflect reality", meaning: "「現実を反映する」" },
                                { word: "with high precision", meaning: "「高精度で」" }
                            ],
                            grammarNotes: [
                                { phrase: "It is vital for them to", explanation: "<b>形式主語It + to不定詞</b>: 「〜することが重要だ」。" },
                                { phrase: "displayed on smartphone screens", explanation: "<b>過去分詞句</b>: mapsを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "If they fail to do this, users might arrive late for important meetings or delivery trucks might get lost, wasting both time and fuel.",
                        translation: "もしこれを怠れば、ユーザーは重要な会議に遅刻したり、配送トラックが道に迷ったりして、時間と燃料の両方を無駄にしてしまうかもしれません。",
                        grammarAnalysis: {
                            mainVerbs: ["fail", "might arrive", "might get"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(If [they fail to do this])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>users</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might arrive late</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for important meetings)</span><span class='tag'>M</span></span> or <span class='chunk S-group'><span class='text'>delivery trucks</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might get lost</span><span class='tag'>V</span></span>, <span class='chunk M-group'><span class='text'>(wasting both time and fuel)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(If [彼らがこれを怠れば])</span>、<span class='t-S'>ユーザーは</span> <span class='t-V'>遅刻するかもしれない</span> <span class='t-M'>(重要な会議に)</span> or <span class='t-S'>配送トラックは</span> <span class='t-V'>道に迷うかもしれない</span>、<span class='t-M'>(時間と燃料を無駄にしながら)</span>。",
                            naturalTranslation: "もしこれを怠れば、ユーザーは重要な会議に遅刻したり、配送トラックが道に迷ったりして、時間と燃料の両方を無駄にしてしまうかもしれません。",
                            vocabulary: [
                                { word: "fail to do", meaning: "「〜し損ねる」「〜を怠る」" },
                                { word: "might arrive late", meaning: "「遅刻するかもしれない」" },
                                { word: "get lost", meaning: "「道に迷う」" },
                                { word: "wasting", meaning: "「無駄にしながら」" }
                            ],
                            grammarNotes: [
                                { phrase: "If they fail to do this", explanation: "<b>条件節</b>: 「もし〜すれば」。" },
                                { phrase: "might arrive", explanation: "<b>助動詞might</b>: 「〜かもしれない」。可能性を示す。" },
                                { phrase: "wasting both time and fuel", explanation: "<b>分詞構文（結果）</b>: 「その結果〜を無駄にする」。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: Technology and Collective Intelligence
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "For a significant change to be registered on a digital map, a vast amount of accurate information must first be gathered.",
                        translation: "重要な変更がデジタル地図に登録されるためには、まず膨大な量の正確な情報が集められなければなりません。",
                        grammarAnalysis: {
                            mainVerbs: ["must be gathered"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For a significant change to be registered on a digital map)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a vast amount of accurate information</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>must first be gathered</span><span class='tag'>V</span></span>.",
                            translationHtml: "<span class='t-M'>(重要な変更がデジタル地図に登録されるためには)</span>、<span class='t-S'>膨大な量の正確な情報が</span> <span class='t-V'>まず集められなければならない</span>。",
                            naturalTranslation: "重要な変更がデジタル地図に登録されるためには、まず膨大な量の正確な情報が集められなければなりません。",
                            vocabulary: [
                                { word: "For ... to be registered", meaning: "「〜が登録されるためには」" },
                                { word: "a vast amount of", meaning: "「膨大な量の」" },
                                { word: "must be gathered", meaning: "「集められなければならない」" }
                            ],
                            grammarNotes: [
                                { phrase: "For ... to be registered", explanation: "<b>for + O + to不定詞</b>: 「Oが〜するために」。目的を示す。" },
                                { phrase: "must be gathered", explanation: "<b>助動詞 + 受動態</b>: 「集められなければならない」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "Mapmakers employ advanced technology, such as high-resolution satellite imagery and fleets of cars equipped with 360-degree cameras, to record every detail of the streets.",
                        translation: "地図製作者は、高解像度の衛星画像や360度カメラを搭載した車両群などの高度な技術を採用して、通りのあらゆる詳細を記録します。",
                        grammarAnalysis: {
                            mainVerbs: ["employ"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Mapmakers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>employ</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>advanced technology, (such as high-resolution satellite imagery and fleets of cars equipped with 360-degree cameras)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(to record every detail of the streets)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>地図製作者は</span> <span class='t-V'>採用する</span> <span class='t-O'>高度な技術を（高解像度の衛星画像や360度カメラ搭載の車両群など）</span>、<span class='t-M'>(通りのあらゆる詳細を記録するために)</span>。",
                            naturalTranslation: "地図製作者は、高解像度の衛星画像や360度カメラを搭載した車両群などの高度な技術を採用して、通りのあらゆる詳細を記録します。",
                            vocabulary: [
                                { word: "employ", meaning: "「採用する」「用いる」" },
                                { word: "high-resolution satellite imagery", meaning: "「高解像度の衛星画像」" },
                                { word: "fleets of cars", meaning: "「車両群」" },
                                { word: "equipped with", meaning: "「〜を搭載した」" }
                            ],
                            grammarNotes: [
                                { phrase: "such as", explanation: "<b>例示</b>: 「〜のような」。" },
                                { phrase: "equipped with 360-degree cameras", explanation: "<b>過去分詞句</b>: carsを修飾。" },
                                { phrase: "to record every detail", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「記録するために」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "In addition to these professional methods, they rely heavily on real-time data sent by ordinary people who use the navigation apps.",
                        translation: "これらの専門的な方法に加えて、彼らはナビゲーションアプリを使用する一般の人々から送信されるリアルタイムデータに大きく依存しています。",
                        grammarAnalysis: {
                            mainVerbs: ["rely", "use"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In addition to these professional methods)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>rely heavily</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on real-time data (sent by ordinary people [who <span class='chunk V2-group'><span class='text'>use</span><span class='tag'>V'</span></span> the navigation apps]))</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(これらの専門的方法に加えて)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>大きく依存している</span> <span class='t-M'>(リアルタイムデータに（一般の人々から送信される[who <span class='t-V2'>使う</span>ナビゲーションアプリを]）)</span>。",
                            naturalTranslation: "これらの専門的な方法に加えて、彼らはナビゲーションアプリを使用する一般の人々から送信されるリアルタイムデータに大きく依存しています。",
                            vocabulary: [
                                { word: "In addition to", meaning: "「〜に加えて」" },
                                { word: "rely heavily on", meaning: "「〜に大きく依存する」" },
                                { word: "real-time data", meaning: "「リアルタイムデータ」" },
                                { word: "ordinary people", meaning: "「一般の人々」" }
                            ],
                            grammarNotes: [
                                { phrase: "In addition to", explanation: "<b>前置詞句</b>: 「〜に加えて」。追加を示す。" },
                                { phrase: "sent by ordinary people", explanation: "<b>過去分詞句</b>: dataを修飾。" },
                                { phrase: "who use the navigation apps", explanation: "<b>関係代名詞who</b>: peopleを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "Modern computers are used to process this huge flood of incoming data much faster than any human could.",
                        translation: "現代のコンピュータは、人間には不可能な速さで、この洪水のように押し寄せる膨大なデータを処理するために使われています。",
                        grammarAnalysis: {
                            mainVerbs: ["are used", "could"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Modern computers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are used</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to process this huge flood of incoming data much faster than [any human could])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>現代のコンピュータは</span> <span class='t-V'>使われている</span> <span class='t-M'>(この膨大なデータの洪水を処理するために、[いかなる人間よりも]はるかに速く)</span>。",
                            naturalTranslation: "現代のコンピュータは、人間には不可能な速さで、この洪水のように押し寄せる膨大なデータを処理するために使われています。",
                            vocabulary: [
                                { word: "are used to process", meaning: "「処理するために使われている」" },
                                { word: "huge flood of", meaning: "「洪水のように押し寄せる〜」" },
                                { word: "incoming data", meaning: "「入ってくるデータ」" },
                                { word: "faster than any human could", meaning: "「人間には不可能な速さで」" }
                            ],
                            grammarNotes: [
                                { phrase: "are used to process", explanation: "<b>be used to do</b>: 「〜するために使われる」。" },
                                { phrase: "faster than any human could", explanation: "<b>比較級 + than + 節</b>: 「どんな人間よりも速く」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "However, speed is not the only goal; the next crucial step is to verify the information.",
                        translation: "しかし、スピードだけが目標ではありません。次の重要なステップは情報を検証することです。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>speed</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is not</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the only goal</span><span class='tag'>C</span></span>; <span class='chunk S-group'><span class='text'>the next crucial step</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to verify the information</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>スピードは</span> <span class='t-V'>ではない</span> <span class='t-C'>唯一の目標</span>; <span class='t-S'>次の重要なステップは</span> <span class='t-V'>である</span> <span class='t-C'>情報を検証すること</span>。",
                            naturalTranslation: "しかし、スピードだけが目標ではありません。次の重要なステップは情報を検証することです。",
                            vocabulary: [
                                { word: "the only goal", meaning: "「唯一の目標」" },
                                { word: "the next crucial step", meaning: "「次の重要なステップ」" },
                                { word: "verify", meaning: "「検証する」" }
                            ],
                            grammarNotes: [
                                { phrase: "is not the only goal", explanation: "<b>the only</b>: 「唯一の」。否定と組み合わせて「〜だけではない」。" },
                                { phrase: "セミコロン(;)", explanation: "<b>関連する2文を結ぶ</b>: セミコロンで緊密に関連する内容を結ぶ。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "For instance, if hundreds of users suddenly report a new one-way street in the same hour, there is a very high probability that the map needs to be updated immediately.",
                        translation: "例えば、何百人ものユーザーが同じ時間帯に突然新しい一方通行の道を報告した場合、地図を即座に更新する必要がある可能性が非常に高いです。",
                        grammarAnalysis: {
                            mainVerbs: ["report", "is", "needs"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For instance)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(if [hundreds of users suddenly report a new one-way street in the same hour])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>there</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a very high probability (that [the map needs to be updated immediately])</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(例えば)</span>、<span class='t-M'>(if [何百人ものユーザーが同時に新しい一方通行を報告すれば])</span>、<span class='t-S'>there</span> <span class='t-V'>is</span> <span class='t-C'>非常に高い可能性（that [地図が即座に更新される必要がある]）</span>。",
                            naturalTranslation: "例えば、何百人ものユーザーが同じ時間帯に突然新しい一方通行の道を報告した場合、地図を即座に更新する必要がある可能性が非常に高いです。",
                            vocabulary: [
                                { word: "For instance", meaning: "「例えば」" },
                                { word: "hundreds of users", meaning: "「何百人ものユーザー」" },
                                { word: "one-way street", meaning: "「一方通行の道」" },
                                { word: "a very high probability", meaning: "「非常に高い可能性」" }
                            ],
                            grammarNotes: [
                                { phrase: "if hundreds of users suddenly report", explanation: "<b>条件節</b>: 「もし〜が報告すれば」。" },
                                { phrase: "there is a probability that", explanation: "<b>there is + 名詞 + that節</b>: 「〜という可能性がある」。" },
                                { phrase: "needs to be updated", explanation: "<b>need to be + 過去分詞</b>: 「〜される必要がある」。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: New Roles for Words
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "In some instances, completely new features or locations are added to the map interface, but in other cases, familiar words and symbols acquire entirely new definitions.",
                        translation: "場合によっては、全く新しい機能や場所が地図のインターフェースに追加されることもありますが、またある場合には、馴染みのある言葉や記号が全く新しい定義を獲得することもあります。",
                        grammarAnalysis: {
                            mainVerbs: ["are added", "acquire"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In some instances)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>completely new features or locations</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are added</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to the map interface)</span><span class='tag'>M</span></span>, but <span class='chunk M-group'><span class='text'>(in other cases)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>familiar words and symbols</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>acquire</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>entirely new definitions</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(場合によっては)</span>、<span class='t-S'>全く新しい機能や場所が</span> <span class='t-V'>追加される</span> <span class='t-M'>(地図のインターフェースに)</span>、but <span class='t-M'>(またある場合には)</span>、<span class='t-S'>馴染みのある言葉や記号が</span> <span class='t-V'>獲得する</span> <span class='t-O'>全く新しい定義を</span>。",
                            naturalTranslation: "場合によっては、全く新しい機能や場所が地図のインターフェースに追加されることもありますが、またある場合には、馴染みのある言葉や記号が全く新しい定義を獲得することもあります。",
                            vocabulary: [
                                { word: "In some instances", meaning: "「場合によっては」" },
                                { word: "map interface", meaning: "「地図のインターフェース」" },
                                { word: "acquire", meaning: "「獲得する」" },
                                { word: "entirely new definitions", meaning: "「全く新しい定義」" }
                            ],
                            grammarNotes: [
                                { phrase: "In some instances ... in other cases", explanation: "<b>対比表現</b>: 「ある場合には〜、別の場合には〜」。" },
                                { phrase: "are added", explanation: "<b>受動態</b>: 「追加される」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "A clear example of this is the word \"traffic\".",
                        translation: "これの明確な例が「トラフィック（交通）」という言葉です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>A clear example (of this)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the word \"traffic\"</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これの明確な例は</span> <span class='t-V'>である</span> <span class='t-C'>「トラフィック」という言葉</span>。",
                            naturalTranslation: "これの明確な例が「トラフィック（交通）」という言葉です。",
                            vocabulary: [
                                { word: "A clear example of", meaning: "「〜の明確な例」" },
                                { word: "traffic", meaning: "「交通」「トラフィック」" }
                            ],
                            grammarNotes: [
                                { phrase: "A clear example of this is", explanation: "<b>SVC構文</b>: 「〜は…である」。例を導入。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "In the past, this word simply referred to the physical vehicles moving along a road.",
                        translation: "過去には、この言葉は単に道路に沿って移動する物理的な車両を指していました。",
                        grammarAnalysis: {
                            mainVerbs: ["referred"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the past)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this word</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>simply referred</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to the physical vehicles [moving along a road])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(過去には)</span>、<span class='t-S'>この言葉は</span> <span class='t-V'>単に指していた</span> <span class='t-M'>(物理的な車両を[道路に沿って移動する])</span>。",
                            naturalTranslation: "過去には、この言葉は単に道路に沿って移動する物理的な車両を指していました。",
                            vocabulary: [
                                { word: "In the past", meaning: "「過去には」" },
                                { word: "simply referred to", meaning: "「単に〜を指していた」" },
                                { word: "physical vehicles", meaning: "「物理的な車両」" }
                            ],
                            grammarNotes: [
                                { phrase: "referred to", explanation: "<b>refer to</b>: 「〜を指す」「〜を意味する」。" },
                                { phrase: "moving along a road", explanation: "<b>現在分詞句</b>: vehiclesを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "In the 21st century, within the context of digital mapping, \"traffic\" is often used to refer to the real-time red and orange lines that indicate congestion levels.",
                        translation: "21世紀のデジタル地図の文脈では、「トラフィック」は、混雑レベルを示すリアルタイムの赤やオレンジの線を指すためによく使われます。",
                        grammarAnalysis: {
                            mainVerbs: ["is used", "indicate"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the 21st century)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(within the context of digital mapping)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>\"traffic\"</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is often used to refer to</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the real-time red and orange lines (that [<span class='chunk V2-group'><span class='text'>indicate</span><span class='tag'>V'</span></span> congestion levels])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(21世紀には)</span>、<span class='t-M'>(デジタル地図の文脈では)</span>、<span class='t-S'>「トラフィック」は</span> <span class='t-V'>よく〜を指すために使われる</span> <span class='t-O'>リアルタイムの赤やオレンジの線（that [<span class='t-V2'>示す</span>混雑レベルを]）</span>。",
                            naturalTranslation: "21世紀のデジタル地図の文脈では、「トラフィック」は、混雑レベルを示すリアルタイムの赤やオレンジの線を指すためによく使われます。",
                            vocabulary: [
                                { word: "within the context of", meaning: "「〜の文脈では」" },
                                { word: "is often used to refer to", meaning: "「〜を指すためによく使われる」" },
                                { word: "real-time", meaning: "「リアルタイムの」" },
                                { word: "congestion levels", meaning: "「混雑レベル」" }
                            ],
                            grammarNotes: [
                                { phrase: "is often used to refer to", explanation: "<b>be used to do</b>: 「〜するために使われる」。" },
                                { phrase: "that indicate congestion levels", explanation: "<b>関係代名詞that</b>: linesを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "These colored lines show drivers exactly how fast or slow cars are moving at that moment.",
                        translation: "これらの色付きの線は、その瞬間に車がどれくらいの速さで、あるいは遅く動いているかをドライバーに正確に示します。",
                        grammarAnalysis: {
                            mainVerbs: ["show", "are moving"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These colored lines</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>show</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>drivers</span><span class='tag'>O</span></span> <span class='chunk O-group'><span class='text'>exactly how fast or slow [cars <span class='chunk V2-group'><span class='text'>are moving</span><span class='tag'>V'</span></span> at that moment]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これらの色付きの線は</span> <span class='t-V'>示す</span> <span class='t-O'>ドライバーに</span> <span class='t-O'>正確にhow fast or slow [車が <span class='t-V2'>動いているか</span>その瞬間に]</span>。",
                            naturalTranslation: "これらの色付きの線は、その瞬間に車がどれくらいの速さで、あるいは遅く動いているかをドライバーに正確に示します。",
                            vocabulary: [
                                { word: "colored lines", meaning: "「色付きの線」" },
                                { word: "show ... exactly", meaning: "「〜に正確に示す」" },
                                { word: "how fast or slow", meaning: "「どれくらい速いか遅いか」" }
                            ],
                            grammarNotes: [
                                { phrase: "show drivers how", explanation: "<b>SVOO構文</b>: 「人に〜を示す」。" },
                                { phrase: "how fast or slow cars are moving", explanation: "<b>間接疑問文</b>: 「車がどれくらい速く/遅く動いているか」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "Over a short period, this visual interpretation of \"traffic\" became so essential that it is now a standard, expected feature on almost all navigation systems.",
                        translation: "短期間のうちに、「トラフィック」のこの視覚的な解釈は非常に不可欠なものとなり、今ではほぼすべてのナビゲーションシステムにおいて標準的で期待される機能となっています。",
                        grammarAnalysis: {
                            mainVerbs: ["became", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Over a short period)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this visual interpretation of \"traffic\"</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>so essential that [it <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> now a standard, expected feature on almost all navigation systems]</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(短期間のうちに)</span>、<span class='t-S'>「トラフィック」のこの視覚的解釈は</span> <span class='t-V'>なった</span> <span class='t-C'>非常に不可欠なものに that [it <span class='t-V2'>は</span>今ほぼすべてのナビシステムの標準的で期待される機能]</span>。",
                            naturalTranslation: "短期間のうちに、「トラフィック」のこの視覚的な解釈は非常に不可欠なものとなり、今ではほぼすべてのナビゲーションシステムにおいて標準的で期待される機能となっています。",
                            vocabulary: [
                                { word: "Over a short period", meaning: "「短期間のうちに」" },
                                { word: "visual interpretation", meaning: "「視覚的な解釈」" },
                                { word: "so essential that", meaning: "「非常に不可欠なので〜」" },
                                { word: "a standard, expected feature", meaning: "「標準的で期待される機能」" }
                            ],
                            grammarNotes: [
                                { phrase: "so essential that", explanation: "<b>so ... that構文</b>: 「とても〜なので…」。結果を示す。" },
                                { phrase: "became", explanation: "<b>become + C</b>: 「〜になる」。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Careful Final Decisions
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 19,
                        text: "Despite the help of advanced technology, map editors still consider changes very carefully before making them permanent.",
                        translation: "高度な技術の助けがあるにもかかわらず、地図の編集者は変更を恒久的なものにする前に、依然として非常に慎重に検討を行います。",
                        grammarAnalysis: {
                            mainVerbs: ["consider"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Despite the help of advanced technology)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>map editors</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>still consider</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>changes</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>very carefully (before making them permanent)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(高度な技術の助けにもかかわらず)</span>、<span class='t-S'>地図の編集者は</span> <span class='t-V'>依然として検討する</span> <span class='t-O'>変更を</span> <span class='t-M'>非常に慎重に（恒久的にする前に）</span>。",
                            naturalTranslation: "高度な技術の助けがあるにもかかわらず、地図の編集者は変更を恒久的なものにする前に、依然として非常に慎重に検討を行います。",
                            vocabulary: [
                                { word: "Despite the help of", meaning: "「〜の助けにもかかわらず」" },
                                { word: "map editors", meaning: "「地図の編集者」" },
                                { word: "making them permanent", meaning: "「それらを恒久的にする」" }
                            ],
                            grammarNotes: [
                                { phrase: "Despite the help of", explanation: "<b>Despite + 名詞</b>: 「〜にもかかわらず」。譲歩を示す。" },
                                { phrase: "before making them permanent", explanation: "<b>before + -ing</b>: 「〜する前に」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Every suggestion to add a new road, rename a landmark, or change a speed limit is reviewed by both automated computer systems and human geography experts.",
                        translation: "新しい道路の追加、ランドマークの名称変更、あるいは制限速度の変更に関するあらゆる提案は、自動化されたコンピュータシステムと人間の地理専門家の両方によって審査されます。",
                        grammarAnalysis: {
                            mainVerbs: ["is reviewed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Every suggestion (to add a new road, rename a landmark, or change a speed limit)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is reviewed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(by both automated computer systems and human geography experts)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>あらゆる提案は（道路を追加、ランドマークの名称変更、制限速度の変更に関する）</span> <span class='t-V'>審査される</span> <span class='t-M'>(自動化されたシステムと人間の地理専門家の両方によって)</span>。",
                            naturalTranslation: "新しい道路の追加、ランドマークの名称変更、あるいは制限速度の変更に関するあらゆる提案は、自動化されたコンピュータシステムと人間の地理専門家の両方によって審査されます。",
                            vocabulary: [
                                { word: "Every suggestion to", meaning: "「〜に関するあらゆる提案」" },
                                { word: "rename a landmark", meaning: "「ランドマークの名称を変更する」" },
                                { word: "is reviewed by", meaning: "「〜によって審査される」" },
                                { word: "automated computer systems", meaning: "「自動化されたコンピュータシステム」" }
                            ],
                            grammarNotes: [
                                { phrase: "to add, rename, or change", explanation: "<b>不定詞の並列</b>: suggestionを修飾する3つの不定詞。" },
                                { phrase: "both A and B", explanation: "<b>両方〜と</b>: 「AとBの両方」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "The goal is to avoid publishing errors that could confuse drivers.",
                        translation: "その目的は、ドライバーを混乱させかねない誤った情報の公開を避けることです。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "could confuse"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The goal</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to avoid publishing errors (that [<span class='chunk V2-group'><span class='text'>could confuse</span><span class='tag'>V'</span></span> drivers])</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>目的は</span> <span class='t-V'>である</span> <span class='t-C'>誤りの公開を避けること（that [<span class='t-V2'>混乱させうる</span>ドライバーを]）</span>。",
                            naturalTranslation: "その目的は、ドライバーを混乱させかねない誤った情報の公開を避けることです。",
                            vocabulary: [
                                { word: "The goal is to", meaning: "「目的は〜することである」" },
                                { word: "avoid publishing", meaning: "「公開することを避ける」" },
                                { word: "could confuse", meaning: "「混乱させうる」" }
                            ],
                            grammarNotes: [
                                { phrase: "to avoid publishing", explanation: "<b>avoid + -ing</b>: 「〜することを避ける」。" },
                                { phrase: "that could confuse drivers", explanation: "<b>関係代名詞that + 助動詞</b>: 「ドライバーを混乱させうる」。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "If the data is clear, consistent, and verified by multiple sources, the update is released to users worldwide.",
                        translation: "データが明確で、一貫性があり、複数の情報源によって検証されれば、更新情報は世界中のユーザーに公開されます。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "is released"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(If [the data is clear, consistent, and verified by multiple sources])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the update</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is released</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to users worldwide)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(If [データが明確で、一貫性があり、複数の情報源によって検証されれば])</span>、<span class='t-S'>更新は</span> <span class='t-V'>公開される</span> <span class='t-M'>(世界中のユーザーに)</span>。",
                            naturalTranslation: "データが明確で、一貫性があり、複数の情報源によって検証されれば、更新情報は世界中のユーザーに公開されます。",
                            vocabulary: [
                                { word: "clear, consistent, and verified", meaning: "「明確で、一貫性があり、検証された」" },
                                { word: "multiple sources", meaning: "「複数の情報源」" },
                                { word: "is released to", meaning: "「〜に公開される」" }
                            ],
                            grammarNotes: [
                                { phrase: "clear, consistent, and verified", explanation: "<b>形容詞の並列</b>: 3つの形容詞がdataを修飾。" },
                                { phrase: "verified by multiple sources", explanation: "<b>受動態</b>: 「複数の情報源によって検証された」。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "Sometimes, however, the experts decide that a user report is not reliable enough to act on immediately.",
                        translation: "しかし時には、専門家があるユーザー報告について、即座に行動を起こすには信頼性が不十分だと判断することもあります。",
                        grammarAnalysis: {
                            mainVerbs: ["decide", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Sometimes)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(however)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the experts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>decide</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [a user report <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> not reliable enough to act on immediately]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(時には)</span>、<span class='t-M'>(しかし)</span>、<span class='t-S'>専門家は</span> <span class='t-V'>判断する</span> <span class='t-O'>that [ユーザー報告が <span class='t-V2'>である</span>即座に行動するには信頼性が不十分]</span>。",
                            naturalTranslation: "しかし時には、専門家があるユーザー報告について、即座に行動を起こすには信頼性が不十分だと判断することもあります。",
                            vocabulary: [
                                { word: "Sometimes, however", meaning: "「しかし時には」" },
                                { word: "decide that", meaning: "「〜と判断する」" },
                                { word: "not reliable enough to", meaning: "「〜するには信頼性が不十分」" },
                                { word: "act on immediately", meaning: "「即座に行動を起こす」" }
                            ],
                            grammarNotes: [
                                { phrase: "decide that", explanation: "<b>動詞 + that節</b>: 「〜と判断する」。" },
                                { phrase: "not ... enough to", explanation: "<b>not + 形容詞 + enough to do</b>: 「〜するには…が不十分」。" }
                            ]
                        }
                    },
                    {
                        id: 24,
                        text: "In such cases, the suggestion is not discarded but is instead saved in a special database to be cross-checked again when more evidence becomes available later.",
                        translation: "そのような場合、その提案は破棄されるのではなく、後でより多くの証拠が得られたときに再度クロスチェック（照合確認）できるように、特別なデータベースに保存されます。",
                        grammarAnalysis: {
                            mainVerbs: ["is discarded", "is saved", "becomes"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In such cases)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the suggestion</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is not discarded but is instead saved</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in a special database) (to be cross-checked again [when more evidence becomes available later])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(そのような場合)</span>、<span class='t-S'>提案は</span> <span class='t-V'>破棄されず、代わりに保存される</span> <span class='t-M'>(特別なデータベースに)（再度照合確認されるために[when より多くの証拠が後で得られたとき]）</span>。",
                            naturalTranslation: "そのような場合、その提案は破棄されるのではなく、後でより多くの証拠が得られたときに再度クロスチェック（照合確認）できるように、特別なデータベースに保存されます。",
                            vocabulary: [
                                { word: "In such cases", meaning: "「そのような場合」" },
                                { word: "is not discarded but is saved", meaning: "「破棄されず保存される」" },
                                { word: "to be cross-checked", meaning: "「照合確認されるために」" },
                                { word: "when more evidence becomes available", meaning: "「より多くの証拠が得られたとき」" }
                            ],
                            grammarNotes: [
                                { phrase: "not ... but instead", explanation: "<b>not A but B</b>: 「AではなくB」。対比を示す。" },
                                { phrase: "to be cross-checked", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「照合確認されるために」。" },
                                { phrase: "when more evidence becomes available", explanation: "<b>when節</b>: 「〜のとき」。時を示す。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Reason for map updates
            {
                id: 1,
                text: "What is one reason why companies must constantly update digital maps?",
                textTranslation: "企業がデジタル地図を常に更新しなければならない理由は何ですか？",
                choices: [
                    { id: 1, text: "People are using smartphones less often than before.", translation: "人々は以前よりもスマートフォンを使用する頻度が減っている。", isCorrect: false },
                    { id: 2, text: "The physical world, such as roads and businesses, changes frequently.", translation: "道路や店舗などの物理的な世界が頻繁に変化する。", isCorrect: true, highlight: "roads and businesses, changes frequently" },
                    { id: 3, text: "Digital maps are becoming too expensive for people to use.", translation: "デジタル地図は人々が使うには高価すぎるようになっている。", isCorrect: false },
                    { id: 4, text: "Old maps are no longer compatible with modern computers.", translation: "古い地図は現代のコンピュータと互換性がなくなった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で物理的な世界の変化について述べられています。「constant flux」「New highways」「local businesses」に注目。",
                    targetSentenceId: 3,
                    highlightWord: "New highways are constructed, local businesses open their doors or shut down forever",
                    highlightWordSentenceId: 3
                },
                keywords: ["reason", "constantly update", "digital maps"],
                keywordExplanations: {
                    "reason": "理由を探す。",
                    "constantly update": "常に更新する。",
                    "digital maps": "デジタル地図。"
                },
                keywordMatches: [
                    { sentenceId: 2, text: "the physical environment is in a state of constant flux", keyword: "reason" },
                    { sentenceId: 3, text: "New highways are constructed, local businesses open their doors or shut down forever", keyword: "changes frequently" }
                ],
                choiceAdvice: "選択肢は地図更新の理由を問うています。第1段落で物理的世界の変化について述べている部分を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"the physical environment is in a state of constant flux\" + \"New highways are constructed, local businesses open their doors or shut down forever\"" },
                    { type: "arrow", content: "「物理的環境は絶えず変化」+「道路が建設、店が開店/閉店」= 「物理的世界が頻繁に変化」" },
                    { type: "text", content: "選択肢2: \"The physical world, such as roads and businesses, changes frequently.\"" },
                    { type: "conclusion", content: "constant flux = changes frequently → 正解: 2" }
                ]
            },
            // Q2: 第2段落 - How mapmakers confirm changes
            {
                id: 2,
                text: "How do mapmakers confirm if a change should be made?",
                textTranslation: "地図製作者は変更を行うべきかどうかをどのように確認しますか？",
                choices: [
                    { id: 1, text: "They only use information provided by government officials.", translation: "政府関係者から提供された情報のみを使用する。", isCorrect: false },
                    { id: 2, text: "They wait until satellite images are at least ten years old.", translation: "衛星画像が少なくとも10年経過するまで待つ。", isCorrect: false },
                    { id: 3, text: "They look for agreement among reports from many users and other sources.", translation: "多くのユーザーや他の情報源からの報告の一致を探す。", isCorrect: true, highlight: "agreement among reports from many users" },
                    { id: 4, text: "They ask car manufacturers to send them new cameras.", translation: "自動車メーカーに新しいカメラを送るよう依頼する。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落で情報の検証方法が述べられています。「hundreds of users suddenly report」「very high probability」に注目。",
                    targetSentenceId: 12,
                    highlightWord: "if hundreds of users suddenly report a new one-way street in the same hour",
                    highlightWordSentenceId: 12
                },
                keywords: ["confirm", "change", "mapmakers"],
                keywordExplanations: {
                    "confirm": "確認する方法。",
                    "change": "変更を確認。",
                    "mapmakers": "地図製作者。"
                },
                keywordMatches: [
                    { sentenceId: 11, text: "the next crucial step is to verify the information", keyword: "confirm" },
                    { sentenceId: 12, text: "if hundreds of users suddenly report a new one-way street", keyword: "agreement among reports" }
                ],
                choiceAdvice: "選択肢は確認方法を問うています。第2段落で「何百人ものユーザーが同時に報告すれば」という検証方法を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"if hundreds of users suddenly report a new one-way street in the same hour, there is a very high probability that the map needs to be updated\"" },
                    { type: "arrow", content: "「何百人ものユーザーが同時に報告すれば」= 「多くのユーザーからの報告の一致を探す」" },
                    { type: "text", content: "選択肢3: \"They look for agreement among reports from many users and other sources.\"" },
                    { type: "conclusion", content: "hundreds of users report = agreement among reports → 正解: 3" }
                ]
            },
            // Q3: 第3段落 - Meaning of "traffic"
            {
                id: 3,
                text: "The word \"traffic\" is mentioned to show that",
                textTranslation: "「トラフィック」という言葉は、〜ことを示すために言及されています",
                choices: [
                    { id: 1, text: "the number of cars on the road has decreased recently.", translation: "道路上の車の数が最近減少した。", isCorrect: false },
                    { id: 2, text: "words can gain new visual representations and functions in digital tools.", translation: "言葉はデジタルツールにおいて新しい視覚的表現と機能を獲得できる。", isCorrect: true, highlight: "new visual representations and functions in digital tools" },
                    { id: 3, text: "mapmakers prefer to use old definitions to avoid confusion.", translation: "地図製作者は混乱を避けるために古い定義を使うことを好む。", isCorrect: false },
                    { id: 4, text: "it is the only word that has not changed its meaning.", translation: "それは意味が変わっていない唯一の言葉である。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で「traffic」の意味が現代でどう変化したかが述べられています。「real-time red and orange lines」「visual interpretation」に注目。",
                    targetSentenceId: 16,
                    highlightWord: "traffic is often used to refer to the real-time red and orange lines that indicate congestion levels",
                    highlightWordSentenceId: 16
                },
                keywords: ["traffic", "mentioned to show"],
                keywordExplanations: {
                    "traffic": "トラフィックという言葉。",
                    "mentioned to show": "言及される目的。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "familiar words and symbols acquire entirely new definitions", keyword: "show" },
                    { sentenceId: 16, text: "traffic is often used to refer to the real-time red and orange lines", keyword: "visual representations" },
                    { sentenceId: 18, text: "this visual interpretation of traffic became so essential", keyword: "visual representations" }
                ],
                choiceAdvice: "選択肢はtrafficが言及された目的を問うています。第3段落で言葉の新しい視覚的機能について述べている部分を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"traffic is often used to refer to the real-time red and orange lines\" + \"this visual interpretation of 'traffic' became so essential\"" },
                    { type: "arrow", content: "「トラフィックはリアルタイムの色付きの線を指す」+「視覚的解釈が不可欠に」= 「新しい視覚的表現と機能を獲得」" },
                    { type: "text", content: "選択肢2: \"words can gain new visual representations and functions in digital tools.\"" },
                    { type: "conclusion", content: "real-time lines = visual representations → 正解: 2" }
                ]
            },
            // Q4: 第4段落 - Uncertain changes
            {
                id: 4,
                text: "What happens if map experts are not sure about a suggested change?",
                textTranslation: "地図の専門家が提案された変更について確信が持てない場合、何が起こりますか？",
                choices: [
                    { id: 1, text: "They immediately delete the information to save space.", translation: "スペースを節約するために情報を即座に削除する。", isCorrect: false },
                    { id: 2, text: "They make the change anyway and wait for complaints.", translation: "とにかく変更を行い、苦情を待つ。", isCorrect: false },
                    { id: 3, text: "They store the information to review it later when they have more proof.", translation: "より多くの証拠が得られたときに後で確認するために情報を保存する。", isCorrect: true, highlight: "store the information to review it later" },
                    { id: 4, text: "They ask the person who sent the report to fix the road themselves.", translation: "報告を送った人に道路を自分で直すよう依頼する。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落の最後の文で確信が持てない場合の対応が述べられています。「is not discarded but is instead saved」に注目。",
                    targetSentenceId: 24,
                    highlightWord: "the suggestion is not discarded but is instead saved in a special database to be cross-checked again when more evidence becomes available later",
                    highlightWordSentenceId: 24
                },
                keywords: ["not sure", "suggested change", "happens"],
                keywordExplanations: {
                    "not sure": "確信が持てない場合。",
                    "suggested change": "提案された変更。",
                    "happens": "何が起こるか。"
                },
                keywordMatches: [
                    { sentenceId: 23, text: "the experts decide that a user report is not reliable enough to act on immediately", keyword: "not sure" },
                    { sentenceId: 24, text: "the suggestion is not discarded but is instead saved in a special database", keyword: "store the information" }
                ],
                choiceAdvice: "選択肢は確信が持てない場合の対応を問うています。第4段落で「破棄されず保存される」という対応を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"In such cases, the suggestion is not discarded but is instead saved in a special database to be cross-checked again when more evidence becomes available later.\"" },
                    { type: "arrow", content: "「破棄されず、後でより多くの証拠が得られたときに照合確認するためにデータベースに保存」" },
                    { type: "text", content: "選択肢3: \"They store the information to review it later when they have more proof.\"" },
                    { type: "conclusion", content: "saved in a database + when more evidence = store to review later → 正解: 3" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true about the map-making process?",
                textTranslation: "地図製作プロセスについて正しい記述はどれですか？",
                choices: [
                    { id: 1, text: "It relies entirely on computers and does not involve human checking.", translation: "コンピュータのみに依存し、人間によるチェックは含まれない。", isCorrect: false },
                    { id: 2, text: "It is a process that stops once a map is published.", translation: "地図が公開されると停止するプロセスである。", isCorrect: false },
                    { id: 3, text: "It involves collecting data, verifying it, and carefully reviewing changes.", translation: "データを収集し、検証し、変更を慎重に審査することを含む。", isCorrect: true, highlight: "collecting data, verifying it, and carefully reviewing changes" },
                    { id: 4, text: "It is much simpler today because the world changes less often.", translation: "世界があまり変化しなくなったため、今日ではずっと簡単になっている。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "本文全体を通して、地図製作のプロセスが述べられています。第2段落の「情報収集・検証」と第4段落の「慎重な審査」に注目。",
                    targetSentenceId: 20,
                    highlightWord: "Every suggestion ... is reviewed by both automated computer systems and human geography experts",
                    highlightWordSentenceId: 20
                },
                keywords: ["true", "map-making process"],
                keywordExplanations: {
                    "true": "正しい記述を探す。",
                    "map-making process": "地図製作プロセス。"
                },
                keywordMatches: [
                    { sentenceId: 7, text: "a vast amount of accurate information must first be gathered", keyword: "collecting data" },
                    { sentenceId: 11, text: "the next crucial step is to verify the information", keyword: "verifying it" },
                    { sentenceId: 20, text: "Every suggestion ... is reviewed by both automated computer systems and human geography experts", keyword: "carefully reviewing" }
                ],
                choiceAdvice: "各選択肢が本文と一致するか確認します。本文全体のプロセス（収集→検証→審査）を把握しましょう。",
                logic: [
                    { type: "text", content: "本文: 第2段落「情報収集（must first be gathered）」→「検証（verify the information）」→ 第4段落「慎重な審査（is reviewed by both ... systems and human experts）」" },
                    { type: "arrow", content: "「データ収集→検証→慎重な審査」というプロセスが全体を通して描かれている" },
                    { type: "text", content: "選択肢3: \"It involves collecting data, verifying it, and carefully reviewing changes.\"" },
                    { type: "conclusion", content: "gathering + verifying + reviewing = 正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Keeping Maps Accurate - 講師用要約",
            intro: "デジタル地図の正確性を維持するための複雑な更新プロセスに関する説明文です。過去問の「Keeping Up-to-Date」（2023年第3回）と同様のテーマで、技術と人間の協働による情報管理を扱っています。",
            points: [
                { label: "1. 変化する世界と地図（第1段落）", text: "物理的な世界は常に変化しているため（道路建設、店舗の開閉、交通規則の変更）、地図会社はユーザーが迷わないよう、高精度な更新を続ける義務があります。" },
                { label: "2. テクノロジーと集合知（第2段落）", text: "衛星画像や調査車両に加え、一般ユーザーからの大量の報告が重要な情報源です。何百人ものユーザーが同じ報告をすれば、高い確率で更新が必要と判断されます。速度だけでなく検証が重要です。" },
                { label: "3. 言葉の新しい役割（第3段落）", text: "「Traffic（交通）」という言葉を例に挙げ、デジタル時代において言葉が新しい視覚的機能（渋滞を示すリアルタイムの色付き線）を指すように進化・定着したことを説明しています。" },
                { label: "4. 慎重な最終判断（第4段落）", text: "誤情報の掲載を防ぐため、変更案はコンピュータシステムと人間の地理専門家が慎重に審査します。確証が持てない情報は破棄せずデータベースに保存し、後の判断材料とします。" }
            ]
        }
    },
    // 2級 オリジナル問題7: Rachel Carson
    {
        id: "grade-2-original-rachel-carson",
        grade: "2級",
        title: "Rachel Carson",
        subTitle: "問題7",
        genre: "伝記 / 環境",
        similarProblems: {
            exam: "2023年度 第3回",
            title: "Marie Curie"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Rachel+Carson",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Her Impact and Achievement
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Rachel Carson is often called the mother of the modern environmental movement.",
                        translation: "レイチェル・カーソンは、現代の環境保護運動の母としばしば呼ばれます。",
                        grammarAnalysis: {
                            mainVerbs: ["is called"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Rachel Carson</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is often called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the mother of the modern environmental movement</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>レイチェル・カーソンは</span> <span class='t-V'>しばしば呼ばれる</span> <span class='t-C'>現代の環境保護運動の母と</span>。",
                            naturalTranslation: "レイチェル・カーソンは、現代の環境保護運動の母としばしば呼ばれます。",
                            vocabulary: [
                                { word: "is often called", meaning: "「しばしば〜と呼ばれる」" },
                                { word: "environmental movement", meaning: "「環境保護運動」" }
                            ],
                            grammarNotes: [
                                { phrase: "is often called", explanation: "<b>受動態</b>: 「〜と呼ばれる」。" },
                                { phrase: "the mother of", explanation: "<b>比喩的表現</b>: 「〜の母」。創始者を意味する。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "In 1962, she published a book called Silent Spring, which changed how people thought about the natural world.",
                        translation: "1962年、彼女は『沈黙の春』という本を出版し、人々の自然界に対する考え方を変えました。",
                        grammarAnalysis: {
                            mainVerbs: ["published", "changed"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1962)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>published</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a book (called Silent Spring)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(which [<span class='chunk V2-group'><span class='text'>changed</span><span class='tag'>V'</span></span> how people thought about the natural world])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1962年に)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>出版した</span> <span class='t-O'>本を（『沈黙の春』と呼ばれる）</span>、<span class='t-M'>(which [<span class='t-V2'>変えた</span>人々が自然界について考える方法を])</span>。",
                            naturalTranslation: "1962年、彼女は『沈黙の春』という本を出版し、人々の自然界に対する考え方を変えました。",
                            vocabulary: [
                                { word: "published", meaning: "「出版した」" },
                                { word: "called Silent Spring", meaning: "「『沈黙の春』と呼ばれる」" },
                                { word: "changed how people thought", meaning: "「人々の考え方を変えた」" }
                            ],
                            grammarNotes: [
                                { phrase: "called Silent Spring", explanation: "<b>過去分詞句</b>: bookを修飾。" },
                                { phrase: "which changed", explanation: "<b>関係代名詞which（非制限用法）</b>: 前の文全体を受けて「そしてそれは〜を変えた」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Before this book, most people believed that humans could control nature with chemicals.",
                        translation: "この本が出る前、ほとんどの人々は人間が化学物質で自然をコントロールできると信じていました。",
                        grammarAnalysis: {
                            mainVerbs: ["believed", "could control"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Before this book)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>most people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>believed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [humans <span class='chunk V2-group'><span class='text'>could control</span><span class='tag'>V'</span></span> nature with chemicals]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(この本の前)</span>、<span class='t-S'>ほとんどの人々は</span> <span class='t-V'>信じていた</span> <span class='t-O'>that [人間が <span class='t-V2'>コントロールできる</span>自然を化学物質で]</span>。",
                            naturalTranslation: "この本が出る前、ほとんどの人々は人間が化学物質で自然をコントロールできると信じていました。",
                            vocabulary: [
                                { word: "Before this book", meaning: "「この本が出る前」" },
                                { word: "believed that", meaning: "「〜と信じていた」" },
                                { word: "control nature with chemicals", meaning: "「化学物質で自然をコントロールする」" }
                            ],
                            grammarNotes: [
                                { phrase: "believed that", explanation: "<b>動詞 + that節</b>: 「〜と信じる」。" },
                                { phrase: "could control", explanation: "<b>助動詞could</b>: 過去形。可能性を示す。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "Carson showed that using strong chemicals to kill insects was also hurting birds, fish, and humans.",
                        translation: "カーソンは、昆虫を殺すために強力な化学物質を使うことは、鳥や魚、そして人間をも傷つけていることを示しました。",
                        grammarAnalysis: {
                            mainVerbs: ["showed", "was hurting"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Carson</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>showed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [using strong chemicals to kill insects <span class='chunk V2-group'><span class='text'>was also hurting</span><span class='tag'>V'</span></span> birds, fish, and humans]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>カーソンは</span> <span class='t-V'>示した</span> <span class='t-O'>that [強力な化学物質を昆虫を殺すために使うこと <span class='t-V2'>も傷つけていた</span>鳥や魚や人間を]</span>。",
                            naturalTranslation: "カーソンは、昆虫を殺すために強力な化学物質を使うことは、鳥や魚、そして人間をも傷つけていることを示しました。",
                            vocabulary: [
                                { word: "showed that", meaning: "「〜ということを示した」" },
                                { word: "using strong chemicals", meaning: "「強力な化学物質を使うこと」" },
                                { word: "was also hurting", meaning: "「〜も傷つけていた」" }
                            ],
                            grammarNotes: [
                                { phrase: "using strong chemicals to kill insects", explanation: "<b>動名詞主語</b>: 「〜することは」。that節内の主語。" },
                                { phrase: "was also hurting", explanation: "<b>過去進行形</b>: 継続的な害を強調。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "Her writing led to a ban on dangerous pesticides like DDT and helped start the U.S. Environmental Protection Agency.",
                        translation: "彼女の著作は、DDTのような危険な殺虫剤の禁止につながり、米国環境保護庁の設立を助けました。",
                        grammarAnalysis: {
                            mainVerbs: ["led to", "helped start"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Her writing</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>led to</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a ban (on dangerous pesticides like DDT)</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>helped start</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the U.S. Environmental Protection Agency</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼女の著作は</span> <span class='t-V'>につながった</span> <span class='t-O'>禁止に（DDTのような危険な殺虫剤の）</span> and <span class='t-V'>設立を助けた</span> <span class='t-O'>米国環境保護庁の</span>。",
                            naturalTranslation: "彼女の著作は、DDTのような危険な殺虫剤の禁止につながり、米国環境保護庁の設立を助けました。",
                            vocabulary: [
                                { word: "led to", meaning: "「〜につながった」" },
                                { word: "a ban on", meaning: "「〜の禁止」" },
                                { word: "pesticides", meaning: "「殺虫剤」" },
                                { word: "helped start", meaning: "「設立を助けた」" }
                            ],
                            grammarNotes: [
                                { phrase: "led to", explanation: "<b>lead to + 名詞</b>: 「〜につながる」。結果を示す。" },
                                { phrase: "helped start", explanation: "<b>help + 動詞原形</b>: 「〜するのを助ける」。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: Her Upbringing and Education
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "Rachel Carson was born in Pennsylvania in 1907.",
                        translation: "レイチェル・カーソンは1907年にペンシルベニア州で生まれました。",
                        grammarAnalysis: {
                            mainVerbs: ["was born"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Rachel Carson</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was born</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in Pennsylvania) (in 1907)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>レイチェル・カーソンは</span> <span class='t-V'>生まれた</span> <span class='t-M'>(ペンシルベニア州で) (1907年に)</span>。",
                            naturalTranslation: "レイチェル・カーソンは1907年にペンシルベニア州で生まれました。",
                            vocabulary: [
                                { word: "was born", meaning: "「生まれた」" },
                                { word: "Pennsylvania", meaning: "「ペンシルベニア州」" }
                            ],
                            grammarNotes: [
                                { phrase: "was born", explanation: "<b>be born</b>: 「生まれる」。受動態の形。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "She grew up on a small farm where she learned to love nature and animals.",
                        translation: "彼女は小さな農場で育ち、そこで自然や動物を愛することを学びました。",
                        grammarAnalysis: {
                            mainVerbs: ["grew up", "learned"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>grew up</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on a small farm) (where [she <span class='chunk V2-group'><span class='text'>learned</span><span class='tag'>V'</span></span> to love nature and animals])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>育った</span> <span class='t-M'>(小さな農場で) (where [彼女は <span class='t-V2'>学んだ</span>自然や動物を愛することを])</span>。",
                            naturalTranslation: "彼女は小さな農場で育ち、そこで自然や動物を愛することを学びました。",
                            vocabulary: [
                                { word: "grew up", meaning: "「育った」" },
                                { word: "learned to love", meaning: "「愛することを学んだ」" }
                            ],
                            grammarNotes: [
                                { phrase: "grew up", explanation: "<b>grow up</b>: 「成長する」「育つ」。" },
                                { phrase: "where she learned", explanation: "<b>関係副詞where</b>: farmを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "She was a talented writer from a young age and originally planned to study English at college.",
                        translation: "彼女は若い頃から才能ある書き手であり、もともとは大学で英語学を学ぶつもりでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "planned"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a talented writer (from a young age)</span><span class='tag'>C</span></span> and <span class='chunk V-group'><span class='text'>originally planned</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to study English at college</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>だった</span> <span class='t-C'>才能ある書き手（若い頃から）</span> and <span class='t-V'>もともと計画していた</span> <span class='t-O'>大学で英語を学ぶことを</span>。",
                            naturalTranslation: "彼女は若い頃から才能ある書き手であり、もともとは大学で英語学を学ぶつもりでした。",
                            vocabulary: [
                                { word: "a talented writer", meaning: "「才能ある書き手」" },
                                { word: "from a young age", meaning: "「若い頃から」" },
                                { word: "originally planned to", meaning: "「もともと〜するつもりだった」" }
                            ],
                            grammarNotes: [
                                { phrase: "originally planned to", explanation: "<b>plan to do</b>: 「〜する予定である」。originallyで元々を強調。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "However, she changed her major to biology because she was fascinated by science.",
                        translation: "しかし、科学に魅了されたため、彼女は専攻を生物学に変更しました。",
                        grammarAnalysis: {
                            mainVerbs: ["changed", "was fascinated"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>changed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her major</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to biology) (because [she <span class='chunk V2-group'><span class='text'>was fascinated</span><span class='tag'>V'</span></span> by science])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>変えた</span> <span class='t-O'>専攻を</span> <span class='t-M'>(生物学に) (because [彼女は <span class='t-V2'>魅了されていた</span>科学に])</span>。",
                            naturalTranslation: "しかし、科学に魅了されたため、彼女は専攻を生物学に変更しました。",
                            vocabulary: [
                                { word: "changed her major to", meaning: "「専攻を〜に変えた」" },
                                { word: "was fascinated by", meaning: "「〜に魅了されていた」" }
                            ],
                            grammarNotes: [
                                { phrase: "because she was fascinated by", explanation: "<b>理由節</b>: 「〜だったので」。" },
                                { phrase: "was fascinated by", explanation: "<b>受動態</b>: 「〜に魅了されていた」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "Although she wanted to get a doctorate degree, her family had financial difficulties during the Great Depression.",
                        translation: "彼女は博士号を取得したいと思っていましたが、大恐慌の間、彼女の家族は経済的な困難を抱えていました。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted", "had"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Although [she <span class='chunk V2-group'><span class='text'>wanted</span><span class='tag'>V'</span></span> to get a doctorate degree])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>her family</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>financial difficulties</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(during the Great Depression)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(Although [彼女は <span class='t-V2'>望んでいた</span>博士号を取ることを])</span>、<span class='t-S'>彼女の家族は</span> <span class='t-V'>抱えていた</span> <span class='t-O'>経済的困難を</span> <span class='t-M'>(大恐慌の間)</span>。",
                            naturalTranslation: "彼女は博士号を取得したいと思っていましたが、大恐慌の間、彼女の家族は経済的な困難を抱えていました。",
                            vocabulary: [
                                { word: "Although", meaning: "「〜だけれども」" },
                                { word: "doctorate degree", meaning: "「博士号」" },
                                { word: "financial difficulties", meaning: "「経済的困難」" },
                                { word: "the Great Depression", meaning: "「大恐慌」" }
                            ],
                            grammarNotes: [
                                { phrase: "Although she wanted", explanation: "<b>譲歩節</b>: 「〜にもかかわらず」。" },
                                { phrase: "had financial difficulties", explanation: "<b>have + 名詞</b>: 「〜を抱える」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "As a result, she had to stop her studies and find a job to support her parents.",
                        translation: "その結果、彼女は勉強を中断し、両親を養うために仕事を見つけなければなりませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["had to stop", "find"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(As a result)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had to stop</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her studies</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>(had to) find</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a job</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to support her parents)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その結果)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>中断しなければならなかった</span> <span class='t-O'>勉強を</span> and <span class='t-V'>見つけなければならなかった</span> <span class='t-O'>仕事を</span> <span class='t-M'>(両親を養うために)</span>。",
                            naturalTranslation: "その結果、彼女は勉強を中断し、両親を養うために仕事を見つけなければなりませんでした。",
                            vocabulary: [
                                { word: "As a result", meaning: "「その結果」" },
                                { word: "had to stop", meaning: "「〜を中断しなければならなかった」" },
                                { word: "to support her parents", meaning: "「両親を養うために」" }
                            ],
                            grammarNotes: [
                                { phrase: "As a result", explanation: "<b>結果を示す表現</b>: 「その結果」。前文の因果関係を示す。" },
                                { phrase: "to support her parents", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「〜するために」。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Her Career and Personal Struggles
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 12,
                        text: "Carson found work at the U.S. Bureau of Fisheries, where she wrote radio scripts and articles about the ocean.",
                        translation: "カーソンは米国漁業局で仕事を見つけ、そこで海に関するラジオの台本や記事を書きました。",
                        grammarAnalysis: {
                            mainVerbs: ["found", "wrote"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Carson</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>found</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>work</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at the U.S. Bureau of Fisheries)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(where [she <span class='chunk V2-group'><span class='text'>wrote</span><span class='tag'>V'</span></span> radio scripts and articles about the ocean])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>カーソンは</span> <span class='t-V'>見つけた</span> <span class='t-O'>仕事を</span> <span class='t-M'>(米国漁業局で)</span>、<span class='t-M'>(where [彼女は <span class='t-V2'>書いた</span>ラジオの台本や海に関する記事を])</span>。",
                            naturalTranslation: "カーソンは米国漁業局で仕事を見つけ、そこで海に関するラジオの台本や記事を書きました。",
                            vocabulary: [
                                { word: "found work at", meaning: "「〜で仕事を見つけた」" },
                                { word: "Bureau of Fisheries", meaning: "「漁業局」" },
                                { word: "radio scripts", meaning: "「ラジオの台本」" }
                            ],
                            grammarNotes: [
                                { phrase: "where she wrote", explanation: "<b>関係副詞where</b>: 「そこで〜した」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "She was very good at explaining complex science in a way that ordinary people could understand.",
                        translation: "彼女は複雑な科学を一般の人々が理解できる方法で説明するのが非常に上手でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "could understand"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was very good</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(at explaining complex science in a way (that [ordinary people <span class='chunk V2-group'><span class='text'>could understand</span><span class='tag'>V'</span></span>]))</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>非常に上手だった</span> <span class='t-M'>(複雑な科学を説明することに、方法で（that [一般の人々が <span class='t-V2'>理解できる</span>]）)</span>。",
                            naturalTranslation: "彼女は複雑な科学を一般の人々が理解できる方法で説明するのが非常に上手でした。",
                            vocabulary: [
                                { word: "was very good at", meaning: "「〜がとても上手だった」" },
                                { word: "explaining complex science", meaning: "「複雑な科学を説明すること」" },
                                { word: "in a way that", meaning: "「〜する方法で」" }
                            ],
                            grammarNotes: [
                                { phrase: "be good at + -ing", explanation: "<b>be good at</b>: 「〜が上手である」。" },
                                { phrase: "in a way that", explanation: "<b>関係代名詞that</b>: wayを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "In the 1950s, she wrote several best-selling books about the sea.",
                        translation: "1950年代に、彼女は海に関するベストセラー本を数冊執筆しました。",
                        grammarAnalysis: {
                            mainVerbs: ["wrote"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the 1950s)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wrote</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>several best-selling books (about the sea)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(1950年代に)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>執筆した</span> <span class='t-O'>いくつかのベストセラー本を（海に関する）</span>。",
                            naturalTranslation: "1950年代に、彼女は海に関するベストセラー本を数冊執筆しました。",
                            vocabulary: [
                                { word: "In the 1950s", meaning: "「1950年代に」" },
                                { word: "best-selling books", meaning: "「ベストセラー本」" }
                            ],
                            grammarNotes: [
                                { phrase: "In the 1950s", explanation: "<b>時代を表す表現</b>: 「〜年代に」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "Despite her success as a writer, her personal life was challenging.",
                        translation: "作家としての成功にもかかわらず、彼女の私生活は困難なものでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Despite her success as a writer)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>her personal life</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>challenging</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(作家としての成功にもかかわらず)</span>、<span class='t-S'>彼女の私生活は</span> <span class='t-V'>だった</span> <span class='t-C'>困難な</span>。",
                            naturalTranslation: "作家としての成功にもかかわらず、彼女の私生活は困難なものでした。",
                            vocabulary: [
                                { word: "Despite", meaning: "「〜にもかかわらず」" },
                                { word: "her success as a writer", meaning: "「作家としての成功」" },
                                { word: "personal life", meaning: "「私生活」" },
                                { word: "challenging", meaning: "「困難な」「やりがいのある」" }
                            ],
                            grammarNotes: [
                                { phrase: "Despite + 名詞", explanation: "<b>譲歩</b>: 「〜にもかかわらず」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "She had to care for her aging mother and later adopted her niece's son after her niece died.",
                        translation: "彼女は年老いた母親の世話をしなければならず、後に姪が亡くなった後は姪の息子を養子にしました。",
                        grammarAnalysis: {
                            mainVerbs: ["had to care for", "adopted"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had to care for</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her aging mother</span><span class='tag'>O</span></span> and <span class='chunk M-group'><span class='text'>(later)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>adopted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her niece's son</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(after her niece died)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>世話しなければならなかった</span> <span class='t-O'>年老いた母を</span> and <span class='t-M'>(後に)</span> <span class='t-V'>養子にした</span> <span class='t-O'>姪の息子を</span> <span class='t-M'>(姪が亡くなった後)</span>。",
                            naturalTranslation: "彼女は年老いた母親の世話をしなければならず、後に姪が亡くなった後は姪の息子を養子にしました。",
                            vocabulary: [
                                { word: "had to care for", meaning: "「〜の世話をしなければならなかった」" },
                                { word: "aging mother", meaning: "「年老いた母」" },
                                { word: "adopted", meaning: "「養子にした」" },
                                { word: "niece's son", meaning: "「姪の息子」" }
                            ],
                            grammarNotes: [
                                { phrase: "had to care for", explanation: "<b>have to + 動詞原形</b>: 「〜しなければならない」。" },
                                { phrase: "after her niece died", explanation: "<b>時を表す副詞節</b>: 「姪が亡くなった後」。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "These responsibilities took up much of her time and energy.",
                        translation: "これらの責任は、彼女の時間とエネルギーの多くを奪いました。",
                        grammarAnalysis: {
                            mainVerbs: ["took up"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These responsibilities</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took up</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>much of her time and energy</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これらの責任は</span> <span class='t-V'>奪った</span> <span class='t-O'>彼女の時間とエネルギーの多くを</span>。",
                            naturalTranslation: "これらの責任は、彼女の時間とエネルギーの多くを奪いました。",
                            vocabulary: [
                                { word: "responsibilities", meaning: "「責任」" },
                                { word: "took up", meaning: "「〜を占めた」「〜を奪った」" },
                                { word: "much of", meaning: "「〜の多く」" }
                            ],
                            grammarNotes: [
                                { phrase: "take up", explanation: "<b>take up</b>: 「〜を占める」「〜を費やさせる」。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Her Battle and Legacy
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 18,
                        text: "In her later years, Carson focused on the dangers of pesticides.",
                        translation: "晩年、カーソンは殺虫剤の危険性に焦点を当てました。",
                        grammarAnalysis: {
                            mainVerbs: ["focused"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In her later years)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Carson</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>focused</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on the dangers of pesticides)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(晩年)</span>、<span class='t-S'>カーソンは</span> <span class='t-V'>焦点を当てた</span> <span class='t-M'>(殺虫剤の危険性に)</span>。",
                            naturalTranslation: "晩年、カーソンは殺虫剤の危険性に焦点を当てました。",
                            vocabulary: [
                                { word: "In her later years", meaning: "「晩年に」" },
                                { word: "focused on", meaning: "「〜に焦点を当てた」" },
                                { word: "the dangers of pesticides", meaning: "「殺虫剤の危険性」" }
                            ],
                            grammarNotes: [
                                { phrase: "focus on", explanation: "<b>focus on</b>: 「〜に焦点を当てる」「〜に集中する」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "When Silent Spring was published, chemical companies attacked her and tried to stop the book from being sold.",
                        translation: "『沈黙の春』が出版されると、化学会社は彼女を攻撃し、本の販売を阻止しようとしました。",
                        grammarAnalysis: {
                            mainVerbs: ["was published", "attacked", "tried"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When [Silent Spring <span class='chunk V2-group'><span class='text'>was published</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>chemical companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>attacked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>tried to stop</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the book from being sold</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(When [『沈黙の春』が <span class='t-V2'>出版された</span>とき])</span>、<span class='t-S'>化学会社は</span> <span class='t-V'>攻撃した</span> <span class='t-O'>彼女を</span> and <span class='t-V'>止めようとした</span> <span class='t-O'>本が販売されるのを</span>。",
                            naturalTranslation: "『沈黙の春』が出版されると、化学会社は彼女を攻撃し、本の販売を阻止しようとしました。",
                            vocabulary: [
                                { word: "was published", meaning: "「出版された」" },
                                { word: "chemical companies", meaning: "「化学会社」" },
                                { word: "attacked", meaning: "「攻撃した」" },
                                { word: "tried to stop ... from being sold", meaning: "「〜が売られるのを阻止しようとした」" }
                            ],
                            grammarNotes: [
                                { phrase: "When Silent Spring was published", explanation: "<b>時を表す副詞節</b>: 「〜が出版されたとき」。" },
                                { phrase: "stop ... from being sold", explanation: "<b>stop A from doing</b>: 「Aが〜するのを止める」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "They claimed her research was wrong, but Carson did not give up.",
                        translation: "彼らは彼女の研究が間違っていると主張しましたが、カーソンは諦めませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["claimed", "was", "did not give up"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>claimed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[her research <span class='chunk V2-group'><span class='text'>was</span><span class='tag'>V'</span></span> wrong]</span><span class='tag'>O</span></span>, but <span class='chunk S-group'><span class='text'>Carson</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>did not give up</span><span class='tag'>V</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>主張した</span> <span class='t-O'>[彼女の研究が <span class='t-V2'>だった</span>間違いと]</span>、but <span class='t-S'>カーソンは</span> <span class='t-V'>諦めなかった</span>。",
                            naturalTranslation: "彼らは彼女の研究が間違っていると主張しましたが、カーソンは諦めませんでした。",
                            vocabulary: [
                                { word: "claimed", meaning: "「主張した」" },
                                { word: "her research was wrong", meaning: "「彼女の研究が間違っていた」" },
                                { word: "did not give up", meaning: "「諦めなかった」" }
                            ],
                            grammarNotes: [
                                { phrase: "claimed (that)", explanation: "<b>claim + that節</b>: 「〜と主張する」。thatは省略可能。" },
                                { phrase: "give up", explanation: "<b>give up</b>: 「諦める」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "At the time, she was fighting a serious battle with cancer, yet she continued to defend her work.",
                        translation: "当時、彼女は癌との深刻な闘病中でしたが、それでも自分の作品を守り続けました。",
                        grammarAnalysis: {
                            mainVerbs: ["was fighting", "continued"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(At the time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was fighting</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a serious battle (with cancer)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(yet)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>continued to defend</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her work</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(当時)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>闘っていた</span> <span class='t-O'>深刻な闘いを（癌との）</span>、<span class='t-M'>(yet)</span> <span class='t-S'>彼女は</span> <span class='t-V'>守り続けた</span> <span class='t-O'>自分の作品を</span>。",
                            naturalTranslation: "当時、彼女は癌との深刻な闘病中でしたが、それでも自分の作品を守り続けました。",
                            vocabulary: [
                                { word: "At the time", meaning: "「当時」" },
                                { word: "was fighting a battle with", meaning: "「〜と闘っていた」" },
                                { word: "yet", meaning: "「それでも」「しかし」" },
                                { word: "continued to defend", meaning: "「守り続けた」" }
                            ],
                            grammarNotes: [
                                { phrase: "was fighting", explanation: "<b>過去進行形</b>: 継続的な闘病を強調。" },
                                { phrase: "yet", explanation: "<b>接続詞yet</b>: 「それでも」。逆接を示す。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "She testified before the U.S. Congress just a year before she died in 1964.",
                        translation: "彼女は1964年に亡くなるちょうど1年前に、米国議会で証言を行いました。",
                        grammarAnalysis: {
                            mainVerbs: ["testified", "died"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>testified</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(before the U.S. Congress) (just a year before [she <span class='chunk V2-group'><span class='text'>died</span><span class='tag'>V'</span></span> in 1964])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>証言した</span> <span class='t-M'>(米国議会で) (ちょうど1年前に [彼女が <span class='t-V2'>亡くなった</span>1964年に])</span>。",
                            naturalTranslation: "彼女は1964年に亡くなるちょうど1年前に、米国議会で証言を行いました。",
                            vocabulary: [
                                { word: "testified before", meaning: "「〜の前で証言した」" },
                                { word: "the U.S. Congress", meaning: "「米国議会」" },
                                { word: "just a year before", meaning: "「ちょうど1年前に」" }
                            ],
                            grammarNotes: [
                                { phrase: "testified before", explanation: "<b>testify before</b>: 「〜の前で証言する」。" },
                                { phrase: "before she died", explanation: "<b>時を表す副詞節</b>: 「彼女が亡くなる前に」。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "Her bravery and dedication forced the government to create new laws to protect the environment.",
                        translation: "彼女の勇気と献身は、政府に環境を保護するための新しい法律を作らせることとなりました。",
                        grammarAnalysis: {
                            mainVerbs: ["forced"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Her bravery and dedication</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>forced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the government</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to create new laws (to protect the environment)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>彼女の勇気と献身は</span> <span class='t-V'>させた</span> <span class='t-O'>政府に</span> <span class='t-C'>新しい法律を作ることを（環境を保護するための）</span>。",
                            naturalTranslation: "彼女の勇気と献身は、政府に環境を保護するための新しい法律を作らせることとなりました。",
                            vocabulary: [
                                { word: "bravery and dedication", meaning: "「勇気と献身」" },
                                { word: "forced ... to", meaning: "「〜に…させた」" },
                                { word: "create new laws", meaning: "「新しい法律を作る」" },
                                { word: "to protect the environment", meaning: "「環境を保護するために」" }
                            ],
                            grammarNotes: [
                                { phrase: "force + O + to do", explanation: "<b>force O to do</b>: 「Oに〜させる」。強制を示す。" },
                                { phrase: "to protect the environment", explanation: "<b>不定詞の副詞的用法（目的）</b>: lawsを修飾。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Result of her work
            {
                id: 1,
                text: "What was one result of Rachel Carson's work?",
                textTranslation: "レイチェル・カーソンの仕事の成果の一つは何でしたか？",
                choices: [
                    { id: 1, text: "She invented a new chemical to control insects on farms.", translation: "彼女は農場で昆虫を駆除するための新しい化学物質を発明した。", isCorrect: false },
                    { id: 2, text: "She proved that humans could completely control nature.", translation: "彼女は人間が自然を完全にコントロールできることを証明した。", isCorrect: false },
                    { id: 3, text: "Her writing helped to stop the use of some dangerous chemicals.", translation: "彼女の著作は、いくつかの危険な化学物質の使用を止めるのに役立った。", isCorrect: true, highlight: "stop the use of some dangerous chemicals" },
                    { id: 4, text: "She became the first woman to lead the Environmental Protection Agency.", translation: "彼女は環境保護庁を率いる初の女性となった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落の最後の文で彼女の著作の成果が述べられています。「led to a ban on dangerous pesticides」に注目。",
                    targetSentenceId: 5,
                    highlightWord: "Her writing led to a ban on dangerous pesticides like DDT",
                    highlightWordSentenceId: 5
                },
                keywords: ["result", "Rachel Carson's work"],
                keywordExplanations: {
                    "result": "結果・成果を探す。",
                    "Rachel Carson's work": "彼女の仕事・著作。"
                },
                keywordMatches: [
                    { sentenceId: 5, text: "Her writing led to a ban on dangerous pesticides like DDT", keyword: "result" }
                ],
                choiceAdvice: "選択肢は彼女の仕事の結果を問うています。第1段落最後の文で「DDTなどの危険な殺虫剤の禁止につながった」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"Her writing led to a ban on dangerous pesticides like DDT\"" },
                    { type: "arrow", content: "「彼女の著作は危険な殺虫剤の禁止につながった」= 「危険な化学物質の使用を止めるのに役立った」" },
                    { type: "text", content: "選択肢3: \"Her writing helped to stop the use of some dangerous chemicals.\"" },
                    { type: "conclusion", content: "led to a ban = helped to stop the use → 正解: 3" }
                ]
            },
            // Q2: 第2段落 - Why she didn't finish doctorate
            {
                id: 2,
                text: "Rachel Carson did not finish her doctorate degree because",
                textTranslation: "レイチェル・カーソンが博士号を取得しなかった理由は",
                choices: [
                    { id: 1, text: "she decided that she liked writing more than science.", translation: "科学より執筆が好きだと思ったから。", isCorrect: false },
                    { id: 2, text: "her family did not have enough money for her to continue.", translation: "家族に学業を続けるための十分なお金がなかったから。", isCorrect: true, highlight: "her family did not have enough money" },
                    { id: 3, text: "the university she attended did not accept female students.", translation: "彼女が通っていた大学が女子学生を受け入れなかったから。", isCorrect: false },
                    { id: 4, text: "she wanted to move to Pennsylvania to live on a farm.", translation: "農場暮らしをするためにペンシルベニアに引っ越したかったから。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落で博士号を取得できなかった理由が述べられています。「financial difficulties during the Great Depression」に注目。",
                    targetSentenceId: 11,
                    highlightWord: "her family had financial difficulties during the Great Depression ... she had to stop her studies",
                    highlightWordSentenceId: 10
                },
                keywords: ["did not finish", "doctorate degree", "because"],
                keywordExplanations: {
                    "did not finish": "終えなかった理由。",
                    "doctorate degree": "博士号。",
                    "because": "理由を探す。"
                },
                keywordMatches: [
                    { sentenceId: 10, text: "her family had financial difficulties during the Great Depression", keyword: "because" },
                    { sentenceId: 11, text: "she had to stop her studies", keyword: "did not finish" }
                ],
                choiceAdvice: "選択肢は博士号を取得しなかった理由を問うています。第2段落で「大恐慌中の経済的困難」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"her family had financial difficulties during the Great Depression\" → \"she had to stop her studies\"" },
                    { type: "arrow", content: "「家族が経済的困難を抱えていた」→「勉強をやめなければならなかった」" },
                    { type: "text", content: "選択肢2: \"her family did not have enough money for her to continue.\"" },
                    { type: "conclusion", content: "financial difficulties = not enough money → 正解: 2" }
                ]
            },
            // Q3: 第3段落 - Her life in the 1950s
            {
                id: 3,
                text: "What was true about Rachel Carson's life in the 1950s?",
                textTranslation: "1950年代のレイチェル・カーソンの生活について正しいのはどれですか？",
                choices: [
                    { id: 1, text: "She had a lot of free time to travel around the world.", translation: "世界中を旅行する多くの自由時間があった。", isCorrect: false },
                    { id: 2, text: "She stopped writing books to work for the government.", translation: "政府で働くために本を書くのをやめた。", isCorrect: false },
                    { id: 3, text: "She had to look after family members while working as a writer.", translation: "作家として働きながら家族の世話をしなければならなかった。", isCorrect: true, highlight: "look after family members while working as a writer" },
                    { id: 4, text: "She was unable to explain science clearly to the public.", translation: "一般の人々に科学を分かりやすく説明することができなかった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で1950年代の彼女の生活が述べられています。「care for her aging mother」「adopted her niece's son」に注目。",
                    targetSentenceId: 16,
                    highlightWord: "She had to care for her aging mother and later adopted her niece's son",
                    highlightWordSentenceId: 16
                },
                keywords: ["true", "1950s", "Rachel Carson's life"],
                keywordExplanations: {
                    "true": "正しい記述を探す。",
                    "1950s": "1950年代。",
                    "Rachel Carson's life": "彼女の生活。"
                },
                keywordMatches: [
                    { sentenceId: 14, text: "In the 1950s, she wrote several best-selling books about the sea", keyword: "working as a writer" },
                    { sentenceId: 16, text: "She had to care for her aging mother and later adopted her niece's son", keyword: "look after family members" }
                ],
                choiceAdvice: "選択肢は1950年代の生活について問うています。第3段落で「母や姪の息子の世話をしながら執筆」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: 「1950年代に海の本を執筆」+「年老いた母の世話」+「姪の息子を養子に」" },
                    { type: "arrow", content: "「作家として成功しながらも家族の世話に追われていた」" },
                    { type: "text", content: "選択肢3: \"She had to look after family members while working as a writer.\"" },
                    { type: "conclusion", content: "care for + adopted = look after family members → 正解: 3" }
                ]
            },
            // Q4: 第4段落 - When Silent Spring was published
            {
                id: 4,
                text: "When Rachel Carson published Silent Spring,",
                textTranslation: "レイチェル・カーソンが『沈黙の春』を出版したとき、",
                choices: [
                    { id: 1, text: "chemical companies tried to prevent people from reading it.", translation: "化学会社は人々がそれを読むのを妨げようとした。", isCorrect: true, highlight: "chemical companies tried to prevent people from reading it" },
                    { id: 2, text: "the government immediately created new environmental laws.", translation: "政府はすぐに新しい環境法を制定した。", isCorrect: false },
                    { id: 3, text: "she had already recovered from her battle with cancer.", translation: "彼女はすでに癌との闘病から回復していた。", isCorrect: false },
                    { id: 4, text: "most people already knew about the dangers of pesticides.", translation: "ほとんどの人々はすでに殺虫剤の危険性を知っていた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で出版時の状況が述べられています。「attacked her and tried to stop the book from being sold」に注目。",
                    targetSentenceId: 19,
                    highlightWord: "chemical companies attacked her and tried to stop the book from being sold",
                    highlightWordSentenceId: 19
                },
                keywords: ["published Silent Spring", "when"],
                keywordExplanations: {
                    "published Silent Spring": "『沈黙の春』を出版。",
                    "when": "その時何が起きたか。"
                },
                keywordMatches: [
                    { sentenceId: 19, text: "chemical companies attacked her and tried to stop the book from being sold", keyword: "when" }
                ],
                choiceAdvice: "選択肢は出版時の状況を問うています。第4段落で「化学会社が本の販売を阻止しようとした」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"chemical companies attacked her and tried to stop the book from being sold\"" },
                    { type: "arrow", content: "「化学会社が本の販売を阻止しようとした」= 「人々が読むのを妨げようとした」" },
                    { type: "text", content: "選択肢1: \"chemical companies tried to prevent people from reading it.\"" },
                    { type: "conclusion", content: "stop from being sold = prevent from reading → 正解: 1" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の記述のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "Rachel Carson originally went to college to study biology.", translation: "レイチェル・カーソンはもともと生物学を学ぶために大学に入った。", isCorrect: false },
                    { id: 2, text: "Rachel Carson cared for her niece's son after her niece passed away.", translation: "レイチェル・カーソンは姪が亡くなった後、姪の息子の世話をした。", isCorrect: true, highlight: "cared for her niece's son after her niece passed away" },
                    { id: 3, text: "Rachel Carson worked for a chemical company before writing her book.", translation: "レイチェル・カーソンは本を書く前に化学会社で働いていた。", isCorrect: false },
                    { id: 4, text: "Rachel Carson died before she could speak to the U.S. Congress.", translation: "レイチェル・カーソンは米国議会で話す前に亡くなった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "各選択肢を本文と照合します。第3段落で「adopted her niece's son after her niece died」に注目。",
                    targetSentenceId: 16,
                    highlightWord: "adopted her niece's son after her niece died",
                    highlightWordSentenceId: 16
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい記述を探す。",
                    "statements": "各選択肢を確認。"
                },
                keywordMatches: [
                    { sentenceId: 8, text: "originally planned to study English at college", keyword: "not biology (選択肢1は誤り)" },
                    { sentenceId: 16, text: "adopted her niece's son after her niece died", keyword: "true (選択肢2)" },
                    { sentenceId: 12, text: "found work at the U.S. Bureau of Fisheries", keyword: "not chemical company (選択肢3は誤り)" },
                    { sentenceId: 22, text: "testified before the U.S. Congress ... before she died", keyword: "spoke before dying (選択肢4は誤り)" }
                ],
                choiceAdvice: "各選択肢を本文と照合します。選択肢1は「英語専攻」だったので誤り、選択肢2は第3段落で確認できます。",
                logic: [
                    { type: "text", content: "選択肢1: もともと英語専攻←本文「originally planned to study English」なので誤り" },
                    { type: "text", content: "選択肢2: 姪の息子の世話←本文「adopted her niece's son after her niece died」と一致" },
                    { type: "text", content: "選択肢3: 化学会社勤務←本文「U.S. Bureau of Fisheries」なので誤り" },
                    { type: "text", content: "選択肢4: 議会証言前に死亡←本文「testified ... just a year before she died」なので誤り" },
                    { type: "conclusion", content: "本文と一致するのは選択肢2のみ → 正解: 2" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Rachel Carson - 講師用要約",
            intro: "レイチェル・カーソンの生涯と、彼女の著書『沈黙の春』が環境保護運動に与えた影響についての伝記です。過去問の「Marie Curie」（2023年第3回）と同様に、逆境を乗り越えて偉大な功績を残した女性科学者を扱っています。",
            points: [
                { label: "1. 影響と功績（第1段落）", text: "レイチェル・カーソンは現代環境保護運動の母と呼ばれています。1962年の著書『沈黙の春』は、化学物質が鳥・魚・人間に与える害を示し、DDTの禁止や米国環境保護庁の設立につながりました。" },
                { label: "2. 生い立ちと教育（第2段落）", text: "1907年ペンシルベニアで生まれ、自然豊かな農場で育ちました。当初は英語専攻でしたが生物学に転向。博士号を目指しましたが、大恐慌による家族の経済的困窮のため学業を断念しました。" },
                { label: "3. キャリアと私生活の苦労（第3段落）", text: "米国漁業局で働きながら海に関するベストセラー本を執筆。複雑な科学を分かりやすく伝える才能がありました。私生活では年老いた母や姪の息子の世話に追われ、多くのエネルギーを費やしました。" },
                { label: "4. 闘いと遺産（第4段落）", text: "『沈黙の春』出版時、化学会社から激しい攻撃を受けましたが、癌との闘病中にもかかわらず屈しませんでした。死の1年前に議会で証言し、彼女の勇気が環境保護法の制定を促しました。" }
            ]
        }
    },
    // 2級 オリジナル問題8: Carolina Gold Rice
    {
        id: "grade-2-original-carolina-gold-rice",
        grade: "2級",
        title: "Carolina Gold Rice",
        subTitle: "問題8",
        genre: "歴史 / 農業",
        similarProblems: {
            exam: "2023年度 第2回",
            title: "Purple Straw Wheat"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Carolina+Gold+Rice",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: History and Challenges
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Rice has played a significant role in the history of the southern United States.",
                        translation: "米は米国南部の歴史において重要な役割を果たしてきました。",
                        grammarAnalysis: {
                            mainVerbs: ["has played"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Rice</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has played</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a significant role</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in the history of the southern United States)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>米は</span> <span class='t-V'>果たしてきた</span> <span class='t-O'>重要な役割を</span> <span class='t-M'>(米国南部の歴史において)</span>。",
                            naturalTranslation: "米は米国南部の歴史において重要な役割を果たしてきました。",
                            vocabulary: [
                                { word: "has played", meaning: "「果たしてきた」" },
                                { word: "a significant role", meaning: "「重要な役割」" },
                                { word: "the southern United States", meaning: "「米国南部」" }
                            ],
                            grammarNotes: [
                                { phrase: "has played", explanation: "<b>現在完了形</b>: 過去から現在までの継続を示す。" },
                                { phrase: "play a role", explanation: "<b>play a role in</b>: 「〜において役割を果たす」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "For more than two centuries, it was a major source of wealth for states like South Carolina.",
                        translation: "2世紀以上にわたり、それはサウスカロライナ州のような州にとって主要な富の源でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For more than two centuries)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a major source of wealth (for states like South Carolina)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(2世紀以上にわたり)</span>、<span class='t-S'>それは</span> <span class='t-V'>だった</span> <span class='t-C'>主要な富の源（サウスカロライナ州のような州にとって）</span>。",
                            naturalTranslation: "2世紀以上にわたり、それはサウスカロライナ州のような州にとって主要な富の源でした。",
                            vocabulary: [
                                { word: "For more than two centuries", meaning: "「2世紀以上にわたり」" },
                                { word: "a major source of wealth", meaning: "「主要な富の源」" },
                                { word: "states like", meaning: "「〜のような州」" }
                            ],
                            grammarNotes: [
                                { phrase: "For more than two centuries", explanation: "<b>期間を表す表現</b>: 200年以上。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Among the various types of rice grown in the region, one variety stood out for its quality: Carolina Gold.",
                        translation: "その地域で栽培された様々な種類の米の中で、ある品種がその品質の高さで際立っていました。カロライナ・ゴールドです。",
                        grammarAnalysis: {
                            mainVerbs: ["stood out"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Among the various types of rice grown in the region)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>one variety</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>stood out</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for its quality)</span><span class='tag'>M</span></span>: <span class='chunk M-group'><span class='text'>Carolina Gold</span><span class='tag'>同格</span></span>.",
                            translationHtml: "<span class='t-M'>(その地域で栽培された様々な種類の米の中で)</span>、<span class='t-S'>ある品種が</span> <span class='t-V'>際立っていた</span> <span class='t-M'>(その品質で)</span>：<span class='t-M'>カロライナ・ゴールド</span>。",
                            naturalTranslation: "その地域で栽培された様々な種類の米の中で、ある品種がその品質の高さで際立っていました。カロライナ・ゴールドです。",
                            vocabulary: [
                                { word: "Among the various types", meaning: "「様々な種類の中で」" },
                                { word: "grown in the region", meaning: "「その地域で栽培された」" },
                                { word: "stood out for", meaning: "「〜で際立っていた」" },
                                { word: "variety", meaning: "「品種」" }
                            ],
                            grammarNotes: [
                                { phrase: "grown in the region", explanation: "<b>過去分詞句</b>: typesを修飾。" },
                                { phrase: "stand out for", explanation: "<b>stand out for</b>: 「〜で際立つ」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "This rice became famous around the world in the 18th and 19th centuries.",
                        translation: "この米は18世紀と19世紀に世界中で有名になりました。",
                        grammarAnalysis: {
                            mainVerbs: ["became"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This rice</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>famous</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(around the world) (in the 18th and 19th centuries)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この米は</span> <span class='t-V'>なった</span> <span class='t-C'>有名に</span> <span class='t-M'>(世界中で) (18世紀と19世紀に)</span>。",
                            naturalTranslation: "この米は18世紀と19世紀に世界中で有名になりました。",
                            vocabulary: [
                                { word: "became famous", meaning: "「有名になった」" },
                                { word: "around the world", meaning: "「世界中で」" },
                                { word: "in the 18th and 19th centuries", meaning: "「18世紀と19世紀に」" }
                            ],
                            grammarNotes: [
                                { phrase: "became famous", explanation: "<b>become + 形容詞</b>: 「〜になる」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "However, producing it was difficult.",
                        translation: "しかし、それを生産することは困難でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>producing it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>difficult</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>それを生産することは</span> <span class='t-V'>だった</span> <span class='t-C'>困難</span>。",
                            naturalTranslation: "しかし、それを生産することは困難でした。",
                            vocabulary: [
                                { word: "producing it", meaning: "「それを生産すること」" },
                                { word: "difficult", meaning: "「困難な」" }
                            ],
                            grammarNotes: [
                                { phrase: "producing it", explanation: "<b>動名詞主語</b>: 「〜することは」。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "The work relied heavily on human labor, and after the social changes following the Civil War, growing this labor-intensive crop became much harder for farm owners.",
                        translation: "その作業は人の手による労働力に大きく依存しており、南北戦争後の社会変化の後、この労働集約的な作物を栽培することは農場主にとって非常に難しくなりました。",
                        grammarAnalysis: {
                            mainVerbs: ["relied", "became"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The work</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>relied</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(heavily on human labor)</span><span class='tag'>M</span></span>, and <span class='chunk M-group'><span class='text'>(after the social changes following the Civil War)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>growing this labor-intensive crop</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>much harder (for farm owners)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>その作業は</span> <span class='t-V'>依存していた</span> <span class='t-M'>(大きく人の労働力に)</span>、and <span class='t-M'>(南北戦争後の社会変化の後)</span>、<span class='t-S'>この労働集約的な作物を栽培することは</span> <span class='t-V'>なった</span> <span class='t-C'>より困難に（農場主にとって）</span>。",
                            naturalTranslation: "その作業は人の手による労働力に大きく依存しており、南北戦争後の社会変化の後、この労働集約的な作物を栽培することは農場主にとって非常に難しくなりました。",
                            vocabulary: [
                                { word: "relied heavily on", meaning: "「〜に大きく依存していた」" },
                                { word: "human labor", meaning: "「人の労働力」" },
                                { word: "social changes following", meaning: "「〜に続く社会変化」" },
                                { word: "the Civil War", meaning: "「南北戦争」" },
                                { word: "labor-intensive crop", meaning: "「労働集約的な作物」" }
                            ],
                            grammarNotes: [
                                { phrase: "relied heavily on", explanation: "<b>rely on</b>: 「〜に依存する」。heavilyで程度を強調。" },
                                { phrase: "growing this ... crop", explanation: "<b>動名詞主語</b>: 「〜を栽培することは」。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: Characteristics and Popularity
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "Carolina Gold rice was known for its beautiful golden outer shell and its unique flavor.",
                        translation: "カロライナ・ゴールド米は、その美しい黄金色の外皮と独特の風味で知られていました。",
                        grammarAnalysis: {
                            mainVerbs: ["was known"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Carolina Gold rice</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was known</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for its beautiful golden outer shell and its unique flavor)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>カロライナ・ゴールド米は</span> <span class='t-V'>知られていた</span> <span class='t-M'>(その美しい黄金色の外皮とその独特の風味で)</span>。",
                            naturalTranslation: "カロライナ・ゴールド米は、その美しい黄金色の外皮と独特の風味で知られていました。",
                            vocabulary: [
                                { word: "was known for", meaning: "「〜で知られていた」" },
                                { word: "golden outer shell", meaning: "「黄金色の外皮」" },
                                { word: "unique flavor", meaning: "「独特の風味」" }
                            ],
                            grammarNotes: [
                                { phrase: "be known for", explanation: "<b>be known for</b>: 「〜で知られている」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "It was sticky enough to be eaten with a fork but not as sticky as Asian rice varieties.",
                        translation: "それはフォークで食べられるほど粘り気がありましたが、アジアの米の品種ほど粘り気はありませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>sticky enough to be eaten with a fork</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(but not as sticky as Asian rice varieties)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>だった</span> <span class='t-C'>フォークで食べられるほど粘り気がある</span> <span class='t-M'>(しかしアジアの米の品種ほど粘り気はない)</span>。",
                            naturalTranslation: "それはフォークで食べられるほど粘り気がありましたが、アジアの米の品種ほど粘り気はありませんでした。",
                            vocabulary: [
                                { word: "sticky enough to", meaning: "「〜するのに十分な粘り気がある」" },
                                { word: "be eaten with a fork", meaning: "「フォークで食べられる」" },
                                { word: "not as sticky as", meaning: "「〜ほど粘り気がない」" }
                            ],
                            grammarNotes: [
                                { phrase: "enough to do", explanation: "<b>形容詞 + enough to do</b>: 「〜するのに十分な…」。" },
                                { phrase: "not as ... as", explanation: "<b>not as ... as</b>: 「〜ほど…ではない」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "This made it very popular in Europe, where it was considered a luxury item.",
                        translation: "このため、ヨーロッパでは贅沢品と見なされ、非常に人気がありました。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "was considered"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>very popular in Europe</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(where [it <span class='chunk V2-group'><span class='text'>was considered</span><span class='tag'>V'</span></span> a luxury item])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>した</span> <span class='t-O'>それを</span> <span class='t-C'>ヨーロッパで非常に人気がある</span>、<span class='t-M'>(where [それは <span class='t-V2'>見なされた</span>贅沢品と])</span>。",
                            naturalTranslation: "このため、ヨーロッパでは贅沢品と見なされ、非常に人気がありました。",
                            vocabulary: [
                                { word: "made it popular", meaning: "「それを人気にした」" },
                                { word: "was considered", meaning: "「〜と見なされていた」" },
                                { word: "a luxury item", meaning: "「贅沢品」" }
                            ],
                            grammarNotes: [
                                { phrase: "make + O + 形容詞", explanation: "<b>make O + 形容詞</b>: 「Oを〜にする」。" },
                                { phrase: "where it was considered", explanation: "<b>関係副詞where</b>: Europeを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "Chefs valued it because it could be used in a wide variety of dishes, from simple sides to complex puddings.",
                        translation: "シンプルな付け合わせから複雑なプディングまで幅広い料理に使えるため、シェフたちはそれを高く評価しました。",
                        grammarAnalysis: {
                            mainVerbs: ["valued", "could be used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Chefs</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>valued</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(because [it <span class='chunk V2-group'><span class='text'>could be used</span><span class='tag'>V'</span></span> in a wide variety of dishes, from simple sides to complex puddings])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>シェフたちは</span> <span class='t-V'>高く評価した</span> <span class='t-O'>それを</span> <span class='t-M'>(because [それは <span class='t-V2'>使われうる</span>幅広い料理に、シンプルな付け合わせから複雑なプディングまで])</span>。",
                            naturalTranslation: "シンプルな付け合わせから複雑なプディングまで幅広い料理に使えるため、シェフたちはそれを高く評価しました。",
                            vocabulary: [
                                { word: "valued", meaning: "「高く評価した」" },
                                { word: "a wide variety of dishes", meaning: "「幅広い種類の料理」" },
                                { word: "from ... to ...", meaning: "「〜から…まで」" }
                            ],
                            grammarNotes: [
                                { phrase: "because it could be used", explanation: "<b>理由節</b>: 「〜できたので」。" },
                                { phrase: "from ... to ...", explanation: "<b>範囲を示す表現</b>: 「〜から…まで」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "Despite its popularity, the production of Carolina Gold began to decline in the late 1800s due to a series of powerful storms that damaged the fields and the rise of other crops.",
                        translation: "その人気にもかかわらず、畑に被害を与えた一連の強力な嵐や他の作物の台頭により、カロライナ・ゴールドの生産は1800年代後半に減少し始めました。",
                        grammarAnalysis: {
                            mainVerbs: ["began", "damaged"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Despite its popularity)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the production of Carolina Gold</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>began to decline</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the late 1800s) (due to a series of powerful storms (that [<span class='chunk V2-group'><span class='text'>damaged</span><span class='tag'>V'</span></span> the fields]) and the rise of other crops)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その人気にもかかわらず)</span>、<span class='t-S'>カロライナ・ゴールドの生産は</span> <span class='t-V'>減少し始めた</span> <span class='t-M'>(1800年代後半に) (一連の強力な嵐（that [<span class='t-V2'>被害を与えた</span>畑に]）と他の作物の台頭により)</span>。",
                            naturalTranslation: "その人気にもかかわらず、畑に被害を与えた一連の強力な嵐や他の作物の台頭により、カロライナ・ゴールドの生産は1800年代後半に減少し始めました。",
                            vocabulary: [
                                { word: "Despite its popularity", meaning: "「その人気にもかかわらず」" },
                                { word: "began to decline", meaning: "「減少し始めた」" },
                                { word: "due to", meaning: "「〜のために」" },
                                { word: "a series of", meaning: "「一連の」" },
                                { word: "the rise of", meaning: "「〜の台頭」" }
                            ],
                            grammarNotes: [
                                { phrase: "Despite + 名詞", explanation: "<b>譲歩</b>: 「〜にもかかわらず」。" },
                                { phrase: "due to", explanation: "<b>due to + 名詞</b>: 「〜のために」。原因を示す。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Reasons for Decline
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 12,
                        text: "In the 20th century, farming became more mechanized, which caused further problems for Carolina Gold.",
                        translation: "20世紀になると農業はより機械化されましたが、これがカロライナ・ゴールドにとってさらなる問題を引き起こしました。",
                        grammarAnalysis: {
                            mainVerbs: ["became", "caused"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the 20th century)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>farming</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>more mechanized</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(which [<span class='chunk V2-group'><span class='text'>caused</span><span class='tag'>V'</span></span> further problems for Carolina Gold])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(20世紀に)</span>、<span class='t-S'>農業は</span> <span class='t-V'>なった</span> <span class='t-C'>より機械化された</span>、<span class='t-M'>(which [<span class='t-V2'>引き起こした</span>さらなる問題をカロライナ・ゴールドにとって])</span>。",
                            naturalTranslation: "20世紀になると農業はより機械化されましたが、これがカロライナ・ゴールドにとってさらなる問題を引き起こしました。",
                            vocabulary: [
                                { word: "became more mechanized", meaning: "「より機械化された」" },
                                { word: "caused further problems", meaning: "「さらなる問題を引き起こした」" }
                            ],
                            grammarNotes: [
                                { phrase: "which caused", explanation: "<b>関係代名詞which（非制限用法）</b>: 前の文全体を受ける。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "This traditional plant grows very tall and has weak stems, making it easy for the wind to knock it over.",
                        translation: "この伝統的な植物は非常に背が高く育ち、茎が弱いため、風で倒れやすいのです。",
                        grammarAnalysis: {
                            mainVerbs: ["grows", "has"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This traditional plant</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>grows</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very tall</span><span class='tag'>C</span></span> and <span class='chunk V-group'><span class='text'>has</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>weak stems</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(making it easy for the wind to knock it over)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この伝統的な植物は</span> <span class='t-V'>育つ</span> <span class='t-C'>非常に背が高く</span> and <span class='t-V'>持っている</span> <span class='t-O'>弱い茎を</span>、<span class='t-M'>(風がそれを倒すのを簡単にしながら)</span>。",
                            naturalTranslation: "この伝統的な植物は非常に背が高く育ち、茎が弱いため、風で倒れやすいのです。",
                            vocabulary: [
                                { word: "grows very tall", meaning: "「非常に背が高く育つ」" },
                                { word: "weak stems", meaning: "「弱い茎」" },
                                { word: "knock it over", meaning: "「それを倒す」" }
                            ],
                            grammarNotes: [
                                { phrase: "making it easy for ... to", explanation: "<b>分詞構文（結果）</b>: 「その結果〜になる」。" },
                                { phrase: "for the wind to knock", explanation: "<b>for + O + to do</b>: 「Oが〜するのに」。意味上の主語。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "Modern harvesting machines could not easily collect the fallen rice.",
                        translation: "現代の収穫機械では、倒れた米を簡単に集めることができませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["could not collect"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Modern harvesting machines</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could not easily collect</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the fallen rice</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>現代の収穫機械は</span> <span class='t-V'>簡単に集めることができなかった</span> <span class='t-O'>倒れた米を</span>。",
                            naturalTranslation: "現代の収穫機械では、倒れた米を簡単に集めることができませんでした。",
                            vocabulary: [
                                { word: "harvesting machines", meaning: "「収穫機械」" },
                                { word: "the fallen rice", meaning: "「倒れた米」" }
                            ],
                            grammarNotes: [
                                { phrase: "could not easily collect", explanation: "<b>could not</b>: 「〜できなかった」。能力の否定。" },
                                { phrase: "fallen rice", explanation: "<b>過去分詞</b>: riceを修飾。「倒れた」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "As a result, farmers switched to new, shorter varieties of rice that were easier to harvest with machines and produced higher yields.",
                        translation: "その結果、農家は機械で収穫しやすく収量も多い、新しい背の低い品種の米に切り替えました。",
                        grammarAnalysis: {
                            mainVerbs: ["switched", "were", "produced"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(As a result)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>switched</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to new, shorter varieties of rice (that [<span class='chunk V2-group'><span class='text'>were</span><span class='tag'>V'</span></span> easier to harvest with machines] and [<span class='chunk V3-group'><span class='text'>produced</span><span class='tag'>V''</span></span> higher yields]))</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その結果)</span>、<span class='t-S'>農家は</span> <span class='t-V'>切り替えた</span> <span class='t-M'>(新しい背の低い品種の米に（that [<span class='t-V2'>だった</span>機械で収穫しやすい] and [<span class='t-V3'>生産した</span>より多い収量を]）)</span>。",
                            naturalTranslation: "その結果、農家は機械で収穫しやすく収量も多い、新しい背の低い品種の米に切り替えました。",
                            vocabulary: [
                                { word: "switched to", meaning: "「〜に切り替えた」" },
                                { word: "shorter varieties", meaning: "「背の低い品種」" },
                                { word: "easier to harvest", meaning: "「収穫しやすい」" },
                                { word: "higher yields", meaning: "「より多い収量」" }
                            ],
                            grammarNotes: [
                                { phrase: "switch to", explanation: "<b>switch to</b>: 「〜に切り替える」。" },
                                { phrase: "easier to harvest", explanation: "<b>形容詞 + to do</b>: 「〜するのが…」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "By the mid-1900s, Carolina Gold had almost disappeared from commercial farms.",
                        translation: "1900年代半ばまでに、カロライナ・ゴールドは商業農場からほぼ姿を消しました。",
                        grammarAnalysis: {
                            mainVerbs: ["had disappeared"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(By the mid-1900s)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Carolina Gold</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had almost disappeared</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(from commercial farms)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1900年代半ばまでに)</span>、<span class='t-S'>カロライナ・ゴールドは</span> <span class='t-V'>ほぼ姿を消していた</span> <span class='t-M'>(商業農場から)</span>。",
                            naturalTranslation: "1900年代半ばまでに、カロライナ・ゴールドは商業農場からほぼ姿を消しました。",
                            vocabulary: [
                                { word: "By the mid-1900s", meaning: "「1900年代半ばまでに」" },
                                { word: "had almost disappeared", meaning: "「ほぼ姿を消していた」" },
                                { word: "commercial farms", meaning: "「商業農場」" }
                            ],
                            grammarNotes: [
                                { phrase: "By + 時", explanation: "<b>By + 時点</b>: 「〜までに」。過去完了と共に使う。" },
                                { phrase: "had almost disappeared", explanation: "<b>過去完了形</b>: ある時点までの完了を示す。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Revival
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 17,
                        text: "Recently, there has been a movement to revive this historic grain.",
                        translation: "最近、この歴史的な穀物を復活させようとする動きがあります。",
                        grammarAnalysis: {
                            mainVerbs: ["has been"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Recently)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>there</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has been</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a movement (to revive this historic grain)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(最近)</span>、<span class='t-S'>there</span> <span class='t-V'>がある</span> <span class='t-C'>動きが（この歴史的な穀物を復活させようとする）</span>。",
                            naturalTranslation: "最近、この歴史的な穀物を復活させようとする動きがあります。",
                            vocabulary: [
                                { word: "a movement to revive", meaning: "「復活させようとする動き」" },
                                { word: "historic grain", meaning: "「歴史的な穀物」" }
                            ],
                            grammarNotes: [
                                { phrase: "there has been", explanation: "<b>there + 現在完了</b>: 「〜がある（ようになった）」。" },
                                { phrase: "to revive", explanation: "<b>不定詞（形容詞的用法）</b>: movementを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "In the 1980s, a doctor named Richard Schulze discovered some Carolina Gold seeds in a government seed bank.",
                        translation: "1980年代、リチャード・シュルツという医師が政府の種子銀行でカロライナ・ゴールドの種子を発見しました。",
                        grammarAnalysis: {
                            mainVerbs: ["discovered"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the 1980s)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a doctor (named Richard Schulze)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>discovered</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some Carolina Gold seeds</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in a government seed bank)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1980年代に)</span>、<span class='t-S'>医師（リチャード・シュルツという名の）が</span> <span class='t-V'>発見した</span> <span class='t-O'>カロライナ・ゴールドの種子を</span> <span class='t-M'>(政府の種子銀行で)</span>。",
                            naturalTranslation: "1980年代、リチャード・シュルツという医師が政府の種子銀行でカロライナ・ゴールドの種子を発見しました。",
                            vocabulary: [
                                { word: "a doctor named", meaning: "「〜という名の医師」" },
                                { word: "discovered", meaning: "「発見した」" },
                                { word: "seed bank", meaning: "「種子銀行」" }
                            ],
                            grammarNotes: [
                                { phrase: "named Richard Schulze", explanation: "<b>過去分詞句</b>: a doctorを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "He decided to plant them on his property to bring the crop back to life.",
                        translation: "彼はその作物を生き返らせるために、自分の所有地にそれらを植えることに決めました。",
                        grammarAnalysis: {
                            mainVerbs: ["decided"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>decided</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to plant them on his property</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to bring the crop back to life)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>決めた</span> <span class='t-O'>自分の所有地にそれらを植えることを</span> <span class='t-M'>(その作物を生き返らせるために)</span>。",
                            naturalTranslation: "彼はその作物を生き返らせるために、自分の所有地にそれらを植えることに決めました。",
                            vocabulary: [
                                { word: "decided to plant", meaning: "「植えることに決めた」" },
                                { word: "his property", meaning: "「彼の所有地」" },
                                { word: "bring ... back to life", meaning: "「〜を生き返らせる」" }
                            ],
                            grammarNotes: [
                                { phrase: "decide to do", explanation: "<b>decide to do</b>: 「〜することに決める」。" },
                                { phrase: "to bring ... back to life", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「〜するために」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Since then, dedicated farmers have been working to grow the rice again.",
                        translation: "それ以来、熱心な農家たちが再びその米を栽培するために尽力しています。",
                        grammarAnalysis: {
                            mainVerbs: ["have been working"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Since then)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>dedicated farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have been working</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to grow the rice again)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(それ以来)</span>、<span class='t-S'>熱心な農家たちが</span> <span class='t-V'>尽力してきている</span> <span class='t-M'>(再びその米を栽培するために)</span>。",
                            naturalTranslation: "それ以来、熱心な農家たちが再びその米を栽培するために尽力しています。",
                            vocabulary: [
                                { word: "Since then", meaning: "「それ以来」" },
                                { word: "dedicated farmers", meaning: "「熱心な農家」" },
                                { word: "have been working", meaning: "「尽力してきている」" }
                            ],
                            grammarNotes: [
                                { phrase: "have been working", explanation: "<b>現在完了進行形</b>: 過去から現在まで継続中の動作。" },
                                { phrase: "to grow the rice again", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「〜するために」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "Although the amount produced is still small compared to modern rice, it is now available in some specialty stores.",
                        translation: "生産量は現代の米に比べればまだ少ないですが、現在では一部の専門店で入手可能です。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Although [the amount produced <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> still small compared to modern rice])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(now)</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>available in some specialty stores</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(Although [生産量が <span class='t-V2'>である</span>まだ少ない現代の米に比べて])</span>、<span class='t-S'>それは</span> <span class='t-V'>である</span> <span class='t-M'>(現在)</span> <span class='t-C'>一部の専門店で入手可能</span>。",
                            naturalTranslation: "生産量は現代の米に比べればまだ少ないですが、現在では一部の専門店で入手可能です。",
                            vocabulary: [
                                { word: "the amount produced", meaning: "「生産量」" },
                                { word: "compared to", meaning: "「〜と比べて」" },
                                { word: "specialty stores", meaning: "「専門店」" }
                            ],
                            grammarNotes: [
                                { phrase: "Although ...", explanation: "<b>譲歩節</b>: 「〜だけれども」。" },
                                { phrase: "compared to", explanation: "<b>過去分詞句</b>: 「〜と比較して」。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Food lovers and historians are delighted that this piece of culinary history has been saved from extinction.",
                        translation: "食通や歴史家たちは、この食文化の歴史の一部が絶滅から救われたことを喜んでいます。",
                        grammarAnalysis: {
                            mainVerbs: ["are delighted", "has been saved"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Food lovers and historians</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are delighted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [this piece of culinary history <span class='chunk V2-group'><span class='text'>has been saved</span><span class='tag'>V'</span></span> from extinction]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>食通や歴史家たちは</span> <span class='t-V'>喜んでいる</span> <span class='t-O'>that [この食文化の歴史の一部が <span class='t-V2'>救われた</span>絶滅から]</span>。",
                            naturalTranslation: "食通や歴史家たちは、この食文化の歴史の一部が絶滅から救われたことを喜んでいます。",
                            vocabulary: [
                                { word: "food lovers", meaning: "「食通」" },
                                { word: "are delighted that", meaning: "「〜を喜んでいる」" },
                                { word: "culinary history", meaning: "「食文化の歴史」" },
                                { word: "has been saved from extinction", meaning: "「絶滅から救われた」" }
                            ],
                            grammarNotes: [
                                { phrase: "be delighted that", explanation: "<b>be delighted that</b>: 「〜を喜んでいる」。" },
                                { phrase: "has been saved from", explanation: "<b>現在完了受動態</b>: 「〜から救われた」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Problem with growing
            {
                id: 1,
                text: "What was one problem with growing Carolina Gold rice in the past?",
                textTranslation: "過去にカロライナ・ゴールド米を栽培する上での問題点は何でしたか？",
                choices: [
                    { id: 1, text: "It required a large amount of physical work by people.", translation: "多量の人の手による物理的な仕事を必要とした。", isCorrect: true, highlight: "a large amount of physical work by people" },
                    { id: 2, text: "It could only be sold to customers within the United States.", translation: "アメリカ国内の顧客にしか販売できなかった。", isCorrect: false },
                    { id: 3, text: "It was often attacked by insects that came from Europe.", translation: "ヨーロッパから来た害虫に頻繁に攻撃された。", isCorrect: false },
                    { id: 4, text: "It did not taste as good as rice grown in other countries.", translation: "他の国で栽培された米ほど味が良くなかった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で栽培の問題点が述べられています。「relied heavily on human labor」に注目。",
                    targetSentenceId: 6,
                    highlightWord: "The work relied heavily on human labor",
                    highlightWordSentenceId: 6
                },
                keywords: ["problem", "growing", "past"],
                keywordExplanations: {
                    "problem": "問題点を探す。",
                    "growing": "栽培に関して。",
                    "past": "過去の話。"
                },
                keywordMatches: [
                    { sentenceId: 6, text: "The work relied heavily on human labor", keyword: "problem" }
                ],
                choiceAdvice: "選択肢は栽培の問題点を問うています。第1段落で「人の労働力に大きく依存」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"The work relied heavily on human labor\"" },
                    { type: "arrow", content: "「作業は人の労働力に大きく依存していた」= 「多量の人の手による物理的な仕事を必要とした」" },
                    { type: "text", content: "選択肢1: \"It required a large amount of physical work by people.\"" },
                    { type: "conclusion", content: "relied heavily on human labor = required physical work by people → 正解: 1" }
                ]
            },
            // Q2: 第2段落 - Why popular in Europe
            {
                id: 2,
                text: "Why was Carolina Gold rice popular in Europe?",
                textTranslation: "なぜカロライナ・ゴールド米はヨーロッパで人気があったのですか？",
                choices: [
                    { id: 1, text: "It was much cheaper than other types of rice available there.", translation: "そこで入手可能な他の種類の米よりはるかに安かった。", isCorrect: false },
                    { id: 2, text: "It had a unique texture and could be used in many recipes.", translation: "独特の食感があり、多くのレシピに使うことができた。", isCorrect: true, highlight: "unique texture and could be used in many recipes" },
                    { id: 3, text: "It had a golden color that looked like expensive jewelry.", translation: "高価な宝石のように見える黄金色をしていた。", isCorrect: false },
                    { id: 4, text: "It could be harvested in winter when other food was scarce.", translation: "他の食料が少ない冬に収穫することができた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落でヨーロッパでの人気の理由が述べられています。「sticky enough」「wide variety of dishes」に注目。",
                    targetSentenceId: 10,
                    highlightWord: "it could be used in a wide variety of dishes",
                    highlightWordSentenceId: 10
                },
                keywords: ["popular", "Europe", "why"],
                keywordExplanations: {
                    "popular": "人気の理由。",
                    "Europe": "ヨーロッパで。",
                    "why": "理由を探す。"
                },
                keywordMatches: [
                    { sentenceId: 8, text: "It was sticky enough to be eaten with a fork", keyword: "unique texture" },
                    { sentenceId: 10, text: "it could be used in a wide variety of dishes", keyword: "many recipes" }
                ],
                choiceAdvice: "選択肢はヨーロッパでの人気の理由を問うています。第2段落で「幅広い料理に使える」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: 「sticky enough」（適度な粘り気） + 「could be used in a wide variety of dishes」（幅広い料理に使える）" },
                    { type: "arrow", content: "「独特の食感があり」+「多くの料理に使える」" },
                    { type: "text", content: "選択肢2: \"It had a unique texture and could be used in many recipes.\"" },
                    { type: "conclusion", content: "sticky = unique texture, variety of dishes = many recipes → 正解: 2" }
                ]
            },
            // Q3: 第3段落 - Why farmers stopped
            {
                id: 3,
                text: "Why did farmers stop growing Carolina Gold rice in the 20th century?",
                textTranslation: "なぜ農家は20世紀にカロライナ・ゴールド米の栽培をやめたのですか？",
                choices: [
                    { id: 1, text: "The weather became too hot for the rice to grow properly.", translation: "天候が米が適切に育つには暑すぎるようになった。", isCorrect: false },
                    { id: 2, text: "They wanted to use the land to build factories instead of farms.", translation: "農場の代わりに工場を建てるためにその土地を使いたかった。", isCorrect: false },
                    { id: 3, text: "The plants were too tall and difficult for machines to harvest.", translation: "植物が背が高すぎて機械で収穫するのが難しかった。", isCorrect: true, highlight: "too tall and difficult for machines to harvest" },
                    { id: 4, text: "Doctors discovered that the rice was not good for people's health.", translation: "医者がその米は人々の健康に良くないことを発見した。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で栽培中止の理由が述べられています。「grows very tall」「weak stems」「Modern harvesting machines could not easily collect」に注目。",
                    targetSentenceId: 13,
                    highlightWord: "This traditional plant grows very tall and has weak stems, making it easy for the wind to knock it over",
                    highlightWordSentenceId: 13
                },
                keywords: ["stop growing", "20th century", "why"],
                keywordExplanations: {
                    "stop growing": "栽培をやめた理由。",
                    "20th century": "20世紀。",
                    "why": "理由を探す。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "grows very tall and has weak stems", keyword: "too tall" },
                    { sentenceId: 14, text: "Modern harvesting machines could not easily collect the fallen rice", keyword: "difficult for machines" }
                ],
                choiceAdvice: "選択肢は栽培中止の理由を問うています。第3段落で「背が高く機械収穫が困難」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"grows very tall and has weak stems\" + \"Modern harvesting machines could not easily collect\"" },
                    { type: "arrow", content: "「背が高く育ち茎が弱い」+「機械が簡単に集められなかった」= 「背が高すぎて機械収穫が困難」" },
                    { type: "text", content: "選択肢3: \"The plants were too tall and difficult for machines to harvest.\"" },
                    { type: "conclusion", content: "grows very tall + machines could not collect = too tall and difficult → 正解: 3" }
                ]
            },
            // Q4: 第4段落 - Richard Schulze's contribution
            {
                id: 4,
                text: "Richard Schulze helped to bring back Carolina Gold rice by",
                textTranslation: "リチャード・シュルツはカロライナ・ゴールド米を復活させるために〜した",
                choices: [
                    { id: 1, text: "inventing a new machine to harvest the rice more easily.", translation: "米をより簡単に収穫するための新しい機械を発明した。", isCorrect: false },
                    { id: 2, text: "finding seeds in a bank and planting them on his land.", translation: "銀行で種子を見つけ、自分の土地に植えた。", isCorrect: true, highlight: "finding seeds in a bank and planting them on his land" },
                    { id: 3, text: "writing a book about the history of rice in South Carolina.", translation: "サウスカロライナの米の歴史についての本を書いた。", isCorrect: false },
                    { id: 4, text: "convincing the government to give money to rice farmers.", translation: "政府に米農家にお金を与えるよう説得した。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落でシュルツがどのように貢献したかが述べられています。「discovered some Carolina Gold seeds in a government seed bank」「plant them on his property」に注目。",
                    targetSentenceId: 18,
                    highlightWord: "discovered some Carolina Gold seeds in a government seed bank ... decided to plant them on his property",
                    highlightWordSentenceId: 18
                },
                keywords: ["Richard Schulze", "helped", "bring back"],
                keywordExplanations: {
                    "Richard Schulze": "シュルツの行動。",
                    "helped": "どのように貢献したか。",
                    "bring back": "復活させた方法。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "discovered some Carolina Gold seeds in a government seed bank", keyword: "finding seeds in a bank" },
                    { sentenceId: 19, text: "decided to plant them on his property", keyword: "planting them on his land" }
                ],
                choiceAdvice: "選択肢はシュルツの貢献を問うています。第4段落で「種子銀行で種を発見し、自分の土地に植えた」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"discovered some Carolina Gold seeds in a government seed bank\" + \"decided to plant them on his property\"" },
                    { type: "arrow", content: "「政府の種子銀行で種子を発見」+「自分の所有地に植えることを決めた」" },
                    { type: "text", content: "選択肢2: \"finding seeds in a bank and planting them on his land.\"" },
                    { type: "conclusion", content: "discovered in seed bank + plant on property = finding and planting → 正解: 2" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true about Carolina Gold rice?",
                textTranslation: "カロライナ・ゴールド米について正しい記述はどれですか？",
                choices: [
                    { id: 1, text: "It is now the most widely grown type of rice in the world.", translation: "現在、世界で最も広く栽培されている米の種類である。", isCorrect: false },
                    { id: 2, text: "It was completely unknown outside of the United States until recently.", translation: "最近まで米国以外では完全に知られていなかった。", isCorrect: false },
                    { id: 3, text: "It has weak stems that make it easy for the wind to knock it over.", translation: "茎が弱く、風で倒れやすい。", isCorrect: true, highlight: "weak stems that make it easy for the wind to knock it over" },
                    { id: 4, text: "It is no longer sticky enough to be eaten with a fork.", translation: "もはやフォークで食べられるほどの粘り気がない。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "各選択肢を本文と照合します。第3段落の「has weak stems, making it easy for the wind to knock it over」に注目。",
                    targetSentenceId: 13,
                    highlightWord: "has weak stems, making it easy for the wind to knock it over",
                    highlightWordSentenceId: 13
                },
                keywords: ["true", "Carolina Gold rice"],
                keywordExplanations: {
                    "true": "正しい記述を探す。",
                    "Carolina Gold rice": "この米について。"
                },
                keywordMatches: [
                    { sentenceId: 21, text: "the amount produced is still small", keyword: "not most widely grown (選択肢1は誤り)" },
                    { sentenceId: 4, text: "became famous around the world", keyword: "was known outside US (選択肢2は誤り)" },
                    { sentenceId: 13, text: "has weak stems, making it easy for the wind to knock it over", keyword: "true (選択肢3)" },
                    { sentenceId: 8, text: "It was sticky enough to be eaten with a fork", keyword: "is sticky (選択肢4は誤り)" }
                ],
                choiceAdvice: "各選択肢を本文と照合します。選択肢3は第3段落で確認できます。",
                logic: [
                    { type: "text", content: "選択肢1: 最も広く栽培←本文「生産量はまだ少ない」なので誤り" },
                    { type: "text", content: "選択肢2: 米国外で知られていなかった←本文「世界中で有名になった」なので誤り" },
                    { type: "text", content: "選択肢3: 茎が弱く風で倒れやすい←本文「has weak stems, making it easy for the wind to knock it over」と一致" },
                    { type: "text", content: "選択肢4: 粘り気がない←本文「sticky enough to be eaten with a fork」なので誤り" },
                    { type: "conclusion", content: "本文と一致するのは選択肢3のみ → 正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Carolina Gold Rice - 講師用要約",
            intro: "かつて米国南部で「黄金の米」として栄えたカロライナ・ゴールド・ライスの盛衰と復活についての説明文です。過去問の「Purple Straw Wheat」（2023年第2回）と同様に、歴史的な農作物の復活をテーマとしています。",
            points: [
                { label: "1. 歴史と課題（第1段落）", text: "米は米国南部で2世紀以上にわたり重要な作物でした。カロライナ・ゴールドは品質の高さで有名でしたが、生産には多大な人手（労働力）を必要とし、南北戦争後の社会変化により栽培維持が困難になりました。" },
                { label: "2. 特徴と人気（第2段落）", text: "美しい黄金色と独特の風味が特徴で、フォークで食べられる適度な粘り気がありました。ヨーロッパでは高級食材として人気を博し、シェフたちも多様な料理に使える点を評価しました。" },
                { label: "3. 衰退の理由（第3段落）", text: "20世紀の機械化が決定打となりました。この米は背が高く茎が弱いため風で倒れやすく、機械での収穫が困難でした。農家は機械化に適した背の低い新品種に切り替え、1900年代半ばにはほぼ姿を消しました。" },
                { label: "4. 復活（第4段落）", text: "1980年代、医師のリチャード・シュルツが政府の種子銀行で種を発見し、自分の土地で栽培を始めました。現在は生産量はまだ少ないものの、専門店で入手可能になり、食文化の遺産として守られています。" }
            ]
        }
    },
    // 2級 オリジナル問題9: Cremona's Violins
    {
        id: "grade-2-original-cremonas-violins",
        grade: "2級",
        title: "Cremona's Violins",
        subTitle: "問題9",
        genre: "文化 / 工芸",
        similarProblems: {
            exam: "2023年度 第2回",
            title: "Venice's Books"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Cremonas+Violins",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Historical Background
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "During the 16th century, the small Italian city of Cremona became the violin capital of the world.",
                        translation: "16世紀の間、イタリアの小さな都市クレモナは、世界のバイオリンの首都となりました。",
                        grammarAnalysis: {
                            mainVerbs: ["became"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(During the 16th century)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the small Italian city of Cremona</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the violin capital of the world</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(16世紀の間)</span>、<span class='t-S'>イタリアの小さな都市クレモナは</span> <span class='t-V'>なった</span> <span class='t-C'>世界のバイオリンの首都に</span>。",
                            naturalTranslation: "16世紀の間、イタリアの小さな都市クレモナは、世界のバイオリンの首都となりました。",
                            vocabulary: [
                                { word: "During the 16th century", meaning: "「16世紀の間」" },
                                { word: "became", meaning: "「〜になった」" },
                                { word: "the violin capital", meaning: "「バイオリンの首都」" }
                            ],
                            grammarNotes: [
                                { phrase: "become + 名詞", explanation: "<b>become + 名詞</b>: 「〜になる」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "The city was located near the Alps, where dense forests contained special spruce and maple trees.",
                        translation: "その都市はアルプス山脈の近くに位置しており、そこには特別なトウヒやカエデの木が生い茂る深い森がありました。",
                        grammarAnalysis: {
                            mainVerbs: ["was located", "contained"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The city</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was located</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(near the Alps)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(where [dense forests <span class='chunk V2-group'><span class='text'>contained</span><span class='tag'>V'</span></span> special spruce and maple trees])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>その都市は</span> <span class='t-V'>位置していた</span> <span class='t-M'>(アルプスの近くに)</span>、<span class='t-M'>(where [深い森が <span class='t-V2'>含んでいた</span>特別なトウヒやカエデの木を])</span>。",
                            naturalTranslation: "その都市はアルプス山脈の近くに位置しており、そこには特別なトウヒやカエデの木が生い茂る深い森がありました。",
                            vocabulary: [
                                { word: "was located near", meaning: "「〜の近くに位置していた」" },
                                { word: "the Alps", meaning: "「アルプス山脈」" },
                                { word: "dense forests", meaning: "「深い森」" },
                                { word: "spruce and maple trees", meaning: "「トウヒとカエデの木」" }
                            ],
                            grammarNotes: [
                                { phrase: "where", explanation: "<b>関係副詞where</b>: the Alpsを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "The wood from these trees had the perfect density for building string instruments.",
                        translation: "これらの木から採れる木材は、弦楽器を作るのに完璧な密度を持っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The wood (from these trees)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the perfect density (for building string instruments)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これらの木からの木材は</span> <span class='t-V'>持っていた</span> <span class='t-O'>完璧な密度を（弦楽器を作るための）</span>。",
                            naturalTranslation: "これらの木から採れる木材は、弦楽器を作るのに完璧な密度を持っていました。",
                            vocabulary: [
                                { word: "the perfect density", meaning: "「完璧な密度」" },
                                { word: "for building", meaning: "「〜を作るための」" },
                                { word: "string instruments", meaning: "「弦楽器」" }
                            ],
                            grammarNotes: [
                                { phrase: "for + 動名詞", explanation: "<b>for + 動名詞</b>: 「〜するために」。目的を表す。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "This access to high-quality materials, combined with a rich culture of music, attracted talented craftspeople to the city.",
                        translation: "この高品質な素材へのアクセスは、豊かな音楽文化と相まって、才能ある職人たちを都市に引き寄せました。",
                        grammarAnalysis: {
                            mainVerbs: ["attracted"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This access to high-quality materials</span><span class='tag'>S</span></span>, <span class='chunk M-group'><span class='text'>(combined with a rich culture of music)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>attracted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>talented craftspeople</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to the city)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この高品質な素材へのアクセスは</span>、<span class='t-M'>(豊かな音楽文化と相まって)</span>、<span class='t-V'>引き寄せた</span> <span class='t-O'>才能ある職人たちを</span> <span class='t-M'>(都市に)</span>。",
                            naturalTranslation: "この高品質な素材へのアクセスは、豊かな音楽文化と相まって、才能ある職人たちを都市に引き寄せました。",
                            vocabulary: [
                                { word: "access to", meaning: "「〜へのアクセス」" },
                                { word: "high-quality materials", meaning: "「高品質な素材」" },
                                { word: "combined with", meaning: "「〜と相まって」" },
                                { word: "talented craftspeople", meaning: "「才能ある職人たち」" }
                            ],
                            grammarNotes: [
                                { phrase: "combined with", explanation: "<b>過去分詞句</b>: 「〜と組み合わせて」。挿入句として主語を修飾。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "Following the success of early masters like Andrea Amati, these people shared their secrets to make Cremona the center of violin production in Europe.",
                        translation: "アンドレア・アマティのような初期の巨匠たちの成功に続き、これらの人々は秘密を共有し、クレモナをヨーロッパにおけるバイオリン生産の中心地にしました。",
                        grammarAnalysis: {
                            mainVerbs: ["shared"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Following the success of early masters like Andrea Amati)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>these people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>shared</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their secrets</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to make Cremona the center of violin production in Europe)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(初期の巨匠たちの成功に続き)</span>、<span class='t-S'>これらの人々は</span> <span class='t-V'>共有した</span> <span class='t-O'>秘密を</span> <span class='t-M'>(クレモナをヨーロッパのバイオリン生産の中心地にするために)</span>。",
                            naturalTranslation: "アンドレア・アマティのような初期の巨匠たちの成功に続き、これらの人々は秘密を共有し、クレモナをヨーロッパにおけるバイオリン生産の中心地にしました。",
                            vocabulary: [
                                { word: "Following the success", meaning: "「〜の成功に続いて」" },
                                { word: "early masters", meaning: "「初期の巨匠たち」" },
                                { word: "shared their secrets", meaning: "「秘密を共有した」" },
                                { word: "the center of", meaning: "「〜の中心地」" }
                            ],
                            grammarNotes: [
                                { phrase: "Following + 名詞", explanation: "<b>分詞構文</b>: 「〜に続いて」。" },
                                { phrase: "to make ... the center", explanation: "<b>不定詞の副詞的用法（目的）</b>: 「〜にするために」。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "This tradition of making world-class violins by hand survives in the city to this day.",
                        translation: "世界クラスのバイオリンを手作業で作るというこの伝統は、今日までこの都市に残っています。",
                        grammarAnalysis: {
                            mainVerbs: ["survives"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This tradition (of making world-class violins by hand)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>survives</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the city) (to this day)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この伝統（世界クラスのバイオリンを手作業で作るという）は</span> <span class='t-V'>残っている</span> <span class='t-M'>(この都市に) (今日まで)</span>。",
                            naturalTranslation: "世界クラスのバイオリンを手作業で作るというこの伝統は、今日までこの都市に残っています。",
                            vocabulary: [
                                { word: "world-class violins", meaning: "「世界クラスのバイオリン」" },
                                { word: "by hand", meaning: "「手作業で」" },
                                { word: "survives", meaning: "「残っている、生き残る」" },
                                { word: "to this day", meaning: "「今日まで」" }
                            ],
                            grammarNotes: [
                                { phrase: "of making ...", explanation: "<b>of + 動名詞</b>: 伝統の内容を説明。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: Modern Craftspeople
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "Leo Bianchi is helping to keep this tradition alive.",
                        translation: "レオ・ビアンキはこの伝統を存続させる手助けをしています。",
                        grammarAnalysis: {
                            mainVerbs: ["is helping"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Leo Bianchi</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is helping</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to keep this tradition alive</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>レオ・ビアンキは</span> <span class='t-V'>手助けしている</span> <span class='t-O'>この伝統を存続させることを</span>。",
                            naturalTranslation: "レオ・ビアンキはこの伝統を存続させる手助けをしています。",
                            vocabulary: [
                                { word: "is helping to keep", meaning: "「〜を保つ手助けをしている」" },
                                { word: "keep ... alive", meaning: "「〜を存続させる」" }
                            ],
                            grammarNotes: [
                                { phrase: "help to do", explanation: "<b>help to do</b>: 「〜するのを手伝う」。" },
                                { phrase: "keep + O + 形容詞", explanation: "<b>keep O + 形容詞</b>: 「Oを〜に保つ」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "He makes use of techniques that have existed for centuries to produce beautiful violins, violas, and cellos.",
                        translation: "彼は何世紀にもわたって存在してきた技術を駆使して、美しいバイオリン、ビオラ、チェロを制作しています。",
                        grammarAnalysis: {
                            mainVerbs: ["makes use of", "have existed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>makes use of</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>techniques (that [<span class='chunk V2-group'><span class='text'>have existed</span><span class='tag'>V'</span></span> for centuries])</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to produce beautiful violins, violas, and cellos)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>利用する</span> <span class='t-O'>技術を（that [<span class='t-V2'>存在してきた</span>何世紀にもわたって]）</span> <span class='t-M'>(美しいバイオリン、ビオラ、チェロを生産するために)</span>。",
                            naturalTranslation: "彼は何世紀にもわたって存在してきた技術を駆使して、美しいバイオリン、ビオラ、チェロを制作しています。",
                            vocabulary: [
                                { word: "makes use of", meaning: "「〜を利用する」" },
                                { word: "have existed for centuries", meaning: "「何世紀にもわたって存在してきた」" },
                                { word: "violas", meaning: "「ビオラ」" },
                                { word: "cellos", meaning: "「チェロ」" }
                            ],
                            grammarNotes: [
                                { phrase: "make use of", explanation: "<b>make use of</b>: 「〜を利用する」。" },
                                { phrase: "that have existed", explanation: "<b>関係代名詞that + 現在完了</b>: 継続を表す。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "The wood is carefully selected and aged naturally, and the parts are carved using simple hand tools.",
                        translation: "木材は慎重に選ばれて自然乾燥され、部品はシンプルな手道具を使って彫られます。",
                        grammarAnalysis: {
                            mainVerbs: ["is selected", "aged", "are carved"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The wood</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is carefully selected and aged naturally</span><span class='tag'>V</span></span>, and <span class='chunk S-group'><span class='text'>the parts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are carved</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(using simple hand tools)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>木材は</span> <span class='t-V'>慎重に選ばれて自然乾燥される</span>、and <span class='t-S'>部品は</span> <span class='t-V'>彫られる</span> <span class='t-M'>(シンプルな手道具を使って)</span>。",
                            naturalTranslation: "木材は慎重に選ばれて自然乾燥され、部品はシンプルな手道具を使って彫られます。",
                            vocabulary: [
                                { word: "carefully selected", meaning: "「慎重に選ばれた」" },
                                { word: "aged naturally", meaning: "「自然乾燥された」" },
                                { word: "carved", meaning: "「彫られた」" },
                                { word: "hand tools", meaning: "「手道具」" }
                            ],
                            grammarNotes: [
                                { phrase: "is selected and aged", explanation: "<b>受動態</b>: 「選ばれて乾燥される」。" },
                                { phrase: "using simple hand tools", explanation: "<b>分詞構文</b>: 手段を表す。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "Finally, the instruments are covered in a special varnish made from natural ingredients.",
                        translation: "最後に、楽器は天然成分で作られた特別なニスで覆われます。",
                        grammarAnalysis: {
                            mainVerbs: ["are covered"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Finally)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the instruments</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are covered</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in a special varnish (made from natural ingredients))</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(最後に)</span>、<span class='t-S'>楽器は</span> <span class='t-V'>覆われる</span> <span class='t-M'>(特別なニスで（天然成分で作られた））</span>。",
                            naturalTranslation: "最後に、楽器は天然成分で作られた特別なニスで覆われます。",
                            vocabulary: [
                                { word: "are covered in", meaning: "「〜で覆われる」" },
                                { word: "varnish", meaning: "「ニス」" },
                                { word: "natural ingredients", meaning: "「天然成分」" }
                            ],
                            grammarNotes: [
                                { phrase: "made from", explanation: "<b>過去分詞句</b>: varnishを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "When Bianchi began learning his craft in 1985, many young people were leaving Cremona to find modern jobs.",
                        translation: "ビアンキが1985年に技術を学び始めたとき、多くの若者は現代的な仕事を見つけるためにクレモナを離れていました。",
                        grammarAnalysis: {
                            mainVerbs: ["began", "were leaving"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When [Bianchi <span class='chunk V2-group'><span class='text'>began</span><span class='tag'>V'</span></span> learning his craft in 1985])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many young people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were leaving</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>Cremona</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to find modern jobs)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(When [ビアンキが <span class='t-V2'>始めた</span>技術を学ぶことを1985年に])</span>、<span class='t-S'>多くの若者は</span> <span class='t-V'>離れていた</span> <span class='t-O'>クレモナを</span> <span class='t-M'>(現代的な仕事を見つけるために)</span>。",
                            naturalTranslation: "ビアンキが1985年に技術を学び始めたとき、多くの若者は現代的な仕事を見つけるためにクレモナを離れていました。",
                            vocabulary: [
                                { word: "began learning his craft", meaning: "「技術を学び始めた」" },
                                { word: "were leaving", meaning: "「離れていた」" },
                                { word: "modern jobs", meaning: "「現代的な仕事」" }
                            ],
                            grammarNotes: [
                                { phrase: "were leaving", explanation: "<b>過去進行形</b>: 過去のある時点で進行中の動作。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "Now, however, there is renewed interest, and Bianchi is one of the masters leading this revival.",
                        translation: "しかし現在、関心が再び高まっており、ビアンキはこの復活を牽引する巨匠の一人です。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Now, however)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>there</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>renewed interest</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>Bianchi</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>one of the masters (leading this revival)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし現在)</span>、<span class='t-S'>there</span> <span class='t-V'>がある</span> <span class='t-C'>再び高まった関心</span>、and <span class='t-S'>ビアンキは</span> <span class='t-V'>である</span> <span class='t-C'>巨匠の一人（この復活を牽引する）</span>。",
                            naturalTranslation: "しかし現在、関心が再び高まっており、ビアンキはこの復活を牽引する巨匠の一人です。",
                            vocabulary: [
                                { word: "renewed interest", meaning: "「再び高まった関心」" },
                                { word: "one of the masters", meaning: "「巨匠の一人」" },
                                { word: "leading this revival", meaning: "「この復活を牽引する」" }
                            ],
                            grammarNotes: [
                                { phrase: "there is", explanation: "<b>there is + 名詞</b>: 「〜がある」。" },
                                { phrase: "leading this revival", explanation: "<b>現在分詞句</b>: mastersを修飾。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Historical Hero
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "One of Bianchi's heroes is Antonio Stradivari.",
                        translation: "ビアンキの英雄の一人は、アントニオ・ストラディバリです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>One of Bianchi's heroes</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>Antonio Stradivari</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>ビアンキの英雄の一人は</span> <span class='t-V'>である</span> <span class='t-C'>アントニオ・ストラディバリ</span>。",
                            naturalTranslation: "ビアンキの英雄の一人は、アントニオ・ストラディバリです。",
                            vocabulary: [
                                { word: "One of ... heroes", meaning: "「〜の英雄の一人」" }
                            ],
                            grammarNotes: [
                                { phrase: "One of + 複数名詞", explanation: "<b>One of + 複数名詞</b>: 「〜のうちの一人」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "Stradivari established his own workshop in 1680 and became the most skilled violin maker in history.",
                        translation: "ストラディバリは1680年に自身の工房を設立し、歴史上最も熟練したバイオリン製作者となりました。",
                        grammarAnalysis: {
                            mainVerbs: ["established", "became"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Stradivari</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>established</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>his own workshop</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in 1680)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the most skilled violin maker in history</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>ストラディバリは</span> <span class='t-V'>設立した</span> <span class='t-O'>自身の工房を</span> <span class='t-M'>(1680年に)</span> and <span class='t-V'>なった</span> <span class='t-C'>歴史上最も熟練したバイオリン製作者に</span>。",
                            naturalTranslation: "ストラディバリは1680年に自身の工房を設立し、歴史上最も熟練したバイオリン製作者となりました。",
                            vocabulary: [
                                { word: "established", meaning: "「設立した」" },
                                { word: "his own workshop", meaning: "「自身の工房」" },
                                { word: "the most skilled", meaning: "「最も熟練した」" }
                            ],
                            grammarNotes: [
                                { phrase: "established", explanation: "<b>establish</b>: 「設立する」。" },
                                { phrase: "the most skilled", explanation: "<b>最上級</b>: 「最も〜な」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "Until that time, violins were often used for small chamber music and had a softer sound.",
                        translation: "その時まで、バイオリンはしばしば小規模な室内楽に使われ、より柔らかい音色を持っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["were used", "had"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Until that time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>violins</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were often used</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for small chamber music)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a softer sound</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(その時まで)</span>、<span class='t-S'>バイオリンは</span> <span class='t-V'>しばしば使われていた</span> <span class='t-M'>(小規模な室内楽に)</span> and <span class='t-V'>持っていた</span> <span class='t-O'>より柔らかい音色を</span>。",
                            naturalTranslation: "その時まで、バイオリンはしばしば小規模な室内楽に使われ、より柔らかい音色を持っていました。",
                            vocabulary: [
                                { word: "Until that time", meaning: "「その時まで」" },
                                { word: "chamber music", meaning: "「室内楽」" },
                                { word: "a softer sound", meaning: "「より柔らかい音色」" }
                            ],
                            grammarNotes: [
                                { phrase: "Until that time", explanation: "<b>until + 時</b>: 「〜まで」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "Stradivari developed techniques to change the shape of the body and the flatness of the arch.",
                        translation: "ストラディバリは、ボディの形状やアーチの平らさを変える技術を開発しました。",
                        grammarAnalysis: {
                            mainVerbs: ["developed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Stradivari</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>developed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>techniques (to change the shape of the body and the flatness of the arch)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ストラディバリは</span> <span class='t-V'>開発した</span> <span class='t-O'>技術を（ボディの形状やアーチの平らさを変えるための）</span>。",
                            naturalTranslation: "ストラディバリは、ボディの形状やアーチの平らさを変える技術を開発しました。",
                            vocabulary: [
                                { word: "developed techniques", meaning: "「技術を開発した」" },
                                { word: "the shape of the body", meaning: "「ボディの形状」" },
                                { word: "the flatness of the arch", meaning: "「アーチの平らさ」" }
                            ],
                            grammarNotes: [
                                { phrase: "to change", explanation: "<b>不定詞（形容詞的用法）</b>: techniquesを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "Moreover, he created a unique varnish that improved the tone.",
                        translation: "さらに、彼は音色を向上させる独自のニスを作り出しました。",
                        grammarAnalysis: {
                            mainVerbs: ["created", "improved"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Moreover)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>created</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a unique varnish (that [<span class='chunk V2-group'><span class='text'>improved</span><span class='tag'>V'</span></span> the tone])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-S'>彼は</span> <span class='t-V'>作り出した</span> <span class='t-O'>独自のニスを（that [<span class='t-V2'>向上させた</span>音色を]）</span>。",
                            naturalTranslation: "さらに、彼は音色を向上させる独自のニスを作り出しました。",
                            vocabulary: [
                                { word: "Moreover", meaning: "「さらに」" },
                                { word: "a unique varnish", meaning: "「独自のニス」" },
                                { word: "improved the tone", meaning: "「音色を向上させた」" }
                            ],
                            grammarNotes: [
                                { phrase: "that improved", explanation: "<b>関係代名詞that</b>: varnishを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "These developments produced a powerful sound that could fill large concert halls, making the violin a leading solo instrument.",
                        translation: "これらの進歩により、大きなコンサートホールを満たすことのできる力強い音が生まれ、バイオリンは主要な独奏楽器となりました。",
                        grammarAnalysis: {
                            mainVerbs: ["produced", "could fill"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These developments</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>produced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a powerful sound (that [<span class='chunk V2-group'><span class='text'>could fill</span><span class='tag'>V'</span></span> large concert halls])</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(making the violin a leading solo instrument)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これらの進歩は</span> <span class='t-V'>生み出した</span> <span class='t-O'>力強い音を（that [<span class='t-V2'>満たすことができた</span>大きなコンサートホールを]）</span>、<span class='t-M'>(バイオリンを主要な独奏楽器にしながら)</span>。",
                            naturalTranslation: "これらの進歩により、大きなコンサートホールを満たすことのできる力強い音が生まれ、バイオリンは主要な独奏楽器となりました。",
                            vocabulary: [
                                { word: "These developments", meaning: "「これらの進歩」" },
                                { word: "a powerful sound", meaning: "「力強い音」" },
                                { word: "fill large concert halls", meaning: "「大きなコンサートホールを満たす」" },
                                { word: "a leading solo instrument", meaning: "「主要な独奏楽器」" }
                            ],
                            grammarNotes: [
                                { phrase: "making the violin", explanation: "<b>分詞構文（結果）</b>: 「その結果〜となった」。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Future Vision
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 19,
                        text: "Bianchi hangs a copy of a Stradivari design on the wall of his workshop.",
                        translation: "ビアンキは工房の壁にストラディバリの設計図の写しを掛けています。",
                        grammarAnalysis: {
                            mainVerbs: ["hangs"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Bianchi</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>hangs</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a copy of a Stradivari design</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(on the wall of his workshop)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ビアンキは</span> <span class='t-V'>掛けている</span> <span class='t-O'>ストラディバリの設計図の写しを</span> <span class='t-M'>(工房の壁に)</span>。",
                            naturalTranslation: "ビアンキは工房の壁にストラディバリの設計図の写しを掛けています。",
                            vocabulary: [
                                { word: "hangs", meaning: "「掛けている」" },
                                { word: "a copy of", meaning: "「〜の写し」" },
                                { word: "design", meaning: "「設計図」" }
                            ],
                            grammarNotes: [
                                { phrase: "hangs", explanation: "<b>hang</b>: 「掛ける」。習慣的行為。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Like Stradivari, he dedicates his life to the pursuit of perfect sound.",
                        translation: "ストラディバリと同じように、彼は完璧な音の追求に人生を捧げています。",
                        grammarAnalysis: {
                            mainVerbs: ["dedicates"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Like Stradivari)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>dedicates</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>his life</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to the pursuit of perfect sound)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(ストラディバリと同じように)</span>、<span class='t-S'>彼は</span> <span class='t-V'>捧げている</span> <span class='t-O'>人生を</span> <span class='t-M'>(完璧な音の追求に)</span>。",
                            naturalTranslation: "ストラディバリと同じように、彼は完璧な音の追求に人生を捧げています。",
                            vocabulary: [
                                { word: "Like Stradivari", meaning: "「ストラディバリのように」" },
                                { word: "dedicates his life to", meaning: "「人生を〜に捧げる」" },
                                { word: "the pursuit of", meaning: "「〜の追求」" }
                            ],
                            grammarNotes: [
                                { phrase: "dedicate ... to", explanation: "<b>dedicate ... to</b>: 「〜を…に捧げる」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "Over the years, Bianchi has trained several apprentices who now have their own shops.",
                        translation: "長年にわたり、ビアンキは何人かの弟子を育て、彼らは現在自分の店を持っています。",
                        grammarAnalysis: {
                            mainVerbs: ["has trained", "have"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Over the years)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Bianchi</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has trained</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>several apprentices (who [now <span class='chunk V2-group'><span class='text'>have</span><span class='tag'>V'</span></span> their own shops])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(長年にわたり)</span>、<span class='t-S'>ビアンキは</span> <span class='t-V'>育ててきた</span> <span class='t-O'>何人かの弟子を（who [今 <span class='t-V2'>持っている</span>自分の店を]）</span>。",
                            naturalTranslation: "長年にわたり、ビアンキは何人かの弟子を育て、彼らは現在自分の店を持っています。",
                            vocabulary: [
                                { word: "Over the years", meaning: "「長年にわたり」" },
                                { word: "has trained", meaning: "「育ててきた」" },
                                { word: "apprentices", meaning: "「弟子」" }
                            ],
                            grammarNotes: [
                                { phrase: "has trained", explanation: "<b>現在完了形</b>: 過去から現在までの経験を表す。" },
                                { phrase: "who now have", explanation: "<b>関係代名詞who</b>: apprenticesを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Last year, the city council invited Bianchi to give a speech at an international music festival.",
                        translation: "昨年、市議会は国際音楽祭でスピーチをするようビアンキを招待しました。",
                        grammarAnalysis: {
                            mainVerbs: ["invited"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Last year)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the city council</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>invited</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>Bianchi</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to give a speech at an international music festival)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(昨年)</span>、<span class='t-S'>市議会は</span> <span class='t-V'>招待した</span> <span class='t-O'>ビアンキを</span> <span class='t-M'>(国際音楽祭でスピーチをするように)</span>。",
                            naturalTranslation: "昨年、市議会は国際音楽祭でスピーチをするようビアンキを招待しました。",
                            vocabulary: [
                                { word: "the city council", meaning: "「市議会」" },
                                { word: "invited ... to", meaning: "「〜を…に招待した」" },
                                { word: "give a speech", meaning: "「スピーチをする」" },
                                { word: "international music festival", meaning: "「国際音楽祭」" }
                            ],
                            grammarNotes: [
                                { phrase: "invite O to do", explanation: "<b>invite O to do</b>: 「Oに〜するよう招待する」。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "This gave Bianchi a chance to get more people interested in the art of luthiery.",
                        translation: "これはビアンキにとって、より多くの人々に弦楽器製作の芸術に興味を持ってもらう機会となりました。",
                        grammarAnalysis: {
                            mainVerbs: ["gave"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>gave</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>Bianchi</span><span class='tag'>O1</span></span> <span class='chunk O-group'><span class='text'>a chance (to get more people interested in the art of luthiery)</span><span class='tag'>O2</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>与えた</span> <span class='t-O'>ビアンキに</span> <span class='t-O'>機会を（より多くの人々に弦楽器製作の芸術に興味を持ってもらう）</span>。",
                            naturalTranslation: "これはビアンキにとって、より多くの人々に弦楽器製作の芸術に興味を持ってもらう機会となりました。",
                            vocabulary: [
                                { word: "gave ... a chance", meaning: "「〜に機会を与えた」" },
                                { word: "get ... interested in", meaning: "「〜に興味を持たせる」" },
                                { word: "luthiery", meaning: "「弦楽器製作」" }
                            ],
                            grammarNotes: [
                                { phrase: "gave O1 O2", explanation: "<b>give O1 O2</b>: 「O1にO2を与える」。第4文型。" },
                                { phrase: "get O interested in", explanation: "<b>get O + 過去分詞</b>: 「Oを〜させる」。" }
                            ]
                        }
                    },
                    {
                        id: 24,
                        text: "Bianchi wants to expand his workshop into a training center where visitors can watch him work and students can learn his methods.",
                        translation: "ビアンキは自分の工房を、訪問者が作業を見学でき、学生が技術を学べるトレーニングセンターへと拡張したいと考えています。",
                        grammarAnalysis: {
                            mainVerbs: ["wants", "can watch", "can learn"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Bianchi</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wants</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to expand his workshop into a training center (where [visitors <span class='chunk V2-group'><span class='text'>can watch</span><span class='tag'>V'</span></span> him work] and [students <span class='chunk V3-group'><span class='text'>can learn</span><span class='tag'>V''</span></span> his methods])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ビアンキは</span> <span class='t-V'>望んでいる</span> <span class='t-O'>工房をトレーニングセンターに拡張することを（where [訪問者が <span class='t-V2'>見ることができる</span>彼の作業を] and [学生が <span class='t-V3'>学ぶことができる</span>彼の技術を]）</span>。",
                            naturalTranslation: "ビアンキは自分の工房を、訪問者が作業を見学でき、学生が技術を学べるトレーニングセンターへと拡張したいと考えています。",
                            vocabulary: [
                                { word: "wants to expand", meaning: "「拡張したいと考えている」" },
                                { word: "a training center", meaning: "「トレーニングセンター」" },
                                { word: "watch him work", meaning: "「彼の作業を見る」" },
                                { word: "learn his methods", meaning: "「彼の技術を学ぶ」" }
                            ],
                            grammarNotes: [
                                { phrase: "expand ... into", explanation: "<b>expand A into B</b>: 「AをBに拡張する」。" },
                                { phrase: "where visitors can", explanation: "<b>関係副詞where</b>: training centerを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 25,
                        text: "By doing so, he hopes to prevent the secrets of Cremona from being lost.",
                        translation: "そうすることで、彼はクレモナの秘密が失われるのを防ぎたいと願っています。",
                        grammarAnalysis: {
                            mainVerbs: ["hopes"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(By doing so)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>hopes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to prevent the secrets of Cremona from being lost</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(そうすることで)</span>、<span class='t-S'>彼は</span> <span class='t-V'>望んでいる</span> <span class='t-O'>クレモナの秘密が失われるのを防ぐことを</span>。",
                            naturalTranslation: "そうすることで、彼はクレモナの秘密が失われるのを防ぎたいと願っています。",
                            vocabulary: [
                                { word: "By doing so", meaning: "「そうすることで」" },
                                { word: "hopes to prevent", meaning: "「防ぎたいと望んでいる」" },
                                { word: "the secrets of Cremona", meaning: "「クレモナの秘密」" },
                                { word: "from being lost", meaning: "「失われることから」" }
                            ],
                            grammarNotes: [
                                { phrase: "By doing so", explanation: "<b>By + 動名詞</b>: 手段を表す。「〜することで」。" },
                                { phrase: "prevent ... from being", explanation: "<b>prevent O from doing</b>: 「Oが〜するのを防ぐ」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Why craftspeople were attracted
            {
                id: 1,
                text: "What is one reason that craftspeople were attracted to Cremona?",
                textTranslation: "職人たちがクレモナに魅かれた理由の一つは何ですか？",
                choices: [
                    { id: 1, text: "The city had fewer taxes on businesses than other Italian cities.", translation: "その都市は他のイタリアの都市よりも事業税が少なかった。", isCorrect: false },
                    { id: 2, text: "The city was located near forests that provided excellent wood.", translation: "その都市は良質な木材を提供する森の近くに位置していた。", isCorrect: true, highlight: "near forests that provided excellent wood" },
                    { id: 3, text: "The city was famous for having the best opera houses in Europe.", translation: "その都市はヨーロッパで最高のオペラハウスがあることで有名だった。", isCorrect: false },
                    { id: 4, text: "The city offered free workshops for people to learn how to make tools.", translation: "その都市は人々が道具の作り方を学べる無料の工房を提供していた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で職人が惹かれた理由が述べられています。「located near the Alps, where dense forests contained special ... trees」に注目。",
                    targetSentenceId: 4,
                    highlightWord: "This access to high-quality materials ... attracted talented craftspeople to the city",
                    highlightWordSentenceId: 4
                },
                keywords: ["reason", "attracted", "Cremona"],
                keywordExplanations: {
                    "reason": "理由を探す。",
                    "attracted": "惹きつけた。",
                    "Cremona": "この都市に。"
                },
                keywordMatches: [
                    { sentenceId: 2, text: "located near the Alps, where dense forests contained special spruce and maple trees", keyword: "near forests" },
                    { sentenceId: 4, text: "access to high-quality materials ... attracted talented craftspeople", keyword: "attracted" }
                ],
                choiceAdvice: "選択肢は職人が惹かれた理由を問うています。第1段落で「良質な木材へのアクセス」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"The city was located near the Alps, where dense forests contained special spruce and maple trees\"" },
                    { type: "arrow", content: "「アルプス近くに位置し、特別なトウヒやカエデの森があった」= 「良質な木材を提供する森の近く」" },
                    { type: "text", content: "選択肢2: \"The city was located near forests that provided excellent wood.\"" },
                    { type: "conclusion", content: "dense forests + special trees = forests that provided excellent wood → 正解: 2" }
                ]
            },
            // Q2: 第2段落 - Leo Bianchi's methods
            {
                id: 2,
                text: "Leo Bianchi is a violin maker who",
                textTranslation: "レオ・ビアンキは〜バイオリン製作者です",
                choices: [
                    { id: 1, text: "uses modern machines to produce instruments quickly.", translation: "現代の機械を使って楽器を素早く生産する。", isCorrect: false },
                    { id: 2, text: "focuses on making cheap violins for students.", translation: "学生向けの安価なバイオリン作りに集中している。", isCorrect: false },
                    { id: 3, text: "uses traditional methods and tools to make instruments.", translation: "伝統的な手法と道具を使って楽器を作る。", isCorrect: true, highlight: "traditional methods and tools" },
                    { id: 4, text: "invented a new type of varnish made from plastic.", translation: "プラスチック製の新しいタイプのニスを発明した。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落でビアンキの製作方法が述べられています。「techniques that have existed for centuries」「simple hand tools」に注目。",
                    targetSentenceId: 8,
                    highlightWord: "makes use of techniques that have existed for centuries ... carved using simple hand tools",
                    highlightWordSentenceId: 8
                },
                keywords: ["Leo Bianchi", "violin maker", "who"],
                keywordExplanations: {
                    "Leo Bianchi": "ビアンキについて。",
                    "violin maker": "どんな製作者か。",
                    "who": "特徴を探す。"
                },
                keywordMatches: [
                    { sentenceId: 8, text: "techniques that have existed for centuries", keyword: "traditional methods" },
                    { sentenceId: 9, text: "carved using simple hand tools", keyword: "traditional tools" }
                ],
                choiceAdvice: "選択肢はビアンキの製作方法を問うています。第2段落で「何世紀も存在してきた技術」「手道具」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"techniques that have existed for centuries\" + \"carved using simple hand tools\"" },
                    { type: "arrow", content: "「何世紀も存在してきた技術」+「シンプルな手道具」= 「伝統的な手法と道具」" },
                    { type: "text", content: "選択肢3: \"uses traditional methods and tools to make instruments.\"" },
                    { type: "conclusion", content: "existed for centuries + simple hand tools = traditional methods and tools → 正解: 3" }
                ]
            },
            // Q3: 第3段落 - Stradivari's improvements
            {
                id: 3,
                text: "Antonio Stradivari helped to improve the violin by",
                textTranslation: "アントニオ・ストラディバリはバイオリンを〜によって改良しました",
                choices: [
                    { id: 1, text: "making the instrument smaller so it was easier to hold.", translation: "楽器をより小さくして持ちやすくした。", isCorrect: false },
                    { id: 2, text: "writing music specifically for the violins he created.", translation: "自分が作ったバイオリン専用の音楽を書いた。", isCorrect: false },
                    { id: 3, text: "changing the shape and varnish to produce a more powerful sound.", translation: "形状とニスを変えてより力強い音を出した。", isCorrect: true, highlight: "changing the shape and varnish to produce a more powerful sound" },
                    { id: 4, text: "using a new type of metal to make the strings stronger.", translation: "新しいタイプの金属を使って弦をより強くした。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落でストラディバリの改良点が述べられています。「change the shape of the body」「created a unique varnish」「produced a powerful sound」に注目。",
                    targetSentenceId: 16,
                    highlightWord: "developed techniques to change the shape of the body ... created a unique varnish that improved the tone",
                    highlightWordSentenceId: 16
                },
                keywords: ["Stradivari", "helped to improve", "by"],
                keywordExplanations: {
                    "Stradivari": "ストラディバリの行動。",
                    "helped to improve": "改良した方法。",
                    "by": "手段を探す。"
                },
                keywordMatches: [
                    { sentenceId: 16, text: "developed techniques to change the shape of the body", keyword: "changing the shape" },
                    { sentenceId: 17, text: "created a unique varnish that improved the tone", keyword: "varnish" },
                    { sentenceId: 18, text: "produced a powerful sound", keyword: "powerful sound" }
                ],
                choiceAdvice: "選択肢はストラディバリの改良方法を問うています。第3段落で「形状の変更」「独自のニス」「力強い音」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"change the shape of the body\" + \"created a unique varnish\" → \"produced a powerful sound\"" },
                    { type: "arrow", content: "「形状を変える」+「独自のニスを作る」→「力強い音を生み出した」" },
                    { type: "text", content: "選択肢3: \"changing the shape and varnish to produce a more powerful sound.\"" },
                    { type: "conclusion", content: "change shape + varnish = powerful sound → 正解: 3" }
                ]
            },
            // Q4: 第4段落 - Bianchi's wish
            {
                id: 4,
                text: "What is one thing that Bianchi would like to do?",
                textTranslation: "ビアンキがしたいと思っていることの一つは何ですか？",
                choices: [
                    { id: 1, text: "Open a training center to teach his methods to others.", translation: "他の人に自分の技術を教えるトレーニングセンターを開く。", isCorrect: true, highlight: "Open a training center to teach his methods" },
                    { id: 2, text: "Sell his workshop and retire to the countryside.", translation: "工房を売って田舎に隠居する。", isCorrect: false },
                    { id: 3, text: "Discover the lost diary of Antonio Stradivari.", translation: "アントニオ・ストラディバリの失われた日記を発見する。", isCorrect: false },
                    { id: 4, text: "Move his business to a larger city like Rome or Milan.", translation: "ローマやミラノのような大都市に事業を移す。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落でビアンキの希望が述べられています。「wants to expand his workshop into a training center」に注目。",
                    targetSentenceId: 24,
                    highlightWord: "Bianchi wants to expand his workshop into a training center where ... students can learn his methods",
                    highlightWordSentenceId: 24
                },
                keywords: ["Bianchi", "would like to do", "one thing"],
                keywordExplanations: {
                    "Bianchi": "ビアンキの行動。",
                    "would like to do": "したいこと。",
                    "one thing": "一つを探す。"
                },
                keywordMatches: [
                    { sentenceId: 24, text: "wants to expand his workshop into a training center where ... students can learn his methods", keyword: "training center to teach" }
                ],
                choiceAdvice: "選択肢はビアンキの希望を問うています。第4段落で「工房をトレーニングセンターに拡張」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"wants to expand his workshop into a training center where ... students can learn his methods\"" },
                    { type: "arrow", content: "「工房をトレーニングセンターに拡張したい」+「学生が技術を学べる」" },
                    { type: "text", content: "選択肢1: \"Open a training center to teach his methods to others.\"" },
                    { type: "conclusion", content: "training center + learn his methods = teach his methods → 正解: 1" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の記述のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "Antonio Stradivari opened his own workshop in 1680.", translation: "アントニオ・ストラディバリは1680年に自分の工房を開いた。", isCorrect: true, highlight: "opened his own workshop in 1680" },
                    { id: 2, text: "Leo Bianchi is the only violin maker left in Cremona today.", translation: "レオ・ビアンキは今日クレモナに残る唯一のバイオリン製作者である。", isCorrect: false },
                    { id: 3, text: "Violins made before Stradivari were too loud for small rooms.", translation: "ストラディバリ以前のバイオリンは小部屋には音が大きすぎた。", isCorrect: false },
                    { id: 4, text: "The city of Cremona is located far away from any forests.", translation: "クレモナ市はどの森からも遠く離れた場所にある。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "各選択肢を本文と照合します。第3段落の「established his own workshop in 1680」に注目。",
                    targetSentenceId: 14,
                    highlightWord: "Stradivari established his own workshop in 1680",
                    highlightWordSentenceId: 14
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい記述を探す。",
                    "statements": "各選択肢を確認。"
                },
                keywordMatches: [
                    { sentenceId: 14, text: "Stradivari established his own workshop in 1680", keyword: "true (選択肢1)" },
                    { sentenceId: 12, text: "Bianchi is one of the masters", keyword: "not the only one (選択肢2は誤り)" },
                    { sentenceId: 15, text: "had a softer sound", keyword: "softer, not loud (選択肢3は誤り)" },
                    { sentenceId: 2, text: "located near the Alps, where dense forests", keyword: "near forests (選択肢4は誤り)" }
                ],
                choiceAdvice: "各選択肢を本文と照合します。選択肢1は第3段落で確認できます。",
                logic: [
                    { type: "text", content: "選択肢1: 1680年に工房設立←本文「established his own workshop in 1680」と一致" },
                    { type: "text", content: "選択肢2: 唯一の製作者←本文「one of the masters」なので誤り" },
                    { type: "text", content: "選択肢3: 音が大きすぎた←本文「a softer sound」なので誤り" },
                    { type: "text", content: "選択肢4: 森から遠い←本文「near the Alps, where dense forests」なので誤り" },
                    { type: "conclusion", content: "本文と一致するのは選択肢1のみ → 正解: 1" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Cremona's Violins - 講師用要約",
            intro: "イタリアのクレモナにおけるバイオリン製作の伝統についての文章です。過去問の「Venice's Books」（2023年第2回）と同様に、イタリアの伝統工芸の現代への継承をテーマとしています。",
            points: [
                { label: "1. 歴史的背景（第1段落）", text: "16世紀、クレモナはバイオリン製作の中心地となりました。アルプス近くの森林から良質な木材（トウヒやカエデ）が入手できたことが、多くの才能ある職人を惹きつけた主な理由です。" },
                { label: "2. 現代の職人（第2段落）", text: "レオ・ビアンキは、手道具や天然のニスを使用する数世紀前の技術を守り続けています。一時期は後継者不足でしたが、現在は伝統への関心が復活しつつあります。" },
                { label: "3. 歴史的英雄（第3段落）", text: "アントニオ・ストラディバリ（1680年創業）は、バイオリンの形状やニスを改良しました。これにより、大きなコンサートホールでも響く力強い音が生まれ、バイオリンは主要な楽器となりました。" },
                { label: "4. 未来への展望（第4段落）", text: "ビアンキはストラディバリを尊敬しており、自身の技術を次世代に伝えたいと考えています。彼は工房をトレーニングセンターに拡張し、観光客や学生に製作過程を見せることで、伝統が失われるのを防ごうとしています。" }
            ]
        }
    },
    // 2級 オリジナル問題10: The Cooling Revolution
    {
        id: "grade-2-original-cooling-revolution",
        grade: "2級",
        title: "The Cooling Revolution",
        subTitle: "問題10",
        genre: "科学技術 / 歴史",
        similarProblems: {
            exam: "2023年度 第1回",
            title: "An Extraordinary Machine"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Cooling+Revolution",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: The Hidden Giant
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Most of the technologies that define modern life, such as the internet and airplanes, have connected the world in amazing ways.",
                        translation: "インターネットや飛行機といった現代生活を定義する技術のほとんどは、驚くべき方法で世界をつないできた。",
                        grammarAnalysis: {
                            mainVerbs: ["have connected"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Most of the technologies (that [define modern life])</span><span class='tag'>S</span></span>, <span class='chunk M-group'><span class='text'>(such as the internet and airplanes)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>have connected</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the world</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in amazing ways)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>技術のほとんど（that [現代生活を定義する]）は</span>、<span class='t-M'>（インターネットや飛行機といった）</span>、<span class='t-V'>つないできた</span> <span class='t-O'>世界を</span> <span class='t-M'>（驚くべき方法で）</span>。",
                            naturalTranslation: "インターネットや飛行機といった現代生活を定義する技術のほとんどは、驚くべき方法で世界をつないできた。",
                            vocabulary: [
                                { word: "define modern life", meaning: "「現代生活を定義する」" },
                                { word: "have connected", meaning: "「つないできた」" },
                                { word: "in amazing ways", meaning: "「驚くべき方法で」" }
                            ],
                            grammarNotes: [
                                { phrase: "that define", explanation: "<b>関係代名詞that</b>: technologiesを修飾。" },
                                { phrase: "have connected", explanation: "<b>現在完了形</b>: 過去から現在までの継続。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "They allow people to communicate instantly and travel quickly across the globe.",
                        translation: "それらは人々が即座に通信し、地球上を素早く移動することを可能にしている。",
                        grammarAnalysis: {
                            mainVerbs: ["allow"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allow</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to communicate instantly and travel quickly across the globe</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それらは</span> <span class='t-V'>可能にする</span> <span class='t-O'>人々が</span> <span class='t-C'>即座に通信し、地球上を素早く移動することを</span>。",
                            naturalTranslation: "それらは人々が即座に通信し、地球上を素早く移動することを可能にしている。",
                            vocabulary: [
                                { word: "allow O to do", meaning: "「Oが〜することを可能にする」" },
                                { word: "communicate instantly", meaning: "「即座に通信する」" },
                                { word: "across the globe", meaning: "「地球上を」" }
                            ],
                            grammarNotes: [
                                { phrase: "allow O to do", explanation: "<b>allow O to do</b>: 「Oが〜することを可能にする」。第5文型。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "However, some experts believe that a quiet machine found in almost every kitchen has had an even bigger effect on human health and population growth.",
                        translation: "しかし、ほぼすべての台所にある静かな機械が、人間の健康と人口増加に対してさらに大きな影響を与えてきたと信じている専門家もいる。",
                        grammarAnalysis: {
                            mainVerbs: ["believe", "has had"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some experts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>believe</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [a quiet machine (found in almost every kitchen) <span class='chunk V2-group'><span class='text'>has had</span><span class='tag'>V'</span></span> an even bigger effect (on human health and population growth)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>一部の専門家は</span> <span class='t-V'>信じている</span> <span class='t-O'>that [静かな機械（ほぼすべての台所にある）が <span class='t-V2'>与えてきた</span>さらに大きな影響を（人間の健康と人口増加に）]</span>。",
                            naturalTranslation: "しかし、ほぼすべての台所にある静かな機械が、人間の健康と人口増加に対してさらに大きな影響を与えてきたと信じている専門家もいる。",
                            vocabulary: [
                                { word: "a quiet machine", meaning: "「静かな機械」" },
                                { word: "found in almost every kitchen", meaning: "「ほぼすべての台所にある」" },
                                { word: "an even bigger effect", meaning: "「さらに大きな影響」" },
                                { word: "population growth", meaning: "「人口増加」" }
                            ],
                            grammarNotes: [
                                { phrase: "found in", explanation: "<b>過去分詞句</b>: machineを修飾。" },
                                { phrase: "has had", explanation: "<b>現在完了形</b>: 過去から現在までの影響。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "This machine is the refrigerator.",
                        translation: "この機械とは冷蔵庫である。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This machine</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the refrigerator</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>この機械は</span> <span class='t-V'>である</span> <span class='t-C'>冷蔵庫</span>。",
                            naturalTranslation: "この機械とは冷蔵庫である。",
                            vocabulary: [
                                { word: "the refrigerator", meaning: "「冷蔵庫」" }
                            ],
                            grammarNotes: [
                                { phrase: "This machine is", explanation: "<b>SVC構文</b>: 「〜は…である」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "While smartphones allow communication, the refrigerator completely changed how humans eat and survive, yet its impact is often overlooked compared to digital devices.",
                        translation: "スマートフォンは通信を可能にするが、冷蔵庫は人間がどのように食事をし生き延びるかを完全に変えたにもかかわらず、その影響はデジタル機器に比べて見過ごされがちである。",
                        grammarAnalysis: {
                            mainVerbs: ["allow", "changed", "is overlooked"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While [smartphones <span class='chunk V2-group'><span class='text'>allow</span><span class='tag'>V'</span></span> communication])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the refrigerator</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>completely changed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how humans eat and survive</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(yet [its impact <span class='chunk V3-group'><span class='text'>is often overlooked</span><span class='tag'>V''</span></span> compared to digital devices])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(While [スマートフォンが <span class='t-V2'>可能にする</span>通信を])</span>、<span class='t-S'>冷蔵庫は</span> <span class='t-V'>完全に変えた</span> <span class='t-O'>人間がどう食べ生き延びるかを</span>、<span class='t-M'>(yet [その影響は <span class='t-V3'>しばしば見過ごされる</span>デジタル機器と比べて])</span>。",
                            naturalTranslation: "スマートフォンは通信を可能にするが、冷蔵庫は人間がどのように食事をし生き延びるかを完全に変えたにもかかわらず、その影響はデジタル機器に比べて見過ごされがちである。",
                            vocabulary: [
                                { word: "completely changed", meaning: "「完全に変えた」" },
                                { word: "how humans eat and survive", meaning: "「人間がどう食べ生き延びるか」" },
                                { word: "is often overlooked", meaning: "「しばしば見過ごされる」" },
                                { word: "compared to", meaning: "「〜と比べて」" }
                            ],
                            grammarNotes: [
                                { phrase: "While + S + V", explanation: "<b>接続詞While</b>: 「〜する一方で」。対比を表す。" },
                                { phrase: "yet", explanation: "<b>接続詞yet</b>: 「しかし」。逆接を表す。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: The Struggle Before
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "Before the invention of the refrigerator, preserving food was a constant and difficult struggle.",
                        translation: "冷蔵庫が発明される前、食品を保存することは絶え間ない困難な闘いであった。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Before the invention of the refrigerator)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>preserving food</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a constant and difficult struggle</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(冷蔵庫の発明の前)</span>、<span class='t-S'>食品を保存することは</span> <span class='t-V'>であった</span> <span class='t-C'>絶え間ない困難な闘い</span>。",
                            naturalTranslation: "冷蔵庫が発明される前、食品を保存することは絶え間ない困難な闘いであった。",
                            vocabulary: [
                                { word: "Before the invention", meaning: "「発明の前」" },
                                { word: "preserving food", meaning: "「食品を保存すること」" },
                                { word: "a constant and difficult struggle", meaning: "「絶え間ない困難な闘い」" }
                            ],
                            grammarNotes: [
                                { phrase: "preserving food", explanation: "<b>動名詞</b>: 主語として機能。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "For thousands of years, people relied on traditional methods like drying, smoking, or salting meat to keep it from spoiling.",
                        translation: "何千年もの間、人々は肉が腐るのを防ぐために、乾燥、燻製、塩漬けといった伝統的な方法に頼っていた。",
                        grammarAnalysis: {
                            mainVerbs: ["relied"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For thousands of years)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>relied on</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>traditional methods (like drying, smoking, or salting meat)</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to keep it from spoiling)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(何千年もの間)</span>、<span class='t-S'>人々は</span> <span class='t-V'>頼っていた</span> <span class='t-O'>伝統的な方法に（乾燥、燻製、塩漬けといった）</span> <span class='t-M'>(腐るのを防ぐために)</span>。",
                            naturalTranslation: "何千年もの間、人々は肉が腐るのを防ぐために、乾燥、燻製、塩漬けといった伝統的な方法に頼っていた。",
                            vocabulary: [
                                { word: "relied on", meaning: "「〜に頼っていた」" },
                                { word: "drying, smoking, or salting", meaning: "「乾燥、燻製、塩漬け」" },
                                { word: "keep it from spoiling", meaning: "「腐るのを防ぐ」" }
                            ],
                            grammarNotes: [
                                { phrase: "keep O from doing", explanation: "<b>keep O from doing</b>: 「Oが〜するのを防ぐ」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "In the 19th century, people in cities often used \"iceboxes,\" which were wooden cabinets lined with metal.",
                        translation: "19世紀には、都市の人々はしばしば「アイスボックス」を使用していた。それは金属で裏打ちされた木製の戸棚であった。",
                        grammarAnalysis: {
                            mainVerbs: ["used", "were"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the 19th century)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people in cities</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>often used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>\"iceboxes,\" (which [<span class='chunk V2-group'><span class='text'>were</span><span class='tag'>V'</span></span> wooden cabinets (lined with metal)])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(19世紀には)</span>、<span class='t-S'>都市の人々は</span> <span class='t-V'>しばしば使用していた</span> <span class='t-O'>「アイスボックス」を（which [<span class='t-V2'>であった</span>金属で裏打ちされた木製の戸棚]）</span>。",
                            naturalTranslation: "19世紀には、都市の人々はしばしば「アイスボックス」を使用していた。それは金属で裏打ちされた木製の戸棚であった。",
                            vocabulary: [
                                { word: "iceboxes", meaning: "「アイスボックス」" },
                                { word: "wooden cabinets", meaning: "「木製の戸棚」" },
                                { word: "lined with metal", meaning: "「金属で裏打ちされた」" }
                            ],
                            grammarNotes: [
                                { phrase: "which were", explanation: "<b>関係代名詞which（継続用法）</b>: iceboxesを説明。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "To make these work, large blocks of natural ice had to be cut from frozen lakes in winter and delivered to homes by horse and wagon.",
                        translation: "これらを機能させるためには、冬に凍った湖から天然の氷の大きな塊を切り出し、馬車で家庭に届けなければならなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["had to be cut", "delivered"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To make these work)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>large blocks of natural ice</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had to be cut ... and delivered</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(from frozen lakes in winter) (to homes by horse and wagon)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(これらを機能させるために)</span>、<span class='t-S'>天然の氷の大きな塊は</span> <span class='t-V'>切り出され届けられなければならなかった</span> <span class='t-M'>(冬に凍った湖から) (馬車で家庭に)</span>。",
                            naturalTranslation: "これらを機能させるためには、冬に凍った湖から天然の氷の大きな塊を切り出し、馬車で家庭に届けなければならなかった。",
                            vocabulary: [
                                { word: "To make these work", meaning: "「これらを機能させるために」" },
                                { word: "had to be cut", meaning: "「切り出されなければならなかった」" },
                                { word: "by horse and wagon", meaning: "「馬車で」" }
                            ],
                            grammarNotes: [
                                { phrase: "had to be cut", explanation: "<b>had to + 受動態</b>: 「〜されなければならなかった」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "This process was physically demanding and expensive.",
                        translation: "このプロセスは肉体的にきつく、費用もかかった。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This process</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>physically demanding and expensive</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>このプロセスは</span> <span class='t-V'>であった</span> <span class='t-C'>肉体的にきつく、費用もかかる</span>。",
                            naturalTranslation: "このプロセスは肉体的にきつく、費用もかかった。",
                            vocabulary: [
                                { word: "physically demanding", meaning: "「肉体的にきつい」" },
                                { word: "expensive", meaning: "「費用がかかる」" }
                            ],
                            grammarNotes: [
                                { phrase: "demanding and expensive", explanation: "<b>形容詞の並列</b>: 「きつく、かつ高価」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "Furthermore, without a reliable way to keep food cool, families had to go to the market almost every day to buy fresh ingredients, and eating spoiled food often led to serious illnesses.",
                        translation: "さらに、食品を冷たく保つ信頼できる方法がなければ、家族は新鮮な食材を買うためにほぼ毎日市場に行かなければならず、腐った食品を食べることはしばしば深刻な病気につながった。",
                        grammarAnalysis: {
                            mainVerbs: ["had to go", "led"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Furthermore)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(without a reliable way to keep food cool)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>families</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had to go</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to the market) (almost every day) (to buy fresh ingredients)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>eating spoiled food</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>often led to</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>serious illnesses</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-M'>(食品を冷たく保つ信頼できる方法がなければ)</span>、<span class='t-S'>家族は</span> <span class='t-V'>行かなければならなかった</span> <span class='t-M'>(市場に) (ほぼ毎日) (新鮮な食材を買うために)</span>、and <span class='t-S'>腐った食品を食べることは</span> <span class='t-V'>しばしばつながった</span> <span class='t-O'>深刻な病気に</span>。",
                            naturalTranslation: "さらに、食品を冷たく保つ信頼できる方法がなければ、家族は新鮮な食材を買うためにほぼ毎日市場に行かなければならず、腐った食品を食べることはしばしば深刻な病気につながった。",
                            vocabulary: [
                                { word: "without a reliable way", meaning: "「信頼できる方法がなければ」" },
                                { word: "fresh ingredients", meaning: "「新鮮な食材」" },
                                { word: "spoiled food", meaning: "「腐った食品」" },
                                { word: "led to", meaning: "「〜につながった」" }
                            ],
                            grammarNotes: [
                                { phrase: "without + 名詞", explanation: "<b>without + 名詞</b>: 「〜がなければ」。条件を表す。" },
                                { phrase: "lead to", explanation: "<b>lead to</b>: 「〜につながる」。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: The Danger of Cooling
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 12,
                        text: "The first machines designed to cool air were developed in the 19th century, but they were huge, heavy, and mostly used in large factories or breweries.",
                        translation: "空気を冷やすために設計された最初の機械は19世紀に開発されたが、それらは巨大で重く、主に大きな工場や醸造所で使用されていた。",
                        grammarAnalysis: {
                            mainVerbs: ["were developed", "were", "used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The first machines (designed to cool air)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were developed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the 19th century)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>huge, heavy, and mostly used in large factories or breweries</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>最初の機械（空気を冷やすために設計された）は</span> <span class='t-V'>開発された</span> <span class='t-M'>(19世紀に)</span>、but <span class='t-S'>それらは</span> <span class='t-V'>であった</span> <span class='t-C'>巨大で重く、主に大きな工場や醸造所で使用されていた</span>。",
                            naturalTranslation: "空気を冷やすために設計された最初の機械は19世紀に開発されたが、それらは巨大で重く、主に大きな工場や醸造所で使用されていた。",
                            vocabulary: [
                                { word: "designed to cool air", meaning: "「空気を冷やすために設計された」" },
                                { word: "breweries", meaning: "「醸造所」" }
                            ],
                            grammarNotes: [
                                { phrase: "designed to", explanation: "<b>過去分詞句</b>: machinesを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "Creating a small, safe, and affordable fridge for the average home was a significant challenge.",
                        translation: "平均的な家庭のために、小型で安全、かつ手頃な価格の冷蔵庫を作ることは大きな課題であった。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Creating a small, safe, and affordable fridge (for the average home)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a significant challenge</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>小型で安全、かつ手頃な価格の冷蔵庫を（平均的な家庭のために）作ることは</span> <span class='t-V'>であった</span> <span class='t-C'>大きな課題</span>。",
                            naturalTranslation: "平均的な家庭のために、小型で安全、かつ手頃な価格の冷蔵庫を作ることは大きな課題であった。",
                            vocabulary: [
                                { word: "affordable", meaning: "「手頃な価格の」" },
                                { word: "the average home", meaning: "「平均的な家庭」" },
                                { word: "a significant challenge", meaning: "「大きな課題」" }
                            ],
                            grammarNotes: [
                                { phrase: "Creating ...", explanation: "<b>動名詞句</b>: 主語として機能。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "Early home versions used dangerous gases that could leak and cause serious harm to family members while they slept.",
                        translation: "初期の家庭用モデルは、漏れ出して家族が寝ている間に深刻な害を及ぼす可能性のある危険なガスを使用していた。",
                        grammarAnalysis: {
                            mainVerbs: ["used", "could leak", "cause", "slept"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Early home versions</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>dangerous gases (that [<span class='chunk V2-group'><span class='text'>could leak</span><span class='tag'>V'</span></span> and cause serious harm to family members (while they <span class='chunk V3-group'><span class='text'>slept</span><span class='tag'>V''</span></span>)])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>初期の家庭用モデルは</span> <span class='t-V'>使用していた</span> <span class='t-O'>危険なガスを（that [<span class='t-V2'>漏れ出す可能性があり</span>、深刻な害を家族に及ぼす（while [彼らが <span class='t-V3'>寝ている間</span>]）]）</span>。",
                            naturalTranslation: "初期の家庭用モデルは、漏れ出して家族が寝ている間に深刻な害を及ぼす可能性のある危険なガスを使用していた。",
                            vocabulary: [
                                { word: "Early home versions", meaning: "「初期の家庭用モデル」" },
                                { word: "dangerous gases", meaning: "「危険なガス」" },
                                { word: "could leak", meaning: "「漏れ出す可能性があった」" },
                                { word: "cause serious harm", meaning: "「深刻な害を及ぼす」" }
                            ],
                            grammarNotes: [
                                { phrase: "that could leak", explanation: "<b>関係代名詞that</b>: gasesを修飾。" },
                                { phrase: "while they slept", explanation: "<b>接続詞while</b>: 「〜している間」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "It was not until the 1920s and 1930s that safer cooling liquids were discovered and electric motors became smaller and more reliable.",
                        translation: "より安全な冷却液が発見され、電気モーターがより小さく信頼できるようになるのは、1920年代から1930年代になってからのことであった。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "were discovered", "became"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>not until the 1920s and 1930s</span><span class='tag'>C</span></span> that [safer cooling liquids <span class='chunk V2-group'><span class='text'>were discovered</span><span class='tag'>V'</span></span>] and [electric motors <span class='chunk V3-group'><span class='text'>became</span><span class='tag'>V''</span></span> smaller and more reliable].",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>であった</span> <span class='t-C'>1920年代から1930年代になって初めて</span> that [より安全な冷却液が <span class='t-V2'>発見された</span>] and [電気モーターが <span class='t-V3'>なった</span>より小さく信頼できるように]。",
                            naturalTranslation: "より安全な冷却液が発見され、電気モーターがより小さく信頼できるようになるのは、1920年代から1930年代になってからのことであった。",
                            vocabulary: [
                                { word: "It was not until ... that", meaning: "「〜になって初めて」" },
                                { word: "safer cooling liquids", meaning: "「より安全な冷却液」" },
                                { word: "electric motors", meaning: "「電気モーター」" }
                            ],
                            grammarNotes: [
                                { phrase: "It was not until ... that", explanation: "<b>強調構文</b>: 「〜になって初めて…した」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "Once these safety issues were solved, the electric refrigerator quickly became a standard appliance in households across wealthy nations.",
                        translation: "これらの安全上の問題が解決されると、電気冷蔵庫はすぐに裕福な国々の家庭における標準的な家電製品となった。",
                        grammarAnalysis: {
                            mainVerbs: ["were solved", "became"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Once [these safety issues <span class='chunk V2-group'><span class='text'>were solved</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the electric refrigerator</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>quickly became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a standard appliance (in households across wealthy nations)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(Once [これらの安全上の問題が <span class='t-V2'>解決されると</span>])</span>、<span class='t-S'>電気冷蔵庫は</span> <span class='t-V'>すぐになった</span> <span class='t-C'>標準的な家電製品に（裕福な国々の家庭における）</span>。",
                            naturalTranslation: "これらの安全上の問題が解決されると、電気冷蔵庫はすぐに裕福な国々の家庭における標準的な家電製品となった。",
                            vocabulary: [
                                { word: "Once ... were solved", meaning: "「〜が解決されると」" },
                                { word: "a standard appliance", meaning: "「標準的な家電製品」" },
                                { word: "wealthy nations", meaning: "「裕福な国々」" }
                            ],
                            grammarNotes: [
                                { phrase: "Once + S + V", explanation: "<b>接続詞Once</b>: 「一度〜すると」。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Impact on Life
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 17,
                        text: "The spread of the refrigerator revolutionized daily life and society.",
                        translation: "冷蔵庫の普及は、日常生活と社会に革命をもたらした。",
                        grammarAnalysis: {
                            mainVerbs: ["revolutionized"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The spread of the refrigerator</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>revolutionized</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>daily life and society</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>冷蔵庫の普及は</span> <span class='t-V'>革命をもたらした</span> <span class='t-O'>日常生活と社会に</span>。",
                            naturalTranslation: "冷蔵庫の普及は、日常生活と社会に革命をもたらした。",
                            vocabulary: [
                                { word: "The spread of", meaning: "「〜の普及」" },
                                { word: "revolutionized", meaning: "「革命をもたらした」" }
                            ],
                            grammarNotes: [
                                { phrase: "revolutionized", explanation: "<b>revolutionize</b>: 「〜に革命を起こす」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "It allowed people to store fresh fruits, vegetables, and dairy products for days or weeks, which led to much better nutrition and taller, healthier populations.",
                        translation: "それは人々が新鮮な果物、野菜、乳製品を数日から数週間保存することを可能にし、はるかに良い栄養状態と、より背が高く健康的な人々をもたらした。",
                        grammarAnalysis: {
                            mainVerbs: ["allowed", "led"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allowed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to store fresh fruits, vegetables, and dairy products (for days or weeks)</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(which [<span class='chunk V2-group'><span class='text'>led to</span><span class='tag'>V'</span></span> much better nutrition and taller, healthier populations])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>可能にした</span> <span class='t-O'>人々が</span> <span class='t-C'>新鮮な果物、野菜、乳製品を保存することを（数日から数週間）</span>、<span class='t-M'>(which [<span class='t-V2'>つながった</span>はるかに良い栄養状態と、より背が高く健康的な人々に])</span>。",
                            naturalTranslation: "それは人々が新鮮な果物、野菜、乳製品を数日から数週間保存することを可能にし、はるかに良い栄養状態と、より背が高く健康的な人々をもたらした。",
                            vocabulary: [
                                { word: "allowed people to store", meaning: "「人々が保存することを可能にした」" },
                                { word: "dairy products", meaning: "「乳製品」" },
                                { word: "much better nutrition", meaning: "「はるかに良い栄養状態」" },
                                { word: "healthier populations", meaning: "「より健康的な人々」" }
                            ],
                            grammarNotes: [
                                { phrase: ", which led to", explanation: "<b>関係代名詞which（継続用法）</b>: 前文全体を受ける。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "It also freed people, especially women, from the daily chore of shopping for food, allowing them more time for other activities.",
                        translation: "それはまた、人々、特に女性を毎日の食料品の買い物という雑用から解放し、他の活動のためのより多くの時間を彼らに与えた。",
                        grammarAnalysis: {
                            mainVerbs: ["freed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> also <span class='chunk V-group'><span class='text'>freed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people, especially women</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(from the daily chore of shopping for food)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(allowing them more time for other activities)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> また <span class='t-V'>解放した</span> <span class='t-O'>人々、特に女性を</span>、<span class='t-M'>(毎日の食料品の買い物という雑用から)</span>、<span class='t-M'>(他の活動のためのより多くの時間を彼らに与えながら)</span>。",
                            naturalTranslation: "それはまた、人々、特に女性を毎日の食料品の買い物という雑用から解放し、他の活動のためのより多くの時間を彼らに与えた。",
                            vocabulary: [
                                { word: "freed ... from", meaning: "「〜から解放した」" },
                                { word: "the daily chore", meaning: "「毎日の雑用」" },
                                { word: "allowing them more time", meaning: "「彼らにより多くの時間を与えながら」" }
                            ],
                            grammarNotes: [
                                { phrase: "free O from", explanation: "<b>free O from</b>: 「Oを〜から解放する」。" },
                                { phrase: "allowing ...", explanation: "<b>分詞構文（結果）</b>: 「その結果〜した」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Today, refrigeration is not just about food; it is essential for storing medicines and vaccines.",
                        translation: "今日、冷蔵技術は単に食品に関するものだけではない。それは医薬品やワクチンを保存するために不可欠である。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>refrigeration</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is not just</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>about food</span><span class='tag'>C</span></span>; <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>essential (for storing medicines and vaccines)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(今日)</span>、<span class='t-S'>冷蔵技術は</span> <span class='t-V'>単に〜ではない</span> <span class='t-C'>食品に関すること</span>；<span class='t-S'>それは</span> <span class='t-V'>である</span> <span class='t-C'>不可欠（医薬品やワクチンを保存するために）</span>。",
                            naturalTranslation: "今日、冷蔵技術は単に食品に関するものだけではない。それは医薬品やワクチンを保存するために不可欠である。",
                            vocabulary: [
                                { word: "refrigeration", meaning: "「冷蔵技術」" },
                                { word: "is not just about", meaning: "「単に〜に関するものだけではない」" },
                                { word: "essential for storing", meaning: "「保存するために不可欠」" }
                            ],
                            grammarNotes: [
                                { phrase: "not just ... ; ...", explanation: "<b>not just ... ; ...</b>: 「単に〜だけでなく」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "As these machines become more energy-efficient and available in developing nations, they will continue to save millions of lives by preventing hunger and disease.",
                        translation: "これらの機械がよりエネルギー効率が良く、発展途上国で利用可能になるにつれて、それらは飢餓や病気を防ぐことによって何百万もの命を救い続けるだろう。",
                        grammarAnalysis: {
                            mainVerbs: ["become", "will continue"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(As [these machines <span class='chunk V2-group'><span class='text'>become</span><span class='tag'>V'</span></span> more energy-efficient and available in developing nations])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>will continue to save</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>millions of lives</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(by preventing hunger and disease)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(As [これらの機械が <span class='t-V2'>なるにつれて</span>よりエネルギー効率が良く利用可能に発展途上国で])</span>、<span class='t-S'>それらは</span> <span class='t-V'>救い続けるだろう</span> <span class='t-O'>何百万もの命を</span> <span class='t-M'>(飢餓や病気を防ぐことによって)</span>。",
                            naturalTranslation: "これらの機械がよりエネルギー効率が良く、発展途上国で利用可能になるにつれて、それらは飢餓や病気を防ぐことによって何百万もの命を救い続けるだろう。",
                            vocabulary: [
                                { word: "energy-efficient", meaning: "「エネルギー効率が良い」" },
                                { word: "developing nations", meaning: "「発展途上国」" },
                                { word: "will continue to save", meaning: "「救い続けるだろう」" },
                                { word: "by preventing", meaning: "「〜を防ぐことによって」" }
                            ],
                            grammarNotes: [
                                { phrase: "As + S + V", explanation: "<b>接続詞As</b>: 「〜するにつれて」。" },
                                { phrase: "will continue to", explanation: "<b>will continue to</b>: 「〜し続けるだろう」。未来の継続。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - What do experts believe
            {
                id: 1,
                text: "What do some experts believe about the refrigerator?",
                textTranslation: "冷蔵庫について、一部の専門家は何を信じていますか？",
                choices: [
                    { id: 1, text: "It is more important for communication than smartphones are.", translation: "それはスマートフォンよりも通信にとって重要である。", isCorrect: false },
                    { id: 2, text: "It has had a greater impact on health than many other modern technologies.", translation: "それは他の多くの現代技術よりも健康に大きな影響を与えてきた。", isCorrect: true, highlight: "greater impact on health than many other modern technologies" },
                    { id: 3, text: "It was invented before the internet and airplanes were created.", translation: "それはインターネットや飛行機が作られる前に発明された。", isCorrect: false },
                    { id: 4, text: "It connects people around the world more effectively than airplanes do.", translation: "それは飛行機よりも効果的に世界中の人々をつなげる。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で専門家の信念が述べられています。「has had an even bigger effect on human health」に注目。",
                    targetSentenceId: 3,
                    highlightWord: "a quiet machine ... has had an even bigger effect on human health and population growth",
                    highlightWordSentenceId: 3
                },
                keywords: ["some experts believe", "refrigerator"],
                keywordExplanations: {
                    "some experts believe": "専門家の考え。",
                    "refrigerator": "冷蔵庫について。"
                },
                keywordMatches: [
                    { sentenceId: 3, text: "some experts believe that a quiet machine ... has had an even bigger effect on human health", keyword: "greater impact on health" }
                ],
                choiceAdvice: "選択肢は専門家の冷蔵庫に対する見解を問うています。第1段落で「健康への影響」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"some experts believe that a quiet machine ... has had an even bigger effect on human health\"" },
                    { type: "arrow", content: "「さらに大きな影響を人間の健康に与えた」= 「他の技術より健康に大きな影響」" },
                    { type: "text", content: "選択肢2: \"It has had a greater impact on health than many other modern technologies.\"" },
                    { type: "conclusion", content: "an even bigger effect on human health = greater impact on health → 正解: 2" }
                ]
            },
            // Q2: 第2段落 - Problem before refrigerators
            {
                id: 2,
                text: "Before refrigerators were common, people faced a problem because",
                textTranslation: "冷蔵庫が普及する前、人々は〜のために問題に直面していました",
                choices: [
                    { id: 1, text: "there were no markets where they could buy fresh ingredients.", translation: "新鮮な食材を買える市場がなかった。", isCorrect: false },
                    { id: 2, text: "they did not know how to dry or smoke meat to keep it for a long time.", translation: "肉を長期保存するために乾燥や燻製の方法を知らなかった。", isCorrect: false },
                    { id: 3, text: "getting the ice needed to keep food cool was difficult and costly.", translation: "食品を冷たく保つために必要な氷を入手するのが困難で高価だった。", isCorrect: true, highlight: "getting the ice was difficult and costly" },
                    { id: 4, text: "the metal used to make iceboxes was too expensive for most families.", translation: "アイスボックスを作るのに使われる金属がほとんどの家族にとって高価すぎた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落で氷の入手に関する問題が述べられています。「had to be cut from frozen lakes」「physically demanding and expensive」に注目。",
                    targetSentenceId: 9,
                    highlightWord: "large blocks of natural ice had to be cut from frozen lakes ... This process was physically demanding and expensive",
                    highlightWordSentenceId: 9
                },
                keywords: ["Before refrigerators", "problem"],
                keywordExplanations: {
                    "Before refrigerators": "冷蔵庫以前。",
                    "problem": "問題を探す。"
                },
                keywordMatches: [
                    { sentenceId: 9, text: "large blocks of natural ice had to be cut from frozen lakes", keyword: "getting ice was difficult" },
                    { sentenceId: 10, text: "This process was physically demanding and expensive", keyword: "difficult and costly" }
                ],
                choiceAdvice: "選択肢は冷蔵庫以前の問題を問うています。第2段落で「氷の入手の困難さ」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"large blocks of natural ice had to be cut from frozen lakes\" + \"This process was physically demanding and expensive\"" },
                    { type: "arrow", content: "「天然の氷を切り出さなければならなかった」+「このプロセスは肉体的にきつく高価だった」" },
                    { type: "text", content: "選択肢3: \"getting the ice needed to keep food cool was difficult and costly.\"" },
                    { type: "conclusion", content: "had to be cut + physically demanding and expensive = difficult and costly → 正解: 3" }
                ]
            },
            // Q3: 第3段落 - Difficulty creating refrigerators
            {
                id: 3,
                text: "Why was it difficult to create refrigerators for homes at first?",
                textTranslation: "最初、家庭用冷蔵庫を作ることが難しかったのはなぜですか？",
                choices: [
                    { id: 1, text: "The cooling liquids used in early machines were too expensive to produce.", translation: "初期の機械に使われた冷却液は製造するには高価すぎた。", isCorrect: false },
                    { id: 2, text: "The gases used to cool the air were unsafe for people to have in their houses.", translation: "空気を冷やすために使われたガスは人々が家に置くには安全でなかった。", isCorrect: true, highlight: "gases used to cool the air were unsafe" },
                    { id: 3, text: "The electric motors were too weak to keep the food cold for long periods.", translation: "電気モーターは食品を長期間冷たく保つには弱すぎた。", isCorrect: false },
                    { id: 4, text: "Factory owners did not want to sell their cooling technology to regular people.", translation: "工場経営者は一般の人々に彼らの冷却技術を売りたくなかった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で初期の冷蔵庫の問題が述べられています。「used dangerous gases that could leak and cause serious harm」に注目。",
                    targetSentenceId: 14,
                    highlightWord: "Early home versions used dangerous gases that could leak and cause serious harm to family members",
                    highlightWordSentenceId: 14
                },
                keywords: ["difficult", "create refrigerators", "at first"],
                keywordExplanations: {
                    "difficult": "難しかった理由。",
                    "create refrigerators": "冷蔵庫を作ること。",
                    "at first": "最初は。"
                },
                keywordMatches: [
                    { sentenceId: 14, text: "used dangerous gases that could leak and cause serious harm", keyword: "gases were unsafe" }
                ],
                choiceAdvice: "選択肢は家庭用冷蔵庫を作る困難さの理由を問うています。第3段落で「危険なガス」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"Early home versions used dangerous gases that could leak and cause serious harm to family members\"" },
                    { type: "arrow", content: "「危険なガスを使用していた、漏れ出して深刻な害を及ぼす可能性があった」" },
                    { type: "text", content: "選択肢2: \"The gases used to cool the air were unsafe for people to have in their houses.\"" },
                    { type: "conclusion", content: "dangerous gases + cause serious harm = unsafe → 正解: 2" }
                ]
            },
            // Q4: 第4段落 - Major benefit
            {
                id: 4,
                text: "One major benefit of the refrigerator mentioned in the passage is that",
                textTranslation: "本文で述べられている冷蔵庫の主な利点の一つは〜です",
                choices: [
                    { id: 1, text: "it allowed people to improve their health by eating a wider variety of fresh foods.", translation: "それは人々がより多くの種類の新鮮な食品を食べることで健康を改善することを可能にした。", isCorrect: true, highlight: "improve health by eating fresh foods" },
                    { id: 2, text: "it reduced the cost of electricity for families in wealthy nations.", translation: "それは裕福な国の家族の電気代を削減した。", isCorrect: false },
                    { id: 3, text: "it encouraged people to grow their own fruits and vegetables at home.", translation: "それは人々が自宅で果物や野菜を育てることを促した。", isCorrect: false },
                    { id: 4, text: "it taught people how to preserve food using traditional methods like salting.", translation: "それは塩漬けのような伝統的な方法で食品を保存する方法を人々に教えた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で冷蔵庫の利点が述べられています。「store fresh fruits, vegetables, and dairy products」「led to much better nutrition」に注目。",
                    targetSentenceId: 18,
                    highlightWord: "It allowed people to store fresh fruits, vegetables, and dairy products ... which led to much better nutrition",
                    highlightWordSentenceId: 18
                },
                keywords: ["major benefit", "refrigerator"],
                keywordExplanations: {
                    "major benefit": "主な利点。",
                    "refrigerator": "冷蔵庫の。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "allowed people to store fresh fruits, vegetables, and dairy products ... which led to much better nutrition", keyword: "improve health by eating fresh foods" }
                ],
                choiceAdvice: "選択肢は冷蔵庫の主な利点を問うています。第4段落で「新鮮な食品の保存」「栄養状態の改善」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"allowed people to store fresh fruits, vegetables, and dairy products ... which led to much better nutrition\"" },
                    { type: "arrow", content: "「新鮮な果物、野菜、乳製品を保存することを可能にし」→「より良い栄養状態につながった」" },
                    { type: "text", content: "選択肢1: \"it allowed people to improve their health by eating a wider variety of fresh foods.\"" },
                    { type: "conclusion", content: "fresh foods + better nutrition = improve health → 正解: 1" }
                ]
            },
            // Q5: 第4段落 - Future in developing nations
            {
                id: 5,
                text: "How is refrigeration expected to help people in developing nations in the future?",
                textTranslation: "冷蔵技術は将来、発展途上国の人々をどのように助けると期待されていますか？",
                choices: [
                    { id: 1, text: "It will allow them to produce their own medicines and vaccines.", translation: "それは彼らが自分たちの医薬品やワクチンを生産することを可能にするだろう。", isCorrect: false },
                    { id: 2, text: "It will help them export more food to wealthy nations.", translation: "それは彼らが裕福な国により多くの食品を輸出することを助けるだろう。", isCorrect: false },
                    { id: 3, text: "It will give them more time to invent new energy-efficient machines.", translation: "それは彼らに新しいエネルギー効率の良い機械を発明するためのより多くの時間を与えるだろう。", isCorrect: false },
                    { id: 4, text: "It will protect people from diseases by storing medical supplies safely.", translation: "それは医療品を安全に保存することで人々を病気から守るだろう。", isCorrect: true, highlight: "protect from diseases by storing medical supplies" }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で将来の展望が述べられています。「essential for storing medicines and vaccines」「will continue to save millions of lives by preventing ... disease」に注目。",
                    targetSentenceId: 21,
                    highlightWord: "they will continue to save millions of lives by preventing hunger and disease",
                    highlightWordSentenceId: 21
                },
                keywords: ["developing nations", "future"],
                keywordExplanations: {
                    "developing nations": "発展途上国。",
                    "future": "将来。"
                },
                keywordMatches: [
                    { sentenceId: 20, text: "essential for storing medicines and vaccines", keyword: "storing medical supplies" },
                    { sentenceId: 21, text: "will continue to save millions of lives by preventing ... disease", keyword: "protect from diseases" }
                ],
                choiceAdvice: "選択肢は発展途上国での将来の利点を問うています。第4段落で「医薬品やワクチンの保存」「病気を防ぐ」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"essential for storing medicines and vaccines\" + \"will continue to save millions of lives by preventing ... disease\"" },
                    { type: "arrow", content: "「医薬品やワクチンを保存するために不可欠」+「病気を防ぐことで命を救い続ける」" },
                    { type: "text", content: "選択肢4: \"It will protect people from diseases by storing medical supplies safely.\"" },
                    { type: "conclusion", content: "storing medicines + preventing disease = protect from diseases by storing medical supplies → 正解: 4" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Cooling Revolution - 講師用要約",
            intro: "インターネットや飛行機などの派手な技術と比較して見過ごされがちですが、冷蔵庫は人類の健康と生活様式に最も大きな影響を与えた発明の一つです。過去問の「An Extraordinary Machine」（2023年第1回）と同様に、日常の技術の隠れた重要性をテーマとしています。",
            points: [
                { label: "1. The Hidden Giant（第1段落）", text: "インターネットやスマホは世界をつなぎましたが、専門家の中には冷蔵庫こそが人類の健康に最大の影響を与えたと考える人がいます。通信機器と異なり、冷蔵庫は生存に関わる「食」を根本から変えました。" },
                { label: "2. The Struggle Before（第2段落）", text: "冷蔵庫以前、食品保存は乾燥や塩漬けに頼る困難な作業でした。19世紀の「アイスボックス」は天然の氷を運搬する必要があり、重労働で高価でした。食材の毎日の買い出しが必要で、食中毒のリスクも高かったのです。" },
                { label: "3. The Danger of Cooling（第3段落）", text: "初期の冷却機は巨大で工場用でした。家庭用への小型化における最大の課題は、冷却に使われる「ガス」の安全性でした。初期のガスは有毒で、睡眠中の家族を危険にさらすことがありました。1920-30年代に安全な技術が確立され普及しました。" },
                { label: "4. Impact on Life（第4段落）", text: "冷蔵庫は新鮮な生鮮食品の長期保存を可能にし、人々の栄養状態を改善しました。また、毎日の買い物という重労働から人々（特に女性）を解放しました。現在では食品だけでなく、ワクチン保存などを通じて発展途上国でも多くの命を救っています。" }
            ]
        }
    },
    // 2級 オリジナル問題11: The Wandering Mind
    {
        id: "grade-2-original-wandering-mind",
        grade: "2級",
        title: "The Wandering Mind",
        subTitle: "問題11",
        genre: "心理学 / 科学",
        similarProblems: {
            exam: "2023年度 第1回",
            title: "Living the Dream"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Wandering+Mind",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: The Common Habit
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Most people think that to get things done, they must pay close attention to what they are doing at all times.",
                        translation: "ほとんどの人は、物事を成し遂げるためには、常に自分のしていることに細心の注意を払わなければならないと考えている。",
                        grammarAnalysis: {
                            mainVerbs: ["think"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Most people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>think</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [to get things done, they must pay close attention to what they are doing at all times]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ほとんどの人は</span> <span class='t-V'>考えている</span> <span class='t-O'>that [物事を成し遂げるためには、彼らは常に自分のしていることに細心の注意を払わなければならない]</span>。",
                            naturalTranslation: "ほとんどの人は、物事を成し遂げるためには、常に自分のしていることに細心の注意を払わなければならないと考えている。",
                            vocabulary: [
                                { word: "get things done", meaning: "「物事を成し遂げる」" },
                                { word: "pay close attention", meaning: "「細心の注意を払う」" },
                                { word: "at all times", meaning: "「常に」" }
                            ],
                            grammarNotes: [
                                { phrase: "to get things done", explanation: "<b>不定詞（目的）</b>: 「〜するために」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "However, research suggests that human minds wander for nearly half of the time that people are awake.",
                        translation: "しかし、研究によると、人間の心は起きている時間の半分近くもの間、さまよっていることが示唆されている。",
                        grammarAnalysis: {
                            mainVerbs: ["suggests", "wander"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>research</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suggests</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [human minds <span class='chunk V2-group'><span class='text'>wander</span><span class='tag'>V'</span></span> for nearly half of the time (that people are awake)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>研究は</span> <span class='t-V'>示唆している</span> <span class='t-O'>that [人間の心は <span class='t-V2'>さまよっている</span>時間の半分近くの間（人々が起きている）]</span>。",
                            naturalTranslation: "しかし、研究によると、人間の心は起きている時間の半分近くもの間、さまよっていることが示唆されている。",
                            vocabulary: [
                                { word: "research suggests", meaning: "「研究は示唆している」" },
                                { word: "human minds wander", meaning: "「人間の心はさまよう」" },
                                { word: "nearly half of the time", meaning: "「時間の半分近く」" }
                            ],
                            grammarNotes: [
                                { phrase: "that people are awake", explanation: "<b>関係代名詞that</b>: timeを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "This phenomenon, often called daydreaming, occurs when our thoughts drift away from the task at hand to other things.",
                        translation: "しばしば白昼夢（デイドリーミング）と呼ばれるこの現象は、私たちの思考が目の前の課題から他の事柄へと漂い出すときに起こる。",
                        grammarAnalysis: {
                            mainVerbs: ["occurs", "drift"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This phenomenon, (often called daydreaming)</span><span class='tag'>S</span></span>, <span class='chunk V-group'><span class='text'>occurs</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(when [our thoughts <span class='chunk V2-group'><span class='text'>drift away</span><span class='tag'>V'</span></span> from the task at hand to other things])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この現象（しばしば白昼夢と呼ばれる）は</span>、<span class='t-V'>起こる</span> <span class='t-M'>(when [私たちの思考が <span class='t-V2'>漂い出す</span>目の前の課題から他の事柄へと])</span>。",
                            naturalTranslation: "しばしば白昼夢（デイドリーミング）と呼ばれるこの現象は、私たちの思考が目の前の課題から他の事柄へと漂い出すときに起こる。",
                            vocabulary: [
                                { word: "daydreaming", meaning: "「白昼夢」" },
                                { word: "drift away from", meaning: "「〜から漂い出す」" },
                                { word: "the task at hand", meaning: "「目の前の課題」" }
                            ],
                            grammarNotes: [
                                { phrase: "often called daydreaming", explanation: "<b>過去分詞句（挿入）</b>: phenomenonを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "For a long time, teachers and employers viewed this simply as a bad habit that wasted valuable time.",
                        translation: "長い間、教師や雇用主は、これを単に貴重な時間を無駄にする悪い習慣だとみなしていた。",
                        grammarAnalysis: {
                            mainVerbs: ["viewed"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For a long time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>teachers and employers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>viewed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>this</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>simply as a bad habit (that wasted valuable time)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(長い間)</span>、<span class='t-S'>教師や雇用主は</span> <span class='t-V'>みなしていた</span> <span class='t-O'>これを</span> <span class='t-C'>単に悪い習慣として（貴重な時間を無駄にする）</span>。",
                            naturalTranslation: "長い間、教師や雇用主は、これを単に貴重な時間を無駄にする悪い習慣だとみなしていた。",
                            vocabulary: [
                                { word: "viewed A as B", meaning: "「AをBとみなす」" },
                                { word: "a bad habit", meaning: "「悪い習慣」" },
                                { word: "wasted valuable time", meaning: "「貴重な時間を無駄にした」" }
                            ],
                            grammarNotes: [
                                { phrase: "view A as B", explanation: "<b>view A as B</b>: 「AをBとみなす」。" },
                                { phrase: "that wasted", explanation: "<b>関係代名詞that</b>: habitを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "Despite this negative reputation, scientists are now discovering that letting the mind wander might actually be beneficial for the brain and personal growth.",
                        translation: "この否定的な評判にもかかわらず、科学者たちは現在、心をさまよわせることが実際には脳や個人の成長にとって有益かもしれないことを発見しつつある。",
                        grammarAnalysis: {
                            mainVerbs: ["are discovering"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Despite this negative reputation)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are now discovering</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [letting the mind wander might actually be beneficial (for the brain and personal growth)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(この否定的な評判にもかかわらず)</span>、<span class='t-S'>科学者たちは</span> <span class='t-V'>現在発見しつつある</span> <span class='t-O'>that [心をさまよわせることが実際には有益かもしれない（脳や個人の成長にとって）]</span>。",
                            naturalTranslation: "この否定的な評判にもかかわらず、科学者たちは現在、心をさまよわせることが実際には脳や個人の成長にとって有益かもしれないことを発見しつつある。",
                            vocabulary: [
                                { word: "Despite", meaning: "「〜にもかかわらず」" },
                                { word: "negative reputation", meaning: "「否定的な評判」" },
                                { word: "letting the mind wander", meaning: "「心をさまよわせること」" },
                                { word: "beneficial", meaning: "「有益な」" }
                            ],
                            grammarNotes: [
                                { phrase: "Despite + 名詞", explanation: "<b>Despite + 名詞</b>: 「〜にもかかわらず」。" },
                                { phrase: "are discovering", explanation: "<b>現在進行形</b>: 進行中の発見。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: The Creative Spark
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "In the past, psychology focused mainly on the negative effects of not paying attention, such as making mistakes at work or having accidents while driving.",
                        translation: "過去において、心理学は主に、仕事でミスをしたり運転中に事故を起こしたりするなど、注意を払わないことの否定的な影響に焦点を当てていた。",
                        grammarAnalysis: {
                            mainVerbs: ["focused"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the past)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>psychology</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>focused mainly on</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the negative effects of not paying attention, (such as making mistakes at work or having accidents while driving)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(過去において)</span>、<span class='t-S'>心理学は</span> <span class='t-V'>主に焦点を当てていた</span> <span class='t-O'>注意を払わないことの否定的な影響に（例えば仕事でミスをしたり運転中に事故を起こしたり）</span>。",
                            naturalTranslation: "過去において、心理学は主に、仕事でミスをしたり運転中に事故を起こしたりするなど、注意を払わないことの否定的な影響に焦点を当てていた。",
                            vocabulary: [
                                { word: "focused mainly on", meaning: "「主に〜に焦点を当てていた」" },
                                { word: "negative effects", meaning: "「否定的な影響」" },
                                { word: "not paying attention", meaning: "「注意を払わないこと」" }
                            ],
                            grammarNotes: [
                                { phrase: "such as", explanation: "<b>such as</b>: 「例えば」。具体例の導入。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "Today, however, many experts believe that daydreaming is a distinct mental state that serves a useful purpose.",
                        translation: "しかし今日、多くの専門家は、白昼夢は有用な目的を果たす独特の精神状態であると信じている。",
                        grammarAnalysis: {
                            mainVerbs: ["believe", "is", "serves"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today), (however)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many experts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>believe</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [daydreaming <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> a distinct mental state (that <span class='chunk V3-group'><span class='text'>serves</span><span class='tag'>V''</span></span> a useful purpose)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(今日)、(しかし)</span>、<span class='t-S'>多くの専門家は</span> <span class='t-V'>信じている</span> <span class='t-O'>that [白昼夢は <span class='t-V2'>である</span>独特の精神状態（<span class='t-V3'>果たす</span>有用な目的を）]</span>。",
                            naturalTranslation: "しかし今日、多くの専門家は、白昼夢は有用な目的を果たす独特の精神状態であると信じている。",
                            vocabulary: [
                                { word: "distinct mental state", meaning: "「独特の精神状態」" },
                                { word: "serves a useful purpose", meaning: "「有用な目的を果たす」" }
                            ],
                            grammarNotes: [
                                { phrase: "that serves", explanation: "<b>関係代名詞that</b>: stateを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "One major theory is that it allows the brain to access a \"creative mode.\"",
                        translation: "主要な理論の一つは、それが脳に「創造的モード」へのアクセスを許可するというものである。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "allows"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>One major theory</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that [it <span class='chunk V2-group'><span class='text'>allows</span><span class='tag'>V'</span></span> the brain to access a \"creative mode\"]</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>主要な理論の一つは</span> <span class='t-V'>である</span> <span class='t-C'>that [それは <span class='t-V2'>許可する</span>脳に「創造的モード」にアクセスすることを]</span>。",
                            naturalTranslation: "主要な理論の一つは、それが脳に「創造的モード」へのアクセスを許可するというものである。",
                            vocabulary: [
                                { word: "One major theory", meaning: "「主要な理論の一つ」" },
                                { word: "allows ... to access", meaning: "「〜が…にアクセスすることを許可する」" },
                                { word: "creative mode", meaning: "「創造的モード」" }
                            ],
                            grammarNotes: [
                                { phrase: "allow O to do", explanation: "<b>allow O to do</b>: 「Oが〜することを許可する」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "When the mind is not focused on a specific logic problem, it can make loose connections between different ideas.",
                        translation: "心が特定の論理的問題に集中していないとき、それは異なるアイデアの間に緩やかな結びつきを作ることができる。",
                        grammarAnalysis: {
                            mainVerbs: ["is focused", "can make"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When [the mind <span class='chunk V2-group'><span class='text'>is not focused</span><span class='tag'>V'</span></span> on a specific logic problem])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can make</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>loose connections (between different ideas)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(When [心が <span class='t-V2'>集中していない</span>特定の論理的問題に])</span>、<span class='t-S'>それは</span> <span class='t-V'>作ることができる</span> <span class='t-O'>緩やかな結びつきを（異なるアイデアの間に）</span>。",
                            naturalTranslation: "心が特定の論理的問題に集中していないとき、それは異なるアイデアの間に緩やかな結びつきを作ることができる。",
                            vocabulary: [
                                { word: "is not focused on", meaning: "「〜に集中していない」" },
                                { word: "specific logic problem", meaning: "「特定の論理的問題」" },
                                { word: "loose connections", meaning: "「緩やかな結びつき」" }
                            ],
                            grammarNotes: [
                                { phrase: "When + S + V", explanation: "<b>接続詞When</b>: 「〜のとき」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "This process often leads to sudden insights and creative solutions that focused thinking cannot achieve.",
                        translation: "このプロセスはしばしば、集中した思考では達成できない突然のひらめきや創造的な解決策につながる。",
                        grammarAnalysis: {
                            mainVerbs: ["leads", "cannot achieve"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This process</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>often leads to</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>sudden insights and creative solutions (that [focused thinking <span class='chunk V2-group'><span class='text'>cannot achieve</span><span class='tag'>V'</span></span>])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>このプロセスは</span> <span class='t-V'>しばしばつながる</span> <span class='t-O'>突然のひらめきや創造的な解決策に（that [集中した思考が <span class='t-V2'>達成できない</span>]）</span>。",
                            naturalTranslation: "このプロセスはしばしば、集中した思考では達成できない突然のひらめきや創造的な解決策につながる。",
                            vocabulary: [
                                { word: "leads to", meaning: "「〜につながる」" },
                                { word: "sudden insights", meaning: "「突然のひらめき」" },
                                { word: "creative solutions", meaning: "「創造的な解決策」" },
                                { word: "focused thinking", meaning: "「集中した思考」" }
                            ],
                            grammarNotes: [
                                { phrase: "that ... cannot achieve", explanation: "<b>関係代名詞that</b>: solutions/insightsを修飾。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: The Experiment
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 11,
                        text: "To investigate this, a researcher named Benjamin Baird conducted an experiment with 145 participants to see how mind-wandering affects creativity.",
                        translation: "これを調査するために、ベンジャミン・ベアードという名の研究者が、マインドワンダリング（心の迷走）が創造性にどのように影響するかを見るために145人の参加者と共に実験を行った。",
                        grammarAnalysis: {
                            mainVerbs: ["conducted"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To investigate this)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a researcher (named Benjamin Baird)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>conducted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an experiment (with 145 participants)</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to see how mind-wandering affects creativity)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(これを調査するために)</span>、<span class='t-S'>研究者（ベンジャミン・ベアードという名の）は</span> <span class='t-V'>行った</span> <span class='t-O'>実験を（145人の参加者と共に）</span> <span class='t-M'>(マインドワンダリングが創造性にどう影響するかを見るために)</span>。",
                            naturalTranslation: "これを調査するために、ベンジャミン・ベアードという名の研究者が、マインドワンダリング（心の迷走）が創造性にどのように影響するかを見るために145人の参加者と共に実験を行った。",
                            vocabulary: [
                                { word: "To investigate", meaning: "「調査するために」" },
                                { word: "conducted an experiment", meaning: "「実験を行った」" },
                                { word: "mind-wandering", meaning: "「マインドワンダリング」" }
                            ],
                            grammarNotes: [
                                { phrase: "named Benjamin Baird", explanation: "<b>過去分詞句</b>: researcherを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "He asked one group to perform a simple, boring task that required little attention, which encouraged their minds to wander.",
                        translation: "彼はあるグループに、ほとんど注意を必要としない単純で退屈な作業を行うよう求めた。それは彼らの心がさまようことを促した。",
                        grammarAnalysis: {
                            mainVerbs: ["asked", "required", "encouraged"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>asked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>one group</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to perform a simple, boring task (that <span class='chunk V2-group'><span class='text'>required</span><span class='tag'>V'</span></span> little attention)</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(which <span class='chunk V3-group'><span class='text'>encouraged</span><span class='tag'>V''</span></span> their minds to wander)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>求めた</span> <span class='t-O'>あるグループに</span> <span class='t-C'>単純で退屈な作業を行うよう（<span class='t-V2'>必要とした</span>ほとんど注意を）</span>、<span class='t-M'>(which <span class='t-V3'>促した</span>彼らの心がさまようことを)</span>。",
                            naturalTranslation: "彼はあるグループに、ほとんど注意を必要としない単純で退屈な作業を行うよう求めた。それは彼らの心がさまようことを促した。",
                            vocabulary: [
                                { word: "asked ... to perform", meaning: "「〜に…を行うよう求めた」" },
                                { word: "required little attention", meaning: "「ほとんど注意を必要としなかった」" },
                                { word: "encouraged ... to wander", meaning: "「〜がさまようことを促した」" }
                            ],
                            grammarNotes: [
                                { phrase: ", which encouraged", explanation: "<b>関係代名詞which（継続用法）</b>: 前文全体を受ける。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "Another group was asked to focus on a difficult task.",
                        translation: "もう一つのグループは、難しい課題に集中するよう求められた。",
                        grammarAnalysis: {
                            mainVerbs: ["was asked"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Another group</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was asked</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to focus on a difficult task</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>もう一つのグループは</span> <span class='t-V'>求められた</span> <span class='t-C'>難しい課題に集中するよう</span>。",
                            naturalTranslation: "もう一つのグループは、難しい課題に集中するよう求められた。",
                            vocabulary: [
                                { word: "was asked to", meaning: "「〜するよう求められた」" },
                                { word: "focus on", meaning: "「〜に集中する」" },
                                { word: "a difficult task", meaning: "「難しい課題」" }
                            ],
                            grammarNotes: [
                                { phrase: "was asked to", explanation: "<b>受動態 + 不定詞</b>: 「〜するよう求められた」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "Afterward, all participants were given a test that involved coming up with unusual uses for everyday objects, such as a brick.",
                        translation: "その後、すべての参加者に、レンガのような日常的な物の変わった用途を考え出すというテストが与えられた。",
                        grammarAnalysis: {
                            mainVerbs: ["were given", "involved"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Afterward)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>all participants</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were given</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a test (that <span class='chunk V2-group'><span class='text'>involved</span><span class='tag'>V'</span></span> coming up with unusual uses for everyday objects, such as a brick)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>すべての参加者は</span> <span class='t-V'>与えられた</span> <span class='t-O'>テストを（<span class='t-V2'>含んでいた</span>日常的な物の変わった用途を考え出すことを、レンガのような）</span>。",
                            naturalTranslation: "その後、すべての参加者に、レンガのような日常的な物の変わった用途を考え出すというテストが与えられた。",
                            vocabulary: [
                                { word: "were given a test", meaning: "「テストが与えられた」" },
                                { word: "coming up with", meaning: "「考え出す」" },
                                { word: "unusual uses", meaning: "「変わった用途」" },
                                { word: "everyday objects", meaning: "「日常的な物」" }
                            ],
                            grammarNotes: [
                                { phrase: "that involved", explanation: "<b>関係代名詞that</b>: testを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "Baird found that the participants who had engaged in the simple task performed much better on the creativity test than those who had focused continuously.",
                        translation: "ベアードは、単純な作業に従事していた参加者が、継続的に集中していた参加者よりも、創造性テストでずっと良い成績を収めたことを発見した。",
                        grammarAnalysis: {
                            mainVerbs: ["found", "had engaged", "performed", "had focused"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Baird</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>found</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [the participants (who <span class='chunk V2-group'><span class='text'>had engaged</span><span class='tag'>V'</span></span> in the simple task) <span class='chunk V3-group'><span class='text'>performed</span><span class='tag'>V''</span></span> much better on the creativity test than those (who <span class='chunk V4-group'><span class='text'>had focused</span><span class='tag'>V'''</span></span> continuously)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ベアードは</span> <span class='t-V'>発見した</span> <span class='t-O'>that [参加者が（<span class='t-V2'>従事していた</span>単純な作業に） <span class='t-V3'>収めた</span>ずっと良い成績を創造性テストで、参加者よりも（<span class='t-V4'>集中していた</span>継続的に）]</span>。",
                            naturalTranslation: "ベアードは、単純な作業に従事していた参加者が、継続的に集中していた参加者よりも、創造性テストでずっと良い成績を収めたことを発見した。",
                            vocabulary: [
                                { word: "had engaged in", meaning: "「〜に従事していた」" },
                                { word: "performed much better", meaning: "「ずっと良い成績を収めた」" },
                                { word: "had focused continuously", meaning: "「継続的に集中していた」" }
                            ],
                            grammarNotes: [
                                { phrase: "had engaged / had focused", explanation: "<b>過去完了形</b>: テスト前に終了した行動。" },
                                { phrase: "much better ... than", explanation: "<b>比較級</b>: 「〜よりもずっと良い」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "This suggests that taking a break to let the mind wander is vital for creative problem-solving.",
                        translation: "このことは、心をさまよわせるために休憩を取ることが、創造的な問題解決にとって不可欠であることを示唆している。",
                        grammarAnalysis: {
                            mainVerbs: ["suggests"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suggests</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [taking a break (to let the mind wander) is vital (for creative problem-solving)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>このことは</span> <span class='t-V'>示唆している</span> <span class='t-O'>that [休憩を取ること（心をさまよわせるために）は不可欠である（創造的な問題解決にとって）]</span>。",
                            naturalTranslation: "このことは、心をさまよわせるために休憩を取ることが、創造的な問題解決にとって不可欠であることを示唆している。",
                            vocabulary: [
                                { word: "taking a break", meaning: "「休憩を取ること」" },
                                { word: "let the mind wander", meaning: "「心をさまよわせる」" },
                                { word: "vital for", meaning: "「〜にとって不可欠」" },
                                { word: "creative problem-solving", meaning: "「創造的な問題解決」" }
                            ],
                            grammarNotes: [
                                { phrase: "taking a break", explanation: "<b>動名詞句</b>: 主語として機能。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Planning for the Future
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 17,
                        text: "Furthermore, research shows that daydreaming is not just about random fantasies.",
                        translation: "さらに、研究は白昼夢が単なるランダムな空想ではないことを示している。",
                        grammarAnalysis: {
                            mainVerbs: ["shows", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Furthermore)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>research</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>shows</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [daydreaming <span class='chunk V2-group'><span class='text'>is not just</span><span class='tag'>V'</span></span> about random fantasies]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-S'>研究は</span> <span class='t-V'>示している</span> <span class='t-O'>that [白昼夢は <span class='t-V2'>単に〜ではない</span>ランダムな空想に関すること]</span>。",
                            naturalTranslation: "さらに、研究は白昼夢が単なるランダムな空想ではないことを示している。",
                            vocabulary: [
                                { word: "is not just about", meaning: "「単に〜に関するものではない」" },
                                { word: "random fantasies", meaning: "「ランダムな空想」" }
                            ],
                            grammarNotes: [
                                { phrase: "is not just about", explanation: "<b>not just</b>: 「単に〜だけではない」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "A large portion of mind-wandering involves thinking about the future, known as \"autobiographical planning.\"",
                        translation: "マインドワンダリングの大部分は、「自伝的計画」として知られる、将来について考えることを含んでいる。",
                        grammarAnalysis: {
                            mainVerbs: ["involves"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>A large portion of mind-wandering</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>involves</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>thinking about the future, (known as \"autobiographical planning\")</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>マインドワンダリングの大部分は</span> <span class='t-V'>含んでいる</span> <span class='t-O'>将来について考えることを（「自伝的計画」として知られる）</span>。",
                            naturalTranslation: "マインドワンダリングの大部分は、「自伝的計画」として知られる、将来について考えることを含んでいる。",
                            vocabulary: [
                                { word: "A large portion of", meaning: "「〜の大部分」" },
                                { word: "involves thinking", meaning: "「考えることを含む」" },
                                { word: "autobiographical planning", meaning: "「自伝的計画」" }
                            ],
                            grammarNotes: [
                                { phrase: "known as", explanation: "<b>過去分詞句</b>: thinkingを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "Just as sleeping dreams might help us organize memories, waking daydreams allow people to mentally practice for upcoming social interactions or set personal goals.",
                        translation: "睡眠中の夢が記憶を整理するのに役立つのと同様に、起きている間の白昼夢は、人々が来たるべき社会的交流のために精神的に練習したり、個人的な目標を設定したりすることを可能にする。",
                        grammarAnalysis: {
                            mainVerbs: ["might help", "allow"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Just as [sleeping dreams <span class='chunk V2-group'><span class='text'>might help</span><span class='tag'>V'</span></span> us organize memories])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>waking daydreams</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allow</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to mentally practice (for upcoming social interactions) or set personal goals</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(Just as [睡眠中の夢が <span class='t-V2'>助けるかもしれない</span>私たちが記憶を整理するのを])</span>、<span class='t-S'>起きている間の白昼夢は</span> <span class='t-V'>可能にする</span> <span class='t-O'>人々が</span> <span class='t-C'>精神的に練習することを（来たるべき社会的交流のために）または個人的な目標を設定することを</span>。",
                            naturalTranslation: "睡眠中の夢が記憶を整理するのに役立つのと同様に、起きている間の白昼夢は、人々が来たるべき社会的交流のために精神的に練習したり、個人的な目標を設定したりすることを可能にする。",
                            vocabulary: [
                                { word: "Just as ... , ...", meaning: "「〜と同様に」" },
                                { word: "waking daydreams", meaning: "「起きている間の白昼夢」" },
                                { word: "mentally practice", meaning: "「精神的に練習する」" },
                                { word: "upcoming social interactions", meaning: "「来たるべき社会的交流」" }
                            ],
                            grammarNotes: [
                                { phrase: "Just as + S + V", explanation: "<b>Just as</b>: 「〜と同様に」。比較を導く。" },
                                { phrase: "allow O to do", explanation: "<b>allow O to do</b>: 「Oが〜することを可能にする」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Rather than being a waste of time, drifting off helps people manage the complexity of their daily lives and prepare for what lies ahead.",
                        translation: "時間の無駄であるどころか、（思考が）漂流することは、人々が日常生活の複雑さを管理し、待ち受けるものに備えるのを助けるのである。",
                        grammarAnalysis: {
                            mainVerbs: ["helps"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Rather than being a waste of time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>drifting off</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>manage the complexity (of their daily lives) and prepare (for what lies ahead)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(時間の無駄であるどころか)</span>、<span class='t-S'>漂流することは</span> <span class='t-V'>助ける</span> <span class='t-O'>人々が</span> <span class='t-C'>日常生活の複雑さを管理し、待ち受けるものに備えることを</span>。",
                            naturalTranslation: "時間の無駄であるどころか、（思考が）漂流することは、人々が日常生活の複雑さを管理し、待ち受けるものに備えるのを助けるのである。",
                            vocabulary: [
                                { word: "Rather than", meaning: "「〜であるどころか」" },
                                { word: "drifting off", meaning: "「漂流すること」" },
                                { word: "manage the complexity", meaning: "「複雑さを管理する」" },
                                { word: "what lies ahead", meaning: "「待ち受けるもの」" }
                            ],
                            grammarNotes: [
                                { phrase: "Rather than + 動名詞", explanation: "<b>Rather than</b>: 「〜ではなく」。対比を表す。" },
                                { phrase: "help O do", explanation: "<b>help O do</b>: 「Oが〜するのを助ける」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Past view of daydreaming
            {
                id: 1,
                text: "What was the common view of daydreaming in the past?",
                textTranslation: "過去において、白昼夢に対する一般的な見解はどのようなものでしたか？",
                choices: [
                    { id: 1, text: "It was considered a useful way to solve complex problems.", translation: "それは複雑な問題を解決するための有用な方法と考えられていた。", isCorrect: false },
                    { id: 2, text: "It was seen as a harmful habit that resulted in lost time.", translation: "それは時間の損失をもたらす有害な習慣と見なされていた。", isCorrect: true, highlight: "harmful habit that resulted in lost time" },
                    { id: 3, text: "Teachers believed it helped students pay better attention.", translation: "教師は生徒がより良い注意を払うのに役立つと信じていた。", isCorrect: false },
                    { id: 4, text: "Employers encouraged workers to do it to improve their skills.", translation: "雇用主は従業員にスキルを向上させるためにそれを行うよう奨励していた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で過去の見解が述べられています。「viewed this simply as a bad habit that wasted valuable time」に注目。",
                    targetSentenceId: 4,
                    highlightWord: "teachers and employers viewed this simply as a bad habit that wasted valuable time",
                    highlightWordSentenceId: 4
                },
                keywords: ["common view", "past"],
                keywordExplanations: {
                    "common view": "一般的な見解。",
                    "past": "過去の。"
                },
                keywordMatches: [
                    { sentenceId: 4, text: "viewed this simply as a bad habit that wasted valuable time", keyword: "harmful habit that resulted in lost time" }
                ],
                choiceAdvice: "選択肢は過去の白昼夢に対する見解を問うています。第1段落で「悪い習慣」「時間の浪費」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"teachers and employers viewed this simply as a bad habit that wasted valuable time\"" },
                    { type: "arrow", content: "「教師や雇用主はこれを貴重な時間を無駄にする悪い習慣とみなしていた」" },
                    { type: "text", content: "選択肢2: \"It was seen as a harmful habit that resulted in lost time.\"" },
                    { type: "conclusion", content: "bad habit + wasted time = harmful habit + lost time → 正解: 2" }
                ]
            },
            // Q2: 第2段落 - Benefit of daydreaming
            {
                id: 2,
                text: "According to modern experts, one benefit of daydreaming is that",
                textTranslation: "現代の専門家によると、白昼夢の利点の一つは〜です",
                choices: [
                    { id: 1, text: "it helps the brain connect different ideas to solve problems creatively.", translation: "それは脳が異なるアイデアを結びつけて創造的に問題を解決するのを助ける。", isCorrect: true, highlight: "connect different ideas to solve problems creatively" },
                    { id: 2, text: "it prevents people from making dangerous mistakes while driving.", translation: "それは人々が運転中に危険なミスをするのを防ぐ。", isCorrect: false },
                    { id: 3, text: "it allows people to focus more logically on specific math problems.", translation: "それは人々が特定の数学の問題にもっと論理的に集中することを可能にする。", isCorrect: false },
                    { id: 4, text: "it stops the brain from thinking about work during free time.", translation: "それは自由時間中に脳が仕事について考えるのを止める。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落で白昼夢の利点が述べられています。「can make loose connections between different ideas」「leads to sudden insights and creative solutions」に注目。",
                    targetSentenceId: 9,
                    highlightWord: "it can make loose connections between different ideas",
                    highlightWordSentenceId: 9
                },
                keywords: ["modern experts", "benefit"],
                keywordExplanations: {
                    "modern experts": "現代の専門家。",
                    "benefit": "利点。"
                },
                keywordMatches: [
                    { sentenceId: 9, text: "it can make loose connections between different ideas", keyword: "connect different ideas" },
                    { sentenceId: 10, text: "leads to sudden insights and creative solutions", keyword: "solve problems creatively" }
                ],
                choiceAdvice: "選択肢は白昼夢の利点を問うています。第2段落で「アイデアの結びつき」「創造的な解決策」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"it can make loose connections between different ideas\" + \"leads to sudden insights and creative solutions\"" },
                    { type: "arrow", content: "「異なるアイデアの間に緩やかな結びつきを作る」+「創造的な解決策につながる」" },
                    { type: "text", content: "選択肢1: \"it helps the brain connect different ideas to solve problems creatively.\"" },
                    { type: "conclusion", content: "loose connections + creative solutions = connect ideas + solve creatively → 正解: 1" }
                ]
            },
            // Q3: 第3段落 - Baird's experiment
            {
                id: 3,
                text: "What did the participants in Benjamin Baird's experiment do?",
                textTranslation: "ベンジャミン・ベアードの実験で参加者は何をしましたか？",
                choices: [
                    { id: 1, text: "They tried to come up with new uses for objects while they were sleeping.", translation: "彼らは寝ている間に物の新しい用途を考え出そうとした。", isCorrect: false },
                    { id: 2, text: "The group that did a difficult task first performed the best on the test.", translation: "最初に難しい課題をしたグループがテストで最も良い成績を収めた。", isCorrect: false },
                    { id: 3, text: "Those who did a boring task were more creative than those who focused hard.", translation: "退屈な作業をした人は、集中した人よりも創造的だった。", isCorrect: true, highlight: "boring task were more creative than focused" },
                    { id: 4, text: "They were asked to describe their daydreams to the researchers immediately.", translation: "彼らは研究者にすぐに白昼夢を説明するよう求められた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で実験結果が述べられています。「the participants who had engaged in the simple task performed much better on the creativity test than those who had focused continuously」に注目。",
                    targetSentenceId: 15,
                    highlightWord: "the participants who had engaged in the simple task performed much better on the creativity test than those who had focused continuously",
                    highlightWordSentenceId: 15
                },
                keywords: ["Benjamin Baird's experiment", "participants"],
                keywordExplanations: {
                    "Benjamin Baird's experiment": "ベアードの実験。",
                    "participants": "参加者。"
                },
                keywordMatches: [
                    { sentenceId: 15, text: "the participants who had engaged in the simple task performed much better on the creativity test than those who had focused continuously", keyword: "boring task were more creative" }
                ],
                choiceAdvice: "選択肢は実験結果を問うています。第3段落で「単純な作業」「創造性テストで良い成績」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"the participants who had engaged in the simple task performed much better on the creativity test than those who had focused continuously\"" },
                    { type: "arrow", content: "「単純な作業に従事した参加者は創造性テストでずっと良い成績を収めた」" },
                    { type: "text", content: "選択肢3: \"Those who did a boring task were more creative than those who focused hard.\"" },
                    { type: "conclusion", content: "simple task + performed better = boring task + more creative → 正解: 3" }
                ]
            },
            // Q4: 第4段落 - Autobiographical planning
            {
                id: 4,
                text: "What does the passage suggest about \"autobiographical planning\"?",
                textTranslation: "本文は「自伝的計画」について何を示唆していますか？",
                choices: [
                    { id: 1, text: "It is a type of daydreaming that focuses on past memories only.", translation: "それは過去の記憶のみに焦点を当てた白昼夢の一種である。", isCorrect: false },
                    { id: 2, text: "It happens when people sleep and helps them organize their dreams.", translation: "それは人々が眠っているときに起こり、夢を整理するのに役立つ。", isCorrect: false },
                    { id: 3, text: "It creates false memories about events that never happened.", translation: "それは決して起こらなかった出来事についての偽りの記憶を作り出す。", isCorrect: false },
                    { id: 4, text: "It helps people prepare for future goals and social situations.", translation: "それは人々が将来の目標や社会的状況に備えるのを助ける。", isCorrect: true, highlight: "prepare for future goals and social situations" }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で「自伝的計画」の説明があります。「allow people to mentally practice for upcoming social interactions or set personal goals」に注目。",
                    targetSentenceId: 19,
                    highlightWord: "waking daydreams allow people to mentally practice for upcoming social interactions or set personal goals",
                    highlightWordSentenceId: 19
                },
                keywords: ["autobiographical planning"],
                keywordExplanations: {
                    "autobiographical planning": "自伝的計画。"
                },
                keywordMatches: [
                    { sentenceId: 19, text: "allow people to mentally practice for upcoming social interactions or set personal goals", keyword: "prepare for future goals and social situations" }
                ],
                choiceAdvice: "選択肢は「自伝的計画」の意味を問うています。第4段落で「将来の社会的交流」「個人的な目標」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"waking daydreams allow people to mentally practice for upcoming social interactions or set personal goals\"" },
                    { type: "arrow", content: "「起きている間の白昼夢は人々が来たるべき社会的交流のために精神的に練習したり、個人的な目標を設定したりすることを可能にする」" },
                    { type: "text", content: "選択肢4: \"It helps people prepare for future goals and social situations.\"" },
                    { type: "conclusion", content: "upcoming social interactions + set personal goals = future goals + social situations → 正解: 4" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の文のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "People spend nearly 50 percent of their waking hours mind-wandering.", translation: "人々は起きている時間の約50パーセントをマインドワンダリングに費やしている。", isCorrect: true, highlight: "50 percent of waking hours" },
                    { id: 2, text: "Benjamin Baird found that focusing on difficult tasks improves creativity.", translation: "ベンジャミン・ベアードは難しい課題に集中することが創造性を向上させることを発見した。", isCorrect: false },
                    { id: 3, text: "Most psychologists still believe that daydreaming has no positive effects.", translation: "ほとんどの心理学者は今でも白昼夢には肯定的な効果がないと信じている。", isCorrect: false },
                    { id: 4, text: "Daydreaming prevents people from setting personal goals for the future.", translation: "白昼夢は人々が将来の個人的な目標を設定するのを妨げる。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で起きている時間の半分について述べられています。「human minds wander for nearly half of the time that people are awake」に注目。",
                    targetSentenceId: 2,
                    highlightWord: "human minds wander for nearly half of the time that people are awake",
                    highlightWordSentenceId: 2
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい。",
                    "statements": "文。"
                },
                keywordMatches: [
                    { sentenceId: 2, text: "human minds wander for nearly half of the time that people are awake", keyword: "50 percent of waking hours" }
                ],
                choiceAdvice: "選択肢は本文の内容と一致するものを探します。第1段落で「時間の半分近く」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"human minds wander for nearly half of the time that people are awake\"" },
                    { type: "arrow", content: "「人間の心は起きている時間の半分近くさまよっている」" },
                    { type: "text", content: "選択肢1: \"People spend nearly 50 percent of their waking hours mind-wandering.\"" },
                    { type: "conclusion", content: "nearly half = nearly 50 percent → 正解: 1" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Wandering Mind - 講師用要約",
            intro: "睡眠中の夢と同様に、起きている間の「白昼夢（マインドワンダリング）」も科学的に重要な機能が認められています。かつては単なる時間の無駄と見なされていましたが、現在では創造性の向上や将来の計画立案に役立つことが分かっています。過去問の「Living the Dream」（2023年第1回）と同様に、精神活動のテーマを扱っています。",
            points: [
                { label: "1. The Common Habit（第1段落）", text: "人は起きている時間の約半分を「マインドワンダリング」に費やしています。以前、教師や雇用主はこれを悪い習慣だと考えていましたが、科学者はその利点に気づき始めています。" },
                { label: "2. The Creative Spark（第2段落）", text: "かつて心理学は不注意の害（事故など）に注目していましたが、現代の専門家は白昼夢が脳を「クリエイティブモード」にすることを発見しました。論理的思考から離れることで、アイデア同士の意外な結びつきが生まれます。" },
                { label: "3. The Experiment（第3段落）", text: "ベアードの研究では、退屈な作業をして心をさまよわせたグループの方が、難しい作業に集中し続けたグループよりも、その後の「創造性テスト（物の用途を考える）」で良い成績を収めました。" },
                { label: "4. Planning for the Future（第4段落）", text: "白昼夢は単なる空想ではなく、「自伝的計画」と呼ばれる機能を持っています。将来の社会的場面のシミュレーションや目標設定など、未来に備えるための重要な精神的リハーサルなのです。" }
            ]
        }
    },
    // 2級 オリジナル問題12: The Return to the Moon
    {
        id: "grade-2-original-return-moon",
        grade: "2級",
        title: "The Return to the Moon",
        subTitle: "問題12",
        genre: "科学技術 / 宇宙",
        similarProblems: {
            exam: "2025年度 第2回",
            title: "Mars Exploration"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Return+to+Moon",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Back to the Moon
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Humans first walked on the Moon more than 50 years ago during the Apollo missions.",
                        translation: "人類はアポロ計画の間、50年以上前に初めて月面を歩いた。",
                        grammarAnalysis: {
                            mainVerbs: ["walked"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Humans</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>first walked</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on the Moon) (more than 50 years ago) (during the Apollo missions)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>人類は</span> <span class='t-V'>初めて歩いた</span> <span class='t-M'>(月面を) (50年以上前に) (アポロ計画の間)</span>。",
                            naturalTranslation: "人類はアポロ計画の間、50年以上前に初めて月面を歩いた。",
                            vocabulary: [
                                { word: "walked on the Moon", meaning: "「月面を歩いた」" },
                                { word: "Apollo missions", meaning: "「アポロ計画」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 2,
                        text: "However, after 1972, the moon landings stopped, and space agencies focused on other projects like the Space Shuttle.",
                        translation: "しかし、1972年以降、月面着陸は停止し、宇宙機関はスペースシャトルのような他のプロジェクトに焦点を合わせた。",
                        grammarAnalysis: {
                            mainVerbs: ["stopped", "focused"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However), (after 1972)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the moon landings</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>stopped</span><span class='tag'>V</span></span>, and <span class='chunk S2-group'><span class='text'>space agencies</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>focused on</span><span class='tag'>V'</span></span> <span class='chunk O-group'><span class='text'>other projects (like the Space Shuttle)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)、(1972年以降)</span>、<span class='t-S'>月面着陸は</span> <span class='t-V'>停止した</span>、そして <span class='t-S2'>宇宙機関は</span> <span class='t-V2'>焦点を合わせた</span> <span class='t-O'>他のプロジェクト（スペースシャトルのような）に</span>。",
                            naturalTranslation: "しかし、1972年以降、月面着陸は停止し、宇宙機関はスペースシャトルのような他のプロジェクトに焦点を合わせた。",
                            vocabulary: [
                                { word: "moon landings", meaning: "「月面着陸」" },
                                { word: "space agencies", meaning: "「宇宙機関」" },
                                { word: "focused on", meaning: "「〜に焦点を合わせた」" }
                            ],
                            grammarNotes: [
                                { phrase: "like the Space Shuttle", explanation: "<b>like + 名詞</b>: 「〜のような」。例を挙げる。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Recently, there has been a renewed interest in returning to the Moon.",
                        translation: "最近、月へ戻ることへの関心が再び高まっている。",
                        grammarAnalysis: {
                            mainVerbs: ["has been"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Recently)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>there</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has been</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a renewed interest (in returning to the Moon)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(最近)</span>、<span class='t-S'>there</span> <span class='t-V'>存在している</span> <span class='t-C'>再び高まった関心が（月に戻ることへの）</span>。",
                            naturalTranslation: "最近、月へ戻ることへの関心が再び高まっている。",
                            vocabulary: [
                                { word: "renewed interest", meaning: "「新たな関心」" },
                                { word: "returning to", meaning: "「〜に戻ること」" }
                            ],
                            grammarNotes: [
                                { phrase: "there has been", explanation: "<b>there構文（現在完了形）</b>: 「〜がある・存在している」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "This time, the goal is not just to plant a flag and leave.",
                        translation: "今回の目標は、単に旗を立てて去ることだけではない。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(This time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the goal</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is not just</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to plant a flag and leave</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(今回)</span>、<span class='t-S'>目標は</span> <span class='t-V'>単に〜だけではない</span> <span class='t-C'>旗を立てて去ること</span>。",
                            naturalTranslation: "今回の目標は、単に旗を立てて去ることだけではない。",
                            vocabulary: [
                                { word: "plant a flag", meaning: "「旗を立てる」" },
                                { word: "not just", meaning: "「単に〜だけではない」" }
                            ],
                            grammarNotes: [
                                { phrase: "to plant and leave", explanation: "<b>不定詞句</b>: 補語として機能。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "Agencies like NASA and companies from the private sector plan to build permanent bases where astronauts can live and work for long periods.",
                        translation: "NASAのような機関や民間企業の会社は、宇宙飛行士が長期間居住し働くことができる恒久的な基地を建設することを計画している。",
                        grammarAnalysis: {
                            mainVerbs: ["plan", "can live", "work"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Agencies (like NASA) and companies (from the private sector)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>plan</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to build permanent bases (where [astronauts <span class='chunk V2-group'><span class='text'>can live and work</span><span class='tag'>V'</span></span> for long periods])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>機関（NASAのような）と会社（民間企業の）は</span> <span class='t-V'>計画している</span> <span class='t-O'>恒久的な基地を建設することを（where [宇宙飛行士が <span class='t-V2'>住み働くことができる</span>長期間]）</span>。",
                            naturalTranslation: "NASAのような機関や民間企業の会社は、宇宙飛行士が長期間居住し働くことができる恒久的な基地を建設することを計画している。",
                            vocabulary: [
                                { word: "private sector", meaning: "「民間部門」" },
                                { word: "permanent bases", meaning: "「恒久的な基地」" },
                                { word: "for long periods", meaning: "「長期間」" }
                            ],
                            grammarNotes: [
                                { phrase: "where astronauts can live", explanation: "<b>関係副詞where</b>: basesを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "A major reason for this new focus is the discovery of water ice in craters near the Moon's poles.",
                        translation: "この新しい注目の主な理由は、月の極近くのクレーターにおける氷（水）の発見である。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>A major reason (for this new focus)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the discovery of water ice (in craters near the Moon's poles)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>主な理由（この新しい注目の）は</span> <span class='t-V'>である</span> <span class='t-C'>氷の発見（月の極近くのクレーターにおける）</span>。",
                            naturalTranslation: "この新しい注目の主な理由は、月の極近くのクレーターにおける氷（水）の発見である。",
                            vocabulary: [
                                { word: "A major reason", meaning: "「主な理由」" },
                                { word: "water ice", meaning: "「氷（水）」" },
                                { word: "craters", meaning: "「クレーター」" },
                                { word: "poles", meaning: "「極」" }
                            ],
                            grammarNotes: []
                        }
                    }
                ]
            },
            // 第2段落: A Harsh Environment
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "Establishing a base on the Moon is incredibly difficult due to the harsh environment.",
                        translation: "過酷な環境のため、月に基地を建設することは信じられないほど困難である。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Establishing a base on the Moon</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>incredibly difficult</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(due to the harsh environment)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>月に基地を建設することは</span> <span class='t-V'>である</span> <span class='t-C'>信じられないほど困難</span> <span class='t-M'>(過酷な環境のため)</span>。",
                            naturalTranslation: "過酷な環境のため、月に基地を建設することは信じられないほど困難である。",
                            vocabulary: [
                                { word: "Establishing a base", meaning: "「基地を建設すること」" },
                                { word: "incredibly difficult", meaning: "「信じられないほど困難」" },
                                { word: "harsh environment", meaning: "「過酷な環境」" }
                            ],
                            grammarNotes: [
                                { phrase: "Establishing", explanation: "<b>動名詞</b>: 主語として機能。" },
                                { phrase: "due to", explanation: "<b>due to + 名詞</b>: 「〜のため」。理由を表す。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "On Earth, the atmosphere protects us from the sun's radiation and small meteoroids, but the Moon has no atmosphere.",
                        translation: "地球では、大気が太陽からの放射線や小さな隕石から私たちを守ってくれるが、月には大気がない。",
                        grammarAnalysis: {
                            mainVerbs: ["protects", "has"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(On Earth)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the atmosphere</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>protects</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>us</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(from the sun's radiation and small meteoroids)</span><span class='tag'>M</span></span>, but <span class='chunk S2-group'><span class='text'>the Moon</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>has</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>no atmosphere</span><span class='tag'>O'</span></span>.",
                            translationHtml: "<span class='t-M'>(地球では)</span>、<span class='t-S'>大気は</span> <span class='t-V'>守る</span> <span class='t-O'>私たちを</span> <span class='t-M'>(太陽からの放射線や小さな隕石から)</span>、しかし <span class='t-S2'>月には</span> <span class='t-V2'>ない</span> <span class='t-O2'>大気が</span>。",
                            naturalTranslation: "地球では、大気が太陽からの放射線や小さな隕石から私たちを守ってくれるが、月には大気がない。",
                            vocabulary: [
                                { word: "atmosphere", meaning: "「大気」" },
                                { word: "radiation", meaning: "「放射線」" },
                                { word: "meteoroids", meaning: "「小さな隕石」" }
                            ],
                            grammarNotes: [
                                { phrase: "but (対比)", explanation: "<b>接続詞but</b>: 対比的な内容を接続。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "This means astronauts and their equipment are constantly exposed to danger.",
                        translation: "これは、宇宙飛行士とその装備が常に危険にさらされていることを意味する。",
                        grammarAnalysis: {
                            mainVerbs: ["means", "are exposed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>means</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[astronauts and their equipment <span class='chunk V2-group'><span class='text'>are constantly exposed</span><span class='tag'>V'</span></span> to danger]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>意味する</span> <span class='t-O'>[宇宙飛行士とその装備が <span class='t-V2'>常にさらされている</span>危険に]</span>。",
                            naturalTranslation: "これは、宇宙飛行士とその装備が常に危険にさらされていることを意味する。",
                            vocabulary: [
                                { word: "equipment", meaning: "「装備」" },
                                { word: "constantly", meaning: "「常に」" },
                                { word: "exposed to danger", meaning: "「危険にさらされている」" }
                            ],
                            grammarNotes: [
                                { phrase: "are exposed to", explanation: "<b>be exposed to</b>: 「〜にさらされる」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "Furthermore, the temperature difference is extreme.",
                        translation: "さらに、温度差が極端である。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Furthermore)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the temperature difference</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>extreme</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-S'>温度差は</span> <span class='t-V'>である</span> <span class='t-C'>極端</span>。",
                            naturalTranslation: "さらに、温度差が極端である。",
                            vocabulary: [
                                { word: "temperature difference", meaning: "「温度差」" },
                                { word: "extreme", meaning: "「極端な」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 11,
                        text: "During the day, it can be hotter than boiling water, and at night, it is colder than anywhere on Earth.",
                        translation: "日中は沸騰したお湯よりも熱くなることがあり、夜は地球上のどこよりも寒くなる。",
                        grammarAnalysis: {
                            mainVerbs: ["can be", "is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(During the day)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>hotter (than boiling water)</span><span class='tag'>C</span></span>, and <span class='chunk M-group'><span class='text'>(at night)</span><span class='tag'>M</span></span>, <span class='chunk S2-group'><span class='text'>it</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>colder (than anywhere on Earth)</span><span class='tag'>C'</span></span>.",
                            translationHtml: "<span class='t-M'>(日中は)</span>、<span class='t-S'>それは</span> <span class='t-V'>なりえる</span> <span class='t-C'>より熱く（沸騰したお湯より）</span>、そして <span class='t-M'>(夜は)</span>、<span class='t-S2'>それは</span> <span class='t-V2'>なる</span> <span class='t-C2'>より寒く（地球上のどこより）</span>。",
                            naturalTranslation: "日中は沸騰したお湯よりも熱くなることがあり、夜は地球上のどこよりも寒くなる。",
                            vocabulary: [
                                { word: "boiling water", meaning: "「沸騰したお湯」" },
                                { word: "hotter than", meaning: "「〜よりも熱い」" },
                                { word: "colder than", meaning: "「〜よりも寒い」" }
                            ],
                            grammarNotes: [
                                { phrase: "hotter than / colder than", explanation: "<b>比較級</b>: 「〜より熱い / 寒い」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "This makes it a challenge to design machines and habitats that can survive both extremes without breaking down.",
                        translation: "このことは、故障することなく両方の極端な状態に耐えることができる機械や居住区を設計することを困難にする。",
                        grammarAnalysis: {
                            mainVerbs: ["makes", "can survive"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>makes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>a challenge to design machines and habitats (that <span class='chunk V2-group'><span class='text'>can survive</span><span class='tag'>V'</span></span> both extremes without breaking down)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>このことは</span> <span class='t-V'>する</span> <span class='t-O'>それを</span> <span class='t-C'>困難に　機械や居住区を設計することを（<span class='t-V2'>耐えることができる</span>両方の極端な状態に故障することなく）</span>。",
                            naturalTranslation: "このことは、故障することなく両方の極端な状態に耐えることができる機械や居住区を設計することを困難にする。",
                            vocabulary: [
                                { word: "makes it a challenge", meaning: "「〜を困難にする」" },
                                { word: "habitats", meaning: "「居住区」" },
                                { word: "breaking down", meaning: "「故障する」" }
                            ],
                            grammarNotes: [
                                { phrase: "make it + 名詞 + to do", explanation: "<b>make it + 名詞 + to do</b>: 「〜することを…にする」。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Tricky Landing
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "In the past, spacecraft landed in the flat regions near the Moon's equator because it was the safest and easiest place to touch down.",
                        translation: "過去には、宇宙船は月の赤道近くの平らな地域に着陸した。なぜなら、そこが着陸するのに最も安全で簡単な場所だったからだ。",
                        grammarAnalysis: {
                            mainVerbs: ["landed", "was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the past)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>spacecraft</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>landed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the flat regions near the Moon's equator)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(because [it <span class='chunk V2-group'><span class='text'>was</span><span class='tag'>V'</span></span> the safest and easiest place to touch down])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(過去には)</span>、<span class='t-S'>宇宙船は</span> <span class='t-V'>着陸した</span> <span class='t-M'>(月の赤道近くの平らな地域に)</span> <span class='t-M'>(なぜなら [それは <span class='t-V2'>だった</span>最も安全で簡単な場所 着陸するのに])</span>。",
                            naturalTranslation: "過去には、宇宙船は月の赤道近くの平らな地域に着陸した。なぜなら、そこが着陸するのに最も安全で簡単な場所だったからだ。",
                            vocabulary: [
                                { word: "spacecraft", meaning: "「宇宙船」" },
                                { word: "flat regions", meaning: "「平らな地域」" },
                                { word: "equator", meaning: "「赤道」" },
                                { word: "touch down", meaning: "「着陸する」" }
                            ],
                            grammarNotes: [
                                { phrase: "the safest and easiest", explanation: "<b>最上級</b>: 「最も安全で簡単な」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "These areas are well-lit and have few large rocks.",
                        translation: "これらの地域は明るく照らされており、大きな岩も少ない。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "have"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These areas</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>well-lit</span><span class='tag'>C</span></span> and <span class='chunk V2-group'><span class='text'>have</span><span class='tag'>V'</span></span> <span class='chunk O-group'><span class='text'>few large rocks</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これらの地域は</span> <span class='t-V'>である</span> <span class='t-C'>明るく照らされて</span>、そして <span class='t-V2'>持っている</span> <span class='t-O'>少ない大きな岩を</span>。",
                            naturalTranslation: "これらの地域は明るく照らされており、大きな岩も少ない。",
                            vocabulary: [
                                { word: "well-lit", meaning: "「明るく照らされた」" },
                                { word: "few large rocks", meaning: "「大きな岩がほとんどない」" }
                            ],
                            grammarNotes: [
                                { phrase: "few", explanation: "<b>few</b>: 「ほとんどない」（否定的意味）。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "However, the water ice is located at the South Pole, which is filled with deep craters and tall mountains.",
                        translation: "しかし、氷は南極に位置しており、そこは深いクレーターや高い山々で満たされている。",
                        grammarAnalysis: {
                            mainVerbs: ["is located", "is filled"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the water ice</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is located</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(at the South Pole, (which <span class='chunk V2-group'><span class='text'>is filled</span><span class='tag'>V'</span></span> with deep craters and tall mountains))</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>氷は</span> <span class='t-V'>位置している</span> <span class='t-M'>(南極に（which <span class='t-V2'>満たされている</span>深いクレーターや高い山々で）)</span>。",
                            naturalTranslation: "しかし、氷は南極に位置しており、そこは深いクレーターや高い山々で満たされている。",
                            vocabulary: [
                                { word: "is located at", meaning: "「〜に位置している」" },
                                { word: "South Pole", meaning: "「南極」" },
                                { word: "is filled with", meaning: "「〜で満たされている」" }
                            ],
                            grammarNotes: [
                                { phrase: ", which is filled", explanation: "<b>関係代名詞which（継続用法）</b>: South Poleを補足説明。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "Landing there is dangerous because of the rough ground and long shadows that hide obstacles.",
                        translation: "荒れた地面と障害物を隠す長い影のため、そこに着陸するのは危険である。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "hide"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Landing there</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>dangerous</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(because of [the rough ground and long shadows (that <span class='chunk V2-group'><span class='text'>hide</span><span class='tag'>V'</span></span> obstacles)])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>そこに着陸することは</span> <span class='t-V'>である</span> <span class='t-C'>危険</span> <span class='t-M'>(〜のため [荒れた地面と長い影（<span class='t-V2'>隠す</span>障害物を）])</span>。",
                            naturalTranslation: "荒れた地面と障害物を隠す長い影のため、そこに着陸するのは危険である。",
                            vocabulary: [
                                { word: "Landing there", meaning: "「そこに着陸すること」" },
                                { word: "rough ground", meaning: "「荒れた地面」" },
                                { word: "long shadows", meaning: "「長い影」" },
                                { word: "obstacles", meaning: "「障害物」" }
                            ],
                            grammarNotes: [
                                { phrase: "because of", explanation: "<b>because of + 名詞</b>: 「〜のため」。" },
                                { phrase: "that hide", explanation: "<b>関係代名詞that</b>: shadowsを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "To solve this, scientists are developing new intelligent landing systems.",
                        translation: "これを解決するために、科学者たちは新しい知的な着陸システムを開発している。",
                        grammarAnalysis: {
                            mainVerbs: ["are developing"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To solve this)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are developing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>new intelligent landing systems</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(これを解決するために)</span>、<span class='t-S'>科学者たちは</span> <span class='t-V'>開発している</span> <span class='t-O'>新しい知的な着陸システムを</span>。",
                            naturalTranslation: "これを解決するために、科学者たちは新しい知的な着陸システムを開発している。",
                            vocabulary: [
                                { word: "To solve this", meaning: "「これを解決するために」" },
                                { word: "intelligent landing systems", meaning: "「知的な着陸システム」" }
                            ],
                            grammarNotes: [
                                { phrase: "To solve", explanation: "<b>不定詞（目的）</b>: 「〜するために」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "Unlike old systems, these new computers can scan the ground in real-time and choose a safe flat spot to land, even in difficult conditions.",
                        translation: "古いシステムとは異なり、これらの新しいコンピュータはリアルタイムで地面をスキャンし、困難な状況下でも着陸するための安全で平らな場所を選ぶことができる。",
                        grammarAnalysis: {
                            mainVerbs: ["can scan", "choose"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Unlike old systems)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>these new computers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can scan</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the ground</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in real-time)</span><span class='tag'>M</span></span> and <span class='chunk V2-group'><span class='text'>choose</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>a safe flat spot to land</span><span class='tag'>O'</span></span>, <span class='chunk M-group'><span class='text'>(even in difficult conditions)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(古いシステムとは異なり)</span>、<span class='t-S'>これらの新しいコンピュータは</span> <span class='t-V'>スキャンできる</span> <span class='t-O'>地面を</span> <span class='t-M'>(リアルタイムで)</span>、そして <span class='t-V2'>選ぶ</span> <span class='t-O2'>安全で平らな場所を着陸するための</span>、<span class='t-M'>(困難な状況下でも)</span>。",
                            naturalTranslation: "古いシステムとは異なり、これらの新しいコンピュータはリアルタイムで地面をスキャンし、困難な状況下でも着陸するための安全で平らな場所を選ぶことができる。",
                            vocabulary: [
                                { word: "Unlike", meaning: "「〜とは異なり」" },
                                { word: "in real-time", meaning: "「リアルタイムで」" },
                                { word: "safe flat spot", meaning: "「安全で平らな場所」" }
                            ],
                            grammarNotes: [
                                { phrase: "Unlike + 名詞", explanation: "<b>Unlike</b>: 「〜とは異なり」。対比を導入。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Stepping Stone to Mars
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 19,
                        text: "The long-term goal of exploring the Moon is to prepare humanity for an even greater journey.",
                        translation: "月を探査することの長期的な目標は、さらに偉大な旅のために人類を準備させることである。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The long-term goal (of exploring the Moon)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to prepare humanity (for an even greater journey)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>長期的な目標（月を探査することの）は</span> <span class='t-V'>である</span> <span class='t-C'>人類を準備させること（さらに偉大な旅のために）</span>。",
                            naturalTranslation: "月を探査することの長期的な目標は、さらに偉大な旅のために人類を準備させることである。",
                            vocabulary: [
                                { word: "long-term goal", meaning: "「長期的な目標」" },
                                { word: "prepare humanity", meaning: "「人類を準備させる」" },
                                { word: "an even greater journey", meaning: "「さらに偉大な旅」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 20,
                        text: "By learning how to use the Moon's water to create fuel and air, astronauts will gain the skills needed to travel to Mars.",
                        translation: "燃料や空気を作るために月の水を使う方法を学ぶことによって、宇宙飛行士は火星へ旅するために必要なスキルを得るだろう。",
                        grammarAnalysis: {
                            mainVerbs: ["will gain"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(By learning [how to use the Moon's water to create fuel and air])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>astronauts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>will gain</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the skills (needed to travel to Mars)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(学ぶことによって [月の水を使う方法を燃料や空気を作るために])</span>、<span class='t-S'>宇宙飛行士は</span> <span class='t-V'>得るだろう</span> <span class='t-O'>スキルを（火星へ旅するために必要な）</span>。",
                            naturalTranslation: "燃料や空気を作るために月の水を使う方法を学ぶことによって、宇宙飛行士は火星へ旅するために必要なスキルを得るだろう。",
                            vocabulary: [
                                { word: "By learning", meaning: "「学ぶことによって」" },
                                { word: "create fuel and air", meaning: "「燃料と空気を作る」" },
                                { word: "the skills needed", meaning: "「必要なスキル」" }
                            ],
                            grammarNotes: [
                                { phrase: "By + 動名詞", explanation: "<b>By + 動名詞</b>: 「〜することによって」。手段を表す。" },
                                { phrase: "needed to travel", explanation: "<b>過去分詞</b>: skillsを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "The Moon will serve as a training ground and a gas station for deep space travel.",
                        translation: "月は深宇宙旅行のための訓練場およびガソリンスタンドとしての役割を果たすだろう。",
                        grammarAnalysis: {
                            mainVerbs: ["will serve"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The Moon</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>will serve as</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a training ground and a gas station (for deep space travel)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>月は</span> <span class='t-V'>役割を果たすだろう</span> <span class='t-C'>訓練場およびガソリンスタンドとして（深宇宙旅行のための）</span>。",
                            naturalTranslation: "月は深宇宙旅行のための訓練場およびガソリンスタンドとしての役割を果たすだろう。",
                            vocabulary: [
                                { word: "will serve as", meaning: "「〜としての役割を果たす」" },
                                { word: "training ground", meaning: "「訓練場」" },
                                { word: "gas station", meaning: "「ガソリンスタンド」" },
                                { word: "deep space travel", meaning: "「深宇宙旅行」" }
                            ],
                            grammarNotes: [
                                { phrase: "serve as", explanation: "<b>serve as</b>: 「〜としての役割を果たす」。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "If humans can successfully live on the Moon, it will be the first step toward becoming a species that can survive on multiple planets.",
                        translation: "もし人間が月での居住に成功すれば、それは複数の惑星で生き残ることができる種になるための第一歩となるだろう。",
                        grammarAnalysis: {
                            mainVerbs: ["can live", "will be", "can survive"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(If [humans <span class='chunk V-group'><span class='text'>can successfully live</span><span class='tag'>V</span></span> on the Moon])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>will be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the first step (toward becoming a species (that <span class='chunk V2-group'><span class='text'>can survive</span><span class='tag'>V'</span></span> on multiple planets))</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(もし [人間が <span class='t-V'>うまく住むことができれば</span>月に])</span>、<span class='t-S'>それは</span> <span class='t-V'>なるだろう</span> <span class='t-C'>第一歩（種になるための（<span class='t-V2'>生き残ることができる</span>複数の惑星で））</span>。",
                            naturalTranslation: "もし人間が月での居住に成功すれば、それは複数の惑星で生き残ることができる種になるための第一歩となるだろう。",
                            vocabulary: [
                                { word: "successfully", meaning: "「うまく、首尾よく」" },
                                { word: "the first step", meaning: "「第一歩」" },
                                { word: "toward becoming", meaning: "「〜になるための」" },
                                { word: "multiple planets", meaning: "「複数の惑星」" }
                            ],
                            grammarNotes: [
                                { phrase: "If + S + can V", explanation: "<b>条件節</b>: 「もし〜ならば」。" },
                                { phrase: "that can survive", explanation: "<b>関係代名詞that</b>: speciesを修飾。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Difference from past
            {
                id: 1,
                text: "What is different about the current plans to visit the Moon compared to the past?",
                textTranslation: "現在の月への訪問計画は、過去と比較して何が異なりますか？",
                choices: [
                    { id: 1, text: "Scientists want to build bases for astronauts to stay for a long time.", translation: "科学者たちは宇宙飛行士が長期間滞在するための基地を建設したいと考えている。", isCorrect: true, highlight: "build bases for astronauts to stay for a long time" },
                    { id: 2, text: "Space agencies have decided to stop sending humans into space.", translation: "宇宙機関は人間を宇宙に送ることをやめることを決定した。", isCorrect: false },
                    { id: 3, text: "The main goal is to bring back as much soil as possible to Earth.", translation: "主な目標は、できるだけ多くの土壌を地球に持ち帰ることである。", isCorrect: false },
                    { id: 4, text: "Private companies are not allowed to participate in the new missions.", translation: "民間企業は新しいミッションに参加することを許可されていない。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で現在の計画の違いが述べられています。「plan to build permanent bases where astronauts can live and work for long periods」に注目。",
                    targetSentenceId: 5,
                    highlightWord: "plan to build permanent bases where astronauts can live and work for long periods",
                    highlightWordSentenceId: 5
                },
                keywords: ["different", "current plans", "compared to the past"],
                keywordExplanations: {
                    "different": "異なる点。",
                    "current plans": "現在の計画。",
                    "compared to the past": "過去と比較して。"
                },
                keywordMatches: [
                    { sentenceId: 5, text: "plan to build permanent bases where astronauts can live and work for long periods", keyword: "build bases for astronauts to stay" }
                ],
                choiceAdvice: "選択肢は現在の計画の違いを問うています。第1段落で「恒久的な基地」「長期滞在」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"plan to build permanent bases where astronauts can live and work for long periods\"" },
                    { type: "arrow", content: "「宇宙飛行士が長期間住み働ける恒久的な基地を建設する計画」" },
                    { type: "text", content: "選択肢1: \"Scientists want to build bases for astronauts to stay for a long time.\"" },
                    { type: "conclusion", content: "permanent bases + long periods = build bases + stay for a long time → 正解: 1" }
                ]
            },
            // Q2: 第2段落 - Problem with environment
            {
                id: 2,
                text: "One problem with the environment on the Moon is that",
                textTranslation: "月の環境に関する問題の一つは〜です",
                choices: [
                    { id: 1, text: "there is too much air pressure for humans to walk easily.", translation: "人間が容易に歩くには気圧が高すぎる。", isCorrect: false },
                    { id: 2, text: "the temperature stays exactly the same throughout the day and night.", translation: "温度は昼夜を通じて全く同じままである。", isCorrect: false },
                    { id: 3, text: "there is no atmosphere to protect the surface from radiation.", translation: "放射線から表面を守る大気がない。", isCorrect: true, highlight: "no atmosphere to protect from radiation" },
                    { id: 4, text: "it is difficult to find sunlight because the days are too short.", translation: "日が短すぎるため太陽光を見つけるのが難しい。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落で環境の問題が述べられています。「the atmosphere protects us from the sun's radiation...but the Moon has no atmosphere」に注目。",
                    targetSentenceId: 8,
                    highlightWord: "the atmosphere protects us from the sun's radiation and small meteoroids, but the Moon has no atmosphere",
                    highlightWordSentenceId: 8
                },
                keywords: ["problem", "environment", "Moon"],
                keywordExplanations: {
                    "problem": "問題。",
                    "environment": "環境。",
                    "Moon": "月の。"
                },
                keywordMatches: [
                    { sentenceId: 8, text: "the atmosphere protects us from the sun's radiation...but the Moon has no atmosphere", keyword: "no atmosphere to protect from radiation" }
                ],
                choiceAdvice: "選択肢は月の環境問題を問うています。第2段落で「大気がない」「放射線から保護しない」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"On Earth, the atmosphere protects us from the sun's radiation...but the Moon has no atmosphere\"" },
                    { type: "arrow", content: "「地球では大気が放射線から守るが、月には大気がない」" },
                    { type: "text", content: "選択肢3: \"there is no atmosphere to protect the surface from radiation.\"" },
                    { type: "conclusion", content: "has no atmosphere + protects from radiation = no atmosphere to protect → 正解: 3" }
                ]
            },
            // Q3: 第3段落 - South Pole landing difficulty
            {
                id: 3,
                text: "Why is landing at the Moon's South Pole more difficult than landing at the equator?",
                textTranslation: "なぜ月の南極への着陸は赤道への着陸より困難なのですか？",
                choices: [
                    { id: 1, text: "The South Pole has too much water, which makes the ground soft and unstable.", translation: "南極は水が多すぎて、地面が柔らかく不安定になる。", isCorrect: false },
                    { id: 2, text: "The ground is rough, and shadows make it hard to see where to land.", translation: "地面が荒れており、影が着陸場所を見にくくする。", isCorrect: true, highlight: "rough ground and shadows make it hard to see" },
                    { id: 3, text: "The gravity at the South Pole is much stronger than at the equator.", translation: "南極の重力は赤道よりもずっと強い。", isCorrect: false },
                    { id: 4, text: "There are no flat areas anywhere on the entire surface of the Moon.", translation: "月の全表面のどこにも平らな場所がない。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で南極着陸の困難さが述べられています。「dangerous because of the rough ground and long shadows that hide obstacles」に注目。",
                    targetSentenceId: 16,
                    highlightWord: "Landing there is dangerous because of the rough ground and long shadows that hide obstacles",
                    highlightWordSentenceId: 16
                },
                keywords: ["South Pole", "more difficult", "equator"],
                keywordExplanations: {
                    "South Pole": "南極。",
                    "more difficult": "より困難。",
                    "equator": "赤道。"
                },
                keywordMatches: [
                    { sentenceId: 16, text: "dangerous because of the rough ground and long shadows that hide obstacles", keyword: "rough ground and shadows make it hard" }
                ],
                choiceAdvice: "選択肢は南極着陸が困難な理由を問うています。第3段落で「荒れた地面」「障害物を隠す長い影」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"Landing there is dangerous because of the rough ground and long shadows that hide obstacles\"" },
                    { type: "arrow", content: "「荒れた地面と障害物を隠す長い影のため、そこに着陸するのは危険」" },
                    { type: "text", content: "選択肢2: \"The ground is rough, and shadows make it hard to see where to land.\"" },
                    { type: "conclusion", content: "rough ground + shadows hide obstacles = rough ground + hard to see → 正解: 2" }
                ]
            },
            // Q4: 第4段落 - Benefits of exploring Moon
            {
                id: 4,
                text: "The passage suggests that exploring the Moon will help humans to",
                textTranslation: "本文は、月を探査することが人間を〜するのに役立つと示唆しています",
                choices: [
                    { id: 1, text: "find evidence of life that existed there millions of years ago.", translation: "何百万年も前にそこに存在していた生命の証拠を見つける。", isCorrect: false },
                    { id: 2, text: "prevent meteoroids from hitting Earth in the future.", translation: "将来、隕石が地球に衝突するのを防ぐ。", isCorrect: false },
                    { id: 3, text: "develop the skills and fuel needed to travel to Mars.", translation: "火星へ旅するために必要なスキルと燃料を開発する。", isCorrect: true, highlight: "develop skills and fuel needed for Mars" },
                    { id: 4, text: "create a new atmosphere that allows people to breathe freely.", translation: "人々が自由に呼吸できる新しい大気を作り出す。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で月探査の利点が述べられています。「By learning how to use the Moon's water to create fuel and air, astronauts will gain the skills needed to travel to Mars」に注目。",
                    targetSentenceId: 20,
                    highlightWord: "By learning how to use the Moon's water to create fuel and air, astronauts will gain the skills needed to travel to Mars",
                    highlightWordSentenceId: 20
                },
                keywords: ["exploring the Moon", "help humans"],
                keywordExplanations: {
                    "exploring the Moon": "月を探査すること。",
                    "help humans": "人間を助ける。"
                },
                keywordMatches: [
                    { sentenceId: 20, text: "learning how to use the Moon's water to create fuel and air, astronauts will gain the skills needed to travel to Mars", keyword: "develop skills and fuel for Mars" }
                ],
                choiceAdvice: "選択肢は月探査の利点を問うています。第4段落で「燃料と空気を作る」「火星への旅に必要なスキル」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"By learning how to use the Moon's water to create fuel and air, astronauts will gain the skills needed to travel to Mars\"" },
                    { type: "arrow", content: "「月の水を使って燃料と空気を作る方法を学ぶことで、火星へ旅するために必要なスキルを得る」" },
                    { type: "text", content: "選択肢3: \"develop the skills and fuel needed to travel to Mars.\"" },
                    { type: "conclusion", content: "create fuel + gain skills needed for Mars = develop skills and fuel → 正解: 3" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の文のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "Humans have been visiting the Moon continuously since 1972.", translation: "人類は1972年以降継続的に月を訪問してきた。", isCorrect: false },
                    { id: 2, text: "Water ice has been found in craters near the Moon's poles.", translation: "月の極近くのクレーターで氷が発見された。", isCorrect: true, highlight: "water ice found in craters near poles" },
                    { id: 3, text: "Old landing systems were better at avoiding obstacles than new ones.", translation: "古い着陸システムは新しいものよりも障害物を避けるのが得意だった。", isCorrect: false },
                    { id: 4, text: "The Moon is safe for humans because it has a thick atmosphere.", translation: "月は厚い大気があるため人間にとって安全である。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で氷の発見について述べられています。「the discovery of water ice in craters near the Moon's poles」に注目。",
                    targetSentenceId: 6,
                    highlightWord: "A major reason for this new focus is the discovery of water ice in craters near the Moon's poles",
                    highlightWordSentenceId: 6
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい。",
                    "statements": "文。"
                },
                keywordMatches: [
                    { sentenceId: 6, text: "the discovery of water ice in craters near the Moon's poles", keyword: "water ice found in craters near poles" }
                ],
                choiceAdvice: "選択肢は本文の内容と一致するものを探します。第1段落で「氷の発見」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"A major reason for this new focus is the discovery of water ice in craters near the Moon's poles\"" },
                    { type: "arrow", content: "「主な理由は月の極近くのクレーターにおける氷の発見」" },
                    { type: "text", content: "選択肢2: \"Water ice has been found in craters near the Moon's poles.\"" },
                    { type: "conclusion", content: "discovery of water ice in craters near poles = water ice has been found → 正解: 2" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Return to the Moon - 講師用要約",
            intro: "アポロ計画以来の「月への帰還」が現実味を帯びてきました。単なる着陸ではなく、将来の火星探査を見据えた「長期滞在」がテーマです。過去問の「Mars Exploration」（2025年第2回）と同様に、宇宙探査のテーマを扱っています。",
            points: [
                { label: "1. Back to the Moon（第1段落）", text: "NASAや民間企業は、宇宙飛行士が長期間住める恒久的な基地を月に建設する計画を立てています。この新しい注目の主な理由は、月の極近くで氷（水）が発見されたことです。" },
                { label: "2. A Harsh Environment（第2段落）", text: "月には地球のような守ってくれる大気がありません。そのため、太陽からの放射線や小さな隕石が直接降り注ぐ危険な場所です。また、昼夜の温度差は極端で、機械や居住区の設計は大きな課題です。" },
                { label: "3. Tricky Landing（第3段落）", text: "月面着陸は簡単ではありません。赤道付近と異なり、南極は荒れた地形で、太陽の角度による「長い影」が岩などの障害物を隠してしまうため危険です。科学者たちは新しい知的着陸システムを開発しています。" },
                { label: "4. Stepping Stone to Mars（第4段落）", text: "月の水を燃料や空気に変える技術を学ぶことが、将来人間が火星へ行くための重要なステップとなります。月は深宇宙旅行のための訓練場およびガソリンスタンドとしての役割を果たすでしょう。" }
            ]
        }
    },
    // 2級 オリジナル問題13: Hidden in Plain Sight
    {
        id: "grade-2-original-invisible-ink",
        grade: "2級",
        title: "Hidden in Plain Sight",
        subTitle: "問題13",
        genre: "歴史 / 科学技術",
        similarProblems: {
            exam: "2025年度 第1回",
            title: "Letter-Locking"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Invisible+Ink",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Beyond Spies
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "When people think of \"invisible ink,\" they often imagine stories about spies and secret agents during wartime.",
                        translation: "人々が「あぶり出し（不可視インク）」について考えるとき、彼らはしばしば戦時のスパイや秘密工作員についての物語を想像する。",
                        grammarAnalysis: {
                            mainVerbs: ["think", "imagine"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When [people <span class='chunk V-group'><span class='text'>think</span><span class='tag'>V</span></span> of \"invisible ink\"])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>often imagine</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>stories (about spies and secret agents during wartime)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(When [人々が <span class='t-V'>考える</span>「不可視インク」について])</span>、<span class='t-S'>彼らは</span> <span class='t-V'>しばしば想像する</span> <span class='t-O'>物語を（戦時のスパイや秘密工作員についての）</span>。",
                            naturalTranslation: "人々が「あぶり出し（不可視インク）」について考えるとき、彼らはしばしば戦時のスパイや秘密工作員についての物語を想像する。",
                            vocabulary: [
                                { word: "invisible ink", meaning: "「不可視インク、あぶり出し」" },
                                { word: "spies", meaning: "「スパイ」" },
                                { word: "secret agents", meaning: "「秘密工作員」" }
                            ],
                            grammarNotes: [
                                { phrase: "When + S + V", explanation: "<b>接続詞When</b>: 「〜のとき」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "While it is true that governments have used this technology to hide messages, it was also a common tool for ordinary people throughout history.",
                        translation: "政府がメッセージを隠すためにこの技術を使用したことは事実だが、それは歴史を通じて一般の人々にとっても一般的な道具であった。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "have used", "was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While [it <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> true that governments <span class='chunk V3-group'><span class='text'>have used</span><span class='tag'>V''</span></span> this technology to hide messages])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was also</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a common tool (for ordinary people) (throughout history)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(While [それは <span class='t-V2'>である</span>事実 政府が <span class='t-V3'>使用した</span>この技術をメッセージを隠すために])</span>、<span class='t-S'>それは</span> <span class='t-V'>であった</span> <span class='t-C'>一般的な道具（一般の人々にとって）（歴史を通じて）</span>。",
                            naturalTranslation: "政府がメッセージを隠すためにこの技術を使用したことは事実だが、それは歴史を通じて一般の人々にとっても一般的な道具であった。",
                            vocabulary: [
                                { word: "While it is true that", meaning: "「〜は事実だが」" },
                                { word: "a common tool", meaning: "「一般的な道具」" },
                                { word: "ordinary people", meaning: "「一般の人々」" }
                            ],
                            grammarNotes: [
                                { phrase: "While A, B", explanation: "<b>While（譲歩）</b>: 「Aは事実だが、B」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Before modern privacy laws and secure envelopes existed, letters could easily be read by anyone who carried them.",
                        translation: "現代のプライバシー法や安全な封筒が存在する前は、手紙はそれを運ぶ誰によっても簡単に読まれてしまう可能性があった。",
                        grammarAnalysis: {
                            mainVerbs: ["existed", "could be read", "carried"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Before [modern privacy laws and secure envelopes <span class='chunk V2-group'><span class='text'>existed</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>letters</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could easily be read</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(by anyone who <span class='chunk V3-group'><span class='text'>carried</span><span class='tag'>V''</span></span> them)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(Before [プライバシー法や安全な封筒が <span class='t-V2'>存在する</span>])</span>、<span class='t-S'>手紙は</span> <span class='t-V'>簡単に読まれる可能性があった</span> <span class='t-M'>（誰によっても <span class='t-V3'>運んだ</span>それを）</span>。",
                            naturalTranslation: "現代のプライバシー法や安全な封筒が存在する前は、手紙はそれを運ぶ誰によっても簡単に読まれてしまう可能性があった。",
                            vocabulary: [
                                { word: "privacy laws", meaning: "「プライバシー法」" },
                                { word: "secure envelopes", meaning: "「安全な封筒」" },
                                { word: "could be read", meaning: "「読まれる可能性があった」" }
                            ],
                            grammarNotes: [
                                { phrase: "Before + S + V", explanation: "<b>接続詞Before</b>: 「〜する前に」。" },
                                { phrase: "anyone who carried", explanation: "<b>関係代名詞who</b>: anyoneを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "As a result, merchants protecting business deals and lovers sending private notes frequently used invisible ink to keep their communications secret from curious eyes.",
                        translation: "その結果、商談を守る商人やプライベートなメモを送る恋人たちは、好奇の目から通信を秘密にするために頻繁に不可視インクを使用した。",
                        grammarAnalysis: {
                            mainVerbs: ["used"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(As a result)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>merchants (protecting business deals) and lovers (sending private notes)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>frequently used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>invisible ink</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to keep their communications secret from curious eyes)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その結果)</span>、<span class='t-S'>商人（商談を守る）や恋人たち（プライベートなメモを送る）は</span> <span class='t-V'>頻繁に使用した</span> <span class='t-O'>不可視インクを</span> <span class='t-M'>（好奇の目から通信を秘密にするために）</span>。",
                            naturalTranslation: "その結果、商談を守る商人やプライベートなメモを送る恋人たちは、好奇の目から通信を秘密にするために頻繁に不可視インクを使用した。",
                            vocabulary: [
                                { word: "merchants", meaning: "「商人」" },
                                { word: "business deals", meaning: "「商談」" },
                                { word: "curious eyes", meaning: "「好奇の目」" }
                            ],
                            grammarNotes: [
                                { phrase: "protecting / sending", explanation: "<b>現在分詞</b>: merchants/loversを修飾。" },
                                { phrase: "to keep ... secret", explanation: "<b>不定詞（目的）</b>: 「〜を秘密にするために」。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: How it Works
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 5,
                        text: "There are two main types of invisible ink that have been used for centuries.",
                        translation: "何世紀にもわたって使われてきた不可視インクには、主に2つのタイプがある。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "have been used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>There</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>two main types of invisible ink (that <span class='chunk V2-group'><span class='text'>have been used</span><span class='tag'>V'</span></span> for centuries)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>There</span> <span class='t-V'>ある</span> <span class='t-C'>2つの主なタイプの不可視インクが（<span class='t-V2'>使われてきた</span>何世紀も）</span>。",
                            naturalTranslation: "何世紀にもわたって使われてきた不可視インクには、主に2つのタイプがある。",
                            vocabulary: [
                                { word: "two main types", meaning: "「2つの主なタイプ」" },
                                { word: "for centuries", meaning: "「何世紀も」" }
                            ],
                            grammarNotes: [
                                { phrase: "have been used", explanation: "<b>現在完了形（受動態）</b>: 「継続的に使われてきた」。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "The first type uses organic fluids found in most kitchens, such as lemon juice, milk, or vinegar.",
                        translation: "最初のタイプは、レモン汁、牛乳、酢など、ほとんどの台所にある有機液体を使用する。",
                        grammarAnalysis: {
                            mainVerbs: ["uses"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The first type</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>uses</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>organic fluids (found in most kitchens), (such as lemon juice, milk, or vinegar)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>最初のタイプは</span> <span class='t-V'>使用する</span> <span class='t-O'>有機液体を（ほとんどの台所にある）（レモン汁、牛乳、酢など）</span>。",
                            naturalTranslation: "最初のタイプは、レモン汁、牛乳、酢など、ほとんどの台所にある有機液体を使用する。",
                            vocabulary: [
                                { word: "organic fluids", meaning: "「有機液体」" },
                                { word: "lemon juice", meaning: "「レモン汁」" },
                                { word: "vinegar", meaning: "「酢」" }
                            ],
                            grammarNotes: [
                                { phrase: "found in", explanation: "<b>過去分詞</b>: fluidsを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "These liquids are clear when painted on paper, but because they contain acid or sugar, they weaken the paper slightly.",
                        translation: "これらの液体は紙に塗ると透明だが、酸や糖分を含んでいるため、紙をわずかに弱める。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "contain", "weaken"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These liquids</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>clear</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(when painted on paper)</span><span class='tag'>M</span></span>, but <span class='chunk M-group'><span class='text'>(because [they <span class='chunk V2-group'><span class='text'>contain</span><span class='tag'>V'</span></span> acid or sugar])</span><span class='tag'>M</span></span>, <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V3-group'><span class='text'>weaken</span><span class='tag'>V''</span></span> <span class='chunk O-group'><span class='text'>the paper slightly</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これらの液体は</span> <span class='t-V'>である</span> <span class='t-C'>透明</span> <span class='t-M'>(紙に塗ると)</span>、しかし <span class='t-M'>(なぜなら [それらは <span class='t-V2'>含む</span>酸や糖分を])</span>、<span class='t-S2'>それらは</span> <span class='t-V3'>弱める</span> <span class='t-O'>紙をわずかに</span>。",
                            naturalTranslation: "これらの液体は紙に塗ると透明だが、酸や糖分を含んでいるため、紙をわずかに弱める。",
                            vocabulary: [
                                { word: "clear", meaning: "「透明な」" },
                                { word: "acid", meaning: "「酸」" },
                                { word: "weaken", meaning: "「弱める」" }
                            ],
                            grammarNotes: [
                                { phrase: "when painted", explanation: "<b>分詞構文</b>: 「塗られるとき」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "To read the message, the receiver simply holds the paper near a heat source, like a candle.",
                        translation: "メッセージを読むために、受取人は単に紙をろうそくのような熱源の近くにかざすだけである。",
                        grammarAnalysis: {
                            mainVerbs: ["holds"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To read the message)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the receiver</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>simply holds</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the paper</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(near a heat source, like a candle)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(メッセージを読むために)</span>、<span class='t-S'>受取人は</span> <span class='t-V'>単にかざす</span> <span class='t-O'>紙を</span> <span class='t-M'>（熱源の近くに、ろうそくのような）</span>。",
                            naturalTranslation: "メッセージを読むために、受取人は単に紙をろうそくのような熱源の近くにかざすだけである。",
                            vocabulary: [
                                { word: "receiver", meaning: "「受取人」" },
                                { word: "heat source", meaning: "「熱源」" },
                                { word: "candle", meaning: "「ろうそく」" }
                            ],
                            grammarNotes: [
                                { phrase: "To read", explanation: "<b>不定詞（目的）</b>: 「〜するために」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "The heat causes the acidic parts to turn brown faster than the rest of the paper.",
                        translation: "熱によって、酸性の部分は紙の他の部分よりも早く茶色に変色する。",
                        grammarAnalysis: {
                            mainVerbs: ["causes"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The heat</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>causes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the acidic parts</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to turn brown (faster than the rest of the paper)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>熱は</span> <span class='t-V'>させる</span> <span class='t-O'>酸性の部分を</span> <span class='t-C'>茶色に変色することを（紙の他の部分より早く）</span>。",
                            naturalTranslation: "熱によって、酸性の部分は紙の他の部分よりも早く茶色に変色する。",
                            vocabulary: [
                                { word: "acidic parts", meaning: "「酸性の部分」" },
                                { word: "turn brown", meaning: "「茶色に変色する」" },
                                { word: "faster than", meaning: "「〜より早く」" }
                            ],
                            grammarNotes: [
                                { phrase: "cause O to do", explanation: "<b>cause O to do</b>: 「Oに〜させる」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "The second type involves complex chemical mixtures that only become visible when a special \"developer\" liquid is applied.",
                        translation: "2つ目のタイプは、特別な「現像」液が適用されたときにのみ目に見えるようになる複雑な化学混合物を含む。",
                        grammarAnalysis: {
                            mainVerbs: ["involves", "become", "is applied"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The second type</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>involves</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>complex chemical mixtures (that only <span class='chunk V2-group'><span class='text'>become</span><span class='tag'>V'</span></span> visible when [a special \"developer\" liquid <span class='chunk V3-group'><span class='text'>is applied</span><span class='tag'>V''</span></span>])</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>2つ目のタイプは</span> <span class='t-V'>含む</span> <span class='t-O'>複雑な化学混合物を（only <span class='t-V2'>なる</span>目に見えるwhen [特別な「現像」液が <span class='t-V3'>適用される</span>]）</span>。",
                            naturalTranslation: "2つ目のタイプは、特別な「現像」液が適用されたときにのみ目に見えるようになる複雑な化学混合物を含む。",
                            vocabulary: [
                                { word: "chemical mixtures", meaning: "「化学混合物」" },
                                { word: "developer liquid", meaning: "「現像液」" },
                                { word: "is applied", meaning: "「適用される」" }
                            ],
                            grammarNotes: [
                                { phrase: "that only become", explanation: "<b>関係代名詞that</b>: mixturesを修飾。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: The Historian's Dilemma
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 11,
                        text: "Although these techniques were effective in the past, they present a significant challenge for modern historians.",
                        translation: "これらの技術は過去には効果的であったが、現代の歴史家にとっては重大な課題となっている。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "present"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Although [these techniques <span class='chunk V2-group'><span class='text'>were</span><span class='tag'>V'</span></span> effective in the past])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>present</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a significant challenge (for modern historians)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(Although [これらの技術は <span class='t-V2'>だった</span>効果的 過去には])</span>、<span class='t-S'>それらは</span> <span class='t-V'>呈する</span> <span class='t-O'>重大な課題を（現代の歴史家にとって）</span>。",
                            naturalTranslation: "これらの技術は過去には効果的であったが、現代の歴史家にとっては重大な課題となっている。",
                            vocabulary: [
                                { word: "effective", meaning: "「効果的な」" },
                                { word: "present a challenge", meaning: "「課題を呈する」" },
                                { word: "modern historians", meaning: "「現代の歴史家」" }
                            ],
                            grammarNotes: [
                                { phrase: "Although A, B", explanation: "<b>Although（譲歩）</b>: 「Aだが、B」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "Museums and archives are full of old papers that appear to be blank or contain only ordinary text.",
                        translation: "博物館や公文書館は、白紙に見える、あるいは普通の文章しか含まれていない古い書類でいっぱいである。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "appear", "contain"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Museums and archives</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are full of</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>old papers (that <span class='chunk V2-group'><span class='text'>appear</span><span class='tag'>V'</span></span> to be blank or <span class='chunk V3-group'><span class='text'>contain</span><span class='tag'>V''</span></span> only ordinary text)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>博物館や公文書館は</span> <span class='t-V'>いっぱいである</span> <span class='t-O'>古い書類で（<span class='t-V2'>見える</span>白紙に または <span class='t-V3'>含む</span>普通の文章のみを）</span>。",
                            naturalTranslation: "博物館や公文書館は、白紙に見える、あるいは普通の文章しか含まれていない古い書類でいっぱいである。",
                            vocabulary: [
                                { word: "archives", meaning: "「公文書館」" },
                                { word: "appear to be blank", meaning: "「白紙に見える」" },
                                { word: "ordinary text", meaning: "「普通の文章」" }
                            ],
                            grammarNotes: [
                                { phrase: "are full of", explanation: "<b>be full of</b>: 「〜でいっぱい」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "Historians suspect that many of them hide secret messages, but trying to read them is risky.",
                        translation: "歴史家たちは、それらの多くが秘密のメッセージを隠しているのではないかと疑っているが、それを読もうとすることは危険を伴う。",
                        grammarAnalysis: {
                            mainVerbs: ["suspect", "hide", "is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Historians</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suspect</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [many of them <span class='chunk V2-group'><span class='text'>hide</span><span class='tag'>V'</span></span> secret messages]</span><span class='tag'>O</span></span>, but <span class='chunk S2-group'><span class='text'>trying to read them</span><span class='tag'>S'</span></span> <span class='chunk V3-group'><span class='text'>is</span><span class='tag'>V''</span></span> <span class='chunk C-group'><span class='text'>risky</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>歴史家たちは</span> <span class='t-V'>疑っている</span> <span class='t-O'>that [それらの多くが <span class='t-V2'>隠している</span>秘密のメッセージを]</span>、しかし <span class='t-S2'>それを読もうとすることは</span> <span class='t-V3'>である</span> <span class='t-C'>危険</span>。",
                            naturalTranslation: "歴史家たちは、それらの多くが秘密のメッセージを隠しているのではないかと疑っているが、それを読もうとすることは危険を伴う。",
                            vocabulary: [
                                { word: "suspect that", meaning: "「〜ではないかと疑う」" },
                                { word: "secret messages", meaning: "「秘密のメッセージ」" },
                                { word: "risky", meaning: "「危険な」" }
                            ],
                            grammarNotes: [
                                { phrase: "trying to read", explanation: "<b>動名詞</b>: 主語として機能。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "The traditional method of applying heat or chemicals to reveal the ink can easily damage or destroy fragile documents that are hundreds of years old.",
                        translation: "インクを明らかにするために熱や化学物質を加えるという伝統的な方法は、何百年も前の壊れやすい文書を簡単に傷つけたり破壊したりしてしまう可能性がある。",
                        grammarAnalysis: {
                            mainVerbs: ["can damage", "destroy", "are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The traditional method (of applying heat or chemicals to reveal the ink)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can easily damage or destroy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>fragile documents (that <span class='chunk V2-group'><span class='text'>are</span><span class='tag'>V'</span></span> hundreds of years old)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>伝統的な方法（熱や化学物質を加えてインクを明らかにするための）は</span> <span class='t-V'>簡単に傷つけたり破壊したりできる</span> <span class='t-O'>壊れやすい文書を（<span class='t-V2'>である</span>何百年も前の）</span>。",
                            naturalTranslation: "インクを明らかにするために熱や化学物質を加えるという伝統的な方法は、何百年も前の壊れやすい文書を簡単に傷つけたり破壊したりしてしまう可能性がある。",
                            vocabulary: [
                                { word: "traditional method", meaning: "「伝統的な方法」" },
                                { word: "fragile documents", meaning: "「壊れやすい文書」" },
                                { word: "damage or destroy", meaning: "「傷つけたり破壊したり」" }
                            ],
                            grammarNotes: [
                                { phrase: "of applying", explanation: "<b>前置詞 + 動名詞</b>: 「〜を加えるという」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "This leaves experts with a difficult choice: preserve the paper and never know the secret, or risk destroying the artifact to read the text.",
                        translation: "これは専門家に難しい選択を残す。紙を保存して秘密を知らないままでいるか、テキストを読むために工芸品（資料）を破壊するリスクを冒すかである。",
                        grammarAnalysis: {
                            mainVerbs: ["leaves"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>leaves</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>experts</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with a difficult choice: preserve the paper and never know the secret, or risk destroying the artifact to read the text)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>残す</span> <span class='t-O'>専門家に</span> <span class='t-M'>（難しい選択を：紙を保存して秘密を知らないままでいるか、テキストを読むために資料を破壊するリスクを冒すか）</span>。",
                            naturalTranslation: "これは専門家に難しい選択を残す。紙を保存して秘密を知らないままでいるか、テキストを読むために工芸品（資料）を破壊するリスクを冒すかである。",
                            vocabulary: [
                                { word: "leaves ... with", meaning: "「〜に…を残す」" },
                                { word: "preserve", meaning: "「保存する」" },
                                { word: "artifact", meaning: "「工芸品、遺物」" }
                            ],
                            grammarNotes: [
                                { phrase: "leave O with + 名詞", explanation: "<b>leave O with</b>: 「Oに〜を残す」。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: A New Light
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 16,
                        text: "Fortunately, researchers have recently found a solution using advanced imaging technology.",
                        translation: "幸いなことに、研究者たちは最近、高度な画像技術を使用した解決策を見つけた。",
                        grammarAnalysis: {
                            mainVerbs: ["have found"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Fortunately)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>researchers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have recently found</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a solution (using advanced imaging technology)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(幸いなことに)</span>、<span class='t-S'>研究者たちは</span> <span class='t-V'>最近見つけた</span> <span class='t-O'>解決策を（高度な画像技術を使った）</span>。",
                            naturalTranslation: "幸いなことに、研究者たちは最近、高度な画像技術を使用した解決策を見つけた。",
                            vocabulary: [
                                { word: "Fortunately", meaning: "「幸いなことに」" },
                                { word: "advanced imaging technology", meaning: "「高度な画像技術」" }
                            ],
                            grammarNotes: [
                                { phrase: "using", explanation: "<b>現在分詞</b>: solutionを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "A team of scientists examined a collection of letters from the 18th century that were seized by warships during battles and never reached their destinations.",
                        translation: "ある科学者のチームは、戦闘中に軍艦によって押収され、目的地に届かなかった18世紀の手紙のコレクションを調査した。",
                        grammarAnalysis: {
                            mainVerbs: ["examined", "were seized", "reached"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>A team of scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>examined</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a collection of letters (from the 18th century) (that <span class='chunk V2-group'><span class='text'>were seized</span><span class='tag'>V'</span></span> by warships during battles and never <span class='chunk V3-group'><span class='text'>reached</span><span class='tag'>V''</span></span> their destinations)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>科学者のチームは</span> <span class='t-V'>調査した</span> <span class='t-O'>手紙のコレクションを（18世紀の）（<span class='t-V2'>押収された</span>軍艦によって戦闘中に そして <span class='t-V3'>届かなかった</span>目的地に）</span>。",
                            naturalTranslation: "ある科学者のチームは、戦闘中に軍艦によって押収され、目的地に届かなかった18世紀の手紙のコレクションを調査した。",
                            vocabulary: [
                                { word: "were seized by", meaning: "「〜によって押収された」" },
                                { word: "warships", meaning: "「軍艦」" },
                                { word: "destinations", meaning: "「目的地」" }
                            ],
                            grammarNotes: [
                                { phrase: "that were seized", explanation: "<b>関係代名詞that</b>: lettersを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "Instead of using heat, the team used multispectral imaging, which takes photos using different wavelengths of light, such as ultraviolet and infrared.",
                        translation: "熱を使う代わりに、チームは紫外線や赤外線など、異なる波長の光を使って写真を撮るマルチスペクトルイメージングを使用した。",
                        grammarAnalysis: {
                            mainVerbs: ["used", "takes"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Instead of using heat)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the team</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>multispectral imaging, (which <span class='chunk V2-group'><span class='text'>takes</span><span class='tag'>V'</span></span> photos using different wavelengths of light, such as ultraviolet and infrared)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(熱を使う代わりに)</span>、<span class='t-S'>チームは</span> <span class='t-V'>使用した</span> <span class='t-O'>マルチスペクトルイメージングを、（which <span class='t-V2'>撮る</span>写真を異なる波長の光を使って、紫外線や赤外線など）</span>。",
                            naturalTranslation: "熱を使う代わりに、チームは紫外線や赤外線など、異なる波長の光を使って写真を撮るマルチスペクトルイメージングを使用した。",
                            vocabulary: [
                                { word: "Instead of", meaning: "「〜の代わりに」" },
                                { word: "multispectral imaging", meaning: "「マルチスペクトルイメージング」" },
                                { word: "wavelengths", meaning: "「波長」" },
                                { word: "ultraviolet", meaning: "「紫外線」" },
                                { word: "infrared", meaning: "「赤外線」" }
                            ],
                            grammarNotes: [
                                { phrase: ", which takes", explanation: "<b>関係代名詞which（継続用法）</b>: imagingを補足説明。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "This method allowed them to clearly see the hidden ink on a computer screen without touching or damaging the original paper, opening a new window into history.",
                        translation: "この方法は、元の紙に触れたり傷つけたりすることなく、コンピュータ画面上で隠されたインクをはっきりと見ることを可能にし、歴史への新しい窓を開いた。",
                        grammarAnalysis: {
                            mainVerbs: ["allowed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This method</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allowed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to clearly see the hidden ink (on a computer screen) (without touching or damaging the original paper)</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(opening a new window into history)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この方法は</span> <span class='t-V'>可能にした</span> <span class='t-O'>彼らが</span> <span class='t-C'>はっきり見ることを隠されたインクを（コンピュータ画面上で）（元の紙に触れたり傷つけたりすることなく）</span>、<span class='t-M'>(歴史への新しい窓を開きながら)</span>。",
                            naturalTranslation: "この方法は、元の紙に触れたり傷つけたりすることなく、コンピュータ画面上で隠されたインクをはっきりと見ることを可能にし、歴史への新しい窓を開いた。",
                            vocabulary: [
                                { word: "allowed them to", meaning: "「彼らが〜することを可能にした」" },
                                { word: "without touching or damaging", meaning: "「触れたり傷つけたりすることなく」" },
                                { word: "opening a new window", meaning: "「新しい窓を開く」" }
                            ],
                            grammarNotes: [
                                { phrase: "allow O to do", explanation: "<b>allow O to do</b>: 「Oが〜することを可能にする」。" },
                                { phrase: "without + 動名詞", explanation: "<b>without + 動名詞</b>: 「〜することなく」。" },
                                { phrase: "opening", explanation: "<b>分詞構文</b>: 結果を表す。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Who used invisible ink
            {
                id: 1,
                text: "Who used invisible ink in the past?",
                textTranslation: "過去に不可視インクを使ったのは誰ですか？",
                choices: [
                    { id: 1, text: "Only government officials who worked during wartime.", translation: "戦時中に働いていた政府職員のみ。", isCorrect: false },
                    { id: 2, text: "Scientists who wanted to test different chemical mixtures.", translation: "様々な化学混合物をテストしたかった科学者。", isCorrect: false },
                    { id: 3, text: "A wide range of people, including business owners and ordinary couples.", translation: "ビジネスオーナーや普通のカップルを含む幅広い人々。", isCorrect: true, highlight: "wide range of people including business owners and couples" },
                    { id: 4, text: "Post office workers who needed to sort letters quickly.", translation: "手紙をすばやく仕分けする必要があった郵便局の職員。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で不可視インクを使った人々が述べられています。「merchants...and lovers...frequently used invisible ink」に注目。",
                    targetSentenceId: 4,
                    highlightWord: "merchants protecting business deals and lovers sending private notes frequently used invisible ink",
                    highlightWordSentenceId: 4
                },
                keywords: ["who", "used invisible ink", "in the past"],
                keywordExplanations: {
                    "who": "誰が。",
                    "used invisible ink": "不可視インクを使った。",
                    "in the past": "過去に。"
                },
                keywordMatches: [
                    { sentenceId: 2, text: "it was also a common tool for ordinary people", keyword: "wide range of people" },
                    { sentenceId: 4, text: "merchants...and lovers...frequently used invisible ink", keyword: "business owners and couples" }
                ],
                choiceAdvice: "選択肢は不可視インクの使用者を問うています。第1段落で「商人」「恋人たち」「一般の人々」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"merchants protecting business deals and lovers sending private notes frequently used invisible ink\"" },
                    { type: "arrow", content: "「商談を守る商人やプライベートなメモを送る恋人たち」" },
                    { type: "text", content: "また: \"it was also a common tool for ordinary people\"" },
                    { type: "conclusion", content: "merchants + lovers + ordinary people = wide range of people → 正解: 3" }
                ]
            },
            // Q2: 第2段落 - How lemon juice ink becomes visible
            {
                id: 2,
                text: "How does invisible ink made from lemon juice become visible?",
                textTranslation: "レモン汁から作られた不可視インクはどのようにして見えるようになりますか？",
                choices: [
                    { id: 1, text: "It must be mixed with a special chemical developer liquid.", translation: "特別な化学現像液と混合する必要がある。", isCorrect: false },
                    { id: 2, text: "It turns brown when the paper is exposed to heat.", translation: "紙が熱にさらされると茶色に変色する。", isCorrect: true, highlight: "turns brown when exposed to heat" },
                    { id: 3, text: "It naturally becomes dark after being left in the air for a few days.", translation: "空気中に数日間放置すると自然に暗くなる。", isCorrect: false },
                    { id: 4, text: "It glows when a specific type of light is shined on it.", translation: "特定の種類の光が当てられると光る。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落でレモン汁インクの仕組みが説明されています。「The heat causes the acidic parts to turn brown」に注目。",
                    targetSentenceId: 9,
                    highlightWord: "The heat causes the acidic parts to turn brown faster than the rest of the paper",
                    highlightWordSentenceId: 9
                },
                keywords: ["lemon juice", "become visible"],
                keywordExplanations: {
                    "lemon juice": "レモン汁。",
                    "become visible": "見えるようになる。"
                },
                keywordMatches: [
                    { sentenceId: 9, text: "The heat causes the acidic parts to turn brown", keyword: "turns brown when exposed to heat" }
                ],
                choiceAdvice: "選択肢はレモン汁インクの仕組みを問うています。第2段落で「熱」「茶色に変色」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"The heat causes the acidic parts to turn brown faster than the rest of the paper\"" },
                    { type: "arrow", content: "「熱によって酸性の部分が茶色に変色する」" },
                    { type: "text", content: "選択肢2: \"It turns brown when the paper is exposed to heat.\"" },
                    { type: "conclusion", content: "heat + turn brown = turns brown when exposed to heat → 正解: 2" }
                ]
            },
            // Q3: 第3段落 - Problem historians face
            {
                id: 3,
                text: "What problem do historians face with documents that might contain invisible ink?",
                textTranslation: "不可視インクを含んでいる可能性のある文書に関して、歴史家はどんな問題に直面していますか？",
                choices: [
                    { id: 1, text: "The ink has faded so much that even modern computers cannot read it.", translation: "インクがかすれすぎて、現代のコンピュータでさえ読めない。", isCorrect: false },
                    { id: 2, text: "The methods used to reveal the ink can ruin the historical documents.", translation: "インクを明らかにするために使用される方法が、歴史的文書を台無しにする可能性がある。", isCorrect: true, highlight: "methods can ruin historical documents" },
                    { id: 3, text: "Most of the secret messages were written in codes that are impossible to break.", translation: "秘密のメッセージのほとんどは解読不能なコードで書かれていた。", isCorrect: false },
                    { id: 4, text: "The chemicals used in the ink are dangerous for humans to touch.", translation: "インクに使用されている化学物質は人間が触れるのに危険である。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で歴史家が直面する問題が述べられています。「can easily damage or destroy fragile documents」に注目。",
                    targetSentenceId: 14,
                    highlightWord: "The traditional method...can easily damage or destroy fragile documents that are hundreds of years old",
                    highlightWordSentenceId: 14
                },
                keywords: ["problem", "historians", "invisible ink"],
                keywordExplanations: {
                    "problem": "問題。",
                    "historians": "歴史家。",
                    "invisible ink": "不可視インク。"
                },
                keywordMatches: [
                    { sentenceId: 14, text: "can easily damage or destroy fragile documents", keyword: "methods can ruin documents" }
                ],
                choiceAdvice: "選択肢は歴史家が直面する問題を問うています。第3段落で「伝統的な方法」「傷つけたり破壊したり」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"The traditional method...can easily damage or destroy fragile documents that are hundreds of years old\"" },
                    { type: "arrow", content: "「伝統的な方法は壊れやすい文書を簡単に傷つけたり破壊したりする」" },
                    { type: "text", content: "選択肢2: \"The methods used to reveal the ink can ruin the historical documents.\"" },
                    { type: "conclusion", content: "damage or destroy = ruin → 正解: 2" }
                ]
            },
            // Q4: 第4段落 - Why researchers had access to letters
            {
                id: 4,
                text: "Why did the researchers have access to the collection of letters mentioned in the passage?",
                textTranslation: "本文で言及されている手紙のコレクションに研究者がアクセスできたのはなぜですか？",
                choices: [
                    { id: 1, text: "The writers decided not to send them because of the war.", translation: "書き手は戦争のため送らないことを決めた。", isCorrect: false },
                    { id: 2, text: "They were captured by enemy ships and stored away for centuries.", translation: "敵の船に捕獲され、何世紀も保管されていた。", isCorrect: true, highlight: "captured by enemy ships and stored away" },
                    { id: 3, text: "The families of the writers donated them to a museum recently.", translation: "書き手の家族が最近博物館に寄贈した。", isCorrect: false },
                    { id: 4, text: "The receivers refused to pay the delivery fee to the post office.", translation: "受取人が郵便局への配達料を支払うことを拒否した。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で手紙のコレクションの経緯が述べられています。「were seized by warships during battles and never reached their destinations」に注目。",
                    targetSentenceId: 17,
                    highlightWord: "letters from the 18th century that were seized by warships during battles and never reached their destinations",
                    highlightWordSentenceId: 17
                },
                keywords: ["researchers", "access", "collection of letters"],
                keywordExplanations: {
                    "researchers": "研究者。",
                    "access": "アクセス。",
                    "collection of letters": "手紙のコレクション。"
                },
                keywordMatches: [
                    { sentenceId: 17, text: "were seized by warships during battles and never reached their destinations", keyword: "captured by enemy ships" }
                ],
                choiceAdvice: "選択肢は研究者が手紙にアクセスできた理由を問うています。第4段落で「軍艦によって押収された」「目的地に届かなかった」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"letters...that were seized by warships during battles and never reached their destinations\"" },
                    { type: "arrow", content: "「戦闘中に軍艦によって押収され、目的地に届かなかった手紙」" },
                    { type: "text", content: "選択肢2: \"They were captured by enemy ships and stored away for centuries.\"" },
                    { type: "conclusion", content: "seized by warships = captured by enemy ships → 正解: 2" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の文のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "Invisible ink was invented after secure envelopes became common.", translation: "不可視インクは安全な封筒が一般的になった後に発明された。", isCorrect: false },
                    { id: 2, text: "Chemical inks are easier to read than organic inks because they need heat.", translation: "化学インクは熱が必要なため、有機インクより読みやすい。", isCorrect: false },
                    { id: 3, text: "Multispectral imaging allows experts to read hidden text without damage.", translation: "マルチスペクトルイメージングにより、専門家は損傷なく隠されたテキストを読むことができる。", isCorrect: true, highlight: "multispectral imaging reads hidden text without damage" },
                    { id: 4, text: "Historians have decided to destroy some documents to learn their secrets.", translation: "歴史家は秘密を知るためにいくつかの文書を破壊することを決めた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落でマルチスペクトルイメージングについて述べられています。「without touching or damaging the original paper」に注目。",
                    targetSentenceId: 19,
                    highlightWord: "This method allowed them to clearly see the hidden ink...without touching or damaging the original paper",
                    highlightWordSentenceId: 19
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい。",
                    "statements": "文。"
                },
                keywordMatches: [
                    { sentenceId: 19, text: "allowed them to clearly see the hidden ink...without touching or damaging the original paper", keyword: "read hidden text without damage" }
                ],
                choiceAdvice: "選択肢は本文の内容と一致するものを探します。第4段落で「マルチスペクトルイメージング」「損傷なく」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"This method allowed them to clearly see the hidden ink...without touching or damaging the original paper\"" },
                    { type: "arrow", content: "「この方法は、元の紙に触れたり傷つけたりすることなく、隠されたインクをはっきりと見ることを可能にした」" },
                    { type: "text", content: "選択肢3: \"Multispectral imaging allows experts to read hidden text without damage.\"" },
                    { type: "conclusion", content: "see hidden ink + without damaging = read hidden text without damage → 正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Hidden in Plain Sight - 講師用要約",
            intro: "手紙の封筒が一般的になる前、人々はプライバシーを守るために様々な工夫をしました。過去問の「Letter-Locking（手紙自体を折って鍵にする）」に対し、本オリジナル問題は「Invisible Ink（不可視インク）」を取り上げます。",
            points: [
                { label: "1. Beyond Spies（第1段落）", text: "不可視インクといえばスパイを連想しますが、封筒が普及する前は、商談や恋文を守るために一般の人々も広く使っていました。これは政府だけでなく、商人や恋人たちにとっても一般的な道具でした。" },
                { label: "2. How it Works（第2段落）", text: "レモン汁などの身近な液体は、熱を加えると酸が紙を焦がして文字が浮き出ます。一方、特別な現像液を使わないと見えない化学薬品を使う高度なタイプもありました。" },
                { label: "3. The Historian's Dilemma（第3段落）", text: "博物館には白紙に見える古い紙がたくさんありますが、伝統的な方法（熱や薬品）でインクを浮き出させようとすると、何百年も前の貴重な資料を破壊してしまう可能性があります。" },
                { label: "4. A New Light（第4段落）", text: "最近の研究チームは、戦時中に軍艦で押収され配達されなかった手紙を調査しました。熱の代わりに特殊な光（マルチスペクトルイメージング）を使うことで、紙を傷つけずに秘密のメッセージを読むことに成功しました。" }
            ]
        }
    },
    // 2級 オリジナル問題14: The Streaming Dilemma
    {
        id: "grade-2-original-streaming-dilemma",
        grade: "2級",
        title: "The Streaming Dilemma",
        subTitle: "問題14",
        genre: "心理学 / 現代社会",
        similarProblems: {
            exam: "2024年度 第3回",
            title: "Making Choices"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Streaming+Dilemma",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Too Much to Watch
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "In the modern world, technology has given people access to a nearly endless supply of entertainment.",
                        translation: "現代の世界では、テクノロジーによって人々はほぼ無限のエンターテインメントの供給にアクセスできるようになった。",
                        grammarAnalysis: {
                            mainVerbs: ["has given"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the modern world)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>technology</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has given</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk O2-group'><span class='text'>access (to a nearly endless supply of entertainment)</span><span class='tag'>O'</span></span>.",
                            translationHtml: "<span class='t-M'>(現代の世界では)</span>、<span class='t-S'>テクノロジーは</span> <span class='t-V'>与えた</span> <span class='t-O'>人々に</span> <span class='t-O2'>アクセスを（ほぼ無限のエンターテインメントの供給への）</span>。",
                            naturalTranslation: "現代の世界では、テクノロジーによって人々はほぼ無限のエンターテインメントの供給にアクセスできるようになった。",
                            vocabulary: [
                                { word: "has given", meaning: "「与えた」" },
                                { word: "access to", meaning: "「〜へのアクセス」" },
                                { word: "endless supply", meaning: "「無限の供給」" }
                            ],
                            grammarNotes: [
                                { phrase: "give O1 O2", explanation: "<b>第4文型</b>: 「O1にO2を与える」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "Deciding what to watch on TV used to be simple because there were only a few channels available.",
                        translation: "利用可能なチャンネルが数個しかなかったため、テレビで何を見るかを決めるのは以前は簡単だった。",
                        grammarAnalysis: {
                            mainVerbs: ["used to be", "were"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Deciding what to watch on TV</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used to be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>simple</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(because [there <span class='chunk V2-group'><span class='text'>were</span><span class='tag'>V'</span></span> only a few channels available])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>テレビで何を見るかを決めることは</span> <span class='t-V'>以前は〜だった</span> <span class='t-C'>簡単</span> <span class='t-M'>(なぜなら [<span class='t-V2'>あった</span>わずかな数のチャンネルしか利用可能な])</span>。",
                            naturalTranslation: "利用可能なチャンネルが数個しかなかったため、テレビで何を見るかを決めるのは以前は簡単だった。",
                            vocabulary: [
                                { word: "used to be", meaning: "「以前は〜だった」" },
                                { word: "a few channels", meaning: "「数個のチャンネル」" },
                                { word: "available", meaning: "「利用可能な」" }
                            ],
                            grammarNotes: [
                                { phrase: "used to + 動詞", explanation: "<b>used to</b>: 「以前は〜だった」。過去の習慣や状態。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Today, however, streaming services offer thousands of movies and TV shows at the click of a button.",
                        translation: "しかし今日では、ストリーミングサービスがボタンをクリックするだけで何千もの映画やテレビ番組を提供している。",
                        grammarAnalysis: {
                            mainVerbs: ["offer"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today), (however)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>streaming services</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>offer</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>thousands of movies and TV shows</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at the click of a button)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(今日では)、(しかし)</span>、<span class='t-S'>ストリーミングサービスは</span> <span class='t-V'>提供している</span> <span class='t-O'>何千もの映画やテレビ番組を</span> <span class='t-M'>(ボタンをクリックするだけで)</span>。",
                            naturalTranslation: "しかし今日では、ストリーミングサービスがボタンをクリックするだけで何千もの映画やテレビ番組を提供している。",
                            vocabulary: [
                                { word: "streaming services", meaning: "「ストリーミングサービス」" },
                                { word: "at the click of a button", meaning: "「ボタンをクリックするだけで」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 4,
                        text: "While having so many options might seem like a dream come true, it has created a new type of stress for users.",
                        translation: "これほど多くの選択肢があることは夢が叶ったように思えるかもしれないが、それはユーザーにとって新しい種類のストレスを生み出している。",
                        grammarAnalysis: {
                            mainVerbs: ["might seem", "has created"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While [having so many options <span class='chunk V2-group'><span class='text'>might seem</span><span class='tag'>V'</span></span> like a dream come true])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has created</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a new type of stress (for users)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(While [多くの選択肢があることは <span class='t-V2'>思えるかもしれない</span>夢が叶ったように])</span>、<span class='t-S'>それは</span> <span class='t-V'>生み出している</span> <span class='t-O'>新しい種類のストレスを（ユーザーにとって）</span>。",
                            naturalTranslation: "これほど多くの選択肢があることは夢が叶ったように思えるかもしれないが、それはユーザーにとって新しい種類のストレスを生み出している。",
                            vocabulary: [
                                { word: "a dream come true", meaning: "「夢が叶うこと」" },
                                { word: "has created", meaning: "「生み出した」" },
                                { word: "a new type of stress", meaning: "「新しい種類のストレス」" }
                            ],
                            grammarNotes: [
                                { phrase: "While A, B", explanation: "<b>While（譲歩）</b>: 「Aかもしれないが、B」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "Instead of quickly picking a movie and enjoying it, many people spend more time searching for content than actually watching it.",
                        translation: "映画を素早く選んで楽しむ代わりに、多くの人々は実際に見るよりもコンテンツを探すことに多くの時間を費やしている。",
                        grammarAnalysis: {
                            mainVerbs: ["spend"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Instead of quickly picking a movie and enjoying it)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>spend</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>more time (searching for content) (than actually watching it)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(映画を素早く選んで楽しむ代わりに)</span>、<span class='t-S'>多くの人々は</span> <span class='t-V'>費やしている</span> <span class='t-O'>多くの時間を（コンテンツを探すことに）（実際に見るよりも）</span>。",
                            naturalTranslation: "映画を素早く選んで楽しむ代わりに、多くの人々は実際に見るよりもコンテンツを探すことに多くの時間を費やしている。",
                            vocabulary: [
                                { word: "Instead of", meaning: "「〜の代わりに」" },
                                { word: "spend time doing", meaning: "「〜することに時間を費やす」" },
                                { word: "searching for content", meaning: "「コンテンツを探すこと」" }
                            ],
                            grammarNotes: [
                                { phrase: "more ... than", explanation: "<b>比較級</b>: 「〜よりも多くの」。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: The Experiment
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "To understand this behavior, a group of psychologists conducted an experiment with regular users of streaming services.",
                        translation: "この行動を理解するために、ある心理学者のグループがストリーミングサービスの一般ユーザーを対象に実験を行った。",
                        grammarAnalysis: {
                            mainVerbs: ["conducted"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To understand this behavior)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a group of psychologists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>conducted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an experiment (with regular users of streaming services)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(この行動を理解するために)</span>、<span class='t-S'>心理学者のグループは</span> <span class='t-V'>行った</span> <span class='t-O'>実験を（ストリーミングサービスの一般ユーザーを対象に）</span>。",
                            naturalTranslation: "この行動を理解するために、ある心理学者のグループがストリーミングサービスの一般ユーザーを対象に実験を行った。",
                            vocabulary: [
                                { word: "psychologists", meaning: "「心理学者」" },
                                { word: "conducted an experiment", meaning: "「実験を行った」" },
                                { word: "regular users", meaning: "「一般ユーザー」" }
                            ],
                            grammarNotes: [
                                { phrase: "To understand", explanation: "<b>不定詞（目的）</b>: 「〜するために」。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "They divided the participants into two groups.",
                        translation: "彼らは参加者を2つのグループに分けた。",
                        grammarAnalysis: {
                            mainVerbs: ["divided"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>divided</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the participants</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(into two groups)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>分けた</span> <span class='t-O'>参加者を</span> <span class='t-M'>(2つのグループに)</span>。",
                            naturalTranslation: "彼らは参加者を2つのグループに分けた。",
                            vocabulary: [
                                { word: "divided ... into", meaning: "「〜を…に分けた」" },
                                { word: "participants", meaning: "「参加者」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 8,
                        text: "The first group was given a limited list of just five movies to choose from.",
                        translation: "最初のグループには、選ぶためのわずか5本の映画の限定リストが与えられた。",
                        grammarAnalysis: {
                            mainVerbs: ["was given"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The first group</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was given</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a limited list (of just five movies) (to choose from)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>最初のグループには</span> <span class='t-V'>与えられた</span> <span class='t-O'>限定リストが（わずか5本の映画の）（選ぶための）</span>。",
                            naturalTranslation: "最初のグループには、選ぶためのわずか5本の映画の限定リストが与えられた。",
                            vocabulary: [
                                { word: "was given", meaning: "「与えられた」" },
                                { word: "a limited list", meaning: "「限定リスト」" },
                                { word: "to choose from", meaning: "「選ぶための」" }
                            ],
                            grammarNotes: [
                                { phrase: "was given", explanation: "<b>受動態</b>: 「与えられた」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "The second group was given access to a library containing over five thousand titles.",
                        translation: "2番目のグループには、5000以上のタイトルを含むライブラリへのアクセス権が与えられた。",
                        grammarAnalysis: {
                            mainVerbs: ["was given"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The second group</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was given</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>access (to a library containing over five thousand titles)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>2番目のグループには</span> <span class='t-V'>与えられた</span> <span class='t-O'>アクセス権が（5000以上のタイトルを含むライブラリへの）</span>。",
                            naturalTranslation: "2番目のグループには、5000以上のタイトルを含むライブラリへのアクセス権が与えられた。",
                            vocabulary: [
                                { word: "access to", meaning: "「〜へのアクセス」" },
                                { word: "containing", meaning: "「含む」" },
                                { word: "five thousand titles", meaning: "「5000タイトル」" }
                            ],
                            grammarNotes: [
                                { phrase: "containing", explanation: "<b>現在分詞</b>: libraryを修飾。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "The results were clear.",
                        translation: "結果は明白であった。",
                        grammarAnalysis: {
                            mainVerbs: ["were"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The results</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>clear</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>結果は</span> <span class='t-V'>であった</span> <span class='t-C'>明白</span>。",
                            naturalTranslation: "結果は明白であった。",
                            vocabulary: [
                                { word: "results", meaning: "「結果」" },
                                { word: "clear", meaning: "「明白な」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 11,
                        text: "The people in the first group chose a movie within minutes and reported high levels of satisfaction.",
                        translation: "最初のグループの人々は数分以内に映画を選び、高い満足度を報告した。",
                        grammarAnalysis: {
                            mainVerbs: ["chose", "reported"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The people (in the first group)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>chose</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a movie</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(within minutes)</span><span class='tag'>M</span></span> and <span class='chunk V2-group'><span class='text'>reported</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>high levels of satisfaction</span><span class='tag'>O'</span></span>.",
                            translationHtml: "<span class='t-S'>人々は（最初のグループの）</span> <span class='t-V'>選んだ</span> <span class='t-O'>映画を</span> <span class='t-M'>(数分以内に)</span> そして <span class='t-V2'>報告した</span> <span class='t-O2'>高い満足度を</span>。",
                            naturalTranslation: "最初のグループの人々は数分以内に映画を選び、高い満足度を報告した。",
                            vocabulary: [
                                { word: "chose", meaning: "「選んだ」" },
                                { word: "within minutes", meaning: "「数分以内に」" },
                                { word: "high levels of satisfaction", meaning: "「高い満足度」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 12,
                        text: "In contrast, those in the second group spent over twenty minutes scrolling through titles, and many of them gave up without watching anything at all.",
                        translation: "対照的に、2番目のグループの人々はタイトルをスクロールするのに20分以上を費やし、彼らの多くは何も見ずに諦めてしまった。",
                        grammarAnalysis: {
                            mainVerbs: ["spent", "gave up"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In contrast)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>those (in the second group)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>spent</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>over twenty minutes (scrolling through titles)</span><span class='tag'>O</span></span>, and <span class='chunk S2-group'><span class='text'>many of them</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>gave up</span><span class='tag'>V'</span></span> <span class='chunk M-group'><span class='text'>(without watching anything at all)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(対照的に)</span>、<span class='t-S'>人々は（2番目のグループの）</span> <span class='t-V'>費やした</span> <span class='t-O'>20分以上を（タイトルをスクロールするのに）</span>、そして <span class='t-S2'>彼らの多くは</span> <span class='t-V2'>諦めた</span> <span class='t-M'>（何も見ずに）</span>。",
                            naturalTranslation: "対照的に、2番目のグループの人々はタイトルをスクロールするのに20分以上を費やし、彼らの多くは何も見ずに諦めてしまった。",
                            vocabulary: [
                                { word: "In contrast", meaning: "「対照的に」" },
                                { word: "scrolling through", meaning: "「スクロールする」" },
                                { word: "gave up", meaning: "「諦めた」" }
                            ],
                            grammarNotes: [
                                { phrase: "without + 動名詞", explanation: "<b>without + 動名詞</b>: 「〜せずに」。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Quantity vs. Quality
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "Streaming companies often believe that adding more content is the best way to attract subscribers.",
                        translation: "ストリーミング会社は、コンテンツを増やすことが加入者を引き付ける最良の方法であるとしばしば信じている。",
                        grammarAnalysis: {
                            mainVerbs: ["believe", "is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Streaming companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>often believe</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [adding more content <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> the best way to attract subscribers]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ストリーミング会社は</span> <span class='t-V'>しばしば信じている</span> <span class='t-O'>that [コンテンツを増やすことが <span class='t-V2'>である</span>加入者を引き付ける最良の方法]</span>。",
                            naturalTranslation: "ストリーミング会社は、コンテンツを増やすことが加入者を引き付ける最良の方法であるとしばしば信じている。",
                            vocabulary: [
                                { word: "adding more content", meaning: "「コンテンツを増やすこと」" },
                                { word: "attract subscribers", meaning: "「加入者を引き付ける」" }
                            ],
                            grammarNotes: [
                                { phrase: "believe that", explanation: "<b>that節</b>: 「〜と信じる」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "They think that a larger library justifies the monthly fee and appeals to a wider audience.",
                        translation: "彼らは、より大きなライブラリが月額料金を正当化し、より幅広い視聴者にアピールすると考えている。",
                        grammarAnalysis: {
                            mainVerbs: ["think", "justifies", "appeals"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>think</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [a larger library <span class='chunk V2-group'><span class='text'>justifies</span><span class='tag'>V'</span></span> the monthly fee and <span class='chunk V3-group'><span class='text'>appeals</span><span class='tag'>V''</span></span> to a wider audience]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>考えている</span> <span class='t-O'>that [より大きなライブラリが <span class='t-V2'>正当化する</span>月額料金を そして <span class='t-V3'>アピールする</span>より幅広い視聴者に]</span>。",
                            naturalTranslation: "彼らは、より大きなライブラリが月額料金を正当化し、より幅広い視聴者にアピールすると考えている。",
                            vocabulary: [
                                { word: "a larger library", meaning: "「より大きなライブラリ」" },
                                { word: "justifies", meaning: "「正当化する」" },
                                { word: "appeals to", meaning: "「〜にアピールする」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 15,
                        text: "While this logic makes sense from a business perspective, it ignores the limits of human attention.",
                        translation: "この論理はビジネスの観点からは理にかなっているが、人間の注意力の限界を無視している。",
                        grammarAnalysis: {
                            mainVerbs: ["makes", "ignores"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While [this logic <span class='chunk V2-group'><span class='text'>makes</span><span class='tag'>V'</span></span> sense from a business perspective])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>ignores</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the limits of human attention</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(While [この論理は <span class='t-V2'>理にかなっている</span>ビジネスの観点からは])</span>、<span class='t-S'>それは</span> <span class='t-V'>無視している</span> <span class='t-O'>人間の注意力の限界を</span>。",
                            naturalTranslation: "この論理はビジネスの観点からは理にかなっているが、人間の注意力の限界を無視している。",
                            vocabulary: [
                                { word: "makes sense", meaning: "「理にかなっている」" },
                                { word: "from a business perspective", meaning: "「ビジネスの観点から」" },
                                { word: "human attention", meaning: "「人間の注意力」" }
                            ],
                            grammarNotes: [
                                { phrase: "While A, B", explanation: "<b>While（譲歩）</b>: 「Aだが、B」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "When faced with too many similar options, the human brain struggles to make a decision.",
                        translation: "類似した選択肢があまりにも多い場合、人間の脳は決断を下すのに苦労する。",
                        grammarAnalysis: {
                            mainVerbs: ["struggles"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When faced with too many similar options)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the human brain</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>struggles</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to make a decision)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(類似した選択肢があまりにも多い場合)</span>、<span class='t-S'>人間の脳は</span> <span class='t-V'>苦労する</span> <span class='t-M'>（決断を下すのに）</span>。",
                            naturalTranslation: "類似した選択肢があまりにも多い場合、人間の脳は決断を下すのに苦労する。",
                            vocabulary: [
                                { word: "faced with", meaning: "「〜に直面して」" },
                                { word: "struggles to", meaning: "「〜するのに苦労する」" },
                                { word: "make a decision", meaning: "「決断を下す」" }
                            ],
                            grammarNotes: [
                                { phrase: "When faced with", explanation: "<b>分詞構文</b>: 「〜に直面したとき」。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "This phenomenon is known as \"analysis paralysis,\" where the fear of making the wrong choice prevents people from making any choice.",
                        translation: "この現象は「分析麻痺」として知られており、間違った選択をすることへの恐れが、人々がいかなる選択もすることを妨げてしまうのである。",
                        grammarAnalysis: {
                            mainVerbs: ["is known", "prevents"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This phenomenon</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is known as</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>\"analysis paralysis,\"</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(where [the fear of making the wrong choice <span class='chunk V2-group'><span class='text'>prevents</span><span class='tag'>V'</span></span> people from making any choice])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この現象は</span> <span class='t-V'>として知られている</span> <span class='t-C'>「分析麻痺」</span> <span class='t-M'>(where [間違った選択をすることへの恐れが <span class='t-V2'>妨げる</span>人々がいかなる選択もすることを])</span>。",
                            naturalTranslation: "この現象は「分析麻痺」として知られており、間違った選択をすることへの恐れが、人々がいかなる選択もすることを妨げてしまうのである。",
                            vocabulary: [
                                { word: "analysis paralysis", meaning: "「分析麻痺」" },
                                { word: "the fear of", meaning: "「〜への恐れ」" },
                                { word: "prevents ... from", meaning: "「〜が…することを妨げる」" }
                            ],
                            grammarNotes: [
                                { phrase: "is known as", explanation: "<b>be known as</b>: 「〜として知られている」。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: The Fear of Missing Out
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 18,
                        text: "Furthermore, even when people in the large-group experiment finally picked a movie, they enjoyed it less than the small-group participants did.",
                        translation: "さらに、大規模グループの実験参加者が最終的に映画を選んだ時でさえ、彼らは小規模グループの参加者よりもそれを楽しめなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["picked", "enjoyed"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Furthermore)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(even when [people in the large-group experiment finally <span class='chunk V2-group'><span class='text'>picked</span><span class='tag'>V'</span></span> a movie])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>enjoyed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it less (than the small-group participants did)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-M'>(even when [大規模グループの実験参加者が最終的に <span class='t-V2'>選んだ</span>映画を])</span>、<span class='t-S'>彼らは</span> <span class='t-V'>楽しんだ</span> <span class='t-O'>それを少なく（小規模グループの参加者よりも）</span>。",
                            naturalTranslation: "さらに、大規模グループの実験参加者が最終的に映画を選んだ時でさえ、彼らは小規模グループの参加者よりもそれを楽しめなかった。",
                            vocabulary: [
                                { word: "Furthermore", meaning: "「さらに」" },
                                { word: "large-group", meaning: "「大規模グループの」" },
                                { word: "less than", meaning: "「〜よりも少なく」" }
                            ],
                            grammarNotes: [
                                { phrase: "even when", explanation: "<b>even when</b>: 「〜の時でさえ」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "Experts suggest that this happens because of the \"fear of missing out.\"",
                        translation: "専門家は、これは「見逃しの恐怖（FOMO）」が原因で起こると示唆している。",
                        grammarAnalysis: {
                            mainVerbs: ["suggest", "happens"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Experts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suggest</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [this <span class='chunk V2-group'><span class='text'>happens</span><span class='tag'>V'</span></span> because of the \"fear of missing out\"]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>専門家は</span> <span class='t-V'>示唆している</span> <span class='t-O'>that [これは <span class='t-V2'>起こる</span>「見逃しの恐怖」が原因で]</span>。",
                            naturalTranslation: "専門家は、これは「見逃しの恐怖（FOMO）」が原因で起こると示唆している。",
                            vocabulary: [
                                { word: "suggest that", meaning: "「〜と示唆する」" },
                                { word: "fear of missing out", meaning: "「見逃しの恐怖、FOMO」" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 20,
                        text: "When there are thousands of other options, viewers constantly wonder if a different movie would have been better than the one they selected.",
                        translation: "他に何千もの選択肢がある場合、視聴者は自分が選んだものよりも別の映画の方が良かったのではないかと常に考えてしまう。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "wonder", "would have been", "selected"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When [there <span class='chunk V2-group'><span class='text'>are</span><span class='tag'>V'</span></span> thousands of other options])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>viewers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>constantly wonder</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>if [a different movie <span class='chunk V3-group'><span class='text'>would have been</span><span class='tag'>V''</span></span> better than the one they <span class='chunk V4-group'><span class='text'>selected</span><span class='tag'>V'''</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(When [<span class='t-V2'>ある</span>何千もの他の選択肢が])</span>、<span class='t-S'>視聴者は</span> <span class='t-V'>常に疑問に思う</span> <span class='t-O'>if [別の映画が <span class='t-V3'>だっただろう</span>より良い彼らが <span class='t-V4'>選んだ</span>ものよりも]</span>。",
                            naturalTranslation: "他に何千もの選択肢がある場合、視聴者は自分が選んだものよりも別の映画の方が良かったのではないかと常に考えてしまう。",
                            vocabulary: [
                                { word: "constantly", meaning: "「常に」" },
                                { word: "wonder if", meaning: "「〜ではないかと思う」" },
                                { word: "would have been better", meaning: "「より良かっただろう」" }
                            ],
                            grammarNotes: [
                                { phrase: "would have been", explanation: "<b>仮定法過去完了</b>: 「〜だっただろう」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "To combat this, some experts recommend that viewers should use features like \"random play\" or simply stick to recommendations from friends to reduce the burden of choice.",
                        translation: "これに対抗するために、一部の専門家は、選択の負担を減らすために視聴者が「ランダム再生」のような機能を使ったり、単に友人からの推薦に従ったりすることを推奨している。",
                        grammarAnalysis: {
                            mainVerbs: ["recommend", "should use", "stick"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To combat this)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some experts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>recommend</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [viewers <span class='chunk V2-group'><span class='text'>should use</span><span class='tag'>V'</span></span> features like \"random play\" or simply <span class='chunk V3-group'><span class='text'>stick</span><span class='tag'>V''</span></span> to recommendations from friends (to reduce the burden of choice)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(これに対抗するために)</span>、<span class='t-S'>一部の専門家は</span> <span class='t-V'>推奨している</span> <span class='t-O'>that [視聴者は <span class='t-V2'>使うべき</span>機能を「ランダム再生」のような または単に <span class='t-V3'>従うべき</span>友人からの推薦に（選択の負担を減らすために）]</span>。",
                            naturalTranslation: "これに対抗するために、一部の専門家は、選択の負担を減らすために視聴者が「ランダム再生」のような機能を使ったり、単に友人からの推薦に従ったりすることを推奨している。",
                            vocabulary: [
                                { word: "To combat this", meaning: "「これに対抗するために」" },
                                { word: "random play", meaning: "「ランダム再生」" },
                                { word: "stick to", meaning: "「〜に従う、〜を守る」" },
                                { word: "burden of choice", meaning: "「選択の負担」" }
                            ],
                            grammarNotes: [
                                { phrase: "recommend that S should", explanation: "<b>recommend that節</b>: 「〜することを推奨する」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Change in choosing entertainment
            {
                id: 1,
                text: "How has choosing entertainment changed compared to the past?",
                textTranslation: "エンターテインメントを選ぶことは過去と比較してどのように変化しましたか？",
                choices: [
                    { id: 1, text: "It has become much simpler because there are fewer channels to watch.", translation: "見るチャンネルが少なくなったため、ずっと簡単になった。", isCorrect: false },
                    { id: 2, text: "It has become more difficult because of the huge number of options.", translation: "膨大な数の選択肢のため、より難しくなった。", isCorrect: true, highlight: "become more difficult because of huge number of options" },
                    { id: 3, text: "It requires less time now because technology makes decisions for us.", translation: "テクノロジーが私たちのために決定を下してくれるため、今は時間がかからない。", isCorrect: false },
                    { id: 4, text: "It is no longer necessary because people prefer to read books instead.", translation: "人々は代わりに本を読むことを好むため、もはや必要ない。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で変化について述べられています。「it has created a new type of stress」に注目。",
                    targetSentenceId: 4,
                    highlightWord: "While having so many options might seem like a dream come true, it has created a new type of stress for users",
                    highlightWordSentenceId: 4
                },
                keywords: ["how", "changed", "compared to the past"],
                keywordExplanations: {
                    "how": "どのように。",
                    "changed": "変化した。",
                    "compared to the past": "過去と比較して。"
                },
                keywordMatches: [
                    { sentenceId: 4, text: "it has created a new type of stress for users", keyword: "become more difficult" }
                ],
                choiceAdvice: "選択肢は変化の内容を問うています。第1段落で「多くの選択肢」「新しい種類のストレス」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"While having so many options might seem like a dream come true, it has created a new type of stress for users\"" },
                    { type: "arrow", content: "「多くの選択肢があることは夢のように思えるかもしれないが、新しい種類のストレスを生み出した」" },
                    { type: "text", content: "選択肢2: \"It has become more difficult because of the huge number of options.\"" },
                    { type: "conclusion", content: "created stress + many options = difficult because of options → 正解: 2" }
                ]
            },
            // Q2: 第2段落 - Experiment results
            {
                id: 2,
                text: "What did the experiment with streaming service users reveal?",
                textTranslation: "ストリーミングサービスユーザーとの実験は何を明らかにしましたか？",
                choices: [
                    { id: 1, text: "Participants with fewer options chose a movie quickly and were happy.", translation: "選択肢が少ない参加者は素早く映画を選び、幸せだった。", isCorrect: true, highlight: "fewer options chose quickly and were happy" },
                    { id: 2, text: "Participants with many options watched more movies than the other group.", translation: "多くの選択肢がある参加者は他のグループよりも多くの映画を見た。", isCorrect: false },
                    { id: 3, text: "The group with five thousand titles found it easier to decide what to watch.", translation: "5000タイトルあるグループは、何を見るか決めるのがより簡単だと分かった。", isCorrect: false },
                    { id: 4, text: "Both groups spent the same amount of time searching for a movie.", translation: "両方のグループは映画を探すのに同じだけの時間を費やした。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落で実験結果が述べられています。「The people in the first group chose a movie within minutes and reported high levels of satisfaction」に注目。",
                    targetSentenceId: 11,
                    highlightWord: "The people in the first group chose a movie within minutes and reported high levels of satisfaction",
                    highlightWordSentenceId: 11
                },
                keywords: ["experiment", "reveal"],
                keywordExplanations: {
                    "experiment": "実験。",
                    "reveal": "明らかにする。"
                },
                keywordMatches: [
                    { sentenceId: 11, text: "chose a movie within minutes and reported high levels of satisfaction", keyword: "chose quickly and were happy" }
                ],
                choiceAdvice: "選択肢は実験結果を問うています。第2段落で第1グループ（選択肢が少ない）の様子を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"The people in the first group chose a movie within minutes and reported high levels of satisfaction.\"" },
                    { type: "arrow", content: "「最初のグループの人々は数分以内に映画を選び、高い満足度を報告した」" },
                    { type: "text", content: "選択肢1: \"Participants with fewer options chose a movie quickly and were happy.\"" },
                    { type: "conclusion", content: "chose within minutes + high satisfaction = chose quickly + happy → 正解: 1" }
                ]
            },
            // Q3: 第3段落 - Reason for adding content
            {
                id: 3,
                text: "Why do streaming companies continue to add more content to their libraries?",
                textTranslation: "なぜストリーミング会社はライブラリにコンテンツを追加し続けるのですか？",
                choices: [
                    { id: 1, text: "To confuse customers and make them spend more time on the platform.", translation: "顧客を混乱させ、プラットフォームでより多くの時間を費やさせるため。", isCorrect: false },
                    { id: 2, text: "To help psychologists conduct experiments on human behavior.", translation: "心理学者が人間行動の実験を行うのを助けるため。", isCorrect: false },
                    { id: 3, text: "To encourage customers to cancel their subscriptions to other services.", translation: "顧客に他のサービスの契約を解約するよう促すため。", isCorrect: false },
                    { id: 4, text: "To show that their service is valuable and suitable for many people.", translation: "彼らのサービスが価値があり、多くの人々に適していることを示すため。", isCorrect: true, highlight: "service is valuable and suitable for many people" },
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で企業の考えが述べられています。「justifies the monthly fee and appeals to a wider audience」に注目。",
                    targetSentenceId: 14,
                    highlightWord: "They think that a larger library justifies the monthly fee and appeals to a wider audience",
                    highlightWordSentenceId: 14
                },
                keywords: ["streaming companies", "add more content", "why"],
                keywordExplanations: {
                    "streaming companies": "ストリーミング会社。",
                    "add more content": "コンテンツを増やす。",
                    "why": "なぜ。"
                },
                keywordMatches: [
                    { sentenceId: 14, text: "justifies the monthly fee and appeals to a wider audience", keyword: "valuable and suitable for many people" }
                ],
                choiceAdvice: "選択肢は企業がコンテンツを増やす理由を問うています。第3段落で「月額料金を正当化」「幅広い視聴者にアピール」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"They think that a larger library justifies the monthly fee and appeals to a wider audience.\"" },
                    { type: "arrow", content: "「彼らは、より大きなライブラリが月額料金を正当化し（価値がある）、より幅広い視聴者にアピールする（多くの人に適している）と考えている」" },
                    { type: "text", content: "選択肢4: \"To show that their service is valuable and suitable for many people.\"" },
                    { type: "conclusion", content: "justifies fee + appeals to audience = valuable + suitable for many → 正解: 4" }
                ]
            },
            // Q4: 第4段落 - Why less enjoyment
            {
                id: 4,
                text: "Why did the participants in the second group enjoy their movies less?",
                textTranslation: "なぜ第2グループの参加者は映画をあまり楽しめなかったのですか？",
                choices: [
                    { id: 1, text: "The movies they chose were generally of lower quality than the others.", translation: "彼らが選んだ映画は一般的に他のものより低品質だった。", isCorrect: false },
                    { id: 2, text: "They were worried that they might have missed out on a better option.", translation: "彼らはもっと良い選択肢を見逃したかもしれないと心配していた。", isCorrect: true, highlight: "worried missed out on a better option" },
                    { id: 3, text: "They were tired because they had to watch the movie late at night.", translation: "彼らは夜遅く映画を見なければならなかったので疲れていた。", isCorrect: false },
                    { id: 4, text: "The streaming service they used had many technical problems.", translation: "彼らが使ったストリーミングサービスには多くの技術的な問題があった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で楽しめなかった理由が述べられています。「viewers constantly wonder if a different movie would have been better」に注目。",
                    targetSentenceId: 20,
                    highlightWord: "viewers constantly wonder if a different movie would have been better than the one they selected",
                    highlightWordSentenceId: 20
                },
                keywords: ["why", "enjoy less", "second group"],
                keywordExplanations: {
                    "why": "なぜ。",
                    "enjoy less": "あまり楽しめない。",
                    "second group": "第2グループ。"
                },
                keywordMatches: [
                    { sentenceId: 20, text: "wonder if a different movie would have been better", keyword: "worried missed out on a better option" }
                ],
                choiceAdvice: "選択肢は満足度が低かった理由を問うています。第4段落で「別の映画の方が良かったのではないかと疑う」心理を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"viewers constantly wonder if a different movie would have been better than the one they selected.\"" },
                    { type: "arrow", content: "「視聴者は自分が選んだものよりも別の映画の方が良かったのではないかと常に考えてしまう」" },
                    { type: "text", content: "選択肢2: \"They were worried that they might have missed out on a better option.\"" },
                    { type: "conclusion", content: "wonder if better = worried might have missed better → 正解: 2" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の文のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "Having unlimited choices always leads to the highest level of satisfaction.", translation: "無制限の選択肢を持つことは常に最高レベルの満足度につながる。", isCorrect: false },
                    { id: 2, text: "\"Analysis paralysis\" occurs when people have too few options to choose from.", translation: "「分析麻痺」は人々が選ぶ選択肢が少なすぎる時に起こる。", isCorrect: false },
                    { id: 3, text: "Streaming companies believe that a small library is better for business.", translation: "ストリーミング会社は小さなライブラリの方がビジネスに適していると信じている。", isCorrect: false },
                    { id: 4, text: "Limiting options can help viewers enjoy their entertainment more.", translation: "選択肢を制限することは、視聴者がエンターテインメントをより楽しむのに役立つ。", isCorrect: true, highlight: "Limiting options can help viewers enjoy" }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落で解決策について述べられています。「recommend that viewers should...stick to recommendations...to reduce the burden of choice」に注目。",
                    targetSentenceId: 21,
                    highlightWord: "recommend that viewers should use features like \"random play\" or simply stick to recommendations from friends to reduce the burden of choice",
                    highlightWordSentenceId: 21
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい。",
                    "statements": "文。"
                },
                keywordMatches: [
                    { sentenceId: 21, text: "reduce the burden of choice", keyword: "Limiting options can help" }
                ],
                choiceAdvice: "選択肢は本文の内容と一致するものを探します。第4段落で「選択の負担を減らす」ための提案を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"recommend that viewers should...stick to recommendations...to reduce the burden of choice\"" },
                    { type: "arrow", content: "「選択の負担を減らすために（選択肢を制限することを）推奨する」" },
                    { type: "text", content: "選択肢4: \"Limiting options can help viewers enjoy their entertainment more.\"" },
                    { type: "conclusion", content: "reduce burden of choice = help enjoy (reverse of stress) → 正解: 4" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Streaming Dilemma - 講師用要約",
            intro: "有名な「ジャムの法則」の現代版として、動画配信サービス（ストリーミング）における選択のパラドックスを扱っています。選択肢が多すぎることが、かえって満足度を下げてしまう現象を解説しています。",
            points: [
                { label: "1. Too Much to Watch（第1段落）", text: "昔はテレビのチャンネルが少なかったので見るものを決めるのは簡単でしたが、今はストリーミングサービスに何千もの選択肢があります。これは夢のようですが、実際には「見る時間」よりも「探す時間」の方が長くなるというストレスを生んでいます。" },
                { label: "2. The Experiment（第2段落）", text: "心理学者の実験で、5本の映画から選ぶグループと、5000本から選ぶグループを比較しました。選択肢が少ないグループはすぐに選んで満足しましたが、多いグループは選ぶのに20分以上かかり、諦めてしまう人もいました。" },
                { label: "3. Quantity vs. Quality（第3段落）", text: "企業は「作品数が多い＝価値がある」と考えますが、人間の脳は選択肢が多すぎると「分析麻痺」を起こし、選べなくなってしまいます。" },
                { label: "4. The Fear of Missing Out（第4段落）", text: "選択肢が多いと、「他にもっと良い映画があったかも」と疑ってしまい、選んだ作品を純粋に楽しめなくなります。専門家は、ランダム機能や友人の推薦を利用して、選択の負担を減らすことを勧めています。" }
            ]
        }
    },
    // 2級 オリジナル問題15: The Rise of Hip-Hop
    {
        id: "grade-2-original-rise-of-hip-hop",
        grade: "2級",
        title: "The Rise of Hip-Hop",
        subTitle: "問題15",
        genre: "歴史 / 芸術",
        similarProblems: {
            exam: "2024年度 第2回",
            title: "Blues"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Rise+of+Hip-Hop",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            // 第1段落: Origins in the Bronx
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Hip-hop culture began in New York City during the 1970s.",
                        translation: "ヒップホップ文化は1970年代にニューヨーク市で始まった。",
                        grammarAnalysis: {
                            mainVerbs: ["began"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Hip-hop culture</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>began</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in New York City) (during the 1970s)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ヒップホップ文化は</span> <span class='t-V'>始まった</span> <span class='t-M'>(ニューヨーク市で) (1970年代に)</span>。",
                            naturalTranslation: "ヒップホップ文化は1970年代にニューヨーク市で始まった。",
                            vocabulary: [
                                { word: "hip-hop culture", meaning: "「ヒップホップ文化」" },
                                { word: "began", meaning: "「始まった（beginの過去形）」" },
                                { word: "during", meaning: "「〜の間、〜の間に」" },
                                { word: "1970s", meaning: "「1970年代」" }
                            ],
                            grammarNotes: [
                                { phrase: "began", explanation: "<b>自動詞</b>: 「始まる」。ここでは受動態ではなく能動態で使われている点に注意。" },
                                { phrase: "in New York City", explanation: "<b>場所を表す副詞句</b>: 場所を特定する。" },
                                { phrase: "during the 1970s", explanation: "<b>時を表す副詞句</b>: 特定の期間を示す。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "It was created by young African Americans and Latinos who were living in neighborhoods with little money.",
                        translation: "それは、お金の少ない地域に住んでいた若いアフリカ系アメリカ人とラテン系の人々によって作られた。",
                        grammarAnalysis: {
                            mainVerbs: ["was created"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was created</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(by young African Americans and Latinos [who <span class='chunk V2-group'><span class='text'>were living</span><span class='tag'>V'</span></span> in neighborhoods with little money])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>作られた</span> <span class='t-M'>(若いアフリカ系アメリカ人とラテン系の人々によって [彼らは <span class='t-V2'>住んでいた</span>お金の少ない地域に])</span>。",
                            naturalTranslation: "それは、お金の少ない地域に住んでいた若いアフリカ系アメリカ人とラテン系の人々によって作られた。",
                            vocabulary: [
                                { word: "was created", meaning: "「作られた（受動態）」" },
                                { word: "African Americans", meaning: "「アフリカ系アメリカ人」" },
                                { word: "Latinos", meaning: "「ラテン系の人々、ヒスパニック」" },
                                { word: "neighborhoods", meaning: "「近隣地域、地区」" },
                                { word: "with little money", meaning: "「ほとんどお金のない（貧しい）」" }
                            ],
                            grammarNotes: [
                                { phrase: "was created by", explanation: "<b>受動態</b>: 「〜によって作られた」。動作主をbyで示す。" },
                                {
                                    phrase: "who were living", explanation: `<b>関係代名詞（主格）</b>:
<ul>
<li><b>先行詞</b>: young African Americans and Latinos</li>
<li><b>S'</b>: who</li>
<li><b>V'</b>: were living（過去進行形）</li>
<li><b>M'</b>: in neighborhoods with little money</li>
</ul>
「貧しい地域に住んでいた〜」と先行詞を修飾する。` },
                                { phrase: "with little money", explanation: "<b>前置詞句（形容詞的）</b>: neighborhoodsを修飾。「お金がほとんどない地域＝貧しい地域」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Instead of buying expensive instruments, they used record players to create a new sound.",
                        translation: "高価な楽器を買う代わりに、彼らは新しい音を作るためにレコードプレーヤーを使った。",
                        grammarAnalysis: {
                            mainVerbs: ["used"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Instead of buying expensive instruments)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>record players</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to create a new sound)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(高価な楽器を買う代わりに)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>使った</span> <span class='t-O'>レコードプレーヤーを</span> <span class='t-M'>(新しい音を作るために)</span>。",
                            naturalTranslation: "高価な楽器を買う代わりに、彼らは新しい音を作るためにレコードプレーヤーを使った。",
                            vocabulary: [
                                { word: "Instead of", meaning: "「〜の代わりに」" },
                                { word: "expensive", meaning: "「高価な」" },
                                { word: "instruments", meaning: "「楽器」" },
                                { word: "record players", meaning: "「レコードプレーヤー（ターンテーブル）」" },
                                { word: "create", meaning: "「創造する、作る」" }
                            ],
                            grammarNotes: [
                                { phrase: "Instead of buying", explanation: "<b>前置詞 + 動名詞</b>: 「〜する代わりに」。ofの後ろなのでing形になる。" },
                                { phrase: "used ... to create", explanation: "<b>不定詞（副詞的用法・目的）</b>: 「〜を作るために…を使った」。" },
                                { phrase: "create a new sound", explanation: "<b>目的語</b>: 新しい音楽スタイルを生み出すこと。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "They organized \"block parties\" to bring their community together.",
                        translation: "彼らはコミュニティを団結させるために「ブロックパーティー」を組織した。",
                        grammarAnalysis: {
                            mainVerbs: ["organized"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>organized</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>\"block parties\"</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to bring their community together)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>組織した</span> <span class='t-O'>「ブロックパーティー」を</span> <span class='t-M'>(彼らのコミュニティを団結させるために)</span>。",
                            naturalTranslation: "彼らはコミュニティを団結させるために「ブロックパーティー」を組織した。",
                            vocabulary: [
                                { word: "organized", meaning: "「組織した、開催した」" },
                                { word: "block parties", meaning: "「ブロックパーティー（街区の路上パーティー）」" },
                                { word: "bring ... together", meaning: "「〜を団結させる、まとめる」" },
                                { word: "community", meaning: "「コミュニティ、地域社会」" }
                            ],
                            grammarNotes: [
                                { phrase: "organized", explanation: "<b>他動詞</b>: パーティーやイベントを計画・実行すること。" },
                                { phrase: "to bring ... together", explanation: "<b>不定詞（副詞的用法・目的）</b>: 「〜を一つにまとめるために」。" },
                                { phrase: "bring community together", explanation: "<b>句動詞</b>: 人々を集めて仲良くさせること。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "While the music often reflected the hard reality of their lives, it was primarily a way to have fun and stay positive.",
                        translation: "音楽はしばしば彼らの生活の厳しい現実を反映していたが、それは主として楽しみ、前向きでいるための方法であった。",
                        grammarAnalysis: {
                            mainVerbs: ["reflected", "was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While [the music often <span class='chunk V2-group'><span class='text'>reflected</span><span class='tag'>V'</span></span> the hard reality of their lives])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>primarily a way (to have fun and stay positive)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(While [音楽がしばしば <span class='t-V2'>反映していた</span>彼らの生活の厳しい現実を])</span>、<span class='t-S'>それは</span> <span class='t-V'>であった</span> <span class='t-C'>主として方法（楽しむそして前向きでいるための）</span>。",
                            naturalTranslation: "音楽はしばしば彼らの生活の厳しい現実を反映していたが、それは主として楽しみ、前向きでいるための方法であった。",
                            vocabulary: [
                                { word: "While", meaning: "「〜だが、〜の一方で（譲歩）」" },
                                { word: "reflected", meaning: "「反映した、映し出した」" },
                                { word: "hard reality", meaning: "「厳しい現実」" },
                                { word: "primarily", meaning: "「主として、第一に」" },
                                { word: "stay positive", meaning: "「前向きでいつづける」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "While the music often reflected", explanation: `<b>While（譲歩の接続詞）</b>:
<ul>
<li><b>S'</b>: the music</li>
<li><b>V'</b>: reflected</li>
<li><b>O'</b>: the hard reality of their lives</li>
</ul>
「〜ではあったが」と対照的な内容を導く。` },
                                { phrase: "a way to have fun", explanation: "<b>不定詞（形容詞的用法）</b>: wayを修飾。「〜するための方法」。" },
                                { phrase: "stay positive", explanation: "<b>補語をとる動詞</b>: stay + 形容詞で「（状態の）ままでいる」。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "This creative energy helped them deal with the challenges of their environment.",
                        translation: "この創造的なエネルギーは、彼らが環境の課題に対処するのを助けた。",
                        grammarAnalysis: {
                            mainVerbs: ["helped"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This creative energy</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>[deal with the challenges of their environment]</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>この創造的なエネルギーは</span> <span class='t-V'>助けた</span> <span class='t-O'>彼らが</span> <span class='t-C'>[対処するのを（彼らの環境の課題に）]</span>。",
                            naturalTranslation: "この創造的なエネルギーは、彼らが環境の課題に対処するのを助けた。",
                            vocabulary: [
                                { word: "creative energy", meaning: "「創造的なエネルギー」" },
                                { word: "helped", meaning: "「助けた」" },
                                { word: "deal with", meaning: "「〜に対処する、〜を扱う」" },
                                { word: "challenges", meaning: "「課題、困難」" },
                                { word: "environment", meaning: "「環境」" }
                            ],
                            grammarNotes: [
                                { phrase: "helped them deal with", explanation: "<b>help O (to) do</b>: 「Oが〜するのを助ける」。toは省略されることが多い（原形不定詞）。" },
                                { phrase: "deal with", explanation: "<b>句動詞</b>: 問題や困難などを処理する、何とかする。" },
                                { phrase: "challenges of their environment", explanation: "<b>名詞句</b>: 彼らが置かれた環境（貧困など）に伴う困難。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: The DJ and the Break
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "The most important figure in early hip-hop was the DJ.",
                        translation: "初期のヒップホップにおける最も重要な人物はDJであった。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The most important figure (in early hip-hop)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the DJ</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>最も重要な人物は（初期のヒップホップにおける）</span> <span class='t-V'>であった</span> <span class='t-C'>DJ</span>。",
                            naturalTranslation: "初期のヒップホップにおける最も重要な人物はDJであった。",
                            vocabulary: [
                                { word: "most important figure", meaning: "「最も重要な人物」" },
                                { word: "early", meaning: "「初期の」" },
                                { word: "hip-hop", meaning: "「ヒップホップ」" }
                            ],
                            grammarNotes: [
                                { phrase: "most important", explanation: "<b>最上級</b>: 「最も重要な」。重要性を強調する。" },
                                { phrase: "figure", explanation: "<b>名詞</b>: ここでは「人物」という意味。" },
                                { phrase: "in early hip-hop", explanation: "<b>形容詞句</b>: figureを修飾し、いつの時代の話かを限定する。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "DJs noticed that people danced the most during the short drum sections of songs, known as \"breaks.\"",
                        translation: "DJたちはお客さんが、「ブレイク」として知られる曲の短いドラムセクションの間、最も踊ることに気づいた。",
                        grammarAnalysis: {
                            mainVerbs: ["noticed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>DJs</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>noticed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[that <span class='chunk S2-group'><span class='text'>people</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>danced</span><span class='tag'>V'</span></span> the most (during the short drum sections of songs, known as \"breaks\")]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>DJたちは</span> <span class='t-V'>気づいた</span> <span class='t-O'>[こと（人々が <span class='t-V2'>踊った</span>最も（曲の短いドラムセクションの間に、\"ブレイク\"として知られる））]</span>。",
                            naturalTranslation: "DJたちは、人々が「ブレイク」として知られる曲の短いドラムセクションの間、最も踊ることに気づいた。",
                            vocabulary: [
                                { word: "noticed", meaning: "「気づいた」" },
                                { word: "drum sections", meaning: "「ドラムセクション、ドラムパート」" },
                                { word: "known as", meaning: "「〜として知られる」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "noticed that ...", explanation: `<b>that節（名詞節）</b>:
<ul>
<li><b>S'</b>: people</li>
<li><b>V'</b>: danced</li>
<li><b>M'</b>: the most during...</li>
</ul>
noticedの目的語となる節を作る。` },
                                { phrase: "the most", explanation: "<b>副詞の最上級</b>: 「最もよく」。動詞dancedを修飾。" },
                                { phrase: "known as \"breaks\"", explanation: "<b>過去分詞句</b>: sectionsを修飾。「ブレイクとして知られているセクション」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "They developed a technique to play these breaks over and over again.",
                        translation: "彼らはこれらのブレイクを何度も繰り返して演奏する技術を開発した。",
                        grammarAnalysis: {
                            mainVerbs: ["developed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>developed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a technique</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to play these breaks over and over again)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>開発した</span> <span class='t-O'>技術を</span> <span class='t-M'>(演奏するための（これらのブレイクを何度も繰り返して）)</span>。",
                            naturalTranslation: "彼らはこれらのブレイクを何度も繰り返して演奏する技術を開発した。",
                            vocabulary: [
                                { word: "developed", meaning: "「開発した」" },
                                { word: "technique", meaning: "「技術、テクニック」" },
                                { word: "over and over again", meaning: "「何度も何度も、繰り返して」" }
                            ],
                            grammarNotes: [
                                { phrase: "to play", explanation: "<b>不定詞（形容詞的用法）</b>: techniqueを修飾。「〜するための技術」。" },
                                { phrase: "over and over again", explanation: "<b>熟語</b>: 「繰り返し」。頻度が高いことを強調する。" },
                                { phrase: "play these breaks", explanation: "<b>動詞句</b>: ブレイク部分だけを再生すること（ループさせること）。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "This allowed dancers, called \"breakdancers,\" to show off their skills for longer periods.",
                        translation: "これにより、「ブレイクダンサー」と呼ばれるダンサーたちは、より長い時間彼らのスキルを見せびらかすことができた。",
                        grammarAnalysis: {
                            mainVerbs: ["allowed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allowed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>dancers, (called \"breakdancers,\")</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to show off their skills (for longer periods)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>可能にした</span> <span class='t-O'>ダンサーたちが（\"ブレイクダンサー\"と呼ばれる）</span> <span class='t-C'>見せびらかすことを彼らのスキルを（より長い時間）</span>。",
                            naturalTranslation: "これにより、「ブレイクダンサー」と呼ばれるダンサーたちは、より長い時間彼らのスキルを見せびらかすことができた。",
                            vocabulary: [
                                { word: "allowed", meaning: "「可能にした（allowの過去形）」" },
                                { word: "breakdancers", meaning: "「ブレイクダンサー」" },
                                { word: "show off", meaning: "「見せびらかす、披露する」" },
                                { word: "longer periods", meaning: "「より長い期間（時間）」" }
                            ],
                            grammarNotes: [
                                { phrase: "allowed O to do", explanation: "<b>基本構文</b>: 「Oが〜することを可能にする」。" },
                                { phrase: "called \"breakdancers\"", explanation: "<b>過去分詞句（挿入）</b>: dancersを補足説明する。「〜と呼ばれる」。" },
                                { phrase: "show off", explanation: "<b>句動詞</b>: 自分の能力や持ち物を誇示する、人に見せる。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "Soon, people known as MCs began speaking in rhythm over the music to encourage the crowd.",
                        translation: "やがて、MCとして知られる人々が群衆を盛り上げるために音楽に合わせてリズムに乗って話し始めた。",
                        grammarAnalysis: {
                            mainVerbs: ["began speaking"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Soon, people (known as MCs)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>began speaking</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in rhythm over the music) (to encourage the crowd)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>やがて、人々は（MCとして知られる）</span> <span class='t-V'>話し始めた</span> <span class='t-M'>(リズムに乗って音楽に合わせて) (群衆を盛り上げるために)</span>。",
                            naturalTranslation: "やがて、MCとして知られる人々が群衆を盛り上げるために音楽に合わせてリズムに乗って話し始めた。",
                            vocabulary: [
                                { word: "known as", meaning: "「〜として知られる」" },
                                { word: "began speaking", meaning: "「話し始めた」" },
                                { word: "in rhythm", meaning: "「リズムに乗って」" },
                                { word: "encourage", meaning: "「励ます、盛り上げる」" }
                            ],
                            grammarNotes: [
                                { phrase: "known as MCs", explanation: "<b>過去分詞句</b>: peopleを修飾。「MCとして知られる人々」。" },
                                { phrase: "began speaking", explanation: "<b>動名詞を目的語にとる動詞</b>: beginはto doもdoingもとれる。" },
                                { phrase: "to encourage", explanation: "<b>不定詞（副詞的用法・目的）</b>: 「盛り上げるために」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "This style of speaking eventually turned into what we now know as rapping.",
                        translation: "この話すスタイルは、最終的に私たちが今ラップとして知っているものに変わった。",
                        grammarAnalysis: {
                            mainVerbs: ["turned into"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This style of speaking</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(eventually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>turned into</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[what <span class='chunk S2-group'><span class='text'>we</span><span class='tag'>S'</span></span> (now) <span class='chunk V2-group'><span class='text'>know</span><span class='tag'>V'</span></span> (as rapping)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>この話すスタイルは</span> <span class='t-M'>(最終的に)</span> <span class='t-V'>変わった</span> <span class='t-O'>[ものに（私たちが <span class='t-V2'>知っている</span>（ラップとして））]</span>。",
                            naturalTranslation: "この話すスタイルは、最終的に私たちが今ラップとして知っているものに変わった。",
                            vocabulary: [
                                { word: "eventually", meaning: "「最終的に、ついに」" },
                                { word: "turned into", meaning: "「〜に変わった」" },
                                { word: "rapping", meaning: "「ラップ（すること）」" }
                            ],
                            grammarNotes: [
                                { phrase: "turned into", explanation: "<b>句動詞</b>: 「〜に変化する」。becomeに近い意味。" },
                                {
                                    phrase: "what we now know as rapping", explanation: `<b>関係代名詞what（名詞節）</b>:
<ul>
<li><b>S'</b>: we</li>
<li><b>V'</b>: know</li>
<li><b>M'</b>: as rapping</li>
</ul>
「私たちが今ラップとして知っているもの＝ラップ」。` },
                                { phrase: "now know", explanation: "<b>現在の状態</b>: 過去の出来事の結果、現在はこう認識されているということ。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Growth and Technology
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "In the 1980s, the music changed as it became a business.",
                        translation: "1980年代になると、音楽がビジネスになるにつれて変化した。",
                        grammarAnalysis: {
                            mainVerbs: ["changed"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the 1980s)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the music</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>changed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(as [<span class='chunk S2-group'><span class='text'>it</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>became</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>a business</span><span class='tag'>C'</span></span>])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1980年代に)</span>、<span class='t-S'>音楽は</span> <span class='t-V'>変化した</span> <span class='t-M'>(〜につれて [それが <span class='t-V2'>なった</span>ビジネスに])</span>。",
                            naturalTranslation: "1980年代になると、音楽がビジネスになるにつれて変化した。",
                            vocabulary: [
                                { word: "changed", meaning: "「変化した」" },
                                { word: "became", meaning: "「〜になった」" },
                                { word: "business", meaning: "「ビジネス、事業」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "as it became a business", explanation: `<b>接続詞As（比例・推移）</b>:
<ul>
<li><b>S'</b>: it (the music)</li>
<li><b>V'</b>: became</li>
<li><b>C'</b>: a business</li>
</ul>
「〜するにつれて」。「〜するとき」とも訳せるが、変化の過程を示している。` },
                                { phrase: "In the 1980s", explanation: "<b>時を表す副詞句</b>: 時代を特定する。" },
                                { phrase: "it", explanation: "<b>代名詞</b>: 前の節のthe musicを指す。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "Musicians began using drum machines and computers instead of just turntables.",
                        translation: "ミュージシャンたちは、単なるターンテーブルの代わりにドラムマシンやコンピュータを使い始めた。",
                        grammarAnalysis: {
                            mainVerbs: ["began using"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Musicians</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>began using</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>drum machines and computers</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(instead of just turntables)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ミュージシャンは</span> <span class='t-V'>使い始めた</span> <span class='t-O'>ドラムマシンやコンピュータを</span> <span class='t-M'>(単なるターンテーブルの代わりに)</span>。",
                            naturalTranslation: "ミュージシャンたちは、単なるターンテーブルの代わりにドラムマシンやコンピュータを使い始めた。",
                            vocabulary: [
                                { word: "began using", meaning: "「使い始めた」" },
                                { word: "drum machines", meaning: "「ドラムマシン（リズムマシン）」" },
                                { word: "instead of", meaning: "「〜の代わりに」" },
                                { word: "turntables", meaning: "「ターンテーブル（レコードプレーヤー）」" }
                            ],
                            grammarNotes: [
                                { phrase: "began using", explanation: "<b>動名詞</b>: beganの目的語。「使うことを始めた」。" },
                                { phrase: "instead of", explanation: "<b>群前置詞</b>: 「〜しないで」「〜の代わりに」。" },
                                { phrase: "just", explanation: "<b>副詞</b>: 「ただ〜だけ」。ここでは「ただのターンテーブルだけ」という限定を意味する。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "This technology allowed them to create complex beats that were louder and clearer for radio play.",
                        translation: "この技術により、彼らはラジオ放送向けにより大きくクリアな複雑なビートを作ることができた。",
                        grammarAnalysis: {
                            mainVerbs: ["allowed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This technology</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allowed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to create complex beats [that <span class='chunk V2-group'><span class='text'>were</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>louder and clearer</span><span class='tag'>C'</span></span> (for radio play)]</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>この技術は</span> <span class='t-V'>可能にした</span> <span class='t-O'>彼らが</span> <span class='t-C'>作ることを複雑なビートを [それらは <span class='t-V2'>〜だった</span> <span class='t-C2'>より大きくよりクリアな</span> (ラジオ放送のために)]</span>。",
                            naturalTranslation: "この技術により、彼らはラジオ放送向けにより大きくクリアな複雑なビートを作ることができた。",
                            vocabulary: [
                                { word: "technology", meaning: "「技術、テクノロジー」" },
                                { word: "complex beats", meaning: "「複雑なビート」" },
                                { word: "louder", meaning: "「より大きな（音量）」" },
                                { word: "clearer", meaning: "「より明瞭な」" },
                                { word: "radio play", meaning: "「ラジオ放送、オンエア」" }
                            ],
                            grammarNotes: [
                                { phrase: "allowed them to create", explanation: "<b>allow O to do</b>: 「Oが〜できるようにする」。無生物主語構文（技術のおかげで〜できた）。" },
                                {
                                    phrase: "that were louder and clearer", explanation: `<b>関係代名詞（主格）</b>:
<ul>
<li><b>先行詞</b>: complex beats</li>
<li><b>S'</b>: that</li>
<li><b>V'</b>: were</li>
<li><b>C'</b>: louder and clearer（比較級）</li>
</ul>
ビートの性質を詳しく説明している。` },
                                { phrase: "for radio play", explanation: "<b>目的を表す前置詞句</b>: ラジオで流すのに適しているということ。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "As the genre grew, artists started writing lyrics about serious social issues and city life.",
                        translation: "ジャンルが成長するにつれて、アーティストたちは深刻な社会問題や都市生活についての歌詞を書き始めた。",
                        grammarAnalysis: {
                            mainVerbs: ["started writing"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(As [<span class='chunk S2-group'><span class='text'>the genre</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>grew</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>artists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>started writing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>lyrics</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(about serious social issues and city life)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(〜するにつれて [<span class='t-S2'>ジャンルが</span> <span class='t-V2'>成長した</span>])</span>、<span class='t-S'>アーティストたちは</span> <span class='t-V'>書き始めた</span> <span class='t-O'>歌詞を</span> <span class='t-M'>(深刻な社会問題と都市生活について)</span>。",
                            naturalTranslation: "ジャンルが成長するにつれて、アーティストたちは深刻な社会問題や都市生活についての歌詞を書き始めた。",
                            vocabulary: [
                                { word: "genre", meaning: "「ジャンル、分野」" },
                                { word: "grew", meaning: "「成長した（growの過去形）」" },
                                { word: "lyrics", meaning: "「歌詞」" },
                                { word: "social issues", meaning: "「社会問題」" },
                                { word: "city life", meaning: "「都市生活」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "As the genre grew", explanation: `<b>接続詞As（比例）</b>:
<ul>
<li><b>S'</b>: the genre</li>
<li><b>V'</b>: grew</li>
</ul>
「成長するにつれて」。時代の推移に伴う変化を示す。` },
                                { phrase: "started writing", explanation: "<b>動名詞を目的語にとる動詞</b>: 「書き始める」。started to writeでも可。" },
                                { phrase: "about serious social issues", explanation: "<b>前置詞句</b>: lyricsの内容を説明する。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "This shift helped hip-hop move from local parties to a worldwide audience, influencing people far beyond New York.",
                        translation: "この変化は、ヒップホップが地元のパーティーから世界中の聴衆へと移行するのを助け、ニューヨークをはるかに超えた人々に影響を与えた。",
                        grammarAnalysis: {
                            mainVerbs: ["helped"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This shift</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>hip-hop</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>move (from local parties) (to a worldwide audience)</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(influencing people far beyond New York)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この変化は</span> <span class='t-V'>助けた</span> <span class='t-O'>ヒップホップが</span> <span class='t-C'>移動するのを（地元のパーティーから）（世界中の聴衆へ）</span>、<span class='t-M'>(影響を与えながら（人々へニューヨークをはるかに超えて）)</span>。",
                            naturalTranslation: "この変化は、ヒップホップが地元のパーティーから世界中の聴衆へと移行するのを助け、ニューヨークをはるかに超えた人々に影響を与えた。",
                            vocabulary: [
                                { word: "shift", meaning: "「変化、移行」" },
                                { word: "move", meaning: "「移動する、移行する」" },
                                { word: "audience", meaning: "「聴衆、観客」" },
                                { word: "influencing", meaning: "「影響を与えながら」" },
                                { word: "far beyond", meaning: "「〜をはるかに超えて」" }
                            ],
                            grammarNotes: [
                                { phrase: "helped hip-hop move", explanation: "<b>help O (to) do</b>: 「Oが〜するのを助ける」。原形不定詞moveが使われている。" },
                                { phrase: "from ... to ...", explanation: "<b>相関語句</b>: 「〜から…へ」。範囲の拡大を示す。" },
                                { phrase: "influencing people", explanation: "<b>分詞構文（結果・付帯状況）</b>: そして人々に影響を与えた。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Global Influence
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 18,
                        text: "Today, hip-hop is one of the most popular music styles in the world.",
                        translation: "今日、ヒップホップは世界で最も人気のある音楽スタイルの一つである。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>hip-hop</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>one of the most popular music styles (in the world)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(今日)</span>、<span class='t-S'>ヒップホップは</span> <span class='t-V'>である</span> <span class='t-C'>最も人気のある音楽スタイルの一つ（世界で）</span>。",
                            naturalTranslation: "今日、ヒップホップは世界で最も人気のある音楽スタイルの一つである。",
                            vocabulary: [
                                { word: "popular", meaning: "「人気のある」" },
                                { word: "styles", meaning: "「スタイル、様式」" },
                                { word: "in the world", meaning: "「世界で」" }
                            ],
                            grammarNotes: [
                                { phrase: "one of the most popular", explanation: "<b>one of + 最上級 + 複数名詞</b>: 「最も〜なものの一つ」。" },
                                { phrase: "music styles", explanation: "<b>複数形</b>: one ofの後ろなので必ず複数形になる。" },
                                { phrase: "Today", explanation: "<b>副詞</b>: 文頭で時を設定する。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "It has influenced fashion, language, and art globally.",
                        translation: "それは世界的にファッション、言語、芸術に影響を与えてきた。",
                        grammarAnalysis: {
                            mainVerbs: ["has influenced"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has influenced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>fashion, language, and art</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(globally)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>影響を与えてきた</span> <span class='t-O'>ファッション、言語、そして芸術に</span> <span class='t-M'>(世界的に)</span>。",
                            naturalTranslation: "それは世界的にファッション、言語、芸術に影響を与えてきた。",
                            vocabulary: [
                                { word: "has influenced", meaning: "「影響を与えてきた（現在完了）」" },
                                { word: "fashion", meaning: "「ファッション」" },
                                { word: "language", meaning: "「言語」" },
                                { word: "art", meaning: "「芸術」" },
                                { word: "globally", meaning: "「世界的に」" }
                            ],
                            grammarNotes: [
                                { phrase: "has influenced", explanation: "<b>現在完了形（継続・完了）</b>: 過去から現在にわたって影響を与え続けていること。" },
                                { phrase: "fashion, language, and art", explanation: "<b>並列構造</b>: コンマとandで3つの名詞を並べている。" },
                                { phrase: "globally", explanation: "<b>副詞</b>: 「世界規模で」。文末で動詞を修飾。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Moreover, just like the blues music that came before it, hip-hop remains a powerful tool for storytelling.",
                        translation: "さらに、その前にあったブルース音楽と同じように、ヒップホップは依然として物語を語るための強力なツールである。",
                        grammarAnalysis: {
                            mainVerbs: ["remains"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Moreover)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(just like the blues music [that <span class='chunk V2-group'><span class='text'>came</span><span class='tag'>V'</span></span> (before it)])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>hip-hop</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>remains</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a powerful tool (for storytelling)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-M'>(ちょうどブルース音楽のように [それは <span class='t-V2'>来た</span>（それより前に）])</span>、<span class='t-S'>ヒップホップは</span> <span class='t-V'>ままである</span> <span class='t-C'>強力なツール（物語を語るための）</span>。",
                            naturalTranslation: "さらに、その前にあったブルース音楽と同じように、ヒップホップは依然として物語を語るための強力なツールである。",
                            vocabulary: [
                                { word: "Moreover", meaning: "「さらに、その上」" },
                                { word: "just like", meaning: "「〜とちょうど同じように」" },
                                { word: "remains", meaning: "「〜のままである」" },
                                { word: "storytelling", meaning: "「物語を語ること」" }
                            ],
                            grammarNotes: [
                                { phrase: "just like the blues music", explanation: "<b>前置詞的表現</b>: 類似点を示す。" },
                                {
                                    phrase: "that came before it", explanation: `<b>関係代名詞（主格）</b>:
<ul>
<li><b>先行詞</b>: the blues music</li>
<li><b>S'</b>: that</li>
<li><b>V'</b>: came (before it)</li>
</ul>
「それ（ヒップホップ）より前に登場した」ブルース音楽。` },
                                { phrase: "remains a powerful tool", explanation: "<b>SVC文型</b>: remainは補語をとる。「〜であり続ける」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "It allows artists to share their personal struggles and successes, connecting with listeners who face similar challenges in their own lives.",
                        translation: "それはアーティストが個人的な苦闘や成功を共有することを可能にし、自身の生活で同様の課題に直面しているリスナーとつながる。",
                        grammarAnalysis: {
                            mainVerbs: ["allows"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allows</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>artists</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to share their personal struggles and successes</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(connecting with listeners [who <span class='chunk V2-group'><span class='text'>face</span><span class='tag'>V'</span></span> similar challenges (in their own lives)])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>可能にする</span> <span class='t-O'>アーティストが</span> <span class='t-C'>共有することを彼らの個人的な苦闘や成功を</span>、<span class='t-M'>(つながりながら（リスナーと [彼らは <span class='t-V2'>直面している</span>同様の課題に（彼ら自身の生活の中で）]）)</span>。",
                            naturalTranslation: "それはアーティストが個人的な苦闘や成功を共有することを可能にし、自身の生活で同様の課題に直面しているリスナーとつながる。",
                            vocabulary: [
                                { word: "allows", meaning: "「可能にする」" },
                                { word: "struggles", meaning: "「苦闘、苦労」" },
                                { word: "successes", meaning: "「成功」" },
                                { word: "connecting", meaning: "「つながりながら」" }
                            ],
                            grammarNotes: [
                                { phrase: "allows artists to share", explanation: "<b>allow O to do</b>: 「Oが〜することを可能にする」。" },
                                { phrase: "connecting with listeners", explanation: "<b>分詞構文（付帯状況）</b>: 「そしてリスナーとつながる」。" },
                                {
                                    phrase: "who face similar challenges", explanation: `<b>関係代名詞（主格）</b>:
<ul>
<li><b>先行詞</b>: listeners</li>
<li><b>S'</b>: who</li>
<li><b>V'</b>: face</li>
<li><b>O'</b>: similar challenges</li>
</ul>
「〜な課題に直面している人々」。` }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Whether in a small town or a big city, the message of hip-hop continues to inspire people to express themselves.",
                        translation: "小さな町であろうと大都市であろうと、ヒップホップのメッセージは人々が自分自身を表現するように鼓舞し続けている。",
                        grammarAnalysis: {
                            mainVerbs: ["continues"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Whether in a small town or a big city)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the message of hip-hop</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>continues</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to inspire people</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to express themselves)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(小さな町であろうと大都市であろうと)</span>、<span class='t-S'>ヒップホップのメッセージは</span> <span class='t-V'>続けている</span> <span class='t-O'>人々を鼓舞することを</span> <span class='t-M'>(自分自身を表現するために)</span>。",
                            naturalTranslation: "小さな町であろうと大都市であろうと、ヒップホップのメッセージは人々が自分自身を表現するように鼓舞し続けている。",
                            vocabulary: [
                                { word: "Whether", meaning: "「〜であろうと」" },
                                { word: "message", meaning: "「メッセージ、伝言」" },
                                { word: "inspire", meaning: "「鼓舞する、刺激を与える」" },
                                { word: "express themselves", meaning: "「自分自身を表現する」" }
                            ],
                            grammarNotes: [
                                { phrase: "Whether ... or ...", explanation: "<b>譲歩の副詞節</b>: 「AであろうとBであろうと」。条件に関わらず〜だということ。" },
                                { phrase: "continues to inspire", explanation: "<b>不定詞を目的語にとる動詞</b>: 「〜し続ける」。keeping doingも可。" },
                                { phrase: "inspire people to express", explanation: "<b>inspire O to do</b>: 「Oを鼓舞して〜させる、〜する気にさせる」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            // Q1: 第1段落 - Why created
            {
                id: 1,
                text: "Why did young people in New York originally create hip-hop?",
                textTranslation: "なぜニューヨークの若者たちは当初ヒップホップを作ったのですか？",
                choices: [
                    { id: 1, text: "To make money to buy expensive musical instruments for schools.", translation: "学校のために高価な楽器を買うお金を稼ぐため。", isCorrect: false },
                    { id: 2, text: "To complain about the politicians who controlled their city.", translation: "彼らの都市を支配していた政治家について不満を言うため。", isCorrect: false },
                    { id: 3, text: "To find a way to enjoy themselves and support their community.", translation: "自分自身が楽しみ、コミュニティを支える方法を見つけるため。", isCorrect: true, highlight: "find way to enjoy and support community" },
                    { id: 4, text: "To create a style of music that was slower than disco music.", translation: "ディスコ音楽よりも遅いスタイルの音楽を作るため。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落で目的が述べられています。「it was primarily a way to have fun and stay positive」に注目。",
                    targetSentenceId: 5,
                    highlightWord: "While the music often reflected the hard reality of their lives, it was primarily a way to have fun and stay positive",
                    highlightWordSentenceId: 5
                },
                keywords: ["why", "create hip-hop"],
                keywordExplanations: {
                    "why": "なぜ。",
                    "create hip-hop": "ヒップホップを作る。"
                },
                keywordMatches: [
                    { sentenceId: 5, text: "primarily a way to have fun and stay positive", keyword: "find way to enjoy" },
                    { sentenceId: 4, text: "bring their community together", keyword: "support their community" }
                ],
                choiceAdvice: "選択肢はヒップホップを作った理由を問うています。第1段落で「楽しむため」「コミュニティのため」という前向きな動機を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"it was primarily a way to have fun and stay positive\"" },
                    { type: "arrow", content: "「それは主として楽しみ、前向きでいるための方法だった」" },
                    { type: "text", content: "選択肢3: \"To find a way to enjoy themselves...\"" },
                    { type: "conclusion", content: "have fun = enjoy themselves → 正解: 3" }
                ]
            },
            // Q2: 第2段落 - DJs purpose
            {
                id: 2,
                text: "What did early DJs do to help dancers?",
                textTranslation: "初期のDJはダンサーを助けるために何をしましたか？",
                choices: [
                    { id: 1, text: "They played the drum sections of songs repeatedly.", translation: "彼らは曲のドラムセクションを繰り返し演奏した。", isCorrect: true, highlight: "played drum sections repeatedly" },
                    { id: 2, text: "They invited famous singers to perform at their parties.", translation: "彼らはパーティーで演奏するために有名な歌手を招待した。", isCorrect: false },
                    { id: 3, text: "They taught the audience how to speak in rhythm.", translation: "彼らは聴衆にリズムに乗って話す方法を教えた。", isCorrect: false },
                    { id: 4, text: "They used computers to make the music sound quieter.", translation: "彼らは音楽をより静かにするためにコンピュータを使った。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落でDJの技術について述べられています。「play these breaks over and over again」に注目。",
                    targetSentenceId: 9,
                    highlightWord: "They developed a technique to play these breaks over and over again",
                    highlightWordSentenceId: 9
                },
                keywords: ["DJs", "help dancers"],
                keywordExplanations: {
                    "DJs": "DJ（ディスクジョッキー）。",
                    "help dancers": "ダンサーを助ける。"
                },
                keywordMatches: [
                    { sentenceId: 9, text: "play these breaks over and over again", keyword: "played drum sections repeatedly" }
                ],
                choiceAdvice: "選択肢はDJの行動を問うています。第2段落で「ブレイク（ドラムセクション）を繰り返す」技術を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"play these breaks over and over again\"" },
                    { type: "arrow", content: "「これらのブレイクを何度も繰り返して演奏する」" },
                    { type: "text", content: "選択肢1: \"They played the drum sections of songs repeatedly.\"" },
                    { type: "conclusion", content: "over and over again = repeatedly → 正解: 1" }
                ]
            },
            // Q3: 第3段落 - Changes in 1980s
            {
                id: 3,
                text: "How did hip-hop change in the 1980s?",
                textTranslation: "1980年代にヒップホップはどのように変化しましたか？",
                choices: [
                    { id: 1, text: "Musicians stopped using technology and returned to live bands.", translation: "ミュージシャンは技術の使用をやめ、ライブバンドに戻った。", isCorrect: false },
                    { id: 2, text: "Artists began using new machines to make music suitable for the radio.", translation: "アーティストはラジオに適した音楽を作るために新しい機械を使い始めた。", isCorrect: true, highlight: "using new machines suitable for radio" },
                    { id: 3, text: "The lyrics became focused only on having fun and partying.", translation: "歌詞は楽しむこととパーティーだけに焦点を当てるようになった。", isCorrect: false },
                    { id: 4, text: "It became less popular because people preferred rock music.", translation: "人々がロック音楽を好んだため、人気がなくなった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落で80年代の変化が述べられています。「create complex beats that were louder and clearer for radio play」に注目。",
                    targetSentenceId: 15,
                    highlightWord: "This technology allowed them to create complex beats that were louder and clearer for radio play",
                    highlightWordSentenceId: 15
                },
                keywords: ["how", "change", "1980s"],
                keywordExplanations: {
                    "how": "どのように。",
                    "change": "変化する。",
                    "1980s": "1980年代。"
                },
                keywordMatches: [
                    { sentenceId: 15, text: "louder and clearer for radio play", keyword: "suitable for the radio" },
                    { sentenceId: 14, text: "using drum machines and computers", keyword: "using new machines" }
                ],
                choiceAdvice: "選択肢は80年代の変化を問うています。第3段落で「新しい機械（ドラムマシン等）」「ラジオ向け」というキーワードを確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"create complex beats that were louder and clearer for radio play\"" },
                    { type: "arrow", content: "「ラジオ放送向けにより大きくクリアな複雑なビートを作る」" },
                    { type: "text", content: "選択肢2: \"make music suitable for the radio.\"" },
                    { type: "conclusion", content: "clearer for radio play = suitable for radio → 正解: 2" }
                ]
            },
            // Q4: 第4段落 - Similar to blues
            {
                id: 4,
                text: "In what way is hip-hop similar to blues music?",
                textTranslation: "ヒップホップはどのような点でブルース音楽と似ていますか？",
                choices: [
                    { id: 1, text: "It is mostly played on the guitar in the southern United States.", translation: "それは主にアメリカ南部でギターで演奏される。", isCorrect: false },
                    { id: 2, text: "It was created by people who lived on large farms.", translation: "それは大きな農場に住んでいた人々によって作られた。", isCorrect: false },
                    { id: 3, text: "It focuses on telling stories about personal feelings and experiences.", translation: "それは個人的な感情や経験についての物語を語ることに焦点を当てている。", isCorrect: true, highlight: "telling stories about personal feelings" },
                    { id: 4, text: "It avoids talking about serious social problems or hardships.", translation: "それは深刻な社会問題や苦難について話すのを避ける。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落でブルースとの類似点が述べられています。「remains a powerful tool for storytelling」に注目。",
                    targetSentenceId: 20,
                    highlightWord: "just like the blues music that came before it, hip-hop remains a powerful tool for storytelling",
                    highlightWordSentenceId: 20
                },
                keywords: ["similar", "blues music"],
                keywordExplanations: {
                    "similar": "似ている。",
                    "blues music": "ブルース音楽。"
                },
                keywordMatches: [
                    { sentenceId: 20, text: "remains a powerful tool for storytelling", keyword: "focuses on telling stories" },
                    { sentenceId: 21, text: "share their personal struggles", keyword: "personal feelings" }
                ],
                choiceAdvice: "選択肢はブルースとの共通点を問うています。第4段落で「ストーリーテリング（物語を語ること）」という共通点を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"hip-hop remains a powerful tool for storytelling\"" },
                    { type: "arrow", content: "「ヒップホップは依然として物語を語るための強力なツールである」" },
                    { type: "text", content: "選択肢3: \"It focuses on telling stories about personal feelings...\"" },
                    { type: "conclusion", content: "tool for storytelling = telling stories → 正解: 3" }
                ]
            },
            // Q5: 全体 - True statement
            {
                id: 5,
                text: "Which of the following statements is true?",
                textTranslation: "次の文のうち正しいものはどれですか？",
                choices: [
                    { id: 1, text: "Breakdancers preferred to dance during the singing parts of songs.", translation: "ブレイクダンサーは歌のパートで踊ることを好んだ。", isCorrect: false },
                    { id: 2, text: "Hip-hop culture was created by wealthy people in the suburbs.", translation: "ヒップホップ文化は郊外の裕福な人々によって作られた。", isCorrect: false },
                    { id: 3, text: "MCs originally started speaking to encourage the crowd to dance.", translation: "MCはもともと群衆に踊るよう促すために話し始めた。", isCorrect: true, highlight: "MCs started speaking to encourage crowd" },
                    { id: 4, text: "Hip-hop has had very little influence on fashion or art.", translation: "ヒップホップはファッションや芸術にほとんど影響を与えていない。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落でMCの役割について述べられています。「began speaking in rhythm over the music to encourage the crowd」に注目。",
                    targetSentenceId: 11,
                    highlightWord: "Soon, people known as MCs began speaking in rhythm over the music to encourage the crowd",
                    highlightWordSentenceId: 11
                },
                keywords: ["true", "statements"],
                keywordExplanations: {
                    "true": "正しい。",
                    "statements": "文。"
                },
                keywordMatches: [
                    { sentenceId: 11, text: "encourage the crowd", keyword: "encourage the crowd to dance" }
                ],
                choiceAdvice: "選択肢は本文の内容と一致するものを探します。第2段落で「MCが話し始めた理由（群衆を盛り上げる）」を確認しましょう。",
                logic: [
                    { type: "text", content: "本文: \"began speaking...to encourage the crowd\"" },
                    { type: "arrow", content: "「群衆を盛り上げるために…話し始めた」" },
                    { type: "text", content: "選択肢3: \"MCs originally started speaking to encourage the crowd...\"" },
                    { type: "conclusion", content: "encourage the crowd = encourage the crowd to dance (implied context) → 正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Rise of Hip-Hop - 講師用要約",
            intro: "ヒップホップの歴史は、ブルースの歴史と多くの共通点を持っています。貧しい環境から生まれ、工夫（楽器の代わりにレコードを使う）によって独自のスタイルを確立し、技術の進化（ドラムマシン）と共に世界へ広がりました。",
            points: [
                { label: "1. Origins in the Bronx（第1段落）", text: "ヒップホップは1970年代のニューヨークで、楽器を買えない若者たちがレコードプレーヤーを使って新しい音を作ったことから始まりました。厳しい現実の中で、コミュニティを楽しませる前向きな手段でした。" },
                { label: "2. The DJ and the Break（第2段落）", text: "初期の重要人物はDJでした。彼らは曲の間奏（ドラム部分＝ブレイク）を繰り返す技術を生み出し、ダンサー（ブレイクダンサー）が踊れる時間を長くしました。そこから観客を盛り上げるMC（後のラッパー）が生まれました。" },
                { label: "3. Growth and Technology（第3段落）", text: "80年代に入るとビジネス化が進み、ターンテーブルからドラムマシンやコンピュータへと技術が移行しました。これにより、ラジオ向けのクリアな音が作れるようになり、歌詞も社会的なメッセージを含むようになりました。" },
                { label: "4. Global Influence（第4段落）", text: "今やヒップホップは世界的な文化です。ブルースと同様に、個人の苦しみや成功を語る「ストーリーテリング」の道具として、多くの人々に影響を与え続けています。" }
            ]
        }
    },
    {
        id: "grade-2-original-lost-city-incas",
        title: "The Lost City of the Incas",
        subtitle: "問題16",
        genre: "歴史 / 地理",
        similarProblem: "2024年度 第1回, Chichén Itzá",
        paragraphs: [
            // 第1段落: High in the Clouds
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Machu Picchu is an ancient city located high in the Andes Mountains of Peru.",
                        translation: "マチュ・ピチュは、ペルーのアンデス山脈の高い場所に位置する古代都市である。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Machu Picchu</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an ancient city (located high in the Andes Mountains of Peru)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>マチュ・ピチュは</span> <span class='t-V'>である</span> <span class='t-C'>古代都市（位置する（ペルーのアンデス山脈の高い場所に））</span>。",
                            naturalTranslation: "マチュ・ピチュは、ペルーのアンデス山脈の高い場所に位置する古代都市である。",
                            vocabulary: [
                                { word: "ancient", meaning: "「古代の」" },
                                { word: "located", meaning: "「位置している」" },
                                { word: "high", meaning: "「高く（副詞として）」" },
                                { word: "mountains", meaning: "「山脈（複数形で）」" }
                            ],
                            grammarNotes: [
                                { phrase: "located high...", explanation: "<b>過去分詞句</b>: cityを後ろから修飾する。「〜に位置する都市」。" },
                                { phrase: "high in the Andes", explanation: "<b>副詞句</b>: locatedを修飾し、場所を説明する。" },
                                { phrase: "of Peru", explanation: "<b>前置詞句</b>: Andes Mountainsがどこのものかを示す。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "It was built by the Inca civilization around the 15th century.",
                        translation: "それは15世紀頃にインカ文明によって建設された。",
                        grammarAnalysis: {
                            mainVerbs: ["was built"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was built</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(by the Inca civilization) (around the 15th century)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>建設された</span> <span class='t-M'>(インカ文明によって) (15世紀頃に)</span>。",
                            naturalTranslation: "それは15世紀頃にインカ文明によって建設された。",
                            vocabulary: [
                                { word: "was built", meaning: "「建設された（受動態）」" },
                                { word: "civilization", meaning: "「文明」" },
                                { word: "century", meaning: "「世紀」" }
                            ],
                            grammarNotes: [
                                { phrase: "was built", explanation: "<b>受動態（be動詞 + 過去分詞）</b>: 「建てられた」。主語ItはMachu Picchu。" },
                                { phrase: "by the Inca civilization", explanation: "<b>動作主</b>: 「〜によって」。" },
                                { phrase: "around", explanation: "<b>前置詞</b>: 「およそ、〜頃」。正確な年が特定できない場合などに使う。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Although it is situated on a steep mountain ridge, the site was carefully chosen by the Incas.",
                        translation: "それは険しい山の尾根に位置しているが、その場所はインカ人によって慎重に選ばれた。",
                        grammarAnalysis: {
                            mainVerbs: ["was chosen"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Although [<span class='chunk S2-group'><span class='text'>it</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is situated</span><span class='tag'>V'</span></span> (on a steep mountain ridge)])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the site</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was chosen</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(carefully) (by the Incas)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(〜だけれども [<span class='t-S2'>それが</span> <span class='t-V2'>位置している</span>（険しい山の尾根に）])</span>、<span class='t-S'>その場所は</span> <span class='t-V'>選ばれた</span> <span class='t-M'>(慎重に) (インカ人によって)</span>。",
                            naturalTranslation: "それは険しい山の尾根に位置しているが、その場所はインカ人によって慎重に選ばれた。",
                            vocabulary: [
                                { word: "Although", meaning: "「〜だけれども」" },
                                { word: "situated", meaning: "「位置している」" },
                                { word: "steep", meaning: "「険しい、急勾配の」" },
                                { word: "ridge", meaning: "「尾根、背」" },
                                { word: "chosen", meaning: "「選ばれた（chooseの過去分詞）」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "Although it is situated", explanation: `<b>譲歩の副詞節</b>:
<ul>
<li><b>S'</b>: it (Machu Picchu)</li>
<li><b>V'</b>: is situated</li>
</ul>
「〜だけれども」。be situated onで「〜に位置する」。` },
                                { phrase: "was carefully chosen", explanation: "<b>受動態</b>: 「慎重に選ばれた」。副詞carefullyがwasとchosenの間に挿入されている。" },
                                { phrase: "steep mountain ridge", explanation: "<b>名詞句</b>: 「険しい山の尾根」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "It had a natural spring that provided fresh water and the surrounding slopes were perfect for building terraces.",
                        translation: "そこには新鮮な水を供給する天然の泉があり、周囲の斜面は段々畑（テラス）を作るのに最適であった。",
                        grammarAnalysis: {
                            mainVerbs: ["had", "were"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a natural spring [that <span class='chunk V2-group'><span class='text'>provided</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>fresh water</span><span class='tag'>O'</span></span>]</span><span class='tag'>O</span></span> and <span class='chunk S-group'><span class='text'>the surrounding slopes</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>perfect (for building terraces)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>持っていた（あった）</span> <span class='t-O'>天然の泉を [それは <span class='t-V2'>供給した</span> <span class='t-O2'>新鮮な水を</span>]</span>、そして <span class='t-S'>周囲の斜面は</span> <span class='t-V'>であった</span> <span class='t-C'>最適（段々畑を作るために）</span>。",
                            naturalTranslation: "そこには新鮮な水を供給する天然の泉があり、周囲の斜面は段々畑（テラス）を作るのに最適であった。",
                            vocabulary: [
                                { word: "natural spring", meaning: "「天然の泉」" },
                                { word: "provided", meaning: "「供給した」" },
                                { word: "surrounding", meaning: "「周囲の」" },
                                { word: "slopes", meaning: "「斜面」" },
                                { word: "terraces", meaning: "「段々畑、テラス」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "that provided fresh water", explanation: `<b>関係代名詞（主格）</b>:
<ul>
<li><b>先行詞</b>: a natural spring</li>
<li><b>S'</b>: that</li>
<li><b>V'</b>: provided</li>
<li><b>O'</b>: fresh water</li>
</ul>
「新鮮な水を供給する」泉。` },
                                { phrase: "perfect for building", explanation: "<b>形容詞 + 前置詞句</b>: 「〜するのに完璧な」。forの後ろなので動名詞buildingが来る。" },
                                { phrase: "and", explanation: "<b>等位接続詞</b>: 2つの文（It had... と the surrounding slopes were...）をつないでいる。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "These terraces allowed the Incas to grow enough food to support the population and also prevented the mountain from sliding away during heavy rains.",
                        translation: "これらの段々畑は、インカ人が人口を支えるのに十分な食料を育てることを可能にし、また大雨の間に山が崩れるのを防いだ。",
                        grammarAnalysis: {
                            mainVerbs: ["allowed", "prevented"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These terraces</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allowed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the Incas</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to grow enough food (to support the population)</span><span class='tag'>C</span></span> and also <span class='chunk V-group'><span class='text'>prevented</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the mountain</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(from sliding away) (during heavy rains)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これらの段々畑は</span> <span class='t-V'>可能にした</span> <span class='t-O'>インカの人々が</span> <span class='t-C'>十分な食料を育てることを（人口を支えるための）</span> そしてまた <span class='t-V'>防いだ</span> <span class='t-O'>山が</span> <span class='t-M'>(滑り落ちることから) (大雨の間)</span>。",
                            naturalTranslation: "これらの段々畑は、インカ人が人口を支えるのに十分な食料を育てることを可能にし、また大雨の間に山が崩れるのを防いだ。",
                            vocabulary: [
                                { word: "allowed", meaning: "「可能にした（allowの過去形）」" },
                                { word: "population", meaning: "「人口」" },
                                { word: "prevented", meaning: "「防いだ」" },
                                { word: "sliding away", meaning: "「滑り落ちること（地滑り）」" },
                                { word: "heavy rains", meaning: "「大雨、豪雨」" }
                            ],
                            grammarNotes: [
                                { phrase: "allowed O to do", explanation: "<b>構文</b>: 「Oが〜することを可能にする」。SVO to doの形。" },
                                { phrase: "enough food to support", explanation: "<b>形容詞的用法の不定詞</b>: 「〜するための十分な食料」。enoughの位置に注意（名詞の前）。" },
                                { phrase: "prevented O from doing", explanation: "<b>妨害の構文</b>: 「Oが〜するのを防ぐ・妨げる」。sliding awayは「崩れ落ちる」。" },
                                { phrase: "and also", explanation: "<b>並列</b>: allowedとpreventedという2つの過去形動詞を結んでいる。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "For these reasons, Machu Picchu became an important center for the Inca leaders.",
                        translation: "これらの理由から、マチュ・ピチュはインカの指導者たちにとって重要な中心地となった。",
                        grammarAnalysis: {
                            mainVerbs: ["became"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For these reasons)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Machu Picchu</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an important center (for the Inca leaders)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(これらの理由のために)</span>、<span class='t-S'>マチュ・ピチュは</span> <span class='t-V'>なった</span> <span class='t-C'>重要な中心地に（インカの指導者たちにとって）</span>。",
                            naturalTranslation: "これらの理由から、マチュ・ピチュはインカの指導者たちにとって重要な中心地となった。",
                            vocabulary: [
                                { word: "reasons", meaning: "「理由」" },
                                { word: "became", meaning: "「〜になった（becomeの過去形）」" },
                                { word: "center", meaning: "「中心地、拠点」" },
                                { word: "leaders", meaning: "「指導者たち、リーダーたち」" }
                            ],
                            grammarNotes: [
                                { phrase: "For these reasons", explanation: "<b>理由を表す前置詞句</b>: 前の文で述べられた「水がある」「農業ができる」「安全である」という理由を受ける。" },
                                { phrase: "became", explanation: "<b>SVC文型</b>: 「〜になる」。" },
                                { phrase: "for the Inca leaders", explanation: "<b>対象を表す前置詞句</b>: 誰にとっての中心地かを示す。" }
                            ]
                        }
                    }
                ]
            },
            // 第2段落: The Sun Calendar
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 7,
                        text: "The Incas were expert engineers and astronomers.",
                        translation: "インカ人は熟練した技術者であり天文学者であった。",
                        grammarAnalysis: {
                            mainVerbs: ["were"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The Incas</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>expert engineers and astronomers</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>インカ人は</span> <span class='t-V'>であった</span> <span class='t-C'>熟練した技術者であり天文学者</span>。",
                            naturalTranslation: "インカ人は熟練した技術者であり天文学者であった。",
                            vocabulary: [
                                { word: "expert", meaning: "「熟練した、専門家の」" },
                                { word: "engineers", meaning: "「技術者、エンジニア」" },
                                { word: "astronomers", meaning: "「天文学者」" }
                            ],
                            grammarNotes: [
                                { phrase: "expert", explanation: "<b>形容詞</b>: 「熟達した」。名詞として「専門家」の意味もあるが、ここでは形容詞的にengineers等を修飾。" },
                                { phrase: "engineers and astronomers", explanation: "<b>複数名詞</b>: 2つの職業がandで結ばれている。" },
                                { phrase: "were", explanation: "<b>be動詞（過去形）</b>: SVC文型を作る。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "They constructed a special building known as the Temple of the Sun to track the movement of the sun.",
                        translation: "彼らは太陽の動きを追跡するために、太陽の神殿として知られる特別な建物を建設した。",
                        grammarAnalysis: {
                            mainVerbs: ["constructed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>constructed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a special building (known as the Temple of the Sun)</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to track the movement of the sun)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>建設した</span> <span class='t-O'>特別な建物を（太陽の神殿として知られる）</span> <span class='t-M'>(太陽の動きを追跡するために)</span>。",
                            naturalTranslation: "彼らは太陽の動きを追跡するために、太陽の神殿として知られる特別な建物を建設した。",
                            vocabulary: [
                                { word: "constructed", meaning: "「建設した」" },
                                { word: "known as", meaning: "「〜として知られる」" },
                                { word: "track", meaning: "「追跡する、記録する」" },
                                { word: "movement", meaning: "「動き、移動」" }
                            ],
                            grammarNotes: [
                                { phrase: "known as", explanation: "<b>過去分詞句</b>: buildingを修飾。「〜として知られる」。" },
                                { phrase: "to track", explanation: "<b>不定詞（副詞的用法・目的）</b>: 「〜するために」。" },
                                { phrase: "Temple of the Sun", explanation: "<b>固有名詞</b>: 「太陽の神殿」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "The windows of this temple are perfectly aligned so that on the morning of the winter solstice, the sun shines directly through them.",
                        translation: "この神殿の窓は完全に整列されており、冬至の朝には太陽がそれらを直接通り抜けて輝くようになっている。",
                        grammarAnalysis: {
                            mainVerbs: ["are aligned"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The windows of this temple</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(perfectly)</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>aligned</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(so that (on the morning of the winter solstice), [<span class='chunk S2-group'><span class='text'>the sun</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>shines</span><span class='tag'>V'</span></span> (directly) (through them)])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この神殿の窓は</span> <span class='t-V'>されている</span> <span class='t-M'>(完全に)</span> <span class='t-C'>整列</span> <span class='t-M'>(〜するように [(冬至の朝に)、<span class='t-S2'>太陽が</span> <span class='t-V2'>輝く</span>(直接) (それらを通して)])</span>。",
                            naturalTranslation: "この神殿の窓は完全に整列されており、冬至の朝には太陽がそれらを直接通り抜けて輝くようになっている。",
                            vocabulary: [
                                { word: "aligned", meaning: "「整列された」" },
                                { word: "solstice", meaning: "「至点（夏至・冬至）」" },
                                { word: "shines", meaning: "「輝く、光る」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "so that ...", explanation: `<b>目的・結果の副詞節</b>:
<ul>
<li><b>S'</b>: the sun</li>
<li><b>V'</b>: shines</li>
<li><b>M'</b>: directly through them</li>
</ul>
「〜するように」「その結果〜する」。` },
                                { phrase: "winter solstice", explanation: "<b>名詞</b>: 「冬至」。" },
                                { phrase: "are perfectly aligned", explanation: "<b>受け身の状態</b>: 「完全に整列されている」。形容詞的にもとれる。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "This design acted as a calendar.",
                        translation: "この設計はカレンダーとして機能した。",
                        grammarAnalysis: {
                            mainVerbs: ["acted"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This design</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>acted</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(as a calendar)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この設計は</span> <span class='t-V'>機能した</span> <span class='t-M'>(カレンダーとして)</span>。",
                            naturalTranslation: "この設計はカレンダーとして機能した。",
                            vocabulary: [
                                { word: "design", meaning: "「設計、デザイン」" },
                                { word: "acted", meaning: "「機能した、役割を果たした」" },
                                { word: "calendar", meaning: "「カレンダー、暦」" }
                            ],
                            grammarNotes: [
                                { phrase: "acted as", explanation: "<b>熟語</b>: 「〜としての役割を果たす、〜として機能する」。work as, serve asに近い。" },
                                { phrase: "design", explanation: "<b>名詞</b>: 窓の配置などの設計上の工夫を指す。" },
                                { phrase: "as a calendar", explanation: "<b>前置詞句</b>: 役割を示す。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "By observing the sunlight, the Inca people could determine the best times for planting and harvesting their crops, which was essential for their survival in the mountains.",
                        translation: "日光を観察することによって、インカの人々は作物の作付けと収穫に最適な時期を決定することができ、それは山での生存にとって不可欠であった。",
                        grammarAnalysis: {
                            mainVerbs: ["could determine"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(By observing the sunlight)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the Inca people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could determine</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the best times (for planting and harvesting their crops)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>[which <span class='chunk V2-group'><span class='text'>was</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>essential (for their survival in the mountains)</span><span class='tag'>C'</span></span>]</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(日光を観察することによって)</span>、<span class='t-S'>インカの人々は</span> <span class='t-V'>決定することができた</span> <span class='t-O'>最適な時期を（作物を植えたり収穫したりするための）</span>、<span class='t-M'>[それは <span class='t-V2'>であった</span> <span class='t-C2'>不可欠（山での生存のために）</span>]</span>。",
                            naturalTranslation: "日光を観察することによって、インカの人々は作物の作付けと収穫に最適な時期を決定することができ、それは山での生存にとって不可欠であった。",
                            vocabulary: [
                                { word: "observing", meaning: "「観察すること」" },
                                { word: "determine", meaning: "「決定する、見極める」" },
                                { word: "harvesting", meaning: "「収穫すること」" },
                                { word: "essential", meaning: "「不可欠な」" },
                                { word: "survival", meaning: "「生存、生き残り」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "which was essential", explanation: `<b>関係代名詞（非制限用法）</b>:
<ul>
<li><b>先行詞</b>: 前の文の内容全体、または「時期を知ること」。</li>
<li><b>S'</b>: which</li>
<li><b>V'</b>: was</li>
<li><b>C'</b>: essential</li>
</ul>
「そしてそれは不可欠だった」。` },
                                { phrase: "By observing", explanation: "<b>手段を表す動名詞</b>: 「〜することによって」。" },
                                { phrase: "planting and harvesting", explanation: "<b>動名詞</b>: forの目的語。作付けと収穫。" }
                            ]
                        }
                    }
                ]
            },
            // 第3段落: Dancing Stones
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 12,
                        text: "The buildings in Machu Picchu are famous for another remarkable feature: their earthquake resistance.",
                        translation: "マチュ・ピチュの建物は、もう一つの注目すべき特徴、すなわち耐震性で有名である。",
                        grammarAnalysis: {
                            mainVerbs: ["are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The buildings in Machu Picchu</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>famous (for another remarkable feature: their earthquake resistance)</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>マチュ・ピチュの建物は</span> <span class='t-V'>である</span> <span class='t-C'>有名（もう一つの注目すべき特徴、すなわち耐震性で）</span>。",
                            naturalTranslation: "マチュ・ピチュの建物は、もう一つの注目すべき特徴、すなわち耐震性で有名である。",
                            vocabulary: [
                                { word: "remarkable", meaning: "「注目すべき、驚くべき」" },
                                { word: "feature", meaning: "「特徴」" },
                                { word: "resistance", meaning: "「耐性、抵抗力」" }
                            ],
                            grammarNotes: [
                                { phrase: "be famous for", explanation: "<b>熟語</b>: 「〜で有名である」。" },
                                { phrase: "feature: their earthquake resistance", explanation: "<b>コロン</b>: 具体的な内容を言い換える。「特徴、つまり耐震性」。" },
                                { phrase: "another", explanation: "<b>形容詞</b>: 「もう一つの」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "The Incas cut the stones so precisely that they fit together without using any cement or glue.",
                        translation: "インカ人は石を非常に正確に切ったので、それらはセメントや接着剤を使わずに互いにはまり合っている。",
                        grammarAnalysis: {
                            mainVerbs: ["cut"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The Incas</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>cut</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the stones</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(so precisely [that <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>fit</span><span class='tag'>V'</span></span> (together) (without using any cement or glue)])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>インカ人は</span> <span class='t-V'>切った</span> <span class='t-O'>石を</span> <span class='t-M'>(とても正確に [その結果 <span class='t-S2'>それらは</span> <span class='t-V2'>はまる</span> (一緒に) (セメントや接着剤を使わずに)])</span>。",
                            naturalTranslation: "インカ人は石を非常に正確に切ったので、それらはセメントや接着剤を使わずに互いにはまり合っている。",
                            vocabulary: [
                                { word: "precisely", meaning: "「正確に、精密に」" },
                                { word: "fit", meaning: "「合う、はまる」" },
                                { word: "cement", meaning: "「セメント」" },
                                { word: "glue", meaning: "「接着剤、のり」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "so precisely that ...", explanation: `<b>so ... that構文（程度・結果）</b>:
<ul>
<li><b>S'</b>: they (the stones)</li>
<li><b>V'</b>: fit</li>
</ul>
「非常に正確に〜なので…だ」。` },
                                { phrase: "without using", explanation: "<b>動名詞</b>: withoutの目的語。「〜することなしに」。" },
                                { phrase: "fit together", explanation: "<b>句動詞</b>: 「組み合う、ぴったり合う」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "This technique is called \"ashlar masonry.\"",
                        translation: "この技術は「切石積み」と呼ばれる。",
                        grammarAnalysis: {
                            mainVerbs: ["is called"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This technique</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>\"ashlar masonry\"</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>この技術は</span> <span class='t-V'>呼ばれる</span> <span class='t-C'>\"切石積み\"と</span>。",
                            naturalTranslation: "この技術は「切石積み」と呼ばれる。",
                            vocabulary: [
                                { word: "technique", meaning: "「技術、技法」" },
                                { word: "called", meaning: "「呼ばれる」" },
                                { word: "masonry", meaning: "「石積み、石造建築」" }
                            ],
                            grammarNotes: [
                                { phrase: "is called C", explanation: "<b>受動態（SVOCの受動態）</b>: call O C → S is called C。「SはCと呼ばれる」。" },
                                { phrase: "ashlar masonry", explanation: "<b>専門用語</b>: 切石積み（整形した石を積む工法）。" },
                                { phrase: "This technique", explanation: "<b>指示語</b>: 前文の「正確に切って組み合わせる方法」を指す。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "Because of this design, when an earthquake occurs, the stones bounce slightly and then fall back into their perfect positions.",
                        translation: "この設計のおかげで、地震が起きると、石はわずかに跳ね上がり、それから元の完璧な位置に戻る。",
                        grammarAnalysis: {
                            mainVerbs: ["bounce", "fall"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Because of this design)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(when [<span class='chunk S2-group'><span class='text'>an earthquake</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>occurs</span><span class='tag'>V'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the stones</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>bounce</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(slightly)</span><span class='tag'>M</span></span> and then <span class='chunk V-group'><span class='text'>fall</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(back into their perfect positions)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(この設計のおかげで)</span>、<span class='t-M'>(〜のとき [<span class='t-S2'>地震が</span> <span class='t-V2'>起こる</span>])</span>、<span class='t-S'>石は</span> <span class='t-V'>跳ねる</span> <span class='t-M'>(わずかに)</span> そして <span class='t-V'>落ちる</span> <span class='t-M'>(戻って彼らの完璧な位置へ)</span>。",
                            naturalTranslation: "この設計のおかげで、地震が起きると、石はわずかに跳ね上がり、それから元の完璧な位置に戻る。",
                            vocabulary: [
                                { word: "bouncing", meaning: "「跳ねる（bounce）」" },
                                { word: "occurs", meaning: "「起こる、発生する」" },
                                { word: "slightly", meaning: "「わずかに、少し」" },
                                { word: "positions", meaning: "「位置」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "when an earthquake occurs", explanation: `<b>時を表す副詞節</b>:
<ul>
<li><b>S'</b>: an earthquake</li>
<li><b>V'</b>: occurs</li>
</ul>
「地震が起きるとき」。` },
                                { phrase: "Because of", explanation: "<b>群前置詞</b>: 「〜のために、〜のおかげで」。" },
                                { phrase: "bounce ... and ... fall", explanation: "<b>並列構造</b>: 動詞bounceとfallが主語the stonesに対応する。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "If the Incas had used rigid cement, the buildings would have collapsed long ago.",
                        translation: "もしインカ人が硬いセメントを使っていたら、建物はずっと昔に崩壊していただろう。",
                        grammarAnalysis: {
                            mainVerbs: ["would have collapsed"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(If [<span class='chunk S2-group'><span class='text'>the Incas</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>had used</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>rigid cement</span><span class='tag'>O'</span></span>])</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the buildings</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>would have collapsed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(long ago)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(もし [<span class='t-S2'>インカ人が</span> <span class='t-V2'>使っていたら</span> <span class='t-O2'>硬いセメントを</span>])</span>、<span class='t-S'>建物は</span> <span class='t-V'>崩壊していただろう</span> <span class='t-M'>(ずっと昔に)</span>。",
                            naturalTranslation: "もしインカ人が硬いセメントを使っていたら、建物はずっと昔に崩壊していただろう。",
                            vocabulary: [
                                { word: "rigid", meaning: "「硬い、柔軟性のない」" },
                                { word: "collapsed", meaning: "「崩壊した」" },
                                { word: "long ago", meaning: "「ずっと前に」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "If ... had used ... would have collapsed", explanation: `<b>仮定法過去完了</b>:
<ul>
<li><b>If節</b>: had used (もし〜していたら：過去の事実への反実仮想)</li>
<li><b>主節</b>: would have collapsed (〜していただろうに)</li>
</ul>
実際はセメントを使わなかったため、崩壊しなかったという意味を含む。` },
                                { phrase: "rigid cement", explanation: "<b>名詞句</b>: 柔軟性のない固定的な結合剤。" },
                                { phrase: "long ago", explanation: "<b>副詞句</b>: ずっと昔。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "This advanced construction method suggests that the Incas understood the geology of their land very well.",
                        translation: "この高度な建設方法は、インカ人が彼らの土地の地質を非常によく理解していたことを示唆している。",
                        grammarAnalysis: {
                            mainVerbs: ["suggests"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This advanced construction method</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suggests</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[that <span class='chunk S2-group'><span class='text'>the Incas</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>understood</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the geology of their land</span><span class='tag'>O'</span></span> (very well)]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>この高度な建設方法は</span> <span class='t-V'>示唆している</span> <span class='t-O'>[こと（<span class='t-S2'>インカ人が</span> <span class='t-V2'>理解していた</span> <span class='t-O2'>自分たちの土地の地質を</span> (非常によく)）]</span>。",
                            naturalTranslation: "この高度な建設方法は、インカ人が彼らの土地の地質を非常によく理解していたことを示唆している。",
                            vocabulary: [
                                { word: "advanced", meaning: "「高度な、進んだ」" },
                                { word: "suggests", meaning: "「示唆する、示す」" },
                                { word: "geology", meaning: "「地質、地質学」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "suggests that ...", explanation: `<b>that節（名詞節）</b>:
<ul>
<li><b>S'</b>: the Incas</li>
<li><b>V'</b>: understood</li>
<li><b>O'</b>: the geology...</li>
</ul>
「〜ということを示唆している」。` },
                                { phrase: "very well", explanation: "<b>副詞句</b>: understoodを修飾。深い理解があったこと。" },
                                { phrase: "This advanced construction method", explanation: "<b>主語</b>: 前述の「ashlar masonry」などの技術のこと。" }
                            ]
                        }
                    }
                ]
            },
            // 第4段落: Hidden and Found
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 18,
                        text: "Unlike many other Inca cities, Machu Picchu was never discovered by the Spanish conquerors who arrived in the 16th century.",
                        translation: "他の多くのインカの都市とは異なり、マチュ・ピチュは16世紀に到着したスペインの征服者たちによって発見されることはなかった。",
                        grammarAnalysis: {
                            mainVerbs: ["was discovered"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Unlike many other Inca cities)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Machu Picchu</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(never)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>discovered</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(by the Spanish conquerors [who <span class='chunk V2-group'><span class='text'>arrived</span><span class='tag'>V'</span></span> (in the 16th century)])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(他の多くのインカの都市とは異なり)</span>、<span class='t-S'>マチュ・ピチュは</span> <span class='t-V'>発見されなかった</span> <span class='t-M'>(スペインの征服者たちによって [彼らは <span class='t-V2'>到着した</span>（16世紀に）])</span>。",
                            naturalTranslation: "他の多くのインカの都市とは異なり、マチュ・ピチュは16世紀に到着したスペインの征服者たちによって発見されることはなかった。",
                            vocabulary: [
                                { word: "Unlike", meaning: "「〜とは異なり」" },
                                { word: "discovered", meaning: "「発見された」" },
                                { word: "conquerors", meaning: "「征服者たち」" },
                                { word: "arrived", meaning: "「到着した」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "who arrived in the 16th century", explanation: `<b>関係代名詞（主格）</b>:
<ul>
<li><b>先行詞</b>: the Spanish conquerors</li>
<li><b>S'</b>: who</li>
<li><b>V'</b>: arrived</li>
</ul>
「16世紀に到着した」征服者たち。` },
                                { phrase: "was never discovered", explanation: "<b>受動態 + 否定</b>: 「決して発見されなかった」。" },
                                { phrase: "Unlike", explanation: "<b>前置詞</b>: 対比を示す。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "It remained hidden in the jungle until an American explorer named Hiram Bingham shared its existence with the world in 1911.",
                        translation: "それは、ハイラム・ビンガムという名のアメリカ人探検家が1911年にその存在を世界と共有するまで、ジャングルの中に隠されたままであった。",
                        grammarAnalysis: {
                            mainVerbs: ["remained"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>remained</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>hidden</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(in the jungle)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(until [<span class='chunk S2-group'><span class='text'>an American explorer (named Hiram Bingham)</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>shared</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>its existence</span><span class='tag'>O'</span></span> (with the world) (in 1911)])</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>ままであった</span> <span class='t-C'>隠された</span> <span class='t-M'>(ジャングルの中で)</span> <span class='t-M'>(〜まで [<span class='t-S2'>アメリカ人探検家が（ハイラム・ビンガムという名の）</span> <span class='t-V2'>共有した</span> <span class='t-O2'>その存在を</span> (世界と) (1911年に)])</span>。",
                            naturalTranslation: "それは、ハイラム・ビンガムという名のアメリカ人探検家が1911年にその存在を世界と共有するまで、ジャングルの中に隠されたままであった。",
                            vocabulary: [
                                { word: "remained", meaning: "「〜のままであった」" },
                                { word: "hidden", meaning: "「隠された」" },
                                { word: "explorer", meaning: "「探検家」" },
                                { word: "existence", meaning: "「存在」" }
                            ],
                            grammarNotes: [
                                {
                                    phrase: "until an American explorer... shared", explanation: `<b>時を表す接続詞until</b>:
<ul>
<li><b>S'</b>: an American explorer (named Hiram Bingham)</li>
<li><b>V'</b>: shared</li>
<li><b>O'</b>: its existence</li>
</ul>
「〜が…するまで（ずっと）」。` },
                                { phrase: "named Hiram Bingham", explanation: "<b>過去分詞句</b>: explorerを修飾。「〜という名前の」。" },
                                { phrase: "remained hidden", explanation: "<b>SVC文型</b>: 「隠された状態のままである」。hiddenは過去分詞の形容詞的用法。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Today, it is a UNESCO World Heritage Site, but its popularity has created problems.",
                        translation: "今日、それはユネスコの世界遺産であるが、その人気は問題を引き起こしている。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "has created"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a UNESCO World Heritage Site</span><span class='tag'>C</span></span>, but <span class='chunk S-group'><span class='text'>its popularity</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has created</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>problems</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(今日)</span>、<span class='t-S'>それは</span> <span class='t-V'>である</span> <span class='t-C'>ユネスコ世界遺産</span>、しかし <span class='t-S'>その人気は</span> <span class='t-V'>引き起こした</span> <span class='t-O'>問題を</span>。",
                            naturalTranslation: "今日、それはユネスコの世界遺産であるが、その人気は問題を引き起こしている。",
                            vocabulary: [
                                { word: "Heritage Site", meaning: "「遺産登録地」" },
                                { word: "popularity", meaning: "「人気」" },
                                { word: "created", meaning: "「生み出した、引き起こした」" }
                            ],
                            grammarNotes: [
                                { phrase: "but", explanation: "<b>等位接続詞</b>: 前半の肯定的な事実と、後半の否定的な事実（問題）を対比させる。" },
                                { phrase: "has created", explanation: "<b>現在完了形</b>: 「（過去から現在までに）引き起こしてしまった」。" },
                                { phrase: "UNESCO World Heritage Site", explanation: "<b>固有名詞</b>: ユネスコ世界遺産。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "The large number of tourists walking on the site causes damage to the ancient stone paths.",
                        translation: "その場所を歩く多数の観光客が、古代の石の道に損傷を与えている。",
                        grammarAnalysis: {
                            mainVerbs: ["causes"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The large number of tourists (walking on the site)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>causes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>damage</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to the ancient stone paths)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>多数の観光客は（その場所を歩いている）</span> <span class='t-V'>引き起こす</span> <span class='t-O'>損傷を</span> <span class='t-M'>(古代の石の道への)</span>。",
                            naturalTranslation: "その場所を歩く多数の観光客が、古代の石の道に損傷を与えている。",
                            vocabulary: [
                                { word: "large number of", meaning: "「多数の」" },
                                { word: "tourists", meaning: "「観光客」" },
                                { word: "causes", meaning: "「引き起こす」" },
                                { word: "damage", meaning: "「損害、ダメージ」" }
                            ],
                            grammarNotes: [
                                { phrase: "The large number of tourists", explanation: "<b>主語</b>: 「多数の観光客」。核となる名詞はnumberなので動詞はcauses（単数対応）となることが多いが、意味上の主語touristsに合わせて複数扱いする場合もある。ここではcausesとなっている。" },
                                { phrase: "walking on the site", explanation: "<b>現在分詞句</b>: touristsを修飾。「その場所を歩いている観光客」。" },
                                { phrase: "damage to", explanation: "<b>前置詞</b>: 「〜への損害」。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "To protect the city for the future, the government has strictly limited the number of daily visitors.",
                        translation: "将来のために都市を保護するため、政府は1日の訪問者数を厳しく制限している。",
                        grammarAnalysis: {
                            mainVerbs: ["has limited"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To protect the city for the future)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the government</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(strictly)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>limited</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the number of daily visitors</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(都市を保護するために将来のために)</span>、<span class='t-S'>政府は</span> <span class='t-V'>厳しく制限した</span> <span class='t-O'>1日の訪問者数を</span>。",
                            naturalTranslation: "将来のために都市を保護するため、政府は1日の訪問者数を厳しく制限している。",
                            vocabulary: [
                                { word: "protect", meaning: "「保護する」" },
                                { word: "strictly", meaning: "「厳しく」" },
                                { word: "limited", meaning: "「制限した」" },
                                { word: "daily", meaning: "「毎日の、1日の」" }
                            ],
                            grammarNotes: [
                                { phrase: "To protect", explanation: "<b>不定詞（副詞的用法・目的）</b>: 「〜するために」。" },
                                { phrase: "has strictly limited", explanation: "<b>現在完了形</b>: 「（現在までに）厳しく制限した」。対策が実施されている状態。" },
                                { phrase: "the number of", explanation: "<b>成句</b>: 「〜の数」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                questionId: 1,
                text: "What made the location of Machu Picchu suitable for a city?",
                choices: [
                    "It was located near the ocean, which made trade with other countries easy.",
                    "It had natural water sources and land that could be used for farming.",
                    "It was surrounded by a thick forest that protected it from wild animals.",
                    "It was built on flat land that was easy to walk on for older people."
                ],
                correctAnswer: 1, // index 1 is choice 2
                hint: "第1段落の\"It had a natural spring...\"と\"...surrounding slopes were perfect for building terraces\"などの記述に着目しましょう。",
                keywords: ["location", "suitable", "water", "farming"],
                choiceAdvice: [
                    "海についての記述はありません。",
                    "正解。「天然の泉（a natural spring）」と「段々畑に適した斜面（perfect for building terraces）」という記述と一致します。",
                    "森や野生動物からの保護についての記述はありません。",
                    "平坦な土地（flat land）ではなく、険しい山の尾根（steep mountain ridge）にあります。"
                ],
                textTranslation: "マチュ・ピチュの場所が都市に適していた理由は何ですか？",
                logic: "第1段落に、マチュ・ピチュには「新鮮な水を供給する天然の泉があった（had a natural spring that provided fresh water）」こと、そして「周囲の斜面は段々畑を作るのに最適だった（surrounding slopes were perfect for building terraces）」ことが書かれています。これらは生活用水の確保と食料生産（農業）が可能であることを意味し、選択肢2の「天然の水源と、農業に使用できる土地があった」という内容と完全に一致します。"
            },
            {
                questionId: 2,
                text: "The Temple of the Sun was designed to help the Inca people",
                choices: [
                    "communicate with their gods using special sound effects.",
                    "store large amounts of food for the winter months.",
                    "know the right time to farm by tracking the sun's position.",
                    "create a safe place to hide during enemy attacks."
                ],
                correctAnswer: 2, // index 2 is choice 3
                hint: "第2段落の\"to track the movement of the sun\"や\"determine the best times for planting and harvesting\"を確認しましょう。",
                keywords: ["Temple of the Sun", "designed", "help", "farm"],
                choiceAdvice: [
                    "音響効果（sound effects）についての記述はありません。",
                    "食料の貯蔵についての記述はこの神殿に関係して述べられていません。",
                    "正解。太陽の動きを追うことで、種まきや収穫の最適な時期（best times for planting and harvesting）を知ることができました。",
                    "敵の攻撃から隠れる場所についての記述はありません。"
                ],
                textTranslation: "太陽の神殿は、インカの人々が何をするのを助けるように設計されましたか？",
                logic: "第2段落に、太陽の神殿は「太陽の動きを追跡するため（to track the movement of the sun）」に建設されたとあります。そして、日光を観察することで「作物の作付けと収穫に最適な時期を決定することができた（could determine the best times for planting and harvesting their crops）」と述べられています。これは選択肢3の「太陽の位置を追跡することで、農業をする適切な時期を知る」ことと同じ意味です。"
            },
            {
                questionId: 3,
                text: "Why did the Incas build their walls without using cement?",
                choices: [
                    "They wanted the stones to be able to move during earthquakes.",
                    "Cement was too expensive and difficult to transport up the mountain.",
                    "They believed that using cement would make the gods angry.",
                    "They did not have enough time to finish the construction properly."
                ],
                correctAnswer: 0, // index 0 is choice 1
                hint: "第3段落の\"earthquake resistance\"や、地震が起きたときの石の動きについての説明を読みましょう。",
                keywords: ["without using cement", "Why", "stones", "move"],
                choiceAdvice: [
                    "正解。セメントを使わないことで、地震の際に石が「わずかに跳ねて元の位置に戻る（bounce slightly and then fall back）」ことができ、崩壊を防ぎます。",
                    "セメントの価格や輸送の難しさについての記述はありません。",
                    "神々の怒りについての記述はありません。",
                    "時間の不足についての記述はありません。"
                ],
                textTranslation: "なぜインカ人はセメントを使わずに壁を作ったのですか？",
                logic: "第3段落で、セメントを使わない「切石積み（ashlar masonry）」により、地震が起きた際に「石がわずかに跳ね上がり、それから元の完璧な位置に戻る（the stones bounce slightly and then fall back）」と説明されています。また、「もし硬いセメントを使っていたら、建物はずっと昔に崩壊していただろう」とも書かれています。つまり、地震の際に石が動けるようにして崩壊を防ぐことが理由であり、選択肢1が正解です。"
            },
            {
                questionId: 4,
                text: "What is one problem that Machu Picchu faces today?",
                choices: [
                    "The Spanish government is trying to claim the land as their own.",
                    "The surrounding jungle is growing too fast and covering the buildings.",
                    "Too many visitors are causing damage to the historic structures.",
                    "Researchers are digging too many holes to find hidden treasures."
                ],
                correctAnswer: 2, // index 2 is choice 3
                hint: "第4段落の後半、\"popularity has created problems\"以降の記述を確認してください。",
                keywords: ["problem", "today", "visitors", "damage"],
                choiceAdvice: [
                    "スペイン政府が土地を主張しているという記述はありません。",
                    "ジャングルが建物を覆っているという記述は、過去（発見される前）の話です。",
                    "正解。「その場所を歩く多数の観光客（large number of tourists walking on the site）」が「古代の石の道に損傷を与えている（causes damage to the ancient stone paths）」と述べられています。",
                    "研究者が穴を掘りすぎているという記述はありません。"
                ],
                textTranslation: "今日、マチュ・ピチュが直面している一つの問題は何ですか？",
                logic: "第4段落の後半に、「その場所を歩く多数の観光客が、古代の石の道に損傷を与えている（The large number of tourists walking on the site causes damage to the ancient stone paths）」と明記されています。これは選択肢3の「多すぎる訪問者が歴史的建造物に損害を与えている」という内容と一致します。"
            },
            {
                questionId: 5,
                text: "Which of the following statements is true?",
                choices: [
                    "Machu Picchu was discovered by Spanish conquerors in the 16th century.",
                    "The terraces at Machu Picchu were used only for decoration.",
                    "Hiram Bingham announced the existence of Machu Picchu to the world.",
                    "The Temple of the Sun was built to track the movement of the moon."
                ],
                correctAnswer: 2, // index 2 is choice 3
                hint: "各選択肢の内容を本文と照らし合わせましょう。特に第4段落の発見に関する記述が重要です。",
                keywords: ["true statement", "Hiram Bingham", "discovered"],
                choiceAdvice: [
                    "第4段落に「スペインの征服者たちによって発見されることはなかった（was never discovered by the Spanish conquerors）」とあるので誤りです。",
                    "第1段落に「食料を育てる（grow enough food）」や「山が崩れるのを防ぐ（prevented the mountain from sliding）」とあり、装飾目的のみではないため誤りです。",
                    "正解。第4段落に「ハイラム・ビンガムという名のアメリカ人探検家が1911年にその存在を世界と共有した（shared its existence with the world）」とあり、これと一致します。",
                    "第2段落に、太陽の動き（movement of the sun）を追うためとあり、月（moon）ではないため誤りです。"
                ],
                textTranslation: "次の記述のうち、正しいものはどれですか？",
                logic: "第4段落に、「ハイラム・ビンガムという名のアメリカ人探検家が1911年にその存在を世界と共有した（shared its existence with the world）」と書かれています。これは選択肢3の「ハイラム・ビンガムがマチュ・ピチュの存在を世界に発表した」と同じ意味ですので、これが正解です。他の選択肢は本文の記述と矛盾しています。"
            }
        ],
        summaryForInstructors: {
            paragraphs: [
                { label: "1. High in the Clouds（第1段落）", text: "マチュ・ピチュは断崖絶壁にありますが、インカ人は水源と農業に適したこの場所を選びました。「段々畑」は食料生産だけでなく、地滑りを防ぐ役割も果たしていました。" },
                { label: "2. The Sun Calendar（第2段落）", text: "インカ人は優れた天文学者でした。「太陽の神殿」の窓は冬至の太陽と一直線になるよう設計されており、農作業の時期を知るための正確なカレンダーとして機能しました。" },
                { label: "3. Dancing Stones（第3段落）", text: "マチュ・ピチュの最大の特徴は「耐震性」です。セメントを使わずに石を精巧に組み合わせることで、地震の揺れを吸収し、崩壊を防ぐ構造になっています。" },
                { label: "4. Hidden and Found（第4段落）", text: "スペインの征服者に見つからなかったため、破壊を免れました。1911年にハイラム・ビンガムによって世界に紹介されましたが、現在は観光客による遺跡の摩耗が問題となり、入場制限が行われています。" }
            ]
        }
    }
];
