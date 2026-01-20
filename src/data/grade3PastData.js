export const grade3PastData = [
    {
        id: "grade-3-past-ann-lowe",
        grade: "3級",
        title: "Ann Lowe",
        subTitle: "2023年度 第1回",
        genre: "歴史 / 伝記",
        isOriginal: false,
        images: {
            content: "https://placehold.co/600x400?text=Ann+Lowe",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Ann Lowe was an African American fashion designer.",
                        translation: "アン・ロウはアフリカ系アメリカ人のファッションデザイナーでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Ann Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an African American fashion designer</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>アン・ロウは</span> <span class='t-V'>でした</span> <span class='t-C'>アフリカ系アメリカ人のファッションデザイナー</span>。",
                            naturalTranslation: "アン・ロウはアフリカ系アメリカ人のファッションデザイナーでした。",
                            vocabulary: [],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 2,
                        text: "She was born in Alabama in the United States around 1898.",
                        translation: "彼女は1898年頃、アメリカのアラバマ州で生まれました。",
                        grammarAnalysis: {
                            mainVerbs: ["was born"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was born</span><span class='tag'>V(受動態)</span></span> <span class='chunk M-group'><span class='text'>(in Alabama)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in the United States)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(around 1898)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>生まれました</span> <span class='t-M'>(アラバマで)</span> <span class='t-M'>(アメリカの)</span> <span class='t-M'>(1898年頃)</span>。",
                            naturalTranslation: "彼女は1898年頃、アメリカのアラバマ州で生まれました。",
                            vocabulary: [
                                { word: "be born", meaning: "「生まれる」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 3,
                        text: "When she was a child, Lowe's mother and grandmother taught her how to make clothes.",
                        translation: "彼女が子供の頃、ロウの母と祖母は彼女に服の作り方を教えました。",
                        grammarAnalysis: {
                            mainVerbs: ["taught"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When she was a child)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Lowe's mother and grandmother</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>taught</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O1</span></span> <span class='chunk O-group'><span class='text'>how to make clothes</span><span class='tag'>O2</span></span>.",
                            translationHtml: "<span class='t-M'>(彼女が子供の頃)</span>、<span class='t-S'>ロウの母と祖母は</span> <span class='t-V'>教えました</span> <span class='t-O'>彼女に</span> <span class='t-O'>服の作り方を</span>。",
                            naturalTranslation: "彼女が子供の頃、ロウの母と祖母は彼女に服の作り方を教えました。",
                            vocabulary: [
                                { word: "taught", meaning: "「教えた」。teachの過去形。" },
                                { word: "clothes", meaning: "「服」。" }
                            ],
                            grammarNotes: [
                                { phrase: "taught her how to", explanation: "<b>teach O1 how to do</b>: 「O1に〜する方法を教える」。第4文型。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "Both her mother and her grandmother had jobs.",
                        translation: "彼女の母と祖母は両方とも仕事を持っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Both her mother and her grandmother</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>jobs</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼女の母と祖母の両方は</span> <span class='t-V'>持っていました</span> <span class='t-O'>仕事を</span>。",
                            naturalTranslation: "彼女の母と祖母は両方とも仕事を持っていました。",
                            vocabulary: [
                                { word: "both A and B", meaning: "「AもBも両方」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 5,
                        text: "They made clothes for rich people in Alabama, and Lowe often helped them with their work.",
                        translation: "彼女たちはアラバマの金持ちのために服を作り、ロウはよく彼女たちの仕事を手伝いました。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "helped"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>clothes</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for rich people in Alabama)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(often)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>helped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with their work)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女たちは</span> <span class='t-V'>作りました</span> <span class='t-O'>服を</span> <span class='t-M'>(アラバマの金持ちのために)</span>、そして <span class='t-S'>ロウは</span> <span class='t-M'>(よく)</span> <span class='t-V'>手伝いました</span> <span class='t-O'>彼女らを</span> <span class='t-M'>(彼女らの仕事で)</span>。",
                            naturalTranslation: "彼女たちはアラバマの金持ちのために服を作り、ロウはよく彼女たちの仕事を手伝いました。",
                            vocabulary: [
                                { word: "help O with ...", meaning: "「Oの...を手伝う」。" }
                            ],
                            grammarNotes: []
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "Lowe's mother died in 1914.",
                        translation: "ロウの母は1914年に亡くなりました。",
                        grammarAnalysis: {
                            mainVerbs: ["died"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Lowe's mother</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>died</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in 1914)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ロウの母は</span> <span class='t-V'>亡くなりました</span> <span class='t-M'>(1914年に)</span>。",
                            naturalTranslation: "ロウの母は1914年に亡くなりました。",
                            vocabulary: [
                                { word: "die", meaning: "「死ぬ」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 7,
                        text: "When she died, Lowe's mother was making some dresses in Alabama.",
                        translation: "彼女が亡くなった時、ロウの母はアラバマでいくつかのドレスを作っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["was making"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When she died)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Lowe's mother</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was making</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some dresses</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in Alabama)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(彼女が亡くなった時)</span>、<span class='t-S'>ロウの母は</span> <span class='t-V'>作っていました</span> <span class='t-O'>いくつかのドレスを</span> <span class='t-M'>(アラバマで)</span>。",
                            naturalTranslation: "彼女が亡くなった時、ロウの母はアラバマでいくつかのドレスを作っていました。",
                            vocabulary: [],
                            grammarNotes: [
                                { phrase: "was making", explanation: "<b>過去進行形</b>: was/were + -ing。「〜していた」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "The dresses weren't finished, so Lowe finished making them.",
                        translation: "そのドレスは完成していなかったので、ロウがそれらを作り終えました。",
                        grammarAnalysis: {
                            mainVerbs: ["weren't", "finished"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The dresses</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>weren't</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>finished</span><span class='tag'>C</span></span>, so <span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>finished</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>making them</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>そのドレスは</span> <span class='t-V'>ありませんでした</span> <span class='t-C'>終わって</span>、だから <span class='t-S'>ロウは</span> <span class='t-V'>終えました</span> <span class='t-O'>それらを作ることを</span>。",
                            naturalTranslation: "そのドレスは完成していなかったので、ロウがそれらを作り終えました。",
                            vocabulary: [
                                { word: "finish -ing", meaning: "「〜し終える」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 9,
                        text: "In 1916, she met a rich woman from Florida in a department store.",
                        translation: "1916年、彼女はデパートでフロリダ出身の金持ちの女性に出会いました。",
                        grammarAnalysis: {
                            mainVerbs: ["met"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1916)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>met</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a rich woman from Florida</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in a department store)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1916年に)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>会いました</span> <span class='t-O'>フロリダ出身の金持ちの女性に</span> <span class='t-M'>(デパートで)</span>。",
                            naturalTranslation: "1916年、彼女はデパートでフロリダ出身の金持ちの女性に出会いました。",
                            vocabulary: [
                                { word: "met", meaning: "「会った」。meetの過去形。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 10,
                        text: "Lowe was wearing clothes that she made, and the woman really liked them.",
                        translation: "ロウは自分が作った服を着ており、その女性はそれらをとても気に入りました。",
                        grammarAnalysis: {
                            mainVerbs: ["was wearing", "liked"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was wearing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>clothes <span class='chunk M-group'><span class='text'>(that she made)</span><span class='tag'>M</span></span></span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>the woman</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(really)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>liked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ロウは</span> <span class='t-V'>着ていました</span> <span class='t-O'>服を <span class='t-M'>(彼女が作った)</span></span>、そして <span class='t-S'>その女性は</span> <span class='t-M'>(本当に)</span> <span class='t-V'>気に入りました</span> <span class='t-O'>それらを</span>。",
                            naturalTranslation: "ロウは自分が作った服を着ており、その女性はそれらをとても気に入りました。",
                            vocabulary: [],
                            grammarNotes: [
                                { phrase: "clothes that she made", explanation: "関係代名詞thatの目的格" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "So, Lowe became a dressmaker for her in Florida.",
                        translation: "そこで、ロウはフロリダで彼女のためのドレス職人になりました。",
                        grammarAnalysis: {
                            mainVerbs: ["became"],
                            structureHtml: "So, <span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a dressmaker</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for her)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in Florida)</span><span class='tag'>M</span></span>.",
                            translationHtml: "そこで、<span class='t-S'>ロウは</span> <span class='t-V'>なりました</span> <span class='t-C'>ドレス職人に</span> <span class='t-M'>(彼女のための)</span> <span class='t-M'>(フロリダで)</span>。",
                            naturalTranslation: "そこで、ロウはフロリダで彼女のためのドレス職人になりました。",
                            vocabulary: [
                                { word: "become", meaning: "「〜になる」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 12,
                        text: "After that, Lowe went to live in New York in 1917.",
                        translation: "その後、ロウは1917年にニューヨークへ住みに行きました。",
                        grammarAnalysis: {
                            mainVerbs: ["went to live"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After that)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>went to live</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in New York)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in 1917)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>ロウは</span> <span class='t-V'>住みに行きました</span> <span class='t-M'>(ニューヨークへ)</span> <span class='t-M'>(1917年に)</span>。",
                            naturalTranslation: "その後、ロウは1917年にニューヨークへ住みに行きました。",
                            vocabulary: [
                                { word: "went to live", meaning: "「住みに行った」。" }
                            ],
                            grammarNotes: []
                        }
                    }
                ]
            },
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "In New York, Lowe went to the S.T. Taylor School of Design.",
                        translation: "ニューヨークで、ロウはS.T.テイラー・デザイン学校に通いました。",
                        grammarAnalysis: {
                            mainVerbs: ["went"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In New York)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>went</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to the S.T. Taylor School of Design)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(ニューヨークで)</span>、<span class='t-S'>ロウは</span> <span class='t-V'>行きました</span> <span class='t-M'>(S.T.テイラー・デザイン学校へ)</span>。",
                            naturalTranslation: "ニューヨークで、ロウはS.T.テイラー・デザイン学校に通いました。",
                            vocabulary: [],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 14,
                        text: "Lowe was the only African American student at the school, and she couldn't join the class with the other students.",
                        translation: "ロウはその学校で唯一のアフリカ系アメリカ人の学生で、他の学生と一緒に授業に参加することができませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "couldn't join"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the only African American student</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(at the school)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>couldn't join</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the class</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with the other students)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ロウは</span> <span class='t-V'>でした</span> <span class='t-C'>唯一のアフリカ系アメリカ人の学生</span> <span class='t-M'>(その学校で)</span>、そして<span class='t-S'>彼女は</span> <span class='t-V'>参加できませんでした</span> <span class='t-O'>授業に</span> <span class='t-M'>(他の学生たちと一緒に)</span>。",
                            naturalTranslation: "ロウはその学校で唯一のアフリカ系アメリカ人の学生で、他の学生と一緒に授業に参加することができませんでした。",
                            vocabulary: [
                                { word: "only", meaning: "「唯一の」。" },
                                { word: "join", meaning: "「参加する」「加わる」。" }
                            ],
                            grammarNotes: [
                                { phrase: "couldn't", explanation: "<b>couldn't</b>: 「できなかった」。could notの短縮形。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "She took classes in a room by herself.",
                        translation: "彼女は自分一人だけの部屋で授業を受けました。",
                        grammarAnalysis: {
                            mainVerbs: ["took"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>classes</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in a room)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(by herself)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>受けました</span> <span class='t-O'>授業を</span> <span class='t-M'>(部屋で)</span> <span class='t-M'>(一人で)</span>。",
                            naturalTranslation: "彼女は自分一人だけの部屋で授業を受けました。",
                            vocabulary: [
                                { word: "by oneself", meaning: "「一人で」「独力で」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 16,
                        text: "She finished studying at the design school in 1919, and she opened her own store in Florida.",
                        translation: "彼女は1919年にデザイン学校での勉強を終え、フロリダに自分の店を開きました。",
                        grammarAnalysis: {
                            mainVerbs: ["finished", "opened"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>finished</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>studying</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at the design school)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in 1919)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>opened</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her own store</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in Florida)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>終えました</span> <span class='t-O'>勉強することを</span> <span class='t-M'>(デザイン学校での)</span> <span class='t-M'>(1919年に)</span>、そして <span class='t-S'>彼女は</span> <span class='t-V'>開きました</span> <span class='t-O'>自分の店を</span> <span class='t-M'>(フロリダに)</span>。",
                            naturalTranslation: "彼女は1919年にデザイン学校での勉強を終え、フロリダに自分の店を開きました。",
                            vocabulary: [
                                { word: "own", meaning: "「自身の」。" }
                            ],
                            grammarNotes: []
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 17,
                        text: "After that, Lowe made dresses for many years.",
                        translation: "その後、ロウは何年もの間ドレスを作りました。",
                        grammarAnalysis: {
                            mainVerbs: ["made"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After that)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>dresses</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for many years)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>ロウは</span> <span class='t-V'>作りました</span> <span class='t-O'>ドレスを</span> <span class='t-M'>(何年もの間)</span>。",
                            naturalTranslation: "その後、ロウは何年もの間ドレスを作りました。",
                            vocabulary: [],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 18,
                        text: "Her dresses were special because they had beautiful flower designs on them.",
                        translation: "彼女のドレスは美しい花のデザインが施されていたため特別でした。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Her dresses</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>special</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(because <span class='chunk S2-group'><span class='text'>they</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>had</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>beautiful flower designs</span><span class='tag'>O'</span></span> <span class='chunk M2-group'><span class='text'>(on them)</span><span class='tag'>M'</span></span>)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女のドレスは</span> <span class='t-V'>でした</span> <span class='t-C'>特別な</span> <span class='t-M'>(なぜなら <span class='t-S2'>それらが</span> <span class='t-V2'>持っていたから</span> <span class='t-O2'>美しい花のデザインを</span> <span class='t-M2'>(それらの上に)</span>)</span>。",
                            naturalTranslation: "彼女のドレスは美しい花のデザインが施されていたため特別でした。",
                            vocabulary: [
                                { word: "special", meaning: "「特別な」。" },
                                { word: "designs", meaning: "「デザイン」。" }
                            ],
                            grammarNotes: [
                                { phrase: "because", explanation: "<b>because</b>: 理由を表す接続詞。「〜なので」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "She made dresses for some rich and famous people, but not many people knew about her work.",
                        translation: "彼女は金持ちや有名人のためにドレスを作りましたが、彼女の仕事について知っている人は多くありませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "knew"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>dresses</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for some rich and famous people)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>not many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>knew</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(about her work)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>作りました</span> <span class='t-O'>ドレスを</span> <span class='t-M'>(金持ちや有名人のために)</span>、しかし <span class='t-S'>多くの人は〜ない</span> <span class='t-V'>知っていました</span> <span class='t-M'>(彼女の仕事について)</span>。",
                            naturalTranslation: "彼女は金持ちや有名人のためにドレスを作りましたが、彼女の仕事について知っている人は多くありませんでした。",
                            vocabulary: [
                                { word: "famous", meaning: "「有名な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "not many people", explanation: "「多くの人は〜ない（＝少数の人しか〜ない）」。部分否定。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "Also, she sometimes didn't get much money for her dresses.",
                        translation: "また、彼女は時々ドレスに対して多くのお金をもらえませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["didn't get"],
                            structureHtml: "Also, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(sometimes)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>didn't get</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>much money</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for her dresses)</span><span class='tag'>M</span></span>.",
                            translationHtml: "また、<span class='t-S'>彼女は</span> <span class='t-M'>(時々)</span> <span class='t-V'>得ませんでした</span> <span class='t-O'>多くのお金を</span> <span class='t-M'>(彼女のドレスに対して)</span>。",
                            naturalTranslation: "また、彼女は時々ドレスに対して多くのお金をもらえませんでした。",
                            vocabulary: [],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 21,
                        text: "Lowe became more famous after she died in 1981.",
                        translation: "ロウは1981年に亡くなった後、より有名になりました。",
                        grammarAnalysis: {
                            mainVerbs: ["became"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Lowe</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>more famous</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(after she died in 1981)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ロウは</span> <span class='t-V'>なりました</span> <span class='t-C'>より有名に</span> <span class='t-M'>(1981年に彼女が亡くなった後)</span>。",
                            naturalTranslation: "ロウは1981年に亡くなった後、より有名になりました。",
                            vocabulary: [],
                            grammarNotes: [
                                { phrase: "became more famous", explanation: "<b>become + 形容詞(比較級)</b>: 「もっと〜になる」。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Many people today know that she was a very good fashion designer and dressmaker.",
                        translation: "今日多くの人々が、彼女が非常に優れたファッションデザイナーでありドレス職人であったことを知っています。",
                        grammarAnalysis: {
                            mainVerbs: ["know", "was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(today)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[that <span class='chunk S2-group'><span class='text'>she</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>was</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>a very good fashion designer and dressmaker</span><span class='tag'>C'</span></span>]</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>多くの人々は</span> <span class='t-M'>(今日)</span> <span class='t-V'>知っています</span> <span class='t-O'>[that <span class='t-S2'>彼女が</span> <span class='t-V2'>であったことを</span> <span class='t-C2'>非常に優れたファッションデザイナーでありドレス職人</span>]</span>。",
                            naturalTranslation: "今日多くの人々が、彼女が非常に優れたファッションデザイナーでありドレス職人であったことを知っています。",
                            vocabulary: [
                                { word: "fashion designer", meaning: "「ファッションデザイナー」。" },
                                { word: "dressmaker", meaning: "「ドレス職人」「仕立屋」。" }
                            ],
                            grammarNotes: [
                                { phrase: "know that ...", explanation: "<b>know that ...</b>: 「〜ということを知っている」。that節が目的語。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "What did Ann Lowe's mother and grandmother do?",
                textTranslation: "アン・ロウの母と祖母は何をしましたか？",
                choices: [
                    { id: 1, text: "They sent Lowe to Florida.", translation: "彼らはロウをフロリダへ送った。", isCorrect: false },
                    { id: 2, text: "They stopped Lowe from going to Alabama.", translation: "彼らはロウがアラバマへ行くのを止めた。", isCorrect: false },
                    { id: 3, text: "They told Lowe to get a job.", translation: "彼らはロウに仕事を得るように言った。", isCorrect: false },
                    { id: 4, text: "They taught Lowe how to make clothes.", translation: "彼らはロウに服の作り方を教えた。", isCorrect: true, highlight: "taught her how to make clothes" }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「taught」（教えた）という単語を探しましょう。母親と祖母が彼女に何をしたか書かれています。",
                    targetSentenceId: 3,
                    highlightWord: "taught her how to make clothes",
                    highlightWordSentenceId: 3
                },
                keywords: ["what", "mother", "grandmother", "do"],
                keywordExplanations: {
                    "mother": "母。",
                    "grandmother": "祖母。"
                },
                keywordMatches: [
                    { sentenceId: 3, text: "Lowe's mother and grandmother taught her how to make clothes", keyword: "mother" }
                ],
                choiceAdvice: "1: フロリダへ送った？ 2: 止めた？ 3: 仕事をしろと言った？ 4: 服の作り方を教えた？",
                logic: [
                    { type: "text", content: "本文第1段落: \"Lowe's mother and grandmother taught her how to make clothes.\"" },
                    { type: "text", content: "結論: 服の作り方を教えた。" },
                    { type: "conclusion", content: "正解: 4" }
                ]
            },
            {
                id: 2,
                text: "When did Lowe go to New York?",
                textTranslation: "ロウはいつニューヨークへ行きましたか？",
                choices: [
                    { id: 1, text: "In 1898.", translation: "1898年。", isCorrect: false },
                    { id: 2, text: "In 1914.", translation: "1914年。", isCorrect: false },
                    { id: 3, text: "In 1917.", translation: "1917年。", isCorrect: true, highlight: "went to live in New York in 1917" },
                    { id: 4, text: "In 1981.", translation: "1981年。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落の最後。「New York」と年号を探します。",
                    targetSentenceId: 12,
                    highlightWord: "went to live in New York in 1917",
                    highlightWordSentenceId: 12
                },
                keywords: ["when", "New York"],
                keywordExplanations: {
                    "when": "いつ。",
                    "New York": "地名。"
                },
                keywordMatches: [
                    { sentenceId: 12, text: "went to live in New York in 1917", keyword: "New York" }
                ],
                choiceAdvice: "1: 1898? 2: 1914? 3: 1917? 4: 1981?",
                logic: [
                    { type: "text", content: "本文第2段落: \"After that, Lowe went to live in New York in 1917.\"" },
                    { type: "text", content: "結論: 1917年。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 3,
                text: "What happened when Lowe went to the S.T. Taylor School of Design?",
                textTranslation: "ロウがS.T.テイラー・デザイン学校へ行った時、何が起きましたか？",
                choices: [
                    { id: 1, text: "She didn't do well in her classes.", translation: "彼女は授業で成績が良くなかった。", isCorrect: false },
                    { id: 2, text: "She couldn't study with the other students.", translation: "彼女は他の生徒と一緒に勉強できなかった。", isCorrect: true, highlight: "couldn't join the class with the other students" },
                    { id: 3, text: "She had a fight with her teacher.", translation: "彼女は先生と喧嘩をした。", isCorrect: false },
                    { id: 4, text: "She met her favorite fashion designer.", translation: "彼女はお気に入りのファッションデザイナーに出会った。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「couldn't」（できなかった）を探します。彼女は「other students」（他の生徒）と一緒に何ができなかったでしょうか。",
                    targetSentenceId: 14,
                    highlightWord: "couldn't join the class with the other students",
                    highlightWordSentenceId: 14
                },
                keywords: ["what", "happened", "school"],
                keywordExplanations: {
                    "happened": "起きた。"
                },
                keywordMatches: [
                    { sentenceId: 14, text: "only African American student ... couldn't join the class", keyword: "school" }
                ],
                choiceAdvice: "1: 成績が悪い？ 2: 一緒に勉強できなかった？ 3: 喧嘩した？ 4: 出会った？",
                logic: [
                    { type: "text", content: "本文第3段落: \"she couldn't join the class with the other students.\"" },
                    { type: "text", content: "結論: 他の生徒と一緒に授業に参加できなかった。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 4,
                text: "Lowe's dresses were special because",
                textTranslation: "ロウのドレスはなぜ特別だったのですか？",
                choices: [
                    { id: 1, text: "they had beautiful flower designs.", translation: "それらは美しい花のデザインがあった。", isCorrect: true, highlight: "had beautiful flower designs" },
                    { id: 2, text: "they had interesting colors.", translation: "それらは面白い色だった。", isCorrect: false },
                    { id: 3, text: "they were made by many people.", translation: "それらは多くの人々によって作られた。", isCorrect: false },
                    { id: 4, text: "they took many hours to make.", translation: "それらは作るのに何時間もかかった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「special because」（〜だから特別）の後に続く理由を探します。",
                    targetSentenceId: 18,
                    highlightWord: "special because they had beautiful flower designs on them",
                    highlightWordSentenceId: 18
                },
                keywords: ["special", "because"],
                keywordExplanations: {
                    "special": "特別な。",
                    "because": "なぜなら。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "Her dresses were special because they had beautiful flower designs", keyword: "special" }
                ],
                choiceAdvice: "1: 花のデザイン？ 2: 色？ 3: 多くの人？ 4: 時間がかかった？",
                logic: [
                    { type: "text", content: "本文第4段落: \"Her dresses were special because they had beautiful flower designs on them.\"" },
                    { type: "text", content: "結論: 美しい花のデザインがあったから。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A popular dress store in New York.", translation: "ニューヨークの人気のドレス店。", isCorrect: false },
                    { id: 2, text: "A woman who was a great dressmaker.", translation: "偉大なドレス職人だった女性。", isCorrect: true, highlight: "very good fashion designer and dressmaker" },
                    { id: 3, text: "A teacher at a fashion school.", translation: "ファッションスクールの先生。", isCorrect: false },
                    { id: 4, text: "A design school in the United States.", translation: "アメリカのデザインスクール。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "タイトル「Ann Lowe」と、最後の文「very good fashion designer and dressmaker」に注目します。",
                    targetSentenceId: 22,
                    highlightWord: "very good fashion designer and dressmaker",
                    highlightWordSentenceId: 22
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 店？ 2: ドレス職人の女性？ 3: 先生？ 4: 学校？",
                logic: [
                    { type: "text", content: "第1文と最終文で、彼女がファッションデザイナー/ドレス職人であったことが強調されている。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Ann Lowe",
            intro: "インスタントカメラの発明者、エドウィン・ランドの伝記です。 (Note: This intro seems copied from previous problem or confused. Ann Lowe is a fashion designer. Adjusting based on content). アフリカ系アメリカ人のファッションデザイナー、アン・ロウの伝記です。",
            points: [
                { label: "1. Introduction (導入)", text: "昔は写真を見るために数日待つ必要がありましたが、ランドの発明により「すぐに (right away)」見られるようになりました。(Note: This is from Edwin Land. Re-reading user input. The user input has mixed content in the summary section. I will use the generated content based on the text for correctness if the user provided summary is clearly wrong). Wait, user input for Summary section 3 says 'Ann Lowe' (Past) then lists Edwin Land summary? No. User input Step 225 Section 3 has headers [Edwin Land] and [Momofuku Ando]. It DOES NOT HAVE [Ann Lowe] summary. Wait. It does not. It seems the user pasted 'Edwin Land' and 'Momofuku Ando' summaries as examples or mistake? I will synthesize a summary for Ann Lowe based on the text to ensure quality.)" }
            ]
        }
    }
];
// Correction: I noticed the user input Step 225 Summary section is actually for Edwin Land and Momofuku Ando. It does NOT contain a summary for Ann Lowe. I must generate a summary for Ann Lowe based on the text.
grade3PastData[0].summaryForInstructors = {
    title: "Ann Lowe",
    intro: "アフリカ系アメリカ人のファッションデザイナー、アン・ロウの伝記です。困難な状況の中で、彼女がどのようにして優れたデザイナーとして成功したかを描いています。",
    points: [
        { label: "1. Background (生い立ち)", text: "アラバマ州で生まれ、母と祖母から服作りを学びました。母の死後、彼女は作りかけのドレスを完成させました。" },
        { label: "2. Career Start (キャリアの始まり)", text: "1916年に彼女の服を気に入った女性と出会い、フロリダでドレス職人になりました。その後ニューヨークでデザインを学びました。" },
        { label: "3. Discrimination (差別と困難)", text: "デザイン学校では人種差別のため、他の生徒と隔離されて一人で勉強しなければなりませんでした。" },
        { label: "4. Recognition (評価)", text: "彼女のドレスは花のデザインで特別でしたが、生前はあまり知られていませんでした。1981年の死後、偉大なデザイナーとして広く知られるようになりました。" }
    ]
};

grade3PastData.push({
    id: "grade-3-past-lilian-bland",
    grade: "3級",
    title: "Lilian Bland",
    subTitle: "2022年度 第3回",
    genre: "歴史 / 伝記",
    isOriginal: false,
    images: {
        content: "https://placehold.co/600x400?text=Lilian+Bland",
        question: "https://placehold.co/600x400?text=Question+Image"
    },
    content: [
        {
            paragraphId: 1,
            sentences: [
                {
                    id: 1,
                    text: "Lilian Bland was born in 1878.",
                    translation: "リリアン・ブランドは1878年に生まれました。",
                    grammarAnalysis: {
                        mainVerbs: ["was born"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Lilian Bland</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was born</span><span class='tag'>V(受動態)</span></span> <span class='chunk M-group'><span class='text'>(in 1878)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>リリアン・ブランドは</span> <span class='t-V'>生まれました</span> <span class='t-M'>(1878年に)</span>。",
                        naturalTranslation: "リリアン・ブランドは1878年に生まれました。",
                        vocabulary: [
                            { word: "be born", meaning: "「生まれる」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 2,
                    text: "She was different from most girls at that time.",
                    translation: "彼女は当時のほとんどの少女とは異なっていました。",
                    grammarAnalysis: {
                        mainVerbs: ["was"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>different</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(from most girls at that time)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>でした</span> <span class='t-C'>異なって</span> <span class='t-M'>(当時のほとんどの少女と)</span>。",
                        naturalTranslation: "彼女は当時のほとんどの少女とは異なっていました。",
                        vocabulary: [
                            { word: "different from", meaning: "「〜と異なる」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 3,
                    text: "Lilian enjoyed hunting, fishing, and riding horses.",
                    translation: "リリアンは狩り、釣り、そして乗馬を楽しみました。",
                    grammarAnalysis: {
                        mainVerbs: ["enjoyed"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Lilian</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>enjoyed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>hunting, fishing, and riding horses</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>リリアンは</span> <span class='t-V'>楽しみました</span> <span class='t-O'>狩り、釣り、そして乗馬を</span>。",
                        naturalTranslation: "リリアンは狩り、釣り、そして乗馬を楽しみました。",
                        vocabulary: [
                            { word: "enjoy -ing", meaning: "「〜することを楽しむ」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 4,
                    text: "She also practiced a martial art and studied art in Paris.",
                    translation: "彼女はまた武術を練習し、パリで芸術を学びました。",
                    grammarAnalysis: {
                        mainVerbs: ["practiced", "studied"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>practiced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a martial art</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>studied</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>art</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in Paris)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>彼女は</span> <span class='t-M'>(また)</span> <span class='t-V'>練習しました</span> <span class='t-O'>武術を</span>、そして <span class='t-V'>学びました</span> <span class='t-O'>芸術を</span> <span class='t-M'>(パリで)</span>。",
                        naturalTranslation: "彼女はまた武術を練習し、パリで芸術を学びました。",
                        vocabulary: [
                            { word: "martial art", meaning: "「武術」「格闘技」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 5,
                    text: "In 1900, she moved to Ireland with her father.",
                    translation: "1900年に、彼女は父親と共にアイルランドへ引っ越しました。",
                    grammarAnalysis: {
                        mainVerbs: ["moved"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In 1900)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>moved</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to Ireland)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(with her father)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(1900年に)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>引っ越しました</span> <span class='t-M'>(アイルランドへ)</span> <span class='t-M'>(父親と一緒に)</span>。",
                        naturalTranslation: "1900年に、彼女は父親と共にアイルランドへ引っ越しました。",
                        vocabulary: [
                            { word: "move to", meaning: "「〜へ引っ越す」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 6,
                    text: "By 1908, she was working for newspapers in London.",
                    translation: "1908年までには、彼女はロンドンで新聞社のために働いていました。",
                    grammarAnalysis: {
                        mainVerbs: ["was working"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(By 1908)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was working</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for newspapers)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in London)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(1908年までには)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>働いていました</span> <span class='t-M'>(新聞社のために)</span> <span class='t-M'>(ロンドンで)</span>。",
                        naturalTranslation: "1908年までには、彼女はロンドンで新聞社のために働いていました。",
                        vocabulary: [
                            { word: "working for", meaning: "「〜のために働く」「〜に勤務する」。" }
                        ],
                        grammarNotes: [
                            { phrase: "By 1908", explanation: "<b>By + 時</b>: 「〜までには」。期限や完了の時期を表す。" }
                        ]
                    }
                }
            ]
        },
        {
            paragraphId: 2,
            sentences: [
                {
                    id: 7,
                    text: "In 1909, Lilian's uncle sent her postcards.",
                    translation: "1909年、リリアンの叔父が彼女に絵葉書を送りました。",
                    grammarAnalysis: {
                        mainVerbs: ["sent"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In 1909)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Lilian's uncle</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>sent</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O1</span></span> <span class='chunk O-group'><span class='text'>postcards</span><span class='tag'>O2</span></span>.",
                        translationHtml: "<span class='t-M'>(1909年に)</span>、<span class='t-S'>リリアンの叔父は</span> <span class='t-V'>送りました</span> <span class='t-O'>彼女に</span> <span class='t-O'>絵葉書を</span>。",
                        naturalTranslation: "1909年、リリアンの叔父が彼女に絵葉書を送りました。",
                        vocabulary: [],
                        grammarNotes: [
                            { phrase: "sent her postcards", explanation: "<b>send O1 O2</b>: 「O1にO2を送る」。第4文型。" }
                        ]
                    }
                },
                {
                    id: 8,
                    text: "One of them had a picture of Louis Blériot on it.",
                    translation: "そのうちの1枚には、ルイ・ブレリオの写真がありました。",
                    grammarAnalysis: {
                        mainVerbs: ["had"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>One of them</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a picture of Louis Blériot</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(on it)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>そのうちの1つは</span> <span class='t-V'>持っていました</span> <span class='t-O'>ルイ・ブレリオの写真を</span> <span class='t-M'>(その上に)</span>。",
                        naturalTranslation: "そのうちの1枚には、ルイ・ブレリオの写真がありました。",
                        vocabulary: [],
                        grammarNotes: []
                    }
                },
                {
                    id: 9,
                    text: "Blériot was a pilot, and he built his own plane.",
                    translation: "ブレリオはパイロットで、自分の飛行機を作りました。",
                    grammarAnalysis: {
                        mainVerbs: ["was", "built"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Blériot</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a pilot</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>built</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>his own plane</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>ブレリオは</span> <span class='t-V'>でした</span> <span class='t-C'>パイロット</span>、そして <span class='t-S'>彼は</span> <span class='t-V'>作りました</span> <span class='t-O'>彼自身の飛行機を</span>。",
                        naturalTranslation: "ブレリオはパイロットで、自分の飛行機を作りました。",
                        vocabulary: [
                            { word: "build", meaning: "「建てる」「作る」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 10,
                    text: "He was the first person to fly a plane across the English Channel.",
                    translation: "彼はイギリス海峡を飛行機で横断した最初の人物でした。",
                    grammarAnalysis: {
                        mainVerbs: ["was"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the first person <span class='chunk M-group'><span class='text'>(to fly a plane across the English Channel)</span><span class='tag'>M</span></span></span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>でした</span> <span class='t-C'>最初の人物 <span class='t-M'>(飛行機を飛ばしてイギリス海峡を渡った)</span></span>。",
                        naturalTranslation: "彼はイギリス海峡を飛行機で横断した最初の人物でした。",
                        vocabulary: [
                            { word: "first person to do", meaning: "「〜した最初の人物」。" }
                        ],
                        grammarNotes: [
                            { phrase: "to fly a plane", explanation: "不定詞の形容詞的用法。" }
                        ]
                    }
                },
                {
                    id: 11,
                    text: "His plane had an accident when it landed, but Blériot wasn't hurt.",
                    translation: "彼の飛行機は着陸時に事故を起こしましたが、ブレリオは怪我をしませんでした。",
                    grammarAnalysis: {
                        mainVerbs: ["had", "wasn't hurt"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>His plane</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an accident</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(when it landed)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>Blériot</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wasn't hurt</span><span class='tag'>V(受動態)</span></span>.",
                        translationHtml: "<span class='t-S'>彼の飛行機は</span> <span class='t-V'>持ちました</span> <span class='t-O'>事故を</span> <span class='t-M'>(それが着陸したとき)</span>、しかし <span class='t-S'>ブレリオは</span> <span class='t-V'>傷つけられませんでした</span>。",
                        naturalTranslation: "彼の飛行機は着陸時に事故を起こしましたが、ブレリオは怪我をしませんでした。",
                        vocabulary: [
                            { word: "accident", meaning: "「事故」。" },
                            { word: "hurt", meaning: "「怪我をさせる(ここでは受動態で怪我をする)」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 12,
                    text: "His story soon became famous.",
                    translation: "彼の話はすぐに有名になりました。",
                    grammarAnalysis: {
                        mainVerbs: ["became"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>His story</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(soon)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>famous</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-S'>彼の話は</span> <span class='t-M'>(すぐに)</span> <span class='t-V'>なりました</span> <span class='t-C'>有名に</span>。",
                        naturalTranslation: "彼の話はすぐに有名になりました。",
                        vocabulary: [
                            { word: "become", meaning: "「〜になる」。" }
                        ],
                        grammarNotes: []
                    }
                }
            ]
        },
        {
            paragraphId: 3,
            sentences: [
                {
                    id: 13,
                    text: "Lilian saw the postcard and became interested in planes.",
                    translation: "リリアンはその絵葉書を見て、飛行機に興味を持つようになりました。",
                    grammarAnalysis: {
                        mainVerbs: ["saw", "became"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Lilian</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>saw</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the postcard</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>became interested</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in planes)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>リリアンは</span> <span class='t-V'>見ました</span> <span class='t-O'>絵葉書を</span>、そして<span class='t-V'>興味を持つようになりました</span> <span class='t-M'>(飛行機に)</span>。",
                        naturalTranslation: "リリアンはその絵葉書を見て、飛行機に興味を持つようになりました。",
                        vocabulary: [
                            { word: "interested in", meaning: "「〜に興味がある」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 14,
                    text: "She decided to design a plane and build it by herself.",
                    translation: "彼女は飛行機を設計し、自分で作ることを決心しました。",
                    grammarAnalysis: {
                        mainVerbs: ["decided"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>decided</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to design a plane and build it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(by herself)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>決めました</span> <span class='t-O'>飛行機を設計し、それを作ることを</span> <span class='t-M'>(独力で)</span>。",
                        naturalTranslation: "彼女は飛行機を設計し、自分で作ることを決心しました。",
                        vocabulary: [
                            { word: "decide to do", meaning: "「〜することを決める」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 15,
                    text: "She used wood and simple things to build the body.",
                    translation: "彼女は胴体を作るために木や単純なものを使いました。",
                    grammarAnalysis: {
                        mainVerbs: ["used"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>wood and simple things</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to build the body)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>使いました</span> <span class='t-O'>木や単純なものを</span> <span class='t-M'>(胴体を作るために)</span>。",
                        naturalTranslation: "彼女は胴体を作るために木や単純なものを使いました。",
                        vocabulary: [
                            { word: "body", meaning: "「機体」「胴体」。" }
                        ],
                        grammarNotes: [
                            { phrase: "to build", explanation: "不定詞の副詞的用法（目的）。" }
                        ]
                    }
                },
                {
                    id: 16,
                    text: "Then, she bought an engine and put it on the plane.",
                    translation: "それから、彼女はエンジンを買い、飛行機に取り付けました。",
                    grammarAnalysis: {
                        mainVerbs: ["bought", "put"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Then)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>bought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an engine</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>put</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(on the plane)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(それから)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>買いました</span> <span class='t-O'>エンジンを</span>、そして <span class='t-V'>置きました</span> <span class='t-O'>それを</span> <span class='t-M'>(飛行機の上に)</span>。",
                        naturalTranslation: "それから、彼女はエンジンを買い、飛行機に取り付けました。",
                        vocabulary: [
                            { word: "put ... on", meaning: "「...を〜に取り付ける」「置く」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 17,
                    text: "It took her one year to make the plane, and she finished it in 1910.",
                    translation: "飛行機を作るのに1年かかり、彼女は1910年にそれを完成させました。",
                    grammarAnalysis: {
                        mainVerbs: ["took", "finished"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O1</span></span> <span class='chunk O-group'><span class='text'>one year</span><span class='tag'>O2</span></span> <span class='chunk S-group'><span class='text'>(to make the plane)</span><span class='tag'>S(真主語)</span></span>, and <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>finished</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in 1910)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>かかりました</span> <span class='t-O'>彼女に</span> <span class='t-O'>1年を</span> <span class='t-S'>(飛行機を作るのに)</span>、そして<span class='t-S'>彼女は</span> <span class='t-V'>終えました</span> <span class='t-O'>それを</span> <span class='t-M'>(1910年に)</span>。",
                        naturalTranslation: "飛行機を作るのに1年かかり、彼女は1910年にそれを完成させました。",
                        vocabulary: [
                            { word: "took", meaning: "「（時間が）かかった」。takeの過去形。" },
                            { word: "finished", meaning: "「終えた」「完成させた」。" }
                        ],
                        grammarNotes: [
                            { phrase: "It took her one year to", explanation: "<b>It takes O1 O2 to do</b>: 「O1が〜するのに(時間O2)がかかる」。" }
                        ]
                    }
                },
                {
                    id: 18,
                    text: "She named the plane \"Mayfly.\"",
                    translation: "彼女はその飛行機を「メイフライ」と名付けました。",
                    grammarAnalysis: {
                        mainVerbs: ["named"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>named</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the plane</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>\"Mayfly\"</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>名付けました</span> <span class='t-O'>その飛行機を</span> <span class='t-C'>「メイフライ」と</span>。",
                        naturalTranslation: "彼女はその飛行機を「メイフライ」と名付けました。",
                        vocabulary: [
                            { word: "name O C", meaning: "「OをCと名付ける」。第5文型。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 19,
                    text: "Then, she flew it for the first time.",
                    translation: "その後、彼女は初めてそれを飛ばしました。",
                    grammarAnalysis: {
                        mainVerbs: ["flew"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Then)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>flew</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for the first time)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>飛ばしました</span> <span class='t-O'>それを</span> <span class='t-M'>(初めて)</span>。",
                        naturalTranslation: "その後、彼女は初めてそれを飛ばしました。",
                        vocabulary: [
                            { word: "fly", meaning: "「飛ばす」。" },
                            { word: "for the first time", meaning: "「初めて」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 20,
                    text: "It stayed 10 meters high in the air for 400 meters.",
                    translation: "それは空中の高さ10メートルの場所を400メートル飛び続けました。",
                    grammarAnalysis: {
                        mainVerbs: ["stayed"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>stayed</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>10 meters high</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(in the air)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(for 400 meters)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>とどまりました</span> <span class='t-C'>10メートルの高さに</span> <span class='t-M'>(空中で)</span> <span class='t-M'>(400メートルの間)</span>。",
                        naturalTranslation: "それは空中の高さ10メートルの場所を400メートル飛び続けました。",
                        vocabulary: [
                            { word: "stay", meaning: "「〜のままである」「とどまる」。" }
                        ],
                        grammarNotes: []
                    }
                }
            ]
        },
        {
            paragraphId: 4,
            sentences: [
                {
                    id: 21,
                    text: "Lilian wanted to build a new plane.",
                    translation: "リリアンは新しい飛行機を作りたいと思いました。",
                    grammarAnalysis: {
                        mainVerbs: ["wanted"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Lilian</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to build a new plane</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>リリアンは</span> <span class='t-V'>欲しました</span> <span class='t-O'>新しい飛行機を作ることを</span>。",
                        naturalTranslation: "リリアンは新しい飛行機を作りたいと思いました。",
                        vocabulary: [
                            { word: "want to do", meaning: "「〜したいと思う」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 22,
                    text: "However, her father thought that flying was too dangerous for his daughter, so she stopped flying.",
                    translation: "しかし、彼女の父は娘にとって飛行は危険すぎると考えたため、彼女は飛ぶのをやめました。",
                    grammarAnalysis: {
                        mainVerbs: ["thought", "was", "stopped"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>her father</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>thought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[that <span class='chunk S2-group'><span class='text'>flying</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>was</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>too dangerous</span><span class='tag'>C'</span></span> <span class='chunk M2-group'><span class='text'>for his daughter</span><span class='tag'>M'</span></span>]</span><span class='tag'>O</span></span>, so <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>stopped flying</span><span class='tag'>V</span></span>.",
                        translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>彼女の父は</span> <span class='t-V'>考えました</span> <span class='t-O'>[that <span class='t-S2'>飛行が</span> <span class='t-V2'>であると</span> <span class='t-C2'>あまりに危険</span> <span class='t-M2'>彼の娘にとって</span>]</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼女は</span> <span class='t-V'>やめました飛行を</span>。",
                        naturalTranslation: "しかし、彼女の父は娘にとって飛行は危険すぎると考えたため、彼女は飛ぶのをやめました。",
                        vocabulary: [
                            { word: "too ...", meaning: "「あまりに〜すぎる」。" },
                            { word: "dangerous", meaning: "「危険な」。" }
                        ],
                        grammarNotes: [
                            { phrase: "so", explanation: "<b>so</b>: 結果を表す接続詞。「だから」「そのため」。" },
                            { phrase: "stopped flying", explanation: "<b>stop -ing</b>: 「〜するのをやめる」。" }
                        ]
                    }
                },
                {
                    id: 23,
                    text: "Then, Lilian got married and moved to Canada.",
                    translation: "その後、リリアンは結婚してカナダへ引っ越しました。",
                    grammarAnalysis: {
                        mainVerbs: ["got married", "moved"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Then)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Lilian</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>got married</span><span class='tag'>V</span></span> and <span class='chunk V-group'><span class='text'>moved</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to Canada)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>リリアンは</span> <span class='t-V'>結婚しました</span> そして <span class='t-V'>引っ越しました</span> <span class='t-M'>(カナダへ)</span>。",
                        naturalTranslation: "その後、リリアンは結婚してカナダへ引っ越しました。",
                        vocabulary: [
                            { word: "get married", meaning: "「結婚する」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 24,
                    text: "In 1935, she returned to England and enjoyed a simple life there until she died in 1971.",
                    translation: "1935年に、彼女はイギリスに戻り、1971年に亡くなるまでそこで質素な生活を楽しみました。",
                    grammarAnalysis: {
                        mainVerbs: ["returned", "enjoyed"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In 1935)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>returned</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to England)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>enjoyed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a simple life</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(there)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(until she died in 1971)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(1935年に)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>戻りました</span> <span class='t-M'>(イギリスへ)</span> そして <span class='t-V'>楽しみました</span> <span class='t-O'>質素な生活を</span> <span class='t-M'>(そこで)</span> <span class='t-M'>(彼女が1971年に亡くなるまで)</span>。",
                        naturalTranslation: "1935年に、彼女はイギリスに戻り、1971年に亡くなるまでそこで質素な生活を楽しみました。",
                        vocabulary: [
                            { word: "return to", meaning: "「〜に戻る」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 25,
                    text: "Today, people remember her because she was the first woman to build and fly her own plane.",
                    translation: "今日、人々は彼女が自分の飛行機を作って飛ばした最初の女性だったため、彼女を覚えています。",
                    grammarAnalysis: {
                        mainVerbs: ["remember", "was"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Today)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>remember</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(because <span class='chunk S2-group'><span class='text'>she</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>was</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>the first woman to build and fly her own plane</span><span class='tag'>C'</span></span>)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(今日)</span>、<span class='t-S'>人々は</span> <span class='t-V'>覚えています</span> <span class='t-O'>彼女を</span> <span class='t-M'>(なぜなら <span class='t-S2'>彼女が</span> <span class='t-V2'>だったから</span> <span class='t-C2'>自分の飛行機を作って飛ばした最初の女性</span>)</span>。",
                        naturalTranslation: "今日、人々は彼女が自分の飛行機を作って飛ばした最初の女性だったため、彼女を覚えています。",
                        vocabulary: [
                            { word: "remember", meaning: "「覚えている」。" },
                            { word: "own", meaning: "「自身の」。" }
                        ],
                        grammarNotes: [
                            { phrase: "first woman to build and fly", explanation: "不定詞の形容詞的用法。" }
                        ]
                    }
                }
            ]
        }
    ],
    questions: [
        {
            id: 1,
            text: "What was Lilian Bland's job in London?",
            textTranslation: "リリアン・ブランドのロンドンでの仕事は何でしたか？",
            choices: [
                { id: 1, text: "She rode horses in races.", translation: "彼女はレースで馬に乗った。", isCorrect: false },
                { id: 2, text: "She was an artist.", translation: "彼女は芸術家だった。", isCorrect: false },
                { id: 3, text: "She taught martial arts.", translation: "彼女は武術を教えた。", isCorrect: false },
                { id: 4, text: "She worked for newspapers.", translation: "彼女は新聞社のために働いた。", isCorrect: true, highlight: "working for newspapers" }
            ],
            hint: {
                paragraphId: 1,
                description: "第1段落の最後。「London」という単語の近くで、彼女が何をしていたか（work...）を探します。",
                targetSentenceId: 6,
                highlightWord: "working for newspapers",
                highlightWordSentenceId: 6
            },
            keywords: ["job", "London"],
            keywordExplanations: {
                "job": "仕事。",
                "London": "ロンドン。"
            },
            keywordMatches: [
                { sentenceId: 6, text: "working for newspapers in London", keyword: "London" }
            ],
            choiceAdvice: "1: 馬に乗った？ 2: 芸術家？ 3: 武術を教えた？ 4: 新聞社で働いた？",
            logic: [
                { type: "text", content: "本文第1段落: \"she was working for newspapers in London.\"" },
                { type: "text", content: "結論: 新聞社のために働いた。" },
                { type: "conclusion", content: "正解: 4" }
            ]
        },
        {
            id: 2,
            text: "How did Lilian get interested in planes?",
            textTranslation: "どのようにしてリリアンは飛行機に興味を持ちましたか？",
            choices: [
                { id: 1, text: "She read a story in the newspaper.", translation: "彼女は新聞で記事を読んだ。", isCorrect: false },
                { id: 2, text: "She became friends with a pilot.", translation: "彼女はパイロットと友達になった。", isCorrect: false },
                { id: 3, text: "She got a postcard of a famous pilot.", translation: "彼女は有名なパイロットの絵葉書をもらった。", isCorrect: true, highlight: "One of them had a picture of Louis Blériot" },
                { id: 4, text: "She met Louis Blériot in Paris.", translation: "彼女はパリでルイ・ブレリオに会った。", isCorrect: false }
            ],
            hint: {
                paragraphId: 2,
                description: "第2段落から第3段落の初め。「postcard」と、誰から何をもらったかに注目します。",
                targetSentenceId: 13,
                highlightWord: "saw the postcard and became interested in planes",
                highlightWordSentenceId: 13
            },
            keywords: ["how", "interested", "planes"],
            keywordExplanations: {
                "how": "どのように。",
                "interested": "興味を持った。"
            },
            keywordMatches: [
                { sentenceId: 13, text: "saw the postcard and became interested in planes", keyword: "interested" }
            ],
            choiceAdvice: "1: 新聞？ 2: 友達に？ 3: 絵葉書をもらった？ 4: 会った？",
            logic: [
                { type: "text", content: "第2段落: \"uncle sent her postcards. One of them had a picture of Louis Blériot\"" },
                { type: "text", content: "第3段落: \"Lilian saw the postcard and became interested in planes.\"" },
                { type: "text", content: "結論: パイロット（ブレリオ）の写真がある絵葉書をもらったから。" },
                { type: "conclusion", content: "正解: 3" }
            ]
        },
        {
            id: 3,
            text: "Lilian finished making the plane named \"Mayfly\" in",
            textTranslation: "リリアンが「メイフライ」という名前の飛行機を作り終えたのは〜です",
            choices: [
                { id: 1, text: "1909.", translation: "1909年。", isCorrect: false },
                { id: 2, text: "1910.", translation: "1910年。", isCorrect: true, highlight: "finished it in 1910" },
                { id: 3, text: "1935.", translation: "1935年。", isCorrect: false },
                { id: 4, text: "1971.", translation: "1971年。", isCorrect: false }
            ],
            hint: {
                paragraphId: 3,
                description: "第3段落の中程。「finished」（終えた）と年号を探します。",
                targetSentenceId: 17,
                highlightWord: "finished it in 1910",
                highlightWordSentenceId: 17
            },
            keywords: ["finished", "Mayfly", "in"],
            keywordExplanations: {
                "finished": "終えた。",
                "in": "（年）に。"
            },
            keywordMatches: [
                { sentenceId: 17, text: "finished it in 1910", keyword: "in" }
            ],
            choiceAdvice: "1: 1909? 2: 1910? 3: 1935? 4: 1971?",
            logic: [
                { type: "text", content: "本文第3段落: \"she finished it in 1910.\"" },
                { type: "text", content: "結論: 1910年。" },
                { type: "conclusion", content: "正解: 2" }
            ]
        },
        {
            id: 4,
            text: "Why did Lilian stop flying?",
            textTranslation: "なぜリリアンは飛ぶのをやめたのですか？",
            choices: [
                { id: 1, text: "Her father wanted her to stop.", translation: "彼女の父が彼女にやめてほしかった。", isCorrect: true, highlight: "her father thought that flying was too dangerous" },
                { id: 2, text: "She wanted to get married.", translation: "彼女は結婚したかった。", isCorrect: false },
                { id: 3, text: "Her uncle said it was dangerous.", translation: "彼女の叔父が危険だと言った。", isCorrect: false },
                { id: 4, text: "She found a new hobby.", translation: "彼女は新しい趣味を見つけた。", isCorrect: false }
            ],
            hint: {
                paragraphId: 4,
                description: "第4段落。「stopped flying」（飛ぶのをやめた）理由（soの前）を見ます。誰が何を考えたでしょうか。",
                targetSentenceId: 22,
                highlightWord: "her father thought that flying was too dangerous",
                highlightWordSentenceId: 22
            },
            keywords: ["why", "stop", "flying"],
            keywordExplanations: {
                "why": "なぜ。",
                "stop": "やめる。"
            },
            keywordMatches: [
                { sentenceId: 22, text: "father thought ... too dangerous ... so she stopped", keyword: "stop" }
            ],
            choiceAdvice: "1: 父が望んだ？ 2: 結婚したかった？ 3: 叔父が言った？ 4: 趣味？",
            logic: [
                { type: "text", content: "本文第4段落: \"her father thought that flying was too dangerous for his daughter, so she stopped flying.\"" },
                { type: "text", content: "結論: 父が危険だと考えた（やめるように仕向けた）から。" },
                { type: "conclusion", content: "正解: 1" }
            ]
        },
        {
            id: 5,
            text: "What is this story about?",
            textTranslation: "この物語は何についてですか？",
            choices: [
                { id: 1, text: "The first woman to make and fly her own plane.", translation: "自分の飛行機を作って飛ばした最初の女性。", isCorrect: true, highlight: "first woman to build and fly her own plane" },
                { id: 2, text: "A famous plane company in England.", translation: "イギリスの有名な飛行機会社。", isCorrect: false },
                { id: 3, text: "A school for pilots in Canada.", translation: "カナダのパイロット学校。", isCorrect: false },
                { id: 4, text: "How to build plane engines.", translation: "飛行機エンジンの作り方。", isCorrect: false }
            ],
            hint: {
                paragraphId: null,
                description: "最後の文「Today, people remember her...」の理由に注目します。",
                targetSentenceId: 25,
                highlightWord: "first woman to build and fly her own plane",
                highlightWordSentenceId: 25
            },
            keywords: ["about"],
            keywordExplanations: {
                "about": "〜について。"
            },
            keywordMatches: [],
            choiceAdvice: "1: 最初の女性？ 2: 会社？ 3: 学校？ 4: 作り方？",
            logic: [
                { type: "text", content: "最終文: \"she was the first woman to build and fly her own plane.\"" },
                { type: "conclusion", content: "正解: 1" }
            ]
        }
    ],
    summaryForInstructors: {
        title: "Lilian Bland",
        intro: "世界で初めて自分の飛行機を設計・製作し、飛行させた女性、リリアン・ブランドの伝記です。",
        points: [
            { label: "1. Background (生い立ち)", text: "1878年生まれ。当時の一般的な女性とは異なり、狩りや釣り、武術などを楽しむ活発な女性でした。" },
            { label: "2. Trigger (きっかけ)", text: "1909年、叔父から送られた絵葉書でパイロットのルイ・ブレリオを知り、飛行機に興味を持ちました。" },
            { label: "3. Achievement (偉業)", text: "1910年、自作の飛行機「メイフライ」を完成させ、初飛行に成功しました。作るのに1年かかりました。" },
            { label: "4. Conclusion (結末)", text: "危険を心配した父の意向で飛行をやめ、結婚してカナダへ移住しました。今日では自作機で飛んだ最初の女性として知られています。" }
        ]
    }
});

grade3PastData.push({
    id: "grade-3-past-challenger-deep",
    grade: "3級",
    title: "The Challenger Deep",
    subTitle: "2022年度 第2回",
    genre: "自然 / 地理",
    isOriginal: false,
    images: {
        content: "https://placehold.co/600x400?text=The+Challenger+Deep",
        question: "https://placehold.co/600x400?text=Question+Image"
    },
    content: [
        {
            paragraphId: 1,
            sentences: [
                {
                    id: 1,
                    text: "Most people know the name of the highest place in the world.",
                    translation: "ほとんどの人は、世界で一番高い場所の名前を知っています。",
                    grammarAnalysis: {
                        mainVerbs: ["know"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Most people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the name of the highest place in the world</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>ほとんどの人は</span> <span class='t-V'>知っています</span> <span class='t-O'>世界で一番高い場所の名前を</span>。",
                        naturalTranslation: "ほとんどの人は、世界で一番高い場所の名前を知っています。",
                        vocabulary: [
                            { word: "most", meaning: "「たいていの」「大部分の」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 2,
                    text: "It is Mount Everest, and it is a mountain between Nepal and Tibet in Asia.",
                    translation: "それはエベレスト山で、アジアのネパールとチベットの間にある山です。",
                    grammarAnalysis: {
                        mainVerbs: ["is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>Mount Everest</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a mountain <span class='chunk M-group'><span class='text'>(between Nepal and Tibet in Asia)</span><span class='tag'>M</span></span></span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>エベレスト山</span>、そして <span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>山 <span class='t-M'>(アジアのネパールとチベットの間にある)</span></span>。",
                        naturalTranslation: "それはエベレスト山で、アジアのネパールとチベットの間にある山です。",
                        vocabulary: [
                            { word: "between A and B", meaning: "「AとBの間に」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 3,
                    text: "But not many people know the lowest place in the world.",
                    translation: "しかし、世界で一番低い場所を知っている人は多くありません。",
                    grammarAnalysis: {
                        mainVerbs: ["know"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(But)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>not many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the lowest place in the world</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-M'>(しかし)</span> <span class='t-S'>多くない人々が（多くの人は〜ない）</span> <span class='t-V'>知っています</span> <span class='t-O'>世界で一番低い場所を</span>。",
                        naturalTranslation: "しかし、世界で一番低い場所を知っている人は多くありません。",
                        vocabulary: [
                            { word: "lowest", meaning: "「最も低い」。lowの最上級。" }
                        ],
                        grammarNotes: [
                            { phrase: "not many people", explanation: "「あまり多くの人は〜ない」（部分否定）。" }
                        ]
                    }
                },
                {
                    id: 4,
                    text: "It is called the Challenger Deep, and it is at the bottom of the Pacific Ocean.",
                    translation: "それはチャレンジャー海淵と呼ばれ、太平洋の底にあります。",
                    grammarAnalysis: {
                        mainVerbs: ["is called", "is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V(受動態)</span></span> <span class='chunk C-group'><span class='text'>the Challenger Deep</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(at the bottom of the Pacific Ocean)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>チャレンジャー海淵と</span>、そして <span class='t-S'>それは</span> <span class='t-V'>あります</span> <span class='t-M'>(太平洋の底に)</span>。",
                        naturalTranslation: "それはチャレンジャー海淵と呼ばれ、太平洋の底にあります。",
                        vocabulary: [
                            { word: "be called", meaning: "「〜と呼ばれる」。" },
                            { word: "bottom", meaning: "「底」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 5,
                    text: "The Challenger Deep is about 10,984 meters deep in the ocean.",
                    translation: "チャレンジャー海淵は、海の中で約10,984メートルの深さがあります。",
                    grammarAnalysis: {
                        mainVerbs: ["is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>The Challenger Deep</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>about 10,984 meters deep</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(in the ocean)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>チャレンジャー海淵は</span> <span class='t-V'>です</span> <span class='t-C'>約10,984メートルの深さ</span> <span class='t-M'>(海の中で)</span>。",
                        naturalTranslation: "チャレンジャー海淵は、海の中で約10,984メートルの深さがあります。",
                        vocabulary: [
                            { word: "deep", meaning: "「深さがある」。数値 + deepで「深さ〜」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 6,
                    text: "It is to the south of Japan in a part of the Pacific Ocean called the Mariana Trench.",
                    translation: "それは日本の南、マリアナ海溝と呼ばれる太平洋の一部にあります。",
                    grammarAnalysis: {
                        mainVerbs: ["is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to the south of Japan)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in a part of the Pacific Ocean <span class='chunk M-group'><span class='text'>(called the Mariana Trench)</span><span class='tag'>M</span></span>)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>あります</span> <span class='t-M'>(日本の南に)</span> <span class='t-M'>(太平洋の一部に <span class='t-M'>(マリアナ海溝と呼ばれる)</span>)</span>。",
                        naturalTranslation: "それは日本の南、マリアナ海溝と呼ばれる太平洋の一部にあります。",
                        vocabulary: [
                            { word: "south", meaning: "「南」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 7,
                    text: "This part of the ocean is about 2,550 kilometers long and 69 kilometers wide.",
                    translation: "海(海溝)のこの部分は、長さが約2,550キロメートル、幅が69キロメートルあります。",
                    grammarAnalysis: {
                        mainVerbs: ["is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>This part of the ocean</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>about 2,550 kilometers long and 69 kilometers wide</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-S'>海のこの部分は</span> <span class='t-V'>です</span> <span class='t-C'>約2,550キロメートルの長さで、69キロメートルの幅</span>。",
                        naturalTranslation: "海(海溝)のこの部分は、長さが約2,550キロメートル、幅が69キロメートルあります。",
                        vocabulary: [
                            { word: "wide", meaning: "「幅のある」。〜kilometers wideで「幅〜キロメートル」。" }
                        ],
                        grammarNotes: [
                            { phrase: "X meters long", explanation: "「長さがXメートル」。" }
                        ]
                    }
                },
                {
                    id: 8,
                    text: "The Challenger Deep is at the end of the Mariana Trench, near an island called Guam.",
                    translation: "チャレンジャー海淵はマリアナ海溝の端、グアムと呼ばれる島の近くにあります。",
                    grammarAnalysis: {
                        mainVerbs: ["is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>The Challenger Deep</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(at the end of the Mariana Trench)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(near an island <span class='chunk M-group'><span class='text'>(called Guam)</span><span class='tag'>M</span></span>)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>チャレンジャー海淵は</span> <span class='t-V'>あります</span> <span class='t-M'>(マリアナ海溝の端に)</span>、<span class='t-M'>(島に近い <span class='t-M'>(グアムと呼ばれる)</span>)</span>。",
                        naturalTranslation: "チャレンジャー海淵はマリアナ海溝の端、グアムと呼ばれる島の近くにあります。",
                        vocabulary: [
                            { word: "end", meaning: "「端」「終わり」。" },
                            { word: "near", meaning: "「〜の近くに」。" }
                        ],
                        grammarNotes: []
                    }
                }
            ]
        },
        {
            paragraphId: 2,
            sentences: [
                {
                    id: 9,
                    text: "Scientists don't know much about the Challenger Deep.",
                    translation: "科学者たちは、チャレンジャー海淵についてあまり多くのことを知りません。",
                    grammarAnalysis: {
                        mainVerbs: ["don't know"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>don't know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>much</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(about the Challenger Deep)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>科学者たちは</span> <span class='t-V'>知りません</span> <span class='t-O'>多くを</span> <span class='t-M'>(チャレンジャー海淵について)</span>。",
                        naturalTranslation: "科学者たちは、チャレンジャー海淵についてあまり多くのことを知りません。",
                        vocabulary: [
                            { word: "scientist", meaning: "「科学者」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 10,
                    text: "It isn't safe to go there because the water pressure is too high for most submarines.",
                    translation: "ほとんどの潜水艦にとって水圧が高すぎるため、そこへ行くのは安全ではありません。",
                    grammarAnalysis: {
                        mainVerbs: ["isn't", "is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S(仮主語)</span></span> <span class='chunk V-group'><span class='text'>isn't</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>safe</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>(to go there)</span><span class='tag'>S(真主語)</span></span> <span class='chunk M-group'><span class='text'>(because <span class='chunk S2-group'><span class='text'>the water pressure</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>too high</span><span class='tag'>C'</span></span> <span class='chunk M2-group'><span class='text'>for most submarines</span><span class='tag'>M'</span></span>)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>ではありません</span> <span class='t-C'>安全</span> <span class='t-S'>(そこへ行くことは)</span> <span class='t-M'>(なぜなら <span class='t-S2'>水圧が</span> <span class='t-V2'>であるから</span> <span class='t-C2'>高すぎる</span> <span class='t-M2'>ほとんどの潜水艦にとって</span>)</span>。",
                        naturalTranslation: "ほとんどの潜水艦にとって水圧が高すぎるため、そこへ行くのは安全ではありません。",
                        vocabulary: [
                            { word: "safe", meaning: "「安全な」。" },
                            { word: "water pressure", meaning: "「水圧」。" },
                            { word: "submarine", meaning: "「潜水艦」。" }
                        ],
                        grammarNotes: [
                            { phrase: "isn't safe to go", explanation: "<b>It is ... to do</b>: 「〜するのは……だ」。" },
                            { phrase: "because", explanation: "<b>because</b>: 理由を表す接続詞。「〜なので」。" }
                        ]
                    }
                },
                {
                    id: 11,
                    text: "In the past, scientists thought that fish and other animals couldn't live in such a place.",
                    translation: "過去には、科学者たちは魚や他の動物はそのような場所では生きられないと考えていました。",
                    grammarAnalysis: {
                        mainVerbs: ["thought"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In the past)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>thought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[that <span class='chunk S2-group'><span class='text'>fish and other animals</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>couldn't live</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>(in such a place)</span><span class='tag'>M'</span></span>]</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-M'>(過去には)</span>、<span class='t-S'>科学者たちは</span> <span class='t-V'>考えました</span> <span class='t-O'>[that <span class='t-S2'>魚や他の動物が</span> <span class='t-V2'>生きられないと</span> <span class='t-M2'>(そのような場所で)</span>]</span>。",
                        naturalTranslation: "過去には、科学者たちは魚や他の動物はそのような場所では生きられないと考えていました。",
                        vocabulary: [
                            { word: "in the past", meaning: "「過去に」「昔は」。" },
                            { word: "such", meaning: "「そのような」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 12,
                    text: "Also, there is no light from the sun, and the Challenger Deep is very cold.",
                    translation: "また、太陽からの光はなく、チャレンジャー海淵はとても寒いです。",
                    grammarAnalysis: {
                        mainVerbs: ["is", "is"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>no light</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(from the sun)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>the Challenger Deep</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very cold</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-M'>(また)</span>、<span class='t-V'>ありません（あります・ない）</span> <span class='t-S'>光が</span> <span class='t-M'>(太陽からの)</span>、そして <span class='t-S'>チャレンジャー海淵は</span> <span class='t-V'>です</span> <span class='t-C'>とても寒い</span>。",
                        naturalTranslation: "また、太陽からの光はなく、チャレンジャー海淵はとても寒いです。",
                        vocabulary: [],
                        grammarNotes: [
                            { phrase: "there is", explanation: "<b>There is/are S</b>: 「Sがある/いる」。" }
                        ]
                    }
                },
                {
                    id: 13,
                    text: "It is usually between 1°C and 4°C.",
                    translation: "それはたいてい1℃から4℃の間です。",
                    grammarAnalysis: {
                        mainVerbs: ["is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>between 1°C and 4°C</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-M'>(たいてい)</span> <span class='t-C'>1℃から4℃の間</span>。",
                        naturalTranslation: "それはたいてい1℃から4℃の間です。",
                        vocabulary: [
                            { word: "usually", meaning: "「たいてい」「普通は」。" }
                        ],
                        grammarNotes: []
                    }
                }
            ]
        },
        {
            paragraphId: 3,
            sentences: [
                {
                    id: 14,
                    text: "In 1960, two people traveled to the Challenger Deep for the first time.",
                    translation: "1960年に、2人の人物が初めてチャレンジャー海淵へ行きました（旅しました）。",
                    grammarAnalysis: {
                        mainVerbs: ["traveled"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In 1960)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>two people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>traveled</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to the Challenger Deep)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(for the first time)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(1960年に)</span>、<span class='t-S'>2人の人物が</span> <span class='t-V'>旅しました</span> <span class='t-M'>(チャレンジャー海淵へ)</span> <span class='t-M'>(初めて)</span>。",
                        naturalTranslation: "1960年に、2人の人物が初めてチャレンジャー海淵へ行きました（旅しました）。",
                        vocabulary: [
                            { word: "traveled", meaning: "「旅した」「行った」。" }
                        ],
                        grammarNotes: [
                            { phrase: "for the first time", explanation: "「初めて」。" }
                        ]
                    }
                },
                {
                    id: 15,
                    text: "They went there in a special submarine.",
                    translation: "彼らは特別な潜水艦でそこへ行きました。",
                    grammarAnalysis: {
                        mainVerbs: ["went"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>went</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(there)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in a special submarine)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>行きました</span> <span class='t-M'>(そこへ)</span> <span class='t-M'>(特別な潜水艦で)</span>。",
                        naturalTranslation: "彼らは特別な潜水艦でそこへ行きました。",
                        vocabulary: [
                            { word: "special", meaning: "「特別な」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 16,
                    text: "This submarine could move in areas with high water pressure.",
                    translation: "この潜水艦は、高い水圧のある場所でも動くことができました。",
                    grammarAnalysis: {
                        mainVerbs: ["could move"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>This submarine</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could move</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in areas <span class='chunk M-group'><span class='text'>(with high water pressure)</span><span class='tag'>M</span></span>)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>この潜水艦は</span> <span class='t-V'>動くことができました</span> <span class='t-M'>(場所で <span class='t-M'>(高い水圧のある)</span>)</span>。",
                        naturalTranslation: "この潜水艦は、高い水圧のある場所でも動くことができました。",
                        vocabulary: [
                            { word: "area", meaning: "「地域」「場所」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 17,
                    text: "It took the people five hours to get to the bottom of the ocean, but they could only stay there for about 20 minutes.",
                    translation: "人々が海の底に着くまでに5時間かかりましたが、彼らはそこに約20分しか滞在できませんでした。",
                    grammarAnalysis: {
                        mainVerbs: ["took", "could stay"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the people</span><span class='tag'>O1</span></span> <span class='chunk O-group'><span class='text'>five hours</span><span class='tag'>O2</span></span> <span class='chunk S-group'><span class='text'>(to get to the bottom of the ocean)</span><span class='tag'>S(真主語)</span></span>, but <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could <span class='chunk M-group'><span class='text'>(only)</span><span class='tag'>M</span></span> stay</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(there)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(for about 20 minutes)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>かかりました</span> <span class='t-O'>その人々に</span> <span class='t-O'>5時間を</span> <span class='t-S'>(海の底に着くのに)</span>、しかし<span class='t-S'>彼らは</span> <span class='t-V'>滞在できました</span> <span class='t-M'>(そこへ)</span> <span class='t-M'>(約20分の間だけ)</span>。",
                        naturalTranslation: "人々が海の底に着くまでに5時間かかりましたが、彼らはそこに約20分しか滞在できませんでした。",
                        vocabulary: [
                            { word: "get to", meaning: "「〜に到着する」。" }
                        ],
                        grammarNotes: [
                            { phrase: "took ... to get", explanation: "<b>It takes O1 O2 to do</b>: 「O1が〜するのに(時間O2)がかかる」。" }
                        ]
                    }
                },
                {
                    id: 18,
                    text: "At that time, they saw two kinds of sea animals.",
                    translation: "その時、彼らは2種類の海の動物を見ました。",
                    grammarAnalysis: {
                        mainVerbs: ["saw"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(At that time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>saw</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>two kinds of sea animals</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-M'>(その時)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>見ました</span> <span class='t-O'>2種類の海の動物を</span>。",
                        naturalTranslation: "その時、彼らは2種類の海の動物を見ました。",
                        vocabulary: [
                            { word: "kind of", meaning: "「〜の種類」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 19,
                    text: "Now, scientists know that animals can live in such deep places.",
                    translation: "今では、科学者たちは動物がそのような深い場所に住めることを知っています。",
                    grammarAnalysis: {
                        mainVerbs: ["know"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Now)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>[that <span class='chunk S2-group'><span class='text'>animals</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>can live</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>(in such deep places)</span><span class='tag'>M'</span></span>]</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-M'>(今では)</span>、<span class='t-S'>科学者たちは</span> <span class='t-V'>知っています</span> <span class='t-O'>[that <span class='t-S2'>動物が</span> <span class='t-V2'>生きられることを</span> <span class='t-M2'>(そのような深い場所で)</span>]</span>。",
                        naturalTranslation: "今では、科学者たちは動物がそのような深い場所に住めることを知っています。",
                        vocabulary: [],
                        grammarNotes: []
                    }
                }
            ]
        }
    ],
    questions: [
        {
            id: 1,
            text: "Where is the Mariana Trench?",
            textTranslation: "マリアナ海溝はどこにありますか？",
            choices: [
                { id: 1, text: "In the Pacific Ocean.", translation: "太平洋にある。", isCorrect: true, highlight: "in a part of the Pacific Ocean" },
                { id: 2, text: "On the island of Guam.", translation: "グアム島にある。", isCorrect: false },
                { id: 3, text: "Between Nepal and Tibet.", translation: "ネパールとチベットの間にある。", isCorrect: false },
                { id: 4, text: "At the bottom of a lake in Japan.", translation: "日本の湖の底にある。", isCorrect: false }
            ],
            hint: {
                paragraphId: 1,
                description: "第1段落の真ん中あたり。「Mariana Trench」という言葉の近くを見ます。",
                targetSentenceId: 6,
                highlightWord: "in a part of the Pacific Ocean called the Mariana Trench",
                highlightWordSentenceId: 6
            },
            keywords: ["where", "Mariana Trench"],
            keywordExplanations: {
                "where": "どこ。",
                "Mariana Trench": "マリアナ海溝。"
            },
            keywordMatches: [
                { sentenceId: 6, text: "in a part of the Pacific Ocean called the Mariana Trench", keyword: "Mariana Trench" }
            ],
            choiceAdvice: "1: 太平洋？ 2: グアム？ 3: ネパールとチベット？ 4: 湖？",
            logic: [
                { type: "text", content: "本文第1段落: \"It is ... in a part of the Pacific Ocean called the Mariana Trench.\"" },
                { type: "text", content: "結論: 太平洋の一部。" },
                { type: "conclusion", content: "正解: 1" }
            ]
        },
        {
            id: 2,
            text: "How wide is the Mariana Trench?",
            textTranslation: "マリアナ海溝の幅はどれくらいですか？",
            choices: [
                { id: 1, text: "About 2,550 meters.", translation: "約2,550メートル。", isCorrect: false },
                { id: 2, text: "About 10,984 meters.", translation: "約10,984メートル。", isCorrect: false },
                { id: 3, text: "About 20 kilometers.", translation: "約20キロメートル。", isCorrect: false },
                { id: 4, text: "About 69 kilometers.", translation: "約69キロメートル。", isCorrect: true, highlight: "69 kilometers wide" }
            ],
            hint: {
                paragraphId: 1,
                description: "第1段落の終わり近く。「wide」（幅）という単語の前の数字を探します。",
                targetSentenceId: 7,
                highlightWord: "69 kilometers wide",
                highlightWordSentenceId: 7
            },
            keywords: ["how", "wide"],
            keywordExplanations: {
                "wide": "幅が広い。数値 + wideで「幅〜」。"
            },
            keywordMatches: [
                { sentenceId: 7, text: "69 kilometers wide", keyword: "wide" }
            ],
            choiceAdvice: "1: 2,550? 2: 10,984? 3: 20? 4: 69?",
            logic: [
                { type: "text", content: "本文第1段落: \"This part of the ocean is about 2,550 kilometers long and 69 kilometers wide.\"" },
                { type: "text", content: "結論: 幅（wide）は69キロメートル。" },
                { type: "conclusion", content: "正解: 4" }
            ]
        },
        {
            id: 3,
            text: "Why is the Challenger Deep dangerous for people?",
            textTranslation: "なぜチャレンジャー海淵は人間にとって危険なのですか？",
            choices: [
                { id: 1, text: "The water pressure is very high.", translation: "水圧が非常に高い。", isCorrect: true, highlight: "water pressure is too high" },
                { id: 2, text: "Dangerous animals and fish live there.", translation: "危険な動物や魚が住んでいる。", isCorrect: false },
                { id: 3, text: "The lights are too bright for their eyes.", translation: "光が目に眩しすぎる。", isCorrect: false },
                { id: 4, text: "The water is too hot for them.", translation: "水が彼らにとって熱すぎる。", isCorrect: false }
            ],
            hint: {
                paragraphId: 2,
                description: "第2段落。「safe」（安全）ではない理由（becauseの後）を探します。",
                targetSentenceId: 10,
                highlightWord: "water pressure is too high",
                highlightWordSentenceId: 10
            },
            keywords: ["why", "dangerous"],
            keywordExplanations: {
                "why": "なぜ。",
                "dangerous": "危険な。"
            },
            keywordMatches: [
                { sentenceId: 10, text: "isn't safe ... because the water pressure is too high", keyword: "dangerous" }
            ],
            choiceAdvice: "1: 水圧が高い？ 2: 危険な動物？ 3: 眩しい？ 4: 熱い？",
            logic: [
                { type: "text", content: "本文第2段落: \"It isn't safe to go there because the water pressure is too high\"" },
                { type: "text", content: "結論: 水圧が高すぎるから。" },
                { type: "conclusion", content: "正解: 1" }
            ]
        },
        {
            id: 4,
            text: "In 1960, two people",
            textTranslation: "1960年に、二人の人物は",
            choices: [
                { id: 1, text: "lost a special submarine.", translation: "特別な潜水艦を失った。", isCorrect: false },
                { id: 2, text: "drew a map of the bottom of the ocean.", translation: "海底の地図を描いた。", isCorrect: false },
                { id: 3, text: "went to the Challenger Deep.", translation: "チャレンジャー海淵へ行った。", isCorrect: true, highlight: "traveled to the Challenger Deep" },
                { id: 4, text: "found a mountain under the sea.", translation: "海の下の山を見つけた。", isCorrect: false }
            ],
            hint: {
                paragraphId: 3,
                description: "第3段落の最初の文。「1960」に注目して、何をしたか読み取ります。",
                targetSentenceId: 14,
                highlightWord: "traveled to the Challenger Deep",
                highlightWordSentenceId: 14
            },
            keywords: ["1960", "two people"],
            keywordExplanations: {
                "1960": "1960年。"
            },
            keywordMatches: [
                { sentenceId: 14, text: "In 1960, two people traveled to the Challenger Deep", keyword: "1960" }
            ],
            choiceAdvice: "1: 失った？ 2: 地図を描いた？ 3: 行った？ 4: 山を見つけた？",
            logic: [
                { type: "text", content: "本文第3段落: \"In 1960, two people traveled to the Challenger Deep\"" },
                { type: "text", content: "結論: チャレンジャー海淵へ行った。" },
                { type: "conclusion", content: "正解: 3" }
            ]
        },
        {
            id: 5,
            text: "What is this story about?",
            textTranslation: "この物語は何についてですか？",
            choices: [
                { id: 1, text: "A dark and very deep place in the ocean.", translation: "海の中の暗くてとても深い場所。", isCorrect: true, highlight: "lowest place in the world" },
                { id: 2, text: "The history of submarines.", translation: "潜水艦の歴史。", isCorrect: false },
                { id: 3, text: "A special and delicious kind of fish.", translation: "特別でおいしい種類の魚。", isCorrect: false },
                { id: 4, text: "Places to go hiking in Asia.", translation: "アジアでハイキングに行く場所。", isCorrect: false }
            ],
            hint: {
                paragraphId: null,
                description: "タイトル「The Challenger Deep」からもわかるように、何についての説明か考えます。第1段落の「lowest place」（一番低い場所）がヒントです。",
                targetSentenceId: 4,
                highlightWord: "It is called the Challenger Deep, and it is at the bottom of the Pacific Ocean",
                highlightWordSentenceId: 4
            },
            keywords: ["about"],
            keywordExplanations: {
                "about": "〜について。"
            },
            keywordMatches: [],
            choiceAdvice: "1: 暗くて深い場所？ 2: 潜水艦の歴史？ 3: おいしい魚？ 4: ハイキング？",
            logic: [
                { type: "text", content: "全体を通じてチャレンジャー海淵（世界で最も深い場所）の説明をしている。" },
                { type: "conclusion", content: "正解: 1" }
            ]
        }
    ],
    summaryForInstructors: {
        title: "The Challenger Deep",
        intro: "世界で最も深い場所、チャレンジャー海淵（マリアナ海溝）についての説明文です。",
        points: [
            { label: "1. Location (場所)", text: "太平洋のマリアナ海溝の南端、グアム島の近くに位置し、深さは約10,984メートルです。" },
            { label: "2. Environment (環境)", text: "水圧が非常に高く、太陽光が届かないため暗くて寒く（1〜4℃）、人間が行くには危険な場所です。" },
            { label: "3. Exploration (探検)", text: "1960年に特別な潜水艦で初めて2人の人間が到達しました。約20分滞在し、生物を発見しました。" },
            { label: "4. Life (生物)", text: "かつては生物はいないと思われていましたが、現在ではそのような深海でも生物が生息できることがわかっています。" }
        ]
    }
});

grade3PastData.push({
    id: "grade-3-past-edwin-land",
    grade: "3級",
    title: "Edwin Land",
    subTitle: "2022年度 第1回",
    genre: "歴史 / 伝記",
    isOriginal: false,
    images: {
        content: "https://placehold.co/600x400?text=Edwin+Land",
        question: "https://placehold.co/600x400?text=Question+Image"
    },
    content: [
        {
            paragraphId: 1,
            sentences: [
                {
                    id: 1,
                    text: "Many people like to take photos.",
                    translation: "多くの人々は写真を撮るのが好きです。",
                    grammarAnalysis: {
                        mainVerbs: ["like"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>like</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to take photos</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>多くの人々は</span> <span class='t-V'>好きです</span> <span class='t-O'>写真を撮るのが</span>。",
                        naturalTranslation: "多くの人々は写真を撮るのが好きです。",
                        vocabulary: [
                            { word: "take a photo", meaning: "「写真を撮る」。" }
                        ],
                        grammarNotes: [
                            { phrase: "like to do", explanation: "<b>like to do</b>: 「〜するのが好き」。" }
                        ]
                    }
                },
                {
                    id: 2,
                    text: "These days, people usually take photos with smartphones or digital cameras, so they can see their photos right away.",
                    translation: "最近では、人々はたいていスマートフォンかデジタルカメラで写真を撮るため、すぐに写真を見ることができます。",
                    grammarAnalysis: {
                        mainVerbs: ["take", "can see"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(These days)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>take</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>photos</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with smartphones or digital cameras)</span><span class='tag'>M</span></span>, so <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can see</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their photos</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(right away)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(最近では)</span>、<span class='t-S'>人々は</span> <span class='t-M'>(たいてい)</span> <span class='t-V'>撮ります</span> <span class='t-O'>写真を</span> <span class='t-M'>(スマートフォンかデジタルカメラで)</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼らは</span> <span class='t-V'>見ることができます</span> <span class='t-O'>自分たちの写真を</span> <span class='t-M'>(すぐに)</span>。",
                        naturalTranslation: "最近では、人々はたいていスマートフォンかデジタルカメラで写真を撮るため、すぐに写真を見ることができます。",
                        vocabulary: [
                            { word: "these days", meaning: "「最近」「近頃」。" },
                            { word: "right away", meaning: "「すぐに」。" }
                        ],
                        grammarNotes: [
                            { phrase: "so", explanation: "<b>so</b>: 結果を表す接続詞。「だから」。" }
                        ]
                    }
                },
                {
                    id: 3,
                    text: "Before digital photos, people usually had to wait to see their pictures.",
                    translation: "デジタル写真の前は、人々はたいてい写真を見るために待たなければなりませんでした。",
                    grammarAnalysis: {
                        mainVerbs: ["had to wait"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Before digital photos)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>had to wait</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to see their pictures)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(デジタル写真の前は)</span>、<span class='t-S'>人々は</span> <span class='t-M'>(たいてい)</span> <span class='t-V'>待たなければなりませんでした</span> <span class='t-M'>(自分たちの写真を見るために)</span>。",
                        naturalTranslation: "デジタル写真の前は、人々はたいてい写真を見るために待たなければなりませんでした。",
                        vocabulary: [
                            { word: "wait", meaning: "「待つ」。" }
                        ],
                        grammarNotes: [
                            { phrase: "had to do", explanation: "<b>had to do</b>: have to do（〜しなければならない）の過去形。「〜しなければならなかった」。" },
                            { phrase: "to see", explanation: "<b>不定詞の副詞的用法</b>: 「〜するために」。" }
                        ]
                    }
                },
                {
                    id: 4,
                    text: "They took pictures on film and sent the film to a store.",
                    translation: "彼らはフィルムで写真を撮り、フィルムを店に送りました。",
                    grammarAnalysis: {
                        mainVerbs: ["took", "sent"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>pictures</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(on film)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>sent</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the film</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to a store)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>撮り</span> <span class='t-O'>写真を</span> <span class='t-M'>(フィルムで)</span> そして <span class='t-V'>送りました</span> <span class='t-O'>そのフィルムを</span> <span class='t-M'>(店へ)</span>。",
                        naturalTranslation: "彼らはフィルムで写真を撮り、フィルムを店に送りました。",
                        vocabulary: [
                            { word: "send", meaning: "「送る」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 5,
                    text: "Then, someone developed the film and printed the pictures on paper.",
                    translation: "そして、誰かがフィルムを現像し、紙に写真を印刷しました。",
                    grammarAnalysis: {
                        mainVerbs: ["developed", "printed"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(Then)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>someone</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>developed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the film</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>printed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the pictures</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(on paper)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(そして)</span>、<span class='t-S'>誰かが</span> <span class='t-V'>現像し</span> <span class='t-O'>そのフィルムを</span> そして <span class='t-V'>印刷しました</span> <span class='t-O'>その写真を</span> <span class='t-M'>(紙に)</span>。",
                        naturalTranslation: "そして、誰かがフィルムを現像し、紙に写真を印刷しました。",
                        vocabulary: [
                            { word: "develop", meaning: "「現像する」。" },
                            { word: "print", meaning: "「印刷する」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 6,
                    text: "This usually took a few days.",
                    translation: "これにはたいてい数日かかりました。",
                    grammarAnalysis: {
                        mainVerbs: ["took"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a few days</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>これは</span> <span class='t-M'>(たいてい)</span> <span class='t-V'>かかりました</span> <span class='t-O'>数日</span>。",
                        naturalTranslation: "これにはたいてい数日かかりました。",
                        vocabulary: [
                            { word: "a few", meaning: "「2、3の」「少数の」。" }
                        ],
                        grammarNotes: [
                            { phrase: "took a few days", explanation: "「数日かかった」。take + 時間で「（時間）がかかる」。" }
                        ]
                    }
                },
                {
                    id: 7,
                    text: "But in those days, there was one way to get pictures much more quickly.",
                    translation: "しかし当時、写真をもっと早く手に入れる方法が一つありました。",
                    grammarAnalysis: {
                        mainVerbs: ["was"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(But in those days)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there was</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>one way <span class='chunk M-group'><span class='text'>(to get pictures much more quickly)</span><span class='tag'>M</span></span></span><span class='tag'>S</span></span>.",
                        translationHtml: "<span class='t-M'>(しかし当時)</span>、<span class='t-V'>ありました</span> <span class='t-S'>一つの方法が <span class='t-M'>(写真をもっとずっと早く手に入れるための)</span></span>。",
                        naturalTranslation: "しかし当時、写真をもっと早く手に入れる方法が一つありました。",
                        vocabulary: [
                            { word: "in those days", meaning: "「当時」「その頃」。" },
                            { word: "way", meaning: "「方法」。" },
                            { word: "quickly", meaning: "「早く」。" }
                        ],
                        grammarNotes: [
                            { phrase: "way to get", explanation: "<b>不定詞の形容詞的用法</b>: 「〜するための方法」。" },
                            { phrase: "much more quickly", explanation: "<b>比較級の強調</b>: much + 比較級。「もっとずっと〜」。" }
                        ]
                    }
                },
                {
                    id: 8,
                    text: "People could use instant cameras.",
                    translation: "人々はインスタントカメラを使うことができました。",
                    grammarAnalysis: {
                        mainVerbs: ["could use"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>instant cameras</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>人々は</span> <span class='t-V'>使うことができました</span> <span class='t-O'>インスタントカメラを</span>。",
                        naturalTranslation: "人々はインスタントカメラを使うことができました。",
                        vocabulary: [
                            { word: "instant camera", meaning: "「インスタントカメラ」。撮ったその場で現像できるカメラ。" }
                        ],
                        grammarNotes: []
                    }
                }
            ]
        },
        {
            paragraphId: 2,
            sentences: [
                {
                    id: 9,
                    text: "A scientist named Edwin Land made the first instant camera.",
                    translation: "エドウィン・ランドという名の科学者が、最初のインスタントカメラを作りました。",
                    grammarAnalysis: {
                        mainVerbs: ["made"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>A scientist <span class='chunk M-group'><span class='text'>(named Edwin Land)</span><span class='tag'>M</span></span></span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the first instant camera</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>科学者が <span class='t-M'>(エドウィン・ランドという名の)</span></span> <span class='t-V'>作りました</span> <span class='t-O'>最初のインスタントカメラを</span>。",
                        naturalTranslation: "エドウィン・ランドという名の科学者が、最初のインスタントカメラを作りました。",
                        vocabulary: [
                            { word: "scientist", meaning: "「科学者」。" },
                            { word: "named", meaning: "「〜という名前の」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 10,
                    text: "Land was born in 1909 in Connecticut in the United States.",
                    translation: "ランドは1909年にアメリカのコネチカット州で生まれました。",
                    grammarAnalysis: {
                        mainVerbs: ["was born"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Land</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was born</span><span class='tag'>V(受動態)</span></span> <span class='chunk M-group'><span class='text'>(in 1909)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in Connecticut)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in the United States)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>ランドは</span> <span class='t-V'>生まれました</span> <span class='t-M'>(1909年に)</span> <span class='t-M'>(コネチカット州で)</span> <span class='t-M'>(アメリカの)</span>。",
                        naturalTranslation: "ランドは1909年にアメリカのコネチカット州で生まれました。",
                        vocabulary: [
                            { word: "be born", meaning: "「生まれる」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 11,
                    text: "When he was a child, he enjoyed playing with things like radios and clocks.",
                    translation: "子供の頃、彼はラジオや時計のようなもので遊ぶのを楽しみました。",
                    grammarAnalysis: {
                        mainVerbs: ["enjoyed"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(When he was a child)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>enjoyed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>playing with things <span class='chunk M-group'><span class='text'>(like radios and clocks)</span><span class='tag'>M</span></span></span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-M'>(彼が子供だった時)</span>、<span class='t-S'>彼は</span> <span class='t-V'>楽しみました</span> <span class='t-O'>もので遊ぶことを <span class='t-M'>(ラジオや時計のような)</span></span>。",
                        naturalTranslation: "子供の頃、彼はラジオや時計のようなもので遊ぶのを楽しみました。",
                        vocabulary: [
                            { word: "play with", meaning: "「〜で遊ぶ」「〜をいじる」。" }
                        ],
                        grammarNotes: [
                            { phrase: "enjoyed playing", explanation: "<b>enjoy -ing</b>: 「〜して楽しむ」。enjoyは目的語に動名詞をとる。" },
                            { phrase: "like", explanation: "<b>前置詞like</b>: 「〜のような」。" }
                        ]
                    }
                },
                {
                    id: 12,
                    text: "Land liked to understand how things worked, so he studied science at Harvard University.",
                    translation: "ランドは物がどのように動くかを理解するのが好きだったので、ハーバード大学で科学を学びました。",
                    grammarAnalysis: {
                        mainVerbs: ["liked", "studied"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Land</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>liked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to understand <span class='chunk O-group'><span class='text'>[how things worked]</span><span class='tag'>O'</span></span></span><span class='tag'>O</span></span>, so <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>studied</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>science</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at Harvard University)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>ランドは</span> <span class='t-V'>好きでした</span> <span class='t-O'>理解することが <span class='t-O'>[物がどのように動くか]を</span></span>、<span class='t-S'>だから彼は</span> <span class='t-V'>勉強しました</span> <span class='t-O'>科学を</span> <span class='t-M'>(ハーバード大学で)</span>。",
                        naturalTranslation: "ランドは物がどのように動くかを理解するのが好きだったので、ハーバード大学で科学を学びました。",
                        vocabulary: [
                            { word: "understand", meaning: "「理解する」「わかる」。" },
                            { word: "work", meaning: "「（機械などが）動く」「機能する」。" }
                        ],
                        grammarNotes: [
                            { phrase: "how things worked", explanation: "<b>間接疑問文</b>: 疑問詞 + S + V。「物がどのように動くか」。" }
                        ]
                    }
                },
                {
                    id: 13,
                    text: "In 1932, he started a company with George Wheelwright, and they called it Land-Wheelwright Laboratories.",
                    translation: "1932年に、彼はジョージ・ホイールライトと共に会社を始め、彼らはそれをランド・ホイールライト研究所と呼びました。",
                    grammarAnalysis: {
                        mainVerbs: ["started", "called"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In 1932)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>started</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a company</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with George Wheelwright)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>called</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>Land-Wheelwright Laboratories</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-M'>(1932年に)</span>、<span class='t-S'>彼は</span> <span class='t-V'>始めました</span> <span class='t-O'>会社を</span> <span class='t-M'>(ジョージ・ホイールライトと共に)</span>、そして<span class='t-S'>彼らは</span> <span class='t-V'>呼びました</span> <span class='t-O'>それを</span> <span class='t-C'>ランド・ホイールライト研究所と</span>。",
                        naturalTranslation: "1932年に、彼はジョージ・ホイールライトと共に会社を始め、彼らはそれをランド・ホイールライト研究所と呼びました。",
                        vocabulary: [
                            { word: "start a company", meaning: "「会社を始める（設立する）」。" },
                            { word: "laboratory", meaning: "「研究所」。" }
                        ],
                        grammarNotes: [
                            { phrase: "called it ...", explanation: "<b>call O C</b>: 「OをCと呼ぶ」。第5文型。" }
                        ]
                    }
                },
                {
                    id: 14,
                    text: "In 1937, the company name was changed to Polaroid.",
                    translation: "1937年に、会社名はポラロイドに変更されました。",
                    grammarAnalysis: {
                        mainVerbs: ["was changed"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In 1937)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the company name</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was changed</span><span class='tag'>V(受動態)</span></span> <span class='chunk M-group'><span class='text'>(to Polaroid)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(1937年に)</span>、<span class='t-S'>会社名は</span> <span class='t-V'>変更されました</span> <span class='t-M'>(ポラロイドに)</span>。",
                        naturalTranslation: "1937年に、会社名はポラロイドに変更されました。",
                        vocabulary: [
                            { word: "change", meaning: "「変える」。" }
                        ],
                        grammarNotes: [
                            { phrase: "was changed", explanation: "<b>受動態</b>: be動詞 + 過去分詞。「変更された」。" },
                            { phrase: "change A to B", explanation: "「AをBに変える」。受動態でA is changed to B。" }
                        ]
                    }
                }
            ]
        },
        {
            paragraphId: 3,
            sentences: [
                {
                    id: 15,
                    text: "One day, Land was on vacation with his family.",
                    translation: "ある日、ランドは家族と休暇中でした。",
                    grammarAnalysis: {
                        mainVerbs: ["was"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(One day)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Land</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>on vacation</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(with his family)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(ある日)</span>、<span class='t-S'>ランドは</span> <span class='t-V'>でした</span> <span class='t-C'>休暇中</span> <span class='t-M'>(家族と一緒に)</span>。",
                        naturalTranslation: "ある日、ランドは家族と休暇中でした。",
                        vocabulary: [
                            { word: "on vacation", meaning: "「休暇で」「休暇中で」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 16,
                    text: "He took a photo of his daughter.",
                    translation: "彼は娘の写真を撮りました。",
                    grammarAnalysis: {
                        mainVerbs: ["took"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a photo of his daughter</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>撮りました</span> <span class='t-O'>娘の写真を</span>。",
                        naturalTranslation: "彼は娘の写真を撮りました。",
                        vocabulary: [
                            { word: "photo of", meaning: "「〜の写真」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 17,
                    text: "She asked him, \"Why can't I see the photo now?\"",
                    translation: "彼女は彼に、「なぜ今写真を見ることができないの？」と尋ねました。",
                    grammarAnalysis: {
                        mainVerbs: ["asked"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>asked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>him</span><span class='tag'>O1</span></span>, <span class='chunk O-group'><span class='text'>\"Why can't I see the photo now?\"</span><span class='tag'>O2</span></span>",
                        translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>尋ねました</span> <span class='t-O'>彼に</span>、「<span class='t-O'>なぜ私は今写真を見ることができないの？</span>」と。",
                        naturalTranslation: "彼女は彼に、「なぜ今写真を見ることができないの？」と尋ねました。",
                        vocabulary: [
                            { word: "ask", meaning: "「尋ねる」。" }
                        ],
                        grammarNotes: [
                            { phrase: "ask O1 O2", explanation: "「O1にO2を尋ねる」。第4文型。" }
                        ]
                    }
                },
                {
                    id: 18,
                    text: "This gave him an idea.",
                    translation: "これが彼にアイデアを与えました。",
                    grammarAnalysis: {
                        mainVerbs: ["gave"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>gave</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>him</span><span class='tag'>O1</span></span> <span class='chunk O-group'><span class='text'>an idea</span><span class='tag'>O2</span></span>.",
                        translationHtml: "<span class='t-S'>これが</span> <span class='t-V'>与えました</span> <span class='t-O'>彼に</span> <span class='t-O'>アイデアを</span>。",
                        naturalTranslation: "これが彼にアイデアを与えました。",
                        vocabulary: [
                            { word: "give", meaning: "「与える」。" },
                            { word: "idea", meaning: "「アイデア」「考え」。" }
                        ],
                        grammarNotes: [
                            { phrase: "gave him an idea", explanation: "<b>give O1 O2</b>: 「O1にO2を与える」。第4文型。" }
                        ]
                    }
                },
                {
                    id: 19,
                    text: "Land built an instant camera in 1947.",
                    translation: "ランドは1947年にインスタントカメラを作りました。",
                    grammarAnalysis: {
                        mainVerbs: ["built"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Land</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>built</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an instant camera</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in 1947)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>ランドは</span> <span class='t-V'>作りました（作り上げました）</span> <span class='t-O'>インスタントカメラを</span> <span class='t-M'>(1947年に)</span>。",
                        naturalTranslation: "ランドは1947年にインスタントカメラを作りました。",
                        vocabulary: [
                            { word: "build", meaning: "「作る」「建造する」。makeより手の込んだものを作るニュアンス。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 20,
                    text: "It developed and printed photos in less than one minute.",
                    translation: "それは1分以内に写真を現像し印刷しました。",
                    grammarAnalysis: {
                        mainVerbs: ["developed", "printed"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>developed</span><span class='tag'>V</span></span> and <span class='chunk V-group'><span class='text'>printed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>photos</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in less than one minute)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>現像し</span> そして <span class='t-V'>印刷しました</span> <span class='t-O'>写真を</span> <span class='t-M'>(1分もしないうちに)</span>。",
                        naturalTranslation: "それは1分以内に写真を現像し印刷しました。",
                        vocabulary: [
                            { word: "less than", meaning: "「〜より少ない」「〜未満」。" }
                        ],
                        grammarNotes: []
                    }
                }
            ]
        },
        {
            paragraphId: 4,
            sentences: [
                {
                    id: 21,
                    text: "Land's company made 60 instant cameras in 1948.",
                    translation: "ランドの会社は1948年に60台のインスタントカメラを作りました。",
                    grammarAnalysis: {
                        mainVerbs: ["made"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Land's company</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>60 instant cameras</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in 1948)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>ランドの会社は</span> <span class='t-V'>作りました</span> <span class='t-O'>60台のインスタントカメラを</span> <span class='t-M'>(1948年に)</span>。",
                        naturalTranslation: "ランドの会社は1948年に60台のインスタントカメラを作りました。",
                        vocabulary: [],
                        grammarNotes: []
                    }
                },
                {
                    id: 22,
                    text: "The cameras were very popular, and they were sold out in one day.",
                    translation: "そのカメラはとても人気があり、1日で売り切れました。",
                    grammarAnalysis: {
                        mainVerbs: ["were", "were sold out"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>The cameras</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very popular</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were sold out</span><span class='tag'>V(受動態)</span></span> <span class='chunk M-group'><span class='text'>(in one day)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-S'>そのカメラは</span> <span class='t-V'>でした</span> <span class='t-C'>とても人気</span>、そして<span class='t-S'>それらは</span> <span class='t-V'>売り切れました</span> <span class='t-M'>(1日で)</span>。",
                        naturalTranslation: "そのカメラはとても人気があり、1日で売り切れました。",
                        vocabulary: [
                            { word: "popular", meaning: "「人気のある」。" },
                            { word: "sold out", meaning: "「売り切れた」。sell outの過去分詞。" }
                        ],
                        grammarNotes: [
                            { phrase: "were sold out", explanation: "<b>受動態</b>: 「売り切れる（売られた状態になる）」。" }
                        ]
                    }
                },
                {
                    id: 23,
                    text: "The company made more instant cameras, and customers all around the United States bought them.",
                    translation: "会社はさらに多くのインスタントカメラを作り、アメリカ中の顧客がそれらを買いました。",
                    grammarAnalysis: {
                        mainVerbs: ["made", "bought"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>The company</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>more instant cameras</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>customers <span class='chunk M-group'><span class='text'>(all around the United States)</span><span class='tag'>M</span></span></span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>bought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>会社は</span> <span class='t-V'>作りました</span> <span class='t-O'>もっと多くのインスタントカメラを</span>、そして <span class='t-S'>顧客が <span class='t-M'>(アメリカ中の)</span></span> <span class='t-V'>買いました</span> <span class='t-O'>それらを</span>。",
                        naturalTranslation: "会社はさらに多くのインスタントカメラを作り、アメリカ中の顧客がそれらを買いました。",
                        vocabulary: [
                            { word: "customer", meaning: "「顧客」「客」。" },
                            { word: "all around", meaning: "「〜の至る所で」「〜中の」。" }
                        ],
                        grammarNotes: []
                    }
                },
                {
                    id: 24,
                    text: "After that, people were able to see their pictures right away.",
                    translation: "その後、人々は写真をすぐに見ることができるようになりました。",
                    grammarAnalysis: {
                        mainVerbs: ["were able to see"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(After that)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were able to see</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their pictures</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(right away)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>人々は</span> <span class='t-V'>見ることができるようになりました</span> <span class='t-O'>写真を</span> <span class='t-M'>(すぐに)</span>。",
                        naturalTranslation: "その後、人々は写真をすぐに見ることができるようになりました。",
                        vocabulary: [
                            { word: "be able to", meaning: "「〜できる」。canと同じ。" }
                        ],
                        grammarNotes: []
                    }
                }
            ]
        }
    ],
    questions: [
        {
            id: 1,
            text: "What did Edwin Land like to do when he was a child?",
            textTranslation: "エドウィン・ランドは子供の頃何をするのが好きでしたか？",
            choices: [
                { id: 1, text: "Play with radios and clocks.", translation: "ラジオや時計で遊ぶこと。", isCorrect: true, highlight: "enjoyed playing with things like radios and clocks" },
                { id: 2, text: "Make things with paper.", translation: "紙でものを作ること。", isCorrect: false },
                { id: 3, text: "Dream about starting a company.", translation: "会社を始めることについて夢見ること。", isCorrect: false },
                { id: 4, text: "Study to get into a good school.", translation: "良い学校に入るために勉強すること。", isCorrect: false }
            ],
            hint: {
                paragraphId: 2,
                description: "第2段落の2番目の文。「When he was a child」という表現と「enjoyed」（楽しんだ）を探します。",
                targetSentenceId: 11,
                highlightWord: "enjoyed playing with things like radios and clocks",
                highlightWordSentenceId: 11
            },
            keywords: ["what", "like to do", "child"],
            keywordExplanations: {
                "like to do": "〜するのが好き。",
                "child": "子供。"
            },
            keywordMatches: [
                { sentenceId: 11, text: "When he was a child, he enjoyed playing with things like radios and clocks", keyword: "child" }
            ],
            choiceAdvice: "1: ラジオや時計で遊ぶ？ 2: 紙工作？ 3: 会社の夢？ 4: 勉強？",
            logic: [
                { type: "text", content: "本文第2段落: \"When he was a child, he enjoyed playing with things like radios and clocks.\"" },
                { type: "text", content: "結論: ラジオや時計で遊ぶのが好きだった。" },
                { type: "conclusion", content: "正解: 1" }
            ]
        },
        {
            id: 2,
            text: "What happened in 1937?",
            textTranslation: "1937年に何が起きましたか？",
            choices: [
                { id: 1, text: "Land got into Harvard University.", translation: "ランドはハーバード大学に入学した。", isCorrect: false },
                { id: 2, text: "Land met George Wheelwright.", translation: "ランドはジョージ・ホイールライトに出会った。", isCorrect: false },
                { id: 3, text: "Land-Wheelwright Laboratories changed its name.", translation: "ランド・ホイールライト研究所がその名前を変えた。", isCorrect: true, highlight: "company name was changed to Polaroid" },
                { id: 4, text: "Polaroid built a new kind of camera.", translation: "ポラロイド社が新しい種類のカメラを作った。", isCorrect: false }
            ],
            hint: {
                paragraphId: 2,
                description: "第2段落の最後。「In 1937」を探し、その後に何が起こったか（name was changed）を確認します。",
                targetSentenceId: 14,
                highlightWord: "In 1937, the company name was changed to Polaroid",
                highlightWordSentenceId: 14
            },
            keywords: ["what", "happened", "1937"],
            keywordExplanations: {
                "happened": "起きた。",
                "1937": "1937年。"
            },
            keywordMatches: [
                { sentenceId: 14, text: "In 1937, the company name was changed to Polaroid", keyword: "1937" }
            ],
            choiceAdvice: "1: 入学？ 2: 出会った？ 3: 名前変更？ 4: カメラ作成？",
            logic: [
                { type: "text", content: "本文第2段落: \"In 1937, the company name was changed to Polaroid.\"" },
                { type: "text", content: "結論: 会社名が変更された。" },
                { type: "conclusion", content: "正解: 3" }
            ]
        },
        {
            id: 3,
            text: "Who gave Land the idea for an instant camera?",
            textTranslation: "誰がランドにインスタントカメラのアイデアを与えましたか？",
            choices: [
                { id: 1, text: "His daughter.", translation: "彼の娘。", isCorrect: true, highlight: "daughter ... asked him ... gave him an idea" },
                { id: 2, text: "His wife.", translation: "彼の妻。", isCorrect: false },
                { id: 3, text: "A customer.", translation: "顧客。", isCorrect: false },
                { id: 4, text: "A friend.", translation: "友人。", isCorrect: false }
            ],
            hint: {
                paragraphId: 3,
                description: "第3段落。「idea」という単語の前を見ます。誰が彼に質問をしたでしょうか。",
                targetSentenceId: 18,
                highlightWord: "She asked him, \"Why can't I see the photo now?\" This gave him an idea",
                highlightWordSentenceId: 18
            },
            keywords: ["who", "gave", "idea"],
            keywordExplanations: {
                "who": "誰。"
            },
            keywordMatches: [
                { sentenceId: 18, text: "He took a photo of his daughter ... This gave him an idea", keyword: "idea" }
            ],
            choiceAdvice: "1: 娘？ 2: 妻？ 3: 顧客？ 4: 友人？",
            logic: [
                { type: "text", content: "第3段落: 娘の写真を撮り、彼女が「なぜ今見れないの？」と聞き、それが彼にアイデアを与えた。" },
                { type: "text", content: "結論: 娘。" },
                { type: "conclusion", content: "正解: 1" }
            ]
        },
        {
            id: 4,
            text: "The first instant cameras",
            textTranslation: "最初のインスタントカメラは",
            choices: [
                { id: 1, text: "were too expensive.", translation: "高価すぎた。", isCorrect: false },
                { id: 2, text: "were all sold very quickly.", translation: "すべてとても早く売れた。", isCorrect: true, highlight: "sold out in one day" },
                { id: 3, text: "could only be used for one day.", translation: "1日しか使えなかった。", isCorrect: false },
                { id: 4, text: "took a few minutes to print pictures.", translation: "写真を印刷するのに数分かかった。", isCorrect: false },
            ],
            hint: {
                paragraphId: 4,
                description: "第4段落の前半。「sold out」（売り切れた）という表現と、その速さ（one day）に注目します。",
                targetSentenceId: 22,
                highlightWord: "sold out in one day",
                highlightWordSentenceId: 22
            },
            keywords: ["first", "cameras"],
            keywordExplanations: {
                "first": "最初の。"
            },
            keywordMatches: [
                { sentenceId: 22, text: "cameras were very popular, and they were sold out in one day", keyword: "cameras" }
            ],
            choiceAdvice: "1: 高価？ 2: 早く売れた？ 3: 1日だけ使える？ 4: 数分かかった？",
            logic: [
                { type: "text", content: "本文第4段落: \"they were sold out in one day.\"" },
                { type: "text", content: "結論: 1日で売り切れた（＝とても早く売れた）。" },
                { type: "conclusion", content: "正解: 2" }
            ]
        },
        {
            id: 5,
            text: "What is this story about?",
            textTranslation: "この物語は何についてですか？",
            choices: [
                { id: 1, text: "The history of digital cameras.", translation: "デジタルカメラの歴史。", isCorrect: false },
                { id: 2, text: "A famous photo collection.", translation: "有名な写真コレクション。", isCorrect: false },
                { id: 3, text: "The first smartphone with a camera.", translation: "カメラ付きの最初のスマートフォン。", isCorrect: false },
                { id: 4, text: "A man who built a special camera.", translation: "特別なカメラを作った男性。", isCorrect: true, highlight: "Edwin Land made the first instant camera" }
            ],
            hint: {
                paragraphId: null,
                description: "タイトル「Edwin Land」と第2段落の最初の文「Edwin Land made the first instant camera」がヒントです。",
                targetSentenceId: 9,
                highlightWord: "Edwin Land made the first instant camera",
                highlightWordSentenceId: 9
            },
            keywords: ["about"],
            keywordExplanations: {
                "about": "〜について。"
            },
            keywordMatches: [],
            choiceAdvice: "1: デジカメの歴史？ 2: 写真集？ 3: スマホ？ 4: 特別なカメラを作った男？",
            logic: [
                { type: "text", content: "全体を通じてエドウィン・ランドと彼が作ったインスタントカメラについての話。" },
                { type: "conclusion", content: "正解: 4" }
            ]
        }
    ],
    summaryForInstructors: {
        title: "Edwin Land",
        intro: "インスタントカメラの発明者、エドウィン・ランドの伝記です。彼がどのようにして「撮ってすぐ見られる」カメラを発明したかが描かれています。",
        points: [
            { label: "1. Background (背景)", text: "かつて写真を撮るにはフィルムを現像に出し、数日待つ必要がありました。ランドは子供の頃から物の仕組みに興味を持っていました。" },
            { label: "2. The Idea (アイデア)", text: "娘の写真を撮った際、「なぜ今すぐ見られないの？」と聞かれたことがきっかけで、インスタントカメラのアイデアが生まれました。" },
            { label: "3. Success (成功)", text: "1947年にカメラを開発し、1948年に発売すると1日で売り切れるほどの大人気となりました。" },
            { label: "4. Legacy (遺産)", text: "彼のおかげで、人々は写真をすぐに楽しめるようになりました。これは現代のデジタル写真につながる重要な一歩でした。" }
        ]
    }
});
