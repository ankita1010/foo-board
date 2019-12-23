import React from 'react';

export const CardModal = (props) => {
	const {
		currentCard,
		handleModalClose,
		handleOnTextChange,
		cards
	} = props;

	const currentCardDetails = cards.find(eachCardItem => eachCardItem.cardId === currentCard);
	const {
		cardId,
		cardTitle,
		cardDesciption
	} = currentCardDetails || {};

	console.log(currentCardDetails, cards);

	if (!currentCard)
		return null;

	const handleOnChange = event => {
		const { value, dataset } = event.target;
		handleOnTextChange(dataset.key, value);
	}
	return (
		<div className="card-modal-backdrop">
			<div className="card-modal-dialog">
				<div className="card-modal-header">
					<input
						className="card-detail-input"
						value={currentCardDetails.cardTitle}
						data-key={'cardTitle'}
						onChange={handleOnChange}
					/>
					<button className="theme-btn" onClick={handleModalClose}>
						<i className="fa fa-times" />
					</button>
				</div>
			</div>
		</div>
	)
}