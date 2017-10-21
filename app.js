const express = require('express');

const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');  // eslint-disable-line
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const config = require('./config');
const userRoute = require('./api/user');
const userController = require('./api/user/controller');
const productRoute = require('./api/product');
const productController = require('./api/product/controller');
const bcryptUtility = require('./utility/bcrypt');
const isAuthenticated = require('./utility/isAuthenticated');
const dateValidate = require('./utility/dateValidate');

app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  userController.findUserByUsername(username)
    .then((user) => {
      done(null, user);
    });
});

passport.use(new LocalStrategy((username, password, done) => {
  userController.findUserByUsername(username)
    .then((user) => {
      if (user) {
        bcryptUtility.comparePassword(password, user.password)
          .then((result) => {
            if (result) {
              done(null, user);
            } else {
              done(null, false, { message: 'invalid password' });
            }
          });
      } else {
        done('invalid username');
      }
    })
    .catch((err) => {
      done(err);
    });
}));

app.use('/api/user', userRoute);
app.use('/api/product', productRoute);

app.get('/', (req, res) => {
  const page_number =  req.query.page_number; // eslint-disable-line
  productController.get6Products(page_number)
    .then((success) => {
      const filteredProduct = [];
      success.forEach((e) => {
        if (dateValidate.compareDate(e.end_time)) {
          filteredProduct.push(e);
        }
      });
      res.render('index', { login: req.isAuthenticated(), username: req.user ? req.user.username : '', products: filteredProduct });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/login', (req, res) => {
  res.render('login', { login: req.isAuthenticated(), username: req.user ? req.user.username : '', message: false });
});

app.get('/detail', (req, res) => {
  const { id } = req.query;
  productController.getProductById(id)
    .then((success) => {
      console.log('aaa', success);
      res.render('productDetail', { login: req.isAuthenticated(), username: req.user ? req.user.username : '', product: success });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/userInfo', isAuthenticated, (req, res) => {
  res.render('userInfor', { login: req.isAuthenticated(), username: req.user ? req.user.username : '' });
});

if (!process.env.NODE_ENV) {
  mongoose.connect(config.DB_Address);
}

app.listen(config.PORT, (err) => {
  if (err) {
    console.log('have error occur');
  } else {
    console.log(`Server is runing at ${config.PORT}`);
  }
});


// LINHPHAN EDIT TO SHOW IN PROJECT
app.get('/userProfile', (req, res) => {
  res.render('userProfile', { login: req.isAuthenticated(), username: req.user ? req.user.username : '' });
});

app.get('/bidHistory', (req, res) => {
  res.render('bidHistory', { login: req.isAuthenticated(), username: req.user ? req.user.username : '' });
});

app.get('/sellProduct', (req, res) => {
  res.render('sellProduct', { login: req.isAuthenticated(), username: req.user ? req.user.username : '' });
});

app.get('/buyItem', (req, res) => {
  res.render('buyItem', { login: req.isAuthenticated(), username: req.user ? req.user.username : '' });
});

// END LINHPHAN EDIT
