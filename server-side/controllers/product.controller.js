const express = require("express"),
	  router = express.Router();


const Model = require('../models/product.model')

// Create
const createProduct = (req, res) => {
	const product = new Model(req.body)

	product.save()
	  	.then(product => {
	  		res.status(200).send("Product added Successfully")
	  	})
	  	.catch(error => {
	  		res.send(error)
	  	})
}

// Read All
const readProduct = (req, res) => {
	Model.find((error, data) => {
		if (error)
			throw error
		else
			res.json(data)
	})
}

// Edit one
const editProduct = (req, res) => {
	const id = req.params.id
	Model.findById(id, (error, data) => {
		if (error) {
			res.send(error)
			console.log(error)			
		} else {
			res.status(200).json(data)
		}
	})
}

// Update one
const updateProduct = (req, res) => {
	const id = req.params.id
	Model.findById(id, (error, data) => {
		if (!data)
			res.status(404).send("Product not Found")
		else {
			data.product_title = req.body.product_title, 
	        data.product_price = req.body.product_price,
	        data.product_type = req.body.product_type,
	        data.product_category = req.body.product_category, 
	        data.product_price_promo = req.body.product_price_promo,
	        data.product_description = req.body.product_description,
	        data.product_short_description = req.body.product_short_description,
			data.save()
				.then(data => {
					res.status(200).json(data)
					console.log('Updated Successfully!')
				})
				.catch(error => {
					res.send(error)
				})
		}
			
	})
}

// delete
const deleteProduct = (req, res) => {
	const id = req.params.id
	Model.findByIdAndRemove(id, (error, data) => {
		if (error)
			res.send(error)
		else
			res.status(200).json("Product deleted Successfully")
	})
}

module.exports = {
	createProduct,
	readProduct,
	editProduct,
	updateProduct,
	deleteProduct	
}







