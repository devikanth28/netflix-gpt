import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice(
    {
        name: "Gpt",
        initialState: {
            showGptSearch: false,
        },
        reducers: {
            toggleSearchView: (state, action) => {
                state.showGptSearch = !state.showGptSearch;
            }
        }
    }
)
export default GptSlice.reducer
export const { toggleSearchView } = GptSlice.actions 
