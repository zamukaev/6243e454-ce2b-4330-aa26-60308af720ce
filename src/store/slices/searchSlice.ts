import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchSchema } from "../types/SearchSchema";

const initialState: SearchSchema = {
    value: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    },
});
export const { actions: searchActions } = searchSlice;

export const { reducer: searchReducer } = searchSlice;