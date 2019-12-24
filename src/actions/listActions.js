import {
	UPDATE_LIST_STATE,
	ADD_NEW_LIST,
	ADD_NEW_CARD_ID,
	DELETE_CARD_ID,
	DELETE_ALL_LISTS,
	DELETE_LIST_BY_ID
} from '../constants/actionTypes';
import { deleteAllCardsByListIds } from './cardActions';

export const addNewList = () => (dispatch, getState) => {
	const {
		forms,
		boards
	} = getState();
	const { listTitle } = forms;
	const { currentBoard } = boards;
	if (listTitle) {
		const listId = Math.random().toString().slice(2);
		dispatch({
			type: ADD_NEW_LIST,
			currentBoard,
			listTitle,
			listId
		});
	}
};
export const updateListState = (key, value) => ({
	type: UPDATE_LIST_STATE,
	key,
	value
});

export const deleteAllLists = (boardId) => (dispatch, getState) => {
	const { lists } = getState();
	const { lists: currentLists } = lists;
	const listsToBeDeleted = currentLists.reduce((acc, currentval) => (
		currentval.parentBoard === boardId ?
			[...acc, currentval.listId]
			: acc

	), []);
	
	dispatch(deleteAllCardsByListIds(listsToBeDeleted));
	dispatch({
		type: DELETE_ALL_LISTS,
		boardId
	});
};

export const deleteListById = (listId) => ({
	type: DELETE_LIST_BY_ID,
	listId
});