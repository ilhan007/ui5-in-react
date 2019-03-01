
import React, { Component } from 'react';
import ListItem from './ListItem';
import "./List.css";

class List extends Component {
	render () {
		const items = this.props.data.map(item => {
			return <ListItem
						key={item.id}
						item={item}
						editItem={this.props.editItem}
						removeItem={this.props.removeItem}/>
		})
		return <ui5-list no-data-text="No items yet" class="list">{items}</ui5-list>
	}
}

export default List;