const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', async function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);

  if (isAuth) {
    // ログインしているユーザーのgamesテーブルのtypeがcountupでstats_or_scoreからidの大きい10個の値を取得
    const userCountupGames = await knex('games')
      .select('stats_or_score')
      .where({ user_id: userId, type: 'countup' })
      .orderBy('id', 'desc')
      .limit(10);

    const topCountupPlayers = await knex('games')
      .join('users', 'games.user_id', 'users.id')
      .select('users.name')
      .max('games.stats_or_score as max_stats_or_score')
      .where('games.type', 'countup')
      .groupBy('users.name')
      .orderBy('max_stats_or_score', 'desc')
      .limit(5);
    
    
    console.log(userCountupGames)
    console.log(topCountupPlayers)

    res.render('countup', {
      title: 'Darts App',
      isAuth: isAuth,
      userCountupGames: userCountupGames,
      topCountupPlayers: topCountupPlayers,
    });
  } else {
    res.render('countup', {
      title: 'Darts App',
      isAuth: isAuth,
    });
  }
});

router.post('/', async function (req, res, next) {
  const userId = req.session.userid;

  // ログインしているユーザーのgamesテーブルにデータを追加
  const { stats_or_score, win } = req.body; // ここで適切なリクエストボディのデータを取得する必要があります
  const gameData = {
    type: 'countup',
    user_id: userId,
    stats_or_score,
    win,
  };

  const insertedGame = await knex('games').insert(gameData);

  res.redirect('/countup');
});

module.exports = router;
