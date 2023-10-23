import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import moviesReducer from "./MovieSlice"
import gptReducer from "./GptSlice"
import configLanguage from "./ConfigSlice"
const appStore = configureStore(
    {
        reducer : {
            user:userReducer,
            movies:moviesReducer,
            gptReducer:gptReducer,
            configLanguage : configLanguage
        }
    }
)

export default appStore