// The Bias in Algorithms - Paragraph 4 (Sentences 16-20)

const paragraph4 = {
    paragraphId: 4,
    sentences: [
        {
            id: 16,
            text: "For years, the public generally accepted the \"tech solutionism\" narrative—that technology could solve complex social problems.",
            translation: "長年にわたり、世間一般はテクノロジーが複雑な社会問題を解決できるという「テック・ソリューショニズム」の物語を受け入れてきた。",
            grammarAnalysis: {
                mainVerbs: ["accepted"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(For years)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the public</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(generally)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>accepted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>the \"tech solutionism\" narrative—[that <span class='chunk S2-group'><span class='text'>technology</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>could solve</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>complex social problems</span><span class='tag'>O'</span></span>]</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-M'>(長年にわたり)</span>、<span class='t-S'>世間一般は</span> <span class='t-M'>(概して)</span> <span class='t-V'>受け入れてきた</span> <span class='t-O'>「テック・ソリューショニズム」の物語を—[that <span class='t-S2'>テクノロジーが</span> <span class='t-V2'>解決できる</span> <span class='t-O2'>複雑な社会問題を</span>]</span>。",
                naturalTranslation: "長年にわたり、世間一般はテクノロジーが複雑な社会問題を解決できるという「テック・ソリューショニズム」の物語を受け入れてきた。",
                vocabulary: [
                    { word: "tech solutionism", meaning: "「テック・ソリューショニズム」。テクノロジーがあらゆる問題を解決できるという信念。" },
                    { word: "narrative", meaning: "「物語」「語り」。ここでは「通説」「定説」の意味。" },
                    { word: "the public", meaning: "「世間一般」「大衆」。" }
                ],
                grammarNotes: [
                    { phrase: "the ... narrative—that ...", explanation: "<b>同格のthat節</b>: ダッシュの後にnarrativeの内容を説明。「〜という物語」。" },
                    { phrase: "For years", explanation: "<b>期間を表す副詞句</b>: 「長年」。過去から現在までの継続を示唆。" }
                ]
            }
        },
        {
            id: 17,
            text: "However, recent surveys show a significant shift in attitude.",
            translation: "しかし、最近の調査は態度の大きな変化を示している。",
            grammarAnalysis: {
                mainVerbs: ["show"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(However)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>recent surveys</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>show</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a significant shift in attitude</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-M'>(しかし)</span>、<span class='t-S'>最近の調査は</span> <span class='t-V'>示している</span> <span class='t-O'>態度の大きな変化を</span>。",
                naturalTranslation: "しかし、最近の調査は態度の大きな変化を示している。",
                vocabulary: [
                    { word: "surveys", meaning: "「調査」「アンケート」。" },
                    { word: "significant", meaning: "「大きな」「重要な」。" },
                    { word: "shift", meaning: "「変化」「転換」。" }
                ],
                grammarNotes: [
                    { phrase: "However", explanation: "<b>However</b>: 逆接の副詞。前段落との対比を示す。" }
                ]
            }
        },
        {
            id: 18,
            text: "A majority of Americans now express skepticism about the use of AI in hiring and policing, with many believing that these tools are more likely to exhibit bias than human managers.",
            translation: "今やアメリカ人の大多数は採用や警察活動におけるAIの使用について懐疑的な見解を示しており、多くの人がこれらのツールは人間の管理者よりもバイアスを示す可能性が高いと考えている。",
            grammarAnalysis: {
                mainVerbs: ["express"],
                structureHtml: "<span class='chunk S-group'><span class='text'>A majority of Americans</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(now)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>express</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>skepticism (about the use of AI in hiring and policing)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(with <span class='chunk S2-group'><span class='text'>many</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>believing</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>that [these tools are more likely to exhibit bias than human managers]</span><span class='tag'>O'</span></span>)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-S'>アメリカ人の大多数は</span> <span class='t-M'>(今や)</span> <span class='t-V'>示している</span> <span class='t-O'>懐疑的見解を (採用や警察活動におけるAIの使用について)</span>、<span class='t-M'>(with <span class='t-S2'>多くの人が</span> <span class='t-V2'>信じている</span> <span class='t-O2'>that [これらのツールは人間の管理者よりバイアスを示す可能性が高い]と</span>)</span>。",
                naturalTranslation: "今やアメリカ人の大多数は採用や警察活動におけるAIの使用について懐疑的な見解を示しており、多くの人がこれらのツールは人間の管理者よりもバイアスを示す可能性が高いと考えている。",
                vocabulary: [
                    { word: "skepticism", meaning: "「懐疑主義」「疑念」。" },
                    { word: "policing", meaning: "「警察活動」「取り締まり」。" },
                    { word: "exhibit", meaning: "「示す」「呈する」。" }
                ],
                grammarNotes: [
                    {
                        phrase: "with many believing", explanation: `<b>付帯状況のwith + O + 分詞</b>:
<ul>
<li><b>O</b>: many (people)</li>
<li><b>分詞</b>: believing</li>
</ul>
「多くの人が〜と信じる中で」「多くの人が〜と信じて」。` },
                    { phrase: "more likely to exhibit bias than", explanation: "<b>比較級</b>: 「〜よりもバイアスを示す可能性が高い」。" }
                ]
            }
        },
        {
            id: 19,
            text: "This change has led to calls for \"algorithmic accountability,\" with policymakers in Europe and the US proposing regulations that would require companies to audit their systems for bias and explain automated decisions.",
            translation: "この変化は「アルゴリズム説明責任」を求める声につながっており、欧州と米国の政策立案者たちは、企業にシステムのバイアスを監査し自動化された決定を説明することを求める規制を提案している。",
            grammarAnalysis: {
                mainVerbs: ["has led"],
                structureHtml: "<span class='chunk S-group'><span class='text'>This change</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has led</span><span class='tag'>V</span></span> <span class='chunk M-group'><span class='text'>(to calls for \"algorithmic accountability\")</span><span class='tag'>M</span></span>, <span class='chunk M-group'><span class='text'>(with <span class='chunk S2-group'><span class='text'>policymakers in Europe and the US</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>proposing</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>regulations (that would require companies to audit their systems for bias and explain automated decisions)</span><span class='tag'>O'</span></span>)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-S'>この変化は</span> <span class='t-V'>つながった</span> <span class='t-M'>(「アルゴリズム説明責任」への呼びかけに)</span>、<span class='t-M'>(with <span class='t-S2'>欧州と米国の政策立案者が</span> <span class='t-V2'>提案している</span> <span class='t-O2'>規制を (that 企業にシステムのバイアスを監査し自動化された決定を説明することを要求する)</span>)</span>。",
                naturalTranslation: "この変化は「アルゴリズム説明責任」を求める声につながっており、欧州と米国の政策立案者たちは、企業にシステムのバイアスを監査し自動化された決定を説明することを求める規制を提案している。",
                vocabulary: [
                    { word: "algorithmic accountability", meaning: "「アルゴリズム説明責任」。アルゴリズムの決定に対する透明性と責任。" },
                    { word: "policymakers", meaning: "「政策立案者」。" },
                    { word: "audit", meaning: "「監査する」「検査する」。" }
                ],
                grammarNotes: [
                    { phrase: "has led to calls for", explanation: "<b>lead to ~</b>: 「〜につながる」「〜をもたらす」。" },
                    {
                        phrase: "with policymakers ... proposing", explanation: `<b>付帯状況のwith + O + 分詞</b>:
<ul>
<li><b>O</b>: policymakers in Europe and the US</li>
<li><b>分詞</b>: proposing</li>
</ul>
「政策立案者が〜を提案する中で」。` },
                    { phrase: "that would require companies to audit", explanation: "<b>関係代名詞節</b>: regulationsを修飾。wouldは仮定法的ニュアンス（もし施行されれば）。" }
                ]
            }
        },
        {
            id: 20,
            text: "The blind faith in digital neutrality is fading, replaced by a demand for human oversight.",
            translation: "デジタルの中立性への盲目的な信仰は薄れつつあり、人間による監視への要求に取って代わられている。",
            grammarAnalysis: {
                mainVerbs: ["is fading"],
                structureHtml: "<span class='chunk S-group'><span class='text'>The blind faith (in digital neutrality)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>is fading</span><span class='tag'>V</span></span>, <span class='chunk M-group'><span class='text'>(replaced by a demand for human oversight)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-S'>盲目的な信仰は (デジタルの中立性への)</span> <span class='t-V'>薄れつつある</span>、<span class='t-M'>(人間による監視への要求に取って代わられて)</span>。",
                naturalTranslation: "デジタルの中立性への盲目的な信仰は薄れつつあり、人間による監視への要求に取って代わられている。",
                vocabulary: [
                    { word: "blind faith", meaning: "「盲目的な信仰」「無条件の信頼」。" },
                    { word: "neutrality", meaning: "「中立性」。" },
                    { word: "fading", meaning: "「薄れつつある」「消えゆく」。" },
                    { word: "oversight", meaning: "「監視」「監督」。" }
                ],
                grammarNotes: [
                    { phrase: "is fading", explanation: "<b>現在進行形</b>: 変化の進行中を表す。「薄れつつある」。" },
                    { phrase: "replaced by a demand", explanation: "<b>過去分詞による分詞構文</b>: 「〜に取って代わられて」。being が省略された形 (= being replaced by)。" }
                ]
            }
        }
    ]
};

module.exports = { paragraph4 };
