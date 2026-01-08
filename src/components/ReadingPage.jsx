import React, { useState, useEffect } from 'react';
import { PassagePanel } from './PassagePanel';
import { TechniquePanel } from './TechniquePanel';
import { GrammarAnalysisLayout } from './GrammarAnalysisLayout';
import { BookOpen, ArrowLeft, Microscope, School, ClipboardPen } from 'lucide-react';
import { verifyGrammarData } from '../utils/grammarValidator';

export function ReadingPage({ passage, onBack, isStudentMode = false }) {
    // 状態管理
    const [activeQuestionId, setActiveQuestionId] = useState(passage.questions[0].id);
    const [targetSentenceId, setTargetSentenceId] = useState(null);
    const [keywordMatches, setKeywordMatches] = useState([]);
    const [isTargetHighlighted, setIsTargetHighlighted] = useState(false);
    const [manualHighlightId, setManualHighlightId] = useState(null);
    const [step1Keywords, setStep1Keywords] = useState([]); // Step 1 キーワード用
    const [showGrammarMode, setShowGrammarMode] = useState(false); // 隠しモード（英文解釈）
    const [showInstructorSummary, setShowInstructorSummary] = useState(false); // 指導者用要約モード
    const [showHomeworkModal, setShowHomeworkModal] = useState(false); // 宿題モーダル

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
                            {(points || []).map((point, idx) => (
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
                                            {(point.label || '').replace(/^\d+\.\s*/, '')} {/* 番号重複削除 */}
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
                    {!isStudentMode && (
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
                    )}
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
                    {!isStudentMode && (
                        <button
                            onClick={() => setShowHomeworkModal(true)}
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
                    )}
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
                        similarProblems={passage.similarProblems}
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
            {showHomeworkModal && (
                <HomeworkModal
                    passage={passage}
                    onClose={() => setShowHomeworkModal(false)}
                />
            )}
        </div>
    );
}

// Homework Modal Component
function HomeworkModal({ passage, onClose }) {
    const [teacherName, setTeacherName] = useState('');
    const [studentName, setStudentName] = useState('');
    const [deadline, setDeadline] = useState(() => {
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        return nextWeek.toISOString().split('T')[0];
    });
    const [comment, setComment] = useState('頑張ってね！');

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    };

    const handlePrint = () => {
        // Vercelの本番環境URLを指定
        const baseUrl = 'https://eiken-reading-navigator.vercel.app';

        // URLSearchParamsを使用してパラメータを構築（エンコード漏れ防止）
        const params = new URLSearchParams();
        params.set('id', passage.id);
        params.set('mode', 'student');

        const quizUrl = `${baseUrl}/?${params.toString()}`;
        const todayStr = formatDate(new Date().toISOString().split('T')[0]);
        const deadlineStr = deadline ? formatDate(deadline) : '未設定';

        // Generate answer rows
        let answerRows = '';
        passage.questions.forEach(q => {
            answerRows += `<tr><td style="font-weight: bold; padding: 15px;">(${q.id})</td><td style="padding: 15px;"></td><td style="padding: 15px;"></td></tr>`;
        });

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>解答用紙 - ${passage.title}</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
                <style>
                    body { 
                        font-family: 'Yu Gothic', 'Hiragino Sans', sans-serif; 
                        padding: 30px;
                        max-width: 600px;
                        margin: 0 auto;
                    }
                    .header {
                        text-align: center;
                        border-bottom: 2px solid #333;
                        padding-bottom: 15px;
                        margin-bottom: 20px;
                    }
                    .title { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }
                    .subtitle { font-size: 1rem; color: #666; }
                    .info-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                        margin-bottom: 20px;
                        padding: 15px;
                        background: #f8fafc;
                        border-radius: 8px;
                    }
                    .info-item { display: flex; gap: 8px; }
                    .info-label { font-weight: 700; color: #555; }
                    .comment-box {
                        background: #fff3cd;
                        padding: 15px;
                        border-radius: 8px;
                        margin-bottom: 20px;
                        border-left: 4px solid #ffc107;
                    }
                    .comment-label { font-weight: 700; color: #856404; margin-bottom: 5px; }
                    .answer-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    .answer-table th, .answer-table td {
                        border: 2px solid #333;
                        text-align: center;
                    }
                    .answer-table th { background: #e2e8f0; padding: 12px; }
                    .qr-section {
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        padding: 15px;
                        background: #f0f9ff;
                        border-radius: 8px;
                        margin-top: 20px;
                    }
                    .qr-text { font-size: 0.9rem; color: #0369a1; }
                    @media print {
                        .info-grid { background: #f8f8f8 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .comment-box { background: #fffbe6 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .qr-section { background: #f0f9ff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        button { display: none; }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="title">${passage.grade} 長文空所補充問題 解答用紙</div>
                    <div class="subtitle">📖 ${passage.title}</div>
                </div>

                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">📅 出題日:</span>
                        <span>${todayStr}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">⏰ 提出期限:</span>
                        <span>${deadlineStr}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">👨‍🏫 担当講師:</span>
                        <span>${teacherName || '未設定'}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">📝 生徒名:</span>
                        <span>${studentName || '________________'}</span>
                    </div>
                </div>

                <div class="comment-box">
                    <div class="comment-label">💬 先生からのメッセージ</div>
                    <div>${comment}</div>
                </div>

                <h3 style="margin-bottom: 10px;">📝 解答欄</h3>
                <table class="answer-table">
                    <thead>
                        <tr>
                            <th style="width: 100px;">問題番号</th>
                            <th style="width: 150px;">あなたの解答</th>
                            <th style="width: 100px;">正誤</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${answerRows}
                    </tbody>
                </table>

                <div class="qr-section">
                    <div id="qrcode"></div>
                    <div class="qr-text">
                        <strong>📱 解説を確認</strong><br>
                        このQRコードをスマホでスキャンすると、<br>
                        解説アプリを開くことができます。
                    </div>
                </div>

                <script>
                    new QRCode(document.getElementById('qrcode'), {
                        text: '${quizUrl}',
                        width: 100,
                        height: 100,
                        colorDark: "#0369a1",
                        colorLight: "#ffffff",
                    });
                    setTimeout(() => { window.print(); }, 500);
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3000
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '24px',
                width: '90%',
                maxWidth: '500px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }} onClick={e => e.stopPropagation()}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    borderBottom: '1px solid #e5e7eb',
                    paddingBottom: '10px'
                }}>
                    <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#1f2937' }}>📝 宿題プリント作成</h2>
                    <button onClick={onClose} style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: '#6b7280'
                    }}>×</button>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#374151' }}>👨‍🏫 担当講師名</label>
                    <input
                        type="text"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        placeholder="例：山田先生"
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#374151' }}>📝 生徒名</label>
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="例：田中太郎（空欄可）"
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#374151' }}>📅 提出期限</label>
                    <input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#374151' }}>💬 応援のコメント</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="頑張ってね！"
                        rows={3}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151' }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <button onClick={onClose} style={{
                        padding: '8px 16px',
                        borderRadius: '4px',
                        border: '1px solid #d1d5db',
                        background: 'white',
                        cursor: 'pointer',
                        color: '#374151'
                    }}>キャンセル</button>
                    <button onClick={handlePrint} style={{
                        padding: '8px 16px',
                        borderRadius: '4px',
                        border: 'none',
                        background: '#2563EB',
                        cursor: 'pointer',
                        color: 'white',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}>
                        🖨️ 印刷する
                    </button>
                </div>
            </div>
        </div>
    );
}

