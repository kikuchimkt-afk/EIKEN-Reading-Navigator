import React, { useState } from 'react';
import { Target, Search, MapPin, Lightbulb, ChevronDown, CheckCircle2, RefreshCw } from 'lucide-react';

export function TechniquePanel({ questions, activeQuestionId, onSelectQuestion, onShowHint, onShowAnswer, onReset, onKeywordSelect }) {
    const activeQuestion = questions.find(q => q.id === activeQuestionId) || questions[0];
    const [showAnswerLogic, setShowAnswerLogic] = useState(false);
    const [selectedChoiceId, setSelectedChoiceId] = useState(null);
    const [activeKeywords, setActiveKeywords] = useState([]); // 複数選択用に配列に変更
    const [isPassageActive, setIsPassageActive] = useState(false);
    const [hasCheckedPassage, setHasCheckedPassage] = useState(false);

    // 質問が変わったら状態をリセット
    React.useEffect(() => {
        setShowAnswerLogic(false);
        setSelectedChoiceId(null);
        setActiveKeywords([]);
        setIsPassageActive(false);
        setHasCheckedPassage(false);
        onShowHint([]);
        onShowAnswer(null); // 本文ハイライトもクリア
        if (onKeywordSelect) onKeywordSelect([]);
    }, [activeQuestionId]);

    const handleChoiceClick = (choiceId) => {
        if (!hasCheckedPassage) {
            alert('まずは Step 3 の「本文で探す」ボタンを押して、該当箇所を確認しましょう！');
            return;
        }
        setSelectedChoiceId(choiceId);
        setShowAnswerLogic(true);
    };

    const handlePassageToggle = (sentenceId) => {
        setHasCheckedPassage(true);
        if (isPassageActive) {
            setIsPassageActive(false);
            onShowAnswer(null);
        } else {
            setIsPassageActive(true);
            onShowAnswer(sentenceId);
        }
    };

    const handleResetAll = () => {
        setShowAnswerLogic(false);
        setSelectedChoiceId(null);
        setActiveKeywords([]);
        setIsPassageActive(false);
        setHasCheckedPassage(false);
        onShowHint([]);
        onShowAnswer(null);
        if (onKeywordSelect) onKeywordSelect([]);
        if (onReset) onReset();
    };

    const handleKeywordClick = (keyword) => {
        let newKeywords;
        if (activeKeywords.includes(keyword)) {
            // OFFにする
            newKeywords = activeKeywords.filter(k => k !== keyword);
        } else {
            // ONにする
            newKeywords = [...activeKeywords, keyword];
        }
        setActiveKeywords(newKeywords);

        // アクティブなキーワードがある場合、関連するすべてのマッチを抽出
        // 言い換え（paraphrase）マッチも含める
        if (newKeywords.length > 0) {
            // 全マッチの中から、アクティブなキーワード群に関連するものを抽出
            const relatedMatches = activeQuestion.keywordMatches.filter(m => {
                // マッチにkeywordプロパティがある場合はそれを使用
                if (m.keyword) return newKeywords.includes(m.keyword);

                // それ以外は、テキストの部分一致で判定
                // ただし、paraphraseタイプのマッチは常に含める（言い換えは関連キーワードがあれば表示）
                if (m.type === 'paraphrase') {
                    // paraphraseマッチは、そのキーワードに対応する解説がある場合に表示
                    const hasRelatedExplanation = activeQuestion.keywordExplanations &&
                        newKeywords.some(k => activeQuestion.keywordExplanations[k]);
                    return hasRelatedExplanation || newKeywords.length > 0;
                }

                return newKeywords.some(k =>
                    m.text.toLowerCase().includes(k.toLowerCase()) ||
                    k.toLowerCase().includes(m.text.toLowerCase())
                );
            });

            onShowHint(relatedMatches.length > 0 ? relatedMatches : []);
        } else {
            onShowHint([]);
        }

        if (onKeywordSelect) onKeywordSelect(newKeywords);
    };

    return (
        <div className="technique-panel">
            {/* 質問タブとリセットボタン */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div className="question-tabs" style={{ flex: 1, marginBottom: 0 }}>
                    {questions.map(q => (
                        <button
                            key={q.id}
                            className={`q-tab ${activeQuestionId === q.id ? 'active' : ''}`}
                            onClick={() => onSelectQuestion(q.id)}
                        >
                            ({q.id})
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleResetAll}
                    style={{
                        padding: '8px 12px',
                        background: '#f1f5f9',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: '#64748b',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        whiteSpace: 'nowrap'
                    }}
                    title="すべてのハイライトを消去"
                >
                    <RefreshCw size={16} />
                    <span style={{ fontSize: '0.8rem' }}>リセット</span>
                </button>
            </div>

            <div className="technique-content">
                <div key={activeQuestion.id} className="question-section">

                    {/* 設問カード */}
                    <div className="section-card">
                        <div className="section-header">
                            <Target size={18} />
                            <span>Question</span>
                        </div>
                        <div className="question-text">{activeQuestion.text}</div>
                        {activeQuestion.textTranslation && (
                            <div className="question-translation" style={{
                                marginTop: '8px',
                                fontSize: '0.9rem',
                                color: '#64748b',
                                borderTop: '1px dashed #e2e8f0',
                                paddingTop: '8px'
                            }}>
                                {activeQuestion.textTranslation}
                            </div>
                        )}
                    </div>

                    {/* Step 1: キーワード抽出 */}
                    <div className="technique-step step-1">
                        <div className="step-header">
                            <span className="step-number">1</span>
                            <span className="step-title">設問からキーワードを抽出</span>
                        </div>
                        <div>
                            これらの単語を本文から探します：
                            <div className="keyword-chips">
                                {activeQuestion.keywords.map((kw, i) => {
                                    // このキーワードがアクティブかどうか
                                    const isActive = activeKeywords.includes(kw);

                                    return (
                                        <span
                                            key={i}
                                            className={`keyword-tag ${isActive ? 'active' : ''}`}
                                            onClick={() => handleKeywordClick(kw)}
                                            style={{
                                                backgroundColor: isActive ? '#fff7ed' : 'white',
                                                borderColor: isActive ? '#f97316' : '#fcd34d',
                                                color: isActive ? '#c2410c' : '#d97706'
                                            }}
                                        >
                                            <Search size={14} style={{ marginRight: 4 }} />
                                            {kw}
                                        </span>
                                    );
                                })}
                            </div>

                            {/* キーワード解説表示エリア */}
                            {/* キーワード解説表示エリア */}
                            {activeKeywords.map(kw => (
                                activeQuestion.keywordExplanations && activeQuestion.keywordExplanations[kw] && (
                                    <div key={kw} className="keyword-explanation" style={{
                                        marginTop: '12px',
                                        padding: '12px',
                                        backgroundColor: '#fffbeb',
                                        borderRadius: '8px',
                                        border: '1px solid #fcd34d',
                                        fontSize: '0.95rem',
                                        color: '#92400e',
                                        lineHeight: '1.6',
                                        animation: 'fadeIn 0.3s ease'
                                    }}>
                                        <strong style={{ marginRight: '6px' }}>{kw}:</strong>
                                        {activeQuestion.keywordExplanations[kw]}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Step 2: 選択肢確認 */}
                    <div className="technique-step step-2">
                        <div className="step-header">
                            <span className="step-number">2</span>
                            <span className="step-title">選択肢を確認</span>
                        </div>

                        {activeQuestion.choiceAdvice && (
                            <div style={{
                                marginBottom: '16px',
                                padding: '12px 16px',
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                borderLeft: '4px solid #3b82f6',
                                fontSize: '0.95rem',
                                color: '#1e40af',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '8px'
                            }}>
                                <Lightbulb size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>{activeQuestion.choiceAdvice}</div>
                            </div>
                        )}

                        <div className="choices-list">
                            {activeQuestion.choices.map((choice) => {
                                let statusClass = '';
                                if (showAnswerLogic) {
                                    if (choice.isCorrect) statusClass = 'correct';
                                    else if (selectedChoiceId === choice.id) statusClass = 'wrong';
                                } else if (selectedChoiceId === choice.id) {
                                    statusClass = 'selected';
                                }

                                const isLocked = !hasCheckedPassage && !showAnswerLogic;

                                return (
                                    <div
                                        key={choice.id}
                                        className={`choice-item ${statusClass}`}
                                        onClick={() => !showAnswerLogic && handleChoiceClick(choice.id)}
                                        style={{
                                            cursor: showAnswerLogic ? 'default' : (isLocked ? 'not-allowed' : 'pointer'),
                                            opacity: isLocked ? 0.6 : 1,
                                            position: 'relative',
                                            alignItems: 'flex-start'
                                        }}
                                        title={isLocked ? "まずはStep 3で本文を確認してください" : ""}
                                    >
                                        <div className="choice-num" style={{ marginTop: '2px' }}>
                                            {statusClass === 'correct' ? <CheckCircle2 size={16} color="white" /> : choice.id}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: statusClass === 'correct' ? '600' : 'normal' }}>
                                                {choice.text}
                                            </div>
                                            {showAnswerLogic && choice.translation && (
                                                <div style={{
                                                    fontSize: '0.9rem',
                                                    color: statusClass === 'correct' ? '#166534' : '#64748b',
                                                    marginTop: '6px',
                                                    paddingTop: '6px',
                                                    borderTop: '1px dashed #e2e8f0',
                                                    lineHeight: '1.4'
                                                }}>
                                                    {choice.translation}
                                                </div>
                                            )}
                                        </div>
                                        {isLocked && <div style={{ fontSize: '1.2rem', marginLeft: '8px' }}>🔒</div>}
                                        {statusClass === 'correct' && !isLocked && (
                                            <div style={{ display: 'flex', alignItems: 'center', height: '100%', marginLeft: '8px', alignSelf: 'center' }}>
                                                <CheckCircle2 size={24} className="text-green-600" />
                                            </div>
                                        )}
                                        {statusClass === 'wrong' && (
                                            <div style={{
                                                fontSize: '1.5rem',
                                                color: '#ef4444',
                                                fontWeight: 'bold',
                                                marginLeft: '12px',
                                                alignSelf: 'center'
                                            }}>✕</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Step 3: ヒント・場所 */}
                    <div className="technique-step step-3">
                        <div className="step-header">
                            <span className="step-number">3</span>
                            <span className="step-title">本文で探す場所</span>
                        </div>
                        {activeQuestion.paragraphStrategy && (
                            <div style={{
                                marginBottom: '12px',
                                fontWeight: 'bold',
                                color: '#166534',
                                background: '#dcfce7',
                                padding: '8px 12px',
                                borderRadius: '6px'
                            }}>
                                📌 セオリー: {activeQuestion.paragraphStrategy}
                            </div>
                        )}

                        <div className="paragraph-hint">
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 'bold', marginBottom: 8 }}>
                                <MapPin size={18} />
                                <span>{activeQuestion.hint.description.split('。')[0]}</span>
                            </div>
                            <div>{activeQuestion.hint.description.split('。').slice(1).join('。')}</div>

                            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                                {/* 段落へジャンプボタン */}
                                <button
                                    className="hint-highlight-btn"
                                    onClick={() => handlePassageToggle(activeQuestion.hint.targetSentenceId)}
                                    style={{
                                        background: isPassageActive ? '#ef4444' : '#22c55e'
                                    }}
                                >
                                    {isPassageActive ? (
                                        <><Search size={16} /> ハイライト解除</>
                                    ) : (
                                        <><Search size={16} /> 本文で探す</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Step 2への誘導 - まだ正解を表示していない場合 */}
                    {!showAnswerLogic && (
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                            background: '#eff6ff',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            border: '2px dashed #3b82f6',
                            color: '#1e40af',
                            fontWeight: 'bold'
                        }}>
                            <div style={{ marginBottom: '8px', fontSize: '1.2rem' }}>👀 本文を確認しましたか？</div>
                            <div>上の「Step 2」に戻って、最も適切な選択肢を選んでください！</div>
                        </div>
                    )}

                    {/* 解答表示ボタン - デバッグ用などで手動表示したい場合のために残すか、削除するか。
                        今回は「選択肢クリックで表示」にする要望なので、このボタンは
                        「どうしてもわからない場合」用として残すか、隠すか。
                        要望は「正誤を発表してください」なので、選択肢クリックがトリガーで良い。
                        ボタンは「正解へのロジックを表示」として残しておく。 */}
                    {!showAnswerLogic ? (
                        <button className="show-answer-btn" onClick={() => setShowAnswerLogic(true)}>
                            <Lightbulb size={20} />
                            正解へのロジックを表示
                            <ChevronDown size={20} />
                        </button>
                    ) : (
                        <div className="answer-logic">
                            <div className="logic-title">
                                <Lightbulb size={20} />
                                正解の導き方
                            </div>
                            <div className="logic-flow">
                                {activeQuestion.logic ? activeQuestion.logic.map((step, idx) => (
                                    <React.Fragment key={idx}>
                                        {step.type === 'arrow' ? (
                                            <div className="logic-arrow-down">↓</div>
                                        ) : (
                                            <div className="logic-step">
                                                {step.content}
                                            </div>
                                        )}
                                    </React.Fragment>
                                )) : (
                                    <div className="logic-step" style={{ color: '#94a3b8', fontStyle: 'italic' }}>
                                        解説データがありません
                                    </div>
                                )}
                            </div>
                            <div className="logic-conclusion">
                                {activeQuestion.logic?.find(l => l.type === 'conclusion')?.content || "正解データなし"}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
