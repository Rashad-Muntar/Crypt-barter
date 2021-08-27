/* eslint-disable no-use-before-define, consistent-return, array-callback-return */
import { useDispatch, useSelector } from 'react-redux';
import '../Assets/cryptoDetails.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { coinsFetcher } from '../Actions/index';

const CryptoDetails = () => {
  const coinsData = useSelector((state) => state.cryptoReducer.data);

  const { id } = useParams();
  console.log(coinsData);
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinsFetcher());
  }, []);

  return (
    coinsData.coins.map((coin) => {
      if (coin.id === id) {
        return (
          <div className="content-wrapper">
            <div className="name-setion">
              <img src={coin.icon} alt="logo" className="logoImg" />
              <p className="name">{coin.name}</p>
            </div>
            <a href={coin.websiteUrl} target="_blank" rel="noreferrer" className="webLink">Visit Website</a>

            <div className="icons-setion">
              <div>
                <i className="shield alternate icon safe" />
                <p>Safe and secured, Trusted by millions</p>
              </div>
              
              <div className="icons-setion">
                <i className="thumbs up outline icon" />
                <p>Certified by Cryptocurency redulatory board m</p>
              </div>

              <div className="icons-setion">
              <i class="money bill alternate outline icon"></i>
                <p>Apprioved for monitary exchange</p>
              </div>
            </div>
            <hr className="horizonAL" />
            <p>{coin.price}</p>
          </div>
        );
      }
    })
  );
};

export default CryptoDetails;
