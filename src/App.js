import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PieChart} from 'react-chartkick';
import 'chart.js';
import './App.css';

function App() {

    const divStyle = {
        fontSize: '10px',
    };

    const [priceData, setPriceData] = useState({});

    // Prices
    const TROY_OZT_USD_GOLD = 1709.00;
    const TROY_OZT_USD_SILVER = 17.727;
    const TROY_OZT_USD_PLATINUM = 841.09;
    const BITCOIN_USD = 9602.93;
    const ETHEREUM_USD = 239.79;
    const DOGECOIN_USD = 0.0025560;
    const KGC_USD = 6.27;
    const NEM_USD = 57.39;

    // Conversion factors
    const GRAMS_IN_OZT = 31.1034768;

    // Assets               // 2 x 1/10ozt       // 1 x 1/4ozt        // 1 x 5g && 1 x 0.5g && 12.39g
    const GRAMS_OF_GOLD = ( (GRAMS_IN_OZT / 5) + (GRAMS_IN_OZT / 4) + (5.5) + (12.38) );
    const GRAMS_OF_SILVER = (36 * GRAMS_IN_OZT);
    const GRAMS_OF_PLATINUM = 4.35;
    const BITCOIN = 0.08;
    const ETHEREUM = 0.1;
    const DOGECOIN = 80000;
    const KGC_SHARES = 1;
    const NEM_SHARES = 1;

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

        return (pricePerAsset * amount);
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

        return ((numberOfGrams / GRAMS_IN_OZT) * pricePerOzt);
    }

    function calcStockValueUSD(share) {
        if (share === "Newmont") return NEM_SHARES * NEM_USD;
        if (share === "Kinross") return KGC_SHARES * KGC_USD;
        return 0;
    }

    function calcTotal() {
        return parseFloat(
            +calcMetalTotal() + +calcStockTotal() + +calcCryptoTotal()
        ).toFixed(2);
    }

    function calcMetalTotal() {
        return parseFloat(
            calcMetalValueUSD(GRAMS_OF_GOLD, 'Gold') + calcMetalValueUSD(GRAMS_OF_SILVER, 'Silver') + calcMetalValueUSD(GRAMS_OF_PLATINUM, 'Platinum')
        ).toFixed(2);
    }

    function calcCryptoTotal() {
        return parseFloat(
            calcCryptoValueUSD(BITCOIN, 'Bitcoin') + calcCryptoValueUSD(DOGECOIN, 'Dogecoin') + calcCryptoValueUSD(ETHEREUM, 'Ethereum')
        ).toFixed(2);
    }

    function calcStockTotal() {
        return parseFloat(
            calcStockValueUSD("Newmont") + calcStockValueUSD("Kinross")
        ).toFixed(2);
    }

    function calcCryptoRatio() {
        return (
            calcCryptoTotal() / calcMetalTotal()
        ).toFixed(3);
    }

    function calcStockRatio() {
        return (
            calcStockTotal() / calcMetalTotal()
        ).toFixed(3);
    }

    return (
        <div className="App">
            <header className="App-header">
{/*                <div>
                    <h3>Mass (grams)</h3>
                    <PieChart
                        data={[["Gold", GRAMS_OF_GOLD], ["Silver", GRAMS_OF_SILVER],
                            ["Platinum", GRAMS_OF_PLATINUM]]}
                        colors={['#d4af37', '#e5e4e2', '#c0c0c0']}/>
                </div>*/}
                <div>
                    <h3>Portfolio</h3>
                    <PieChart round={2} zeros={true} prefix="$" data={[
                        ["Gold-"+parseFloat(GRAMS_OF_GOLD).toFixed(3)+"g", calcMetalValueUSD(GRAMS_OF_GOLD, 'Gold')],
                        ["Silver-"+parseFloat(GRAMS_OF_SILVER.toString()).toFixed(3)+"g", calcMetalValueUSD(GRAMS_OF_SILVER, 'Silver')],
                        ["Platinum-"+parseFloat(GRAMS_OF_PLATINUM.toString()).toFixed(3)+"g", calcMetalValueUSD(GRAMS_OF_PLATINUM, 'Platinum')],
                        ["Bitcoin", calcCryptoValueUSD(BITCOIN, 'Bitcoin')],
                        ["Dogecoin", calcCryptoValueUSD(DOGECOIN, 'Dogecoin')],
                        ["Ethereum", calcCryptoValueUSD(ETHEREUM, 'Ethereum')],
                        ["Newmont Corp", calcStockValueUSD("Newmont")],
                        ["Kinross Gold Corp", calcStockValueUSD("Kinross")]]
                    } colors={['#d4af37', '#e5e4e2', '#c0c0c0', '#ff9900', '#e1b303', '#3c3c3d', '#ead695', '#95791d']}/>
                </div>
                <div style={divStyle}>
                    <p>Total: ${calcTotal()}</p>
                    <p>Stocks: ${calcStockTotal()}</p>
                    <p>Crypto: ${calcCryptoTotal()}</p>
                    <p>Metal: ${calcMetalTotal()}</p>
                    <p>Ratio: ({calcStockRatio()} : {calcCryptoRatio()} : 1)</p>
                </div>
            </header>
        </div>
    );
}

export default App;
