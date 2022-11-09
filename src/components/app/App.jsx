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
				{ text: "Хоп, хей, лалалей", favorite: true, id: 1 },
				{ text: "Где вопросы", favorite: false, id: 2 },
				{ text: "Где ответы", favorite: false, id: 3 },
			],
		};
    this.deleteItem = this.deleteItem.bind(this);
	}
  deleteItem(id) {
    console.log(id);
  }
	render() {
		return (
			<AppBlock>
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList 
          posts={this.state.data} 
          onDelete={this.deleteItem} />
				<PostAddForm />
			</AppBlock>
		);
	}
}
