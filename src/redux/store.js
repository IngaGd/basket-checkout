import { configureStore } from 'redux';
import basketReducer from './reducers';

const store = configureStore({
    reducer: {
        basket: basketReducer
    }
});

export default store;