/* eslint-disable no-use-before-define, consistent-return, arrow-body-style */
import React, { useEffect } from 'react';
import '../Assets/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterAction, coinsFetcher } from '../Actions/index';
import FilterForm from './FilterForm';
import Crypto from './Crypto';

const CryptoList = () => {
  const coinsData = useSelector((state) => state.cryptoReducer.data);
  const filter = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const handleFilterChanger = (e) => {
    dispatch(filterAction(e.target.value));
  };

  useEffect(() => {
    dispatch(coinsFetcher());
  }, []);

  const filteredCryptos = (filter !== '') ? coinsData.coins.filter((coin) => coin.name === filter) : coinsData.coins;
  return (

    <div className="ui grid home-wrapper">
      <div className="three wide column left-side-bar">
        <div className="menu-items">
          <i className="qrcode icon" />
          <p>Home</p>
        </div>

        <div className="menu-items">
        <i class="chart bar outline icon" />
          <p>Market News</p>
        </div>

        <div className="menu-items">
          <i className="qrcode icon" />
          <p>Exchange</p>
        </div>

        <div className="menu-items">
        <i class="bell outline icon"></i>
          <p>Notification</p>
        </div>

        <div className="menu-items">
        <i class="cogs icon"></i>
          <p>Settings</p>
        </div>
      </div>
      <div className="ten wide column main-content categoryLisWrapper">
        <div className="image-section">
          <FilterForm onCrytoFilter={handleFilterChanger} />
        </div>
        <div className="cards-wrapper">
          {filteredCryptos.map((coin) => {
            return (
              <Link to={`/details/${coin.id}`} key={coin.id}>
                <Crypto
                  key={coin.id}
                  name={coin.name}
                  price={coin.price}
                  icon={coin.icon}
                  rank={coin.rank}
                  perChange={coin.priceChange1w}
                  symbol={coin.symbol}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="three wide column right-side-bar" />
    </div>

  // <div className="categoryLisWrapper">

  // </div>
  );
};

export default CryptoList;
