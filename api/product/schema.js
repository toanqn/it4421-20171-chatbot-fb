const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const schema = mongoose.Schema;

const prodcutSchema = new schema({
    name: {
        type: String,
        required: true,
      },
      provider_id: {
        type: String,
        required: true,
      },
      price: String,
      description: {
        type: String,
        required: true,
      },
      category_id: {
        type: String,
        required: true,
      },
      is_sold: Boolean,
      image: {
        type: String,
        required: true
      },
      start_time: {
        type: Date,
        required: true,
      },
      end_time: {
        type: Date,
        required: true
      }
    });

module.exports = mongoose.model('product', productSchema);
