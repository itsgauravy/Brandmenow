const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    desc: String,
    image: [String],
    price: Number,
    categories: [String],
});

module.exports = mongoose.model('Product', productSchema);
