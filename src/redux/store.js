import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactSlice } from './sliceContact';

const middleware = [
    ...getDefaultMiddleware({
    }),
];

export const store = configureStore({
    reducer: contactSlice.reducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export const { addContact, addFilter, deleteContact } = contactSlice.actions;