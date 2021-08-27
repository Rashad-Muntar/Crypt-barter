/* eslint-disable no-use-before-define, consistent-return, arrow-body-style */
import React, { useEffect } from 'react';
import '../Assets/cryptoList.css';
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
    <div className="categoryLisWrapper">
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
  );
};

export default CryptoList;
