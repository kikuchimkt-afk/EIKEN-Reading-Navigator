// The Bias in Algorithms - Paragraph 1 (Sentences 1-5)

const paragraph1 = {
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
                structureHtml: "<span class='chunk S-group'><span class='text'>Proponents</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>argue</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>replacing fallible human judgment with machine logic</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>creates</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>a fairer society</span><span class='tag'>O'</span></span>, (free from the prejudices (that <span class='chunk S3-group'><span class='text'>_</span><span class='tag'>S''</span></span> <span class='chunk V3-group'><span class='text'>have ... marginalized</span><span class='tag'>V''</span></span> <span class='chunk O3-group'><span class='text'>certain groups</span><span class='tag'>O''</span></span>))]</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>支持者たちは</span> <span class='t-V'>主張している</span> <span class='t-O'>that [<span class='t-S2'>誤りがちな人間の判断を機械の論理で置き換えることが</span> <span class='t-V2'>作り出す</span> <span class='t-O2'>より公正な社会を</span>、(that [<span class='t-S3'>_が</span> <span class='t-V3'>歴史的に周縁化してきた</span> <span class='t-O3'>特定グループを</span>]偏見のない)]ことを</span>。",
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
                    {
                        phrase: "that have historically marginalized", explanation: `<b>関係代名詞節</b>:
<ul>
<li><b>S''</b>: that (= the prejudices)</li>
<li><b>V''</b>: have historically marginalized</li>
<li><b>O''</b>: certain groups</li>
</ul>
「歴史的に特定のグループを周縁化してきた」偏見。` }
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
                    { phrase: "access to credit", explanation: "<b>access to ~</b>: 「〜へのアクセス」。つながっている名詞。" }
                ]
            }
        },
        {
            id: 4,
            text: "However, there is growing evidence that these systems often perpetuate the very inequalities they were meant to eliminate.",
            translation: "しかし、これらのシステムがまさに排除するはずだった不平等をしばしば永続させているという証拠が増えている。",
            grammarAnalysis: {
                mainVerbs: ["is"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>there</span><span class='tag'>仮S</span></span> <span class='chunk V-group'><span class='text'>is growing</span><span class='tag'>V</span></span> <span class='chunk S-group'><span class='text'>evidence [that <span class='chunk S2-group'><span class='text'>these systems</span><span class='tag'>S'</span></span> <span class='chunk M2-group'><span class='text'>often</span><span class='tag'>M'</span></span> <span class='chunk V2-group'><span class='text'>perpetuate</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the very inequalities (<span class='chunk S3-group'><span class='text'>they</span><span class='tag'>S''</span></span> <span class='chunk V3-group'><span class='text'>were meant to eliminate</span><span class='tag'>V''</span></span>)</span><span class='tag'>O'</span></span>]</span><span class='tag'>真S</span></span>.",
                translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-V'>増えている</span> <span class='t-S'>証拠が [that <span class='t-S2'>これらのシステムが</span> <span class='t-M2'>しばしば</span> <span class='t-V2'>永続させている</span> <span class='t-O2'>まさにその不平等を (<span class='t-S3'>それらが</span> <span class='t-V3'>排除するはずだった</span>)</span>]</span>。",
                naturalTranslation: "しかし、これらのシステムがまさに排除するはずだった不平等をしばしば永続させているという証拠が増えている。",
                vocabulary: [
                    { word: "perpetuate", meaning: "「永続させる」「恒久化する」。" },
                    { word: "inequalities", meaning: "「不平等」。" },
                    { word: "the very", meaning: "「まさにその〜」。強調表現。" }
                ],
                grammarNotes: [
                    { phrase: "there is growing evidence", explanation: "<b>there is構文</b>: 「〜がある」。growingはevidenceを修飾する現在分詞。" },
                    { phrase: "that these systems often perpetuate", explanation: "<b>同格のthat節</b>: evidenceの内容を説明。「〜という証拠」。" },
                    {
                        phrase: "they were meant to eliminate", explanation: `<b>関係代名詞節（目的格省略）</b>:
<ul>
<li><b>S''</b>: they (= these systems)</li>
<li><b>V''</b>: were meant to eliminate（排除するはずだった）</li>
<li><b>O''</b>: 省略されたwhich/that = the very inequalities</li>
</ul>
be meant to do: 「〜するはずである」「〜することになっている」。` }
                ]
            }
        },
        {
            id: 5,
            text: "Because algorithms are trained on historical data, which reflects past discrimination, they can learn to favor candidates who resemble those who have succeeded in the past, often wealthy white males, while unfairly filtering out others.",
            translation: "アルゴリズムは過去の差別を反映する歴史的データで訓練されるため、過去に成功した人々（多くの場合、裕福な白人男性）に似た候補者を好むことを学習し、他の人々を不当に除外してしまう可能性がある。",
            grammarAnalysis: {
                mainVerbs: ["can learn"],
                structureHtml: `◆ Because節（理由）:<br>
<span class='chunk M-group'><span class='text'>(Because <span class='chunk S2-group'><span class='text'>algorithms</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are trained</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>on historical data</span><span class='tag'>M'</span></span>, (which reflects past discrimination))</span><span class='tag'>M</span></span>,<br><br>
◆ 主節:<br>
<span class='chunk S-group'><span class='text'>they</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can learn</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>to favor candidates (who resemble those (who have succeeded in the past, often wealthy white males))</span><span class='tag'>C</span></span>, <span class='chunk M-group'><span class='text'>(while unfairly filtering out others)</span><span class='tag'>M</span></span>.`,
                translationHtml: `◆ Because節: <span class='t-M'>(Because <span class='t-S2'>アルゴリズムは</span> <span class='t-V2'>訓練されるので</span> <span class='t-M2'>歴史的データで</span>, (それは過去の差別を反映する))</span>,<br><br>
◆ 主節: <span class='t-S'>それらは</span> <span class='t-V'>学習しうる</span> <span class='t-C'>候補者を好むことを (その候補者は似ている (過去に成功した人々に, しばしば裕福な白人男性))</span>, <span class='t-M'>(一方で他の人を不当に除外しながら)</span>。`,
                naturalTranslation: "アルゴリズムは過去の差別を反映する歴史的データで訓練されるため、過去に成功した人々（多くの場合、裕福な白人男性）に似た候補者を好むことを学習し、他の人々を不当に除外してしまう可能性がある。",
                vocabulary: [
                    { word: "trained on", meaning: "「〜で訓練される」。機械学習用語。" },
                    { word: "resemble", meaning: "「〜に似ている」。" },
                    { word: "filtering out", meaning: "「除外する」「ふるい落とす」。" }
                ],
                grammarNotes: [
                    {
                        phrase: "Because algorithms are trained on historical data", explanation: `<b>理由を表す副詞節</b>:
<ul>
<li><b>S'</b>: algorithms</li>
<li><b>V'</b>: are trained（受動態）</li>
<li><b>M'</b>: on historical data</li>
</ul>
「アルゴリズムが歴史的データで訓練されるから」。` },
                    { phrase: "which reflects past discrimination", explanation: "<b>非制限用法の関係代名詞節</b>: historical data を補足説明。「そしてそのデータは過去の差別を反映している」。" },
                    { phrase: "while unfairly filtering out others", explanation: "<b>while + 分詞構文</b>: 「一方で〜しながら」。対比・同時進行を表す。" }
                ]
            }
        }
    ]
};

module.exports = { paragraph1 };
