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

var userSchema = new schema({
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
  gender: Boolean,
  aboutme: String,
  image: String,
});

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('user', userSchema);
