import React, {Component} from "react"

class CardProduct extends Component {

	constructor (props) {
		super (props);
		this.state = {
			addClass : false,
			noPromo : true
		}
		this.showLightbox = this.showLightbox.bind(this)
	}

	showLightbox (event) {
		event.preventDefault()

		const currentState = this.state.addClass
		this.setState({
			addClass : !currentState
		})
	}

	checkPromoExist () {
		const promo = this.props.product.product_price_promo

		if (!promo) {
			return null 
		} else {

			const Promo = <span className="promo_in_shop">
			{this.props.product.product_price_promo}</span>
			 return Promo
		}
		return promo
	}



	render () {
		return (
			<li className="single_product_shop">
				<div className="image_wraper">
					<img src="" alt=""/>
				</div>
				<div className="about_single_shop">
					<h2 className="title">{this.props.product.product_title}</h2>
					<span className="price">Price (Ar) : 
						<span id="normal_price"> {this.props.product.product_price} </span> 
							{this.checkPromoExist()}
					</span><br/>
					<span className="category_type">Cat : {this.props.product.product_category}, Type : {this.props.product.product_type}</span><br/>
					<span className="short_description">{this.props.product.product_short_description}</span><br/>
					<button type="button" className="btn btn-primary" onClick = {this.showLightbox}>View</button>
				</div>
				<div className={`popup_lightbox ${this.state.addClass == true ? "open_lightbox" : "close_lightbox"}`}>
					<button className =" btn btn_close_lightbox" onClick={this.showLightbox}>X</button>
					<div className="row">
						<div className="col-6">
							<div className="image_wraper">
								<img src="" alt=""/>
							</div>
						</div>
						<div className="col-6">
						<h2>{this.props.product.product_title}</h2>
						<span className="lightbox_price">{this.props.product.product_price} {this.checkPromoExist()}</span>
						<h5>Category : {this.props.product.product_category}</h5>
						<h5>Type : {this.props.product.product_type}</h5>
						<p>{this.props.product.product_short_description}</p>
						</div>
					</div>
					<div className="container_descr">
						<h4>Description :</h4>
						<div className="description">
						{this.props.product.product_description}
						</div>
					</div>
				</div>
			</li>
		)
	}
}


export default CardProduct;
