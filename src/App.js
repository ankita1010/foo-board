import React from 'react';
import { connect } from 'react-redux';
import {
	CreateNewData,
} from './components'
import { addNewBoard, updateFooBoardState } from './actions'
import './App.scss';

const App = (props) => {
	const {
		fooBoards,
		currentBoard,
		addNewBoard,
		updateFooBoardState
	} = props;
	const renderCurrentBoard = () => {
		const {
			fooBoardName,
			fooBoardSubtitle
		} = fooBoards.find(eachBoard => eachBoard.fooBoardId === currentBoard);
		return (
			<div>
				<h4>{fooBoardName}</h4>
				<p>{fooBoardSubtitle}</p>
			</div>
		)
	};
	const updateCurrentBoard = (fooBoardId) => {
		updateFooBoardState('currentBoard', fooBoardId)
	};
	if (currentBoard) return (<div>
		<button onClick={() => updateFooBoardState('currentBoard', null)}>
			Go Back
			</button>
		{renderCurrentBoard()}
	</div>
	)
	return (
		<div className="app-block">
			<h4>Welcome to Foo Board</h4>
			{
				!fooBoards.length ?
					<div>There are no foo boards created by you.</div>
					: <div>{
						fooBoards.map(eachBoard => {
							const {
								fooBoardName,
								fooBoardSubtitle,
								fooBoardId
							} = eachBoard;
							return (
								<div
									key={fooBoardId}
									onClick={() => updateCurrentBoard(fooBoardId)}
								>
									<h4>{fooBoardName}</h4>
									<p>{fooBoardSubtitle}</p>
								</div>
							);
						})
					}</div>
			}
			<CreateNewData
				type="fooBoard"
				handleOnAdd={addNewBoard}
				handleOnCancel={() => { }}
			/>
		</div>
	);
};
const mapStateToProps = (state) => {
	const { boards, forms } = state;
	return ({
		...boards,
		...forms
	});
};
export default connect(mapStateToProps,
	{ addNewBoard, updateFooBoardState }
)(App);