import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    return cart.reduce(reducer, 0);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{ cart.length > 0 ? 'Order List': 'No orders ...'}</h3>
        {cart.map((item) => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" title="Remove" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Total price: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continue</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
