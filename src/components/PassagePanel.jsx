import React, { useEffect, useRef, useState } from 'react';

export function PassagePanel({ content, title, targetSentenceId, keywordMatches, isTargetHighlighted, manualHighlightId, onSentenceClick, hintHighlightWord, hintHighlightSentenceId, similarProblems }) {
    const sectionRefs = useRef({});
    const [popupInfo, setPopupInfo] = useState(null);

    useEffect(() => {
        // ターゲット文が変わったらスクロール (手動ハイライトはスクロールしない方針で)
        const targetId = Array.isArray(targetSentenceId) ? targetSentenceId[0] : targetSentenceId;
        if (targetId && sectionRefs.current[targetId]) {
            sectionRefs.current[targetId].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [targetSentenceId]);

    // どこかをクリックしたらポップアップを閉じる処理（オプション）
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupInfo && !event.target.closest('.translation-popup') && !event.target.classList.contains('active-target')) {
                setPopupInfo(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [popupInfo]);

    const handleSentenceClickInternal = (e, sentence) => {
        e.stopPropagation(); // イベントバブリング防止

        // Step 3のハイライト状態か確認
        const isTarget = Array.isArray(targetSentenceId) ? targetSentenceId.includes(sentence.id) : targetSentenceId === sentence.id;
        const showHighlight = isTarget && isTargetHighlighted;

        if (showHighlight && sentence.translation) {
            if (popupInfo && popupInfo.sentenceId === sentence.id) {
                setPopupInfo(null); // すでに開いていれば閉じる
            } else {
                const rect = e.target.getBoundingClientRect();
                setPopupInfo({
                    sentenceId: sentence.id,
                    text: sentence.translation,
                    style: {
                        position: 'fixed',
                        top: `${rect.bottom + 8}px`,
                        left: `${Math.max(16, Math.min(rect.left, window.innerWidth - 320))}px`, // 画面端にはみ出さないように調整
                        backgroundColor: '#fff',
                        border: '2px solid #22c55e',
                        padding: '12px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        zIndex: 9999,
                        maxWidth: '300px',
                        fontSize: '0.95rem',
                        color: '#14532d',
                        fontWeight: '500',
                        lineHeight: '1.6',
                        animation: 'fadeIn 0.2s ease'
                    }
                });
            }
        }

        // 親のハンドラも呼ぶ
        if (onSentenceClick) onSentenceClick(sentence.id);
    };

    const highlightKeyword = (text, sentenceId) => {
        const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // ガード節: キーワードもヒントも無い場合はテキストをそのまま返す
        if (!keywordMatches && !hintHighlightWord) return text;

        // この文に含まれるすべてのマッチを取得
        let matchesInSentence = keywordMatches ? keywordMatches.filter(m => m.sentenceId === sentenceId) : [];

        // ヒント単語（配列対応）
        let hints = Array.isArray(hintHighlightWord) ? hintHighlightWord : (hintHighlightWord ? [hintHighlightWord] : []);
        hints.forEach(hintWord => {
            if (!hintWord) return;

            const regex = new RegExp(escapeRegExp(hintWord), 'gi');
            const found = text.match(regex);

            if (found) {
                const uniqueFound = [...new Set(found)];
                uniqueFound.forEach(matchText => {
                    // 既存のマッチと重複しない場合のみ追加
                    if (!matchesInSentence.some(m => m.text === matchText)) {
                        matchesInSentence.push({ text: matchText, type: 'hint' });
                    }
                });
            }
        });

        if (matchesInSentence.length === 0) return text;

        const sortedMatches = [...matchesInSentence].sort((a, b) => b.text.length - a.text.length);
        const pattern = new RegExp(`(${sortedMatches.map(m => escapeRegExp(m.text)).join('|')})`, 'g');
        const parts = text.split(pattern);

        return (
            <>
                {parts.map((part, i) => {
                    const match = sortedMatches.find(m => m.text === part);
                    if (match) {
                        let styleClass = 'keyword-match-highlight';
                        if (match.type === 'paraphrase') styleClass = 'paraphrase-highlight';
                        else if (match.type === 'hint') styleClass = 'hint-word-highlight';
                        return <span key={i} className={styleClass}>{part}</span>;
                    }
                    return <React.Fragment key={i}>{part}</React.Fragment>;
                })}
            </>
        );
    };

    return (
        <div className="passage-panel">
            <h1 className="passage-title">{title}</h1>

            {content.map((paragraph) => (
                <div key={paragraph.paragraphId} className="paragraph">
                    {paragraph.sentences.map((sentence) => {
                        const isTarget = Array.isArray(targetSentenceId) ? targetSentenceId.includes(sentence.id) : targetSentenceId === sentence.id;
                        const showHighlight = isTarget && isTargetHighlighted;
                        const isManual = manualHighlightId === sentence.id;
                        const hasTranslation = !!sentence.translation;

                        let className = "sentence";
                        if (showHighlight) className += " active-target";
                        if (isManual) className += " manual-highlight";
                        // クリック可能であることを示すカーソル
                        const style = (showHighlight && hasTranslation) ? { cursor: 'pointer' } : {};
                        if (showHighlight && hasTranslation) className += " clickable-translation";

                        return (
                            <span
                                key={sentence.id}
                                ref={el => sectionRefs.current[sentence.id] = el}
                                className={className}
                                style={style}
                                onClick={(e) => handleSentenceClickInternal(e, sentence)}
                                title={showHighlight && hasTranslation ? "クリックで直訳を表示" : ""}
                            >
                                {highlightKeyword(sentence.text, sentence.id)}
                            </span>
                        );
                    })}
                </div>
            ))}

            {similarProblems && (
                <div className="similar-problems" style={{
                    marginTop: '2rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #e2e8f0',
                    fontSize: '0.9rem',
                    color: '#64748b',
                    fontFamily: '"Noto Sans JP", sans-serif',
                    textAlign: 'right'
                }}>
                    <span style={{
                        fontWeight: '700',
                        color: '#334155',
                        marginRight: '0.5em'
                    }}>類題：</span>
                    {typeof similarProblems === 'string' ? (
                        similarProblems
                    ) : (
                        <>
                            {similarProblems.exam}
                            <span style={{ marginLeft: '0.5em', fontStyle: 'italic' }}>
                                {similarProblems.title}
                            </span>
                        </>
                    )}
                </div>
            )}

            {popupInfo && (
                <div
                    className="translation-popup"
                    style={{ ...popupInfo.style, cursor: 'pointer' }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setPopupInfo(null);
                    }}
                >
                    <div style={{ fontSize: '0.75rem', color: '#22c55e', marginBottom: '4px', fontWeight: 'bold' }}>直訳（クリックで閉じる）</div>
                    {popupInfo.text}
                </div>
            )}
        </div>
    );
}
