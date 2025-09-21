import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const LiveRates: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const goldRates = [
    { karat: '24K', buyRate: 6440, sellRate: 6400, change: 15, changePercent: 0.23 },
    { karat: '22K', buyRate: 5903, sellRate: 5863, change: 12, changePercent: 0.20 },
    { karat: '18K', buyRate: 4830, sellRate: 4790, change: 8, changePercent: 0.17 },
    { karat: '14K', buyRate: 3757, sellRate: 3717, change: 5, changePercent: 0.13 },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Live Gold Rates
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Real-time gold prices updated every minute
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-900 text-green-300 px-4 py-2 rounded-full border border-green-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">
              Last updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goldRates.map((rate, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-600">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-amber-400 mb-2">{rate.karat} Gold</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-400">Buy Rate</p>
                    <p className="text-2xl font-bold text-white">₹{rate.buyRate.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Sell Rate</p>
                    <p className="text-xl font-semibold text-gray-300">₹{rate.sellRate.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    {rate.change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-semibold ${rate.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {rate.change > 0 ? '+' : ''}₹{rate.change} ({rate.changePercent}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-4">
            * Rates are subject to market fluctuations and may vary by location
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Get Instant Quote
          </button>
        </div>
      </div>
    </section>
  );
};