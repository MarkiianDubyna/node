const { Schema, model } = require('mongoose');
const { dataBaseTablesEnum, userRolesEnum } = require('../constants');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number
  },
  password: {
    type: String
  },
  role: {
    type: String,
    enum: Object.values(userRolesEnum),
    default: userRolesEnum.USER
  }
});

module.exports = model(dataBaseTablesEnum.USER, userSchema);
