const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', async function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);

  try {
    // 最高の countup スコアを取得
    const highestCountupScore = await knex('games')
      .max('stats_or_score as highest_score')
      .where({ user_id: userId, type: 'countup' })
      .first();

    // countup の平均スコアを計算
    const averageCountupScore = await knex('games')
      .where({ user_id: userId, type: 'countup' })
      .avg('stats_or_score as avg_score')
      .first();

    // 01 の平均スコアを計算
    const average01Stats = await knex('games')
      .where({ user_id: userId, type: '01' })
      .avg('stats_or_score as avg_score')
      .first();

    // cricket の平均スコアを計算
    const averageCricketStats = await knex('games')
      .where({ user_id: userId, type: 'cricket' })
      .avg('stats_or_score as avg_score')
      .first();

    console.log('highestCountupScore:', highestCountupScore);
    console.log('averageCountupScore:', averageCountupScore);
    console.log('average01Stats:', average01Stats);
    console.log('averageCricketStats', averageCricketStats);


    // 結果をレンダリング
    res.render('home', {
      title: 'Darts App',
      isAuth: isAuth,
      highestCountupScore: highestCountupScore.highest_score,
      averageCountupScore: averageCountupScore.avg_score || 0,
      average01Stats: average01Stats.avg_score || 0,
      averageCricketStats: averageCricketStats.avg_score || 0,
    });
  } catch (err) {
    console.error(err);
    res.render('home', {
      title: 'Darts App',
      isAuth: isAuth,
    });
  }
});

router.post('/', function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  const game = req.body.add;
  knex("games")
    .insert({user_id: 1, content: game})
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      console.error(err);
      res.render('home', {
        title: 'Darts App',
        isAuth: isAuth,
      });
    });
});

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));
router.use('/zeroone', require('./01'));
router.use('/countup', require('./countup'));
router.use('/cricket', require('./cricket'));

module.exports = router;