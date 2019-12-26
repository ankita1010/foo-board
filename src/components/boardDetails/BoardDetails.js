import React from 'react';
import { CreateNewData, ListsDetails } from '../../components';

import './board-details.scss';

export const BoardDetailsComponent = (props) => {
	const {
		fooBoards,
		currentBoard,
		updateFooBoardState,
		addNewList,
		deleteBoard
	} = props;
	const currentBoardDetails = fooBoards.find(
		(eachBoard) => (eachBoard.fooBoardId === currentBoard)
	);
	const {
		fooBoardName,
		fooBoardSubtitle
	} = currentBoardDetails || {};

	const exitCurrentBoard = () => {
		updateFooBoardState('currentBoard', null);
	};
	const deleteCurrentBoard = () => {
		deleteBoard(currentBoard)
	};
	return (
		<div className="board-details-block">
			<div className="board-actions-and-details">
				<button onClick={exitCurrentBoard} className="theme-btn">
					<i className="fa fa-angle-left" />
				</button>
				<div className="board-header">
					<h2>{fooBoardName}</h2>
					<p>{fooBoardSubtitle}</p>
				</div>
				<button onClick={deleteCurrentBoard} className="theme-btn">
					<i className="fa fa-trash" />
				</button>
			</div>
			<ListsDetails />
			<div className="create-new-board-section">
				<CreateNewData
					type="lists"
					buttonCreateLabel={<i className="fa fa-plus" />}
					handleOnAdd={addNewList}
					handleOnCancel={() => { }}
				/>
			</div>
		</div>
	);
};