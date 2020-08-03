import { createAction, createReducer } from '@reduxjs/toolkit';

const INICIAL_STATE = []  

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');
export const calcTotal = createAction('CALC_TOTAL');

export default createReducer(INICIAL_STATE, {
    [addItem.type]: (state, action) => [...state, action.payload],

    [removeItem.type]: (state, action) => state
    .filter(item => item.id !== action.payload),

    [calcTotal.type]: state => state.reduce((subtotal, item) => subtotal + item.price),
});