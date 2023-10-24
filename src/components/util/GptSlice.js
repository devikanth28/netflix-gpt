import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice(
    {
        name: "Gpt",
        initialState: {
            showGptSearch: false,
            suggestedMovies : null,
            movieNames : null
        },
        reducers: {
            toggleSearchView: (state, action) => {
                state.showGptSearch = !state.showGptSearch;
            },
            addSuggestedMovies : (state, action) => {
                const {movieNames, movieResults} = action.payload;
                state.suggestedMovies = movieResults;
                state.movieNames = movieNames;
            }
        }
    }
)
export default GptSlice.reducer
export const { toggleSearchView, addSuggestedMovies } = GptSlice.actions 
