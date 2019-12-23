import {
	UPDATE_LIST_STATE,
	ADD_NEW_LIST,
	ADD_NEW_CARD_ID
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
				lists: [...lists, newListItem]
			});
		};

		case ADD_NEW_CARD_ID: {
			const {
				cardId,
				listId
			} = action;
			const {lists} = state;
			return({
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

		default: return state;
	};
};