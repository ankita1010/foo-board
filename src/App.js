import React from 'react';
import {connect} from 'react-redux';
import {
	CreateNewBoard,
} from './components'
import './App.scss';

const App = (props) => {
	const {fooBoards} = props;
	return (
		<div className="app-block">
			<h4>Welcome to Foo Board</h4>
			{
				!fooBoards.length ? 
				<CreateNewBoard/>
				: <div>Board</div>
			}
		</div>
	);
};
const mapStateToProps = (state) => {
	const {boards, forms} = state;
	return({
		...boards,
		...forms
	});
};
export default connect(mapStateToProps, {})(App);