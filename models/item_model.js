const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
  name: {type: String, required: true, max: 100},
  description: {type: String, required: true, max: 200},
  price: {type: Number, required: true},
  image_url: {type: String, required: true, max: 500},
  product_url: {type: String, required: true, max: 500},
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Item', ItemSchema);