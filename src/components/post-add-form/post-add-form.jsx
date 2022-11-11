import React from "react";
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
	return (
		<div className="bottom-panel d-flex" action="">
			<input
				className="form-control new-post-label"
				type="text"
				placeholder="Что надо сделать?"
			/>
			<button onClick={() => onAdd('Hello')} className="btn btn-outline-secondary" type="submit">
				Добавить
			</button>
		</div>
	);
};

export default PostAddForm;