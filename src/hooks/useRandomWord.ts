import { useEffect, useCallback, useRef, useReducer } from "react";
import type { WordEntry } from "../types";

interface WordState {
  word: WordEntry | null;
  loading: boolean;
  error: string | null;
}

type WordAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: WordEntry }
  | { type: "FETCH_ERROR"; message: string };

function reducer(state: WordState, action: WordAction): WordState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { word: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
}

interface UseRandomWordResult {
  word: WordEntry | null;
  loading: boolean;
  error: string | null;
  nextWord: (excludeWord?: string) => void;
}

// Module-level cache so the JSON file is fetched only once per session
let dictionaryCache: WordEntry[] | null = null;

async function loadDictionary(): Promise<WordEntry[]> {
  if (dictionaryCache) return dictionaryCache;
  const response = await fetch("/dictionary.json");
  if (!response.ok) {
    throw new Error(`Failed to load dictionary (${response.status})`);
  }
  dictionaryCache = await response.json();
  return dictionaryCache!;
}

function pickRandom(entries: WordEntry[], excludeWord?: string): WordEntry {
  const available =
    excludeWord ? entries.filter((e) => e.word !== excludeWord) : entries;
  // Fall back to full list if excluding leaves nothing (e.g. single-entry dict)
  const pool = available.length > 0 ? available : entries;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function useRandomWord(): UseRandomWordResult {
  const [state, dispatch] = useReducer(reducer, {
    word: null,
    loading: true,
    error: null,
  });

  // Holds the exclude word for the next fetch; undefined = first load
  const excludeRef = useRef<string | undefined>(undefined);
  const [fetchCount, setFetchCount] = useReducer((c: number) => c + 1, 0);

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: "FETCH_START" });
    loadDictionary()
      .then((entries) => {
        if (!cancelled) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: pickRandom(entries, excludeRef.current),
          });
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          dispatch({
            type: "FETCH_ERROR",
            message: err instanceof Error ? err.message : "Unknown error",
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [fetchCount]);

  const nextWord = useCallback((excludeWord?: string) => {
    excludeRef.current = excludeWord;
    setFetchCount();
  }, []);

  return { word: state.word, loading: state.loading, error: state.error, nextWord };
}


