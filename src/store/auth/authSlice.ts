import { Slice, createSlice } from "@reduxjs/toolkit";

export const authSlice:Slice = createSlice({
    name: "auth",
    initialState: {
        errorMessage: undefined,
        user: {},
        status: 'checking',
    },
    reducers: {
        onLogin: (state, {payload}) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onChecking: (state: any) => {
            state.status = 'checking';
        },
        onLogout: (state) => {
            state.user = {};
            state.status = 'not-authenticated'
            state.errorMessage = undefined;
        },
        onClearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    },
});

export const { onLogin, onLogout, onChecking, onClearErrorMessage} = authSlice.actions;