import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operationsContacts';

let initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    filter: ""
}

export const contactSlice = createSlice({
    name: 'contact', initialState,
    reducers: {
        addFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
    extraReducers: {
        tagTypes: ['Contacts'],
        [fetchContacts.pending]: (state) => {
            state.contacts.isLoading = true
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.contacts.items = action.payload
            state.contacts.isLoading = false
        },
        providesTags: ['Contacts'],
        [fetchContacts.error]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
        [addContact.pending]: (state) => {
            state.contacts.isLoading = true
        },
        [addContact.fulfilled]: (state, action) => {
            state.contacts.isLoading = false
            console.log(action.payload);
        },
        [addContact.error]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
        [deleteContact.pending]: (state) => {
            state.contacts.isLoading = true
        },
        [deleteContact.fulfilled]: (state) => {
            state.contacts.isLoading = false
        },
        [deleteContact.error]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
        invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }
})
