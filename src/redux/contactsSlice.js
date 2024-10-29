import { createSlice } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { name: "Rosie Simpson", number: "459-12-56", id: "id-1" },
      { name: "Hermione Kline", number: "443-89-12", id: "id-2" },
      { name: "Eden Clements", number: "645-17-79", id: "id-3" },
      { name: "Annie Copeland", number: "227-91-26", id: "id-4" },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contacts) => contacts.id !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

