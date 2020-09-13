import React, {Component} from "react"
import axios from "axios";
import Card from "../utils/card.product";
class Homepage extends Component {
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
			return <Card product = {currentProduct} key = {item}/>
		})
	}

	render() {
		return (
			<div className="section">
				<div className="container">
					<div className="list_container_shop">
							<ul className="shop">
								{this.renderProductDashbord()}
							</ul>
					</div>
				</div>
			</div>	
		)
	}
}


export default Homepage;
