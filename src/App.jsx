import React, { useState } from 'react';
import './App.css';
import { readingData } from './data/readingData';
import { ProblemList } from './components/ProblemList';
import { ReadingPage } from './components/ReadingPage';

function App() {
  const [activePassageId, setActivePassageId] = useState(null);
  const [activeGrade, setActiveGrade] = useState('pre1');
  const [isStudentMode, setIsStudentMode] = useState(false);

  // 初回ロード時にURLパラメータをチェック
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const mode = params.get('mode');

    if (id) {
      // IDが存在するか確認
      const exists = readingData.some(p => p.id === id);
      if (exists) {
        setActivePassageId(id);
      }
    }

    if (mode === 'student') {
      setIsStudentMode(true);
    }
  }, []);

  const activePassage = activePassageId
    ? readingData.find(p => p.id === activePassageId)
    : null;

  return (
    <>
      {!activePassage ? (
        <ProblemList
          onSelectPassage={setActivePassageId}
          activeGrade={activeGrade}
          onGradeChange={setActiveGrade}
        />
      ) : (
        <ReadingPage
          key={activePassage.id} // パッセージが変わったら完全にリセットするためにkeyを指定
          passage={activePassage}
          onBack={() => {
            // 生徒モードなら戻る操作を無効化、またはURLパラメータをクリアして戻るなどの処理
            if (!isStudentMode) {
              setActivePassageId(null);
            }
          }}
          isStudentMode={isStudentMode}
        />
      )}
    </>
  );
}

export default App;
