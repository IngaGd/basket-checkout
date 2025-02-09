import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const basketItems = useSelector((state) => state.basket.basket);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/shop" className="link-shop">
          Shop
        </Link>
        <Link to="/basket" className="link-basket">
          Basket
          {basketItems.length > 0 ? (
            <div className="cart-lenght">
              <span className="lenght">{basketItems.length}</span>
            </div>
          ) : null}
        </Link>
      </nav>
    </header>
  );
}
