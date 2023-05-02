const mongoose = require('mongoose');

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
image: String,
});

const Mouse = mongoose.model('Mouse', mouseSchema, 'mouse');

module.exports = Mouse;