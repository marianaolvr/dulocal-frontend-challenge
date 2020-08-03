import { createAction, createReducer } from '@reduxjs/toolkit';


const INICIAL_STATE = []

//action
export const addProducts = createAction('ADD_PRODUCTS'); 
  
export default createReducer (INICIAL_STATE, {
    [addProducts.type]: (state, action) => [ ...action.payload]
});