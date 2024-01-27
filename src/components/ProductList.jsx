import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/actions';
import productsData from '../data/products.json';

export default function ProductList() {
    const dispatch = useDispatch();
    const handleAddToBasket = (product) => {
        console.log('handleAddToBasket:', product);
        dispatch(addToBasket(product));
    };
    return (
        <div className="container">
            <h2>Product list</h2>
            <div className="product-list">
                {productsData?.map((product) => (
                    <div key={product.id}>
                        <div>Product: {product.title}</div>
                        <div>Price: {product.price}</div>
                        <div>
                            <img src={product.img} alt={product.title} />
                        </div>
                        <button onClick={() => handleAddToBasket(product)}>
                            Add to basket
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
