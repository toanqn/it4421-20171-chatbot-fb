const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const route = express.Router();
const controller = require('./controller');

route.post('/createUser', (req, res) => {
  const userInfo = {
    username: req.body.username,
    password: req.body.password,
    address: req.body.address,
    fullname: req.body.fullname,
    email: req.body.email,
    gender: req.body.gender,
    phone: req.body.phone,
    role: req.body.role,
  };
  bcrypt.hash(userInfo.password, 10)
    .then((encodePassword) => {
      userInfo.password = encodePassword;
      controller.createUser(userInfo)
        .then((success) => {
          res.send(success);
        })
        .catch((err) => {
          res.send(err);
        });
    });
});

route.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('success');
});

route.get('/test', (req, res) => {
  res.send(req.isAuthenticated());
});

module.exports = route;
