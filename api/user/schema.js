const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const schema = mongoose.Schema;

const emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Email is Invalid',
  }),
];

const roleValidator = [
  validate({
    validator(val) {
      if (val !== 'business' && val !== 'personal') {
        return false;
      }
      return true;
    },
    message: 'Role must be one of business or personal',
  }),
];

const userSchema = new schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: emailValidator,
  },
  phone: String,
  role: {
    type: String,
    required: true,
    validate: roleValidator,
  },
  address: String,
  name: String,
  gender: Boolean
});

module.exports = mongoose.model('user', userSchema);
