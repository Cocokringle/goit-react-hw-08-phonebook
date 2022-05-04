import { createSlice } from '@reduxjs/toolkit'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const createContactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({baseUrl:'https://626d381c50a310b8a34c101e.mockapi.io/contacts/'}),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation} = createContactsApi

const initialContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
}

export const contactsSlice = createSlice({
    name:'contacts',
    initialState: initialContacts,
    reducers: {
      add(state, action) {
        state.items.push(action.payload);
      },
      remove(state, {payload}) {
        state.items = state.items.filter(({ id }) => id !== payload);
      },
    },
});

export const { add, remove } = contactsSlice.actions;