import React, { Component } from "react";
import "./post-list-item.scss";

export default class PostListItem extends Component {
	render() {
		const { text, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;
		let classNames = "app-list-item d-flex justify-content-between";
		if (important) {
			classNames += " important";
		}
		if (like) {
			classNames += " like";
		}
		return (
			<div className={classNames}>
				<span onClick={onToggleLiked} className="app-list-item-label">{text}</span>
				<div className="d-flex justify-content-center align-items-center">
					<button onClick={onToggleImportant} className="btn-star btn-sm" type="button">
						<i className="fa-solid fa-star"></i>
					</button>
					<button onClick={onDelete} className="btn-trash btn-sm" type="button">
						<i className="fa-solid fa-circle-minus"></i>
					</button>
					<i className="fa fa-heart"></i>
				</div>
			</div>
		);
	}
}

// important = false это установка значения important по умолчанию в "false"
// то есть фолс будет, если такой проп не придёт.
// const PostListItem = ({ text, important = false }) => {
// 	let classNames = "app-list-item d-flex justify-content-between";
// 	if (important) {
// 		classNames += " important";
// 	}
// 	return (
// 		<div className={classNames}>
// 			<span className="app-list-item-label">{text}</span>
// 			<div className="d-flex justify-content-center align-items-center">
// 				<button className="btn-star btn-sm" type="button">
// 					<i className="fa-solid fa-star"></i>
// 				</button>
// 				<button className="btn-trash btn-sm" type="button">
// 					<i className="fa-solid fa-circle-minus"></i>
// 				</button>
// 				<i className="fa fa-heart"></i>
// 			</div>
// 		</div>
// 	);
// };

// export default PostListItem;
