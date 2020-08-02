import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products';
import cartReducer from './cart';

//Configurestore tem o midware para fazer as chamadas assíncronas
export default configureStore({
    reducer: {
        products: productsReducer,
    }
});