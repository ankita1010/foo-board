import {
    UPDATE_FOO_BOARD_STATE,
    ADD_NEW_BOARD
} from '../constants/actionTypes';
export const addNewBoard = () => (dispatch, getState) => {
    const {forms} = getState();
    const {
        fooBoardName,
        fooBoardSubtitle
    } = forms;
    const fooBoardId = Math.random().toString().slice(2)
    dispatch({
        type: ADD_NEW_BOARD,
        fooBoardName,
        fooBoardSubtitle,
        fooBoardId
    });
    dispatch(updateFooBoardState('currentBoard', fooBoardId))
};
export const updateFooBoardState = (key, value) => {
    return({
        type: UPDATE_FOO_BOARD_STATE,
        key,
        value
    });
}