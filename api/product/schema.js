const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const schema = mongoose.Schema;

const priceValidator = [
  validate({
    validator(val) {
      if (val > 0) {
        return true;
      }
      return false;
    },
    message: 'Price must be > 0',
  }),
];
// const categoryValidator = [
//   validate({
//     validator(val){
//       if ((val == 'electronic') || (val == 'fashion') || (val == 'watches') || (val == 'others')){
//         return true;
//       }
//       return false;
//     },
//     message: 'Category invalid!',
//   }),
// ];

const productSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    validate: priceValidator,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  is_sold: Boolean,
  image: {
    type: String,
    required: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('product', productSchema);
