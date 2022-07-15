import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, IData } from "../../types/types"


const initialState: ICart = {
	cart: [],
	count: 0,
	toggle: true
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart(state: ICart, action: PayloadAction<IData>) {
			state.cart.push(action.payload);
			state.count++;
			state.toggle = false;
		},
		removeCart(state: ICart, action: PayloadAction<string>) {
			state.cart = state.cart.filter((elem: IData) => elem._id !== action.payload);
			state.toggle = true;
			if (state.count > 0) {
				state.count--;
			}
		}
	}
})

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
