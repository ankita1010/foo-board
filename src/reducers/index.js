import {combineReducers} from 'redux'
import boards from './boardReducer';
import lists from './listReducer';
import cards from './cardReducer';
import forms from './formReducer';
export const rootReducer = combineReducers({
    boards,
    lists,
    cards,
    forms
});