import {
	UPDATE_CARDS_STATE,
	ADD_NEW_CARD,
	EDIT_CARD_DETAILS
} from '../constants/actionTypes';
import { addNewCardId } from './listActions';

export const addNewCard = (currentListId) => (dispatch, getState) => {
	const { forms } = getState();
	const {
		cardTitle,
		cardDesciption
	} = forms;
	const cardId = Math.random().toString().slice(2);
	dispatch({
		type: ADD_NEW_CARD,
		cardTitle,
		cardDesciption,
		currentListId,
		cardId
	});
	dispatch(addNewCardId(cardId, currentListId));
};
export const editCardDetails = (cardId, key, value) => {
	return ({
	type: EDIT_CARD_DETAILS,
	cardId,
	key,
	value
})}