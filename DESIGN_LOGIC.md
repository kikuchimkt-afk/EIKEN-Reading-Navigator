# 読解テクニック指導アプリ - 設計・演出ロジック

本ドキュメントは、英検長文空所補充問題アプリにおける、ユーザーインタフェースおよび学習体験の演出ロジックを定義するものです。以後の開発・データ追加は本指針に従って行います。

## 1. アプリケーション構成

本アプリは以下の2画面構成で動作します。

*   **Problem List (Home)**: 問題一覧画面。`readingData.js` に登録された問題をリスト表示します。
*   **Reading Page (Detail)**: 個別の問題演習画面。本文と設問、テクニックパネルを表示します。

## 2. 学習フローの強制

ユーザーが正しい手順で思考することを促すため、以下のステップ順序をシステム的に推奨・強制します。

*   **Step 1 (キーワード抽出)**:
    *   設問文から重要なキーワードを確認。
    *   キーワードは複数選択（トグル）可能とし、選択されたキーワード（単一または複数）が本文中で即座にハイライト表示される。
    *   TechniquePanelでの選択状態はReadingPageの状態管理を経由してPassagePanelに渡され、動的に反映される。
*   **Step 3 (正解根拠の探索)**:
    *   **「本文で探す」ボタン**を押すまで、解答用選択肢 (Step 2) はロックされる（クリック時にアラート表示）。
    *   このステップで、正解に至るための「キーセンテンス（アンダーライン）」と「ヒントワード（マーカー）」が明示される。
*   **Step 2 (解答選択)**:
    *   Step 3 を実行して本文を確認した後のみ、選択肢をクリックして正誤判定が可能となる。
    *   選択肢には `choiceAdvice`（回答のコツ）を表示し、選択肢の共通点や相違点に気付かせる。
*   **Step 4 (正解ロジック)**:
    *   解答選択後（正解・不正解にかかわらず）、正解に至る論理フロー (`logic`) が表示される。

## 3. ハイライト・視覚演出のコンセプト

### A. キーワード (Step 1)
設問に含まれる重要語句と、本文中の対応箇所を示します。

*   **完全一致 / 部分一致**:
    *   スタイル: `.keyword-match-highlight`
    *   見た目: **薄いオレンジ背景 + 濃いオレンジ枠・文字**
    *   目的: 単純な検索・スキャニングで見つかる箇所を示す。
*   **言い換え (Paraphrase)**:
    *   スタイル: `.paraphrase-highlight`
    *   見た目: **薄い水色背景 + 青枠・青文字**
    *   データ属性: `type: "paraphrase"`
    *   目的: 単語そのものではなく意味的に対応している箇所（難易度が高い・重要度が高い）を明確に区別する。
    
    *   **動的ハイライト**: ユーザーが操作パネルでキーワードをクリックした際、本文中に含まれるその単語（大文字小文字区別なし）はすべてハイライトされる。複数選択時はすべてのキーワードがハイライト対象となる。

### B. 正解根拠 (Step 3)
正解を導くための論理的な根拠を示します。

*   **キーセンテンス (Target Sentence)**:
    *   定義: 正解の選択肢を選ぶための根拠となる**文全体**。
    *   スタイル: `.active-target`
    *   見た目: **緑色のアンダーライン** (背景色はなし)。
    *   データ属性: `hint.targetSentenceId`
    *   目的: 「どこを読めば答えがわかるか」の範囲を示す。
*   **ヒントワード (Hint Keyword)**:
    *   定義: キーセンテンス内（または近傍）にある、決定的なヒントとなる単語（ディスコースマーカー、接続詞、決定的な言い換え語など）。
    *   スタイル: `.hint-word-highlight`
    *   見た目: **薄い緑背景 + 濃い緑文字** (マーカー風)。
    *   データ属性: `hint.highlightWord` (単語テキスト), `hint.highlightWordSentenceId` (文ID)
    *   目的: 文の中でも特に「ここ」に注目すべきというポイントを示す。

## 4. データ構造 (readingData.js) のルール

各設問 (`questions` 配列内のオブジェクト) は以下のプロパティを持つ必要があります。
**特に `logic` プロパティは必須です。欠落すると解答選択時にアプリがクラッシュします（画面が真っ白/真っ黒になる）。**

```javascript
{
    id: 26,
    text: "設問文...",
    keywords: ["kw1", "kw2"],
    
    // Step 1: キーワード詳細
    keywordExplanations: { 
        "kw1": "キーワードの解説や探し方のアドバイス..." 
    },
    keywordMatches: [
        { sentenceId: 5, text: "word", keyword: "kw1" },
        { sentenceId: 5, text: "paraphrased word", keyword: "kw2", type: "paraphrase" } // 言い換えの場合
    ],

    // Step 2: 選択肢とアドバイス
    choiceAdvice: "選択肢の特徴（すべて動詞で始まる、など）や、注目すべきポイント。",
    choices: [
        { id: 1, text: "Choice 1 text", isCorrect: true, highlight: "Part of choice to highlight" },
        { id: 2, text: "Choice 2 text", isCorrect: false }
        // ...
    ],

    // Step 3: ヒント（本文中の場所）
    hint: {
        paragraphId: 1, // 注目すべき段落
        description: "第1段落の〜という文を探しましょう。",
        targetSentenceId: 4,       // 緑アンダーラインを引く文のID
        highlightWord: "key word", // ヒントワード（緑マーカー）
        highlightWordSentenceId: 4
    },

    // Step 4: 正解ロジック (必須) - 「オレンジ色のハイライト」と「決定要因」を含む詳細版
    logic: [
        { type: "text", content: "本文: \"The musician got angry...\" (オレンジ色のハイライト)" },
        { type: "text", content: "【決定要因】本文の \"got angry\" は、選択肢の \"became upset\" の言い換えです。" },
        { type: "arrow", content: "↓" },
        { type: "text", content: "選択肢4: \"A musician became upset...\"" },
        { type: "conclusion", content: "正解: 4" }
    ]
}
```

### C. 隠しモード (Structure/Grammar Analysis) データ構造ルール
英文解釈・構造分析モード用のデータ (`grammarAnalysis`) を作成する際は、以下のルールを厳守する。

#### 1. 構造表示 (`structureHtml`)
*   **チャンク構造**: 文の各要素（S, V, O, C, M）は `<span class='chunk [TYPE]-group'>` でラップする。
*   **内部構造**: 各チャンク内は、単語テキスト `<span class='text'>...</span>` と、品詞タグ `<span class='tag'>...</span>` に明確に分ける（ボックスデザイン用）。
    *   例: `<span class='chunk S-group'><span class='text'>The cat</span><span class='tag'>S</span></span>`
*   **タグ種別**: `S` (主語), `V` (動詞), `O` (目的語), `C` (補語), `M` (修飾語)。

#### 2. スラッシュリーディング訳 (`translationHtml`)
*   **スラッシュリーディング**: 英文の語順通りに、前から後ろへと意味を継ぎ足す「スラッシュリーディング」スタイルの訳とする。
*   **色分け**: 各訳語ブロックには、対応する英文チャンクと同じクラス（`.t-S`, `.t-V`, `.t-M` 等）を適用する。
    *   例: `<span class='t-S'>その猫は</span> <span class='t-V'>食べた</span>`

#### 3. 語彙と文法 (`vocabulary` & `grammarNotes`)
*   **分離の原則**:
    *   `vocabulary`: 単語、熟語、慣用句の意味（例: `{ word: "achievements", meaning: "「業績」" }`）。
    *   `grammarNotes`: 文構造、構文、用法などの解説。
*   **最低項目数**: 学習効果を高めるため、**`vocabulary` と `grammarNotes` は、それぞれ最低3項目ずつ（合計6項目以上）** を必ず含めること。
*   **強調表示**: `grammarNotes` の `explanation` 内では、対象フレーズを `<b>phrase</b>` で必ず太字にする。
    *   例: `{ phrase: "came to be", explanation: "<b>came to be</b>: 「〜するようになった」。..." }`
*   **⚠️ 重要: phrase の完全一致ルール**:
    *   `grammarNotes.phrase` は**本文中に実際に存在するテキストと完全一致**する必要がある（クリック時に赤アンダーラインが表示されるため）。
    *   ❌ `"be unable to"` → ✅ `"was unable to"` （本文の実際の表現）
    *   ❌ `"carry on + -ing"` → ✅ `"carried on studying"` （パターン表記ではなく本文の実際の表現）

#### 4. 自然な翻訳 (`naturalTranslation`)
*   文全体の意味を掴むための、自然な日本語訳も含める。
*   `grammarAnalysis` オブジェクトのルートプロパティとして配置する。

#### 5. 厳格な検証ルール (Strict Verification & No Guessing)
*   **推測の禁止**: `mainVerbs` の特定において、推測や曖昧な判断は一切許されない。
*   **確認義務**: 文構造が複雑で主動詞の特定に少しでも迷いが生じる場合は、勝手にデータを生成せず、必ずユーザーに判断を仰ぐこと。

### D. 講師用要約 (Summary for Instructors) データ構造ルール
講師が指導前にパッセージの要点を素早く把握するためのデータです。`questions` 配列の直後（パッセージオブジェクト内）に追加します。このデータが存在する場合のみ、画面上に「講師用要約」ボタンが表示されます。

```javascript
summaryForInstructors: {
    title: "Salt（塩）", // 日本語タイトル
    intro: "人間にとって不可欠な塩の歴史...", // 全体の概要
    points: [ // 要約ポイントのリスト
        { label: "1. 過去の貴重さ", text: "昔は入手が困難で..." },
        { label: "2. 語源の歴史", text: "古代ローマでは..." }
    ]
}
```

### データ追加時のチェックリスト
1.  **IDの一意性**: `readingData` 配列内の各要素の `id`（例: `"grade3-2025-2-3C"`）は一意であること。
2.  **Sentence ID**: `content` 内の `sentences` の `id` は連番で、重複がないこと。
3.  **Logicの存在**: すべての設問に `logic` 配列が存在することを確認すること。
