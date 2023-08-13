import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    messages: null
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoading: (state, action) => {
            state.isLoading = true
        },
        userLogin: (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
            state.token = action.payload.token
        },
        userLoaded: (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload
        },
        userLogout: (state, action) => {
            state.user = null
            state.isAuthenticated = false
            state.token = null
            state.isLoading = false
        },
        userMessages: (state, action) => {
            state.messages = action.payload
        }
    }
});

export const {userLoading, userLogin, userLogout, userLoaded, userMessages} = authSlice.actions

export default authSlice.reducer;