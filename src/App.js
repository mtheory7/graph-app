import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PieChart} from 'react-chartkick';
import 'chart.js';
import './App.css';

function App() {

    const [priceData, setPriceData] = useState({});

    // Prices
    const TROY_OZT_USD_GOLD = 1572.07;
    const TROY_OZT_USD_SILVER = 17.729;
    const TROY_OZT_USD_PLATINUM = 968.74;
    const BITCOIN_USD = 9770.29;
    const ETHEREUM_USD = 221.38;
    const DOGECOIN_USD = 0.00283294;
    const TWITTER_USD = 37.13;
    const GE_USD = 12.88;
    const FITBIT_USD = 6.62;
    const KGC_USD = 4.89;
    const NEM_USD = 44.08;

    // Conversion factors
    const GRAMS_IN_OZT = 31.1034768;

    // Assets
    const GRAMS_OF_GOLD = 16.38;
    const GRAMS_OF_SILVER = 715.37;
    const GRAMS_OF_PLATINUM = 4.35;
    const BITCOIN = 0.05;
    const ETHEREUM = 1.1;
    const DOGECOIN = 10000;

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

    function calcStockValueUSD(numberOfShares, share) {
        if (share === "FitBit") return numberOfShares * FITBIT_USD;
        if (share === "Twitter") return numberOfShares * TWITTER_USD;
        if (share === "GE") return numberOfShares * GE_USD;
        if (share === "Newmont") return numberOfShares * NEM_USD;
        if (share === "Kinross") return numberOfShares * KGC_USD;
        return 0;
    }

    function calcTotal() {
        return +calcMetalTotal() + +calcStockTotal() + +calcCryptoTotal();
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
            calcStockValueUSD(1, "Twitter") + calcStockValueUSD(1, "GE") + calcStockValueUSD(1, "FitBit")
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
                        ["Gold", calcMetalValueUSD(GRAMS_OF_GOLD, 'Gold')],
                        ["Silver", calcMetalValueUSD(GRAMS_OF_SILVER, 'Silver')],
                        ["Platinum", calcMetalValueUSD(GRAMS_OF_PLATINUM, 'Platinum')],
                        ["Bitcoin", calcCryptoValueUSD(BITCOIN, 'Bitcoin')],
                        ["Dogecoin", calcCryptoValueUSD(DOGECOIN, 'Dogecoin')],
                        ["Ethereum", calcCryptoValueUSD(ETHEREUM, 'Ethereum')],
                        ["Newmont Corp", calcStockValueUSD(1, "Newmont")],
                        ["Twitter", calcStockValueUSD(1, "Twitter")],
                        ["GE", calcStockValueUSD(1, "GE")],
                        ["FitBit", calcStockValueUSD(1, "FitBit")],
                        ["Kinross Gold Corp", calcStockValueUSD(1, "Kinross")]]
                    } colors={['#d4af37', '#e5e4e2', '#c0c0c0', '#ff9900', '#e1b303', '#3c3c3d', '#00acee', '#00B0B9', '#026cb6']}/>
                </div>
                <div>
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
