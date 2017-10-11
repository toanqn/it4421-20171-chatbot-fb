const express = require('express');

const route = express.Router();
const controller = require('./controller');

route.post('/saveProducts', (req, res) => {
  const arrProducts = req.body.data;
  controller.saveMultipleProduct(arrProducts)
    .then(success => res.send(success))
    .catch(err => res.send(err));
});

module.exports = route;
