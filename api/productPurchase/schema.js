const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productPurechaseSchema = new schema({
  info: {
    recieverEmail: String,
    recieverName: String,
    country: String,
    city: String,
    phone: String,
    shippingAddress: String,
    price: String,
    image: String,
  },
  productId: String,
  owner: String,
  payment: String,
  status: String,
});

module.exports = mongoose.model('productpurechase', productPurechaseSchema);

