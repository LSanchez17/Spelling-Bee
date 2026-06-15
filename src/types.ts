export interface WordEntry {
  word: string;
  partOfSpeech: string;
  definition: string;
  examples: string[];
  origin: string;
}

export interface SessionEntry {
  word: string;
  result: "passed" | "failed";
  timestamp: number;
}
