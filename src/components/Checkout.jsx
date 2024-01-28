import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../redux/actions';

export default function Checkout() {
    const basketItems = useSelector((state) => state.basket.items);
    const dispatch = useDispatch();

    const totalCost = basketItems.reduce(
        (total, item) => total + item.price,
        0
    );

    const handleCheckout = () => {
        alert(`Total cost is ${totalCost}. Thanks for purchasing`);
        dispatch(clearBasket());
    };

    return (
        <div>
            <h2>Checkout</h2>
            <div className="basket-list">
                {basketItems?.map((item) => (
                    <div key={item.id}>
                        <div>Product: {item.title}</div>
                        <div>Price: {item.price}</div>
                        <div>
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>
            <div>Total cost: ${totalCost}</div>
            <button onClick={handleCheckout}>Complete checkout</button>
        </div>
    );
}
