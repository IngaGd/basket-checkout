import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearBasket } from "../redux/actions";
import Product from "./Product";

export default function Checkout() {
  const basketItems = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const totalCost = basketItems?.reduce((total, item) => total + item.price, 0);

  const handleCheckout = async () => {
    const orderData = {
      items: basketItems,
      totalCost: totalCost,
    };
    console.log("Sending order to server:", orderData);

    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/IngaGd/basket-checkout/orders",
        {
          method: "POST",
          body: JSON.stringify(orderData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();

      if (response.ok) {
        console.log("Order successful:", responseData);
        alert(`Total cost is ${totalCost}. Thanks for purchasing`);
        dispatch(clearBasket());
      } else {
        throw new Error("Order failed!");
      }
    } catch (error) {
      console.error("Order error:", error.message);
      alert("Failed to process order.");
    }
  };

  return (
    <div className="checkout">
      <h2 className="heading">Checkout</h2>
      <div className="product-list">
        {basketItems?.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
      <div>Total cost: ${totalCost}</div>
      <button onClick={() => handleCheckout()} className="btn-checkout">
        Complete checkout
      </button>
    </div>
  );
}
