const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', async function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);

  if (isAuth) {
    try {
      // ログインしているユーザーのgamesテーブルから最大10件のデータを取得
      const userGameData = await knex('games')
        .select('stats_or_score', 'win')
        .where({ type: 'cricket', user_id: userId })
        .orderBy('id', 'desc')
        .limit(10);

      // 全ユーザーのgamesテーブルからstats_or_scoreの平均の上位5人のデータを取得
      const top5Players = await knex('games')
        .select('user_id', knex.raw('AVG(stats_or_score) as average'))
        .where({ type: 'cricket' })
        .groupBy('user_id')
        .orderBy('average', 'desc')
        .limit(5);

      // データをejsテンプレートに渡してrender
      res.render('cricket', {
        title: 'Cricket',
        isAuth: isAuth,
        userCricketGames: userGameData,
        topCricketPlayers: top5Players,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// POST関数: ログインしているユーザーのgamesテーブルにデータを追加
router.post('/', async function (req, res, next) {
  const userId = req.session.userid;

  if (userId) {
    // データを追加するクエリを実行
    const { stats_or_score, win } = req.body; // リクエストからデータを取得
    const gameData = {
      type: 'cricket',
      stats_or_score,
      win,
      user_id: userId,
    };

    // データを追加する前に、stats_or_scoreの値が正しいことを検証する
    if (isNaN(stats_or_score)) {
      res.status(400).json({ error: 'Stats or score must be a number.' });
      return;
    }

    try {
      await knex('games').insert(gameData);
      res.status(200).json({ message: 'Data added successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

module.exports = router;
