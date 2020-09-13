import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// import Pages
import Homepage from "./pages/homepage";
import AddProduct from "./pages/add.product";
import Dashbord from "./pages/product.dashbord";
import Update from "./pages/update.product";

class Application extends Component {
	// constructor(args) {
	// 	// code
	// }

	render() {
		return (
			<Router>
			  <div>
			    <nav className="navbar navbar-expand-sm bg-primary navbar-light">
				  <ul className="navbar-nav">
				    <li className="nav-item active">
				      <Link className="nav-link" to="/dashbord">Dashbord</Link>
				    </li>
				    <li className="nav-item">
				      <Link className="nav-link" to="/create">Create</Link>
				    </li>
				    <li className="nav-item">
				      <Link className="nav-link" to="/">Shop</Link>
				    </li>
				  </ul>
				</nav>
			  </div>
			  <div>
			    <Switch>
			      <Route exact path="/" component = {Homepage}/>
			      <Route exact path="/create" component = {AddProduct}/>
			      <Route exact path="/edit/:id" component = {Update}/>
			      <Route exact path="/dashbord" component = {Dashbord}/>
			    </Switch>
			  </div>
			  <div>
			    
			  </div>
			</Router>
		);
	}
}

export default Application;
