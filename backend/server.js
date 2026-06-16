import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import connectDB from './src/config/db.js';

const PORT = process.env.PORT || 5000;

// Start HTTP server immediately — routes that don't need MongoDB (e.g. /api/chat)
// remain available even if the DB connection is temporarily down.
app.listen(PORT, () => {
  console.log(`[server] Listening on port ${PORT}`);
});

// Connect to MongoDB in the background; contact/enquiry routes will error naturally
// if a request arrives before the connection is established.
connectDB().catch((err) => {
  console.error('[server] MongoDB connection failed:', err.message);
});
