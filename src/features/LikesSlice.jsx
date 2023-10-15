import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const likeSlice = createSlice({
    name : "likeSlice",
    initialState : {
        likes : 232
    },
    reducers : {
        setlike : (state, action) => {
            state.likes  += 1
        },
    },

})

export const { setlike } = likeSlice.actions;

export const selectLike = state => state.like.likes;


export default likeSlice.reducer;