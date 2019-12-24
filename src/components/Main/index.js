import React, { Fragment } from 'react';
import {
	CreateNewData,
	BoardDetails
} from "../../components";

import './main.scss';

export const Main = (props) => {
	const {
		fooBoards,
		currentBoard,
		addNewBoard,
		updateFooBoardState,
	} = props;
	const updateCurrentBoard = (fooBoardId) => {
		updateFooBoardState('currentBoard', fooBoardId)
	};

	if (currentBoard) return (
		<div className="app-block">
			<BoardDetails />
		</div>);

	return (
		<div className="app-block">
			<h1>WELCOME TO FOO BOARD</h1>
			{
				!fooBoards.length ?
					<div className="no-boards-msg">
						There are no foo boards created by you.
					</div>
					: <Fragment>
						<div className="no-boards-msg">
							Your boards
						</div>
						<div className="foo-boards-tiles">

							{
								fooBoards.map(eachBoard => {
									const {
										fooBoardName,
										fooBoardSubtitle,
										fooBoardId
									} = eachBoard;
									return (
										<div
											className="foo-board-tile-item"
											key={fooBoardId}
											onClick={() => updateCurrentBoard(fooBoardId)}
										>
											<h3>{fooBoardName}</h3>
											<p>{
												fooBoardSubtitle
												|| '-- No Description Available --'
											}</p>
										</div>
									);
								})
							}</div>
					</Fragment>
			}
			<div className="create-new-board-section">
				<CreateNewData
					type="fooBoard"
					handleOnAdd={addNewBoard}
					buttonCreateLabel={<i class="fa fa-plus"></i>}
					handleOnCancel={() => { }}
				/>
			</div>
		</div>
	);
};