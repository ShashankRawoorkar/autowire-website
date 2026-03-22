export default function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  if (status >= 500) {
    console.error('[autowire] server error', err);
  }

  res.status(status).json({
    error: true,
    message,
    ...(err.details ? { details: err.details } : {}),
  });
}
