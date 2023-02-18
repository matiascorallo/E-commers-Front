import {createSlice} from '@reduxjs/toolkit';

import appApi from '../services/appApi';

const initialState = [];

export const usertSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export default usertSlice.reducer;