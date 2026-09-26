// GET /api/kb-health -> { ok, live, model, code }
import { health } from '../lib/board.mjs';
export default function handler(req, res) {
  res.setHeader('cache-control', 'no-store'); res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(health()));
}
