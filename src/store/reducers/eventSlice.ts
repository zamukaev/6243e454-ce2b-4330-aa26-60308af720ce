import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventState, IData } from '../../types/types';

export const initialState: EventState = {
	data: [],
	isLoading: false,
	error: null
}

export const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		eventFetching(state) {
			state.isLoading = true;
			state.error = null;
		},
		eventFetchingSuccess(state: EventState, action) {
			state.isLoading = false;
			state.data = [...action.payload]
			state.error = null;
		},
		eventFetchingError(state: EventState, action) {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
})
export const { eventFetching, eventFetchingSuccess, eventFetchingError } = eventSlice.actions;

export default eventSlice.reducer;