
import fs from 'fs';

function generate_structure_html(chunks) {
    // chunks: list of [text, tag]
    let html = "";
    for (const [text, tag] of chunks) {
        if (tag) {
            html += `<span class='chunk ${tag}-group'><span class='text'>${text}</span><span class='tag'>${tag}</span></span>`;
        } else {
            html += text;
        }
    }
    return html;
}

function generate_translation_html(chunks) {
    // chunks: list of [text, tag]
    let html = "";
    for (const [text, tag] of chunks) {
        if (tag) {
            html += `<span class='${tag}'>${text}</span>`;
        } else {
            html += text;
        }
    }
    return html;
}

const data = {
    "id": "grade-pre1-original-plant-communication",
    "grade": "準1級",
    "title": "Plant Communication",
    "subTitle": "問題2",
    "genre": "自然科学",
    "similarProblems": {
        "exam": "2025年度 第2回",
        "title": "Relying on Nature"
    },
    "isOriginal": true,
    "images": {
        "content": "https://placehold.co/600x400?text=Plant+Communication",
        "question": "https://placehold.co/600x400?text=Question+Image"
    },
    "content": [
        {
            "paragraphId": 1,
            "sentences": [
                {
                    "id": 1,
                    "text": "For centuries, plants were considered passive organisms that simply absorbed water and sunlight.",
                    "translation": "何世紀にもわたって、植物は単に水と日光を吸収するだけの受動的な生物であると考えられてきた。",
                    "grammarAnalysis": {
                        "mainVerbs": ["were considered"],
                        "structureHtml": generate_structure_html([
                            ["(For centuries)", "M"], [", ", ""],
                            ["plants", "S"], [" ", ""],
                            ["were considered", "V"], [" ", ""],
                            ["passive organisms (that simply absorbed water and sunlight)", "C"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["(何世紀にもわたって)", "t-M"], ["、", ""],
                            ["植物は", "t-S"], [" ", ""],
                            ["考えられてきた", "t-V"], [" ", ""],
                            ["単に水と日光を吸収するだけの受動的な生物であると", "t-C"], ["。", ""]
                        ]),
                        "naturalTranslation": "何世紀にもわたって、植物は単に水と日光を吸収するだけの受動的な生物であると考えられてきた。",
                        "vocabulary": [
                            { "word": "passive", "meaning": "「受動的な」。" },
                            { "word": "organisms", "meaning": "「生物」「有機体」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "were considered", "explanation": "<b>were considered</b>: 「〜と考えられていた」。SVOCの受動態（S is considered C）。" },
                            { "phrase": "that simply absorbed", "explanation": "<b>that ...</b>: organismsを修飾する関係代名詞節。" }
                        ]
                    }
                },
                {
                    "id": 2,
                    "text": "However, over the past few decades, researchers have discovered that plants are far more sophisticated than previously believed.",
                    "translation": "しかし、過去数十年の間に、研究者たちは、植物が以前信じられていたよりもはるかに洗練されていることを発見した。",
                    "grammarAnalysis": {
                        "mainVerbs": ["have discovered"],
                        "structureHtml": generate_structure_html([
                            ["(However)", "M"], [", ", ""],
                            ["(over the past few decades)", "M"], [", ", ""],
                            ["researchers", "S"], [" ", ""],
                            ["have discovered", "V"], [" ", ""],
                            ["that plants are far more sophisticated than previously believed", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["(しかし)", "t-M"], ["、", ""],
                            ["(過去数十年の間に)", "t-M"], ["、", ""],
                            ["研究者たちは", "t-S"], [" ", ""],
                            ["発見した", "t-V"], [" ", ""],
                            ["植物が以前信じられていたよりもはるかに洗練されていることを", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "しかし、過去数十年の間に、研究者たちは、植物が以前信じられていたよりもはるかに洗練されていることを発見した。",
                        "vocabulary": [
                            { "word": "sophisticated", "meaning": "「洗練された」「高度な」。" },
                            { "word": "decades", "meaning": "「数十年」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "far more ... than", "explanation": "<b>far more ...</b>: 比較級の強調。「はるかに〜」。" },
                            { "phrase": "than previously believed", "explanation": "than (it was) previously believed の省略形。" }
                        ]
                    }
                },
                {
                    "id": 3,
                    "text": "They can detect threats, respond to their environment, and even communicate with each other using a complex system of chemical signals.",
                    "translation": "それらは脅威を検知し、環境に反応し、さらに複雑な化学信号のシステムを使って互いに通信することさえできる。",
                    "grammarAnalysis": {
                        "mainVerbs": ["can detect"],
                        "structureHtml": generate_structure_html([
                            ["They", "S"], [" ", ""],
                            ["can detect", "V"], [" ", ""],
                            ["threats", "O"], [", ", ""],
                            ["respond", "V"], [" ", ""],
                            ["(to their environment)", "M"], [", and ", ""],
                            ["(even)", "M"], [" ", ""],
                            ["communicate", "V"], [" ", ""],
                            ["(with each other)", "M"], [" ", ""],
                            ["(using a complex system of chemical signals)", "M"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["それらは", "t-S"], [" ", ""],
                            ["検知できる", "t-V"], [" ", ""],
                            ["脅威を", "t-O"], ["、", ""],
                            ["反応し（できる）", "t-V"], [" ", ""],
                            ["(環境に)", "t-M"], ["、そして", ""],
                            ["通信することさえ（できる）", "t-V"], [" ", ""],
                            ["(互いに)", "t-M"], [" ", ""],
                            ["(複雑な化学信号のシステムを使って)", "t-M"], ["。", ""]
                        ]),
                        "naturalTranslation": "それらは脅威を検知し、環境に反応し、さらに複雑な化学信号のシステムを使って互いに通信することさえできる。",
                        "vocabulary": [
                            { "word": "detect", "meaning": "「検知する」「見つける」。" },
                            { "word": "chemical signals", "meaning": "「化学信号」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "detect, respond, and communicate", "explanation": "<b>並列構造</b>: caan に続く3つの動詞が並んでいる。" },
                            { "phrase": "using ...", "explanation": "<b>using ...</b>: 手段を表す分詞構文。「〜を使って」。" }
                        ]
                    }
                },
                {
                    "id": 4,
                    "text": "This emerging field of study is reshaping our understanding of plant biology and may have significant implications for agriculture.",
                    "translation": "この新興の研究分野は、植物生物学に対する私たちの理解を作り変えつつあり、農業に重大な影響を与える可能性がある。",
                    "grammarAnalysis": {
                        "mainVerbs": ["is reshaping"],
                        "structureHtml": generate_structure_html([
                            ["This emerging field of study", "S"], [" ", ""],
                            ["is reshaping", "V"], [" ", ""],
                            ["our understanding of plant biology", "O"], [" and ", ""],
                            ["may have", "V"], [" ", ""],
                            ["significant implications", "O"], [" ", ""],
                            ["(for agriculture)", "M"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["この新興の研究分野は", "t-S"], [" ", ""],
                            ["作り変えている", "t-V"], [" ", ""],
                            ["私たちの植物生物学の理解を", "t-O"], ["、そして", ""],
                            ["持つかもしれない", "t-V"], [" ", ""],
                            ["重大な影響/意味合いを", "t-O"], [" ", ""],
                            ["(農業に対して)", "t-M"], ["。", ""]
                        ]),
                        "naturalTranslation": "この新興の研究分野は、植物生物学に対する私たちの理解を作り変えつつあり、農業に重大な影響を与える可能性がある。",
                        "vocabulary": [
                            { "word": "emerging", "meaning": "「新興の」「現れつつある」。" },
                            { "word": "implications", "meaning": "「影響」「意味合い」。" },
                            { "word": "agriculture", "meaning": "「農業」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "is reshaping", "explanation": "<b>is reshaping</b>: 現在進行形。「〜を作り変えつつある」。" }
                        ]
                    }
                }
            ]
        },
        {
            "paragraphId": 2,
            "sentences": [
                {
                    "id": 5,
                    "text": "The first major breakthrough in understanding plant communication came in the 1980s when scientists studying willow trees made a surprising discovery.",
                    "translation": "植物のコミュニケーションを理解する上での最初の大きな突破口は、1980年代に柳の木を研究していた科学者たちが驚くべき発見をした時にもたらされた。",
                    "grammarAnalysis": {
                        "mainVerbs": ["came"],
                        "structureHtml": generate_structure_html([
                            ["The first major breakthrough (in understanding plant communication)", "S"], [" ", ""],
                            ["came", "V"], [" ", ""],
                            ["(in the 1980s)", "M"], [" ", ""],
                            ["(when scientists studying willow trees made a surprising discovery)", "M"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["最初の大きな突破口は(植物の通信を理解する上での)", "t-S"], [" ", ""],
                            ["来た/もたらされた", "t-V"], [" ", ""],
                            ["(1980年代に)", "t-M"], [" ", ""],
                            ["(柳の木を研究していた科学者が驚くべき発見をした時に)", "t-M"], ["。", ""]
                        ]),
                        "naturalTranslation": "植物のコミュニケーションを理解する上での最初の大きな突破口は、1980年代に柳の木を研究していた科学者たちが驚くべき発見をした時にもたらされた。",
                        "vocabulary": [
                            { "word": "breakthrough", "meaning": "「突破口」「画期的な進歩」。" },
                            { "word": "willow trees", "meaning": "「柳の木」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "when ...", "explanation": "<b>when ...</b>: 1980sを説明する関係副詞（または時を表す副詞節）。" }
                        ]
                    }
                },
                {
                    "id": 6,
                    "text": "They found that when caterpillars attacked one tree, nearby trees that had not been attacked began producing chemicals that made their leaves less palatable to insects.",
                    "translation": "彼らは、毛虫がある木を攻撃したとき、攻撃されていない近くの木々が、葉を昆虫にとって不味くする化学物質を作り始めたことを発見した。",
                    "grammarAnalysis": {
                        "mainVerbs": ["found"],
                        "structureHtml": generate_structure_html([
                            ["They", "S"], [" ", ""],
                            ["found", "V"], [" ", ""],
                            ["that [(when caterpillars attacked one tree), nearby trees (that had not been attacked) began producing chemicals (that made their leaves less palatable to insects)]", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["彼らは", "t-S"], [" ", ""],
                            ["発見した", "t-V"], [" ", ""],
                            ["[(毛虫がある木を攻撃した時)、近くの木々(攻撃されていない)が化学物質を作り始めたことを(葉を虫にとって不味くする)]", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "彼らは、毛虫がある木を攻撃したとき、攻撃されていない近くの木々が、葉を昆虫にとって不味くする化学物質を作り始めたことを発見した。",
                        "vocabulary": [
                            { "word": "palatable", "meaning": "「口に合う」「美味しい」。less palatableで「不味い」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "began producing", "explanation": "<b>began producing</b>: 「生産し始めた」。" },
                            { "phrase": "made their leaves less palatable", "explanation": "<b>make O C</b>: 第5文型。「葉(O)をより不味く(C)する」。" }
                        ]
                    }
                },
                {
                    "id": 7,
                    "text": "Since the trees had no physical connection, the researchers hypothesized that the attacked tree was releasing airborne chemicals to warn its neighbors.",
                    "translation": "木々には物理的なつながりがなかったため、研究者たちは、攻撃された木が隣の木に警告するために空気中の化学物質を放出しているという仮説を立てた。",
                    "grammarAnalysis": {
                        "mainVerbs": ["hypothesized"],
                        "structureHtml": generate_structure_html([
                            ["(Since the trees had no physical connection)", "M"], [", ", ""],
                            ["the researchers", "S"], [" ", ""],
                            ["hypothesized", "V"], [" ", ""],
                            ["that the attacked tree was releasing airborne chemicals (to warn its neighbors)", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["(木々には物理的なつながりがなかったので)", "t-M"], ["、", ""],
                            ["研究者たちは", "t-S"], [" ", ""],
                            ["仮説を立てた", "t-V"], [" ", ""],
                            ["攻撃された木が空気中の化学物質を放出していると(隣人に警告するために)", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "木々には物理的なつながりがなかったため、研究者たちは、攻撃された木が隣の木に警告するために空気中の化学物質を放出しているという仮説を立てた。",
                        "vocabulary": [
                            { "word": "hypothesized", "meaning": "「仮説を立てた」。" },
                            { "word": "airborne", "meaning": "「空気中を伝わる」「空輸の」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "Since ...", "explanation": "<b>Since</b>: 理由を表す。「〜なので」。" },
                            { "phrase": "was releasing", "explanation": "<b>was releasing</b>: 過去進行形。「放出していた」。" }
                        ]
                    }
                },
                {
                    "id": 8,
                    "text": "This phenomenon became known as \"talking trees,\" and it sparked considerable debate in the scientific community about whether plants could truly communicate.",
                    "translation": "この現象は「おしゃべりする木」として知られるようになり、植物が本当にコミュニケーションをとれるのかどうかについて、科学界でかなりの議論を巻き起こした。",
                    "grammarAnalysis": {
                        "mainVerbs": ["became", "sparked"],
                        "structureHtml": generate_structure_html([
                            ["This phenomenon", "S"], [" ", ""],
                            ["became", "V"], [" ", ""],
                            ["known (as \"talking trees\")", "C"], [", and ", ""],
                            ["it", "S"], [" ", ""],
                            ["sparked", "V"], [" ", ""],
                            ["considerable debate", "O"], [" ", ""],
                            ["(in the scientific community)", "M"], [" ", ""],
                            ["(about whether plants could truly communicate)", "M"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["この現象は", "t-S"], [" ", ""],
                            ["なった", "t-V"], [" ", ""],
                            ["知られるように(「おしゃべりする木」として)", "t-C"], ["、そして", ""],
                            ["それは", "t-S"], [" ", ""],
                            ["引き起こした", "t-V"], [" ", ""],
                            ["かなりの議論を", "t-O"], [" ", ""],
                            ["(科学界で)", "t-M"], [" ", ""],
                            ["(植物が本当に通信できるかどうかについて)", "t-M"], ["。", ""]
                        ]),
                        "naturalTranslation": "この現象は「おしゃべりする木」として知られるようになり、植物が本当にコミュニケーションをとれるのかどうかについて、科学界でかなりの議論を巻き起こした。",
                        "vocabulary": [
                            { "word": "sparked", "meaning": "「引き起こした」「火をつけた」。" },
                            { "word": "debate", "meaning": "「議論」「論争」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "became known as", "explanation": "<b>became known as</b>: 「〜として知られるようになった」。" },
                            { "phrase": "whether ...", "explanation": "<b>whether ...</b>: 「〜かどうか」。aboutの目的語となる名詞節。" }
                        ]
                    }
                }
            ]
        },
        {
            "paragraphId": 3,
            "sentences": [
                {
                    "id": 9,
                    "text": "For many years, skeptics argued that the observed reactions in nearby trees were merely coincidental or caused by other environmental factors.",
                    "translation": "長きにわたり、懐疑論者たちは、近くの木々に見られた反応は単なる偶然か、他の環境要因によるものだと主張した。",
                    "grammarAnalysis": {
                        "mainVerbs": ["argued"],
                        "structureHtml": generate_structure_html([
                            ["(For many years)", "M"], [", ", ""],
                            ["skeptics", "S"], [" ", ""],
                            ["argued", "V"], [" ", ""],
                            ["that the observed reactions in nearby trees were merely coincidental or caused by other environmental factors", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["(長年の間)", "t-M"], ["、", ""],
                            ["懐疑論者は", "t-S"], [" ", ""],
                            ["主張した", "t-V"], [" ", ""],
                            ["近くの木の反応は単なる偶然か他の環境要因に起因すると", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "長きにわたり、懐疑論者たちは、近くの木々に見られた反応は単なる偶然か、他の環境要因によるものだと主張した。",
                        "vocabulary": [
                            { "word": "skeptics", "meaning": "「懐疑論者」「疑い深い人」。" },
                            { "word": "coincidental", "meaning": "「偶然の」「一致した」。" }
                        ],
                        "grammarNotes": []
                    }
                },
                {
                    "id": 10,
                    "text": "They maintained that communication required a sender, a receiver, and an intentional message, none of which plants seemed capable of producing.",
                    "translation": "彼らは、コミュニケーションには送り手、受け手、そして意図的なメッセージが必要であり、植物はそのいずれも生み出すことができないように見えると主張し続けた。",
                    "grammarAnalysis": {
                        "mainVerbs": ["maintained"],
                        "structureHtml": generate_structure_html([
                            ["They", "S"], [" ", ""],
                            ["maintained", "V"], [" ", ""],
                            ["that communication required a sender, a receiver, and an intentional message, (none of which plants seemed capable of producing)", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["彼らは", "t-S"], [" ", ""],
                            ["主張し続けた", "t-V"], [" ", ""],
                            ["通信には送り手、受け手、意図的なメッセージが必要だと、(そしてそのどれも植物には生産不可能に見えた)", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "彼らは、コミュニケーションには送り手、受け手、そして意図的なメッセージが必要であり、植物はそのいずれも生み出すことができないように見えると主張し続けた。",
                        "vocabulary": [
                            { "word": "maintained", "meaning": "「（主張を）維持した」「主張し続けた」。" },
                            { "word": "intentional", "meaning": "「意図的な」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "none of which", "explanation": "<b>none of which</b>: 関係代名詞の非制限用法。その（3つの要素）どれも〜ない。" }
                        ]
                    }
                },
                {
                    "id": 11,
                    "text": "However, numerous subsequent studies have confirmed that plants do indeed release volatile organic compounds when under stress, and neighboring plants can detect and respond to these signals.",
                    "translation": "しかし、その後の数多くの研究により、植物はストレス下で実際に揮発性有機化合物を放出しており、隣の植物がこれらの信号を検知して反応できることが確認された。",
                    "grammarAnalysis": {
                        "mainVerbs": ["have confirmed"],
                        "structureHtml": generate_structure_html([
                            ["(However)", "M"], [", ", ""],
                            ["numerous subsequent studies", "S"], [" ", ""],
                            ["have confirmed", "V"], [" ", ""],
                            ["that plants do indeed release volatile organic compounds (when under stress), and neighboring plants can detect and respond to these signals", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["(しかし)", "t-M"], ["、", ""],
                            ["多くのその後の研究が", "t-S"], [" ", ""],
                            ["確認した", "t-V"], [" ", ""],
                            ["植物が実際に揮発性有機化合物を放出すること(ストレス下で)と、隣の植物が検知し反応できることを", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "しかし、その後の数多くの研究により、植物はストレス下で実際に揮発性有機化合物を放出しており、隣の植物がこれらの信号を検知して反応できることが確認された。",
                        "vocabulary": [
                            { "word": "subsequent", "meaning": "「その後の」「続いて起こる」。" },
                            { "word": "volatile", "meaning": "「揮発性の」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "do indeed release", "explanation": "<b>do + 動詞</b>: 動詞の強調。「実際に〜する」。" },
                            { "phrase": "when under stress", "explanation": "when (they are) under stress の省略。" }
                        ]
                    }
                },
                {
                    "id": 12,
                    "text": "Some researchers now argue that the definition of communication should be expanded to include any exchange of information that benefits the organisms involved.",
                    "translation": "一部の研究者は現在、コミュニケーションの定義を拡大し、関与する生物に利益をもたらすあらゆる情報のやり取りを含めるべきだと主張している。",
                    "grammarAnalysis": {
                        "mainVerbs": ["argue"],
                        "structureHtml": generate_structure_html([
                            ["Some researchers", "S"], [" ", ""],
                            ["(now)", "M"], [" ", ""],
                            ["argue", "V"], [" ", ""],
                            ["that the definition of communication should be expanded (to include any exchange of information (that benefits the organisms involved))", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["一部の研究者は", "t-S"], [" ", ""],
                            ["(今や)", "t-M"], [" ", ""],
                            ["主張している", "t-V"], [" ", ""],
                            ["通信の定義は拡大されるべきだと(関与する生物に益するあらゆる情報交換を含むように)", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "一部の研究者は現在、コミュニケーションの定義を拡大し、関与する生物に利益をもたらすあらゆる情報のやり取りを含めるべきだと主張している。",
                        "vocabulary": [
                            { "word": "expanded", "meaning": "「拡大された」。" },
                            { "word": "involved", "meaning": "「関与した」「巻き込まれた」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "should be expanded", "explanation": "<b>should be expanded</b>: 受動態。「拡大されるべきである」。" }
                        ]
                    }
                }
            ]
        },
        {
            "paragraphId": 4,
            "sentences": [
                {
                    "id": 13,
                    "text": "One of the most fascinating examples of plant communication involves lima beans and spider mites.",
                    "translation": "植物のコミュニケーションの最も興味深い例の一つは、ライ豆とハダニに関するものだ。",
                    "grammarAnalysis": {
                        "mainVerbs": ["involves"],
                        "structureHtml": generate_structure_html([
                            ["One of the most fascinating examples of plant communication", "S"], [" ", ""],
                            ["involves", "V"], [" ", ""],
                            ["lima beans and spider mites", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["植物通信の最も魅力的な例の一つは", "t-S"], [" ", ""],
                            ["関与する/〜にまつわる", "t-V"], [" ", ""],
                            ["ライ豆とハダニに", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "植物のコミュニケーションの最も興味深い例の一つは、ライ豆とハダニに関するものだ。",
                        "vocabulary": [
                            { "word": "fascinating", "meaning": "「魅力的な」「興味深い」。" },
                            { "word": "lima beans", "meaning": "「ライ豆」。" },
                            { "word": "spider mites", "meaning": "「ハダニ」。" }
                        ],
                        "grammarNotes": []
                    }
                },
                {
                    "id": 14,
                    "text": "When spider mites attack lima bean plants, the plants release a specific blend of chemicals into the air.",
                    "translation": "ハダニがライ豆の植物を攻撃すると、その植物は特定の混合化学物質を空気中に放出する。",
                    "grammarAnalysis": {
                        "mainVerbs": ["release"],
                        "structureHtml": generate_structure_html([
                            ["(When spider mites attack lima bean plants)", "M"], [", ", ""],
                            ["the plants", "S"], [" ", ""],
                            ["release", "V"], [" ", ""],
                            ["a specific blend of chemicals", "O"], [" ", ""],
                            ["(into the air)", "M"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["(ハダニがライ豆を攻撃すると)", "t-M"], ["、", ""],
                            ["その植物は", "t-S"], [" ", ""],
                            ["放出する", "t-V"], [" ", ""],
                            ["特定の化学物質の混合物を", "t-O"], [" ", ""],
                            ["(空気中に)", "t-M"], ["。", ""]
                        ]),
                        "naturalTranslation": "ハダニがライ豆の植物を攻撃すると、その植物は特定の混合化学物質を空気中に放出する。",
                        "vocabulary": [
                            { "word": "specific", "meaning": "「特定の」。" },
                            { "word": "blend", "meaning": "「混合物」「ブレンド」。" }
                        ],
                        "grammarNotes": []
                    }
                },
                {
                    "id": 15,
                    "text": "Remarkably, these chemicals serve two purposes: they attract predatory mites that feed on spider mites, and they prompt neighboring lima bean plants to begin producing their own defensive chemicals before they are attacked.",
                    "translation": "驚くべきことに、これらの化学物質には2つの目的がある。ハダニを捕食する捕食性ダニを引き寄せること、そして隣のライ豆の植物に、攻撃される前に自身の防御化学物質を作り始めるよう促すことである。",
                    "grammarAnalysis": {
                        "mainVerbs": ["serve", "attract", "prompt"],
                        "structureHtml": generate_structure_html([
                            ["(Remarkably)", "M"], [", ", ""],
                            ["these chemicals", "S"], [" ", ""],
                            ["serve", "V"], [" ", ""],
                            ["two purposes", "O"], [": ", ""],
                            ["they", "S"], [" ", ""],
                            ["attract", "V"], [" ", ""],
                            ["predatory mites (that feed on spider mites)", "O"], [", and ", ""],
                            ["they", "S"], [" ", ""],
                            ["prompt", "V"], [" ", ""],
                            ["neighboring lima bean plants", "O"], [" ", ""],
                            ["to begin producing their own defensive chemicals", "C"], [" ", ""],
                            ["(before they are attacked)", "M"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["(驚くべきことに)", "t-M"], ["、", ""],
                            ["これらの化学物質は", "t-S"], [" ", ""],
                            ["果たす/役に立つ", "t-V"], [" ", ""],
                            ["2つの目的を", "t-O"], [":", ""],
                            ["それらは", "t-S"], [" ", ""],
                            ["引き寄せる", "t-V"], [" ", ""],
                            ["捕食性のダニを(ハダニを食べる)", "t-O"], ["、そして", ""],
                            ["それらは", "t-S"], [" ", ""],
                            ["促す", "t-V"], [" ", ""],
                            ["隣のライ豆に", "t-O"], [" ", ""],
                            ["自身の防御化学物質を生産し始めるように", "t-C"], [" ", ""],
                            ["(攻撃される前に)", "t-M"], ["。", ""]
                        ]),
                        "naturalTranslation": "驚くべきことに、これらの化学物質には2つの目的がある。ハダニを捕食する捕食性ダニを引き寄せること、そして隣のライ豆の植物に、攻撃される前に自身の防御化学物質を作り始めるよう促すことである。",
                        "vocabulary": [
                            { "word": "predatory", "meaning": "「捕食性の」。" },
                            { "word": "feed on", "meaning": "「〜を常食とする」「〜を食べる」。" },
                            { "word": "prompt", "meaning": "「促す」「刺激する」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "prompt O to do", "explanation": "<b>prompt O to do</b>: 「Oに〜するよう促す」。" },
                            { "phrase": "before they are attacked", "explanation": "<b>passive voice</b>: 「攻撃される前に」。" }
                        ]
                    }
                },
                {
                    "id": 16,
                    "text": "This response demonstrates that plants are not merely passive victims of herbivores but active participants in their own defense.",
                    "translation": "この反応は、植物が単なる草食動物の受動的な犠牲者ではなく、自身の防衛における能動的な参加者であることを実証している。",
                    "grammarAnalysis": {
                        "mainVerbs": ["demonstrates"],
                        "structureHtml": generate_structure_html([
                            ["This response", "S"], [" ", ""],
                            ["demonstrates", "V"], [" ", ""],
                            ["that plants are not merely passive victims of herbivores but active participants in their own defense", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["この反応は", "t-S"], [" ", ""],
                            ["実証している", "t-V"], [" ", ""],
                            ["植物が単なる草食動物の受動的犠牲者ではなく、自身の防御への能動的参加者であることを", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "この反応は、植物が単なる草食動物の受動的な犠牲者ではなく、自身の防衛における能動的な参加者であることを実証している。",
                        "vocabulary": [
                            { "word": "demonstrates", "meaning": "「実証する」「証明する」。" },
                            { "word": "herbivores", "meaning": "「草食動物」。" },
                            { "word": "participants", "meaning": "「参加者」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "not merely ... but ...", "explanation": "<b>not merely A but B</b>: 「単にAだけでなくBも」。" }
                        ]
                    }
                },
                {
                    "id": 17,
                    "text": "Scientists have also discovered that some plants can distinguish between different types of attackers and produce different chemical signals accordingly.",
                    "translation": "科学者たちはまた、一部の植物が異なる種類の攻撃者を区別し、それに応じて異なる化学信号を生成できることを発見した。",
                    "grammarAnalysis": {
                        "mainVerbs": ["have also discovered"],
                        "structureHtml": generate_structure_html([
                            ["Scientists", "S"], [" ", ""],
                            ["have also discovered", "V"], [" ", ""],
                            ["that some plants can distinguish between different types of attackers and produce different chemical signals accordingly", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["科学者たちは", "t-S"], [" ", ""],
                            ["また発見した", "t-V"], [" ", ""],
                            ["一部の植物が異なる種類の攻撃者を区別し、それに応じて異なる化学信号を出せることを", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "科学者たちはまた、一部の植物が異なる種類の攻撃者を区別し、それに応じて異なる化学信号を生成できることを発見した。",
                        "vocabulary": [
                            { "word": "distinguish", "meaning": "「区別する」「見分ける」。" },
                            { "word": "accordingly", "meaning": "「それに応じて」。" }
                        ],
                        "grammarNotes": []
                    }
                }
            ]
        },
        {
            "paragraphId": 5,
            "sentences": [
                {
                    "id": 18,
                    "text": "Many agricultural scientists believe that understanding plant communication could revolutionize farming practices.",
                    "translation": "多くの農業科学者は、植物のコミュニケーションを理解することで農業の実践に革命をもたらす可能性があると信じている。",
                    "grammarAnalysis": {
                        "mainVerbs": ["believe"],
                        "structureHtml": generate_structure_html([
                            ["Many agricultural scientists", "S"], [" ", ""],
                            ["believe", "V"], [" ", ""],
                            ["that understanding plant communication could revolutionize farming practices", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["多くの農業科学者は", "t-S"], [" ", ""],
                            ["信じている", "t-V"], [" ", ""],
                            ["植物通信の理解が農業の実践に革命を起こしうると", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "多くの農業科学者は、植物のコミュニケーションを理解することで農業の実践に革命をもたらす可能性があると信じている。",
                        "vocabulary": [
                            { "word": "revolutionize", "meaning": "「革命を起こす」「劇的に変える」。" },
                            { "word": "practices", "meaning": "「実践」「慣行」。" }
                        ],
                        "grammarNotes": []
                    }
                },
                {
                    "id": 19,
                    "text": "By identifying the chemical signals that plants use to warn each other, farmers might be able to develop more effective and environmentally friendly pest control methods.",
                    "translation": "植物が互いに警告するために使用する化学信号を特定することで、農家はより効果的で環境に優しい害虫駆除方法を開発できるかもしれない。",
                    "grammarAnalysis": {
                        "mainVerbs": ["might be"],
                        "structureHtml": generate_structure_html([
                            ["(By identifying the chemical signals (that plants use to warn each other))", "M"], [", ", ""],
                            ["farmers", "S"], [" ", ""],
                            ["might be", "V"], [" ", ""],
                            ["able to develop", "C"], [" ", ""],
                            ["more effective and environmentally friendly pest control methods", "O"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["(化学信号を特定することで(植物が互いに警告に使う))", "t-M"], ["、", ""],
                            ["農家は", "t-S"], [" ", ""],
                            ["〜かもしれない", "t-V"], [" ", ""],
                            ["開発できる(状態に)", "t-C"], [" ", ""],
                            ["より効果的で環境に優しい害虫駆除法を", "t-O"], ["。", ""]
                        ]),
                        "naturalTranslation": "植物が互いに警告するために使用する化学信号を特定することで、農家はより効果的で環境に優しい害虫駆除方法を開発できるかもしれない。",
                        "vocabulary": [
                            { "word": "environmentally friendly", "meaning": "「環境に優しい」「エコな」。" },
                            { "word": "pest control", "meaning": "「害虫駆除」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "By identifying", "explanation": "<b>By -ing</b>: 「〜することで」。手段を表す。" }
                        ]
                    }
                },
                {
                    "id": 20,
                    "text": "Some researchers are already experimenting with using plant-derived chemicals as natural pesticides, potentially reducing the need for synthetic alternatives.",
                    "translation": "一部の研究者はすでに、植物由来の化学物質を天然の殺虫剤として使用する実験を行っており、合成代替品の必要性を減らす可能性がある。",
                    "grammarAnalysis": {
                        "mainVerbs": ["are already experimenting"],
                        "structureHtml": generate_structure_html([
                            ["Some researchers", "S"], [" ", ""],
                            ["are already experimenting", "V"], [" ", ""],
                            ["(with using plant-derived chemicals as natural pesticides)", "M"], [", ", ""],
                            ["(potentially reducing the need for synthetic alternatives)", "M"], [".", ""]
                        ]),
                        "translationHtml": generate_translation_html([
                            ["一部の研究者は", "t-S"], [" ", ""],
                            ["既に実験している", "t-V"], [" ", ""],
                            ["(植物由来の化学物質を天然殺虫剤として使うことを)", "t-M"], ["、", ""],
                            ["(潜在的に合成代替品の必要性を減らしながら)", "t-M"], ["。", ""]
                        ]),
                        "naturalTranslation": "一部の研究者はすでに、植物由来の化学物質を天然の殺虫剤として使用する実験を行っており、合成代替品の必要性を減らす可能性がある。",
                        "vocabulary": [
                            { "word": "plant-derived", "meaning": "「植物由来の」。" },
                            { "word": "pesticides", "meaning": "「殺虫剤」「農薬」。" },
                            { "word": "synthetic", "meaning": "「合成の」「人工の」。" }
                        ],
                        "grammarNotes": [
                            { "phrase": "experimenting with", "explanation": "<b>experimenting with</b>: 「〜を試みる」「実験する」。" },
                            { "phrase": "reducing", "explanation": "<b>reducing</b>: 分詞構文。「そして〜を減らす」「〜を減らしながら」。" }
                        ]
                    }
                }
            ]
        }
    ],
    "questions": [
        {
            "id": 1,
            "text": "What did scientists discover about willow trees in the 1980s?",
            "translation": "1980年代に科学者たちは柳の木について何を発見しましたか？",
            "choices": [
                { "id": 1, "text": "Caterpillars preferred to attack isolated trees rather than those growing in groups.", "translation": "毛虫は集団で生えている木よりも孤立した木を攻撃するのを好んだ。", "isCorrect": false },
                { "id": 2, "text": "Trees that were physically connected underground could share defensive chemicals.", "translation": "地下で物理的につながっていた木々は、防御化学物質を共有することができた。", "isCorrect": false },
                { "id": 3, "text": "Trees could detect the presence of caterpillars before they began attacking.", "translation": "木々は、攻撃が始まる前に毛虫の存在を検知することができた。", "isCorrect": false },
                { "id": 4, "text": "Trees appeared to be warning nearby trees about insect attacks through chemical signals.", "translation": "木々は化学信号を通じて、昆虫の攻撃について近くの木々に警告しているように見えた。", "isCorrect": true, "highlight": "warning nearby trees about insect attacks" }
            ],
            "hint": {
                "paragraphId": 2,
                "description": "第2段落。柳の木の研究で「研究者が仮説を立てたこと」(researchers hypothesized)に注目しましょう。",
                "targetSentenceId": 7,
                "highlightWord": "warn its neighbors",
                "highlightWordSentenceId": 7
            },
            "keywords": ["discover", "willow trees", "1980s"],
            "keywordExplanations": {
                "discover": "発見する。本文のfoundやdiscoveryと対応。",
                "willow trees": "柳の木。第2段落のキーワード。"
            },
            "keywordMatches": [
                { "sentenceId": 5, "text": "willow trees made a surprising discovery", "keyword": "willow trees" }
            ],
            "choiceAdvice": "1: 孤立した木が好き(isolated?), 2: 地下でつながっている(underground?), 3: 攻撃前に検知(before attack?), 4: 周囲に警告(warn nearby trees?)",
            "logic": [
                { "type": "text", "content": "本文(Sentence 6): 攻撃された木の近くにある（攻撃されていない）木も、防御物質を出し始めた。" },
                { "type": "text", "content": "本文(Sentence 7): 物理的接触がないため、研究者は「攻撃された木が空気中の化学物質で隣の木に警告(warn its neighbors)している」と仮説を立てた。" },
                { "type": "text", "content": "【結論】これは選択肢4の「化学信号を通じて近くの木に警告しているように見えた」と一致する。" },
                { "type": "conclusion", "content": "正解: 4" }
            ]
        },
        {
            "id": 2,
            "text": "What was the main argument of scientists who doubted plant communication?",
            "translation": "植物のコミュニケーションを疑った科学者たちの主な主張は何でしたか？",
            "choices": [
                { "id": 1, "text": "The chemical compounds released by plants were too weak to travel through the air.", "translation": "植物から放出される化合物は弱すぎて、空気中を移動できなかった。", "isCorrect": false },
                { "id": 2, "text": "Plants lacked the biological systems necessary for any form of information exchange.", "translation": "植物には、いかなる形態の情報交換にも必要な生物学的システムが欠けていた。", "isCorrect": false },
                { "id": 3, "text": "The response of neighboring plants could be explained by factors unrelated to signals from other plants.", "translation": "隣接する植物の反応は、他の植物からの信号とは関係のない要因で説明できた。", "isCorrect": true, "highlight": "explained by factors unrelated to signals" },
                { "id": 4, "text": "Previous research on plant communication had used flawed experimental methods.", "translation": "植物のコミュニケーションに関する以前の研究は、欠陥のある実験方法を使用していた。", "isCorrect": false }
            ],
            "hint": {
                "paragraphId": 3,
                "description": "第3段落。懐疑論者(skeptics)が、近くの木の反応をどう説明しようとしたか(caused by...)を探しましょう。",
                "targetSentenceId": 9,
                "highlightWord": "merely coincidental or caused by other environmental factors",
                "highlightWordSentenceId": 9
            },
            "keywords": ["argument", "doubted", "scientists"],
            "keywordExplanations": {
                "argument": "議論、主張。arguedに対応。",
                "doubted": "疑った。skeptics（懐疑論者）に対応。"
            },
            "keywordMatches": [
                { "sentenceId": 9, "text": "skeptics argued", "keyword": "doubted" }
            ],
            "choiceAdvice": "1: 化学物質が弱すぎる(too weak?), 2: システム欠如(lacked systems?), 3: 他の要因で説明可能(other factors?), 4: 実験方法の欠陥(flawed methods?)",
            "logic": [
                { "type": "text", "content": "本文(Sentence 9): 懐疑論者(skeptics)は、反応は「単なる偶然(merely coincidental)」か「他の環境要因(other environmental factors)」によるものだと主張した。" },
                { "type": "text", "content": "【結論】つまり、木同士の通信（信号）ではなく、別の要因で説明できるということ。これは選択肢3「他の植物からの信号とは無関係な要因で説明できる」と合致する。" },
                { "type": "conclusion", "content": "正解: 3" }
            ]
        },
        {
            "id": 3,
            "text": "What is one thing the author says about lima beans?",
            "translation": "著者はライ豆について何と言っていますか？",
            "choices": [
                { "id": 1, "text": "They produce chemicals that kill spider mites directly rather than attracting their predators.", "translation": "彼らは捕食者を引き寄せるのではなく、ハダニを直接殺す化学物質を生成する。", "isCorrect": false },
                { "id": 2, "text": "They release chemicals that both summon helpful insects and warn other plants.", "translation": "彼らは、有益な昆虫を呼び寄せると同時に、他の植物に警告する化学物質を放出する。", "isCorrect": true, "highlight": "summon helpful insects and warn other plants" },
                { "id": 3, "text": "Their defensive chemicals work more effectively than those of most other plant species.", "translation": "彼らの防御化学物質は、他のほとんどの植物種のものよりも効果的に働く。", "isCorrect": false },
                { "id": 4, "text": "They cannot detect warning signals from plants that are not of the same species.", "translation": "彼らは、同種でない植物からの警告信号を検知することはできない。", "isCorrect": false }
            ],
            "hint": {
                "paragraphId": 4,
                "description": "第4段落。ライ豆が放出する化学物質の「2つの目的」(two purposes)を確認しましょう。",
                "targetSentenceId": 15,
                "highlightWord": "attract predatory mites ... and they prompt neighboring lima bean plants",
                "highlightWordSentenceId": 15
            },
            "keywords": ["lima beans", "author says"],
            "keywordExplanations": {
                "lima beans": "ライ豆。第4段落のトピック。"
            },
            "keywordMatches": [
                { "sentenceId": 13, "text": "lima beans", "keyword": "lima beans" }
            ],
            "choiceAdvice": "1: 直接殺す(kill directly?), 2: 虫を呼び警告もする(summon and warn?), 3: 他より効果的(more effective?), 4: 異種は検知不可(cannot detect others?)",
            "logic": [
                { "type": "text", "content": "本文(Sentence 15): 化学物質には2つの目的がある。1. 捕食性ダニ（有益な昆虫）を引き寄せる(attract predatory mites)。 2. 隣のライ豆に防御物質を作るよう促す（警告する）。" },
                { "type": "text", "content": "【結論】この2点が記述されているのは選択肢2「有益な昆虫を呼び寄せ、他の植物に警告する」。" },
                { "type": "conclusion", "content": "正解: 2" }
            ]
        },
        {
            "id": 4,
            "text": "What do some scientists think could result from research on plant communication?",
            "translation": "一部の科学者は、植物のコミュニケーションに関する研究から何がもたらされる可能性があると考えていますか？",
            "choices": [
                { "id": 1, "text": "New farming methods that help protect crops without relying on artificial chemicals.", "translation": "人工化学物質に頼らずに作物を保護するのに役立つ、新しい農業方法。", "isCorrect": true, "highlight": "protect crops without relying on artificial chemicals" },
                { "id": 2, "text": "A significant reduction in the number of insect species that damage agricultural crops.", "translation": "農作物に被害を与える昆虫の種の数が大幅に減少する。", "isCorrect": false },
                { "id": 3, "text": "The development of plants that can survive without any form of pest control.", "translation": "いかなる形の害虫駆除もなしに生存できる植物の開発。", "isCorrect": false },
                { "id": 4, "text": "The creation of chemicals that prevent plants from communicating with each other.", "translation": "植物同士のコミュニケーションを妨げる化学物質の作成。", "isCorrect": false }
            ],
            "hint": {
                "paragraphId": 5,
                "description": "第5段落。農業(farming/agriculture)への応用について書かれた部分で、「環境に優しい」(environmentally friendly)や「天然の殺虫剤」(natural pesticides)という言葉を探しましょう。",
                "targetSentenceId": 19,
                "highlightWord": "environmentally friendly pest control methods",
                "highlightWordSentenceId": 19
            },
            "keywords": ["result", "research", "scientists"],
            "keywordExplanations": {
                "result": "結果、成果。could revolutionize...やmight be able to developと関連。",
                "farming": "農業。agricultural scientistsが考えていること。"
            },
            "keywordMatches": [
                { "sentenceId": 18, "text": "revolutionize farming practices", "keyword": "result" }
            ],
            "choiceAdvice": "1: 人工化学物質に頼らない新農法(without artificial?), 2: 害虫の種が減る(reduction in species?), 3: 駆除なしで生きる植物(survive without control?), 4: 通信を妨げる(prevent communication?)",
            "logic": [
                { "type": "text", "content": "本文(Sentence 19): 「より効果的で環境に優しい害虫駆除法(environmentally friendly pest control methods)」を開発できるかもしれない。" },
                { "type": "text", "content": "本文(Sentence 20): 「植物由来の化学物質を天然の殺虫剤(natural pesticides)として使用」し、「合成代替品(synthetic alternatives)の必要性を減らす」。" },
                { "type": "text", "content": "【結論】合成（人工）の化学物質に頼らない、新しい農業手法（害虫駆除法）ということ。選択肢1「人工化学物質に頼らずに作物を保護する新農法」が正解。" },
                { "type": "conclusion", "content": "正解: 1" }
            ]
        }
    ],
    "summaryForInstructors": {
        "title": "Plant Communication",
        "intro": "植物が受動的な存在ではなく、化学信号を使って外敵の存在を周囲に伝え、防御反応を促す「コミュニケーション」能力を持つことを解説したパッセージ。",
        "points": [
            { "label": "1. 認識の変化", "text": "かつて植物は受動的と考えられていたが、実は脅威を検知し、互いに通信できる高度な能力を持つことがわかった。" },
            { "label": "2. Talking Trees", "text": "1980年代の研究で、毛虫に襲われた柳が化学物質を出し、周囲の木の防御力を高める現象が発見された。" },
            { "label": "3. 懐疑論から証明へ", "text": "当初は偶然だと疑われたが、その後の研究で植物がストレス下で揮発性有機化合物を出し、隣人がそれに反応することが確認された。" },
            { "label": "4. 農業への応用", "text": "このメカニズム（例えばライ豆とハダニの関係）を利用し、環境に優しい新しい害虫駆除法（天然農薬など）の開発が期待されている。" }
        ]
    }
};

fs.writeFileSync('plant_data.json', JSON.stringify(data, null, 4), 'utf8');
console.log('Written plant_data.json');
