import React, { useState } from 'react';
import { X, BookOpen } from 'lucide-react';
import './GrammarAnalysisLayout.css';

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function GrammarAnalysisLayout({ passage, onClose }) {
    // デフォルトで最初の文を選択
    const [activeSentenceId, setActiveSentenceId] = useState(() => {
        if (passage?.content && passage.content.length > 0 && passage.content[0].sentences.length > 0) {
            return passage.content[0].sentences[0].id;
        }
        return null;
    });

    const [highlightedPhrase, setHighlightedPhrase] = useState(null);

    // 全文フラット化してIDで検索
    const allSentences = passage.content.flatMap(p => p.sentences);
    const activeSentence = allSentences.find(s => s.id === activeSentenceId);

    // Sentence rendering with highlight logic
    const renderSentenceText = (sent) => {
        // If this is the active sentence AND we have a phrase to highlight
        if (sent.id === activeSentenceId && highlightedPhrase) {
            try {
                // Remove punctuation/symbols for safer matching, strictly speaking we should match exactly
                const escapedPhrase = escapeRegExp(highlightedPhrase);

                // Allow "..." to match anything loosely if present in phrase
                let pattern = escapedPhrase;
                if (escapedPhrase.includes('\\.\\.\\.')) {
                    // Replace "..." with pattern that matches non-greedy until lookahead? 
                    // Or just simple .*? 
                    pattern = escapedPhrase.replace(/\\\.\\\.\\\./g, '[\\s\\S]*?');
                }

                const regex = new RegExp(`(${pattern})`, 'gi');
                const parts = sent.text.split(regex);

                // If split returns 1 element, no match found
                if (parts.length === 1) return sent.text;

                const matchRegex = new RegExp(pattern, 'i'); // Non-global for testing

                return parts.map((part, i) =>
                    matchRegex.test(part) ? <span key={i} className="pass-highlight-match">{part}</span> : part
                );
            } catch (e) {
                console.warn('Regex error in highlight logic', e);
                return sent.text;
            }
        }

        // If active sentence but NO specific phrase highlight, highlight main verbs
        if (sent.id === activeSentenceId && sent.grammarAnalysis?.mainVerbs) {
            try {
                const verbs = sent.grammarAnalysis.mainVerbs;

                // Build a pattern that:
                // 1. For single-word verbs: use word boundaries
                // 2. For multi-word verbs (e.g. "are exhibited", "did prevent"):
                //    Allow intervening words (adverbs, "not", "now", etc.) between them
                const patterns = verbs.map(v => {
                    const words = v.split(/\s+/);
                    if (words.length === 1) {
                        // Single word: simple word boundary match
                        return `\\b${escapeRegExp(v)}\\b`;
                    } else {
                        // Multi-word: allow optional words between (e.g., "are [now] exhibited")
                        // Match each word with word boundaries, with optional words in between
                        return words.map(w => `\\b${escapeRegExp(w)}\\b`).join('(?:\\s+\\w+)*\\s+');
                    }
                });

                const pattern = patterns.join('|');
                const regex = new RegExp(`(${pattern})`, 'gi');

                const parts = sent.text.split(regex);
                if (parts.length === 1) return sent.text;

                // Directly check if the part matches any of the verbs (case-insensitive)
                const verbsLower = verbs.map(v => v.toLowerCase());

                return parts.map((part, i) => {
                    const partLower = part.toLowerCase();
                    const isVerb = verbsLower.some(v => partLower === v || partLower.includes(v));
                    return isVerb ? <span key={i} className="verb-highlight">{part}</span> : part;
                });
            } catch (e) {
                return sent.text;
            }
        }

        return sent.text;
    };

    const handleSentenceClick = (id) => {
        setActiveSentenceId(id);
        setHighlightedPhrase(null); // Reset highlight when changing sentence
    };

    return (
        <div className="grammar-mode-container">
            {/* Header */}
            <div className="grammar-header">
                <h3><BookOpen size={18} /> 英文解釈・構造分析モード</h3>
                <button onClick={onClose} title="閉じる"><X size={20} /></button>
            </div>

            {/* Top: Passage View (40%) */}
            <div className="grammar-top-panel">
                <div className="passage-text">
                    {passage.content.map((para, pi) => (
                        <p key={pi} className="paragraph">
                            {para.sentences.map((sent) => (
                                <span
                                    key={sent.id}
                                    className={`sentence-span ${sent.id === activeSentenceId ? 'active' : ''}`}
                                    onClick={() => handleSentenceClick(sent.id)}
                                >
                                    {renderSentenceText(sent)}
                                </span>
                            ))}
                        </p>
                    ))}
                </div>
            </div>

            {/* Middle: Analysis (20%) */}
            <div className="grammar-middle-panel">
                {activeSentence?.grammarAnalysis ? (
                    <div className="analysis-grid">
                        <div className="vocab-section">
                            <h4>Vocabulary & Expressions</h4>
                            <ul>
                                {activeSentence.grammarAnalysis.vocabulary.map((v, i) => (
                                    <li key={i}><b>{v.word}</b>: {v.meaning}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="grammar-section">
                            <h4>Grammar Points (Click to Highlight)</h4>
                            <ul>
                                {activeSentence.grammarAnalysis.grammarNotes.map((note, i) => {
                                    // Handle both old string format and new object format
                                    const isObj = typeof note === 'object';
                                    const content = isObj ? note.explanation : note;
                                    const phrase = isObj ? note.phrase : null;

                                    return (
                                        <li
                                            key={i}
                                            className={`${phrase ? 'grammar-list-item' : ''} ${phrase && phrase === highlightedPhrase ? 'active' : ''}`}
                                            onClick={() => phrase && setHighlightedPhrase(phrase === highlightedPhrase ? null : phrase)}
                                            dangerouslySetInnerHTML={{ __html: content }}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="no-data">Select a sentence to view detailed analysis. (Data not available for this sentence)</div>
                )}
            </div>

            {/* Bottom: Structure (40%) */}
            <div className="grammar-bottom-panel">
                {activeSentence?.grammarAnalysis ? (
                    <div className="structure-content">
                        <div className="structure-visual"
                            dangerouslySetInnerHTML={{ __html: activeSentence.grammarAnalysis.structureHtml }}
                        />
                        <div className="translations">
                            <div className="trans-row">
                                <span className="label">Literal</span>
                                <span className="text" dangerouslySetInnerHTML={{
                                    __html: activeSentence.grammarAnalysis.translationHtml || activeSentence.translation
                                }} />
                            </div>
                            <div className="trans-row">
                                <span className="label">Natural</span>
                                <span className="text">{activeSentence.grammarAnalysis.naturalTranslation}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="no-data">Structure analysis not available.</div>
                )}
            </div>
        </div>
    );
}
