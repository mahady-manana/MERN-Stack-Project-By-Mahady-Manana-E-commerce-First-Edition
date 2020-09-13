const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
/******
* Initialize EXPRESS MIDDLEWARE
*******/
const app = express()
/*******
* ROUTERS CONFIG
*******/
const Product = require('./routers/product.router')

const CURRENT_WORKING_DIR = process.cwd()

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

// app.use(express.static(path.join(CURRENT_WORKING_DIR, "public")))

app.use(cors())
//PARSING DATA
app.use(express.json())

// MONGODB ATLAS
//   DB Name : YOUR DB NAME
// 	 username : USERNAME
// 	 password : PASSWORD

// const uriDB = process.env.MONGO_URI || 'mongodb+srv://<YOUR USERNAME>:<YOUR PASSWORD>@cluster0.ysfnr.mongodb.net/<PROJECTNAME>?retryWrites=true&w=majority'

// MONGODB LOCAL
const uriDB = "mongodb://localhost:27017/db"

// CONNECTION TO DB
mongoose.connect(uriDB, {
		useNewUrlParser : true,
		useUnifiedTopology : true,
		useFindAndModify : false
	},
	error => {
		if (error)
			console.log('Connection to MongoDB FAILED', error)
		else
			console.log('Connection to MongoDB Successfully!')
	}
)

// INITIALIZE PRODUCT ROUTER
app.use('/product', Product)

// PORT CONFIG
app.listen(port, error => {
  	if (error)
    	throw error
    else
  		console.log(`SERVER ! : \n*** http://localhost:${port} ***`)
})
