import { useState } from "react";
import { useRandomWord } from "./hooks/useRandomWord";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { WordCard } from "./components/WordCard";
import { Stats } from "./components/Stats";
import type { SessionEntry } from "./types";
import "./App.css";

function App() {
  const { word, loading, error, nextWord } = useRandomWord();
  const [showStats, setShowStats] = useState(false);
  const [history, setHistory] = useLocalStorage<SessionEntry[]>("spelling-bee-history", []);

  const handleNewWord = () => {
    nextWord(word?.word);
  };

  const handleResult = (result: "passed" | "failed") => {
    if (!word) return;
    const entry: SessionEntry = {
      word: word.word,
      result,
      timestamp: Date.now(),
    };
    setHistory((prev) => [...prev, entry]);
    nextWord(word.word);
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
        {error && (
          <div className="load-state error-state" role="alert">
            <p>⚠️ {error}</p>
            <button className="btn btn-new" onClick={() => nextWord()}>
              Retry
            </button>
          </div>
        )}

        {loading && !error && (
          <div className="load-state" aria-label="Loading word…">
            <div className="spinner" aria-hidden="true" />
            <p>Loading…</p>
          </div>
        )}

        {!loading && !error && word && (
          <WordCard
            entry={word}
            onPassed={() => handleResult("passed")}
            onFailed={() => handleResult("failed")}
            onNewWord={handleNewWord}
          />
        )}
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

