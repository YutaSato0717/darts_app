const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  req.session = null;
  res.redirect('/');
});

module.exports = router;