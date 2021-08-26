import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState(['51.505', '-0.09']);
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');
  const API = `http://api.positionstack.com/v1/forward?access_key=938726ed3cc1ad18e4018b3daca76408&query=${address}`;

  useEffect(() => {
    setIsLogin(true);
    axios(API)
      .then((res) => {
        const lat = res.data.data[0].latitude;
        const lng = res.data.data[0].longitude;
        setMap([lat, lng]);
        setIsLogin(false);
      })
      .catch((err) => {
        setIsLogin(false);
        setError(err.message);
      });
  }, []);

  return { map, isLogin, error };
};
export default useGoogleAddress;
