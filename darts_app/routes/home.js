const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'darts_app' });
});

router.use('/signup', require('./signup'));

module.exports = router;
