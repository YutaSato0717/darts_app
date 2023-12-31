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
        .where({ type: '01', user_id: userId })
        .orderBy('id', 'desc')
        .limit(10);

      // 全ユーザーのgamesテーブルからstats_or_scoreの平均の上位5人のnameとその平均の値を取得
      const top5Players = await knex('games')
        .innerJoin('users', 'users.id', '=', 'games.user_id')
        .select(['users.name', knex.raw('AVG(stats_or_score) as average')])
        .where({ type: '01' }) // '01' ではなく `01` を使用
        .groupBy('users.name')
        .orderBy('average', 'desc')
        .limit(5);




      console.log(top5Players);

      // データをejsテンプレートに渡してrender
      res.render('01', {
        title: '01',
        isAuth: isAuth,
        user01Games: userGameData,
        top01Players: top5Players,
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
      type: '01',
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
      res.redirect('/zeroone');
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

module.exports = router;