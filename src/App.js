import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PieChart} from 'react-chartkick';
import 'chart.js';
import './App.css';

function App() {

    const [priceData, setPriceData] = useState({});

    // Prices per asset
/*    const TROY_OZT_USD_GOLD = (priceData === undefined) ? 1571.45 : priceData.gold;
    const TROY_OZT_USD_SILVER = (priceData === undefined) ? 18.09 : priceData.silver;
    const TROY_OZT_USD_PLATINUM = (priceData === undefined) ? 1005.0 : priceData.platinum;
    const BITCOIN_USD = (priceData === undefined) ? 8331.0 : priceData.btc;
    const ETHEREUM_USD = (priceData === undefined) ? 160.38 : priceData.eth;
    const DOGECOIN_USD = (priceData === undefined) ? 0.002242 : priceData.doge;*/

    const TROY_OZT_USD_GOLD = 1572.07;
    const TROY_OZT_USD_SILVER = 17.729;
    const TROY_OZT_USD_PLATINUM = 968.74;
    const BITCOIN_USD = 9770.29;
    const ETHEREUM_USD = 221.38;
    const DOGECOIN_USD = 0.00283294;
    const TWITTER_USD = 37.13;
    const GE_USD = 12.88;
    const FITBIT_USD = 6.62;

    // Conversion factors
    const GRAMS_IN_OZT = 31.1034768;

    // Assets
    const GRAMS_OF_GOLD = 16.38;
    const GRAMS_OF_SILVER = 715.37;
    const GRAMS_OF_PLATINUM = 4.35;
    const BITCOIN = 0.05;
    const ETHEREUM = 1.1;
    const DOGECOIN = 10000;

/*    useEffect(() => {
        axios.get('http://www.mtheory7.com:17071/pricedata/').then(({data}) => {
            setPriceData(data);
        });
    }, []);*/

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
        return 0;
    }

    function calcTotal() {
        return calcMetalTotal() + calcStockTotal() + calcCryptoTotal();
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
            calcCryptoTotal() / calcTotal()
        ).toFixed(2);
    }

    function calcStockRatio() {
        return (
            calcStockTotal() / calcTotal()
        ).toFixed(2);
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
                    <h3>USD Value</h3>
                    <PieChart round={2} zeros={true} prefix="$" data={[
                        ["Gold", calcMetalValueUSD(GRAMS_OF_GOLD, 'Gold')],
                        ["Silver", calcMetalValueUSD(GRAMS_OF_SILVER, 'Silver')],
                        ["Platinum", calcMetalValueUSD(GRAMS_OF_PLATINUM, 'Platinum')],
                        ["Bitcoin", calcCryptoValueUSD(BITCOIN, 'Bitcoin')],
                        ["Dogecoin", calcCryptoValueUSD(DOGECOIN, 'Dogecoin')],
                        ["Ethereum", calcCryptoValueUSD(ETHEREUM, 'Ethereum')],
                        ["Twitter", calcStockValueUSD(1, "Twitter")],
                        ["FitBit", calcStockValueUSD(1, "FitBit")],
                        ["GE", calcStockValueUSD(1, "GE")]]
                    } colors={['#d4af37', '#e5e4e2', '#c0c0c0', '#ff9900', '#e1b303', '#3c3c3d', '#00acee', '#00B0B9', '#026cb6']}/>
                </div>
                <div>
                    <p>Total ${calcTotal()}</p>
                    <p>Stocks ${calcStockTotal()}</p>
                    <p>Crypto ${calcCryptoTotal()}</p>
                    <p>Metal ${calcMetalTotal()}</p>
                    <p>Ratio(Stocks:Crypto:Metal) {calcStockRatio()} : {calcCryptoRatio()} : 1</p>
                </div>
            </header>
        </div>
    );
}

export default App;
