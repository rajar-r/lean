

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pm');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    description: String
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;

