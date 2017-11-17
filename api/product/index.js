const express = require('express');

const route = express.Router();
const controller = require('./controller');
const controllerPH = require('../productHistory.js/controller')

route.post('/saveProducts', (req, res) => {
  const arrProducts = req.body.data;
  controller.saveMultipleProduct(arrProducts)
    .then(success => res.send(success))
    .catch(err => res.send(err));
});

route.post('/sellProduct', (req, res) => {
  const item = {
    name: req.body.productName,
    provider_id: req.user._id,
    price: req.body.SPrice,
    description: req.body.description,
    category: req.body.categoryId,
    is_sold: false,
    image: req.body.Img1,
    start_time: req.body.Stime,
    end_time: req.body.Etime
  };
  controller.createItem(item)
  .then(success => {
    console.log('Upload a new product successfull!');
    res.redirect('/sellNewProduct');
  })
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
      console.log('Update product '+ idProduct +' successfull!');
    });
    res.redirect('/sellingItem');
  })
})

route.post('/deleteProduct', (req, res) => {
  const idProduct = req.body.idProduct;
  controller.deleteItem(idProduct)
  .then((success) => {
    console.log('Remove item '+ idProduct + ' from products successfull!');
    // res.redirect('/sellingItem');
  })
  .catch((err)=> {
    res.send(err);
  });
  controllerPH.deleteItemById(idProduct)
  .then((success) => {
    console.log('Remove ' + idProduct + ' from product histories successfull!');
    res.redirect('/sellingItem');
  })
  .catch((err) => {
    res.send(err);
  })
})
module.exports = route;
