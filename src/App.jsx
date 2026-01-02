import React, { useState } from 'react';
import './App.css';
import { readingData } from './data/readingData';
import { ProblemList } from './components/ProblemList';
import { ReadingPage } from './components/ReadingPage';

function App() {
  const [activePassageId, setActivePassageId] = useState(null);
  const [activeGrade, setActiveGrade] = useState('pre1');

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
          onBack={() => setActivePassageId(null)}
        />
      )}
    </>
  );
}

export default App;
