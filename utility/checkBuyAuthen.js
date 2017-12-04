const productController = require('../api/product/controller');
const dateValidate = require('./dateValidate');
const productHistoriesController = require('../api/productHistory.js/controller');

module.exports = function (req, res, next) {
  productController.getProductById(req.query.id)
    .then((product) => {
      if (!dateValidate.compareDate(product.end_time)) {
        productHistoriesController.getProductHistoryById(id)
          .then((history) => {
            if(history.histories.pop().username !== req.user.username){
                res.send('Bạn không có quyền truy cập')
            } else {
                next();
            }
          });
      } else {
        res.send('Chưa hết thời gian đấu giá');
      }
    })
    .catch((err) => {
        res.send('Có lỗi xảy ra');
    });
};
