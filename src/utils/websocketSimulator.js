// src/utils/websocketSimulator.js

export const simulatePriceUpdate = (assets) => {
    return assets.map((asset) => {
      // new price ±1%
      const newPrice = parseFloat(
        (asset.price * (1 + (Math.random() * 0.02 - 0.01))).toFixed(2)
      );
      // new 1h change ±0.25%
      const newChange1h = parseFloat(
        (asset.change1h + (Math.random() * 0.5 - 0.25)).toFixed(2)
      );
      // new 24h change ±0.5%
      const newChange24h = parseFloat(
        (asset.change24h + (Math.random() * 1 - 0.5)).toFixed(2)
      );
      // new 7d change ±1%
      const newChange7d = parseFloat(
        (asset.change7d + (Math.random() * 2 - 1)).toFixed(2)
      );
      // volume walks randomly ±5%
      const volChange = Math.random() * 0.05 - 0.025; 
      const newVolume24h = Math.round(asset.volume24h * (1 + volChange));
  
      // Update the human‐readable text if you want
      const newVolume24hText = `${(newVolume24h / 1e6).toFixed(2)}M ${asset.symbol}`;
  
      return {
        ...asset,
        price: newPrice,
        change1h: newChange1h,
        change24h: newChange24h,
        change7d: newChange7d,
        volume24h: newVolume24h,
        volume24hText: newVolume24hText,
        // keep sparkline, marketCap, supply, etc. unchanged
      };
    });
  };
  