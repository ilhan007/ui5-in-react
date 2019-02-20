import React, { Component } from "react";

class Navigation extends Component {
	render(){
		return(
<ui5-panel>
        <ui5-table id="todo-table">
            <ui5-table-column data-ui5-slot="columns">
                <span data-ui5-slot="header">Task</span>
            </ui5-table-column>
            <ui5-table-column data-ui5-slot="columns" width="10rem">
                <span data-ui5-slot="header">Actions</span>
            </ui5-table-column>

            <ui5-table-row data-ui5-slot="rows" id="todo-item-row-1">
                <ui5-table-cell data-ui5-slot="cells">
                    <span className="item-text">Finish this example</span>
                </ui5-table-cell>

                <ui5-table-cell data-ui5-slot="cells">
                    <span>
                        <ui5-button data-item-id="1" icon="sap-icon://delete" class="remove-button"
                                    type="Transparent"></ui5-button>
                        <ui5-button data-item-id="1" icon="sap-icon://accept" class="done-button"
                                    type="Transparent"></ui5-button>
                    </span>
                </ui5-table-cell>
            </ui5-table-row>

            <ui5-table-row data-ui5-slot="rows" id="todo-item-row-2">
                <ui5-table-cell data-ui5-slot="cells">
                    <span className="item-text">Finish this example</span>
                </ui5-table-cell>

                <ui5-table-cell data-ui5-slot="cells">
                    <span>
                        <ui5-button data-item-id="2" icon="sap-icon://delete" class="remove-button"
                                    type="Transparent"></ui5-button>
                        <ui5-button data-item-id="2" icon="sap-icon://accept" class="done-button"
                                    type="Transparent"></ui5-button>
                    </span>
                </ui5-table-cell>
            </ui5-table-row>
        </ui5-table>
</ui5-panel>
		);
	}
}

export default Navigation;