const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const item = await Model.findOneAndDelete(req.params.id);

    if (!item) {
      return next(new AppError('No item found with that id', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return next(new AppError('No item found with that id', 404));
    }

    res.status(200).json({
      status: 'success',
      data: item,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newItem = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newItem,
    });
  });

exports.getOne = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = await Model.findById(req.params.id);
    if (populateOptions) {
      query = query.populate(populateOptions);
    }
    const item = await query;

    if (!item) {
      return next(new AppError('No item found with that id', 404));
    }

    res.status(200).json({
      status: 'success',
      data: item,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour
    let filter = {};
    if (req.params.tourId) {
      filter = { tour: req.params.tourId };
    }
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const items = await features.mongooseQuery;
    console.log(items);
    res.status(200).json({
      status: 'success',
      results: items.length,
      data: items,
    });
  });
