// src/features/crypto/CryptoTable.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { updateAssets } from './cryptoSlice';
import { simulatePriceUpdate } from '../../utils/websocketSimulator';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateAssets(simulatePriceUpdate(assets)));
    }, 2000);
    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Price</th><th>1h %</th>
            <th>24h %</th><th>7d %</th><th>Market Cap</th>
            <th>Volume (24h)</th><th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((a, i) => {
            const color = a.change7d >= 0 ? '#4caf50' : '#f44336';
            return (
              <tr key={a.id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={a.logo}
                    alt={a.symbol}
                    width="20"
                    style={{ verticalAlign: 'middle', marginRight: 8 }}
                  />
                  <strong>{a.name}</strong> <small>{a.symbol}</small>
                </td>
                <td>${a.price.toLocaleString()}</td>
                <td style={{ color: a.change1h >= 0 ? 'green' : 'red' }}>
                  {a.change1h.toFixed(2)}%
                </td>
                <td style={{ color: a.change24h >= 0 ? 'green' : 'red' }}>
                  {a.change24h.toFixed(2)}%
                </td>
                <td style={{ color }}>
                  {a.change7d.toFixed(2)}%
                </td>
                <td>${a.marketCap.toLocaleString()}</td>
                <td>
                  ${a.volume24h.toLocaleString()}<br/>
                  <small>{a.volume24hText}</small>
                </td>
                <td>{a.supplyText}</td>
                <td style={{ padding: '4px 8px' /* tighten up cell padding */ }}>
                  <div
                    style={{
                      width: 100,
                      height: 30,
                      backgroundColor: '#f5f5f5',
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Sparklines
                      data={a.sparklineData}
                      width={90}
                      height={20}
                      margin={0}
                    >
                      <SparklinesLine
                        style={{
                          stroke: color,
                          strokeWidth: 1,
                          fill: 'none'
                        }}
                      />
                    </Sparklines>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
