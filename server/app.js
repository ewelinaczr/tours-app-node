const express = require('express');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const { rateLimit } = require('express-rate-limit');
const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// Global middlewares

// Set security HTTP headers
app.use(helmet());

// Limit requests from the same API
const limitter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests form this ip. Try again in an hour',
});

// app.use('/api', limitter);

// Body parser, reading data from the body into req.body
// app.use(express.json({ limit: '10kb' }));

// Data sanitization agains NoSQL query injection
app.use(mongoSanitize());

// Data sanitization agains XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'price',
      'rating',
      'ratingQuantity',
      'difficulty',
      'groupSize',
      'duration',
    ],
  })
);

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server.`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
