import {
	UPDATE_LIST_STATE,
	ADD_NEW_LIST,
	DELETE_ALL_LISTS,
	DELETE_LIST_BY_ID
} from '../constants/actionTypes';
const initialListState = {
	lists: []
};
export default (state = initialListState, action) => {
	switch (action.type) {
		case UPDATE_LIST_STATE: {
			const { key, value } = action;
			return ({
				...state,
				[key]: value
			});
		};
		case ADD_NEW_LIST: {
			const {
				currentBoard,
				listTitle,
				listId
			} = action;
			const { lists } = state;
			const newListItem = {
				parentBoard: currentBoard,
				listTitle,
				listId
			};
			return ({
				...state,
				lists: [newListItem , ...lists]
			});
		};

		case DELETE_ALL_LISTS: {
			const { boardId } = action;
			const { lists } = state;
			return ({
				...state,
				lists: lists.filter(
					eachListItem => eachListItem.parentBoard !== boardId
				)
			})
		};
		case DELETE_LIST_BY_ID: {
			const {listId} = action;
			const { lists } = state;

			return({
				...state,
				lists: lists.filter(
					eachListItem => eachListItem.listId !==listId
				)
			})
		}
		default: return state;
	};
};