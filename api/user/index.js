const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const isAuthenticated = require('./../../utility/isAuthenticated');
const route = express.Router();
const controller = require('./controller');

route.post('/createUser', (req, res) => {
  const userInfo = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phone: req.body.phone,
  };
  console.log(userInfo);
  bcrypt.hash(userInfo.password, 10)
    .then((encodePassword) => {
      userInfo.password = encodePassword;
      controller.createUser(userInfo)
        .then((success) => {
          res.render('login', { login: false, username: '', message: 'Đăng kí thành công' });
        })
        .catch((err) => {
          res.render('login', { login: false, username: '', message: 'Đăng kí thất bại' });
        });
    });
});

route.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});

route.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

route.post('/updateProfile', isAuthenticated, (req, res) => {
  const username = req.user.username;
  controller.findUserByUsername(username)
    .then((success) => {
      success.name = req.body.name;
      success.email = req.body.email;
      success.phone = req.body.phone;
      success.gender = req.body.gender === 'Male'? true: false;
      success.address = req.body.address;
      success.save((err) => {
        if (err) throw err;
        console.log('Update profile sucessful!')
      });
      // console.log(success);
      // console.log(username);
      // console.log(req.user.username);
      res.redirect('/userInfo');
    })
    .catch((err) => {
      res.send(err);
    })
});

route.post('/changePassword', isAuthenticated, (req, res) =>{
  const username = req.user.username;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const confirmPassword = req.body.confirmPassword;
  controller.findUserByUsername(username)
  .then((user) => {
    if(user.validPassword(oldPassword)){
      if(newPassword == confirmPassword){
        bcrypt.hash(newPassword, 10)
        .then((encodePassword) => {
          user.password = encodePassword;
          user.save((err) => {
            if(err) throw err;
            console.log('Change password sucessfull!');
          });
        res.redirect('/userInfo');
        })
        .catch((err) => {
          res.send(err);
        })
      }
    }else{
      console.log('Invalid password!');
      res.redirect('/userInfo');
    }
  })
});

module.exports = route;
