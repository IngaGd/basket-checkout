import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket } from '../redux/actions';

export default function Basket() {
    const basketItems = useSelector((state) => state.basket.basket);
    const dispatch = useDispatch();
    const handleRemoveFromBasket = (productId) => {
        dispatch(removeFromBasket(productId));
    };
    return (
        <div className="container">
            <h2>Your Basket</h2>
            <div className="basket-list">
                {basketItems?.map((item) => (
                    <div key={item.id}>
                        <div>Product: {item.title}</div>
                        <div>Price: {item.price}</div>
                        <div>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <button onClick={() => handleRemoveFromBasket(item.id)}>
                            Remove from basket
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
