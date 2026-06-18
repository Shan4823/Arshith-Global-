import dotenv from 'dotenv';
dotenv.config();

import app from '../src/app.js';

// DB connection is established lazily per-route (see ensureDB middleware) -
// routes like /api/chat and /api/health don't need Mongo and shouldn't
// wait on it or fail because of it.
export default function handler(req, res) {
  return app(req, res);
}
