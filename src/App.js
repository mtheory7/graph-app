import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PieChart} from 'react-chartkick';
import 'chart.js';
import './App.css';

function App() {

    const [priceData, setPriceData] = useState({});

    // Prices per asset
    const TROY_OZT_USD_GOLD = (priceData === undefined) ? 1572.36 : priceData.gold;
    const TROY_OZT_USD_SILVER = (priceData === undefined) ? 18.053 : priceData.silver;
    const TROY_OZT_USD_PLATINUM = (priceData === undefined) ? 1010.56 : priceData.platinum;
    const BITCOIN_USD = (priceData === undefined) ? 8471.50 : priceData.btc;
    const ETHEREUM_USD = (priceData === undefined) ? 162.08 : priceData.eth;
    const DOGECOIN_USD = (priceData === undefined) ? 0.0022858 : priceData.doge;

    // Conversion factors
    const GRAMS_IN_OZT = 31.1034768;

    // Assets
    const GRAMS_OF_GOLD = 16.38;
    const GRAMS_OF_SILVER = 715.37;
    const GRAMS_OF_PLATINUM = 4.35;
    const BITCOIN = 0.025;
    const ETHEREUM = 1;
    const DOGECOIN = 10000;

    useEffect(() => {
        axios.get('https://www.mtheory7.com/pricedata').then(({data}) => {
            console.log(data);
            setPriceData(data);
        });
    }, []);

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
                    <PieChart round={2} zeros={true} prefix="$" data={[
                        ["Gold", calcMetalValueUSD(GRAMS_OF_GOLD, 'Gold')],
                        ["Silver", calcMetalValueUSD(GRAMS_OF_SILVER, 'Silver')],
                        ["Platinum", calcMetalValueUSD(GRAMS_OF_PLATINUM, 'Platinum')],
                        ["Bitcoin", calcCryptoValueUSD(BITCOIN, 'Bitcoin')],
                        ["Dogecoin", calcCryptoValueUSD(DOGECOIN, 'Dogecoin')],
                        ["Ethereum", calcCryptoValueUSD(ETHEREUM, 'Ethereum')]]
                    } colors={['#d4af37', '#e5e4e2', '#c0c0c0', '#ff9900', '#e1b303', '#3c3c3d']}/>
                </div>
            </header>
        </div>
    );
}

export default App;
