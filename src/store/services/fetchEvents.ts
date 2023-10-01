import { createAsyncThunk } from "@reduxjs/toolkit";
import { eventActions } from "../slices/eventSlice";
import { EventData } from "../types/EventSchema";
import axios from "axios";

export const fetchEvent = createAsyncThunk<EventData[], undefined, { rejectValue: string }>(
    'event/fetchEvent',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<EventData[]>('https://teclead-ventures.github.io/data/london-events.json');
            if (!response.data) {
                throw new Error();
            }
            thunkAPI.dispatch(eventActions.setEventData(response.data));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('same error on server');
        }
    },
);