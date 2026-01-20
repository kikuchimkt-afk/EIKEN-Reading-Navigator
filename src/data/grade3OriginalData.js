export const grade3OriginalData = [
    {
        id: "grade-3-original-cheese-rolling",
        grade: "3級",
        title: "Cooper's Hill Cheese-Rolling",
        subTitle: "問題1",
        genre: "文化 / イベント",
        similarProblems: {
            exam: "2025年度 第2回",
            title: "Buñol La Tomatina"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Cheese+Rolling",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Cooper's Hill is a steep place in England near a small village called Brockworth.",
                        translation: "クーパーズ・ヒルは、ブロックワースと呼ばれる小さな村の近くにある、イギリスの急な坂の場所です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Cooper's Hill</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a steep place</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(in England near a small village called Brockworth)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>クーパーズ・ヒルは</span> <span class='t-V'>です</span> <span class='t-C'>急な場所</span> <span class='t-M'>(イギリスの、ブロックワースと呼ばれる小さな村の近くにある)</span>。",
                            naturalTranslation: "クーパーズ・ヒルは、ブロックワースと呼ばれる小さな村の近くにある、イギリスの急な坂の場所です。",
                            vocabulary: [
                                { word: "steep", meaning: "「急な」「険しい」。" },
                                { word: "village", meaning: "「村」。" },
                                { word: "called", meaning: "「〜と呼ばれる」。過去分詞の形容詞的用法。" }
                            ],
                            grammarNotes: [
                                { phrase: "called Brockworth", explanation: "<b>called Brockworth</b>: 直前の a small village を修飾する過去分詞句。「ブロックワースと呼ばれる」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "Usually, it is a very quiet place with few visitors.",
                        translation: "普段、そこは訪問者も少なく、とても静かな場所です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Usually)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a very quiet place</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(with few visitors)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(普段は)</span>、<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>とても静かな場所</span> <span class='t-M'>(ほとんど訪問者がいない)</span>。",
                            naturalTranslation: "普段、そこは訪問者も少なく、とても静かな場所です。",
                            vocabulary: [
                                { word: "Usually", meaning: "「たいてい」「普段は」。" },
                                { word: "few", meaning: "「ほとんどない」。a few（少しある）との違いに注意。" },
                                { word: "visitors", meaning: "「訪問者」「観光客」。" }
                            ],
                            grammarNotes: [
                                { phrase: "with few visitors", explanation: "<b>with</b>: 付帯状況や特徴を表す。「訪問者がほとんどいない（状態の）」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "However, once a year in May, thousands of people visit the hill.",
                        translation: "しかし、年に一度5月に、何千人もの人々がその丘を訪れます。",
                        grammarAnalysis: {
                            mainVerbs: ["visit"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(once a year in May)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>thousands of people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>visit</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the hill</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-M'>(年に一度5月に)</span>、<span class='t-S'>何千人もの人々が</span> <span class='t-V'>訪れます</span> <span class='t-O'>その丘を</span>。",
                            naturalTranslation: "しかし、年に一度5月に、何千人もの人々がその丘を訪れます。",
                            vocabulary: [
                                { word: "However", meaning: "「しかし」。" },
                                { word: "once a year", meaning: "「年に一度」。" },
                                { word: "thousands of", meaning: "「何千もの」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 4,
                        text: "They come to watch a special event called the Cheese-Rolling.",
                        translation: "彼らはチーズ転がしと呼ばれる特別なイベントを見るために来ます。",
                        grammarAnalysis: {
                            mainVerbs: ["come"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>come</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to watch a special event called the Cheese-Rolling)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>来ます</span> <span class='t-M'>(チーズ転がしと呼ばれる特別なイベントを見るために)</span>。",
                            naturalTranslation: "彼らはチーズ転がしと呼ばれる特別なイベントを見るために来ます。",
                            vocabulary: [
                                { word: "event", meaning: "「イベント」「行事」。" },
                                { word: "called", meaning: "「〜と呼ばれる」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to watch", explanation: "<b>to watch</b>: 目的を表す不定詞の副詞的用法。「見るために」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 5,
                        text: "The Cheese-Rolling has a very long history.",
                        translation: "チーズ転がしにはとても長い歴史があります。",
                        grammarAnalysis: {
                            mainVerbs: ["has"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The Cheese-Rolling</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a very long history</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>チーズ転がしは</span> <span class='t-V'>持っています</span> <span class='t-O'>とても長い歴史を</span>。",
                            naturalTranslation: "チーズ転がしにはとても長い歴史があります。",
                            vocabulary: [
                                { word: "history", meaning: "「歴史」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 6,
                        text: "It started about 600 years ago.",
                        translation: "それは約600年前に始まりました。",
                        grammarAnalysis: {
                            mainVerbs: ["started"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>started</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(about 600 years ago)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>始まりました</span> <span class='t-M'>(約600年前に)</span>。",
                            naturalTranslation: "それは約600年前に始まりました。",
                            vocabulary: [
                                { word: "started", meaning: "「始まった」。" },
                                { word: "ago", meaning: "「〜前に」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 7,
                        text: "In the past, only local farmers took part in the event.",
                        translation: "昔は、地元の農家の人々だけがイベントに参加していました。",
                        grammarAnalysis: {
                            mainVerbs: ["took part in"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the past)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>only local farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took part in</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the event</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(過去には)</span>、<span class='t-S'>地元の農家の人々だけが</span> <span class='t-V'>参加しました</span> <span class='t-O'>そのイベントに</span>。",
                            naturalTranslation: "昔は、地元の農家の人々だけがイベントに参加していました。",
                            vocabulary: [
                                { word: "local", meaning: "「地元の」。" },
                                { word: "farmers", meaning: "「農家の人々」。" },
                                { word: "took part in", meaning: "「〜に参加した」。participated in と同義。" }
                            ],
                            grammarNotes: [
                                { phrase: "In the past", explanation: "<b>In the past</b>: 「過去には」。時制が過去になるサイン。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "They wanted to celebrate the coming of spring.",
                        translation: "彼らは春の訪れを祝いたいと思っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to celebrate the coming of spring</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>したかった</span> <span class='t-O'>春の訪れを祝うことを</span>。",
                            naturalTranslation: "彼らは春の訪れを祝いたいと思っていました。",
                            vocabulary: [
                                { word: "celebrate", meaning: "「祝う」。" },
                                { word: "coming", meaning: "「到来」「訪れ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "wanted to celebrate", explanation: "<b>want to do</b>: 「〜したいと思う」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "They rolled a large round cheese down the hill and ran after it.",
                        translation: "彼らは大きな丸いチーズを丘の下へ転がし、それを追いかけました。",
                        grammarAnalysis: {
                            mainVerbs: ["rolled", "ran after"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>rolled</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a large round cheese</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(down the hill)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>ran after</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>転がした</span> <span class='t-O'>大きな丸いチーズを</span> <span class='t-M'>(丘の下へ)</span> そして<span class='t-V'>追いかけた</span> <span class='t-O'>それを</span>。",
                            naturalTranslation: "彼らは大きな丸いチーズを丘の下へ転がし、それを追いかけました。",
                            vocabulary: [
                                { word: "rolled", meaning: "「転がした」。" },
                                { word: "ran after", meaning: "「〜を追いかけた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "rolled ... and ran ...", explanation: "<b>and</b>: 2つの動詞（rolled と ran）をつないでいる。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "It was a fun game for the people in the village.",
                        translation: "それは村の人々にとって楽しいゲームでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a fun game</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for the people in the village)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>でした</span> <span class='t-C'>楽しいゲーム</span> <span class='t-M'>(村の人々にとって)</span>。",
                            naturalTranslation: "それは村の人々にとって楽しいゲームでした。",
                            vocabulary: [
                                { word: "fun", meaning: "「楽しい」。" }
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
                        id: 11,
                        text: "Today, the Cheese-Rolling is famous all over the world.",
                        translation: "今日では、チーズ転がしは世界中で有名です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the Cheese-Rolling</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>famous</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(all over the world)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(今日では)</span>、<span class='t-S'>チーズ転がしは</span> <span class='t-V'>です</span> <span class='t-C'>有名な</span> <span class='t-M'>(世界中で)</span>。",
                            naturalTranslation: "今日では、チーズ転がしは世界中で有名です。",
                            vocabulary: [
                                { word: "famous", meaning: "「有名な」。" },
                                { word: "all over the world", meaning: "「世界中で」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 12,
                        text: "People from countries like America and Japan go to England to run down the hill.",
                        translation: "アメリカや日本のような国の人々が、丘を駆け下りるためにイギリスへ行きます。",
                        grammarAnalysis: {
                            mainVerbs: ["go"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People from countries like America and Japan</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>go</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to England)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to run down the hill)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>アメリカや日本のような国の人々は</span> <span class='t-V'>行きます</span> <span class='t-M'>(イギリスへ)</span> <span class='t-M'>(丘を駆け下りるために)</span>。",
                            naturalTranslation: "アメリカや日本のような国の人々が、丘を駆け下りるためにイギリスへ行きます。",
                            vocabulary: [
                                { word: "countries", meaning: "「国々」。" },
                                { word: "like", meaning: "「〜のような」。前置詞。" }
                            ],
                            grammarNotes: [
                                { phrase: "to run down", explanation: "<b>to run down</b>: 目的を表す不定詞。「駆け下りるために」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "At the event, runners try to catch the cheese.",
                        translation: "イベントでは、走者たちはチーズを捕まえようとします。",
                        grammarAnalysis: {
                            mainVerbs: ["try to catch"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(At the event)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>runners</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>try to catch</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the cheese</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(イベントでは)</span>、<span class='t-S'>走者たちは</span> <span class='t-V'>捕まえようとします</span> <span class='t-O'>チーズを</span>。",
                            naturalTranslation: "イベントでは、走者たちはチーズを捕まえようとします。",
                            vocabulary: [
                                { word: "runners", meaning: "「走者」「走る人たち」。" },
                                { word: "catch", meaning: "「捕まえる」。" }
                            ],
                            grammarNotes: [
                                { phrase: "try to catch", explanation: "<b>try to do</b>: 「〜しようとする」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "The winner gets to keep the cheese.",
                        translation: "勝者はそのチーズをもらうことができます。",
                        grammarAnalysis: {
                            mainVerbs: ["gets to keep"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The winner</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>gets to keep</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the cheese</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>勝者は</span> <span class='t-V'>持ち続けることができます</span> <span class='t-O'>そのチーズを</span>。",
                            naturalTranslation: "勝者はそのチーズをもらうことができます。",
                            vocabulary: [
                                { word: "winner", meaning: "「勝者」。" },
                                { word: "keep", meaning: "「持ち続ける」「とっておく」。" }
                            ],
                            grammarNotes: [
                                { phrase: "gets to keep", explanation: "<b>get to do</b>: 「（機会を得て）〜できる」「〜することになる」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "However, the hill is very steep, so people often fall and get their clothes dirty.",
                        translation: "しかし、丘はとても急なので、人々はよく転んで服を汚してしまいます。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "fall", "get"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the hill</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very steep</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(often)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>fall</span><span class='tag'>V</span></span> and <span class='chunk V-group'><span class='text'>get</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their clothes</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>dirty</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>丘は</span> <span class='t-V'>です</span> <span class='t-C'>とても急な</span>、<span class='t-M'>(だから)</span> <span class='t-S'>人々は</span> <span class='t-M'>(よく)</span> <span class='t-V'>転びます</span> そして<span class='t-V'>します</span> <span class='t-O'>服を</span> <span class='t-C'>汚れた状態に</span>。",
                            naturalTranslation: "しかし、丘はとても急なので、人々はよく転んで服を汚してしまいます。",
                            vocabulary: [
                                { word: "often", meaning: "「よく」「しばしば」。" },
                                { word: "dirty", meaning: "「汚れた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "get their clothes dirty", explanation: "<b>get O C</b>: 「OをCにする」。服を汚れた状態にする＝服を汚す。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 16,
                        text: "Although the event is exciting, some people worry about it.",
                        translation: "イベントは刺激的ですが、それを心配する人々もいます。",
                        grammarAnalysis: {
                            mainVerbs: ["worry"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Although <span class='chunk S2-group'><span class='text'>the event</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>exciting</span><span class='tag'>C'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>worry</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(about it)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(<span class='t-S2'>イベントは</span> <span class='t-V2'>ですが</span> <span class='t-C2'>刺激的/わくわくする</span>けれども)</span>、<span class='t-S'>一部の人々は</span> <span class='t-V'>心配します</span> <span class='t-M'>(それについて)</span>。",
                            naturalTranslation: "イベントは刺激的ですが、それを心配する人々もいます。",
                            vocabulary: [
                                { word: "Although", meaning: "「〜だけれども」。" },
                                { word: "exciting", meaning: "「興奮させる」「刺激的な」。" },
                                { word: "worry about", meaning: "「〜について心配する」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 17,
                        text: "It is very dangerous, and many runners get hurt every year.",
                        translation: "それはとても危険で、毎年多くの走者が怪我をします。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "get hurt"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very dangerous</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>many runners</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>get hurt</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(every year)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>とても危険</span>、そして<span class='t-S'>多くの走者が</span> <span class='t-V'>怪我をします</span> <span class='t-M'>(毎年)</span>。",
                            naturalTranslation: "それはとても危険で、毎年多くの走者が怪我をします。",
                            vocabulary: [
                                { word: "dangerous", meaning: "「危険な」。" },
                                { word: "get hurt", meaning: "「怪我をする」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 18,
                        text: "The police tried to stop the event in 2010 because of the danger.",
                        translation: "警察は危険だという理由で、2010年にイベントを中止させようとしました。",
                        grammarAnalysis: {
                            mainVerbs: ["tried"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The police</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>tried to stop</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the event</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in 2010)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(because of the danger)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>警察は</span> <span class='t-V'>止めようとしました</span> <span class='t-O'>イベントを</span> <span class='t-M'>(2010年に)</span> <span class='t-M'>(危険のために)</span>。",
                            naturalTranslation: "警察は危険だという理由で、2010年にイベントを中止させようとしました。",
                            vocabulary: [
                                { word: "police", meaning: "「警察」。" },
                                { word: "because of", meaning: "「〜のために」「〜が理由で」。" },
                                { word: "danger", meaning: "「危険」。dangerousの名詞形。" }
                            ],
                            grammarNotes: [
                                { phrase: "tried to stop", explanation: "<b>try to do</b>: 「〜しようとする」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "However, the fans love the tradition, so they continue to hold the event every year.",
                        translation: "しかし、ファンたちはその伝統を愛しているため、彼らは毎年イベントを開催し続けています。",
                        grammarAnalysis: {
                            mainVerbs: ["love", "continue"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the fans</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>love</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the tradition</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>continue to hold</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the event</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(every year)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>ファンたちは</span> <span class='t-V'>愛しています</span> <span class='t-O'>その伝統を</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼らは</span> <span class='t-V'>開催し続けます</span> <span class='t-O'>イベントを</span> <span class='t-M'>(毎年)</span>。",
                            naturalTranslation: "しかし、ファンたちはその伝統を愛しているため、彼らは毎年イベントを開催し続けています。",
                            vocabulary: [
                                { word: "fans", meaning: "「ファン」「愛好者」。" },
                                { word: "tradition", meaning: "「伝統」。" },
                                { word: "continue", meaning: "「続ける」。" },
                                { word: "hold", meaning: "「（イベントなどを）開催する」。" }
                            ],
                            grammarNotes: [
                                { phrase: "continue to hold", explanation: "<b>continue to do</b>: 「〜し続ける」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "How is Cooper's Hill usually?",
                textTranslation: "普段のクーパーズ・ヒルはどのような場所ですか？",
                choices: [
                    { id: 1, text: "It is full of cheese.", translation: "チーズでいっぱいです。", isCorrect: false },
                    { id: 2, text: "It is a quiet place.", translation: "静かな場所です。", isCorrect: true, highlight: "Usually ... a very quiet place" },
                    { id: 3, text: "It is a dangerous town.", translation: "危険な町です。", isCorrect: false },
                    { id: 4, text: "It is full of visitors.", translation: "訪問者でいっぱいです。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「Usually」（普段は）という言葉を探しましょう。",
                    targetSentenceId: 2,
                    highlightWord: "Usually, it is a very quiet place",
                    highlightWordSentenceId: 2
                },
                keywords: ["usually"],
                keywordExplanations: {
                    "usually": "「普段は」「たいてい」。頻度を表す重要なキーワード。"
                },
                keywordMatches: [
                    { sentenceId: 2, text: "Usually, it is a very quiet place", keyword: "usually" }
                ],
                choiceAdvice: "1: チーズだらけ？ 2: 静か？ 3: 危険な町？ 4: 客がいっぱい（これはイベント当日のこと）？",
                logic: [
                    { type: "text", content: "本文第1段落(Sentence 2): \"Usually, it is a very quiet place with few visitors.\"" },
                    { type: "text", content: "設問: \"How is Cooper's Hill usually?\"" },
                    { type: "text", content: "結論: 本文の記述 \"a very quiet place\" と選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 2,
                text: "Who took part in the event in the past?",
                textTranslation: "過去、誰がイベントに参加しましたか？",
                choices: [
                    { id: 1, text: "People from America.", translation: "アメリカからの人々。", isCorrect: false },
                    { id: 2, text: "Police officers.", translation: "警察官。", isCorrect: false },
                    { id: 3, text: "Local farmers.", translation: "地元の農家の人々。", isCorrect: true, highlight: "In the past, only local farmers" },
                    { id: 4, text: "Famous musicians.", translation: "有名な音楽家。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「In the past」（過去には）という言葉の近くを探しましょう。",
                    targetSentenceId: 7,
                    highlightWord: "only local farmers took part",
                    highlightWordSentenceId: 7
                },
                keywords: ["In the past", "took part"],
                keywordExplanations: {
                    "In the past": "過去には。昔の話。",
                    "took part": "参加した。participated と同じ。"
                },
                keywordMatches: [
                    { sentenceId: 7, text: "In the past, only local farmers took part", keyword: "took part" }
                ],
                choiceAdvice: "1: アメリカ人（これは現在の話）？ 2: 警察？ 3: 地元の農家？ 4: 音楽家？",
                logic: [
                    { type: "text", content: "本文第2段落(Sentence 7): \"In the past, only local farmers took part in the event.\"" },
                    { type: "text", content: "設問: \"Who took part ... in the past?\"" },
                    { type: "text", content: "結論: 本文の \"local farmers\" と選択肢3が一致する。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 3,
                text: "What do runners try to do at the event?",
                textTranslation: "イベントで走者たちは何をしようとしますか？",
                choices: [
                    { id: 1, text: "Eat a lot of cheese.", translation: "たくさんのチーズを食べる。", isCorrect: false },
                    { id: 2, text: "Throw tomatoes.", translation: "トマトを投げる（これは類題のトマト祭りの話）。", isCorrect: false },
                    { id: 3, text: "Wear white clothes.", translation: "白い服を着る（これもトマト祭りの話）。", isCorrect: false },
                    { id: 4, text: "Catch the cheese.", translation: "チーズを捕まえる。", isCorrect: true, highlight: "runners try to catch the cheese" }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「runners」（走者たち）が何をするか確認しましょう。",
                    targetSentenceId: 13,
                    highlightWord: "runners try to catch the cheese",
                    highlightWordSentenceId: 13
                },
                keywords: ["try to do", "runners"],
                keywordExplanations: {
                    "try to do": "〜しようとする。",
                    "runners": "走者。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "runners try to catch the cheese", keyword: "try to do" }
                ],
                choiceAdvice: "1: 食べる？ 2: トマトを投げる？ 3: 白い服？ 4: チーズを捕まえる？",
                logic: [
                    { type: "text", content: "本文第3段落(Sentence 13): \"At the event, runners try to catch the cheese.\"" },
                    { type: "text", content: "結論: 本文の記述と選択肢4が一致する。" },
                    { type: "conclusion", content: "正解: 4" }
                ]
            },
            {
                id: 4,
                text: "Why did the police try to stop the event?",
                textTranslation: "なぜ警察はイベントを止めようとしたのですか？",
                choices: [
                    { id: 1, text: "Because it is dangerous.", translation: "危険だから。", isCorrect: true, highlight: "because of the danger" },
                    { id: 2, text: "Because they don't like cheese.", translation: "彼らがチーズを嫌いだから。", isCorrect: false },
                    { id: 3, text: "Because it is too expensive.", translation: "費用がかかりすぎるから。", isCorrect: false },
                    { id: 4, text: "Because the hill is too small.", translation: "丘が小さすぎるから。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。警察(police)が止めようとした理由(because...)を探します。",
                    targetSentenceId: 18,
                    highlightWord: "because of the danger",
                    highlightWordSentenceId: 18
                },
                keywords: ["police", "stop", "why"],
                keywordExplanations: {
                    "why": "なぜ。理由を問う。",
                    "because": "〜だから。理由に答える接続詞。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "because of the danger", keyword: "because" }
                ],
                choiceAdvice: "1: 危険だから？ 2: チーズ嫌い？ 3: 高すぎる？ 4: 狭すぎる？",
                logic: [
                    { type: "text", content: "本文第4段落(Sentence 18): \"The police tried to stop the event ... because of the danger.\"" },
                    { type: "text", content: "結論: \"danger\"（危険）という理由と、選択肢1 \"Because it is dangerous.\" が一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 5,
                text: "What is this passage about?",
                textTranslation: "この文章は何についてですか？",
                choices: [
                    { id: 1, text: "A cooking festival in Japan.", translation: "日本の料理祭り。", isCorrect: false },
                    { id: 2, text: "A famous event in England.", translation: "イギリスの有名なイベント。", isCorrect: true, highlight: "Cooper's Hill Cheese-Rolling ... event" },
                    { id: 3, text: "A story about a farmer.", translation: "ある農家の物語。", isCorrect: false },
                    { id: 4, text: "A history of cheese making.", translation: "チーズ作りの歴史。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "全体を読みましょう。タイトルや第1段落がヒントになります。",
                    targetSentenceId: null,
                    highlightWord: null,
                    highlightWordSentenceId: null
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。主題を問う。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 日本の祭り？ 2: イギリスのイベント？ 3: 農家の話？ 4: チーズ作りの歴史？",
                logic: [
                    { type: "text", content: "タイトル: \"Cooper's Hill Cheese-Rolling\"" },
                    { type: "text", content: "本文第1段落: \"in England\"" },
                    { type: "text", content: "本文全体を通して、チーズ転がしというイベントについて説明している。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Cooper's Hill Cheese-Rolling",
            intro: "イギリスの「チーズ転がし祭り」についての説明文です。静かな場所がイベントで賑わう様子や、その危険性に関する課題を扱っています。",
            points: [
                { label: "1. 導入 (Introduction)", text: "普段は静かなクーパーズ・ヒルですが、年に一度の5月には数千人が訪れます。彼らの目的は伝統的なチーズ転がしを見ることです。" },
                { label: "2. 歴史 (History)", text: "約600年前に地元の農家の人々が春の訪れを祝うために始めました。丘からチーズを転がし、それを追いかけるゲームでした。" },
                { label: "3. 現在 (Present)", text: "現在は世界中（アメリカや日本など）から参加者が集まります。勝者はチーズをもらえますが、急な坂で転んで服を汚すことがよくあります。" },
                { label: "4. 課題 (Controversy)", text: "イベントは刺激的ですが、非常に危険で怪我人が出るため、警察が中止を試みたこともあります。しかし、ファンの熱意により続いています。" }
            ]
        }
    },
    {
        id: "grade-3-original-rice-fish",
        grade: "3級",
        title: "The Rice-Fish Method",
        subTitle: "問題2",
        genre: "自然 / 環境",
        similarProblems: {
            exam: "2025年度 第1回",
            title: "The Three Sisters"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Rice+Fish+Method",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "In many parts of Asia, rice is the most important food.",
                        translation: "アジアの多くの地域では、米が最も重要な食べ物です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In many parts of Asia)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>rice</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the most important food</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(アジアの多くの地域では)</span>、<span class='t-S'>米は</span> <span class='t-V'>です</span> <span class='t-C'>最も重要な食べ物</span>。",
                            naturalTranslation: "アジアの多くの地域では、米が最も重要な食べ物です。",
                            vocabulary: [
                                { word: "Asia", meaning: "「アジア」。" },
                                { word: "important", meaning: "「重要な」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 2,
                        text: "Growing rice takes a lot of time and water.",
                        translation: "米を育てるには多くの時間と水がかかります。",
                        grammarAnalysis: {
                            mainVerbs: ["takes"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Growing rice</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>takes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a lot of time and water</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>米を育てることは</span> <span class='t-V'>必要とします</span> <span class='t-O'>多くの時間と水を</span>。",
                            naturalTranslation: "米を育てるには多くの時間と水がかかります。",
                            vocabulary: [
                                { word: "Growing", meaning: "「育てること」。動名詞。" },
                                { word: "takes", meaning: "「（時間などが）かかる」「必要とする」。" }
                            ],
                            grammarNotes: [
                                { phrase: "Growing rice", explanation: "<b>Growing</b>: 動名詞が主語。「米を育てること」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Farmers work hard in the fields every day.",
                        translation: "農家の人々は毎日畑で一生懸命働きます。",
                        grammarAnalysis: {
                            mainVerbs: ["work"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>work</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>hard</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in the fields)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(every day)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>農家の人々は</span> <span class='t-V'>働きます</span> <span class='t-M'>一生懸命</span> <span class='t-M'>(畑で)</span> <span class='t-M'>(毎日)</span>。",
                            naturalTranslation: "農家の人々は毎日畑で一生懸命働きます。",
                            vocabulary: [
                                { word: "Farmers", meaning: "「農家の人々」。" },
                                { word: "fields", meaning: "「畑」「田んぼ」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 4,
                        text: "Some farmers in countries like China and Japan use a special traditional way to grow rice.",
                        translation: "中国や日本のような国々の一部農家は、米を育てるための特別な伝統的方法を使っています。",
                        grammarAnalysis: {
                            mainVerbs: ["use"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Some farmers in countries like China and Japan</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a special traditional way</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to grow rice)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>中国や日本のような国々の一部の農家は</span> <span class='t-V'>使います</span> <span class='t-O'>特別な伝統的方法を</span> <span class='t-M'>(米を育てるための)</span>。",
                            naturalTranslation: "中国や日本のような国々の一部農家は、米を育てるための特別な伝統的方法を使っています。",
                            vocabulary: [
                                { word: "traditional", meaning: "「伝統的な」。" },
                                { word: "way", meaning: "「方法」。methodと同義。" }
                            ],
                            grammarNotes: [
                                { phrase: "to grow", explanation: "<b>to grow</b>: 形容詞的用法。「育てるための（方法）」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "It is called the \"Rice-Fish Method.\"",
                        translation: "それは「稲魚農法（合鴨農法などに類似）」と呼ばれています。",
                        grammarAnalysis: {
                            mainVerbs: ["is called"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the \"Rice-Fish Method\"</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>「稲魚農法」と</span>。",
                            naturalTranslation: "それは「稲魚農法」と呼ばれています。",
                            vocabulary: [
                                { word: "called", meaning: "「〜と呼ばれる」。受動態。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 6,
                        text: "This method helps farmers to grow good rice without using chemicals.",
                        translation: "この方法は、農家が化学薬品（農薬）を使わずに良い米を育てるのを助けます。",
                        grammarAnalysis: {
                            mainVerbs: ["helps"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This method</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>farmers</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to grow good rice</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(without using chemicals)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この方法は</span> <span class='t-V'>助けます</span> <span class='t-O'>農家が</span> <span class='t-C'>良い米を育てるのを</span> <span class='t-M'>(化学薬品を使わずに)</span>。",
                            naturalTranslation: "この方法は、農家が化学薬品を使わずに良い米を育てるのを助けます。",
                            vocabulary: [
                                { word: "method", meaning: "「方法」。" },
                                { word: "chemicals", meaning: "「化学薬品」「農薬」。" }
                            ],
                            grammarNotes: [
                                { phrase: "helps farmers to grow", explanation: "<b>help O to do</b>: 「Oが〜するのを助ける」。" },
                                { phrase: "without using", explanation: "<b>without doing</b>: 「〜せずに」。" }
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
                        text: "In the Rice-Fish Method, farmers put fish into the wet rice fields.",
                        translation: "稲魚農法では、農家は水田に魚を入れます。",
                        grammarAnalysis: {
                            mainVerbs: ["put"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the Rice-Fish Method)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>put</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>fish</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(into the wet rice fields)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(稲魚農法では)</span>、<span class='t-S'>農家は</span> <span class='t-V'>入れます</span> <span class='t-O'>魚を</span> <span class='t-M'>(湿った水田の中に)</span>。",
                            naturalTranslation: "稲魚農法では、農家は水田に魚を入れます。",
                            vocabulary: [
                                { word: "wet", meaning: "「濡れた」「湿った」。" },
                                { word: "fields", meaning: "「畑」「田んぼ」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 8,
                        text: "They usually use a type of red fish or carp.",
                        translation: "彼らはたいてい、ある種の赤い魚やコイを使います。",
                        grammarAnalysis: {
                            mainVerbs: ["use"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a type of red fish or carp</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-M'>(たいてい)</span> <span class='t-V'>使います</span> <span class='t-O'>ある種の赤い魚やコイを</span>。",
                            naturalTranslation: "彼らはたいてい、ある種の赤い魚やコイを使います。",
                            vocabulary: [
                                { word: "type", meaning: "「種類」「タイプ」。" },
                                { word: "carp", meaning: "「コイ」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 9,
                        text: "The rice and the fish live together in the same water.",
                        translation: "米と魚は同じ水の中で一緒に生きます。",
                        grammarAnalysis: {
                            mainVerbs: ["live"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The rice and the fish</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>live</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>together</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in the same water)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>米と魚は</span> <span class='t-V'>生きます</span> <span class='t-M'>一緒に</span> <span class='t-M'>(同じ水の中で)</span>。",
                            naturalTranslation: "米と魚は同じ水の中で一緒に生きます。",
                            vocabulary: [
                                { word: "live", meaning: "「生きる」「住む」。" },
                                { word: "together", meaning: "「一緒に」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 10,
                        text: "When farmers use this method, they plant the rice first.",
                        translation: "農家がこの方法を使うとき、彼らは最初に米（稲）を植えます。",
                        grammarAnalysis: {
                            mainVerbs: ["plant"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When farmers use this method)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>plant</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the rice</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>first</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(農家がこの方法を使うとき)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>植えます</span> <span class='t-O'>米を</span> <span class='t-M'>最初に</span>。",
                            naturalTranslation: "農家がこの方法を使うとき、彼らは最初に米（稲）を植えます。",
                            vocabulary: [
                                { word: "plant", meaning: "「植える」。名詞の植物と同形。" },
                                { word: "first", meaning: "「最初に」「まず」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 11,
                        text: "After the rice grows a little, they put the young fish into the water.",
                        translation: "稲が少し育った後、彼らは若い魚を水に入れます。",
                        grammarAnalysis: {
                            mainVerbs: ["put"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After the rice grows a little)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>put</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the young fish</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(into the water)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(稲が少し育った後)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>入れます</span> <span class='t-O'>若い魚を</span> <span class='t-M'>(水の中に)</span>。",
                            naturalTranslation: "稲が少し育った後、彼らは若い魚を水に入れます。",
                            vocabulary: [
                                { word: "After", meaning: "「〜の後」。接続詞。" },
                                { word: "young", meaning: "「若い」「幼い」。" }
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
                        id: 12,
                        text: "This method is good for both the rice and the fish.",
                        translation: "この方法は米と魚の両方にとって良いものです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This method</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>good</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for both the rice and the fish)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この方法は</span> <span class='t-V'>です</span> <span class='t-C'>良い</span> <span class='t-M'>(米と魚の両方にとって)</span>。",
                            naturalTranslation: "この方法は米と魚の両方にとって良いものです。",
                            vocabulary: [
                                { word: "both A and B", meaning: "「AとBの両方」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 13,
                        text: "The fish eat insects that are bad for the rice plants.",
                        translation: "魚は稲にとって悪い昆虫を食べます。",
                        grammarAnalysis: {
                            mainVerbs: ["eat"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The fish</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>eat</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>insects</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(that are bad for the rice plants)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>魚は</span> <span class='t-V'>食べます</span> <span class='t-O'>昆虫を</span> <span class='t-M'>(稲にとって悪い)</span>。",
                            naturalTranslation: "魚は稲にとって悪い昆虫を食べます。",
                            vocabulary: [
                                { word: "insects", meaning: "「昆虫」。" },
                                { word: "bad", meaning: "「悪い」「害になる」。" }
                            ],
                            grammarNotes: [
                                { phrase: "that are bad...", explanation: "<b>that</b>: 関係代名詞。insectsを修飾する。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "This helps the rice to grow strong.",
                        translation: "これは稲が強く育つのを助けます。",
                        grammarAnalysis: {
                            mainVerbs: ["helps"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helps</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the rice</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to grow strong</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>助けます</span> <span class='t-O'>稲が</span> <span class='t-C'>強く育つのを</span>。",
                            naturalTranslation: "これは稲が強く育つのを助けます。",
                            vocabulary: [
                                { word: "strong", meaning: "「強い」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 15,
                        text: "Also, the fish swim around and move the water.",
                        translation: "また、魚は泳ぎ回って水を動かします。",
                        grammarAnalysis: {
                            mainVerbs: ["swim", "move"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the fish</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>swim around</span><span class='tag'>V</span></span> and <span class='chunk V-group'><span class='text'>move</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the water</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-S'>魚は</span> <span class='t-V'>泳ぎ回ります</span> そして<span class='t-V'>動かします</span> <span class='t-O'>水を</span>。",
                            naturalTranslation: "また、魚は泳ぎ回って水を動かします。",
                            vocabulary: [
                                { word: "swim around", meaning: "「泳ぎ回る」。" },
                                { word: "move", meaning: "「動かす」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 16,
                        text: "This brings air into the water, which is good for the rice roots.",
                        translation: "これは水の中に空気をもたらし、それは稲の根にとって良いことです。",
                        grammarAnalysis: {
                            mainVerbs: ["brings"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>brings</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>air</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(into the water)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(which is good for the rice roots)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>持ち込みます</span> <span class='t-O'>空気を</span> <span class='t-M'>(水の中に)</span>、<span class='t-M'>(そしてそれは稲の根にとって良い)</span>。",
                            naturalTranslation: "これは水の中に空気をもたらし、それは稲の根にとって良いことです。",
                            vocabulary: [
                                { word: "brings", meaning: "「持ってくる」「もたらす」。" },
                                { word: "roots", meaning: "「根」。" }
                            ],
                            grammarNotes: [
                                { phrase: "which is good...", explanation: "<b>which</b>: 関係代名詞の非制限用法。前の文の内容を受けて「それは〜」と説明する。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "The rice plants are important for the fish, too.",
                        translation: "稲は魚にとっても重要です。",
                        grammarAnalysis: {
                            mainVerbs: ["are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The rice plants</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>important</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for the fish, too)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>稲は</span> <span class='t-V'>です</span> <span class='t-C'>重要な</span> <span class='t-M'>(魚にとっても)</span>。",
                            naturalTranslation: "稲は魚にとっても重要です。",
                            vocabulary: [],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 18,
                        text: "The large rice leaves make shade, so the water does not become too hot for the fish.",
                        translation: "稲の大きな葉が日陰を作るので、水は魚にとって熱くなりすぎません。",
                        grammarAnalysis: {
                            mainVerbs: ["make", "become"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The large rice leaves</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>make</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>shade</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>the water</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>does not become</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>too hot</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for the fish)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>大きな稲の葉は</span> <span class='t-V'>作ります</span> <span class='t-O'>日陰を</span>、<span class='t-M'>(だから)</span> <span class='t-S'>水は</span> <span class='t-V'>なりません</span> <span class='t-C'>熱すぎる状態に</span> <span class='t-M'>(魚にとって)</span>。",
                            naturalTranslation: "稲の大きな葉が日陰を作るので、水は魚にとって熱くなりすぎません。",
                            vocabulary: [
                                { word: "shade", meaning: "「日陰」。" },
                                { word: "become", meaning: "「〜になる」。" }
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
                        id: 19,
                        text: "Many years ago, most farmers used this method.",
                        translation: "何年も前、ほとんどの農家はこの方法を使っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["used"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Many years ago)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>most farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>this method</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(何年も前)</span>、<span class='t-S'>ほとんどの農家は</span> <span class='t-V'>使っていました</span> <span class='t-O'>この方法を</span>。",
                            naturalTranslation: "何年も前、ほとんどの農家はこの方法を使っていました。",
                            vocabulary: [
                                { word: "most", meaning: "「大部分の」「ほとんどの」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 20,
                        text: "However, when new farming machines and chemicals appeared, some farmers stopped using it.",
                        translation: "しかし、新しい農業機械や化学薬品が登場したとき、一部の農家はそれを使うのをやめました。",
                        grammarAnalysis: {
                            mainVerbs: ["stopped"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(when new farming machines and chemicals appeared)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>some farmers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>stopped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>using it</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-M'>(新しい農業機械や化学薬品が現れたとき)</span>、<span class='t-S'>一部の農家は</span> <span class='t-V'>やめました</span> <span class='t-O'>それを使うのを</span>。",
                            naturalTranslation: "しかし、新しい農業機械や化学薬品が登場したとき、一部の農家はそれを使うのをやめました。",
                            vocabulary: [
                                { word: "appeared", meaning: "「現れた」「登場した」。" },
                                { word: "stopped", meaning: "「やめた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "stopped using", explanation: "<b>stop doing</b>: 「〜するのをやめる」。stop to do（〜するために立ち止まる）との違いに注意。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "Today, people want safe food, so the Rice-Fish Method is becoming popular again.",
                        translation: "今日では、人々が安全な食べ物を求めているため、稲魚農法は再び人気になっています。",
                        grammarAnalysis: {
                            mainVerbs: ["want", "is becoming"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>want</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>safe food</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>the Rice-Fish Method</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is becoming</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>popular</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>again</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(今日では)</span>、<span class='t-S'>人々は</span> <span class='t-V'>求めます</span> <span class='t-O'>安全な食べ物を</span>、<span class='t-M'>(だから)</span> <span class='t-S'>稲魚農法は</span> <span class='t-V'>なりつつあります</span> <span class='t-C'>人気に</span> <span class='t-M'>再び</span>。",
                            naturalTranslation: "今日では、人々が安全な食べ物を求めているため、稲魚農法は再び人気になっています。",
                            vocabulary: [
                                { word: "safe", meaning: "「安全な」。" },
                                { word: "popular", meaning: "「人気のある」。" }
                            ],
                            grammarNotes: [
                                { phrase: "is becoming", explanation: "<b>becoming</b>: 「〜になりつつある」。進行形。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "It is a great way to farm with nature.",
                        translation: "それは自然と共に農業をする素晴らしい方法です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a great way</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(to farm with nature)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>素晴らしい方法</span> <span class='t-M'>(自然と共に農業をするための)</span>。",
                            naturalTranslation: "それは自然と共に農業をする素晴らしい方法です。",
                            vocabulary: [
                                { word: "great", meaning: "「素晴らしい」。" },
                                { word: "nature", meaning: "「自然」。" }
                            ],
                            grammarNotes: [
                                { phrase: "way to farm", explanation: "<b>way to do</b>: 「〜する方法」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "What does the Rice-Fish Method help farmers to do?",
                textTranslation: "稲魚農法は農家が何をするのを助けますか？",
                choices: [
                    { id: 1, text: "Cook rice and fish quickly.", translation: "米と魚を素早く調理する。", isCorrect: false },
                    { id: 2, text: "Grow rice without chemicals.", translation: "化学薬品を使わずに米を育てる。", isCorrect: true, highlight: "helps farmers to grow good rice without using chemicals" },
                    { id: 3, text: "Catch fish in the ocean.", translation: "海で魚を捕まえる。", isCorrect: false },
                    { id: 4, text: "Use machines in the fields.", translation: "畑で機械を使う。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「helps farmers」（農家を助ける）を探しましょう。",
                    targetSentenceId: 6,
                    highlightWord: "helps farmers to grow good rice without using chemicals",
                    highlightWordSentenceId: 6
                },
                keywords: ["help", "do"],
                keywordExplanations: {
                    "help": "助ける。",
                    "without": "〜なしで。"
                },
                keywordMatches: [
                    { sentenceId: 6, text: "This method helps farmers ... without using chemicals", keyword: "helps" }
                ],
                choiceAdvice: "1: 料理する？ 2: 化学薬品なしで育てる？ 3: 海で釣り？ 4: 機械を使う？",
                logic: [
                    { type: "text", content: "本文第1段落(Sentence 6): \"This method helps farmers to grow good rice without using chemicals.\"" },
                    { type: "text", content: "結論: 本文の内容と選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 2,
                text: "What do farmers do first in this method?",
                textTranslation: "農家はこの方法で最初に何をしますか？",
                choices: [
                    { id: 1, text: "They catch the insects.", translation: "昆虫を捕まえる。", isCorrect: false },
                    { id: 2, text: "They put fish in the water.", translation: "水に魚を入れる。", isCorrect: false },
                    { id: 3, text: "They plant the rice.", translation: "米（稲）を植える。", isCorrect: true, highlight: "they plant the rice first" },
                    { id: 4, text: "They eat the fish.", translation: "魚を食べる。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「first」（最初に）の手順を確認しましょう。",
                    targetSentenceId: 10,
                    highlightWord: "plant the rice first",
                    highlightWordSentenceId: 10
                },
                keywords: ["first", "do"],
                keywordExplanations: {
                    "first": "最初に。"
                },
                keywordMatches: [
                    { sentenceId: 10, text: "they plant the rice first", keyword: "first" }
                ],
                choiceAdvice: "1: 虫取り？ 2: 魚を入れる（これは後）？ 3: 米を植える？ 4: 食べる？",
                logic: [
                    { type: "text", content: "本文第2段落(Sentence 10): \"When farmers use this method, they plant the rice first.\"" },
                    { type: "text", content: "結論: \"plant the rice\" と選択肢3が一致する。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 3,
                text: "How do the fish help the rice?",
                textTranslation: "魚はどのように米を助けますか？",
                choices: [
                    { id: 1, text: "They eat bad insects.", translation: "悪い昆虫を食べる。", isCorrect: true, highlight: "The fish eat insects" },
                    { id: 2, text: "They make the water hot.", translation: "水を熱くする。", isCorrect: false },
                    { id: 3, text: "They eat the rice leaves.", translation: "稲の葉を食べる。", isCorrect: false },
                    { id: 4, text: "They bring shade to the plants.", translation: "植物に日陰をもたらす（これは稲の役割）。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「fish」（魚）が何をするか確認しましょう。",
                    targetSentenceId: 13,
                    highlightWord: "fish eat insects",
                    highlightWordSentenceId: 13
                },
                keywords: ["how", "help"],
                keywordExplanations: {
                    "eat": "食べる。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "The fish eat insects", keyword: "eat" }
                ],
                choiceAdvice: "1: 虫を食べる？ 2: 熱くする？ 3: 葉を食べる？ 4: 日陰を作る？",
                logic: [
                    { type: "text", content: "本文第3段落(Sentence 13): \"The fish eat insects that are bad for the rice plants.\"" },
                    { type: "text", content: "結論: 虫を食べるという記述と選択肢1が一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 4,
                text: "Why is the method becoming popular again today?",
                textTranslation: "なぜこの方法は今日また人気になっているのですか？",
                choices: [
                    { id: 1, text: "Because machines are too expensive.", translation: "機械が高すぎるから。", isCorrect: false },
                    { id: 2, text: "Because people want safe food.", translation: "人々が安全な食べ物を求めているから。", isCorrect: true, highlight: "people want safe food" },
                    { id: 3, text: "Because there are no more insects.", translation: "もう昆虫がいないから。", isCorrect: false },
                    { id: 4, text: "Because farmers have more time.", translation: "農家にもっと時間があるから。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「Today」（今日では）の文で、人気の理由(so...の前)を探します。",
                    targetSentenceId: 21,
                    highlightWord: "people want safe food",
                    highlightWordSentenceId: 21
                },
                keywords: ["why", "popular"],
                keywordExplanations: {
                    "want": "欲しい、求める。",
                    "safe": "安全な。"
                },
                keywordMatches: [
                    { sentenceId: 21, text: "people want safe food", keyword: "want" }
                ],
                choiceAdvice: "1: 機械が高い？ 2: 安全な食べ物が欲しい？ 3: 虫がいない？ 4: 暇だから？",
                logic: [
                    { type: "text", content: "本文第4段落(Sentence 21): \"Today, people want safe food, so the Rice-Fish Method is becoming popular again.\"" },
                    { type: "text", content: "結論: \"want safe food\" と選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A famous fish market.", translation: "有名な魚市場。", isCorrect: false },
                    { id: 2, text: "A special way to grow rice.", translation: "米を育てる特別な方法。", isCorrect: true, highlight: "special traditional way to grow rice" },
                    { id: 3, text: "A history of farming machines.", translation: "農業機械の歴史。", isCorrect: false },
                    { id: 4, text: "A traditional way to cook fish.", translation: "魚を料理する伝統的な方法。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "全体を読みましょう。タイトルや第1段落がヒントになります。",
                    targetSentenceId: null,
                    highlightWord: null,
                    highlightWordSentenceId: null
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 魚市場？ 2: 米の育て方？ 3: 機械の歴史？ 4: 魚料理？",
                logic: [
                    { type: "text", content: "タイトル: \"The Rice-Fish Method\"" },
                    { type: "text", content: "本文第1段落: \"a special traditional way to grow rice\"" },
                    { type: "text", content: "結論: 米の成育方法についての説明であるため、選択肢2が正解。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Rice-Fish Method",
            intro: "アジア（中国や日本など）の伝統的な「稲魚農法（合鴨農法などの類似）」についての説明文です。",
            points: [
                { label: "1. 導入 (Introduction)", text: "米作りは大変ですが、化学薬品を使わずに育てる伝統的な「稲魚農法」があります。" },
                { label: "2. The Method (方法と順序)", text: "水田に魚を入れます。順序としては、まず稲を植え、少し育ってから若い魚を放ちます。" },
                { label: "3. Benefits (利点と役割)", text: "魚は害虫を食べ、泳ぐことで水に酸素を送ります。稲は葉で日陰を作り、水温が上がりすぎるのを防いで魚を守ります。" },
                { label: "4. Conclusion (歴史)", text: "機械や農薬の登場で一度は減りましたが、食の安全が求められる今、自然に優しい農法として再び人気が出ています。" }
            ]
        }
    },
    {
        id: "grade-3-original-rudolf-diesel",
        grade: "3級",
        title: "Rudolf Diesel",
        subTitle: "問題3",
        genre: "歴史 / 伝記",
        similarProblems: {
            exam: "2024年度 第3回",
            title: "Gustave Trouvé"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Rudolf+Diesel",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Rudolf Diesel was born in France in 1858.",
                        translation: "ルドルフ・ディーゼルは1858年にフランスで生まれました。",
                        grammarAnalysis: {
                            mainVerbs: ["was born"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Rudolf Diesel</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was born</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in France)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in 1858)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ルドルフ・ディーゼルは</span> <span class='t-V'>生まれました</span> <span class='t-M'>(フランスで)</span> <span class='t-M'>(1858年に)</span>。",
                            naturalTranslation: "ルドルフ・ディーゼルは1858年にフランスで生まれました。",
                            vocabulary: [
                                { word: "born", meaning: "「生まれた」。be bornで「生まれる」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 2,
                        text: "His father made money by making bags.",
                        translation: "彼の父は鞄を作ってお金を稼いでいました。",
                        grammarAnalysis: {
                            mainVerbs: ["made"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>His father</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>money</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(by making bags)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼の父は</span> <span class='t-V'>作りました/稼ぎました</span> <span class='t-O'>お金を</span> <span class='t-M'>(鞄を作ることによって)</span>。",
                            naturalTranslation: "彼の父は鞄を作ってお金を稼いでいました。",
                            vocabulary: [
                                { word: "made money", meaning: "「お金を稼いだ」。" },
                                { word: "making", meaning: "「作ること」。動名詞。" }
                            ],
                            grammarNotes: [
                                { phrase: "by making", explanation: "<b>by doing</b>: 「〜することによって」。手段を表す。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Diesel enjoyed visiting museums when he was a child, and his father encouraged him to study.",
                        translation: "ディーゼルは子供の頃、博物館を訪れることを楽しんでおり、父は彼に勉強するよう励ましました。",
                        grammarAnalysis: {
                            mainVerbs: ["enjoyed", "encouraged"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Diesel</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>enjoyed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>visiting museums</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(when he was a child)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>his father</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>encouraged</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>him</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to study</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>ディーゼルは</span> <span class='t-V'>楽しみました</span> <span class='t-O'>博物館を訪れることを</span> <span class='t-M'>(彼が子供の時)</span>、そして<span class='t-S'>彼の父は</span> <span class='t-V'>励ましました</span> <span class='t-O'>彼に</span> <span class='t-C'>勉強するよう</span>。",
                            naturalTranslation: "ディーゼルは子供の頃、博物館を訪れることを楽しんでおり、父は彼に勉強するよう励ましました。",
                            vocabulary: [
                                { word: "enjoyed", meaning: "「楽しんだ」。" },
                                { word: "museums", meaning: "「博物館」。" },
                                { word: "encouraged", meaning: "「励ました」。" }
                            ],
                            grammarNotes: [
                                { phrase: "enjoyed visiting", explanation: "<b>enjoy doing</b>: 「〜することを楽しむ」。動名詞のみを目的語にとる。" },
                                { phrase: "encouraged him to study", explanation: "<b>encourage O to do</b>: 「Oに〜するよう励ます/勧める」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "When Diesel was fourteen years old, he wrote a letter to his parents and said he wanted to be an engineer.",
                        translation: "ディーゼルが14歳の時、彼は両親に手紙を書き、エンジニアになりたいと言いました。",
                        grammarAnalysis: {
                            mainVerbs: ["wrote", "said"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When Diesel was fourteen years old)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wrote</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a letter</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to his parents)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>said</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(that) he wanted to be an engineer</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(ディーゼルが14歳の時)</span>、<span class='t-S'>彼は</span> <span class='t-V'>書きました</span> <span class='t-O'>手紙を</span> <span class='t-M'>(両親へ)</span> そして<span class='t-V'>言いました</span> <span class='t-O'>エンジニアになりたいと</span>。",
                            naturalTranslation: "ディーゼルが14歳の時、彼は両親に手紙を書き、エンジニアになりたいと言いました。",
                            vocabulary: [
                                { word: "wrote", meaning: "「書いた」。" },
                                { word: "parents", meaning: "「両親」。" },
                                { word: "engineer", meaning: "「エンジニア」「技師」。" }
                            ],
                            grammarNotes: [
                                { phrase: "wanted to be", explanation: "<b>want to be</b>: 「〜になりたい」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 5,
                        text: "Diesel went to a famous college in Germany in the 1870s, but he had a hard time there.",
                        translation: "ディーゼルは1870年代にドイツの有名な大学へ行きましたが、そこで苦労しました。",
                        grammarAnalysis: {
                            mainVerbs: ["went", "had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Diesel</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>went</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to a famous college in Germany)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in the 1870s)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a hard time</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>there</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ディーゼルは</span> <span class='t-V'>行きました</span> <span class='t-M'>(ドイツの有名な大学へ)</span> <span class='t-M'>(1870年代に)</span>、しかし<span class='t-S'>彼は</span> <span class='t-V'>過ごしました</span> <span class='t-O'>つらい時間を（苦労した）</span> <span class='t-M'>そこで</span>。",
                            naturalTranslation: "ディーゼルは1870年代にドイツの有名な大学へ行きましたが、そこで苦労しました。",
                            vocabulary: [
                                { word: "college", meaning: "「大学」。" },
                                { word: "Germany", meaning: "「ドイツ」。" },
                                { word: "had a hard time", meaning: "「苦労した」「つらい時を過ごした」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 6,
                        text: "He got sick during his exams and couldn't graduate with his class, so he had to wait for the next year.",
                        translation: "彼は試験中に病気になり、クラスと一緒に卒業できなかったため、翌年まで待たなければなりませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["got", "couldn't graduate", "had to wait"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>got</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>sick</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(during his exams)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>couldn't graduate</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(with his class)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had to wait</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for the next year)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>なりました</span> <span class='t-C'>病気に</span> <span class='t-M'>(試験の間に)</span> そして<span class='t-V'>卒業できませんでした</span> <span class='t-M'>(彼のクラスと)</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼は</span> <span class='t-V'>待たなければなりませんでした</span> <span class='t-M'>(翌年まで)</span>。",
                            naturalTranslation: "彼は試験中に病気になり、クラスと一緒に卒業できなかったため、翌年まで待たなければなりませんでした。",
                            vocabulary: [
                                { word: "sick", meaning: "「病気の」。" },
                                { word: "exams", meaning: "「試験」。examinationの略。" },
                                { word: "graduate", meaning: "「卒業する」。" }
                            ],
                            grammarNotes: [
                                { phrase: "had to wait", explanation: "<b>had to do</b>: 「〜しなければならなかった」。have toの過去形。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "After that, Diesel got a job in Paris.",
                        translation: "その後、ディーゼルはパリで仕事を得ました。",
                        grammarAnalysis: {
                            mainVerbs: ["got"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After that)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Diesel</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>got</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a job</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in Paris)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>ディーゼルは</span> <span class='t-V'>得ました</span> <span class='t-O'>仕事を</span> <span class='t-M'>(パリで)</span>。",
                            naturalTranslation: "その後、ディーゼルはパリで仕事を得ました。",
                            vocabulary: [
                                { word: "job", meaning: "「仕事」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 8,
                        text: "His job was making machines for cooling things.",
                        translation: "彼の仕事は物を冷やすための機械（冷蔵庫）を作ることでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>His job</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>making machines</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for cooling things)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼の仕事は</span> <span class='t-V'>でした</span> <span class='t-C'>機械を作ること</span> <span class='t-M'>(物を冷やすための)</span>。",
                            naturalTranslation: "彼の仕事は物を冷やすための機械（冷蔵庫）を作ることでした。",
                            vocabulary: [
                                { word: "cooling", meaning: "「冷やすこと」。" }
                            ],
                            grammarNotes: [
                                { phrase: "making", explanation: "<b>making</b>: 動名詞。「作ること」。" },
                                { phrase: "for cooling", explanation: "<b>for doing</b>: 「〜するための」。目的や用途。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "He also had a workshop in his house.",
                        translation: "彼はまた、自宅に作業場を持っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a workshop</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in his house)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-M'>(また)</span> <span class='t-V'>持っていました</span> <span class='t-O'>作業場を</span> <span class='t-M'>(彼の家の中に)</span>。",
                            naturalTranslation: "彼はまた、自宅に作業場を持っていました。",
                            vocabulary: [
                                { word: "workshop", meaning: "「作業場」「工房」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 10,
                        text: "He thought about new ideas there.",
                        translation: "彼はそこで新しいアイデアについて考えました。",
                        grammarAnalysis: {
                            mainVerbs: ["thought"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>thought</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(about new ideas)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>there</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>考えました</span> <span class='t-M'>(新しいアイデアについて)</span> <span class='t-M'>そこで</span>。",
                            naturalTranslation: "彼はそこで新しいアイデアについて考えました。",
                            vocabulary: [
                                { word: "thought", meaning: "「考えた」。thinkの過去形。" },
                                { word: "ideas", meaning: "「アイデア」「考え」。" }
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
                        id: 11,
                        text: "In the 1700s, a British man invented a machine called the steam engine.",
                        translation: "1700年代に、あるイギリス人の男が蒸気機関と呼ばれる機械を発明しました。",
                        grammarAnalysis: {
                            mainVerbs: ["invented"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the 1700s)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a British man</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>invented</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a machine called the steam engine</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(1700年代に)</span>、<span class='t-S'>イギリス人男性が</span> <span class='t-V'>発明しました</span> <span class='t-O'>蒸気機関と呼ばれる機械を</span>。",
                            naturalTranslation: "1700年代に、あるイギリス人の男が蒸気機関と呼ばれる機械を発明しました。",
                            vocabulary: [
                                { word: "British", meaning: "「イギリスの」。" },
                                { word: "invented", meaning: "「発明した」。" },
                                { word: "machine", meaning: "「機械」。" },
                                { word: "steam engine", meaning: "「蒸気機関」。" }
                            ],
                            grammarNotes: [
                                { phrase: "called the steam engine", explanation: "<b>called</b>: 過去分詞。「〜と呼ばれる」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "People used steam engines to run trains and factories.",
                        translation: "人々は列車や工場を動かすために蒸気機関を使いました。",
                        grammarAnalysis: {
                            mainVerbs: ["used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>steam engines</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to run trains and factories)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>人々は</span> <span class='t-V'>使いました</span> <span class='t-O'>蒸気機関を</span> <span class='t-M'>(列車や工場を動かすために)</span>。",
                            naturalTranslation: "人々は列車や工場を動かすために蒸気機関を使いました。",
                            vocabulary: [
                                { word: "run", meaning: "「（機械などを）動かす」「走らせる」。" },
                                { word: "factories", meaning: "「工場」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to run", explanation: "<b>to run</b>: 不定詞の副詞的用法。「動かすために」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "But steam engines were heavy and used a lot of coal.",
                        translation: "しかし、蒸気機関は重く、多くの石炭を使いました。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>But steam engines</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>heavy</span><span class='tag'>C</span></span> and <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a lot of coal</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>しかし蒸気機関は</span> <span class='t-V'>でした</span> <span class='t-C'>重い</span> そして<span class='t-V'>使いました</span> <span class='t-O'>多くの石炭を</span>。",
                            naturalTranslation: "しかし、蒸気機関は重く、多くの石炭を使いました。",
                            vocabulary: [
                                { word: "heavy", meaning: "「重い」。" },
                                { word: "coal", meaning: "「石炭」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 14,
                        text: "Later, Diesel invented a new kind of engine.",
                        translation: "その後、ディーゼルは新しい種類のエンジンを発明しました。",
                        grammarAnalysis: {
                            mainVerbs: ["invented"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Later)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Diesel</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>invented</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a new kind of engine</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>ディーゼルは</span> <span class='t-V'>発明しました</span> <span class='t-O'>新しい種類のエンジンを</span>。",
                            naturalTranslation: "その後、ディーゼルは新しい種類のエンジンを発明しました。",
                            vocabulary: [
                                { word: "kind of", meaning: "「〜の種類」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 15,
                        text: "Diesel's engine was stronger and used less fuel, so it was more efficient than earlier engines.",
                        translation: "ディーゼルのエンジンはより強力で燃料の使用も少なかったため、以前のエンジンよりも効率的でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "used", "was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Diesel's engine</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>stronger</span><span class='tag'>C</span></span> and <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>less fuel</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>more efficient</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(than earlier engines)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ディーゼルのエンジンは</span> <span class='t-V'>でした</span> <span class='t-C'>より強い</span>、そして<span class='t-V'>使いました</span> <span class='t-O'>より少ない燃料を</span>、<span class='t-M'>(だから)</span> <span class='t-S'>それは</span> <span class='t-V'>でした</span> <span class='t-C'>より効率的</span> <span class='t-M'>(以前のエンジンよりも)</span>。",
                            naturalTranslation: "ディーゼルのエンジンはより強力で燃料の使用も少なかったため、以前のエンジンよりも効率的でした。",
                            vocabulary: [
                                { word: "stronger", meaning: "「より強い」。strongの比較級。" },
                                { word: "fuel", meaning: "「燃料」。" },
                                { word: "efficient", meaning: "「効率的な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "less fuel", explanation: "<b>less</b>: littleの比較級。「より少ない」。" },
                                { phrase: "more efficient", explanation: "<b>more ~</b>: 長い形容詞の比較級。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "People started using Diesel's engine to run large ships.",
                        translation: "人々は大型船を動かすためにディーゼルのエンジンを使い始めました。",
                        grammarAnalysis: {
                            mainVerbs: ["started"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>started</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>using Diesel's engine</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to run large ships)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>人々は</span> <span class='t-V'>始めました</span> <span class='t-O'>ディーゼルのエンジンを使うことを</span> <span class='t-M'>(大きな船を動かすために)</span>。",
                            naturalTranslation: "人々は大型船を動かすためにディーゼルのエンジンを使い始めました。",
                            vocabulary: [
                                { word: "started", meaning: "「始めた」。" },
                                { word: "ships", meaning: "「船」。" }
                            ],
                            grammarNotes: [
                                { phrase: "started using", explanation: "<b>start doing</b>: 「〜し始める」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 17,
                        text: "Diesel invented many things, but he was especially famous for his oil engines.",
                        translation: "ディーゼルは多くのものを発明しましたが、特に彼の石油エンジンで有名でした。",
                        grammarAnalysis: {
                            mainVerbs: ["invented", "was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Diesel</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>invented</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>many things</span><span class='tag'>O</span></span>, but <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>especially famous</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for his oil engines)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ディーゼルは</span> <span class='t-V'>発明しました</span> <span class='t-O'>多くのものを</span>、しかし<span class='t-S'>彼は</span> <span class='t-V'>でした</span> <span class='t-C'>特に有名</span> <span class='t-M'>(彼の石油エンジンのために)</span>。",
                            naturalTranslation: "ディーゼルは多くのものを発明しましたが、特に彼の石油エンジンで有名でした。",
                            vocabulary: [
                                { word: "especially", meaning: "「特に」。" },
                                { word: "famous", meaning: "「有名な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "famous for", explanation: "<b>be famous for</b>: 「〜で有名である」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "He invented an engine that people could use in factories without burning coal.",
                        translation: "彼は人々が石炭を燃やさずに工場で使えるエンジンを発明しました。",
                        grammarAnalysis: {
                            mainVerbs: ["invented"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>invented</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an engine</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(that people could use in factories without burning coal)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>発明しました</span> <span class='t-O'>エンジンを</span> <span class='t-M'>(人々が石炭を燃やさずに工場で使える)</span>。",
                            naturalTranslation: "彼は人々が石炭を燃やさずに工場で使えるエンジンを発明しました。",
                            vocabulary: [
                                { word: "burning", meaning: "「燃やすこと」。" }
                            ],
                            grammarNotes: [
                                { phrase: "that people could use", explanation: "<b>that</b>: 関係代名詞。an engineを修飾する。" },
                                { phrase: "without burning", explanation: "<b>without doing</b>: 「〜せずに」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "People still use his engines in trucks today.",
                        translation: "人々は今日でもトラックで彼のエンジンを使っています。",
                        grammarAnalysis: {
                            mainVerbs: ["use"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(still)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>his engines</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in trucks)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(today)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>人々は</span> <span class='t-M'>(今でも)</span> <span class='t-V'>使います</span> <span class='t-O'>彼のエンジンを</span> <span class='t-M'>(トラックの中で)</span> <span class='t-M'>(今日)</span>。",
                            naturalTranslation: "人々は今日でもトラックで彼のエンジンを使っています。",
                            vocabulary: [
                                { word: "still", meaning: "「今でも」「まだ」。" },
                                { word: "trucks", meaning: "「トラック」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 20,
                        text: "Diesel also tried to use vegetable oil as fuel.",
                        translation: "ディーゼルはまた、植物油を燃料として使おうとしました。",
                        grammarAnalysis: {
                            mainVerbs: ["tried"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Diesel</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>tried to use</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>vegetable oil</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(as fuel)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ディーゼルは</span> <span class='t-M'>(また)</span> <span class='t-V'>使おうとしました</span> <span class='t-O'>植物油を</span> <span class='t-M'>(燃料として)</span>。",
                            naturalTranslation: "ディーゼルはまた、植物油を燃料として使おうとしました。",
                            vocabulary: [
                                { word: "vegetable oil", meaning: "「植物油」。" },
                                { word: "as", meaning: "「〜として」。" }
                            ],
                            grammarNotes: [
                                { phrase: "tried to use", explanation: "<b>try to do</b>: 「〜しようとする」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "According to some books, he wanted to help farmers, too.",
                        translation: "いくつかの本によると、彼は農家も助けたいと思っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(According to some books)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to help farmers</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>too</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(いくつかの本によると)</span>、<span class='t-S'>彼は</span> <span class='t-V'>したかった</span> <span class='t-O'>農家を助けることを</span>、<span class='t-M'>〜も</span>。",
                            naturalTranslation: "いくつかの本によると、彼は農家も助けたいと思っていました。",
                            vocabulary: [
                                { word: "According to", meaning: "「〜によると」。" }
                            ],
                            grammarNotes: [
                                { phrase: "wanted to help", explanation: "<b>want to do</b>: 「〜したい」。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "His ideas were very advanced in the 1800s, and they are still important now.",
                        translation: "彼のアイデアは1800年代には非常に進んでおり、それらは今でも重要です。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>His ideas</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very advanced</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(in the 1800s)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>still important</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>now</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼のアイデアは</span> <span class='t-V'>でした</span> <span class='t-C'>とても進んだ</span> <span class='t-M'>(1800年代には)</span>、そして<span class='t-S'>それらは</span> <span class='t-V'>です</span> <span class='t-C'>今でも重要な</span> <span class='t-M'>今</span>。",
                            naturalTranslation: "彼のアイデアは1800年代には非常に進んでおり、それらは今でも重要です。",
                            vocabulary: [
                                { word: "advanced", meaning: "「進んだ」「進歩した」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 23,
                        text: "Diesel died in 1913.",
                        translation: "ディーゼルは1913年に亡くなりました。",
                        grammarAnalysis: {
                            mainVerbs: ["died"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Diesel</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>died</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in 1913)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ディーゼルは</span> <span class='t-V'>亡くなりました</span> <span class='t-M'>(1913年に)</span>。",
                            naturalTranslation: "ディーゼルは1913年に亡くなりました。",
                            vocabulary: [
                                { word: "died", meaning: "「死んだ」「亡くなった」。dieの過去形。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 24,
                        text: "He created a great machine, but his life had a sad ending.",
                        translation: "彼は偉大な機械を作りましたが、彼の人生は悲しい結末を迎えました。",
                        grammarAnalysis: {
                            mainVerbs: ["created", "had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>created</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a great machine</span><span class='tag'>O</span></span>, but <span class='chunk S-group'><span class='text'>his life</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a sad ending</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>創り出しました</span> <span class='t-O'>偉大な機械を</span>、しかし<span class='t-S'>彼の人生は</span> <span class='t-V'>持っていました</span> <span class='t-O'>悲しい結末を</span>。",
                            naturalTranslation: "彼は偉大な機械を作りましたが、彼の人生は悲しい結末を迎えました。",
                            vocabulary: [
                                { word: "created", meaning: "「創り出した」「作った」。" },
                                { word: "ending", meaning: "「結末」「終わり」。" }
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
                text: "What did Rudolf Diesel want to do when he was young?",
                textTranslation: "ルドルフ・ディーゼルは若い頃何をしたいと思っていましたか？",
                choices: [
                    { id: 1, text: "Make leather bags.", translation: "革の鞄を作ること。", isCorrect: false },
                    { id: 2, text: "Be an engineer.", translation: "エンジニアになること。", isCorrect: true, highlight: "he wanted to be an engineer" },
                    { id: 3, text: "Visit his parents.", translation: "両親を訪ねること。", isCorrect: false },
                    { id: 4, text: "Sell museums.", translation: "博物館を売ること。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「wanted to be」（〜になりたかった）を探しましょう。",
                    targetSentenceId: 4,
                    highlightWord: "he wanted to be an engineer",
                    highlightWordSentenceId: 4
                },
                keywords: ["what", "want to do"],
                keywordExplanations: {
                    "want to do": "〜したい。"
                },
                keywordMatches: [
                    { sentenceId: 4, text: "he wanted to be an engineer", keyword: "wanted" }
                ],
                choiceAdvice: "1: 鞄作り（父の仕事）？ 2: エンジニア？ 3: 両親を訪ねる（手紙を書いた相手）？ 4: 博物館を売る？",
                logic: [
                    { type: "text", content: "本文第1段落(Sentence 4): \"...he wanted to be an engineer.\"" },
                    { type: "text", content: "結論: 本文の内容と選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 2,
                text: "Why did Diesel have to wait to graduate?",
                textTranslation: "なぜディーゼルは卒業を待たなければなりませんでしたか？",
                choices: [
                    { id: 1, text: "He wanted to stay in Germany.", translation: "ドイツに留まりたかったから。", isCorrect: false },
                    { id: 2, text: "He got sick during his exams.", translation: "試験中に病気になったから。", isCorrect: true, highlight: "got sick during his exams" },
                    { id: 3, text: "He didn't like his class.", translation: "クラスが好きではなかったから。", isCorrect: false },
                    { id: 4, text: "He found a job in Paris.", translation: "パリで仕事を見つけたから。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「graduate」（卒業する）ことについての問題。「so he had to wait」の理由（前）を探します。",
                    targetSentenceId: 6,
                    highlightWord: "got sick during his exams",
                    highlightWordSentenceId: 6
                },
                keywords: ["why", "wait", "graduate"],
                keywordExplanations: {
                    "wait": "待つ。",
                    "graduate": "卒業する。"
                },
                keywordMatches: [
                    { sentenceId: 6, text: "got sick during his exams ... so he had to wait", keyword: "wait" }
                ],
                choiceAdvice: "1: ドイツにいたかった？ 2: 病気になった？ 3: クラスが嫌い？ 4: 仕事を見つけた（これは卒業後）？",
                logic: [
                    { type: "text", content: "本文第2段落(Sentence 6): \"He got sick during his exams ... so he had to wait for the next year.\"" },
                    { type: "text", content: "結論: \"got sick\" と選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 3,
                text: "Why was the engine that Diesel invented efficient?",
                textTranslation: "ディーゼルが発明したエンジンはなぜ効率的だったのですか？",
                choices: [
                    { id: 1, text: "It was heavy and used coal.", translation: "重くて石炭を使ったから（これは蒸気機関）。", isCorrect: false },
                    { id: 2, text: "It was used to run trains.", translation: "列車を動かすのに使われたから。", isCorrect: false },
                    { id: 3, text: "It was stronger and used less fuel.", translation: "より強力で、より少ない燃料を使ったから。", isCorrect: true, highlight: "stronger and used less fuel" },
                    { id: 4, text: "It was invented by a British man.", translation: "イギリス人が発明したから（これも蒸気機関）。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「efficient」（効率的）の理由(soの前)を確認しましょう。",
                    targetSentenceId: 15,
                    highlightWord: "stronger and used less fuel",
                    highlightWordSentenceId: 15
                },
                keywords: ["efficient", "why"],
                keywordExplanations: {
                    "efficient": "効率的な。"
                },
                keywordMatches: [
                    { sentenceId: 15, text: "stronger and used less fuel, so it was more efficient", keyword: "efficient" }
                ],
                choiceAdvice: "1: 重い（蒸気機関）？ 2: 列車用（蒸気機関）？ 3: 強くて低燃費？ 4: イギリス人（蒸気機関の発明者）？",
                logic: [
                    { type: "text", content: "本文第3段落(Sentence 15): \"Diesel's engine was stronger and used less fuel, so it was more efficient...\"" },
                    { type: "text", content: "結論: 本文の理由と選択肢3が一致する。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 4,
                text: "Diesel invented an engine",
                textTranslation: "ディーゼルは〜なエンジンを発明しました。",
                choices: [
                    { id: 1, text: "that could be used without burning coal.", translation: "石炭を燃やさずに使える。", isCorrect: true, highlight: "without burning coal" },
                    { id: 2, text: "for a machine that made bags.", translation: "鞄を作る機械のための（父の仕事）。", isCorrect: false },
                    { id: 3, text: "to sell to a famous college.", translation: "有名な大学に売るための。", isCorrect: false },
                    { id: 4, text: "to put on the back of trains.", translation: "列車の後ろに載せるための。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。どんなエンジンを発明したか、「without」（〜なしで）の記述を探します。",
                    targetSentenceId: 18,
                    highlightWord: "use in factories without burning coal",
                    highlightWordSentenceId: 18
                },
                keywords: ["invented", "engine"],
                keywordExplanations: {
                    "without": "〜なしで。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "invented an engine ... without burning coal", keyword: "invented" }
                ],
                choiceAdvice: "1: 石炭なしで使える？ 2: 鞄製造機用？ 3: 大学に売る？ 4: 列車用？",
                logic: [
                    { type: "text", content: "本文第4段落(Sentence 18): \"He invented an engine that people could use in factories without burning coal.\"" },
                    { type: "text", content: "結論: 本文の記述と選択肢1が一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A man who invented a useful engine.", translation: "役に立つエンジンを発明した男性。", isCorrect: true, highlight: "Rudolf Diesel ... famous for his oil engines" },
                    { id: 2, text: "A famous steam engine factory.", translation: "有名な蒸気機関の工場。", isCorrect: false },
                    { id: 3, text: "The history of trains in Britain.", translation: "イギリスの列車の歴史。", isCorrect: false },
                    { id: 4, text: "The best way to cool things.", translation: "物を冷やす最良の方法。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "全体を読みましょう。タイトルや第1段落がヒントになります。",
                    targetSentenceId: null,
                    highlightWord: null,
                    highlightWordSentenceId: null
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: エンジンを発明した男？ 2: 工場？ 3: 列車の歴史？ 4: 冷やし方？",
                logic: [
                    { type: "text", content: "タイトル: \"Rudolf Diesel\"" },
                    { type: "text", content: "本文全体を通して、ディーゼルの生涯とエンジンの発明について記述している。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Rudolf Diesel",
            intro: "ドイツの発明家、ルドルフ・ディーゼルの伝記です。過去問と同じく「エンジン」「病気による学業の遅れ」「古い技術の改善」をテーマにしています。",
            points: [
                { label: "1. Early Life (幼少期)", text: "1858年フランス生まれ。父は鞄職人。博物館が好きで、14歳でエンジニアになりたいと決意しました。" },
                { label: "2. Education & Career (教育と仕事)", text: "ドイツの大学に進みましたが、試験中に病気になり卒業が遅れました。その後パリで冷却機械（冷蔵庫）を作る仕事に就きました。" },
                { label: "3. Key Invention (ディーゼルエンジン)", text: "当時の蒸気機関は重く効率が悪かったため、より強力で燃料消費の少ない新型エンジンを発明しました。これは大型船に使われました。" },
                { label: "4. Legacy (その他の発明と遺産)", text: "石炭を使わない工場用エンジンや、植物油の使用などを試みました。トラックなどに使われる現代でも重要な技術です。" }
            ]
        }
    },
    {
        id: "grade-3-original-ss-neptune",
        grade: "3級",
        title: "The SS Neptune",
        subTitle: "問題4",
        genre: "歴史 / 物語",
        similarProblems: {
            exam: "2024年度 第2回",
            title: "The SS Savannah"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=The+SS+Neptune",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "The SS Neptune was a British ship.",
                        translation: "SSネプチューン号はイギリスの船でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The SS Neptune</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a British ship</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>SSネプチューン号は</span> <span class='t-V'>でした</span> <span class='t-C'>イギリスの船</span>。",
                            naturalTranslation: "SSネプチューン号はイギリスの船でした。",
                            vocabulary: [
                                { word: "British", meaning: "「イギリスの」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 2,
                        text: "It was built in the 1840s.",
                        translation: "それは1840年代に建造されました。",
                        grammarAnalysis: {
                            mainVerbs: ["was built"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was built</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the 1840s)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>建造されました</span> <span class='t-M'>(1840年代に)</span>。",
                            naturalTranslation: "それは1840年代に建造されました。",
                            vocabulary: [
                                { word: "built", meaning: "「建てられた」「建造された」。buildの過去分詞。" }
                            ],
                            grammarNotes: [
                                { phrase: "was built", explanation: "<b>was built</b>: 受動態。「建てられた」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "It was planned as a sailing ship for fishing.",
                        translation: "それは釣りのための帆船として計画されました。",
                        grammarAnalysis: {
                            mainVerbs: ["was planned"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was planned</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(as a sailing ship)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(for fishing)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>計画されました</span> <span class='t-M'>(帆船として)</span> <span class='t-M'>(釣りのための)</span>。",
                            naturalTranslation: "それは釣りのための帆船として計画されました。",
                            vocabulary: [
                                { word: "planned", meaning: "「計画された」。" },
                                { word: "sailing ship", meaning: "「帆船」。" },
                                { word: "fishing", meaning: "「釣り」「漁」。" }
                            ],
                            grammarNotes: [
                                { phrase: "was planned", explanation: "<b>was planned</b>: 受動態。「計画された」。" },
                                { phrase: "as", explanation: "<b>as</b>: 前置詞。「〜として」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "The design had large nets and storage rooms.",
                        translation: "その設計には大きな網と保管室がありました。",
                        grammarAnalysis: {
                            mainVerbs: ["had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The design</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>large nets and storage rooms</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>その設計は</span> <span class='t-V'>持っていました（ありました）</span> <span class='t-O'>大きな網と保管室が</span>。",
                            naturalTranslation: "その設計には大きな網と保管室がありました。",
                            vocabulary: [
                                { word: "design", meaning: "「設計」「デザイン」。" },
                                { word: "nets", meaning: "「網」。" },
                                { word: "storage rooms", meaning: "「保管室」「倉庫」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 5,
                        text: "However, a change was made to the ship's design.",
                        translation: "しかし、船の設計に変更が加えられました。",
                        grammarAnalysis: {
                            mainVerbs: ["was made"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a change</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was made</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to the ship's design)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>変更が</span> <span class='t-V'>加えられました（なされました）</span> <span class='t-M'>(船の設計に)</span>。",
                            naturalTranslation: "しかし、船の設計に変更が加えられました。",
                            vocabulary: [
                                { word: "change", meaning: "「変更」。名詞。" }
                            ],
                            grammarNotes: [
                                { phrase: "was made", explanation: "<b>was made</b>: 受動態。「（変更が）なされた」。make a change（変更する）の受動態。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "At that time, new strong machines were becoming popular.",
                        translation: "当時、新しい強力な機械が人気になっていました。",
                        grammarAnalysis: {
                            mainVerbs: ["were becoming"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(At that time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>new strong machines</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were becoming</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>popular</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(その時)</span>、<span class='t-S'>新しい強力な機械は</span> <span class='t-V'>なりつつありました</span> <span class='t-C'>人気に</span>。",
                            naturalTranslation: "当時、新しい強力な機械が人気になっていました。",
                            vocabulary: [
                                { word: "machines", meaning: "「機械」。ここではエンジンのこと。" },
                                { word: "popular", meaning: "「人気のある」。" }
                            ],
                            grammarNotes: [
                                { phrase: "were becoming", explanation: "<b>were becoming</b>: 過去進行形。「〜になりつつあった」。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "So, the SS Neptune became a fishing ship that had a steam engine, too.",
                        translation: "そのため、SSネプチューン号は蒸気機関も持つ釣り船となりました。",
                        grammarAnalysis: {
                            mainVerbs: ["became"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(So)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the SS Neptune</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a fishing ship</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(that had a steam engine, too)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(だから)</span>、<span class='t-S'>SSネプチューン号は</span> <span class='t-V'>なりました</span> <span class='t-C'>釣り船に</span> <span class='t-M'>(蒸気機関も持っている)</span>。",
                            naturalTranslation: "そのため、SSネプチューン号は蒸気機関も持つ釣り船となりました。",
                            vocabulary: [
                                { word: "steam engine", meaning: "「蒸気機関」。" }
                            ],
                            grammarNotes: [
                                { phrase: "that had", explanation: "<b>that</b>: 関係代名詞。a fishing shipを修飾する。" }
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
                        text: "The ship's captain also had an idea for the SS Neptune.",
                        translation: "船長もまた、SSネプチューン号に対してある考えを持っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The ship's captain</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an idea</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for the SS Neptune)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>船のキャプテンは</span> <span class='t-M'>(また)</span> <span class='t-V'>持っていました</span> <span class='t-O'>ある考えを</span> <span class='t-M'>(SSネプチューン号のための)</span>。",
                            naturalTranslation: "船長もまた、SSネプチューン号に対してある考えを持っていました。",
                            vocabulary: [
                                { word: "captain", meaning: "「船長」「キャプテン」。" },
                                { word: "idea", meaning: "「考え」「アイデア」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 9,
                        text: "He wanted to take it all the way to India.",
                        translation: "彼はそれをはるばるインドまで連れて行きたいと考えました。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to take it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(all the way to India)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>したかった</span> <span class='t-O'>それを連れて行くことを</span> <span class='t-M'>(はるばるインドまで)</span>。",
                            naturalTranslation: "彼はそれをはるばるインドまで連れて行きたいと考えました。",
                            vocabulary: [
                                { word: "take", meaning: "「連れて行く」「持って行く」。" },
                                { word: "all the way", meaning: "「はるばる」「ずっと」。" }
                            ],
                            grammarNotes: [
                                { phrase: "wanted to take", explanation: "<b>want to do</b>: 「〜したい」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "This plan worried some people because India was very far from England.",
                        translation: "インドはイギリスから非常に遠かったため、この計画は一部の人々を心配させました。",
                        grammarAnalysis: {
                            mainVerbs: ["worried"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This plan</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>worried</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some people</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(because India was very far from England)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>この計画は</span> <span class='t-V'>心配させました</span> <span class='t-O'>一部の人々を</span> <span class='t-M'>(なぜならインドはイギリスからとても遠かったので)</span>。",
                            naturalTranslation: "インドはイギリスから非常に遠かったため、この計画は一部の人々を心配させました。",
                            vocabulary: [
                                { word: "worried", meaning: "「心配させた」。他動詞。" },
                                { word: "far", meaning: "「遠い」。" }
                            ],
                            grammarNotes: [
                                { phrase: "worried some people", explanation: "<b>worry</b>: 「心配させる」。人が主語の場合はbe worried about（心配している）となるが、ここでは計画が主語。" },
                                { phrase: "because", explanation: "<b>because</b>: 接続詞。「〜なので」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "They thought the ship was too small for such a long trip.",
                        translation: "彼らは、その船はそのような長い旅には小さすぎると考えました。",
                        grammarAnalysis: {
                            mainVerbs: ["thought"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>thought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(that) the ship was too small for such a long trip</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>考えました</span> <span class='t-O'>その船は小さすぎると（そんなに長い旅には）</span>。",
                            naturalTranslation: "彼らは、その船はそのような長い旅には小さすぎると考えました。",
                            vocabulary: [
                                { word: "too", meaning: "「〜すぎる」。" },
                                { word: "such", meaning: "「そのような」。" }
                            ],
                            grammarNotes: [
                                { phrase: "too small", explanation: "<b>too ...</b>: 「あまりに〜すぎる」。否定的な意味を含む。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "However, the captain found a crew who wanted to go, and he began the long trip.",
                        translation: "しかし、船長は行きたいという乗組員を見つけ、長い旅を始めました。",
                        grammarAnalysis: {
                            mainVerbs: ["found", "began"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the captain</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>found</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a crew</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(who wanted to go)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>began</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the long trip</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>キャプテンは</span> <span class='t-V'>見つけました</span> <span class='t-O'>乗組員を</span> <span class='t-M'>(行きたいと思った)</span>、そして<span class='t-S'>彼は</span> <span class='t-V'>始めました</span> <span class='t-O'>長い旅を</span>。",
                            naturalTranslation: "しかし、船長は行きたいという乗組員を見つけ、長い旅を始めました。",
                            vocabulary: [
                                { word: "crew", meaning: "「乗組員」。" },
                                { word: "began", meaning: "「始めた」。beginの過去形。" }
                            ],
                            grammarNotes: [
                                { phrase: "who wanted", explanation: "<b>who</b>: 関係代名詞。a crewを修飾する。" }
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
                        text: "The SS Neptune arrived in India after about two months.",
                        translation: "SSネプチューン号は約2ヶ月後にインドに到着しました。",
                        grammarAnalysis: {
                            mainVerbs: ["arrived"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The SS Neptune</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>arrived</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in India)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(after about two months)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>SSネプチューン号は</span> <span class='t-V'>到着しました</span> <span class='t-M'>(インドに)</span> <span class='t-M'>(約2ヶ月後に)</span>。",
                            naturalTranslation: "SSネプチューン号は約2ヶ月後にインドに到着しました。",
                            vocabulary: [
                                { word: "arrived", meaning: "「到着した」。arrive in/at。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 14,
                        text: "For most of the trip, the SS Neptune used the wind, but it also used the engine when there was no wind.",
                        translation: "旅の大部分でSSネプチューン号は風を使いましたが、風がないときはエンジンも使いました。",
                        grammarAnalysis: {
                            mainVerbs: ["used", "used", "was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For most of the trip)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the SS Neptune</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the wind</span><span class='tag'>O</span></span>, but <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the engine</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(when there was no wind)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(旅の大部分で)</span>、<span class='t-S'>SSネプチューン号は</span> <span class='t-V'>使いました</span> <span class='t-O'>風を</span>、しかし<span class='t-S'>それは</span> <span class='t-M'>(また)</span> <span class='t-V'>使いました</span> <span class='t-O'>エンジンを</span> <span class='t-M'>(風がなかったとき)</span>。",
                            naturalTranslation: "旅の大部分でSSネプチューン号は風を使いましたが、風がないときはエンジンも使いました。",
                            vocabulary: [
                                { word: "most of", meaning: "「〜の大部分」。" },
                                { word: "wind", meaning: "「風」。" }
                            ],
                            grammarNotes: [
                                { phrase: "there was", explanation: "<b>there is/was</b>: 「〜がある/あった」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "It was the first ship of its kind to go to India.",
                        translation: "それはインドへ行ったその種の最初の船でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the first ship of its kind</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(to go to India)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>でした</span> <span class='t-C'>その種の最初の船</span> <span class='t-M'>(インドへ行くための/行った)</span>。",
                            naturalTranslation: "それはインドへ行ったその種の最初の船でした。",
                            vocabulary: [
                                { word: "kind", meaning: "「種類」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to go", explanation: "<b>to go</b>: 不定詞の形容詞的用法。shipを修飾する。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "Many people in India went to the port to see this ship.",
                        translation: "インドの多くの人々がこの船を見るために港へ行きました。",
                        grammarAnalysis: {
                            mainVerbs: ["went"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people in India</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>went</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to the port)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to see this ship)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>インドの多くの人々は</span> <span class='t-V'>行きました</span> <span class='t-M'>(港へ)</span> <span class='t-M'>(この船を見るために)</span>。",
                            naturalTranslation: "インドの多くの人々がこの船を見るために港へ行きました。",
                            vocabulary: [
                                { word: "port", meaning: "「港」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to see", explanation: "<b>to see</b>: 不定詞の副詞的用法。「見るために」。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "Before the SS Neptune went home, it visited other places in Asia.",
                        translation: "SSネプチューン号は帰国する前に、アジアの他の場所も訪れました。",
                        grammarAnalysis: {
                            mainVerbs: ["visited"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Before the SS Neptune went home)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>visited</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>other places in Asia</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(SSネプチューン号が国に帰る前に)</span>、<span class='t-S'>それは</span> <span class='t-V'>訪れました</span> <span class='t-O'>アジアの他の場所を</span>。",
                            naturalTranslation: "SSネプチューン号は帰国する前に、アジアの他の場所も訪れました。",
                            vocabulary: [
                                { word: "visited", meaning: "「訪れた」。" },
                                { word: "places", meaning: "「場所」。" }
                            ],
                            grammarNotes: [
                                { phrase: "went home", explanation: "<b>go home</b>: 「家に帰る」「帰国する」。homeは副詞。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 18,
                        text: "The trip was a success.",
                        translation: "その旅は成功でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The trip</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a success</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>その旅は</span> <span class='t-V'>でした</span> <span class='t-C'>成功</span>。",
                            naturalTranslation: "その旅は成功でした。",
                            vocabulary: [
                                { word: "success", meaning: "「成功」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 19,
                        text: "However, the steam engine used a lot of coal, so it was expensive.",
                        translation: "しかし、蒸気機関は多くの石炭を使ったため、費用がかかりました。",
                        grammarAnalysis: {
                            mainVerbs: ["used", "was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the steam engine</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a lot of coal</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>expensive</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>蒸気機関は</span> <span class='t-V'>使いました</span> <span class='t-O'>多くの石炭を</span>、<span class='t-M'>(だから)</span> <span class='t-S'>それは</span> <span class='t-V'>でした</span> <span class='t-C'>高価な（費用がかかる）</span>。",
                            naturalTranslation: "しかし、蒸気機関は多くの石炭を使ったため、費用がかかりました。",
                            vocabulary: [
                                { word: "expensive", meaning: "「高価な」「費用がかかる」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 20,
                        text: "The ship's steam engine was taken out.",
                        translation: "船の蒸気機関は取り外されました。",
                        grammarAnalysis: {
                            mainVerbs: ["was taken"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The ship's steam engine</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was taken</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>out</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>船の蒸気機関は</span> <span class='t-V'>取り出されました（外された）</span> <span class='t-M'>外へ</span>。",
                            naturalTranslation: "船の蒸気機関は取り外されました。",
                            vocabulary: [
                                { word: "taken", meaning: "「取られた」。takeの過去分詞。" }
                            ],
                            grammarNotes: [
                                { phrase: "was taken out", explanation: "<b>take out</b>: 「取り出す」。受動態で「取り外された」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "The SS Neptune was then used as a regular sailing ship to catch fish in the North Sea.",
                        translation: "その後、SSネプチューン号は北海で魚を捕るための通常の帆船として使われました。",
                        grammarAnalysis: {
                            mainVerbs: ["was used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The SS Neptune</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>then</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(as a regular sailing ship)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to catch fish in the North Sea)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>SSネプチューン号は</span> <span class='t-V'>でした</span> <span class='t-M'>その時（その後）</span> <span class='t-V'>使われました</span> <span class='t-M'>(通常の帆船として)</span> <span class='t-M'>(北海で魚を捕るために)</span>。",
                            naturalTranslation: "その後、SSネプチューン号は北海で魚を捕るための通常の帆船として使われました。",
                            vocabulary: [
                                { word: "regular", meaning: "「通常の」「普通の」。" },
                                { word: "North Sea", meaning: "「北海」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to catch", explanation: "<b>to catch</b>: 不定詞の副詞的用法（目的）あるいは形容詞的用法。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Sadly, in the late 1850s, the SS Neptune had an accident near London and sank into the sea.",
                        translation: "悲しいことに、1850年代後半、SSネプチューン号はロンドン近くで事故に遭い、海に沈んでしまいました。",
                        grammarAnalysis: {
                            mainVerbs: ["had", "sank"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Sadly)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(in the late 1850s)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the SS Neptune</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>an accident</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(near London)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>sank</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(into the sea)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(悲しいことに)</span>、<span class='t-M'>(1850年代後半に)</span>、<span class='t-S'>SSネプチューン号は</span> <span class='t-V'>遭いました</span> <span class='t-O'>事故に</span> <span class='t-M'>(ロンドン近くで)</span> そして<span class='t-V'>沈みました</span> <span class='t-M'>(海へ)</span>。",
                            naturalTranslation: "悲しいことに、1850年代後半、SSネプチューン号はロンドン近くで事故に遭い、海に沈んでしまいました。",
                            vocabulary: [
                                { word: "accident", meaning: "「事故」。" },
                                { word: "sank", meaning: "「沈んだ」。sinkの過去形。" }
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
                text: "How did the plan for the SS Neptune change?",
                textTranslation: "SSネプチューン号の計画はどのように変わりましたか？",
                choices: [
                    { id: 1, text: "A steam engine was added.", translation: "蒸気機関が追加された。", isCorrect: true, highlight: "fishing ship that had a steam engine, too" },
                    { id: 2, text: "The captain sold the nets.", translation: "船長が網を売った。", isCorrect: false },
                    { id: 3, text: "The ship was made smaller.", translation: "船が小さく作られた。", isCorrect: false },
                    { id: 4, text: "The storage rooms were removed.", translation: "保管室が取り除かれた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「change」（変更）の後の文。「had a steam engine, too」（〜も持つようになった）を確認します。",
                    targetSentenceId: 7,
                    highlightWord: "had a steam engine, too",
                    highlightWordSentenceId: 7
                },
                keywords: ["how", "change"],
                keywordExplanations: {
                    "change": "変わる、変更する。"
                },
                keywordMatches: [
                    { sentenceId: 5, text: "a change was made", keyword: "change" }
                ],
                choiceAdvice: "1: エンジン追加？ 2: 網を売った？ 3: 小さくなった？ 4: 部屋を削除？",
                logic: [
                    { type: "text", content: "本文第1段落: \"So, the SS Neptune became a fishing ship that had a steam engine, too.\"" },
                    { type: "text", content: "結論: エンジンが追加されたことと選択肢1が一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 2,
                text: "Why were some people worried?",
                textTranslation: "なぜ一部の人々は心配したのですか？",
                choices: [
                    { id: 1, text: "They thought the engine was too loud.", translation: "エンジンがうるさすぎると思ったから。", isCorrect: false },
                    { id: 2, text: "The captain did not have a map.", translation: "船長が地図を持っていなかったから。", isCorrect: false },
                    { id: 3, text: "The captain wanted to sell the ship.", translation: "船長が船を売りたかったから。", isCorrect: false },
                    { id: 4, text: "They thought the ship was too small for the trip.", translation: "その船は旅には小さすぎると思ったから。", isCorrect: true, highlight: "ship was too small for such a long trip" },
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「worried」（心配した）理由。「too small」（小さすぎる）の記述を探します。",
                    targetSentenceId: 11,
                    highlightWord: "ship was too small for such a long trip",
                    highlightWordSentenceId: 11
                },
                keywords: ["why", "worried"],
                keywordExplanations: {
                    "worried": "心配した。"
                },
                keywordMatches: [
                    { sentenceId: 10, text: "This plan worried some people", keyword: "worried" }
                ],
                choiceAdvice: "1: うるさい？ 2: 地図がない？ 3: 売りたい？ 4: 小さすぎる？",
                logic: [
                    { type: "text", content: "本文第2段落: \"They thought the ship was too small for such a long trip.\"" },
                    { type: "text", content: "結論: 小さすぎるという理由と選択肢4が一致する。" },
                    { type: "conclusion", content: "正解: 4" }
                ]
            },
            {
                id: 3,
                text: "When the ship arrived in India,",
                textTranslation: "船がインドに到着したとき、",
                choices: [
                    { id: 1, text: "many people went to see it.", translation: "多くの人々がそれを見に行った。", isCorrect: true, highlight: "Many people in India went to the port to see this ship" },
                    { id: 2, text: "the captain sold the engine.", translation: "船長はエンジンを売った。", isCorrect: false },
                    { id: 3, text: "it had no more coal.", translation: "もう石炭がなかった。", isCorrect: false },
                    { id: 4, text: "people thought it was a pirate ship.", translation: "人々はそれが海賊船だと思った。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「arrived in India」（インドに到着した）後の文。「went to ... to see」（見るために行った）を探します。",
                    targetSentenceId: 16,
                    highlightWord: "Many people in India went to the port to see this ship",
                    highlightWordSentenceId: 16
                },
                keywords: ["when", "arrived"],
                keywordExplanations: {
                    "arrived": "到着した。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "The SS Neptune arrived in India", keyword: "arrived" }
                ],
                choiceAdvice: "1: 人々が見に来た？ 2: エンジンを売った？ 3: 石炭切れ？ 4: 海賊船？",
                logic: [
                    { type: "text", content: "本文第3段落: \"Many people in India went to the port to see this ship.\"" },
                    { type: "text", content: "結論: 人々が見に来たという記述と選択肢1が一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 4,
                text: "What finally happened to the SS Neptune?",
                textTranslation: "最後にSSネプチューン号に何が起きましたか？",
                choices: [
                    { id: 1, text: "It had an accident and sank.", translation: "事故に遭って沈んだ。", isCorrect: true, highlight: "had an accident near London and sank" },
                    { id: 2, text: "It was sold to a museum in India.", translation: "インドの博物館に売られた。", isCorrect: false },
                    { id: 3, text: "It became a famous hotel.", translation: "有名なホテルになった。", isCorrect: false },
                    { id: 4, text: "Its engine was put into a train.", translation: "エンジンが列車に載せられた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。最後の結末。「accident」（事故）と「sank」（沈んだ）を確認しましょう。",
                    targetSentenceId: 22,
                    highlightWord: "had an accident near London and sank",
                    highlightWordSentenceId: 22
                },
                keywords: ["finally", "happened"],
                keywordExplanations: {
                    "finally": "ついに、最後に。",
                    "happened": "起きた。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 事故で沈没？ 2: 博物館へ？ 3: ホテルに？ 4: エンジンを列車へ？",
                logic: [
                    { type: "text", content: "本文第4段落: \"...the SS Neptune had an accident near London and sank into the sea.\"" },
                    { type: "text", content: "結論: 事故で沈んだという記述と選択肢1が一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A new way to catch fish.", translation: "魚を捕る新しい方法。", isCorrect: false },
                    { id: 2, text: "The life of a famous sailor.", translation: "有名な船乗りの人生。", isCorrect: false },
                    { id: 3, text: "A ship that made a special trip.", translation: "特別な旅をした船。", isCorrect: true, highlight: "first ship of its kind to go to India" },
                    { id: 4, text: "A company that sells coal.", translation: "石炭を売る会社。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "全体を読みましょう。タイトルや第3段落の「first ship...」（最初の船）がヒントになります。",
                    targetSentenceId: null,
                    highlightWord: null,
                    highlightWordSentenceId: null
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 漁法？ 2: 船乗りの人生？ 3: 特別な旅をした船？ 4: 石炭会社？",
                logic: [
                    { type: "text", content: "タイトル: \"The SS Neptune\"" },
                    { type: "text", content: "本文全体を通して、船の建造、改造、インドへの航海、そして最期について語られている。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The SS Neptune",
            intro: "イギリスの船「SSネプチューン号」についての架空の説明文です。過去問と同様に、ハイブリッド船の挑戦とその結末を描いています。",
            points: [
                { label: "1. Design Change (設計変更)", text: "釣り用の帆船として計画されましたが、新しい機械（エンジン）の人気に伴い、蒸気機関を追加搭載しました。" },
                { label: "2. The Plan (計画と懸念)", text: "船長はインドまでの遠洋航海を計画しましたが、船が小さすぎると周囲に心配されました。" },
                { label: "3. The Journey (航海)", text: "約2ヶ月でインドに到着しました。風とエンジンの両方を使い、現地では多くの人が港に見に来ました。" },
                { label: "4. Aftermath (その後)", text: "燃料費がかさむためエンジンは取り外され、通常の釣り船に戻りました。最後はロンドン近郊で事故に遭い沈没しました。" }
            ]
        }
    },
    {
        id: "grade-3-original-kiwi",
        grade: "3級",
        title: "The Kiwi",
        subTitle: "問題5",
        genre: "生物 / 説明文",
        similarProblems: {
            exam: "2024年度 第1回",
            title: "The Quokka"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=The+Kiwi",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "The kiwi is a special bird from New Zealand.",
                        translation: "キーウィはニュージーランドの特別な鳥です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The kiwi</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a special bird from New Zealand</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>キーウィは</span> <span class='t-V'>です</span> <span class='t-C'>ニュージーランドの特別な鳥</span>。",
                            naturalTranslation: "キーウィはニュージーランドの特別な鳥です。",
                            vocabulary: [
                                { word: "special", meaning: "「特別な」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 2,
                        text: "They are birds, but they cannot fly.",
                        translation: "彼らは鳥ですが、飛ぶことができません。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "cannot fly"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>birds</span><span class='tag'>C</span></span>, but <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>cannot fly</span><span class='tag'>V</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>です</span> <span class='t-C'>鳥</span>、しかし<span class='t-S'>彼らは</span> <span class='t-V'>飛べません</span>。",
                            naturalTranslation: "彼らは鳥ですが、飛ぶことができません。",
                            vocabulary: [
                                { word: "fly", meaning: "「飛ぶ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "cannot", explanation: "<b>cannot</b>: 「〜できない」。can notの短縮形。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "They have round bodies about the size of a chicken.",
                        translation: "彼らはニワトリくらいの大きさの丸い体を持っています。",
                        grammarAnalysis: {
                            mainVerbs: ["have"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>round bodies</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(about the size of a chicken)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>持っています</span> <span class='t-O'>丸い体を</span> <span class='t-M'>(ニワトリくらいの大きさの)</span>。",
                            naturalTranslation: "彼らはニワトリくらいの大きさの丸い体を持っています。",
                            vocabulary: [
                                { word: "round", meaning: "「丸い」。" },
                                { word: "bodies", meaning: "「体」。bodyの複数形。" },
                                { word: "size", meaning: "「大きさ」。" },
                                { word: "chicken", meaning: "「ニワトリ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "about", explanation: "<b>about</b>: 「およそ」「約」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "Their feathers look like hair, and they have a long beak.",
                        translation: "彼らの羽毛は髪の毛のように見え、長いクチバシを持っています。",
                        grammarAnalysis: {
                            mainVerbs: ["look like", "have"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Their feathers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>look like</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>hair</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a long beak</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らの羽毛は</span> <span class='t-V'>のように見えます</span> <span class='t-O'>髪の毛</span>、そして<span class='t-S'>彼らは</span> <span class='t-V'>持っています</span> <span class='t-O'>長いクチバシを</span>。",
                            naturalTranslation: "彼らの羽毛は髪の毛のように見え、長いクチバシを持っています。",
                            vocabulary: [
                                { word: "feathers", meaning: "「羽毛」「羽根」。" },
                                { word: "hair", meaning: "「髪の毛」「毛」。" },
                                { word: "beak", meaning: "「クチバシ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "look like", explanation: "<b>look like ...</b>: 「〜のように見える」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 5,
                        text: "Many kiwis live in the forests of New Zealand.",
                        translation: "多くのキーウィはニュージーランドの森に住んでいます。",
                        grammarAnalysis: {
                            mainVerbs: ["live"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many kiwis</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>live</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the forests of New Zealand)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>多くのキーウィは</span> <span class='t-V'>住んでいます</span> <span class='t-M'>(ニュージーランドの森に)</span>。",
                            naturalTranslation: "多くのキーウィはニュージーランドの森に住んでいます。",
                            vocabulary: [
                                { word: "forests", meaning: "「森」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 6,
                        text: "The name \"kiwi\" came from the sound the bird makes.",
                        translation: "「キーウィ」という名前は、その鳥が出す音から来ました。",
                        grammarAnalysis: {
                            mainVerbs: ["came"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The name \"kiwi\"</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>came</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(from the sound)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(the bird makes)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>「キーウィ」という名前は</span> <span class='t-V'>来ました</span> <span class='t-M'>(その音から)</span> <span class='t-M'>(その鳥が出す)</span>。",
                            naturalTranslation: "「キーウィ」という名前は、その鳥が出す音から来ました。",
                            vocabulary: [
                                { word: "sound", meaning: "「音」。" },
                                { word: "makes", meaning: "「作る」「（音を）出す」。" }
                            ],
                            grammarNotes: [
                                { phrase: "came from", explanation: "<b>come from</b>: 「〜に由来する」「〜から来る」。" },
                                { phrase: "the sound the bird makes", explanation: "<b>(that)</b>: 関係代名詞の省略。the bird makesがthe soundを修飾している。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "Long ago, the Maori people, the native people of New Zealand, gave them this name.",
                        translation: "昔、ニュージーランドの先住民であるマオリ族が彼らにこの名前をつけました。",
                        grammarAnalysis: {
                            mainVerbs: ["gave"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Long ago)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the Maori people</span><span class='tag'>S</span></span>, <span class='chunk S-group'><span class='text'>(the native people of New Zealand)</span><span class='tag'>S-appos</span></span>, <span class='chunk V-group'><span class='text'>gave</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk O-group'><span class='text'>this name</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(ずっと昔)</span>、<span class='t-S'>マオリの人々は</span>、<span class='t-S'>(ニュージーランドの先住民)</span>、<span class='t-V'>与えました</span> <span class='t-O'>彼らに</span> <span class='t-O'>この名前を</span>。",
                            naturalTranslation: "昔、ニュージーランドの先住民であるマオリ族が彼らにこの名前をつけました。",
                            vocabulary: [
                                { word: "native", meaning: "「先住の」「地元の」。" },
                                { word: "gave", meaning: "「与えた」。giveの過去形。" }
                            ],
                            grammarNotes: [
                                { phrase: "gave them this name", explanation: "<b>give O1 O2</b>: 「O1にO2を与える」。第4文型。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "They thought the bird's call sounded like \"ki-wi.\"",
                        translation: "彼らは鳥の鳴き声が「キーウィ」と聞こえると思いました。",
                        grammarAnalysis: {
                            mainVerbs: ["thought"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>thought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(that) the bird's call sounded like \"ki-wi\"</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>思いました</span> <span class='t-O'>鳥の鳴き声が「キーウィ」のように聞こえると</span>。",
                            naturalTranslation: "彼らは鳥の鳴き声が「キーウィ」と聞こえると思いました。",
                            vocabulary: [
                                { word: "call", meaning: "「鳴き声」。" },
                                { word: "sounded", meaning: "「聞こえた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "sounded like", explanation: "<b>sound like ...</b>: 「〜のように聞こえる」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 9,
                        text: "Kiwis are found in many parts of New Zealand.",
                        translation: "キーウィはニュージーランドの多くの場所で見られます。",
                        grammarAnalysis: {
                            mainVerbs: ["are found"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Kiwis</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are found</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in many parts of New Zealand)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>キーウィは</span> <span class='t-V'>見つけられます（見られる）</span> <span class='t-M'>(ニュージーランドの多くの場所で)</span>。",
                            naturalTranslation: "キーウィはニュージーランドの多くの場所で見られます。",
                            vocabulary: [
                                { word: "found", meaning: "「見つけられた」。findの過去分詞。" },
                                { word: "parts", meaning: "「地域」「部分」。" }
                            ],
                            grammarNotes: [
                                { phrase: "are found", explanation: "<b>are found</b>: 受動態。「見つけられる」＝「いる」「生息している」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "They like living in forests with many trees and plants.",
                        translation: "彼らは多くの木や植物がある森に住むのを好みます。",
                        grammarAnalysis: {
                            mainVerbs: ["like"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>like</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>living in forests</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with many trees and plants)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>好みます</span> <span class='t-O'>森に住むことを</span> <span class='t-M'>(多くの木や植物がある)</span>。",
                            naturalTranslation: "彼らは多くの木や植物がある森に住むのを好みます。",
                            vocabulary: [
                                { word: "living", meaning: "「住むこと」。" },
                                { word: "plants", meaning: "「植物」。" }
                            ],
                            grammarNotes: [
                                { phrase: "like living", explanation: "<b>like doing</b>: 「〜するのが好き」。" },
                                { phrase: "with", explanation: "<b>with</b>: 前置詞。「〜のある」「〜を持った」。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "They usually sleep during the day and look for food at night.",
                        translation: "彼らはたいてい昼間に眠り、夜に食べ物を探します。",
                        grammarAnalysis: {
                            mainVerbs: ["sleep", "look for"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>sleep</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(during the day)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>look for</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>food</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at night)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-M'>(たいてい)</span> <span class='t-V'>眠ります</span> <span class='t-M'>(日中は)</span> そして<span class='t-V'>探します</span> <span class='t-O'>食べ物を</span> <span class='t-M'>(夜に)</span>。",
                            naturalTranslation: "彼らはたいてい昼間に眠り、夜に食べ物を探します。",
                            vocabulary: [
                                { word: "usually", meaning: "「たいてい」「普段は」。" },
                                { word: "during", meaning: "「〜の間」。" }
                            ],
                            grammarNotes: [
                                { phrase: "look for", explanation: "<b>look for</b>: 「〜を探す」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "In the past, kiwis were safe, but now their numbers have gone down.",
                        translation: "過去にはキーウィは安全でしたが、今は彼らの数が減少しています。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "have gone"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the past)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>kiwis</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>safe</span><span class='tag'>C</span></span>, but <span class='chunk M-group'><span class='text'>(now)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>their numbers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have gone down</span><span class='tag'>V</span></span>.",
                            translationHtml: "<span class='t-M'>(過去には)</span>、<span class='t-S'>キーウィは</span> <span class='t-V'>でした</span> <span class='t-C'>安全</span>、しかし<span class='t-M'>(今は)</span> <span class='t-S'>彼らの数は</span> <span class='t-V'>減ってしまいました</span>。",
                            naturalTranslation: "過去にはキーウィは安全でしたが、今は彼らの数が減少しています。",
                            vocabulary: [
                                { word: "safe", meaning: "「安全な」。" },
                                { word: "numbers", meaning: "「数」。" }
                            ],
                            grammarNotes: [
                                { phrase: "have gone down", explanation: "<b>have gone down</b>: 現在完了形。「（数が）減った」「下がった」。go downの完了形。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "This is because animals like dogs and cats hunt them.",
                        translation: "これは犬や猫のような動物が彼らを狩るためです。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "hunt"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>because animals like dogs and cats hunt them</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>です</span> <span class='t-C'>なぜなら犬や猫のような動物が彼らを狩るから</span>。",
                            naturalTranslation: "これは犬や猫のような動物が彼らを狩るためです。",
                            vocabulary: [
                                { word: "hunt", meaning: "「狩る」。" }
                            ],
                            grammarNotes: [
                                { phrase: "This is because", explanation: "<b>This is because ...</b>: 「これは〜だからだ」。理由を説明する定型表現。" },
                                { phrase: "animals like dogs and cats", explanation: "<b>like</b>: 前置詞。「〜のような」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "Also, people are cutting down the forests where they live.",
                        translation: "また、人々は彼らが住む森を切り倒しています。",
                        grammarAnalysis: {
                            mainVerbs: ["are cutting down"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are cutting down</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the forests</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(where they live)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-S'>人々は</span> <span class='t-V'>切り倒しています</span> <span class='t-O'>森を</span> <span class='t-M'>(彼らが住む)</span>。",
                            naturalTranslation: "また、人々は彼らが住む森を切り倒しています。",
                            vocabulary: [
                                { word: "cutting down", meaning: "「切り倒している」。cut down。" }
                            ],
                            grammarNotes: [
                                { phrase: "where", explanation: "<b>where</b>: 関係副詞。the forestsを修飾する。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 15,
                        text: "Many people think kiwis are interesting, and they are the national symbol of New Zealand.",
                        translation: "多くの人々はキーウィを面白いと思っており、彼らはニュージーランドの国のシンボルです。",
                        grammarAnalysis: {
                            mainVerbs: ["think", "are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>think</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(that) kiwis are interesting</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the national symbol of New Zealand</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>多くの人々は</span> <span class='t-V'>思います</span> <span class='t-O'>キーウィは面白いと</span>、そして<span class='t-S'>彼らは</span> <span class='t-V'>です</span> <span class='t-C'>ニュージーランドの国のシンボル</span>。",
                            naturalTranslation: "多くの人々はキーウィを面白いと思っており、彼らはニュージーランドの国のシンボルです。",
                            vocabulary: [
                                { word: "interesting", meaning: "「面白い」「興味深い」。" },
                                { word: "national symbol", meaning: "「国の象徴」「国鳥」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 16,
                        text: "People from other countries want to see them.",
                        translation: "他の国の人々は彼らを見たいと思っています。",
                        grammarAnalysis: {
                            mainVerbs: ["want"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People from other countries</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>want</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to see them</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>他の国からの人々は</span> <span class='t-V'>したい</span> <span class='t-O'>彼らを見ることを</span>。",
                            naturalTranslation: "他の国の人々は彼らを見たいと思っています。",
                            vocabulary: [
                                { word: "countries", meaning: "「国々」。" }
                            ],
                            grammarNotes: [
                                { phrase: "want to see", explanation: "<b>want to do</b>: 「〜したい」。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "However, it is often hard to find them in the wild.",
                        translation: "しかし、野生の彼らを見つけるのはしばしば困難です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S-formal</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(often)</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>hard</span><span class='tag'>C</span></span> <span class='chunk S-group'><span class='text'>to find them in the wild</span><span class='tag'>S-real</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-M'>(よく)</span> <span class='t-C'>難しい</span> <span class='t-S'>野生の彼らを見つけることは</span>。",
                            naturalTranslation: "しかし、野生の彼らを見つけるのはしばしば困難です。",
                            vocabulary: [
                                { word: "hard", meaning: "「難しい」「困難な」。" },
                                { word: "in the wild", meaning: "「野生で」。" }
                            ],
                            grammarNotes: [
                                { phrase: "It is ... to ...", explanation: "<b>It is ... to ...</b>: 仮主語構文。「〜することは...だ」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "Some groups are working to protect kiwis.",
                        translation: "いくつかのグループがキーウィを守るために活動しています。",
                        grammarAnalysis: {
                            mainVerbs: ["are working"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Some groups</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are working</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to protect kiwis)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>いくつかのグループは</span> <span class='t-V'>活動しています（働いている）</span> <span class='t-M'>(キーウィを守るために)</span>。",
                            naturalTranslation: "いくつかのグループがキーウィを守るために活動しています。",
                            vocabulary: [
                                { word: "groups", meaning: "「グループ」「団体」。" },
                                { word: "protect", meaning: "「守る」「保護する」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to protect", explanation: "<b>to protect</b>: 不定詞の副詞的用法。「守るために」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "They say there are important rules for visitors.",
                        translation: "彼らは訪問者にとって重要なルールがあると言います。",
                        grammarAnalysis: {
                            mainVerbs: ["say", "are"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>say</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>there are important rules for visitors</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>言います</span> <span class='t-O'>訪問者のための重要なルールがあると</span>。",
                            naturalTranslation: "彼らは訪問者にとって重要なルールがあると言います。",
                            vocabulary: [
                                { word: "rules", meaning: "「ルール」「規則」。" },
                                { word: "visitors", meaning: "「訪問者」「観光客」。" }
                            ],
                            grammarNotes: [
                                { phrase: "there are", explanation: "<b>there are</b>: 「〜がある」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "For example, people should not bring their pets into the forest.",
                        translation: "例えば、人々は森にペットを連れてくるべきではありません。",
                        grammarAnalysis: {
                            mainVerbs: ["should not bring"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For example)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>should not bring</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their pets</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(into the forest)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(例えば)</span>、<span class='t-S'>人々は</span> <span class='t-V'>連れてくるべきではありません</span> <span class='t-O'>彼らのペットを</span> <span class='t-M'>(森の中へ)</span>。",
                            naturalTranslation: "例えば、人々は森にペットを連れてくるべきではありません。",
                            vocabulary: [
                                { word: "pets", meaning: "「ペット」。" }
                            ],
                            grammarNotes: [
                                { phrase: "should not", explanation: "<b>should (not)</b>: 「〜すべき（でない）」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "Also, they should be very quiet because loud noises can scare the birds.",
                        translation: "また、大きな音は鳥を怖がらせる可能性があるため、彼らはとても静かにすべきです。",
                        grammarAnalysis: {
                            mainVerbs: ["should be", "can scare"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>should be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very quiet</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(because loud noises can scare the birds)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>とても静かにすべきです</span> <span class='t-M'>(なぜなら大きな音は鳥を怖がらせる可能性があるので)</span>。",
                            naturalTranslation: "また、大きな音は鳥を怖がらせる可能性があるため、彼らはとても静かにすべきです。",
                            vocabulary: [
                                { word: "quiet", meaning: "「静かな」。" },
                                { word: "loud", meaning: "「大きな（音）」。" },
                                { word: "noises", meaning: "「音」「騒音」。" },
                                { word: "scare", meaning: "「怖がらせる」。" }
                            ],
                            grammarNotes: [
                                { phrase: "can", explanation: "<b>can</b>: 「〜しうる」「可能性がある」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "Where did the name \"kiwi\" come from?",
                textTranslation: "「キーウィ」という名前はどこから来ましたか？",
                choices: [
                    { id: 1, text: "From the Maori word for \"chicken.\"", translation: "マオリ語で「ニワトリ」を意味する言葉から。", isCorrect: false },
                    { id: 2, text: "From the sound the bird makes.", translation: "その鳥が出す音から。", isCorrect: true, highlight: "name \"kiwi\" came from the sound the bird makes" },
                    { id: 3, text: "From a famous forest in New Zealand.", translation: "ニュージーランドの有名な森から。", isCorrect: false },
                    { id: 4, text: "From a man who found the bird.", translation: "その鳥を見つけた男性の名前から。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落の終わりか第2段落の初め。「name \"kiwi\" came from」（名前は〜から来た）を探します。",
                    targetSentenceId: 6,
                    highlightWord: "came from the sound the bird makes",
                    highlightWordSentenceId: 6
                },
                keywords: ["where", "name", "come from"],
                keywordExplanations: {
                    "come from": "〜に由来する。"
                },
                keywordMatches: [
                    { sentenceId: 6, text: "The name \"kiwi\" came from", keyword: "come from" }
                ],
                choiceAdvice: "1: ニワトリ？ 2: 音？ 3: 有名な森？ 4: 見つけた人？",
                logic: [
                    { type: "text", content: "本文第2段落冒頭: \"The name \"kiwi\" came from the sound the bird makes.\"" },
                    { type: "text", content: "結論: 音に由来するという記述と選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 2,
                text: "Where do kiwis like to live?",
                textTranslation: "キーウィはどこに住むのが好きですか？",
                choices: [
                    { id: 1, text: "In forests with many trees.", translation: "多くの木がある森の中。", isCorrect: true, highlight: "like living in forests with many trees" },
                    { id: 2, text: "On farms with chickens.", translation: "ニワトリ牧場。", isCorrect: false },
                    { id: 3, text: "In busy cities.", translation: "忙しい都会。", isCorrect: false },
                    { id: 4, text: "On the top of mountains.", translation: "山の頂上。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「like living in」（〜に住むのが好き）の後を確認します。",
                    targetSentenceId: 10,
                    highlightWord: "like living in forests with many trees",
                    highlightWordSentenceId: 10
                },
                keywords: ["where", "like to live"],
                keywordExplanations: {
                    "live": "住む。"
                },
                keywordMatches: [
                    { sentenceId: 10, text: "like living in forests", keyword: "live" }
                ],
                choiceAdvice: "1: 森？ 2: 牧場？ 3: 都会？ 4: 山頂？",
                logic: [
                    { type: "text", content: "本文第3段落: \"They like living in forests with many trees and plants.\"" },
                    { type: "text", content: "結論: 森が好きという記述と選択肢1が一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 3,
                text: "Why have the numbers of kiwis gone down?",
                textTranslation: "なぜキーウィの数は減ってしまったのですか？",
                choices: [
                    { id: 1, text: "Because they fly to other countries.", translation: "他の国へ飛んでいったから。", isCorrect: false },
                    { id: 2, text: "Because they sleep at night.", translation: "夜寝ているから。", isCorrect: false },
                    { id: 3, text: "Because animals like dogs hunt them.", translation: "犬のような動物が彼らを狩るから。", isCorrect: true, highlight: "animals like dogs and cats hunt them" },
                    { id: 4, text: "Because the weather is too hot.", translation: "天気が暑すぎるから。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「gone down」（減った）理由。「This is because...」（なぜなら〜）の文を探します。",
                    targetSentenceId: 13,
                    highlightWord: "animals like dogs and cats hunt them",
                    highlightWordSentenceId: 13
                },
                keywords: ["why", "gone down"],
                keywordExplanations: {
                    "gone down": "減った。"
                },
                keywordMatches: [
                    { sentenceId: 12, text: "numbers have gone down", keyword: "gone down" }
                ],
                choiceAdvice: "1: 飛んでいった？ 2: 夜寝てる？ 3: 犬に狩られる？ 4: 暑い？",
                logic: [
                    { type: "text", content: "本文第3段落: \"This is because animals like dogs and cats hunt them.\"" },
                    { type: "text", content: "結論: 動物に狩られるという理由と選択肢3が一致する。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 4,
                text: "What is one rule for people who visit the forest?",
                textTranslation: "森を訪れる人々にとってのルールの一つは何ですか？",
                choices: [
                    { id: 1, text: "They should bring food for the birds.", translation: "鳥のために食べ物を持ってくるべき。", isCorrect: false },
                    { id: 2, text: "They should take photos with flash.", translation: "フラッシュを使って写真を撮るべき。", isCorrect: false },
                    { id: 3, text: "They should not bring pets.", translation: "ペットを連れてくるべきではない。", isCorrect: true, highlight: "should not bring their pets" },
                    { id: 4, text: "They should look for kiwis during the day.", translation: "昼間にキーウィを探すべき。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「rules」（ルール）の具体例。「should not bring」（持ってくるべきでない）ものとは？",
                    targetSentenceId: 20,
                    highlightWord: "should not bring their pets",
                    highlightWordSentenceId: 20
                },
                keywords: ["rule", "visit"],
                keywordExplanations: {
                    "rule": "ルール。",
                    "visit": "訪れる。"
                },
                keywordMatches: [
                    { sentenceId: 19, text: "important rules for visitors", keyword: "rules" }
                ],
                choiceAdvice: "1: 餌を持ってくる？ 2: フラッシュ撮影？ 3: ペット禁止？ 4: 昼間に探す？",
                logic: [
                    { type: "text", content: "本文第4段落: \"For example, people should not bring their pets into the forest.\"" },
                    { type: "text", content: "結論: ペット禁止のルールと選択肢3が一致する。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A special bird from New Zealand.", translation: "ニュージーランドの特別な鳥。", isCorrect: true, highlight: "kiwi is a special bird from New Zealand" },
                    { id: 2, text: "A popular pet in New Zealand.", translation: "ニュージーランドで人気のペット。", isCorrect: false },
                    { id: 3, text: "The history of Maori words.", translation: "マオリ語の歴史。", isCorrect: false },
                    { id: 4, text: "A trip to a famous forest.", translation: "有名な森への旅行。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "タイトルと最初の文を確認しましょう。",
                    targetSentenceId: 1,
                    highlightWord: "The kiwi is a special bird from New Zealand",
                    highlightWordSentenceId: 1
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 特別な鳥？ 2: ペット？ 3: 言葉の歴史？ 4: 森への旅行？",
                logic: [
                    { type: "text", content: "タイトル: \"The Kiwi\"" },
                    { type: "text", content: "第1文: \"The kiwi is a special bird from New Zealand.\"" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Kiwi",
            intro: "ニュージーランドの鳥「キーウィ」についての説明文です。過去問と同じ構成で、その特徴や名前の由来、保護のルールを解説しています。",
            points: [
                { label: "1. Appearance (特徴)", text: "飛べない鳥で、ニワトリくらいの大きさです。羽毛は髪の毛のように見えます。" },
                { label: "2. Name Origin (名前の由来)", text: "「キーウィ」という名前は、その鳴き声に由来します。先住民のマオリ族が名付けました。" },
                { label: "3. Habitat & Threats (生息地と脅威)", text: "森に住み、夜行性です。犬や猫による捕食や、森林伐採により数が減っています。" },
                { label: "4. Interaction (人間との関わり)", text: "国のシンボルとして人気ですが、保護のためにルールがあります。特に、ペットを森に持ち込まないことが重要です。" }
            ]
        }
    },
    {
        id: "grade-3-original-walt-disney",
        grade: "3級",
        title: "Walt Disney",
        subTitle: "問題6",
        genre: "伝記 / 歴史",
        similarProblems: {
            exam: "2023年度 第3回",
            title: "Bing Crosby"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Walt+Disney",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Walt Disney was one of the most popular American artists and moviemakers of the 20th century.",
                        translation: "ウォルト・ディズニーは、20世紀で最も人気のあるアメリカの芸術家兼映画製作者の一人でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Walt Disney</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>one of the most popular American artists and moviemakers of the 20th century</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>ウォルト・ディズニーは</span> <span class='t-V'>でした</span> <span class='t-C'>20世紀で最も人気のあるアメリカの芸術家で映画製作者の一人</span>。",
                            naturalTranslation: "ウォルト・ディズニーは、20世紀で最も人気のあるアメリカの芸術家兼映画製作者の一人でした。",
                            vocabulary: [
                                { word: "popular", meaning: "「人気のある」。" },
                                { word: "century", meaning: "「世紀」。" }
                            ],
                            grammarNotes: [
                                { phrase: "one of", explanation: "<b>one of ...</b>: 「〜の一人（一つ）」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "He was famous for his cartoons, and many people today still enjoy his movies.",
                        translation: "彼はアニメで有名で、今日でも多くの人々が彼の映画を楽しんでいます。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "enjoy"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>famous for his cartoons</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>many people today</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(still)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>enjoy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>his movies</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>でした</span> <span class='t-C'>彼のアニメで有名な</span>、そして<span class='t-S'>今の多くの人々は</span> <span class='t-M'>(まだ)</span> <span class='t-V'>楽しんでいます</span> <span class='t-O'>彼の映画を</span>。",
                            naturalTranslation: "彼はアニメで有名で、今日でも多くの人々が彼の映画を楽しんでいます。",
                            vocabulary: [
                                { word: "famous", meaning: "「有名な」。" },
                                { word: "cartoons", meaning: "「漫画」「アニメ」。" },
                                { word: "enjoy", meaning: "「楽しむ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "was famous for", explanation: "<b>be famous for</b>: 「〜で有名である」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "When he was a child, Disney lived on a farm, and he often drew pictures of animals.",
                        translation: "彼が子供の頃、ディズニーは農場に住んでいて、よく動物の絵を描いていました。",
                        grammarAnalysis: {
                            mainVerbs: ["lived", "drew"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When he was a child)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Disney</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>lived</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on a farm)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(often)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>drew</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>pictures of animals</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(彼が子供だった時)</span>、<span class='t-S'>ディズニーは</span> <span class='t-V'>住んでいました</span> <span class='t-M'>(農場に)</span>、そして<span class='t-S'>彼は</span> <span class='t-M'>(よく)</span> <span class='t-V'>描きました</span> <span class='t-O'>動物の絵を</span>。",
                            naturalTranslation: "彼が子供の頃、ディズニーは農場に住んでいて、よく動物の絵を描いていました。",
                            vocabulary: [
                                { word: "farm", meaning: "「農場」。" },
                                { word: "drew", meaning: "「描いた」。drawの過去形。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 4,
                        text: "When he was a high school student, he wanted to become an artist, and he drew pictures for the school newspaper.",
                        translation: "彼が高校生だった時、彼は芸術家になりたいと思い、学校の新聞のために絵を描きました。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted", "drew"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When he was a high school student)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to become an artist</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>drew</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>pictures</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for the school newspaper)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(彼が高校生だった時)</span>、<span class='t-S'>彼は</span> <span class='t-V'>したかった</span> <span class='t-O'>芸術家になることを</span>、そして<span class='t-S'>彼は</span> <span class='t-V'>描きました</span> <span class='t-O'>絵を</span> <span class='t-M'>(学校の新聞のために)</span>。",
                            naturalTranslation: "彼が高校生だった時、彼は芸術家になりたいと思い、学校の新聞のために絵を描きました。",
                            vocabulary: [
                                { word: "artist", meaning: "「芸術家」「画家」。" },
                                { word: "newspaper", meaning: "「新聞」。" }
                            ],
                            grammarNotes: [
                                { phrase: "wanted to become", explanation: "<b>want to do</b>: 「〜したい」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 5,
                        text: "After high school, Disney moved to California with his brother Roy Disney.",
                        translation: "高校卒業後、ディズニーは兄のロイ・ディズニーと共にカリフォルニアへ引っ越しました。",
                        grammarAnalysis: {
                            mainVerbs: ["moved"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After high school)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Disney</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>moved</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to California)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(with his brother Roy Disney)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(高校の後)</span>、<span class='t-S'>ディズニーは</span> <span class='t-V'>引っ越しました</span> <span class='t-M'>(カリフォルニアへ)</span> <span class='t-M'>(彼の兄ロイ・ディズニーと一緒に)</span>。",
                            naturalTranslation: "高校卒業後、ディズニーは兄のロイ・ディズニーと共にカリフォルニアへ引っ越しました。",
                            vocabulary: [
                                { word: "moved", meaning: "「引っ越した」「移動した」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 6,
                        text: "They wanted to make movies, so they began a small company.",
                        translation: "彼らは映画を作りたかったので、小さな会社を始めました。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted", "began"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to make movies</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>began</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a small company</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>したかった</span> <span class='t-O'>映画を作ることを</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼らは</span> <span class='t-V'>始めました</span> <span class='t-O'>小さな会社を</span>。",
                            naturalTranslation: "彼らは映画を作りたかったので、小さな会社を始めました。",
                            vocabulary: [
                                { word: "company", meaning: "「会社」。" },
                                { word: "began", meaning: "「始めた」。beginの過去形。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 7,
                        text: "A company is a place where people work together.",
                        translation: "会社とは、人々が一緒に働く場所のことです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>A company</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a place where people work together</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>会社は</span> <span class='t-V'>です</span> <span class='t-C'>人々が一緒に働く場所</span>。",
                            naturalTranslation: "会社とは、人々が一緒に働く場所のことです。",
                            vocabulary: [
                                { word: "together", meaning: "「一緒に」。" }
                            ],
                            grammarNotes: [
                                { phrase: "where", explanation: "<b>where</b>: 関係副詞。a placeを修飾する。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "Their movies were popular, and they made many cartoons together.",
                        translation: "彼らの映画は人気があり、彼らは多くのアニメを一緒に作りました。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "made"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Their movies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>popular</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>many cartoons</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>together</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らの映画は</span> <span class='t-V'>でした</span> <span class='t-C'>人気のある</span>、そして<span class='t-S'>彼らは</span> <span class='t-V'>作りました</span> <span class='t-O'>多くのアニメを</span> <span class='t-M'>一緒に</span>。",
                            naturalTranslation: "彼らの映画は人気があり、彼らは多くのアニメを一緒に作りました。",
                            vocabulary: [
                                { word: "made", meaning: "「作った」。makeの過去形。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 9,
                        text: "They also created a character named Mickey Mouse, and Disney was known for the voice of Mickey.",
                        translation: "彼らはまたミッキーマウスというキャラクターを作り、ディズニーはミッキーの声優として知られていました。",
                        grammarAnalysis: {
                            mainVerbs: ["created", "was known"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>created</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a character named Mickey Mouse</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>Disney</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was known</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for the voice of Mickey)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-M'>(また)</span> <span class='t-V'>創りました</span> <span class='t-O'>ミッキーマウスと名付けられたキャラクターを</span>、そして<span class='t-S'>ディズニーは</span> <span class='t-V'>知られていました</span> <span class='t-M'>(ミッキーの声で)</span>。",
                            naturalTranslation: "彼らはまたミッキーマウスというキャラクターを作り、ディズニーはミッキーの声優として知られていました。",
                            vocabulary: [
                                { word: "created", meaning: "「創った」「生み出した」。" },
                                { word: "character", meaning: "「キャラクター」「登場人物」。" },
                                { word: "voice", meaning: "「声」。" }
                            ],
                            grammarNotes: [
                                { phrase: "named", explanation: "<b>named</b>: 過去分詞の形容詞的用法。「名付けられた」。" },
                                { phrase: "was known for", explanation: "<b>be known for</b>: 「〜で知られている」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 10,
                        text: "From the 1930s, Disney made many long movies, and millions of people watched them.",
                        translation: "1930年代から、ディズニーは多くの長編映画を作り、何百万人もの人々がそれを見ました。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "watched"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(From the 1930s)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Disney</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>many long movies</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>millions of people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>watched</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(1930年代から)</span>、<span class='t-S'>ディズニーは</span> <span class='t-V'>作りました</span> <span class='t-O'>多くの長い映画を</span>、そして<span class='t-S'>何百万人もの人々が</span> <span class='t-V'>見ました</span> <span class='t-O'>それらを</span>。",
                            naturalTranslation: "1930年代から、ディズニーは多くの長編映画を作り、何百万人もの人々がそれを見ました。",
                            vocabulary: [
                                { word: "millions of", meaning: "「何百万もの」「多数の」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 11,
                        text: "Disney also made TV shows.",
                        translation: "ディズニーはテレビ番組も作りました。",
                        grammarAnalysis: {
                            mainVerbs: ["made"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Disney</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>TV shows</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ディズニーは</span> <span class='t-M'>(また)</span> <span class='t-V'>作りました</span> <span class='t-O'>テレビ番組を</span>。",
                            naturalTranslation: "ディズニーはテレビ番組も作りました。",
                            vocabulary: [
                                { word: "TV shows", meaning: "「テレビ番組」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 12,
                        text: "He was very successful in the 1950s.",
                        translation: "彼は1950年代に非常に成功しました。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very successful</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(in the 1950s)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>でした</span> <span class='t-C'>とても成功した</span> <span class='t-M'>(1950年代に)</span>。",
                            naturalTranslation: "彼は1950年代に非常に成功しました。",
                            vocabulary: [
                                { word: "successful", meaning: "「成功した」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 13,
                        text: "In 1932, he won a special award for creating Mickey Mouse.",
                        translation: "1932年に、彼はミッキーマウスを創作したことで特別賞を受賞しました。",
                        grammarAnalysis: {
                            mainVerbs: ["won"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1932)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>won</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a special award</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for creating Mickey Mouse)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1932年に)</span>、<span class='t-S'>彼は</span> <span class='t-V'>勝ち取りました（受賞した）</span> <span class='t-O'>特別な賞を</span> <span class='t-M'>(ミッキーマウスを創ったことに対して)</span>。",
                            naturalTranslation: "1932年に、彼はミッキーマウスを創作したことで特別賞を受賞しました。",
                            vocabulary: [
                                { word: "won", meaning: "「勝った」「獲得した」。winの過去形。" },
                                { word: "award", meaning: "「賞」。" },
                                { word: "creating", meaning: "「創ること」。" }
                            ],
                            grammarNotes: [
                                { phrase: "for creating", explanation: "<b>for doing</b>: 「〜したことに対して」。理由を表すfor。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 14,
                        text: "Disney not only enjoyed making movies but also building parks.",
                        translation: "ディズニーは映画を作ることだけでなく、公園を造ることも楽しみました。",
                        grammarAnalysis: {
                            mainVerbs: ["enjoyed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Disney</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>enjoyed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>not only making movies but also building parks</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ディズニーは</span> <span class='t-V'>楽しみました</span> <span class='t-O'>映画を作ることだけでなく公園を造ることも</span>。",
                            naturalTranslation: "ディズニーは映画を作ることだけでなく、公園を造ることも楽しみました。",
                            vocabulary: [
                                { word: "building", meaning: "「建てること」「造ること」。" },
                                { word: "parks", meaning: "「公園」。" }
                            ],
                            grammarNotes: [
                                { phrase: "not only ... but also", explanation: "<b>not only A but also B</b>: 「AだけでなくBも」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "Theme parks were his new idea, and he helped to create Disneyland.",
                        translation: "テーマパークは彼の新しいアイデアで、彼はディズニーランドを創設するのを手助けしました。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "helped"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Theme parks</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>his new idea</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to create Disneyland</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>テーマパークは</span> <span class='t-V'>でした</span> <span class='t-C'>彼の新しいアイデア</span>、そして<span class='t-S'>彼は</span> <span class='t-V'>手助けしました</span> <span class='t-O'>ディズニーランドを創ることを</span>。",
                            naturalTranslation: "テーマパークは彼の新しいアイデアで、彼はディズニーランドを創設するのを手助けしました。",
                            vocabulary: [
                                { word: "theme parks", meaning: "「テーマパーク」「遊園地」。" },
                                { word: "idea", meaning: "「考え」「アイデア」。" }
                            ],
                            grammarNotes: [
                                { phrase: "helped to create", explanation: "<b>help (to) do</b>: 「〜するのを手伝う」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "The park is still visited every year.",
                        translation: "その公園は今でも毎年（人々が）訪れています。",
                        grammarAnalysis: {
                            mainVerbs: ["is visited"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The park</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(still)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>visited</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(every year)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>その公園は</span> <span class='t-V'>されています（訪れられている）</span> <span class='t-M'>(まだ)</span> <span class='t-M'>(毎年)</span>。",
                            naturalTranslation: "その公園は今でも毎年（人々が）訪れています。",
                            vocabulary: [
                                { word: "visited", meaning: "「訪れられた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "is visited", explanation: "<b>is visited</b>: 受動態。「訪れられている」＝「人々が訪れる」。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "It is now one of the most famous places in the United States.",
                        translation: "それは現在、アメリカで最も有名な場所の一つです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(now)</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>one of the most famous places in the United States</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-M'>(今)</span> <span class='t-C'>アメリカで最も有名な場所の一つ</span>。",
                            naturalTranslation: "それは現在、アメリカで最も有名な場所の一つです。",
                            vocabulary: [
                                { word: "places", meaning: "「場所」。" },
                                { word: "United States", meaning: "「合衆国」「アメリカ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "most famous", explanation: "<b>the most ...</b>: 最上級。「最も〜な」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "Disney continued working until he died in 1966.",
                        translation: "ディズニーは1966年に亡くなるまで働き続けました。",
                        grammarAnalysis: {
                            mainVerbs: ["continued"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Disney</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>continued</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>working</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(until he died in 1966)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>ディズニーは</span> <span class='t-V'>続けました</span> <span class='t-O'>働くことを</span> <span class='t-M'>(1966年に彼が死ぬまで)</span>。",
                            naturalTranslation: "ディズニーは1966年に亡くなるまで働き続けました。",
                            vocabulary: [
                                { word: "continued", meaning: "「続けた」。" },
                                { word: "died", meaning: "「死んだ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "continued working", explanation: "<b>continue doing</b>: 「〜し続ける」。" },
                                { phrase: "until", explanation: "<b>until</b>: 接続詞。「〜するまで（ずっと）」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "Although he died many years ago, people remember his fun movies, his characters, and his parks.",
                        translation: "彼は何年も前に亡くなりましたが、人々は彼の楽しい映画、キャラクター、そして公園を覚えています。",
                        grammarAnalysis: {
                            mainVerbs: ["remember"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Although he died many years ago)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>remember</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>his fun movies, his characters, and his parks</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(彼は何年も前に死にましたが)</span>、<span class='t-S'>人々は</span> <span class='t-V'>覚えています</span> <span class='t-O'>彼の楽しい映画、彼のキャラクター、そして彼の公園を</span>。",
                            naturalTranslation: "彼は何年も前に亡くなりましたが、人々は彼の楽しい映画、キャラクター、そして公園を覚えています。",
                            vocabulary: [
                                { word: "fun", meaning: "「楽しい」。" }
                            ],
                            grammarNotes: [
                                { phrase: "Although", explanation: "<b>Although</b>: 接続詞。「〜だけれども」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "When Walt Disney was a student, he",
                textTranslation: "ウォルト・ディズニーが学生だったとき、彼は",
                choices: [
                    { id: 1, text: "drew pictures for a newspaper.", translation: "新聞のために絵を描いた。", isCorrect: true, highlight: "drew pictures for the school newspaper" },
                    { id: 2, text: "visited a famous farm.", translation: "有名な農場を訪れた。", isCorrect: false },
                    { id: 3, text: "bought a camera for his brother.", translation: "兄のためにカメラを買った。", isCorrect: false },
                    { id: 4, text: "wrote stories about California.", translation: "カリフォルニアについての物語を書いた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「When he was a high school student」（彼が高校生だった時）の後の行動を確認します。",
                    targetSentenceId: 4,
                    highlightWord: "drew pictures for the school newspaper",
                    highlightWordSentenceId: 4
                },
                keywords: ["when", "student"],
                keywordExplanations: {
                    "student": "学生（ここではhigh school student）。"
                },
                keywordMatches: [
                    { sentenceId: 4, text: "When he was a high school student", keyword: "student" }
                ],
                choiceAdvice: "1: 新聞に絵を描いた？ 2: 農場を訪れた？ 3: カメラを買った？ 4: 物語を書いた？",
                logic: [
                    { type: "text", content: "本文第1段落: \"When he was a high school student, ... he drew pictures for the school newspaper.\"" },
                    { type: "text", content: "結論: 新聞のために絵を描いたという記述と選択肢1が一致する。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 2,
                text: "What did Disney and Roy Disney do together?",
                textTranslation: "ディズニーとロイ・ディズニーは一緒に何をしましたか？",
                choices: [
                    { id: 1, text: "They built a large school.", translation: "彼らは大きな学校を建てた。", isCorrect: false },
                    { id: 2, text: "They started a company.", translation: "彼らは会社を始めた。", isCorrect: true, highlight: "began a small company" },
                    { id: 3, text: "They acted in a play.", translation: "彼らは劇で演じた。", isCorrect: false },
                    { id: 4, text: "They wrote music for the radio.", translation: "彼らはラジオのために音楽を書いた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「They wanted to make movies, so...」（彼らは映画を作りたかったので...）の後の行動。「began」（始めた）は何を？",
                    targetSentenceId: 6,
                    highlightWord: "began a small company",
                    highlightWordSentenceId: 6
                },
                keywords: ["what", "do together"],
                keywordExplanations: {
                    "together": "一緒に。"
                },
                keywordMatches: [
                    { sentenceId: 8, text: "made many cartoons together", keyword: "together" }
                ],
                choiceAdvice: "1: 学校を建てた？ 2: 会社を始めた？ 3: 劇に出た？ 4: 音楽を書いた？",
                logic: [
                    { type: "text", content: "本文第2段落: \"...they began a small company.\"" },
                    { type: "text", content: "began = started。会社を始めたことと選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 3,
                text: "When did Disney win a special award?",
                textTranslation: "ディズニーはいつ特別賞を取りましたか？",
                choices: [
                    { id: 1, text: "In 1930.", translation: "1930年に。", isCorrect: false },
                    { id: 2, text: "In 1932.", translation: "1932年に。", isCorrect: true, highlight: "In 1932, he won a special award" },
                    { id: 3, text: "In 1950.", translation: "1950年に。", isCorrect: false },
                    { id: 4, text: "In 1966.", translation: "1966年に。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「won a special award」（特別賞を取った）の文にある年号を探します。",
                    targetSentenceId: 13,
                    highlightWord: "In 1932, he won a special award",
                    highlightWordSentenceId: 13
                },
                keywords: ["when", "win", "award"],
                keywordExplanations: {
                    "win": "勝つ、取る。",
                    "award": "賞。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "won a special award", keyword: "won" }
                ],
                choiceAdvice: "年号を特定する問題です。",
                logic: [
                    { type: "text", content: "本文第3段落: \"In 1932, he won a special award...\"" },
                    { type: "text", content: "結論: 1932年と選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 4,
                text: "What did Disney help to create?",
                textTranslation: "ディズニーは何を創るのを手助けしましたか？",
                choices: [
                    { id: 1, text: "A new sport.", translation: "新しいスポーツ。", isCorrect: false },
                    { id: 2, text: "A painting contest.", translation: "絵画コンテスト。", isCorrect: false },
                    { id: 3, text: "A theme park.", translation: "テーマパーク。", isCorrect: true, highlight: "helped to create Disneyland" },
                    { id: 4, text: "A computer game.", translation: "コンピュータゲーム。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「helped to create」（創るのを手助けした）の目的語。「Disneyland」は何の一種？ 前の文の「Theme parks」がヒント。",
                    targetSentenceId: 15,
                    highlightWord: "helped to create Disneyland",
                    highlightWordSentenceId: 15
                },
                keywords: ["what", "create"],
                keywordExplanations: {
                    "create": "創る、創造する。"
                },
                keywordMatches: [
                    { sentenceId: 15, text: "helped to create Disneyland", keyword: "create" }
                ],
                choiceAdvice: "1: スポーツ？ 2: コンテスト？ 3: テーマパーク？ 4: ゲーム？",
                logic: [
                    { type: "text", content: "本文第4段落: \"Theme parks were his new idea, and he helped to create Disneyland.\"" },
                    { type: "text", content: "ディズニーランドはテーマパーク。選択肢3が正解。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A famous moviemaker and artist.", translation: "有名な映画製作者で芸術家。", isCorrect: true, highlight: "most popular American artists and moviemakers" },
                    { id: 2, text: "The history of American farms.", translation: "アメリカの農場の歴史。", isCorrect: false },
                    { id: 3, text: "The first cartoon in the world.", translation: "世界で最初のアニメ。", isCorrect: false },
                    { id: 4, text: "A popular type of camera.", translation: "人気のある種類のカメラ。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "第1文を確認。「Walt Disney was...」（ウォルト・ディズニーは〜だった）の職業説明を見ましょう。",
                    targetSentenceId: 1,
                    highlightWord: "Walt Disney was one of the most popular American artists and moviemakers",
                    highlightWordSentenceId: 1
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 映画製作者・芸術家？ 2: 農場の歴史？ 3: 最初のアニメ？ 4: カメラ？",
                logic: [
                    { type: "text", content: "第1文: \"Walt Disney was one of the most popular American artists and moviemakers...\"" },
                    { type: "text", content: "彼の生涯と業績についての話なので、選択肢1が正解。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Walt Disney",
            intro: "アメリカの映画製作者、ウォルト・ディズニーの伝記です。クロスビーと同様に「幼少期の情熱」「パートナーとの移住」「成功と賞」「後世に残る施設の創設」を描いています。",
            points: [
                { label: "1. Early Life (幼少期)", text: "有名なアニメ作家。農場で育ち動物の絵を描き、高校時代は学校新聞に絵を寄稿しました。" },
                { label: "2. Career Start (キャリア初期)", text: "兄のロイと共にカリフォルニアへ移住し、会社（スタジオ）を設立。ミッキーマウスを生み出しました。" },
                { label: "3. Success (成功)", text: "長編映画やテレビ番組で成功。1932年にはミッキーマウスの創作で特別賞を受賞しました。" },
                { label: "4. Legacy (遺産)", text: "映画だけでなくテーマパーク作りにも情熱を注ぎ、ディズニーランドを創設しました。その功績は今も愛されています。" }
            ]
        }
    },
    {
        id: "grade-3-original-vanilla",
        grade: "3級",
        title: "Vanilla",
        subTitle: "問題7",
        genre: "植物 / 説明文",
        similarProblems: {
            exam: "2023年度 第2回",
            title: "Saffron"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Vanilla",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Vanilla is a flavor that is used for sweets in many countries around the world.",
                        translation: "バニラは世界中の多くの国でお菓子に使われている風味（フレーバー）です。",
                        grammarAnalysis: {
                            mainVerbs: ["is", "is used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Vanilla</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a flavor that is used for sweets in many countries around the world</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>バニラは</span> <span class='t-V'>です</span> <span class='t-C'>世界中の多くの国でお菓子に使われている風味</span>。",
                            naturalTranslation: "バニラは世界中の多くの国でお菓子に使われている風味（フレーバー）です。",
                            vocabulary: [
                                { word: "flavor", meaning: "「風味」「フレーバー」。" },
                                { word: "sweets", meaning: "「お菓子」「甘いもの」。" }
                            ],
                            grammarNotes: [
                                { phrase: "that is used", explanation: "<b>that</b>: 関係代名詞。a flavorを修飾する。is usedは受動態。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "It is made from the beans of a plant called an orchid.",
                        translation: "それは蘭（ラン）と呼ばれる植物の豆から作られています。",
                        grammarAnalysis: {
                            mainVerbs: ["is made"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is made</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(from the beans of a plant called an orchid)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>作られています</span> <span class='t-M'>(蘭と呼ばれる植物の豆から)</span>。",
                            naturalTranslation: "それは蘭（ラン）と呼ばれる植物の豆から作られています。",
                            vocabulary: [
                                { word: "beans", meaning: "「豆」。" },
                                { word: "plant", meaning: "「植物」。" },
                                { word: "orchid", meaning: "「蘭（ラン）」。" }
                            ],
                            grammarNotes: [
                                { phrase: "is made from", explanation: "<b>be made from</b>: 「〜（原料）から作られている」。" },
                                { phrase: "called", explanation: "<b>called</b>: 過去分詞。「〜と呼ばれる」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "These beans are long and black, but they have a sweet smell.",
                        translation: "これらの豆は長くて黒いですが、甘い香りがします。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "have"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These beans</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>long and black</span><span class='tag'>C</span></span>, but <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a sweet smell</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これらの豆は</span> <span class='t-V'>です</span> <span class='t-C'>長くて黒い</span>、しかし<span class='t-S'>それらは</span> <span class='t-V'>持っています</span> <span class='t-O'>甘い香りを（＝甘い香りがする）</span>。",
                            naturalTranslation: "これらの豆は長くて黒いですが、甘い香りがします。",
                            vocabulary: [
                                { word: "smell", meaning: "「匂い」「香り」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 4,
                        text: "Many people think the flavor is soft and delicious.",
                        translation: "多くの人々は、その風味が柔らかく美味しいと考えています。",
                        grammarAnalysis: {
                            mainVerbs: ["think", "is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>think</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(that) the flavor is soft and delicious</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>多くの人々は</span> <span class='t-V'>思います</span> <span class='t-O'>その風味は柔らかく美味しいと</span>。",
                            naturalTranslation: "多くの人々は、その風味が柔らかく美味しいと考えています。",
                            vocabulary: [
                                { word: "soft", meaning: "「柔らかい」「まろやかな」。" },
                                { word: "delicious", meaning: "「美味しい」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 5,
                        text: "Vanilla is used to make many kinds of food, such as ice cream, cakes, and cookies.",
                        translation: "バニラはアイスクリーム、ケーキ、クッキーなど、多くの種類の食べ物を作るのに使われます。",
                        grammarAnalysis: {
                            mainVerbs: ["is used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Vanilla</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is used</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to make many kinds of food, such as ice cream, cakes, and cookies)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>バニラは</span> <span class='t-V'>使われます</span> <span class='t-M'>(多く種類の食べ物を作るために、例えばアイスクリーム、ケーキ、クッキーのような)</span>。",
                            naturalTranslation: "バニラはアイスクリーム、ケーキ、クッキーなど、多くの種類の食べ物を作るのに使われます。",
                            vocabulary: [
                                { word: "kinds of", meaning: "「〜の種類」。" },
                                { word: "such as", meaning: "「〜のような」。" }
                            ],
                            grammarNotes: [
                                { phrase: "is used to make", explanation: "<b>is used to do</b>: 「〜するために使われる」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "People in parts of Mexico have used vanilla when they cook for a long time.",
                        translation: "メキシコの一部の地域の人々は、長い間料理をする際にバニラを使ってきました。",
                        grammarAnalysis: {
                            mainVerbs: ["have used", "cook"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People in parts of Mexico</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>vanilla</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(when they cook)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(for a long time)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>メキシコの一部の地域の人々は</span> <span class='t-V'>使ってきました</span> <span class='t-O'>バニラを</span> <span class='t-M'>(彼らが料理する時)</span> <span class='t-M'>(長い間)</span>。",
                            naturalTranslation: "メキシコの一部の地域の人々は、長い間料理をする際にバニラを使ってきました。",
                            vocabulary: [
                                { word: "parts", meaning: "「一部（の地域）」。" },
                                { word: "cook", meaning: "「料理する」。" }
                            ],
                            grammarNotes: [
                                { phrase: "have used", explanation: "<b>have used</b>: 現在完了形。「ずっと使っている」（継続）。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "It has also been popular for hundreds of years in parts of Europe.",
                        translation: "それはヨーロッパの一部の地域でも何百年もの間人気があります。",
                        grammarAnalysis: {
                            mainVerbs: ["has been"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>has been</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>popular</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for hundreds of years)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in parts of Europe)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-M'>(また)</span> <span class='t-V'>ずっと〜です</span> <span class='t-C'>人気のある</span> <span class='t-M'>(何百年もの間)</span> <span class='t-M'>(ヨーロッパの一部で)</span>。",
                            naturalTranslation: "それはヨーロッパの一部の地域でも何百年もの間人気があります。",
                            vocabulary: [
                                { word: "hundreds of", meaning: "「何百もの」。" }
                            ],
                            grammarNotes: [
                                { phrase: "has been", explanation: "<b>has been</b>: 現在完了形。「ずっと〜である」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "Later, people in other places started using it, too.",
                        translation: "その後、他の場所の人々もそれを使用し始めました。",
                        grammarAnalysis: {
                            mainVerbs: ["started"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Later)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people in other places</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>started</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>using it</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(too)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(後で)</span>、<span class='t-S'>他の場所の人々は</span> <span class='t-V'>始めました</span> <span class='t-O'>それを使うことを</span>、<span class='t-M'>(〜もまた)</span>。",
                            naturalTranslation: "その後、他の場所の人々もそれを使用し始めました。",
                            vocabulary: [
                                { word: "later", meaning: "「後で」「その後」。" },
                                { word: "places", meaning: "「場所」。" }
                            ],
                            grammarNotes: [
                                { phrase: "started using", explanation: "<b>start doing</b>: 「〜し始める」。" }
                            ]
                        }
                    },
                    {
                        id: 9,
                        text: "Many people used vanilla for sweets, but some people used it for other things.",
                        translation: "多くの人々はお菓子にバニラを使いましたが、他のことに使う人々もいました。",
                        grammarAnalysis: {
                            mainVerbs: ["used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>vanilla</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for sweets)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>some people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for other things)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>多くの人々は</span> <span class='t-V'>使いました</span> <span class='t-O'>バニラを</span> <span class='t-M'>(お菓子のために)</span>、しかし<span class='t-S'>何人かの人々は</span> <span class='t-V'>使いました</span> <span class='t-O'>それを</span> <span class='t-M'>(他のことのために)</span>。",
                            naturalTranslation: "多くの人々はお菓子にバニラを使いましたが、他のことに使う人々もいました。",
                            vocabulary: [
                                { word: "other", meaning: "「他の」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 10,
                        text: "It was used to make medicine for stomach problems, and people also used it to make perfume.",
                        translation: "それは胃の問題のための薬を作るのに使われたり、人々は香水を作るのにもそれを使いました。",
                        grammarAnalysis: {
                            mainVerbs: ["was used", "used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was used</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to make medicine for stomach problems)</span><span class='tag'>M</span></span>, and <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to make perfume)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>使われました</span> <span class='t-M'>(胃の問題のための薬を作るために)</span>、そして<span class='t-S'>人々は</span> <span class='t-M'>(また)</span> <span class='t-V'>使いました</span> <span class='t-O'>それを</span> <span class='t-M'>(香水を作るために)</span>。",
                            naturalTranslation: "それは胃の問題のための薬を作るのに使われたり、人々は香水を作るのにもそれを使いました。",
                            vocabulary: [
                                { word: "medicine", meaning: "「薬」。" },
                                { word: "stomach", meaning: "「胃」「お腹」。" },
                                { word: "problems", meaning: "「問題」「不調」。" },
                                { word: "perfume", meaning: "「香水」。" }
                            ],
                            grammarNotes: [
                                { phrase: "was used to make", explanation: "<b>be used to do</b>: 「〜するために使われる」。" },
                                { phrase: "to make", explanation: "<b>to make</b>: 不定詞の副詞的用法。「作るために」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 11,
                        text: "Making vanilla isn't easy.",
                        translation: "バニラを作るのは簡単ではありません。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Making vanilla</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>isn't</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>easy</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>バニラを作ることは</span> <span class='t-V'>ではありません</span> <span class='t-C'>簡単（な）</span>。",
                            naturalTranslation: "バニラを作るのは簡単ではありません。",
                            vocabulary: [
                                { word: "making", meaning: "「作ること」。動名詞。" },
                                { word: "easy", meaning: "「簡単な」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 12,
                        text: "Usually, the flowers must be pollinated by hand to produce the beans.",
                        translation: "通常、豆を生産するために花は手作業で受粉させなければなりません。",
                        grammarAnalysis: {
                            mainVerbs: ["must be pollinated"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Usually)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the flowers</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>must be pollinated</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(by hand)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to produce the beans)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(たいてい)</span>、<span class='t-S'>花は</span> <span class='t-V'>受粉されなければなりません</span> <span class='t-M'>(手作業で)</span> <span class='t-M'>(豆を生産するために)</span>。",
                            naturalTranslation: "通常、豆を生産するために花は手作業で受粉させなければなりません。",
                            vocabulary: [
                                { word: "must", meaning: "「〜しなければならない」。" },
                                { word: "pollinated", meaning: "「受粉された」。" },
                                { word: "by hand", meaning: "「手作業で」。" },
                                { word: "produce", meaning: "「生産する」「作る」。" }
                            ],
                            grammarNotes: [
                                { phrase: "must be pollinated", explanation: "<b>must be p.p.</b>: 助動詞＋受動態。「〜されなければならない」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "The flowers only open for one day a year.",
                        translation: "その花は一年に一日しか咲きません。",
                        grammarAnalysis: {
                            mainVerbs: ["open"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The flowers</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(only)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>open</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for one day a year)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>その花は</span> <span class='t-M'>(〜だけ)</span> <span class='t-V'>開きます（咲く）</span> <span class='t-M'>(一年に一日の間)</span>。",
                            naturalTranslation: "その花は一年に一日しか咲きません。",
                            vocabulary: [
                                { word: "open", meaning: "「開く」「咲く」。" }
                            ],
                            grammarNotes: [
                                { phrase: "a year", explanation: "<b>a year</b>: 「一年につき」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "The beans are green at first, so people have to dry them in the sun for months.",
                        translation: "豆は最初は緑色なので、人々は数ヶ月間それらを天日で乾燥させなければなりません。",
                        grammarAnalysis: {
                            mainVerbs: ["are", "have to dry"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The beans</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>green</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(at first)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have to dry</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in the sun)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(for months)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>豆は</span> <span class='t-V'>です</span> <span class='t-C'>緑色</span> <span class='t-M'>(最初は)</span>、<span class='t-M'>(だから)</span> <span class='t-S'>人々は</span> <span class='t-V'>乾燥させなければなりません</span> <span class='t-O'>それらを</span> <span class='t-M'>(太陽の下で)</span> <span class='t-M'>(数ヶ月間)</span>。",
                            naturalTranslation: "豆は最初は緑色なので、人々は数ヶ月間それらを天日で乾燥させなければなりません。",
                            vocabulary: [
                                { word: "dry", meaning: "「乾燥させる」。" },
                                { word: "months", meaning: "「数ヶ月」。" }
                            ],
                            grammarNotes: [
                                { phrase: "at first", explanation: "<b>at first</b>: 「最初は」。" },
                                { phrase: "have to", explanation: "<b>have to</b>: 「〜しなければならない」。" }
                            ]
                        }
                    },
                    {
                        id: 15,
                        text: "This takes a long time, so many people are needed to work on the farms.",
                        translation: "これには長い時間がかかるため、農場で働くために多くの人々が必要です。",
                        grammarAnalysis: {
                            mainVerbs: ["takes", "are needed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>takes</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a long time</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are needed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to work on the farms)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>かかります</span> <span class='t-O'>長い時間が</span>、<span class='t-M'>(だから)</span> <span class='t-S'>多くの人々が</span> <span class='t-V'>必要とされます</span> <span class='t-M'>(農場で働くために)</span>。",
                            naturalTranslation: "これには長い時間がかかるため、農場で働くために多くの人々が必要です。",
                            vocabulary: [
                                { word: "takes", meaning: "「（時間・労力が）かかる」。" },
                                { word: "needed", meaning: "「必要とされる」。" }
                            ],
                            grammarNotes: [
                                { phrase: "are needed", explanation: "<b>are needed</b>: 受動態。「必要とされる」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "Also, the beans should be picked at the right time before they split open.",
                        translation: "また、豆は割れて開く前の適切な時期に摘み取られるべきです。",
                        grammarAnalysis: {
                            mainVerbs: ["should be picked", "split open"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the beans</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>should be picked</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(at the right time)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(before they split open)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-S'>豆は</span> <span class='t-V'>摘み取られるべきです</span> <span class='t-M'>(正しい時期に)</span> <span class='t-M'>(それらが割れて開く前に)</span>。",
                            naturalTranslation: "また、豆は割れて開く前の適切な時期に摘み取られるべきです。",
                            vocabulary: [
                                { word: "picked", meaning: "「摘み取られた」。" },
                                { word: "right", meaning: "「正しい」「適切な」。" },
                                { word: "split", meaning: "「割れる」。" }
                            ],
                            grammarNotes: [
                                { phrase: "should be picked", explanation: "<b>should be p.p.</b>: 助動詞＋受動態。「〜されるべきだ」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 17,
                        text: "For these reasons, vanilla is expensive.",
                        translation: "これらの理由から、バニラは高価です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(For these reasons)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>vanilla</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>expensive</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(これらの理由のために)</span>、<span class='t-S'>バニラは</span> <span class='t-V'>です</span> <span class='t-C'>高価（な）</span>。",
                            naturalTranslation: "これらの理由から、バニラは高価です。",
                            vocabulary: [
                                { word: "reasons", meaning: "「理由」。" },
                                { word: "expensive", meaning: "「高価な」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 18,
                        text: "It is one of the most expensive flavors in the world.",
                        translation: "それは世界で最も高価なフレーバーの一つです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>one of the most expensive flavors in the world</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>世界で最も高価なフレーバーの一つ</span>。",
                            naturalTranslation: "それは世界で最も高価なフレーバーの一つです。",
                            vocabulary: [],
                            grammarNotes: [
                                { phrase: "one of the most ...", explanation: "<b>one of the most ...</b>: 「最も〜なものの一つ」。最上級。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "In some places, it is called \"green gold.\"",
                        translation: "いくつかの場所では、それは「緑の金」と呼ばれています。",
                        grammarAnalysis: {
                            mainVerbs: ["is called"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In some places)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>\"green gold\"</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-M'>(いくつかの場所では)</span>、<span class='t-S'>それは</span> <span class='t-V'>呼ばれます</span> <span class='t-C'>「緑の金」と</span>。",
                            naturalTranslation: "いくつかの場所では、それは「緑の金」と呼ばれています。",
                            vocabulary: [
                                { word: "gold", meaning: "「金」。" }
                            ],
                            grammarNotes: [
                                { phrase: "is called", explanation: "<b>is called C</b>: 「Cと呼ばれる」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "However, people don't need to use much of it when they cook because of its strong smell.",
                        translation: "しかし、その強い香りのために、人々は料理をするときにそれを多く使う必要はありません。",
                        grammarAnalysis: {
                            mainVerbs: ["don't need"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>don't need</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to use much of it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(when they cook)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(because of its strong smell)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>人々は</span> <span class='t-V'>必要ありません</span> <span class='t-O'>それをたくさん使うことは</span> <span class='t-M'>(料理する時)</span> <span class='t-M'>(その強い香りのために)</span>。",
                            naturalTranslation: "しかし、その強い香りのために、人々は料理をするときにそれを多く使う必要はありません。",
                            vocabulary: [
                                { word: "much", meaning: "「多くの（量）」。" },
                                { word: "strong", meaning: "「強い」。" }
                            ],
                            grammarNotes: [
                                { phrase: "need to use", explanation: "<b>need to do</b>: 「〜する必要がある」。" },
                                { phrase: "because of", explanation: "<b>because of</b>: 「〜の理由で」「〜のために」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "Because of that, many people still buy vanilla to use at home.",
                        translation: "そのため、多くの人々は今でも家で使うためにバニラを買います。",
                        grammarAnalysis: {
                            mainVerbs: ["buy"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Because of that)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many people</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(still)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>buy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>vanilla</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to use at home)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(そのため)</span>、<span class='t-S'>多くの人々は</span> <span class='t-M'>(まだ)</span> <span class='t-V'>買います</span> <span class='t-O'>バニラを</span> <span class='t-M'>(家で使うために)</span>。",
                            naturalTranslation: "そのため、多くの人々は今でも家で使うためにバニラを買います。",
                            vocabulary: [
                                { word: "still", meaning: "「まだ」「今でも」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to use", explanation: "<b>to use</b>: 不定詞の副詞的用法。「使うために」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "What is vanilla made from?",
                textTranslation: "バニラは何から作られていますか？",
                choices: [
                    { id: 1, text: "A sweet fruit.", translation: "甘いフルーツ。", isCorrect: false },
                    { id: 2, text: "The beans of a plant.", translation: "植物の豆。", isCorrect: true, highlight: "made from the beans of a plant" },
                    { id: 3, text: "A special kind of milk.", translation: "特別な種類の牛乳。", isCorrect: false },
                    { id: 4, text: "The leaves of a tree.", translation: "木の葉。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「is made from」（〜から作られている）の後を探します。",
                    targetSentenceId: 2,
                    highlightWord: "is made from the beans of a plant called an orchid",
                    highlightWordSentenceId: 2
                },
                keywords: ["what", "made from"],
                keywordExplanations: {
                    "made from": "〜から作られる（原料）。"
                },
                keywordMatches: [
                    { sentenceId: 2, text: "is made from the beans of a plant", keyword: "made from" }
                ],
                choiceAdvice: "1: フルーツ？ 2: 豆？ 3: 牛乳？ 4: 葉っぱ？",
                logic: [
                    { type: "text", content: "本文第1段落: \"It is made from the beans of a plant called an orchid.\"" },
                    { type: "text", content: "結論: 植物の豆から作られるという記述と選択肢2が一致する。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 2,
                text: "What has been popular with people in parts of Europe for a long time?",
                textTranslation: "ヨーロッパの一部の人々の間で長い間人気があるのは何ですか？",
                choices: [
                    { id: 1, text: "Using vanilla in their food.", translation: "彼らの食べ物にバニラを使うこと。", isCorrect: true, highlight: "has also been popular for hundreds of years" },
                    { id: 2, text: "Drinking medicine with vanilla.", translation: "バニラと一緒に薬を飲むこと。", isCorrect: false },
                    { id: 3, text: "Making perfume from old flowers.", translation: "古い花から香水を作ること。", isCorrect: false },
                    { id: 4, text: "Visiting farms in Mexico.", translation: "メキシコの農場を訪れること。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「has also been popular」（ずっと人気がある）の文。その文の「It」が指す内容を前の文から判断します。",
                    targetSentenceId: 7,
                    highlightWord: "It has also been popular for hundreds of years",
                    highlightWordSentenceId: 7
                },
                keywords: ["what", "popular", "Europe", "long time"],
                keywordExplanations: {
                    "popular": "人気がある。",
                    "long time": "長い間（hundreds of yearsと同意）。"
                },
                keywordMatches: [
                    { sentenceId: 7, text: "has also been popular for hundreds of years in parts of Europe", keyword: "popular" }
                ],
                choiceAdvice: "前の文脈を確認。「used vanilla when they cook」を指しています。",
                logic: [
                    { type: "text", content: "本文第2段落: \"People... have used vanilla when they cook... It has also been popular...\"" },
                    { type: "text", content: "It = Using vanilla when they cook。つまり食べ物に使うこと。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 3,
                text: "What do people need to do to produce vanilla beans?",
                textTranslation: "バニラビーンズを生産するために、人々は何をする必要がありますか？",
                choices: [
                    { id: 1, text: "Pollinate flowers by hand.", translation: "手作業で花を受粉させる。", isCorrect: true, highlight: "flowers must be pollinated by hand" },
                    { id: 2, text: "Collect beans in the winter.", translation: "冬に豆を集める。", isCorrect: false },
                    { id: 3, text: "Use a machine to dry beans.", translation: "豆を乾燥させるために機械を使う。", isCorrect: false },
                    { id: 4, text: "Cook the beans in water.", translation: "水で豆を煮る。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「produce the beans」（豆を生産する）ために「must be」（されなければならない）こと。",
                    targetSentenceId: 12,
                    highlightWord: "flowers must be pollinated by hand",
                    highlightWordSentenceId: 12
                },
                keywords: ["what", "need to do", "produce"],
                keywordExplanations: {
                    "produce": "生産する、作る。"
                },
                keywordMatches: [
                    { sentenceId: 12, text: "flowers must be pollinated by hand to produce the beans", keyword: "produce" }
                ],
                choiceAdvice: "1: 手で受粉？ 2: 冬に集める？ 3: 機械で乾燥？ 4: 水で煮る？",
                logic: [
                    { type: "text", content: "本文第3段落: \"...flowers must be pollinated by hand to produce the beans.\"" },
                    { type: "text", content: "結論: 手作業での受粉が必要。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 4,
                text: "People don't use a lot of vanilla when they cook because",
                textTranslation: "人々が料理するときにバニラをたくさん使わないのは〜だからです。",
                choices: [
                    { id: 1, text: "it is difficult to find.", translation: "見つけるのが難しいから。", isCorrect: false },
                    { id: 2, text: "green isn't a popular color.", translation: "緑色は人気のある色ではないから。", isCorrect: false },
                    { id: 3, text: "it has a strong smell.", translation: "それは強い香りがあるから。", isCorrect: true, highlight: "because of its strong smell" },
                    { id: 4, text: "it makes the food too sweet.", translation: "それは食べ物を甘くしすぎるから。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「don't need to use much」（多く使う必要はない）理由。「because of...」の後を探します。",
                    targetSentenceId: 20,
                    highlightWord: "because of its strong smell",
                    highlightWordSentenceId: 20
                },
                keywords: ["don't use a lot", "because"],
                keywordExplanations: {
                    "don't use a lot": "たくさん使わない（don't need to use much）。"
                },
                keywordMatches: [
                    { sentenceId: 20, text: "don't need to use much of it ... because of its strong smell", keyword: "because" }
                ],
                choiceAdvice: "1: 難しい？ 2: 色？ 3: 強い香り？ 4: 甘すぎる？",
                logic: [
                    { type: "text", content: "本文第4段落: \"...people don't need to use much of it ... because of its strong smell.\"" },
                    { type: "text", content: "結論: 香りが強いから。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A flavor that is used in many sweets.", translation: "多くのお菓子に使われる風味。", isCorrect: true, highlight: "flavor that is used for sweets" },
                    { id: 2, text: "A new machine for making ice cream.", translation: "アイスクリームを作るための新しい機械。", isCorrect: false },
                    { id: 3, text: "A flower that grows only in Europe.", translation: "ヨーロッパだけで育つ花。", isCorrect: false },
                    { id: 4, text: "A medicine that helps sick people.", translation: "病気の人を助ける薬。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "第1文を確認。「Vanilla is a flavor...」（バニラは風味です...）に注目。",
                    targetSentenceId: 1,
                    highlightWord: "Vanilla is a flavor that is used for sweets",
                    highlightWordSentenceId: 1
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: お菓子の風味？ 2: 機械？ 3: ヨーロッパの花？ 4: 薬？",
                logic: [
                    { type: "text", content: "第1文: \"Vanilla is a flavor that is used for sweets...\"" },
                    { type: "text", content: "バニラ（お菓子に使われる風味）についての説明文。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Vanilla",
            intro: "お菓子に欠かせない高価な香料、バニラについての説明文です。サフランと同様に、植物由来で生産に手間がかかる点を強調しています。",
            points: [
                { label: "1. What is Vanilla? (バニラとは)", text: "蘭（ラン）の豆から作られるフレーバーです。黒くて長い豆で、甘い香りがあり、アイスクリームなどに使われます。" },
                { label: "2. History & Uses (歴史と用途)", text: "メキシコやヨーロッパで古くから人気があります。お菓子だけでなく、薬や香水としても使われました。" },
                { label: "3. Production (生産)", text: "製造は困難です。手作業で受粉させる必要があり、豆の乾燥にも数ヶ月かかります。多くの人手が必要です。" },
                { label: "4. Value (価値)", text: "非常に高価で「緑の金」とも呼ばれますが、香りが強いため少量で十分であり、家庭でも人気があります。" }
            ]
        }
    },
    {
        id: "grade-3-original-augusta-savage",
        grade: "3級",
        title: "Augusta Savage",
        subTitle: "問題8",
        genre: "歴史 / 伝記",
        similarProblems: {
            exam: "2023年度 第1回",
            title: "Ann Lowe"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Augusta+Savage",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Augusta Savage was an African American artist.",
                        translation: "オーガスタ・サベージはアフリカ系アメリカ人の芸術家でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Augusta Savage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an African American artist</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>オーガスタ・サベージは</span> <span class='t-V'>でした</span> <span class='t-C'>アフリカ系アメリカ人の芸術家</span>。",
                            naturalTranslation: "オーガスタ・サベージはアフリカ系アメリカ人の芸術家でした。",
                            vocabulary: [
                                { word: "African American", meaning: "「アフリカ系アメリカ人の」。" },
                                { word: "artist", meaning: "「芸術家」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 2,
                        text: "She was born in Florida in the United States in 1892.",
                        translation: "彼女は1892年にアメリカのフロリダ州で生まれました。",
                        grammarAnalysis: {
                            mainVerbs: ["was born"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was born</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in Florida)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in the United States)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in 1892)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>生まれました</span> <span class='t-M'>(フロリダで)</span> <span class='t-M'>(アメリカの)</span> <span class='t-M'>(1892年に)</span>。",
                            naturalTranslation: "彼女は1892年にアメリカのフロリダ州で生まれました。",
                            vocabulary: [
                                { word: "born", meaning: "「生まれた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "was born", explanation: "<b>was born</b>: 「生まれた」。受動態の形をとる。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "When she was a child, Savage liked making figures with clay.",
                        translation: "子供の頃、サベージは粘土で人形を作るのが好きでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "liked"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When she was a child)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Savage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>liked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>making figures with clay</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(彼女が子供だった時)</span>、<span class='t-S'>サベージは</span> <span class='t-V'>好きでした</span> <span class='t-O'>粘土で人形を作ることが</span>。",
                            naturalTranslation: "子供の頃、サベージは粘土で人形を作るのが好きでした。",
                            vocabulary: [
                                { word: "figures", meaning: "「人形」「像」。" },
                                { word: "clay", meaning: "「粘土」。" }
                            ],
                            grammarNotes: [
                                { phrase: "making", explanation: "<b>making</b>: 動名詞。「作ること」。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "Her father did not like her art, but her teachers at school helped her.",
                        translation: "彼女の父は彼女の芸術を好みませんでしたが、学校の先生たちは彼女を助けました。",
                        grammarAnalysis: {
                            mainVerbs: ["did not like", "helped"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Her father</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>did not like</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her art</span><span class='tag'>O</span></span>, but <span class='chunk S-group'><span class='text'>her teachers at school</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>helped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼女の父は</span> <span class='t-V'>好きではありませんでした</span> <span class='t-O'>彼女の芸術を</span>、しかし<span class='t-S'>学校の彼女の先生たちは</span> <span class='t-V'>助けました</span> <span class='t-O'>彼女を</span>。",
                            naturalTranslation: "彼女の父は彼女の芸術を好みませんでしたが、学校の先生たちは彼女を助けました。",
                            vocabulary: [
                                { word: "art", meaning: "「芸術」「作品」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 5,
                        text: "They encouraged her to be an artist, and Savage often practiced making things with clay at school.",
                        translation: "彼らは彼女に芸術家になるよう励まし、サベージはよく学校で粘土を使って物を作る練習をしました。",
                        grammarAnalysis: {
                            mainVerbs: ["encouraged", "practiced"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>encouraged</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to be an artist</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>Savage</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(often)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>practiced</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>making things with clay</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at school)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>励ましました</span> <span class='t-O'>彼女に</span> <span class='t-C'>芸術家になるように</span>、そして<span class='t-S'>サベージは</span> <span class='t-M'>(よく)</span> <span class='t-V'>練習しました</span> <span class='t-O'>粘土で物を作ることを</span> <span class='t-M'>(学校で)</span>。",
                            naturalTranslation: "彼らは彼女に芸術家になるよう励まし、サベージはよく学校で粘土を使って物を作る練習をしました。",
                            vocabulary: [
                                { word: "encouraged", meaning: "「励ました」。" },
                                { word: "practiced", meaning: "「練習した」。" }
                            ],
                            grammarNotes: [
                                { phrase: "encouraged her to be", explanation: "<b>encourage O to do</b>: 「Oに〜するように励ます」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 6,
                        text: "Savage moved to a new city in 1915, but she didn't have much money.",
                        translation: "サベージは1915年に新しい都市へ引っ越しましたが、あまりお金を持っていませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["moved", "didn't have"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Savage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>moved</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to a new city)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in 1915)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>didn't have</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>much money</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>サベージは</span> <span class='t-V'>引っ越しました</span> <span class='t-M'>(新しい都市へ)</span> <span class='t-M'>(1915年に)</span>、しかし<span class='t-S'>彼女は</span> <span class='t-V'>持っていませんでした</span> <span class='t-O'>たくさんのお金を</span>。",
                            naturalTranslation: "サベージは1915年に新しい都市へ引っ越しましたが、あまりお金を持っていませんでした。",
                            vocabulary: [
                                { word: "moved", meaning: "「引っ越した」。" },
                                { word: "much", meaning: "「たくさんの」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 7,
                        text: "She made some art from clay and sold it at a local fair.",
                        translation: "彼女は粘土で芸術作品を作り、それを地元の品評会で売りました。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "sold"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>some art</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(from clay)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>sold</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at a local fair)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>作りました</span> <span class='t-O'>いくつかの作品を</span> <span class='t-M'>(粘土から)</span>、そして<span class='t-V'>売りました</span> <span class='t-O'>それを</span> <span class='t-M'>(地元のフェアで)</span>。",
                            naturalTranslation: "彼女は粘土で芸術作品を作り、それを地元の品評会で売りました。",
                            vocabulary: [
                                { word: "sold", meaning: "「売った」。sellの過去形。" },
                                { word: "local", meaning: "「地元の」。" },
                                { word: "fair", meaning: "「フェア」「品評会」「お祭り」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 8,
                        text: "People liked her work, and she won a prize.",
                        translation: "人々は彼女の作品を気に入り、彼女は賞を取りました。",
                        grammarAnalysis: {
                            mainVerbs: ["liked", "won"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>liked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her work</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>won</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a prize</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>人々は</span> <span class='t-V'>気に入りました</span> <span class='t-O'>彼女の作品を</span>、そして<span class='t-S'>彼女は</span> <span class='t-V'>獲得しました</span> <span class='t-O'>賞を</span>。",
                            naturalTranslation: "人々は彼女の作品を気に入り、彼女は賞を取りました。",
                            vocabulary: [
                                { word: "won", meaning: "「勝った」「獲得した」。winの過去形。" },
                                { word: "prize", meaning: "「賞」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 9,
                        text: "This made her happy, so she decided to study art more.",
                        translation: "これは彼女を幸せにし、彼女はもっと芸術を勉強することを決めました。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "decided"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>happy</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>decided</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to study art more</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>しました</span> <span class='t-O'>彼女を</span> <span class='t-C'>幸せに</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼女は</span> <span class='t-V'>決めました</span> <span class='t-O'>もっと芸術を勉強することを</span>。",
                            naturalTranslation: "これは彼女を幸せにし、彼女はもっと芸術を勉強することを決めました。",
                            vocabulary: [
                                { word: "decided", meaning: "「決めた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "made her happy", explanation: "<b>make O C</b>: 「OをCにする」。" },
                                { phrase: "decided to study", explanation: "<b>decide to do</b>: 「〜することを決める」。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "After that, Savage went to live in New York in 1921.",
                        translation: "その後、サベージは1921年にニューヨークへ住みに行きました。",
                        grammarAnalysis: {
                            mainVerbs: ["went"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After that)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Savage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>went</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to live in New York)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in 1921)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>サベージは</span> <span class='t-V'>行きました</span> <span class='t-M'>(ニューヨークに住むために)</span> <span class='t-M'>(1921年に)</span>。",
                            naturalTranslation: "その後、サベージは1921年にニューヨークへ住みに行きました。",
                            vocabulary: [],
                            grammarNotes: [
                                { phrase: "to live", explanation: "<b>to live</b>: 不定詞の副詞的用法。「住むために」。または結果。「行って住んだ」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 11,
                        text: "In New York, Savage studied at a famous art school called Cooper Union.",
                        translation: "ニューヨークで、サベージはクーパー・ユニオンと呼ばれる有名な美術学校で勉強しました。",
                        grammarAnalysis: {
                            mainVerbs: ["studied"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In New York)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Savage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>studied</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(at a famous art school called Cooper Union)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(ニューヨークで)</span>、<span class='t-S'>サベージは</span> <span class='t-V'>勉強しました</span> <span class='t-M'>(クーパー・ユニオンと呼ばれる有名な美術学校で)</span>。",
                            naturalTranslation: "ニューヨークで、サベージはクーパー・ユニオンと呼ばれる有名な美術学校で勉強しました。",
                            vocabulary: [
                                { word: "famous", meaning: "「有名な」。" },
                                { word: "union", meaning: "「組合」「同盟」。（固有名詞の一部だが）" }
                            ],
                            grammarNotes: [
                                { phrase: "called", explanation: "<b>called</b>: 過去分詞。「〜と呼ばれる」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "She did very well there.",
                        translation: "彼女はそこでとても優秀でした。",
                        grammarAnalysis: {
                            mainVerbs: ["did"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>did</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(very well)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(there)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>やりました</span> <span class='t-M'>(とても良く)</span> <span class='t-M'>(そこで)</span>。",
                            naturalTranslation: "彼女はそこでとても優秀でした（成績が良かった）。",
                            vocabulary: [
                                { word: "well", meaning: "「良く」「上手に」。" }
                            ],
                            grammarNotes: [
                                { phrase: "did well", explanation: "<b>do well</b>: 「うまくやる」「成功する」「成績が良い」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "In 1923, she applied to a summer art school in France.",
                        translation: "1923年、彼女はフランスのサマーアートスクール（夏期講習）に申し込みました。",
                        grammarAnalysis: {
                            mainVerbs: ["applied"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1923)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>applied</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to a summer art school in France)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1923年に)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>申し込みました</span> <span class='t-M'>(フランスのサマーアートスクールに)</span>。",
                            naturalTranslation: "1923年、彼女はフランスのサマーアートスクール（夏期講習）に申し込みました。",
                            vocabulary: [
                                { word: "applied", meaning: "「申し込んだ」。" },
                                { word: "France", meaning: "「フランス」。" }
                            ],
                            grammarNotes: [
                                { phrase: "applied to", explanation: "<b>apply to</b>: 「〜に申し込む」「出願する」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "However, she couldn't join the group because she was African American.",
                        translation: "しかし、彼女はアフリカ系アメリカ人であったため、そのグループに参加することができませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["couldn't join", "was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>couldn't join</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the group</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(because she was African American)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>参加できませんでした</span> <span class='t-O'>そのグループに</span> <span class='t-M'>(彼女がアフリカ系アメリカ人だったから)</span>。",
                            naturalTranslation: "しかし、彼女はアフリカ系アメリカ人であったため、そのグループに参加することができませんでした。",
                            vocabulary: [
                                { word: "join", meaning: "「参加する」「加わる」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 15,
                        text: "This was very sad for her, but she didn't stop making art.",
                        translation: "これは彼女にとってとても悲しいことでしたが、彼女は芸術を作るのをやめませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "didn't stop"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very sad</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for her)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>didn't stop</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>making art</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>でした</span> <span class='t-C'>とても悲しい</span> <span class='t-M'>(彼女にとって)</span>、しかし<span class='t-S'>彼女は</span> <span class='t-V'>やめませんでした</span> <span class='t-O'>芸術を作ることを</span>。",
                            naturalTranslation: "これは彼女にとってとても悲しいことでしたが、彼女は芸術を作るのをやめませんでした。",
                            vocabulary: [
                                { word: "sad", meaning: "「悲しい」。" },
                                { word: "stop", meaning: "「やめる」。" }
                            ],
                            grammarNotes: [
                                { phrase: "stop making", explanation: "<b>stop doing</b>: 「〜するのをやめる」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "She finished studying in New York and opened her own studio.",
                        translation: "彼女はニューヨークでの勉強を終え、自分のスタジオ（工房）を開きました。",
                        grammarAnalysis: {
                            mainVerbs: ["finished", "opened"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>finished</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>studying in New York</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>opened</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her own studio</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>終えました</span> <span class='t-O'>ニューヨークでの勉強を</span>、そして<span class='t-V'>開きました</span> <span class='t-O'>彼女自身のスタジオを</span>。",
                            naturalTranslation: "彼女はニューヨークでの勉強を終え、自分のスタジオ（工房）を開きました。",
                            vocabulary: [
                                { word: "finished", meaning: "「終えた」。" },
                                { word: "own", meaning: "「自身の」。" },
                                { word: "studio", meaning: "「スタジオ」「工房」。" }
                            ],
                            grammarNotes: [
                                { phrase: "finished studying", explanation: "<b>finish doing</b>: 「〜し終える」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 17,
                        text: "After that, Savage made sculptures for many years.",
                        translation: "その後、サベージは何年もの間彫刻を作りました。",
                        grammarAnalysis: {
                            mainVerbs: ["made"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After that)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Savage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>sculptures</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for many years)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>サベージは</span> <span class='t-V'>作りました</span> <span class='t-O'>彫刻を</span> <span class='t-M'>(何年も)</span>。",
                            naturalTranslation: "その後、サベージは何年もの間彫刻を作りました。",
                            vocabulary: [
                                { word: "sculptures", meaning: "「彫刻」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 18,
                        text: "Her works were special because they showed the faces of real people in her community.",
                        translation: "彼女の作品は、彼女の地域の実際の人々の顔を表していたため特別でした。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "showed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Her works</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>special</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(because they showed the faces of real people in her community)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女の作品は</span> <span class='t-V'>でした</span> <span class='t-C'>特別な</span> <span class='t-M'>(それらが彼女の地域の本当の人々の顔を見せていたから)</span>。",
                            naturalTranslation: "彼女の作品は、彼女の地域の実際の人々の顔を表していたため特別でした。",
                            vocabulary: [
                                { word: "works", meaning: "「作品」。" },
                                { word: "special", meaning: "「特別な」。" },
                                { word: "faces", meaning: "「顔」。" },
                                { word: "real", meaning: "「本当の」「実際の」。" },
                                { word: "community", meaning: "「地域社会」「コミュニティ」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 19,
                        text: "She made art for some famous places, but she also wanted to help young artists.",
                        translation: "彼女はいくつかの有名な場所のために芸術を作りましたが、若い芸術家たちを助けたいとも思いました。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "wanted"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>art</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for some famous places)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to help young artists</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>作りました</span> <span class='t-O'>芸術を</span> <span class='t-M'>(いくつかの有名な場所のために)</span>、しかし<span class='t-S'>彼女は</span> <span class='t-M'>(また)</span> <span class='t-V'>望みました</span> <span class='t-O'>若い芸術家を助けることを</span>。",
                            naturalTranslation: "彼女はいくつかの有名な場所のために芸術を作りましたが、若い芸術家たちを助けたいとも思いました。",
                            vocabulary: [
                                { word: "young", meaning: "「若い」。" }
                            ],
                            grammarNotes: [
                                { phrase: "wanted to help", explanation: "<b>want to do</b>: 「〜したいと思う」。" }
                            ]
                        }
                    },
                    {
                        id: 20,
                        text: "She opened a school to teach them.",
                        translation: "彼女は彼らを教えるために学校を開きました。",
                        grammarAnalysis: {
                            mainVerbs: ["opened"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>opened</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a school</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to teach them)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>開きました</span> <span class='t-O'>学校を</span> <span class='t-M'>(彼らを教えるために)</span>。",
                            naturalTranslation: "彼女は彼らを教えるために学校を開きました。",
                            vocabulary: [],
                            grammarNotes: [
                                { phrase: "to teach", explanation: "<b>to teach</b>: 不定詞の副詞的用法。「教えるために」。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "Savage became more famous after she died in 1962.",
                        translation: "サベージは1962年に亡くなった後、より有名になりました。",
                        grammarAnalysis: {
                            mainVerbs: ["became", "died"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Savage</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>more famous</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(after she died in 1962)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>サベージは</span> <span class='t-V'>なりました</span> <span class='t-C'>より有名に</span> <span class='t-M'>(1962年に彼女が死んだ後)</span>。",
                            naturalTranslation: "サベージは1962年に亡くなった後、より有名になりました。",
                            vocabulary: [
                                { word: "became", meaning: "「なった」。becomeの過去形。" },
                                { word: "died", meaning: "「死んだ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "bcame more famous", explanation: "<b>become C</b>: 「Cになる」。more famousは比較級。" }
                            ]
                        }
                    },
                    {
                        id: 22,
                        text: "Many people today know that she was a great artist and teacher.",
                        translation: "今日多くの人々が、彼女が偉大な芸術家であり教師であったことを知っています。",
                        grammarAnalysis: {
                            mainVerbs: ["know", "was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people today</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(that) she was a great artist and teacher</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>今日の多くの人々は</span> <span class='t-V'>知っています</span> <span class='t-O'>彼女が偉大な芸術家であり教師だったことを</span>。",
                            naturalTranslation: "今日多くの人々が、彼女が偉大な芸術家であり教師であったことを知っています。",
                            vocabulary: [],
                            grammarNotes: [
                                { phrase: "know that", explanation: "<b>know that ...</b>: 「...ということを知っている」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "What did Augusta Savage's teachers do?",
                textTranslation: "オーガスタ・サベージの先生たちは何をしましたか？",
                choices: [
                    { id: 1, text: "They told her to stop making art.", translation: "彼らは彼女に芸術を作るのをやめるように言った。", isCorrect: false },
                    { id: 2, text: "They bought clay for her father.", translation: "彼らは彼女の父のために粘土を買った。", isCorrect: false },
                    { id: 3, text: "They took her to a fair in Florida.", translation: "彼らは彼女をフロリダのフェアに連れて行った。", isCorrect: false },
                    { id: 4, text: "They encouraged her to be an artist.", translation: "彼らは彼女に芸術家になるよう励ました。", isCorrect: true, highlight: "teachers at school helped her. They encouraged her to be an artist" }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「teachers at school」（学校の先生たち）が何をしたかを探します。「encouraged」（励ました）という単語に注目。",
                    targetSentenceId: 5,
                    highlightWord: "They encouraged her to be an artist",
                    highlightWordSentenceId: 5
                },
                keywords: ["what", "teachers", "do"],
                keywordExplanations: {
                    "teachers": "先生たち。",
                    "encouraged": "励ました。"
                },
                keywordMatches: [
                    { sentenceId: 5, text: "They encouraged her to be an artist", keyword: "encouraged" }
                ],
                choiceAdvice: "1: やめるように言った？ 2: 粘土を買った？ 3: フェアに連れて行った？ 4: 励ました？",
                logic: [
                    { type: "text", content: "本文第1段落: \"...her teachers at school helped her. They encouraged her to be an artist...\"" },
                    { type: "text", content: "結論: 先生たちは彼女が芸術家になることを励ました。" },
                    { type: "conclusion", content: "正解: 4" }
                ]
            },
            {
                id: 2,
                text: "When did Savage go to New York?",
                textTranslation: "サベージはいつニューヨークへ行きましたか？",
                choices: [
                    { id: 1, text: "In 1892.", translation: "1892年。", isCorrect: false },
                    { id: 2, text: "In 1915.", translation: "1915年。", isCorrect: false },
                    { id: 3, text: "In 1921.", translation: "1921年。", isCorrect: true, highlight: "went to live in New York in 1921" },
                    { id: 4, text: "In 1962.", translation: "1962年。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落の最後。「go to live in New York」（ニューヨークに住みに行く）という表現と年号を探します。",
                    targetSentenceId: 10,
                    highlightWord: "went to live in New York in 1921",
                    highlightWordSentenceId: 10
                },
                keywords: ["when", "go", "New York"],
                keywordExplanations: {
                    "when": "いつ。"
                },
                keywordMatches: [
                    { sentenceId: 10, text: "went to live in New York in 1921", keyword: "New York" }
                ],
                choiceAdvice: "1: 1892年（誕生）？ 2: 1915年（新しい都市）？ 3: 1921年（NY）？ 4: 1962年（死去）？",
                logic: [
                    { type: "text", content: "本文第2段落: \"After that, Savage went to live in New York in 1921.\"" },
                    { type: "text", content: "結論: 1921年。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 3,
                text: "What happened when Savage wanted to go to the art school in France?",
                textTranslation: "サベージがフランスの美術学校へ行きたいと思った時、何が起きましたか？",
                choices: [
                    { id: 1, text: "She couldn't join because of her race.", translation: "彼女は人種のために参加できなかった。", isCorrect: true, highlight: "couldn't join the group because she was African American" },
                    { id: 2, text: "She didn't have enough money for the trip.", translation: "彼女は旅行のための十分なお金を持っていなかった。", isCorrect: false },
                    { id: 3, text: "She became sick and stayed in New York.", translation: "彼女は病気になり、ニューヨークにとどまった。", isCorrect: false },
                    { id: 4, text: "She decided to open a store instead.", translation: "彼女は代わりに店を開くことにした。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「France」の話。「couldn't join」（参加できなかった）理由。「African American」（アフリカ系アメリカ人）であったことと、選択肢の「race」（人種）を結びつけます。",
                    targetSentenceId: 14,
                    highlightWord: "couldn't join the group because she was African American",
                    highlightWordSentenceId: 14
                },
                keywords: ["what", "happened", "France"],
                keywordExplanations: {
                    "France": "フランス。",
                    "race": "人種（本文のAfrican Americanを指す）。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "applied to a summer art school in France", keyword: "France" },
                    { sentenceId: 14, text: "couldn't join the group because she was African American", keyword: "join" }
                ],
                choiceAdvice: "1: 人種のため？ 2: お金がない？ 3: 病気？ 4: 店を開いた？",
                logic: [
                    { type: "text", content: "本文第3段落: \"...she couldn't join the group because she was African American.\"" },
                    { type: "text", content: "結論: アフリカ系アメリカ人（＝人種）だから参加できなかった。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 4,
                text: "Savage's works were special because",
                textTranslation: "サベージの作品が特別だったのは〜だからです。",
                choices: [
                    { id: 1, text: "they were made of gold.", translation: "それらは金で作られていた。", isCorrect: false },
                    { id: 2, text: "they showed the faces of real people.", translation: "それらは実際の人々の顔を表していた。", isCorrect: true, highlight: "showed the faces of real people" },
                    { id: 3, text: "they were very small and light.", translation: "それらはとても小さくて軽かった。", isCorrect: false },
                    { id: 4, text: "they had beautiful flower designs.", translation: "それらは美しい花のデザインがあった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「Her works were special because」（彼女の作品は〜なので特別でした）の後ろを確認します。",
                    targetSentenceId: 18,
                    highlightWord: "because they showed the faces of real people",
                    highlightWordSentenceId: 18
                },
                keywords: ["special", "because"],
                keywordExplanations: {
                    "special": "特別な。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "Her works were special because they showed the faces of real people", keyword: "special" }
                ],
                choiceAdvice: "1: 金？ 2: 実際の顔？ 3: 小さい？ 4: 花のデザイン？",
                logic: [
                    { type: "text", content: "本文第4段落: \"Her works were special because they showed the faces of real people...\"" },
                    { type: "text", content: "結論: 実際の人々の顔を表していたから。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A famous art school in France.", translation: "フランスの有名な美術学校。", isCorrect: false },
                    { id: 2, text: "A woman who was a great artist.", translation: "偉大な芸術家だった女性。", isCorrect: true, highlight: "Augusta Savage was an African American artist ... she was a great artist" },
                    { id: 3, text: "A teacher who traveled around the world.", translation: "世界中を旅した教師。", isCorrect: false },
                    { id: 4, text: "A special kind of clay from Florida.", translation: "フロリダからの特別な種類の粘土。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "物語全体を通して誰について書かれているか、そしてその人がどう評価されているか（great artist）を考えます。",
                    targetSentenceId: 1,
                    highlightWord: "Augusta Savage was an African American artist",
                    highlightWordSentenceId: 1
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 学校？ 2: 偉大な芸術家の女性？ 3: 旅する教師？ 4: 粘土？",
                logic: [
                    { type: "text", content: "第1文: \"Augusta Savage was an African American artist.\"" },
                    { type: "text", content: "最終文: \"...she was a great artist and teacher.\"" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Augusta Savage",
            intro: "アフリカ系アメリカ人の彫刻家、オーガスタ・サベージの伝記です。ロウと同様に、人種差別による教育機会の制限を乗り越えた人物です。",
            points: [
                { label: "1. Early Life (幼少期)", text: "フロリダ生まれ。粘土細工が好きでしたが父には反対されました。しかし学校の先生が応援してくれました。" },
                { label: "2. Career Start (キャリア初期)", text: "地元のフェアで賞を取り、自信をつけました。本格的に学ぶため、1921年にNYへ移住しました。" },
                { label: "3. Discrimination (差別と教育)", text: "NYの美術学校で優秀な成績を収めましたが、フランス留学プログラムに応募した際、黒人であることを理由に参加を拒否されました。" },
                { label: "4. Legacy (遺産)", text: "地域の人々をモデルにした彫刻で知られ、若い芸術家を育てる学校も開きました。死後にその功績が広く知られるようになりました。" }
            ]
        }
    },
    {
        id: "grade-3-original-bertha-lamme",
        grade: "3級",
        title: "Bertha Lamme",
        subTitle: "問題9",
        genre: "歴史 / 伝記",
        similarProblems: {
            exam: "2022年度 第3回",
            title: "Lilian Bland"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Bertha+Lamme",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Bertha Lamme was born in 1869.",
                        translation: "バーサ・ラメは1869年に生まれました。",
                        grammarAnalysis: {
                            mainVerbs: ["was born"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Bertha Lamme</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was born</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in 1869)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>バーサ・ラメは</span> <span class='t-V'>生まれました</span> <span class='t-M'>(1869年に)</span>。",
                            naturalTranslation: "バーサ・ラメは1869年に生まれました。",
                            vocabulary: [
                                { word: "born", meaning: "「生まれた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "was born", explanation: "<b>was born</b>: 「生まれた」。受動態。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "She was different from most women at that time.",
                        translation: "彼女は当時のほとんどの女性とは異なっていました。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>different</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(from most women at that time)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>でした</span> <span class='t-C'>違った</span> <span class='t-M'>(当時のほとんどの女性とは)</span>。",
                            naturalTranslation: "彼女は当時のほとんどの女性とは異なっていました。",
                            vocabulary: [
                                { word: "different", meaning: "「異なる」「違った」。" },
                                { word: "most", meaning: "「ほとんどの」。" }
                            ],
                            grammarNotes: [
                                { phrase: "different from", explanation: "<b>different from ...</b>: 「...とは異なる」。" }
                            ]
                        }
                    },
                    {
                        id: 3,
                        text: "Bertha enjoyed studying math and science.",
                        translation: "バーサは数学と科学を学ぶことを楽しみました。",
                        grammarAnalysis: {
                            mainVerbs: ["enjoyed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Bertha</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>enjoyed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>studying math and science</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>バーサは</span> <span class='t-V'>楽しみました</span> <span class='t-O'>数学と科学を勉強することを</span>。",
                            naturalTranslation: "バーサは数学と科学を学ぶことを楽しみました。",
                            vocabulary: [
                                { word: "enjoyed", meaning: "「楽しんだ」。" },
                                { word: "math", meaning: "「数学」。" },
                                { word: "science", meaning: "「科学」。" }
                            ],
                            grammarNotes: [
                                { phrase: "enjoyed studying", explanation: "<b>enjoy doing</b>: 「〜することを楽しむ」。動名詞のみを目的語にとる動詞。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "She also liked to learn about how machines worked.",
                        translation: "彼女はまた、機械がどのように動くかを学ぶのが好きでした。",
                        grammarAnalysis: {
                            mainVerbs: ["liked"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>liked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to learn about how machines worked</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-M'>(また)</span> <span class='t-V'>好きでした</span> <span class='t-O'>機械がどのように動くかについて学ぶことが</span>。",
                            naturalTranslation: "彼女はまた、機械がどのように動くかを学ぶのが好きでした。",
                            vocabulary: [
                                { word: "machines", meaning: "「機械」。" },
                                { word: "worked", meaning: "「動いた」「機能した」。" }
                            ],
                            grammarNotes: [
                                { phrase: "how machines worked", explanation: "<b>how S V</b>: 「SがどのようにVするか」。間接疑問文。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "In 1893, she graduated from a university in Ohio.",
                        translation: "1893年に、彼女はオハイオ州の大学を卒業しました。",
                        grammarAnalysis: {
                            mainVerbs: ["graduated"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1893)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>graduated</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(from a university in Ohio)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1893年に)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>卒業しました</span> <span class='t-M'>(オハイオの大学から)</span>。",
                            naturalTranslation: "1893年に、彼女はオハイオ州の大学を卒業しました。",
                            vocabulary: [
                                { word: "graduated", meaning: "「卒業した」。" },
                                { word: "university", meaning: "「大学」。" }
                            ],
                            grammarNotes: [
                                { phrase: "graduated from", explanation: "<b>graduate from ...</b>: 「...を卒業する」。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "By that time, she was studying engineering to become an engineer.",
                        translation: "その時までに、彼女はエンジニアになるために工学を勉強していました。",
                        grammarAnalysis: {
                            mainVerbs: ["was studying"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(By that time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was studying</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>engineering</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to become an engineer)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その時までに)</span>、<span class='t-S'>彼女は</span> <span class='t-V'>勉強していました</span> <span class='t-O'>工学を</span> <span class='t-M'>(エンジニアになるために)</span>。",
                            naturalTranslation: "その時までに、彼女はエンジニアになるために工学を勉強していました。",
                            vocabulary: [
                                { word: "engineering", meaning: "「工学」。" },
                                { word: "engineer", meaning: "「エンジニア」「技師」。" }
                            ],
                            grammarNotes: [
                                { phrase: "was studying", explanation: "<b>was studying</b>: 過去進行形。「勉強していた」。" },
                                { phrase: "to become", explanation: "<b>to become</b>: 不定詞の副詞的用法。「なるために」。" }
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
                        text: "In 1893, Bertha's brother told her about his job.",
                        translation: "1893年、バーサの兄が彼女に自分の仕事について話しました。",
                        grammarAnalysis: {
                            mainVerbs: ["told"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1893)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Bertha's brother</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>told</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(about his job)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1893年に)</span>、<span class='t-S'>バーサの兄は</span> <span class='t-V'>話しました</span> <span class='t-O'>彼女に</span> <span class='t-M'>(彼の仕事について)</span>。",
                            naturalTranslation: "1893年、バーサの兄が彼女に自分の仕事について話しました。",
                            vocabulary: [
                                { word: "brother", meaning: "「兄」「弟」。" },
                                { word: "told", meaning: "「話した」「教えた」。tellの過去形。" },
                                { word: "job", meaning: "「仕事」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 8,
                        text: "He was an engineer, and he worked for a big company called Westinghouse.",
                        translation: "彼はエンジニアで、ウェスティングハウスと呼ばれる大きな会社で働いていました。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "worked"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>an engineer</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>worked</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(for a big company called Westinghouse)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>でした</span> <span class='t-C'>エンジニア</span>、そして<span class='t-S'>彼は</span> <span class='t-V'>働いていました</span> <span class='t-M'>(ウェスティングハウスと呼ばれる大きな会社のために)</span>。",
                            naturalTranslation: "彼はエンジニアで、ウェスティングハウスと呼ばれる大きな会社で働いていました。",
                            vocabulary: [
                                { word: "company", meaning: "「会社」。" },
                                { word: "called", meaning: "「〜と呼ばれる」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 9,
                        text: "He was one of the most famous people there.",
                        translation: "彼はそこで最も有名な人物の一人でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>one of the most famous people there</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>でした</span> <span class='t-C'>そこで最も有名な人々の一人</span>。",
                            naturalTranslation: "彼はそこで最も有名な人物の一人でした。",
                            vocabulary: [
                                { word: "famous", meaning: "「有名な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "one of", explanation: "<b>one of ...</b>: 「...のうちの一人（一つ）」。" },
                                { phrase: "most famous", explanation: "<b>most famous</b>: 最上級。" }
                            ]
                        }
                    },
                    {
                        id: 10,
                        text: "He designed systems for electricity.",
                        translation: "彼は電気のためのシステムを設計していました。",
                        grammarAnalysis: {
                            mainVerbs: ["designed"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>designed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>systems for electricity</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>設計しました</span> <span class='t-O'>電気のためのシステムを</span>。",
                            naturalTranslation: "彼は電気のためのシステムを設計していました。",
                            vocabulary: [
                                { word: "designed", meaning: "「設計した」。" },
                                { word: "electricity", meaning: "「電気」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 11,
                        text: "The company needed more people who understood math well, and her brother knew she was talented.",
                        translation: "その会社は数学をよく理解している人々をもっと必要としており、彼女の兄は彼女に才能があることを知っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["needed", "knew"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The company</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>needed</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>more people who understood math well</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>her brother</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>knew</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(that) she was talented</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>会社は</span> <span class='t-V'>必要としました</span> <span class='t-O'>数学をよく理解しているもっと多くの人々を</span>、そして<span class='t-S'>彼女の兄は</span> <span class='t-V'>知っていました</span> <span class='t-O'>彼女に才能があることを</span>。",
                            naturalTranslation: "その会社は数学をよく理解している人々をもっと必要としており、彼女の兄は彼女に才能があることを知っていました。",
                            vocabulary: [
                                { word: "needed", meaning: "「必要とした」。" },
                                { word: "talented", meaning: "「才能がある」。" }
                            ],
                            grammarNotes: [
                                { phrase: "people who understood", explanation: "<b>people who ...</b>: 関係代名詞who。「...する人々」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 12,
                        text: "Bertha joined the company and became interested in motors.",
                        translation: "バーサは会社に入り、モーターに興味を持つようになりました。",
                        grammarAnalysis: {
                            mainVerbs: ["joined", "became"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Bertha</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>joined</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the company</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>interested in motors</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>バーサは</span> <span class='t-V'>加わりました</span> <span class='t-O'>会社に</span>、そして<span class='t-V'>なりました</span> <span class='t-C'>モーターに興味があるように</span>。",
                            naturalTranslation: "バーサは会社に入り、モーターに興味を持つようになりました。",
                            vocabulary: [
                                { word: "joined", meaning: "「加わった」「入社した」。" },
                                { word: "motors", meaning: "「モーター」。" }
                            ],
                            grammarNotes: [
                                { phrase: "became interested in", explanation: "<b>become interested in ...</b>: 「...に興味を持つようになる」。" }
                            ]
                        }
                    },
                    {
                        id: 13,
                        text: "She decided to design parts for a new electric motor by herself.",
                        translation: "彼女は新しい電気モーターの部品を自分で設計することを決めました。",
                        grammarAnalysis: {
                            mainVerbs: ["decided"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>decided</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to design parts for a new electric motor</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(by herself)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>決めました</span> <span class='t-O'>新しい電気モーターの部品を設計することを</span> <span class='t-M'>(彼女自身で)</span>。",
                            naturalTranslation: "彼女は新しい電気モーターの部品を自分で設計することを決めました。",
                            vocabulary: [
                                { word: "parts", meaning: "「部品」。" },
                                { word: "electric", meaning: "「電気の」。" }
                            ],
                            grammarNotes: [
                                { phrase: "by herself", explanation: "<b>by herself</b>: 「彼女自身で」「独力で」。" }
                            ]
                        }
                    },
                    {
                        id: 14,
                        text: "She used her math skills to check the design.",
                        translation: "彼女は設計を確認するために自分の数学のスキルを使いました。",
                        grammarAnalysis: {
                            mainVerbs: ["used"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her math skills</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to check the design)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>使いました</span> <span class='t-O'>彼女の数学のスキルを</span> <span class='t-M'>(設計を確認するために)</span>。",
                            naturalTranslation: "彼女は設計を確認するために自分の数学のスキルを使いました。",
                            vocabulary: [
                                { word: "skills", meaning: "「スキル」「技術」。" },
                                { word: "check", meaning: "「確認する」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 15,
                        text: "Then, the company built the motor and used it for a big project.",
                        translation: "その後、会社はそのモーターを作り、大きなプロジェクトのために使いました。",
                        grammarAnalysis: {
                            mainVerbs: ["built", "used"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Then)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the company</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>built</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the motor</span><span class='tag'>O</span></span> and <span class='chunk V-group'><span class='text'>used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>it</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(for a big project)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その時)</span>、<span class='t-S'>会社は</span> <span class='t-V'>作りました</span> <span class='t-O'>そのモーターを</span>、そして<span class='t-V'>使いました</span> <span class='t-O'>それを</span> <span class='t-M'>(大きなプロジェクトのために)</span>。",
                            naturalTranslation: "その後、会社はそのモーターを作り、大きなプロジェクトのために使いました。",
                            vocabulary: [
                                { word: "built", meaning: "「作った」「建設した」。buildの過去形。" },
                                { word: "project", meaning: "「プロジェクト」「計画」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 16,
                        text: "It took her some time to learn the job, but she became very successful.",
                        translation: "仕事を覚えるのに少し時間がかかりましたが、彼女は非常に成功しました。",
                        grammarAnalysis: {
                            mainVerbs: ["took", "became"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O</span></span> <span class='chunk O-group'><span class='text'>some time</span><span class='tag'>O</span></span> <span class='chunk S-group-real'><span class='text'>to learn the job</span><span class='tag'>S'</span></span>, but <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>became</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very successful</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>かかりました</span> <span class='t-O'>彼女に</span> <span class='t-O'>いくらかの時間を</span> <span class='t-S'>(仕事を学ぶことは)</span>、しかし<span class='t-S'>彼女は</span> <span class='t-V'>なりました</span> <span class='t-C'>とても成功したように</span>。",
                            naturalTranslation: "仕事を覚えるのに少し時間がかかりましたが、彼女は非常に成功しました。",
                            vocabulary: [
                                { word: "successful", meaning: "「成功した」。" }
                            ],
                            grammarNotes: [
                                { phrase: "It took her some time to", explanation: "<b>It takes O time to do</b>: 「Oが〜するのに(時間)がかかる」。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "She was one of the engineers who worked on the Niagara Falls power plant.",
                        translation: "彼女はナイアガラの滝発電所に取り組んだエンジニアの一人でした。",
                        grammarAnalysis: {
                            mainVerbs: ["was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>one of the engineers who worked on the Niagara Falls power plant</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>でした</span> <span class='t-C'>ナイアガラの滝発電所に取り組んだエンジニアの一人</span>。",
                            naturalTranslation: "彼女はナイアガラの滝発電所に取り組んだエンジニアの一人でした。",
                            vocabulary: [
                                { word: "Niagara Falls", meaning: "「ナイアガラの滝」。" },
                                { word: "power plant", meaning: "「発電所」。" }
                            ],
                            grammarNotes: [
                                { phrase: "worked on", explanation: "<b>work on</b>: 「取り組む」「〜に従事する」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 18,
                        text: "Bertha wanted to continue her work.",
                        translation: "バーサは仕事を続けたいと思いました。",
                        grammarAnalysis: {
                            mainVerbs: ["wanted"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Bertha</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>wanted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to continue her work</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>バーサは</span> <span class='t-V'>望みました</span> <span class='t-O'>彼女の仕事を続けることを</span>。",
                            naturalTranslation: "バーサは仕事を続けたいと思いました。",
                            vocabulary: [
                                { word: "continue", meaning: "「続ける」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 19,
                        text: "However, in those days, married women usually did not work outside the home, so she stopped working when she got married.",
                        translation: "しかし、当時、既婚女性は通常外で働かなかったため、彼女は結婚したときに働くのをやめました。",
                        grammarAnalysis: {
                            mainVerbs: ["did not work", "stopped"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(However, in those days)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>married women</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>did not work</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(outside the home)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>she</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>stopped</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>working</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(when she got married)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし、当時は)</span>、<span class='t-S'>結婚した女性は</span> <span class='t-M'>(通常)</span> <span class='t-V'>働きませんでした</span> <span class='t-M'>(家の外で)</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼女は</span> <span class='t-V'>やめました</span> <span class='t-O'>働くことを</span> <span class='t-M'>(彼女が結婚した時)</span>。",
                            naturalTranslation: "しかし、当時、既婚女性は通常外で働かなかったため、彼女は結婚したときに働くのをやめました。",
                            vocabulary: [
                                { word: "married", meaning: "「結婚した」。" },
                                { word: "usually", meaning: "「たいてい」「通常」。" },
                                { word: "got married", meaning: "「結婚した」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 20,
                        text: "Then, Bertha lived a quiet life with her family in Pittsburgh.",
                        translation: "その後、バーサはピッツバーグで家族と静かな生活を送りました。",
                        grammarAnalysis: {
                            mainVerbs: ["lived"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Then)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Bertha</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>lived</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a quiet life</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(with her family)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in Pittsburgh)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(それから)</span>、<span class='t-S'>バーサは</span> <span class='t-V'>送りました</span> <span class='t-O'>静かな生活を</span> <span class='t-M'>(彼女の家族と)</span> <span class='t-M'>(ピッツバーグで)</span>。",
                            naturalTranslation: "その後、バーサはピッツバーグで家族と静かな生活を送りました。",
                            vocabulary: [
                                { word: "quiet", meaning: "「静かな」。" }
                            ],
                            grammarNotes: [
                                { phrase: "lived a life", explanation: "<b>live a ... life</b>: 「...な生活を送る」。同族目的語。" }
                            ]
                        }
                    },
                    {
                        id: 21,
                        text: "She died in 1943.",
                        translation: "彼女は1943年に亡くなりました。",
                        grammarAnalysis: {
                            mainVerbs: ["died"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>She</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>died</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in 1943)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼女は</span> <span class='t-V'>死にました</span> <span class='t-M'>(1943年に)</span>。",
                            naturalTranslation: "彼女は1943年に亡くなりました。",
                            vocabulary: [
                                { word: "died", meaning: "「死んだ」。dieの過去形。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 22,
                        text: "Today, people remember her because she was the first woman to become an electrical engineer in the United States.",
                        translation: "今日、人々は彼女がアメリカで電気技師になった最初の女性だったため、彼女を覚えています。",
                        grammarAnalysis: {
                            mainVerbs: ["remember", "was"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Today)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>remember</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>her</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(because she was the first woman to become an electrical engineer in the United States)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(今日)</span>、<span class='t-S'>人々は</span> <span class='t-V'>覚えています</span> <span class='t-O'>彼女を</span> <span class='t-M'>(彼女がアメリカで電気技師になった最初の女性だったから)</span>。",
                            naturalTranslation: "今日、人々は彼女がアメリカで電気技師になった最初の女性だったため、彼女を覚えています。",
                            vocabulary: [
                                { word: "remember", meaning: "「覚えている」。" },
                                { word: "electrical engineer", meaning: "「電気技師」。" }
                            ],
                            grammarNotes: [
                                { phrase: "first woman to become", explanation: "<b>the first noun to do</b>: 「〜した最初の...」。不定詞の形容詞的用法。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "What was Bertha Lamme doing by 1893?",
                textTranslation: "1893年までにバーサ・ラメは何をしていましたか？",
                choices: [
                    { id: 1, text: "She was teaching math at a school.", translation: "彼女は学校で数学を教えていた。", isCorrect: false },
                    { id: 2, text: "She was studying engineering.", translation: "彼女は工学を勉強していた。", isCorrect: true, highlight: "she was studying engineering" },
                    { id: 3, text: "She was building a house in Ohio.", translation: "彼女はオハイオで家を建てていた。", isCorrect: false },
                    { id: 4, text: "She was traveling to Niagara Falls.", translation: "彼女はナイアガラの滝へ旅行していた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落の最後。「1893」という数字の近くを探します。「studying engineering」（工学を勉強していた）という表現を見つけましょう。",
                    targetSentenceId: 6,
                    highlightWord: "she was studying engineering",
                    highlightWordSentenceId: 6
                },
                keywords: ["what", "doing", "1893"],
                keywordExplanations: {
                    "doing": "していた。"
                },
                keywordMatches: [
                    { sentenceId: 5, text: "In 1893, she graduated from a university", keyword: "1893" },
                    { sentenceId: 6, text: "By that time, she was studying engineering", keyword: "studying" }
                ],
                choiceAdvice: "1: 教えていた？ 2: 勉強していた？ 3: 家を建てていた？ 4: 旅行していた？",
                logic: [
                    { type: "text", content: "本文第1段落: \"By that time [1893], she was studying engineering...\"" },
                    { type: "text", content: "結論: 彼女は工学を勉強していた。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 2,
                text: "How did Bertha get interested in the company?",
                textTranslation: "どのようにしてバーサはその会社に興味を持ちましたか？",
                choices: [
                    { id: 1, text: "She read a book about electricity.", translation: "彼女は電気についての本を読んだ。", isCorrect: false },
                    { id: 2, text: "She met the company president.", translation: "彼女は社長に会った。", isCorrect: false },
                    { id: 3, text: "Her brother told her about his job.", translation: "彼女の兄が彼の仕事について話した。", isCorrect: true, highlight: "brother told her about his job" },
                    { id: 4, text: "She visited the Niagara Falls power plant.", translation: "彼女はナイアガラの滝発電所を訪れた。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「company」に興味を持ったきっかけ。「brother」（兄）が何をしたかを確認します。",
                    targetSentenceId: 7,
                    highlightWord: "brother told her about his job",
                    highlightWordSentenceId: 7
                },
                keywords: ["how", "interested"],
                keywordExplanations: {
                    "how": "どのように。",
                    "interested": "興味を持った。"
                },
                keywordMatches: [
                    { sentenceId: 7, text: "Bertha's brother told her about his job", keyword: "brother" },
                    { sentenceId: 12, text: "Bertha joined the company and became interested", keyword: "interested" }
                ],
                choiceAdvice: "1: 本を読んだ？ 2: 社長に会った？ 3: 兄が話した？ 4: 発電所を訪れた？",
                logic: [
                    { type: "text", content: "本文第2段落: \"Bertha's brother told her about his job.\"" },
                    { type: "text", content: "本文第3段落: \"Bertha joined the company and became interested...\"" },
                    { type: "text", content: "結論: 兄が仕事について話したことがきっかけ。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 3,
                text: "Bertha worked on a project for Niagara Falls in",
                textTranslation: "バーサは〜にナイアガラの滝のプロジェクトに取り組みました。",
                choices: [
                    { id: 1, text: "1869.", translation: "1869年。", isCorrect: false },
                    { id: 2, text: "1893.", translation: "1893年。", isCorrect: true, highlight: "In 1893 ... Bertha joined the company ... worked on the Niagara Falls power plant" },
                    { id: 3, text: "1943.", translation: "1943年。", isCorrect: false },
                    { id: 4, text: "1971.", translation: "1971年。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "年号を選ぶ問題です。彼女が会社に入って働き始めた年（1893年）以降であることを考えます。選択肢の中で可能性として正しいのは1893年だけです（1893年に入社し、その後プロジェクトに参加）。文脈的に「1893年代」あるいは「1893年から始まるキャリアの中で」と解釈します。",
                    targetSentenceId: 7,
                    highlightWord: "In 1893",
                    highlightWordSentenceId: 7
                },
                keywords: ["Niagara Falls", "in"],
                keywordExplanations: {
                    "in": "〜に（年）。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 1869年（誕生）？ 2: 1893年（キャリア開始）？ 3: 1943年（死去）？ 4: 1971年？",
                logic: [
                    { type: "text", content: "1869年: 誕生。" },
                    { type: "text", content: "1943年: 死去。" },
                    { type: "text", content: "1893年: 大学卒業、兄から話を聞く、入社、キャリアの始まり。" },
                    { type: "text", content: "結論: プロジェクトに参加したのはキャリアの期間中であるため、1893年が最も適切（設問の意図としては「いつ頃」あるいは「キャリアの開始時期」を指している）。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 4,
                text: "Why did Bertha stop working?",
                textTranslation: "なぜバーサは働くのをやめたのですか？",
                choices: [
                    { id: 1, text: "The company closed down.", translation: "会社が閉鎖した。", isCorrect: false },
                    { id: 2, text: "Her work was too difficult.", translation: "彼女の仕事が難しすぎた。", isCorrect: false },
                    { id: 3, text: "She moved to a different country.", translation: "彼女は別の国へ引っ越した。", isCorrect: false },
                    { id: 4, text: "She got married and followed customs.", translation: "彼女は結婚し、慣習に従った。", isCorrect: true, highlight: "married women usually did not work ... she stopped working" }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。「stopped working」（働くのをやめた）理由。「married」（結婚した）とき、どういう状況だったか（married women usually did not work）を確認します。",
                    targetSentenceId: 19,
                    highlightWord: "married women usually did not work ... so she stopped working",
                    highlightWordSentenceId: 19
                },
                keywords: ["why", "stop"],
                keywordExplanations: {
                    "why": "なぜ。",
                    "stop": "やめた。"
                },
                keywordMatches: [
                    { sentenceId: 19, text: "she stopped working when she got married", keyword: "stopped" }
                ],
                choiceAdvice: "1: 会社閉鎖？ 2: 仕事が難しい？ 3: 引っ越し？ 4: 結婚と慣習？",
                logic: [
                    { type: "text", content: "本文第4段落: \"...married women usually did not work outside the home, so she stopped working when she got married.\"" },
                    { type: "text", content: "結論: 結婚し、当時の慣習（既婚女性は働かない）に従ったため。" },
                    { type: "conclusion", content: "正解: 4" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "The first female electrical engineer in the US.", translation: "アメリカで最初の女性電気技師。", isCorrect: true, highlight: "she was the first woman to become an electrical engineer" },
                    { id: 2, text: "A history of the Westinghouse company.", translation: "ウェスティングハウス社の歴史。", isCorrect: false },
                    { id: 3, text: "A famous power plant in Niagara Falls.", translation: "ナイアガラの滝の有名な発電所。", isCorrect: false },
                    { id: 4, text: "How to design electric motors.", translation: "電気モーターの設計方法。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "物語の最後。彼女が「first woman to become an electrical engineer」（電気技師になった最初の女性）として記憶されていることに注目します。",
                    targetSentenceId: 22,
                    highlightWord: "she was the first woman to become an electrical engineer",
                    highlightWordSentenceId: 22
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 最初の女性電気技師？ 2: 会社の歴史？ 3: 発電所？ 4: 設計方法？",
                logic: [
                    { type: "text", content: "最終文: \"...she was the first woman to become an electrical engineer in the United States.\"" },
                    { type: "text", content: "結論: 彼女の伝記であり、その最大の功績は最初の女性電気技師であること。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Bertha Lamme",
            intro: "アメリカ初の女性電気技師、バーサ・ラメの伝記です。リリアンと同様に「男性中心の分野での成功」と「家族・慣習によるキャリアの中断」を描いています。",
            points: [
                { label: "1. Early Life (幼少期)", text: "1869年生まれ。数学や機械を好む、当時としては珍しい女性でした。大学で工学を学びました。" },
                { label: "2. Inspiration (きっかけ)", text: "兄がウェスティングハウス社でエンジニアとして働いており、会社が数学のできる人材を求めていたことがきっかけでした。" },
                { label: "3. Achievement (偉業)", text: "入社後、モーターの部品を設計し、ナイアガラの滝発電所プロジェクトにも貢献しました。" },
                { label: "4. Career End (結末)", text: "仕事を続けたかったものの、当時の「結婚した女性は働かない」という慣習に従い、結婚を機に退職しました。" }
            ]
        }
    },
    {
        id: "grade-3-original-grand-canyon",
        grade: "3級",
        title: "The Grand Canyon",
        subTitle: "問題10",
        genre: "自然 / 地理",
        similarProblems: {
            exam: "2022年度 第2回",
            title: "The Challenger Deep"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=The+Grand+Canyon",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Most people know the name of the highest mountain in the world.",
                        translation: "ほとんどの人は、世界で一番高い山の名前を知っています。",
                        grammarAnalysis: {
                            mainVerbs: ["know"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Most people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the name of the highest mountain in the world</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>ほとんどの人々は</span> <span class='t-V'>知っています</span> <span class='t-O'>世界で一番高い山の名前を</span>。",
                            naturalTranslation: "ほとんどの人は、世界で一番高い山の名前を知っています。",
                            vocabulary: [
                                { word: "highest", meaning: "「最も高い」。highの最上級。" },
                                { word: "mountain", meaning: "「山」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 2,
                        text: "It is Mount Everest.",
                        translation: "それはエベレスト山です。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>Mount Everest</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>エベレスト山</span>。",
                            naturalTranslation: "それはエベレスト山です。",
                            vocabulary: [
                                { word: "Mount", meaning: "「〜山」（山の名前につける）。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 3,
                        text: "But not many people know the name of the most famous deep valley in the world.",
                        translation: "しかし、世界で一番有名な深い谷の名前を知っている人は多くありません。",
                        grammarAnalysis: {
                            mainVerbs: ["know"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(But)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>not many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the name of the most famous deep valley in the world</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし)</span> <span class='t-S'>多くの人々は〜ない</span> <span class='t-V'>知っています</span> <span class='t-O'>世界で最も有名な深い谷の名前を</span>。",
                            naturalTranslation: "しかし、世界で一番有名な深い谷の名前を知っている人は多くありません。",
                            vocabulary: [
                                { word: "famous", meaning: "「有名な」。" },
                                { word: "valley", meaning: "「谷」。" }
                            ],
                            grammarNotes: [
                                { phrase: "not many people", explanation: "<b>not many ...</b>: 「多くの...は〜ない」＝「...は多くない」（部分否定的なニュアンス）。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "It is called the Grand Canyon, and it is in the United States.",
                        translation: "それはグランドキャニオンと呼ばれ、アメリカ合衆国にあります。",
                        grammarAnalysis: {
                            mainVerbs: ["is called", "is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is called</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the Grand Canyon</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the United States)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>呼ばれています</span> <span class='t-C'>グランドキャニオンと</span>、そして<span class='t-S'>それは</span> <span class='t-V'>あります</span> <span class='t-M'>(合衆国に)</span>。",
                            naturalTranslation: "それはグランドキャニオンと呼ばれ、アメリカ合衆国にあります。",
                            vocabulary: [
                                { word: "called", meaning: "「呼ばれている」。" },
                                { word: "United States", meaning: "「合衆国」「アメリカ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "is called", explanation: "<b>be called C</b>: 「Cと呼ばれる」。受動態。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "The Grand Canyon is about 1,800 meters deep.",
                        translation: "グランドキャニオンは約1,800メートルの深さがあります。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The Grand Canyon</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>about 1,800 meters deep</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>グランドキャニオンは</span> <span class='t-V'>です</span> <span class='t-C'>およそ1,800メートルの深さ</span>。",
                            naturalTranslation: "グランドキャニオンは約1,800メートルの深さがあります。",
                            vocabulary: [
                                { word: "about", meaning: "「約」「およそ」。" },
                                { word: "deep", meaning: "「深い」。" }
                            ],
                            grammarNotes: [
                                { phrase: "meters deep", explanation: "<b>(数字) meters deep</b>: 「(数字)メートルの深さがある」。" }
                            ]
                        }
                    },
                    {
                        id: 6,
                        text: "It is in a state called Arizona in the western part of the country.",
                        translation: "それは国の西部にある、アリゾナと呼ばれる州にあります。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in a state called Arizona)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in the western part of the country)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>あります</span> <span class='t-M'>(アリゾナと呼ばれる州に)</span> <span class='t-M'>(国の西部にある)</span>。",
                            naturalTranslation: "それは国の西部にある、アリゾナと呼ばれる州にあります。",
                            vocabulary: [
                                { word: "state", meaning: "「州」。" },
                                { word: "western", meaning: "「西の」。" }
                            ],
                            grammarNotes: [
                                { phrase: "state called Arizona", explanation: "<b>state called ...</b>: 「...と呼ばれる州」。過去分詞の後置修飾。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "This large valley is about 446 kilometers long and 29 kilometers wide.",
                        translation: "この大きな谷は、長さが約446キロメートル、幅が29キロメートルあります。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This large valley</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>about 446 kilometers long and 29 kilometers wide</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>この大きな谷は</span> <span class='t-V'>です</span> <span class='t-C'>長さ約446kmで幅29km</span>。",
                            naturalTranslation: "この大きな谷は、長さが約446キロメートル、幅が29キロメートルあります。",
                            vocabulary: [
                                { word: "large", meaning: "「大きい」。" },
                                { word: "wide", meaning: "「広い」「幅がある」。" }
                            ],
                            grammarNotes: [
                                { phrase: "kilometers long", explanation: "<b>(数字) kilometers long</b>: 「長さが〜キロメートルある」。" }
                            ]
                        }
                    },
                    {
                        id: 8,
                        text: "The Colorado River flows through the bottom of the canyon.",
                        translation: "コロラド川がその谷の底を流れています。",
                        grammarAnalysis: {
                            mainVerbs: ["flows"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The Colorado River</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>flows</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(through the bottom of the canyon)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>コロラド川は</span> <span class='t-V'>流れています</span> <span class='t-M'>(峡谷の底を通って)</span>。",
                            naturalTranslation: "コロラド川がその谷の底を流れています。",
                            vocabulary: [
                                { word: "flows", meaning: "「流れる」。" },
                                { word: "bottom", meaning: "「底」。" },
                                { word: "canyon", meaning: "「峡谷」「谷」。" }
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
                        text: "Scientists know a lot about the Grand Canyon now, but it was a mystery for a long time.",
                        translation: "科学者たちは今ではグランドキャニオンについて多くのことを知っていますが、それは長い間謎でした。",
                        grammarAnalysis: {
                            mainVerbs: ["know", "was"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Scientists</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>know</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a lot about the Grand Canyon</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(now)</span><span class='tag'>M</span></span>, but <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>a mystery</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(for a long time)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>科学者たちは</span> <span class='t-V'>知っています</span> <span class='t-O'>グランドキャニオンについて多くを</span> <span class='t-M'>(今は)</span>、しかし<span class='t-S'>それは</span> <span class='t-V'>でした</span> <span class='t-C'>謎</span> <span class='t-M'>(長い間)</span>。",
                            naturalTranslation: "科学者たちは今ではグランドキャニオンについて多くのことを知っていますが、それは長い間謎でした。",
                            vocabulary: [
                                { word: "Scientists", meaning: "「科学者たち」。" },
                                { word: "mystery", meaning: "「謎」「神秘」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 10,
                        text: "It isn't easy to go down to the river because the walls are very steep.",
                        translation: "壁が非常に急なため、川まで下りていくのは簡単ではありません。",
                        grammarAnalysis: {
                            mainVerbs: ["isn't"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>isn't</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>easy</span><span class='tag'>C</span></span> <span class='chunk S-group-real'><span class='text'>to go down to the river</span><span class='tag'>S'</span></span> <span class='chunk M-group'><span class='text'>(because the walls are very steep)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>ありません</span> <span class='t-C'>簡単に</span> <span class='t-S'>(川へ下りていくことは)</span> <span class='t-M'>(壁がとても急だから)</span>。",
                            naturalTranslation: "壁が非常に急なため、川まで下りていくのは簡単ではありません。",
                            vocabulary: [
                                { word: "steep", meaning: "「（傾斜が）急な」。" }
                            ],
                            grammarNotes: [
                                { phrase: "It isn't easy to", explanation: "<b>It is ... to do</b>: 「〜することは...だ」。仮主語構文。" }
                            ]
                        }
                    },
                    {
                        id: 11,
                        text: "In the past, people thought it was impossible to travel through the canyon by boat.",
                        translation: "過去には、人々はボートでその谷を通り抜けるのは不可能だと考えていました。",
                        grammarAnalysis: {
                            mainVerbs: ["thought"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In the past)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>thought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(that) it was impossible to travel through the canyon by boat</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(過去には)</span>、<span class='t-S'>人々は</span> <span class='t-V'>考えました</span> <span class='t-O'>ボートで谷を通り抜けることは不可能だと</span>。",
                            naturalTranslation: "過去には、人々はボートでその谷を通り抜けるのは不可能だと考えていました。",
                            vocabulary: [
                                { word: "impossible", meaning: "「不可能な」。" },
                                { word: "travel", meaning: "「旅行する」「移動する」。" }
                            ],
                            grammarNotes: [
                                { phrase: "it was impossible to", explanation: "<b>it is impossible to do</b>: 「〜することは不可能だ」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "Also, the weather is very different at the bottom.",
                        translation: "また、底の方では天候が大きく異なります。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Also)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the weather</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very different</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(at the bottom)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(また)</span>、<span class='t-S'>天気は</span> <span class='t-V'>です</span> <span class='t-C'>とても違った</span> <span class='t-M'>(底では)</span>。",
                            naturalTranslation: "また、底の方では天候が大きく異なります。",
                            vocabulary: [
                                { word: "weather", meaning: "「天気」「気候」。" },
                                { word: "bottom", meaning: "「底」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 13,
                        text: "It is very hot in summer.",
                        translation: "夏はとても暑いです。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very hot</span><span class='tag'>C</span></span> <span class='chunk M-group'><span class='text'>(in summer)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-C'>とても暑い</span> <span class='t-M'>(夏に)</span>。",
                            naturalTranslation: "夏はとても暑いです。",
                            vocabulary: [
                                { word: "hot", meaning: "「暑い」。" },
                                { word: "summer", meaning: "「夏」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 14,
                        text: "It is usually over 40°C.",
                        translation: "それはたいてい40℃を超えます。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk C-group'><span class='text'>over 40°C</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>です</span> <span class='t-M'>(たいてい)</span> <span class='t-C'>40℃を超えて</span>。",
                            naturalTranslation: "それはたいてい40℃を超えます。",
                            vocabulary: [
                                { word: "over", meaning: "「〜を超えて」「〜以上」。" }
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
                        id: 15,
                        text: "In 1869, a man named John Wesley Powell traveled through the Grand Canyon for the first time.",
                        translation: "1869年に、ジョン・ウェズリー・パウエルという名の男性が初めてグランドキャニオンを通り抜ける旅をしました。",
                        grammarAnalysis: {
                            mainVerbs: ["traveled"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1869)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>a man named John Wesley Powell</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>traveled</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(through the Grand Canyon)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(for the first time)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1869年に)</span>、<span class='t-S'>ジョン・ウェズリー・パウエルという名の男性は</span> <span class='t-V'>旅しました</span> <span class='t-M'>(グランドキャニオンを通り抜けて)</span> <span class='t-M'>(初めて)</span>。",
                            naturalTranslation: "1869年に、ジョン・ウェズリー・パウエルという名の男性が初めてグランドキャニオンを通り抜ける旅をしました。",
                            vocabulary: [
                                { word: "named", meaning: "「〜という名前の」。" },
                                { word: "traveled", meaning: "「旅をした」。" }
                            ],
                            grammarNotes: [
                                { phrase: "for the first time", explanation: "<b>for the first time</b>: 「初めて」。" }
                            ]
                        }
                    },
                    {
                        id: 16,
                        text: "He went there with nine other men in wooden boats.",
                        translation: "彼は木のボートに乗って、他の9人の男性と共にそこへ行きました。",
                        grammarAnalysis: {
                            mainVerbs: ["went"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>went</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(there)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(with nine other men)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(in wooden boats)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>行きました</span> <span class='t-M'>(そこへ)</span> <span class='t-M'>(他の9人の男性たちと)</span> <span class='t-M'>(木のボートで)</span>。",
                            naturalTranslation: "彼は木のボートに乗って、他の9人の男性と共にそこへ行きました。",
                            vocabulary: [
                                { word: "wooden", meaning: "「木製の」。" },
                                { word: "boats", meaning: "「ボート」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 17,
                        text: "These boats were strong enough to move in the fast river.",
                        translation: "これらのボートは、速い川の中で動くのに十分丈夫でした。",
                        grammarAnalysis: {
                            mainVerbs: ["were"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>These boats</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>strong enough to move in the fast river</span><span class='tag'>C</span></span>.",
                            translationHtml: "<span class='t-S'>これらのボートは</span> <span class='t-V'>でした</span> <span class='t-C'>速い川で動くのに十分丈夫な</span>。",
                            naturalTranslation: "これらのボートは、速い川の中で動くのに十分丈夫でした。",
                            vocabulary: [
                                { word: "strong", meaning: "「強い」「丈夫な」。" },
                                { word: "fast", meaning: "「速い」。" }
                            ],
                            grammarNotes: [
                                { phrase: "strong enough to", explanation: "<b>adj. + enough to do</b>: 「〜するのに十分...だ」。" }
                            ]
                        }
                    },
                    {
                        id: 18,
                        text: "It took the men three months to finish their trip, and they had many problems.",
                        translation: "男性たちが旅を終えるのに3ヶ月かかり、彼らは多くの問題を抱えました。",
                        grammarAnalysis: {
                            mainVerbs: ["took", "had"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the men</span><span class='tag'>O</span></span> <span class='chunk O-group'><span class='text'>three months</span><span class='tag'>O</span></span> <span class='chunk S-group-real'><span class='text'>to finish their trip</span><span class='tag'>S'</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>had</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>many problems</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>かかりました</span> <span class='t-O'>男性たちに</span> <span class='t-O'>3ヶ月を</span> <span class='t-S'>(彼らの旅を終えるのに)</span>、そして<span class='t-S'>彼らは</span> <span class='t-V'>持っていました</span> <span class='t-O'>多くの問題を</span>。",
                            naturalTranslation: "男性たちが旅を終えるのに3ヶ月かかり、彼らは多くの問題を抱えました。",
                            vocabulary: [
                                { word: "months", meaning: "「ヶ月」。" },
                                { word: "trip", meaning: "「旅」。" },
                                { word: "problems", meaning: "「問題」「困難」。" }
                            ],
                            grammarNotes: [
                                { phrase: "took O time to", explanation: "<b>take O time to do</b>: 「Oが〜するのに(時間)がかかる」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "At that time, they learned about the rocks and the river.",
                        translation: "その時、彼らは岩や川について学びました。",
                        grammarAnalysis: {
                            mainVerbs: ["learned"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(At that time)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>learned</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>(about the rocks and the river)</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(その時)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>学びました</span> <span class='t-O'>(岩と川について)</span>。",
                            naturalTranslation: "その時、彼らは岩や川について学びました。",
                            vocabulary: [
                                { word: "rocks", meaning: "「岩」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 20,
                        text: "Now, many people visit the Grand Canyon to see the beautiful view.",
                        translation: "今では、多くの人々が美しい景色を見るためにグランドキャニオンを訪れます。",
                        grammarAnalysis: {
                            mainVerbs: ["visit"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Now)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>visit</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the Grand Canyon</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to see the beautiful view)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(今や)</span>、<span class='t-S'>多くの人々が</span> <span class='t-V'>訪れます</span> <span class='t-O'>グランドキャニオンを</span> <span class='t-M'>(美しい景色を見るために)</span>。",
                            naturalTranslation: "今では、多くの人々が美しい景色を見るためにグランドキャニオンを訪れます。",
                            vocabulary: [
                                { word: "visit", meaning: "「訪れる」。" },
                                { word: "view", meaning: "「景色」「眺め」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to see", explanation: "<b>to see</b>: 不定詞の副詞的用法。「〜を見るために」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "Where is the Grand Canyon?",
                textTranslation: "グランドキャニオンはどこにありますか？",
                choices: [
                    { id: 1, text: "In the state of Arizona.", translation: "アリゾナ州に。", isCorrect: true, highlight: "is in a state called Arizona" },
                    { id: 2, text: "At the bottom of the ocean.", translation: "海の底に。", isCorrect: false },
                    { id: 3, text: "On the top of Mount Everest.", translation: "エベレスト山の頂上に。", isCorrect: false },
                    { id: 4, text: "Near a river in Nepal.", translation: "ネパールの川の近くに。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。場所（Where）を尋ねています。「state」（州）や具体的な地名「Arizona」を探しましょう。",
                    targetSentenceId: 6,
                    highlightWord: "is in a state called Arizona",
                    highlightWordSentenceId: 6
                },
                keywords: ["where", "Grand Canyon"],
                keywordExplanations: {
                    "where": "どこに。"
                },
                keywordMatches: [
                    { sentenceId: 4, text: "it is in the United States", keyword: "United States" },
                    { sentenceId: 6, text: "It is in a state called Arizona", keyword: "Arizona" }
                ],
                choiceAdvice: "1: アリゾナ州？ 2: 海の底？ 3: エベレスト？ 4: ネパール？",
                logic: [
                    { type: "text", content: "本文第1段落: \"It is in a state called Arizona...\"" },
                    { type: "text", content: "結論: アリゾナ州にある。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 2,
                text: "How wide is the Grand Canyon?",
                textTranslation: "グランドキャニオンの幅はどれくらいですか？",
                choices: [
                    { id: 1, text: "About 446 kilometers.", translation: "約446キロメートル。", isCorrect: false },
                    { id: 2, text: "About 1,800 meters.", translation: "約1,800メートル。", isCorrect: false },
                    { id: 3, text: "About 29 kilometers.", translation: "約29キロメートル。", isCorrect: true, highlight: "29 kilometers wide" },
                    { id: 4, text: "About 40 kilometers.", translation: "約40キロメートル。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "第1段落。「wide」（幅）という単語の近くにある数字を探します。「long」（長さ）や「deep」（深さ）の数字と間違えないようにしましょう。",
                    targetSentenceId: 7,
                    highlightWord: "29 kilometers wide",
                    highlightWordSentenceId: 7
                },
                keywords: ["how", "wide"],
                keywordExplanations: {
                    "how": "どれくらい。",
                    "wide": "幅がある。"
                },
                keywordMatches: [
                    { sentenceId: 7, text: "29 kilometers wide", keyword: "wide" }
                ],
                choiceAdvice: "1: 446km（長さ）？ 2: 1,800m（深さ）？ 3: 29km（幅）？ 4: 40km？",
                logic: [
                    { type: "text", content: "本文第1段落: \"...about 446 kilometers long and 29 kilometers wide.\"" },
                    { type: "text", content: "width（幅）は29km。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 3,
                text: "Why is the Grand Canyon difficult to explore?",
                textTranslation: "なぜグランドキャニオンは探検するのが難しいのですか？",
                choices: [
                    { id: 1, text: "The water pressure is too high.", translation: "水圧が高すぎる。", isCorrect: false },
                    { id: 2, text: "The walls are very steep.", translation: "壁が非常に急だ。", isCorrect: true, highlight: "isn't easy to go down ... because the walls are very steep" },
                    { id: 3, text: "There is no light from the sun.", translation: "太陽の光がない。", isCorrect: false },
                    { id: 4, text: "It is too cold in summer.", translation: "夏は寒すぎる。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「isn't easy」（簡単ではない）理由を探します。「because」（なぜなら）の後ろに理由が書かれています。「walls」（壁）の状態に注目。",
                    targetSentenceId: 10,
                    highlightWord: "because the walls are very steep",
                    highlightWordSentenceId: 10
                },
                keywords: ["why", "difficult", "explore"],
                keywordExplanations: {
                    "why": "なぜ。",
                    "difficult": "難しい（＝not easy）。"
                },
                keywordMatches: [
                    { sentenceId: 10, text: "It isn't easy to go down ... because the walls are very steep", keyword: "steep" }
                ],
                choiceAdvice: "1: 水圧？ 2: 壁が急？ 3: 光がない？ 4: 夏寒い？",
                logic: [
                    { type: "text", content: "本文第2段落: \"It isn't easy to go down to the river because the walls are very steep.\"" },
                    { type: "text", content: "結論: 壁が急だから。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 4,
                text: "In 1869, John Wesley Powell",
                textTranslation: "1869年に、ジョン・ウェズリー・パウエルは...",
                choices: [
                    { id: 1, text: "built a house in the canyon.", translation: "峡谷に家を建てた。", isCorrect: false },
                    { id: 2, text: "traveled through the canyon.", translation: "峡谷を通り抜ける旅をした。", isCorrect: true, highlight: "traveled through the Grand Canyon" },
                    { id: 3, text: "found gold in the river.", translation: "川で金を見つけた。", isCorrect: false },
                    { id: 4, text: "climbed the highest mountain.", translation: "最も高い山に登った。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「1869」と人名「John Wesley Powell」を探し、彼が「traveled」（旅をした）という記述を確認します。",
                    targetSentenceId: 15,
                    highlightWord: "traveled through the Grand Canyon",
                    highlightWordSentenceId: 15
                },
                keywords: ["1869", "John Wesley Powell"],
                keywordExplanations: {
                    "1869": "年号。"
                },
                keywordMatches: [
                    { sentenceId: 15, text: "traveled through the Grand Canyon", keyword: "traveled" }
                ],
                choiceAdvice: "1: 家を建てた？ 2: 旅をした？ 3: 金を見つけた？ 4: 山に登った？",
                logic: [
                    { type: "text", content: "本文第3段落: \"In 1869, a man named John Wesley Powell traveled through the Grand Canyon...\"" },
                    { type: "text", content: "結論: 峡谷を旅した。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "A large and famous valley in the US.", translation: "アメリカにある大きくて有名な谷。", isCorrect: true, highlight: "most famous deep valley ... Grand Canyon" },
                    { id: 2, text: "The history of wooden boats.", translation: "木製ボートの歴史。", isCorrect: false },
                    { id: 3, text: "A dangerous mountain in Asia.", translation: "アジアの危険な山。", isCorrect: false },
                    { id: 4, text: "Places to go swimming in Arizona.", translation: "アリゾナで泳ぎに行く場所。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 1,
                    description: "全体を通して、「Grand Canyon」（グランドキャニオン）についての話です。それは「famous deep valley」（有名な深い谷）であると第1段落で紹介されています。",
                    targetSentenceId: 3,
                    highlightWord: "most famous deep valley",
                    highlightWordSentenceId: 3
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: 有名な谷？ 2: ボートの歴史？ 3: アジアの山？ 4: 泳ぐ場所？",
                logic: [
                    { type: "text", content: "第1段落: \"...most famous deep valley in the world. It is called the Grand Canyon...\"" },
                    { type: "text", content: "結論: アメリカのグランドキャニオン（谷）についての説明文。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "The Grand Canyon",
            intro: "アメリカの巨大な渓谷「グランドキャニオン」についての説明文です。過去問と同じく「高い場所（エベレスト）との対比」から始まり、規模、過酷な環境、歴史的な初探検を描いています。",
            points: [
                { label: "1. Location (場所と規模)", text: "エベレストと比較し、有名な深い谷として紹介。アメリカ・アリゾナ州にあり、深さ約1,800m、長さ約446km、幅約29kmです。" },
                { label: "2. Conditions (環境)", text: "壁が急で川に降りるのが困難です。かつてはボートでの通過は不可能と思われていました。谷底は夏には40℃を超えます。" },
                { label: "3. Exploration (探検)", text: "1869年にジョン・ウェズリー・パウエルが木製のボートで初めて川を下りました。3ヶ月かかる困難な旅でしたが、地形について学びました。" }
            ]
        }
    },
    {
        id: "grade-3-original-momofuku-ando",
        grade: "3級",
        title: "Momofuku Ando",
        subTitle: "問題11",
        genre: "歴史 / 伝記",
        similarProblems: {
            exam: "2022年度 第1回",
            title: "Edwin Land"
        },
        isOriginal: true,
        images: {
            content: "https://placehold.co/600x400?text=Momofuku+Ando",
            question: "https://placehold.co/600x400?text=Question+Image"
        },
        content: [
            {
                paragraphId: 1,
                sentences: [
                    {
                        id: 1,
                        text: "Many people like to eat noodles.",
                        translation: "多くの人々は麺を食べるのが好きです。",
                        grammarAnalysis: {
                            mainVerbs: ["like"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Many people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>like</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to eat noodles</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>多くの人々は</span> <span class='t-V'>好きです</span> <span class='t-O'>麺を食べることが</span>。",
                            naturalTranslation: "多くの人々は麺を食べるのが好きです。",
                            vocabulary: [
                                { word: "noodles", meaning: "「麺」。" }
                            ],
                            grammarNotes: [
                                { phrase: "like to eat", explanation: "<b>like to do</b>: 「〜するのが好き」。" }
                            ]
                        }
                    },
                    {
                        id: 2,
                        text: "These days, people usually buy them at a convenience store or cook them quickly, so they can eat their meal right away.",
                        translation: "最近では、人々はたいていコンビニでそれらを買うか素早く調理するため、すぐに食事をとることができます。",
                        grammarAnalysis: {
                            mainVerbs: ["buy", "cook", "can eat"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(These days)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>buy</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at a convenience store)</span><span class='tag'>M</span></span> or <span class='chunk V-group'><span class='text'>cook</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(quickly)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can eat</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>their meal</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(right away)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(最近)</span>、<span class='t-S'>人々は</span> <span class='t-M'>(たいてい)</span> <span class='t-V'>買います</span> <span class='t-O'>それらを</span> <span class='t-M'>(コンビニで)</span>、または<span class='t-V'>調理します</span> <span class='t-O'>それらを</span> <span class='t-M'>(素早く)</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼らは</span> <span class='t-V'>食べることができます</span> <span class='t-O'>彼らの食事を</span> <span class='t-M'>(すぐに)</span>。",
                            naturalTranslation: "最近では、人々はたいていコンビニでそれらを買うか素早く調理するため、すぐに食事をとることができます。",
                            vocabulary: [
                                { word: "These days", meaning: "「最近」「近頃」。" },
                                { word: "convenience store", meaning: "「コンビニ」。" },
                                { word: "meal", meaning: "「食事」。" },
                                { word: "right away", meaning: "「すぐに」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 3,
                        text: "Before instant noodles, people usually had to wait a long time to eat.",
                        translation: "インスタントラーメンの前は、人々はたいてい食べるために長く待たなければなりませんでした。",
                        grammarAnalysis: {
                            mainVerbs: ["had to wait"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(Before instant noodles)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>had to wait</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a long time</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to eat)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(インスタント麺の前は)</span>、<span class='t-S'>人々は</span> <span class='t-M'>(たいてい)</span> <span class='t-V'>待たなければなりませんでした</span> <span class='t-O'>長い時間を</span> <span class='t-M'>(食べるために)</span>。",
                            naturalTranslation: "インスタントラーメンの前は、人々はたいてい食べるために長く待たなければなりませんでした。",
                            vocabulary: [
                                { word: "instant noodles", meaning: "「インスタントラーメン」「即席麺」。" },
                                { word: "wait", meaning: "「待つ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "had to wait", explanation: "<b>had to do</b>: 「〜しなければならなかった」。have toの過去形。" }
                            ]
                        }
                    },
                    {
                        id: 4,
                        text: "They went to restaurants or made soup from scratch.",
                        translation: "彼らはレストランに行くか、一からスープを作りました。",
                        grammarAnalysis: {
                            mainVerbs: ["went", "made"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>went</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to restaurants)</span><span class='tag'>M</span></span> or <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>soup</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(from scratch)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>行きました</span> <span class='t-M'>(レストランへ)</span>、あるいは<span class='t-V'>作りました</span> <span class='t-O'>スープを</span> <span class='t-M'>(最初から)</span>。",
                            naturalTranslation: "彼らはレストランに行くか、一からスープを作りました。",
                            vocabulary: [
                                { word: "restaurants", meaning: "「レストラン」。" },
                                { word: "scratch", meaning: "「最初」「ゼロ」。" }
                            ],
                            grammarNotes: [
                                { phrase: "from scratch", explanation: "<b>from scratch</b>: 「最初から」「ゼロから」。" }
                            ]
                        }
                    },
                    {
                        id: 5,
                        text: "This usually took a long time.",
                        translation: "これにはたいてい長い時間がかかりました。",
                        grammarAnalysis: {
                            mainVerbs: ["took"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(usually)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>took</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a long time</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-M'>(たいてい)</span> <span class='t-V'>かかりました</span> <span class='t-O'>長い時間を</span>。",
                            naturalTranslation: "これにはたいてい長い時間がかかりました。",
                            vocabulary: [
                                { word: "took", meaning: "「（時間が）かかった」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 6,
                        text: "But today, there is one way to get noodles much more quickly.",
                        translation: "しかし今日、麺をもっと早く手に入れる方法が一つあります。",
                        grammarAnalysis: {
                            mainVerbs: ["is"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(But today)</span><span class='tag'>M</span></span>, <span class='chunk V-group'><span class='text'>there is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>one way to get noodles much more quickly</span><span class='tag'>S</span></span>.",
                            translationHtml: "<span class='t-M'>(しかし今日)</span>、<span class='t-V'>あります</span> <span class='t-S'>もっとずっと早く麺を手に入れる一つの方法が</span>。",
                            naturalTranslation: "しかし今日、麺をもっと早く手に入れる方法が一つあります。",
                            vocabulary: [
                                { word: "way", meaning: "「方法」。" },
                                { word: "quickly", meaning: "「早く」「素早く」。" }
                            ],
                            grammarNotes: [
                                { phrase: "way to get", explanation: "<b>way to get</b>: 「手に入れる方法」。不定詞の形容詞的用法。" },
                                { phrase: "much more", explanation: "<b>much more ...</b>: 比較級の強調。「ずっと...」。" }
                            ]
                        }
                    },
                    {
                        id: 7,
                        text: "People can eat instant noodles.",
                        translation: "人々はインスタントラーメンを食べることができます。",
                        grammarAnalysis: {
                            mainVerbs: ["can eat"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can eat</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>instant noodles</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>人々は</span> <span class='t-V'>食べることができます</span> <span class='t-O'>インスタントラーメンを</span>。",
                            naturalTranslation: "人々はインスタントラーメンを食べることができます。",
                            vocabulary: [],
                            grammarNotes: []
                        }
                    }
                ]
            },
            {
                paragraphId: 2,
                sentences: [
                    {
                        id: 8,
                        text: "A businessman named Momofuku Ando made the first instant noodles.",
                        translation: "安藤百福という名のビジネスマンが、最初のインスタントラーメンを作りました。",
                        grammarAnalysis: {
                            mainVerbs: ["made"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>A businessman named Momofuku Ando</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the first instant noodles</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>安藤百福という名のビジネスマンが</span> <span class='t-V'>作りました</span> <span class='t-O'>最初のインスタントラーメンを</span>。",
                            naturalTranslation: "安藤百福という名のビジネスマンが、最初のインスタントラーメンを作りました。",
                            vocabulary: [
                                { word: "businessman", meaning: "「ビジネスマン」「実業家」。" },
                                { word: "named", meaning: "「〜という名前の」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 9,
                        text: "Ando was born in 1910.",
                        translation: "安藤は1910年に生まれました。",
                        grammarAnalysis: {
                            mainVerbs: ["was born"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Ando</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was born</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in 1910)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>安藤は</span> <span class='t-V'>生まれました</span> <span class='t-M'>(1910年に)</span>。",
                            naturalTranslation: "安藤は1910年に生まれました。",
                            vocabulary: [
                                { word: "born", meaning: "「生まれた」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 10,
                        text: "When he was young, he worked hard and started his own business.",
                        translation: "若い頃、彼は一生懸命働き、自分のビジネスを始めました。",
                        grammarAnalysis: {
                            mainVerbs: ["was", "worked", "started"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(When he was young)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>worked</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(hard)</span><span class='tag'>M</span></span> and <span class='chunk V-group'><span class='text'>started</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>his own business</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-M'>(彼が若かった時)</span>、<span class='t-S'>彼は</span> <span class='t-V'>働きました</span> <span class='t-M'>(一生懸命)</span>、そして<span class='t-V'>始めました</span> <span class='t-O'>彼自身のビジネスを</span>。",
                            naturalTranslation: "若い頃、彼は一生懸命働き、自分のビジネスを始めました。",
                            vocabulary: [
                                { word: "young", meaning: "「若い」。" },
                                { word: "business", meaning: "「ビジネス」「事業」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 11,
                        text: "He liked to think about new ideas, so he tried many different jobs.",
                        translation: "彼は新しいアイデアについて考えるのが好きだったので、多くの異なる仕事を試しました。",
                        grammarAnalysis: {
                            mainVerbs: ["liked", "tried"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>liked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>to think about new ideas</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(so)</span><span class='tag'>M</span></span> <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>tried</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>many different jobs</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>好きでした</span> <span class='t-O'>新しいアイデアについて考えることが</span>、<span class='t-M'>(だから)</span> <span class='t-S'>彼は</span> <span class='t-V'>試しました</span> <span class='t-O'>多くの異なる仕事を</span>。",
                            naturalTranslation: "彼は新しいアイデアについて考えるのが好きだったので、多くの異なる仕事を試しました。",
                            vocabulary: [
                                { word: "ideas", meaning: "「アイデア」「考え」。" },
                                { word: "tried", meaning: "「試した」。" },
                                { word: "jobs", meaning: "「仕事」。" }
                            ],
                            grammarNotes: [
                                { phrase: "liked to think", explanation: "<b>like to do</b>: 「〜するのが好き」。" }
                            ]
                        }
                    },
                    {
                        id: 12,
                        text: "In 1948, he started a company in Osaka.",
                        translation: "1948年に、彼は大阪で会社を始めました。",
                        grammarAnalysis: {
                            mainVerbs: ["started"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1948)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>he</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>started</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a company</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in Osaka)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1948年に)</span>、<span class='t-S'>彼は</span> <span class='t-V'>始めました</span> <span class='t-O'>会社を</span> <span class='t-M'>(大阪で)</span>。",
                            naturalTranslation: "1948年に、彼は大阪で会社を始めました。",
                            vocabulary: [
                                { word: "company", meaning: "「会社」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 13,
                        text: "In 1958, the company name was changed to Nissin.",
                        translation: "1958年に、会社名は日清に変更されました。",
                        grammarAnalysis: {
                            mainVerbs: ["was changed"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(In 1958)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the company name</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>was changed</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to Nissin)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(1958年に)</span>、<span class='t-S'>会社名は</span> <span class='t-V'>変えられました</span> <span class='t-M'>(日清に)</span>。",
                            naturalTranslation: "1958年に、会社名は日清に変更されました。",
                            vocabulary: [
                                { word: "changed", meaning: "「変えられた」。" }
                            ],
                            grammarNotes: [
                                { phrase: "was changed", explanation: "<b>was changed</b>: 受動態。「変えられた（＝変更された）」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 3,
                sentences: [
                    {
                        id: 14,
                        text: "One day, Ando walked through the city after the war.",
                        translation: "ある日、安藤は戦後の街を歩いていました。",
                        grammarAnalysis: {
                            mainVerbs: ["walked"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(One day)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>Ando</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>walked</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(through the city)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(after the war)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(ある日)</span>、<span class='t-S'>安藤は</span> <span class='t-V'>歩きました</span> <span class='t-M'>(街を通って)</span> <span class='t-M'>(戦後)</span>。",
                            naturalTranslation: "ある日、安藤は戦後の街を歩いていました。",
                            vocabulary: [
                                { word: "war", meaning: "「戦争」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 15,
                        text: "He saw a long line of people.",
                        translation: "彼は人々の長い列を見ました。",
                        grammarAnalysis: {
                            mainVerbs: ["saw"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>saw</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a long line of people</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>見ました</span> <span class='t-O'>人々の長い列を</span>。",
                            naturalTranslation: "彼は人々の長い列を見ました。",
                            vocabulary: [
                                { word: "saw", meaning: "「見た」。seeの過去形。" },
                                { word: "line", meaning: "「列」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 16,
                        text: "They were waiting in the cold to eat a bowl of hot noodle soup.",
                        translation: "彼らは温かい麺のスープを一杯食べるために寒さの中で待っていました。",
                        grammarAnalysis: {
                            mainVerbs: ["were waiting"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were waiting</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in the cold)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to eat a bowl of hot noodle soup)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>待っていました</span> <span class='t-M'>(寒さの中で)</span> <span class='t-M'>(温かい麺のスープを一杯食べるために)</span>。",
                            naturalTranslation: "彼らは温かい麺のスープを一杯食べるために寒さの中で待っていました。",
                            vocabulary: [
                                { word: "cold", meaning: "「寒さ」。" },
                                { word: "bowl", meaning: "「どんぶり」「一杯」。" }
                            ],
                            grammarNotes: [
                                { phrase: "to eat", explanation: "<b>to eat</b>: 不定詞の副詞的用法。「食べるために」。" }
                            ]
                        }
                    },
                    {
                        id: 17,
                        text: "He asked himself, \"Why can't people eat noodles at home easily?\"",
                        translation: "彼は「なぜ人々は家で簡単に麺を食べられないのだろう？」と自問しました。",
                        grammarAnalysis: {
                            mainVerbs: ["asked", "eat"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>He</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>asked</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>himself</span><span class='tag'>O</span></span>, \"<span class='chunk M-group'><span class='text'>(Why)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>can't</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group-real'><span class='text'>eat</span><span class='tag'>V'</span></span> <span class='chunk O-group'><span class='text'>noodles</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(at home)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(easily)</span><span class='tag'>M</span></span>?\"",
                            translationHtml: "<span class='t-S'>彼は</span> <span class='t-V'>尋ねました</span> <span class='t-O'>彼自身に</span>、「<span class='t-M'>(なぜ)</span><span class='t-V'>できないのか</span> <span class='t-S'>人々は</span> <span class='t-V'>食べる</span> <span class='t-O'>麺を</span> <span class='t-M'>(家で)</span> <span class='t-M'>(簡単に)</span>？」",
                            naturalTranslation: "彼は「なぜ人々は家で簡単に麺を食べられないのだろう？」と自問しました。",
                            vocabulary: [
                                { word: "himself", meaning: "「彼自身」。" },
                                { word: "easily", meaning: "「簡単に」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 18,
                        text: "This gave him an idea.",
                        translation: "これが彼にアイデアを与えました。",
                        grammarAnalysis: {
                            mainVerbs: ["gave"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>gave</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>him</span><span class='tag'>O</span></span> <span class='chunk O-group'><span class='text'>an idea</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>与えました</span> <span class='t-O'>彼に</span> <span class='t-O'>アイデアを</span>。",
                            naturalTranslation: "これが彼にアイデアを与えました。",
                            vocabulary: [
                                { word: "gave", meaning: "「与えた」。giveの過去形。" }
                            ],
                            grammarNotes: [
                                { phrase: "gave him an idea", explanation: "<b>give O1 O2</b>: 「O1にO2を与える」。" }
                            ]
                        }
                    },
                    {
                        id: 19,
                        text: "Ando made the first instant noodles in 1958.",
                        translation: "安藤は1958年に最初のインスタントラーメンを作りました。",
                        grammarAnalysis: {
                            mainVerbs: ["made"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Ando</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the first instant noodles</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in 1958)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>安藤は</span> <span class='t-V'>作りました</span> <span class='t-O'>最初のインスタントラーメンを</span> <span class='t-M'>(1958年に)</span>。",
                            naturalTranslation: "安藤は1958年に最初のインスタントラーメンを作りました。",
                            vocabulary: [
                                { word: "first", meaning: "「最初の」。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 20,
                        text: "People could cook them in just a few minutes.",
                        translation: "人々はほんの数分でそれらを調理することができました。",
                        grammarAnalysis: {
                            mainVerbs: ["could cook"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>People</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>could cook</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in just a few minutes)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>人々は</span> <span class='t-V'>調理できました</span> <span class='t-O'>それらを</span> <span class='t-M'>(ほんの数分で)</span>。",
                            naturalTranslation: "人々はほんの数分でそれらを調理することができました。",
                            vocabulary: [
                                { word: "few", meaning: "「少数の」。" },
                                { word: "minutes", meaning: "「分」。" }
                            ],
                            grammarNotes: [
                                { phrase: "could cook", explanation: "<b>could</b>: canの過去形。" },
                                { phrase: "a few", explanation: "<b>a few</b>: 「いくつかの」「少数の」。" }
                            ]
                        }
                    }
                ]
            },
            {
                paragraphId: 4,
                sentences: [
                    {
                        id: 21,
                        text: "Ando's company sold the new noodles called \"Chicken Ramen\" in 1958.",
                        translation: "安藤の会社は1958年に「チキンラーメン」と呼ばれる新しい麺を売りました。",
                        grammarAnalysis: {
                            mainVerbs: ["sold"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>Ando's company</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>sold</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the new noodles called \"Chicken Ramen\"</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(in 1958)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>安藤の会社は</span> <span class='t-V'>売りました</span> <span class='t-O'>「チキンラーメン」と呼ばれる新しい麺を</span> <span class='t-M'>(1958年に)</span>。",
                            naturalTranslation: "安藤の会社は1958年に「チキンラーメン」と呼ばれる新しい麺を売りました。",
                            vocabulary: [
                                { word: "sold", meaning: "「売った」。sellの過去形。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 22,
                        text: "The noodles were very popular, and they were sold out in many stores.",
                        translation: "その麺はとても人気があり、多くの店で売り切れました。",
                        grammarAnalysis: {
                            mainVerbs: ["were", "were sold out"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The noodles</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>very popular</span><span class='tag'>C</span></span>, and <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were sold out</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in many stores)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-S'>その麺は</span> <span class='t-V'>でした</span> <span class='t-C'>とても人気が</span>、そして<span class='t-S'>それらは</span> <span class='t-V'>売り切れました</span> <span class='t-M'>(多くの店で)</span>。",
                            naturalTranslation: "その麺はとても人気があり、多くの店で売り切れました。",
                            vocabulary: [
                                { word: "popular", meaning: "「人気のある」。" },
                                { word: "sold out", meaning: "「売り切れた」。" },
                                { word: "stores", meaning: "「店」。" }
                            ],
                            grammarNotes: [
                                { phrase: "were sold out", explanation: "<b>be sold out</b>: 「売り切れる」。受動態。" }
                            ]
                        }
                    },
                    {
                        id: 23,
                        text: "The company made more instant noodles, and customers all around Japan bought them.",
                        translation: "会社はさらに多くのインスタントラーメンを作り、日本中の顧客がそれらを買いました。",
                        grammarAnalysis: {
                            mainVerbs: ["made", "bought"],
                            structureHtml: "<span class='chunk S-group'><span class='text'>The company</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>made</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>more instant noodles</span><span class='tag'>O</span></span>, and <span class='chunk S-group'><span class='text'>customers all around Japan</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>bought</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>them</span><span class='tag'>O</span></span>.",
                            translationHtml: "<span class='t-S'>会社は</span> <span class='t-V'>作りました</span> <span class='t-O'>もっと多くのインスタント麺を</span>、そして<span class='t-S'>日本中の顧客が</span> <span class='t-V'>買いました</span> <span class='t-O'>それらを</span>。",
                            naturalTranslation: "会社はさらに多くのインスタントラーメンを作り、日本中の顧客がそれらを買いました。",
                            vocabulary: [
                                { word: "customers", meaning: "「顧客」「客」。" },
                                { word: "bought", meaning: "「買った」。buyの過去形。" }
                            ],
                            grammarNotes: []
                        }
                    },
                    {
                        id: 24,
                        text: "After that, people were able to eat hot noodles anywhere.",
                        translation: "その後、人々はどこでも温かい麺を食べることができるようになりました。",
                        grammarAnalysis: {
                            mainVerbs: ["were able"],
                            structureHtml: "<span class='chunk M-group'><span class='text'>(After that)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>people</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>were able to eat</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>hot noodles</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(anywhere)</span><span class='tag'>M</span></span>.",
                            translationHtml: "<span class='t-M'>(その後)</span>、<span class='t-S'>人々は</span> <span class='t-V'>食べることができました</span> <span class='t-O'>温かい麺を</span> <span class='t-M'>(どこでも)</span>。",
                            naturalTranslation: "その後、人々はどこでも温かい麺を食べることができるようになりました。",
                            vocabulary: [
                                { word: "able", meaning: "「可能な」。" },
                                { word: "anywhere", meaning: "「どこでも」。" }
                            ],
                            grammarNotes: [
                                { phrase: "were able to", explanation: "<b>be able to do</b>: 「〜することができる」。" }
                            ]
                        }
                    }
                ]
            }
        ],
        questions: [
            {
                id: 1,
                text: "What did Momofuku Ando like to do?",
                textTranslation: "安藤百福は何をするのが好きでしたか？",
                choices: [
                    { id: 1, text: "Think about new ideas.", translation: "新しいアイデアについて考えること。", isCorrect: true, highlight: "liked to think about new ideas" },
                    { id: 2, text: "Play with radios.", translation: "ラジオで遊ぶこと。", isCorrect: false },
                    { id: 3, text: "Wait in long lines.", translation: "長い列で待つこと。", isCorrect: false },
                    { id: 4, text: "Cook in a big restaurant.", translation: "大きなレストランで料理すること。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落。「liked to」（〜するのが好きだった）という表現を探します。「think about」（〜について考える）が続く部分を見つけましょう。",
                    targetSentenceId: 11,
                    highlightWord: "liked to think about new ideas",
                    highlightWordSentenceId: 11
                },
                keywords: ["what", "like", "do"],
                keywordExplanations: {
                    "like": "好き。",
                    "do": "する。"
                },
                keywordMatches: [
                    { sentenceId: 11, text: "He liked to think about new ideas", keyword: "liked" }
                ],
                choiceAdvice: "1: アイデア？ 2: ラジオ？ 3: 待つこと？ 4: レストラン？",
                logic: [
                    { type: "text", content: "本文第2段落: \"He liked to think about new ideas...\"" },
                    { type: "text", content: "結論: 新しいアイデアについて考えるのが好きだった。" },
                    { type: "conclusion", content: "正解: 1" }
                ]
            },
            {
                id: 2,
                text: "What happened in 1958?",
                textTranslation: "1958年に何が起きましたか？",
                choices: [
                    { id: 1, text: "Ando was born in Osaka.", translation: "安藤は大阪で生まれた。", isCorrect: false },
                    { id: 2, text: "The company name was changed.", translation: "会社名が変更された。", isCorrect: true, highlight: "company name was changed" },
                    { id: 3, text: "Ando started a new job.", translation: "安藤は新しい仕事を始めた。", isCorrect: false },
                    { id: 4, text: "The war ended in Japan.", translation: "日本で戦争が終わった。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 2,
                    description: "第2段落の最後。「1958」という年号を探します。「company name」（会社名）がどうなったかを確認しましょう。",
                    targetSentenceId: 13,
                    highlightWord: "In 1958, the company name was changed",
                    highlightWordSentenceId: 13
                },
                keywords: ["what", "happened", "1958"],
                keywordExplanations: {
                    "happened": "起きた。",
                    "1958": "年号。"
                },
                keywordMatches: [
                    { sentenceId: 13, text: "In 1958, the company name was changed to Nissin", keyword: "1958" },
                    { sentenceId: 19, text: "Ando made the first instant noodles in 1958", keyword: "1958" },
                    { sentenceId: 21, text: "company sold the new noodles ... in 1958", keyword: "1958" }
                ],
                choiceAdvice: "1: 大阪で生まれた？ 2: 社名変更？ 3: 新しい仕事？ 4: 終戦？",
                logic: [
                    { type: "text", content: "選択肢2: 本文第2段落 \"In 1958, the company name was changed to Nissin.\"" },
                    { type: "text", content: "選択肢1: 生まれたのは1910年。" },
                    { type: "text", content: "選択肢3: インスタント麺を作ったのも1958年だが、選択肢に「社名変更」があるため、第2段落の内容と照らし合わせる。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            },
            {
                id: 3,
                text: "What gave Ando the idea for instant noodles?",
                textTranslation: "何が安藤にインスタントラーメンのアイデアを与えましたか？",
                choices: [
                    { id: 1, text: "His family.", translation: "彼の家族。", isCorrect: false },
                    { id: 2, text: "A convenience store.", translation: "コンビニエンスストア。", isCorrect: false },
                    { id: 3, text: "People waiting for soup.", translation: "スープを待っている人々。", isCorrect: true, highlight: "saw a long line of people ... This gave him an idea" },
                    { id: 4, text: "A book about cooking.", translation: "料理についての本。", isCorrect: false }
                ],
                hint: {
                    paragraphId: 3,
                    description: "第3段落。「gave him an idea」（彼にアイデアを与えた）の直前を見ます。彼が見たのは「long line of people」（人々の長い列）で、彼らは何をしていたかを確認します。",
                    targetSentenceId: 16,
                    highlightWord: "They were waiting in the cold to eat ... This gave him an idea",
                    highlightWordSentenceId: 16
                },
                keywords: ["what", "gave", "idea"],
                keywordExplanations: {
                    "gave": "与えた。",
                    "idea": "アイデア。"
                },
                keywordMatches: [
                    { sentenceId: 18, text: "This gave him an idea", keyword: "idea" }
                ],
                choiceAdvice: "1: 家族？ 2: コンビニ？ 3: 待っている人々？ 4: 本？",
                logic: [
                    { type: "text", content: "本文第3段落: \"He saw a long line of people. They were waiting... This gave him an idea.\"" },
                    { type: "text", content: "結論: スープを待つ行列を見たことがきっかけ。" },
                    { type: "conclusion", content: "正解: 3" }
                ]
            },
            {
                id: 4,
                text: "The first instant noodles",
                textTranslation: "最初のインスタントラーメンは...",
                choices: [
                    { id: 1, text: "were called \"Cup Noodles.\"", translation: "「カップヌードル」と呼ばれた。", isCorrect: false },
                    { id: 2, text: "took one hour to cook.", translation: "調理に1時間かかった。", isCorrect: false },
                    { id: 3, text: "were not very popular.", translation: "あまり人気がなかった。", isCorrect: false },
                    { id: 4, text: "were sold out in many stores.", translation: "多くの店で売り切れた。", isCorrect: true, highlight: "were sold out in many stores" }
                ],
                hint: {
                    paragraphId: 4,
                    description: "第4段落。最初のヌードル（Chicken Ramen）について書かれています。「sold out」（売り切れた）という表現を探しましょう。",
                    targetSentenceId: 22,
                    highlightWord: "were sold out in many stores",
                    highlightWordSentenceId: 22
                },
                keywords: ["first", "noodles"],
                keywordExplanations: {
                    "first": "最初の。"
                },
                keywordMatches: [
                    { sentenceId: 19, text: "Ando made the first instant noodles", keyword: "first" }
                ],
                choiceAdvice: "1: カップヌードル？ 2: 1時間かかる？ 3: 人気がない？ 4: 売り切れた？",
                logic: [
                    { type: "text", content: "本文第4段落: \"The noodles were very popular, and they were sold out in many stores.\"" },
                    { type: "text", content: "結論: 多くの店で売り切れた。" },
                    { type: "conclusion", content: "正解: 4" }
                ]
            },
            {
                id: 5,
                text: "What is this story about?",
                textTranslation: "この物語は何についてですか？",
                choices: [
                    { id: 1, text: "The history of convenience stores.", translation: "コンビニエンスストアの歴史。", isCorrect: false },
                    { id: 2, text: "A man who made special noodles.", translation: "特別な麺を作った男性。", isCorrect: true, highlight: "businessman named Momofuku Ando made the first instant noodles" },
                    { id: 3, text: "The best restaurant in Osaka.", translation: "大阪で一番のレストラン。", isCorrect: false },
                    { id: 4, text: "A famous soup recipe.", translation: "有名なスープのレシピ。", isCorrect: false }
                ],
                hint: {
                    paragraphId: null,
                    description: "タイトル「Momofuku Ando」や、全体を通して彼が「first instant noodles」（最初のインスタントラーメン）を作ったことについて書かれています。",
                    targetSentenceId: 8,
                    highlightWord: "businessman named Momofuku Ando made the first instant noodles",
                    highlightWordSentenceId: 8
                },
                keywords: ["about"],
                keywordExplanations: {
                    "about": "〜について。"
                },
                keywordMatches: [],
                choiceAdvice: "1: コンビニの歴史？ 2: 麺を作った男性？ 3: レストラン？ 4: レシピ？",
                logic: [
                    { type: "text", content: "第2段落: \"A businessman named Momofuku Ando made the first instant noodles.\"" },
                    { type: "text", content: "結論: インスタントラーメンを作った安藤百福についての伝記。" },
                    { type: "conclusion", content: "正解: 2" }
                ]
            }
        ],
        summaryForInstructors: {
            title: "Momofuku Ando",
            intro: "インスタントラーメンの発明者、安藤百福の伝記です。ランドと同様に「待ち時間をなくす発明」をテーマにしています。",
            points: [
                { label: "1. Introduction (導入)", text: "昔は麺を食べるのに店で並んだり調理に時間がかかりましたが、発明により「すぐに」食べられるようになりました。" },
                { label: "2. Background (背景)", text: "新しいアイデアを考えるのが好きでした。1948年に会社を設立し、1958年に社名を「日清」に変更しました。" },
                { label: "3. Invention (発明)", text: "寒い中、ラーメン屋台に並ぶ人々を見たことがきっかけで、「家で簡単に食べられないか」と考え、1958年にチキンラーメンを発明しました。" },
                { label: "4. Success (成功)", text: "発売と同時に多くの店で売り切れになり、日本中に広まりました。" }
            ]
        }
    }
];
