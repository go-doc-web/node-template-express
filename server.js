const express = require('express');
const app = express();

const morgan = require('morgan'); //

const PORT = 7777;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, err => {
  if (err) {
    console.error('Error at aserver launch ', err);
  }
  console.log(`server start in the ${PORT}`);
});
