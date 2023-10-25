const express = require('express');
//mysql2の読み込む
const mysql = require('mysql2');
const app = express();
const port = 3001;

//mysqlと接続するための設定
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'takeru76E',
    database: 'darts_app'
});

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/api', (req, res) => {
    // /apiにアクセスした際に、MySQLに対して行う処理
    connection.query(
        //usersテーブルからデータを取得する処理
        'SELECT * FROM users',
        function(err, results, fields){
            if(err){
                console.log('接続エラー');
                throw err;
            }
            res.json({message: results[0].name});
        }
    )
});

app.listen(port, () => {
    console.log(`listening on *:${port}`);
})