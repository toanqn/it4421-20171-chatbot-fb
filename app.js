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
const bcryptUtility = require('./utility/bcrypt');

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

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login', { show: false });
});

app.get('/detail', (req, res) => {
  res.render('productDetail');
});


if (!process.env.NODE_ENV) {
  mongoose.connect(config.DB_Address);
}

app.listen(config.PORT, (err, success) => {
  if (err) {
    console.log('have error occur');
  } else {
    console.log(`Server is runing at ${config.PORT}`);
  }
});
