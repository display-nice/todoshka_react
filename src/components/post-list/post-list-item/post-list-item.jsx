import React from 'react';
import './post-list-item.css';

// favorite = false это установка значения favorite по умолчанию в "false"
// то есть фолс будет, если такой проп не придёт.
const PostListItem = ({text, favorite = false}) => {	
	let classNames = 'app-list-item d-flex justify-content-between';
	if (favorite) {
		classNames += ' important';
	}
	return (
		<div className={classNames}>
			<span className="app-list-item-label">
				{text}
			</span>
			<div className='d-flex justify-content-center align-items-center'>
				<button className='btn-star btn-sm' type='button'>
					<i className="fa-solid fa-star"></i>
				</button>
				<button className='btn-trash btn-sm' type='button'>
					<i className="fa-solid fa-circle-minus"></i>
				</button>
				<i className='fa fa-heart'></i>
			</div>
		</div>
	)
}

export default PostListItem;