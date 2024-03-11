import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState:{
        
    },
    reducers:{
        videoResult: (state,action) => {
            Object.assign(state,action.payload);
            return state   
        }   
    }
})

export const {videoResult} = videoSlice.actions;

export default videoSlice.reducer;