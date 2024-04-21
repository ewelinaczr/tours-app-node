const express = require('express');
const toursController = require('../controllers/toursController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router.route('/tour-stats').get(toursController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restricTo('admin', 'lead-guide', 'guide'),
    toursController.getMonthlyPlan
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(toursController.getToursWithin);

router
  .route('/')
  .get(toursController.getAllTours)
  .post(
    authController.protect,
    authController.restricTo('admin', 'lead-guide'),
    toursController.createTour
  );

router
  .route('/:id')
  .get(toursController.getOneTour)
  .patch(
    authController.protect,
    authController.restricTo('admin', 'lead-guide'),
    toursController.updateTour
  )
  .delete(
    authController.protect,
    authController.restricTo('admin', 'lead-guide'),
    toursController.deleteTour
  );

module.exports = router;
