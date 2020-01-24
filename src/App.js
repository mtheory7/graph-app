import React from 'react';
import {PieChart} from 'react-chartkick';
import 'chart.js';
import './App.css';

function App() {

/*
  const [goldPrice, setGoldPrice] = useState({});
*/

  // Prices per asset
  const TROY_OZT_USD_GOLD = 1572.36;
  const TROY_OZT_USD_SILVER = 18.053;
  const TROY_OZT_USD_PLATINUM = 1010.56;
  const BITCOIN_USD = 8471.50;
  const ETHEREUM_USD = 162.08;
  const DOGECOIN_USD = 0.0022858;

  // Conversion factors
  const GRAMS_IN_OZT = 31.1034768;

  // Assets
  const GRAMS_OF_GOLD = 16.38;
  const GRAMS_OF_SILVER = 715.37;
  const GRAMS_OF_PLATINUM = 4.35;
  const BITCOIN = 0.025;
  const ETHEREUM = 1;
  const DOGECOIN = 10000;


  function money_round(num) {
    return Math.ceil(num * 100) / 100;
  }

/*  useEffect(() => {
    axios.get('https://www.kitco.com/gold-price-today-usa/', {
      crossdomain: true
    }).then(({data}) => {
      setGoldPrice(data);
    });
    console.log(goldPrice);
  });*/

  function calcCryptoValueUSD(amount, cryptoType) {
    let pricePerAsset = 0;
    if (cryptoType === 'Bitcoin') {
      pricePerAsset = BITCOIN_USD;
    }
    if (cryptoType === 'Ethereum') {
      pricePerAsset = ETHEREUM_USD;
    }
    if (cryptoType === 'Dogecoin') {
      pricePerAsset = DOGECOIN_USD;
    }

    return money_round(pricePerAsset * amount);
  }

  function calcMetalValueUSD(numberOfGrams, metalType) {
    let pricePerOzt = 0;
    if (metalType === 'Gold') {
      pricePerOzt = TROY_OZT_USD_GOLD;
    }
    if (metalType === 'Silver') {
      pricePerOzt = TROY_OZT_USD_SILVER;
    }
    if (metalType === 'Platinum') {
      pricePerOzt = TROY_OZT_USD_PLATINUM;
    }

    return (money_round((numberOfGrams / GRAMS_IN_OZT) * pricePerOzt));
  }

  return (
      <div className="App">
        <header className="App-header">
          <div>
            <h3>Mass (grams)</h3>
            <PieChart
                data={[["Gold", GRAMS_OF_GOLD], ["Silver", GRAMS_OF_SILVER],
                  ["Platinum", GRAMS_OF_PLATINUM]]}
                colors={['#d4af37', '#e5e4e2', '#c0c0c0']}/>
          </div>
          <div>
            <h3>USD Value</h3>
            <PieChart data={[
              ["Gold", calcMetalValueUSD(GRAMS_OF_GOLD, 'Gold')],
              ["Silver", calcMetalValueUSD(GRAMS_OF_SILVER, 'Silver')],
              ["Platinum", calcMetalValueUSD(GRAMS_OF_PLATINUM, 'Platinum')],
              ["Bitcoin", calcCryptoValueUSD(BITCOIN, 'Bitcoin')],
              ["Dogecoin", calcCryptoValueUSD(DOGECOIN, 'Dogecoin')],
              ["Ethereum", calcCryptoValueUSD(ETHEREUM, 'Ethereum')]]
            } colors={['#d4af37', '#e5e4e2', '#c0c0c0', '#ff9900', '#3c3c3d', '#e1b303']}/>
          </div>
        </header>
      </div>
  );
}

export default App;
