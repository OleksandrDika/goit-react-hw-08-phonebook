import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://64326aadd0127730d2d1fe6d.mockapi.io/api/v1';
// https://connections-api.herokuapp.com
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const fetchContacts = createAsyncThunk(
  '/contacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(response.data.token);
      // setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchaddContact = createAsyncThunk(
  'contacts',
  async (inputValue, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: inputValue.name,
        number: inputValue.number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchdeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
