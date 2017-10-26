const schema = require('./schema');

const getProductHistoryById = function (id) {
  return schema.findOne({ productId: id });
};

const saveProductHistory = function(obj) {
  return schema.insertMany(obj);
};

const updateProductHistory = function (obj) {
  return schema.update({ _id: obj._id }, { $set: obj });
};

module.exports = {
  getProductHistoryById,
  saveProductHistory,
  updateProductHistory,
};
