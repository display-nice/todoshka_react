import React from "react";
import "./post-list.css";

import PostListItem from "./post-list-item/post-list-item";

const PostList = ({ posts }) => {
	const elements = posts.map((item) => {
		const {id, ...otherProps} = item;
		return (
			<li key={id} className="list-group-item">
				<PostListItem {...otherProps} />
				{/* <PostListItem text={item.text} favorite={item.favorite} /> */}
				{/* тоже самое, но без spread-оператора */}
			</li>
		);
	});
	return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
