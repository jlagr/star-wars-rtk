import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFilms = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('https://swapi.dev/api/films/');
    return response.data.results;
});

export const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: { },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilms.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchFilms.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default filmsSlice.reducer;