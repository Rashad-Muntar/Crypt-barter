/* eslint-disable no-use-before-define, consistent-return, arrow-body-style */
import React, { useEffect } from 'react';
import '../Assets/cryptoList.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterAction, coinsFetcher } from '../Actions/index';
// import CryptoDetails from './CryptoDetails';
import FilterForm from './FilterForm';
import Crypto from './Cryto';

const CryptoList = () => {
  const coinsData = useSelector((state) => state.cryptoReducer.data);
  const filter = useSelector((state) => state.filterReducer);
  console.log(filter);
  console.log(coinsData);
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
      {/* <img src="https://cdn.dribbble.com/users/427857/screenshots/14742262/media/f9b75790a911b4a614f305e6e0902e9a.png?compress=1&resize=800x600" alt="back" /> */}
      <FilterForm onCrytoFilter={handleFilterChanger} />
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
  // coinsData.data.map((coin) => (
  //   <Crypto
  //     key={coin.id}
  //     name={coin.name}
  //     price={coin.price}
  //   />
  // ))
  );
};

// CryptoList.propTypes = {
//     book: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     handleRemoveBook: PropTypes.func.isRequired,
//   };

export default CryptoList;
