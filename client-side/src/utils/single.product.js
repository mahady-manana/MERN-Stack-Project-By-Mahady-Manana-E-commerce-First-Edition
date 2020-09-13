import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

class productItemList extends Component {
	constructor (props) {
		super (props);
		this.state = {
			addOpenClass : false
		}
		this.handleConfirmation = this.handleConfirmation.bind(this)
		this.confirmDeletion = this.confirmDeletion.bind(this)
	}

	checkPromoExist () {
		const promo = this.props.product.product_price_promo

		if (!promo) {
			return null 
		} else {

			const Promo = <span className="promo_in_dashbord">
			{this.props.product.product_price_promo}</span>
			 return Promo
		}
		return promo
	}

	handleConfirmation (event) {
		event.preventDefault();
		const currentState = this.state.addOpenClass
		this.setState({addOpenClass : !currentState})
	}

	confirmDeletion (event) {
		event.preventDefault();
		axios.delete("http://localhost:5000/product/delete/" + this.props.product._id)
			 .then(response => {
			 	this.setState({
			 		addOpenClass : false
			 	})
			 	console.log('Deleted successfully')
			 })
			 .catch(error => console.log('Cannot perform this action : ', error))

		window.location.reload()
	}
  

	render () {
		return (
			<tr>
				<td><input type="checkbox"/></td>
	        	<td>{this.props.product.product_title}</td>
	        	<td>{this.props.product.product_category}</td>
	        	<td>{this.props.product.product_price} {this.checkPromoExist()}</td>
	        	<td>
	        		<div className="btn-group btn-group-lg">
					  	<button type="button" className="btn btn-primary">
					  	<Link to={"/edit/" + this.props.product._id}>Edit</Link></button>
					  <button type="button" 
					  		  className="btn btn-danger" 
					  		  onClick = {this.handleConfirmation}>Delete
					  </button>
					</div>
					<div id="popup-confirmation" 
						 className = {this.state.addOpenClass == true 
						 				? "open_confirmation_popup" 
						 				: "close_confirmation_popup"}>
						<div className="popup-content">
							<div className="warning_info">
								<h4 className="text-danger warning_info_deletion">Warning!</h4>
								<p>Do you want to delete permanently ?</p>
								<h6>Product :</h6>
								<span className="product_tobe_deleted">{this.props.product.product_title}</span>
							</div>
							<div className="btn-container">
								<div className="btn_delete_permanently">
									<button type="button" 
										className="btn btn-danger" 
										onClick = {this.confirmDeletion}>Delete permanently
									</button>			
								</div>
								<div className="cancel_delete">
									<button type="button" 
											className="btn btn-primary" 
											onClick = {this.handleConfirmation}>Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
	        	</td>
	      	</tr>
		)
	}
}


export default productItemList;