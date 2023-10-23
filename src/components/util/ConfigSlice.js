import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice(
    {
        name :"confi",
        initialState :{
            language : "en",
        },
        reducers :{
            changeLanguage : (state, action) =>{
                state.language = action.payload
            }
        }
    }
)

export default ConfigSlice.reducer
export const {changeLanguage} = ConfigSlice.actions