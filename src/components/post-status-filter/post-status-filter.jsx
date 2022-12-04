import React from 'react';
// import {Button} from 'reactstrap';
import './post-status-filter.css';


export default class PostStatusFilter extends React.Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{name: 'all', label: 'Все'},
			{name: 'iLiked', label: 'Понравилось'},
		]
	}
	render() {
		const buttons = this.buttons.map(({name, label}) => {
			const {filterType, onFilterSelect} = this.props;
			const activeBtn = filterType === name;
			const clazz = activeBtn ? 'btn-info' : 'btn-outline-secondary';
			return (
				<button 
					key={name} 
					className={`btn ${clazz}`} 
					type='button'
					onClick={() => onFilterSelect(name)}>
				{label}</button>
			)
		});
		return (
			<div className='btn-group'>
				{buttons}
			</div>
		)
	}	
}