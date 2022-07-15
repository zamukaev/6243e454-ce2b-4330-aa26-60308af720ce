import { searchSlice } from "../reducers/filterSlice";

export const filterEventsAC = (value: string) => (searchSlice.actions.filterEvents(value));