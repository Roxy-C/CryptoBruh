import { useState, useEffect } from "react";
import Axios from "axios";

import Header from "./components/Layout/Header";
import CoinFilter from "./components/UI/CoinFilter";
import CoinGrid from "./components/Coin/CoinGrid";

let CoinData = [];

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      setIsLoading(false);
      setIsRefresh(false);
      CoinData = response.data;
      setCoins(response.data);
    });
  }, [isRefresh]);

  const refreshHandler = () => {
    setIsRefresh(true);
  };

  const filterCoins = (searchTerm) => {
    console.log(searchTerm.trim().length);

    if (searchTerm.trim().length === 0) {
      setCoins(CoinData);
      return;
    }

    setCoins(
      CoinData.filter((coin) => {
        return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  };

  return (
    <div className="main">
      <Header onRefresh={refreshHandler} />
      {isLoading && <h1>Data Loading...</h1>}
      <CoinFilter onSearch={filterCoins} />
      <CoinGrid coinData={coins} />
    </div>
  );
}

export default App;
