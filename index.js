const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Tuts Points server is running!');
});

app.listen(port, () => {
  console.log(`Tuts Points server is running on port: ${port}`);
});
