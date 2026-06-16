import type { SessionEntry } from "../types";

interface StatsProps {
  history: SessionEntry[];
  onClear: () => void;
  onClose: () => void;
}

export function Stats({ history, onClear, onClose }: StatsProps) {
  const passed = history.filter((e) => e.result === "passed").length;
  const failed = history.filter((e) => e.result === "failed").length;
  const total = history.length;

  const percentage = total > 0 ? Math.round((passed / total) * 100) : 0;

  return (
    <div className="stats-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Session statistics">
      <div className="stats-panel" onClick={(e) => e.stopPropagation()}>
        <div className="stats-header">
          <h2>Session Stats</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close stats">
            ✕
          </button>
        </div>

        <div className="stats-summary">
          <div className="stat-item stat-passed">
            <span className="stat-value">{passed}</span>
            <span className="stat-label">Passed</span>
          </div>
          <div className="stat-item stat-failed">
            <span className="stat-value">{failed}</span>
            <span className="stat-label">Failed</span>
          </div>
          <div className="stat-item stat-total">
            <span className="stat-value">{percentage}%</span>
            <span className="stat-label">Score</span>
          </div>
        </div>

        {history.length > 0 && (
          <div className="history-list">
            <h3>History</h3>
            <ul>
              {[...history].reverse().map((entry, i) => (
                <li key={i} className={`history-item ${entry.result}`}>
                  <span className="history-word">{entry.word}</span>
                  <span className={`history-result badge-${entry.result}`}>
                    {entry.result === "passed" ? "✓" : "✗"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {history.length === 0 && (
          <p className="no-history">No words attempted yet. Start practicing!</p>
        )}

        {history.length > 0 && (
          <button className="btn btn-clear" onClick={onClear}>
            Clear History
          </button>
        )}
      </div>
    </div>
  );
}
