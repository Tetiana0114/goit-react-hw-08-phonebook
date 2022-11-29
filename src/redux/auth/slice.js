import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: { name: null, email: null },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,  
    },
    extraReducers: builder =>
        builder
    .addCase(register.pending, state => state)
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
     })
    .addCase(register.rejected, state => state)
    .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
    .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
    })
})



export const authReducer = authSlice.reducer;