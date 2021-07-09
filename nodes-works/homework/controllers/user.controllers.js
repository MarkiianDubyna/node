const {
  statuseCodesEnum,
  responseCodesEnum,
  emailActionsEnum
} = require('../constants');
const { User } = require('../dataBase');
const { passwordHasher } = require('../helpers');
const { mailService } = require('../services');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();

      res.status(statuseCodesEnum.SUCCESS).json(users);
    } catch (err) {
      res.status(statuseCodesEnum.INCORRECT_REQUEST).json(err.message);
    }
  },

  getUserById: (req, res) => {
    try {
      const userById = User.findById(req.params.id);

      res.status(statuseCodesEnum.SUCCESS).json(userById);
    } catch (err) {
      res.status(statuseCodesEnum.INCORRECT_REQUEST).json(err.message);
    }
  },

  createUser: async (req, res) => {
    try {
      const { password } = req.body;

      const hashedPassword = await passwordHasher.hash(password);
      const createdUser = await User.create({ ...req.body, password: hashedPassword });

      res.status(statuseCodesEnum.SUCCESS).json(createdUser);
    } catch (err) {
      res.status(statuseCodesEnum.INCORRECT_REQUEST).json(err.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { email, name } = req.user;

      await User.findOneAndDelete({ _id: req.params.id });

      await mailService.sendMail(email, emailActionsEnum.USER_DELETED, { userName: name });

      res.status(statuseCodesEnum.DELETED).json(responseCodesEnum.SUCCESS);
    } catch (err) {
      res.status(statuseCodesEnum.INCORRECT_REQUEST).json(err.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      const { email, name } = req.user;

      await User.findOneAndUpdate({ _id: req.params.id }, req.body);

      await mailService.sendMail(email, emailActionsEnum.USER_UPDATED, { userName: name });

      res.status(statuseCodesEnum.UPDATED).json(responseCodesEnum.SUCCESS);
    } catch (err) {
      res.status(statuseCodesEnum.INCORRECT_REQUEST).json(err.message);
    }
  }

};
