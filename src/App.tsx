import { useState } from "react";
import { getRandomWord } from "./data/dictionary";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { WordCard } from "./components/WordCard";
import { Stats } from "./components/Stats";
import type { SessionEntry } from "./types";
import "./App.css";

function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [showStats, setShowStats] = useState(false);
  const [history, setHistory] = useLocalStorage<SessionEntry[]>("spelling-bee-history", []);

  const handleNewWord = () => {
    setCurrentWord((prev) => getRandomWord(prev.word));
  };

  const handleResult = (result: "passed" | "failed") => {
    const entry: SessionEntry = {
      word: currentWord.word,
      result,
      timestamp: Date.now(),
    };
    setHistory((prev) => [...prev, entry]);
    handleNewWord();
  };

  const passed = history.filter((e) => e.result === "passed").length;
  const failed = history.filter((e) => e.result === "failed").length;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">🐝 Spelling Bee</h1>
          <button
            className="stats-btn"
            onClick={() => setShowStats(true)}
            aria-label="View stats"
          >
            <span className="stats-counts">
              <span className="pass-count">✓ {passed}</span>
              <span className="fail-count">✗ {failed}</span>
            </span>
            Stats
          </button>
        </div>
      </header>

      <main className="app-main">
        <WordCard
          entry={currentWord}
          onPassed={() => handleResult("passed")}
          onFailed={() => handleResult("failed")}
          onNewWord={handleNewWord}
        />
      </main>

      {showStats && (
        <Stats
          history={history}
          onClear={() => setHistory([])}
          onClose={() => setShowStats(false)}
        />
      )}
    </div>
  );
}

export default App;
