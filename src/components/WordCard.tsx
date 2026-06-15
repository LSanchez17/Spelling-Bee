import type { WordEntry } from "../types";

interface WordCardProps {
  entry: WordEntry;
  onPassed: () => void;
  onFailed: () => void;
  onNewWord: () => void;
}

export function WordCard({ entry, onPassed, onFailed, onNewWord }: WordCardProps) {
  return (
    <div className="word-card">
      <div className="word-header">
        <h1 className="word">{entry.word}</h1>
        <span className="part-of-speech">{entry.partOfSpeech}</span>
      </div>

      <div className="section">
        <h2 className="section-title">Definition</h2>
        <p className="definition">{entry.definition}</p>
      </div>

      <div className="section">
        <h2 className="section-title">Example Sentences</h2>
        <ul className="examples">
          {entry.examples.map((ex, i) => (
            <li key={i} className="example-item">
              &ldquo;{ex}&rdquo;
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Word Origin</h2>
        <p className="origin">{entry.origin}</p>
      </div>

      <div className="actions">
        <button
          className="btn btn-failed"
          onClick={onFailed}
          aria-label="Mark as failed"
        >
          ✗ Failed
        </button>
        <button
          className="btn btn-new"
          onClick={onNewWord}
          aria-label="Get a new word"
        >
          ↺ New Word
        </button>
        <button
          className="btn btn-passed"
          onClick={onPassed}
          aria-label="Mark as passed"
        >
          ✓ Passed
        </button>
      </div>
    </div>
  );
}
