import React from "react";
import { ListGroup } from "reactstrap";
import "./post-list.css";

import PostListItem from "./post-list-item/post-list-item";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
	const elements = posts.map((item) => {
		const { id, ...otherProps } = item;
		return (
			<li key={id} className="list-group-item">
				<PostListItem {...otherProps} onDelete={ () => onDelete(id) } onToggleImportant={() => onToggleImportant(id)} onToggleLiked={() => onToggleLiked(id)}/>
				{/* <PostListItem text={item.text} important={item.important} /> */}
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
