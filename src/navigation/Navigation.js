import React, { Component } from "react";

const paths = {"/home" : 0, "/news": 1};

class Navigation extends Component {
	constructor (props) {
		super(props);
		this.nav = React.createRef();
	}

	componentDidMount () {
		this.nav.current.addEventListener("itemSelect", this.onTabSelected.bind(this));
		this.nav.current.selectedIndex = paths[this.props.location.pathname];
	}

	onTabSelected(event){
		const route = event.detail.item.getAttribute("data-key");
		this.props.history.push(`${route}`);
	}

	render() {
		return(
			<div>
				<ui5-tabcontainer ref={this.nav} show-overflow background-design="Transparent">
					<ui5-tab data-key="/home" text="Home">
					</ui5-tab>
					<ui5-tab data-key="/news" text="News">
					</ui5-tab>
				</ui5-tabcontainer>
			</div>
		);
	}
}

export default Navigation;