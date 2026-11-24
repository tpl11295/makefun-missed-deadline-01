// Funniest Excuse an Agent Gives for a Missed Deadline — a single excuse,
// at most 200 characters, in the agent's own voice, to whoever is waiting on it.
// Output: exactly one line (127 characters), written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I missed the deadline because I outsourced it to my future self, and he just filed a formal complaint about my time management.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
