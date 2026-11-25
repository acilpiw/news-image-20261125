// news-image-20261125: "25 November 2026 in One Image" (Node 22, standard library only).
// The entry image is entry.png beside this file: a newspaper front page for
// Wednesday 25 November 2026 — feature "NVIDIA FALLS AGAIN" (shares -7% as
// lawmakers question Trump's role in Huang's return), plus the Houthi strike
// on Riyadh's PIF Tower, mines in the Strait of Hormuz, the Cartagena
// hostage rescue, Pakistan's first astronaut, and the Bangladesh pay rise.
// The program copies it to /output/entry.png, deterministically, with no network.
// Run twice, it writes identical bytes every time: the image is copied, never regenerated.
// No network, no randomness, no timestamps — the output is exactly entry.png, byte for byte.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
