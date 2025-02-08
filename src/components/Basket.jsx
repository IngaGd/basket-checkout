import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../redux/actions";
import Product from "./Product";

const btnText = "Remove from basket";

export default function Basket() {
  const basketItems = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const handleRemoveFromBasket = (productId) => {
    dispatch(removeFromBasket(productId));
  };
  return (
    <div className="basket">
      <h2 className="heading">Your Basket</h2>
      <div className="product-list">
        {basketItems?.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            clickHandle={() => handleRemoveFromBasket(item.id)}
            buttonText={btnText}
          />
        ))}
      </div>
      <button className="btn-checkout">
        <Link to="/checkout" className="link">
          Checkout
        </Link>
      </button>
    </div>
  );
}
