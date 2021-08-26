import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const history = useHistory();

  const paypalOption = {
    clientId:
      'AazBgbpDPm_X9PNGJgsyeKUkPIn9r0p-wGkquZKb1mj0GboLQ9SZ92qHhHcfgTDGKXvWehgmJRcf8kGp',
    intent: 'capture',
    currency: 'USD',
  };

  const paypalStile = {
    layout: 'vertical',
    color: 'blue',
    shape: 'rect',
    label: 'paypal',
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    return cart.reduce(reducer, 0);
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={paypalOption}
            style={paypalStile}
            amount={handleSumTotal()}
            onButtonReady={() => console.log('PayPal Button ready')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(err) => console.log('Error',err)}
            onCancel={(data) => console.log('Cancel',data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
