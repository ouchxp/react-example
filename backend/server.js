const express = require('express');
const bodyParser = require('body-parser');

const PORT = 9001;

const app = express();

app.use(
  bodyParser.json({
    limit: '10mb',
  })
);

app.get('/greetings', (req, res) => {
  res.json({
    greetings: 'Hello Sunny'
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
