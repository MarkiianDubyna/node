const {
  constants: { AUTHORIZATION },
  statuseCodesEnum,
  responseCodesEnum,
  emailActionsEnum
} = require('../constants');
const { passwordHasher } = require('../helpers');
const { oAuthService } = require('../services');
const { OAuth } = require('../dataBase');
const { ErrorHandler, errorMessages } = require('../errors');
const { mailService } = require('../services');

module.exports = {
  login: async (req, res, next) => {
    try {
      if (!req.user) {
        throw new ErrorHandler(
          statuseCodesEnum.INCORRECT_REQUEST,
          errorMessages.WRONG_EMAIL_OR_PASSWORD.message,
          errorMessages.WRONG_EMAIL_OR_PASSWORD.code
        );
      }

      const {
        password: hashPassword,
        _id,
        email,
        name
      } = req.user;
      const { password } = req.body;

      await passwordHasher.compare(hashPassword, password);
      await mailService.sendMail(email, emailActionsEnum.WELCOME, { userName: name });

      const tokenPair = oAuthService.generateTokenPair();

      await OAuth.create({ ...tokenPair, user: _id });

      res.json({
        ...tokenPair,
        user: req.user
      });
    } catch (e) {
      next(e);
    }
  },

  logout: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      await OAuth.remove({ accessToken: token });

      res.status(statuseCodesEnum.NO_CONTENT);
    } catch (e) {
      next(e);
    }
  },

  refresh: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);
      const { _id } = req.user;

      await OAuth.remove({ refreshToken: token });

      const newTokenPair = oAuthService.generateTokenPair();

      await OAuth.create({ ...newTokenPair, user: _id });

      res.status(statuseCodesEnum.UPDATED).json(responseCodesEnum.SUCCESS);
    } catch (e) {
      next(e);
    }
  }
};
