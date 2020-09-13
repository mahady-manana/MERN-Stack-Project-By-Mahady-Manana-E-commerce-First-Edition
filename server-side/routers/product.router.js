const express = require("express"),
	  router = express.Router();

const Product = require('../controllers/product.controller')

// Post
router.post('/add', Product.createProduct)
// Read
// console.log(Product.createProduct())
router.get('/', Product.readProduct)
// Edit
router.get('/edit/:id', Product.editProduct)
// Update
router.post('/update/:id', Product.updateProduct)
// Delete
router.delete('/delete/:id', Product.deleteProduct)

module.exports = router;
