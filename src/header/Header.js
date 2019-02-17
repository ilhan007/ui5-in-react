import React, { Component } from "react";
import "@ui5/webcomponents/dist/ShellBar";

class Header extends Component {
	render(){
		return(
			<ui5-shellbar
				primary-title='Corporate Portal'
				secondary-title="Employee service"
				second-title="Second Title"
				notification-count="42"
				show-profile
				show-product-switch
				logo="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
				show-notification>
			</ui5-shellbar>
		);
	}
}

export default Header;