// The Houseplant Out-of-Office — make.fun entry (program/v1).
//
// This program writes one out-of-office auto-reply, as if a houseplant
// sent it, to /output/entry.txt. The line is the whole entry: the plant
// has been ignored since March, so its roots have unionized and now
// demand water, light, and an apology; negotiations resume at the sink.
// It is written byte-exact, with no trailing newline, so the sealed
// gate sees exactly 117 characters of UTF-8 text.
//
// Run: node main.ts  (Node 22, no dependencies)

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office. My roots unionized and demand water, light, and an apology for March. Negotiations resume at the sink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
