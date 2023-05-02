const axios = require('axios');
const cheerio = require('cheerio');
const Mouse = require('./mouse');

async function updateMouse(mouse) {
try {
const response = await axios.get(mouse.link);
const $ = cheerio.load(response.data);


let price = $('#priceblock_ourprice').text().trim();
    if (!price) {
      price = $('#priceblock_dealprice').text().trim();
    }
    if (!price) {
      price = $('span.a-price > span.a-offscreen').text().trim();
    }
    if (!price) {
      price = $('span.priceBlockStrikePriceString.a-text-strike').text().trim();
    }
    if (price) {
      mouse.price = parseFloat(price.replace(/[^\d.]/g, '')).toFixed(2);
    }



const imageUrl = $('#imgTagWrapperId img').attr('src');
if (imageUrl) {
  mouse.image = imageUrl;
}


await mouse.save();

console.log(`Successfully updated mouse ${mouse.name}`);
} catch (err) {
console.log('Error updating mouse ${mouse.name}: ${err}');
}
}

async function updateAllMice() {
const mice = await Mouse.find({});
for (let i = 0; i < mice.length; i++) {
await updateMouse(mice[i]);
}
}

module.exports = { Mouse, updateAllMice, updateMouse };