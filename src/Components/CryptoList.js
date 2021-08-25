/* eslint-disable no-use-before-define, consistent-return, arrow-body-style */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coinsFetcher } from '../Actions';
import Crypto from './Cryto';

const CryptoList = () => {
  const coinsData = useSelector((state) => state.data);
  console.log(coinsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinsFetcher());
  }, []);

  return (
    <>
      {
      coinsData.coins.map((coin) => {
        return (
          <Crypto
            key={coin.id}
            name={coin.name}
            price={coin.price}
          />
        );
      })
    }

    </>
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
