// Left-Brained Thinker - 問題9 データ
// このファイルを readingData.js に追加するためのデータ

const leftBrainedThinkerData = {
    id: "grade-pre1-original-left-brained",
    grade: "準1級",
    title: "The Myth of the 'Left-Brained' Thinker",
    subTitle: "問題9",
    genre: "心理学 / 神経科学",
    similarProblems: {
        exam: "2024年度 第1回",
        title: "Wolf Packs"
    },
    isOriginal: true,
    images: {
        content: "https://placehold.co/600x400?text=Left-Brained+Myth",
        question: "https://placehold.co/600x400?text=Question+Image"
    },
    content: [
        {
            paragraphId: 1,
            sentences: [
                {
                    id: 1,
                    text: "There is a pervasive belief in popular psychology that people are either \"left-brained\" (logical and analytical) or \"right-brained\" (creative and artistic), and that this dominant hemisphere dictates their personality and skills.",
                    translation: "大衆心理学では、人間は「左脳型」（論理的・分析的）か「右脳型」（創造的・芸術的）のどちらかであり、この優位な半球が性格やスキルを決定するという、広く浸透した信念がある。",
                    grammarAnalysis: {
                        mainVerbs: ["is"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(There)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>a pervasive belief (in popular psychology)</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>[that <span class='chunk S2-group'><span class='text'>people</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>either \"left-brained\" or \"right-brained\"</span><span class='tag'>C'</span></span>]</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(There)</span> <span class='t-V'>ある</span> <span class='t-S'>広く浸透した信念が(大衆心理学には)</span> <span class='t-M'>[that <span class='t-S2'>人々は</span> <span class='t-V2'>である</span> <span class='t-C2'>「左脳型」か「右脳型」のどちらか</span>]</span>。",
                        naturalTranslation: "大衆心理学では、人間は「左脳型」（論理的・分析的）か「右脳型」（創造的・芸術的）のどちらかであり、この優位な半球が性格やスキルを決定するという、広く浸透した信念がある。",
                        vocabulary: [
                            { word: "pervasive", meaning: "広く浸透した、蔓延している" },
                            { word: "hemisphere", meaning: "（脳の）半球" },
                            { word: "dictates", meaning: "決定する、指示する" }
                        ],
                        grammarNotes: [
                            { phrase: "There is ... belief", explanation: "<b>There構文</b>: 存在を表す。「〜がある」。" },
                            { phrase: "that people are either...", explanation: "<b>同格のthat節構造</b>:<ul><li><b>S'</b>: people</li><li><b>V'</b>: are</li><li><b>C'</b>: either \"left-brained\" or \"right-brained\"</li></ul>beliefの内容を説明する節。" },
                            { phrase: "and that this dominant hemisphere dictates", explanation: "<b>並列のthat節</b>: 2つ目の同格節。「そしてこの優位な半球が〜を決定する」。" }
                        ]
                    }
                },
                {
                    id: 2,
                    text: "It turns out, however, that this binary classification is largely a myth.",
                    translation: "しかしながら、この二分法的分類は大部分において神話であることが判明している。",
                    grammarAnalysis: {
                        mainVerbs: ["turns out"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>turns out</span><span class='tag'>V</span></span>, <span class='chunk M-group'><span class='text'>(however)</span><span class='tag'>M</span></span>, <span class='chunk O-group'><span class='text'>that <span class='chunk S2-group'><span class='text'>this binary classification</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>largely a myth</span><span class='tag'>C'</span></span></span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>It</span> <span class='t-V'>判明する</span>、<span class='t-M'>(しかしながら)</span>、<span class='t-O'>that [<span class='t-S2'>この二分法的分類は</span> <span class='t-V2'>である</span> <span class='t-C2'>大部分において神話</span>]</span>。",
                        naturalTranslation: "しかしながら、この二分法的分類は大部分において神話であることが判明している。",
                        vocabulary: [
                            { word: "binary", meaning: "二分法的な、二進法の" },
                            { word: "classification", meaning: "分類" },
                            { word: "myth", meaning: "神話、作り話" }
                        ],
                        grammarNotes: [
                            { phrase: "It turns out that...", explanation: "<b>形式主語構文</b>: Itは仮主語で、that節が真主語。「〜であることが判明する」。" }
                        ]
                    }
                },
                {
                    id: 3,
                    text: "It appears to have originated from misinterpretations of Nobel Prize-winning research in the 1960s on patients who had undergone split-brain surgery to treat epilepsy.",
                    translation: "それは、てんかんを治療するために分離脳手術を受けた患者に関する1960年代のノーベル賞受賞研究の誤解から生じたようである。",
                    grammarAnalysis: {
                        mainVerbs: ["appears"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>appears</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to have originated (from misinterpretations of Nobel Prize-winning research)</span><span class='tag'>C</span></span>.",
                        translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>〜のようだ</span> <span class='t-C'>生じた(ノーベル賞受賞研究の誤解から)</span>。",
                        naturalTranslation: "それは、てんかんを治療するために分離脳手術を受けた患者に関する1960年代のノーベル賞受賞研究の誤解から生じたようである。",
                        vocabulary: [
                            { word: "originated from", meaning: "〜から生じた、〜に由来する" },
                            { word: "misinterpretations", meaning: "誤解、誤った解釈" },
                            { word: "split-brain surgery", meaning: "分離脳手術" },
                            { word: "epilepsy", meaning: "てんかん" }
                        ],
                        grammarNotes: [
                            { phrase: "appears to have originated", explanation: "<b>完了不定詞</b>: 過去の出来事を推測。「〜したようだ」。" },
                            { phrase: "who had undergone", explanation: "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: who (= patients)</li><li><b>V'</b>: had undergone（過去完了）</li><li><b>O'</b>: split-brain surgery</li></ul>patientsを修飾。" }
                        ]
                    }
                },
                {
                    id: 4,
                    text: "In these extreme cases where the connection between the two hemispheres was severed, the sides did function independently.",
                    translation: "両半球間の接続が切断されたこれらの極端な症例では、左右の脳は確かに独立して機能していた。",
                    grammarAnalysis: {
                        mainVerbs: ["did function"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(In these extreme cases (where <span class='chunk S2-group'><span class='text'>the connection</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>was severed</span><span class='tag'>V'</span></span>))</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the sides</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>did function</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(independently)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(これらの極端な症例で (where <span class='t-S2'>接続が</span> <span class='t-V2'>切断された</span>))</span>、<span class='t-S'>左右の脳は</span> <span class='t-V'>確かに機能していた</span> <span class='t-M'>(独立して)</span>。",
                        naturalTranslation: "両半球間の接続が切断されたこれらの極端な症例では、左右の脳は確かに独立して機能していた。",
                        vocabulary: [
                            { word: "severed", meaning: "切断された" },
                            { word: "independently", meaning: "独立して" }
                        ],
                        grammarNotes: [
                            { phrase: "did function", explanation: "<b>強調のdo</b>: 動詞を強調。「確かに機能した」。" },
                            { phrase: "where the connection was severed", explanation: "<b>関係副詞節構造</b>:<ul><li><b>S'</b>: the connection between the two hemispheres</li><li><b>V'</b>: was severed（受動態）</li></ul>casesを修飾。" }
                        ]
                    }
                },
                {
                    id: 5,
                    text: "However, for the vast majority of people with intact brains, the two hemispheres are constantly communicating and working in tandem.",
                    translation: "しかし、脳が無傷の大多数の人々にとっては、両半球は常にコミュニケーションを取り合い、連携して働いている。",
                    grammarAnalysis: {
                        mainVerbs: ["are communicating", "working"],
                        structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(for the vast majority of people with intact brains)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the two hemispheres</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are constantly communicating and working</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(in tandem)</span><span class='tag'>M</span></span>.",
                        translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-M'>(脳が無傷の大多数の人々にとっては)</span>、<span class='t-S'>両半球は</span> <span class='t-V'>常にコミュニケーションを取り合い働いている</span> <span class='t-M'>(連携して)</span>。",
                        naturalTranslation: "しかし、脳が無傷の大多数の人々にとっては、両半球は常にコミュニケーションを取り合い、連携して働いている。",
                        vocabulary: [
                            { word: "intact", meaning: "無傷の、損なわれていない" },
                            { word: "in tandem", meaning: "連携して、協力して" }
                        ],
                        grammarNotes: [
                            { phrase: "are constantly communicating and working", explanation: "<b>現在進行形</b>: 継続的な動作。「常に〜している」。" }
                        ]
                    }
                },
                {
                    id: 6,
                    text: "Research has now established that brain scans show no evidence of a dominant side; even during creative tasks, the \"logical\" left brain is active, and vice versa.",
                    translation: "研究は今や、脳スキャンが優位な側の証拠を示さないことを立証している。創造的な課題の最中でさえ、「論理的な」左脳は活動しており、その逆もまた然りである。",
                    grammarAnalysis: {
                        mainVerbs: ["has established", "show", "is"],
                        structureHtml: "<span class='chunk S-group'><span class='text'>Research</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has now established</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that <span class='chunk S2-group'><span class='text'>brain scans</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>show</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>no evidence</span><span class='tag'>O'</span></span></span><span class='tag'>O</span></span>.",
                        translationHtml: "<span class='t-S'>研究は</span> <span class='t-V'>今や立証した</span> <span class='t-O'>that [<span class='t-S2'>脳スキャンは</span> <span class='t-V2'>示さない</span> <span class='t-O2'>証拠を</span>]</span>。",
                        naturalTranslation: "研究は今や、脳スキャンが優位な側の証拠を示さないことを立証している。創造的な課題の最中でさえ、「論理的な」左脳は活動しており、その逆もまた然りである。",
                        vocabulary: [
                            { word: "established", meaning: "立証した、確立した" },
                            { word: "dominant", meaning: "優位な、支配的な" },
                            { word: "vice versa", meaning: "その逆もまた然り" }
                        ],
                        grammarNotes: [
                            { phrase: "has now established", explanation: "<b>現在完了</b>: 完了・結果。「今や〜した」。" },
                            { phrase: "that brain scans show", explanation: "<b>that節構造</b>:<ul><li><b>S'</b>: brain scans</li><li><b>V'</b>: show</li><li><b>O'</b>: no evidence of a dominant side</li></ul>establishedの目的語。" }
                        ]
                    }
                }
            ]
        }
    ]
};

module.exports = leftBrainedThinkerData;
