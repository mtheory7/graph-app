import React from 'react';
import {PieChart} from 'react-chartkick';
import 'chart.js';
import './App.css';

function App() {

  const TROY_OZT_USD_GOLD = 1572.36;
  const TROY_OZT_USD_SILVER = 18.053;
  const TROY_OZT_USD_PLATINUM = 1010.56;

  const GRAMS_IN_OZT = 31.1034768;

  const GRAMS_OF_GOLD = 16.38;
  const GRAMS_OF_SILVER = 715.37;
  const GRAMS_OF_PLATINUM = 4.35;

  function calcValueUSD(numberOfGrams, metalType) {
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

    return ((numberOfGrams / GRAMS_IN_OZT) * pricePerOzt);
  }

  return (
      <div className="App">
        <header className="App-header">
          <PieChart label="Mass"
                    data={[["Gold", GRAMS_OF_GOLD], ["Silver", GRAMS_OF_SILVER],
                      ["Platinum", GRAMS_OF_PLATINUM]]}
                    colors={['#D4AF37', '#e5e4e2', '#C0C0C0']}/>
          <PieChart label="USD Value"
                    data={[["Gold", calcValueUSD(GRAMS_OF_GOLD, 'Gold')],
                      ["Silver", calcValueUSD(GRAMS_OF_SILVER, 'Silver')],
                      ["Platinum",
                        calcValueUSD(GRAMS_OF_PLATINUM, 'Platinum')]]}
                    colors={['#D4AF37', '#e5e4e2', '#C0C0C0']}/>
        </header>
      </div>
  );
}

export default App;

