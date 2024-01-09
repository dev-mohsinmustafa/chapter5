import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';





const initialState = {
    // amount: 1,
    isLoading: false,
    data: null,
    isError: false,
}



// additional api
// First, create the thunk

// this is also action creator  
export const fetchTodos = createAsyncThunk(
    // action name
    'fetchTodos',
    async () => {
        try {
            // const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            // const {data} = await response.json();
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
)



export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    // additional
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            // state.pending = false;
        })
            .addCase(fetchTodos.pending, (state, action) => {
                state.isLoading = true;
                // state.pending = true;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                console.log("Error ", action.payload);
                // state.error = action.error.message;
                state.isError = true;
            });
    }



})

// Action creators are generated for each case reducer function
// action ye khud bana deta hai hamne nai banane
export const { increment, decrement, incrementByAmount } = todoSlice.actions

export default todoSlice.reducer