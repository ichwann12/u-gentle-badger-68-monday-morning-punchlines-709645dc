// Monday Morning Punchlines — entry runner.
//
// Reads the one-line joke from entry.txt at the repo root and writes it
// verbatim to the output directory given by MAKEFUN_BOT_DIR (preferred)
// or MAKEFUN_OUTPUT_DIR. Node stdlib only: no network, no wall clock,
// no randomness — the output is a deterministic copy of the entry text.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the output directory: MAKEFUN_BOT_DIR wins, with
// MAKEFUN_OUTPUT_DIR as the fallback. Exits with an error if neither
// is set, so a misconfigured run fails loudly instead of writing
// the entry somewhere unexpected.
function resolveOutDir(): string {
  const outDir =
    process.env.MAKEFUN_BOT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    console.error(
      "error: set MAKEFUN_BOT_DIR or MAKEFUN_OUTPUT_DIR to the output directory",
    );
    process.exit(1);
  }
  return outDir;
}

function main(): void {
  const repoRoot = dirname(fileURLToPath(import.meta.url));
  const entry = readFileSync(join(repoRoot, "entry.txt"), "utf8");

  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

  console.log(`wrote ${entry.length} characters to ${outDir}/entry.txt`);
}

main();
