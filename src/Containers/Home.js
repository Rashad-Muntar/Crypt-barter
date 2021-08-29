import React, { useEffect } from 'react';
import '../Assets/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterAction, coinsFetcher } from '../Actions/index';
import FilterForm from '../Components/FilterForm';
import Crypto from '../Components/Crypto';

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

    <div className="home-wrapper">
      <div className="left-side-bar">
        <div className="menu-items">
          <i className="qrcode icon" />
          <p>Home</p>
        </div>

        <div className="menu-items">
          <i className="chart bar outline icon" />
          <p>Market News</p>
        </div>

        <div className="menu-items">
          <i className="money bill alternate outline icon" />
          <p>Exchange</p>
        </div>

        <div className="menu-items">
          <i className="bell outline icon" />
          <p>Notification</p>
        </div>

        <div className="menu-items">
          <i className="cogs icon" />
          <p>Settings</p>
        </div>
      </div>
      <div className="main-content">
        <div className="image-section">
          <FilterForm onCrytoFilter={handleFilterChanger} />
          <img src="https://images.unsplash.com/photo-1626398394376-27fcbfd8ba42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="header" />
        </div>
        <div className="all-cards-wrapper">
          {filteredCryptos.map((coin) => (
            <Link to={`/details/${coin.id}`} key={coin.id} className="a-card-wrapper">
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
          ))}
        </div>
      </div>
      <div className="right-side-bar">
        {
            coinsData.coins.slice(0, 1).map((coin) => (
              <div className="ui cards" key={coin.id}>
                <div className="card">
                  <i className="assistive listening systems icon" />
                  <div className="content">
                    <img className="right floated mini ui image" alt="imga" src={coin.icon} />
                    <div className="header">{coin.name}</div>
                    <div className="meta">
                      $
                      {coin.price.toFixed(3)}
                    </div>
                    <div className="description">
                      {coin.symbol}
                    </div>
                    <a href={coin.websiteUrl} target="_blank" rel="noreferrer" className="webLink">Visit Website</a>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default CryptoList;
