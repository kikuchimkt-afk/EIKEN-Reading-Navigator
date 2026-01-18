import React, { useState, useEffect } from 'react';
import { readingData } from '../data/readingData';
import { Printer, BookText } from 'lucide-react';

// 背景画像リスト（起動ごとにシーケンシャルに変更）
const BACKGROUND_IMAGES = [
    '/images/cafe-bg-1.png',
    '/images/cafe-bg-2.png',
    '/images/cafe-bg-3.png',
    '/images/cafe-bg-4.png',
    '/images/cafe-bg-5.png',
];

// 級の順序と設定（タブ用のみ）
const GRADE_CONFIG = [
    { id: 'pre1', label: '準1級', filter: '準1級', color: '#f59e0b' },
    { id: 'g2', label: '2級', filter: '2級', color: '#3b82f6' },
    { id: 'pre2plus', label: '準2級+', filter: '準2級プラス', color: '#8b5cf6' },
    { id: 'pre2', label: '準2級', filter: '準2級', color: '#06b6d4' },
    { id: 'g3', label: '3級', filter: '3級', color: '#10b981' },
    { id: 'g4', label: '4級', filter: '4級', color: '#ec4899' },
];

// 統一ボタンカラー（全級共通）
const BUTTON_COLORS = {
    guide: { color: '#6366f1', hoverBg: 'rgba(99, 102, 241, 0.15)' },  // インディゴ
    print: { color: 'rgba(255,255,255,0.8)', hoverBg: 'rgba(255,255,255,0.1)' }
};

// 年度ごとの色設定（ボタンと被らない色）
const YEAR_COLORS = {
    '2025': { color: '#fbbf24' },  // アンバー
    '2024': { color: '#34d399' },  // エメラルド
    '2023': { color: '#f472b6' },  // ピンク
    '2022': { color: '#fb923c' },  // オレンジ
    '2021': { color: '#a78bfa' },  // バイオレット
    'default': { color: '#94a3b8' }
};

// 年度を抽出するヘルパー関数
const extractYear = (subTitle) => {
    const match = subTitle?.match(/(\d{4})年度/);
    return match ? match[1] : '';
};

// 回と大問を抽出するヘルパー関数
const extractExamInfo = (subTitle) => {
    // 形式: "2023年度 第3回 準1級 大問3" -> "第3回-3"
    // 形式: "2023年度 第3回 2級 大問3B" -> "第3回-3B"
    const match = subTitle?.match(/第(\d+)回.*?大問?([\w\d-]+)/);
    if (match) {
        return `第${match[1]}回-${match[2]}`;
    }
    return subTitle || '';
};

// 年度カラーを取得
const getYearColor = (year) => {
    return YEAR_COLORS[year] || YEAR_COLORS['default'];
};

// 背景画像インデックスを取得・保存
const getBackgroundIndex = () => {
    const stored = localStorage.getItem('cafeBgIndex');
    const index = stored ? parseInt(stored, 10) : 0;
    const nextIndex = (index + 1) % BACKGROUND_IMAGES.length;
    localStorage.setItem('cafeBgIndex', nextIndex.toString());
    return index;
};

export function ProblemList({ onSelectPassage, activeGrade, onGradeChange }) {
    // const [activeGrade, setActiveGrade] = useState('pre1'); // App.jsxにリフトアップ
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        setBgIndex(getBackgroundIndex());
    }, []);

    const handlePrint = (passage) => {
        // 準1級、2級、準2級、準2級+、3級の全問題にテキストベースの印刷レイアウトを適用
        const isTargetExam = ['準1級', '2級', '準2級', '準2級プラス', '3級'].includes(passage.grade);

        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            alert('ポップアップがブロックされました。');
            return;
        }

        if (isTargetExam) {
            // テキストベースのレイアウト生成
            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>印刷プレビュー - ${passage.title}</title>
                    <style>
                        @page { size: A4 landscape; margin: 15mm 8mm 8mm 8mm; }
                        body { 
                            margin: 0; 
                            padding: 0; 
                            font-family: "Times New Roman", "Hiragino Mincho ProN", serif; 
                            font-size: 9pt;
                            line-height: 1.3;
                            color: #000;
                            box-sizing: border-box;
                        }
                        .page-container {
                            width: 281mm;
                            height: 187mm; /* 210mm - 15mm(top) - 8mm(bottom) */
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 10mm;
                            margin: 0 auto;
                        }
                        .column {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                        }
                        .left-column {
                            border-right: 1px dashed #ccc;
                            padding-right: 5mm;
                        }
                        .right-column {
                            padding-left: 0; /* Reset padding for sidebar layout */
                        }
                        h1 {
                            font-size: 14pt;
                            text-align: center;
                            margin-bottom: 3mm;
                            font-family: sans-serif;
                            line-height: 1.1;
                        }
                        .passage-text p {
                            text-indent: 1em;
                            margin-bottom: 1.5mm;
                            text-align: justify;
                        }
                        
                        /* Question Layout */
                        .question-item {
                            display: flex;
                            border-bottom: 1px dashed #ccc;
                            margin-bottom: 0;
                            break-inside: avoid;
                        }
                        .question-item:last-child {
                            border-bottom: none;
                        }
                        .q-sidebar {
                            width: 8mm;
                            background-color: #e5e7eb;
                            display: flex;
                            justify-content: center;
                            padding-top: 2mm;
                            font-weight: bold;
                            font-size: 9pt;
                            border-right: 1px solid #d1d5db;
                            flex-shrink: 0;
                        }
                        .q-content {
                            flex: 1;
                            padding: 2mm 3mm;
                        }
                        .question-text {
                            font-weight: bold;
                            margin-bottom: 2mm;
                        }
                        .choices-list {
                            display: flex;
                            flex-direction: column;
                            gap: 1mm;
                        }
                        .choice-item {
                            font-size: 9pt;
                            display: flex;
                            gap: 2mm;
                        }
                        .choice-label {
                            font-weight: bold;
                        }
                        
                        .answer-footer {
                            margin-top: auto;
                            text-align: right;
                            font-size: 9pt;
                            border-top: 1px solid #000;
                            padding-top: 2mm;
                            display: flex;
                            justify-content: flex-end;
                            gap: 4mm;
                        }
                    </style>
                </head>
                <body>
                    <div class="page-container">
                        <!-- 左カラム：本文 -->
                        <div class="column left-column">
                            <div class="header-info">${passage.subTitle}</div>
                            <h1>${passage.title}</h1>
                            <div class="passage-text">
                                ${passage.content.map(para => `
                                    <p>${para.sentences.map(s => s.text).join(' ')}</p>
                                `).join('')}
                            </div>
                            ${passage.similarProblems ? `
                                <div style="margin-top: 10mm; padding-top: 5mm; border-top: 1px solid #ccc; text-align: right; font-size: 9pt; color: #666;">
                                    <span style="font-weight: bold; margin-right: 0.5em;">類題：</span>
                                    ${typeof passage.similarProblems === 'string'
                        ? passage.similarProblems
                        : `${passage.similarProblems.exam} <span style="font-style: italic; margin-left: 0.5em;">${passage.similarProblems.title}</span>`
                    }
                                </div>
                            ` : ''}
                        </div>

                        <!-- 右カラム：設問 -->
                        <div class="column right-column">
                            <div class="header-info">Questions</div>
                            <div class="questions-list">
                                ${passage.questions.map((q, idx) => `
                                    <div class="question-item">
                                        <div class="q-sidebar">
                                            (${q.id || idx + 1})
                                        </div>
                                        <div class="q-content">
                                            <div class="question-text">
                                                ${q.text}
                                            </div>
                                            <div class="choices-list">
                                                ${q.choices.map((c, cIdx) => `
                                                    <div class="choice-item">
                                                        <span class="choice-label">${cIdx + 1}</span>
                                                        <span>${c.text}</span>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <!-- 正解の表示 -->
                            <div class="answer-footer">
                                <b>正解:</b>
                                ${passage.questions.map((q, idx) => {
                        const correctIndex = q.choices.findIndex(c => c.isCorrect) + 1;
                        return `<span>(${q.id || idx + 1}) ${correctIndex}</span>`;
                    }).join('')}
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `;
            printWindow.document.write(htmlContent);
            printWindow.document.close();
        } else {
            // 既存の画像ベースのレイアウト
            const origin = window.location.origin;

            // コンテンツ画像の配列対応処理
            let contentImages = [];
            if (passage.images?.content) {
                if (Array.isArray(passage.images.content)) {
                    contentImages = passage.images.content.map(path => `${origin}${path}`);
                } else {
                    contentImages = [`${origin}${passage.images.content}`];
                }
            } else {
                contentImages = ['https://placehold.co/800x600?text=Problem+Image+Not+Found'];
            }

            const questionImage = passage.images?.question
                ? `${origin}${passage.images.question}`
                : 'https://placehold.co/800x600?text=Question+Image+Not+Found';

            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>印刷プレビュー - ${passage.title}</title>
                    <style>
                        @page { size: A4 landscape; margin: 1cm; }
                        body { margin: 0; padding: 0; font-family: "Noto Sans JP", sans-serif; background-color: #f3f4f6; }
                        .page-container { width: 277mm; height: 190mm; margin: 0 auto; display: flex; gap: 15px; background-color: white; box-sizing: border-box; }
                        .panel { flex: 1; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 1px solid #e5e7eb; background-color: #fff; overflow: hidden; position: relative; }
                        /* 画像のスタイル：複数枚ある場合は高さを分け合う */
                        .panel img { 
                            max-width: 100%; 
                            max-height: 100%; 
                            object-fit: contain; 
                            flex: 1; 
                            min-height: 0; 
                        }
                        @media print { body { background-color: white; } .page-container { width: 100%; height: 100vh; border: none; } .panel { border: none; } }
                    </style>
                </head>
                <body>
                    <div class="page-container">
                        <div class="panel">
                            ${contentImages.map(img => `<img src="${img}" alt="問題本文">`).join('')}
                        </div>
                        <div class="panel"><img src="${questionImage}" alt="設問"></div>
                    </div>
                </body>
                </html>
            `;
            printWindow.document.write(htmlContent);
            printWindow.document.close();
        }
    };

    // 現在選択中の級の設定
    const currentGradeConfig = GRADE_CONFIG.find(g => g.id === activeGrade) || GRADE_CONFIG[0];

    // 現在の級の問題をフィルタ
    // 現在の級の問題をフィルタし、年度・回・IDの順でソート（新しい順）
    const filteredPassages = readingData
        .filter(p => p.grade === currentGradeConfig.filter)
        .sort((a, b) => {
            // 0. オリジナル問題同士の比較 (問題番号順: 昇順)
            if (a.isOriginal && b.isOriginal) {
                const numA = parseInt(a.subTitle?.replace(/[^0-9]/g, '') || '0');
                const numB = parseInt(b.subTitle?.replace(/[^0-9]/g, '') || '0');
                return numA - numB;
            }

            // 1. 年度で比較 (降順)
            const yearA = parseInt(extractYear(a.subTitle)) || 0;
            const yearB = parseInt(extractYear(b.subTitle)) || 0;
            if (yearA !== yearB) return yearB - yearA;

            // 2. 回で比較 (降順)
            const sessionMatchA = a.subTitle?.match(/第(\d+)回/);
            const sessionMatchB = b.subTitle?.match(/第(\d+)回/);
            const sessionA = sessionMatchA ? parseInt(sessionMatchA[1]) : 0;
            const sessionB = sessionMatchB ? parseInt(sessionMatchB[1]) : 0;
            if (sessionA !== sessionB) return sessionB - sessionA;

            // 3. IDで比較 (降順 - 念のため)
            if (a.id < b.id) return 1;
            if (a.id > b.id) return -1;
            return 0;
        });

    return (
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            padding: '2.5rem 2rem',
        }}>
            {/* カフェ背景画像（起動ごとに変更） */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${BACKGROUND_IMAGES[bgIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.35)',
                zIndex: 0
            }} />

            {/* 暗めのオーバーレイ */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(15, 23, 42, 0.5)',
                zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
                {/* ヘッダー */}
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h1 style={{
                        color: '#f8fafc',
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '0.75rem',
                        letterSpacing: '0.08em',
                        textShadow: '0 2px 20px rgba(0,0,0,0.5)'
                    }}>
                        EIKEN Reading Navigator
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1rem',
                        letterSpacing: '0.05em'
                    }}>
                        学習したい問題を選択してください
                    </p>
                </div>

                {/* タブナビゲーション */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '2.5rem',
                    flexWrap: 'wrap'
                }}>
                    {GRADE_CONFIG.map((grade) => {
                        const isActive = activeGrade === grade.id;
                        const count = readingData.filter(p => p.grade === grade.filter).length;

                        return (
                            <button
                                key={grade.id}
                                onClick={() => onGradeChange(grade.id)}
                                style={{
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '12px',
                                    border: `2px solid ${isActive ? grade.color : 'rgba(255,255,255,0.3)'}`,
                                    background: isActive
                                        ? `rgba(255,255,255,0.1)`
                                        : 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(12px)',
                                    color: isActive ? grade.color : 'rgba(255,255,255,0.7)',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                }}
                            >
                                {grade.label}
                                {count > 0 && (
                                    <span style={{
                                        background: isActive ? grade.color : 'rgba(255,255,255,0.2)',
                                        color: isActive ? 'white' : 'rgba(255,255,255,0.8)',
                                        padding: '0.15rem 0.6rem',
                                        borderRadius: '999px',
                                        fontSize: '0.75rem',
                                        fontWeight: '500'
                                    }}>
                                        {count}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Original Questions Section */}
                {filteredPassages.some(p => p.isOriginal) && (
                    <div style={{ maxWidth: '1200px', margin: '0 auto 3rem auto' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            paddingLeft: '0.5rem',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{
                                width: '4px',
                                height: '28px',
                                background: '#f43f5e', // distinct color for original
                                borderRadius: '2px',
                                boxShadow: `0 0 12px #f43f5e`
                            }} />
                            <h2 style={{
                                color: '#f1f5f9',
                                fontSize: '1.35rem',
                                fontWeight: '600',
                                margin: 0,
                                letterSpacing: '0.03em'
                            }}>
                                英検{currentGradeConfig.filter} オリジナル問題
                            </h2>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1.25rem'
                        }}>
                            {filteredPassages.filter(p => p.isOriginal).map((passage) => {
                                const year = extractYear(passage.subTitle);
                                const examInfo = passage.isOriginal ? passage.subTitle : extractExamInfo(passage.subTitle);
                                const yearColor = getYearColor(year);

                                return (
                                    <div
                                        key={passage.id}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.08)',
                                            backdropFilter: 'blur(16px)',
                                            borderRadius: '16px',
                                            padding: '1.5rem',
                                            border: '1px solid rgba(244, 63, 94, 0.3)', // Red border for original
                                            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            cursor: 'default',
                                            position: 'relative',
                                            overflow: 'hidden' // Ensure badge doesn't overflow if positioned at edge
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                                            e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.5)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                            e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.3)';
                                        }}
                                    >
                                        {/* Genre Badge */}
                                        {passage.genre && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '1rem',
                                                right: '1rem',
                                                background: '#f97316',
                                                color: '#ffffff',
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                fontWeight: 'bold',
                                                boxShadow: '0 2px 8px rgba(249, 115, 22, 0.4)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                zIndex: 10
                                            }}>
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff' }}></span>
                                                {passage.genre}
                                            </div>
                                        )}
                                        {/* Card Header: Badge + Info */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.85rem',
                                            marginBottom: '0.85rem'
                                        }}>

                                            <span style={{
                                                color: '#f1f5f9',
                                                fontSize: '1.1rem',
                                                fontWeight: '600',
                                                letterSpacing: '0.02em'
                                            }}>
                                                {examInfo}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontSize: '0.95rem',
                                            fontWeight: '500',
                                            margin: '0 0 1.35rem 0',
                                            fontStyle: 'italic',
                                            lineHeight: '1.5'
                                        }}>
                                            {passage.title}
                                        </h3>

                                        {/* Buttons */}
                                        <div style={{
                                            display: 'flex',
                                            gap: '0.75rem'
                                        }}>
                                            <button
                                                onClick={() => onSelectPassage(passage.id)}
                                                style={{
                                                    flex: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.8rem 1rem',
                                                    background: 'transparent',
                                                    backdropFilter: 'blur(8px)',
                                                    color: BUTTON_COLORS.guide.color,
                                                    border: `2.5px solid ${BUTTON_COLORS.guide.color}`,
                                                    borderRadius: '10px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.25s ease',
                                                    letterSpacing: '0.03em'
                                                }}
                                                onMouseOver={e => {
                                                    e.currentTarget.style.background = BUTTON_COLORS.guide.hoverBg;
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseOut={e => {
                                                    e.currentTarget.style.background = 'transparent';
                                                    e.currentTarget.style.transform = 'none';
                                                }}
                                            >
                                                <BookText size={18} />
                                                指導書
                                            </button>
                                            <button
                                                onClick={() => handlePrint(passage)}
                                                style={{
                                                    flex: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.8rem 1rem',
                                                    background: 'transparent',
                                                    backdropFilter: 'blur(8px)',
                                                    color: BUTTON_COLORS.print.color,
                                                    border: '2.5px solid rgba(255,255,255,0.5)',
                                                    borderRadius: '10px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.25s ease',
                                                    letterSpacing: '0.03em'
                                                }}
                                                onMouseOver={e => {
                                                    e.currentTarget.style.background = BUTTON_COLORS.print.hoverBg;
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseOut={e => {
                                                    e.currentTarget.style.background = 'transparent';
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                                                    e.currentTarget.style.transform = 'none';
                                                }}
                                            >
                                                <Printer size={18} />
                                                印刷
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Past Exams Section Header */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto 1.5rem auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    paddingLeft: '0.5rem'
                }}>
                    <div style={{
                        width: '4px',
                        height: '28px',
                        background: currentGradeConfig.color,
                        borderRadius: '2px',
                        boxShadow: `0 0 12px ${currentGradeConfig.color}`
                    }} />
                    <h2 style={{
                        color: '#f1f5f9',
                        fontSize: '1.35rem',
                        fontWeight: '600',
                        margin: 0,
                        letterSpacing: '0.03em'
                    }}>
                        英検{currentGradeConfig.filter} 過去問
                    </h2>
                </div>


                {/* Past Exams - Grouped by Year */}
                {(() => {
                    const pastExams = filteredPassages.filter(p => !p.isOriginal);
                    if (pastExams.length === 0) {
                        return (
                            <div style={{
                                maxWidth: '1200px',
                                margin: '0 auto',
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '16px',
                                padding: '4rem',
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.6)',
                                border: '1px dashed rgba(255,255,255,0.2)'
                            }}>
                                <p style={{ fontSize: '1.1rem', margin: 0 }}>
                                    {currentGradeConfig.filter}の過去問は準備中です
                                </p>
                            </div>
                        );
                    }

                    // Group passages by year
                    const yearGroups = {};
                    pastExams.forEach(passage => {
                        const year = extractYear(passage.subTitle) || 'その他';
                        if (!yearGroups[year]) {
                            yearGroups[year] = [];
                        }
                        yearGroups[year].push(passage);
                    });

                    // Sort years in descending order
                    const sortedYears = Object.keys(yearGroups).sort((a, b) => {
                        if (a === 'その他') return 1;
                        if (b === 'その他') return -1;
                        return parseInt(b) - parseInt(a);
                    });

                    return sortedYears.map((year, yearIndex) => {
                        const yearColor = getYearColor(year);
                        const passages = yearGroups[year];

                        return (
                            <div key={year} style={{
                                maxWidth: '1200px',
                                margin: yearIndex === 0 ? '0 auto 2rem auto' : '2rem auto',
                            }}>
                                {/* Year Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1rem',
                                    paddingLeft: '0.25rem'
                                }}>
                                    <span style={{
                                        background: yearColor.color,
                                        color: '#1e293b',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '6px',
                                        fontSize: '0.9rem',
                                        fontWeight: '700',
                                        letterSpacing: '0.03em'
                                    }}>
                                        {year}年度
                                    </span>
                                    <span style={{
                                        color: 'rgba(255,255,255,0.5)',
                                        fontSize: '0.85rem'
                                    }}>
                                        {passages.length}問
                                    </span>
                                    <div style={{
                                        flex: 1,
                                        height: '1px',
                                        background: `linear-gradient(to right, ${yearColor.color}40, transparent)`,
                                        marginLeft: '0.5rem'
                                    }} />
                                </div>

                                {/* Year's Grid - 3 columns */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '1.25rem'
                                }}>
                                    {passages.map((passage) => {
                                        const examInfo = extractExamInfo(passage.subTitle);

                                        return (
                                            <div
                                                key={passage.id}
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.08)',
                                                    backdropFilter: 'blur(16px)',
                                                    borderRadius: '16px',
                                                    padding: '1.5rem',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    cursor: 'default'
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.transform = 'none';
                                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                                }}
                                            >
                                                {/* カード上部：試験情報（年度バッジ不要 - 既にヘッダーで表示） */}
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.85rem',
                                                    marginBottom: '0.85rem'
                                                }}>
                                                    <span style={{
                                                        color: '#f1f5f9',
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600',
                                                        letterSpacing: '0.02em'
                                                    }}>
                                                        {examInfo}
                                                    </span>
                                                </div>

                                                {/* タイトル */}
                                                <h3 style={{
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: '0.95rem',
                                                    fontWeight: '500',
                                                    margin: '0 0 1.35rem 0',
                                                    fontStyle: 'italic',
                                                    lineHeight: '1.5'
                                                }}>
                                                    {passage.title}
                                                </h3>

                                                {/* ボタン（全級統一カラー） */}
                                                <div style={{
                                                    display: 'flex',
                                                    gap: '0.75rem'
                                                }}>
                                                    <button
                                                        onClick={() => onSelectPassage(passage.id)}
                                                        style={{
                                                            flex: 1,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            gap: '0.5rem',
                                                            padding: '0.8rem 1rem',
                                                            background: 'transparent',
                                                            backdropFilter: 'blur(8px)',
                                                            color: BUTTON_COLORS.guide.color,
                                                            border: `2.5px solid ${BUTTON_COLORS.guide.color}`,
                                                            borderRadius: '10px',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            fontSize: '0.9rem',
                                                            transition: 'all 0.25s ease',
                                                            letterSpacing: '0.03em'
                                                        }}
                                                        onMouseOver={e => {
                                                            e.currentTarget.style.background = BUTTON_COLORS.guide.hoverBg;
                                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onMouseOut={e => {
                                                            e.currentTarget.style.background = 'transparent';
                                                            e.currentTarget.style.transform = 'none';
                                                        }}
                                                    >
                                                        <BookText size={18} />
                                                        指導書
                                                    </button>
                                                    <button
                                                        onClick={() => handlePrint(passage)}
                                                        style={{
                                                            flex: 1,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            gap: '0.5rem',
                                                            padding: '0.8rem 1rem',
                                                            background: 'transparent',
                                                            backdropFilter: 'blur(8px)',
                                                            color: BUTTON_COLORS.print.color,
                                                            border: '2.5px solid rgba(255,255,255,0.5)',
                                                            borderRadius: '10px',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            fontSize: '0.9rem',
                                                            transition: 'all 0.25s ease',
                                                            letterSpacing: '0.03em'
                                                        }}
                                                        onMouseOver={e => {
                                                            e.currentTarget.style.background = BUTTON_COLORS.print.hoverBg;
                                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onMouseOut={e => {
                                                            e.currentTarget.style.background = 'transparent';
                                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                                                            e.currentTarget.style.transform = 'none';
                                                        }}
                                                    >
                                                        <Printer size={18} />
                                                        印刷
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    });
                })()}

                {/* フッター */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.85rem'
                }}>
                    <p style={{ margin: 0, letterSpacing: '0.02em' }}>
                        © ECCベストワン藍住・北島中央 | タブレット横向き・PC推奨
                    </p>
                </div>
            </div>
        </div>
    );
}
