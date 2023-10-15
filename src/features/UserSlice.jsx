//rxslice - setting up redux
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: "null",
        isSearchOpen : false
        
    },
    // We need a dispatch, an action to change the user.
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user += null;
        },
        isSearchOpen : (state, action) => {
            state.isSearchOpen = action.payload
        }
    },
});

export const { login, logout , isSearchOpen } = userSlice.actions;

export const selectUser = state => state.user.user;
export const selectIsOpen = state => state.user.isSearchOpen;

export default userSlice.reducer;