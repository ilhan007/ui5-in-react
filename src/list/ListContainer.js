import React, { Component } from 'react';
import http from 'axios';
import List from './List';
import "../list/List.css";

const API_URL = '//5c6929b5bad2070014abb4ce.mockapi.io/todo';
const RESPONSE_OK = 200;

class ListContainer extends Component {
	constructor (props) {
		super(props);

		// initial state
		this.state = {
			data: [],
			editedItem: {id: '', key: '', text: ''},
			editText: '',
		};

		this.editItem = this.editItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	
		// edit dialog refs
		this.dialog = React.createRef();
		this.inputEdit = React.createRef();
		this.cancelEdit = React.createRef();
		this.saveEdit = React.createRef();
	}

	componentDidMount () {
		this.loadItems();

		this.inputEdit.current.addEventListener("liveChange", this.onInputEditLiveChange.bind(this));
		this.saveEdit.current.addEventListener("press", this.onDialogSavePress.bind(this));
		this.cancelEdit.current.addEventListener("press", this.onDialogCancelPress.bind(this));
	}

	editItem(editedItem) {
		this.setState({editedItem})
		this.dialog.current.open();
	}

	onInputEditLiveChange(e) {
		this.setState({editText: e.target.value})
	}

	onDialogCancelPress() {
		this.clearEditState();
		this.dialog.current.close();
	}

	onDialogSavePress() {
		const newText = this.state.editText;
		const item = this.state.editedItem;

		if (newText) {
			this.updateItem(item.id, newText);
		}

		this.onDialogCancelPress();
	}

	async updateItem(itemId, text) {
		const response = await http.put(`${API_URL}/todos/${itemId}`, {text});
		
		if (response.status === RESPONSE_OK) {
			this.loadItems();
		}
	}

	async removeItem(item) {
		const response = await http.delete(`${API_URL}/todos/${item.id}`);

		if (response.status === RESPONSE_OK) {
			this.loadItems();
		}
	}

	async loadItems() {
		const data = await this.fetchItems();
		this.updateData(data);
	}

	async fetchItems() {
		return (await http.get(`${API_URL}/todos`)).data;
	}

	updateData(data) {
		this.setState({data});
	}

	clearEditState() {
		this.setState({
			editedItem: {id: '', key: '', text: ''},
			editText: ""
		})
	}

	render () {
		return (
			<div>
				<List
					removeItem={this.removeItem}
					editItem={this.editItem}
					data={this.state.data}/>

				<ui5-dialog ref={this.dialog} header-text="Edit" class="dialog">
					<div className="edit-dialog-content">
						<ui5-title class="padding-bottom" level="H2">{this.state.editedItem.text}</ui5-title>
						<ui5-input value={this.state.editedItem.text} ref={this.inputEdit} placeholder="New title .."></ui5-input>
					</div>
					<div data-ui5-slot="footer" className="edit-dialog-footer">
						<ui5-button ref={this.cancelEdit} class="h-space">Cancel</ui5-button>
						<ui5-button ref={this.saveEdit} type="Emphasized" class="h-space">Save</ui5-button>
					</div>
				</ui5-dialog>
			</div>
		)
	}
}

export default ListContainer;