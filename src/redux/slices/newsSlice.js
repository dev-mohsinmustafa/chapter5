import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';





const initialState = {
    articles: [],
    isLoading: false,
    isError: false,
}



// additional api
// First, create the thunk

// this is also action creator  
export const fetchNews = createAsyncThunk(
    // action name
    'fetchNews',
    async () => {
        try {
            const {data} = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=37ca48d2d8814781bc737194b1b0a2fe")
            console.log(data.articles);
            return data.articles;
            // const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=37ca48d2d8814781bc737194b1b0a2fe")
            // const result = response.json();
            // return result

        } catch (error) {
            console.log(error);
        }
    }
)



export const newsSlice = createSlice({
    name: 'news',
    initialState,

    reducers : {

    },

    // additional
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.articles = action.payload;
            // state.pending = false;
        })
            .addCase(fetchNews.pending, (state, action) => {
                state.isLoading = true;
                // state.pending = true;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                console.log("Error ", action.payload);
                // state.error = action.error.message;
                state.isError = true;
            });
    }



})


export const { } = newsSlice.actions

export default newsSlice.reducer