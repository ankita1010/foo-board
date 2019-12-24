import {
	UPDATE_FOO_BOARD_STATE,
	ADD_NEW_BOARD,
	ADD_NEW_LIST_ID,
	DELETE_BOARD
} from '../constants/actionTypes';
const initialFooBoardState = {
	fooBoards: [],
	currentBoard: null
};

export default (state = initialFooBoardState, action) => {
	switch (action.type) {
		case UPDATE_FOO_BOARD_STATE: {
			const { key, value } = action;
			return ({
				...state,
				[key]: value
			});
		}
		case ADD_NEW_BOARD: {
			const {
				fooBoardName,
				fooBoardSubtitle,
				fooBoardId
			} = action;

			const { fooBoards } = state;
			return ({
				...state,
				fooBoards: [...fooBoards, {
					fooBoardName,
					fooBoardSubtitle,
					fooBoardId,
					listIds: []
				}]
			});
		};
		case ADD_NEW_LIST_ID: {
			const { listId, boardId } = action;
			const { fooBoards } = state;
			return ({
				...state,
				fooBoards: fooBoards.map((eachBoardItem => (
					eachBoardItem.fooBoardId === boardId ?
						({
							...eachBoardItem,
							listIds: [...eachBoardItem.listIds, listId]
						})
						: eachBoardItem
				)))
			});
		};
		case DELETE_BOARD: {
			const { boardId } = action;
			const { fooBoards } = state;
			return ({
				...state,
				fooBoards: fooBoards.filter(
					eachBoardItem => eachBoardItem.fooBoardId !== boardId
				),
				currentBoard
				: null
			})
		};
		default: return state;
	}
}