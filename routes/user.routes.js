const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/user/no-permission');
  }
};

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', { user: req.user });
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile', { user: req.user });
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
