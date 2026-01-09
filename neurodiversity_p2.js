// Designing for Neurodiversity - Paragraph 2 (Sentences 5-8)

const paragraph2 = {
    paragraphId: 2,
    sentences: [
        {
            id: 5,
            text: "The most common office design trend that neurodiverse design seeks to change is the open-plan office.",
            translation: "ニューロダイバースデザインが変えようとしている最も一般的なオフィスデザインのトレンドは、オープンプランオフィスである。",
            grammarAnalysis: {
                mainVerbs: ["is"],
                structureHtml: "<span class='chunk S-group'><span class='text'>The most common office design trend (that <span class='chunk S2-group'><span class='text'>neurodiverse design</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>seeks to change</span><span class='tag'>V'</span></span>)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the open-plan office</span><span class='tag'>C</span></span>.",
                translationHtml: "<span class='t-S'>最も一般的なオフィスデザインのトレンドは (that <span class='t-S2'>ニューロダイバースデザインが</span> <span class='t-V2'>変えようとしている</span>)</span> <span class='t-V'>である</span> <span class='t-C'>オープンプランオフィス</span>。",
                naturalTranslation: "ニューロダイバースデザインが変えようとしている最も一般的なオフィスデザインのトレンドは、オープンプランオフィスである。",
                vocabulary: [
                    { word: "seeks to", meaning: "〜しようとする" }
                ],
                grammarNotes: [
                    { phrase: "that neurodiverse design seeks to change", explanation: "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: neurodiverse design</li><li><b>V'</b>: seeks to change</li><li><b>O'</b>: that (= trend)</li></ul>trendを修飾。目的格の関係代名詞。" }
                ]
            }
        },
        {
            id: 6,
            text: "Originally promoted as a way to encourage collaboration and transparency, this layout is based on the sensory tolerance of the \"neurotypical\" or average person.",
            translation: "もともとコラボレーションと透明性を促進する方法として推進されていたこのレイアウトは、「定型発達」または平均的な人の感覚的許容度に基づいている。",
            grammarAnalysis: {
                mainVerbs: ["is based"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(Originally promoted as a way to encourage collaboration and transparency)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this layout</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is based</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(on the sensory tolerance of the \"neurotypical\" or average person)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-M'>(もともとコラボレーションと透明性を促進する方法として推進されていた)</span>、<span class='t-S'>このレイアウトは</span> <span class='t-V'>基づいている</span> <span class='t-M'>(「定型発達」または平均的な人の感覚的許容度に)</span>。",
                naturalTranslation: "もともとコラボレーションと透明性を促進する方法として推進されていたこのレイアウトは、「定型発達」または平均的な人の感覚的許容度に基づいている。",
                vocabulary: [
                    { word: "transparency", meaning: "透明性" },
                    { word: "sensory tolerance", meaning: "感覚的許容度" },
                    { word: "neurotypical", meaning: "定型発達の（神経学的に典型的な）" }
                ],
                grammarNotes: [
                    { phrase: "Originally promoted as a way to encourage", explanation: "<b>過去分詞による分詞構文</b>: 理由または背景を表す。「もともと〜として推進されていたので」。" },
                    { phrase: "is based on", explanation: "<b>be based on</b>: 「〜に基づいている」。" }
                ]
            }
        },
        {
            id: 7,
            text: "For the majority of workers, the background hum of conversation and bright fluorescent lighting may be manageable annoyances.",
            translation: "大多数の労働者にとって、会話のバックグラウンドノイズや明るい蛍光灯は、対処可能な煩わしさかもしれない。",
            grammarAnalysis: {
                mainVerbs: ["may be"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(For the majority of workers)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the background hum of conversation and bright fluorescent lighting</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>may be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>manageable annoyances</span><span class='tag'>C</span></span>.",
                translationHtml: "<span class='t-M'>(大多数の労働者にとって)</span>、<span class='t-S'>会話のバックグラウンドノイズや明るい蛍光灯は</span> <span class='t-V'>かもしれない</span> <span class='t-C'>対処可能な煩わしさ</span>。",
                naturalTranslation: "大多数の労働者にとって、会話のバックグラウンドノイズや明るい蛍光灯は、対処可能な煩わしさかもしれない。",
                vocabulary: [
                    { word: "background hum", meaning: "バックグラウンドノイズ、ざわめき" },
                    { word: "fluorescent lighting", meaning: "蛍光灯" },
                    { word: "manageable", meaning: "対処可能な" },
                    { word: "annoyances", meaning: "煩わしさ、迷惑なもの" }
                ],
                grammarNotes: [
                    { phrase: "may be", explanation: "<b>助動詞may</b>: 推量。「〜かもしれない」。" }
                ]
            }
        },
        {
            id: 8,
            text: "However, for individuals who are hypersensitive to sensory stimuli—a common trait among neurodivergent people—these elements can be overwhelming, leading to severe anxiety and reduced productivity.",
            translation: "しかし、感覚刺激に過敏な人々—神経発達症の人々に共通する特性—にとって、これらの要素は圧倒的なものとなり、深刻な不安や生産性の低下を招く可能性がある。",
            grammarAnalysis: {
                mainVerbs: ["can be"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(for individuals (who <span class='chunk S2-group'><span class='text'>_</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are hypersensitive</span><span class='tag'>V'</span></span> to sensory stimuli)—a common trait among neurodivergent people—)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>these elements</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can be</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>overwhelming</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(leading to severe anxiety and reduced productivity)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-M'>(感覚刺激に過敏な人々にとって (who <span class='t-S2'>_が</span> <span class='t-V2'>過敏である</span>)ー共通する特性ー)</span>、<span class='t-S'>これらの要素は</span> <span class='t-V'>なりうる</span> <span class='t-C'>圧倒的なものに</span>、<span class='t-M'>(深刻な不安を招きながら)</span>。",
                naturalTranslation: "しかし、感覚刺激に過敏な人々—神経発達症の人々に共通する特性—にとって、これらの要素は圧倒的なものとなり、深刻な不安や生産性の低下を招く可能性がある。",
                vocabulary: [
                    { word: "hypersensitive", meaning: "過敏な" },
                    { word: "sensory stimuli", meaning: "感覚刺激" },
                    { word: "neurodivergent", meaning: "神経発達症の、ニューロダイバージェント" },
                    { word: "overwhelming", meaning: "圧倒的な" }
                ],
                grammarNotes: [
                    { phrase: "who are hypersensitive to sensory stimuli", explanation: "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: who (= individuals)</li><li><b>V'</b>: are hypersensitive</li></ul>individualsを修飾。" },
                    { phrase: "—a common trait among neurodivergent people—", explanation: "<b>ダッシュによる挿入</b>: 補足説明。「神経発達症の人々に共通する特性」。読み飛ばしても文意は通る。" },
                    { phrase: "leading to severe anxiety", explanation: "<b>分詞構文</b>: 結果を表す。「その結果〜を招く」。" }
                ]
            }
        }
    ]
};

module.exports = paragraph2;
