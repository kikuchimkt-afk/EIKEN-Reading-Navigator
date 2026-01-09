---
description: オリジナル問題を追加する際のワークフロー
---

# オリジナル問題追加ワークフロー

## 1. 必須項目チェックリスト

### 基本情報
- `id`: 一意のID（例: `"grade-pre1-original-eniac"`）
- `grade`: 級（`"準1級"`, `"2級"`, `"準2級"` など）
- `title`: 問題タイトル（英語）
- `subTitle`: 問題番号（`"問題1"`, `"問題2"` など）
- `genre`: ジャンル（`"歴史 / テクノロジー"`, `"自然科学"` など）
- `isOriginal: true`: オリジナル問題フラグ（必須）
- `similarProblems`: 類似過去問

### content（本文）
各段落・各文に以下を含める：
- `id`: 文ID（連番）
- `text`: 英文
- `translation`: 日本語訳
- `grammarAnalysis`: 文法解析

### grammarAnalysis 必須項目
- `mainVerbs`: 主動詞の配列
- `structureHtml`: チャンク構造（S, V, O, C, M タグ付きHTML）
- `translationHtml`: スラッシュリーディング訳
- `naturalTranslation`: 自然な日本語訳
- `vocabulary`: 語彙（**最低3項目**）
- `grammarNotes`: 文法解説（**最低3項目**、`phrase`は本文と完全一致必須）

## 2. 追加記憶ルール（重要）

### 講師用要約（summaryForInstructors）
- **必ず作成すること**
- `title`, `intro`, `points` を含める

### 設問（questions）
- **`textTranslation`**: 設問文の日本語訳を必ず追加

### 従属節のS'V'構造解説
- grammarAnalysisで従属節がある場合、S'V'（S2, V2など）の解説を追加
- **複雑な場合**: 節や句ごとに箇条書きにして見やすくする

例：
```javascript
grammarNotes: [
    { 
        phrase: "when the ENIAC was unveiled", 
        explanation: `<b>when節の構造</b>:
<ul>
<li><b>S'</b>: the ENIAC</li>
<li><b>V'</b>: was unveiled（受動態）</li>
<li><b>M'</b>: to the public</li>
</ul>
「ENIACが公開されたとき」という時を表す副詞節。`
    }
]
```

## 3. logic（正解ロジック）
- **必須！** 欠落するとアプリがクラッシュ
- `type: "text"`, `type: "arrow"`, `type: "conclusion"` を使用

## 4. チェックリスト
1. IDの一意性確認
2. Sentence IDは連番で重複なし
3. すべての設問に `logic` 配列が存在
4. すべての設問に `textTranslation` が存在
5. `summaryForInstructors` が存在
6. 複雑な従属節には箇条書き解説
