import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../redux/actions';

export default function Checkout() {
    const basketItems = useSelector((state) => state.basket.basket);
    const dispatch = useDispatch();

    const totalCost = basketItems?.reduce(
        (total, item) => total + item.price,
        0
    );

    const handleCheckout = async () => {
        const orderData = {
            items: basketItems,
            totalCost: totalCost,
        };
        console.log('Sending order to server:', orderData);

        try {
            const response = await fetch('http://localhost:3003/checkout', {
                method: 'POST',
                body: JSON.stringify(orderData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();

            if (response.ok) {
                console.log('Order successful:', responseData);
                alert(`Total cost is ${totalCost}. Thanks for purchasing`);
                dispatch(clearBasket());
            } else {
                throw new Error('Order failed!');
            }
        } catch (error) {
            console.error('Order error:', error.message);
            alert('Failed to process order.');
        }
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
