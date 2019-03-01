import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import News from "./News";
import "./Main.css";

class Main extends Component {
	render(){
		return(
			<Switch>
				<Route path='/home' component={Home}/>
				<Route exact path='/news' component={News}/>
				<Redirect from="/" to="home" />
			</Switch>
		);
	}
}

export default Main;