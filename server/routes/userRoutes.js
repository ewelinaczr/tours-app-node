const express = require('express');
const usersController = require('../controllers/usersController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

router.route('/forgotPassword').post(authController.forgotPassword);
router.route('/resetPassword/:token').patch(authController.resetPassword);

router.use(authController.protect);
router.use(authController.restricTo('admin'));
router.route('/').get(usersController.getAllUsers);
router.route('/me').get(usersController.getMe, usersController.getUser);
router.route('/updateMyPassword').patch(authController.updatePassword);
router.route('/updateMy').patch(usersController.updateMe);
router.route('/deleteMe').delete(usersController.deleteMe);

router
  .route('/:id')
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
