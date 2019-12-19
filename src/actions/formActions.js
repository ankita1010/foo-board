import {
    INIT_FORM_STATE,
    UPDATE_FORM_STATE
} from '../constants/actionTypes';

export const initFormState = (formConfig) => {
    return({
        type: INIT_FORM_STATE,
        formConfig
    })
};

export const updateFormState = (key, value) => {
    return({
        type: UPDATE_FORM_STATE,
        key,
        value
    })
}