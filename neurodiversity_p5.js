// Designing for Neurodiversity - Paragraph 5 (Sentences 17-20)

const paragraph5 = {
    paragraphId: 5,
    sentences: [
        {
            id: 17,
            text: "The impact of neurodiverse design extends beyond just helping a specific group of employees; it is improving the work environment for everyone.",
            translation: "ニューロダイバースデザインの影響は、特定の従業員グループを助けることだけにとどまらない。それはすべての人の労働環境を改善している。",
            grammarAnalysis: {
                mainVerbs: ["extends", "is improving"],
                structureHtml: "<span class='chunk S-group'><span class='text'>The impact of neurodiverse design</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>extends</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(beyond just helping a specific group of employees)</span><span class='tag'>M</span></span>; <span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is improving</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the work environment for everyone</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>ニューロダイバースデザインの影響は</span> <span class='t-V'>及ぶ</span> <span class='t-M'>(特定の従業員グループを助けることを超えて)</span>；<span class='t-S'>それは</span> <span class='t-V'>改善している</span> <span class='t-O'>すべての人の労働環境を</span>。",
                naturalTranslation: "ニューロダイバースデザインの影響は、特定の従業員グループを助けることだけにとどまらない。それはすべての人の労働環境を改善している。",
                vocabulary: [
                    { word: "extends beyond", meaning: "〜を超えて及ぶ" }
                ],
                grammarNotes: [
                    { phrase: "extends beyond just helping", explanation: "<b>前置詞 + 動名詞</b>: beyondの目的語。" },
                    { phrase: "; it is improving", explanation: "<b>セミコロン</b>: 2つの関連する文を接続。前文の具体的説明。" }
                ]
            }
        },
        {
            id: 18,
            text: "Although the movement began as a way to address the specific difficulties faced by neurodivergent individuals, its principles have proven universally beneficial.",
            translation: "この運動は神経発達症の個人が直面する特定の困難に対処する方法として始まったが、その原則は普遍的に有益であることが証明されている。",
            grammarAnalysis: {
                mainVerbs: ["have proven"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(Although <span class='chunk S2-group'><span class='text'>the movement</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>began</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>as a way to address...</span><span class='tag'>M'</span></span>)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>its principles</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have proven</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>universally beneficial</span><span class='tag'>C</span></span>.",
                translationHtml: "<span class='t-M'>(Although <span class='t-S2'>この運動が</span> <span class='t-V2'>始まった</span> <span class='t-M2'>〜する方法として</span>が)</span>、<span class='t-S'>その原則は</span> <span class='t-V'>証明されている</span> <span class='t-C'>普遍的に有益である</span>。",
                naturalTranslation: "この運動は神経発達症の個人が直面する特定の困難に対処する方法として始まったが、その原則は普遍的に有益であることが証明されている。",
                vocabulary: [
                    { word: "universally beneficial", meaning: "普遍的に有益な" },
                    { word: "have proven", meaning: "〜であることが証明された" }
                ],
                grammarNotes: [
                    { phrase: "Although the movement began", explanation: "<b>譲歩のalthough節構造</b>:<ul><li><b>S'</b>: the movement</li><li><b>V'</b>: began</li><li><b>M'</b>: as a way to address...</li></ul>「〜したが」。" },
                    { phrase: "faced by neurodivergent individuals", explanation: "<b>過去分詞</b>: difficultiesを修飾。受動態の形容詞句。" },
                    { phrase: "have proven universally beneficial", explanation: "<b>prove + 形容詞</b>: 「〜であることが証明される」。SVCの構造。" }
                ]
            }
        },
        {
            id: 19,
            text: "By prioritizing flexibility, comfort, and individual choice, this approach empowers all workers to control their environment.",
            translation: "柔軟性、快適さ、個人の選択を優先することで、このアプローチはすべての労働者が自分の環境をコントロールできるようにしている。",
            grammarAnalysis: {
                mainVerbs: ["empowers"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(By prioritizing flexibility, comfort, and individual choice)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>this approach</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>empowers</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>all workers</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>to control their environment</span><span class='tag'>C</span></span>.",
                translationHtml: "<span class='t-M'>(柔軟性、快適さ、個人の選択を優先することで)</span>、<span class='t-S'>このアプローチは</span> <span class='t-V'>力を与える</span> <span class='t-O'>すべての労働者に</span> <span class='t-C'>環境をコントロールする</span>。",
                naturalTranslation: "柔軟性、快適さ、個人の選択を優先することで、このアプローチはすべての労働者が自分の環境をコントロールできるようにしている。",
                vocabulary: [
                    { word: "prioritizing", meaning: "優先する" },
                    { word: "empowers", meaning: "力を与える、可能にする" }
                ],
                grammarNotes: [
                    { phrase: "By prioritizing flexibility, comfort, and individual choice", explanation: "<b>By + 動名詞</b>: 手段を表す。「〜することで」。" },
                    { phrase: "empowers all workers to control", explanation: "<b>empower O to do</b>: 「Oが〜できるようにする」。SVOC構造。" }
                ]
            }
        },
        {
            id: 20,
            text: "As a result, companies are discovering that spaces designed with neurodiversity in mind often lead to higher overall satisfaction and productivity across the entire workforce.",
            translation: "その結果、企業は、ニューロダイバーシティを念頭に置いて設計された空間が、全従業員にわたってより高い総合的な満足度と生産性につながることが多いことを発見している。",
            grammarAnalysis: {
                mainVerbs: ["are discovering"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(As a result)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>are discovering</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that <span class='chunk S2-group'><span class='text'>spaces (designed with neurodiversity in mind)</span><span class='tag'>S'</span></span> <span class='chunk M2-group'><span class='text'>often</span><span class='tag'>M'</span></span> <span class='chunk V2-group'><span class='text'>lead to</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>higher overall satisfaction and productivity</span><span class='tag'>O'</span></span></span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-M'>(その結果)</span>、<span class='t-S'>企業は</span> <span class='t-V'>発見している</span> <span class='t-O'>that [<span class='t-S2'>空間は(ニューロダイバーシティを念頭に置いて設計された)</span> <span class='t-M2'>しばしば</span> <span class='t-V2'>つながる</span> <span class='t-O2'>より高い総合的な満足度と生産性に</span>]</span>。",
                naturalTranslation: "その結果、企業は、ニューロダイバーシティを念頭に置いて設計された空間が、全従業員にわたってより高い総合的な満足度と生産性につながることが多いことを発見している。",
                vocabulary: [
                    { word: "with neurodiversity in mind", meaning: "ニューロダイバーシティを念頭に置いて" },
                    { word: "lead to", meaning: "〜につながる" },
                    { word: "overall satisfaction", meaning: "総合的な満足度" }
                ],
                grammarNotes: [
                    { phrase: "As a result", explanation: "<b>As a result</b>: 「その結果」。結論を導く表現。" },
                    { phrase: "that spaces designed with neurodiversity in mind often lead to", explanation: "<b>that節構造</b>:<ul><li><b>S'</b>: spaces (designed with neurodiversity in mind)</li><li><b>V'</b>: lead to</li><li><b>O'</b>: higher overall satisfaction and productivity</li></ul>discoveringの目的語。" },
                    { phrase: "designed with neurodiversity in mind", explanation: "<b>過去分詞</b>: spacesを修飾する形容詞句。" }
                ]
            }
        }
    ]
};

module.exports = paragraph5;
