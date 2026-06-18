import connectDB from '../config/db.js';

// Only routes that actually touch MongoDB should pay the connection cost -
// chat/health must stay fast even when this is slow or down.
export default async function ensureDB(req, res, next) {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
}
