import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from '../components/coin/Coin';

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="header">
        <h1 className="brand">
          <i className="fas fa-moon"></i>Crptola
        </h1>
        <form>
          <input className="inputField" type="text" placeholder="Search..." />
        </form>
      </div>
      <div className="coinContainer">
        {coins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
    </>
  );
};

export default Home;
