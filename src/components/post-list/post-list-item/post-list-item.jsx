import React, { Component } from "react";
import "./post-list-item.scss";

export default class PostListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favorite: false,
			like: false,
		}
		this.onFavorite = this.onFavorite.bind(this);
		this.onLike = this.onLike.bind(this);
	}
	onFavorite() {
		this.setState(({favorite}) => ({
			favorite: !favorite,
		}))
	}
	onLike() {
		this.setState(({like}) => ({
			like: !like,
		}))
	}
	render() {
		const { text, onDelete } = this.props;
		const {favorite, like} = this.state;
		let classNames = "app-list-item d-flex justify-content-between";
		if (favorite) {
			classNames += " important";
		}
		if (like) {
			classNames += " like";
		}
		return (
			<div className={classNames}>
				<span onClick={this.onLike} className="app-list-item-label">{text}</span>
				<div className="d-flex justify-content-center align-items-center">
					<button onClick={this.onFavorite} className="btn-star btn-sm" type="button">
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

// favorite = false это установка значения favorite по умолчанию в "false"
// то есть фолс будет, если такой проп не придёт.
// const PostListItem = ({ text, favorite = false }) => {
// 	let classNames = "app-list-item d-flex justify-content-between";
// 	if (favorite) {
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
