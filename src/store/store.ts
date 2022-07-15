import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import eventReducer from './reducers/eventSlice';
import searchReducer from "./reducers/filterSlice";

export const store = configureStore({
	reducer: {
		events: eventReducer,
		filter: searchReducer,
		cart: cartReducer
	}
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
