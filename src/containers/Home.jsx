import React from 'react';
import {Helmet} from 'react-helmet';
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => (
  <>
    <Helmet>
      <title>Platzi Conf Merch - Proudcts</title>
      <meta name="description" content="Store of cool Platzi things " />
    </Helmet>
    <Products products={initialState.products} />
  </>
);

export default Home;
