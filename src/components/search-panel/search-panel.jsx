import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchedTextLocal: ''
		}
		this.onUpdateSearchLocal = this.onUpdateSearchLocal.bind(this);
	}
	onUpdateSearchLocal(e) {
		const searchedText = e.target.value;
		this.setState({
			searchedTextLocal: searchedText,
		})
		this.props.onUpdateSearchAppJsx(searchedText);
	}
	render() {
		return (
			<input
				onChange={this.onUpdateSearchLocal}
				className="form-control search-input"
				type="text"
				placeholder="Поиск по записям"
			/>
		);
	}	
};


