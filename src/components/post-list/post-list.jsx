import React from "react";
import { ListGroup } from "reactstrap";
import "./post-list.css";

import PostListItem from "./post-list-item/post-list-item";

const PostList = ({ posts, onDelete }) => {
	const elements = posts.map((item) => {
		const { id, ...otherProps } = item;
		return (
			<li key={id} className="list-group-item">
				<PostListItem {...otherProps} onDelete={ () => onDelete(id) }/>
				{/* <PostListItem text={item.text} favorite={item.favorite} /> */}
				{/* тоже самое, но без spread-оператора */}
			</li>
		);
	});
	return (
		<ListGroup className="app-list">
			{elements}
		</ListGroup>
	);
};

export default PostList;
