const mongoose = require('mongoose');
const User = require('./userModel');

const tourSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      require: [true, 'A tour must have a name'],
    },
    subTitle: String,
    description: {
      type: String,
      maxLenght: [40, 'A tour description can have max 100 characters'],
    },
    price: {
      type: Number,
      require: [true, 'A tour must have a price'],
    },
    priceDiscount: Number,
    rating: {
      type: Number,
      min: [0, 'Rating must be above 0'],
      max: [5, 'Rating must be below 5'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    startDates: [Number],
    duration: [Number],
    airport: [Number],
    tourType: Number,
    meals: Number,
    facilities: [Number],
    groupSize: Number,
    flyghtduration: String,
    distance: String,
    weather: String,
    bestseller: Boolean,
    lastMinute: Boolean,
    difficulty: {
      type: Number,
      default: 2,
    },
    tourPlan: [String],
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    attractions: [String],
    guides: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    photos: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.index({ startLocation: '2dsphere' });

// Virtual populate
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});

//Document mongoDb middlewarre, runs before save() and create()
// (eg. before create new tour Tour.create())
tourSchema.pre(/^find/, async function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });
  next();
});

//Document mongoDb middlewarre, runs after save() and create()
tourSchema.post('save', function (doc, next) {
  // noop
  next();
});

//Query mongoDb middlewarre, runs before find()
// (eg. before find one tour Tour.find())
tourSchema.pre('find', function (next) {
  //noop
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
