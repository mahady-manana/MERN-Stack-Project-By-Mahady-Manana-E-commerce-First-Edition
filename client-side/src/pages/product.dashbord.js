import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom";
import Product from "../utils/single.product"

class Dashbord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products : []
		}
	}
	componentDidMount () {
		axios.get("http://localhost:5000/product")
			 .then(response => {
			 	this.setState({
			 		products : response.data 
			 	})
			 })
			 .catch(error => {
			 	throw error
			 	console.log('Cannot get product')
			 })
	}

	renderProductDashbord () {
		return this.state.products.map((currentProduct, item) => {
			return <Product product = {currentProduct} key = {item}/>
		})
	}

	render() {
		return (
			<article className="create-product-page page">
				<section className="section container">
				  <div className="container">
				      <h2>Dashbord</h2>
				  </div>
				  <div className="row">
				  	<div className="col-4">
				      <button type="button" className="btn btn-primary btn-lg">
				      		<Link to="/create">Add new product</Link>
				      </button>
				  </div>
				  <div className="col-4">
				      <button type="button" className="btn btn-primary btn-lg">
				      	<Link to="/create">Visit shop</Link>
				      </button>
				  </div>
				  </div> 
				</section>
				<section className="section">
				  <div className="section">
				      <div className="container">
				        <table className="table table-striped">
				          <thead>
				            <tr>
				              <th></th>
				              <th>Title</th>
				              <th>Category</th>
				              <th>Price (PROMO)</th>
				              <th>Actions</th>
				            </tr>
				          </thead>
				          <tbody>
				          	{this.renderProductDashbord()}
				          </tbody>
				        </table>
				      </div>
				  </div> 
				</section>
			</article>
		);
	}
}


export default Dashbord;