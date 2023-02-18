import {configureStore} from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import userSlice from './features/userSlice';
import appApi from './services/appApi';

import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import thunk from 'redux-thunk';
import persistReducer from 'redux-persist/es/persistReducer';

const reducer = combineReducers ({
    user: userSlice,
    products: productSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blackList: [appApi.reducerPath, "products"],
};

const persistReducer = persistReducer(persistConfig, reducer);

const store = configStore