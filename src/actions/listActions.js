import {
	UPDATE_LIST_STATE,
	ADD_NEW_LIST,
	ADD_NEW_CARD_ID
} from '../constants/actionTypes';
import {addNewListId} from './boardActions';

export const addNewList = () => (dispatch, getState) => {
	const {
		forms,
		boards
	} = getState();
	const { listTitle } = forms;
	const { currentBoard } = boards;
	const listId = Math.random().toString().slice(2);
	dispatch({
		type: ADD_NEW_LIST,
		currentBoard,
		listTitle,
		listId
	});
	dispatch(addNewListId(listId, currentBoard))
};
export const updateListState = (key, value) => ({
	type: UPDATE_LIST_STATE,
	key,
	value
});
export const addNewCardId = (cardId, listId) => ({
	type: ADD_NEW_CARD_ID,
	cardId,
	listId
})