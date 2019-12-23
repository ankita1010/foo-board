import React, { useState } from 'react';
import { CardModal } from './CardModal';

import './card-details.scss';

export const CardsDetailsComponent = (props) => {

	const [currentCard, setCurrentCard] = useState(null);

	const {
		currentListId,
		cards,
		editCardDetails
	} = props;

	const cardsForCurrentList = cards.filter(eachListItem => (
		eachListItem.parentListId === currentListId
	));

	const handleModalClose = () => {
		setCurrentCard(null);
	};
	const handleCardChange = (key, value) => {
		const {cardId} = currentCard;
		editCardDetails(cardId, key, value);
	};

	if (!cardsForCurrentList.length)
		return (
			<p className="no-cards-msg">
				No cards added for this list!
		</p>
		);
	return (
		<div className="cards-wrapper">
			<CardModal
				currentCard={currentCard}
				cards={cards}
				handleModalClose={handleModalClose}
				handleOnTextChange={handleCardChange}
			/>
			{
				cardsForCurrentList.map(eachCardItem => {
					const {
						cardTitle,
						cardDesciption,
						cardId
					} = eachCardItem;
					return (
						<div className="card-tile">
							<div className="card-header">
								<h5>{cardTitle}</h5>
								<i
									className="fa fa-edit"
									onClick={() => setCurrentCard(cardId)}
								/>
							</div>
							<div className="card-desc">
								<p>{cardDesciption}</p>
							</div>
						</div>
					);
				})
			}
		</div>
	);
}