import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setCoins(json);
      });
  }, []); // 아무것도 주시하지 않으면 이 코드는 한 번만 실행됨

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
        </select>
      )}
    </div>
  );
}

export default App;

/*
  const [coins, setCoins] = useState();
  -> 이렇게 기본값을 두고 있지 않으면 {coins.length}가 undefined가 되어 오류가 뜨기 때문에 적어도 비어 있는 array로 두어서 undefined가 되지 않도록 해야 함
*/
