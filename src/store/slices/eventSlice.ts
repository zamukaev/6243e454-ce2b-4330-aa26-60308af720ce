import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EventData, EventSchema, RemoveEventActionTypes } from '../types/EventSchema';
import { fetchEvent } from '../services/fetchEvents';
import { sortEvents } from '../../utils/sortEvents';

const initialState: EventSchema = {
    events: {},
    isLoading: false,
    error: '',
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEventData: (state, action: PayloadAction<EventData[]>) => {
            const sortedEvent = sortEvents(action.payload);
            state.events = sortedEvent;
        },
        removeEvent: (state, action: PayloadAction<RemoveEventActionTypes>) => {
            if (state.events) {
                state.events[action.payload.data] = state.events[action.payload.data].filter(event => event._id !== action.payload.id)
                if (state.events[action.payload.data].length === 0) {
                    delete state.events[action.payload.data];
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvent.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchEvent.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchEvent.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});
export const { actions: eventActions } = eventSlice;

export const { reducer: eventReducer } = eventSlice;