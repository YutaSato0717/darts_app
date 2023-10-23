const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/api', (req, res) => {
    res.json({ message: 'Hello World!' });
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });  

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});