import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './actionTypes';

const initialState = {
    basket: []
}

function basketReducer(state = initialState, action) {
    console.log('basketReducer received action:', action);
    switch (action.type) {
        case ADD_TO_BASKET:
            console.log('Updating state for ADD_TO_BASKET');
            return {
                basket: [...state.basket, action.payload]
            };
        case REMOVE_FROM_BASKET:
            console.log('Updating state for REMOVE_FROM_BASKET');
            return {
                basket: state.basket.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}

export default basketReducer;