// The Bias in Algorithms - Paragraph 2 (Sentences 6-10)

const paragraph2 = {
    paragraphId: 2,
    sentences: [
        {
            id: 6,
            text: "Research has highlighted how this improved efficiency can come at the cost of fairness.",
            translation: "研究は、この改善された効率性がいかに公正さを犠牲にしうるかを浮き彫りにしてきた。",
            grammarAnalysis: {
                mainVerbs: ["has highlighted"],
                structureHtml: "<span class='chunk S-group'><span class='text'>Research</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>has highlighted</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>how [<span class='chunk S2-group'><span class='text'>this improved efficiency</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>can come</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>at the cost of fairness</span><span class='tag'>M'</span></span>]</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>研究は</span> <span class='t-V'>浮き彫りにしてきた</span> <span class='t-O'>how [<span class='t-S2'>この改善された効率性が</span> <span class='t-V2'>〜しうる</span> <span class='t-M2'>公正さを犠牲にして</span>]かを</span>。",
                naturalTranslation: "研究は、この改善された効率性がいかに公正さを犠牲にしうるかを浮き彫りにしてきた。",
                vocabulary: [
                    { word: "highlighted", meaning: "「浮き彫りにした」「強調した」。" },
                    { word: "at the cost of", meaning: "「〜を犠牲にして」。" },
                    { word: "fairness", meaning: "「公正さ」「公平性」。" }
                ],
                grammarNotes: [
                    { phrase: "how ... can come", explanation: "<b>間接疑問文</b>: 「いかに〜しうるか」。highlightedの目的語。" },
                    { phrase: "at the cost of fairness", explanation: "<b>at the cost of ~</b>: 「〜を犠牲にして」「〜の代償として」。" }
                ]
            }
        },
        {
            id: 7,
            text: "In one study involving a hiring algorithm developed by a major tech company, the system taught itself that male candidates were preferable.",
            translation: "大手テック企業が開発した採用アルゴリズムを含むある研究で、そのシステムは男性候補者のほうが好ましいと自ら学習した。",
            grammarAnalysis: {
                mainVerbs: ["taught"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(In one study involving a hiring algorithm (developed by a major tech company))</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the system</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>taught</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>itself</span><span class='tag'>O</span></span> <span class='chunk C-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>male candidates</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>were</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>preferable</span><span class='tag'>C'</span></span>]</span><span class='tag'>C</span></span>.",
                translationHtml: "<span class='t-M'>(大手テック企業によって開発された採用アルゴリズムを含むある研究で)</span>、<span class='t-S'>そのシステムは</span> <span class='t-V'>教えた</span> <span class='t-O'>自分自身に</span> <span class='t-C'>that [<span class='t-S2'>男性候補者が</span> <span class='t-V2'>である</span> <span class='t-C2'>より好ましい</span>]と</span>。",
                naturalTranslation: "大手テック企業が開発した採用アルゴリズムを含むある研究で、そのシステムは男性候補者のほうが好ましいと自ら学習した。",
                vocabulary: [
                    { word: "involving", meaning: "「〜を含む」「〜に関わる」。" },
                    { word: "preferable", meaning: "「より好ましい」「望ましい」。" },
                    { word: "taught itself", meaning: "「自ら学んだ」「独学した」。" }
                ],
                grammarNotes: [
                    { phrase: "involving a hiring algorithm", explanation: "<b>現在分詞</b>: studyを修飾。「〜を含む」。" },
                    { phrase: "developed by a major tech company", explanation: "<b>過去分詞</b>: algorithmを修飾。「〜によって開発された」。" },
                    { phrase: "taught itself that ...", explanation: "<b>teach O that節</b>: SVOC。「OにSVであると教える」。再帰代名詞itselfは「自分自身」。" }
                ]
            }
        },
        {
            id: 8,
            text: "It penalized résumés that included the word \"women's,\" such as \"women's chess club captain,\" and downgraded graduates of two all-women's colleges.",
            translation: "それは「女性の」という言葉を含む履歴書を減点し（例えば「女性チェスクラブのキャプテン」など）、2つの女子大の卒業生を格下げした。",
            grammarAnalysis: {
                mainVerbs: ["penalized", "downgraded"],
                structureHtml: "<span class='chunk S-group'><span class='text'>It</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>penalized</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>résumés (that <span class='chunk S2-group'><span class='text'>_</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>included</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the word \"women's\"</span><span class='tag'>O'</span></span>)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(such as \"women's chess club captain\")</span><span class='tag'>M</span></span>, and <span class='chunk V-group'><span class='text'>downgraded</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>graduates of two all-women's colleges</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>それは</span> <span class='t-V'>減点した</span> <span class='t-O'>履歴書を (that <span class='t-S2'>_は</span> <span class='t-V2'>含んでいた</span> <span class='t-O2'>「女性の」という言葉を</span>)</span>、<span class='t-M'>(「女性チェスクラブのキャプテン」など)</span>、そして <span class='t-V'>格下げした</span> <span class='t-O'>2つの女子大の卒業生を</span>。",
                naturalTranslation: "それは「女性の」という言葉を含む履歴書を減点し（例えば「女性チェスクラブのキャプテン」など）、2つの女子大の卒業生を格下げした。",
                vocabulary: [
                    { word: "penalized", meaning: "「罰した」「減点した」。" },
                    { word: "résumés", meaning: "「履歴書」。フランス語由来でアクセント記号付き。" },
                    { word: "downgraded", meaning: "「格下げした」「評価を下げた」。" }
                ],
                grammarNotes: [
                    { phrase: "that included the word", explanation: "<b>関係代名詞節</b>: résuméを修飾。「〜を含む」履歴書。" },
                    { phrase: "penalized ... and downgraded", explanation: "<b>並列構造</b>: 同じ主語(It)に対して2つの動詞が並ぶ。" },
                    { phrase: "such as", explanation: "<b>such as</b>: 「〜のような」。具体例を挿入。" }
                ]
            }
        },
        {
            id: 9,
            text: "When the company tried to correct this by programming the system to ignore gender, it still found proxies for gender, such as language patterns or hobbies, to continue the bias.",
            translation: "会社がシステムに性別を無視するようプログラムすることでこれを修正しようとしたとき、システムはそれでも言語パターンや趣味などの性別の代理変数を見つけ出し、バイアスを継続した。",
            grammarAnalysis: {
                mainVerbs: ["found"],
                structureHtml: `◆ When節（時）:<br>
<span class='chunk M-group'><span class='text'>(When <span class='chunk S2-group'><span class='text'>the company</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>tried to correct</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>this</span><span class='tag'>O'</span></span> <span class='chunk M2-group'><span class='text'>by programming the system to ignore gender</span><span class='tag'>M'</span></span>)</span><span class='tag'>M</span></span>,<br><br>
◆ 主節:<br>
<span class='chunk S-group'><span class='text'>it</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(still)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>found</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>proxies for gender, (such as language patterns or hobbies)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(to continue the bias)</span><span class='tag'>M</span></span>.`,
                translationHtml: `◆ When節: <span class='t-M'>(When <span class='t-S2'>会社が</span> <span class='t-V2'>修正しようとした</span> <span class='t-O2'>これを</span> <span class='t-M2'>システムに性別を無視するようプログラムすることで</span>)</span>,<br><br>
◆ 主節: <span class='t-S'>それは</span> <span class='t-M'>(それでも)</span> <span class='t-V'>見つけた</span> <span class='t-O'>性別の代理変数を, (言語パターンや趣味など)</span>, <span class='t-M'>(バイアスを継続するために)</span>。`,
                naturalTranslation: "会社がシステムに性別を無視するようプログラムすることでこれを修正しようとしたとき、システムはそれでも言語パターンや趣味などの性別の代理変数を見つけ出し、バイアスを継続した。",
                vocabulary: [
                    { word: "proxies", meaning: "「代理」「代理変数」。機械学習では間接的に情報を推測する変数のこと。" },
                    { word: "language patterns", meaning: "「言語パターン」。言葉の使い方の傾向。" },
                    { word: "bias", meaning: "「偏り」「バイアス」。" }
                ],
                grammarNotes: [
                    {
                        phrase: "When the company tried to correct this", explanation: `<b>時を表す副詞節</b>:
<ul>
<li><b>S'</b>: the company</li>
<li><b>V'</b>: tried to correct</li>
<li><b>O'</b>: this</li>
</ul>` },
                    { phrase: "by programming the system to ignore gender", explanation: "<b>by + 動名詞</b>: 手段を表す。「〜することによって」。" },
                    { phrase: "to continue the bias", explanation: "<b>結果を表す不定詞</b>: 「その結果バイアスを継続した」。" }
                ]
            }
        },
        {
            id: 10,
            text: "This suggests that without careful oversight, algorithms will inevitably reproduce the societal hierarchies embedded in the data they are fed.",
            translation: "これは、注意深い監視がなければ、アルゴリズムは与えられたデータに埋め込まれた社会的序列を必然的に再生産することを示唆している。",
            grammarAnalysis: {
                mainVerbs: ["suggests"],
                structureHtml: "<span class='chunk S-group'><span class='text'>This</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>suggests</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk M2-group'><span class='text'>without careful oversight</span><span class='tag'>M'</span></span>, <span class='chunk S2-group'><span class='text'>algorithms</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>will inevitably reproduce</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>the societal hierarchies (embedded in the data (<span class='chunk S3-group'><span class='text'>they</span><span class='tag'>S''</span></span> <span class='chunk V3-group'><span class='text'>are fed</span><span class='tag'>V''</span></span>))</span><span class='tag'>O'</span></span>]</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>これは</span> <span class='t-V'>示唆している</span> <span class='t-O'>that [<span class='t-M2'>注意深い監視がなければ</span>、<span class='t-S2'>アルゴリズムは</span> <span class='t-V2'>必然的に再生産する</span> <span class='t-O2'>社会的序列を (データに埋め込まれた (<span class='t-S3'>それらが</span> <span class='t-V3'>与えられる</span>))</span>]ことを</span>。",
                naturalTranslation: "これは、注意深い監視がなければ、アルゴリズムは与えられたデータに埋め込まれた社会的序列を必然的に再生産することを示唆している。",
                vocabulary: [
                    { word: "oversight", meaning: "「監視」「監督」。" },
                    { word: "hierarchies", meaning: "「序列」「階層構造」。" },
                    { word: "embedded in", meaning: "「〜に埋め込まれた」。" }
                ],
                grammarNotes: [
                    { phrase: "without careful oversight", explanation: "<b>without ~</b>: 仮定法的ニュアンス。「〜がなければ」。" },
                    { phrase: "embedded in the data", explanation: "<b>過去分詞</b>: hierarchiesを後置修飾。「データに埋め込まれた」。" },
                    {
                        phrase: "they are fed", explanation: `<b>関係代名詞節（目的格省略）</b>:
<ul>
<li><b>S''</b>: they (= algorithms)</li>
<li><b>V''</b>: are fed（受動態）</li>
<li>which/that (= the data) は省略</li>
</ul>
feed A B: 「AにBを与える」→ 受動態 A is fed B。` }
                ]
            }
        }
    ]
};

module.exports = { paragraph2 };
