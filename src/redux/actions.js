import { ADD_TO_BASKET, REMOVE_FROM_BASKET, CLEAR_BASKET } from './actionTypes';

//Action creator
export function addToBasket(product) {
    console.log('Action created: ADD_TO_BASKET with payload:', product);
    return { type: ADD_TO_BASKET, payload: product };
}
export function removeFromBasket(productId) {
    return { type: REMOVE_FROM_BASKET, payload: productId }
}
export function clearBasket() {
    return { type: CLEAR_BASKET }
}