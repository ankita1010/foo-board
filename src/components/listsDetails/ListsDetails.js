import React from 'react';
import { CreateNewData, CardsDetails } from '../../components';

import './list-details.scss';

export const ListsDetailsComponent = (props) => {
	const {
		currentBoard,
		lists,
		addNewCard,
		deleteListById
	} = props;
	const listsForCurrentBoard = lists.filter(eachListItem => (
		eachListItem.parentBoard === currentBoard
	));
	const handleOnCardAdd =  (listId) => {
		addNewCard(listId);
		 handleScroll(listId);
	};
	const handleScroll = (listId) => {
		const listTileEl = document.getElementById(listId);
			listTileEl.scrollTop = listTileEl.scrollHeight;
	};
	if(!listsForCurrentBoard.length) 
	return (
		<div className="no-boards-msg">
			No lists added for this board yet!
		</div>
	)
	return (
		<div className="list-details-block">
			{
				listsForCurrentBoard.map(eachListItem => {
					const {
						listTitle,
						listId
					} = eachListItem;
					return (
						<div className="list-tile">
							<div className="tile-body" id={listId}>
								<h2 className="list-title">{listTitle}</h2>
								<h4 className="lists-cards">Cards</h4>
								<CardsDetails
									currentListId={listId}
								/>
							</div>
							<div className="create-new-card">
								<CreateNewData
									type='cards'
									handleOnAdd={() => handleOnCardAdd(listId)}
									handleOnCancel={() => { }}
									buttonCreateLabel={'Add New Card'}
								/>
								<button
									className="delete-btn"
									onClick={() => deleteListById(listId)}
								>
									Delete List
								</button>
							</div>
						</div>
					);
				})
			}
		</div>
	);
}