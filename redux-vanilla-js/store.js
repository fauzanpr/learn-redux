import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/CounterSlice';

const store = configureStore({
    reducer: {
        counter: reducer
    }
});

module.exports = store;
