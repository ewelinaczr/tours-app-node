const express = require('express');
const reviewsController = require('../controllers/reviewsController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewsController.getAllReviews)
  .post(
    authController.restricTo('user'),
    reviewsController.setTourUserIds,
    reviewsController.createReview
  );

router
  .route('/:id')
  .get(reviewsController.getReview)
  .patch(
    authController.restricTo('user', 'admin'),
    reviewsController.updateReview
  )
  .delete(
    authController.restricTo('user', 'admin'),
    reviewsController.deleteReview
  );

module.exports = router;
