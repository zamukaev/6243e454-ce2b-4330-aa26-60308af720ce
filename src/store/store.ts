import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './types/StateSchema';
import { eventReducer } from './slices/eventSlice';
import { cartReducer } from './slices/cartSlice';
import { searchReducer } from './slices/searchSlice';


export function createReduxStore() {
    const rootReducer: ReducersMapObject<StateSchema> = {
        event: eventReducer,
        cart: cartReducer,
        search: searchReducer,
    }
    return configureStore({
        reducer: rootReducer,
    });
}