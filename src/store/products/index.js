import { createAction, createReducer } from '@reduxjs/toolkit';


const INICIAL_STATE = [//API 
]

//action
export const addProduct = createAction('ADD_PRODUCT'); 
  
export default createReducer (INICIAL_STATE, {
    [addProduct.type]: (state, action) => [ ...state, action.payload]
});