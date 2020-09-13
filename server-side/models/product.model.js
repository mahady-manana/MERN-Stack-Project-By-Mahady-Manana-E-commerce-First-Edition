const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Model = new Schema ({
	product_title : {
		type : String,
		required : true
	},
	product_price : {
		type : Number,
		required : true
	},
	product_type : {
		type : String,
		required : true
	},
	product_category : {
		type : String,
		required : true
	},
	product_price_promo : {
		type : Number,
		required : false
	},
	product_description : {
		type : String,
		required : true
	},
	product_short_description : {
		type : String,
		required : true
	},
})

module.exports = mongoose.model("simpleModel", Model)