import {
	UPDATE_LIST_STATE,
	ADD_NEW_LIST,
	ADD_NEW_CARD_ID,
	DELETE_CARD_ID,
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
				listId,
				cardIds: []
			};
			return ({
				...state,
				lists: [newListItem , ...lists]
			});
		};

		case ADD_NEW_CARD_ID: {
			const {
				cardId,
				listId
			} = action;
			const { lists } = state;
			return ({
				...state,
				lists: lists.map(eachListItem => (
					eachListItem.listId === listId ?
						({
							...eachListItem,
							cardIds: [...eachListItem.cardIds, cardId]
						})
						: eachListItem
				))
			});
		};
		case DELETE_CARD_ID: {
			const { cardId, listId } = action;
			const { lists } = state;
			return ({
				...state,
				lists: lists.map(eachListItem => (
					eachListItem.listId === listId ?
						({
							...eachListItem,
							cardIds: eachListItem.cardIds.filter(eachCardId => eachCardId !== cardId)
						})
						: eachListItem
				))
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