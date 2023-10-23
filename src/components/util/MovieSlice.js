import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:"Movie",
        initialState : {
            nowPlayingMovies : null,
            popularMovies : null,
            topRatedMovies : null
        },
        reducers :{
            addNowPlayingMovies : (state, action) =>{
                 state.nowPlayingMovies = action.payload
            },
            addPopularMovies : (state, action) =>{
                state.popularMovies = action.payload
            },
            addTopRatedMovies : (state, action) => {
                state.topRatedMovies = action.payload
            }
        }
    }
)

export default movieSlice.reducer

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies} = movieSlice.actions;