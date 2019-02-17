import React, { Component } from "react";
import "./Featured.css";

class Featured extends Component {
	render(){
		return(
			<section className="app-section app-section--card">
				<ui5-card
					heading="Recent Activities"
					status="3 of 15"
					class="app-card">
						<ui5-list separators="Inner">
							<ui5-li type="Active ">Sport</ui5-li>
							<ui5-li type="Active">Manage Leave Requests</ui5-li>
							<ui5-li type="Active">My Calendar</ui5-li>
						</ui5-list>
					</ui5-card>

					<ui5-card
						heading="Frequently Used"
						status="3 of 15"
						class="app-card">
						<ui5-list separators="Inner">
							<ui5-li type="Active ">My Work items</ui5-li>
							<ui5-li type="Active">Manage Leave Requests</ui5-li>
							<ui5-li type="Active">My Calendar</ui5-li>
						</ui5-list>
					</ui5-card>

					<ui5-card
						heading="Corporate News"
						status="3 of 15"
						class="app-card">
						<ui5-list separators="Inner">
							<ui5-li type="Active ">October in Cyber Security</ui5-li>
							<ui5-li type="Active">Solving The Last Mile of Digital Manifacturing</ui5-li>
							<ui5-li type="Active">My Calendar</ui5-li>
						</ui5-list>
					</ui5-card>
			</section>
		);
	}
}

export default Featured;