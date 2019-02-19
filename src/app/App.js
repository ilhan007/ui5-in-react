import React, { Component } from "react";
import {hot} from "react-hot-loader";

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

import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Featured from "../sections/Featured";
import ListContainer from "../list/ListContainer";
import RoutingExample from "../routingExample/RoutingExample";
import "./App.css";

class App extends Component {
	render(){
		return(
			<div className="app-root">
				{/* Shell Header */}
				<Header /> 

				<div className="app-content">
					{/* Tabs */}
					<Navigation />

					{/* CRUD List */}
					<ui5-title level="H3" class="app-section-title">CRUD List</ui5-title>
					<ListContainer /> 

					{/* Cards section */}
					<ui5-title level="H3" class="app-section-title">Featured</ui5-title>
					<Featured />

					<ui5-title level="H3" class="app-section-title">Routing Example</ui5-title>
					<RoutingExample />
				</div>
			</div>
		);
	}
}

export default hot(module)(App);