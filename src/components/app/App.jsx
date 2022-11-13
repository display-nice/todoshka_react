import "./css-vendor/bootstrap/bootstrap.min.css";
import "./css-vendor/fontawesome/all.min.css";
import "./app.css";

import React, { Component } from "react";
import styled from "styled-components";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 800px;
`;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ text: "Хоп, хей, лалалей", important: true, like: false, id: 1 },
				{ text: "Где вопросы", important: false, like: false, id: 2 },
				{ text: "Где ответы", important: false, like: false, id: 3 },
			],
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.makeNewArray = this.makeNewArray.bind(this);

		this.maxId = 4;
	}
	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((dataElement) => dataElement.id === id);
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArray = [...before, ...after];
			return {
				data: newArray,
			};
		});
	}
	addItem(userText) {
		const newItem = {
			label: userText,
			important: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	}
	// makeNewArray - часть управления метками important\like
	// и готовит новый массив для setState (иммутабельность)
	makeNewArray(data, id, type) {
		const index = data.findIndex((dataElement) => dataElement.id === id);
		const oldElement = data[index];
		let newElement;
		switch (type) {
			case ('important'):
				// берём старый объект, разворачиваем его спредом, меняем в нём знач. св-ва important
				newElement = { ...oldElement, important: !oldElement.important };
				break;
			case ('like'):
				// берём старый объект, разворачиваем его спредом, меняем в нём знач. св-ва like
				newElement = { ...oldElement, like: !oldElement.like }; 
				break;
			// no default
		}
		const before = data.slice(0, index); // это массив до искомого элемента
		const after = data.slice(index + 1); // это массив после искомого элемента
		const newArray = [...before, newElement, ...after]; // склеиваем новый массив из кусков старого плюс новый элемент
		return newArray;
	}

	// onToggleImportant - проброшенный в компонент post-list-item обработчик события
	// управляет меткой "important" в стейте в data
	onToggleImportant(id) {
		this.setState(({ data }) => {
			const type = 'important';
			return {
				data: this.makeNewArray(data, id, type)
			};
		});
	}

	// onToggleLiked - проброшенный в компонент post-list-item обработчик события
	// управляет меткой "like" в стейте в data
	onToggleLiked(id) {
		this.setState(({ data }) => {
			const type = 'like';
			return {
				data: this.makeNewArray(data, id, type)
			};
		});
	}
	render() {
		const { data } = this.state;
		const likedPostsQ = data.filter((elem) => elem.like).length;
		const allPostsQ = data.length;
		return (
			<AppBlock>
				<AppHeader likedPostsQ={likedPostsQ} allPostsQ={allPostsQ} />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
					posts={this.state.data}
				/>
				<PostAddForm onAdd={this.addItem} />
			</AppBlock>
		);
	}
}
