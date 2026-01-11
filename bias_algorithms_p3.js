// The Bias in Algorithms - Paragraph 3 (Sentences 11-15)

const paragraph3 = {
    paragraphId: 3,
    sentences: [
        {
            id: 11,
            text: "Critics like data scientist Cathy O'Neil warn that these \"weapons of math destruction\" are opaque and unaccountable.",
            translation: "データサイエンティストのキャシー・オニールのような批評家たちは、これらの「数学的破壊兵器」は不透明で説明責任がないと警告している。",
            grammarAnalysis: {
                mainVerbs: ["warn"],
                structureHtml: "<span class='chunk S-group'><span class='text'>Critics (like data scientist Cathy O'Neil)</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>warn</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>these \"weapons of math destruction\"</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>are</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>opaque and unaccountable</span><span class='tag'>C'</span></span>]</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>批評家たちは (データサイエンティストのCathy O'Neilのような)</span> <span class='t-V'>警告している</span> <span class='t-O'>that [<span class='t-S2'>これらの「数学的破壊兵器」は</span> <span class='t-V2'>である</span> <span class='t-C2'>不透明で説明責任がない</span>]と</span>。",
                naturalTranslation: "データサイエンティストのキャシー・オニールのような批評家たちは、これらの「数学的破壊兵器」は不透明で説明責任がないと警告している。",
                vocabulary: [
                    { word: "opaque", meaning: "「不透明な」「わかりにくい」。" },
                    { word: "unaccountable", meaning: "「説明責任がない」「責任を問えない」。" },
                    { word: "weapons of math destruction", meaning: "「数学的破壊兵器」。Cathy O'Neil の造語で、有害なアルゴリズムのこと。WMD（大量破壊兵器）のもじり。" }
                ],
                grammarNotes: [
                    { phrase: "like data scientist Cathy O'Neil", explanation: "<b>挿入句</b>: Criticsの具体例を示す。「〜のような」。" },
                    { phrase: "warn that ...", explanation: "<b>warn that節</b>: 「〜と警告する」。" }
                ]
            }
        },
        {
            id: 12,
            text: "Unlike human decision-makers, who can be questioned about their reasoning, algorithms often operate as \"black boxes\" where the logic is hidden even from the creators.",
            translation: "その推論について質問することができる人間の意思決定者とは異なり、アルゴリズムはしばしば、作成者からさえも論理が隠されている「ブラックボックス」として機能する。",
            grammarAnalysis: {
                mainVerbs: ["operate"],
                structureHtml: `◆ Unlike句（対比）:<br>
<span class='chunk M-group'><span class='text'>(Unlike human decision-makers, (who <span class='chunk S2-group'><span class='text'>_</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>can be questioned</span><span class='tag'>V'</span></span> <span class='chunk M2-group'><span class='text'>about their reasoning</span><span class='tag'>M'</span></span>))</span><span class='tag'>M</span></span>,<br><br>
◆ 主節:<br>
<span class='chunk S-group'><span class='text'>algorithms</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(often)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>operate</span><span class='tag'>V</span></span> <span class='chunk C-group'><span class='text'>as \"black boxes\" (where <span class='chunk S3-group'><span class='text'>the logic</span><span class='tag'>S''</span></span> <span class='chunk V3-group'><span class='text'>is hidden</span><span class='tag'>V''</span></span> <span class='chunk M3-group'><span class='text'>even from the creators</span><span class='tag'>M''</span></span>)</span><span class='tag'>C</span></span>.`,
                translationHtml: `◆ Unlike句: <span class='t-M'>(人間の意思決定者とは異なり, (who <span class='t-S2'>_は</span> <span class='t-V2'>質問されうる</span> <span class='t-M2'>その推論について</span>))</span>,<br><br>
◆ 主節: <span class='t-S'>アルゴリズムは</span> <span class='t-M'>(しばしば)</span> <span class='t-V'>機能する</span> <span class='t-C'>「ブラックボックス」として (where <span class='t-S3'>その論理が</span> <span class='t-V3'>隠されている</span> <span class='t-M3'>作成者からさえ</span>)</span>。`,
                naturalTranslation: "その推論について質問することができる人間の意思決定者とは異なり、アルゴリズムはしばしば、作成者からさえも論理が隠されている「ブラックボックス」として機能する。",
                vocabulary: [
                    { word: "reasoning", meaning: "「推論」「理由付け」。" },
                    { word: "black boxes", meaning: "「ブラックボックス」。内部の仕組みがわからないシステムのこと。" },
                    { word: "creators", meaning: "「作成者」「開発者」。" }
                ],
                grammarNotes: [
                    { phrase: "Unlike human decision-makers", explanation: "<b>Unlike + 名詞</b>: 「〜とは異なり」。対比を導く前置詞句。" },
                    {
                        phrase: "who can be questioned about their reasoning", explanation: `<b>非制限用法の関係代名詞節</b>:
<ul>
<li><b>S'</b>: who (= human decision-makers)</li>
<li><b>V'</b>: can be questioned（受動態）</li>
<li><b>M'</b>: about their reasoning</li>
</ul>
「彼らはその推論について質問されることができる」という補足説明。` },
                    {
                        phrase: "where the logic is hidden", explanation: `<b>関係副詞節</b>:
<ul>
<li><b>S''</b>: the logic</li>
<li><b>V''</b>: is hidden（受動態）</li>
<li><b>M''</b>: even from the creators</li>
</ul>
black boxesを説明。「そこでは論理が〜」。` }
                ]
            }
        },
        {
            id: 13,
            text: "O'Neil argues that this lack of transparency is particularly dangerous for the poor, who are more likely to be judged by automated systems in housing, employment, and law enforcement.",
            translation: "オニールは、この透明性の欠如は特に貧しい人々にとって危険であると主張している。彼らは住宅、雇用、法執行において自動化されたシステムによって判断される可能性がより高いからである。",
            grammarAnalysis: {
                mainVerbs: ["argues"],
                structureHtml: "<span class='chunk S-group'><span class='text'>O'Neil</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>argues</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>that [<span class='chunk S2-group'><span class='text'>this lack of transparency</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>is</span><span class='tag'>V'</span></span> <span class='chunk C2-group'><span class='text'>particularly dangerous (for the poor, (who <span class='chunk S3-group'><span class='text'>_</span><span class='tag'>S''</span></span> <span class='chunk V3-group'><span class='text'>are more likely to be judged</span><span class='tag'>V''</span></span> <span class='chunk M3-group'><span class='text'>by automated systems</span><span class='tag'>M''</span></span> <span class='chunk M3-group'><span class='text'>in housing, employment, and law enforcement</span><span class='tag'>M''</span></span>))</span><span class='tag'>C'</span></span>]</span><span class='tag'>O</span></span>.",
                translationHtml: "<span class='t-S'>O'Neilは</span> <span class='t-V'>主張する</span> <span class='t-O'>that [<span class='t-S2'>この透明性の欠如は</span> <span class='t-V2'>である</span> <span class='t-C2'>特に危険 (貧しい人々にとって, (who <span class='t-S3'>_は</span> <span class='t-V3'>〜される可能性がより高い</span> <span class='t-M3'>自動化システムに判断</span> <span class='t-M3'>住宅、雇用、法執行において</span>))</span>]と</span>。",
                naturalTranslation: "オニールは、この透明性の欠如は特に貧しい人々にとって危険であると主張している。彼らは住宅、雇用、法執行において自動化されたシステムによって判断される可能性がより高いからである。",
                vocabulary: [
                    { word: "transparency", meaning: "「透明性」。" },
                    { word: "law enforcement", meaning: "「法執行」。警察活動など。" },
                    { word: "automated systems", meaning: "「自動化されたシステム」。" }
                ],
                grammarNotes: [
                    { phrase: "argues that ...", explanation: "<b>argue that節</b>: 「〜と主張する」。" },
                    {
                        phrase: "who are more likely to be judged", explanation: `<b>非制限用法の関係代名詞節</b>:
<ul>
<li><b>S''</b>: who (= the poor)</li>
<li><b>V''</b>: are more likely to be judged</li>
<li><b>M''</b>: by automated systems / in housing, employment, and law enforcement</li>
</ul>
「彼らは〜される可能性がより高い」という補足情報。` },
                    { phrase: "be likely to be judged", explanation: "<b>be likely to do</b>: 「〜する可能性が高い」+ 受動態。" }
                ]
            }
        },
        {
            id: 14,
            text: "Meanwhile, the wealthy can often bypass these digital gatekeepers or hire professionals to help them navigate the system, further widening the gap between the haves and have-nots.",
            translation: "一方、富裕層はしばしばこれらのデジタルの門番を迂回したり、システムを操作する手助けをするプロフェッショナルを雇うことができ、持てる者と持たざる者との格差をさらに広げている。",
            grammarAnalysis: {
                mainVerbs: ["can bypass", "hire"],
                structureHtml: "<span class='chunk M-group'><span class='text'>(Meanwhile)</span><span class='tag'>M</span></span>, <span class='chunk S-group'><span class='text'>the wealthy</span><span class='tag'>S</span></span> <span class='chunk V-group'><span class='text'>can often bypass</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>these digital gatekeepers</span><span class='tag'>O</span></span> or <span class='chunk V-group'><span class='text'>hire</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>professionals (to help them navigate the system)</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(further widening the gap between the haves and have-nots)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-M'>(一方)</span>、<span class='t-S'>富裕層は</span> <span class='t-V'>しばしば迂回できる</span> <span class='t-O'>これらのデジタルの門番を</span> または <span class='t-V'>雇える</span> <span class='t-O'>プロフェッショナルを (彼らがシステムを操作するのを手助けするために)</span>、<span class='t-M'>(持てる者と持たざる者との格差をさらに広げながら)</span>。",
                naturalTranslation: "一方、富裕層はしばしばこれらのデジタルの門番を迂回したり、システムを操作する手助けをするプロフェッショナルを雇うことができ、持てる者と持たざる者との格差をさらに広げている。",
                vocabulary: [
                    { word: "bypass", meaning: "「迂回する」「回避する」。" },
                    { word: "gatekeepers", meaning: "「門番」。アクセスを制御するものの比喩。" },
                    { word: "navigate", meaning: "「操作する」「進む」。" },
                    { word: "the haves and have-nots", meaning: "「持てる者と持たざる者」。富者と貧者。" }
                ],
                grammarNotes: [
                    { phrase: "can often bypass ... or hire", explanation: "<b>並列構造</b>: can に続く2つの動詞（bypass or hire）。" },
                    { phrase: "to help them navigate", explanation: "<b>目的を表す不定詞</b>: 「彼らが〜するのを助けるために」。help O (to) do。" },
                    { phrase: "further widening the gap", explanation: "<b>分詞構文</b>: 結果・付帯状況を表す。「そしてさらに格差を広げる」。" }
                ]
            }
        },
        {
            id: 15,
            text: "The pressure to conform to algorithmic standards also creates a new form of anxiety, as people struggle to optimize their lives for machine approval.",
            translation: "アルゴリズムの基準に従うプレッシャーは、人々が機械の承認を得るために人生を最適化しようと苦闘する中で、新たな形の不安を生み出している。",
            grammarAnalysis: {
                mainVerbs: ["creates"],
                structureHtml: "<span class='chunk S-group'><span class='text'>The pressure (to conform to algorithmic standards)</span><span class='tag'>S</span></span> <span class='chunk M-group'><span class='text'>(also)</span><span class='tag'>M</span></span> <span class='chunk V-group'><span class='text'>creates</span><span class='tag'>V</span></span> <span class='chunk O-group'><span class='text'>a new form of anxiety</span><span class='tag'>O</span></span>, <span class='chunk M-group'><span class='text'>(as <span class='chunk S2-group'><span class='text'>people</span><span class='tag'>S'</span></span> <span class='chunk V2-group'><span class='text'>struggle to optimize</span><span class='tag'>V'</span></span> <span class='chunk O2-group'><span class='text'>their lives</span><span class='tag'>O'</span></span> <span class='chunk M2-group'><span class='text'>for machine approval</span><span class='tag'>M'</span></span>)</span><span class='tag'>M</span></span>.",
                translationHtml: "<span class='t-S'>プレッシャーは (アルゴリズムの基準に従うという)</span> <span class='t-M'>(また)</span> <span class='t-V'>生み出す</span> <span class='t-O'>新たな形の不安を</span>、<span class='t-M'>(as <span class='t-S2'>人々が</span> <span class='t-V2'>最適化しようと苦闘する</span> <span class='t-O2'>彼らの人生を</span> <span class='t-M2'>機械の承認を得るために</span>)</span>。",
                naturalTranslation: "アルゴリズムの基準に従うプレッシャーは、人々が機械の承認を得るために人生を最適化しようと苦闘する中で、新たな形の不安を生み出している。",
                vocabulary: [
                    { word: "conform to", meaning: "「〜に従う」「〜に適合する」。" },
                    { word: "optimize", meaning: "「最適化する」。" },
                    { word: "machine approval", meaning: "「機械の承認」。アルゴリズムに評価されること。" }
                ],
                grammarNotes: [
                    { phrase: "to conform to algorithmic standards", explanation: "<b>不定詞の形容詞的用法</b>: pressureを修飾。「〜するという圧力」。" },
                    {
                        phrase: "as people struggle to optimize", explanation: `<b>as節（時・状況）</b>:
<ul>
<li><b>S'</b>: people</li>
<li><b>V'</b>: struggle to optimize</li>
<li><b>O'</b>: their lives</li>
</ul>
「人々が〜しようと苦闘する中で」。` }
                ]
            }
        }
    ]
};

module.exports = { paragraph3 };
