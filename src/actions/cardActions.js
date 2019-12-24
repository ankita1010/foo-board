import {
	UPDATE_CARDS_STATE,
	ADD_NEW_CARD,
	EDIT_CARD_DETAILS,
	DELETE_CARD,
	MOVE_CARD
} from '../constants/actionTypes';
import { addNewCardId, deleteCardId } from './listActions';

export const addNewCard = (currentListId) => (dispatch, getState) => {
	const { forms } = getState();
	const {
		cardTitle,
		cardDesciption
	} = forms;
	if (cardTitle) {
		const cardId = Math.random().toString().slice(2);
		dispatch({
			type: ADD_NEW_CARD,
			cardTitle,
			cardDesciption,
			currentListId,
			cardId
		});
		dispatch(addNewCardId(cardId, currentListId));
	}
};
export const editCardDetails = (cardId, newCardDetails) => {
	return ({
		type: EDIT_CARD_DETAILS,
		cardId,
		newCardDetails
	})
};
export const deleteCard = (cardId, parentListId) => (dispatch) => {
	dispatch({
		type: DELETE_CARD,
		cardId
	});
	dispatch(deleteCardId(cardId, parentListId))
};
export const moveCard = (cardId, listId) => {
	return ({
		type: MOVE_CARD,
		cardId,
		listId
	});
}