import { createStore } from 'redux';

import cartReducer from './cart';

function reducer(state = [], action) {
    return state
};

export default createStore({
    reducer: {
        cart: cartReducer
    }
});