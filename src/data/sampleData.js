// src/data/sampleData.js
import btcLogo from '../assets/logos/btc.png';
import ethLogo from '../assets/logos/eth.png';
import bnbLogo from '../assets/logos/bnb.png';
import usdtLogo from '../assets/logos/usdt.png';
import xrpLogo from '../assets/logos/xrp.png';

export const sampleAssets = [
  {
    id: 1,
    logo: btcLogo,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    volume24hText: '467.81K BTC',
    supplyText: '19.85M BTC',
    // Adding sparklineData for Bitcoin
    sparklineData: [92000, 94000, 96000, 98000, 97000, 96000, 93759.48],
  },
  {
    id: 2,
    logo: ethLogo,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1802.46,
    change1h: 0.60,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    volume24hText: '13.05M ETH',
    supplyText: '120.71M ETH',
    // Adding sparklineData for Ethereum
    sparklineData: [1700, 1750, 1800, 1850, 1820, 1790, 1802.46],
  },
  {
    id: 3,
    logo: bnbLogo,
    name: 'BNB',
    symbol: 'BNB',
    price: 338.23,
    change1h: 0.25,
    change24h: -1.11,
    change7d: 6.45,
    marketCap: 57893004752,
    volume24h: 1966544873,
    volume24hText: '5.81M BNB',
    supplyText: '170.53M BNB',
    // Adding sparklineData for BNB
    sparklineData: [320, 330, 340, 350, 345, 338, 338.23],
  },
  {
    id: 4,
    logo: usdtLogo,
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    change1h: 0.01,
    change24h: 0.02,
    change7d: 0.01,
    marketCap: 68700000000,
    volume24h: 81000000000,
    volume24hText: '81.00B USDT',
    supplyText: '68.70B USDT',
    // Adding sparklineData for Tether
    sparklineData: [0.98, 0.99, 1.00, 1.00, 1.00, 1.00, 1.00],
  },
  {
    id: 5,
    logo: xrpLogo,
    name: 'XRP',
    symbol: 'XRP',
    price: 0.89,
    change1h: -0.12,
    change24h: -1.50,
    change7d: 2.25,
    marketCap: 45136954049,
    volume24h: 1282390272,
    volume24hText: '1.28B XRP',
    supplyText: '50.00B XRP',
    // Adding sparklineData for XRP
    sparklineData: [0.80, 0.82, 0.85, 0.88, 0.87, 0.89, 0.89],
  }
];
