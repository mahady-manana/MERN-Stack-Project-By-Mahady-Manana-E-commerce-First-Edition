import React, {Component} from "react"
import {Input, Textarea, Select} from "../utils/utils.input";
import axios from "axios";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product_title : "", 
        product_price : "",
        product_type : "",
        product_category : "", 
        product_price_promo : "",
        product_description : "",
        product_short_description : "",
        loading : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    event.preventDefault()
    const indexName = event.target.name
    const indexValue = event.target.value

    this.setState({[indexName] : indexValue}) 
  }
  componentDidMount () {
  	  const id = this.props.match.params.id
      axios.get("http://localhost:5000/product/edit/" + id)
            .then(response =>
            	this.setState({
            		product_title : response.data.product_title, 
			        product_price : response.data.product_price,
			        product_type : response.data.product_type,
			        product_category : response.data.product_category, 
			        product_price_promo : response.data.product_price_promo,
			        product_description : response.data.product_description,
			        product_short_description : response.data.product_short_description
            	})
            )
            .catch(error => {
              console.log(error)
            })
  }

  handleSubmit (event) {
  	event.preventDefault()

  	const getUpdate = {
        product_title : this.state.product_title, 
        product_price : this.state.product_price,
        product_type : this.state.product_type,
        product_category : this.state.product_category, 
        product_price_promo : this.state.product_price_promo,
        product_description : this.state.product_description,
        product_short_description : this.state.product_short_description,
    }
    const id = this.props.match.params.id
  	axios.post("http://localhost:5000/product/update/" + id, getUpdate)
  		 .then(response => {
  		 	console.log(response.data)
  		 })
  		 .catch(error => console.log(error))
  }

  render() {
    return (
      <article className="create-product-page page">
        <section className="section">
          <div className="container edit_titre">
            <h2>Update product : </h2>
            <h4>Your are looking to edit : <span className="product_to_edit">{this.state.product_title}
            </span></h4>
          </div> 
        </section>
        <section className="section">
          <div className="container">
            <div className="inner-form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="row">   
                  <div className="col-8">
                    <div className="input-container">
                      <Input type="text"
                          placeholder = "title"
                          labelName = "Title :"
                          name = "product_title"
                          value = {this.state.product_title}
                          onChange = {this.handleChange}
                      />
                    </div>
                    <div className="row">
                      <div className="input-container col-6">
                        <Input type="number"
                            placeholder = "price"
                            labelName = "Price :"
                            name = "product_price"
                            value = {this.state.product_price}
                            onChange = {this.handleChange}
                        />
                      </div>
                      <div className="input-container col-6">
                        <Input type="number"
                            placeholder = "price promo"
                            labelName = "Promo :"
                            name = "product_price_promo"
                            value = {this.state.product_price_promo}
                            onChange = {this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-container col-6">
                        <Input type="text"
                            placeholder = "type"
                            labelName = "Type :"
                            name = "product_type"
                            value = {this.state.product_type}
                            onChange = {this.handleChange}
                        />
                      </div>
                      <div className="input-container col-6">
                        <Select type="text"
                            placeholder = "category"
                            labelName = "Category :"
                            name = "product_category"
                            value = {this.state.product_category}
                            onChange = {this.handleChange}
                            optionValue="Men"
                            optionName="Men"
                            optionValue2="Women"
                            optionName2="Women"                            
                            optionValue3="Child"
                            optionName3="Child"
                        />
                      </div>
                    </div>
                    <div className="input-container">
                      <Input type="text"
                          placeholder = "short description"
                          labelName = "Short description :"
                          name = "product_short_description"
                          value = {this.state.product_short_description}
                          onChange = {this.handleChange}
                      />
                    </div>
                    <div className="input-container">
                      <Textarea type="text"
                          placeholder = "description"
                          labelName = "Product description :"
                          name = "product_description"
                          value = {this.state.product_description}
                          onChange = {this.handleChange}
                      ></Textarea>
                    </div>
                  </div>
                  <div className="col-4 right-side-col">
                    <h4>Create new product</h4>
                    <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>              
                  <div className="p-3">
                      <button type="submit" className="btn btn-primary">Update</button>
                  </div>
                  <div>
                      <h5>Lorem ipsum dolor sit amet</h5>
                      <p>Lorem ipsum</p>
                      <img src="" alt=""/>
                  </div>
                  </div>
                    </div>
                </form>
            </div>    
          </div>
        </section>
      </article>
    );
  }
}


export default Update;