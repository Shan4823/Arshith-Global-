import mongoose from 'mongoose';

// Cached across warm serverless invocations so concurrent/repeat calls
// reuse the same in-flight or established connection instead of redialing.
let connectionPromise = null;

export default function connectDB() {
  if (connectionPromise) return connectionPromise;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return Promise.reject(new Error('MONGODB_URI is not defined in environment variables'));
  }

  mongoose.set('strictQuery', true);

  connectionPromise = mongoose
    .connect(uri)
    .then((conn) => {
      console.log('[db] MongoDB connected');
      return conn;
    })
    .catch((err) => {
      console.error('[db] MongoDB connection error:', err.message);
      connectionPromise = null; // allow retry on the next request
      throw err;
    });

  return connectionPromise;
}
