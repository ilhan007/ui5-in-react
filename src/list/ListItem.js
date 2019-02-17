import React, { Component } from 'react';

class ListItem extends Component {
	constructor (props) {
		super(props);
		this.remove = this.remove.bind(this);
		this.edit = this.edit.bind(this);
		this.btnEdit = React.createRef();
		this.btnDelete = React.createRef();
	}

	componentDidMount() {
		this.btnEdit.current.addEventListener("press", this.edit);
		this.btnDelete.current.addEventListener("press", this.remove);
	}

	remove(e) {
		e.target.disabled = true;
		this.props.removeItem(this.props.item);
	}

	edit() {
		this.props.editItem(this.props.item);
	}

	render () {
		const { id, text } = this.props.item;
		return (
			<ui5-li-custom key={id}>
				<div className="custom-li-item">
					<ui5-title class="custom-li-item-title" level="H4">{text}</ui5-title>
					<div className="custom-li-item-actions">
						<ui5-button
							ref={this.btnEdit}
							type="Emphasized"
							icon-end icon="sap-icon://edit"
							class="h-space">Edit
						</ui5-button>
						<ui5-button
							ref={this.btnDelete}
							type="Negative"
							icon-end icon="sap-icon://delete"
							class="h-space">Delete
						</ui5-button>
					</div>
				</div>
			</ui5-li-custom>
		)
	}
}

export default ListItem;