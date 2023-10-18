//rxslice - setting up redux
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isSearchOpen : false,
        isActive : false,
        IsUserOpen : false
        
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user += null;
        },
        setIsSearchOpen : (state, action) => {
            state.isSearchOpen = action.payload
        },
        setIsActive : (state, action) => {
            state.isActive = action.payload
        },
        SetUserOpen : (state, action) => {
            state.IsUserOpen = action.payload
        }
    },
});

export const { setUser, logout , setIsSearchOpen ,setIsActive ,SetUserOpen } = userSlice.actions;

export const selectUser = state => state.user.user;
export const selectIsOpen = state => state.user.isSearchOpen;
export const selectIsActive = state => state.user.isActive;
export const selectIsUserOpen = state => state.user.IsUserOpen;

export default userSlice.reducer;
