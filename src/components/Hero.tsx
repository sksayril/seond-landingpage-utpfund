import React from 'react';
import { TrendingUp, Shield, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-600 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-amber-500 rounded-full opacity-10 animate-bounce"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Sell Your <span className="text-amber-400 relative">
                  Gold
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400 transform skew-x-12"></div>
                </span>
                <br />
                Get Instant <span className="text-amber-400 relative">
                  Cash
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400 transform skew-x-12"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                India's most trusted gold buyer with live rates, instant payments, 
                and guaranteed transparency. Turn your gold into cash in just 3 easy steps.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700">
                <TrendingUp className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-300">Live Rates</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700">
                <Shield className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-300">100% Safe</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700">
                <Award className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-300">Certified</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-amber-600 hover:bg-amber-700 focus:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 focus:scale-105 transition-all duration-200 shadow-lg"
                aria-label="Start selling your gold now"
              >
                Sell Gold Now
              </button>
              <button 
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white focus:bg-amber-600 focus:text-white focus:outline-none focus:ring-4 focus:ring-amber-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                aria-label="Calculate the price of your gold"
              >
                Calculate Price
              </button>
            </div>
          </div>

          {/* Right Content - 3D Gold Visual */}
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* 3D Gold Bars Animation */}
              <div className="relative transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 w-48 h-32 rounded-lg transform rotate-12 translate-x-8 translate-y-4 shadow-2xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 w-48 h-32 rounded-lg transform -rotate-6 -translate-x-4 shadow-2xl"></div>
                <div className="relative bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 w-48 h-32 rounded-lg shadow-2xl transform hover:rotate-3 transition-transform duration-500">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-md flex items-center justify-center">
                    <span className="text-amber-800 font-bold text-xl">999.9</span>
                  </div>
                  <div className="absolute top-2 left-2 w-4 h-4 bg-amber-200 rounded-full opacity-70"></div>
                  <div className="absolute top-2 right-2 w-6 h-2 bg-amber-200 rounded-full opacity-50"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-amber-300 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-amber-400 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-amber-500 rounded-full animate-ping opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};