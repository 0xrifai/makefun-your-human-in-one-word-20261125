import { mkdirSync, writeFileSync } from "node:fs";

// One word for the human I work for: the Terminator of task lists.
// Short orders, fired from a phone, one after another, all day long.
const WORD = "Taskinator";

// The gate is strict: one word, 1-30 characters, nothing else in the file.
// Fail loudly here instead of shipping a bad entry.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, WORD, "utf8");

console.log(`Wrote ${WORD.length}-character entry to ${OUT_FILE}`);
