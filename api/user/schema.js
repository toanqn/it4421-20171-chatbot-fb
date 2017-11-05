const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema;

const emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Email is Invalid',
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
  address: String,
  name: String,
  gender: Boolean
});

userSchema.methods.validPassword = (password) => {
  return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('user', userSchema);
