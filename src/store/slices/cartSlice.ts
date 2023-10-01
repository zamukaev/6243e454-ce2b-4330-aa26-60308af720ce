import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CartSchema } from "../types/CartSchema";
import { EventData } from "../types/EventSchema";
import { LOCAL_STORAGE_KEY } from "../../consts/consts";
import { addCartToLocalStorage } from "../../utils/addCartToLocalStorage";

const initialState: CartSchema = {
    cart: [],
    counter: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartData: (state, action: PayloadAction<EventData>) => {
            addCartToLocalStorage(action.payload, LOCAL_STORAGE_KEY)
            state.cart?.push(action.payload);
            state.counter += 1;
        },
        removeCart: (state, action: PayloadAction<EventData>) => {
            state.counter -= 1;
            state.cart = state.cart?.filter(cartItem => cartItem._id !== action.payload._id);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.cart));
        },
        initCart: (state) => {
            if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
                const cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '');
                state.cart = cart;
                state.counter = cart.length;
            }
        }
    },
});
export const { actions: cartActions } = cartSlice;

export const { reducer: cartReducer } = cartSlice;