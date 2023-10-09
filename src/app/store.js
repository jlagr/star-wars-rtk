import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from './features/films/filmsSlice';
import charactersReducer from './features/films/charactersSlice';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    characters: charactersReducer,
  },
})