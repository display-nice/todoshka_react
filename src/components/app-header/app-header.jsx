import React from 'react';
import styled from 'styled-components';

// import './app-header.css';

const Header = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	h1 {
		font-size: 40px;
		color: ${(props) => props.colored ? 'red' : 'black'}
		:hover {
			color: blue;
		}
	}
	h2 {
		font-size: 1.2rem;
		color: grey;
	}
`;

const AppHeader = ({allPostsQ, likedPostsQ}) => {
	return (
		<Header>
			<h1>Oleg Grigorev</h1>
			<h2>{allPostsQ} записей, из них понравилось {likedPostsQ}</h2>
		</Header>
	)
}
export default AppHeader;