import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './products';
import { cartReducer } from './cart';
import { wishListReducer } from './wishList';
import compareListReducer from './compare';

export const rootReducer = combineReducers({
    data: productReducer,
    cartList: cartReducer,
    wishList: wishListReducer,
    compareList: compareListReducer,
});
