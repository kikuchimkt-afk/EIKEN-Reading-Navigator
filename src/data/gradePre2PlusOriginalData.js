export const gradePre2PlusOriginalData = [
    {
        id: "grade-pre2-plus-original-indoor-farming",
        grade: "準2級プラス",
        title: "Indoor Vegetable Farms",
        subTitle: "問題1",
        genre: "科学 / 技術 / 環境",
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Indoor+Vegetable+Farms",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Today, the population of the world is increasing rapidly.",
                        translation: "今日、世界の人口は急速に増加しています。",
                        grammarAnalysis: {
                            mainVerbs: ["is increasing"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the population of the world</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is increasing</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>rapidly</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(今日)</span>、<span class='t-S'>世界の人口は</span> <span class='t-V'>増加しています</span> <span class='t-M'>急速に</span>。",
                            naturalTranslation: "今日、世界の人口は急速に増加しています。",
                            vocabulary: [
                                { word: "population", meaning: "「人口」。" },
                                { word: "rapidly", meaning: "「急速に」。fastやquicklyよりフォーマル。" }
                            ],
                            grammarNotes: [
                                { phrase: "is increasing", explanation: "<b>is increasing</b>: 現在進行形。「〜している（最中だ）」の変化を表す。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "Because of this, it is becoming more important to produce enough food for everyone.",
                        translation: "このため、すべての人のために十分な食料を生産することがより重要になってきています。",
                        grammarAnalysis: {
                            mainVerbs: ["is becoming"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Because of this)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S(仮)</span></span> <span class='chunk V-group'><span class='text'>is becoming</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>more important</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to produce enough food for everyone</span><span class='tag'>S(真)</span></span>.",
                            translationHtml: "<span class='t-M'>(このため)</span>、<span class='t-S'>それは</span> <span class='t-V'>なっています</span> <span class='t-C'>より重要に</span> <span class='t-S'>すべての人のために十分な食料を生産することが</span>。",
                            naturalTranslation: "このため、すべての人のために十分な食料を生産することがより重要になってきています。",
                            vocabulary: [
                                { word: "produce", meaning: "「生産する」。" },
                                { word: "enough", meaning: "「十分な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "it is ... to produce", explanation: "<b>It is ... to do</b>: 形式主語構文。itは仮の主語で、真の主語は to produce 以下。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "However, traditional farming depends heavily on the weather.",
                        translation: "しかし、伝統的な農業は天候に大きく依存しています。",
                        grammarAnalysis: {
                            mainVerbs: ["depends"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>traditional farming</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>depends</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>heavily</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(on the weather)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>伝統的な農業は</span> <span class='t-V'>依存します</span> <span class='t-M'>大きく</span> <span class='t-M'>(天候に)</span>。",
                            naturalTranslation: "しかし、伝統的な農業は天候に大きく依存しています。",
                            vocabulary: [
                                { word: "traditional", meaning: "「伝統的な」「従来の」。" },
                                { word: "depends on", meaning: "「〜に依存する」「〜次第である」。" },
                                { word: "heavily", meaning: "「重く」「非常に」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 4,
                        text: "Heavy rain or high heat can damage crops easily.",
                        translation: "大雨や高熱は作物を容易に傷つける可能性があります。",
                        grammarAnalysis: {
                            mainVerbs: ["can damage"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Heavy rain or high heat</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can damage</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>crops</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>easily</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>大雨や高熱は</span> <span class='t-V'>傷つける可能性があります</span> <span class='t-O'>作物を</span> <span class='t-M'>容易に</span>。",
                            naturalTranslation: "大雨や高熱は作物を容易に傷つける可能性があります。",
                            vocabulary: [
                                { word: "damage", meaning: "「〜に損害を与える」「〜を傷つける」。" },
                                { word: "crops", meaning: "「作物」「農作物」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 5,
                        text: "To solve these problems, a new method of farming has attracted attention recently.",
                        translation: "これらの問題を解決するために、新しい農業の方法が最近注目を集めています。",
                        grammarAnalysis: {
                            mainVerbs: ["has attracted"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To <span class='chunk V2-group'><span class='text'>solve</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>these problems</span><span class='tag'>O'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a new method of farming</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has attracted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>attention</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>recently</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(<span class='t-O2'>これらの問題を</span> <span class='t-V2'>解決するために</span>)</span>、<span class='t-S'>新しい農業の方法が</span> <span class='t-V'>集めています</span> <span class='t-O'>注目を</span> <span class='t-M'>最近</span>。",
                            naturalTranslation: "これらの問題を解決するために、新しい農業の方法が最近注目を集めています。",
                            vocabulary: [
                                { word: "solve", meaning: "「解決する」。" },
                                { word: "method", meaning: "「方法」。" },
                                { word: "attracted attention", meaning: "「注目を集めた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "To solve", explanation: "<b>To solve</b>: 目的を表す不定詞。「解決するために」。" },
                                { phrase: "has attracted", explanation: "<b>has attracted</b>: 現在完了形。過去から現在まで注目を集めている状態。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "It is called indoor farming.",
                        translation: "それは屋内農業と呼ばれています。",
                        grammarAnalysis: {
                            mainVerbs: ["is called"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>indoor farming</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>屋内農業と</span>。",
                            naturalTranslation: "それは屋内農業と呼ばれています。",
                            vocabulary: [
                                { word: "called", meaning: "「〜と呼ばれる」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 7,
                        text: "Companies in countries like Japan and the US are building large indoor farms, and this new industry is expanding quickly.",
                        translation: "日本やアメリカのような国々の企業が大規模な屋内農場を建設しており、この新しい産業は急速に拡大しています。",
                        grammarAnalysis: {
                            mainVerbs: ["are building", "is expanding"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Companies in countries like Japan and the US</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are building</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>large indoor farms</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>this new industry</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is expanding</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>quickly</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>日本やアメリカのような国々の企業は</span> <span class='t-V'>建設しています</span> <span class='t-O'>大規模な屋内農場を</span>、そして<span class='t-S'>この新しい産業は</span> <span class='t-V'>拡大しています</span> <span class='t-M'>急速に</span>。",
                            naturalTranslation: "日本やアメリカのような国々の企業が大規模な屋内農場を建設しており、この新しい産業は急速に拡大しています。",
                            vocabulary: [
                                { word: "industry", meaning: "「産業」「業界」。" },
                                { word: "expanding", meaning: "「拡大している」。" }
                            ],
                            grammarNotes: [
                                { phrase: "countries like ...", explanation: "<b>like</b>: 〜のような（前置詞）。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 8,
                        text: "There are some unique methods to grow vegetables indoors.",
                        translation: "屋内で野菜を育てるにはいくつかのユニークな方法があります。",
                        grammarAnalysis: {
                            mainVerbs: ["are"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>There</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>some unique methods</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(to grow vegetables indoors)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>そこには</span> <span class='t-V'>あります</span> <span class='t-S'>いくつかのユニークな方法が</span> <span class='t-M'>(屋内で野菜を育てるための)</span>。",
                            naturalTranslation: "屋内で野菜を育てるにはいくつかのユニークな方法があります。",
                            vocabulary: [
                                { word: "unique", meaning: "「ユニークな」「独特な」。" },
                                { word: "indoors", meaning: "「屋内で」。副詞。" }
                            ],
                            grammarNotes: [
                                { phrase: "methods to grow", explanation: "<b>to grow</b>: 形容詞的用法。「育てるための（方法）」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "One common method is to place plants on shelves that are stacked on top of each other.",
                        translation: "一般的な方法の一つは、互いに積み重ねられた棚の上に植物を置くことです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>One common method</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to place plants on shelves that are stacked on top of each other</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>一般的な方法の一つは</span> <span class='t-V'>です</span> <span class='t-C'>棚の上に植物を置くこと（棚は互いに積み重ねられている）</span>。",
                            naturalTranslation: "一般的な方法の一つは、互いに積み重ねられた棚の上に植物を置くことです。",
                            vocabulary: [
                                { word: "shelves", meaning: "「棚」。shelfの複数形。" },
                                { word: "stacked", meaning: "「積み重ねられた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to place", explanation: "<b>to place</b>: 名詞的用法。「置くこと」。" },
                                { phrase: "that are stacked", explanation: "<b>that</b>: 関係代名詞。shelvesを修飾する受動態の節。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "This style is often known as vertical farming.",
                        translation: "このスタイルはしばしば垂直農業として知られています。",
                        grammarAnalysis: {
                            mainVerbs: ["is known"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This style</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>(助)</span></span> <span class='chunk M-group'><span class='text'>often</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>known</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(as vertical farming)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>このスタイルは</span> <span class='t-M'>しばしば</span> <span class='t-V'>知られています</span> <span class='t-M'>(垂直農業として)</span>。",
                            naturalTranslation: "このスタイルはしばしば垂直農業として知られています。",
                            vocabulary: [
                                { word: "vertical", meaning: "「垂直の」「縦の」。" }
                            ],
                            grammarNotes: [
                                { phrase: "known as", explanation: "<b>known as</b>: 〜として知られる。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "Because there is no sunlight inside the buildings, farmers use special LED lights to help the plants grow.",
                        translation: "建物の中には日光がないため、農家は植物の成長を助けるために特別なLEDライトを使用します。",
                        grammarAnalysis: {
                            mainVerbs: ["use"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Because there <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> <span class='chunk S2-group'><span class='text'>no sunlight</span><span class='tag'>S'</span></span> <span class='chunk M2-group'><span class='text'>inside the buildings</span><span class='tag'>M'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>special LED lights</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to help the plants grow)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(<span class='t-M2'>建物の中に</span> <span class='t-S2'>日光が</span> <span class='t-V2'>ない</span>ので)</span>、<span class='t-S'>農家は</span> <span class='t-V'>使います</span> <span class='t-O'>特別なLEDライトを</span> <span class='t-M'>(植物が育つのを助けるために)</span>。",
                            naturalTranslation: "建物の中には日光がないため、農家は植物の成長を助けるために特別なLEDライトを使用します。",
                            vocabulary: [
                                { word: "sunlight", meaning: "「日光」。" },
                                { word: "special", meaning: "「特別な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "help the plants grow", explanation: "<b>help O do</b>: 「Oが〜するのを助ける」。原型不定詞(grow)が使われている。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "Also, they usually do not use soil.",
                        translation: "また、彼らは通常、土を使用しません。",
                        grammarAnalysis: {
                            mainVerbs: ["use"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>usually</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>do not use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>soil</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-S'>彼らは</span> <span class='t-M'>通常</span> <span class='t-V'>使いません</span> <span class='t-O'>土を</span>。",
                            naturalTranslation: "また、彼らは通常、土を使用しません。",
                            vocabulary: [
                                { word: "soil", meaning: "「土」「土壌」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 13,
                        text: "Instead, they use water that contains nutrients for the plants.",
                        translation: "その代わりに、彼らは植物のための栄養分を含んだ水を使用します。",
                        grammarAnalysis: {
                            mainVerbs: ["use"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Instead)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>water that contains nutrients for the plants</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(その代わりに)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>使います</span> <span class='t-O'>植物のための栄養分を含んだ水を</span>。",
                            naturalTranslation: "その代わりに、彼らは植物のための栄養分を含んだ水を使用します。",
                            vocabulary: [
                                { word: "Instead", meaning: "「その代わりに」。" },
                                { word: "nutrients", meaning: "「栄養分」。" },
                                { word: "contains", meaning: "「含む」。" }
                            ],
                            grammarNotes: [
                                { phrase: "water that contains", explanation: "<b>that</b>: 関係代名詞。waterを修飾する。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "By using these technologies, farmers can control the environment perfectly.",
                        translation: "これらの技術を使用することで、農家は環境を完璧に制御することができます。",
                        grammarAnalysis: {
                            mainVerbs: ["can control"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(By using these technologies)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can control</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the environment</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>perfectly</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(これらの技術を使うことによって)</span>、<span class='t-S'>農家は</span> <span class='t-V'>制御できます</span> <span class='t-O'>環境を</span> <span class='t-M'>完璧に</span>。",
                            naturalTranslation: "これらの技術を使用することで、農家は環境を完璧に制御することができます。",
                            vocabulary: [
                                { word: "technologies", meaning: "「技術」。" },
                                { word: "control", meaning: "「制御する」「管理する」。" },
                                { word: "environment", meaning: "「環境」。" }
                            ],
                            grammarNotes: [
                                { phrase: "By using", explanation: "<b>By doing</b>: 「〜することによって」。手段を表す。" }
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
                        text: "This method of farming has several positive benefits.",
                        translation: "この農業の方法にはいくつかの肯定的な利点があります。",
                        grammarAnalysis: {
                            mainVerbs: ["has"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This method of farming</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>several positive benefits</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>この農業の方法は</span> <span class='t-V'>持っています</span> <span class='t-O'>いくつかの肯定的な利点を</span>。",
                            naturalTranslation: "この農業の方法にはいくつかの肯定的な利点があります。",
                            vocabulary: [
                                { word: "several", meaning: "「いくつかの」。" },
                                { word: "positive", meaning: "「肯定的な」「良い」。" },
                                { word: "benefits", meaning: "「利点」「利益」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 16,
                        text: "One of them is that vegetables can be grown 24 hours a day, 365 days a year, regardless of the weather outside.",
                        translation: "その一つは、外の天候に関係なく、野菜を1日24時間、1年365日育てることができるということです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>One of them</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that vegetables can be grown 24 hours a day, 365 days a year, regardless of the weather outside</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>そのうちの一つは</span> <span class='t-V'>です</span> <span class='t-C'>外の天候に関係なく野菜をいつでも育てられるということ</span>。",
                            naturalTranslation: "その一つは、外の天候に関係なく、野菜を1日24時間、1年365日育てることができるということです。",
                            vocabulary: [
                                { word: "grown", meaning: "「育てられる」。growの過去分詞。" },
                                { word: "regardless of", meaning: "「〜に関係なく」。" }
                            ],
                            grammarNotes: [
                                { phrase: "that vegetables can be grown", explanation: "<b>that</b>: 接続詞。補語節を作る。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "This allows farmers to produce a stable amount of food.",
                        translation: "これにより、農家は安定した量の食料を生産することができます。",
                        grammarAnalysis: {
                            mainVerbs: ["allows"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allows</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>farmers</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to produce a stable amount of food</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>可能にします</span> <span class='t-O'>農家が</span> <span class='t-C'>安定した量の食料を生産することを</span>。",
                            naturalTranslation: "これにより、農家は安定した量の食料を生産することができます。",
                            vocabulary: [
                                { word: "allows", meaning: "「可能にする」「許す」。" },
                                { word: "stable", meaning: "「安定した」。" },
                                { word: "amount", meaning: "「量」。" }
                            ],
                            grammarNotes: [
                                { phrase: "allows farmers to produce", explanation: "<b>allow O to do</b>: 「Oが〜するのを可能にする」。SのおかげでOは〜できる。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "Another benefit is that indoor farms use much less water than traditional farms because the water is recycled.",
                        translation: "もう一つの利点は、水が再利用されるため、屋内農場は伝統的な農場よりもはるかに少ない水しか使用しないということです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Another benefit</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that <span class='chunk S2-group'><span class='text'>indoor farms</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>use</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>much less water than traditional farms</span><span class='tag'>O'</span></span> <span class='chunk M2-group'><span class='text'>(because the water is recycled)</span><span class='tag'>M'</span></span></span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>もう一つの利点は</span> <span class='t-V'>です</span> <span class='t-C'>屋内農場ははるかに少ない水しか使わないということ</span>。",
                            naturalTranslation: "もう一つの利点は、水が再利用されるため、屋内農場は伝統的な農場よりもはるかに少ない水しか使用しないということです。",
                            vocabulary: [
                                { word: "less", meaning: "「より少ない」。littleの比較級。" },
                                { word: "recycled", meaning: "「再利用される」。" }
                            ],
                            grammarNotes: [
                                { phrase: "much less", explanation: "<b>much</b>: 比較級(less)を強調する。「はるかに」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "In addition, since these farms can be built in the center of big cities, fresh vegetables can be delivered to consumers quickly.",
                        translation: "さらに、これらの農場は大都市の中心に建設できるため、新鮮な野菜を消費者に素早く届けることができます。",
                        grammarAnalysis: {
                            mainVerbs: ["can be delivered"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In addition)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(since <span class='chunk S2-group'><span class='text'>these farms</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>can be built</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>in the center of big cities</span><span class='tag'>M'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>fresh vegetables</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can be delivered</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>to consumers</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>quickly</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-M'>(<span class='t-S2'>これらの農場は</span> <span class='t-V2'>建設できる</span>ので <span class='t-M2'>大都市の中心に</span>)</span>、<span class='t-S'>新鮮な野菜は</span> <span class='t-V'>届けられます</span> <span class='t-M'>消費者に</span> <span class='t-M'>素早く</span>。",
                            naturalTranslation: "さらに、これらの農場は大都市の中心に建設できるため、新鮮な野菜を消費者に素早く届けることができます。",
                            vocabulary: [
                                { word: "In addition", meaning: "「さらに」「加えて」。" },
                                { word: "delivered", meaning: "「配達される」「届けられる」。" },
                                { word: "consumers", meaning: "「消費者」。" }
                            ],
                            grammarNotes: [
                                { phrase: "since", explanation: "<b>since</b>: 理由を表す接続詞。「〜なので」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 20,
                        text: "However, there are challenges to the indoor farming industry.",
                        translation: "しかし、屋内農業産業には課題もあります。",
                        grammarAnalysis: {
                            mainVerbs: ["are"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>there</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>challenges</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(to the indoor farming industry)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-M'>そこには</span> <span class='t-V'>あります</span> <span class='t-S'>課題が</span> <span class='t-M'>(屋内農業産業にとっての)</span>。",
                            naturalTranslation: "しかし、屋内農業産業には課題もあります。",
                            vocabulary: [
                                { word: "challenges", meaning: "「課題」「難問」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 21,
                        text: "One of the biggest problems is the high cost of electricity.",
                        translation: "最大の問題の一つは、電気代が高いことです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>One of the biggest problems</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the high cost of electricity</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>最大の問題の一つは</span> <span class='t-V'>です</span> <span class='t-C'>電気代が高いこと</span>。",
                            naturalTranslation: "最大の問題の一つは、電気代が高いことです。",
                            vocabulary: [
                                { word: "cost", meaning: "「費用」「代金」。" },
                                { word: "electricity", meaning: "「電気」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 22,
                        text: "Keeping the LED lights and air conditioners on all the time requires a huge amount of energy.",
                        translation: "LEDライトやエアコンを常に稼働させておくには、膨大な量のエネルギーが必要です。",
                        grammarAnalysis: {
                            mainVerbs: ["requires"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Keeping the LED lights and air conditioners on all the time</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>requires</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a huge amount of energy</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>LEDライトやエアコンを常にオンにしておくことは</span> <span class='t-V'>必要とします</span> <span class='t-O'>膨大な量のエネルギーを</span>。",
                            naturalTranslation: "LEDライトやエアコンを常に稼働させておくには、膨大な量のエネルギーが必要です。",
                            vocabulary: [
                                { word: "Keeping", meaning: "「保つこと」。動名詞。" },
                                { word: "air conditioners", meaning: "「エアコン」。" },
                                { word: "requires", meaning: "「必要とする」。" },
                                { word: "huge", meaning: "「巨大な」「膨大な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "Keeping ... on", explanation: "<b>Keep O C</b>: 「OをCの状態に保つ」。on（ついている状態）に保つ。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "This makes the price of the vegetables higher than vegetables grown outside.",
                        translation: "これにより、野菜の価格は屋外で栽培された野菜よりも高くなります。",
                        grammarAnalysis: {
                            mainVerbs: ["makes"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>makes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the price of the vegetables</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>higher than vegetables grown outside</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>します</span> <span class='t-O'>野菜の価格を</span> <span class='t-C'>屋外で育った野菜より高く</span>。",
                            naturalTranslation: "これにより、野菜の価格は屋外で栽培された野菜よりも高くなります。",
                            vocabulary: [
                                { word: "price", meaning: "「価格」。" }
                            ],
                            grammarNotes: [
                                { phrase: "makes ... higher", explanation: "<b>make O C</b>: 「OをCにする」。" }
                            ]
                        }
                    },
                    {
                        id: 24,
                        text: "Moreover, starting an indoor farm requires expensive equipment and high technology.",
                        translation: "さらに、屋内農場を始めるには高価な設備と高度な技術が必要です。",
                        grammarAnalysis: {
                            mainVerbs: ["requires"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Moreover)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>starting an indoor farm</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>requires</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>expensive equipment and high technology</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(さらに)</span>、<span class='t-S'>屋内農場を始めることは</span> <span class='t-V'>必要とします</span> <span class='t-O'>高価な設備と高度な技術を</span>。",
                            naturalTranslation: "さらに、屋内農場を始めるには高価な設備と高度な技術が必要です。",
                            vocabulary: [
                                { word: "Moreover", meaning: "「さらに」。" },
                                { word: "expensive", meaning: "「高価な」。" },
                                { word: "equipment", meaning: "「設備」「機器」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 25,
                        text: "While indoor farming has potential, companies need to solve these cost problems to make it more popular.",
                        translation: "屋内農業には可能性がありますが、企業はそれをより普及させるためにこれらのコスト問題を解決する必要があります。",
                        grammarAnalysis: {
                            mainVerbs: ["need"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(While <span class='chunk S2-group'><span class='text'>indoor farming</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>has</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>potential</span><span class='tag'>O'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>need to solve</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>these cost problems</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to make it more popular)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(<span class='t-S2'>屋内農業は</span> <span class='t-V2'>持っていますが</span> <span class='t-O2'>可能性を</span>)</span>、<span class='t-S'>企業は</span> <span class='t-V'>解決する必要があります</span> <span class='t-O'>これらのコスト問題を</span> <span class='t-M'>(それをより人気にするために)</span>。",
                            naturalTranslation: "屋内農業には可能性がありますが、企業はそれをより普及させるためにこれらのコスト問題を解決する必要があります。",
                            vocabulary: [
                                { word: "While", meaning: "「〜だけれども」「一方で」。" },
                                { word: "potential", meaning: "「可能性」「潜在能力」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to make it more popular", explanation: "<b>make O C</b>: 「OをCにする」。popular（人気がある、普及している）にする。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "What is true about indoor farming?",
                textTranslation: "屋内農業について正しいことは何ですか？",
                choices: [
                    { id: 1, text: "It is becoming popular because traditional farmers are getting older.", translation: "伝統的な農家が高齢化しているため人気になっている。", isCorrect: false },
                    { id: 2, text: "It is attracting attention as a way to solve weather-related farming problems.", translation: "天候に関連する農業問題を解決する方法として注目されている。", isCorrect: true, highlight: "solve these problems ... attracted attention" },
                    { id: 3, text: "It uses sunlight to grow vegetables in large buildings in the US.", translation: "アメリカの大きな建物で野菜を育てるために日光を使っている。", isCorrect: false },
                    { id: 4, text: "It requires farmers to work harder than on traditional farms.", translation: "伝統的な農場よりも農家が一生懸命働く必要がある。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。なぜ注目を集めているのか(attracted attention)を探しましょう。",
                    targetSentenceId: 5,
                    highlightWord: "solve these problems ... attracted attention",
                    highlightWordSentenceId: 5
                },
                keywords: ["true", "indoor farming"],
                keywordExplanations: {
                    "true": "正しい。選択肢の中から本文と一致するものを選ぶ。",
                    "indoor farming": "屋内農業。テーマ。"
                },
                keywordMatches: [
                    { sentenceId: 5, text: "a new method of farming has attracted attention recently", keyword: "indoor farming" }
                ],
                choiceAdvice: "1: 高齢化については書かれていません。 2: 天候問題の解決策として注目されています。 3: 日光は使いません。 4: 労働内容については言及されていません。",
                logic: [
                    { type: "text", content: "本文(Sentence 3-4): 「伝統的農業は天候に依存し、大雨や高熱でダメージを受ける」" },
                    { type: "text", content: "本文(Sentence 5): 「これらの問題を解決するために(To solve these problems)、新しい手法が注目を集めている」" },
                    { type: "text", content: "結論: 「天候に関連する問題を解決する方法として注目されている」という選択肢2が正しい。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 2,
                text: "To grow plants without sunlight,",
                textTranslation: "日光なしで植物を育てるために、",
                choices: [
                    { id: 1, text: "farmers use special soil that contains a lot of nutrients.", translation: "農家は多くの栄養分を含む特別な土を使う。", isCorrect: false },
                    { id: 2, text: "plants are placed on the roof of the building during the day.", translation: "日中は植物が建物の屋上に置かれる。", isCorrect: false },
                    { id: 3, text: "special LED lights are used to help the plants grow.", translation: "植物の成長を助けるために特別なLEDライトが使われる。", isCorrect: true, highlight: "use special LED lights" },
                    { id: 4, text: "farmers need to open the windows to let fresh air in.", translation: "農家は新鮮な空気を入れるために窓を開ける必要がある。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「sunlight」（日光）がない場所でどうするかを探しましょう。",
                    targetSentenceId: 11,
                    highlightWord: "use special LED lights",
                    highlightWordSentenceId: 11
                },
                keywords: ["without sunlight", "grow plants"],
                keywordExplanations: {
                    "without sunlight": "日光なしで。no sunlightと同じ。"
                },
                keywordMatches: [
                    { sentenceId: 11, text: "there is no sunlight inside the buildings", keyword: "without sunlight" }
                ],
                choiceAdvice: "1: 土は使いません(do not use soil)。 2: 屋内なので屋上ではありません。 3: LEDライトを使います。 4: 窓についての言及はありません。",
                logic: [
                    { type: "text", content: "本文(Sentence 11): 「建物内には日光がないため(no sunlight)、農家は特別なLEDライトを使う(use special LED lights)」" },
                    { type: "text", content: "結論: 選択肢3が本文の内容と一致する。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 3,
                text: "One of the positive features of indoor farming is that",
                textTranslation: "屋内農業の肯定的な特徴の一つは、",
                choices: [
                    { id: 1, text: "it uses much less water because the water is recycled.", translation: "水が再利用されるため、はるかに少ない水を使うことだ。", isCorrect: true, highlight: "use much less water ... recycled" },
                    { id: 2, text: "it costs almost nothing to start a new farm in the city.", translation: "市内で新しい農場を始めるのにほとんど費用がかからないことだ。", isCorrect: false },
                    { id: 3, text: "it can produce vegetables only during the summer season.", translation: "夏の間だけ野菜を生産できることだ。", isCorrect: false },
                    { id: 4, text: "it allows consumers to grow their own vegetables at home.", translation: "消費者が自宅で自分の野菜を育てることができることだ。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「benefit」（利点）や「positive」な点を探しましょう。",
                    targetSentenceId: 18,
                    highlightWord: "use much less water",
                    highlightWordSentenceId: 18
                },
                keywords: ["positive features", "benefit"],
                keywordExplanations: {
                    "positive features": "肯定的な特徴。benefitsと同じ。"
                },
                keywordMatches: [
                    { sentenceId: 15, text: "several positive benefits", keyword: "positive features" },
                    { sentenceId: 18, text: "Another benefit", keyword: "positive features" }
                ],
                choiceAdvice: "1: 水の再利用による節水は利点です。 2: 開始には高価な設備が必要です。 3: 年中栽培可能です。 4: 消費者まで届ける話はありますが、自宅栽培の話ではありません。",
                logic: [
                    { type: "text", content: "本文(Sentence 18): 「もう一つの利点は、水が再利用されるため(because the water is recycled)、伝統的農場よりはるかに少ない水を使うことだ(use much less water)」" },
                    { type: "text", content: "結論: 選択肢1が本文と完全に一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 4,
                text: "What is one of the challenges that the indoor farming industry faces?",
                textTranslation: "屋内農業産業が直面する課題の一つは何ですか？",
                choices: [
                    { id: 1, text: "The vegetables do not taste as good as traditional ones.", translation: "野菜の味が伝統的なものほど良くない。", isCorrect: false },
                    { id: 2, text: "It is difficult to find places to build farms in big cities.", translation: "大都市で農場を建てる場所を見つけるのが難しい。", isCorrect: false },
                    { id: 3, text: "The cost of electricity to run the farm is very high.", translation: "農場を運営するための電気代が非常に高い。", isCorrect: true, highlight: "high cost of electricity" },
                    { id: 4, text: "There are not enough seeds to grow vegetables indoors.", translation: "屋内で野菜を育てるための種が十分にない。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「challenges」（課題）や「problems」（問題）を探しましょう。",
                    targetSentenceId: 21,
                    highlightWord: "high cost of electricity",
                    highlightWordSentenceId: 21
                },
                keywords: ["challenges", "faces"],
                keywordExplanations: {
                    "challenges": "課題。problemsと同義。",
                    "faces": "直面する。"
                },
                keywordMatches: [
                    { sentenceId: 20, text: "challenges to the indoor farming industry", keyword: "challenges" },
                    { sentenceId: 21, text: "biggest problems", keyword: "challenges" }
                ],
                choiceAdvice: "1: 味についての記述はありません。 2: 都市の中心に建設可能とあります。 3: 電気代が高いことが最大の問題の一つです。 4: 種不足については言及されていません。",
                logic: [
                    { type: "text", content: "本文(Sentence 20-21): 「課題がある。最大の問題の一つは、電気代が高いことだ(high cost of electricity)」" },
                    { type: "text", content: "結論: 選択肢3が正しい。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 5,
                text: "What do we learn from the passage?",
                textTranslation: "この文章から何を学びますか？",
                choices: [
                    { id: 1, text: "Indoor farming will completely replace traditional farming soon.", translation: "屋内農業はまもなく完全に伝統的農業にって代わるだろう。", isCorrect: false },
                    { id: 2, text: "The price of indoor vegetables is likely to be lower than outdoor ones.", translation: "屋内野菜の価格は屋外野菜よりも安くなりそうだ。", isCorrect: false },
                    { id: 3, text: "Indoor farming has benefits, but high costs are a problem to solve.", translation: "屋内農業には利点があるが、高いコストは解決すべき問題である。", isCorrect: true, highlight: "need to solve these cost problems" },
                    { id: 4, text: "Most people in the world prefer vegetables grown in indoor farms.", translation: "世界のほとんどの人々は屋内農場で育てられた野菜を好む。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "記事全体のまとめ、特に最終段落の結論に注目しましょう。",
                    targetSentenceId: 25,
                    highlightWord: "need to solve these cost problems",
                    highlightWordSentenceId: 25
                },
                keywords: ["learn", "passage"],
                keywordExplanations: {
                    "learn": "学ぶ。全体の内容を踏まえた教訓や結論。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 完全に取って代わるとは言っていません。 2: 価格は屋外より高いと書かれています。 3: 利点と課題（コスト）の両方に触れた結論として適切です。 4: 好みについては書かれていません。",
                logic: [
                    { type: "text", content: "本文(Sentence 25): 「屋内農業には可能性があるが(While indoor farming has potential)、企業は普及させるためにコスト問題を解決する必要がある(need to solve these cost problems)」" },
                    { type: "text", content: "結論: 利点と課題の両方をまとめた選択肢3が正しい。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Indoor Vegetable Farms (屋内農業)",
            intro: "近年注目されている「屋内農業（垂直農法）」についての説明です。気候変動に左右されない新しい食糧生産システムとして期待されていますが、コスト面での課題も抱えています。",
            points: [
                {
                    label: "1. 導入 (Introduction)",
                    text: "世界的な人口増加に伴い、食糧確保が重要になっています。しかし、伝統的な農業は天候に大きく依存しており不安定です。そこで、屋内農業という新しい手法が日米などで注目を集め、拡大しています。"
                },
                {
                    label: "2. 方法 (Methods)",
                    text: "屋内農業の一般的な方法は、棚を積み重ねる「垂直農業」です。日光の代わりにLEDライトを使い、土の代わりに栄養分を含んだ水を使って植物を育てます。これにより環境を完全に制御できます。"
                },
                {
                    label: "3. 利点 (Benefits)",
                    text: "大きな利点は、天候に関係なく24時間365日栽培でき、安定供給が可能なことです。また、水を循環利用するため節水効果が高く、都市部に建設できるため消費者に新鮮な野菜を早く届けることができます。"
                },
                {
                    label: "4. 課題 (Challenges)",
                    text: "最大の課題は電気代です。照明や空調に莫大なエネルギーが必要で、野菜の価格が割高になります。初期投資も高額です。普及のためにはこれらのコスト問題を解決する必要があります。"
                }
            ]
        }
    },
    {
        id: "grade-pre2-plus-original-electronic-waste",
        grade: "準2級プラス",
        title: "The Problem of Electronic Waste",
        subTitle: "問題2",
        genre: "環境 / 技術 / 社会",
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Electronic+Waste",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Technology is changing the world quickly.",
                        translation: "科学技術は世界を急速に変えています。",
                        grammarAnalysis: {
                            mainVerbs: ["is changing"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Technology</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is changing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the world</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>quickly</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>科学技術は</span> <span class='t-V'>変えています</span> <span class='t-O'>世界を</span> <span class='t-M'>急速に</span>。",
                            naturalTranslation: "科学技術は世界を急速に変えています。",
                            vocabulary: [
                                { word: "Technology", meaning: "「科学技術」「テクノロジー」。" },
                                { word: "quickly", meaning: "「急速に」「素早く」。" }
                            ],
                            grammarNotes: [
                                { phrase: "is changing", explanation: "<b>is changing</b>: 現在進行形。「変えつつある」という変化の途中を表す。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "Every year, companies produce new smartphones, computers, and televisions.",
                        translation: "毎年、企業は新しいスマートフォン、コンピューター、そしてテレビを生産しています。",
                        grammarAnalysis: {
                            mainVerbs: ["produce"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Every year)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>produce</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>new smartphones, computers, and televisions</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(毎年)</span>、<span class='t-S'>企業は</span> <span class='t-V'>生産しています</span> <span class='t-O'>新しいスマートフォン、コンピューター、そしてテレビを</span>。",
                            naturalTranslation: "毎年、企業は新しいスマートフォン、コンピューター、そしてテレビを生産しています。",
                            vocabulary: [
                                { word: "produce", meaning: "「生産する」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 3,
                        text: "Many people want to buy the latest models, so they throw away their old devices even if they still work.",
                        translation: "多くの人々は最新のモデルを買いたがるため、たとえまだ動くとしても古い機器を捨ててしまいます。",
                        grammarAnalysis: {
                            mainVerbs: ["want", "throw away"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>want to buy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the latest models</span><span class='tag'>O</span></span>, so <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>throw away</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their old devices</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(even if they still work)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>多くの人々は</span> <span class='t-V'>買いたがります</span> <span class='t-O'>最新のモデルを</span>、だから<span class='t-S'>彼らは</span> <span class='t-V'>捨ててしまいます</span> <span class='t-O'>自分たちの古い機器を</span> <span class='t-M'>(たとえまだ動くとしても)</span>。",
                            naturalTranslation: "多くの人々は最新のモデルを買いたがるため、たとえまだ動くとしても古い機器を捨ててしまいます。",
                            vocabulary: [
                                { word: "latest", meaning: "「最新の」。lateの最上級。" },
                                { word: "throw away", meaning: "「捨てる」。" },
                                { word: "even if", meaning: "「たとえ〜だとしても」。" }
                            ],
                            grammarNotes: [
                                { phrase: "want to buy", explanation: "<b>want to do</b>: 〜したいと思う。" },
                                { phrase: "so", explanation: "<b>so</b>: 結果を表す接続詞。「だから」「そのため」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "This trash is called electronic waste, or e-waste.",
                        translation: "このゴミは電子ゴミ、あるいはe-wasteと呼ばれています。",
                        grammarAnalysis: {
                            mainVerbs: ["is called"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This trash</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>electronic waste, or e-waste</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>このゴミは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>電子ゴミ、あるいはe-wasteと</span>。",
                            naturalTranslation: "このゴミは電子ゴミ、あるいはe-wasteと呼ばれています。",
                            vocabulary: [
                                { word: "trash", meaning: "「ゴミ」。" },
                                { word: "called", meaning: "「〜と呼ばれる」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 5,
                        text: "According to a recent report, the amount of e-waste is increasing rapidly around the world.",
                        translation: "最近の報告によると、電子ゴミの量は世界中で急速に増加しています。",
                        grammarAnalysis: {
                            mainVerbs: ["is increasing"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(According to a recent report)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the amount of e-waste</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is increasing</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>rapidly</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>around the world</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(最近の報告によると)</span>、<span class='t-S'>電子ゴミの量は</span> <span class='t-V'>増加しています</span> <span class='t-M'>急速に</span> <span class='t-M'>世界中で</span>。",
                            naturalTranslation: "最近の報告によると、電子ゴミの量は世界中で急速に増加しています。",
                            vocabulary: [
                                { word: "According to", meaning: "「〜によると」。" },
                                { word: "recent", meaning: "「最近の」。" },
                                { word: "amount", meaning: "「量」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 6,
                        text: "It has become one of the fastest-growing types of waste today.",
                        translation: "それは今日、最も急速に増えているゴミの種類の一つになっています。",
                        grammarAnalysis: {
                            mainVerbs: ["has become"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has become</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>one of the fastest-growing types of waste</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>today</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>なっています</span> <span class='t-C'>最も急速に増えているゴミの種類の一つに</span> <span class='t-M'>今日</span>。",
                            naturalTranslation: "それは今日、最も急速に増えているゴミの種類の一つになっています。",
                            vocabulary: [
                                { word: "become", meaning: "「〜になる」。" },
                                { word: "fastest-growing", meaning: "「最も急速に成長している（増えている）」。" },
                                { word: "types", meaning: "「種類」。" }
                            ],
                            grammarNotes: [
                                { phrase: "has become", explanation: "<b>has become</b>: 現在完了形。「（すでに）〜になってしまった」。" },
                                { phrase: "one of the", explanation: "<b>one of the + 最上級 + 複数名詞</b>: 「最も〜なものの一つ」。" }
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
                        text: "E-waste is different from regular trash for a few reasons.",
                        translation: "電子ゴミはいくつかの理由から、通常のゴミとは異なります。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>E-waste</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>different from regular trash</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for a few reasons</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>電子ゴミは</span> <span class='t-V'>です</span> <span class='t-C'>通常のゴミとは異なる</span> <span class='t-M'>いくつかの理由で</span>。",
                            naturalTranslation: "電子ゴミはいくつかの理由から、通常のゴミとは異なります。",
                            vocabulary: [
                                { word: "waste", meaning: "「ゴミ」「廃棄物」。" },
                                { word: "regular", meaning: "「通常の」「規則正しい」。" }
                            ],
                            grammarNotes: [
                                { phrase: "different from", explanation: "<b>be different from</b>: 〜とは異なる。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "First, electronic devices contain dangerous materials, such as lead and mercury.",
                        translation: "第一に、電子機器は鉛や水銀などの危険な物質を含んでいます。",
                        grammarAnalysis: {
                            mainVerbs: ["contain"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(First)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>electronic devices</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>contain</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>dangerous materials, such as lead and mercury</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(第一に)</span>、<span class='t-S'>電子機器は</span> <span class='t-V'>含んでいます</span> <span class='t-O'>危険な物質を（例えば鉛や水銀のような）</span>。",
                            naturalTranslation: "第一に、電子機器は鉛や水銀などの危険な物質を含んでいます。",
                            vocabulary: [
                                { word: "contain", meaning: "「含む」。" },
                                { word: "dangerous", meaning: "「危険な」。" },
                                { word: "materials", meaning: "「物質」「材料」。" },
                                { word: "such as", meaning: "「〜のような」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 9,
                        text: "If these materials are not handled correctly, they can damage the environment.",
                        translation: "もしこれらの物質が正しく扱われなければ、環境に害を与える可能性があります。",
                        grammarAnalysis: {
                            mainVerbs: ["can damage"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(If <span class='chunk S2-group'><span class='text'>these materials</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are not handled</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>correctly</span><span class='tag'>M'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can damage</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the environment</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(もし<span class='t-S2'>これらの物質が</span> <span class='t-V2'>扱われないなら</span> <span class='t-M2'>正しく</span>)</span>、<span class='t-S'>それらは</span> <span class='t-V'>害を与える可能性があります</span> <span class='t-O'>環境に</span>。",
                            naturalTranslation: "もしこれらの物質が正しく扱われなければ、環境に害を与える可能性があります。",
                            vocabulary: [
                                { word: "handled", meaning: "「扱われる」。handleの過去分詞。" },
                                { word: "correctly", meaning: "「正しく」。" },
                                { word: "damage", meaning: "「害を与える」「損なう」。" }
                            ],
                            grammarNotes: [
                                { phrase: "are not handled", explanation: "<b>be handled</b>: 受動態。「扱われる」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "Second, e-waste also contains valuable metals like gold and silver.",
                        translation: "第二に、電子ゴミは金や銀のような貴重な金属も含んでいます。",
                        grammarAnalysis: {
                            mainVerbs: ["contains"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Second)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>e-waste</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>also</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>contains</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>valuable metals like gold and silver</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(第二に)</span>、<span class='t-S'>電子ゴミは</span> <span class='t-M'>また</span> <span class='t-V'>含んでいます</span> <span class='t-O'>貴重な金属を（金や銀のような）</span>。",
                            naturalTranslation: "第二に、電子ゴミは金や銀のような貴重な金属も含んでいます。",
                            vocabulary: [
                                { word: "valuable", meaning: "「貴重な」「高価な」。" },
                                { word: "metals", meaning: "「金属」。" },
                                { word: "like", meaning: "「〜のような」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 11,
                        text: "For example, there is a small amount of gold inside every smartphone.",
                        translation: "例えば、すべてのスマートフォンの内部には少量の金があります。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For example)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>there</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>a small amount of gold</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>inside every smartphone</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(例えば)</span>、<span class='t-M'>そこには</span> <span class='t-V'>あります</span> <span class='t-S'>少量の金が</span> <span class='t-M'>すべてのスマートフォンの内部に</span>。",
                            naturalTranslation: "例えば、すべてのスマートフォンの内部には少量の金があります。",
                            vocabulary: [
                                { word: "amount", meaning: "「量」。" },
                                { word: "inside", meaning: "「〜の内側に」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 12,
                        text: "However, taking these valuable materials out of the devices requires special technology and takes a lot of time.",
                        translation: "しかし、機器からこれらの貴重な物質を取り出すには特別な技術が必要で、多くの時間がかかります。",
                        grammarAnalysis: {
                            mainVerbs: ["requires", "takes"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>taking these valuable materials out of the devices</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>requires</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>special technology</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>takes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a lot of time</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>機器からこれらの貴重な物質を取り出すことは</span> <span class='t-V'>必要とします</span> <span class='t-O'>特別な技術を</span>、そして<span class='t-V'>かかります</span> <span class='t-O'>多くの時間が</span>。",
                            naturalTranslation: "しかし、機器からこれらの貴重な物質を取り出すには特別な技術が必要で、多くの時間がかかります。",
                            vocabulary: [
                                { word: "requires", meaning: "「必要とする」。" },
                                { word: "technology", meaning: "「技術」。" }
                            ],
                            grammarNotes: [
                                { phrase: "taking ... out of", explanation: "<b>take A out of B</b>: BからAを取り出す。" },
                                { phrase: "taking", explanation: "<b>taking</b>: 動名詞主語。「〜すること」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 13,
                        text: "Sadly, a lot of e-waste is sent to developing countries.",
                        translation: "悲しいことに、多くの電子ゴミは発展途上国に送られています。",
                        grammarAnalysis: {
                            mainVerbs: ["is sent"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Sadly)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a lot of e-waste</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is sent</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>to developing countries</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(悲しいことに)</span>、<span class='t-S'>多くの電子ゴミは</span> <span class='t-V'>送られています</span> <span class='t-M'>発展途上国に</span>。",
                            naturalTranslation: "悲しいことに、多くの電子ゴミは発展途上国に送られています。",
                            vocabulary: [
                                { word: "Sadly", meaning: "「悲しいことに」。" },
                                { word: "developing countries", meaning: "「発展途上国」。" }
                            ],
                            grammarNotes: [
                                { phrase: "is sent", explanation: "<b>be sent</b>: 受動態。「送られる」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "In these places, workers often try to get the valuable metals out of the devices by hand.",
                        translation: "こうした場所では、労働者たちがしばしば手作業で機器から貴重な金属を取り出そうとします。",
                        grammarAnalysis: {
                            mainVerbs: ["try"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In these places)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>workers</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>often</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>try to get</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the valuable metals</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>out of the devices</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>by hand</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(こうした場所では)</span>、<span class='t-S'>労働者は</span> <span class='t-M'>しばしば</span> <span class='t-V'>手に入れようとします</span> <span class='t-O'>貴重な金属を</span> <span class='t-M'>機器から</span> <span class='t-M'>手作業で</span>。",
                            naturalTranslation: "こうした場所では、労働者たちがしばしば手作業で機器から貴重な金属を取り出そうとします。",
                            vocabulary: [
                                { word: "workers", meaning: "「労働者」。" },
                                { word: "try to", meaning: "「〜しようとする」。" },
                                { word: "by hand", meaning: "「手作業で」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 15,
                        text: "They sometimes burn the plastic parts to get to the metal inside.",
                        translation: "彼らは内部の金属を取り出すためにプラスチック部品を燃やすこともあります。",
                        grammarAnalysis: {
                            mainVerbs: ["burn"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>sometimes</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>burn</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the plastic parts</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to get to the metal inside)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-M'>時々</span> <span class='t-V'>燃やします</span> <span class='t-O'>プラスチック部品を</span> <span class='t-M'>(内部の金属にたどり着くために)</span>。",
                            naturalTranslation: "彼らは内部の金属を取り出すためにプラスチック部品を燃やすこともあります。",
                            vocabulary: [
                                { word: "burn", meaning: "「燃やす」。" },
                                { word: "parts", meaning: "「部品」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to get to", explanation: "<b>to get to</b>: 「〜に到着するために」「〜を手に入れるために」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "This process creates smoke that is bad for their health.",
                        translation: "この工程は彼らの健康に悪い煙を発生させます。",
                        grammarAnalysis: {
                            mainVerbs: ["creates"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This process</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>creates</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>smoke that is bad for their health</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>この工程は</span> <span class='t-V'>生み出します</span> <span class='t-O'>煙を（彼らの健康に悪い）</span>。",
                            naturalTranslation: "この工程は彼らの健康に悪い煙を発生させます。",
                            vocabulary: [
                                { word: "process", meaning: "「工程」「プロセス」。" },
                                { word: "creates", meaning: "「生み出す」「作り出す」。" },
                                { word: "health", meaning: "「健康」。" }
                            ],
                            grammarNotes: [
                                { phrase: "that is bad", explanation: "<b>that</b>: 関係代名詞。smokeを修飾する。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "Also, the dangerous materials from the waste can get into the ground and the water.",
                        translation: "また、ゴミから出る危険な物質が土壌や水に入り込む可能性もあります。",
                        grammarAnalysis: {
                            mainVerbs: ["can get"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the dangerous materials from the waste</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can get</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>into the ground and the water</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-S'>ゴミからの危険な物質は</span> <span class='t-V'>入り込む可能性があります</span> <span class='t-M'>地面や水の中に</span>。",
                            naturalTranslation: "また、ゴミから出る危険な物質が土壌や水に入り込む可能性もあります。",
                            vocabulary: [
                                { word: "ground", meaning: "「地面」「土壌」。" }
                            ],
                            grammarNotes: [
                                { phrase: "get into", explanation: "<b>get into</b>: 「〜の中に入る」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "This causes serious health problems for the people living near these areas.",
                        translation: "これは、これらの地域の近くに住む人々に深刻な健康問題を引き起こします。",
                        grammarAnalysis: {
                            mainVerbs: ["causes"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>causes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>serious health problems</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>for the people living near these areas</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>引き起こします</span> <span class='t-O'>深刻な健康問題を</span> <span class='t-M'>これらの地域の近くに住む人々のために</span>。",
                            naturalTranslation: "これは、これらの地域の近くに住む人々に深刻な健康問題を引き起こします。",
                            vocabulary: [
                                { word: "causes", meaning: "「引き起こす」「原因となる」。" },
                                { word: "serious", meaning: "「深刻な」「重大な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "people living", explanation: "<b>people living</b>: 現在分詞の後置修飾。「住んでいる人々」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 19,
                        text: "To solve this problem, some countries are starting new recycling projects.",
                        translation: "この問題を解決するために、いくつかの国は新しいリサイクルプロジェクトを始めています。",
                        grammarAnalysis: {
                            mainVerbs: ["are starting"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(To solve this problem)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some countries</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are starting</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>new recycling projects</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(この問題を解決するために)</span>、<span class='t-S'>いくつかの国は</span> <span class='t-V'>始めています</span> <span class='t-O'>新しいリサイクルプロジェクトを</span>。",
                            naturalTranslation: "この問題を解決するために、いくつかの国は新しいリサイクルプロジェクトを始めています。",
                            vocabulary: [
                                { word: "solve", meaning: "「解決する」。" },
                                { word: "recycling", meaning: "「リサイクル」。" },
                                { word: "projects", meaning: "「プロジェクト」「計画」。" }
                            ],
                            grammarNotes: [
                                { phrase: "To solve", explanation: "<b>to solve</b>: 目的を表す不定詞。「解決するために」。" },
                                { phrase: "are starting", explanation: "<b>are starting</b>: 現在進行形。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "They are calling this 'urban mining.'",
                        translation: "彼らはこれを「都市鉱山」と呼んでいます。",
                        grammarAnalysis: {
                            mainVerbs: ["are calling"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are calling</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>this</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>'urban mining'</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>呼んでいます</span> <span class='t-O'>これを</span> <span class='t-C'>「都市鉱山」と</span>。",
                            naturalTranslation: "彼らはこれを「都市鉱山」と呼んでいます。",
                            vocabulary: [
                                { word: "urban", meaning: "「都市の」。cityの類語。" },
                                { word: "mining", meaning: "「鉱山」「採掘」。" }
                            ],
                            grammarNotes: [
                                { phrase: "calling this 'urban mining'", explanation: "<b>call O C</b>: OをCと呼ぶ。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "This means collecting old electronics to recover the valuable metals inside them, just like mining for gold in the ground.",
                        translation: "これは、地面から金を採掘するのと同じように、古い電子機器を集めてその中の貴重な金属を回収することを意味します。",
                        grammarAnalysis: {
                            mainVerbs: ["means"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>means</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>collecting old electronics to recover the valuable metals inside them</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(just like mining for gold in the ground)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>意味します</span> <span class='t-O'>古い電子機器を集めることを（中の貴重な金属を回収するために）</span>、<span class='t-M'>(ちょうど地面から金を採掘するのと同じように)</span>。",
                            naturalTranslation: "これは、地面から金を採掘するのと同じように、古い電子機器を集めてその中の貴重な金属を回収することを意味します。",
                            vocabulary: [
                                { word: "means", meaning: "「意味する」。" },
                                { word: "collecting", meaning: "「集めること」。" },
                                { word: "recover", meaning: "「回収する」「取り戻す」。" }
                            ],
                            grammarNotes: [
                                { phrase: "collecting", explanation: "<b>collecting</b>: 動名詞。「集めること」。meanの目的語。" },
                                { phrase: "just like", explanation: "<b>just like</b>: 〜とまったく同じように。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Also, companies are trying to make products that are easier to repair and recycle.",
                        translation: "また、企業は修理やリサイクルがより簡単な製品を作ろうとしています。",
                        grammarAnalysis: {
                            mainVerbs: ["are trying"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are trying to make</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>products that are easier to repair and recycle</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-S'>企業は</span> <span class='t-V'>作ろうとしています</span> <span class='t-O'>製品を（修理やリサイクルがより簡単な）</span>。",
                            naturalTranslation: "また、企業は修理やリサイクルがより簡単な製品を作ろうとしています。",
                            vocabulary: [
                                { word: "trying to", meaning: "「〜しようとする」。" },
                                { word: "repair", meaning: "「修理する」。" }
                            ],
                            grammarNotes: [
                                { phrase: "products that are", explanation: "<b>that</b>: 関係代名詞。productsを修飾する。" },
                                { phrase: "easier to repair", explanation: "<b>easy to do</b>: 〜するのが簡単だ。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "It is important for consumers to use their devices for a longer time to reduce the amount of waste.",
                        translation: "ゴミの量を減らすためには、消費者が自分の機器をより長く使うことが重要です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S(仮)</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>for consumers to use their devices for a longer time</span><span class='tag'>S(真)</span></span> <span class='chunk M-group'><span class='text'>(to reduce the amount of waste)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>重要な</span> <span class='t-S'>消費者が自分の機器をより長く使うことは</span> <span class='t-M'>(ゴミの量を減らすために)</span>。",
                            naturalTranslation: "ゴミの量を減らすためには、消費者が自分の機器をより長く使うことが重要です。",
                            vocabulary: [
                                { word: "consumers", meaning: "「消費者」。" },
                                { word: "reduce", meaning: "「減らす」。" }
                            ],
                            grammarNotes: [
                                { phrase: "It is ... for ... to ...", explanation: "<b>It is C for A to do</b>: Aが〜することはCだ。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "What is true about electronic devices today?",
                textTranslation: "今日の電子機器について正しいことは何ですか？",
                choices: [
                    { id: 1, text: "Companies are producing fewer devices to protect the environment.", translation: "企業は環境を守るために、より少ない機器を生産している。", isCorrect: false },
                    { id: 2, text: "People often replace their devices with new ones even if the old ones are fine.", translation: "人々は、たとえ古いものがまだ良好であっても、頻繁に新しいものに買い替える。", isCorrect: true, highlight: "throw away their old devices even if they still work" },
                    { id: 3, text: "Most people keep their smartphones for more than ten years.", translation: "多くの人々はスマートフォンを10年以上持ち続ける。", isCorrect: false },
                    { id: 4, text: "Old computers are usually given to schools for free.", translation: "古いコンピューターは通常、学校に無料で寄付される。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。人々がどう行動しているか(buy, throw away)を探しましょう。",
                    targetSentenceId: 3,
                    highlightWord: "throw away their old devices even if they still work",
                    highlightWordSentenceId: 3
                },
                keywords: ["true", "electronic devices"],
                keywordExplanations: {
                    "true": "正しい。本文と一致する選択肢を選ぶ。"
                },
                keywordMatches: [
                    { sentenceId: 3, text: "throw away their old devices even if they still work", keyword: "old ones are fine" }
                ],
                choiceAdvice: "1: 減らしているとは書かれていません。増えています。 2: 本文 'even if they still work' が 'even if the old ones are fine' と一致します。 3: 10年という記述はありません。 4: 学校への寄付については書かれていません。",
                logic: [
                    { type: "text", content: "本文(Sentence 3): 「多くの人々は最新モデル欲しさに、まだ動くのに古い機器を捨ててしまう(throw away their old devices even if they still work)」" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 2,
                text: "Why is e-waste considered different from regular trash?",
                textTranslation: "なぜ電子ゴミは通常のゴミと異なると考えられているのですか？",
                choices: [
                    { id: 1, text: "It contains both dangerous materials and valuable metals.", translation: "それは危険な物質と貴重な金属の両方を含んでいるから。", isCorrect: true, highlight: "dangerous materials ... valuable metals" },
                    { id: 2, text: "It is made entirely of plastic and is easy to burn.", translation: "それは完全にプラスチックで作られており、燃やすのが簡単だから。", isCorrect: false },
                    { id: 3, text: "It can be recycled easily by anyone at home.", translation: "それは自宅で誰でも簡単にリサイクルできるから。", isCorrect: false },
                    { id: 4, text: "It is usually heavier than furniture or cars.", translation: "それは通常、家具や車よりも重いから。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。FirstとSecondの理由（dangerousとvaluable）を組み合わせましょう。",
                    targetSentenceId: 10,
                    highlightWord: "dangerous materials ... valuable metals",
                    highlightWordSentenceId: 8
                },
                keywords: ["different", "regular trash"],
                keywordExplanations: {
                    "different": "異なる。"
                },
                keywordMatches: [
                    { sentenceId: 8, text: "First, electronic devices contain dangerous materials", keyword: "dangerous materials" },
                    { sentenceId: 10, text: "Second, e-waste also contains valuable metals", keyword: "valuable metals" }
                ],
                choiceAdvice: "1: 危険な物質(dangerous materials)と貴重な金属(valuable metals)の両方が理由として挙げられています。 2: 完全にプラスチックではありません。 3: 家庭で簡単にはリサイクルできません。 4: 重さの比較はありません。",
                logic: [
                    { type: "text", content: "本文(Sentence 8): 「第一に、危険な物質を含んでいる(contain dangerous materials)」" },
                    { type: "text", content: "本文(Sentence 10): 「第二に、貴重な金属も含んでいる(contains valuable metals)」" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 3,
                text: "What is a problem in developing countries regarding e-waste?",
                textTranslation: "電子ゴミに関して、発展途上国での問題は何ですか？",
                choices: [
                    { id: 1, text: "There are not enough workers to fix the old computers.", translation: "古いコンピューターを修理する労働者が十分にいない。", isCorrect: false },
                    { id: 2, text: "The valuable metals are often stolen by foreign companies.", translation: "貴重な金属が外国企業によってしばしば盗まれる。", isCorrect: false },
                    { id: 3, text: "Workers' health is damaged by the smoke from burning parts.", translation: "労働者の健康が、部品を燃やすことによる煙で害されている。", isCorrect: true, highlight: "creates smoke that is bad for their health" },
                    { id: 4, text: "The government forces people to buy new smartphones.", translation: "政府が人々に新しいスマートフォンを買うよう強制している。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「health」（健康）への悪影響について書かれている部分を探しましょう。",
                    targetSentenceId: 16,
                    highlightWord: "creates smoke that is bad for their health",
                    highlightWordSentenceId: 16
                },
                keywords: ["problem", "developing countries"],
                keywordExplanations: {
                    "developing countries": "発展途上国。"
                },
                keywordMatches: [
                    { sentenceId: 16, text: "This process creates smoke that is bad for their health", keyword: "health is damaged" }
                ],
                choiceAdvice: "1: 労働者不足の話はありません。 2: 盗難の話はありません。 3: 焼却の煙が健康に悪い(bad for their health)と書かれています。 4: 強制購入の話はありません。",
                logic: [
                    { type: "text", content: "本文(Sentence 15-16): 「彼らは部品を燃やす(burn the plastic parts)。この工程は彼らの健康に悪い煙を出す(creates smoke that is bad for their health)」" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 4,
                text: "What is \"urban mining\"?",
                textTranslation: "「都市鉱山」とは何ですか？",
                choices: [
                    { id: 1, text: "Digging holes in the city parks to find gold.", translation: "金を見つけるために都市の公園で穴を掘ること。", isCorrect: false },
                    { id: 2, text: "Collecting valuable metals from old electronic devices.", translation: "古い電子機器から貴重な金属を集めること。", isCorrect: true, highlight: "collecting old electronics to recover the valuable metals" },
                    { id: 3, text: "Building factories in the countryside to make new phones.", translation: "新しい電話を作るために田舎に工場を建てること。", isCorrect: false },
                    { id: 4, text: "Teaching young people how to repair broken computers.", translation: "若者に壊れたコンピューターの修理方法を教えること。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「urban mining」の直後の「This means...」に注目しましょう。",
                    targetSentenceId: 21,
                    highlightWord: "collecting old electronics to recover the valuable metals",
                    highlightWordSentenceId: 21
                },
                keywords: ["urban mining"],
                keywordExplanations: {
                    "urban mining": "都市鉱山。"
                },
                keywordMatches: [
                    { sentenceId: 21, text: "This means collecting old electronics to recover the valuable metals", keyword: "Collecting valuable metals" }
                ],
                choiceAdvice: "1: 公園を掘るわけではありません。比喩です。 2: 古い機器から金属を回収すること、という定義と一致します。 3: 工場建設の話ではありません。 4: 教育の話ではありません。",
                logic: [
                    { type: "text", content: "本文(Sentence 21): 「これは、古い電子機器を集めてその中の貴重な金属を回収することを意味する(collecting old electronics to recover the valuable metals)」" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 5,
                text: "What do we learn from the passage?",
                textTranslation: "この文章から何を学びますか？",
                choices: [
                    { id: 1, text: "Electronic waste is no longer a problem because of urban mining.", translation: "都市鉱山のおかげで、電子ゴミはもはや問題ではない。", isCorrect: false },
                    { id: 2, text: "Developing countries are becoming rich by selling e-waste.", translation: "発展途上国は電子ゴミを売ることで豊かになっている。", isCorrect: false },
                    { id: 3, text: "Reducing e-waste requires changes in both production and use.", translation: "電子ゴミを減らすには、生産と使用の両方の変化が必要である。", isCorrect: true, highlight: "companies are trying to make ... important for consumers to use" },
                    { id: 4, text: "Gold and silver are the most common materials in all trash.", translation: "金と銀はすべてのゴミの中で最も一般的な物質である。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "最終段落の後半。企業(companies)と消費者(consumers)の両方の行動について書かれている部分をまとめましょう。",
                    targetSentenceId: 23,
                    highlightWord: "companies are trying to make ... consumers to use",
                    highlightWordSentenceId: 22
                },
                keywords: ["learn", "passage"],
                keywordExplanations: {
                    "learn": "学ぶ。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 問題はまだ解決していません。 2: 豊かになっているとは書かれていません（逆に健康被害があります）。 3: 企業の（生産）努力と消費者の（使用）努力の両方が必要という結論です。 4: 最も一般的とは書かれていません。",
                logic: [
                    { type: "text", content: "本文(Sentence 22): 「企業は修理しやすい製品を作ろうとしている(make products ... easier repair)」" },
                    { type: "text", content: "本文(Sentence 23): 「消費者が長く使うことが重要だ(important for consumers to use ... longer)」" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "講師用：本文要約 (Instructor Summary)",
            intro: "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[The Problem of Electronic Waste] (オリジナル)</div> 本文は、世界的に急増している「電子ゴミ（E-waste）」の問題点と解決策についての説明です。",
            points: [
                {
                    label: "1. The Situation (第1段落)",
                    text: "技術の進歩により、人々は頻繁にスマホやPCを買い替えます。まだ使えるのに捨てられるこれらの機器は「電子ゴミ」と呼ばれ、世界で最も急速に増えているゴミの一つです。"
                },
                {
                    label: "2. Why it's unique (第2段落)",
                    text: "電子ゴミは普通のゴミと違います。鉛や水銀などの「有害物質」を含む一方で、金や銀などの「貴重な金属」も含んでいるからです。しかし、それらを取り出すのは簡単ではありません。"
                },
                {
                    label: "3. The Impact (第3段落)",
                    text: "電子ゴミの多くは途上国に送られます。そこで労働者が金属を取り出すために部品を燃やし、その煙が健康被害を引き起こしたり、有害物質が土や水を汚染したりしています。"
                },
                {
                    label: "4. Solutions (第4段落)",
                    text: "対策として「都市鉱山（Urban Mining）」と呼ばれる、廃棄機器から金属を回収するプロジェクトが進んでいます。また、企業は修理しやすい製品を作り、消費者は一つの製品を長く使うことが求められています。"
                }
            ]
        }
    },
    {
        "id": "2025-5-cashless-society",
        "grade": "準2級プラス",
        "title": "A Cashless Society",
        "subTitle": "問題3",
        "genre": "社会 / 技術",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Cashless+Payments",
            "question": "https://placehold.co/600x400?text=Digital+Wallet"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "In recent years, the way people pay for things has changed dramatically.",
                        "translation": "近年、人々が支払いをする方法は劇的に変化しました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has changed"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In recent years</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the way people pay for things</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has changed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>dramatically</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>近年、</span> <span class='t-S'>人々が支払いをする方法は</span> <span class='t-V'>変化しました</span> <span class='t-M'>劇的に</span>。",
                            "naturalTranslation": "近年、人々の支払い方法は劇的に変化しました。",
                            "vocabulary": [
                                { "word": "dramatically", "meaning": "「劇的に」。" },
                                { "word": "pay for", "meaning": "「～の支払いをする」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "the way people pay...", "explanation": "<b>the way ...</b>: 関係副詞howの代用。「人々が支払いをする方法」。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "In many countries around the world, the use of physical money, such as coins and paper bills, is decreasing.",
                        "translation": "世界中の多くの国で、硬貨や紙幣といった物理的なお金の使用が減少しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is decreasing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In many countries around the world</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the use of physical money, such as coins and paper bills</span><span class='tag'>S</span></span>, <span class='chunk V-group'><span class='text'>is decreasing</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>世界中の多くの国で、</span> <span class='t-S'>物理的なお金（硬貨や紙幣のような）の使用は</span> <span class='t-V'>減少しています</span>。",
                            "naturalTranslation": "世界中の多くの国で、硬貨や紙幣といった物理的なお金の使用が減少しています。",
                            "vocabulary": [
                                { "word": "physical money", "meaning": "「物理的なお金（現金）」。" },
                                { "word": "decrease", "meaning": "「減少する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 3,
                        "text": "Instead, more and more people are choosing to use credit cards, smartphones, or other electronic methods to make payments.",
                        "translation": "その代わりに、ますます多くの人々が支払いをするためにクレジットカードやスマートフォン、その他の電子的な方法を使うことを選んでいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are choosing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Instead</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>more and more people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are choosing to use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>credit cards, smartphones, or other electronic methods</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to make payments</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>その代わりに、</span> <span class='t-S'>ますます多くの人々が</span> <span class='t-V'>使うことを選んでいます</span> <span class='t-O'>クレカやスマホ、その他の電子的な方法を</span> <span class='t-M'>支払いをするために</span>。",
                            "naturalTranslation": "その代わりに、ますます多くの人々が支払いをするためにクレジットカードやスマートフォン、その他の電子的な方法を使うことを選んでいます。",
                            "vocabulary": [
                                { "word": "more and more", "meaning": "「ますます多くの」。" },
                                { "word": "method", "meaning": "「方法」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "to make payments", "explanation": "<b>to make</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 4,
                        "text": "This trend toward a \"cashless society\" is moving forward rapidly, especially in countries like Sweden and China, where people rarely carry cash anymore.",
                        "translation": "「キャッシュレス社会」に向かうこの傾向は急速に進んでおり、特にスウェーデンや中国のような国々では、人々はもはやめったに現金を持ち歩きません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is moving forward"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This trend toward a \"cashless society\"</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is moving forward</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>rapidly</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>especially in countries like Sweden and China, where people rarely carry cash anymore</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>「キャッシュレス社会」へのこの傾向は</span> <span class='t-V'>進んでいます</span> <span class='t-M'>急速に</span>、 <span class='t-M'>特にスウェーデンや中国のような国々で（そこでは人々はもはや滅多に現金を持ち歩きません）</span>。",
                            "naturalTranslation": "「キャッシュレス社会」に向かうこの傾向は急速に進んでおり、特にスウェーデンや中国のような国々では、人々はもはやめったに現金を持ち歩きません。",
                            "vocabulary": [
                                { "word": "trend", "meaning": "「傾向、トレンド」。" },
                                { "word": "rarely", "meaning": "「めったに～ない」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": ", where...", "explanation": "<b>, where</b>: 関係副詞の非制限用法。先行詞（Sweden and China）についての補足説明。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 5,
                        "text": "There are various technologies that support this change.",
                        "translation": "この変化を支える様々な技術があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>various technologies that support this change</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>この変化を支える様々な技術が</span>。",
                            "naturalTranslation": "この変化を支える様々な技術があります。",
                            "vocabulary": [
                                { "word": "various", "meaning": "「様々な」。" },
                                { "word": "support", "meaning": "「～を支える」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "that support...", "explanation": "<b>that</b>: 関係代名詞（主格）。technologiesを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 6,
                        "text": "For example, people can simply wave their smartphones over a machine to buy a cup of coffee or ride a train.",
                        "translation": "例えば、人々はコーヒーを買ったり電車に乗ったりするために、機械の上にスマートフォンをかざすだけで済みます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can wave"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>For example</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can simply wave</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their smartphones</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>over a machine</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>to buy a cup of coffee or ride a train</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>例えば、</span> <span class='t-S'>人々は</span> <span class='t-V'>単にかざすことができます</span> <span class='t-O'>スマートフォンを</span> <span class='t-M'>機械の上に</span> <span class='t-M'>コーヒーを買ったり電車に乗ったりするために</span>。",
                            "naturalTranslation": "例えば、人々はコーヒーを買ったり電車に乗ったりするために、機械の上にスマートフォンをかざすだけで済みます。",
                            "vocabulary": [
                                { "word": "wave", "meaning": "「～を振る、かざす」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 7,
                        "text": "Also, some shops have started to use facial recognition technology.",
                        "translation": "また、いくつかのお店は顔認証技術を使い始めています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have started to use"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some shops</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have started to use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>facial recognition technology</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>いくつかのお店は</span> <span class='t-V'>使い始めています</span> <span class='t-O'>顔認証技術を</span>。",
                            "naturalTranslation": "また、いくつかのお店は顔認証技術を使い始めています。",
                            "vocabulary": [
                                { "word": "facial recognition", "meaning": "「顔認証」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "have started", "explanation": "<b>have started</b>: 現在完了形。" }
                            ]
                        }
                    },
                    {
                        "id": 8,
                        "text": "This means customers can pay just by showing their faces to a camera.",
                        "translation": "これは、客がカメラに顔を見せるだけで支払いができることを意味します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["means"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>means</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>customers can pay just by showing their faces to a camera</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>意味します</span> <span class='t-O'>客がカメラに顔を見せるだけで支払いができることを</span>。",
                            "naturalTranslation": "これは、客がカメラに顔を見せるだけで支払いができることを意味します。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "by showing", "explanation": "<b>by doing</b>: 「～することによって」（手段）。" }
                            ]
                        }
                    },
                    {
                        "id": 9,
                        "text": "These technologies make shopping much faster and smoother than before because people do not need to count money or wait for change.",
                        "translation": "人々はお金を数えたりお釣りを待ったりする必要がないため、これらの技術は買い物を以前よりもはるかに速くスムーズにします。",
                        "grammarAnalysis": {
                            "mainVerbs": ["make"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>These technologies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>make</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>shopping</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>much faster and smoother than before</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>because people do not need to count money or wait for change</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これらの技術は</span> <span class='t-V'>します（変えます）</span> <span class='t-O'>買い物を</span> <span class='t-C'>以前よりずっと速くスムーズに</span> <span class='t-M'>人々はお金を数えたりお釣りを待つ必要がないので</span>。",
                            "naturalTranslation": "これらの技術は、人々がお金を数えたりお釣りを待ったりする必要がないため、買い物を以前よりもはるかに速くスムーズにします。",
                            "vocabulary": [
                                { "word": "smooth", "meaning": "「円滑な、スムーズな」。" },
                                { "word": "change", "meaning": "「お釣り」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "make O C", "explanation": "<b>make O C</b>: OをCにする（第5文型）。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 10,
                        "text": "Becoming cashless has several positive benefits for society.",
                        "translation": "キャッシュレス化には、社会にとっていくつかの肯定的な利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Becoming cashless</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>several positive benefits</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>for society</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>キャッシュレスになることは</span> <span class='t-V'>持っています（あります）</span> <span class='t-O'>いくつかの肯定的な利点が</span> <span class='t-M'>社会にとって</span>。",
                            "naturalTranslation": "キャッシュレス化には、社会にとっていくつかの肯定的な利点があります。",
                            "vocabulary": [
                                { "word": "benefit", "meaning": "「利点、利益」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "Becoming", "explanation": "<b>Becoming</b>: 動名詞。「～になること」。" }
                            ]
                        }
                    },
                    {
                        "id": 11,
                        "text": "One big advantage is safety.",
                        "translation": "一つの大きな利点は安全性です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One big advantage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>safety</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの大きな利点は</span> <span class='t-V'>です</span> <span class='t-C'>安全性</span>。",
                            "naturalTranslation": "一つの大きな利点は安全性です。",
                            "vocabulary": [
                                { "word": "advantage", "meaning": "「利点、強み」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 12,
                        "text": "If people do not carry large amounts of cash, the risk of being robbed on the street decreases.",
                        "translation": "もし人々が多額の現金を持ち歩かなければ、通りで強盗に遭うリスクは減少します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["decreases"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>If people do not carry large amounts of cash</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the risk of being robbed on the street</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>decreases</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>もし人々が多額の現金を持ち歩かなければ、</span> <span class='t-S'>通りで強盗に遭うリスクは</span> <span class='t-V'>減少します</span>。",
                            "naturalTranslation": "もし人々が多額の現金を持ち歩かなければ、通りで強盗に遭うリスクは減少します。",
                            "vocabulary": [
                                { "word": "amount", "meaning": "「量、額」。" },
                                { "word": "rob", "meaning": "「（人）から強奪する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "being robbed", "explanation": "<b>being robbed</b>: 動名詞の受動態。「強盗に遭うこと」。" }
                            ]
                        }
                    },
                    {
                        "id": 13,
                        "text": "Also, for shop owners, not having cash in the store prevents theft by workers or robbers.",
                        "translation": "また、店主にとっても、店に現金を置かないことは従業員や強盗による窃盗を防ぎます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["prevents"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also, for shop owners</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>not having cash in the store</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>prevents</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>theft by workers or robbers</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>また、店主にとっても、</span> <span class='t-S'>店に現金を持たない（置かない）ことは</span> <span class='t-V'>防ぎます</span> <span class='t-O'>従業員や強盗による窃盗を</span>。",
                            "naturalTranslation": "また、店主にとっても、店に現金を置かないことは従業員や強盗による窃盗を防ぎます。",
                            "vocabulary": [
                                { "word": "prevent", "meaning": "「～を防ぐ」。" },
                                { "word": "theft", "meaning": "「窃盗」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "not having", "explanation": "<b>not having</b>: 動名詞の否定形。" }
                            ]
                        }
                    },
                    {
                        "id": 14,
                        "text": "In addition, electronic payments leave a digital record.",
                        "translation": "さらに、電子決済はデジタルの記録を残します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["leave"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In addition</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>electronic payments</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>leave</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a digital record</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>電子決済は</span> <span class='t-V'>残します</span> <span class='t-O'>デジタルの記録を</span>。",
                            "naturalTranslation": "さらに、電子決済はデジタルの記録を残します。",
                            "vocabulary": [
                                { "word": "In addition", "meaning": "「さらに、その上」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 15,
                        "text": "This helps the government collect taxes correctly and prevents illegal money activities.",
                        "translation": "これは政府が税金を正しく徴収するのを助け、違法な資金活動を防ぎます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["helps", "prevents"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the government collect taxes correctly</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>prevents</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>illegal money activities</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>助けます</span> <span class='t-O'>政府が税金を正しく徴収するのを</span>、そして <span class='t-V'>防ぎます</span> <span class='t-O'>違法な資金活動を</span>。",
                            "naturalTranslation": "これは政府が税金を正しく徴収するのを助け、違法な資金活動を防ぎます。",
                            "vocabulary": [
                                { "word": "tax", "meaning": "「税金」。" },
                                { "word": "illegal", "meaning": "「違法な」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help O (to) do", "explanation": "<b>help O do</b>: 「Oが～するのを助ける」（原形不定詞）。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 16,
                        "text": "However, moving to a completely cashless society brings some challenges.",
                        "translation": "しかし、完全にキャッシュレスな社会への移行はいくつかの課題をもたらします。",
                        "grammarAnalysis": {
                            "mainVerbs": ["brings"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>moving to a completely cashless society</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>brings</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some challenges</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>完全にキャッシュレスな社会へ移行することは</span> <span class='t-V'>もたらします</span> <span class='t-O'>いくつかの課題を</span>。",
                            "naturalTranslation": "しかし、完全にキャッシュレスな社会への移行はいくつかの課題をもたらします。",
                            "vocabulary": [
                                { "word": "challenge", "meaning": "「課題、難問」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "One serious concern is what happens during a disaster.",
                        "translation": "一つの深刻な懸念は、災害の間に何が起こるかということです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One serious concern</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>what happens during a disaster</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの深刻な懸念は</span> <span class='t-V'>です</span> <span class='t-C'>災害の間に何が起こるか</span>。",
                            "naturalTranslation": "一つの深刻な懸念は、災害の間に何が起こるかということです。",
                            "vocabulary": [
                                { "word": "disaster", "meaning": "「災害」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "what happens", "explanation": "<b>what happens</b>: 間接疑問文（または関係代名詞節）として補語になっています。" }
                            ]
                        }
                    },
                    {
                        "id": 18,
                        "text": "If an earthquake or a storm causes a power outage, electronic payment systems will stop working.",
                        "translation": "もし地震や嵐が停電を引き起こせば、電子決済システムは動かなくなるでしょう。",
                        "grammarAnalysis": {
                            "mainVerbs": ["will stop"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>If an earthquake or a storm causes a power outage</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>electronic payment systems</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>will stop working</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>もし地震や嵐が停電を引き起こせば、</span> <span class='t-S'>電子決済システムは</span> <span class='t-V'>動くのを止めるでしょう（止まるでしょう）</span>。",
                            "naturalTranslation": "もし地震や嵐が停電を引き起こせば、電子決済システムは動かなくなるでしょう。",
                            "vocabulary": [
                                { "word": "power outage", "meaning": "「停電」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 19,
                        "text": "In that situation, people with no cash cannot buy food or water.",
                        "translation": "そのような状況では、現金を持たない人々は食料や水を買うことができません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["cannot buy"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In that situation</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people with no cash</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>cannot buy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>food or water</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>その状況では、</span> <span class='t-S'>現金を持たない人々は</span> <span class='t-V'>買うことができません</span> <span class='t-O'>食料や水を</span>。",
                            "naturalTranslation": "そのような状況では、現金を持たない人々は食料や水を買うことができません。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 20,
                        "text": "Moreover, some elderly people find it difficult to use new digital devices.",
                        "translation": "さらに、一部の高齢者は新しいデジタル機器を使うことを難しいと感じています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["find"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Moreover</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some elderly people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>find</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>difficult</span><span class='tag'>C</span></span> <span class='chunk O-group'><span class='text'>to use new digital devices</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>一部の高齢者は</span> <span class='t-V'>分かります（感じます）</span> <span class='t-O'>それを</span> <span class='t-C'>難しいと</span> <span class='t-O'>新しいデジタル機器を使うことが</span>。",
                            "naturalTranslation": "さらに、一部の高齢者は新しいデジタル機器を使うことを難しいと感じています。",
                            "vocabulary": [
                                { "word": "elderly", "meaning": "「年配の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "find it C to do", "explanation": "<b>find it C to do</b>: 形式目的語構文。「～することがCだと分かる／思う」。itはto use以下を指します。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "It is important to create a society where everyone can make payments easily and safely, regardless of their age or the situation.",
                        "translation": "年齢や状況に関係なく、誰もが簡単かつ安全に支払いができる社会を作ることが重要です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to create a society where everyone can make payments easily and safely, regardless of their age or the situation</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>重要な</span> <span class='t-S'>社会を作ることは（そこでは誰もが簡単かつ安全に支払いができる、年齢や状況に関わらず）</span>。",
                            "naturalTranslation": "年齢や状況に関係なく、誰もが簡単かつ安全に支払いができる社会を作ることが重要です。",
                            "vocabulary": [
                                { "word": "regardless of", "meaning": "「～に関係なく」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "It is ... to do", "explanation": "<b>It is ... to do</b>: 形式主語構文。" },
                                { "phrase": "society where...", "explanation": "<b>where</b>: 関係副詞。societyを修飾。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 16,
                        "text": "However, moving to a completely cashless society brings some challenges.",
                        "translation": "しかし、完全にキャッシュレスな社会への移行はいくつかの課題をもたらします。",
                        "grammarAnalysis": {
                            "mainVerbs": ["brings"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>moving to a completely cashless society</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>brings</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some challenges</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>完全にキャッシュレスな社会へ移行することは</span> <span class='t-V'>もたらします</span> <span class='t-O'>いくつかの課題を</span>。",
                            "naturalTranslation": "しかし、完全にキャッシュレスな社会への移行はいくつかの課題をもたらします。",
                            "vocabulary": [
                                { "word": "challenge", "meaning": "「課題、難問」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "One serious concern is what happens during a disaster.",
                        "translation": "一つの深刻な懸念は、災害の間に何が起こるかということです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One serious concern</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>what happens during a disaster</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの深刻な懸念は</span> <span class='t-V'>です</span> <span class='t-C'>災害の間に何が起こるか</span>。",
                            "naturalTranslation": "一つの深刻な懸念は、災害の間に何が起こるかということです。",
                            "vocabulary": [
                                { "word": "disaster", "meaning": "「災害」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "what happens", "explanation": "<b>what happens</b>: 間接疑問文（または関係代名詞節）として補語になっています。" }
                            ]
                        }
                    },
                    {
                        "id": 18,
                        "text": "If an earthquake or a storm causes a power outage, electronic payment systems will stop working.",
                        "translation": "もし地震や嵐が停電を引き起こせば、電子決済システムは動かなくなるでしょう。",
                        "grammarAnalysis": {
                            "mainVerbs": ["will stop"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>If an earthquake or a storm causes a power outage</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>electronic payment systems</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>will stop working</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>もし地震や嵐が停電を引き起こせば、</span> <span class='t-S'>電子決済システムは</span> <span class='t-V'>動くのを止めるでしょう（止まるでしょう）</span>。",
                            "naturalTranslation": "もし地震や嵐が停電を引き起こせば、電子決済システムは動かなくなるでしょう。",
                            "vocabulary": [
                                { "word": "power outage", "meaning": "「停電」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 19,
                        "text": "In that situation, people with no cash cannot buy food or water.",
                        "translation": "そのような状況では、現金を持たない人々は食料や水を買うことができません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["cannot buy"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In that situation</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people with no cash</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>cannot buy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>food or water</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>その状況では、</span> <span class='t-S'>現金を持たない人々は</span> <span class='t-V'>買うことができません</span> <span class='t-O'>食料や水を</span>。",
                            "naturalTranslation": "そのような状況では、現金を持たない人々は食料や水を買うことができません。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 20,
                        "text": "Moreover, some elderly people find it difficult to use new digital devices.",
                        "translation": "さらに、一部の高齢者は新しいデジタル機器を使うことを難しいと感じています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["find"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Moreover</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some elderly people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>find</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>difficult</span><span class='tag'>C</span></span> <span class='chunk O-group'><span class='text'>to use new digital devices</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>一部の高齢者は</span> <span class='t-V'>分かります（感じます）</span> <span class='t-O'>それを</span> <span class='t-C'>難しいと</span> <span class='t-O'>新しいデジタル機器を使うことが</span>。",
                            "naturalTranslation": "さらに、一部の高齢者は新しいデジタル機器を使うことを難しいと感じています。",
                            "vocabulary": [
                                { "word": "elderly", "meaning": "「年配の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "find it C to do", "explanation": "<b>find it C to do</b>: 形式目的語構文。「～することがCだと分かる／思う」。itはto use以下を指します。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "It is important to create a society where everyone can make payments easily and safely, regardless of their age or the situation.",
                        "translation": "年齢や状況に関係なく、誰もが簡単かつ安全に支払いができる社会を作ることが重要です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to create a society where everyone can make payments easily and safely, regardless of their age or the situation</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>重要な</span> <span class='t-S'>社会を作ることは（そこでは誰もが簡単かつ安全に支払いができる、年齢や状況に関わらず）</span>。",
                            "naturalTranslation": "年齢や状況に関係なく、誰もが簡単かつ安全に支払いができる社会を作ることが重要です。",
                            "vocabulary": [
                                { "word": "regardless of", "meaning": "「～に関係なく」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "It is ... to do", "explanation": "<b>It is ... to do</b>: 形式主語構文。" },
                                { "phrase": "society where...", "explanation": "<b>where</b>: 関係副詞。societyを修飾。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is happening regarding payment methods today?",
                "textTranslation": "今日の支払い方法に関して何が起きていますか？",
                "choices": [
                    { "id": 1, "text": "People in Sweden and China are returning to using paper bills.", "translation": "スウェーデンや中国の人々は紙幣の使用に戻っている。", "isCorrect": false },
                    { "id": 2, "text": "The use of coins is increasing because they are easy to carry.", "translation": "硬貨は持ち運びやすいため、使用が増加している。", "isCorrect": false },
                    { "id": 3, "text": "Fewer people are using physical money to pay for things.", "translation": "支払いをするために物理的なお金を使う人が減っている。", "isCorrect": true, "highlight": "the use of physical money ... is decreasing" },
                    { "id": 4, "text": "Credit cards are becoming less popular in many countries.", "translation": "クレジットカードは多くの国で人気がなくなってきている。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、物理的なお金（physical money）の使用状況についての記述を確認しましょう。",
                    "targetSentenceId": 2,
                    "highlightWord": "decreasing",
                    "highlightWordSentenceId": 2
                },
                "keywords": ["physical money", "decrease"],
                "keywordExplanations": { "physical money": "現金（紙幣や硬貨）", "decrease": "減少する" },
                "keywordMatches": [
                    { "sentenceId": 2, "text": "the use of physical money ... is decreasing", "keyword": "Fewer people are using physical money" }
                ],
                "choiceAdvice": "1: 本文では「めったに現金を持ち歩かない」とあり、戻っている記述はありません。 2: 本文では「減少している」とあります。 3: 本文の 'is decreasing' と一致します。 4: 本文では使用が増えている（more and more people are choosing）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 2): 「In many countries ..., the use of physical money, such as coins and paper bills, is decreasing.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 2,
                "text": "Thanks to new technologies like facial recognition,",
                "textTranslation": "顔認証のような新しい技術のおかげで、",
                "choices": [
                    { "id": 1, "text": "customers can pay without taking out their wallets or phones.", "translation": "客は財布や電話を取り出すことなく支払いができる。", "isCorrect": true, "highlight": "pay just by showing their faces to a camera" },
                    { "id": 2, "text": "shop owners need to hire more workers to count money.", "translation": "店主はお金を数えるためにより多くの従業員を雇う必要がある。", "isCorrect": false },
                    { "id": 3, "text": "people need to wait longer to receive their change at stores.", "translation": "人々は店でお釣りを受け取るためにより長く待つ必要がある。", "isCorrect": false },
                    { "id": 4, "text": "train stations have stopped accepting electronic payments.", "translation": "駅は電子決済の受け入れを停止した。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の顔認証技術（facial recognition technology）の説明で、何をするだけで支払えるかに注目しましょう。",
                    "targetSentenceId": 8,
                    "highlightWord": "just by showing",
                    "highlightWordSentenceId": 8
                },
                "keywords": ["facial recognition", "without", "wallet"],
                "keywordExplanations": { "facial recognition": "顔認証", "without": "～なしで" },
                "keywordMatches": [
                    { "sentenceId": 8, "text": "pay just by showing their faces", "keyword": "without taking out their wallets" }
                ],
                "choiceAdvice": "1: 顔を見せるだけでよい＝財布などを出す必要がない、と推測できます。 2: お金を数える必要がなくなるとあります。 3: 以前より速くスムーズになるとあります。 4: そのような記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 8): 「This means customers can pay just by showing their faces to a camera.」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of a cashless society is that",
                "textTranslation": "キャッシュレス社会の肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "it allows people to hide their money from the government.", "translation": "それは人々が政府からお金を隠すことを可能にする。", "isCorrect": false },
                    { "id": 2, "text": "it increases the risk of theft for shop owners.", "translation": "それは店主にとって窃盗のリスクを高める。", "isCorrect": false },
                    { "id": 3, "text": "it makes it easier for robbers to steal cash on the street.", "translation": "それは強盗が通りで現金を盗むのをより簡単にする。", "isCorrect": false },
                    { "id": 4, "text": "it improves safety by reducing the amount of cash people carry.", "translation": "それは人々が持ち歩く現金の量を減らすことで安全性を向上させる。", "isCorrect": true, "highlight": "If people do not carry large amounts of cash, the risk of being robbed ... decreases" },
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の「安全性（safety）」に関する説明を確認しましょう。",
                    "targetSentenceId": 12,
                    "highlightWord": "safety",
                    "highlightWordSentenceId": 11
                },
                "keywords": ["safety", "risk", "reduce"],
                "keywordExplanations": { "safety": "安全性", "improve": "向上させる" },
                "keywordMatches": [
                    { "sentenceId": 12, "text": "the risk of being robbed on the street decreases", "keyword": "improves safety" }
                ],
                "choiceAdvice": "1: デジタル記録が残るため隠せません。 2: リスクは減ります（prevents theft）。 3: 強盗リスクは減ります（decreases）。 4: 本文の 'risk ... decreases' と合致する内容です。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 11 & 12): 「One big advantage is safety. If people do not carry large amounts of cash, the risk of being robbed ... decreases.」" },
                    { "type": "conclusion", "content": "正解: 4" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges of a cashless society?",
                "textTranslation": "キャッシュレス社会の課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "Digital records make it harder to collect taxes.", "translation": "デジタル記録は税金を集めるのをより難しくする。", "isCorrect": false },
                    { "id": 2, "text": "Electronic payments cannot be used when there is no electricity.", "translation": "電気が通っていないと電子決済は使えない。", "isCorrect": true, "highlight": "If an earthquake ... causes a power outage, electronic payment systems will stop working" },
                    { "id": 3, "text": "Young people are generally unwilling to use smartphones.", "translation": "若者は一般的にスマートフォンを使うのを嫌がる。", "isCorrect": false },
                    { "id": 4, "text": "It costs more money to use credit cards than cash.", "translation": "現金よりもクレジットカードを使う方が費用がかかる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、災害（disaster）や停電（power outage）が起きた時の問題点を探しましょう。",
                    "targetSentenceId": 18,
                    "highlightWord": "power outage",
                    "highlightWordSentenceId": 18
                },
                "keywords": ["challenge", "electricity", "power outage"],
                "keywordExplanations": { "power outage": "停電", "electricity": "電気" },
                "keywordMatches": [
                    { "sentenceId": 18, "text": "electronic payment systems will stop working", "keyword": "cannot be used" }
                ],
                "choiceAdvice": "1: 税収を助ける（helps）とあります。 2: 本文の 'power outage ... systems will stop working' と一致します。 3: 高齢者（elderly people）が難しいと感じるという記述はありますが、若者の記述はありません。 4: コストについての言及はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 18): 「If an earthquake or a storm causes a power outage, electronic payment systems will stop working.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Cashless payment systems are perfect and have no disadvantages.", "translation": "キャッシュレス決済システムは完璧で欠点がない。", "isCorrect": false },
                    { "id": 2, "text": "We should stop using electronic payments to protect elderly people.", "translation": "高齢者を守るために電子決済の使用をやめるべきだ。", "isCorrect": false },
                    { "id": 3, "text": "It is necessary to consider risks like power outages in a cashless society.", "translation": "キャッシュレス社会においては停電のようなリスクを考慮する必要がある。", "isCorrect": true, "highlight": "important to create a society ... regardless of ... the situation" },
                    { "id": 4, "text": "Physical money will completely disappear from the world next year.", "translation": "物理的なお金は来年世界から完全に消えるだろう。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終文で述べられている、どのような社会を作るべきかという結論に注目しましょう。",
                    "targetSentenceId": 21,
                    "highlightWord": "important",
                    "highlightWordSentenceId": 21
                },
                "keywords": ["consider", "risk", "necessary"],
                "keywordExplanations": { "necessary": "必要な", "consider": "考慮する" },
                "keywordMatches": [
                    { "sentenceId": 21, "text": "create a society where everyone can make payments ... regardless of ... the situation", "keyword": "consider risks like power outages" }
                ],
                "choiceAdvice": "1: 課題（challenges）があると述べられています。 2: 使用をやめるべきとは言っていません。誰でも使えるようにすべきと述べています。 3: 災害時のリスクなどが指摘され、状況に関わらず支払いができる社会作りが重要という結論と合致しています。 4: そのような予測は書かれていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 21): 「It is important to create a society where everyone can make payments easily and safely, regardless of their age or the situation.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[A Cashless Society] (オリジナル)</div> 本文は、急速に進む「キャッシュレス社会」の現状、メリット、そして課題についての説明です。",
            "points": [
                { "label": "1. The Trend (第1段落)", "text": "世界中で現金の使用が減り、カードやスマホ決済が増えています。スウェーデンや中国などでは、現金をほとんど持ち歩かない生活が進んでいます。" },
                { "label": "2. Technologies (第2段落)", "text": "スマホをかざす決済や、顔認証技術などが普及しています。現金を数えたりお釣りを待つ必要がないため、買い物がスムーズになります。" },
                { "label": "3. Benefits (第3段落)", "text": "大きな利点は安全性です。現金を持ち歩かないことで強盗被害が減り、店側も盗難を防げます。また、デジタル記録が残るため、税金の徴収や犯罪防止にも役立ちます。" },
                { "label": "4. Challenges (第4段落)", "text": "課題もあります。災害で停電が起きるとシステムが使えず、水や食料が買えなくなるリスクがあります。また、高齢者が機器の操作に戸惑う問題もあります。誰にとっても使いやすい社会作りが重要です。" }
            ]
        }
    },
    {
        "id": "2025-6-self-driving-cars",
        "grade": "準2級プラス",
        "title": "Self-Driving Cars",
        "subTitle": "問題4",
        "genre": "技術 / 社会",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Self-Driving+Cars",
            "question": "https://placehold.co/600x400?text=Future+Mobility"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "For more than a century, cars have been an essential part of people's lives.",
                        "translation": "1世紀以上にわたり、車は人々の生活に不可欠な部分であり続けています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have been"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>For more than a century</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>cars</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have been</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an essential part of people's lives</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>1世紀以上にわたり、</span> <span class='t-S'>車は</span> <span class='t-V'>あり続けています</span> <span class='t-C'>人々の生活の不可欠な部分で</span>。",
                            "naturalTranslation": "1世紀以上にわたり、車は人々の生活に不可欠な部分であり続けています。",
                            "vocabulary": [
                                { "word": "century", "meaning": "「世紀（100年）」。" },
                                { "word": "essential", "meaning": "「不可欠な」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "have been", "explanation": "<b>have been</b>: 現在完了形（継続）。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "Drivers control the steering wheel and pedals to move the car safely.",
                        "translation": "運転手は車を安全に動かすためにハンドルとペダルを操作します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["control"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Drivers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>control</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the steering wheel and pedals</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to move the car safely</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>運転手は</span> <span class='t-V'>操作します</span> <span class='t-O'>ハンドルとペダルを</span> <span class='t-M'>車を安全に動かすために</span>。",
                            "naturalTranslation": "運転手は車を安全に動かすためにハンドルとペダルを操作します。",
                            "vocabulary": [
                                { "word": "steering wheel", "meaning": "「ハンドル」。" },
                                { "word": "pedal", "meaning": "「ペダル」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "to move", "explanation": "<b>to move</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 3,
                        "text": "However, this traditional style of driving is starting to change.",
                        "translation": "しかし、この伝統的な運転スタイルは変わり始めています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is starting"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this traditional style of driving</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is starting</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to change</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>この伝統的な運転スタイルは</span> <span class='t-V'>始めています</span> <span class='t-O'>変わることを（変わり始めています）</span>。",
                            "naturalTranslation": "しかし、この伝統的な運転スタイルは変わり始めています。",
                            "vocabulary": [
                                { "word": "traditional", "meaning": "「伝統的な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 4,
                        "text": "Recently, major car companies and technology companies around the world have been developing self-driving cars.",
                        "translation": "最近、世界中の主要な自動車会社やテクノロジー企業が自動運転車を開発しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have been developing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Recently</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>major car companies and technology companies around the world</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have been developing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>self-driving cars</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>最近、</span> <span class='t-S'>世界中の主要な自動車会社や技術系企業は</span> <span class='t-V'>開発しています（し続けています）</span> <span class='t-O'>自動運転車を</span>。",
                            "naturalTranslation": "最近、世界中の主要な自動車会社やテクノロジー企業が自動運転車を開発しています。",
                            "vocabulary": [
                                { "word": "develop", "meaning": "「～を開発する」。" },
                                { "word": "vehicle", "meaning": "「車両、乗り物」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "have been developing", "explanation": "<b>have been developing</b>: 現在完了進行形。" }
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "text": "These vehicles can travel from one place to another without a human driver controlling them.",
                        "translation": "これらの車両は、人間の運転手が操作することなく、ある場所から別の場所へ移動することができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can travel"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>These vehicles</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can travel</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>from one place to another</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>without a human driver controlling them</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これらの車両は</span> <span class='t-V'>移動できます</span> <span class='t-M'>ある場所から別の場所へ</span> <span class='t-M'>人間の運転手がそれらを操作することなしに</span>。",
                            "naturalTranslation": "これらの車両は、人間の運転手が操作することなく、ある場所から別の場所へ移動することができます。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "without A doing", "explanation": "<b>without A doing</b>: 「Aが～することなしに」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 6,
                        "text": "How do these cars work?",
                        "translation": "これらの車はどのように動くのでしょうか？",
                        "grammarAnalysis": {
                            "mainVerbs": ["work"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>How</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>do</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>these cars</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>work</span><span class='tag'>V</span></span>?",
                            "translationHtml": "<span class='t-M'>どのように</span> <span class='t-V'>（疑問助詞）</span> <span class='t-S'>これらの車は</span> <span class='t-V'>動く（機能する）のでしょうか</span>？",
                            "naturalTranslation": "これらの車はどのように動くのでしょうか？",
                            "vocabulary": [
                                { "word": "work", "meaning": "「（機械などが）動く、機能する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 7,
                        "text": "They rely on advanced technology.",
                        "translation": "それらは高度な技術に頼っています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["rely on"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>rely on</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>advanced technology</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>それらは</span> <span class='t-V'>頼っています</span> <span class='t-O'>高度な技術に</span>。",
                            "naturalTranslation": "それらは高度な技術に頼っています。",
                            "vocabulary": [
                                { "word": "rely on", "meaning": "「～に頼る、依存する」。" },
                                { "word": "advanced", "meaning": "「進歩した、高度な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 8,
                        "text": "The cars are equipped with many cameras, sensors, and lasers.",
                        "translation": "車には多くのカメラ、センサー、レーザーが装備されています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are equipped with"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The cars</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are equipped with</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>many cameras, sensors, and lasers</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>その車は</span> <span class='t-V'>装備しています</span> <span class='t-O'>多くのカメラ、センサー、レーザーを</span>。",
                            "naturalTranslation": "車には多くのカメラ、センサー、レーザーが装備されています。",
                            "vocabulary": [
                                { "word": "be equipped with", "meaning": "「～を備えている」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "These devices allow the car's computer to \"see\" everything around it, such as other vehicles, pedestrians, and traffic lights.",
                        "translation": "これらの装置により、車のコンピューターは他の車両、歩行者、信号機など、周囲のすべてのものを「見る」ことができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["allow"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>These devices</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allow</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the car's computer</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to \"see\" everything around it</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>such as other vehicles, pedestrians, and traffic lights</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これらの装置は</span> <span class='t-V'>可能にします</span> <span class='t-O'>車のコンピューターが</span> <span class='t-C'>周囲のすべてを「見る」ことを</span>、 <span class='t-M'>例えば他の車両、歩行者、信号機などの</span>。",
                            "naturalTranslation": "これらの装置により、車のコンピューターは他の車両、歩行者、信号機など、周囲のすべてのものを「見る」ことができます。",
                            "vocabulary": [
                                { "word": "device", "meaning": "「装置」。" },
                                { "word": "pedestrian", "meaning": "「歩行者」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "allow O to do", "explanation": "<b>allow O to do</b>: 「Oが～するのを可能にする」。" }
                            ]
                        }
                    },
                    {
                        "id": 10,
                        "text": "The computer analyzes this information instantly and decides how to drive.",
                        "translation": "コンピューターはこの情報を瞬時に分析し、どのように運転するかを決定します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["analyzes", "decides"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The computer</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>analyzes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>this information</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>instantly</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>decides</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how to drive</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>コンピューターは</span> <span class='t-V'>分析します</span> <span class='t-O'>この情報を</span> <span class='t-M'>瞬時に</span>、そして <span class='t-V'>決定します</span> <span class='t-O'>どのように運転するかを</span>。",
                            "naturalTranslation": "コンピューターはこの情報を瞬時に分析し、どのように運転するかを決定します。",
                            "vocabulary": [
                                { "word": "analyze", "meaning": "「～を分析する」。" },
                                { "word": "instantly", "meaning": "「瞬時に、即座に」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "how to do", "explanation": "<b>how to do</b>: 「～する方法、どのように～すべきか」。" }
                            ]
                        }
                    },
                    {
                        "id": 11,
                        "text": "It knows when to stop, speed up, or turn.",
                        "translation": "それはいつ止まり、加速し、あるいは曲がるべきかを知っています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["knows"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>knows</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>when to stop, speed up, or turn</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>知っています</span> <span class='t-O'>いつ止まり、加速し、あるいは曲がるべきかを</span>。",
                            "naturalTranslation": "それはいつ止まり、加速し、あるいは曲がるべきかを知っています。",
                            "vocabulary": [
                                { "word": "speed up", "meaning": "「加速する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 12,
                        "text": "This means passengers can simply sit back and relax, or even work, while the car takes them to their destination.",
                        "translation": "これは、車が目的地まで連れて行ってくれる間、乗客はただ座ってリラックスしたり、仕事さえできることを意味します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["means"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>means</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>passengers can simply sit back and relax, or even work</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>while the car takes them to their destination</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>意味します</span> <span class='t-O'>乗客がただ座ってリラックスしたり、仕事さえできることを</span>、 <span class='t-M'>車が彼らを目的地へ連れて行く間に</span>。",
                            "naturalTranslation": "これは、車が目的地まで連れて行ってくれる間、乗客はただ座ってリラックスしたり、仕事さえできることを意味します。",
                            "vocabulary": [
                                { "word": "passenger", "meaning": "「乗客」。" },
                                { "word": "destination", "meaning": "「目的地」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 13,
                        "text": "There are strong reasons why people want self-driving cars.",
                        "translation": "人々が自動運転車を求める強い理由があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>strong reasons why people want self-driving cars</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>人々が自動運転車を求める強い理由が</span>。",
                            "naturalTranslation": "人々が自動運転車を求める強い理由があります。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "reasons why...", "explanation": "<b>why</b>: 関係副詞。reasonsを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 14,
                        "text": "The most important reason is safety.",
                        "translation": "最も重要な理由は安全性です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The most important reason</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>safety</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>最も重要な理由は</span> <span class='t-V'>です</span> <span class='t-C'>安全性</span>。",
                            "naturalTranslation": "最も重要な理由は安全性です。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 15,
                        "text": "Studies show that more than 90 percent of car accidents are caused by human errors, such as looking at smartphones or being tired.",
                        "translation": "研究によると、交通事故の90パーセント以上は、スマートフォンを見たり疲れていたりといった人的ミスによって引き起こされています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["show"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Studies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>show</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that more than 90 percent of car accidents are caused by human errors, such as looking at smartphones or being tired</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>研究は</span> <span class='t-V'>示しています</span> <span class='t-O'>交通事故の90%以上が人的ミスによって引き起こされていることを（スマホを見たり、疲れていたりといった）</span>。",
                            "naturalTranslation": "研究によると、交通事故の90パーセント以上は、スマートフォンを見たり疲れていたりといった人的ミスによって引き起こされています。",
                            "vocabulary": [
                                { "word": "accident", "meaning": "「事故」。" },
                                { "word": "error", "meaning": "「誤り、ミス」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "are caused", "explanation": "<b>are caused</b>: 受動態。「引き起こされる」。" }
                            ]
                        }
                    },
                    {
                        "id": 16,
                        "text": "Computers do not get tired or distracted, so self-driving cars could save thousands of lives every year.",
                        "translation": "コンピューターは疲れたり気が散ったりしないため、自動運転車は毎年何千もの命を救うことができるかもしれません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["get", "save"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Computers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>do not get</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>tired or distracted</span><span class='tag'>C</span></span>, so <span class='chunk S-group'><span class='text'>self-driving cars</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could save</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>thousands of lives</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>every year</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>コンピューターは</span> <span class='t-V'>なりません</span> <span class='t-C'>疲れたり気が散ったりした状態に</span>、だから <span class='t-S'>自動運転車は</span> <span class='t-V'>救うことができるでしょう</span> <span class='t-O'>何千もの命を</span> <span class='t-M'>毎年</span>。",
                            "naturalTranslation": "コンピューターは疲れたり気が散ったりしないため、自動運転車は毎年何千もの命を救うことができるかもしれません。",
                            "vocabulary": [
                                { "word": "distracted", "meaning": "「気が散った、注意散漫な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "Also, they can help elderly people who cannot drive anymore to go shopping or visit doctors by themselves.",
                        "translation": "また、もはや運転できない高齢者が、自分一人で買い物に行ったり医者にかかったりするのを助けることもできます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can help"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can help</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>elderly people who cannot drive anymore</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to go shopping or visit doctors</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>by themselves</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>それらは</span> <span class='t-V'>助けることができます</span> <span class='t-O'>もはや運転できない高齢者を</span> <span class='t-C'>買い物に行ったり医者を訪れたりするように</span> <span class='t-M'>彼ら自身で（一人で）</span>。",
                            "naturalTranslation": "また、もはや運転できない高齢者が、自分一人で買い物に行ったり医者にかかったりするのを助けることもできます。",
                            "vocabulary": [
                                { "word": "elderly", "meaning": "「年配の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help O (to) do", "explanation": "<b>help O to do</b>: Oが～するのを助ける。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 18,
                        "text": "Despite these benefits, there are difficult challenges to solve before these cars become common.",
                        "translation": "これらの利点にもかかわらず、これらの車が一般的になる前に解決すべき難しい課題があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Despite these benefits</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>difficult challenges to solve</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>before these cars become common</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>これらの利点にもかかわらず、</span> <span class='t-V'>あります</span> <span class='t-S'>解決すべき難しい課題が</span> <span class='t-M'>これらの車が一般的になる前に</span>。",
                            "naturalTranslation": "これらの利点にもかかわらず、これらの車が一般的になる前に解決すべき難しい課題があります。",
                            "vocabulary": [
                                { "word": "Despite", "meaning": "「～にもかかわらず」。" },
                                { "word": "common", "meaning": "「一般的な、普及した」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 19,
                        "text": "One major question is about responsibility.",
                        "translation": "一つの大きな疑問は責任についてです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One major question</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>about responsibility</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの大きな疑問は</span> <span class='t-V'>です</span> <span class='t-C'>責任について</span>。",
                            "naturalTranslation": "一つの大きな疑問は責任についてです。",
                            "vocabulary": [
                                { "word": "responsibility", "meaning": "「責任」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 20,
                        "text": "If a self-driving car causes an accident, who is responsible?",
                        "translation": "もし自動運転車が事故を起こしたら、誰が責任を負うのでしょうか？",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>If a self-driving car causes an accident</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>who</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>responsible</span><span class='tag'>C</span></span>?",
                            "translationHtml": "<span class='t-M'>もし自動運転車が事故を起こしたら、</span> <span class='t-S'>誰が</span> <span class='t-V'>です（か）</span> <span class='t-C'>責任のある</span>？",
                            "naturalTranslation": "もし自動運転車が事故を起こしたら、誰が責任を負うのでしょうか？",
                            "vocabulary": [
                                { "word": "responsible", "meaning": "「責任がある」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 21,
                        "text": "Is it the owner, or the company that made the car?",
                        "translation": "それは所有者でしょうか、それとも車を作った会社でしょうか？",
                        "grammarAnalysis": {
                            "mainVerbs": ["Is"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>Is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk C-group'><span class='text'>the owner, or the company that made the car</span><span class='tag'>C</span></span>?",
                            "translationHtml": "<span class='t-V'>ですか</span> <span class='t-S'>それは</span> <span class='t-C'>所有者、あるいは車を作った会社</span>？",
                            "naturalTranslation": "それは所有者でしょうか、それとも車を作った会社でしょうか？",
                            "vocabulary": [
                                { "word": "owner", "meaning": "「所有者」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 22,
                        "text": "It is difficult to decide the rules.",
                        "translation": "ルールを決めるのは難しいことです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>difficult</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to decide the rules</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>難しい</span> <span class='t-S'>ルールを決めることは</span>。",
                            "naturalTranslation": "ルールを決めるのは難しいことです。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "It is ... to do", "explanation": "<b>It is ... to do</b>: 形式主語構文。" }
                            ]
                        }
                    },
                    {
                        "id": 23,
                        "text": "In addition, professional drivers, like taxi and truck drivers, are worried that they might lose their jobs in the future.",
                        "translation": "さらに、タクシーやトラックの運転手のようなプロのドライバーは、将来仕事を失うかもしれないと心配しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In addition</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>professional drivers, like taxi and truck drivers</span><span class='tag'>S</span></span>, <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>worried</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>that they might lose their jobs in the future</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>プロのドライバーは（タクシーやトラック運転手のような）</span> <span class='t-V'>です</span> <span class='t-C'>心配して</span> <span class='t-M'>彼らが将来仕事を失うかもしれないと</span>。",
                            "naturalTranslation": "さらに、タクシーやトラックの運転手のようなプロのドライバーは、将来仕事を失うかもしれないと心配しています。",
                            "vocabulary": [
                                { "word": "professional", "meaning": "「職業の、プロの」。" },
                                { "word": "lose", "meaning": "「～を失う」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 24,
                        "text": "Society needs to prepare for these big changes.",
                        "translation": "社会はこれらの大きな変化に備える必要があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["needs"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Society</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>needs</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to prepare for these big changes</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>社会は</span> <span class='t-V'>必要とします</span> <span class='t-O'>これらの大きな変化に備えることを</span>。",
                            "naturalTranslation": "社会はこれらの大きな変化に備える必要があります。",
                            "vocabulary": [
                                { "word": "prepare", "meaning": "「準備する、備える」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about the development of cars today?",
                "textTranslation": "今日の車の開発について正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "Traditional cars with steering wheels are no longer being sold.", "translation": "ハンドルのある伝統的な車はもはや販売されていない。", "isCorrect": false },
                    { "id": 2, "text": "Only small companies are interested in making new types of cars.", "translation": "小さな会社だけが新しいタイプの車を作ることに関心がある。", "isCorrect": false },
                    { "id": 3, "text": "Companies are creating cars that can move without human control.", "translation": "企業は人間の制御なしで動くことができる車を作っている。", "isCorrect": true, "highlight": "without a human driver controlling them" },
                    { "id": 4, "text": "Drivers are required to control the car's computer manually.", "translation": "運転手は車の手動でコンピューターを制御することを求められている。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、新しい車両（These vehicles）がどのように移動できるかについての記述を確認しましょう。",
                    "targetSentenceId": 5,
                    "highlightWord": "without",
                    "highlightWordSentenceId": 5
                },
                "keywords": ["development", "human control", "without"],
                "keywordExplanations": { "without": "～なしで", "control": "制御する" },
                "keywordMatches": [
                    { "sentenceId": 5, "text": "without a human driver controlling them", "keyword": "move without human control" }
                ],
                "choiceAdvice": "1: 販売終了の記述はありません。 2: Major companies（主要企業）が開発しています。 3: 本文の 'without a human driver controlling them' と一致します。 4: 手動制御は不要になります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 4 & 5): 「...developing self-driving cars. These vehicles can travel ... without a human driver controlling them.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 2,
                "text": "How do self-driving cars drive safely?",
                "textTranslation": "自動運転車はどのように安全に運転するのですか？",
                "choices": [
                    { "id": 1, "text": "They use cameras and sensors to recognize the situation around them.", "translation": "彼らは周囲の状況を認識するためにカメラやセンサーを使う。", "isCorrect": true, "highlight": "devices allow the car's computer to \"see\" everything" },
                    { "id": 2, "text": "They ask the passengers to watch the traffic lights carefully.", "translation": "彼らは乗客に信号を注意深く見るよう頼む。", "isCorrect": false },
                    { "id": 3, "text": "They connect to other cars to ask for directions to the destination.", "translation": "彼らは目的地への道を尋ねるために他の車と接続する。", "isCorrect": false },
                    { "id": 4, "text": "They drive very slowly so that they never hit anything.", "translation": "彼らは何にもぶつからないように非常にゆっくり運転する。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、車に装備されている装置（devices）と、それらがコンピューターに何をさせるかを確認しましょう。",
                    "targetSentenceId": 9,
                    "highlightWord": "cameras, sensors",
                    "highlightWordSentenceId": 8
                },
                "keywords": ["cameras", "sensors", "recognize"],
                "keywordExplanations": { "recognize": "認識する（本文の see に対応）" },
                "keywordMatches": [
                    { "sentenceId": 9, "text": "allow the car's computer to \"see\" everything", "keyword": "recognize the situation" }
                ],
                "choiceAdvice": "1: 本文の 'equipped with many cameras, sensors... allow ... to see everything' と一致します。 2: 乗客は何もしなくて良い（sit back and relax）とあります。 3: 他車への接続については書かれていません。 4: 速度についての記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 8 & 9): 「The cars are equipped with many cameras, sensors... allow the car's computer to 'see' everything...」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of self-driving cars is that",
                "textTranslation": "自動運転車の肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "they are much cheaper to buy than traditional cars.", "translation": "それらは伝統的な車よりも買うのがずっと安い。", "isCorrect": false },
                    { "id": 2, "text": "they allow people to drive faster than the speed limit.", "translation": "それらは人々が制限速度より速く運転することを可能にする。", "isCorrect": false },
                    { "id": 3, "text": "they can reduce accidents caused by human mistakes.", "translation": "それらは人的ミスによって引き起こされる事故を減らすことができる。", "isCorrect": true, "highlight": "Computers do not get tired ... could save thousands of lives" },
                    { "id": 4, "text": "they help young people learn how to drive easily.", "translation": "それらは若者が運転の方法を簡単に学ぶのを助ける。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、事故の原因（human errors）とコンピューターの利点（do not get tired）の対比に注目しましょう。",
                    "targetSentenceId": 16,
                    "highlightWord": "save",
                    "highlightWordSentenceId": 16
                },
                "keywords": ["reduce", "accidents", "human mistakes"],
                "keywordExplanations": { "reduce": "減らす", "human mistakes": "人的ミス（human errors）" },
                "keywordMatches": [
                    { "sentenceId": 15, "text": "accidents are caused by human errors", "keyword": "accidents caused by human mistakes" },
                    { "sentenceId": 16, "text": "save thousands of lives", "keyword": "reduce accidents" }
                ],
                "choiceAdvice": "1: 価格についての言及はありません。 2: 速度違反を推奨する記述はありません。 3: 本文の 'Computers do not get tired ... save thousands of lives' という内容と合致します。 4: 若者の運転練習については書かれていません（高齢者の支援については記述あり）。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 15 & 16): 「...accidents are caused by human errors... Computers do not get tired ... so self-driving cars could save thousands of lives...」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges regarding self-driving cars?",
                "textTranslation": "自動運転車に関する課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "Computers get tired after driving for a long time.", "translation": "コンピューターは長時間運転すると疲れる。", "isCorrect": false },
                    { "id": 2, "text": "It is hard to decide who is responsible for accidents.", "translation": "誰が事故の責任を負うかを決めるのが難しい。", "isCorrect": true, "highlight": "who is responsible? ... difficult to decide the rules" },
                    { "id": 3, "text": "There are not enough roads for self-driving cars.", "translation": "自動運転車のための十分な道路がない。", "isCorrect": false },
                    { "id": 4, "text": "Passengers might get sick while the car is moving.", "translation": "車が動いている間に乗客が気分が悪くなるかもしれない。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落で提起されている「責任（responsibility）」に関する疑問を確認しましょう。",
                    "targetSentenceId": 22,
                    "highlightWord": "responsibility",
                    "highlightWordSentenceId": 19
                },
                "keywords": ["challenge", "responsible", "decide"],
                "keywordExplanations": { "responsible": "責任がある" },
                "keywordMatches": [
                    { "sentenceId": 20, "text": "who is responsible?", "keyword": "who is responsible" },
                    { "sentenceId": 22, "text": "difficult to decide the rules", "keyword": "hard to decide" }
                ],
                "choiceAdvice": "1: コンピューターは疲れない（do not get tired）と第3段落にあります。 2: 本文の 'who is responsible? ... difficult to decide' と一致します。 3: 道路不足の話はありません。 4: 車酔いの話はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20 & 22): 「If a self-driving car causes an accident, who is responsible? ... It is difficult to decide the rules.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Self-driving cars will create more jobs for truck drivers.", "translation": "自動運転車はトラック運転手のためにより多くの仕事を生み出すだろう。", "isCorrect": false },
                    { "id": 2, "text": "Elderly people should not use self-driving cars alone.", "translation": "高齢者は一人で自動運転車を使うべきではない。", "isCorrect": false },
                    { "id": 3, "text": "Human drivers are generally safer than computer drivers.", "translation": "人間の運転手は一般的にコンピューターの運転手よりも安全である。", "isCorrect": false },
                    { "id": 4, "text": "New rules are needed to handle accidents involving these cars.", "translation": "これらの車が関わる事故を扱うために新しいルールが必要である。", "isCorrect": true, "highlight": "It is difficult to decide the rules. ... Society needs to prepare" }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終段落の「ルールを決めるのが難しい」という課題と、社会がどうすべきか（prepare）という結論を結びつけましょう。",
                    "targetSentenceId": 24,
                    "highlightWord": "prepare",
                    "highlightWordSentenceId": 24
                },
                "keywords": ["learn", "rules", "need"],
                "keywordExplanations": { "handle": "～を扱う、対処する" },
                "keywordMatches": [
                    { "sentenceId": 22, "text": "difficult to decide the rules", "keyword": "New rules are needed" },
                    { "sentenceId": 24, "text": "Society needs to prepare", "keyword": "needed to handle" }
                ],
                "choiceAdvice": "1: 仕事を失うかもしれない（lose their jobs）と心配されています。 2: 一人で買い物などに行けるよう助けるとあります。 3: 事故の90%はヒューマンエラーであり、コンピューターの方が安全であると示唆されています。 4: 責任の所在が不明確であり、社会が準備（＝ルール作りなど）をする必要があるという結論と一致します。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 22 & 24): 「It is difficult to decide the rules. ... Society needs to prepare for these big changes.」" },
                    { "type": "conclusion", "content": "正解: 4" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[Self-Driving Cars] (オリジナル)</div> 本文は、実用化が進む「自動運転車」の仕組み、メリット、そして社会的課題についての説明です。",
            "points": [
                { "label": "1. The Change (第1段落)", "text": "長年、車は人が運転するものでしたが、現在は主要企業が自動運転車の開発を進めています。人間が操作しなくても移動できる車です。" },
                { "label": "2. How it works (第2段落)", "text": "車にはカメラやセンサーが搭載されており、周囲の状況を認識します。コンピューターが瞬時に判断して運転するため、乗客は移動中にリラックスしたり仕事をしたりできます。" },
                { "label": "3. Benefits (第3段落)", "text": "最大の利点は安全性です。事故の90%以上はヒューマンエラー（不注意や疲労）が原因ですが、コンピューターにはそれがありません。また、運転できなくなった高齢者の移動手段としても役立ちます。" },
                { "label": "4. Challenges (第4段落)", "text": "課題は「責任」の所在です。事故が起きた際、責任は所有者にあるのかメーカーにあるのか、ルール作りが難航しています。また、タクシーやトラック運転手の職が失われる懸念もあります。" }
            ]
        }
    },
    {
        "id": "2025-7-sharing-clothes",
        "grade": "準2級プラス",
        "title": "Sharing Clothes",
        "subTitle": "問題5",
        "genre": "環境 / 日常生活",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Fashion+Rental",
            "question": "https://placehold.co/600x400?text=Sharing+Economy"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "Fashion is an important part of daily life for many people.",
                        "translation": "ファッションは多くの人々にとって日常生活の重要な一部です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Fashion</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an important part of daily life</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for many people</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>ファッションは</span> <span class='t-V'>です</span> <span class='t-C'>日常生活の重要な一部</span> <span class='t-M'>多くの人々にとって</span>。",
                            "naturalTranslation": "ファッションは多くの人々にとって日常生活の重要な一部です。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 2,
                        "text": "We all enjoy wearing new styles and looking good.",
                        "translation": "私たちは皆、新しいスタイルを身に着けたり、良く見せたりすることを楽しんでいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["enjoy"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>We all</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>enjoy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>wearing new styles and looking good</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>私たちは皆</span> <span class='t-V'>楽しんでいます</span> <span class='t-O'>新しいスタイルを着ることや良く見せることを</span>。",
                            "naturalTranslation": "私たちは皆、新しいスタイルを身に着けたり、良く見せたりすることを楽しんでいます。",
                            "vocabulary": [
                                { "word": "wear", "meaning": "「～を着る」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "enjoy doing", "explanation": "<b>enjoy doing</b>: 「～することを楽しむ」。動名詞を目的語にとります。" }
                            ]
                        }
                    },
                    {
                        "id": 3,
                        "text": "However, the rise of \"fast fashion\" has created a big problem.",
                        "translation": "しかし、「ファストファッション」の台頭は大きな問題を生み出しました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has created"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the rise of \"fast fashion\"</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has created</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a big problem</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>「ファストファッション」の台頭は</span> <span class='t-V'>生み出しました</span> <span class='t-O'>大きな問題を</span>。",
                            "naturalTranslation": "しかし、「ファストファッション」の台頭は大きな問題を生み出しました。",
                            "vocabulary": [
                                { "word": "rise", "meaning": "「上昇、台頭」。" },
                                { "word": "create", "meaning": "「～を作り出す」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "has created", "explanation": "<b>has created</b>: 現在完了形。" }
                            ]
                        }
                    },
                    {
                        "id": 4,
                        "text": "People buy cheap clothes, wear them only a few times, and then throw them away quickly.",
                        "translation": "人々は安い服を買い、数回着るだけで、すぐに捨ててしまいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["buy", "wear", "throw away"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>buy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>cheap clothes</span><span class='tag'>O</span></span>, <span class='chunk V-group'><span class='text'>wear</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>only a few times</span><span class='tag'>M</span></span>, and then <span class='chunk V-group'><span class='text'>throw them away</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>quickly</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>人々は</span> <span class='t-V'>買います</span> <span class='t-O'>安い服を</span>、 <span class='t-V'>着ます</span> <span class='t-O'>それらを</span> <span class='t-M'>ほんの数回だけ</span>、そしてそれから <span class='t-V'>捨ててしまいます</span> <span class='t-M'>すぐに</span>。",
                            "naturalTranslation": "人々は安い服を買い、数回着るだけで、すぐに捨ててしまいます。",
                            "vocabulary": [
                                { "word": "cheap", "meaning": "「安い」。" },
                                { "word": "throw away", "meaning": "「～を捨てる」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 5,
                        "text": "This creates a huge amount of waste every year.",
                        "translation": "これは毎年膨大な量のゴミを生み出します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["creates"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>creates</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a huge amount of waste</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>every year</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>作り出します</span> <span class='t-O'>膨大な量のゴミを</span> <span class='t-M'>毎年</span>。",
                            "naturalTranslation": "これは毎年膨大な量のゴミを生み出します。",
                            "vocabulary": [
                                { "word": "huge", "meaning": "「巨大な、莫大な」。" },
                                { "word": "waste", "meaning": "「ゴミ、廃棄物」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 6,
                        "text": "To reduce this waste, a new type of service is becoming popular around the world.",
                        "translation": "このゴミを減らすために、新しいタイプのサービスが世界中で人気になりつつあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is becoming"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>To reduce this waste</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a new type of service</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is becoming</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>popular</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>around the world</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>このゴミを減らすために、</span> <span class='t-S'>新しいタイプのサービスが</span> <span class='t-V'>なりつつあります</span> <span class='t-C'>人気に</span> <span class='t-M'>世界中で</span>。",
                            "naturalTranslation": "このゴミを減らすために、新しいタイプのサービスが世界中で人気になりつつあります。",
                            "vocabulary": [
                                { "word": "reduce", "meaning": "「～を減らす」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "To reduce", "explanation": "<b>To reduce</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 7,
                        "text": "It is called fashion rental, or clothing sharing.",
                        "translation": "それはファッションレンタル、あるいは衣料品シェアリングと呼ばれています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is called"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>fashion rental, or clothing sharing</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>ファッションレンタル、あるいは衣料品シェアリングと</span>。",
                            "naturalTranslation": "それはファッションレンタル、あるいは衣料品シェアリングと呼ばれています。",
                            "vocabulary": [
                                { "word": "clothing", "meaning": "「衣類」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "is called", "explanation": "<b>is called</b>: 受動態。「～と呼ばれる」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 8,
                        "text": "The system of fashion rental is simple and convenient.",
                        "translation": "ファッションレンタルのシステムは単純で便利です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The system of fashion rental</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>simple and convenient</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>ファッションレンタルのシステムは</span> <span class='t-V'>です</span> <span class='t-C'>単純で便利な</span>。",
                            "naturalTranslation": "ファッションレンタルのシステムは単純で便利です。",
                            "vocabulary": [
                                { "word": "convenient", "meaning": "「便利な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "Instead of buying clothes at a store, users pay a monthly fee to a rental company.",
                        "translation": "店で服を買う代わりに、ユーザーはレンタル会社に月額料金を支払います。",
                        "grammarAnalysis": {
                            "mainVerbs": ["pay"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Instead of buying clothes at a store</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>users</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>pay</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a monthly fee</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to a rental company</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>店で服を買う代わりに、</span> <span class='t-S'>ユーザーは</span> <span class='t-V'>支払います</span> <span class='t-O'>月額料金を</span> <span class='t-M'>レンタル会社に</span>。",
                            "naturalTranslation": "店で服を買う代わりに、ユーザーはレンタル会社に月額料金を支払います。",
                            "vocabulary": [
                                { "word": "Instead of", "meaning": "「～の代わりに」。" },
                                { "word": "fee", "meaning": "「料金」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 10,
                        "text": "They can choose items they like from a website, and the clothes are delivered directly to their homes.",
                        "translation": "彼らはウェブサイトから好きなアイテムを選ぶことができ、服は直接自宅に届けられます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can choose", "are delivered"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can choose</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>items they like</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>from a website</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>the clothes</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are delivered</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>directly to their homes</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>選ぶことができます</span> <span class='t-O'>好きなアイテムを</span> <span class='t-M'>ウェブサイトから</span>、そして <span class='t-S'>服は</span> <span class='t-V'>届けられます</span> <span class='t-M'>直接彼らの家に</span>。",
                            "naturalTranslation": "彼らはウェブサイトから好きなアイテムを選ぶことができ、服は直接自宅に届けられます。",
                            "vocabulary": [
                                { "word": "deliver", "meaning": "「～を配達する」。" },
                                { "word": "directly", "meaning": "「直接」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "items they like", "explanation": "<b>they like</b>: 関係代名詞(that/which)の省略。itemsを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 11,
                        "text": "Users can keep the clothes for as long as they want.",
                        "translation": "ユーザーは好きなだけ長く服を保管することができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can keep"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Users</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can keep</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the clothes</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>for as long as they want</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>ユーザーは</span> <span class='t-V'>保管できます</span> <span class='t-O'>服を</span> <span class='t-M'>彼らが望むだけ長く</span>。",
                            "naturalTranslation": "ユーザーは好きなだけ長く服を保管することができます。",
                            "vocabulary": [
                                { "word": "keep", "meaning": "「～を持ち続ける、保管する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "as long as", "explanation": "<b>as long as</b>: 「～する限り、～と同じくらい長く」。" }
                            ]
                        }
                    },
                    {
                        "id": 12,
                        "text": "When they are finished with them, they simply send them back in a box.",
                        "translation": "使い終わったら、単純に箱に入れて送り返すだけです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are finished", "send"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>When they are finished with them</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>simply</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>send them back</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>in a box</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>彼らがそれらを使い終わった時、</span> <span class='t-S'>彼らは</span> <span class='t-M'>単純に</span> <span class='t-V'>送り返します</span> <span class='t-M'>箱に入れて</span>。",
                            "naturalTranslation": "使い終わったら、単純に箱に入れて送り返すだけです。",
                            "vocabulary": [
                                { "word": "be finished with", "meaning": "「～を使い終わる、済ませる」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 13,
                        "text": "The best part is that users do not need to wash the clothes because the company cleans them professionally.",
                        "translation": "最高な点は、会社が専門的にクリーニングしてくれるため、ユーザーが服を洗濯する必要がないことです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is", "do not need", "cleans"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The best part</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that users do not need to wash the clothes</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>because the company cleans them professionally</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>最高な点は</span> <span class='t-V'>です</span> <span class='t-C'>ユーザーが服を洗う必要がないこと</span> <span class='t-M'>会社が専門的にそれらをきれいにするので</span>。",
                            "naturalTranslation": "最高な点は、会社が専門的にクリーニングしてくれるため、ユーザーが服を洗濯する必要がないことです。",
                            "vocabulary": [
                                { "word": "professionally", "meaning": "「専門的に、プロの手で」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "part is that...", "explanation": "<b>that</b>: 接続詞。that以下が補語になっています。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 14,
                        "text": "This sharing service has several positive benefits.",
                        "translation": "このシェアリングサービスにはいくつかの肯定的な利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This sharing service</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>several positive benefits</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>このシェアリングサービスは</span> <span class='t-V'>持っています</span> <span class='t-O'>いくつかの肯定的な利点を</span>。",
                            "naturalTranslation": "このシェアリングサービスにはいくつかの肯定的な利点があります。",
                            "vocabulary": [
                                { "word": "benefit", "meaning": "「利点、利益」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 15,
                        "text": "First, it is very good for the environment.",
                        "translation": "第一に、それは環境にとって非常に良いことです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>First</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very good for the environment</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>第一に、</span> <span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>環境にとって非常に良い</span>。",
                            "naturalTranslation": "第一に、それは環境にとって非常に良いことです。",
                            "vocabulary": [
                                { "word": "environment", "meaning": "「環境」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 16,
                        "text": "By sharing clothes instead of buying new ones, the amount of trash is reduced significantly.",
                        "translation": "新しいものを買う代わりに服をシェアすることで、ゴミの量は大幅に削減されます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is reduced"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>By sharing clothes instead of buying new ones</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the amount of trash</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is reduced</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>significantly</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>服をシェアすることによって（新しいものを買う代わりに）、</span> <span class='t-S'>ゴミの量は</span> <span class='t-V'>削減されます</span> <span class='t-M'>大幅に</span>。",
                            "naturalTranslation": "新しいものを買う代わりに服をシェアすることで、ゴミの量は大幅に削減されます。",
                            "vocabulary": [
                                { "word": "reduce", "meaning": "「～を減らす」。" },
                                { "word": "significantly", "meaning": "「著しく、大幅に」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "is reduced", "explanation": "<b>is reduced</b>: 受動態。「減らされる＝減る」。" }
                            ]
                        }
                    },
                    {
                        "id": 17,
                        "text": "Second, it helps people save space in their homes.",
                        "translation": "第二に、それは人々が家の中のスペースを節約するのに役立ちます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["helps"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Second</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people save space in their homes</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>第二に、</span> <span class='t-S'>それは</span> <span class='t-V'>助けます</span> <span class='t-O'>人々が家の中のスペースを節約するのを</span>。",
                            "naturalTranslation": "第二に、それは人々が家の中のスペースを節約するのに役立ちます。",
                            "vocabulary": [
                                { "word": "space", "meaning": "「空間、スペース」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help O (to) do", "explanation": "<b>help O do</b>: 「Oが～するのを助ける」。" }
                            ]
                        }
                    },
                    {
                        "id": 18,
                        "text": "Since they do not own many clothes, they do not need large closets.",
                        "translation": "彼らは多くの服を所有しないので、大きなクローゼットを必要としません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["own", "need"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Since they do not own many clothes</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>do not need</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>large closets</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>彼らは多くの服を所有しないので、</span> <span class='t-S'>彼らは</span> <span class='t-V'>必要としません</span> <span class='t-O'>大きなクローゼットを</span>。",
                            "naturalTranslation": "彼らは多くの服を所有しないので、大きなクローゼットを必要としません。",
                            "vocabulary": [
                                { "word": "own", "meaning": "「～を所有する」。" },
                                { "word": "closet", "meaning": "「クローゼット、押入れ」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 19,
                        "text": "In addition, people can enjoy wearing expensive brand-name clothes or suits for a low price, which is helpful for special events like weddings or parties.",
                        "translation": "さらに、人々は高価なブランド服やスーツを低価格で着ることを楽しむことができ、これは結婚式やパーティーのような特別なイベントに役立ちます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can enjoy"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In addition</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can enjoy wearing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>expensive brand-name clothes or suits</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>for a low price</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>which is helpful for special events like weddings or parties</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>人々は</span> <span class='t-V'>着ることを楽しめます</span> <span class='t-O'>高価なブランド服やスーツを</span> <span class='t-M'>低価格で</span>、 <span class='t-M'>そしてそれは役立ちます（結婚式やパーティーのような特別なイベントに）</span>。",
                            "naturalTranslation": "さらに、人々は高価なブランド服やスーツを低価格で着ることを楽しむことができ、これは結婚式やパーティーのような特別なイベントに役立ちます。",
                            "vocabulary": [
                                { "word": "expensive", "meaning": "「高価な」。" },
                                { "word": "suit", "meaning": "「スーツ」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": ", which", "explanation": "<b>, which</b>: 関係代名詞の非制限用法。前の文の内容全体を受けています。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 20,
                        "text": "However, there are some challenges to this new service.",
                        "translation": "しかし、この新しいサービスにはいくつかの課題もあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>some challenges to this new service</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-V'>あります</span> <span class='t-S'>この新しいサービスにはいくつかの課題が</span>。",
                            "naturalTranslation": "しかし、この新しいサービスにはいくつかの課題もあります。",
                            "vocabulary": [
                                { "word": "challenge", "meaning": "「課題、難問」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 21,
                        "text": "One common concern is cleanliness.",
                        "translation": "一つの共通した懸念は清潔さです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One common concern</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>cleanliness</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの共通した懸念は</span> <span class='t-V'>です</span> <span class='t-C'>清潔さ</span>。",
                            "naturalTranslation": "一つの共通した懸念は清潔さです。",
                            "vocabulary": [
                                { "word": "concern", "meaning": "「懸念、心配」。" },
                                { "word": "cleanliness", "meaning": "「清潔さ」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 22,
                        "text": "Some people feel uncomfortable wearing clothes that strangers have worn before.",
                        "translation": "見知らぬ人が以前に着た服を着ることに不快感を覚える人もいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["feel"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Some people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>feel</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>uncomfortable</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>wearing clothes that strangers have worn before</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>一部の人々は</span> <span class='t-V'>感じます</span> <span class='t-C'>不快に</span> <span class='t-M'>見知らぬ人が以前に着た服を着ることを</span>。",
                            "naturalTranslation": "見知らぬ人が以前に着た服を着ることに不快感を覚える人もいます。",
                            "vocabulary": [
                                { "word": "uncomfortable", "meaning": "「不快な、心地よくない」。" },
                                { "word": "stranger", "meaning": "「見知らぬ人」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "wearing ...", "explanation": "<b>wearing</b>: 分詞構文（または付帯状況）。「～して不快に感じる」。" }
                            ]
                        }
                    },
                    {
                        "id": 23,
                        "text": "Also, there is a risk of damaging the items.",
                        "translation": "また、アイテムを傷つけるリスクもあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>a risk of damaging the items</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-V'>あります</span> <span class='t-S'>アイテムを傷つけるリスクが</span>。",
                            "naturalTranslation": "また、アイテムを傷つけるリスクもあります。",
                            "vocabulary": [
                                { "word": "risk", "meaning": "「危険、リスク」。" },
                                { "word": "damage", "meaning": "「～に損害を与える、傷つける」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 24,
                        "text": "If a user tears a dress or spills coffee on a shirt, they might have to pay a high fee for repairs.",
                        "translation": "もしユーザーがドレスを破ったりシャツにコーヒーをこぼしたりした場合、修理のために高い料金を払わなければならないかもしれません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["tears", "spills", "have to pay"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>If a user tears a dress or spills coffee on a shirt</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might have to pay</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a high fee for repairs</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>もしユーザーがドレスを破ったり、シャツにコーヒーをこぼしたりしたら、</span> <span class='t-S'>彼らは</span> <span class='t-V'>支払わなければならないかもしれません</span> <span class='t-O'>修理のために高い料金を</span>。",
                            "naturalTranslation": "もしユーザーがドレスを破ったりシャツにコーヒーをこぼしたりした場合、修理のために高い料金を払わなければならないかもしれません。",
                            "vocabulary": [
                                { "word": "tear", "meaning": "「～を引き裂く、破る」。" },
                                { "word": "spill", "meaning": "「～をこぼす」。" },
                                { "word": "repair", "meaning": "「修理」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 25,
                        "text": "While sharing clothes is a smart idea, these issues need to be considered.",
                        "translation": "服のシェアは賢いアイデアですが、これらの問題は考慮される必要があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is", "need"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>While sharing clothes is a smart idea</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>these issues</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>need to be considered</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>服をシェアすることは賢いアイデアですが、</span> <span class='t-S'>これらの問題は</span> <span class='t-V'>考慮される必要があります</span>。",
                            "naturalTranslation": "服のシェアは賢いアイデアですが、これらの問題は考慮される必要があります。",
                            "vocabulary": [
                                { "word": "issue", "meaning": "「問題、論点」。" },
                                { "word": "consider", "meaning": "「～を考慮する、検討する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "While", "explanation": "<b>While</b>: 接頭辞。「～だけれども、一方で」（譲歩）。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about the fashion industry today?",
                "textTranslation": "今日のファッション業界について正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "People are keeping their clothes for a longer time than before.", "translation": "人々は以前よりも長い期間服を持ち続けている。", "isCorrect": false },
                    { "id": 2, "text": "Fast fashion is helping to reduce the amount of waste in the world.", "translation": "ファストファッションは世界のゴミの量を減らすのに役立っている。", "isCorrect": false },
                    { "id": 3, "text": "Many people throw away clothes after wearing them only a few times.", "translation": "多くの人々は、ほんの数回着ただけで服を捨ててしまう。", "isCorrect": true, "highlight": "wear them only a few times, and then throw them away" },
                    { "id": 4, "text": "Rental companies are buying all the cheap clothes from stores.", "translation": "レンタル会社は店から全ての安い服を買い占めている。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、ファストファッションの問題点（problem）についての記述を確認しましょう。",
                    "targetSentenceId": 4,
                    "highlightWord": "throw them away",
                    "highlightWordSentenceId": 4
                },
                "keywords": ["fast fashion", "waste", "throw away"],
                "keywordExplanations": { "fast fashion": "最新の流行を採り入れ、低価格で販売するファッション", "throw away": "捨てる" },
                "keywordMatches": [
                    { "sentenceId": 4, "text": "wear them only a few times, and then throw them away", "keyword": "throw away clothes after wearing them only a few times" }
                ],
                "choiceAdvice": "1: 本文ではすぐに捨ててしまう（throw them away quickly）とあります。 2: ファストファッションがゴミを生み出している（creates waste）とあります。 3: 本文の 'wear them only a few times, and then throw them away' と一致します。 4: そのような記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 4): 「People buy cheap clothes, wear them only a few times, and then throw them away quickly.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 2,
                "text": "How do users use the fashion rental service?",
                "textTranslation": "ユーザーはどのようにファッションレンタルサービスを利用しますか？",
                "choices": [
                    { "id": 1, "text": "They must wash the clothes carefully before returning them.", "translation": "彼らは服を返す前に注意深く洗わなければならない。", "isCorrect": false },
                    { "id": 2, "text": "They pay a monthly fee to borrow clothes and send them back later.", "translation": "彼らは服を借りるために月額料金を支払い、後で送り返す。", "isCorrect": true, "highlight": "pay a monthly fee ... send them back in a box" },
                    { "id": 3, "text": "They have to go to the company's office to pick up the items.", "translation": "彼らはアイテムを受け取るために会社のオフィスに行かなければならない。", "isCorrect": false },
                    { "id": 4, "text": "They are required to buy the clothes if they keep them for a week.", "translation": "彼らは1週間服を持っていたら買い取らなければならない。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、サービスの利用手順（支払い、配送、返却）を確認しましょう。",
                    "targetSentenceId": 9,
                    "highlightWord": "monthly fee",
                    "highlightWordSentenceId": 9
                },
                "keywords": ["monthly fee", "send back", "borrow"],
                "keywordExplanations": { "monthly fee": "月額料金", "borrow": "借りる" },
                "keywordMatches": [
                    { "sentenceId": 9, "text": "pay a monthly fee", "keyword": "pay a monthly fee" },
                    { "sentenceId": 12, "text": "simply send them back", "keyword": "send them back later" }
                ],
                "choiceAdvice": "1: 洗濯不要（do not need to wash）とあります。 2: 月額料金を払い（pay a monthly fee）、使い終わったら送り返す（send them back）という記述と一致します。 3: 自宅に配送される（delivered directly to their homes）とあります。 4: 好きなだけ長く保管できる（keep ... for as long as they want）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 9 & 12): 「...users pay a monthly fee... When they are finished with them, they simply send them back...」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of sharing clothes is that",
                "textTranslation": "服をシェアすることの肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "it allows people to wear expensive clothes for a lower cost.", "translation": "それは人々が低コストで高価な服を着ることを可能にする。", "isCorrect": true, "highlight": "enjoy wearing expensive brand-name clothes ... for a low price" },
                    { "id": 2, "text": "it encourages people to buy larger houses with big closets.", "translation": "それは人々に大きなクローゼットのある大きな家を買うよう促す。", "isCorrect": false },
                    { "id": 3, "text": "it makes it easier for people to wash their own clothes.", "translation": "それは人々が自分の服を洗うのをより簡単にする。", "isCorrect": false },
                    { "id": 4, "text": "it increases the number of clothes that people throw away.", "translation": "それは人々が捨てる服の数を増やす。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、特別なイベント（special events）に関する利点を確認しましょう。",
                    "targetSentenceId": 19,
                    "highlightWord": "expensive",
                    "highlightWordSentenceId": 19
                },
                "keywords": ["expensive", "cost", "price"],
                "keywordExplanations": { "brand-name": "ブランド品の", "low price": "低価格" },
                "keywordMatches": [
                    { "sentenceId": 19, "text": "expensive brand-name clothes ... for a low price", "keyword": "wear expensive clothes for a lower cost" }
                ],
                "choiceAdvice": "1: 本文の 'enjoy wearing expensive ... for a low price' と一致します。 2: スペースを節約できる（save space）ため、大きなクローゼットは不要（do not need）です。 3: 洗濯は不要（do not need to wash）です。 4: ゴミの量を減らす（amount of trash is reduced）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 19): 「In addition, people can enjoy wearing expensive brand-name clothes or suits for a low price...」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges that the rental service faces?",
                "textTranslation": "レンタルサービスが直面している課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "The monthly fee is too expensive for most young people.", "translation": "月額料金はほとんどの若者にとって高すぎる。", "isCorrect": false },
                    { "id": 2, "text": "Delivery trucks cannot go to some areas in the countryside.", "translation": "配送トラックは田舎の一部の地域に行くことができない。", "isCorrect": false },
                    { "id": 3, "text": "Users might have to pay extra money if they damage the clothes.", "translation": "もし服を傷つけたら、ユーザーは追加のお金を払わなければならないかもしれない。", "isCorrect": true, "highlight": "might have to pay a high fee for repairs" },
                    { "id": 4, "text": "There are not enough brand-name clothes for everyone to share.", "translation": "皆でシェアするための十分なブランド服がない。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、服を傷つけた場合（damage）のリスクについて書かれている部分を確認しましょう。",
                    "targetSentenceId": 24,
                    "highlightWord": "repairs",
                    "highlightWordSentenceId": 24
                },
                "keywords": ["challenge", "damage", "pay"],
                "keywordExplanations": { "damage": "傷つける", "extra": "追加の", "repair": "修理" },
                "keywordMatches": [
                    { "sentenceId": 24, "text": "pay a high fee for repairs", "keyword": "pay extra money if they damage" }
                ],
                "choiceAdvice": "1: 価格が高いという記述はありません。 2: 配送地域の制限については書かれていません。 3: 本文の 'If a user tears ... pay a high fee for repairs' と一致します。 4: 在庫不足の話はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 24): 「If a user tears a dress or spills coffee on a shirt, they might have to pay a high fee for repairs.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Fashion rental services will likely disappear in the near future.", "translation": "ファッションレンタルサービスは近い将来なくなる可能性が高い。", "isCorrect": false },
                    { "id": 2, "text": "Most people prefer buying cheap clothes to renting expensive ones.", "translation": "ほとんどの人は高い服を借りるより安い服を買うことを好む。", "isCorrect": false },
                    { "id": 3, "text": "Sharing clothes solves environmental problems but has some worries.", "translation": "服のシェアは環境問題を解決するが、いくつかの懸念もある。", "isCorrect": true, "highlight": "While sharing clothes is a smart idea, these issues need to be considered" },
                    { "id": 4, "text": "The quality of rental clothes is usually worse than new clothes.", "translation": "レンタル服の質はたいてい新品の服より悪い。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終文で、服のシェアについての「良い点」と「考慮すべき点」の両方に触れていることを確認しましょう。",
                    "targetSentenceId": 25,
                    "highlightWord": "considered",
                    "highlightWordSentenceId": 25
                },
                "keywords": ["environment", "solve", "worry"],
                "keywordExplanations": { "solve": "解決する", "worry": "心配、懸念（concern）" },
                "keywordMatches": [
                    { "sentenceId": 16, "text": "amount of trash is reduced significantly", "keyword": "solves environmental problems" },
                    { "sentenceId": 25, "text": "these issues need to be considered", "keyword": "has some worries" }
                ],
                "choiceAdvice": "1: 人気になりつつある（becoming popular）と書かれています。 2: 好みの比較については書かれていません。 3: 環境に良い（benefits）という点と、清潔さなどの懸念（challenges）がある点の両方をまとめた内容です。 4: 質の良し悪しについては書かれていませんが、会社が専門的にクリーニングするとあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 25): 「While sharing clothes is a smart idea, these issues need to be considered.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[Sharing Clothes] (オリジナル)</div> 本文は、環境配慮と利便性から注目される「ファッションレンタル（衣服のシェアリング）」についての説明です。",
            "points": [
                { "label": "1. The Problem (第1段落)", "text": "人々はファッションを楽しみますが、安価な服を大量に消費して捨てる「ファストファッション」がゴミ問題を悪化させています。その解決策として衣服のシェアリングが登場しました。" },
                { "label": "2. The System (第2段落)", "text": "仕組みは簡単です。月額料金を払えば、選んだ服が自宅に届きます。着終わったら洗わずに返却するだけで、クリーニングは企業が行います。" },
                { "label": "3. Benefits (第3段落)", "text": "環境に優しくゴミを減らせるほか、自宅のクローゼットのスペースを節約できます。また、結婚式などで使う高価なブランド服を安く利用できるメリットもあります。" },
                { "label": "4. Challenges (第4段落)", "text": "課題は「清潔さ」への懸念です。他人が着た服に抵抗がある人もいます。また、服を汚したり破いたりした場合、修理費を請求されるリスクもあります。" }
            ]
        }
    },
    {
        "id": "2025-8-delivery-drones",
        "grade": "準2級プラス",
        "title": "Delivery Drones",
        "subTitle": "問題6",
        "genre": "技術 / 社会",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Delivery+Drone",
            "question": "https://placehold.co/600x400?text=Drone+Logistics"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "Shopping online has become a normal part of life for many people.",
                        "translation": "オンラインショッピングは多くの人々にとって生活の当たり前の一部になりました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has become"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Shopping online</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has become</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a normal part of life</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for many people</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>オンラインで買い物をすることは</span> <span class='t-V'>なりました</span> <span class='t-C'>生活の普通の一部に</span> <span class='t-M'>多くの人々にとって</span>。",
                            "naturalTranslation": "オンラインショッピングは多くの人々にとって生活の当たり前の一部になりました。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "Shopping", "explanation": "<b>Shopping</b>: 動名詞。「買い物をすること」。" },
                                { "phrase": "has become", "explanation": "<b>has become</b>: 現在完了形。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "Every day, millions of packages are delivered to homes by trucks.",
                        "translation": "毎日、何百万もの荷物がトラックによって家庭に届けられています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are delivered"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Every day</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>millions of packages</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are delivered</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>to homes</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>by trucks</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>毎日、</span> <span class='t-S'>何百万もの小包が</span> <span class='t-V'>配達されています</span> <span class='t-M'>家庭へ</span> <span class='t-M'>トラックによって</span>。",
                            "naturalTranslation": "毎日、何百万もの荷物がトラックによって家庭に届けられています。",
                            "vocabulary": [
                                { "word": "package", "meaning": "「小包、荷物」。" },
                                { "word": "deliver", "meaning": "「～を配達する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "are delivered", "explanation": "<b>are delivered</b>: 受動態。「配達される」。" }
                            ]
                        }
                    },
                    {
                        "id": 3,
                        "text": "However, this increase in delivery trucks has caused traffic jams and air pollution in cities.",
                        "translation": "しかし、この配送トラックの増加は、都市部で交通渋滞や大気汚染を引き起こしています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has caused"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this increase in delivery trucks</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has caused</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>traffic jams and air pollution</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>in cities</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>配送トラックのこの増加は</span> <span class='t-V'>引き起こしました</span> <span class='t-O'>交通渋滞と大気汚染を</span> <span class='t-M'>都市で</span>。",
                            "naturalTranslation": "しかし、この配送トラックの増加は、都市部で交通渋滞や大気汚染を引き起こしています。",
                            "vocabulary": [
                                { "word": "increase", "meaning": "「増加」。" },
                                { "word": "traffic jam", "meaning": "「交通渋滞」。" },
                                { "word": "pollution", "meaning": "「汚染」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 4,
                        "text": "To solve these problems, major companies are developing a new delivery method using drones.",
                        "translation": "これらの問題を解決するために、主要企業はドローンを使った新しい配送方法を開発しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are developing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>To solve these problems</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>major companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are developing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a new delivery method using drones</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>これらの問題を解決するために、</span> <span class='t-S'>主要な企業は</span> <span class='t-V'>開発しています</span> <span class='t-O'>ドローンを使った新しい配送方法を</span>。",
                            "naturalTranslation": "これらの問題を解決するために、主要企業はドローンを使った新しい配送方法を開発しています。",
                            "vocabulary": [
                                { "word": "method", "meaning": "「方法」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "To solve", "explanation": "<b>To solve</b>: 不定詞の副詞的用法（目的）。" },
                                { "phrase": "using drones", "explanation": "<b>using</b>: 現在分詞の後置修飾（または分詞構文）。methodを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "text": "These small flying machines are expected to change the way goods are transported in the future.",
                        "translation": "これらの小さな飛行機械は、将来の商品輸送の方法を変えることが期待されています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are expected"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>These small flying machines</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are expected to change</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the way goods are transported</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>in the future</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これらの小さな飛行機械は</span> <span class='t-V'>変えることが期待されています</span> <span class='t-O'>商品が輸送される方法を</span> <span class='t-M'>将来</span>。",
                            "naturalTranslation": "これらの小さな飛行機械は、将来の商品輸送の方法を変えることが期待されています。",
                            "vocabulary": [
                                { "word": "expect", "meaning": "「期待する、予期する」。" },
                                { "word": "transport", "meaning": "「輸送する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "the way ...", "explanation": "<b>the way ...</b>: 関係副詞howの代用。「～する方法」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 6,
                        "text": "Using drones for delivery is quite simple.",
                        "translation": "配送にドローンを使うことは非常にシンプルです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Using drones for delivery</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>quite simple</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>配送にドローンを使うことは</span> <span class='t-V'>です</span> <span class='t-C'>とても単純な</span>。",
                            "naturalTranslation": "配送にドローンを使うことは非常にシンプルです。",
                            "vocabulary": [
                                { "word": "quite", "meaning": "「かなり、非常に」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 7,
                        "text": "First, a customer orders an item online.",
                        "translation": "まず、客がオンラインで商品を注文します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["orders"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>First</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a customer</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>orders</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an item</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>online</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>まず、</span> <span class='t-S'>客は</span> <span class='t-V'>注文します</span> <span class='t-O'>商品を</span> <span class='t-M'>オンラインで</span>。",
                            "naturalTranslation": "まず、客がオンラインで商品を注文します。",
                            "vocabulary": [
                                { "word": "order", "meaning": "「～を注文する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 8,
                        "text": "Then, a drone picks up the package from a warehouse and flies to the customer's house automatically using GPS technology.",
                        "translation": "その後、ドローンが倉庫から荷物をピックアップし、GPS技術を使って自動的に客の家へ飛びます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["picks up", "flies"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Then</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a drone</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>picks up</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the package</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>from a warehouse</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>flies</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>to the customer's house</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>automatically using GPS technology</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>それから、</span> <span class='t-S'>ドローンは</span> <span class='t-V'>拾い上げます（集荷します）</span> <span class='t-O'>荷物を</span> <span class='t-M'>倉庫から</span>、そして <span class='t-V'>飛びます</span> <span class='t-M'>客の家へ</span> <span class='t-M'>自動的にGPS技術を使って</span>。",
                            "naturalTranslation": "その後、ドローンが倉庫から荷物をピックアップし、GPS技術を使って自動的に客の家へ飛びます。",
                            "vocabulary": [
                                { "word": "pick up", "meaning": "「拾い上げる、受け取る」。" },
                                { "word": "warehouse", "meaning": "「倉庫」。" },
                                { "word": "automatically", "meaning": "「自動的に」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "Unlike trucks, drones fly through the sky, so they do not get stuck in traffic.",
                        "translation": "トラックとは違い、ドローンは空を飛ぶので、交通渋滞に巻き込まれません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["fly", "get stuck"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Unlike trucks</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>drones</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>fly</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>through the sky</span><span class='tag'>M</span></span>, so <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>do not get stuck</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>in traffic</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>トラックとは違って、</span> <span class='t-S'>ドローンは</span> <span class='t-V'>飛びます</span> <span class='t-M'>空を通って</span>、だから <span class='t-S'>それらは</span> <span class='t-V'>行き詰まりません（巻き込まれません）</span> <span class='t-M'>交通渋滞に</span>。",
                            "naturalTranslation": "トラックとは違い、ドローンは空を飛ぶので、交通渋滞に巻き込まれません。",
                            "vocabulary": [
                                { "word": "Unlike", "meaning": "「～と違って」。" },
                                { "word": "get stuck", "meaning": "「行き詰まる、動けなくなる」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 10,
                        "text": "This allows them to deliver items much faster, sometimes within thirty minutes after the order is placed.",
                        "translation": "これにより、彼らは商品をはるかに速く、時には注文が行われてから30分以内に届けることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["allows"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allows</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to deliver items much faster</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>sometimes within thirty minutes after the order is placed</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>可能にします</span> <span class='t-O'>それらが</span> <span class='t-C'>商品をずっと速く届けることを</span>、 <span class='t-M'>時には30分以内に（注文がされた後）</span>。",
                            "naturalTranslation": "これにより、彼らは商品をはるかに速く、時には注文が行われてから30分以内に届けることができます。",
                            "vocabulary": [
                                { "word": "allow", "meaning": "「許す、可能にする」。" },
                                { "word": "within", "meaning": "「～以内に」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "allow O to do", "explanation": "<b>allow O to do</b>: 「Oが～するのを可能にする」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 11,
                        "text": "There are several positive benefits to drone delivery.",
                        "translation": "ドローン配送にはいくつかの肯定的な利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>several positive benefits to drone delivery</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>いくつかの肯定的な利点が（ドローン配送には）</span>。",
                            "naturalTranslation": "ドローン配送にはいくつかの肯定的な利点があります。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 12,
                        "text": "One major advantage is that it is good for the environment.",
                        "translation": "一つの大きな利点は、それが環境に良いということです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One major advantage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that it is good for the environment</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの大きな利点は</span> <span class='t-V'>です</span> <span class='t-C'>それが環境に良いということ</span>。",
                            "naturalTranslation": "一つの大きな利点は、それが環境に良いということです。",
                            "vocabulary": [
                                { "word": "advantage", "meaning": "「利点」。" },
                                { "word": "environment", "meaning": "「環境」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "that ...", "explanation": "<b>that</b>: 接続詞。that以下が補語になっています。" }
                            ]
                        }
                    },
                    {
                        "id": 13,
                        "text": "Most drones run on electricity, so they produce less carbon dioxide compared to traditional delivery trucks.",
                        "translation": "ほとんどのドローンは電気で動くため、伝統的な配送トラックに比べて二酸化炭素の排出量が少ないです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["run", "produce"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Most drones</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>run on</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>electricity</span><span class='tag'>O</span></span>, so <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>produce</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>less carbon dioxide</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>compared to traditional delivery trucks</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>ほとんどのドローンは</span> <span class='t-V'>動きます</span> <span class='t-O'>電気で</span>、だから <span class='t-S'>それらは</span> <span class='t-V'>生み出します</span> <span class='t-O'>より少ない二酸化炭素を</span> <span class='t-M'>伝統的な配送トラックと比べて</span>。",
                            "naturalTranslation": "ほとんどのドローンは電気で動くため、伝統的な配送トラックに比べて二酸化炭素の排出量が少ないです。",
                            "vocabulary": [
                                { "word": "electricity", "meaning": "「電気」。" },
                                { "word": "carbon dioxide", "meaning": "「二酸化炭素」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "run on", "explanation": "<b>run on</b>: 「（燃料など）で動く」。" }
                            ]
                        }
                    },
                    {
                        "id": 14,
                        "text": "Also, drones are very useful for people living in remote areas, such as on islands or in the mountains.",
                        "translation": "また、ドローンは島や山間部などのへき地に住む人々にとって非常に役に立ちます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>drones</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very useful</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for people living in remote areas, such as on islands or in the mountains</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>ドローンは</span> <span class='t-V'>です</span> <span class='t-C'>とても役に立つ</span> <span class='t-M'>へき地に住む人々にとって（島や山の中のような）</span>。",
                            "naturalTranslation": "また、ドローンは島や山間部などのへき地に住む人々にとって非常に役に立ちます。",
                            "vocabulary": [
                                { "word": "remote", "meaning": "「遠く離れた、へき地の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "living", "explanation": "<b>living</b>: 現在分詞の後置修飾。「住んでいる人々」。" }
                            ]
                        }
                    },
                    {
                        "id": 15,
                        "text": "They can quickly deliver medicine and food to these places where trucks cannot go easily.",
                        "translation": "彼らはトラックが簡単に行けないこれらの場所に、薬や食料を素早く届けることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can deliver"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can quickly deliver</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>medicine and food</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to these places where trucks cannot go easily</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>素早く届けることができます</span> <span class='t-O'>薬や食料を</span> <span class='t-M'>これらの場所へ（そこへはトラックが簡単に行けない）</span>。",
                            "naturalTranslation": "彼らはトラックが簡単に行けないこれらの場所に、薬や食料を素早く届けることができます。",
                            "vocabulary": [
                                { "word": "medicine", "meaning": "「薬」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "where", "explanation": "<b>where</b>: 関係副詞。placesを修飾。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 16,
                        "text": "However, there are challenges to this new technology.",
                        "translation": "しかし、この新しい技術には課題もあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>challenges to this new technology</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-V'>あります</span> <span class='t-S'>課題が（この新しい技術には）</span>。",
                            "naturalTranslation": "しかし、この新しい技術には課題もあります。",
                            "vocabulary": [
                                { "word": "challenge", "meaning": "「課題」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "One concern is safety.",
                        "translation": "一つの懸念は安全性です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One concern</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>safety</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの懸念は</span> <span class='t-V'>です</span> <span class='t-C'>安全性</span>。",
                            "naturalTranslation": "一つの懸念は安全性です。",
                            "vocabulary": [
                                { "word": "concern", "meaning": "「懸念、心配事」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 18,
                        "text": "Drones might crash into buildings or people if there is a technical problem.",
                        "translation": "もし技術的な問題があれば、ドローンは建物や人々に衝突するかもしれません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["might crash"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Drones</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might crash</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>into buildings or people</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>if there is a technical problem</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>ドローンは</span> <span class='t-V'>衝突するかもしれません</span> <span class='t-M'>建物や人々に</span> <span class='t-M'>もし技術的な問題があれば</span>。",
                            "naturalTranslation": "もし技術的な問題があれば、ドローンは建物や人々に衝突するかもしれません。",
                            "vocabulary": [
                                { "word": "crash", "meaning": "「衝突する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 19,
                        "text": "Also, the noise made by the drones could disturb people living in quiet neighborhoods.",
                        "translation": "また、ドローンが出す騒音は、静かな近隣地域に住む人々の迷惑になるかもしれません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["could disturb"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the noise made by the drones</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could disturb</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people living in quiet neighborhoods</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>ドローンによって作られる騒音は</span> <span class='t-V'>邪魔する（迷惑をかける）かもしれません</span> <span class='t-O'>静かな近隣地域に住む人々を</span>。",
                            "naturalTranslation": "また、ドローンが出す騒音は、静かな近隣地域に住む人々の迷惑になるかもしれません。",
                            "vocabulary": [
                                { "word": "disturb", "meaning": "「～を邪魔する、不安にする」。" },
                                { "word": "neighborhood", "meaning": "「近所、地域」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "made by", "explanation": "<b>made</b>: 過去分詞の後置修飾。「～によって作られた（出された）」。" }
                            ]
                        }
                    },
                    {
                        "id": 20,
                        "text": "Moreover, bad weather, like strong winds or heavy rain, can stop drones from flying.",
                        "translation": "さらに、強風や大雨のような悪天候は、ドローンが飛ぶのを妨げる可能性があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can stop"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Moreover</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>bad weather, like strong winds or heavy rain</span><span class='tag'>S</span></span>, <span class='chunk V-group'><span class='text'>can stop</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>drones</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>from flying</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>悪天候は（強風や大雨のような）</span> <span class='t-V'>止める（妨げる）可能性があります</span> <span class='t-O'>ドローンが</span> <span class='t-M'>飛ぶことから</span>。",
                            "naturalTranslation": "さらに、強風や大雨のような悪天候は、ドローンが飛ぶのを妨げる可能性があります。",
                            "vocabulary": [
                                { "word": "Moreover", "meaning": "「さらに」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "stop O from doing", "explanation": "<b>stop O from doing</b>: 「Oが～するのを妨げる」。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "Therefore, companies and governments need to create strict rules to ensure safety before drone delivery becomes common everywhere.",
                        "translation": "したがって、ドローン配送がどこでも一般的になる前に、企業と政府は安全を確保するために厳しいルールを作る必要があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["need"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Therefore</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>companies and governments</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>need to create</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>strict rules</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to ensure safety</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>before drone delivery becomes common everywhere</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>したがって、</span> <span class='t-S'>企業と政府は</span> <span class='t-V'>作る必要があります</span> <span class='t-O'>厳しいルールを</span> <span class='t-M'>安全を確実にするために</span> <span class='t-M'>ドローン配送がどこでも一般的になる前に</span>。",
                            "naturalTranslation": "したがって、ドローン配送がどこでも一般的になる前に、企業と政府は安全を確保するために厳しいルールを作る必要があります。",
                            "vocabulary": [
                                { "word": "strict", "meaning": "「厳しい」。" },
                                { "word": "ensure", "meaning": "「～を確実にする、保証する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "to ensure", "explanation": "<b>to ensure</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about delivery services today?",
                "textTranslation": "今日の配送サービスについて正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "Most people have stopped shopping online to save money.", "translation": "ほとんどの人々は節約のためにオンラインショッピングをやめた。", "isCorrect": false },
                    { "id": 2, "text": "The number of delivery trucks has decreased in big cities.", "translation": "大都市では配送トラックの数が減少している。", "isCorrect": false },
                    { "id": 3, "text": "Delivery trucks are causing problems like traffic and pollution.", "translation": "配送トラックは交通渋滞や汚染のような問題を引き起こしている。", "isCorrect": true, "highlight": "this increase in delivery trucks has caused traffic jams and air pollution" },
                    { "id": 4, "text": "Drones have already replaced all trucks for delivering packages.", "translation": "ドローンは荷物を配送するためにすでに全てのトラックに取って代わった。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、トラックの増加が引き起こしている問題（problems）に注目しましょう。",
                    "targetSentenceId": 3,
                    "highlightWord": "caused",
                    "highlightWordSentenceId": 3
                },
                "keywords": ["delivery trucks", "traffic", "pollution"],
                "keywordExplanations": { "cause": "引き起こす", "pollution": "汚染" },
                "keywordMatches": [
                    { "sentenceId": 3, "text": "has caused traffic jams and air pollution", "keyword": "causing problems like traffic and pollution" }
                ],
                "choiceAdvice": "1: 本文では「生活の当たり前の一部になった」とあります。 2: トラックは増加（increase）しています。 3: 本文の 'caused traffic jams and air pollution' と一致します。 4: ドローンは開発中であり、まだ全て置き換わってはいません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 3): 「However, this increase in delivery trucks has caused traffic jams and air pollution in cities.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 2,
                "text": "How do delivery drones work?",
                "textTranslation": "配送ドローンはどのように機能しますか？",
                "choices": [
                    { "id": 1, "text": "A driver sits inside the drone and controls it manually.", "translation": "運転手がドローンの中に座り、手動で制御する。", "isCorrect": false },
                    { "id": 2, "text": "They fly through the sky to avoid traffic on the roads.", "translation": "それらは道路の渋滞を避けるために空を飛ぶ。", "isCorrect": true, "highlight": "fly through the sky, so they do not get stuck in traffic" },
                    { "id": 3, "text": "They carry packages only to warehouses, not to homes.", "translation": "それらは荷物を倉庫にだけ運び、家庭には運ばない。", "isCorrect": false },
                    { "id": 4, "text": "They require customers to pick up items at the airport.", "translation": "それらは客に空港で商品を受け取るよう要求する。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、ドローンがどこを飛び（fly）、どうなるか（avoid traffic）を確認しましょう。",
                    "targetSentenceId": 9,
                    "highlightWord": "sky",
                    "highlightWordSentenceId": 9
                },
                "keywords": ["fly", "sky", "traffic"],
                "keywordExplanations": { "avoid": "避ける", "manually": "手動で" },
                "keywordMatches": [
                    { "sentenceId": 9, "text": "fly through the sky, so they do not get stuck in traffic", "keyword": "fly through the sky to avoid traffic" }
                ],
                "choiceAdvice": "1: 自動的に（automatically）飛ぶとあります。またドローンは無人です。 2: 本文の 'fly through the sky ... do not get stuck in traffic' と一致します。 3: 倉庫から客の家へ（from a warehouse ... to the customer's house）飛びます。 4: 家に届けられます。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 9): 「Unlike trucks, drones fly through the sky, so they do not get stuck in traffic.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of drone delivery is that",
                "textTranslation": "ドローン配送の肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "it helps people living in remote areas get necessary items.", "translation": "それはへき地に住む人々が必要な物資を手に入れるのを助ける。", "isCorrect": true, "highlight": "useful for people living in remote areas ... deliver medicine and food" },
                    { "id": 2, "text": "it allows customers to travel to islands much faster.", "translation": "それは客が島へずっと速く移動することを可能にする。", "isCorrect": false },
                    { "id": 3, "text": "it encourages people to buy bigger cars for shopping.", "translation": "それは人々に買い物用の大きな車を買うよう促す。", "isCorrect": false },
                    { "id": 4, "text": "it costs more money than using traditional trucks.", "translation": "それは伝統的なトラックを使うよりもお金がかかる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、遠隔地（remote areas）に関する利点を確認しましょう。",
                    "targetSentenceId": 14,
                    "highlightWord": "remote areas",
                    "highlightWordSentenceId": 14
                },
                "keywords": ["remote areas", "necessary items"],
                "keywordExplanations": { "remote": "遠隔の", "necessary": "必要な" },
                "keywordMatches": [
                    { "sentenceId": 14, "text": "useful for people living in remote areas", "keyword": "helps people living in remote areas" },
                    { "sentenceId": 15, "text": "deliver medicine and food", "keyword": "get necessary items" }
                ],
                "choiceAdvice": "1: 本文の 'useful for people living in remote areas ... deliver medicine and food' と一致します。 2: 人が移動するのではなく、荷物を運びます。 3: 車の話ではありません。 4: コストについての比較は書かれていません（環境負荷の比較はあります）。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 14 & 15): 「Also, drones are very useful for people living in remote areas... They can quickly deliver medicine and food...」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges that drone delivery faces?",
                "textTranslation": "ドローン配送が直面している課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "Drones use too much gasoline to fly long distances.", "translation": "ドローンは長距離を飛ぶためにガソリンを使いすぎる。", "isCorrect": false },
                    { "id": 2, "text": "It takes too long for drones to find the customer's house.", "translation": "ドローンが客の家を見つけるのに時間がかかりすぎる。", "isCorrect": false },
                    { "id": 3, "text": "The GPS technology is too expensive for most companies.", "translation": "GPS技術はほとんどの企業にとって高すぎる。", "isCorrect": false },
                    { "id": 4, "text": "Bad weather conditions can prevent drones from flying.", "translation": "悪天候の状態はドローンが飛ぶのを妨げる可能性がある。", "isCorrect": true, "highlight": "bad weather ... can stop drones from flying" }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、天気（weather）に関する課題を確認しましょう。",
                    "targetSentenceId": 20,
                    "highlightWord": "weather",
                    "highlightWordSentenceId": 20
                },
                "keywords": ["challenge", "weather", "prevent"],
                "keywordExplanations": { "prevent": "妨げる（stop ... from と同義）" },
                "keywordMatches": [
                    { "sentenceId": 20, "text": "bad weather ... can stop drones from flying", "keyword": "Bad weather ... prevent drones from flying" }
                ],
                "choiceAdvice": "1: 電気（electricity）で動くと第3段落にあります。 2: GPSを使って自動的に飛び、高速であると第2段落にあります。 3: そのような記述はありません。 4: 本文の 'bad weather ... can stop drones from flying' と一致します。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20): 「Moreover, bad weather, like strong winds or heavy rain, can stop drones from flying.」" },
                    { "type": "conclusion", "content": "正解: 4" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Delivery drones are perfect and have no negative points.", "translation": "配送ドローンは完璧で、否定的な点はない。", "isCorrect": false },
                    { "id": 2, "text": "New rules are necessary to make drone delivery safe and common.", "translation": "ドローン配送を安全かつ一般的なものにするために新しいルールが必要である。", "isCorrect": true, "highlight": "create strict rules to ensure safety" },
                    { "id": 3, "text": "People in quiet neighborhoods are happy about the noise of drones.", "translation": "静かな近隣地域の人々はドローンの騒音を喜んでいる。", "isCorrect": false },
                    { "id": 4, "text": "Traditional delivery trucks will disappear completely next year.", "translation": "伝統的な配送トラックは来年完全に姿を消すだろう。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終文で述べられている、企業や政府がすべきこと（create strict rules）を確認しましょう。",
                    "targetSentenceId": 21,
                    "highlightWord": "rules",
                    "highlightWordSentenceId": 21
                },
                "keywords": ["rules", "safe", "common"],
                "keywordExplanations": { "necessary": "必要な（need to と対応）" },
                "keywordMatches": [
                    { "sentenceId": 21, "text": "need to create strict rules to ensure safety", "keyword": "New rules are necessary to make drone delivery safe" }
                ],
                "choiceAdvice": "1: 安全性や騒音などの課題（challenges）があると書かれています。 2: 最終文の結論と一致します。 3: 迷惑になるかもしれない（disturb）と書かれています。 4: 将来変えることが期待されているとはありますが、来年完全に消えるとは書かれていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 21): 「Therefore, companies and governments need to create strict rules to ensure safety before drone delivery becomes common everywhere.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[Delivery Drones] (オリジナル)</div> 本文は、物流の新しい形として期待される「ドローン配送」についての説明です。",
            "points": [
                { "label": "1. The Problem (第1段落)", "text": "オンラインショッピングの普及で配送トラックが増え、交通渋滞や大気汚染を引き起こしています。その解決策としてドローン配送が開発されています。" },
                { "label": "2. How it works (第2段落)", "text": "ドローンはGPSを使って倉庫から自動で顧客の家まで飛びます。空を飛ぶため渋滞の影響を受けず、注文から30分以内に届けるなど非常に高速です。" },
                { "label": "3. Benefits (第3段落)", "text": "電気で動くためトラックより環境に優しいです。また、トラックが入りにくい山間部や島などの「へき地」へ、薬や食料を届けるのに役立ちます。" },
                { "label": "4. Challenges (第4段落)", "text": "課題は安全性です。墜落事故や騒音の懸念があります。また、強風などの悪天候では飛べません。普及には安全確保のためのルール作りが必要です。" }
            ]
        }
    },
    {
        "id": "2025-9-animal-therapy",
        "grade": "準2級プラス",
        "title": "The Power of Animal Therapy",
        "subTitle": "問題7",
        "genre": "健康 / 社会",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Animal+Therapy",
            "question": "https://placehold.co/600x400?text=Therapy+Dog"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "In today's busy and stressful society, many people are looking for ways to relax and feel better.",
                        "translation": "今日の忙しくストレスの多い社会において、多くの人々はリラックスし、気分を良くする方法を探しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are looking for"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In today's busy and stressful society</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are looking for</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>ways to relax and feel better</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>今日の忙しくストレスの多い社会で、</span> <span class='t-S'>多くの人々は</span> <span class='t-V'>探しています</span> <span class='t-O'>リラックスし気分を良くする方法を</span>。",
                            "naturalTranslation": "今日の忙しくストレスの多い社会において、多くの人々はリラックスし、気分を良くする方法を探しています。",
                            "vocabulary": [
                                { "word": "stressful", "meaning": "「ストレスの多い」。" },
                                { "word": "look for", "meaning": "「～を探す」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "ways to relax", "explanation": "<b>to relax</b>: 不定詞の形容詞的用法。「リラックスするための方法」。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "While medicine is important for curing diseases, there is another method that is gaining attention in hospitals and schools around the world.",
                        "translation": "病気を治すために薬は重要ですが、世界中の病院や学校で注目を集めている別の方法があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is", "is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>While medicine is important for curing diseases</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>another method that is gaining attention in hospitals and schools around the world</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>薬は病気を治すために重要ですが、</span> <span class='t-V'>あります</span> <span class='t-S'>注目を集めている別の方法が（世界中の病院や学校で）</span>。",
                            "naturalTranslation": "病気を治すために薬は重要ですが、世界中の病院や学校で注目を集めている別の方法があります。",
                            "vocabulary": [
                                { "word": "medicine", "meaning": "「薬、医学」。" },
                                { "word": "cure", "meaning": "「（病気）を治す」。" },
                                { "word": "gain attention", "meaning": "「注目を集める」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "While", "explanation": "<b>While</b>: 接頭辞。「～だけれども」（譲歩）。" },
                                { "phrase": "that is...", "explanation": "<b>that</b>: 関係代名詞（主格）。methodを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 3,
                        "text": "It is called animal therapy.",
                        "translation": "それはアニマルセラピーと呼ばれています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is called"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>animal therapy</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>アニマルセラピーと</span>。",
                            "naturalTranslation": "それはアニマルセラピーと呼ばれています。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "is called", "explanation": "<b>is called</b>: 受動態。「～と呼ばれる」。" }
                            ]
                        }
                    },
                    {
                        "id": 4,
                        "text": "This involves spending time with animals to improve human health.",
                        "translation": "これは人間の健康を改善するために動物と時間を過ごすことを伴います。",
                        "grammarAnalysis": {
                            "mainVerbs": ["involves"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>involves</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>spending time with animals</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to improve human health</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>伴います（含みます）</span> <span class='t-O'>動物と時間を過ごすことを</span> <span class='t-M'>人間の健康を改善するために</span>。",
                            "naturalTranslation": "これは人間の健康を改善するために動物と時間を過ごすことを伴います。",
                            "vocabulary": [
                                { "word": "involve", "meaning": "「～を含む、伴う」。" },
                                { "word": "improve", "meaning": "「～を改善する、良くする」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 5,
                        "text": "Research shows that interaction with friendly animals can have a powerful effect on people's minds and bodies.",
                        "translation": "友好的な動物との交流が、人々の心と体に強力な効果をもたらす可能性があることが研究で示されています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["shows"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Research</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>shows</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that interaction with friendly animals can have a powerful effect on people's minds and bodies</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>研究は</span> <span class='t-V'>示しています</span> <span class='t-O'>友好的な動物との交流が強力な効果を持ちうることを（人々の心と体に）</span>。",
                            "naturalTranslation": "友好的な動物との交流が、人々の心と体に強力な効果をもたらす可能性があることが研究で示されています。",
                            "vocabulary": [
                                { "word": "interaction", "meaning": "「交流、相互作用」。" },
                                { "word": "effect", "meaning": "「効果、影響」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "have an effect on", "explanation": "<b>have an effect on</b>: 「～に効果（影響）がある」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 6,
                        "text": "Animal therapy is different from simply keeping a pet at home.",
                        "translation": "アニマルセラピーは、単に家でペットを飼うのとは異なります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Animal therapy</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>different from simply keeping a pet at home</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>アニマルセラピーは</span> <span class='t-V'>です</span> <span class='t-C'>単に家でペットを飼うのとは異なって</span>。",
                            "naturalTranslation": "アニマルセラピーは、単に家でペットを飼うのとは異なります。",
                            "vocabulary": [
                                { "word": "different from", "meaning": "「～と異なる」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 7,
                        "text": "The animals used in this therapy, such as dogs, cats, and even horses, are specially trained.",
                        "translation": "犬や猫、さらには馬など、このセラピーに使われる動物たちは特別に訓練されています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are trained"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The animals used in this therapy, such as dogs, cats, and even horses</span><span class='tag'>S</span></span>, <span class='chunk V-group'><span class='text'>are specially trained</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-S'>このセラピーに使われる動物たちは（犬、猫、さらには馬のような）</span> <span class='t-V'>特別に訓練されています</span>。",
                            "naturalTranslation": "犬や猫、さらには馬など、このセラピーに使われる動物たちは特別に訓練されています。",
                            "vocabulary": [
                                { "word": "specially", "meaning": "「特別に」。" },
                                { "word": "train", "meaning": "「～を訓練する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "used in...", "explanation": "<b>used</b>: 過去分詞の後置修飾。「～で使われる」。" }
                            ]
                        }
                    },
                    {
                        "id": 8,
                        "text": "They visit places like nursing homes, hospitals, and schools with their handlers.",
                        "translation": "彼らはハンドラー（取扱者）と共に、老人ホームや病院、学校のような場所を訪れます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["visit"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>visit</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>places like nursing homes, hospitals, and schools</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>with their handlers</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>訪れます</span> <span class='t-O'>老人ホーム、病院、学校のような場所を</span> <span class='t-M'>彼らのハンドラーと共に</span>。",
                            "naturalTranslation": "彼らはハンドラー（取扱者）と共に、老人ホームや病院、学校のような場所を訪れます。",
                            "vocabulary": [
                                { "word": "nursing home", "meaning": "「老人ホーム、療養所」。" },
                                { "word": "handler", "meaning": "「（動物の）取扱者、調教師」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "These animals are trained to be calm and gentle with everyone.",
                        "translation": "これらの動物は、誰に対しても穏やかで優しくあるように訓練されています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are trained"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>These animals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are trained to be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>calm and gentle with everyone</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>これらの動物は</span> <span class='t-V'>訓練されています（～であるように）</span> <span class='t-C'>穏やかで優しく（誰に対しても）</span>。",
                            "naturalTranslation": "これらの動物は、誰に対しても穏やかで優しくあるように訓練されています。",
                            "vocabulary": [
                                { "word": "calm", "meaning": "「穏やかな、落ち着いた」。" },
                                { "word": "gentle", "meaning": "「優しい」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 10,
                        "text": "They allow people to touch, hug, or play with them.",
                        "translation": "彼らは人々が触れたり、抱きしめたり、一緒に遊んだりすることを許容します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["allow"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allow</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to touch, hug, or play with them</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>許します（させます）</span> <span class='t-O'>人々が</span> <span class='t-C'>触れたり、抱きしめたり、彼らと遊ぶことを</span>。",
                            "naturalTranslation": "彼らは人々が触れたり、抱きしめたり、一緒に遊んだりすることを許容します。",
                            "vocabulary": [
                                { "word": "hug", "meaning": "「抱きしめる」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "allow O to do", "explanation": "<b>allow O to do</b>: 「Oが～するのを許す」。" }
                            ]
                        }
                    },
                    {
                        "id": 11,
                        "text": "For patients who have been in the hospital for a long time, these visits can be the highlight of their day.",
                        "translation": "長い間入院している患者にとって、これらの訪問は彼らの一日のハイライト（最も楽しい時間）になり得ます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can be"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>For patients who have been in the hospital for a long time</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>these visits</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the highlight of their day</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>長い間病院にいる患者にとって、</span> <span class='t-S'>これらの訪問は</span> <span class='t-V'>なり得ます</span> <span class='t-C'>彼らの一日のハイライトに</span>。",
                            "naturalTranslation": "長い間入院している患者にとって、これらの訪問は彼らの一日のハイライト（最も楽しい時間）になり得ます。",
                            "vocabulary": [
                                { "word": "patient", "meaning": "「患者」。" },
                                { "word": "highlight", "meaning": "「見せ場、ハイライト」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "who have been...", "explanation": "<b>who</b>: 関係代名詞。patientsを修飾。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 12,
                        "text": "There are several positive benefits to this type of therapy.",
                        "translation": "この種のセラピーにはいくつかの肯定的な利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>several positive benefits to this type of therapy</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>いくつかの肯定的な利点が（このタイプのセラピーには）</span>。",
                            "naturalTranslation": "この種のセラピーにはいくつかの肯定的な利点があります。",
                            "vocabulary": [
                                { "word": "benefit", "meaning": "「利点」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 13,
                        "text": "First, it helps improve mental health.",
                        "translation": "第一に、それはメンタルヘルスの改善に役立ちます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["helps"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>First</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>improve mental health</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>第一に、</span> <span class='t-S'>それは</span> <span class='t-V'>助けます</span> <span class='t-O'>メンタルヘルスを改善するのを</span>。",
                            "naturalTranslation": "第一に、それはメンタルヘルスの改善に役立ちます。",
                            "vocabulary": [
                                { "word": "mental", "meaning": "「精神の、心の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help (to) do", "explanation": "<b>help do</b>: 「～するのを助ける」（原形不定詞）。" }
                            ]
                        }
                    },
                    {
                        "id": 14,
                        "text": "Playing with animals can reduce feelings of anxiety and loneliness.",
                        "translation": "動物と遊ぶことは、不安や孤独の感情を減らすことができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can reduce"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Playing with animals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can reduce</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>feelings of anxiety and loneliness</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>動物と遊ぶことは</span> <span class='t-V'>減らすことができます</span> <span class='t-O'>不安や孤独の感情を</span>。",
                            "naturalTranslation": "動物と遊ぶことは、不安や孤独の感情を減らすことができます。",
                            "vocabulary": [
                                { "word": "anxiety", "meaning": "「不安、心配」。" },
                                { "word": "loneliness", "meaning": "「孤独（感）」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 15,
                        "text": "It naturally makes people smile and feel happy.",
                        "translation": "それは自然と人々を笑顔にし、幸せな気分にさせます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["makes"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>naturally</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>makes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>smile and feel happy</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-M'>自然と</span> <span class='t-V'>させます</span> <span class='t-O'>人々を</span> <span class='t-C'>笑顔にし、幸せな気分に</span>。",
                            "naturalTranslation": "それは自然と人々を笑顔にし、幸せな気分にさせます。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "make O C", "explanation": "<b>make O C</b>: 「OをCにさせる」（使役動詞）。smileは原形不定詞。" }
                            ]
                        }
                    },
                    {
                        "id": 16,
                        "text": "Second, there are physical benefits.",
                        "translation": "第二に、身体的な利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Second</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>physical benefits</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>第二に、</span> <span class='t-V'>あります</span> <span class='t-S'>身体的な利点が</span>。",
                            "naturalTranslation": "第二に、身体的な利点があります。",
                            "vocabulary": [
                                { "word": "physical", "meaning": "「身体の」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "Studies have shown that touching animals can lower blood pressure and reduce stress.",
                        "translation": "動物に触れることが血圧を下げ、ストレスを減らすことができると研究で示されています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have shown"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Studies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have shown</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that touching animals can lower blood pressure and reduce stress</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>研究は</span> <span class='t-V'>示しています</span> <span class='t-O'>動物に触れることが血圧を下げ、ストレスを減らしうることを</span>。",
                            "naturalTranslation": "動物に触れることが血圧を下げ、ストレスを減らすことができると研究で示されています。",
                            "vocabulary": [
                                { "word": "blood pressure", "meaning": "「血圧」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 18,
                        "text": "In addition, for elderly people or shy children, talking to animals is easier than talking to humans, which can help them open up and communicate better.",
                        "translation": "さらに、高齢者や恥ずかしがり屋の子供たちにとって、動物に話しかけることは人間に話しかけるよりも簡単であり、それは彼らが心を開き、より良くコミュニケーションを取る助けとなります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is", "can help"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In addition</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>for elderly people or shy children</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>talking to animals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>easier than talking to humans</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>which can help them open up and communicate better</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-M'>高齢者や恥ずかしがり屋の子供にとって、</span> <span class='t-S'>動物に話しかけることは</span> <span class='t-V'>簡単です</span> <span class='t-C'>人間に話しかけるよりも</span>、 <span class='t-M'>そしてそれは彼らが心を開き、より良くコミュニケーションを取るのを助けます</span>。",
                            "naturalTranslation": "さらに、高齢者や恥ずかしがり屋の子供たちにとって、動物に話しかけることは人間に話しかけるよりも簡単であり、それは彼らが心を開き、より良くコミュニケーションを取る助けとなります。",
                            "vocabulary": [
                                { "word": "shy", "meaning": "「恥ずかしがり屋の」。" },
                                { "word": "communicate", "meaning": "「意思疎通する、伝える」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": ", which", "explanation": "<b>, which</b>: 関係代名詞の非制限用法。前の文の内容全体を受けています。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 19,
                        "text": "However, there are challenges to consider when using animals for therapy.",
                        "translation": "しかし、セラピーに動物を使う際に考慮すべき課題もあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>challenges to consider</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>when using animals for therapy</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-V'>あります</span> <span class='t-S'>考慮すべき課題が</span> <span class='t-M'>セラピーに動物を使う時に</span>。",
                            "naturalTranslation": "しかし、セラピーに動物を使う際に考慮すべき課題もあります。",
                            "vocabulary": [
                                { "word": "challenge", "meaning": "「課題」。" },
                                { "word": "consider", "meaning": "「考慮する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "when using", "explanation": "<b>when using</b>: 接続詞＋現在分詞（分詞構文）。「～する時」。" }
                            ]
                        }
                    },
                    {
                        "id": 20,
                        "text": "One major concern is the health of the animals themselves.",
                        "translation": "一つの大きな懸念は、動物たち自身の健康です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One major concern</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the health of the animals themselves</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの大きな懸念は</span> <span class='t-V'>です</span> <span class='t-C'>動物たち自身の健康</span>。",
                            "naturalTranslation": "一つの大きな懸念は、動物たち自身の健康です。",
                            "vocabulary": [
                                { "word": "concern", "meaning": "「懸念、心配事」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 21,
                        "text": "Meeting many strangers can be stressful and tiring for them.",
                        "translation": "多くの見知らぬ人に会うことは、彼らにとってストレスになり、疲れることになり得ます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can be"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Meeting many strangers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>stressful and tiring</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for them</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>多くの見知らぬ人に会うことは</span> <span class='t-V'>なり得ます</span> <span class='t-C'>ストレスになり、疲れることに</span> <span class='t-M'>彼らにとって</span>。",
                            "naturalTranslation": "多くの見知らぬ人に会うことは、彼らにとってストレスになり、疲れることになり得ます。",
                            "vocabulary": [
                                { "word": "stranger", "meaning": "「見知らぬ人」。" },
                                { "word": "tiring", "meaning": "「疲れさせる」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 22,
                        "text": "It is necessary to make sure they get enough rest.",
                        "translation": "彼らが十分な休息をとれるように確認することが必要です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>necessary</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to make sure they get enough rest</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>必要な</span> <span class='t-S'>彼らが十分な休息をとることを確実にすることは</span>。",
                            "naturalTranslation": "彼らが十分な休息をとれるように確認することが必要です。",
                            "vocabulary": [
                                { "word": "necessary", "meaning": "「必要な」。" },
                                { "word": "rest", "meaning": "「休息」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "It is ... to do", "explanation": "<b>It is ... to do</b>: 形式主語構文。" },
                                { "phrase": "make sure", "explanation": "<b>make sure</b>: 「～を確かめる、確実にする」。" }
                            ]
                        }
                    },
                    {
                        "id": 23,
                        "text": "Also, some people have allergies to animal fur, or they might be afraid of animals.",
                        "translation": "また、動物の毛にアレルギーを持っていたり、動物を怖がったりする人もいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have", "might be"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>allergies to animal fur</span><span class='tag'>O</span></span>, or <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>afraid of animals</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>ある人々は</span> <span class='t-V'>持っています</span> <span class='t-O'>動物の毛へのアレルギーを</span>、あるいは <span class='t-S'>彼らは</span> <span class='t-V'>です（かもしれません）</span> <span class='t-C'>動物を怖がって</span>。",
                            "naturalTranslation": "また、動物の毛にアレルギーを持っていたり、動物を怖がったりする人もいます。",
                            "vocabulary": [
                                { "word": "allergy", "meaning": "「アレルギー」。" },
                                { "word": "fur", "meaning": "「毛皮、毛」。" },
                                { "word": "afraid", "meaning": "「恐れている」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 24,
                        "text": "Therefore, hospitals and schools must be careful and follow strict rules to ensure that both humans and animals stay safe and healthy.",
                        "translation": "したがって、病院や学校は、人間と動物の両方が安全で健康でいられるように、注意深くあり、厳しいルールに従わなければなりません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["must be", "follow"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Therefore</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>hospitals and schools</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>must be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>careful</span><span class='tag'>C</span></span> and <span class='chunk V-group'><span class='text'>follow</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>strict rules</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to ensure that both humans and animals stay safe and healthy</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>したがって、</span> <span class='t-S'>病院や学校は</span> <span class='t-V'>なければなりません</span> <span class='t-C'>注意深く</span>、そして <span class='t-V'>従わなければなりません</span> <span class='t-O'>厳しいルールに</span> <span class='t-M'>人間と動物の両方が安全で健康でいることを確実にするために</span>。",
                            "naturalTranslation": "したがって、病院や学校は、人間と動物の両方が安全で健康でいられるように、注意深くあり、厳しいルールに従わなければなりません。",
                            "vocabulary": [
                                { "word": "strict", "meaning": "「厳しい」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about animal therapy?",
                "textTranslation": "アニマルセラピーについて正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "It is a new type of medicine that cures all diseases instantly.", "translation": "それは全ての病気を瞬時に治す新しいタイプの薬である。", "isCorrect": false },
                    { "id": 2, "text": "It is becoming popular as a way to improve health through interaction with animals.", "translation": "それは動物との交流を通じて健康を改善する方法として人気になっている。", "isCorrect": true, "highlight": "spending time with animals to improve human health ... gaining attention" },
                    { "id": 3, "text": "It requires patients to live with animals in their own homes.", "translation": "それは患者に自分の家で動物と暮らすことを要求する。", "isCorrect": false },
                    { "id": 4, "text": "It is used only for people who are busy and stressed at work.", "translation": "それは仕事で忙しくストレスを抱えている人だけに使われる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、アニマルセラピーの定義（This involves...）と現状（gaining attention）を確認しましょう。",
                    "targetSentenceId": 4,
                    "highlightWord": "improve human health",
                    "highlightWordSentenceId": 4
                },
                "keywords": ["popular", "improve health", "interaction"],
                "keywordExplanations": { "interaction": "交流", "improve": "改善する" },
                "keywordMatches": [
                    { "sentenceId": 4, "text": "spending time with animals to improve human health", "keyword": "improve health through interaction" },
                    { "sentenceId": 2, "text": "gaining attention", "keyword": "becoming popular" }
                ],
                "choiceAdvice": "1: 薬（medicine）とは違う方法（another method）とあります。また全ての病気を治すわけではありません。 2: 本文の 'gaining attention ... spending time with animals to improve human health' と一致します。 3: ペットを飼うこととは違う（different from simply keeping a pet）とあります。 4: 病院や学校などで使われています。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 2 & 4): 「...gaining attention... This involves spending time with animals to improve human health.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 2,
                "text": "How are therapy animals different from regular pets?",
                "textTranslation": "セラピーアニマルは通常のペットとどう違いますか？",
                "choices": [
                    { "id": 1, "text": "They are specially trained to be calm and visit various facilities.", "translation": "彼らは穏やかであり、様々な施設を訪問するように特別に訓練されている。", "isCorrect": true, "highlight": "specially trained ... visit places like nursing homes" },
                    { "id": 2, "text": "They are usually wild animals that have been caught recently.", "translation": "彼らはたいてい最近捕まえられた野生動物である。", "isCorrect": false },
                    { "id": 3, "text": "They are not allowed to be touched or hugged by patients.", "translation": "彼らは患者に触られたり抱きしめられたりすることを許されていない。", "isCorrect": false },
                    { "id": 4, "text": "They can speak human languages to communicate with doctors.", "translation": "彼らは医者と意思疎通するために人間の言葉を話すことができる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、セラピーアニマルの特徴（specially trained）と行動（visit places）を確認しましょう。",
                    "targetSentenceId": 7,
                    "highlightWord": "specially trained",
                    "highlightWordSentenceId": 7
                },
                "keywords": ["trained", "calm", "visit"],
                "keywordExplanations": { "facility": "施設（本文の places like hospitals 等に対応）" },
                "keywordMatches": [
                    { "sentenceId": 7, "text": "specially trained", "keyword": "specially trained" },
                    { "sentenceId": 9, "text": "trained to be calm", "keyword": "to be calm" }
                ],
                "choiceAdvice": "1: 本文の 'specially trained ... visit places ... calm and gentle' と一致します。 2: 野生動物（wild animals）ではなく、犬や猫などです。 3: 触れることを許容する（allow people to touch）とあります。 4: 話すことはできません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 7, 8 & 9): 「The animals ... are specially trained. They visit places... trained to be calm and gentle...」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of animal therapy is that",
                "textTranslation": "アニマルセラピーの肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "it allows patients to stop taking their medicine immediately.", "translation": "それは患者が薬を飲むのをすぐにやめることを可能にする。", "isCorrect": false },
                    { "id": 2, "text": "it increases the blood pressure of elderly people.", "translation": "それは高齢者の血圧を上げる。", "isCorrect": false },
                    { "id": 3, "text": "it can reduce anxiety and make people feel less lonely.", "translation": "それは不安を減らし、人々の孤独感を和らげることができる。", "isCorrect": true, "highlight": "reduce feelings of anxiety and loneliness" },
                    { "id": 4, "text": "it teaches children how to train wild dogs and cats.", "translation": "それは子供たちに野生の犬や猫の訓練の仕方を教える。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、精神的な利点（mental health）について書かれている部分を確認しましょう。",
                    "targetSentenceId": 14,
                    "highlightWord": "anxiety",
                    "highlightWordSentenceId": 14
                },
                "keywords": ["reduce", "anxiety", "lonely"],
                "keywordExplanations": { "anxiety": "不安", "lonely": "孤独な" },
                "keywordMatches": [
                    { "sentenceId": 14, "text": "reduce feelings of anxiety and loneliness", "keyword": "reduce anxiety and make people feel less lonely" }
                ],
                "choiceAdvice": "1: 薬の代わりになるとは書かれていません。 2: 血圧を下げる（lower blood pressure）とあります。 3: 本文の 'reduce feelings of anxiety and loneliness' と一致します。 4: 訓練方法を教えるものではありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 14): 「Playing with animals can reduce feelings of anxiety and loneliness.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges of animal therapy?",
                "textTranslation": "アニマルセラピーの課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "The animals might eat the patients' food during the visit.", "translation": "動物が訪問中に患者の食事を食べてしまうかもしれない。", "isCorrect": false },
                    { "id": 2, "text": "Most hospitals do not allow animals to enter the building.", "translation": "ほとんどの病院は動物が建物に入ることを許可していない。", "isCorrect": false },
                    { "id": 3, "text": "Animals can get tired and stressed from meeting many people.", "translation": "動物は多くの人々に会うことで疲れやストレスを感じる可能性がある。", "isCorrect": true, "highlight": "Meeting many strangers can be stressful and tiring for them" },
                    { "id": 4, "text": "There are not enough zoos to keep the therapy animals.", "translation": "セラピーアニマルを飼っておく十分な動物園がない。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、動物たちの健康（health of the animals）に関する懸念を確認しましょう。",
                    "targetSentenceId": 21,
                    "highlightWord": "stressful",
                    "highlightWordSentenceId": 21
                },
                "keywords": ["challenge", "tired", "stressed"],
                "keywordExplanations": { "tiring": "疲れさせる（＝tiredになる）" },
                "keywordMatches": [
                    { "sentenceId": 21, "text": "stressful and tiring for them", "keyword": "tired and stressed" }
                ],
                "choiceAdvice": "1: そのような記述はありません。 2: 病院などで注目されている（gaining attention in hospitals）とあります。 3: 本文の 'Meeting many strangers can be stressful and tiring for them' と一致します。 4: 動物園の話はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 21): 「Meeting many strangers can be stressful and tiring for them.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Animal therapy is beneficial, but the animals' well-being must be considered.", "translation": "アニマルセラピーは有益だが、動物の幸福（健康状態）も考慮されなければならない。", "isCorrect": true, "highlight": "health of the animals themselves ... ensure that both humans and animals stay safe" },
                    { "id": 2, "text": "Horses are the most popular therapy animals in schools.", "translation": "馬は学校で最も人気のあるセラピーアニマルである。", "isCorrect": false },
                    { "id": 3, "text": "People with allergies should spend more time with therapy animals.", "translation": "アレルギーを持つ人はセラピーアニマルともっと時間を過ごすべきだ。", "isCorrect": false },
                    { "id": 4, "text": "Doctors believe that animals will replace nurses in the future.", "translation": "医師たちは将来動物が看護師に取って代わると信じている。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "全体を通してのメリットと、最終段落での動物への配慮（health of animals, strict rules）を総合して考えましょう。",
                    "targetSentenceId": 24,
                    "highlightWord": "ensure",
                    "highlightWordSentenceId": 24
                },
                "keywords": ["beneficial", "well-being", "considered"],
                "keywordExplanations": { "well-being": "幸福、健康（health）", "beneficial": "有益な（positive benefits）" },
                "keywordMatches": [
                    { "sentenceId": 20, "text": "health of the animals themselves", "keyword": "animals' well-being" },
                    { "sentenceId": 24, "text": "ensure that both humans and animals stay safe", "keyword": "must be considered" }
                ],
                "choiceAdvice": "1: 利点（Benefits）と課題（Challenges：動物の健康）の両方を踏まえた内容です。 2: 馬も使われるとはありますが、最も人気とは書かれていません。 3: アレルギーは課題の一つとして挙げられており、注意が必要です。 4: そのような記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20 & 24): 「One major concern is the health of the animals themselves. ... hospitals and schools must be careful...」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[The Power of Animal Therapy] (オリジナル)</div> 本文は、医療や教育現場で導入が進む「アニマルセラピー（動物介在療法）」についての説明です。",
            "points": [
                { "label": "1. Introduction (第1段落)", "text": "現代のストレス社会において、病気の治療だけでなく、動物との触れ合いを通じて健康を改善するアニマルセラピーが注目されています。" },
                { "label": "2. How it works (第2段落)", "text": "単なるペット飼育とは異なり、訓練された穏やかな動物たちがハンドラーと共に病院や老人ホームを訪問します。患者にとって、彼らと触れ合う時間は一日の楽しみとなります。" },
                { "label": "3. Benefits (第3段落)", "text": "精神面では不安や孤独感を和らげ、身体面では血圧を下げる効果があります。また、人との会話が苦手な子供や高齢者が心を開くきっかけにもなります。" },
                { "label": "4. Challenges (第4段落)", "text": "課題は動物自身の健康管理です。多くの人と会うことは動物にとってストレスになります。また、アレルギーや動物嫌いの人への配慮も必要であり、厳格なルール作りが求められます。" }
            ]
        }
    },
    {
        "id": "2025-10-forest-bathing",
        "grade": "準2級プラス",
        "title": "Forest Bathing",
        "subTitle": "問題8",
        "genre": "自然 / 健康",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Forest+Bathing",
            "question": "https://placehold.co/600x400?text=Nature+and+Health"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "In modern society, many people live in big cities and spend most of their time indoors.",
                        "translation": "現代社会において、多くの人々は大都市に住み、時間のほとんどを屋内で過ごしています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["live", "spend"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In modern society</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>live</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>in big cities</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>spend</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>most of their time</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>indoors</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>現代社会において、</span> <span class='t-S'>多くの人々は</span> <span class='t-V'>住んでいます</span> <span class='t-M'>大都市に</span>、そして <span class='t-V'>過ごします</span> <span class='t-O'>彼らの時間のほとんどを</span> <span class='t-M'>屋内で</span>。",
                            "naturalTranslation": "現代社会において、多くの人々は大都市に住み、時間のほとんどを屋内で過ごしています。",
                            "vocabulary": [
                                { "word": "society", "meaning": "「社会」。" },
                                { "word": "indoors", "meaning": "「屋内で」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 2,
                        "text": "They look at computer screens or smartphones for hours every day.",
                        "translation": "彼らは毎日何時間もコンピューターの画面やスマートフォンを見ています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["look at"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>look at</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>computer screens or smartphones</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>for hours</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>every day</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>見ます</span> <span class='t-O'>コンピューターの画面やスマホを</span> <span class='t-M'>何時間も</span> <span class='t-M'>毎日</span>。",
                            "naturalTranslation": "彼らは毎日何時間もコンピューターの画面やスマートフォンを見ています。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 3,
                        "text": "This lifestyle often causes stress and makes people feel tired.",
                        "translation": "このライフスタイルはしばしばストレスを引き起こし、人々を疲れさせます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["causes", "makes"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This lifestyle</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>often</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>causes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>stress</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>makes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>feel tired</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>この生活様式は</span> <span class='t-M'>しばしば</span> <span class='t-V'>引き起こします</span> <span class='t-O'>ストレスを</span>、そして <span class='t-V'>させます</span> <span class='t-O'>人々を</span> <span class='t-C'>疲れたと感じるように</span>。",
                            "naturalTranslation": "このライフスタイルはしばしばストレスを引き起こし、人々を疲れさせます。",
                            "vocabulary": [
                                { "word": "lifestyle", "meaning": "「生活様式、ライフスタイル」。" },
                                { "word": "cause", "meaning": "「～を引き起こす」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "makes people feel", "explanation": "<b>make O C</b>: 「OをCにさせる」（使役動詞）。Cには原形不定詞（feel）が来ます。" }
                            ]
                        }
                    },
                    {
                        "id": 4,
                        "text": "To solve this problem, a simple activity is gaining attention around the world.",
                        "translation": "この問題を解決するために、ある単純な活動が世界中で注目を集めています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is gaining"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>To solve this problem</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a simple activity</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is gaining</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>attention</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>around the world</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>この問題を解決するために、</span> <span class='t-S'>ある単純な活動が</span> <span class='t-V'>得ています（集めています）</span> <span class='t-O'>注目を</span> <span class='t-M'>世界中で</span>。",
                            "naturalTranslation": "この問題を解決するために、ある単純な活動が世界中で注目を集めています。",
                            "vocabulary": [
                                { "word": "solve", "meaning": "「～を解決する」。" },
                                { "word": "gain", "meaning": "「～を得る、獲得する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "To solve", "explanation": "<b>To solve</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "text": "It is called \"forest bathing.\"",
                        "translation": "それは「森林浴」と呼ばれています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is called"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>\"forest bathing.\"</span><span class='tag'>C</span></span>",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>「森林浴」と</span>。",
                            "naturalTranslation": "それは「森林浴」と呼ばれています。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 6,
                        "text": "This idea started in Japan in the 1980s, and it involves spending time in nature to improve human health.",
                        "translation": "この考えは1980年代に日本で始まり、人間の健康を改善するために自然の中で過ごすことを伴います。",
                        "grammarAnalysis": {
                            "mainVerbs": ["started", "involves"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This idea</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>started</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>in Japan in the 1980s</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>involves</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>spending time in nature</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to improve human health</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>この考えは</span> <span class='t-V'>始まりました</span> <span class='t-M'>日本で1980年代に</span>、そして <span class='t-S'>それは</span> <span class='t-V'>伴います（含みます）</span> <span class='t-O'>自然の中で時間を過ごすことを</span> <span class='t-M'>人間の健康を改善するために</span>。",
                            "naturalTranslation": "この考えは1980年代に日本で始まり、人間の健康を改善するために自然の中で過ごすことを伴います。",
                            "vocabulary": [
                                { "word": "involve", "meaning": "「～を伴う、含む」。" },
                                { "word": "improve", "meaning": "「～を改善する」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 7,
                        "text": "Forest bathing is different from activities like hiking or mountain climbing.",
                        "translation": "森林浴はハイキングや登山のような活動とは異なります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Forest bathing</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>different from activities like hiking or mountain climbing</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>森林浴は</span> <span class='t-V'>です</span> <span class='t-C'>ハイキングや登山のような活動とは異なって</span>。",
                            "naturalTranslation": "森林浴はハイキングや登山のような活動とは異なります。",
                            "vocabulary": [
                                { "word": "different from", "meaning": "「～と異なる」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 8,
                        "text": "The goal is not to reach the top of a mountain or to do hard exercise.",
                        "translation": "その目的は、山の頂上に到達することや激しい運動をすることではありません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The goal</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is not</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to reach the top of a mountain or to do hard exercise</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>その目的は</span> <span class='t-V'>ありません</span> <span class='t-C'>山の頂上に着くことや激しい運動をすることでは</span>。",
                            "naturalTranslation": "その目的は、山の頂上に到達することや激しい運動をすることではありません。",
                            "vocabulary": [
                                { "word": "reach", "meaning": "「～に到達する」。" },
                                { "word": "exercise", "meaning": "「運動」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "to reach", "explanation": "<b>to reach</b>: 不定詞の名詞的用法（補語）。" }
                            ]
                        }
                    },
                    {
                        "id": 9,
                        "text": "Instead, the main purpose is to relax and connect with nature using the five senses.",
                        "translation": "その代わりに、主な目的はリラックスし、五感を使って自然とつながることです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Instead</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the main purpose</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to relax and connect with nature</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>using the five senses</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>その代わりに、</span> <span class='t-S'>主な目的は</span> <span class='t-V'>です</span> <span class='t-C'>リラックスし自然とつながること</span> <span class='t-M'>五感を使って</span>。",
                            "naturalTranslation": "その代わりに、主な目的はリラックスし、五感を使って自然とつながることです。",
                            "vocabulary": [
                                { "word": "purpose", "meaning": "「目的」。" },
                                { "word": "sense", "meaning": "「感覚」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "using", "explanation": "<b>using</b>: 分詞構文（付帯状況）。「使いながら」。" }
                            ]
                        }
                    },
                    {
                        "id": 10,
                        "text": "People walk slowly through the forest, breathe the fresh air, listen to the sound of birds, and touch the trees.",
                        "translation": "人々は森の中をゆっくりと歩き、新鮮な空気を吸い、鳥のさえずりを聴き、木々に触れます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["walk", "breathe", "listen to", "touch"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>walk</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>slowly through the forest</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>breathe</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the fresh air</span><span class='tag'>O</span></span>, <span class='chunk V-group'><span class='text'>listen to</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the sound of birds</span><span class='tag'>O</span></span>, and <span class='chunk V-group'><span class='text'>touch</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the trees</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>人々は</span> <span class='t-V'>歩き</span> <span class='t-M'>ゆっくりと森を抜けて</span>、 <span class='t-V'>吸い込み</span> <span class='t-O'>新鮮な空気を</span>、 <span class='t-V'>耳を傾け</span> <span class='t-O'>鳥の音に</span>、そして <span class='t-V'>触れます</span> <span class='t-O'>木々に</span>。",
                            "naturalTranslation": "人々は森の中をゆっくりと歩き、新鮮な空気を吸い、鳥のさえずりを聴き、木々に触れます。",
                            "vocabulary": [
                                { "word": "breathe", "meaning": "「呼吸する、吸い込む」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 11,
                        "text": "By doing this, they can forget about their busy lives and feel calm.",
                        "translation": "これを行うことで、彼らは忙しい生活を忘れ、穏やかな気分になることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can forget", "feel"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>By doing this</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can forget about</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their busy lives</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>feel</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>calm</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>これを行うことによって、</span> <span class='t-S'>彼らは</span> <span class='t-V'>忘れることができ</span> <span class='t-O'>忙しい生活について</span>、そして <span class='t-V'>感じることができます</span> <span class='t-C'>穏やかに</span>。",
                            "naturalTranslation": "これを行うことで、彼らは忙しい生活を忘れ、穏やかな気分になることができます。",
                            "vocabulary": [
                                { "word": "calm", "meaning": "「穏やかな、落ち着いた」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 12,
                        "text": "There are several scientific benefits to this activity.",
                        "translation": "この活動にはいくつかの科学的な利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>several scientific benefits to this activity</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>いくつかの科学的な利点が（この活動には）</span>。",
                            "naturalTranslation": "この活動にはいくつかの科学的な利点があります。",
                            "vocabulary": [
                                { "word": "scientific", "meaning": "「科学的な」。" },
                                { "word": "benefit", "meaning": "「利点、恩恵」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 13,
                        "text": "Doctors and researchers have studied the effects of forests on the human body.",
                        "translation": "医師や研究者たちは、森林が人体に与える影響を研究してきました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have studied"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Doctors and researchers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have studied</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the effects of forests on the human body</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>医師や研究者たちは</span> <span class='t-V'>研究してきました</span> <span class='t-O'>森林の影響を（人体への）</span>。",
                            "naturalTranslation": "医師や研究者たちは、森林が人体に与える影響を研究してきました。",
                            "vocabulary": [
                                { "word": "researcher", "meaning": "「研究者」。" },
                                { "word": "effect", "meaning": "「影響、効果」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "have studied", "explanation": "<b>have studied</b>: 現在完了形。" }
                            ]
                        }
                    },
                    {
                        "id": 14,
                        "text": "One study compared people who walked in a city with people who walked in a forest.",
                        "translation": "ある研究では、街を歩いた人々と森を歩いた人々を比較しました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["compared"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One study</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>compared</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people who walked in a city</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>with people who walked in a forest</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>ある研究は</span> <span class='t-V'>比較しました</span> <span class='t-O'>街を歩いた人々を</span> <span class='t-M'>森を歩いた人々と</span>。",
                            "naturalTranslation": "ある研究では、街を歩いた人々と森を歩いた人々を比較しました。",
                            "vocabulary": [
                                { "word": "compare", "meaning": "「～を比較する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "people who walked", "explanation": "<b>who</b>: 関係代名詞。peopleを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 15,
                        "text": "The results showed that the people in the forest had lower blood pressure and less stress.",
                        "translation": "その結果、森にいた人々は血圧がより低く、ストレスも少ないことが示されました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["showed"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The results</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>showed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that the people in the forest had lower blood pressure and less stress</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>その結果は</span> <span class='t-V'>示しました</span> <span class='t-O'>森の人々がより低い血圧とより少ないストレスを持っていたことを</span>。",
                            "naturalTranslation": "その結果、森にいた人々は血圧がより低く、ストレスも少ないことが示されました。",
                            "vocabulary": [
                                { "word": "blood pressure", "meaning": "「血圧」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "showed that ...", "explanation": "<b>that</b>: 接続詞。that以下が目的語。" }
                            ]
                        }
                    },
                    {
                        "id": 16,
                        "text": "In addition, trees release special natural chemicals into the air.",
                        "translation": "さらに、木々は特別な天然化学物質を空気中に放出しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["release"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In addition</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>trees</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>release</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>special natural chemicals</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>into the air</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>木々は</span> <span class='t-V'>放出します</span> <span class='t-O'>特別な天然の化学物質を</span> <span class='t-M'>空気中に</span>。",
                            "naturalTranslation": "さらに、木々は特別な天然化学物質を空気中に放出しています。",
                            "vocabulary": [
                                { "word": "release", "meaning": "「～を放出する」。" },
                                { "word": "chemical", "meaning": "「化学物質」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "Breathing these chemicals can help the human immune system fight against sicknesses like colds.",
                        "translation": "これらの化学物質を吸い込むことは、人間の免疫システムが風邪などの病気と戦うのを助けることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can help"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Breathing these chemicals</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can help</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the human immune system</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>fight against sicknesses like colds</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>これらの化学物質を吸うことは</span> <span class='t-V'>助けることができます</span> <span class='t-O'>人間の免疫システムが</span> <span class='t-C'>風邪のような病気と戦うのを</span>。",
                            "naturalTranslation": "これらの化学物質を吸い込むことは、人間の免疫システムが風邪などの病気と戦うのを助けることができます。",
                            "vocabulary": [
                                { "word": "immune system", "meaning": "「免疫システム」。" },
                                { "word": "fight against", "meaning": "「～と戦う」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help O (to) do", "explanation": "<b>help O do</b>: Oが～するのを助ける（原形不定詞）。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 18,
                        "text": "However, there is a challenge to enjoying forest bathing today.",
                        "translation": "しかし、今日森林浴を楽しむには課題があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>a challenge to enjoying forest bathing today</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-V'>あります</span> <span class='t-S'>今日森林浴を楽しむことへの課題が</span>。",
                            "naturalTranslation": "しかし、今日森林浴を楽しむには課題があります。",
                            "vocabulary": [
                                { "word": "challenge", "meaning": "「課題、難問」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 19,
                        "text": "As cities grow larger, many forests are being cut down to build houses and roads.",
                        "translation": "都市が大きくなるにつれて、家や道路を建てるために多くの森が切り倒されています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["grow", "are being cut down"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>As cities grow larger</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many forests</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are being cut down</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>to build houses and roads</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>都市が大きくなるにつれて、</span> <span class='t-S'>多くの森が</span> <span class='t-V'>切り倒されています</span> <span class='t-M'>家や道路を建てるために</span>。",
                            "naturalTranslation": "都市が大きくなるにつれて、家や道路を建てるために多くの森が切り倒されています。",
                            "vocabulary": [
                                { "word": "cut down", "meaning": "「～を切り倒す」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "are being cut down", "explanation": "<b>are being cut down</b>: 受動態の進行形。「～されている最中である」。" }
                            ]
                        }
                    },
                    {
                        "id": 20,
                        "text": "This means there are fewer places where people can enjoy nature nearby.",
                        "translation": "これは、人々が近くで自然を楽しめる場所が減っていることを意味します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["means"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>means</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>there are fewer places where people can enjoy nature nearby</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>意味します</span> <span class='t-O'>より少ない場所しかないことを（そこでは人々が近くで自然を楽しめる）</span>。",
                            "naturalTranslation": "これは、人々が近くで自然を楽しめる場所が減っていることを意味します。",
                            "vocabulary": [
                                { "word": "nearby", "meaning": "「近くで、近くの」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "places where...", "explanation": "<b>where</b>: 関係副詞。placesを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "It is becoming difficult for city people to find quiet green spaces.",
                        "translation": "都市の人々にとって、静かな緑地を見つけることは難しくなっています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is becoming"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is becoming</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>difficult</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for city people</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>to find quiet green spaces</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>なりつつあります</span> <span class='t-C'>難しく</span> <span class='t-M'>都市の人々にとって</span> <span class='t-S'>静かな緑のスペースを見つけることは</span>。",
                            "naturalTranslation": "都市の人々にとって、静かな緑地を見つけることは難しくなっています。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "It is ... to do", "explanation": "<b>It is ... to do</b>: 形式主語構文。" }
                            ]
                        }
                    },
                    {
                        "id": 22,
                        "text": "Therefore, it is important to protect existing forests and create more parks in cities so that everyone can experience the healing power of nature.",
                        "translation": "したがって、誰もが自然の癒やしの力を体験できるように、既存の森を守り、都市にもっと多くの公園を作ることが重要です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Therefore</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to protect existing forests and create more parks in cities</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>so that everyone can experience the healing power of nature</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>したがって、</span> <span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>重要な</span> <span class='t-S'>既存の森を守り、都市により多くの公園を作ることは</span> <span class='t-M'>誰もが自然の癒やしの力を体験できるように</span>。",
                            "naturalTranslation": "したがって、誰もが自然の癒やしの力を体験できるように、既存の森を守り、都市にもっと多くの公園を作ることが重要です。",
                            "vocabulary": [
                                { "word": "protect", "meaning": "「～を守る、保護する」。" },
                                { "word": "existing", "meaning": "「既存の」。" },
                                { "word": "healing", "meaning": "「癒やしの、治療の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "so that ... can", "explanation": "<b>so that ... can</b>: 「～ができるように」（目的）。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about people in modern society?",
                "textTranslation": "現代社会の人々について正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "They spend most of their time exercising outdoors.", "translation": "彼らは時間のほとんどを屋外で運動して過ごしている。", "isCorrect": false },
                    { "id": 2, "text": "They often feel stressed because of their lifestyle.", "translation": "彼らはライフスタイルのせいでしばしばストレスを感じている。", "isCorrect": true, "highlight": "lifestyle often causes stress" },
                    { "id": 3, "text": "They prefer living in forests rather than in big cities.", "translation": "彼らは大都市よりも森に住むことを好む。", "isCorrect": false },
                    { "id": 4, "text": "They have stopped using smartphones and computers.", "translation": "彼らはスマートフォンやコンピューターを使うのをやめた。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、現代のライフスタイルが人々に何を引き起こしているか（causes）を確認しましょう。",
                    "targetSentenceId": 3,
                    "highlightWord": "stress",
                    "highlightWordSentenceId": 3
                },
                "keywords": ["modern society", "stress", "lifestyle"],
                "keywordExplanations": { "lifestyle": "生活様式", "cause": "引き起こす" },
                "keywordMatches": [
                    { "sentenceId": 3, "text": "This lifestyle often causes stress", "keyword": "feel stressed because of their lifestyle" }
                ],
                "choiceAdvice": "1: 屋内（indoors）で過ごしているとあります。 2: 本文の 'lifestyle often causes stress' と一致します。 3: 大都市に住んでいる（live in big cities）とあります。 4: 毎日何時間も見ている（look at ... for hours）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 3): 「This lifestyle often causes stress and makes people feel tired.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 2,
                "text": "How is forest bathing different from hiking?",
                "textTranslation": "森林浴はハイキングとどう違いますか？",
                "choices": [
                    { "id": 1, "text": "It requires people to walk as fast as possible.", "translation": "それは人々にできるだけ速く歩くことを要求する。", "isCorrect": false },
                    { "id": 2, "text": "It involves climbing to the top of high mountains.", "translation": "それは高い山の頂上まで登ることを伴う。", "isCorrect": false },
                    { "id": 3, "text": "Its main goal is to relax and use the senses.", "translation": "その主な目的はリラックスし、感覚を使うことである。", "isCorrect": true, "highlight": "main purpose is to relax and connect with nature" },
                    { "id": 4, "text": "It is a competition to see who can walk the longest.", "translation": "それは誰が最も長く歩けるかを競う競争である。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、森林浴の主な目的（main purpose）について書かれている部分を確認しましょう。",
                    "targetSentenceId": 9,
                    "highlightWord": "relax",
                    "highlightWordSentenceId": 9
                },
                "keywords": ["different", "goal", "relax"],
                "keywordExplanations": { "purpose": "目的（goalと同義）" },
                "keywordMatches": [
                    { "sentenceId": 9, "text": "main purpose is to relax and connect with nature using the five senses", "keyword": "main goal is to relax and use the senses" }
                ],
                "choiceAdvice": "1: ゆっくり歩く（walk slowly）とあります。 2: 頂上に着くことではない（not to reach the top）とあります。 3: 本文の 'purpose is to relax and connect with nature using the five senses' と一致します。 4: 競争についての記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 8 & 9): 「The goal is not to reach the top... Instead, the main purpose is to relax...」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of forest bathing is that",
                "textTranslation": "森林浴の肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "it helps people lower their blood pressure and stress.", "translation": "それは人々が血圧とストレスを下げるのを助ける。", "isCorrect": true, "highlight": "lower blood pressure and less stress" },
                    { "id": 2, "text": "it teaches people how to cut down trees for wood.", "translation": "それは人々に木材のために木を切り倒す方法を教える。", "isCorrect": false },
                    { "id": 3, "text": "it allows people to use their smartphones in the woods.", "translation": "それは人々が森の中でスマートフォンを使うことを可能にする。", "isCorrect": false },
                    { "id": 4, "text": "it is the best way to train for a sports competition.", "translation": "それはスポーツ大会のトレーニングをする最良の方法である。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、研究結果（results showed）として挙げられている利点を確認しましょう。",
                    "targetSentenceId": 15,
                    "highlightWord": "blood pressure",
                    "highlightWordSentenceId": 15
                },
                "keywords": ["blood pressure", "stress", "benefit"],
                "keywordExplanations": { "lower": "下げる" },
                "keywordMatches": [
                    { "sentenceId": 15, "text": "had lower blood pressure and less stress", "keyword": "lower their blood pressure and stress" }
                ],
                "choiceAdvice": "1: 本文の 'lower blood pressure and less stress' と一致します。 2: 木を切り倒すのは課題（都市化）として挙げられています。 3: スマホから離れて自然とつながることが目的です。 4: 激しい運動ではない（not ... hard exercise）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 15): 「The results showed that the people in the forest had lower blood pressure and less stress.」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges regarding forest bathing?",
                "textTranslation": "森林浴に関する課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "There are too many dangerous animals in the forests.", "translation": "森には危険な動物が多すぎる。", "isCorrect": false },
                    { "id": 2, "text": "Most people do not like the smell of natural chemicals.", "translation": "ほとんどの人は天然化学物質のにおいが好きではない。", "isCorrect": false },
                    { "id": 3, "text": "It is getting harder to find forests near cities.", "translation": "都市の近くで森を見つけるのがより難しくなっている。", "isCorrect": true, "highlight": "fewer places where people can enjoy nature nearby" },
                    { "id": 4, "text": "Doctors do not believe that nature is good for health.", "translation": "医師たちは自然が健康に良いと信じていない。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、都市化によって起きている問題（fewer places...）を確認しましょう。",
                    "targetSentenceId": 20,
                    "highlightWord": "fewer",
                    "highlightWordSentenceId": 20
                },
                "keywords": ["challenge", "find", "near"],
                "keywordExplanations": { "harder": "より難しい（difficultと同義）" },
                "keywordMatches": [
                    { "sentenceId": 20, "text": "fewer places where people can enjoy nature nearby", "keyword": "harder to find forests near cities" }
                ],
                "choiceAdvice": "1: 動物についての記述はありません。 2: においについての記述はありません。 3: 本文の 'fewer places where people can enjoy nature nearby' と一致します。 4: 医師や研究者は効果を研究し、認めています。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20 & 21): 「This means there are fewer places... It is becoming difficult for city people to find quiet green spaces.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Forest bathing is a new sport that started in the US.", "translation": "森林浴はアメリカで始まった新しいスポーツである。", "isCorrect": false },
                    { "id": 2, "text": "Walking in the city is healthier than walking in the forest.", "translation": "街を歩くことは森を歩くことよりも健康的である。", "isCorrect": false },
                    { "id": 3, "text": "Protecting nature is necessary for human health.", "translation": "自然を守ることは人間の健康にとって必要である。", "isCorrect": true, "highlight": "important to protect existing forests ... healing power of nature" },
                    { "id": 4, "text": "People should stop living in cities and move to the forest.", "translation": "人々は都市に住むのをやめて森へ引っ越すべきだ。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終文で述べられている、森を守ること（protect）と健康（healing power）の関係を確認しましょう。",
                    "targetSentenceId": 22,
                    "highlightWord": "important",
                    "highlightWordSentenceId": 22
                },
                "keywords": ["protect", "nature", "health"],
                "keywordExplanations": { "necessary": "必要な（importantと同義的）" },
                "keywordMatches": [
                    { "sentenceId": 22, "text": "important to protect existing forests ... experience the healing power", "keyword": "Protecting nature is necessary for human health" }
                ],
                "choiceAdvice": "1: 日本で始まった（started in Japan）とあります。またスポーツではありません。 2: 逆です。森の方が血圧やストレスが低いという結果が出ています。 3: 最終文の「癒やしの力を体験できるように森を守ることが重要」という内容と一致します。 4: 都市に公園を作るべきとは言っていますが、移住すべきとは言っていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 22): 「Therefore, it is important to protect existing forests ... so that everyone can experience the healing power of nature.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[Forest Bathing] (オリジナル)</div> 本文は、日本発祥で世界的に注目されている健康法「森林浴」についての説明です。",
            "points": [
                { "label": "1. The Problem & Solution (第1段落)", "text": "現代人は屋内で画面を見て過ごす時間が長く、ストレスを抱えています。その解決策として、自然の中で過ごす「森林浴」が注目されています。" },
                { "label": "2. How it works (第2段落)", "text": "登山や激しい運動とは異なり、目的はリラックスすることです。ゆっくり歩き、新鮮な空気を吸い、五感を使って自然を感じることで、心を落ち着かせます。" },
                { "label": "3. Benefits (第3段落)", "text": "科学的な利点も証明されています。都市を歩く場合に比べて血圧やストレスが下がることが研究で示されました。また、木が出す成分は免疫力を高める助けになります。" },
                { "label": "4. Challenges (第4段落)", "text": "課題は、都市化により森が減っていることです。近くに緑地を見つけるのが難しくなっています。自然の癒やしの力を得るためには、森を守り、公園を増やすことが重要です。" }
            ]
        }
    },
    {
        "id": "2025-11-working-from-home",
        "grade": "準2級プラス",
        "title": "Working from Home",
        "subTitle": "問題9",
        "genre": "社会 / テクノロジー",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Working+from+Home",
            "question": "https://placehold.co/600x400?text=Remote+Work"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "For a long time, the image of a \"worker\" was someone who put on a suit, got on a crowded train, and went to an office every morning.",
                        "translation": "長い間、「労働者」のイメージは、毎朝スーツを着て、満員電車に乗り、オフィスに行く人でした。",
                        "grammarAnalysis": {
                            "mainVerbs": ["was"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>For a long time</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the image of a \"worker\"</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>someone who put on a suit, got on a crowded train, and went to an office every morning</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>長い間、</span> <span class='t-S'>「労働者」のイメージは</span> <span class='t-V'>でした</span> <span class='t-C'>人（スーツを着て、満員電車に乗り、毎朝オフィスに行った）</span>。",
                            "naturalTranslation": "長い間、「労働者」のイメージは、毎朝スーツを着て、満員電車に乗り、オフィスに行く人でした。",
                            "vocabulary": [
                                { "word": "crowded", "meaning": "「混雑した、満員の」。" },
                                { "word": "commute", "meaning": "「通勤する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "someone who...", "explanation": "<b>who</b>: 関係代名詞。someoneを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "However, this traditional style of working is changing rapidly.",
                        "translation": "しかし、この伝統的な働き方は急速に変化しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is changing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this traditional style of working</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is changing</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>rapidly</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>この伝統的な働き方は</span> <span class='t-V'>変化しています</span> <span class='t-M'>急速に</span>。",
                            "naturalTranslation": "しかし、この伝統的な働き方は急速に変化しています。",
                            "vocabulary": [
                                { "word": "traditional", "meaning": "「伝統的な」。" },
                                { "word": "rapidly", "meaning": "「急速に」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 3,
                        "text": "Today, more and more companies are allowing their employees to work from home.",
                        "translation": "今日、ますます多くの企業が従業員に自宅で働くことを許可しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are allowing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Today</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>more and more companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are allowing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their employees</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to work from home</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>今日、</span> <span class='t-S'>ますます多くの企業が</span> <span class='t-V'>許可しています</span> <span class='t-O'>彼らの従業員が</span> <span class='t-C'>家から働くことを</span>。",
                            "naturalTranslation": "今日、ますます多くの企業が従業員に自宅で働くことを許可しています。",
                            "vocabulary": [
                                { "word": "allow", "meaning": "「～を許可する」。" },
                                { "word": "employee", "meaning": "「従業員」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "allow O to do", "explanation": "<b>allow O to do</b>: 「Oが～するのを許可する」。" }
                            ]
                        }
                    },
                    {
                        "id": 4,
                        "text": "This style, often called remote work or teleworking, has become a normal part of life for many people around the world.",
                        "translation": "リモートワークやテレワークとしばしば呼ばれるこのスタイルは、世界中の多くの人々にとって生活の当たり前の一部となっています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has become"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This style, often called remote work or teleworking</span><span class='tag'>S</span></span>, <span class='chunk V-group'><span class='text'>has become</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a normal part of life</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for many people around the world</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>このスタイルは（リモートワークやテレワークとしばしば呼ばれる）</span>、 <span class='t-V'>なりました</span> <span class='t-C'>生活の普通の一部に</span> <span class='t-M'>世界中の多くの人々にとって</span>。",
                            "naturalTranslation": "リモートワークやテレワークとしばしば呼ばれるこのスタイルは、世界中の多くの人々にとって生活の当たり前の一部となっています。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "called", "explanation": "<b>called</b>: 過去分詞の後置修飾。「～と呼ばれる」。" },
                                { "phrase": "has become", "explanation": "<b>has become</b>: 現在完了形。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 5,
                        "text": "Technology plays a big role in this change.",
                        "translation": "テクノロジーはこの変化において大きな役割を果たしています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["plays"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Technology</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>plays</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a big role</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>in this change</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>技術は</span> <span class='t-V'>果たします</span> <span class='t-O'>大きな役割を</span> <span class='t-M'>この変化において</span>。",
                            "naturalTranslation": "テクノロジーはこの変化において大きな役割を果たしています。",
                            "vocabulary": [
                                { "word": "role", "meaning": "「役割」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "play a role", "explanation": "<b>play a role</b>: 「役割を果たす」。" }
                            ]
                        }
                    },
                    {
                        "id": 6,
                        "text": "Thanks to high-speed internet and computers, people can do their jobs almost anywhere.",
                        "translation": "高速インターネットとコンピューターのおかげで、人々はほぼどこでも仕事をすることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can do"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Thanks to high-speed internet and computers</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can do</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their jobs</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>almost anywhere</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>高速インターネットとコンピューターのおかげで、</span> <span class='t-S'>人々は</span> <span class='t-V'>することができます</span> <span class='t-O'>彼らの仕事を</span> <span class='t-M'>ほぼどこでも</span>。",
                            "naturalTranslation": "高速インターネットとコンピューターのおかげで、人々はほぼどこでも仕事をすることができます。",
                            "vocabulary": [
                                { "word": "Thanks to", "meaning": "「～のおかげで」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 7,
                        "text": "Instead of meeting in a conference room, workers use video calls to talk with their team members.",
                        "translation": "会議室で会う代わりに、労働者はチームメンバーと話すためにビデオ通話を使用します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["use"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Instead of meeting in a conference room</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>workers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>video calls</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to talk with their team members</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>会議室で会う代わりに、</span> <span class='t-S'>労働者は</span> <span class='t-V'>使います</span> <span class='t-O'>ビデオ通話を</span> <span class='t-M'>彼らのチームメンバーと話すために</span>。",
                            "naturalTranslation": "会議室で会う代わりに、労働者はチームメンバーと話すためにビデオ通話を使用します。",
                            "vocabulary": [
                                { "word": "Instead of", "meaning": "「～の代わりに」。" },
                                { "word": "conference", "meaning": "「会議」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 8,
                        "text": "They send messages and share files instantly through the internet.",
                        "translation": "彼らはインターネットを通じて瞬時にメッセージを送り、ファイルを共有します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["send", "share"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>send</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>messages</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>share</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>files</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>instantly through the internet</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>送ります</span> <span class='t-O'>メッセージを</span>、そして <span class='t-V'>共有します</span> <span class='t-O'>ファイルを</span> <span class='t-M'>瞬時にインターネットを通して</span>。",
                            "naturalTranslation": "彼らはインターネットを通じて瞬時にメッセージを送り、ファイルを共有します。",
                            "vocabulary": [
                                { "word": "instantly", "meaning": "「瞬時に、即座に」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "This means that as long as they have a computer and a connection, they do not need to be in the same physical place to work together.",
                        "translation": "これは、コンピューターと接続環境さえあれば、一緒に働くために同じ物理的な場所にいる必要がないことを意味します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["means", "do not need"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>means</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that as long as they have a computer and a connection, they do not need to be in the same physical place to work together</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>意味します</span> <span class='t-O'>（彼らがコンピューターと接続を持っている限り、彼らは同じ物理的な場所にいる必要がないことを、一緒に働くために）</span>。",
                            "naturalTranslation": "これは、コンピューターと接続環境さえあれば、一緒に働くために同じ物理的な場所にいる必要がないことを意味します。",
                            "vocabulary": [
                                { "word": "physical", "meaning": "「物理的な」。" },
                                { "word": "connection", "meaning": "「接続（インターネット接続）」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "as long as", "explanation": "<b>as long as</b>: 「～する限り」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 10,
                        "text": "There are several positive benefits to working from home.",
                        "translation": "在宅勤務にはいくつかの肯定的な利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>several positive benefits to working from home</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>いくつかの肯定的な利点が（在宅勤務には）</span>。",
                            "naturalTranslation": "在宅勤務にはいくつかの肯定的な利点があります。",
                            "vocabulary": [
                                { "word": "benefit", "meaning": "「利点」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 11,
                        "text": "One of the biggest advantages is that people do not need to commute.",
                        "translation": "最大の利点の一つは、人々が通勤する必要がないことです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One of the biggest advantages</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that people do not need to commute</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>最大の利点の一つは</span> <span class='t-V'>です</span> <span class='t-C'>人々が通勤する必要がないこと</span>。",
                            "naturalTranslation": "最大の利点の一つは、人々が通勤する必要がないことです。",
                            "vocabulary": [
                                { "word": "advantage", "meaning": "「利点」。" },
                                { "word": "commute", "meaning": "「通勤する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 12,
                        "text": "Commuting often takes a lot of time and causes stress.",
                        "translation": "通勤はしばしば多くの時間を要し、ストレスを引き起こします。",
                        "grammarAnalysis": {
                            "mainVerbs": ["takes", "causes"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Commuting</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>often</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>takes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a lot of time</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>causes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>stress</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>通勤は</span> <span class='t-M'>しばしば</span> <span class='t-V'>取ります（かかります）</span> <span class='t-O'>多くの時間を</span>、そして <span class='t-V'>引き起こします</span> <span class='t-O'>ストレスを</span>。",
                            "naturalTranslation": "通勤はしばしば多くの時間を要し、ストレスを引き起こします。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 13,
                        "text": "By cutting this time, workers can sleep longer or spend more time with their families.",
                        "translation": "この時間を削減することで、労働者はより長く眠ったり、家族とより多くの時間を過ごしたりできます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can sleep", "spend"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>By cutting this time</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>workers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can sleep</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>longer</span><span class='tag'>M</span></span> or <span class='chunk V-group'><span class='text'>spend</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>more time</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>with their families</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>この時間を削減することによって、</span> <span class='t-S'>労働者は</span> <span class='t-V'>眠ることができます</span> <span class='t-M'>より長く</span>、あるいは <span class='t-V'>過ごすことができます</span> <span class='t-O'>より多くの時間を</span> <span class='t-M'>彼らの家族と</span>。",
                            "naturalTranslation": "この時間を削減することで、労働者はより長く眠ったり、家族とより多くの時間を過ごしたりできます。",
                            "vocabulary": [
                                { "word": "cut", "meaning": "「削減する、切る」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 14,
                        "text": "Also, it is good for the environment.",
                        "translation": "また、それは環境にとっても良いことです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>good for the environment</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>環境に良い</span>。",
                            "naturalTranslation": "また、それは環境にとっても良いことです。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 15,
                        "text": "Since fewer people drive cars or take buses to work, the amount of carbon dioxide in the air decreases.",
                        "translation": "車を運転したりバスに乗って仕事に行く人が減るため、空気中の二酸化炭素の量が減少します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["drive", "take", "decreases"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Since fewer people drive cars or take buses to work</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the amount of carbon dioxide in the air</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>decreases</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>仕事へ車を運転したりバスに乗る人がより少ないので、</span> <span class='t-S'>空気中の二酸化炭素の量は</span> <span class='t-V'>減少します</span>。",
                            "naturalTranslation": "車を運転したりバスに乗って仕事に行く人が減るため、空気中の二酸化炭素の量が減少します。",
                            "vocabulary": [
                                { "word": "carbon dioxide", "meaning": "「二酸化炭素」。" },
                                { "word": "decrease", "meaning": "「減少する」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 16,
                        "text": "However, there are challenges to this new working style.",
                        "translation": "しかし、この新しい働き方には課題もあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>challenges to this new working style</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-V'>あります</span> <span class='t-S'>課題が（この新しい働き方には）</span>。",
                            "naturalTranslation": "しかし、この新しい働き方には課題もあります。",
                            "vocabulary": [
                                { "word": "challenge", "meaning": "「課題、難問」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "One problem is communication.",
                        "translation": "一つの問題はコミュニケーションです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One problem</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>communication</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの問題は</span> <span class='t-V'>です</span> <span class='t-C'>コミュニケーション</span>。",
                            "naturalTranslation": "一つの問題はコミュニケーションです。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 18,
                        "text": "It is sometimes difficult to understand how other people feel through a screen.",
                        "translation": "画面越しに他人がどう感じているかを理解するのは時に困難です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>sometimes</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>difficult</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to understand how other people feel through a screen</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-M'>時々</span> <span class='t-C'>難しい</span> <span class='t-S'>理解することは（画面を通して他の人がどう感じているかを）</span>。",
                            "naturalTranslation": "画面越しに他人がどう感じているかを理解するのは時に困難です。",
                            "vocabulary": [
                                { "word": "screen", "meaning": "「画面、スクリーン」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "It is ... to do", "explanation": "<b>It is ... to do</b>: 形式主語構文。" },
                                { "phrase": "how ... feel", "explanation": "<b>how ... feel</b>: 間接疑問文。" }
                            ]
                        }
                    },
                    {
                        "id": 19,
                        "text": "This can lead to misunderstandings.",
                        "translation": "これは誤解につながる可能性があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can lead"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can lead</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>to misunderstandings</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>つながる可能性があります</span> <span class='t-M'>誤解に</span>。",
                            "naturalTranslation": "これは誤解につながる可能性があります。",
                            "vocabulary": [
                                { "word": "lead to", "meaning": "「～につながる、～を引き起こす」。" },
                                { "word": "misunderstanding", "meaning": "「誤解」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 20,
                        "text": "Also, some people find it hard to separate their work time from their private time.",
                        "translation": "また、仕事の時間とプライベートの時間を分けるのが難しいと感じる人もいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["find"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>find</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>hard</span><span class='tag'>C</span></span> <span class='chunk O-group'><span class='text'>to separate their work time from their private time</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>ある人々は</span> <span class='t-V'>わかります（感じます）</span> <span class='t-O'>それを</span> <span class='t-C'>難しいと</span> <span class='t-O'>彼らの仕事時間とプライベートの時間を分けることが</span>。",
                            "naturalTranslation": "また、仕事の時間とプライベートの時間を分けるのが難しいと感じる人もいます。",
                            "vocabulary": [
                                { "word": "separate", "meaning": "「～を分ける」。" },
                                { "word": "private", "meaning": "「私的な、プライベートの」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "find it C to do", "explanation": "<b>find it C to do</b>: 形式目的語構文。「～することがCだとわかる／思う」。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "They might end up working late into the night because their office is in their living room.",
                        "translation": "オフィスが居間にあるため、結局夜遅くまで働いてしまうことになるかもしれません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["end up working"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might end up working</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>late into the night</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>because their office is in their living room</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>結局働くことになるかもしれません</span> <span class='t-M'>夜遅くまで</span> <span class='t-M'>彼らのオフィスが居間にあるので</span>。",
                            "naturalTranslation": "オフィスが居間にあるため、結局夜遅くまで働いてしまうことになるかもしれません。",
                            "vocabulary": [
                                { "word": "end up doing", "meaning": "「結局～することになる」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 22,
                        "text": "Companies need to find ways to support their workers' mental health to make remote work successful.",
                        "translation": "リモートワークを成功させるために、企業は労働者のメンタルヘルスをサポートする方法を見つける必要があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["need"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>need to find</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>ways to support their workers' mental health</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to make remote work successful</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>企業は</span> <span class='t-V'>見つける必要があります</span> <span class='t-O'>彼らの労働者のメンタルヘルスをサポートする方法を</span> <span class='t-M'>リモートワークを成功させるために</span>。",
                            "naturalTranslation": "リモートワークを成功させるために、企業は労働者のメンタルヘルスをサポートする方法を見つける必要があります。",
                            "vocabulary": [
                                { "word": "support", "meaning": "「～を支える、サポートする」。" },
                                { "word": "successful", "meaning": "「成功した」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "to make", "explanation": "<b>to make</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about working styles today?",
                "textTranslation": "今日の働き方について正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "Most companies require employees to wear suits at home.", "translation": "ほとんどの企業は従業員に家でスーツを着るよう要求している。", "isCorrect": false },
                    { "id": 2, "text": "The number of people working from home is increasing.", "translation": "自宅で働く人々の数が増えている。", "isCorrect": true, "highlight": "more and more companies are allowing their employees to work from home" },
                    { "id": 3, "text": "Taking a crowded train is the only way to go to work.", "translation": "満員電車に乗ることは仕事に行く唯一の方法である。", "isCorrect": false },
                    { "id": 4, "text": "Traditional office work has completely disappeared.", "translation": "伝統的なオフィスワークは完全に消滅した。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、現在の企業の対応（more and more companies...）を確認しましょう。",
                    "targetSentenceId": 3,
                    "highlightWord": "increasing",
                    "highlightWordSentenceId": 3
                },
                "keywords": ["working styles", "increasing", "home"],
                "keywordExplanations": { "require": "要求する", "disappear": "消える" },
                "keywordMatches": [
                    { "sentenceId": 3, "text": "more and more companies are allowing their employees to work from home", "keyword": "number of people working from home is increasing" }
                ],
                "choiceAdvice": "1: スーツを着るのは昔のイメージ（traditional style）です。 2: 本文の 'more and more companies are allowing...' と一致します。 3: 以前のスタイルであり、今は変わっています。 4: 変化している（changing rapidly）とはありますが、完全に消えたとは書かれていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 3): 「Today, more and more companies are allowing their employees to work from home.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 2,
                "text": "What makes it possible for people to work from anywhere?",
                "textTranslation": "人々がどこからでも働けることを可能にしているものは何ですか？",
                "choices": [
                    { "id": 1, "text": "The low cost of renting large conference rooms.", "translation": "大きな会議室を借りるコストの低さ。", "isCorrect": false },
                    { "id": 2, "text": "The ability to meet team members in physical places.", "translation": "物理的な場所でチームメンバーに会う能力。", "isCorrect": false },
                    { "id": 3, "text": "The use of high-speed internet and computers.", "translation": "高速インターネットとコンピューターの使用。", "isCorrect": true, "highlight": "Thanks to high-speed internet and computers" },
                    { "id": 4, "text": "The increase in the number of buses and trains.", "translation": "バスと電車の数の増加。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、何のおかげで（Thanks to...）仕事ができるようになったかを確認しましょう。",
                    "targetSentenceId": 6,
                    "highlightWord": "high-speed internet",
                    "highlightWordSentenceId": 6
                },
                "keywords": ["possible", "anywhere", "internet"],
                "keywordExplanations": { "make possible": "可能にする（本文の allow や can do と対応）" },
                "keywordMatches": [
                    { "sentenceId": 6, "text": "Thanks to high-speed internet and computers", "keyword": "The use of high-speed internet and computers" }
                ],
                "choiceAdvice": "1: 会議室を使わずにビデオ通話を使うとあります。 2: 物理的な場所にいる必要がない（do not need to be in the same physical place）とあります。 3: 本文の 'Thanks to high-speed internet and computers' と一致します。 4: 交通機関の話ではありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 6): 「Thanks to high-speed internet and computers, people can do their jobs almost anywhere.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of working from home is that",
                "textTranslation": "在宅勤務の肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "it allows workers to save time and reduce stress.", "translation": "それは労働者が時間を節約し、ストレスを減らすことを可能にする。", "isCorrect": true, "highlight": "cutting this time ... sleep longer ... causes stress" },
                    { "id": 2, "text": "it encourages people to drive their cars more often.", "translation": "それは人々にもっと頻繁に車を運転するよう促す。", "isCorrect": false },
                    { "id": 3, "text": "it helps people meet their friends in the office.", "translation": "それは人々がオフィスで友人に会うのを助ける。", "isCorrect": false },
                    { "id": 4, "text": "it forces workers to sleep less than before.", "translation": "それは労働者に以前より睡眠時間を減らすよう強いる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、通勤時間をなくすこと（cutting this time）のメリットを確認しましょう。",
                    "targetSentenceId": 13,
                    "highlightWord": "sleep longer",
                    "highlightWordSentenceId": 13
                },
                "keywords": ["save time", "reduce stress", "benefit"],
                "keywordExplanations": { "reduce": "減らす（lessen）", "save time": "時間を節約する（cutting time）" },
                "keywordMatches": [
                    { "sentenceId": 12, "text": "Commuting often takes a lot of time and causes stress", "keyword": "save time and reduce stress" },
                    { "sentenceId": 13, "text": "cutting this time", "keyword": "save time" }
                ],
                "choiceAdvice": "1: 本文の 'cutting this time'（＝save time）と 'causes stress' の解消（＝reduce stress）と一致します。 2: 車の運転は減る（fewer people drive）とあります。 3: オフィスに行かないスタイルです。 4: 長く眠れる（sleep longer）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 12 & 13): 「Commuting often takes a lot of time and causes stress. By cutting this time, workers can sleep longer...」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges of remote work?",
                "textTranslation": "リモートワークの課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "Computers are too heavy to carry around the house.", "translation": "コンピューターは家の中で持ち歩くには重すぎる。", "isCorrect": false },
                    { "id": 2, "text": "It is difficult to separate work life from private life.", "translation": "仕事生活と私生活を分けることが難しい。", "isCorrect": true, "highlight": "hard to separate their work time from their private time" },
                    { "id": 3, "text": "Most people do not have a living room in their house.", "translation": "ほとんどの人は家に居間を持っていない。", "isCorrect": false },
                    { "id": 4, "text": "It costs too much money to make a video call.", "translation": "ビデオ通話をするのにお金がかかりすぎる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、時間の区切り（separate）に関する課題を確認しましょう。",
                    "targetSentenceId": 20,
                    "highlightWord": "separate",
                    "highlightWordSentenceId": 20
                },
                "keywords": ["challenge", "separate", "private"],
                "keywordExplanations": { "hard": "難しい（difficult）" },
                "keywordMatches": [
                    { "sentenceId": 20, "text": "hard to separate their work time from their private time", "keyword": "difficult to separate work life from private life" }
                ],
                "choiceAdvice": "1: 重さについての記述はありません。 2: 本文の 'hard to separate their work time from their private time' と一致します。 3: 居間にオフィスがある（office is in their living room）という記述はありますが、持っていないとは書かれていません。 4: コストについての記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20): 「Also, some people find it hard to separate their work time from their private time.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Working from home is perfect and has no disadvantages.", "translation": "在宅勤務は完璧で、欠点はない。", "isCorrect": false },
                    { "id": 2, "text": "Technology has made face-to-face meetings impossible.", "translation": "テクノロジーは対面の会議を不可能にした。", "isCorrect": false },
                    { "id": 3, "text": "Remote work benefits the environment but has communication issues.", "translation": "リモートワークは環境に利益をもたらすが、コミュニケーションの問題も抱えている。", "isCorrect": true, "highlight": "good for the environment ... One problem is communication" },
                    { "id": 4, "text": "Companies should stop supporting their workers' mental health.", "translation": "企業は労働者のメンタルヘルスをサポートするのをやめるべきだ。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の環境への利点と、第4段落のコミュニケーションの課題を両方含んでいる選択肢を探しましょう。",
                    "targetSentenceId": 14,
                    "highlightWord": "environment",
                    "highlightWordSentenceId": 14
                },
                "keywords": ["environment", "communication", "benefit"],
                "keywordExplanations": { "issue": "問題（problem）" },
                "keywordMatches": [
                    { "sentenceId": 14, "text": "good for the environment", "keyword": "benefits the environment" },
                    { "sentenceId": 17, "text": "One problem is communication", "keyword": "has communication issues" }
                ],
                "choiceAdvice": "1: 課題（challenges）があると書かれています。 2: 不可能にしたのではなく、必要なくした（do not need to be in the same physical place）だけです。 3: 環境へのメリット（Benefits）とコミュニケーションの課題（Challenges）の両方を要約しています。 4: サポートする必要がある（need to find ways to support）と書かれています。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 14 & 17): 「Also, it is good for the environment. ... One problem is communication.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[Working from Home] (オリジナル)</div> 本文は、近年定着した「リモートワーク（在宅勤務）」のメリットと課題についての説明です。",
            "points": [
                { "label": "1. The Shift (第1段落)", "text": "かつてはスーツを着て満員電車で通勤するのが当たり前でしたが、今は多くの企業が在宅勤務を認めています。" },
                { "label": "2. Role of Technology (第2段落)", "text": "高速インターネットやビデオ通話のおかげで、どこにいても仕事ができるようになりました。物理的に同じ場所にいる必要はありません。" },
                { "label": "3. Benefits (第3段落)", "text": "最大の利点は「通勤がないこと」です。これにより時間が節約でき、ストレスが減り、睡眠や家族の時間が増えます。また、車の利用が減るため環境にも良いです。" },
                { "label": "4. Challenges (第4段落)", "text": "課題はコミュニケーションと「公私の区別」です。画面越しでは感情が伝わりにくいことや、自宅が職場になることで仕事とプライベートの境界が曖昧になり、働きすぎてしまう問題があります。" }
            ]
        }
    },
    {
        "id": "2025-12-reducing-food-waste",
        "grade": "準2級プラス",
        "title": "Reducing Food Waste",
        "subTitle": "問題10",
        "genre": "環境 / 日常生活",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Food+Waste",
            "question": "https://placehold.co/600x400?text=Sustainable+Food"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "In many countries, supermarkets are full of delicious food.",
                        "translation": "多くの国で、スーパーマーケットはおいしい食べ物で溢れています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In many countries</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>supermarkets</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>full of delicious food</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>多くの国で、</span> <span class='t-S'>スーパーマーケットは</span> <span class='t-V'>です</span> <span class='t-C'>おいしい食べ物でいっぱいの</span>。",
                            "naturalTranslation": "多くの国で、スーパーマーケットはおいしい食べ物で溢れています。",
                            "vocabulary": [
                                { "word": "delicious", "meaning": "「おいしい」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "be full of", "explanation": "<b>be full of</b>: 「～でいっぱいである」。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "People can buy fresh vegetables, fruits, and meat anytime they want.",
                        "translation": "人々はいつでも好きな時に新鮮な野菜、果物、肉を買うことができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can buy"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can buy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>fresh vegetables, fruits, and meat</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>anytime they want</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>人々は</span> <span class='t-V'>買うことができます</span> <span class='t-O'>新鮮な野菜、果物、そして肉を</span> <span class='t-M'>彼らが欲しい時はいつでも</span>。",
                            "naturalTranslation": "人々はいつでも好きな時に新鮮な野菜、果物、肉を買うことができます。",
                            "vocabulary": [
                                { "word": "fresh", "meaning": "「新鮮な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 3,
                        "text": "However, behind this convenience, there is a huge problem.",
                        "translation": "しかし、この便利さの裏には、巨大な問題があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>behind this convenience</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>a huge problem</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-M'>この便利さの裏に、</span> <span class='t-V'>あります</span> <span class='t-S'>巨大な問題が</span>。",
                            "naturalTranslation": "しかし、この便利さの裏には、巨大な問題があります。",
                            "vocabulary": [
                                { "word": "convenience", "meaning": "「便利さ」。" },
                                { "word": "huge", "meaning": "「巨大な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 4,
                        "text": "Every year, about one-third of the food produced in the world is thrown away.",
                        "translation": "毎年、世界で生産される食料の約3分の1が捨てられています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is thrown away"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Every year</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>about one-third of the food produced in the world</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is thrown away</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>毎年、</span> <span class='t-S'>世界で生産される食料の約3分の1は</span> <span class='t-V'>捨てられています</span>。",
                            "naturalTranslation": "毎年、世界で生産される食料の約3分の1が捨てられています。",
                            "vocabulary": [
                                { "word": "one-third", "meaning": "「3分の1」。" },
                                { "word": "throw away", "meaning": "「捨てる」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "produced", "explanation": "<b>produced</b>: 過去分詞の後置修飾。「生産された」。" },
                                { "phrase": "is thrown away", "explanation": "<b>is thrown away</b>: 受動態。「捨てられる」。" }
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "text": "This is known as \"food waste.\"",
                        "translation": "これは「食品ロス」として知られています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is known"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is known</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>as \"food waste.\"</span><span class='tag'>C</span></span>",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>知られています</span> <span class='t-C'>「食品ロス」として</span>。",
                            "naturalTranslation": "これは「食品ロス」として知られています。",
                            "vocabulary": [
                                { "word": "waste", "meaning": "「浪費、廃棄物」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "is known as", "explanation": "<b>is known as</b>: 「～として知られている」。" }
                            ]
                        }
                    },
                    {
                        "id": 6,
                        "text": "While many people in the world do not have enough to eat, massive amounts of edible food are going into the trash bin daily.",
                        "translation": "世界には食べるものが十分でない人々がたくさんいる一方で、大量の「食べられる食料」が毎日ゴミ箱行きになっています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["do not have", "are going"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>While many people in the world do not have enough to eat</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>massive amounts of edible food</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are going</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>into the trash bin</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>daily</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>世界中の多くの人々が食べるのに十分なものを持っていない一方で、</span> <span class='t-S'>大量の食べられる食料が</span> <span class='t-V'>行っています（捨てられています）</span> <span class='t-M'>ゴミ箱の中に</span> <span class='t-M'>毎日</span>。",
                            "naturalTranslation": "世界には食べるものが十分でない人々がたくさんいる一方で、大量の「食べられる食料」が毎日ゴミ箱行きになっています。",
                            "vocabulary": [
                                { "word": "massive", "meaning": "「巨大な、大量の」。" },
                                { "word": "edible", "meaning": "「食べられる、食用の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "While", "explanation": "<b>While</b>: 接頭辞。「～だけれども、一方で」（対比）。" },
                                { "phrase": "enough to eat", "explanation": "<b>enough to do</b>: 「～するのに十分な」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 7,
                        "text": "There are several reasons why this happens.",
                        "translation": "これが起こる理由はいくつかあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>several reasons why this happens</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>これが起こるいくつかの理由が</span>。",
                            "naturalTranslation": "これが起こる理由はいくつかあります。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "reasons why", "explanation": "<b>why</b>: 関係副詞。" }
                            ]
                        }
                    },
                    {
                        "id": 8,
                        "text": "One major reason is the appearance of the food.",
                        "translation": "一つの大きな理由は、食べ物の「見た目」です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One major reason</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the appearance of the food</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの主要な理由は</span> <span class='t-V'>です</span> <span class='t-C'>食べ物の外見（見た目）</span>。",
                            "naturalTranslation": "一つの大きな理由は、食べ物の「見た目」です。",
                            "vocabulary": [
                                { "word": "appearance", "meaning": "「外見、見た目」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "Supermarkets want to sell products that look perfect.",
                        "translation": "スーパーマーケットは完璧に見える商品を売りたがります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["want to sell"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Supermarkets</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>want to sell</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>products that look perfect</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>スーパーマーケットは</span> <span class='t-V'>売りたがります</span> <span class='t-O'>完璧に見える商品を</span>。",
                            "naturalTranslation": "スーパーマーケットは完璧に見える商品を売りたがります。",
                            "vocabulary": [
                                { "word": "perfect", "meaning": "「完璧な」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "products that...", "explanation": "<b>that</b>: 関係代名詞（主格）。productsを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 10,
                        "text": "Therefore, vegetables and fruits that have strange shapes or small scratches are often rejected.",
                        "translation": "そのため、奇妙な形をしていたり小さな傷があったりする野菜や果物は、しばしば拒絶（廃棄）されます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are rejected"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Therefore</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>vegetables and fruits that have strange shapes or small scratches</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are often rejected</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>それゆえに、</span> <span class='t-S'>奇妙な形や小さな傷がある野菜や果物は</span> <span class='t-V'>しばしば拒絶されます</span>。",
                            "naturalTranslation": "そのため、奇妙な形をしていたり小さな傷があったりする野菜や果物は、しばしば拒絶（廃棄）されます。",
                            "vocabulary": [
                                { "word": "strange", "meaning": "「奇妙な、変な」。" },
                                { "word": "scratch", "meaning": "「ひっかき傷」。" },
                                { "word": "reject", "meaning": "「拒絶する、不合格にする」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 11,
                        "text": "Even though they taste the same as the perfect ones, they are thrown away before they reach the stores.",
                        "translation": "それらは完璧なものと同じ味がするにも関わらず、店に届く前に捨てられてしまいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["taste", "are thrown away"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Even though they taste the same as the perfect ones</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are thrown away</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>before they reach the stores</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>たとえそれらが完璧なものと同じ味がするとしても、</span> <span class='t-S'>それらは</span> <span class='t-V'>捨てられます</span> <span class='t-M'>それらが店に着く前に</span>。",
                            "naturalTranslation": "それらは完璧なものと同じ味がするにも関わらず、店に届く前に捨てられてしまいます。",
                            "vocabulary": [
                                { "word": "reach", "meaning": "「～に着く、届く」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "Even though", "explanation": "<b>Even though</b>: 「たとえ～だとしても」（譲歩）。" }
                            ]
                        }
                    },
                    {
                        "id": 12,
                        "text": "Another reason is that consumers often misunderstand the dates on packages and throw away food that is still safe to eat.",
                        "translation": "もう一つの理由は、消費者がパッケージの日付をしばしば誤解し、まだ安全に食べられる食品を捨ててしまうことです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Another reason</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that consumers often misunderstand the dates on packages and throw away food that is still safe to eat</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>もう一つの理由は</span> <span class='t-V'>です</span> <span class='t-C'>消費者がしばしばパッケージの日付を誤解し、まだ安全に食べられる食料を捨ててしまうこと</span>。",
                            "naturalTranslation": "もう一つの理由は、消費者がパッケージの日付をしばしば誤解し、まだ安全に食べられる食品を捨ててしまうことです。",
                            "vocabulary": [
                                { "word": "consumer", "meaning": "「消費者」。" },
                                { "word": "misunderstand", "meaning": "「誤解する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "that ...", "explanation": "<b>that</b>: 接続詞。that以下が補語になっています。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 13,
                        "text": "Throwing away food has negative effects on the environment.",
                        "translation": "食料を捨てることは環境に悪影響を与えます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Throwing away food</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>negative effects</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>on the environment</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>食料を捨てることは</span> <span class='t-V'>持っています（与えます）</span> <span class='t-O'>否定的な影響を</span> <span class='t-M'>環境に</span>。",
                            "naturalTranslation": "食料を捨てることは環境に悪影響を与えます。",
                            "vocabulary": [
                                { "word": "negative", "meaning": "「否定的な、悪い」。" },
                                { "word": "effect", "meaning": "「影響、効果」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "Throwing", "explanation": "<b>Throwing</b>: 動名詞（主語）。" }
                            ]
                        }
                    },
                    {
                        "id": 14,
                        "text": "When food waste is collected and put into landfills, it rots and produces a harmful gas called methane.",
                        "translation": "食品ゴミが回収され埋立地に置かれると、それは腐敗し、メタンと呼ばれる有害なガスを発生させます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is collected", "rots", "produces"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>When food waste is collected and put into landfills</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>rots and produces</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a harmful gas called methane</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>食品ゴミが集められて埋立地に入れられると、</span> <span class='t-S'>それは</span> <span class='t-V'>腐って生み出します</span> <span class='t-O'>メタンと呼ばれる有害なガスを</span>。",
                            "naturalTranslation": "食品ゴミが回収され埋立地に置かれると、それは腐敗し、メタンと呼ばれる有害なガスを発生させます。",
                            "vocabulary": [
                                { "word": "landfill", "meaning": "「埋立地」。" },
                                { "word": "rot", "meaning": "「腐る」。" },
                                { "word": "harmful", "meaning": "「有害な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 15,
                        "text": "This gas contributes to global warming much more than carbon dioxide does.",
                        "translation": "このガスは二酸化炭素よりもはるかに地球温暖化に寄与します（悪影響を与えます）。",
                        "grammarAnalysis": {
                            "mainVerbs": ["contributes to"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This gas</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>contributes to</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>global warming</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>much more than carbon dioxide does</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>このガスは</span> <span class='t-V'>貢献します（寄与します）</span> <span class='t-O'>地球温暖化に</span> <span class='t-M'>二酸化炭素よりもはるかに多く</span>。",
                            "naturalTranslation": "このガスは二酸化炭素よりもはるかに地球温暖化に寄与します（悪影響を与えます）。",
                            "vocabulary": [
                                { "word": "contribute to", "meaning": "「～に寄与する、貢献する」。" },
                                { "word": "global warming", "meaning": "「地球温暖化」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 16,
                        "text": "In addition, producing food requires a lot of water and energy.",
                        "translation": "さらに、食料を生産するには多くの水とエネルギーが必要です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["requires"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In addition</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>producing food</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>requires</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a lot of water and energy</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>食料を生産することは</span> <span class='t-V'>必要とします</span> <span class='t-O'>多くの水とエネルギーを</span>。",
                            "naturalTranslation": "さらに、食料を生産するには多くの水とエネルギーが必要です。",
                            "vocabulary": [
                                { "word": "require", "meaning": "「～を必要とする」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "When we waste food, we are also wasting these valuable natural resources used to grow and transport it.",
                        "translation": "私たちが食料を無駄にする時、それを育て運ぶために使われたこれらの貴重な天然資源も無駄にしていることになります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["waste", "are wasting"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>When we waste food</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>we</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are also wasting</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>these valuable natural resources used to grow and transport it</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>私たちが食料を無駄にする時、</span> <span class='t-S'>私たちは</span> <span class='t-V'>また無駄にしています</span> <span class='t-O'>これらの貴重な天然資源を（それを育て輸送するために使われた）</span>。",
                            "naturalTranslation": "私たちが食料を無駄にする時、それを育て運ぶために使われたこれらの貴重な天然資源も無駄にしていることになります。",
                            "vocabulary": [
                                { "word": "valuable", "meaning": "「貴重な、価値のある」。" },
                                { "word": "resource", "meaning": "「資源」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "used", "explanation": "<b>used</b>: 過去分詞の後置修飾。「使われた」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 18,
                        "text": "To solve this issue, new movements are starting.",
                        "translation": "この問題を解決するために、新しい動きが始まっています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are starting"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>To solve this issue</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>new movements</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are starting</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>この問題を解決するために、</span> <span class='t-S'>新しい動きが</span> <span class='t-V'>始まっています</span>。",
                            "naturalTranslation": "この問題を解決するために、新しい動きが始まっています。",
                            "vocabulary": [
                                { "word": "movement", "meaning": "「動き、運動」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "To solve", "explanation": "<b>To solve</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 19,
                        "text": "Some organizations, called \"food banks,\" collect food that cannot be sold but is safe to eat.",
                        "translation": "「フードバンク」と呼ばれるいくつかの組織は、売ることはできないが安全に食べられる食料を集めています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["collect"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Some organizations, called \"food banks,\"</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>collect</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>food that cannot be sold but is safe to eat</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>いくつかの組織は（「フードバンク」と呼ばれる）</span> <span class='t-V'>集めます</span> <span class='t-O'>食料を（売ることはできないが食べるには安全な）</span>。",
                            "naturalTranslation": "「フードバンク」と呼ばれるいくつかの組織は、売ることはできないが安全に食べられる食料を集めています。",
                            "vocabulary": [
                                { "word": "organization", "meaning": "「組織、団体」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 20,
                        "text": "They donate this food to people in need.",
                        "translation": "彼らはこの食料を必要としている人々に寄付します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["donate"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>donate</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>this food</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to people in need</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>寄付します</span> <span class='t-O'>この食料を</span> <span class='t-M'>困っている人々に</span>。",
                            "naturalTranslation": "彼らはこの食料を必要としている人々に寄付します。",
                            "vocabulary": [
                                { "word": "donate", "meaning": "「～を寄付する」。" },
                                { "word": "in need", "meaning": "「困っている、貧窮している」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 21,
                        "text": "Also, supermarkets are starting to sell \"ugly\" vegetables at a lower price.",
                        "translation": "また、スーパーマーケットは「不格好な」野菜をより安い価格で売り始めています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are starting to sell"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>supermarkets</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are starting to sell</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>\"ugly\" vegetables</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>at a lower price</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>スーパーマーケットは</span> <span class='t-V'>売り始めています</span> <span class='t-O'>「醜い（不格好な）」野菜を</span> <span class='t-M'>より低い価格で</span>。",
                            "naturalTranslation": "また、スーパーマーケットは「不格好な」野菜をより安い価格で売り始めています。",
                            "vocabulary": [
                                { "word": "ugly", "meaning": "「醜い、不格好な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 22,
                        "text": "It is important for consumers to understand that the shape of a vegetable does not change its taste, and buying these products can help save the planet.",
                        "translation": "野菜の形は味を変えないこと、そしてこれらの製品を買うことが地球を救う助けになることを消費者が理解するのは重要です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>for consumers to understand that the shape of a vegetable does not change its taste, and buying these products can help save the planet</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>重要な</span> <span class='t-S'>消費者が理解することは（野菜の形は味を変えないこと、そしてこれらを買うことが地球を救うのを助けることを）</span>。",
                            "naturalTranslation": "野菜の形は味を変えないこと、そしてこれらの製品を買うことが地球を救う助けになることを消費者が理解するのは重要です。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "It is ... for A to do", "explanation": "<b>It is ... for A to do</b>: 形式主語構文。「Aが～することは...だ」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about the food situation in the world?",
                "textTranslation": "世界の食料事情について正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "Supermarkets are running out of food because of high demand.", "translation": "高い需要のためにスーパーマーケットは食料不足になっている。", "isCorrect": false },
                    { "id": 2, "text": "Most people in the world grow their own vegetables at home.", "translation": "世界のほとんどの人々は家で自分の野菜を育てている。", "isCorrect": false },
                    { "id": 3, "text": "A large amount of food is thrown away even though it can be eaten.", "translation": "食べることができるにも関わらず、大量の食料が捨てられている。", "isCorrect": true, "highlight": "one-third of the food ... is thrown away. ... edible food are going into the trash" },
                    { "id": 4, "text": "Food waste has completely stopped thanks to new laws.", "translation": "新しい法律のおかげで食品ロスは完全に止まった。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、食べられる食料（edible food）がどうなっているかについての記述を確認しましょう。",
                    "targetSentenceId": 4,
                    "highlightWord": "thrown away",
                    "highlightWordSentenceId": 4
                },
                "keywords": ["food situation", "thrown away", "edible"],
                "keywordExplanations": { "edible": "食べられる" },
                "keywordMatches": [
                    { "sentenceId": 4, "text": "one-third of the food ... is thrown away", "keyword": "A large amount of food is thrown away" },
                    { "sentenceId": 6, "text": "massive amounts of edible food", "keyword": "even though it can be eaten" }
                ],
                "choiceAdvice": "1: スーパーには食料が溢れている（full of delicious food）とあります。 2: そのような記述はありません。 3: 本文の 'edible food are going into the trash' というパラドックスと一致します。 4: 止まったとは書かれていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 4 & 6): 「Every year, about one-third of the food ... is thrown away. ... massive amounts of edible food are going into the trash...」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 2,
                "text": "Why are some vegetables and fruits rejected by supermarkets?",
                "textTranslation": "なぜ一部の野菜や果物はスーパーマーケットに拒絶されるのですか？",
                "choices": [
                    { "id": 1, "text": "Because they do not look perfect or have strange shapes.", "translation": "なぜなら、それらは完璧に見えなかったり、奇妙な形をしているから。", "isCorrect": true, "highlight": "want to sell products that look perfect ... strange shapes or small scratches" },
                    { "id": 2, "text": "Because they contain dangerous chemicals for humans.", "translation": "なぜなら、それらは人間にとって危険な化学物質を含んでいるから。", "isCorrect": false },
                    { "id": 3, "text": "Because they are too expensive for most customers to buy.", "translation": "なぜなら、それらはほとんどの客が買うには高すぎるから。", "isCorrect": false },
                    { "id": 4, "text": "Because they expire much faster than other products.", "translation": "なぜなら、それらは他の製品よりずっと早く期限が切れるから。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、スーパーが売りたい商品（look perfect）と拒絶される理由（strange shapes）を確認しましょう。",
                    "targetSentenceId": 10,
                    "highlightWord": "rejected",
                    "highlightWordSentenceId": 10
                },
                "keywords": ["rejected", "look", "shape"],
                "keywordExplanations": { "rejected": "拒絶される", "perfect": "完璧な" },
                "keywordMatches": [
                    { "sentenceId": 9, "text": "want to sell products that look perfect", "keyword": "look perfect" },
                    { "sentenceId": 10, "text": "have strange shapes", "keyword": "have strange shapes" }
                ],
                "choiceAdvice": "1: 本文の 'products that look perfect' と対比される 'strange shapes or small scratches' が理由です。 2: 味は同じで安全です。 3: 価格についての記述はありません。 4: 腐りやすいという記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 10): 「Therefore, vegetables and fruits that have strange shapes or small scratches are often rejected.」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 3,
                "text": "One of the negative features of food waste is that",
                "textTranslation": "食品ロスの否定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "it causes supermarkets to lower the prices of all items.", "translation": "それはスーパーマーケットに全商品の価格を下げるよう引き起こす。", "isCorrect": false },
                    { "id": 2, "text": "it produces a gas that is bad for the environment.", "translation": "それは環境に悪いガスを生み出す。", "isCorrect": true, "highlight": "produces a harmful gas called methane" },
                    { "id": 3, "text": "it creates more jobs for people working in landfills.", "translation": "それは埋立地で働く人々のためのより多くの仕事を生み出す。", "isCorrect": false },
                    { "id": 4, "text": "it forces farmers to stop growing crops in the summer.", "translation": "それは農家に夏に作物を育てるのをやめるよう強制する。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、埋立地（landfills）で食料が腐る（rots）と何が発生するかを確認しましょう。",
                    "targetSentenceId": 14,
                    "highlightWord": "gas",
                    "highlightWordSentenceId": 14
                },
                "keywords": ["negative", "gas", "environment"],
                "keywordExplanations": { "harmful": "有害な（bad）" },
                "keywordMatches": [
                    { "sentenceId": 14, "text": "produces a harmful gas called methane", "keyword": "produces a gas that is bad" }
                ],
                "choiceAdvice": "1: 価格低下の話ではありません。 2: 本文の 'produces a harmful gas called methane' と一致します。 3: 仕事が増えるという話ではありません。 4: 農業への影響については資源の浪費が挙げられていますが、栽培停止ではありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 14): 「When food waste ... rots, it produces a harmful gas called methane.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 4,
                "text": "How are \"food banks\" helping to solve the problem?",
                "textTranslation": "「フードバンク」はどのように問題を解決する助けとなっていますか？",
                "choices": [
                    { "id": 1, "text": "They sell expensive vegetables to rich people.", "translation": "彼らは金持ちに高い野菜を売る。", "isCorrect": false },
                    { "id": 2, "text": "They teach farmers how to grow perfect fruits.", "translation": "彼らは農家に完璧な果物の育て方を教える。", "isCorrect": false },
                    { "id": 3, "text": "They give food that is safe to eat to people in need.", "translation": "彼らは安全に食べられる食料を、必要としている人々に与える。", "isCorrect": true, "highlight": "collect food ... donate this food to people in need" },
                    { "id": 4, "text": "They create new laws to punish people who waste food.", "translation": "彼らは食料を無駄にする人々を罰するための新しい法律を作る。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、フードバンク（food banks）の活動内容（collect & donate）を確認しましょう。",
                    "targetSentenceId": 20,
                    "highlightWord": "donate",
                    "highlightWordSentenceId": 20
                },
                "keywords": ["food banks", "donate", "safe"],
                "keywordExplanations": { "donate": "寄付する（give）", "in need": "困っている" },
                "keywordMatches": [
                    { "sentenceId": 19, "text": "collect food ... safe to eat", "keyword": "give food that is safe" },
                    { "sentenceId": 20, "text": "donate this food to people in need", "keyword": "to people in need" }
                ],
                "choiceAdvice": "1: 売るのではなく寄付します。 2: 農家への指導ではありません。 3: 本文の 'donate this food to people in need' と一致します。 4: 法律を作るのは政府の役割であり、本文には記述がありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20): 「They donate this food to people in need.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "We should only buy food that looks perfect to stay healthy.", "translation": "健康を保つために完璧に見える食料だけを買うべきだ。", "isCorrect": false },
                    { "id": 2, "text": "Changing how we choose and use food can help the environment.", "translation": "食料の選び方や使い方を変えることが環境を助けることにつながる。", "isCorrect": true, "highlight": "buying these products can help save the planet" },
                    { "id": 3, "text": "Methane gas is good for the earth because it helps plants grow.", "translation": "メタンガスは植物が育つのを助けるので地球に良い。", "isCorrect": false },
                    { "id": 4, "text": "Food banks are the only solution to the problem of hunger.", "translation": "フードバンクは飢餓問題に対する唯一の解決策である。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終文で、消費者が何を理解し、どう行動すべきか（buying these products）を確認しましょう。",
                    "targetSentenceId": 22,
                    "highlightWord": "important",
                    "highlightWordSentenceId": 22
                },
                "keywords": ["environment", "change", "choose"],
                "keywordExplanations": { "save the planet": "地球を救う（help the environment）" },
                "keywordMatches": [
                    { "sentenceId": 22, "text": "buying these products can help save the planet", "keyword": "Changing how we choose ... help the environment" }
                ],
                "choiceAdvice": "1: 逆です。見た目を気にせず買うべきと述べられています。 2: 最終文の「見た目を気にせず買うことが地球を救う」というメッセージと一致します。 3: メタンは有害（harmful）で温暖化の原因になります。 4: 解決策の一つですが、唯一とは書かれていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 22): 「It is important ... to understand that ... buying these products can help save the planet.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[Reducing Food Waste] (オリジナル)</div> 本文は、世界的な問題となっている「食品ロス（Food Waste）」の原因、影響、対策についての説明です。",
            "points": [
                { "label": "1. The Problem (第1段落)", "text": "スーパーには食料が溢れていますが、世界で生産される食料の約3分の1が捨てられています。食べるものがない人がいる一方で、食べられる食料が大量に廃棄されています。" },
                { "label": "2. Reasons (第2段落)", "text": "主な原因は「見た目」です。形が悪かったり傷があったりする野菜は、味は同じでも店に並ぶ前に捨てられます。また、消費者が消費期限を誤解して捨ててしまうことも原因です。" },
                { "label": "3. Impact (第3段落)", "text": "廃棄された食料は埋立地で腐敗し、強力な温室効果ガスであるメタンを発生させます。また、生産に使われた水やエネルギーも無駄になります。" },
                { "label": "4. Solutions (第4段落)", "text": "「フードバンク」が余った食料を困っている人に寄付する活動や、スーパーが不格好な野菜を安く売る動きがあります。見た目を気にせず購入することが環境保護につながります。" }
            ]
        }
    },
    {
        "id": "2026-1-rise-of-e-bikes",
        "grade": "準2級プラス",
        "title": "The Rise of E-Bikes",
        "subTitle": "問題11",
        "genre": "テクノロジー / 社会",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=E-Bike+Structure",
            "question": "https://placehold.co/600x400?text=City+Cycling"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "Bicycles have been a popular way to travel for over a hundred years.",
                        "translation": "自転車は100年以上にわたり人気のある移動手段です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have been"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Bicycles</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have been</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a popular way to travel</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for over a hundred years</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>自転車は</span> <span class='t-V'>ずっとそうです</span> <span class='t-C'>移動するための人気のある手段</span> <span class='t-M'>100年以上にわたって</span>。",
                            "naturalTranslation": "自転車は100年以上にわたり人気のある移動手段です。",
                            "vocabulary": [
                                { "word": "popular", "meaning": "「人気のある」。" },
                                { "word": "travel", "meaning": "「移動する、旅行する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "have been", "explanation": "<b>have been</b>: 現在完了形（継続）。" },
                                { "phrase": "way to travel", "explanation": "<b>to travel</b>: 不定詞の形容詞的用法。「移動するための方法」。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "They are cheap, healthy, and good for the environment.",
                        "translation": "それらは安価で、健康的で、環境に良いものです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>cheap, healthy, and good for the environment</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>それらは</span> <span class='t-V'>です</span> <span class='t-C'>安くて、健康的で、環境に良い</span>。",
                            "naturalTranslation": "それらは安価で、健康的で、環境に良いものです。",
                            "vocabulary": [
                                { "word": "cheap", "meaning": "「安い」。" },
                                { "word": "environment", "meaning": "「環境」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 3,
                        "text": "However, for some people, riding a bike can be tiring, especially on hills or for long distances.",
                        "translation": "しかし、一部の人々にとって、自転車に乗ることは、特に坂道や長距離の場合、疲れることがあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can be"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>for some people</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>riding a bike</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>tiring</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>especially on hills or for long distances</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-M'>一部の人々にとって、</span> <span class='t-S'>自転車に乗ることは</span> <span class='t-V'>なり得ます</span> <span class='t-C'>疲れさせるものに</span>、 <span class='t-M'>特に坂道や長距離では</span>。",
                            "naturalTranslation": "しかし、一部の人々にとって、自転車に乗ることは、特に坂道や長距離の場合、疲れることがあります。",
                            "vocabulary": [
                                { "word": "tiring", "meaning": "「疲れさせる、骨の折れる」。" },
                                { "word": "distance", "meaning": "「距離」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "riding", "explanation": "<b>riding</b>: 動名詞（主語）。" }
                            ]
                        }
                    },
                    {
                        "id": 4,
                        "text": "To solve this, a new type of bicycle is becoming popular around the world.",
                        "translation": "これを解決するために、新しいタイプの自転車が世界中で人気になりつつあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is becoming"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>To solve this</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a new type of bicycle</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is becoming</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>popular</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>around the world</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>これを解決するために、</span> <span class='t-S'>新しいタイプの自転車が</span> <span class='t-V'>なりつつあります</span> <span class='t-C'>人気に</span> <span class='t-M'>世界中で</span>。",
                            "naturalTranslation": "これを解決するために、新しいタイプの自転車が世界中で人気になりつつあります。",
                            "vocabulary": [
                                { "word": "solve", "meaning": "「～を解決する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "To solve", "explanation": "<b>To solve</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "text": "It is the electric bicycle, or \"e-bike.\"",
                        "translation": "それは電動自転車、あるいは「e-bike」です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the electric bicycle, or \"e-bike.\"</span><span class='tag'>C</span></span>",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>電動自転車、あるいは「e-bike」</span>。",
                            "naturalTranslation": "それは電動自転車、あるいは「e-bike」です。",
                            "vocabulary": [
                                { "word": "electric", "meaning": "「電気の、電動の」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 6,
                        "text": "Today, more and more people are choosing e-bikes instead of cars or traditional bikes.",
                        "translation": "今日、ますます多くの人々が車や従来の自転車の代わりにe-bikeを選んでいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are choosing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Today</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>more and more people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are choosing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>e-bikes</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>instead of cars or traditional bikes</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>今日、</span> <span class='t-S'>ますます多くの人々が</span> <span class='t-V'>選んでいます</span> <span class='t-O'>e-bikeを</span> <span class='t-M'>車や従来の自転車の代わりに</span>。",
                            "naturalTranslation": "今日、ますます多くの人々が車や従来の自転車の代わりにe-bikeを選んでいます。",
                            "vocabulary": [
                                { "word": "more and more", "meaning": "「ますます多くの」。" },
                                { "word": "instead of", "meaning": "「～の代わりに」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 7,
                        "text": "E-bikes look similar to regular bicycles, but they have a battery and a small motor.",
                        "translation": "e-bikeは普通の自転車と似ていますが、バッテリーと小型モーターを持っています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["look", "have"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>E-bikes</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>look</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>similar to regular bicycles</span><span class='tag'>C</span></span>, but <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a battery and a small motor</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>e-bikeは</span> <span class='t-V'>見えます</span> <span class='t-C'>普通の自転車と似て</span>、しかし <span class='t-S'>それらは</span> <span class='t-V'>持っています</span> <span class='t-O'>バッテリーと小さなモーターを</span>。",
                            "naturalTranslation": "e-bikeは普通の自転車と似ていますが、バッテリーと小型モーターを持っています。",
                            "vocabulary": [
                                { "word": "similar to", "meaning": "「～に似ている」。" },
                                { "word": "regular", "meaning": "「通常の、普通の」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 8,
                        "text": "When the rider pedals, the motor provides power to help the bicycle move forward.",
                        "translation": "乗り手がペダルを漕ぐと、モーターが自転車が前に進むのを助けるための動力を供給します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["provides"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>When the rider pedals</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the motor</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>provides</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>power</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to help the bicycle move forward</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>乗り手がペダルを漕ぐ時、</span> <span class='t-S'>モーターは</span> <span class='t-V'>供給します</span> <span class='t-O'>動力を</span> <span class='t-M'>自転車が前に進むのを助けるために</span>。",
                            "naturalTranslation": "乗り手がペダルを漕ぐと、モーターが自転車が前に進むのを助けるための動力を供給します。",
                            "vocabulary": [
                                { "word": "pedal", "meaning": "「ペダルを漕ぐ」。" },
                                { "word": "provide", "meaning": "「～を供給する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help O (to) do", "explanation": "<b>help O do</b>: 「Oが～するのを助ける」（原形不定詞）。" }
                            ]
                        }
                    },
                    {
                        "id": 9,
                        "text": "This makes it much easier to go up steep hills or ride against strong winds.",
                        "translation": "これにより、急な坂を登ったり強風に逆らって走ったりするのがはるかに簡単になります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["makes"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>makes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>much easier</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>to go up steep hills or ride against strong winds</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>します</span> <span class='t-O'>それを</span> <span class='t-C'>ずっと簡単に</span> <span class='t-M'>急な坂を登ることや強風に逆らって乗ることを</span>。",
                            "naturalTranslation": "これにより、急な坂を登ったり強風に逆らって走ったりするのがはるかに簡単になります。",
                            "vocabulary": [
                                { "word": "steep", "meaning": "「険しい、急な」。" },
                                { "word": "wind", "meaning": "「風」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "make it C to do", "explanation": "<b>make it C to do</b>: 形式目的語構文。「～することをCにする」。" }
                            ]
                        }
                    },
                    {
                        "id": 10,
                        "text": "Because of this, e-bikes are useful not only for young people but also for elderly people who want to stay active.",
                        "translation": "このため、e-bikeは若者だけでなく、活動的でありたいと願う高齢者にとっても役に立ちます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Because of this</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>e-bikes</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>useful</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>not only for young people but also for elderly people who want to stay active</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>このために、</span> <span class='t-S'>e-bikeは</span> <span class='t-V'>です</span> <span class='t-C'>役に立つ</span> <span class='t-M'>若者だけでなく、活動的でいたい高齢者にとっても</span>。",
                            "naturalTranslation": "このため、e-bikeは若者だけでなく、活動的でありたいと願う高齢者にとっても役に立ちます。",
                            "vocabulary": [
                                { "word": "elderly", "meaning": "「年配の」。" },
                                { "word": "active", "meaning": "「活動的な」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "not only A but also B", "explanation": "<b>not only A but also B</b>: 「AだけでなくBも」。" },
                                { "phrase": "people who...", "explanation": "<b>who</b>: 関係代名詞。peopleを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 11,
                        "text": "Also, delivery workers use them to carry heavy packages quickly.",
                        "translation": "また、配達員は重い荷物を素早く運ぶためにそれらを使用しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["use"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>delivery workers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to carry heavy packages quickly</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>配達員は</span> <span class='t-V'>使います</span> <span class='t-O'>それらを</span> <span class='t-M'>重い荷物を素早く運ぶために</span>。",
                            "naturalTranslation": "また、配達員は重い荷物を素早く運ぶためにそれらを使用しています。",
                            "vocabulary": [
                                { "word": "delivery", "meaning": "「配達」。" },
                                { "word": "package", "meaning": "「荷物、小包」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "to carry", "explanation": "<b>to carry</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 12,
                        "text": "There are several benefits to using e-bikes.",
                        "translation": "e-bikeを使うことにはいくつかの利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>several benefits to using e-bikes</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>いくつかの利点が（e-bikeを使うことには）</span>。",
                            "naturalTranslation": "e-bikeを使うことにはいくつかの利点があります。",
                            "vocabulary": [
                                { "word": "benefit", "meaning": "「利点、恩恵」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 13,
                        "text": "First, they are an eco-friendly choice.",
                        "translation": "第一に、それらは環境に優しい選択です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>First</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an eco-friendly choice</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>第一に、</span> <span class='t-S'>それらは</span> <span class='t-V'>です</span> <span class='t-C'>環境に優しい選択</span>。",
                            "naturalTranslation": "第一に、それらは環境に優しい選択です。",
                            "vocabulary": [
                                { "word": "eco-friendly", "meaning": "「環境に優しい」。" },
                                { "word": "choice", "meaning": "「選択」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 14,
                        "text": "Since they run on electricity and not gasoline, they do not produce harmful gases.",
                        "translation": "ガソリンではなく電気で走るため、有害なガスを排出しません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["run", "produce"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Since they run on electricity and not gasoline</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>do not produce</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>harmful gases</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>それらはガソリンではなく電気で走るので、</span> <span class='t-S'>それらは</span> <span class='t-V'>生み出しません</span> <span class='t-O'>有害なガスを</span>。",
                            "naturalTranslation": "ガソリンではなく電気で走るため、有害なガスを排出しません。",
                            "vocabulary": [
                                { "word": "produce", "meaning": "「～を生産する、排出する」。" },
                                { "word": "harmful", "meaning": "「有害な」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "run on", "explanation": "<b>run on</b>: 「（燃料など）で走る、動く」。" }
                            ]
                        }
                    },
                    {
                        "id": 15,
                        "text": "Second, they help reduce traffic jams in cities.",
                        "translation": "第二に、それらは都市の交通渋滞を減らすのに役立ちます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["help"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Second</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>help reduce</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>traffic jams</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>in cities</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>第二に、</span> <span class='t-S'>それらは</span> <span class='t-V'>減らすのを助けます</span> <span class='t-O'>交通渋滞を</span> <span class='t-M'>都市で</span>。",
                            "naturalTranslation": "第二に、それらは都市の交通渋滞を減らすのに役立ちます。",
                            "vocabulary": [
                                { "word": "traffic jam", "meaning": "「交通渋滞」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help (to) reduce", "explanation": "<b>help reduce</b>: 原形不定詞。「減らすのを助ける」。" }
                            ]
                        }
                    },
                    {
                        "id": 16,
                        "text": "An e-bike takes up much less space on the road than a car.",
                        "translation": "e-bikeは車よりも道路上のスペースをはるかに取らないからです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["takes up"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>An e-bike</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>takes up</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>much less space</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>on the road</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>than a car</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>e-bikeは</span> <span class='t-V'>取ります（占めます）</span> <span class='t-O'>ずっと少ないスペースを</span> <span class='t-M'>道路上で</span> <span class='t-M'>車よりも</span>。",
                            "naturalTranslation": "e-bikeは車よりも道路上のスペースをはるかに取らないからです。",
                            "vocabulary": [
                                { "word": "take up", "meaning": "「（場所・時間）を取る、占める」。" },
                                { "word": "space", "meaning": "「空間、スペース」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "Finally, even though the motor helps, riders still need to pedal, so they can get some exercise and stay healthy.",
                        "translation": "最後に、モーターが助けてくれるとはいえ、乗り手は依然としてペダルを漕ぐ必要があるため、運動になり健康を維持できます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["need", "can get", "stay"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Finally, even though the motor helps</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>riders</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>still need to pedal</span><span class='tag'>V</span></span>, so <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can get</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some exercise</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>stay</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>healthy</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>最後に、モーターが助けるとしても、</span> <span class='t-S'>乗り手は</span> <span class='t-V'>まだペダルを漕ぐ必要があります</span>、だから <span class='t-S'>彼らは</span> <span class='t-V'>運動を得て</span>、そして <span class='t-V'>保つことができます</span> <span class='t-C'>健康を</span>。",
                            "naturalTranslation": "最後に、モーターが助けてくれるとはいえ、乗り手は依然としてペダルを漕ぐ必要があるため、運動になり健康を維持できます。",
                            "vocabulary": [
                                { "word": "exercise", "meaning": "「運動」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "even though", "explanation": "<b>even though</b>: 「～だけれども」（譲歩）。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 18,
                        "text": "However, the increase in e-bikes has brought some challenges.",
                        "translation": "しかし、e-bikeの増加はいくつかの課題ももたらしました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has brought"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the increase in e-bikes</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has brought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some challenges</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>e-bikeの増加は</span> <span class='t-V'>もたらしました</span> <span class='t-O'>いくつかの課題を</span>。",
                            "naturalTranslation": "しかし、e-bikeの増加はいくつかの課題ももたらしました。",
                            "vocabulary": [
                                { "word": "increase", "meaning": "「増加」。" },
                                { "word": "challenge", "meaning": "「課題、難問」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "has brought", "explanation": "<b>has brought</b>: 現在完了形。" }
                            ]
                        }
                    },
                    {
                        "id": 19,
                        "text": "Because e-bikes can travel much faster than regular bikes, the risk of accidents is higher.",
                        "translation": "e-bikeは普通の自転車よりもはるかに速く移動できるため、事故のリスクが高くなります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Because e-bikes can travel much faster than regular bikes</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the risk of accidents</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>higher</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>e-bikeは普通の自転車よりずっと速く移動できるので、</span> <span class='t-S'>事故のリスクは</span> <span class='t-V'>です</span> <span class='t-C'>より高い</span>。",
                            "naturalTranslation": "e-bikeは普通の自転車よりもはるかに速く移動できるため、事故のリスクが高くなります。",
                            "vocabulary": [
                                { "word": "risk", "meaning": "「危険性、リスク」。" },
                                { "word": "accident", "meaning": "「事故」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 20,
                        "text": "There have been cases where e-bikes hit pedestrians on sidewalks.",
                        "translation": "e-bikeが歩道で歩行者に衝突するケースがありました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have been"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There have been</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>cases where e-bikes hit pedestrians on sidewalks</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>ありました</span> <span class='t-S'>e-bikeが歩道で歩行者にぶつかるケースが</span>。",
                            "naturalTranslation": "e-bikeが歩道で歩行者に衝突するケースがありました。",
                            "vocabulary": [
                                { "word": "pedestrian", "meaning": "「歩行者」。" },
                                { "word": "sidewalk", "meaning": "「歩道」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "cases where...", "explanation": "<b>where</b>: 関係副詞。casesを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "Also, the batteries can sometimes catch fire if they are not charged correctly.",
                        "translation": "また、バッテリーは正しく充電されないと発火することがあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can catch"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the batteries</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can sometimes catch fire</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>if they are not charged correctly</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>バッテリーは</span> <span class='t-V'>時々発火する可能性があります</span> <span class='t-M'>もしそれらが正しく充電されないならば</span>。",
                            "naturalTranslation": "また、バッテリーは正しく充電されないと発火することがあります。",
                            "vocabulary": [
                                { "word": "catch fire", "meaning": "「火がつく、発火する」。" },
                                { "word": "charge", "meaning": "「～を充電する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 22,
                        "text": "To make city streets safer, governments need to make new traffic rules and build more lanes specifically for bicycles.",
                        "translation": "街の通りをより安全にするために、政府は新しい交通ルールを作り、自転車専用のレーンをもっと建設する必要があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["need to make", "build"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>To make city streets safer</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>governments</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>need to make</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>new traffic rules</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>build</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>more lanes specifically for bicycles</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>街の通りをより安全にするために、</span> <span class='t-S'>政府は</span> <span class='t-V'>作る必要があります</span> <span class='t-O'>新しい交通ルールを</span>、そして <span class='t-V'>建設する（必要があります）</span> <span class='t-O'>より多くのレーンを（特に自転車のために）</span>。",
                            "naturalTranslation": "街の通りをより安全にするために、政府は新しい交通ルールを作り、自転車専用のレーンをもっと建設する必要があります。",
                            "vocabulary": [
                                { "word": "government", "meaning": "「政府、行政」。" },
                                { "word": "specifically", "meaning": "「特に、明確に」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "To make", "explanation": "<b>To make</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "Why are e-bikes becoming popular?",
                "textTranslation": "なぜe-bikeは人気になっているのですか？",
                "choices": [
                    { "id": 1, "text": "Because traditional bicycles have become too expensive to buy.", "translation": "なぜなら、従来の自転車は買うのに高くなりすぎたから。", "isCorrect": false },
                    { "id": 2, "text": "Because they solve the problem of riding being tiring on hills.", "translation": "なぜなら、それらは坂道で乗るのが疲れるという問題を解決するから。", "isCorrect": true, "highlight": "solve this ... riding a bike can be tiring, especially on hills" },
                    { "id": 3, "text": "Because cars are no longer allowed in most city centers.", "translation": "なぜなら、車はもはやほとんどの都心部で許可されていないから。", "isCorrect": false },
                    { "id": 4, "text": "Because people want to stop exercising completely.", "translation": "なぜなら、人々は完全に運動をやめたいと思っているから。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、自転車の課題（tiring）とそれを解決する（solve this）という流れを確認しましょう。",
                    "targetSentenceId": 4,
                    "highlightWord": "solve",
                    "highlightWordSentenceId": 4
                },
                "keywords": ["popular", "tiring", "hills"],
                "keywordExplanations": { "tiring": "疲れる" },
                "keywordMatches": [
                    { "sentenceId": 3, "text": "riding a bike can be tiring, especially on hills", "keyword": "riding being tiring on hills" },
                    { "sentenceId": 4, "text": "To solve this, a new type of bicycle is becoming popular", "keyword": "solve the problem" }
                ],
                "choiceAdvice": "1: 価格についての記述はありません。 2: 本文の 'riding a bike can be tiring... To solve this' と一致します。 3: 車の規制については書かれていません。 4: 運動にもなる（get some exercise）ことが利点として挙げられています。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 3 & 4): 「...riding a bike can be tiring, especially on hills... To solve this, a new type of bicycle is becoming popular...」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 2,
                "text": "What is a feature of e-bikes mentioned in the passage?",
                "textTranslation": "本文で述べられているe-bikeの特徴は何ですか？",
                "choices": [
                    { "id": 1, "text": "They move forward automatically without any pedaling.", "translation": "それらはペダルを漕ぐことなしに自動的に前に進む。", "isCorrect": false },
                    { "id": 2, "text": "They are mainly used by young people for racing.", "translation": "それらは主に若者によってレースのために使われる。", "isCorrect": false },
                    { "id": 3, "text": "The motor provides power to assist the rider when pedaling.", "translation": "乗り手がペダルを漕ぐ時、モーターが助けるための動力を供給する。", "isCorrect": true, "highlight": "motor provides power to help the bicycle move forward" },
                    { "id": 4, "text": "They are too heavy for elderly people to use safely.", "translation": "それらは高齢者が安全に使うには重すぎる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、乗り手がペダルを漕ぐ時（When the rider pedals）に何が起こるかを確認しましょう。",
                    "targetSentenceId": 8,
                    "highlightWord": "help",
                    "highlightWordSentenceId": 8
                },
                "keywords": ["feature", "motor", "pedal"],
                "keywordExplanations": { "assist": "助ける（helpと同義）" },
                "keywordMatches": [
                    { "sentenceId": 8, "text": "motor provides power to help the bicycle move forward", "keyword": "motor provides power to assist" }
                ],
                "choiceAdvice": "1: ペダルを漕ぐ必要がある（riders still need to pedal）とあります。 2: レース用とは書かれておらず、高齢者や配達員にも使われています。 3: 本文の 'motor provides power to help' と一致します。 4: 高齢者にも役立つ（useful ... for elderly people）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 8): 「When the rider pedals, the motor provides power to help the bicycle move forward.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of e-bikes is that",
                "textTranslation": "e-bikeの肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "they help reduce the number of cars and traffic jams.", "translation": "それらは車の数と交通渋滞を減らすのに役立つ。", "isCorrect": true, "highlight": "help reduce traffic jams ... takes up much less space" },
                    { "id": 2, "text": "they are faster than cars during long trips in the country.", "translation": "それらは田舎への長旅の間、車よりも速い。", "isCorrect": false },
                    { "id": 3, "text": "they allow riders to travel without using any energy.", "translation": "それらは乗り手がエネルギーを使わずに移動することを可能にする。", "isCorrect": false },
                    { "id": 4, "text": "they produce a pleasant sound that pedestrians like.", "translation": "それらは歩行者が好む心地よい音を出す。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、交通（traffic）に関する利点を確認しましょう。",
                    "targetSentenceId": 15,
                    "highlightWord": "traffic jams",
                    "highlightWordSentenceId": 15
                },
                "keywords": ["reduce", "traffic jams", "cars"],
                "keywordExplanations": { "reduce": "減らす" },
                "keywordMatches": [
                    { "sentenceId": 15, "text": "help reduce traffic jams", "keyword": "help reduce ... traffic jams" },
                    { "sentenceId": 6, "text": "choosing e-bikes instead of cars", "keyword": "reduce the number of cars" }
                ],
                "choiceAdvice": "1: 本文の 'help reduce traffic jams' と一致します。また車からの乗り換え（choosing e-bikes instead of cars）は車の減少を意味します。 2: 車より速いとは書かれていません。 3: ペダルを漕ぐ必要があるためエネルギーは使います。 4: 音についての記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 15): 「Second, they help reduce traffic jams in cities.」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges regarding e-bikes?",
                "textTranslation": "e-bikeに関する課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "They take up too much space on the road compared to cars.", "translation": "それらは車に比べて道路のスペースを取りすぎる。", "isCorrect": false },
                    { "id": 2, "text": "The batteries are too expensive for most people to buy.", "translation": "バッテリーはほとんどの人にとって買うには高すぎる。", "isCorrect": false },
                    { "id": 3, "text": "They are too slow to be used for delivering packages.", "translation": "それらは荷物を配達するのに使うには遅すぎる。", "isCorrect": false },
                    { "id": 4, "text": "The higher speed increases the risk of hitting pedestrians.", "translation": "より速いスピードが、歩行者にぶつかるリスクを高める。", "isCorrect": true, "highlight": "travel much faster ... risk of accidents is higher ... hit pedestrians" }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、スピード（speed/faster）と事故リスク（risk/accidents）の関係を確認しましょう。",
                    "targetSentenceId": 19,
                    "highlightWord": "risk",
                    "highlightWordSentenceId": 19
                },
                "keywords": ["challenge", "speed", "pedestrian"],
                "keywordExplanations": { "hit": "ぶつかる" },
                "keywordMatches": [
                    { "sentenceId": 19, "text": "travel much faster ... risk of accidents is higher", "keyword": "higher speed increases the risk" },
                    { "sentenceId": 20, "text": "e-bikes hit pedestrians", "keyword": "hitting pedestrians" }
                ],
                "choiceAdvice": "1: スペースを取らない（takes up much less space）ことが利点とされています。 2: バッテリーの価格については触れられていません（発火リスクは記述あり）。 3: 素早く運べる（carry ... quickly）とあります。 4: 本文の 'travel much faster ... risk ... is higher ... hit pedestrians' と一致します。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 19 & 20): 「Because e-bikes can travel much faster ..., the risk of accidents is higher. There have been cases where e-bikes hit pedestrians...」" },
                    { "type": "conclusion", "content": "正解: 4" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "E-bikes will replace all cars in the world very soon.", "translation": "e-bikeは世界中の全ての車にすぐ取って代わるだろう。", "isCorrect": false },
                    { "id": 2, "text": "Governments should ban e-bikes to protect pedestrians.", "translation": "政府は歩行者を守るためにe-bikeを禁止すべきだ。", "isCorrect": false },
                    { "id": 3, "text": "Improvements in rules and roads are needed for safety.", "translation": "安全のためにルールや道路の改善が必要である。", "isCorrect": true, "highlight": "governments need to make new traffic rules and build more lanes" },
                    { "id": 4, "text": "Elderly people should avoid using e-bikes to stay safe.", "translation": "高齢者は安全のためにe-bikeを使うのを避けるべきだ。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終文で、政府が安全のために何をすべきか（need to make/build...）を確認しましょう。",
                    "targetSentenceId": 22,
                    "highlightWord": "need",
                    "highlightWordSentenceId": 22
                },
                "keywords": ["learn", "rules", "safety"],
                "keywordExplanations": { "improvement": "改善（new rulesやbuild more lanesに対応）" },
                "keywordMatches": [
                    { "sentenceId": 22, "text": "make new traffic rules and build more lanes", "keyword": "Improvements in rules and roads" }
                ],
                "choiceAdvice": "1: そのような予測は書かれていません。 2: 禁止ではなく、ルール作りやレーン建設が必要とされています。 3: 最終文の「新しいルールを作り、専用レーンを建設する必要がある」という内容を要約しています。 4: 高齢者にも役立つ（useful ... for elderly people）と書かれています。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 22): 「To make city streets safer, governments need to make new traffic rules and build more lanes specifically for bicycles.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[The Rise of E-Bikes] (オリジナル)</div> 本文は、近年普及している「電動アシスト自転車（e-bike）」についての説明です。",
            "points": [
                { "label": "1. Introduction (第1段落)", "text": "自転車は便利ですが、坂道などで疲れるのが難点でした。それを解決する「e-bike」が世界中で人気を集めており、車代わりにする人も増えています。" },
                { "label": "2. How it works (第2段落)", "text": "普通の自転車に見えますが、モーターとバッテリーがあります。ペダルを漕ぐとモーターが助けてくれるため、坂道や向かい風でも楽に進めます。高齢者の移動や、重い荷物を運ぶ配達員に役立っています。" },
                { "label": "3. Benefits (第3段落)", "text": "電気で走るため環境に優しく、車より場所を取らないため渋滞緩和にも貢献します。また、自分で漕ぐ必要があるため、適度な運動にもなります。" },
                { "label": "4. Challenges (第4段落)", "text": "課題はスピードが出ることによる事故のリスクです。歩行者との衝突事故や、バッテリーの発火トラブルも起きています。安全のために新しいルールや自転車専用レーンの整備が必要です。" }
            ]
        }
    },
    {
        "id": "2026-2-green-roofs",
        "grade": "準2級プラス",
        "title": "Green Roofs",
        "subTitle": "問題12",
        "genre": "環境 / 都市生活",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Green+Roofs",
            "question": "https://placehold.co/600x400?text=Eco-City"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "In modern cities, tall buildings and wide roads cover most of the land.",
                        "translation": "現代の都市では、高い建物や広い道路が土地の大部分を覆っています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["cover"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In modern cities</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>tall buildings and wide roads</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>cover</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>most of the land</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>現代の都市では、</span> <span class='t-S'>高い建物や広い道路が</span> <span class='t-V'>覆っています</span> <span class='t-O'>土地の大部分を</span>。",
                            "naturalTranslation": "現代の都市では、高い建物や広い道路が土地の大部分を覆っています。",
                            "vocabulary": [
                                { "word": "cover", "meaning": "「～を覆う」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 2,
                        "text": "Because concrete and asphalt absorb heat from the sun, cities often become much hotter than the surrounding countryside.",
                        "translation": "コンクリートやアスファルトが太陽からの熱を吸収するため、都市はしばしば周囲の田舎よりもはるかに暑くなります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["absorb", "become"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Because concrete and asphalt absorb heat from the sun</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>cities</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>often</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>become</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>much hotter than the surrounding countryside</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>コンクリートやアスファルトが太陽からの熱を吸収するので、</span> <span class='t-S'>都市は</span> <span class='t-M'>しばしば</span> <span class='t-V'>なります</span> <span class='t-C'>周囲の田舎よりもずっと暑く</span>。",
                            "naturalTranslation": "コンクリートやアスファルトが太陽からの熱を吸収するため、都市はしばしば周囲の田舎よりもはるかに暑くなります。",
                            "vocabulary": [
                                { "word": "absorb", "meaning": "「吸収する」。" },
                                { "word": "countryside", "meaning": "「田舎」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 3,
                        "text": "This is known as the \"heat island effect.\"",
                        "translation": "これは「ヒートアイランド現象」として知られています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is known"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is known</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>as the \"heat island effect.\"</span><span class='tag'>C</span></span>",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>知られています</span> <span class='t-C'>「ヒートアイランド現象」として</span>。",
                            "naturalTranslation": "これは「ヒートアイランド現象」として知られています。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "is known as", "explanation": "<b>is known as</b>: 「～として知られている」。" }
                            ]
                        }
                    },
                    {
                        "id": 4,
                        "text": "To make cities cooler and more comfortable, a new idea is spreading around the world.",
                        "translation": "都市をより涼しく快適にするために、新しいアイデアが世界中に広まっています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is spreading"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>To make cities cooler and more comfortable</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a new idea</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is spreading</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>around the world</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>都市をより涼しく快適にするために、</span> <span class='t-S'>新しいアイデアが</span> <span class='t-V'>広まっています</span> <span class='t-M'>世界中で</span>。",
                            "naturalTranslation": "都市をより涼しく快適にするために、新しいアイデアが世界中に広まっています。",
                            "vocabulary": [
                                { "word": "comfortable", "meaning": "「快適な」。" },
                                { "word": "spread", "meaning": "「広がる」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "To make", "explanation": "<b>To make</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "text": "It is called \"green roofs.\"",
                        "translation": "それは「屋上緑化（緑の屋根）」と呼ばれています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is called"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>\"green roofs.\"</span><span class='tag'>C</span></span>",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>「屋上緑化」と</span>。",
                            "naturalTranslation": "それは「屋上緑化（緑の屋根）」と呼ばれています。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 6,
                        "text": "This means planting grass, flowers, and even trees on the tops of buildings.",
                        "translation": "これは、建物の屋上に草や花、さらには木を植えることを意味します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["means"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>means</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>planting grass, flowers, and even trees on the tops of buildings</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>意味します</span> <span class='t-O'>草や花、さらには木を植えることを（建物の屋上に）</span>。",
                            "naturalTranslation": "これは、建物の屋上に草や花、さらには木を植えることを意味します。",
                            "vocabulary": [
                                { "word": "plant", "meaning": "「（植物）を植える」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 7,
                        "text": "Creating a green roof is different from simply putting a few potted plants on a balcony.",
                        "translation": "緑の屋根を作ることは、単にバルコニーにいくつかの鉢植えを置くこととは異なります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Creating a green roof</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>different from simply putting a few potted plants on a balcony</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>緑の屋根を作ることは</span> <span class='t-V'>です</span> <span class='t-C'>単にバルコニーにいくつかの鉢植えを置くこととは異なって</span>。",
                            "naturalTranslation": "緑の屋根を作ることは、単にバルコニーにいくつかの鉢植えを置くこととは異なります。",
                            "vocabulary": [
                                { "word": "create", "meaning": "「～を作る、創造する」。" },
                                { "word": "different from", "meaning": "「～と異なる」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "Creating", "explanation": "<b>Creating</b>: 動名詞（主語）。" }
                            ]
                        }
                    },
                    {
                        "id": 8,
                        "text": "It involves covering the whole roof with a special layer of soil and plants.",
                        "translation": "それは屋根全体を土と植物の特別な層で覆うことを伴います。",
                        "grammarAnalysis": {
                            "mainVerbs": ["involves"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>involves</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>covering the whole roof with a special layer of soil and plants</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>伴います（含みます）</span> <span class='t-O'>屋根全体を覆うことを（土と植物の特別な層で）</span>。",
                            "naturalTranslation": "それは屋根全体を土と植物の特別な層で覆うことを伴います。",
                            "vocabulary": [
                                { "word": "involve", "meaning": "「～を含む、伴う」。" },
                                { "word": "layer", "meaning": "「層」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "Engineers need to use waterproof materials to protect the building from leaks.",
                        "translation": "技術者は、建物お漏水から守るために防水素材を使う必要があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["need to use"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Engineers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>need to use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>waterproof materials</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to protect the building from leaks</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>技術者は</span> <span class='t-V'>使う必要があります</span> <span class='t-O'>防水の素材を</span> <span class='t-M'>建物を漏水から守るために</span>。",
                            "naturalTranslation": "技術者は、建物お漏水から守るために防水素材を使う必要があります。",
                            "vocabulary": [
                                { "word": "waterproof", "meaning": "「防水の」。" },
                                { "word": "leak", "meaning": "「漏れ、漏水」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "to protect", "explanation": "<b>to protect</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 10,
                        "text": "Also, they choose plants that are strong against the wind and the sun.",
                        "translation": "また、彼らは風や太陽に強い植物を選びます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["choose"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>choose</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>plants that are strong against the wind and the sun</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>彼らは</span> <span class='t-V'>選びます</span> <span class='t-O'>植物を（風や太陽に対して強い）</span>。",
                            "naturalTranslation": "また、彼らは風や太陽に強い植物を選びます。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "plants that...", "explanation": "<b>that</b>: 関係代名詞。plantsを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 11,
                        "text": "In some cities, governments are making laws that require new large buildings to have green roofs.",
                        "translation": "いくつかの都市では、政府が新しい大きな建物に屋上緑化を義務付ける法律を作っています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are making"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In some cities</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>governments</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are making</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>laws that require new large buildings to have green roofs</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>いくつかの都市では、</span> <span class='t-S'>政府は</span> <span class='t-V'>作っています</span> <span class='t-O'>法律を（新しい大きな建物が屋上緑化を持つことを要求する）</span>。",
                            "naturalTranslation": "いくつかの都市では、政府が新しい大きな建物に屋上緑化を義務付ける法律を作っています。",
                            "vocabulary": [
                                { "word": "require", "meaning": "「～を要求する、義務付ける」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "require O to do", "explanation": "<b>require O to do</b>: 「Oに～することを要求する」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 12,
                        "text": "There are many benefits to having green roofs in a city.",
                        "translation": "都市に緑の屋根を持つことには多くの利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>many benefits to having green roofs in a city</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>多くの利点が（都市に緑の屋根を持つことには）</span>。",
                            "naturalTranslation": "都市に緑の屋根を持つことには多くの利点があります。",
                            "vocabulary": [
                                { "word": "benefit", "meaning": "「利点、恩恵」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 13,
                        "text": "One important benefit is that they keep buildings cool in summer.",
                        "translation": "一つの重要な利点は、それらが夏に建物を涼しく保つことです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>One important benefit</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that they keep buildings cool in summer</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>一つの重要な利点は</span> <span class='t-V'>です</span> <span class='t-C'>それらが夏に建物を涼しく保つこと</span>。",
                            "naturalTranslation": "一つの重要な利点は、それらが夏に建物を涼しく保つことです。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "that...", "explanation": "<b>that</b>: 接続詞。that以下が補語。" },
                                { "phrase": "keep O C", "explanation": "<b>keep O C</b>: 「OをCに保つ」。" }
                            ]
                        }
                    },
                    {
                        "id": 14,
                        "text": "The soil and plants act like a blanket, blocking the heat from the sun.",
                        "translation": "土と植物は毛布のように作用し、太陽からの熱を遮断します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["act"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The soil and plants</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>act</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>like a blanket</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>blocking the heat from the sun</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>土と植物は</span> <span class='t-V'>作用します（働きます）</span> <span class='t-M'>毛布のように</span>、 <span class='t-M'>太陽からの熱を遮断して</span>。",
                            "naturalTranslation": "土と植物は毛布のように作用し、太陽からの熱を遮断します。",
                            "vocabulary": [
                                { "word": "soil", "meaning": "「土壌」。" },
                                { "word": "block", "meaning": "「～を遮断する、防ぐ」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "blocking", "explanation": "<b>blocking</b>: 分詞構文（付帯状況）。「～しながら」。" }
                            ]
                        }
                    },
                    {
                        "id": 15,
                        "text": "This means people inside use less air conditioning, which saves energy and money.",
                        "translation": "これは、中の人々がエアコンの使用を減らすことを意味し、エネルギーとお金を節約します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["means"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>means</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people inside use less air conditioning</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>which saves energy and money</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>意味します</span> <span class='t-O'>中の人々がより少ないエアコンを使うことを</span>、 <span class='t-M'>そしてそれはエネルギーとお金を節約します</span>。",
                            "naturalTranslation": "これは、中の人々がエアコンの使用を減らすことを意味し、エネルギーとお金を節約します。",
                            "vocabulary": [
                                { "word": "air conditioning", "meaning": "「空調、エアコン」。" },
                                { "word": "save", "meaning": "「～を節約する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": ", which", "explanation": "<b>, which</b>: 関係代名詞の非制限用法。前の文の内容全体を受けています。" }
                            ]
                        }
                    },
                    {
                        "id": 16,
                        "text": "Another benefit is that green roofs absorb rainwater.",
                        "translation": "もう一つの利点は、緑の屋根が雨水を吸収することです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Another benefit</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>that green roofs absorb rainwater</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>もう一つの利点は</span> <span class='t-V'>です</span> <span class='t-C'>緑の屋根が雨水を吸収すること</span>。",
                            "naturalTranslation": "もう一つの利点は、緑の屋根が雨水を吸収することです。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "During heavy storms, they hold the water and release it slowly.",
                        "translation": "激しい嵐の間、それらは水を保持し、ゆっくりと放出します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["hold", "release"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>During heavy storms</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>hold</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the water</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>release</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>slowly</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>激しい嵐の間、</span> <span class='t-S'>それらは</span> <span class='t-V'>保持します</span> <span class='t-O'>水を</span>、そして <span class='t-V'>放出します</span> <span class='t-O'>それを</span> <span class='t-M'>ゆっくりと</span>。",
                            "naturalTranslation": "激しい嵐の間、それらは水を保持し、ゆっくりと放出します。",
                            "vocabulary": [
                                { "word": "release", "meaning": "「～を放出する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 18,
                        "text": "This helps prevent floods on the streets below.",
                        "translation": "これは下の通りでの洪水を防ぐのに役立ちます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["helps"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps prevent</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>floods on the streets below</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>防ぐのを助けます</span> <span class='t-O'>下の通りでの洪水を</span>。",
                            "naturalTranslation": "これは下の通りでの洪水を防ぐのに役立ちます。",
                            "vocabulary": [
                                { "word": "prevent", "meaning": "「～を防ぐ」。" },
                                { "word": "flood", "meaning": "「洪水」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help (to) do", "explanation": "<b>help do</b>: 「～するのを助ける」（原形不定詞）。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 19,
                        "text": "However, there are challenges to building green roofs.",
                        "translation": "しかし、緑の屋根を作ることには課題もあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>challenges to building green roofs</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-V'>あります</span> <span class='t-S'>課題が（緑の屋根を作ることには）</span>。",
                            "naturalTranslation": "しかし、緑の屋根を作ることには課題もあります。",
                            "vocabulary": [
                                { "word": "challenge", "meaning": "「課題、難問」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 20,
                        "text": "The biggest problem is the weight.",
                        "translation": "最大の問題は重さです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The biggest problem</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the weight</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>最大の問題は</span> <span class='t-V'>です</span> <span class='t-C'>重さ</span>。",
                            "naturalTranslation": "最大の問題は重さです。",
                            "vocabulary": [
                                { "word": "weight", "meaning": "「重さ、重量」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 21,
                        "text": "Soil and water are very heavy, so the building must be strong enough to support them.",
                        "translation": "土と水は非常に重いため、建物はそれらを支えるのに十分強くなければなりません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are", "must be"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Soil and water</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very heavy</span><span class='tag'>C</span></span>, so <span class='chunk S-group'><span class='text'>the building</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>must be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>strong enough to support them</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>土と水は</span> <span class='t-V'>です</span> <span class='t-C'>とても重い</span>、だから <span class='t-S'>建物は</span> <span class='t-V'>なければなりません</span> <span class='t-C'>それらを支えるのに十分強く</span>。",
                            "naturalTranslation": "土と水は非常に重いため、建物はそれらを支えるのに十分強くなければなりません。",
                            "vocabulary": [
                                { "word": "strong", "meaning": "「強い、丈夫な」。" },
                                { "word": "support", "meaning": "「～を支える」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "enough to do", "explanation": "<b>enough to do</b>: 「～するのに十分な」。" }
                            ]
                        }
                    },
                    {
                        "id": 22,
                        "text": "Old buildings often need expensive work to strengthen their structures before a garden can be planted.",
                        "translation": "古い建物は、庭が作られる前に構造を強化するための高価な工事をしばしば必要とします。",
                        "grammarAnalysis": {
                            "mainVerbs": ["need"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Old buildings</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>often</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>need</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>expensive work to strengthen their structures</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>before a garden can be planted</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>古い建物は</span> <span class='t-M'>しばしば</span> <span class='t-V'>必要とします</span> <span class='t-O'>構造を強化するための高価な工事を</span> <span class='t-M'>庭が植えられる前に</span>。",
                            "naturalTranslation": "古い建物は、庭が作られる前に構造を強化するための高価な工事をしばしば必要とします。",
                            "vocabulary": [
                                { "word": "strengthen", "meaning": "「～を強化する、強くする」。" },
                                { "word": "structure", "meaning": "「構造」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 23,
                        "text": "Also, taking care of the plants requires time and effort.",
                        "translation": "また、植物の世話をすることには時間と労力が必要です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["requires"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>taking care of the plants</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>requires</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>time and effort</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>植物の世話をすることは</span> <span class='t-V'>必要とします</span> <span class='t-O'>時間と労力を</span>。",
                            "naturalTranslation": "また、植物の世話をすることには時間と労力が必要です。",
                            "vocabulary": [
                                { "word": "take care of", "meaning": "「～の世話をする」。" },
                                { "word": "effort", "meaning": "「努力、労力」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "taking care of", "explanation": "<b>taking care of</b>: 動名詞（主語）。" }
                            ]
                        }
                    },
                    {
                        "id": 24,
                        "text": "Despite these difficulties, green roofs are becoming an essential part of future city planning.",
                        "translation": "これらの困難にもかかわらず、屋上緑化は将来の都市計画の不可欠な部分になりつつあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are becoming"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Despite these difficulties</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>green roofs</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are becoming</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an essential part of future city planning</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>これらの困難にもかかわらず、</span> <span class='t-S'>緑の屋根は</span> <span class='t-V'>なりつつあります</span> <span class='t-C'>将来の都市計画の不可欠な部分に</span>。",
                            "naturalTranslation": "これらの困難にもかかわらず、屋上緑化は将来の都市計画の不可欠な部分になりつつあります。",
                            "vocabulary": [
                                { "word": "Despite", "meaning": "「～にもかかわらず」。" },
                                { "word": "essential", "meaning": "「不可欠な、必須の」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "Why do cities often become hotter than the countryside?",
                "textTranslation": "なぜ都市はしばしば田舎よりも暑くなるのですか？",
                "choices": [
                    { "id": 1, "text": "Because there are too many people living in small apartments.", "translation": "なぜなら、小さなアパートに住む人が多すぎるから。", "isCorrect": false },
                    { "id": 2, "text": "Because concrete and asphalt absorb heat from the sun.", "translation": "なぜなら、コンクリートとアスファルトが太陽からの熱を吸収するから。", "isCorrect": true, "highlight": "concrete and asphalt absorb heat from the sun" },
                    { "id": 3, "text": "Because the countryside has more factories than cities.", "translation": "なぜなら、田舎には都市よりも多くの工場があるから。", "isCorrect": false },
                    { "id": 4, "text": "Because people in cities use too much hot water.", "translation": "なぜなら、都市の人々はお湯を使いすぎるから。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、都市が暑くなる原因（Because...）を確認しましょう。",
                    "targetSentenceId": 2,
                    "highlightWord": "absorb",
                    "highlightWordSentenceId": 2
                },
                "keywords": ["hotter", "cities", "sun"],
                "keywordExplanations": { "absorb": "吸収する" },
                "keywordMatches": [
                    { "sentenceId": 2, "text": "Because concrete and asphalt absorb heat from the sun", "keyword": "concrete and asphalt absorb heat" }
                ],
                "choiceAdvice": "1: 人口密度の話ではありません。 2: 本文の 'Because concrete and asphalt absorb heat' と一致します。 3: 工場の話ではありません。 4: お湯の話ではありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 2): 「Because concrete and asphalt absorb heat from the sun, cities often become much hotter than the surrounding countryside.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 2,
                "text": "How is a green roof different from a regular balcony garden?",
                "textTranslation": "緑の屋根は通常のバルコニーの庭とどう違いますか？",
                "choices": [
                    { "id": 1, "text": "It covers the entire roof with soil and plants.", "translation": "それは屋根全体を土と植物で覆う。", "isCorrect": true, "highlight": "covering the whole roof with a special layer of soil" },
                    { "id": 2, "text": "It uses only plastic plants that do not need water.", "translation": "それは水を必要としないプラスチックの植物だけを使う。", "isCorrect": false },
                    { "id": 3, "text": "It is designed only for people to have parties.", "translation": "それは人々がパーティーをするためだけに設計されている。", "isCorrect": false },
                    { "id": 4, "text": "It is usually built inside the building, not outside.", "translation": "それはたいてい建物の内側に作られ、外側ではない。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、緑の屋根の定義（involves covering...）を確認しましょう。",
                    "targetSentenceId": 8,
                    "highlightWord": "whole roof",
                    "highlightWordSentenceId": 8
                },
                "keywords": ["different", "balcony", "whole"],
                "keywordExplanations": { "entire": "全体の（wholeと同義）" },
                "keywordMatches": [
                    { "sentenceId": 8, "text": "covering the whole roof with a special layer of soil and plants", "keyword": "covers the entire roof with soil and plants" }
                ],
                "choiceAdvice": "1: 本文の 'covering the whole roof' と一致します。 2: 本物の植物を使います。 3: パーティー用とは書かれていません。 4: 屋上（tops of buildings）に作られます。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 7 & 8): 「...different from simply putting a few potted plants... It involves covering the whole roof...」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of green roofs is that",
                "textTranslation": "屋上緑化の肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "they allow people to swim in the water stored on the roof.", "translation": "それらは人々が屋根に貯められた水で泳ぐことを可能にする。", "isCorrect": false },
                    { "id": 2, "text": "they reflect the sunlight to make the city brighter.", "translation": "それらは都市を明るくするために日光を反射する。", "isCorrect": false },
                    { "id": 3, "text": "they help reduce the amount of energy used for air conditioning.", "translation": "それらはエアコンに使われるエネルギー量を減らすのに役立つ。", "isCorrect": true, "highlight": "use less air conditioning, which saves energy" },
                    { "id": 4, "text": "they are cheaper to build than traditional concrete roofs.", "translation": "それらは伝統的なコンクリートの屋根よりも安く作れる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、夏場の利点（keep buildings cool）と省エネ効果を確認しましょう。",
                    "targetSentenceId": 15,
                    "highlightWord": "energy",
                    "highlightWordSentenceId": 15
                },
                "keywords": ["energy", "air conditioning", "reduce"],
                "keywordExplanations": { "reduce": "減らす（use less）" },
                "keywordMatches": [
                    { "sentenceId": 15, "text": "use less air conditioning, which saves energy", "keyword": "reduce the amount of energy used for air conditioning" }
                ],
                "choiceAdvice": "1: プールではありません。 2: 熱を遮断（blocking）します。 3: 本文の 'use less air conditioning ... saves energy' と一致します。 4: むしろコストがかかる（expensive work）可能性があります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 15): 「This means people inside use less air conditioning, which saves energy and money.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges regarding green roofs?",
                "textTranslation": "屋上緑化に関する課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "The plants often attract dangerous animals to the city.", "translation": "植物がしばしば危険な動物を都市に引き寄せる。", "isCorrect": false },
                    { "id": 2, "text": "The weight of the soil and water can be too heavy for some buildings.", "translation": "土と水の重さが、いくつかの建物にとっては重すぎることがある。", "isCorrect": true, "highlight": "The biggest problem is the weight. Soil and water are very heavy" },
                    { "id": 3, "text": "Most people in the city do not like the look of green plants.", "translation": "都市のほとんどの人々は緑の植物の見た目が好きではない。", "isCorrect": false },
                    { "id": 4, "text": "It is illegal to plant trees on buildings in most countries.", "translation": "ほとんどの国で建物に木を植えることは違法である。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、最大の問題（biggest problem）を確認しましょう。",
                    "targetSentenceId": 20,
                    "highlightWord": "weight",
                    "highlightWordSentenceId": 20
                },
                "keywords": ["challenge", "weight", "heavy"],
                "keywordExplanations": { "heavy": "重い" },
                "keywordMatches": [
                    { "sentenceId": 20, "text": "The biggest problem is the weight", "keyword": "The weight ... can be too heavy" },
                    { "sentenceId": 21, "text": "Soil and water are very heavy", "keyword": "Soil and water ... heavy" }
                ],
                "choiceAdvice": "1: 動物についての記述はありません。 2: 本文の 'problem is the weight ... Soil and water are very heavy' と一致します。 3: 人々の好みについては書かれていません。 4: むしろ義務付ける法律ができつつあります（require ... to have green roofs）。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20 & 21): 「The biggest problem is the weight. Soil and water are very heavy...」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Green roofs are beautiful, but they have no practical benefits.", "translation": "緑の屋根は美しいが、実用的な利点はない。", "isCorrect": false },
                    { "id": 2, "text": "Governments are trying to stop the construction of green roofs.", "translation": "政府は屋上緑化の建設を止めようとしている。", "isCorrect": false },
                    { "id": 3, "text": "Green roofs can solve environmental problems, but they cost money.", "translation": "屋上緑化は環境問題を解決できるが、お金がかかる。", "isCorrect": true, "highlight": "need expensive work ... essential part of future city planning" },
                    { "id": 4, "text": "All buildings in the world already have green roofs today.", "translation": "今日、世界の全ての建物はすでに緑の屋根を持っている。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終段落の、コスト（expensive work）と将来性（essential part）についての記述を総合して考えましょう。",
                    "targetSentenceId": 24,
                    "highlightWord": "essential",
                    "highlightWordSentenceId": 24
                },
                "keywords": ["environmental", "cost", "learn"],
                "keywordExplanations": { "practical benefits": "実用的な利点" },
                "keywordMatches": [
                    { "sentenceId": 22, "text": "need expensive work", "keyword": "cost money" },
                    { "sentenceId": 18, "text": "helps prevent floods", "keyword": "solve environmental problems" }
                ],
                "choiceAdvice": "1: 省エネや洪水防止などの実用的な利点（benefits）があります。 2: むしろ推進しています（making laws that require）。 3: 環境への利点と、コストがかかる（expensive work）という課題の両方に触れています。 4: これから普及していく段階です。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 22 & 24): 「Old buildings often need expensive work... green roofs are becoming an essential part...」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[Green Roofs] (オリジナル)</div> 本文は、都市のヒートアイランド対策として普及している「屋上緑化（Green Roofs）」についての説明です。",
            "points": [
                { "label": "1. The Problem & Solution (第1段落)", "text": "コンクリートが熱を吸収し、都市が暑くなる「ヒートアイランド現象」が問題です。その解決策として、建物の屋上に植物を植える屋上緑化が世界中に広まっています。" },
                { "label": "2. How it works (第2段落)", "text": "単なる鉢植えではなく、屋根全体を土と植物で覆います。水漏れを防ぐ防水素材や、風や太陽に強い植物が選ばれます。" },
                { "label": "3. Benefits (第3段落)", "text": "土と植物が熱を遮断するため、夏でも建物が涼しく保たれ、エアコン代の節約になります。また、雨水を吸収してゆっくり流すため、都市の洪水を防ぐ効果もあります。" },
                { "label": "4. Challenges (第4段落)", "text": "最大の課題は「重さ」です。土や水は重いため、建物には強度が求められます。古い建物では補強工事にコストがかかりますが、将来の都市計画には不可欠です。" }
            ]
        }
    },
    {
        "id": "2026-3-value-of-handwriting",
        "grade": "準2級プラス",
        "title": "The Value of Handwriting",
        "subTitle": "問題13",
        "genre": "文化 / 教育",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Handwriting+vs+Typing",
            "question": "https://placehold.co/600x400?text=Pen+and+Paper"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "Writing by hand has been a major part of human culture for thousands of years.",
                        "translation": "手書きは、数千年にわたり人間文化の主要な部分であり続けています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has been"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Writing by hand</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has been</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a major part of human culture</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for thousands of years</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>手で書くことは</span> <span class='t-V'>ずっとそうです</span> <span class='t-C'>人間文化の主要な部分</span> <span class='t-M'>数千年の間</span>。",
                            "naturalTranslation": "手書きは、数千年にわたり人間文化の主要な部分であり続けています。",
                            "vocabulary": [
                                { "word": "major", "meaning": "「主要な」。" },
                                { "word": "culture", "meaning": "「文化」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "has been", "explanation": "<b>has been</b>: 現在完了形（継続）。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "From ancient letters to daily notes, pen and paper were essential tools for communication.",
                        "translation": "古代の手紙から日々のメモに至るまで、ペンと紙はコミュニケーションに不可欠な道具でした。",
                        "grammarAnalysis": {
                            "mainVerbs": ["were"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>From ancient letters to daily notes</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>pen and paper</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>essential tools for communication</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>古代の手紙から日々のメモまで、</span> <span class='t-S'>ペンと紙は</span> <span class='t-V'>でした</span> <span class='t-C'>コミュニケーションのための不可欠な道具</span>。",
                            "naturalTranslation": "古代の手紙から日々のメモに至るまで、ペンと紙はコミュニケーションに不可欠な道具でした。",
                            "vocabulary": [
                                { "word": "ancient", "meaning": "「古代の」。" },
                                { "word": "essential", "meaning": "「不可欠な、必須の」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 3,
                        "text": "However, with the rapid development of technology, this traditional habit is disappearing.",
                        "translation": "しかし、テクノロジーの急速な発展に伴い、この伝統的な習慣は消えつつあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is disappearing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>with the rapid development of technology</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this traditional habit</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is disappearing</span><span class='tag'>V</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-M'>技術の急速な発展と共に、</span> <span class='t-S'>この伝統的な習慣は</span> <span class='t-V'>消えつつあります</span>。",
                            "naturalTranslation": "しかし、テクノロジーの急速な発展に伴い、この伝統的な習慣は消えつつあります。",
                            "vocabulary": [
                                { "word": "rapid", "meaning": "「急速な」。" },
                                { "word": "habit", "meaning": "「習慣」。" },
                                { "word": "disappear", "meaning": "「消える」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 4,
                        "text": "Today, most people use smartphones or computers to send messages and write reports.",
                        "translation": "今日、ほとんどの人々はメッセージを送ったりレポートを書いたりするのにスマートフォンやコンピューターを使います。",
                        "grammarAnalysis": {
                            "mainVerbs": ["use"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Today</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>most people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>smartphones or computers</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to send messages and write reports</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>今日、</span> <span class='t-S'>ほとんどの人々は</span> <span class='t-V'>使います</span> <span class='t-O'>スマホやコンピューターを</span> <span class='t-M'>メッセージを送ったりレポートを書くために</span>。",
                            "naturalTranslation": "今日、ほとんどの人々はメッセージを送ったりレポートを書いたりするのにスマートフォンやコンピューターを使います。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "to send", "explanation": "<b>to send</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "text": "In many schools and workplaces, typing has become more common than writing by hand.",
                        "translation": "多くの学校や職場で、タイピングは手書きよりも一般的になっています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has become"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In many schools and workplaces</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>typing</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has become</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>more common than writing by hand</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>多くの学校や職場で、</span> <span class='t-S'>タイピングは</span> <span class='t-V'>なりました</span> <span class='t-C'>手書きよりも一般的（普通）に</span>。",
                            "naturalTranslation": "多くの学校や職場で、タイピングは手書きよりも一般的になっています。",
                            "vocabulary": [
                                { "word": "common", "meaning": "「一般的な、普通の」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 6,
                        "text": "There are clear reasons why digital writing is so popular.",
                        "translation": "デジタルライティングがこれほど人気があるのには明確な理由があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>clear reasons why digital writing is so popular</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>明確な理由が（なぜデジタルで書くことがそんなに人気なのか）</span>。",
                            "naturalTranslation": "デジタルライティングがこれほど人気があるのには明確な理由があります。",
                            "vocabulary": [
                                { "word": "clear", "meaning": "「明確な、はっきりした」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "reasons why", "explanation": "<b>why</b>: 関係副詞。reasonsを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 7,
                        "text": "The biggest reason is speed.",
                        "translation": "最大の理由はスピードです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The biggest reason</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>speed</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>最大の理由は</span> <span class='t-V'>です</span> <span class='t-C'>スピード（速さ）</span>。",
                            "naturalTranslation": "最大の理由はスピードです。",
                            "vocabulary": [],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 8,
                        "text": "Typing on a keyboard is usually much faster than moving a pen on paper.",
                        "translation": "キーボードでのタイピングは通常、紙の上でペンを動かすよりもはるかに速いです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Typing on a keyboard</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>usually</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>much faster than moving a pen on paper</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>キーボードでタイプすることは</span> <span class='t-V'>です</span> <span class='t-M'>たいてい</span> <span class='t-C'>紙の上でペンを動かすよりもずっと速い</span>。",
                            "naturalTranslation": "キーボードでのタイピングは通常、紙の上でペンを動かすよりもはるかに速いです。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "Typing", "explanation": "<b>Typing</b>: 動名詞（主語）。" }
                            ]
                        }
                    },
                    {
                        "id": 9,
                        "text": "This helps people finish their work quickly.",
                        "translation": "これは人々が仕事を素早く終えるのを助けます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["helps"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>finish their work quickly</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>助けます</span> <span class='t-O'>人々が</span> <span class='t-C'>彼らの仕事を素早く終えるのを</span>。",
                            "naturalTranslation": "これは人々が仕事を素早く終えるのを助けます。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "help O (to) do", "explanation": "<b>help O do</b>: 「Oが～するのを助ける」（原形不定詞）。" }
                            ]
                        }
                    },
                    {
                        "id": 10,
                        "text": "Also, computers have useful functions like \"spell check.\"",
                        "translation": "また、コンピューターには「スペルチェック」のような便利な機能があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>computers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>useful functions like \"spell check.\"</span><span class='tag'>O</span></span>",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>コンピューターは</span> <span class='t-V'>持っています</span> <span class='t-O'>便利な機能を（「スペルチェック」のような）</span>。",
                            "naturalTranslation": "また、コンピューターには「スペルチェック」のような便利な機能があります。",
                            "vocabulary": [
                                { "word": "function", "meaning": "「機能」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 11,
                        "text": "If a person makes a mistake, the computer fixes it automatically.",
                        "translation": "もし人が間違いをしても、コンピューターが自動的にそれを修正します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["makes", "fixes"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>If a person makes a mistake</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the computer</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>fixes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>automatically</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>もし人が間違いをしたら、</span> <span class='t-S'>コンピューターは</span> <span class='t-V'>直します</span> <span class='t-O'>それを</span> <span class='t-M'>自動的に</span>。",
                            "naturalTranslation": "もし人が間違いをしても、コンピューターが自動的にそれを修正します。",
                            "vocabulary": [
                                { "word": "fix", "meaning": "「～を直す、修正する」。" },
                                { "word": "automatically", "meaning": "「自動的に」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 12,
                        "text": "This makes writing easier and less stressful for everyone.",
                        "translation": "これは誰にとっても書くことをより簡単にし、ストレスを少なくします。",
                        "grammarAnalysis": {
                            "mainVerbs": ["makes"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>makes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>writing</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>easier and less stressful</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for everyone</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>します</span> <span class='t-O'>書くことを</span> <span class='t-C'>より簡単に、そしてストレスをより少なく</span> <span class='t-M'>皆にとって</span>。",
                            "naturalTranslation": "これは誰にとっても書くことをより簡単にし、ストレスを少なくします。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "make O C", "explanation": "<b>make O C</b>: 「OをCにする」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 13,
                        "text": "Despite these advantages of technology, experts say that handwriting is still very important.",
                        "translation": "テクノロジーのこれらの利点にもかかわらず、専門家は手書きは依然として非常に重要だと言います。",
                        "grammarAnalysis": {
                            "mainVerbs": ["say"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Despite these advantages of technology</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>experts</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>say</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that handwriting is still very important</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>技術のこれらの利点にもかかわらず、</span> <span class='t-S'>専門家は</span> <span class='t-V'>言います</span> <span class='t-O'>手書きはまだとても重要であると</span>。",
                            "naturalTranslation": "テクノロジーのこれらの利点にもかかわらず、専門家は手書きは依然として非常に重要だと言います。",
                            "vocabulary": [
                                { "word": "Despite", "meaning": "「～にもかかわらず」。" },
                                { "word": "advantage", "meaning": "「利点」。" },
                                { "word": "expert", "meaning": "「専門家」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "that ...", "explanation": "<b>that</b>: 接続詞。that以下が目的語。" }
                            ]
                        }
                    },
                    {
                        "id": 14,
                        "text": "According to recent research, writing by hand stimulates the brain more than typing does.",
                        "translation": "最近の研究によると、手書きはタイピングよりも脳を刺激します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["stimulates"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>According to recent research</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>writing by hand</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>stimulates</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the brain</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>more than typing does</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>最近の研究によると、</span> <span class='t-S'>手書きは</span> <span class='t-V'>刺激します</span> <span class='t-O'>脳を</span> <span class='t-M'>タイピングがするよりも多く</span>。",
                            "naturalTranslation": "最近の研究によると、手書きはタイピングよりも脳を刺激します。",
                            "vocabulary": [
                                { "word": "research", "meaning": "「研究」。" },
                                { "word": "stimulate", "meaning": "「～を刺激する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "than typing does", "explanation": "<b>does</b>: 代動詞（stimulatesの代わり）。" }
                            ]
                        }
                    },
                    {
                        "id": 15,
                        "text": "When students take notes by hand, they have to think about the information and organize it.",
                        "translation": "学生が手書きでノートを取る時、彼らは情報について考え、それを整理しなければなりません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have to think", "organize"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>When students take notes by hand</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have to think</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>about the information</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>organize</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>学生が手書きでノートを取る時、</span> <span class='t-S'>彼らは</span> <span class='t-V'>考えなければなりません</span> <span class='t-M'>情報について</span>、そして <span class='t-V'>整理する（必要があります）</span> <span class='t-O'>それを</span>。",
                            "naturalTranslation": "学生が手書きでノートを取る時、彼らは情報について考え、それを整理しなければなりません。",
                            "vocabulary": [
                                { "word": "organize", "meaning": "「～を整理する、まとめる」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 16,
                        "text": "This process helps them understand and remember things better.",
                        "translation": "このプロセスは、彼らが物事をより良く理解し、記憶するのを助けます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["helps"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This process</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>understand and remember things better</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>この過程は</span> <span class='t-V'>助けます</span> <span class='t-O'>彼らが</span> <span class='t-C'>物事をより良く理解し記憶するのを</span>。",
                            "naturalTranslation": "このプロセスは、彼らが物事をより良く理解し、記憶するのを助けます。",
                            "vocabulary": [
                                { "word": "process", "meaning": "「過程、プロセス」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 17,
                        "text": "In contrast, typing is often just copying words without thinking deeply.",
                        "translation": "対照的に、タイピングはしばしば深く考えずに単語をコピーするだけになりがちです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In contrast</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>typing</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>often</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>just copying words without thinking deeply</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>対照的に、</span> <span class='t-S'>タイピングは</span> <span class='t-V'>です</span> <span class='t-M'>しばしば</span> <span class='t-C'>深く考えずに単語を書き写すこと（だけ）</span>。",
                            "naturalTranslation": "対照的に、タイピングはしばしば深く考えずに単語をコピーするだけになりがちです。",
                            "vocabulary": [
                                { "word": "In contrast", "meaning": "「対照的に」。" },
                                { "word": "copy", "meaning": "「写す、コピーする」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 18,
                        "text": "However, there is a concern about the future of handwriting.",
                        "translation": "しかし、手書きの未来については懸念があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>a concern about the future of handwriting</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-V'>あります</span> <span class='t-S'>手書きの未来についての懸念が</span>。",
                            "naturalTranslation": "しかし、手書きの未来については懸念があります。",
                            "vocabulary": [
                                { "word": "concern", "meaning": "「懸念、心配」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 19,
                        "text": "As schools focus more on digital skills, some children are losing the ability to write neatly.",
                        "translation": "学校がデジタルスキルにより焦点を当てるにつれて、一部の子供たちはきれいに字を書く能力を失いつつあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["focus", "are losing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>As schools focus more on digital skills</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some children</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are losing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the ability to write neatly</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>学校がデジタルスキルにもっと焦点を当てるにつれて、</span> <span class='t-S'>一部の子供たちは</span> <span class='t-V'>失いつつあります</span> <span class='t-O'>きれいに書く能力を</span>。",
                            "naturalTranslation": "学校がデジタルスキルにより焦点を当てるにつれて、一部の子供たちはきれいに字を書く能力を失いつつあります。",
                            "vocabulary": [
                                { "word": "ability", "meaning": "「能力」。" },
                                { "word": "neatly", "meaning": "「きれいに、きちんとして」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "As", "explanation": "<b>As</b>: 接続詞。「～するにつれて」。" },
                                { "phrase": "ability to write", "explanation": "<b>to write</b>: 不定詞の形容詞的用法。「書くための能力」。" }
                            ]
                        }
                    },
                    {
                        "id": 20,
                        "text": "In some countries, schools have even stopped teaching cursive writing.",
                        "translation": "いくつかの国では、学校が筆記体を教えるのをやめてしまいました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have stopped"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In some countries</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>schools</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have even stopped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>teaching cursive writing</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>いくつかの国では、</span> <span class='t-S'>学校は</span> <span class='t-V'>やめてしまいました（さえ）</span> <span class='t-O'>筆記体を教えることを</span>。",
                            "naturalTranslation": "いくつかの国では、学校が筆記体を教えるのをやめてしまいました。",
                            "vocabulary": [
                                { "word": "cursive", "meaning": "「筆記体の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "stop doing", "explanation": "<b>stop doing</b>: 「～するのをやめる」。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "If this trend continues, future generations might not be able to read old handwritten letters or historical documents.",
                        "translation": "もしこの傾向が続けば、将来の世代は古い手書きの手紙や歴史的な文書を読めなくなるかもしれません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["continues", "might not be able to read"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>If this trend continues</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>future generations</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might not be able to read</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>old handwritten letters or historical documents</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>もしこの傾向が続けば、</span> <span class='t-S'>未来の世代は</span> <span class='t-V'>読めないかもしれません</span> <span class='t-O'>古い手書きの手紙や歴史的文書を</span>。",
                            "naturalTranslation": "もしこの傾向が続けば、将来の世代は古い手書きの手紙や歴史的な文書を読めなくなるかもしれません。",
                            "vocabulary": [
                                { "word": "generation", "meaning": "「世代」。" },
                                { "word": "document", "meaning": "「文書」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "be able to", "explanation": "<b>be able to</b>: 「～できる」。" }
                            ]
                        }
                    },
                    {
                        "id": 22,
                        "text": "While technology is useful, it is important to keep the culture of handwriting alive for our brains and our history.",
                        "translation": "テクノロジーは便利ですが、私たちの脳と歴史のために手書きの文化を生かし続けることが重要です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is", "is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>While technology is useful</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to keep the culture of handwriting alive for our brains and our history</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>技術は便利だけれども、</span> <span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>重要な</span> <span class='t-S'>手書きの文化を生かし続けることは（私たちの脳と歴史のために）</span>。",
                            "naturalTranslation": "テクノロジーは便利ですが、私たちの脳と歴史のために手書きの文化を生かし続けることが重要です。",
                            "vocabulary": [
                                { "word": "alive", "meaning": "「生きている、存続している」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "While", "explanation": "<b>While</b>: 接頭辞。「～だけれども」（譲歩）。" },
                                { "phrase": "It is ... to do", "explanation": "<b>It is ... to do</b>: 形式主語構文。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is happening to the culture of writing today?",
                "textTranslation": "今日の「書く」文化に何が起きていますか？",
                "choices": [
                    { "id": 1, "text": "People are writing more letters by hand than in the past.", "translation": "人々は過去よりも多くの手紙を手書きで書いている。", "isCorrect": false },
                    { "id": 2, "text": "Pen and paper are becoming more expensive to buy.", "translation": "ペンと紙は買うのにより高くなっている。", "isCorrect": false },
                    { "id": 3, "text": "Traditional handwriting is disappearing because of technology.", "translation": "伝統的な手書きがテクノロジーのために消えつつある。", "isCorrect": true, "highlight": "traditional habit is disappearing" },
                    { "id": 4, "text": "Schools are banning the use of computers in classrooms.", "translation": "学校は教室でのコンピューターの使用を禁止している。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、伝統的な習慣（traditional habit）がどうなっているかを確認しましょう。",
                    "targetSentenceId": 3,
                    "highlightWord": "disappearing",
                    "highlightWordSentenceId": 3
                },
                "keywords": ["culture", "disappearing", "technology"],
                "keywordExplanations": { "habit": "習慣" },
                "keywordMatches": [
                    { "sentenceId": 3, "text": "traditional habit is disappearing", "keyword": "Traditional handwriting is disappearing" }
                ],
                "choiceAdvice": "1: 逆です。消えつつある（disappearing）とあります。 2: 価格についての記述はありません。 3: 本文の 'traditional habit is disappearing' と一致します。 4: むしろタイピングが一般的になっている（typing has become more common）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 3): 「However, with the rapid development of technology, this traditional habit is disappearing.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 2,
                "text": "Why do many people prefer typing over writing by hand?",
                "textTranslation": "なぜ多くの人は手書きよりタイピングを好むのですか？",
                "choices": [
                    { "id": 1, "text": "Because typing helps them finish their tasks faster.", "translation": "なぜなら、タイピングは彼らがタスクをより速く終えるのを助けるから。", "isCorrect": true, "highlight": "biggest reason is speed ... finish their work quickly" },
                    { "id": 2, "text": "Because computers are lighter than notebooks.", "translation": "なぜなら、コンピューターはノートよりも軽いから。", "isCorrect": false },
                    { "id": 3, "text": "Because they want to improve their handwriting skills.", "translation": "なぜなら、彼らは手書きのスキルを向上させたいから。", "isCorrect": false },
                    { "id": 4, "text": "Because they do not have enough pens and paper.", "translation": "なぜなら、彼らは十分なペンと紙を持っていないから。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、最大の理由（biggest reason）を確認しましょう。",
                    "targetSentenceId": 7,
                    "highlightWord": "speed",
                    "highlightWordSentenceId": 7
                },
                "keywords": ["prefer", "typing", "speed"],
                "keywordExplanations": { "prefer": "好む（popularの理由）" },
                "keywordMatches": [
                    { "sentenceId": 7, "text": "biggest reason is speed", "keyword": "finish their tasks faster" },
                    { "sentenceId": 9, "text": "finish their work quickly", "keyword": "finish their tasks faster" }
                ],
                "choiceAdvice": "1: 本文の 'speed' や 'finish their work quickly' と一致します。 2: 重さについての記述はありません。 3: 手書きスキルを上げるなら手書きをするはずです。 4: そのような記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 7 & 9): 「The biggest reason is speed. ... This helps people finish their work quickly.」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of handwriting is that",
                "textTranslation": "手書きの肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "it allows people to send messages instantly to friends.", "translation": "それは人々が友人に瞬時にメッセージを送ることを可能にする。", "isCorrect": false },
                    { "id": 2, "text": "it helps students remember information better than typing.", "translation": "それはタイピングよりも学生が情報を記憶するのを助ける。", "isCorrect": true, "highlight": "stimulates the brain ... remember things better" },
                    { "id": 3, "text": "it automatically corrects spelling mistakes for students.", "translation": "それは学生のために自動的にスペルミスを修正する。", "isCorrect": false },
                    { "id": 4, "text": "it is the best way to copy words without thinking.", "translation": "それは考えずに単語を書き写す最良の方法である。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、手書きのプロセスが学生にどう役立つか（helps them...）を確認しましょう。",
                    "targetSentenceId": 16,
                    "highlightWord": "remember",
                    "highlightWordSentenceId": 16
                },
                "keywords": ["handwriting", "remember", "brain"],
                "keywordExplanations": { "stimulate": "刺激する" },
                "keywordMatches": [
                    { "sentenceId": 16, "text": "remember things better", "keyword": "remember information better" }
                ],
                "choiceAdvice": "1: それはデジタルの利点です。 2: 本文の 'remember things better' と一致します。 3: それはコンピューターの機能（spell check）です。 4: タイピングが 'copying words without thinking' になりがちだと書かれています。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 16): 「This process helps them understand and remember things better.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges regarding the decline of handwriting?",
                "textTranslation": "手書きの衰退に関する課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "Computers will become too difficult for children to use.", "translation": "コンピューターは子供が使うには難しくなりすぎるだろう。", "isCorrect": false },
                    { "id": 2, "text": "People will spend too much money on expensive pens.", "translation": "人々は高いペンにあまりにも多くのお金を使うようになるだろう。", "isCorrect": false },
                    { "id": 3, "text": "Future generations might not be able to read historical documents.", "translation": "将来の世代が歴史的な文書を読めなくなるかもしれない。", "isCorrect": true, "highlight": "might not be able to read ... historical documents" },
                    { "id": 4, "text": "Teachers will have to work longer hours to teach typing.", "translation": "教師はタイピングを教えるためにより長く働かなければならなくなる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、将来の世代（future generations）に関する懸念を確認しましょう。",
                    "targetSentenceId": 21,
                    "highlightWord": "read",
                    "highlightWordSentenceId": 21
                },
                "keywords": ["challenge", "future", "read"],
                "keywordExplanations": { "historical document": "歴史的文書" },
                "keywordMatches": [
                    { "sentenceId": 21, "text": "might not be able to read ... historical documents", "keyword": "not be able to read historical documents" }
                ],
                "choiceAdvice": "1: デジタルスキルに焦点を当てているので使えるようになります。 2: 費用の話ではありません。 3: 本文の 'not be able to read ... historical documents' と一致します。 4: 教師の労働時間については書かれていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 21): 「If this trend continues, future generations might not be able to read old handwritten letters or historical documents.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "We should stop using computers and return to using only paper.", "translation": "私たちはコンピューターの使用をやめて紙だけを使う生活に戻るべきだ。", "isCorrect": false },
                    { "id": 2, "text": "Typing is bad for the brain and should be avoided in schools.", "translation": "タイピングは脳に悪く、学校では避けられるべきだ。", "isCorrect": false },
                    { "id": 3, "text": "Handwriting has unique benefits that technology cannot replace.", "translation": "手書きにはテクノロジーが取って代われない独自の利点がある。", "isCorrect": true, "highlight": "handwriting is still very important ... keep the culture ... alive" },
                    { "id": 4, "text": "Most experts believe that handwriting is a waste of time.", "translation": "ほとんどの専門家は手書きは時間の無駄だと信じている。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終文で、テクノロジーの有用性を認めつつ、手書きについてどう述べているか（important to keep...）を確認しましょう。",
                    "targetSentenceId": 22,
                    "highlightWord": "important",
                    "highlightWordSentenceId": 22
                },
                "keywords": ["learn", "benefits", "technology"],
                "keywordExplanations": { "replace": "取って代わる" },
                "keywordMatches": [
                    { "sentenceId": 13, "text": "handwriting is still very important", "keyword": "unique benefits" },
                    { "sentenceId": 22, "text": "keep the culture of handwriting alive", "keyword": "technology cannot replace" }
                ],
                "choiceAdvice": "1: テクノロジーも有用（useful）と認めています。極端な意見は書かれていません。 2: 避けろとは言っていません。バランスが重要という趣旨です。 3: 脳への刺激や歴史の継承など、手書き独自の重要性（benefits）を強調しています。 4: 専門家は重要だと言っています（experts say ... important）。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 22): 「While technology is useful, it is important to keep the culture of handwriting alive for our brains and our history.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[The Value of Handwriting] (オリジナル)</div> 本文は、デジタル化によって失われつつある「手書き文化」の重要性についての説明です。",
            "points": [
                { "label": "1. The Change (第1段落)", "text": "何千年もの間、ペンと紙は不可欠でしたが、今はスマホやPCが主流となり、手書きの習慣が消えつつあります。" },
                { "label": "2. Why Digital? (第2段落)", "text": "デジタルの最大の利点は「速さ」です。また、間違いを自動修正してくれる機能もあり、簡単でストレスがありません。" },
                { "label": "3. Benefits of Handwriting (第3段落)", "text": "しかし、手書きは脳を刺激します。研究によると、手でノートを取るプロセスは情報を整理し、理解と記憶を深めるのに役立ちます。タイピングは単なる書き写しになりがちです。" },
                { "label": "4. Challenges (第4段落)", "text": "学校がデジタル教育を重視する中で、子供たちが字を書けなくなったり、昔の文書（筆記体など）を読めなくなったりする懸念があります。脳と歴史のために手書き文化を守ることが重要です。" }
            ]
        }
    },
    {
        "id": "2026-4-changing-movie-culture",
        "grade": "準2級プラス",
        "title": "The Changing Movie Culture",
        "subTitle": "問題14",
        "genre": "文化 / 娯楽",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Cinema+vs+Streaming",
            "question": "https://placehold.co/600x400?text=Movie+Experience"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "Watching movies has been a favorite hobby for people around the world for over a century.",
                        "translation": "映画を見ることは、1世紀以上にわたり世界中の人々にとってお気に入りの趣味であり続けています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["has been"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Watching movies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has been</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a favorite hobby</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for people around the world</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>for over a century</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>映画を見ることは</span> <span class='t-V'>ずっとそうです</span> <span class='t-C'>お気に入りの趣味</span> <span class='t-M'>世界中の人々にとって</span> <span class='t-M'>一世紀以上にわたって</span>。",
                            "naturalTranslation": "映画を見ることは、1世紀以上にわたり世界中の人々にとってお気に入りの趣味であり続けています。",
                            "vocabulary": [
                                { "word": "hobby", "meaning": "「趣味」。" },
                                { "word": "century", "meaning": "「世紀、100年」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "Watching", "explanation": "<b>Watching</b>: 動名詞（主語）。" },
                                { "phrase": "has been", "explanation": "<b>has been</b>: 現在完了形（継続）。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "For a long time, the only way to see a new film was to visit a movie theater.",
                        "translation": "長い間、新しい映画を見る唯一の方法は映画館を訪れることでした。",
                        "grammarAnalysis": {
                            "mainVerbs": ["was"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>For a long time</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the only way to see a new film</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to visit a movie theater</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>長い間、</span> <span class='t-S'>新しい映画を見る唯一の方法は</span> <span class='t-V'>でした</span> <span class='t-C'>映画館を訪れること</span>。",
                            "naturalTranslation": "長い間、新しい映画を見る唯一の方法は映画館を訪れることでした。",
                            "vocabulary": [
                                { "word": "theater", "meaning": "「劇場、映画館」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "way to see", "explanation": "<b>to see</b>: 不定詞の形容詞的用法。" },
                                { "phrase": "to visit", "explanation": "<b>to visit</b>: 不定詞の名詞的用法（補語）。" }
                            ]
                        }
                    },
                    {
                        "id": 3,
                        "text": "People bought tickets, sat in dark rooms with strangers, and enjoyed stories on a big screen.",
                        "translation": "人々はチケットを買い、見知らぬ人と暗い部屋に座り、大きなスクリーンで物語を楽しみました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["bought", "sat", "enjoyed"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>bought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>tickets</span><span class='tag'>O</span></span>, <span class='chunk V-group'><span class='text'>sat</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>in dark rooms with strangers</span><span class='tag'>M</span></span>, and <span class='chunk V-group'><span class='text'>enjoyed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>stories</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>on a big screen</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>人々は</span> <span class='t-V'>買い</span> <span class='t-O'>チケットを</span>、 <span class='t-V'>座り</span> <span class='t-M'>暗い部屋で見知らぬ人と</span>、そして <span class='t-V'>楽しみました</span> <span class='t-O'>物語を</span> <span class='t-M'>大きなスクリーンで</span>。",
                            "naturalTranslation": "人々はチケットを買い、見知らぬ人と暗い部屋に座り、大きなスクリーンで物語を楽しみました。",
                            "vocabulary": [
                                { "word": "stranger", "meaning": "「見知らぬ人」。" },
                                { "word": "screen", "meaning": "「画面、スクリーン」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 4,
                        "text": "However, with the development of the internet, this traditional style of movie culture is changing dramatically.",
                        "translation": "しかし、インターネットの発展に伴い、この伝統的な映画文化のスタイルは劇的に変化しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is changing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>with the development of the internet</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this traditional style of movie culture</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is changing</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>dramatically</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-M'>インターネットの発展と共に、</span> <span class='t-S'>この伝統的な映画文化のスタイルは</span> <span class='t-V'>変化しています</span> <span class='t-M'>劇的に</span>。",
                            "naturalTranslation": "しかし、インターネットの発展に伴い、この伝統的な映画文化のスタイルは劇的に変化しています。",
                            "vocabulary": [
                                { "word": "development", "meaning": "「発展、開発」。" },
                                { "word": "traditional", "meaning": "「伝統的な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 5,
                        "text": "Today, more and more people are choosing to watch movies at home using streaming services.",
                        "translation": "今日、ますます多くの人々がストリーミングサービスを使って自宅で映画を見ることを選んでいます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are choosing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Today</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>more and more people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are choosing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to watch movies at home</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>using streaming services</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>今日、</span> <span class='t-S'>ますます多くの人々が</span> <span class='t-V'>選んでいます</span> <span class='t-O'>家で映画を見ることを</span> <span class='t-M'>ストリーミングサービスを使って</span>。",
                            "naturalTranslation": "今日、ますます多くの人々がストリーミングサービスを使って自宅で映画を見ることを選んでいます。",
                            "vocabulary": [
                                { "word": "choose", "meaning": "「選ぶ」。" },
                                { "word": "streaming service", "meaning": "「ストリーミングサービス（動画配信）」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "using", "explanation": "<b>using</b>: 分詞構文（手段）。「～を使って」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 6,
                        "text": "There are strong reasons why streaming services are becoming so popular.",
                        "translation": "ストリーミングサービスがこれほど人気になっているのには強力な理由があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>strong reasons why streaming services are becoming so popular</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>強い理由が（なぜストリーミングサービスがそんなに人気になっているのか）</span>。",
                            "naturalTranslation": "ストリーミングサービスがこれほど人気になっているのには強力な理由があります。",
                            "vocabulary": [
                                { "word": "reason", "meaning": "「理由」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "reasons why", "explanation": "<b>why</b>: 関係副詞。reasonsを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 7,
                        "text": "The biggest advantage is convenience.",
                        "translation": "最大の利点は利便性です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The biggest advantage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>convenience</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>最大の利点は</span> <span class='t-V'>です</span> <span class='t-C'>利便性（便利さ）</span>。",
                            "naturalTranslation": "最大の利点は利便性です。",
                            "vocabulary": [
                                { "word": "advantage", "meaning": "「利点」。" },
                                { "word": "convenience", "meaning": "「便利さ、利便性」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 8,
                        "text": "Users can watch their favorite movies anytime and anywhere, using smartphones, tablets, or computers.",
                        "translation": "ユーザーはスマートフォン、タブレット、あるいはコンピューターを使って、いつでもどこでもお気に入りの映画を見ることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can watch"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Users</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can watch</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their favorite movies</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>anytime and anywhere</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>using smartphones, tablets, or computers</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>ユーザーは</span> <span class='t-V'>見ることができます</span> <span class='t-O'>彼らのお気に入りの映画を</span> <span class='t-M'>いつでもどこでも</span>、 <span class='t-M'>スマホやタブレット、コンピューターを使って</span>。",
                            "naturalTranslation": "ユーザーはスマートフォン、タブレット、あるいはコンピューターを使って、いつでもどこでもお気に入りの映画を見ることができます。",
                            "vocabulary": [
                                { "word": "anytime", "meaning": "「いつでも」。" },
                                { "word": "anywhere", "meaning": "「どこでも」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "They can stop the movie to take a break and start it again later.",
                        "translation": "彼らは休憩を取るために映画を止め、後で再び始めることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can stop", "start"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can stop</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the movie</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to take a break</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>start</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>again later</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>止めることができ</span> <span class='t-O'>映画を</span> <span class='t-M'>休憩を取るために</span>、そして <span class='t-V'>始める（ことができます）</span> <span class='t-O'>それを</span> <span class='t-M'>また後で</span>。",
                            "naturalTranslation": "彼らは休憩を取るために映画を止め、後で再び始めることができます。",
                            "vocabulary": [
                                { "word": "take a break", "meaning": "「休憩する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 10,
                        "text": "Also, the cost is usually much lower.",
                        "translation": "また、費用も通常はるかに安いです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the cost</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>usually</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>much lower</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>また、</span> <span class='t-S'>費用は</span> <span class='t-V'>です</span> <span class='t-M'>たいてい</span> <span class='t-C'>ずっと低い（安い）</span>。",
                            "naturalTranslation": "また、費用も通常はるかに安いです。",
                            "vocabulary": [
                                { "word": "cost", "meaning": "「費用、コスト」。" },
                                { "word": "lower", "meaning": "「より低い」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 11,
                        "text": "Instead of paying for a ticket for every single movie, users pay a small monthly fee to watch as many films as they want.",
                        "translation": "映画一本ごとにチケット代を払う代わりに、ユーザーは好きなだけ映画を見るために少額の月額料金を支払います。",
                        "grammarAnalysis": {
                            "mainVerbs": ["pay"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Instead of paying for a ticket for every single movie</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>users</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>pay</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a small monthly fee</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to watch as many films as they want</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>全ての映画ごとにチケット代を払う代わりに、</span> <span class='t-S'>ユーザーは</span> <span class='t-V'>支払います</span> <span class='t-O'>少額の月額料金を</span> <span class='t-M'>彼らが望むだけ多くの映画を見るために</span>。",
                            "naturalTranslation": "映画一本ごとにチケット代を払う代わりに、ユーザーは好きなだけ映画を見るために少額の月額料金を支払います。",
                            "vocabulary": [
                                { "word": "Instead of", "meaning": "「～の代わりに」。" },
                                { "word": "fee", "meaning": "「料金」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "as many ... as", "explanation": "<b>as many ... as</b>: 「～と同じくらい多くの」。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 12,
                        "text": "Despite the rise of streaming, movie theaters still offer a unique experience that home viewing cannot match.",
                        "translation": "ストリーミングの台頭にもかかわらず、映画館は依然として自宅での鑑賞では太刀打ちできないユニークな体験を提供しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["offer"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Despite the rise of streaming</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>movie theaters</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>still</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>offer</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a unique experience that home viewing cannot match</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>ストリーミングの台頭にもかかわらず、</span> <span class='t-S'>映画館は</span> <span class='t-M'>まだ</span> <span class='t-V'>提供します</span> <span class='t-O'>ユニークな体験を（ホームビューイングが匹敵できない）</span>。",
                            "naturalTranslation": "ストリーミングの台頭にもかかわらず、映画館は依然として自宅での鑑賞では太刀打ちできないユニークな体験を提供しています。",
                            "vocabulary": [
                                { "word": "Despite", "meaning": "「～にもかかわらず」。" },
                                { "word": "unique", "meaning": "「独自の、ユニークな」。" },
                                { "word": "match", "meaning": "「～に匹敵する、対抗する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "experience that...", "explanation": "<b>that</b>: 関係代名詞。experienceを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 13,
                        "text": "The screens are huge, and the sound systems are powerful.",
                        "translation": "スクリーンは巨大で、音響システムは強力です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are", "are"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The screens</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>huge</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>the sound systems</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>powerful</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>スクリーンは</span> <span class='t-V'>です</span> <span class='t-C'>巨大</span>、そして <span class='t-S'>音響システムは</span> <span class='t-V'>です</span> <span class='t-C'>強力</span>。",
                            "naturalTranslation": "スクリーンは巨大で、音響システムは強力です。",
                            "vocabulary": [
                                { "word": "huge", "meaning": "「巨大な」。" },
                                { "word": "powerful", "meaning": "「強力な」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 14,
                        "text": "This allows the audience to feel like they are inside the movie.",
                        "translation": "これにより、観客はまるで映画の中にいるかのように感じることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["allows"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>allows</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the audience</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to feel like they are inside the movie</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>可能にします</span> <span class='t-O'>観客が</span> <span class='t-C'>まるで映画の中にいるように感じることを</span>。",
                            "naturalTranslation": "これにより、観客はまるで映画の中にいるかのように感じることができます。",
                            "vocabulary": [
                                { "word": "audience", "meaning": "「観客」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "allow O to do", "explanation": "<b>allow O to do</b>: 「Oが～するのを可能にする」。" }
                            ]
                        }
                    },
                    {
                        "id": 15,
                        "text": "In addition, going to the theater is a social event.",
                        "translation": "さらに、映画館に行くことは社交的なイベントです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In addition</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>going to the theater</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a social event</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>劇場に行くことは</span> <span class='t-V'>です</span> <span class='t-C'>社交的なイベント</span>。",
                            "naturalTranslation": "さらに、映画館に行くことは社交的なイベントです。",
                            "vocabulary": [
                                { "word": "social", "meaning": "「社交的な、社会の」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 16,
                        "text": "People enjoy laughing, crying, and feeling emotions together with other people.",
                        "translation": "人々は他の人々と一緒に笑ったり、泣いたり、感情を感じたりすることを楽しみます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["enjoy"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>enjoy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>laughing, crying, and feeling emotions</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>together with other people</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>人々は</span> <span class='t-V'>楽しみます</span> <span class='t-O'>笑ったり、泣いたり、感情を感じることを</span> <span class='t-M'>他の人々と一緒に</span>。",
                            "naturalTranslation": "人々は他の人々と一緒に笑ったり、泣いたり、感情を感じたりすることを楽しみます。",
                            "vocabulary": [
                                { "word": "emotion", "meaning": "「感情」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "enjoy doing", "explanation": "<b>enjoy doing</b>: 「～することを楽しむ」。" }
                            ]
                        }
                    },
                    {
                        "id": 17,
                        "text": "It is a special time to focus completely on the story without the distraction of smartphones.",
                        "translation": "それはスマートフォンの邪魔が入らずに、物語に完全に集中するための特別な時間です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a special time to focus completely on the story</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>without the distraction of smartphones</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>物語に完全に集中するための特別な時間</span> <span class='t-M'>スマホの邪魔なしで</span>。",
                            "naturalTranslation": "それはスマートフォンの邪魔が入らずに、物語に完全に集中するための特別な時間です。",
                            "vocabulary": [
                                { "word": "focus on", "meaning": "「～に集中する」。" },
                                { "word": "distraction", "meaning": "「気を散らすもの、邪魔」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "time to focus", "explanation": "<b>to focus</b>: 不定詞の形容詞的用法。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 18,
                        "text": "However, movie theaters are facing a difficult challenge today.",
                        "translation": "しかし、今日、映画館は困難な課題に直面しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are facing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>movie theaters</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are facing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a difficult challenge</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>today</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>映画館は</span> <span class='t-V'>直面しています</span> <span class='t-O'>困難な課題に</span> <span class='t-M'>今日</span>。",
                            "naturalTranslation": "しかし、今日、映画館は困難な課題に直面しています。",
                            "vocabulary": [
                                { "word": "face", "meaning": "「～に直面する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 19,
                        "text": "Because it is so easy to watch films at home, fewer people are going to the cinema.",
                        "translation": "自宅で映画を見るのが非常に簡単であるため、映画館に行く人が減っています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is", "are going"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Because it is so easy to watch films at home</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>fewer people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are going</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>to the cinema</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>家で映画を見ることがとても簡単なので、</span> <span class='t-S'>より少ない人々が</span> <span class='t-V'>行っています</span> <span class='t-M'>映画館に</span>。",
                            "naturalTranslation": "自宅で映画を見るのが非常に簡単であるため、映画館に行く人が減っています。",
                            "vocabulary": [
                                { "word": "fewer", "meaning": "「より少ない」。" },
                                { "word": "cinema", "meaning": "「映画館」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "it is ... to do", "explanation": "<b>it is ... to do</b>: 形式主語構文。" }
                            ]
                        }
                    },
                    {
                        "id": 20,
                        "text": "To survive, theaters are trying new things, such as offering comfortable luxury seats or 4D experiences where the seats move.",
                        "translation": "生き残るために、映画館は快適な高級シートや座席が動く4D体験を提供するなど、新しいことを試みています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are trying"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>To survive</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>theaters</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are trying</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>new things, such as offering comfortable luxury seats or 4D experiences where the seats move</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>生き残るために、</span> <span class='t-S'>映画館は</span> <span class='t-V'>試みています</span> <span class='t-O'>新しいことを（快適な高級席の提供や座席が動く4D体験のような）</span>。",
                            "naturalTranslation": "生き残るために、映画館は快適な高級シートや座席が動く4D体験を提供するなど、新しいことを試みています。",
                            "vocabulary": [
                                { "word": "survive", "meaning": "「生き残る」。" },
                                { "word": "luxury", "meaning": "「豪華な、贅沢な」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "To survive", "explanation": "<b>To survive</b>: 不定詞の副詞的用法（目的）。" },
                                { "phrase": "where...", "explanation": "<b>where</b>: 関係副詞。experiencesを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "While the way we watch movies is evolving, the love for great stories remains the same in our culture.",
                        "translation": "映画を見る方法は進化していますが、素晴らしい物語への愛は私たちの文化の中で変わらず残っています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is evolving", "remains"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>While the way we watch movies is evolving</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the love for great stories</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>remains</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the same</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>in our culture</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>私たちが映画を見る方法は進化しているけれども、</span> <span class='t-S'>素晴らしい物語への愛は</span> <span class='t-V'>残っています</span> <span class='t-C'>同じまま</span> <span class='t-M'>私たちの文化の中で</span>。",
                            "naturalTranslation": "映画を見る方法は進化していますが、素晴らしい物語への愛は私たちの文化の中で変わらず残っています。",
                            "vocabulary": [
                                { "word": "evolve", "meaning": "「進化する」。" },
                                { "word": "remain", "meaning": "「～のままである、残る」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "While", "explanation": "<b>While</b>: 接頭辞。「～だけれども」（譲歩）。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about movie culture today?",
                "textTranslation": "今日の映画文化について正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "People have stopped watching movies because they are too busy.", "translation": "人々は忙しすぎるため映画を見るのをやめた。", "isCorrect": false },
                    { "id": 2, "text": "The traditional style of going to theaters is the only way to see films.", "translation": "映画館に行く伝統的なスタイルが映画を見る唯一の方法である。", "isCorrect": false },
                    { "id": 3, "text": "The way people watch movies is changing due to the internet.", "translation": "人々が映画を見る方法はインターネットのために変化している。", "isCorrect": true, "highlight": "with the development of the internet, this traditional style ... is changing" },
                    { "id": 4, "text": "Movie theaters are becoming more popular than streaming services.", "translation": "映画館はストリーミングサービスよりも人気になっている。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、インターネットの発展（development of the internet）による変化を確認しましょう。",
                    "targetSentenceId": 4,
                    "highlightWord": "changing",
                    "highlightWordSentenceId": 4
                },
                "keywords": ["movie culture", "internet", "change"],
                "keywordExplanations": { "due to": "～のために（原因）" },
                "keywordMatches": [
                    { "sentenceId": 4, "text": "with the development of the internet ... is changing", "keyword": "changing due to the internet" }
                ],
                "choiceAdvice": "1: 趣味であり続けている（has been a favorite hobby）とあります。 2: 唯一の方法（only way）だったのは昔の話です。 3: 本文の 'with the development of the internet ... style ... is changing' と一致します。 4: ストリーミングの方が人気になりつつある（more people are choosing ... home）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 4): 「However, with the development of the internet, this traditional style of movie culture is changing dramatically.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 2,
                "text": "Why do many people prefer using streaming services?",
                "textTranslation": "なぜ多くの人はストリーミングサービスを使うのを好むのですか？",
                "choices": [
                    { "id": 1, "text": "Because they can watch movies conveniently on various devices.", "translation": "なぜなら、彼らは様々なデバイスで便利に映画を見ることができるから。", "isCorrect": true, "highlight": "biggest advantage is convenience ... using smartphones, tablets, or computers" },
                    { "id": 2, "text": "Because they can meet new people in dark rooms.", "translation": "なぜなら、彼らは暗い部屋で新しい人々に会うことができるから。", "isCorrect": false },
                    { "id": 3, "text": "Because the sound quality is better than in theaters.", "translation": "なぜなら、音質が映画館よりも良いから。", "isCorrect": false },
                    { "id": 4, "text": "Because they want to pay a high price for each movie.", "translation": "なぜなら、彼らはそれぞれの映画に高い価格を払いたいから。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、最大の利点（biggest advantage）とその詳細を確認しましょう。",
                    "targetSentenceId": 8,
                    "highlightWord": "convenience",
                    "highlightWordSentenceId": 7
                },
                "keywords": ["prefer", "convenience", "device"],
                "keywordExplanations": { "device": "装置（スマホやPC）" },
                "keywordMatches": [
                    { "sentenceId": 7, "text": "biggest advantage is convenience", "keyword": "conveniently" },
                    { "sentenceId": 8, "text": "using smartphones, tablets, or computers", "keyword": "on various devices" }
                ],
                "choiceAdvice": "1: 本文の 'convenience' と 'using smartphones...' に合致します。 2: それは映画館の特徴です。 3: 映画館の方が強力（sound systems are powerful）です。 4: ストリーミングは費用が安い（cost is usually much lower）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 7 & 8): 「The biggest advantage is convenience. Users can watch ... using smartphones, tablets, or computers.」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 3,
                "text": "One of the positive features of movie theaters is that",
                "textTranslation": "映画館の肯定的な特徴の一つは～である。",
                "choices": [
                    { "id": 1, "text": "people can use their smartphones while watching the movie.", "translation": "人々は映画を見ている間スマートフォンを使うことができる。", "isCorrect": false },
                    { "id": 2, "text": "they allow the audience to stop the movie anytime they want.", "translation": "それらは観客がいつでも好きな時に映画を止めることを可能にする。", "isCorrect": false },
                    { "id": 3, "text": "they offer a powerful experience with big screens and sound.", "translation": "それらは大きなスクリーンと音響で強力な体験を提供する。", "isCorrect": true, "highlight": "screens are huge ... sound systems are powerful" },
                    { "id": 4, "text": "the tickets are usually much cheaper than streaming fees.", "translation": "チケットはたいていストリーミング料金よりもずっと安い。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、映画館のスクリーンと音響（screens/sound systems）についての記述を確認しましょう。",
                    "targetSentenceId": 13,
                    "highlightWord": "powerful",
                    "highlightWordSentenceId": 13
                },
                "keywords": ["theater", "screen", "sound"],
                "keywordExplanations": { "experience": "体験" },
                "keywordMatches": [
                    { "sentenceId": 13, "text": "screens are huge, and the sound systems are powerful", "keyword": "powerful experience with big screens and sound" }
                ],
                "choiceAdvice": "1: スマホの邪魔なし（without the distraction）とあります。 2: それはストリーミングの利点です。 3: 本文の 'screens are huge ... sound systems are powerful' と一致します。 4: ストリーミングの方が安い（cost is ... lower）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 13): 「The screens are huge, and the sound systems are powerful.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 4,
                "text": "What is one of the challenges that movie theaters face?",
                "textTranslation": "映画館が直面している課題の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "There are not enough new movies being made anymore.", "translation": "もはや十分な新しい映画が作られていない。", "isCorrect": false },
                    { "id": 2, "text": "Fewer people visit them because home viewing is easy.", "translation": "自宅での鑑賞が簡単なため、訪れる人が減っている。", "isCorrect": true, "highlight": "easy to watch films at home, fewer people are going to the cinema" },
                    { "id": 3, "text": "The government has banned luxury seats in theaters.", "translation": "政府は映画館での高級席を禁止した。", "isCorrect": false },
                    { "id": 4, "text": "4D experiences are too dangerous for most customers.", "translation": "4D体験はほとんどの客にとって危険すぎる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、映画館に来る人がどうなっているか（fewer people...）を確認しましょう。",
                    "targetSentenceId": 19,
                    "highlightWord": "fewer",
                    "highlightWordSentenceId": 19
                },
                "keywords": ["challenge", "fewer", "visit"],
                "keywordExplanations": { "face": "直面する" },
                "keywordMatches": [
                    { "sentenceId": 19, "text": "easy to watch films at home, fewer people are going to the cinema", "keyword": "Fewer people visit them because home viewing is easy" }
                ],
                "choiceAdvice": "1: そのような記述はありません。 2: 本文の 'fewer people are going to the cinema' と、その理由（easy to watch at home）が一致します。 3: むしろ新しい試みとして提供しています。 4: 危険とは書かれていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 19): 「Because it is so easy to watch films at home, fewer people are going to the cinema.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Streaming services will likely disappear in the next few years.", "translation": "ストリーミングサービスは数年以内に消える可能性が高い。", "isCorrect": false },
                    { "id": 2, "text": "Theaters are making efforts to attract customers with new services.", "translation": "映画館は新しいサービスで客を引き付けようと努力している。", "isCorrect": true, "highlight": "theaters are trying new things, such as offering ... luxury seats" },
                    { "id": 3, "text": "Watching movies on a smartphone is the best way to focus on the story.", "translation": "スマートフォンで映画を見ることは物語に集中する最良の方法である。", "isCorrect": false },
                    { "id": 4, "text": "People in the past did not enjoy watching movies as much as today.", "translation": "過去の人々は今日ほど映画を見ることを楽しんでいなかった。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終段落の、生き残るために映画館がしていること（trying new things）を確認しましょう。",
                    "targetSentenceId": 20,
                    "highlightWord": "trying",
                    "highlightWordSentenceId": 20
                },
                "keywords": ["theaters", "efforts", "services"],
                "keywordExplanations": { "attract": "引き付ける" },
                "keywordMatches": [
                    { "sentenceId": 20, "text": "theaters are trying new things", "keyword": "making efforts" },
                    { "sentenceId": 20, "text": "offering comfortable luxury seats or 4D experiences", "keyword": "with new services" }
                ],
                "choiceAdvice": "1: 人気になっている（becoming so popular）とあります。 2: 本文の 'theaters are trying new things' と具体例（luxury seats, 4D）が一致します。 3: 映画館の方が集中できる（focus completely ... without distraction）と書かれています。 4: 1世紀以上にわたり人気（favorite hobby ... for over a century）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20): 「To survive, theaters are trying new things, such as offering comfortable luxury seats or 4D experiences...」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[The Changing Movie Culture] (オリジナル)</div> 本文は、映画鑑賞スタイルの変化についての説明です。",
            "points": [
                { "label": "1. The Change (第1段落)", "text": "長年、映画は劇場で見るものでしたが、インターネットの発達により、自宅でストリーミングサービスを使って見るスタイルに変化しています。" },
                { "label": "2. Why Streaming? (第2段落)", "text": "人気の理由は利便性と安さです。スマホでいつでもどこでも見られ、月額料金で多くの映画が見放題になる点が支持されています。" },
                { "label": "3. Benefits of Theaters (第3段落)", "text": "しかし映画館には独自の良さがあります。大画面と音響による没入感、そして他人と感情を共有する「社会的体験」は自宅では味わえません。" },
                { "label": "4. Challenges (第4段落)", "text": "自宅鑑賞の手軽さにより映画館の客足は減っています。映画館は生き残るため、高級シートや4D体験などの付加価値を提供しようとしています。" }
            ]
        }
    },
    {
        "id": "2026-5-exploring-art-from-home",
        "grade": "準2級プラス",
        "title": "Exploring Art from Home",
        "subTitle": "問題15",
        "genre": "文化 / テクノロジー",
        "isOriginal": true,
        "images": {
            "content": "https://placehold.co/600x400?text=Virtual+Museum",
            "question": "https://placehold.co/600x400?text=Art+Appreciation"
        },
        "content": [
            {
                "paragraphId": 1,
                "sentences": [
                    {
                        "id": 1,
                        "text": "Museums have always been important places for human culture.",
                        "translation": "美術館（博物館）は常に人間文化にとって重要な場所であり続けています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["have been"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Museums</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have always been</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important places for human culture</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>博物館は</span> <span class='t-V'>常にずっとそうです</span> <span class='t-C'>人間文化にとって重要な場所</span>。",
                            "naturalTranslation": "美術館（博物館）は常に人間文化にとって重要な場所であり続けています。",
                            "vocabulary": [
                                { "word": "museum", "meaning": "「博物館、美術館」。" },
                                { "word": "culture", "meaning": "「文化」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "have been", "explanation": "<b>have been</b>: 現在完了形（継続）。" }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "text": "They act as treasure boxes that keep history and art safe for future generations.",
                        "translation": "それらは歴史と芸術を将来の世代のために安全に保管する宝箱として機能しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["act"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>act</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>as treasure boxes that keep history and art safe for future generations</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>それらは</span> <span class='t-V'>機能します</span> <span class='t-M'>宝箱として（歴史と芸術を安全に保つ、未来の世代のために）</span>。",
                            "naturalTranslation": "それらは歴史と芸術を将来の世代のために安全に保管する宝箱として機能しています。",
                            "vocabulary": [
                                { "word": "treasure", "meaning": "「宝物」。" },
                                { "word": "generation", "meaning": "「世代」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "act as", "explanation": "<b>act as</b>: 「～として振る舞う、機能する」。" },
                                { "phrase": "boxes that...", "explanation": "<b>that</b>: 関係代名詞。boxesを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 3,
                        "text": "For a long time, enjoying famous paintings or statues meant traveling to big cities like Paris or New York.",
                        "translation": "長い間、有名な絵画や彫像を楽しむことは、パリやニューヨークのような大都市へ旅行することを意味しました。",
                        "grammarAnalysis": {
                            "mainVerbs": ["meant"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>For a long time</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>enjoying famous paintings or statues</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>meant</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>traveling to big cities like Paris or New York</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>長い間、</span> <span class='t-S'>有名な絵画や彫像を楽しむことは</span> <span class='t-V'>意味しました</span> <span class='t-O'>大都市へ旅行することを（パリやニューヨークのような）</span>。",
                            "naturalTranslation": "長い間、有名な絵画や彫像を楽しむことは、パリやニューヨークのような大都市へ旅行することを意味しました。",
                            "vocabulary": [
                                { "word": "statue", "meaning": "「彫像」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "meant traveling", "explanation": "<b>meant</b>: meanの過去形。動名詞を目的語にとり「～することを意味する」。" }
                            ]
                        }
                    },
                    {
                        "id": 4,
                        "text": "People had to buy plane tickets, book hotels, and stand in long lines.",
                        "translation": "人々は飛行機のチケットを買い、ホテルを予約し、長い列に並ばなければなりませんでした。",
                        "grammarAnalysis": {
                            "mainVerbs": ["had to buy", "book", "stand"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had to buy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>plane tickets</span><span class='tag'>O</span></span>, <span class='chunk V-group'><span class='text'>book</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>hotels</span><span class='tag'>O</span></span>, and <span class='chunk V-group'><span class='text'>stand</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>in long lines</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>人々は</span> <span class='t-V'>飛行機のチケットを買わなければなりませんでした</span>、 <span class='t-V'>ホテルを予約し</span>、そして <span class='t-V'>並ばなければなりませんでした</span> <span class='t-M'>長い列に</span>。",
                            "naturalTranslation": "人々は飛行機のチケットを買い、ホテルを予約し、長い列に並ばなければなりませんでした。",
                            "vocabulary": [
                                { "word": "book", "meaning": "「～を予約する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "had to", "explanation": "<b>had to</b>: have to（～しなければならない）の過去形。" }
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "text": "However, technology is changing this traditional style of art appreciation.",
                        "translation": "しかし、テクノロジーはこの伝統的な芸術鑑賞のスタイルを変えつつあります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is changing"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>technology</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is changing</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>this traditional style of art appreciation</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>技術は</span> <span class='t-V'>変えています</span> <span class='t-O'>この伝統的な芸術鑑賞のスタイルを</span>。",
                            "naturalTranslation": "しかし、テクノロジーはこの伝統的な芸術鑑賞のスタイルを変えつつあります。",
                            "vocabulary": [
                                { "word": "appreciation", "meaning": "「鑑賞、理解、感謝」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 6,
                        "text": "Today, many famous museums offer \"virtual tours\" that allow people to visit them through a computer screen.",
                        "translation": "今日、多くの有名な美術館が、コンピューターの画面を通して人々がそこを訪れることを可能にする「バーチャルツアー」を提供しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["offer"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Today</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many famous museums</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>offer</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>\"virtual tours\" that allow people to visit them through a computer screen</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>今日、</span> <span class='t-S'>多くの有名な美術館は</span> <span class='t-V'>提供しています</span> <span class='t-O'>「バーチャルツアー」を（人々がそれらを訪れるのを可能にする、コンピューターの画面を通して）</span>。",
                            "naturalTranslation": "今日、多くの有名な美術館が、コンピューターの画面を通して人々がそこを訪れることを可能にする「バーチャルツアー」を提供しています。",
                            "vocabulary": [
                                { "word": "virtual", "meaning": "「仮想の、バーチャルな」。" },
                                { "word": "allow", "meaning": "「～を許す、可能にする」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "tours that...", "explanation": "<b>that</b>: 関係代名詞。toursを修飾。" }
                            ]
                        }
                    }
                ]
            },
            {
                "paragraphId": 2,
                "sentences": [
                    {
                        "id": 7,
                        "text": "There are great benefits to exploring art online.",
                        "translation": "オンラインで芸術を探索することには大きな利点があります。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk V-group'><span class='text'>There are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>great benefits to exploring art online</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-V'>あります</span> <span class='t-S'>大きな利点が（オンラインで芸術を探索することには）</span>。",
                            "naturalTranslation": "オンラインで芸術を探索することには大きな利点があります。",
                            "vocabulary": [
                                { "word": "explore", "meaning": "「～を探索する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 8,
                        "text": "The most obvious one is accessibility.",
                        "translation": "最も明らかな利点はアクセシビリティ（利用しやすさ）です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>The most obvious one</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>accessibility</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>最も明らかなものは</span> <span class='t-V'>です</span> <span class='t-C'>アクセシビリティ（近づきやすさ）</span>。",
                            "naturalTranslation": "最も明らかな利点はアクセシビリティ（利用しやすさ）です。",
                            "vocabulary": [
                                { "word": "obvious", "meaning": "「明らかな」。" },
                                { "word": "accessibility", "meaning": "「利用しやすさ、接近可能性」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 9,
                        "text": "People can visit world-class museums without leaving their homes.",
                        "translation": "人々は家を出ることなく世界クラスの美術館を訪れることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can visit"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can visit</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>world-class museums</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>without leaving their homes</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>人々は</span> <span class='t-V'>訪れることができます</span> <span class='t-O'>世界クラスの美術館を</span> <span class='t-M'>家を出ることなしに</span>。",
                            "naturalTranslation": "人々は家を出ることなく世界クラスの美術館を訪れることができます。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "without leaving", "explanation": "<b>without doing</b>: 「～することなしに」。" }
                            ]
                        }
                    },
                    {
                        "id": 10,
                        "text": "This is especially helpful for people who cannot travel easily, such as the elderly or those with disabilities.",
                        "translation": "これは特に、高齢者や障害を持つ人々など、簡単に旅行できない人々にとって役立ちます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>especially helpful</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>for people who cannot travel easily, such as the elderly or those with disabilities</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>これは</span> <span class='t-V'>です</span> <span class='t-C'>特に役立つ</span> <span class='t-M'>簡単に旅行できない人々にとって（高齢者や障害を持つ人々のような）</span>。",
                            "naturalTranslation": "これは特に、高齢者や障害を持つ人々など、簡単に旅行できない人々にとって役立ちます。",
                            "vocabulary": [
                                { "word": "especially", "meaning": "「特に」。" },
                                { "word": "disability", "meaning": "「障害」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "people who...", "explanation": "<b>who</b>: 関係代名詞。peopleを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 11,
                        "text": "Also, in a virtual museum, there are no crowds.",
                        "translation": "また、バーチャル美術館には混雑がありません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Also, in a virtual museum</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there are</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>no crowds</span><span class='tag'>S</span></span>.",
                            "translationHtml": "<span class='t-M'>また、バーチャル美術館では、</span> <span class='t-V'>ありません</span> <span class='t-S'>混雑が</span>。",
                            "naturalTranslation": "また、バーチャル美術館には混雑がありません。",
                            "vocabulary": [
                                { "word": "crowd", "meaning": "「群衆、混雑」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 12,
                        "text": "In a real museum, it is often difficult to see popular paintings because there are too many people.",
                        "translation": "実際の美術館では、人が多すぎるために人気の絵画を見るのがしばしば困難です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is", "are"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>In a real museum</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>often</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>difficult</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to see popular paintings</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>because there are too many people</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>実際の美術館では、</span> <span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-M'>しばしば</span> <span class='t-C'>難しい</span> <span class='t-S'>人気の絵画を見ることは</span> <span class='t-M'>人が多すぎるので</span>。",
                            "naturalTranslation": "実際の美術館では、人が多すぎるために人気の絵画を見るのがしばしば困難です。",
                            "vocabulary": [],
                            "grammarNotes": [
                                { "phrase": "It is ... to do", "explanation": "<b>It is ... to do</b>: 形式主語構文。" }
                            ]
                        }
                    },
                    {
                        "id": 13,
                        "text": "On a screen, however, viewers can zoom in and see every small detail of the artwork clearly.",
                        "translation": "しかし画面上では、見る人はズームインして、芸術作品のあらゆる小さな細部をはっきりと見ることができます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["can zoom in", "see"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>On a screen</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>however</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>viewers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can zoom in</span><span class='tag'>V</span></span> and <span class='chunk V-group'><span class='text'>see</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>every small detail of the artwork</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>clearly</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>画面上では、</span> <span class='t-M'>しかし、</span> <span class='t-S'>見る人は</span> <span class='t-V'>ズームインし</span>、そして <span class='t-V'>見ることができます</span> <span class='t-O'>芸術作品のあらゆる小さな細部を</span> <span class='t-M'>はっきりと</span>。",
                            "naturalTranslation": "しかし画面上では、見る人はズームインして、芸術作品のあらゆる小さな細部をはっきりと見ることができます。",
                            "vocabulary": [
                                { "word": "viewer", "meaning": "「見る人、視聴者」。" },
                                { "word": "detail", "meaning": "「詳細、細部」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 3,
                "sentences": [
                    {
                        "id": 14,
                        "text": "Despite these advantages, many art lovers still prefer visiting museums in person.",
                        "translation": "これらの利点にもかかわらず、多くの芸術愛好家は依然として直接美術館を訪れることを好みます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["prefer"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Despite these advantages</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many art lovers</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>still</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>prefer</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>visiting museums in person</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-M'>これらの利点にもかかわらず、</span> <span class='t-S'>多くの芸術愛好家は</span> <span class='t-M'>まだ</span> <span class='t-V'>好みます</span> <span class='t-O'>直接美術館を訪れることを</span>。",
                            "naturalTranslation": "これらの利点にもかかわらず、多くの芸術愛好家は依然として直接美術館を訪れることを好みます。",
                            "vocabulary": [
                                { "word": "Despite", "meaning": "「～にもかかわらず」。" },
                                { "word": "advantage", "meaning": "「利点」。" },
                                { "word": "prefer", "meaning": "「～を好む」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "in person", "explanation": "<b>in person</b>: 「直接、自ら」。" }
                            ]
                        }
                    },
                    {
                        "id": 15,
                        "text": "They believe that seeing the real object offers a special feeling that a screen cannot provide.",
                        "translation": "彼らは、実物を見ることは画面が提供できない特別な感覚を与えてくれると信じています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["believe"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>believe</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that seeing the real object offers a special feeling that a screen cannot provide</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>彼らは</span> <span class='t-V'>信じています</span> <span class='t-O'>（実物を見ることは特別な感覚を提供すると、画面が提供できないような）</span>。",
                            "naturalTranslation": "彼らは、実物を見ることは画面が提供できない特別な感覚を与えてくれると信じています。",
                            "vocabulary": [
                                { "word": "object", "meaning": "「物体、対象」。" },
                                { "word": "provide", "meaning": "「提供する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "feeling that...", "explanation": "<b>that</b>: 関係代名詞。feelingを修飾。" }
                            ]
                        }
                    },
                    {
                        "id": 16,
                        "text": "For example, the size of a painting or the texture of a stone statue is hard to understand on a small monitor.",
                        "translation": "例えば、絵画の大きさや石像の質感は、小さなモニターでは理解するのが難しいです。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>For example</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the size of a painting or the texture of a stone statue</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>hard to understand</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>on a small monitor</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>例えば、</span> <span class='t-S'>絵の大きさや石像の質感は</span> <span class='t-V'>です</span> <span class='t-C'>理解するのが難しい</span> <span class='t-M'>小さなモニター上では</span>。",
                            "naturalTranslation": "例えば、絵画の大きさや石像の質感は、小さなモニターでは理解するのが難しいです。",
                            "vocabulary": [
                                { "word": "texture", "meaning": "「質感、手触り」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "hard to understand", "explanation": "<b>to understand</b>: 不定詞の副詞的用法（形容詞修飾）。" }
                            ]
                        }
                    },
                    {
                        "id": 17,
                        "text": "Furthermore, the quiet atmosphere of a museum helps people focus and think deeply about the art.",
                        "translation": "さらに、美術館の静かな雰囲気は、人々が集中し、芸術について深く考えるのを助けます。",
                        "grammarAnalysis": {
                            "mainVerbs": ["helps"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Furthermore</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the quiet atmosphere of a museum</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>people</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>focus and think deeply about the art</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-M'>さらに、</span> <span class='t-S'>美術館の静かな雰囲気は</span> <span class='t-V'>助けます</span> <span class='t-O'>人々が</span> <span class='t-C'>集中し、芸術について深く考えるのを</span>。",
                            "naturalTranslation": "さらに、美術館の静かな雰囲気は、人々が集中し、芸術について深く考えるのを助けます。",
                            "vocabulary": [
                                { "word": "atmosphere", "meaning": "「雰囲気」。" },
                                { "word": "focus", "meaning": "「集中する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "help O (to) do", "explanation": "<b>help O do</b>: 「Oが～するのを助ける」（原形不定詞）。" }
                            ]
                        }
                    },
                    {
                        "id": 18,
                        "text": "Standing in front of a real masterpiece creates an emotional connection that digital images cannot replace.",
                        "translation": "本物の傑作の前に立つことは、デジタル画像では置き換えられない感情的なつながりを生み出します。",
                        "grammarAnalysis": {
                            "mainVerbs": ["creates"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Standing in front of a real masterpiece</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>creates</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an emotional connection that digital images cannot replace</span><span class='tag'>O</span></span>.",
                            "translationHtml": "<span class='t-S'>本物の傑作の前に立つことは</span> <span class='t-V'>生み出します</span> <span class='t-O'>感情的なつながりを（デジタル画像が置き換えられない）</span>。",
                            "naturalTranslation": "本物の傑作の前に立つことは、デジタル画像では置き換えられない感情的なつながりを生み出します。",
                            "vocabulary": [
                                { "word": "masterpiece", "meaning": "「傑作、名作」。" },
                                { "word": "emotional", "meaning": "「感情的な」。" },
                                { "word": "replace", "meaning": "「～に取って代わる」。" }
                            ],
                            "grammarNotes": []
                        }
                    }
                ]
            },
            {
                "paragraphId": 4,
                "sentences": [
                    {
                        "id": 19,
                        "text": "However, museums face a challenge with this new technology.",
                        "translation": "しかし、美術館はこの新技術に関する課題に直面しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["face"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>However</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>museums</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>face</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a challenge</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>with this new technology</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>しかし、</span> <span class='t-S'>美術館は</span> <span class='t-V'>直面しています</span> <span class='t-O'>課題に</span> <span class='t-M'>この新技術に関して</span>。",
                            "naturalTranslation": "しかし、美術館はこの新技術に関する課題に直面しています。",
                            "vocabulary": [
                                { "word": "face", "meaning": "「～に直面する」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 20,
                        "text": "If people are satisfied with online tours, they might stop buying tickets to visit the actual buildings.",
                        "translation": "もし人々がオンラインツアーに満足してしまえば、彼らは実際の建物を訪れるためのチケットを買うのをやめてしまうかもしれません。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are", "might stop"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>If people are satisfied with online tours</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might stop buying</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>tickets</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to visit the actual buildings</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>もし人々がオンラインツアーに満足しているなら、</span> <span class='t-S'>彼らは</span> <span class='t-V'>買うのをやめるかもしれません</span> <span class='t-O'>チケットを</span> <span class='t-M'>実際の建物を訪れるために</span>。",
                            "naturalTranslation": "もし人々がオンラインツアーに満足してしまえば、彼らは実際の建物を訪れるためのチケットを買うのをやめてしまうかもしれません。",
                            "vocabulary": [
                                { "word": "satisfied", "meaning": "「満足した」。" },
                                { "word": "actual", "meaning": "「実際の」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "stop doing", "explanation": "<b>stop doing</b>: 「～するのをやめる」。" }
                            ]
                        }
                    },
                    {
                        "id": 21,
                        "text": "Museums need money from ticket sales to maintain their collections.",
                        "translation": "美術館はコレクションを維持するためにチケット販売からのお金を必要としています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["need"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Museums</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>need</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>money from ticket sales</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>to maintain their collections</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-S'>美術館は</span> <span class='t-V'>必要とします</span> <span class='t-O'>チケット販売からのお金を</span> <span class='t-M'>彼らのコレクションを維持するために</span>。",
                            "naturalTranslation": "美術館はコレクションを維持するためにチケット販売からのお金を必要としています。",
                            "vocabulary": [
                                { "word": "maintain", "meaning": "「～を維持する、管理する」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "to maintain", "explanation": "<b>to maintain</b>: 不定詞の副詞的用法（目的）。" }
                            ]
                        }
                    },
                    {
                        "id": 22,
                        "text": "Therefore, they are looking for ways to use digital tools to attract people, rather than replacing the real experience.",
                        "translation": "したがって、彼らは実体験を置き換えるのではなく、人々を惹きつけるためにデジタルツールを使う方法を探しています。",
                        "grammarAnalysis": {
                            "mainVerbs": ["are looking for"],
                            "structureHtml": "<span class='chunk M-group'><span class='text'>Therefore</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are looking for</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>ways to use digital tools to attract people</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>rather than replacing the real experience</span><span class='tag'>M</span></span>.",
                            "translationHtml": "<span class='t-M'>したがって、</span> <span class='t-S'>彼らは</span> <span class='t-V'>探しています</span> <span class='t-O'>人々を惹きつけるためにデジタルツールを使う方法を</span>、 <span class='t-M'>実体験を置き換えるのではなく</span>。",
                            "naturalTranslation": "したがって、彼らは実体験を置き換えるのではなく、人々を惹きつけるためにデジタルツールを使う方法を探しています。",
                            "vocabulary": [
                                { "word": "attract", "meaning": "「～を引きつける、魅了する」。" },
                                { "word": "rather than", "meaning": "「～よりむしろ、～ではなく」。" }
                            ],
                            "grammarNotes": []
                        }
                    },
                    {
                        "id": 23,
                        "text": "Combining technology with tradition is the key to the future of museums.",
                        "translation": "テクノロジーと伝統を組み合わせることが、美術館の未来への鍵です。",
                        "grammarAnalysis": {
                            "mainVerbs": ["is"],
                            "structureHtml": "<span class='chunk S-group'><span class='text'>Combining technology with tradition</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the key to the future of museums</span><span class='tag'>C</span></span>.",
                            "translationHtml": "<span class='t-S'>技術と伝統を組み合わせることは</span> <span class='t-V'>です</span> <span class='t-C'>美術館の未来への鍵</span>。",
                            "naturalTranslation": "テクノロジーと伝統を組み合わせることが、美術館の未来への鍵です。",
                            "vocabulary": [
                                { "word": "combine", "meaning": "「～を組み合わせる」。" },
                                { "word": "tradition", "meaning": "「伝統」。" }
                            ],
                            "grammarNotes": [
                                { "phrase": "Combining", "explanation": "<b>Combining</b>: 動名詞（主語）。" }
                            ]
                        }
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": 1,
                "text": "What is true about museums today?",
                "textTranslation": "今日の美術館について正しいことは何ですか？",
                "choices": [
                    { "id": 1, "text": "They are no longer popular because people do not like history.", "translation": "人々が歴史を好まないため、それらはもはや人気がない。", "isCorrect": false },
                    { "id": 2, "text": "They are changing how people see art by using technology.", "translation": "彼らは技術を使うことで人々が芸術を見る方法を変えている。", "isCorrect": true, "highlight": "technology is changing this traditional style of art appreciation" },
                    { "id": 3, "text": "They have stopped allowing people to visit the actual buildings.", "translation": "彼らは人々が実際の建物を訪れることを許可するのをやめた。", "isCorrect": false },
                    { "id": 4, "text": "They are moving their collections to small towns in the countryside.", "translation": "彼らはコレクションを田舎の小さな町に移している。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 1,
                    "description": "第1段落の、テクノロジーがもたらしている変化（changing...）を確認しましょう。",
                    "targetSentenceId": 5,
                    "highlightWord": "changing",
                    "highlightWordSentenceId": 5
                },
                "keywords": ["museums", "technology", "changing"],
                "keywordExplanations": { "style": "様式、方法（how people see art）" },
                "keywordMatches": [
                    { "sentenceId": 5, "text": "technology is changing this traditional style of art appreciation", "keyword": "changing how people see art by using technology" }
                ],
                "choiceAdvice": "1: 依然として重要です。 2: 本文の 'technology is changing ... style of art appreciation' と一致します。 3: 依然として訪問できます（prefer visiting ... in person）。 4: そのような記述はありません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 5): 「However, technology is changing this traditional style of art appreciation.」" },
                    { "type": "conclusion", "content": "正解: 2" }
                ]
            },
            {
                "id": 2,
                "text": "What is one advantage of virtual museum tours?",
                "textTranslation": "バーチャル美術館ツアーの利点の一つは何ですか？",
                "choices": [
                    { "id": 1, "text": "Viewers can see the artwork clearly without crowds of people.", "translation": "見る人は人混みなしで芸術作品をはっきりと見ることができる。", "isCorrect": true, "highlight": "no crowds ... see every small detail ... clearly" },
                    { "id": 2, "text": "Visitors can touch the paintings to feel the texture.", "translation": "訪問者は質感を（画面越しに）感じるために絵に触れることができる。", "isCorrect": false },
                    { "id": 3, "text": "People can buy the real paintings and keep them at home.", "translation": "人々は本物の絵を買って家に置いておくことができる。", "isCorrect": false },
                    { "id": 4, "text": "The tours are usually more expensive than real tickets.", "translation": "ツアーはたいてい実際のチケットよりも高い。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 2,
                    "description": "第2段落の、混雑（crowds）と鑑賞のしやすさ（see clearly）についての記述を確認しましょう。",
                    "targetSentenceId": 13,
                    "highlightWord": "clearly",
                    "highlightWordSentenceId": 13
                },
                "keywords": ["advantage", "virtual", "crowd"],
                "keywordExplanations": { "clearly": "はっきりと" },
                "keywordMatches": [
                    { "sentenceId": 11, "text": "there are no crowds", "keyword": "without crowds" },
                    { "sentenceId": 13, "text": "see every small detail ... clearly", "keyword": "see the artwork clearly" }
                ],
                "choiceAdvice": "1: 本文の 'no crowds' と 'see ... clearly' の両方の要素が含まれています。 2: 触れることはできません。 3: 買う話ではありません。 4: コストについては具体的に言及されていません（通常は安いか無料が多い）。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 11 & 13): 「Also, in a virtual museum, there are no crowds. ... viewers can zoom in and see every small detail ... clearly.」" },
                    { "type": "conclusion", "content": "正解: 1" }
                ]
            },
            {
                "id": 3,
                "text": "Why do some people prefer visiting museums in person?",
                "textTranslation": "なぜ一部の人々は直接美術館を訪れることを好むのですか？",
                "choices": [
                    { "id": 1, "text": "Because they can use their smartphones to take pictures.", "translation": "なぜなら、彼らは写真を撮るためにスマートフォンを使えるから。", "isCorrect": false },
                    { "id": 2, "text": "Because they can talk loudly with their friends.", "translation": "なぜなら、彼らは友人と大声で話せるから。", "isCorrect": false },
                    { "id": 3, "text": "Because they want to feel the real size and texture of the art.", "translation": "なぜなら、彼らは芸術の本当の大きさや質感を感じたいから。", "isCorrect": true, "highlight": "size of a painting or the texture ... hard to understand on a small monitor" },
                    { "id": 4, "text": "Because they can zoom in on the paintings with their eyes.", "translation": "なぜなら、彼らは目で絵画をズームインできるから。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 3,
                    "description": "第3段落の、モニターでは理解しにくい要素（size/texture）を確認しましょう。",
                    "targetSentenceId": 16,
                    "highlightWord": "texture",
                    "highlightWordSentenceId": 16
                },
                "keywords": ["prefer", "in person", "texture"],
                "keywordExplanations": { "in person": "直接、生で" },
                "keywordMatches": [
                    { "sentenceId": 16, "text": "size of a painting or the texture ... hard to understand on a small monitor", "keyword": "want to feel the real size and texture" }
                ],
                "choiceAdvice": "1: スマホを使わないことが利点（without distraction）と前問の類似文脈（2026-4）でありましたが、ここでは言及されていません。 2: 静かな雰囲気（quiet atmosphere）が利点とされています。 3: 本文の 'size ... or the texture' と一致します。 4: ズームインはバーチャルの利点です。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 16): 「For example, the size of a painting or the texture of a stone statue is hard to understand on a small monitor.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 4,
                "text": "What is the challenge that museums are facing?",
                "textTranslation": "美術館が直面している課題は何ですか？",
                "choices": [
                    { "id": 1, "text": "They have too many visitors and cannot control the crowds.", "translation": "訪問者が多すぎて混雑を制御できない。", "isCorrect": false },
                    { "id": 2, "text": "They are running out of space to store new paintings.", "translation": "新しい絵を保管するスペースがなくなってきている。", "isCorrect": false },
                    { "id": 3, "text": "They might lose money if fewer people buy tickets.", "translation": "もしチケットを買う人が減れば、お金を失うかもしれない。", "isCorrect": true, "highlight": "stop buying tickets ... need money from ticket sales" },
                    { "id": 4, "text": "The digital technology is too difficult for staff to use.", "translation": "デジタル技術はスタッフが使うには難しすぎる。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "第4段落の、チケット収入（money from ticket sales）に関する懸念を確認しましょう。",
                    "targetSentenceId": 21,
                    "highlightWord": "money",
                    "highlightWordSentenceId": 21
                },
                "keywords": ["challenge", "money", "ticket"],
                "keywordExplanations": { "lose": "失う" },
                "keywordMatches": [
                    { "sentenceId": 20, "text": "stop buying tickets", "keyword": "fewer people buy tickets" },
                    { "sentenceId": 21, "text": "need money from ticket sales", "keyword": "might lose money" }
                ],
                "choiceAdvice": "1: バーチャルでは混雑がないという話です。 2: スペースの話ではありません。 3: 本文の 'stop buying tickets ... need money' から、収入減のリスクが読み取れます。 4: 技術的な難しさについては書かれていません。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 20 & 21): 「If people ... stop buying tickets ..., Museums need money from ticket sales...」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            },
            {
                "id": 5,
                "text": "What do we learn from the passage?",
                "textTranslation": "この文章から私たちは何を学びますか？",
                "choices": [
                    { "id": 1, "text": "Virtual tours will completely replace real museums soon.", "translation": "バーチャルツアーはすぐに実際の美術館に完全に取って代わるだろう。", "isCorrect": false },
                    { "id": 2, "text": "Most people think that virtual tours are boring and useless.", "translation": "ほとんどの人はバーチャルツアーは退屈で役に立たないと思っている。", "isCorrect": false },
                    { "id": 3, "text": "Real experiences and digital tools should work together.", "translation": "実際の体験とデジタルツールは共に働く（組み合わさる）べきである。", "isCorrect": true, "highlight": "Combining technology with tradition is the key" },
                    { "id": 4, "text": "Museums should stop using the internet to protect their art.", "translation": "美術館は芸術を守るためにインターネットの使用をやめるべきだ。", "isCorrect": false }
                ],
                "hint": {
                    "paragraphId": 4,
                    "description": "最終文の、未来への鍵（key to the future）が何であるかを確認しましょう。",
                    "targetSentenceId": 23,
                    "highlightWord": "Combining",
                    "highlightWordSentenceId": 23
                },
                "keywords": ["learn", "combine", "tradition"],
                "keywordExplanations": { "work together": "共に働く（combineと同義）" },
                "keywordMatches": [
                    { "sentenceId": 23, "text": "Combining technology with tradition", "keyword": "Real experiences and digital tools should work together" }
                ],
                "choiceAdvice": "1: 置き換えるのではなく（rather than replacing）、共存を目指しています。 2: 利点（great benefits）があると書かれています。 3: 最終文の 'Combining technology with tradition' が正解の根拠です。 4: デジタルツールを使う方法を探している（looking for ways to use）とあります。",
                "logic": [
                    { "type": "text", "content": "本文(Sentence 23): 「Combining technology with tradition is the key to the future of museums.」" },
                    { "type": "conclusion", "content": "正解: 3" }
                ]
            }
        ],
        "summaryForInstructors": {
            "title": "講師用：本文要約 (Instructor Summary)",
            "intro": "<div style='font-size: 1.2rem; font-weight: bold; margin-top: 1.5rem; color: black;'>[Exploring Art from Home] (オリジナル)</div> 本文は、テクノロジーの進化により普及した「バーチャル美術館ツアー」と、従来の実地訪問の価値についての説明です。",
            "points": [
                { "label": "1. The Change (第1段落)", "text": "かつて名画を見るには海外旅行が必要でしたが、今は「バーチャルツアー」により、自宅から美術館を訪問できるようになりました。" },
                { "label": "2. Benefits of Virtual (第2段落)", "text": "最大の利点は誰でもアクセスできることです。高齢者も楽しめます。また、混雑がないため、画面上でズームインして細部まではっきりと見ることができます。" },
                { "label": "3. Benefits of Real Visits (第3段落)", "text": "しかし、実物には画面では伝わらない良さがあります。絵の大きさや彫像の質感、そして美術館特有の静かな雰囲気は、実地でしか味わえない感動を生みます。" },
                { "label": "4. Challenges (第4段落)", "text": "課題は収益です。オンラインで満足してチケットが売れなくなると美術館の運営が困難になります。デジタルとリアルをうまく組み合わせることが未来への鍵です。" }
            ]
        }
    }
];


