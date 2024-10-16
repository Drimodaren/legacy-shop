import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((item) => {
        return <Order onDelete={props.onDelete} key={item.id} item={item} />;
      })}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$ </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo"> House staff</span>
        <ul className="navigation">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
          className={`shop-cart-botton ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
