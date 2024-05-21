const AppError = require('./../utils/appError');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } else if (process.env.NODE_ENV === 'production') {
    // Operational error - send message to client
    let error = { ...err };
    if ((error.name = 'CastError')) {
      // DB error
      const message = `Invalid ${err.path} : ${err.value}`;
      error = new AppError(message, 400);
    }
    if ((error.code = 11000)) {
      // DB error
      const message = `Duplicate field ${err.value} value`;
      error = new AppError(message, 400);
    }
    if ((error.name = 'ValidationError')) {
      // DB error
      const message = `Invalid input data`;
      error = new AppError(message, 400);
    }
    if ((error.name = 'JsonWebTokenError')) {
      // JWT error
      const message = `Invalid token. Please log in again.`;
      error = new AppError(message, 401);
    }
    if ((error.name = 'TokenExpiredError')) {
      // JWT error
      const message = `Session expired. Please log in again.`;
      error = new AppError(message, 401);
    }
    if (error.isOperationalError) {
      res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });
    } else {
      // Programming error - don't leak error details to client
      console.log('ERROR 🔥', error);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong',
      });
    }
  }
};
