import { createSlice } from "@reduxjs/toolkit";
import { logout, login, register, refreshUser } from "./operations.js";
import { toast } from "react-hot-toast";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) =>
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user.name = action.payload.user.name;
                state.user.email = action.payload.user.email;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => {
                toast.error("Invalid registration data");
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action.payload);
                state.user.name = action.payload.user.name;
                state.user.email = action.payload.user.email;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                toast.error("Invalid email or password");
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            }),
});

export default authSlice.reducer;
