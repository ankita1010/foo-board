import {
    INIT_FORM_STATE,
    UPDATE_FORM_STATE
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case INIT_FORM_STATE: {
            return { ...action.formConfig }
        };
        case UPDATE_FORM_STATE: {
            const { key, value } = action;
            return {
                ...state,
                [key]: value
            };
        };
        default: return state;
    };
};