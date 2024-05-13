import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchGetNewUsers = createAsyncThunk(
  'guest/postNewGuest',
  async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } else {

      }
    } catch (error) {

    }
  }
);
