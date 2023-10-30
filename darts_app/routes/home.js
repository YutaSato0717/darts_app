const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);

  knex("games")
    .select("*")
    .then(function (results) {
      res.render('home', {
        title: 'Darts App',
        todos: results,
      });
    })
    .catch(function (err) {
      console.error(err);
      res.render('home', {
        title: 'Darts App',
      });
    });
});

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));

module.exports = router;
