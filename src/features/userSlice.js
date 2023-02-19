import {createSlice} from '@reduxjs/toolkit';

import appApi from '../services/appApi';

const initialState = null;

export const usertSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: ()=> initialState,
    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.signup.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, { payload }) => payload);
    }
})
export const { logout } = usertSlice.actions
export default usertSlice.reducer;