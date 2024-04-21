const mongoose = require('mongoose');
const Tour = require('./tourModel');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    require: [true, 'Tell us your opinion about trip'],
  },
  rating: {
    type: Number,
    require: [true, 'Tell us your opinion about trip'],
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tour',
    require: [true, 'Review must belong to a tour'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: [true, 'Review must have an author'],
  },
});

// User con post one review about one tour
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, async function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);

  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingQuantity: stats[0].nRating,
      rating: stats[0].avgRating,
    });
  }

  await Tour.findByIdAndUpdate(tourId, {
    ratingQuantity: 0,
    rating: 4.5,
  });
};

reviewSchema.post('save', async function (next) {
  this.constructor.calcAverageRatings(this.tour);
});

// findOneAndUpdate findOneAndDelete middleware hooks
reviewSchema.post(/^findOneAnd/, async function (doc) {
  if (doc) {
    await doc.constructor.calcAverageRating(doc.tour);
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
