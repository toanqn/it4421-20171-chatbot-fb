const ObjectId = require('mongoose').Types.ObjectId;
const product = require('./schema');

const saveMultipleProduct = function (arrProducts) {
  return product.insertMany(arrProducts);
};

const get6Products = function (pageNumber) {
  return product.find({}).skip((pageNumber - 1) * 6).limit(6).sort({ start_time: -1 });
};

const getProductById = function (id) {
  return product.findOne({ _id: id });
};

const getDateExpired = function (id) {
  return product.findOne({ _id: id }, { end_time: 1 });
};

const createItem = function (item) {
  return product.insertMany(item);
};

const deleteItem = function (id) {
  return product.findOneAndRemove({ _id: id });
};
const getProductsOfUser = function (username) {
  return product.find({ provider: username });
};

const getProductWithCate = function (cateId) {
  return product.find({ category_id: cateId });
};

const getProductByName = function (text) {
  return product.find({ 'name': { $regex: `.*${text}*.` } });   // eslint-disable-line
};

module.exports = {
  saveMultipleProduct,
  get6Products,
  getProductById,
  getDateExpired,
  createItem,
  getProductsOfUser,
  deleteItem,
  getProductWithCate,
  getProductByName,
};
