const express = require('express');

const route = express.Router();
const controller = require('./controller');
const controllerPH = require('../productHistory.js/controller');

route.post('/saveProducts', (req, res) => {
  const arrProducts = req.body.data;
  controller.saveMultipleProduct(arrProducts)
    .then((success) => {
      const arrProductHistories = success.map(e => ({
        productId: e._id,  //eslint-disable-line
        maxPrice: e.price,
        histories: [],
      }));
      console.log('here');
      return controllerPH.saveProductHistory(arrProductHistories);
    })
    .then(ok => res.send(ok))
    .catch(err => res.send(err));
});

route.post('/sellProduct', (req, res) => {
  const item = {
    name: req.body.productName,
    provider: req.user.username,
    price: req.body.SPrice,
    description: req.body.description,
    category: req.body.categoryId,
    is_sold: false,
    image: req.body.Img1,
    start_time: req.body.Stime,
    end_time: req.body.Etime,
  };
  controller.createItem(item)
    .then((e) => {
      const productHistories = {
        productId: e[0]._id,  //eslint-disable-line
        maxPrice: e[0].price,
        histories: [],
      }
      console.log('Upload a new product successfull!');
      return controllerPH.saveProductHistory(productHistories);
    })
    .then(ok => res.redirect('/sellNewProduct'))
    .catch(err => res.send(err));
});

route.post('/updateProduct', (req, res) => {
  const idProduct = req.body.idProduct;
  controller.getProductById(idProduct)
    .then((success) => {
      success.name = req.body.productName;
      success.price = req.body.SPrice;
      success.description = req.body.description;
      success.category = req.body.categoryId;
      success.image = req.body.Img1;
      success.start_time = req.body.Stime;
      success.end_time = req.body.Etime;
      success.save((err) => {
        if (err) throw err;
        console.log(`Update product ${idProduct} successfull!`);
      });
      res.redirect('/manageSales');
    });
});

route.post('/deleteProduct', (req, res) => {
  const idProduct = req.body.idProduct;
  controller.deleteItem(idProduct)
    .then((success) => {
      console.log(`Remove item ${idProduct} from products successfull!`);
    // res.redirect('/manageSales');
    })
    .catch((err) => {
      res.send(err);
    });
  controllerPH.deleteItemById(idProduct)
    .then((success) => {
      console.log(`Remove ${idProduct} from product histories successfull!`);
      res.redirect('/manageSales');
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = route;
