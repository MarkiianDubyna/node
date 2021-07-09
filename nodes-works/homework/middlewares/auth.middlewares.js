const { OAuth } = require('../dataBase');
const { constants, statusCodesConstants } = require('../constants');
const { errorMessages, ErrorHandler } = require('../errors');
const userValidator = require('../validators/user/user.validator');
const { oAuthService } = require('../services');

module.exports = {
  checkUserValidity: (req, res, next) => {
    try {
      const { error } = userValidator.createUser.validate(req.body);

      if (error) {
        throw new Error(error.details[0].message);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkAccessToken: async (req, res, next) => {
    try {
      const token = req.get(constants.AUTHORIZATION);

      if (!token) {
        throw new ErrorHandler(
          statusCodesConstants.UNAUTHORIZED,
          errorMessages.NO_TOKEN,
          errorMessages.NO_TOKEN.code
        );
      }

      await oAuthService.verifyToken(token);

      const tokenObject = await OAuth.findOne({ accessToken: token });

      if (!tokenObject) {
        throw new ErrorHandler(
          statusCodesConstants.UNAUTHORIZED,
          errorMessages.NO_TOKEN.message,
          errorMessages.NO_TOKEN.code
        );
      }

      req.user = tokenObject.user;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkRefreshToken: async (req, res, next) => {
    try {
      const token = req.get(constants.AUTHORIZATION);

      if (!token) {
        throw new ErrorHandler(
          statusCodesConstants.UNAUTHORIZED,
          errorMessages.NO_TOKEN,
          errorMessages.NO_TOKEN.code
        );
      }

      await oAuthService.verifyToken(token, 'refresh');

      const tokenObject = await OAuth.findOne({ refreshToken: token });

      if (!tokenObject) {
        throw new ErrorHandler(
          statusCodesConstants.UNAUTHORIZED,
          errorMessages.NO_TOKEN,
          errorMessages.NO_TOKEN.code
        );
      }

      req.user = tokenObject.user;

      next();
    } catch (e) {
      next(e);
    }
  }
};
