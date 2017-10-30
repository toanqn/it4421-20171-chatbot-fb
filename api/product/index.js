const express = require('express');

const route = express.Router();
const controller = require('./controller');

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
  console.log(item);
  controller.createItem(item);
  res.redirect('/sellProduct');
})
module.exports = route;
