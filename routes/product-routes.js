const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel');

// Post a new product
// http://localhost:3001/products/create
router.post('/create',
    (req, res) => {
  
        // Use the productModel to create a new document
        ProductModel
        .create(
            {
                brand: req.body.brand,
                model: req.body.model,
                description: req.body.description,
                color: req.body.color,
                origin: req.body.origin,
                price: req.body.price
            }
        )
        .then(
            (dbDocument) => {
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        ); 
    }
);

// Export the routes for 'products'
module.exports = router;