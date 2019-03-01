import React, { Component } from "react";
import {hot} from "react-hot-loader";
import { Route } from "react-router-dom";

import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/CustomListItem";
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Popover";
import "@ui5/webcomponents/dist/Dialog";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/Panel";

import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Main from "../main/Main.js";
import "./App.css";

class App extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return(
			<div className="app-root">
				<Header />
				<Route path='/' component={Navigation}/>
				<Main />
			</div>
		);
	}
}

export default hot(module)(App);