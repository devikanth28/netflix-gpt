import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:"Movie",
        initialState : {
            nowPlayingMovies : null,
            popularMovies : null
        },
        reducers :{
            addNowPlayingMovies : (state, action) =>{
                 state.nowPlayingMovies = action.payload
            },
            addPopularMovies : (state, action) =>{
                state.popularMovies = action.payload
            }
        }
    }
)

export default movieSlice.reducer

export const {addNowPlayingMovies, addPopularMovies} = movieSlice.actions;