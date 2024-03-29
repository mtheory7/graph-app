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
    const TROY_OZT_USD_GOLD = 1799.74;
    const TROY_OZT_USD_SILVER = 25.106;
    const TROY_OZT_USD_PLATINUM = 1005.20;
    const BITCOIN_USD = 40184.61;
    const ETHEREUM_USD = 2766.26;
    const DOGECOIN_USD = 0.19950;
    const KGC_USD = 6.35;
    const NEM_USD = 61.25;

    // Conversion factors
    const GRAMS_IN_OZT = 31.1034768;

    // Assets               // 1ozt PAMP    // 2 x 1/10ozt       // 1 x 1/4ozt        // 1 x 5g && 1 x 0.5g && 12.36g     // 7.98g 22kt purity
    const GRAMS_OF_GOLD = ( GRAMS_IN_OZT + (GRAMS_IN_OZT / 5) + (GRAMS_IN_OZT / 4) + (5.5) + (12.36)                   + (7.98 * (22/24)));
                            // 37 ozt of .9999     // 242.779 grams of .900 constitutional
    const GRAMS_OF_SILVER = ( (37 * GRAMS_IN_OZT) + (242.779 * 0.9) );
    const GRAMS_OF_PLATINUM = 4.35;
    const BITCOIN = 0.06;
    const ETHEREUM = 0.49079023;
    const DOGECOIN = 7500;
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
