import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/crypto.css';

const Crypto = ({
  name, price, icon, perChange, rank, symbol,
}) => (
  <div className="card-wrapper">
    <div className="icon-section">
      <p className="header">{name}</p>
      <img src={icon} alt="icon" />
    </div>
    <div className="price-area">
      <p className="price">
        €
        {price.toFixed(4)}
      </p>
      { perChange < 1 ? (
        <div className="low">
          {perChange}
          %
          <i className="arrow down icon" />
        </div>
      ) : (
        <div className="high">
          {perChange}
          %
          <i className="arrow up icon" />
        </div>
      )}
    </div>
    <div className="symbol-area">
      <p className="rank">
        rank:
        {rank}
      </p>
      <p className="symbol">{symbol}</p>
    </div>
  </div>
);

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  perChange: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Crypto;
