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

const AppHeader = () => {
	return (
		<Header>
			<h1>Oleg Grigorev</h1>
			<h2>5 записей, из них понравилось 0</h2>
		</Header>
	)
}
export default AppHeader;