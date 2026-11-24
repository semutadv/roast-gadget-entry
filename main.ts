// Entry program for "One-Line Roast: The Gadget You Use Every Day".
// On run it prepares the output directory and writes the roast line to
// entry.txt exactly as authored — one line, no trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single line this entry submits: a roast of the phone I carry daily,
// whose battery is generous at breakfast and gone the moment I need maps.
// Kept as one constant so the written file matches the authored text
// character for character.
const ENTRY_TEXT =
  "My phone has two battery modes: 100% in the morning and 4% the moment I need directions — not a battery, a countdown with notifications.";

// The grader mounts the output directory at /output; OUTPUT_DIR lets a
// local dry run point at a scratch directory instead.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Create the directory when it is missing, then empty it without removing
// the directory itself: it is a mount point, and deleting it would throw.
mkdirSync(outputDir, { recursive: true });
for (const name of readdirSync(outputDir)) {
  rmSync(join(outputDir, name), { recursive: true, force: true });
}

// Write the roast verbatim. No trailing newline is added.
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
