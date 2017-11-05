const productHistoriesController = require('../api/productHistory.js/controller');
const productController = require('../api/product/controller');
const dateValidate = require('../utility/dateValidate');

/* eslint-disable */
const connectSocket = function (socket) {
  socket.on('send price', (val) => {
    if(val.username === ''){
        socket.emit('response', 'You need signin first !');
    } else {
        productController.getDateExpired(val.id)
        .then((success) => {
          const notYetExpired = dateValidate.compareDate(success.end_time);
          if (notYetExpired) {
            productHistoriesController.getProductHistoryById(val.id)
              .then((result) => {
                if (result === null) {
                  const obj = {
                    productId: val.id,
                    histories: [{
                      username: val.username,
                      price: val.newPrice,
                    }],
                    maxPrice: val.newPrice,
                  };
                  productHistoriesController.saveProductHistory(obj)
                  .then(success => socket.emit('response', 'Success !'))
                  .catch(err => socket.emit('response', 'Occur error !'));  
                } else {
                  result.histories.push({username: val.username, price: val.newPrice});
                  if( result.maxPrice < val.newPrice) result.maxPrice = val.newPrice;
                  console.log('aaa',result);
                  productHistoriesController.updateProductHistory(result)
                  .then(success => socket.emit('response', 'Success !'))
                  .catch(err => socket.emit('response', 'Occur error !'));
                }
              });
          } else {
            socket.emit('response', 'Expired !');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};

module.exports = connectSocket;
