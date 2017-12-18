const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const isAuthenticated = require('./../../utility/isAuthenticated');
const route = express.Router();
const controller = require('./controller');
const flash = require('connect-flash');

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
          console.log('Đăng kí thành công!');
          req.flash('msg_signup', 'Đăng ký thành công!');
          res.redirect('/login');
        })
        .catch((err) => {
          req.flash('msg_signup', 'Đăng kí thất bại!');
          res.redirect('/signup');
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
      success.aboutme = req.body.aboutme;
      success.save((err) => {
        if (err) throw err;
        console.log('Update profile of '+ username +' successful!');
        
      });
      // console.log(success);
      // console.log(username);
      // console.log(req.user.username);
      req.flash('update_profile', 'Cập nhật thông tin tài khoản thành công!');
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
      if((newPassword == confirmPassword) && newPassword != ''){
        bcrypt.hash(newPassword, 10)
        .then((encodePassword) => {
          user.password = encodePassword;
          user.save((err) => {
            if(err) throw err;
            console.log('Change password of '+ username +'sucessfull!');
            req.flash('update_profile', 'Cập nhật mật khẩu thành công!');
          });
        res.redirect('/userInfo');
        })
        .catch((err) => {
          res.send(err);
        })
      } else {
        console.log('Password is empty or confirm password not match!');
        req.flash('update_profile', 'Mật khẩu rỗng hoặc không khớp!');
        res.redirect('/userInfo');
      }
    }else{
      console.log('Invalid password!');
      req.flash('update_profile', 'Mật khẩu sai!');
      res.redirect('/userInfo');
    }
  })
});

route.post('/updateAvatar', (req, res) => {
  const username = req.user.username;
  controller.findUserByUsername(username)
  .then((success) => {
    success.image = req.body.avatar;
    success.save((err) => {
      if(err) throw err;
      console.log('Change avatar of '+ username +' successfull!');
      res.redirect('/userInfo');
    })
  })
})
module.exports = route;
