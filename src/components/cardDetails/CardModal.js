import React, { useState, useEffect } from 'react';

export const CardModal = (props) => {
	const {
		currentCard,
		handleModalClose,
		handleSaveChanges,
		handleDeleteCard,
		cards
	} = props;


	const [currentCardForm, setCurrentCardForm] = useState({});
	const [newComment, setNewComment] = useState('');

	useEffect(() => {
		const currentCardDetails = cards.find(eachCardItem => eachCardItem.cardId === currentCard);
		setCurrentCardForm(currentCardDetails)
	}, [currentCard]);

	if (!currentCard)
		return null;

	const handleOnChange = event => {
		const { value, dataset } = event.target;
		setCurrentCardForm({
			...currentCardForm,
			[dataset.key]: value
		});
	};
	const handleOnSave = () => {
		handleSaveChanges(currentCard, currentCardForm);
		handleModalClose()
	};
	const handleOnDelete = () => {
		const {cardId, parentListId} = currentCardForm;
		handleDeleteCard(cardId, parentListId);
		handleModalClose();
	};
	const handleAddComment = () => {
		if (newComment) {
			setCurrentCardForm({
				...currentCardForm,
				comments: [...currentCardForm.comments, newComment]
			});
			setNewComment('')
		};
	};
	const {
		cardId,
		cardTitle,
		cardDesciption,
		comments,
	} = currentCardForm || {};
	return (
		<div className="card-modal-backdrop">
			<div className="card-modal-dialog">
				<div className="card-modal-header">
					<input
						className="card-detail-input"
						value={cardTitle || ''}
						data-key={'cardTitle'}
						placeholder="Card title.."
						onChange={handleOnChange}
					/>
					<button className="theme-btn" onClick={handleModalClose}>
						<i className="fa fa-times" />
					</button>
				</div>
				<div className="modal-body">
					<h3>
						Card Description:
					</h3>
					<textarea
						className="card-detail-input"
						value={cardDesciption || ''}
						data-key={'cardDesciption'}
						placeholder="Card description.."
						onChange={handleOnChange}
					/>

					<h3>Comments</h3>
					{
						comments && comments.length ?
							comments.map(eachComment => <p>{eachComment}</p>)
							: <p>{'No comments added!'}</p>
					}
					<input
						type="text"
						placeholder="Add comment.."
						className="card-detail-input"
						value={newComment}
						onChange={(event) => setNewComment(event.target.value)}
					/>
					<button className="save-changes-btn" onClick={handleAddComment}>
						Save
					</button>
				</div>
				<div className="modal-footer">
					<button
						className="delete-btn"
						onClick={handleOnDelete}
					>
						Delete Card
					</button>
					<button
						className="save-changes-btn"
						onClick={handleOnSave}
					>
						Save Changes
					</button>

				</div>
			</div>
		</div>
	)
}