import {
	UPDATE_CARDS_STATE,
	ADD_NEW_CARD,
	EDIT_CARD_DETAILS,
	DELETE_CARD,
	MOVE_CARD
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
				newCardDetails
			} = action;
			const { cards } = state;
			const newCardsState = cards.map(eachCardItem => {
				if (eachCardItem.cardId === cardId) {
					return newCardDetails
				};
				return eachCardItem;
			});
			return ({
				...state,
				cards: newCardsState
			});
		};
		case DELETE_CARD: {
			const { cardId } = action;
			const { cards } = state;
			return ({
				...state,
				cards: cards.filter(eachCardItem => eachCardItem.cardId !== cardId)
			})
		};
		case MOVE_CARD: {
			const {cardId, listId} = action;
			const {cards} = state;
			return({
				...state,
				cards: cards.map(
					eachCardItem => (
						eachCardItem.cardId === cardId ?
						({
							...eachCardItem,
							parentListId: listId
						})
						: eachCardItem
					)
				)
			});
		};
		default: return state;
	};
};