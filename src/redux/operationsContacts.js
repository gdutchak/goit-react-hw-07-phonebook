import { createAsyncThunk } from "@reduxjs/toolkit";
const headers = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "custom value",
});
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        try {
            const response = await fetch('https://6364f0387b209ece0f52b872.mockapi.io/contacts').then(r => r.json())
            return response
        } catch (error) {
            return error
        }
    },
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact) => {
        try {
            await fetch('https://6364f0387b209ece0f52b872.mockapi.io/contacts', {
                headers,
                method: 'POST',
                url: '/',
                body: JSON.stringify(contact),
            })

        } catch (error) {
            return error
        }
    },
)
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        try {
            await fetch(`https://6364f0387b209ece0f52b872.mockapi.io/contacts/${id}`, {
                method: 'DELETE',
                url: `/${id}`,
            })
        } catch (error) {
            return error
        }
    }
)