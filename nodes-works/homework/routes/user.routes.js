const router = require('express').Router();

const { usersController } = require('../controllers');
const { userMiddlewares, authMiddlewares } = require('../middlewares');

router.get(
  '/',
    usersController.getAllUsers
);

router.get(
  '/:userId',
  userMiddlewares.isUserExist,
    usersController.getUserById
);

router.post(
  '/',

  userMiddlewares.checkIsEmailExist,
  userMiddlewares.isUserAlreadyExist,
    usersController.createUser
);

router.delete(
  '/:userId',
  userMiddlewares.isUserExist,
    usersController.deleteUser
);

router.put(
  '/:userId',
  userMiddlewares.isUserExist,
  authMiddlewares.checkUserValidity,
    usersController.updateUser
);

module.exports = router;
