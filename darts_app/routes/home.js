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
    
    const winCount01 = await knex('games')
      .where({ user_id: userId, type: '01', win: 1 })
      .count('id as win_count')
      .first();
    
    const gameCount01 = await knex('games')
      .where({ user_id: userId, type: '01' })
      .count('id as game_count')
      .first();
    
    const win_rate_01 = winCount01.win_count / gameCount01.game_count;
    
    const winCountCricket = await knex('games')
      .where({ user_id: userId, type: 'cricket', win: 1 })
      .count('id as win_count')
      .first();
    
    const gameCountCricket = await knex('games')
      .where({ user_id: userId, type: 'cricket' })
      .count('id as game_count')
      .first();
    
    const win_rate_cricket = winCountCricket.win_count / gameCountCricket.game_count;

    const game_01_Data = await knex('games')
        .select('stats_or_score', 'win')
        .where({ type: '01', user_id: userId })
        .orderBy('id', 'desc')
        .limit(10);

    const game_Count_Data = await knex('games')
        .select('stats_or_score', 'win')
        .where({ type: 'countup', user_id: userId })
        .orderBy('id', 'desc')
        .limit(10);
      
    const game_Cricket_Data = await knex('games')
        .select('stats_or_score', 'win')
        .where({ type: 'cricket', user_id: userId })
        .orderBy('id', 'desc')
        .limit(10);


    console.log('highestCountupScore:', highestCountupScore);
    console.log('averageCountupScore:', averageCountupScore);
    console.log('average01Stats:', average01Stats);
    console.log('averageCricketStats', averageCricketStats);
    console.log('win_rate_01', win_rate_01);
    console.log('win_rate_cricket', win_rate_cricket);
    console.log('01_data', game_01_Data);
    console.log('cricket_data', game_Cricket_Data);
    console.log('countup_data', game_Count_Data);


    // 結果をレンダリング
    res.render('home', {
      title: 'Darts App',
      isAuth: isAuth,
      highestCountupScore: highestCountupScore.highest_score,
      averageCountupScore: averageCountupScore.avg_score || 0,
      average01Stats: average01Stats.avg_score || 0,
      averageCricketStats: averageCricketStats.avg_score || 0,
      win01: win_rate_01 || 0,
      winCricket: win_rate_cricket || 0,
      user01Games : game_01_Data || 0,
      userCricketGames : game_Cricket_Data || 0,
      userCountupGames : game_Count_Data || 0,
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
