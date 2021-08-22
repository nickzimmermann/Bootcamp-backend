// ... Backend Exercise 2 ...

// (1) Create a file called 'ProductModel.js' in the models folder.
// (2) Create a ProductSchema in that file. The details are "brand: String", "model: String",  "description: String", "color: String", "origin: String", "price: Number"
// (3) Create a ProductModel with ProductSchema for the collection 'products' and export using module.exports
// (4) Import the 'ProductModel.js' in 'server.js'
// (5) Create a POST route to create a sample product
// For reference, see UserModel.js and server.js

// Import mongoose
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true            
        },
        description: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        origin: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
);

const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;