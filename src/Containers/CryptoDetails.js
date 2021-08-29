/* eslint-disable no-use-before-define, react/jsx-key, consistent-return, array-callback-return */
import { useDispatch, useSelector } from 'react-redux';
import '../Assets/cryptoDetails.css';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { coinsFetcher } from '../Actions/index';

const CryptoDetails = () => {
  const coinsData = useSelector((state) => state.cryptoReducer.data);
  const topCryptos = coinsData.coins.slice(0, 6);
  const { id } = useParams();
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

              <div>
                <i className="certificate icon" />
                <p>Certified by Cryptocurency redulatory board m</p>
              </div>

              <div>
                <i className="money bill alternate outline icon" />
                <p>Apprioved for monitary exchange</p>
              </div>
            </div>
            <hr className="horizonAL" />
            <div className="details_area">
              <p className="price">
                $
                {coin.price.toFixed(3)}
              </p>
              <p className="market">
                Marketcap:
                {coin.marketCap}
              </p>

              { coin.priceChange1w < 1 ? (
                <div className="low market">
                  {coin.priceChange1w}
                  %
                  <i className="arrow down icon" />
                </div>
              ) : (
                <div className="high">
                  {coin.priceChange1w}
                  %
                  <i className="arrow up icon" />
                </div>
              )}

              <p className="symbol">{coin.symbol}</p>
            </div>

            <div className="top-cryptos">
              {topCryptos.map((coin) => (
                <Link to={`/details/${coin.id}`} key={coin.id} className="top-cryptos-card">

                  <div className="top-c-name-wrapper">
                    <p className="top-c-name">{coin.name}</p>
                    <img src={coin.icon} alt="logo" className="" />
                  </div>

                  <p className="top-c-price">
                    $
                    {coin.price.toFixed(3)}
                  </p>
                  { coin.priceChange1w < 1 ? (
                    <div className="low market">
                      {coin.priceChange1w}
                      %
                      <i className="arrow down icon" />
                    </div>
                  ) : (
                    <div className="high">
                      {coin.priceChange1w}
                      %
                      <i className="arrow up icon" />
                    </div>
                  )}

                </Link>
              ))}
            </div>
          </div>
        );
      }
    })
  );
};

export default CryptoDetails;
