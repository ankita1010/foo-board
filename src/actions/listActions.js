import {
	UPDATE_LIST_STATE,
	ADD_NEW_LIST,
	ADD_NEW_CARD_ID,
	DELETE_CARD_ID,
	DELETE_ALL_LISTS,
	DELETE_LIST_BY_ID
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
});
export const deleteCardId = (cardId, listId) => ({
	type: DELETE_CARD_ID,
	cardId,
	listId
});
export const deleteAllLists = (boardId) => (dispatch) => {
	dispatch({
		type: DELETE_ALL_LISTS,
		boardId
	})
};

export const deleteListById = (listId) => ({
	type: DELETE_LIST_BY_ID,
	listId
});