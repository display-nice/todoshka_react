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
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }
  onToggleImportant(id) {
    console.log(`important id = ${id}`);
  }
  // onToggleLiked ищет лайкнутый пост в стейте и изменяет его в стейте подменой массива (иммутабельность) 
  onToggleLiked(id) {
    this.setState(({data}) => {
		const index = data.findIndex(dataElement => dataElement.id === id);
		const oldElement = data[index];
		const newElement = {...oldElement, like: !oldElement.like} // берём старый объект, разворачиваем его спредом, а затем заменяем в нём значение свойства like
		const before = data.slice(0, index); // это массив до искомого элемента 
		const after = data.slice(index + 1); // это массив после искомого элемента
		const newArray = [...before, newElement, ...after] // склеиваем новый массив из кусков старого плюс новый элемент
		// заменяем содержимое старого массива содержимым нового массива
		return {
			data: newArray
		}
	 })
  }
	render() {
		const {data} = this.state;
		const likedPostsQ = data.filter(elem => elem.like).length;
		const allPostsQ = data.length;
		return (
			<AppBlock>
				<AppHeader 
					likedPostsQ={likedPostsQ}
					allPostsQ={allPostsQ}
				/>
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList onDelete={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked} posts={this.state.data} />
				<PostAddForm onAdd={this.addItem} />
			</AppBlock>
		);
	}
}
