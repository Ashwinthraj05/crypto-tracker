import React from 'react';
import CryptoTable from './features/crypto/CryptoTable';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>💹 Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
