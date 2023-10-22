//requireでexpressモジュールを読み込む
const express = require('express');
//expressモジュールを実体化して、定数appに代入
const app = express();
//ポート番号を指定
const port = 3000;

//'/'パスにGET要求があった際に実行する処理
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//3000ポートでlisten
app.listen(port, () => {
  console.log(`listening on *:${port}`);
})