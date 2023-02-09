/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(req.query);
  res.send('hello from world');
});
app.get('/test', (req, res) => {
  res.send('hello from deep');
});
app.listen('3004', 'localhost', () => {
  console.log('server started');
});
