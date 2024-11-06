import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6725429bc39fedae05b45c1c.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContacts, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContacts);
      // console.log(response.data);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (ContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${ContactId}`);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
