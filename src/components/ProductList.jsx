import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions";
import productsData from "../data/products.json";
import Product from "./Product";

const btnText = "Add to basket";

export default function ProductList() {
  const dispatch = useDispatch();
  const handleAddToBasket = (product) => {
    console.log("handleAddToBasket:", product);
    dispatch(addToBasket(product));
  };
  return (
    <div className="products">
      <h2 className="heading">Product list</h2>
      <div className="product-list">
        {productsData?.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            clickHandle={() => handleAddToBasket(product)}
            buttonText={btnText}
          />
        ))}
      </div>
    </div>
  );
}
