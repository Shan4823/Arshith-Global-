export default function errorHandler(err, req, res, next) {
  console.error('[error]', err);

  const status = err.status || 500;
  const isProd = process.env.NODE_ENV === 'production';

  res.status(status).json({
    success: false,
    message: status === 500 && isProd ? 'Internal server error' : err.message || 'Something went wrong',
    ...(isProd ? {} : { stack: err.stack }),
  });
}
