import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducers';

const store = configureStore({
    reducer: {
        basket: basketReducer
    }
});

export default store;