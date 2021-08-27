import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/crypto.css';

const Crypto = ({
  name, price, icon, perChange, rank, symbol,
}) => (

  <div>
    <div className="ui cards desktop">
      <div className="card">
        <div className="content">
          <img className="right floated mini ui image" alt="imga" src={icon} />
          <div className="header">
            {name}
          </div>
          <div className="meta">
            $
            {price.toFixed(3)}
          </div>
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
        <div className="extra content footer">
          <i className="bell outline icon" />
          <div className="rank">
            <small>rank: </small>
            {rank}
          </div>
          <div className="symbol">
            <small />
            {symbol}
          </div>
        </div>
      </div>
    </div>

    {/* for mobile */}
    <div className="ui cards mobile">
      <div className="card">
        <div className="wraps">
          <div className="left">
            <div>
              <i className="bell outline icon" />
              <img className="right floated mini ui image" alt="imga" src={icon} />
            </div>
            <div className="symbol">{name}</div>
          </div>
          <div className="right">
            <div className="pr">
              <div className="meta">
                $
                {price.toFixed(3)}
              </div>
              <i className="circle outline icon" />
            </div>
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
        </div>
      </div>
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
