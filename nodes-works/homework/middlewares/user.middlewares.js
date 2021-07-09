const { User } = require('../dataBase');
const { errorMessages, ErrorHandler } = require('../errors');
const { statusCodesConstants } = require('../constants');

module.exports = {
  isUserExist: async (req, res, next) => {
    try {
      const userById = await User.findById(req.params.id);

      if (!userById) {
        throw new ErrorHandler(
          statusCodesConstants.INCORRECT_REQUEST,
          errorMessages.USER_NOT_EXIST.message,
          errorMessages.USER_NOT_EXIST.code
        );
      }

      req.user = userById;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkIsEmailExist: async (req, res, next) => {
    try {
      const { email } = req.body;
      const userByEmail = await User.findOne({ email });
      if (userByEmail) {
        throw new ErrorHandler(
          statusCodesConstants.INCORRECT_REQUEST,
          errorMessages.EMAIL_IS_ALREADY_EXIST.message,
          errorMessages.EMAIL_IS_ALREADY_EXIST.code
        );
      }
      next();
    } catch (e) {
      next(e);
    }
  },

  isUserAlreadyExist: async (req, res, next) => {
    try {
      const users = await User.find();

      const isUserExist = users.some((user) => user.username === req.body.username);

      if (!isUserExist) {
        throw new ErrorHandler(
          statusCodesConstants.INCORRECT_REQUEST,
          errorMessages.USER_ALREADY_EXIST.message,
          errorMessages.USER_ALREADY_EXIST.code
        );
      }
      next();
    } catch (e) {
      next(e);
    }
  },

  getUserByDynamicParam: (paramName, searchIn = 'body', dbKey = paramName) => async (req, res, next) => {
    try {
      const valueOfParams = req[searchIn][paramName];

      req.user = await User.findOne({ [dbKey]: valueOfParams }).select('+password');
      next();
    } catch (e) {
      next(e);
    }
  }
};
