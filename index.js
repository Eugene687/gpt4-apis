const fs = require('fs');
const axios = require('axios');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', async function (req, res) {
  res.send('Welcome to my simple ai api✨');
});

app.get('/ai', async function (req, res) {
  const ask = req.query.ask;
	try {
  const response = await axios.get(`https://openai-rest-api.vercel.app/hercai?ask=${ask}`);

  res.send(response.data);

} catch (error) {
console.error(`error na bai maya kana mag ai`, error);
res.status(500).send('Internal Server Error');
}
});

app.get('/meme', async function (req, res) {
  try {
	 const gen = await axios.get('https://meme-api.com/gimme');
	 res.send(gen.data);
  } catch (error) {
	 console.error('Error fetching meme:', error);
	 res.status(500).send('Error fetching meme');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});