const userModel = require('./schema');

const createUser = function (info) {
  return userModel.insertMany(info);
};

const findUserByUsername = function (username) {
  return userModel.findOne({ username });
};

module.exports = {
  createUser,
  findUserByUsername,
};
