const express = require('express');
const router =express.Router();
const knex = require("../db/knex");
const bcrypt = require("bcrypt");

router.get('/', function(req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  res.render('signup', {
    title: 'Sign up',
    isAuth: isAuth,
  });
});

router.post('/', async function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  const username = req.body.username;
  const password = req.body.password;
  const repassword = req.body.repassword;

  try {
    const existingUser = await knex("users").where({ name: username }).select("*");

    if (existingUser.length !== 0) {
      return res.render("signup", {
        title: "Sign up",
        errorMessage: ["このユーザ名は既に使われています"],
        isAuth: isAuth,
      });
    }

    if (password === repassword) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const [newUserId] = await knex("users").insert({ name: username, password: hashedPassword });

      req.session.userid = newUserId;

      return res.redirect("/");
    } else {
      return res.render("signup", {
        title: "Sign up",
        errorMessage: ["パスワードが一致しません"],
        isAuth: isAuth,
      });
    }
  } catch (err) {
    console.error(err);
    return res.render("signup", {
      title: "Sign up",
      errorMessage: [err.sqlMessage],
      isAuth: isAuth,
    });
  }
});


module.exports = router;