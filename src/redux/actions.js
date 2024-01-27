//Action creator
export function addToBasket(product) {
    return { type: ADD_TO_BASKET, payload: product };
}
export function removeFromBasket(productId) {
    return { type: REMOVE_FROM_BASKET, payload: productId }
}