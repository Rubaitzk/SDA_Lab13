const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('LAB 13 SDA - DOCKER WORKING');
});

app.get('/api', (req, res) => {
  res.json({ message: 'This is a Docker API' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});