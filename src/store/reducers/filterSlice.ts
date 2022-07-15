import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchValue {
	searchValue: string;
}
export const initialState: ISearchValue = {
	searchValue: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		filterEvents(state: ISearchValue, action) {
			state.searchValue = action.payload;
		}
	}
});
export const { filterEvents } = searchSlice.actions;
export default searchSlice.reducer;
