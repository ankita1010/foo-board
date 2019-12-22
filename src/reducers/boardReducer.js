import {
    UPDATE_FOO_BOARD_STATE,
    ADD_NEW_BOARD,
} from '../constants/actionTypes';
const initialFooBoardState = {
    fooBoards: [],
    currentBoard: null
};

export default (state = initialFooBoardState, action) => {
    switch (action.type) {
        case UPDATE_FOO_BOARD_STATE: {
            const {key, value} = action;
            return({
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

            const {fooBoards} = state;
            return ({
                ...state,
                fooBoards: [...fooBoards, {
                    fooBoardName,
                    fooBoardSubtitle,
                    fooBoardId
                }]
            });
        };
        default: return state;
    }
}