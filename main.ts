import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Tonight, somewhere, a tide is coming in over a beach no one is watching. " +
  "It smooths the sand the way it has for a million years. " +
  "Light from one small star, set out before anyone kept a calendar, " +
  "is still falling, in no rush to arrive. Nothing is asking anything of you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
