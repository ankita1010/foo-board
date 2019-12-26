import React, { useState } from 'react';
import { CardModal } from './CardModal';

import './card-details.scss';

export const CardsDetailsComponent = (props) => {

	const [currentCard, setCurrentCard] = useState(null);
	const [showListOptions, setShowListOptions] = useState({
		show: false,
		currentSelectedCard: null
	});
	const {
		currentListId,
		cards,
		onDragCardId,
		lists,
		editCardDetails,
		deleteCard,
		updateCardState,
		moveCard
	} = props;

	const cardsForCurrentList = cards.filter(eachCardItem => (
		eachCardItem.parentListId === currentListId
	));
	const otherLists = lists.filter(
		eachListItem => eachListItem.listId !== currentListId
	);
	const handleModalClose = () => {
		setCurrentCard(null);
	};
	const handleMove = (cardId, listId) => {
		moveCard(cardId, listId);
		setShowListOptions({
			show: false,
			currentSelectedCard: null
		})
	};
	const handleDrag = (event) => {
		const { cardid } = event.target.dataset;
		updateCardState('onDragCardId', cardid);
	};
	const clearDrag = () => {
		updateCardState('onDragCardId', null);
	};

	if (!cardsForCurrentList.length)
		return (
			<p className="no-cards-msg">
				No cards added for this list!
		</p>
		);
	const { currentSelectedCard, show: showList } = showListOptions;
	return (
		<div className="cards-wrapper">
			<CardModal
				currentCard={currentCard}
				cards={cards}
				handleModalClose={handleModalClose}
				handleSaveChanges={editCardDetails}
				handleDeleteCard={deleteCard}
			/>
			{
				cardsForCurrentList.map(eachCardItem => {
					const {
						cardTitle,
						cardDesciption,
						cardId
					} = eachCardItem;
					return (
						<div
							className={`card-tile ${onDragCardId === cardId ? 'dragging' : ''}`}
							draggable={true}
							onDragEnd={clearDrag}
							data-cardid={cardId}
							onDragStart={handleDrag}
						>
							<div className="card-header">
								<h3 className="card-title">{cardTitle}</h3>
								<div>
									<i
										className="fa fa-share-square"
										onClick={() => setShowListOptions({
											show: !showList,
											currentSelectedCard: cardId
										})}
									/>
									<i
										className="fa fa-edit"
										onClick={() => setCurrentCard(cardId)}
									/>
								</div>
							</div>
							<div className="card-desc">
								<p>{cardDesciption}</p>
							</div>
							{showList && otherLists.length && currentSelectedCard === cardId ?
								<div className="list-options">
									{
										otherLists.map(
											eachListItem =>
												<div
													onClick={() => handleMove(cardId, eachListItem.listId)}
												>
													<p>
														{eachListItem.listTitle}
													</p>
													<i
														className="fa fa-angle-right"
													/>
												</div>
										)
									}
								</div>
								: null}
						</div>
					);
				})
			}
		</div>
	);
}