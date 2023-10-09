import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk('data/fetchCharacters', async (urls) => {
    const responses = await Promise.all(
        urls.map((url) => axios.get(url))
    );
    return responses.map((response) => ({
        url: response.config.url,
        data: response.data,
    }));
});

const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCharacters.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCharacters.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchCharacters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default charactersSlice.reducer;