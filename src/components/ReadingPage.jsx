import React, { useState, useEffect } from 'react';
import { PassagePanel } from './PassagePanel';
import { TechniquePanel } from './TechniquePanel';
import { GrammarAnalysisLayout } from './GrammarAnalysisLayout';
import { BookOpen, ArrowLeft, Microscope, School, ClipboardPen } from 'lucide-react';
import { verifyGrammarData } from '../utils/grammarValidator';

export function ReadingPage({ passage, onBack }) {
    // 状態管理
    const [activeQuestionId, setActiveQuestionId] = useState(passage.questions[0].id);
    const [targetSentenceId, setTargetSentenceId] = useState(null);
    const [keywordMatches, setKeywordMatches] = useState([]);
    const [isTargetHighlighted, setIsTargetHighlighted] = useState(false);
    const [manualHighlightId, setManualHighlightId] = useState(null);
    const [step1Keywords, setStep1Keywords] = useState([]); // Step 1 キーワード用
    const [showGrammarMode, setShowGrammarMode] = useState(false); // 隠しモード（英文解釈）
    const [showInstructorSummary, setShowInstructorSummary] = useState(false); // 指導者用要約モード

    // passageが変更された場合に状態をリセット
    useEffect(() => {
        setActiveQuestionId(passage.questions[0].id);
        setTargetSentenceId(null);
        setKeywordMatches([]);
        setIsTargetHighlighted(false);
        setManualHighlightId(null);
        setStep1Keywords([]);
        setShowInstructorSummary(false); // リセット

        // Validate Grammar Data for the current passage (Local Development Only)
        if (import.meta.env.DEV) {
            verifyGrammarData([passage]);
        }
    }, [passage]);

    // 質問選択ハンドラ
    const handleSelectQuestion = (qId) => {
        setActiveQuestionId(qId);
        setTargetSentenceId(null);
        setKeywordMatches([]);
        setIsTargetHighlighted(false);
        setManualHighlightId(null);
        setStep1Keywords([]);
    };

    const handleSentenceClick = (sentenceId) => {
        setManualHighlightId(prev => prev === sentenceId ? null : sentenceId);
    };

    const handleManualReset = () => {
        setManualHighlightId(null);
    };

    // ヒント表示ハンドラ from TechniquePanel (Step 1)
    const handleShowHint = (matches) => {
        if (matches) {
            setKeywordMatches(matches);
            // 最初のマッチ箇所にスクロールするが、緑ハイライトはしない
            if (matches.length > 0) {
                setTargetSentenceId(matches[0].sentenceId);
                setIsTargetHighlighted(false); // 緑ハイライトOFF
            } else {
                setTargetSentenceId(null);
                setIsTargetHighlighted(false);
            }
        }
    };

    // 正解箇所のハイライトハンドラ (Step 3)
    const handleShowAnswerLocation = (sentenceId) => {
        setTargetSentenceId(sentenceId);
        // その文にスクロールして緑ハイライト
        setIsTargetHighlighted(!!sentenceId); // IDがあればON
    };

    // 指導者要約モーダル
    const InstructorSummaryModal = () => {
        if (!passage.summaryForInstructors) return null;
        const { title, intro, points } = passage.summaryForInstructors;

        return (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2000,
                backdropFilter: 'blur(5px)',
                animation: 'fadeIn 0.2s ease-out'
            }} onClick={() => setShowInstructorSummary(false)}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    width: '90%',
                    maxWidth: '800px',
                    maxHeight: '85vh',
                    overflowY: 'auto',
                    padding: '0',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    position: 'relative'
                }} onClick={e => e.stopPropagation()}>
                    <div style={{
                        padding: '1.5rem',
                        borderBottom: '1px solid #e2e8f0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'sticky',
                        top: 0,
                        background: 'white',
                        zIndex: 10
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                backgroundColor: '#EFF6FF',
                                padding: '8px',
                                borderRadius: '8px',
                                color: '#2563EB'
                            }}>
                                <School size={24} />
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>{title}</h3>
                        </div>
                        <button
                            onClick={() => setShowInstructorSummary(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                color: '#64748b',
                                width: '32px',
                                height: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                transition: 'background 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'}
                            onMouseLeave={e => e.currentTarget.style.background = 'none'}
                        >
                            ×
                        </button>
                    </div>
                    <div style={{ padding: '2rem' }}>
                        <div style={{
                            backgroundColor: '#F8FAFC',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            marginBottom: '2rem',
                            border: '1px solid #E2E8F0',
                            lineHeight: '1.7',
                            color: '#334155'
                        }}>
                            {intro}
                        </div>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {points.map((point, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        backgroundColor: '#2563EB',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold',
                                        marginTop: '4px'
                                    }}>
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 style={{
                                            margin: '0 0 0.5rem 0',
                                            color: '#1e293b',
                                            fontSize: '1.1rem',
                                            fontWeight: '700'
                                        }}>
                                            {point.label.replace(/^\d+\.\s*/, '')} {/* 番号重複削除 */}
                                        </h4>
                                        <p style={{
                                            margin: 0,
                                            color: '#475569',
                                            lineHeight: '1.6'
                                        }}>
                                            {point.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        padding: '1.5rem',
                        background: '#F1F5F9',
                        borderTop: '1px solid #E2E8F0',
                        textAlign: 'center',
                        color: '#64748b',
                        fontSize: '0.9rem'
                    }}>
                        講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="app-container">
            {/* ヘッダー */}
            <header className="app-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={onBack}
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                            padding: '0',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background 0.2s',
                            marginRight: '1rem',
                            width: '40px',
                            height: '40px'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                        title="問題一覧に戻る"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <div className="app-title">
                            <BookOpen size={24} />
                            🎯 EIKEN Reading Navigator
                        </div>
                        <div className="app-subtitle">設問・選択肢から読むべき箇所を特定するスキャニング練習</div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                        onClick={() => setShowGrammarMode(true)}
                        style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 6px rgba(37, 99, 235, 0.3)',
                            transition: 'all 0.2s ease',
                            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(37, 99, 235, 0.4)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(37, 99, 235, 0.3)';
                        }}
                        title="構造解析モード (詳細指導用)"
                    >
                        <Microscope size={18} strokeWidth={2.5} />
                        Study (詳細指導)
                    </button>
                    <span className="badge">{passage.subTitle}</span>
                    <button
                        style={{
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            border: 'none',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            boxShadow: '0 2px 4px rgba(245, 158, 11, 0.3)',
                            transition: 'transform 0.1s, box-shadow 0.1s',
                            marginLeft: '8px'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(245, 158, 11, 0.4)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(245, 158, 11, 0.3)';
                        }}
                    >
                        <ClipboardPen size={18} />
                        宿題
                    </button>
                </div>
            </header>

            {/* メインコンテンツ */}
            {showGrammarMode ? (
                <GrammarAnalysisLayout
                    passage={passage}
                    onClose={() => setShowGrammarMode(false)}
                />
            ) : (
                <div className="main-content">
                    {/* 左側: 本文パネル */}
                    <PassagePanel
                        content={passage.content}
                        title={passage.title}
                        targetSentenceId={targetSentenceId}
                        keywordMatches={keywordMatches}
                        isTargetHighlighted={isTargetHighlighted}
                        hintHighlightWord={[
                            ...(step1Keywords || []),
                            (isTargetHighlighted ? passage.questions.find(q => q.id === activeQuestionId)?.hint?.highlightWord : null)
                        ].filter(Boolean)}
                        hintHighlightSentenceId={isTargetHighlighted ? passage.questions.find(q => q.id === activeQuestionId)?.hint?.highlightWordSentenceId : null}
                        manualHighlightId={manualHighlightId}
                        onSentenceClick={handleSentenceClick}
                    />

                    {/* 右側: テクニックパネル */}
                    <TechniquePanel
                        questions={passage.questions}
                        activeQuestionId={activeQuestionId}
                        onSelectQuestion={handleSelectQuestion}
                        onShowHint={handleShowHint}
                        onShowAnswer={handleShowAnswerLocation}
                        onReset={handleManualReset}
                        onKeywordSelect={setStep1Keywords}
                    />
                </div>
            )}

            {/* 講師用要約ボタン */}
            {passage.summaryForInstructors && !showGrammarMode && (
                <button
                    onClick={() => setShowInstructorSummary(true)}
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        backgroundColor: '#2563EB',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '12px 24px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        zIndex: 100,
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    }}
                >
                    <School size={20} />
                    講師用要約
                </button>
            )}

            {/* モーダル表示 */}
            {showInstructorSummary && <InstructorSummaryModal />}
        </div>
    );
}

