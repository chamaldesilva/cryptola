import React from 'react';

const Coin = ({ coin }) => {
  return (
    <div className="cryptoCoin">
      <img src={coin.image} alt={coin.name} className="coinLogo" />
      <div className="coinNameWrap">
        <h1 className="coinName">{coin.name}</h1>
        <p className="coinSymbol">{coin.symbol?.toUpperCase()}</p>
      </div>
      <p className="coinPrice">${coin.current_price.toLocaleString()}</p>
      <p className="coinMarketCap">
        Market Cap: ${coin.market_cap.toLocaleString()}
      </p>
      <p className="coinVolume">
        Volume (24H): ${coin.total_volume.toLocaleString()}
      </p>
    </div>
  );
};

export default Coin;
