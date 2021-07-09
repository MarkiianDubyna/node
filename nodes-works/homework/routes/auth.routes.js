const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddlewares, userMiddlewares } = require('../middlewares');

router.post('/logout', authMiddlewares.checkAccessToken, authController.logout);
router.post('/login', userMiddlewares.getUserByDynamicParam('email'), authController.login);
router.post('/refresh', authMiddlewares.checkRefreshToken, authController.refresh);

module.exports = router;
