// Designing for Neurodiversity - Paragraph 3 (Sentences 9-12)

const paragraph3 = {
    paragraphId: 3,
    sentences: [
        {
            id: 9,
            text: "Unlike traditional approaches that aim to create a uniform environment for the average employee, neurodiverse design rejects the idea of a \"standard\" user.",
            translation: "平均的な従業員のために均一な環境を作ることを目指す従来のアプローチとは異なり、ニューロダイバースデザインは「標準的な」ユーザーという概念を拒否する。",
            grammarAnalysis: {
                mainVerbs: ["rejects"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(Unlike traditional approaches (that <span class='chunk S2-group'><span class='text'>_</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>aim to create</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>a uniform environment</span><span class='tag'>O'</span></span>))</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>neurodiverse design</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>rejects</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the idea of a \"standard\" user</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-M'>(従来のアプローチとは異なり (that <span class='t-S2'>_が</span> <span class='t-V2'>作ることを目指す</span> <span class='t-O2'>均一な環境を</span>))</span>、<span class='t-S'>ニューロダイバースデザインは</span> <span class='t-V'>拒否する</span> <span class='t-O'>「標準的な」ユーザーという概念を</span>。",
                naturalTranslation: "平均的な従業員のために均一な環境を作ることを目指す従来のアプローチとは異なり、ニューロダイバースデザインは「標準的な」ユーザーという概念を拒否する。",
                vocabulary: [
                    { word: "uniform", meaning: "均一な" },
                    { word: "rejects", meaning: "拒否する" }
                ],
                grammarNotes: [
                    { phrase: "Unlike traditional approaches", explanation: "<b>Unlike</b>: 「〜とは異なり」。対比を表す前置詞。" },
                    { phrase: "that aim to create a uniform environment", explanation: "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: that (= approaches)</li><li><b>V'</b>: aim to create</li><li><b>O'</b>: a uniform environment</li></ul>approachesを修飾。" }
                ]
            }
        },
        {
            id: 10,
            text: "Advocates reason that architects can create better workspaces by recognizing that human brains process information differently.",
            translation: "支持者たちは、人間の脳が情報を異なる方法で処理することを認識することで、建築家はより良いワークスペースを作れると論じている。",
            grammarAnalysis: {
                mainVerbs: ["reason"],
                structureHtml: "<span class='chunk S-group'><span class='text'>Advocates</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>reason</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that <span class='chunk S2-group'><span class='text'>architects</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>can create</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>better workspaces</span><span class='tag'>O'</span></span> (by recognizing that...)</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>支持者たちは</span> <span class='t-V'>論じている</span> <span class='t-O'>that [<span class='t-S2'>建築家は</span> <span class='t-V2'>作れる</span> <span class='t-O2'>より良いワークスペースを</span> (〜を認識することで)]</span>。",
                naturalTranslation: "支持者たちは、人間の脳が情報を異なる方法で処理することを認識することで、建築家はより良いワークスペースを作れると論じている。",
                vocabulary: [
                    { word: "reason", meaning: "論じる、推論する" },
                    { word: "process", meaning: "処理する" }
                ],
                grammarNotes: [
                    { phrase: "reason that", explanation: "<b>reason that</b>: 「〜と論じる/推論する」。" },
                    { phrase: "by recognizing that human brains process", explanation: "<b>by + 動名詞</b>: 手段を表す。「〜することによって」。" }
                ]
            }
        },
        {
            id: 11,
            text: "They argue that simply forcing neurodivergent employees to adapt to existing structures is ineffective.",
            translation: "彼らは、神経発達症の従業員に既存の構造に適応することを単に強制することは効果がないと主張している。",
            grammarAnalysis: {
                mainVerbs: ["argue"],
                structureHtml: "<span class='chunk S-group'><span class='text'>They</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>argue</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that <span class='chunk S2-group'><span class='text'>simply forcing neurodivergent employees to adapt...</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>ineffective</span><span class='tag'>C'</span></span></span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>彼らは</span> <span class='t-V'>主張している</span> <span class='t-O'>that [<span class='t-S2'>単に〜することを強制することは</span> <span class='t-V2'>である</span> <span class='t-C2'>効果がない</span>]</span>。",
                naturalTranslation: "彼らは、神経発達症の従業員に既存の構造に適応することを単に強制することは効果がないと主張している。",
                vocabulary: [
                    { word: "forcing ... to adapt", meaning: "〜に適応することを強制する" },
                    { word: "ineffective", meaning: "効果がない" }
                ],
                grammarNotes: [
                    { phrase: "simply forcing neurodivergent employees to adapt", explanation: "<b>動名詞</b>: that節内の主語。force O to doの構造。" }
                ]
            }
        },
        {
            id: 12,
            text: "Instead, they propose a fundamental shift in design thinking: creating flexible environments that offer a variety of sensory experiences, allowing users to choose the setting that best suits their current needs and working style.",
            translation: "代わりに、彼らはデザイン思考における根本的な転換を提案している：多様な感覚体験を提供する柔軟な環境を作り、ユーザーが現在のニーズと作業スタイルに最も適した設定を選択できるようにすることである。",
            grammarAnalysis: {
                mainVerbs: ["propose"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(Instead)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>propose</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a fundamental shift in design thinking</span><span class='tag'>O</span></span>: <span class='chunk M-group'><span class='text'>(creating flexible environments..., allowing users to choose...)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-M'>(代わりに)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>提案している</span> <span class='t-O'>デザイン思考における根本的な転換を</span>：<span class='t-M'>(柔軟な環境を作り...、ユーザーが選択できるようにする)</span>。",
                naturalTranslation: "代わりに、彼らはデザイン思考における根本的な転換を提案している：多様な感覚体験を提供する柔軟な環境を作り、ユーザーが現在のニーズと作業スタイルに最も適した設定を選択できるようにすることである。",
                vocabulary: [
                    { word: "fundamental shift", meaning: "根本的な転換" },
                    { word: "sensory experiences", meaning: "感覚体験" }
                ],
                grammarNotes: [
                    { phrase: ": creating flexible environments", explanation: "<b>コロン</b>: 前述の内容を具体的に説明。「すなわち〜」。" },
                    { phrase: "that offer a variety of sensory experiences", explanation: "<b>関係代名詞節</b>: environmentsを修飾。" },
                    { phrase: "allowing users to choose", explanation: "<b>分詞構文</b>: 結果を表す。「その結果、ユーザーが〜できる」。" },
                    { phrase: "that best suits their current needs", explanation: "<b>関係代名詞節</b>: the settingを修飾。" }
                ]
            }
        }
    ]
};

module.exports = paragraph3;
