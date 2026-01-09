// Designing for Neurodiversity - Paragraph 4 (Sentences 13-16)

const paragraph4 = {
    paragraphId: 4,
    sentences: [
        {
            id: 13,
            text: "One example of putting these values into practice is the inclusion of \"quiet zones\" and \"focus rooms\" in new office builds.",
            translation: "これらの価値観を実践する一例は、新しいオフィスビルに「静寂ゾーン」や「集中ルーム」を設けることである。",
            grammarAnalysis: {
                mainVerbs: ["is"],
                structureHtml: "<span class='chunk S-group'><span class='text'>One example of putting these values into practice</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>the inclusion of \"quiet zones\" and \"focus rooms\" in new office builds</span><span class='tag'>C</span></span>.",
                translationHtml: "<span class='t-S'>これらの価値観を実践する一例は</span> <span class='t-V'>である</span> <span class='t-C'>新しいオフィスビルに「静寂ゾーン」や「集中ルーム」を設けること</span>。",
                naturalTranslation: "これらの価値観を実践する一例は、新しいオフィスビルに「静寂ゾーン」や「集中ルーム」を設けることである。",
                vocabulary: [
                    { word: "putting ... into practice", meaning: "〜を実践する" },
                    { word: "inclusion", meaning: "含めること、設置" },
                    { word: "quiet zones", meaning: "静寂ゾーン" }
                ],
                grammarNotes: [
                    { phrase: "One example of putting these values into practice", explanation: "<b>動名詞</b>: 前置詞ofの目的語。" }
                ]
            }
        },
        {
            id: 14,
            text: "Architects work closely with neurodivergent employees during the planning phase to identify specific triggers, such as flickering lights or patterned carpets that can cause visual stress.",
            translation: "建築家は、計画段階で神経発達症の従業員と緊密に協力し、ちらつく照明や視覚的ストレスを引き起こす可能性のある模様入りカーペットなど、特定のトリガーを特定する。",
            grammarAnalysis: {
                mainVerbs: ["work"],
                structureHtml: "<span class='chunk S-group'><span class='text'>Architects</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>work closely</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(with neurodivergent employees) (during the planning phase)</span><span class='tag'>M</span></span> <span class='chunk M-group'><span class='text'>(to identify specific triggers, such as flickering lights or patterned carpets (that <span class='chunk S2-group'><span class='text'>_</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>can cause</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>visual stress</span><span class='tag'>O'</span></span>))</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-S'>建築家は</span> <span class='t-V'>緊密に協力する</span> <span class='t-M'>(神経発達症の従業員と)(計画段階で)</span> <span class='t-M'>(特定のトリガーを特定するために、such as... (that <span class='t-S2'>_が</span> <span class='t-V2'>引き起こす可能性がある</span> <span class='t-O2'>視覚的ストレスを</span>))</span>。",
                naturalTranslation: "建築家は、計画段階で神経発達症の従業員と緊密に協力し、ちらつく照明や視覚的ストレスを引き起こす可能性のある模様入りカーペットなど、特定のトリガーを特定する。",
                vocabulary: [
                    { word: "triggers", meaning: "トリガー、引き金" },
                    { word: "flickering lights", meaning: "ちらつく照明" },
                    { word: "patterned carpets", meaning: "模様入りカーペット" },
                    { word: "visual stress", meaning: "視覚的ストレス" }
                ],
                grammarNotes: [
                    { phrase: "to identify specific triggers", explanation: "<b>不定詞（副詞的用法）</b>: 目的を表す。「〜するために」。" },
                    { phrase: "such as flickering lights or patterned carpets", explanation: "<b>such as</b>: 例示。「〜のような」。" },
                    { phrase: "that can cause visual stress", explanation: "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: that (= carpets)</li><li><b>V'</b>: can cause</li><li><b>O'</b>: visual stress</li></ul>patterned carpetsを修飾。" }
                ]
            }
        },
        {
            id: 15,
            text: "In response, they might install sound-absorbing materials, adjustable lighting systems, and private pods.",
            translation: "それに応じて、彼らは吸音材、調節可能な照明システム、プライベートポッドを設置するかもしれない。",
            grammarAnalysis: {
                mainVerbs: ["might install"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(In response)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>might install</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>sound-absorbing materials, adjustable lighting systems, and private pods</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-M'>(それに応じて)</span>、<span class='t-S'>彼らは</span> <span class='t-V'>設置するかもしれない</span> <span class='t-O'>吸音材、調節可能な照明システム、プライベートポッドを</span>。",
                naturalTranslation: "それに応じて、彼らは吸音材、調節可能な照明システム、プライベートポッドを設置するかもしれない。",
                vocabulary: [
                    { word: "sound-absorbing materials", meaning: "吸音材" },
                    { word: "adjustable", meaning: "調節可能な" },
                    { word: "private pods", meaning: "プライベートポッド（個室ブース）" }
                ],
                grammarNotes: [
                    { phrase: "In response", explanation: "<b>In response</b>: 「それに応じて」。前文の内容を受ける。" },
                    { phrase: "might install", explanation: "<b>助動詞might</b>: 可能性。「〜するかもしれない」。" }
                ]
            }
        },
        {
            id: 16,
            text: "In some cases, companies have used virtual reality simulations to allow staff to test and provide feedback on proposed layouts before construction begins, ensuring their unique perspectives are integrated into the final design.",
            translation: "場合によっては、企業は建設が始まる前にスタッフが提案されたレイアウトをテストし、フィードバックを提供できるようにするためにバーチャルリアリティシミュレーションを使用し、彼らのユニークな視点が最終設計に統合されることを確実にしている。",
            grammarAnalysis: {
                mainVerbs: ["have used"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(In some cases)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>companies</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>have used</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>virtual reality simulations</span><span class='tag'>O</span></span> <span class='chunk M-group'><span class='text'>(to allow staff to test and provide feedback..., ensuring their unique perspectives are integrated...)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-M'>(場合によっては)</span>、<span class='t-S'>企業は</span> <span class='t-V'>使用してきた</span> <span class='t-O'>バーチャルリアリティシミュレーションを</span> <span class='t-M'>(スタッフが〜できるようにするために...、〜を確実にしながら)</span>。",
                naturalTranslation: "場合によっては、企業は建設が始まる前にスタッフが提案されたレイアウトをテストし、フィードバックを提供できるようにするためにバーチャルリアリティシミュレーションを使用し、彼らのユニークな視点が最終設計に統合されることを確実にしている。",
                vocabulary: [
                    { word: "virtual reality simulations", meaning: "バーチャルリアリティシミュレーション" },
                    { word: "proposed layouts", meaning: "提案されたレイアウト" },
                    { word: "perspectives", meaning: "視点" },
                    { word: "integrated into", meaning: "〜に統合される" }
                ],
                grammarNotes: [
                    { phrase: "have used", explanation: "<b>現在完了</b>: 経験または完了。「使用してきた」。" },
                    { phrase: "to allow staff to test and provide feedback", explanation: "<b>不定詞（副詞的用法）</b>: 目的を表す。「スタッフが〜できるようにするために」。" },
                    { phrase: "before construction begins", explanation: "<b>時の副詞節構造</b>:<ul><li><b>S'</b>: construction</li><li><b>V'</b>: begins</li></ul>「建設が始まる前に」。" },
                    { phrase: "ensuring their unique perspectives are integrated", explanation: "<b>分詞構文</b>: 結果または付帯状況を表す。「〜を確実にしながら」。" }
                ]
            }
        }
    ]
};

module.exports = paragraph4;
