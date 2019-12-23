import {
	UPDATE_CARDS_STATE,
	ADD_NEW_CARD,
	EDIT_CARD_DETAILS
} from '../constants/actionTypes';

const initialCardState = {
	cards: []
};

export default (state = initialCardState, action) => {
	switch (action.type) {
		case UPDATE_CARDS_STATE: {
			const { key, value } = action;
			return ({
				...state,
				key,
				value
			});
		};
		case ADD_NEW_CARD: {
			const {
				cardTitle,
				cardDesciption,
				currentListId: parentListId,
				cardId
			} = action;
			const newCardItem = {
				cardTitle,
				cardDesciption,
				parentListId,
				cardId,
				comments: []
			};
			const { cards } = state;
			return ({
				...state,
				cards: [...cards, newCardItem]
			})
		};
		case EDIT_CARD_DETAILS: {
			const {
				cardId,
				key,
				value
			} = action;
			const { cards } = state;
			const newCardsState = cards.map(eachCardItem => {
				if (eachCardItem.cardId === cardId) {
					const newItem = {
						...eachCardItem,
						[key]: value
					};
					return newItem
				};
				return eachCardItem;
			});
			return ({
				...state,
				cards: newCardsState
			});
		};
		default: return state;
	};
};