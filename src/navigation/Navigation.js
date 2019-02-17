import React, { Component } from "react";

class Navigation extends Component {
	render(){
		return(
			<ui5-tabcontainer show-overflow fixed collapsed class="full-width" selected-key="item2">
				<ui5-tab key="item1" text="Home">
				</ui5-tab>
				<ui5-tab key="item2" text="Manifacturing">
				</ui5-tab>
				<ui5-tab key="item3" text="Asset Managment">
				</ui5-tab>
				<ui5-tab key="item4" text="Design">
				</ui5-tab>
			</ui5-tabcontainer>
		);
	}
}

export default Navigation;