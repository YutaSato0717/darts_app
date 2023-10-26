const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;

// mysqlと接続するための設定
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'takeru76E',
    database: 'darts_app'
});

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    function(err, results, fields){
      if(err){
        console.log('接続エラー');
        console.error(err); // エラー情報をコンソールに出力
        res.status(500).json({ error: 'Database error' });
      } else {
        res.json({ message: results[0].name });
        console.log("good")
      }
    }
  );
});


app.listen(port, () => {
    console.log(`listening on *:${port}`);
})