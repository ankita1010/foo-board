import {
    INIT_FORM_STATE,
    UPDATE_FORM_STATE
} from '../constants/actionTypes';

export const initFormState = (formConfig) => {
    const config = (Object.entries(formConfig).reduce(((acc, currentValue) => {
        return({
            ...acc,
            [currentValue[0]]: currentValue[1].initial
        })
    }), {}));
    return({
        type: INIT_FORM_STATE,
        formConfig: config
    });
};

export const updateFormState = (key, value) => {
    return({
        type: UPDATE_FORM_STATE,
        key,
        value
    })
};