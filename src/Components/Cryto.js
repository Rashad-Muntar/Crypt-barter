import React from 'react';
import PropTypes from 'prop-types';

const Crypto = ({ name, price }) => (
  <div>
    <p>{name}</p>
    <p>{price}</p>
  </div>
);

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Crypto;
