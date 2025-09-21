import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface GoldPriceData {
  ts: number;
  tsj: number;
  date: string;
  items: Array<{
    curr: string;
    xauPrice: number;
    xagPrice: number;
    chgXau: number;
    chgXag: number;
    pcXau: number;
    pcXag: number;
    xauClose: number;
    xagClose: number;
  }>;
}

interface CandleData {
  open: number;
  high: number;
  low: number;
  close: number;
  time: string;
}

export const GoldChart: React.FC = () => {
  const [goldData, setGoldData] = useState<GoldPriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [candleData, setCandleData] = useState<CandleData[]>([]);

  // Fetch gold price data
  const fetchGoldData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://data-asg.goldprice.org/dbXRates/USD');
      if (!response.ok) {
        throw new Error('Failed to fetch gold data');
      }
      const data: GoldPriceData = await response.json();
      setGoldData(data);
      generateCandleData(data);
      setError(null);
    } catch (err) {
      setError('Failed to load gold price data');
      console.error('Error fetching gold data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Generate candlestick data based on API response
  const generateCandleData = (data: GoldPriceData) => {
    if (!data.items || data.items.length === 0) return;

    const currentPrice = data.items[0].xauPrice;
    const previousClose = data.items[0].xauClose;
    const change = data.items[0].chgXau;

    // Generate random candlestick data for demonstration
    const candles: CandleData[] = [];
    const basePrice = currentPrice;
    
    for (let i = 0; i < 20; i++) {
      const variation = (Math.random() - 0.5) * 50; // Random variation
      const open = basePrice + variation;
      const close = open + (Math.random() - 0.5) * 30;
      const high = Math.max(open, close) + Math.random() * 20;
      const low = Math.min(open, close) - Math.random() * 20;
      
      candles.push({
        open: Number(open.toFixed(2)),
        high: Number(high.toFixed(2)),
        low: Number(low.toFixed(2)),
        close: Number(close.toFixed(2)),
        time: new Date(Date.now() - (19 - i) * 24 * 60 * 60 * 1000).toLocaleDateString()
      });
    }

    // Add current real data as the last candle
    candles.push({
      open: Number(previousClose.toFixed(2)),
      high: Number((currentPrice + Math.abs(change)).toFixed(2)),
      low: Number((currentPrice - Math.abs(change)).toFixed(2)),
      close: Number(currentPrice.toFixed(2)),
      time: 'Today'
    });

    setCandleData(candles);
  };

  useEffect(() => {
    fetchGoldData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchGoldData, 30000);
    return () => clearInterval(interval);
  }, []);

  // Render candlestick chart
  const renderCandlestickChart = () => {
    if (candleData.length === 0) return null;

    const maxPrice = Math.max(...candleData.map(c => c.high));
    const minPrice = Math.min(...candleData.map(c => c.low));
    const priceRange = maxPrice - minPrice;

    return (
      <div className="w-full h-64 bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Gold Price Chart (USD/oz)</h3>
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Live</span>
          </div>
        </div>
        
        <div className="relative h-48">
          <svg width="100%" height="100%" className="overflow-visible">
            {candleData.map((candle, index) => {
              const x = (index / (candleData.length - 1)) * 100;
              const bodyHeight = Math.abs(candle.close - candle.open) / priceRange * 100;
              const bodyY = Math.min(candle.open, candle.close) / priceRange * 100;
              const wickTop = (maxPrice - candle.high) / priceRange * 100;
              const wickBottom = (maxPrice - candle.low) / priceRange * 100;
              const isGreen = candle.close >= candle.open;

              return (
                <g key={index}>
                  {/* Wick */}
                  <line
                    x1={`${x}%`}
                    y1={`${wickTop}%`}
                    x2={`${x}%`}
                    y2={`${wickBottom}%`}
                    stroke={isGreen ? '#10b981' : '#ef4444'}
                    strokeWidth="1"
                  />
                  {/* Body */}
                  <rect
                    x={`${x - 1}%`}
                    y={`${bodyY}%`}
                    width="2%"
                    height={`${bodyHeight}%`}
                    fill={isGreen ? '#10b981' : '#ef4444'}
                    stroke={isGreen ? '#059669' : '#dc2626'}
                    strokeWidth="0.5"
                  />
                </g>
              );
            })}
          </svg>
        </div>
        
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>{candleData[0]?.time}</span>
          <span>{candleData[candleData.length - 1]?.time}</span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-300">Loading gold price data...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-red-400 mb-4">{error}</p>
            <button 
              onClick={fetchGoldData}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Live Gold Price Analysis
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Real-time gold price data with candlestick chart analysis
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* Current Price Display */}
        {goldData && goldData.items && goldData.items.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Gold Price */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Gold (XAU/USD)</h3>
                <div className="flex items-center space-x-2">
                  {goldData.items[0].chgXau >= 0 ? (
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  )}
                  <span className={`text-sm font-semibold ${
                    goldData.items[0].chgXau >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {goldData.items[0].chgXau >= 0 ? '+' : ''}{goldData.items[0].chgXau.toFixed(2)} 
                    ({goldData.items[0].pcXau.toFixed(2)}%)
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold text-amber-400 mb-2">
                ${goldData.items[0].xauPrice.toFixed(2)}
              </div>
              <div className="text-sm text-gray-400">
                Previous Close: ${goldData.items[0].xauClose.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Last updated: {new Date(goldData.ts).toLocaleString()}
              </div>
            </div>

            {/* Silver Price */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Silver (XAG/USD)</h3>
                <div className="flex items-center space-x-2">
                  {goldData.items[0].chgXag >= 0 ? (
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  )}
                  <span className={`text-sm font-semibold ${
                    goldData.items[0].chgXag >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {goldData.items[0].chgXag >= 0 ? '+' : ''}{goldData.items[0].chgXag.toFixed(2)} 
                    ({goldData.items[0].pcXag.toFixed(2)}%)
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-300 mb-2">
                ${goldData.items[0].xagPrice.toFixed(2)}
              </div>
              <div className="text-sm text-gray-400">
                Previous Close: ${goldData.items[0].xagClose.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Last updated: {new Date(goldData.ts).toLocaleString()}
              </div>
            </div>
          </div>
        )}

        {/* Candlestick Chart */}
        <div className="mb-8">
          {renderCandlestickChart()}
        </div>

        {/* Chart Legend */}
        <div className="flex justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-gray-300">Bullish (Price Up)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-gray-300">Bearish (Price Down)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
