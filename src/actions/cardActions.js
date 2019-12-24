import {
	UPDATE_CARDS_STATE,
	ADD_NEW_CARD,
	EDIT_CARD_DETAILS,
	DELETE_CARD,
	MOVE_CARD,
	DELETE_ALL_CARDS_FOR_LISTIDS
} from '../constants/actionTypes';

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
};
export const moveCard = (cardId, listId) => {
	return ({
		type: MOVE_CARD,
		cardId,
		listId
	});
};
export const deleteAllCardsByListIds = (listIds) => {
	return({
		type: DELETE_ALL_CARDS_FOR_LISTIDS,
		listIds
	})
}