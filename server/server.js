/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mouse-picker', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const mouseSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  color: String,
  dpi: Number,
  sensor: String,
  weight: Number,
  size: String,
  hand: String,
  grip: String,
  connection: String,
  link: String,
  score: Number,
  tracking: String,
});

const Mouse = mongoose.model('Mouse', mouseSchema, 'mouse');

module.exports = Mouse;

app.get('/mouse', async (req, res) => {
  try {
    const data = await Mouse.find({});
    console.log("data: ", data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Mouse, updateAllMice } = require('./mouseController');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mouse-picker', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
});

app.get('/mouse', async (req, res) => {
try {
await updateAllMice();
const data = await Mouse.find({});
console.log("data: ", data);
res.json(data);
} catch (err) {
console.log(err);
res.status(500).send('Internal Server Error');
}
});

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});