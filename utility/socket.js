const productHistoriesController = require('../api/productHistory.js/controller');
const productController = require('../api/product/controller');
const dateValidate = require('../utility/dateValidate');

/* eslint-disable */
const connectSocket = function (socket, io) {
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
                      time: new Date()
                    }],
                    maxPrice: val.newPrice,
                  };
                  productHistoriesController.saveProductHistory(obj)
                  .then((success) => {
                    socket.emit('response', 'Success !');
                    io.sockets.emit('newPrice', val.newPrice);
                  })
                  .catch(err => socket.emit('response', 'Occur error !'));  
                } else {
                  if(result.maxPrice < val.newPrice){ 
                    result.histories.push({
                      username: val.username, 
                      price: val.newPrice,
                      time: new Date()
                    });
                    result.maxPrice = val.newPrice;
                    productHistoriesController.updateProductHistory(result)
                    .then((success) => {
                      // console.log('aaa');
                      socket.emit('response', 'Success !');
                      // console.log('bbb', io);
                      io.sockets.emit('newPrice', {newPrice: result.maxPrice, id: val.id});
                    })
                    .catch(err => socket.emit('response', 'occur error'));
                  }
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

  socket.on("check status", (id) => {
    productController.getProductById(id)
      .then((product) => {
        if(!dateValidate.compareDate(product.end_time)){
          productHistoriesController.getProductHistoryById(id)
           .then((history) => {
             socket.emit("result of auction");
           });
        } else {
          socket.emit("cannot check now");
        }
      })
      .catch((err) => {
        socket.emit("cannot check now");
      });
    // socket.emit("cannot check now");
  })
};

module.exports = connectSocket;
