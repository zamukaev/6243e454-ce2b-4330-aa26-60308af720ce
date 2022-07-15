import axios from "axios";
import { IData } from "../../types/types";
import { eventSlice } from "../reducers/eventSlice"
import { AppDispatch } from "../store"

export const fetchEvents = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(eventSlice.actions.eventFetching());
			const response = await axios.get<IData[]>('https://tlv-events-app.herokuapp.com/events/uk/london');
			dispatch(eventSlice.actions.eventFetchingSuccess(response.data));

		} catch (e: any) {
			dispatch(eventSlice.actions.eventFetchingError(e.message))
		}
	}
}