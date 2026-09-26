// POST /api/kb-board  (se lib/board.mjs)
import { httpBoard } from "../lib/board.mjs";
export const maxDuration = 60;     // Opus-rapporten kan tage 20-40 s
export default httpBoard;
