import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Somewhere, rain is falling on a tin roof in a village you will never visit. " +
  "It does not ask to be judged. " +
  "It falls whether or not anyone is listening, and it has fallen this way for longer than any of us have been keeping score. " +
  "Nothing here needs you. The rain will be there.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
