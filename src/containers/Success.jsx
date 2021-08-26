import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';
import Map from '../components/Map';
import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  if (buyer.length === 0) {
    return <Redirect to="/" />;
  }
  const { map: location, isLogin } = useGoogleAddress(buyer[0].address); // cra 7 no 32-35
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          {!isLogin ? <Map data={location} /> : <p>Loading ...</p>}
        </div>
      </div>
    </div>
  );
};

export default Success;
