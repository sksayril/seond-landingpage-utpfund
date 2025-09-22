import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentChart, setCurrentChart] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const chartImages = [
    {
      src: '/chart1.jpeg',
      alt: 'Gold Price Analysis Chart',
      title: 'Live Gold Price Analysis',
      description: 'Real-time market trends and price movements'
    },
    {
      src: '/chart2.jpeg',
      alt: 'Financial Trading Chart',
      title: 'Market Trading Insights',
      description: 'Professional trading analysis and indicators'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentChart((prev) => (prev + 1) % chartImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, chartImages.length]);

  const nextChart = () => {
    setCurrentChart((prev) => (prev + 1) % chartImages.length);
    setIsAutoPlaying(false);
  };

  const prevChart = () => {
    setCurrentChart((prev) => (prev - 1 + chartImages.length) % chartImages.length);
    setIsAutoPlaying(false);
  };

  const goToChart = (index: number) => {
    setCurrentChart(index);
    setIsAutoPlaying(false);
  };

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

          {/* Right Content - Chart Carousel */}
          <div className="relative">
            <div className="relative w-full h-96">
              {/* Chart Carousel */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-800 border border-gray-700">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentChart * 100}%)` }}
                >
                  {chartImages.map((chart, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                      <div className="relative h-96 flex items-center justify-center bg-gray-800">
                        <img
                          src={chart.src}
                          alt={chart.alt}
                          className="max-w-full max-h-full object-contain"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg md:text-xl font-bold mb-1">
                            {chart.title}
                          </h3>
                          <p className="text-sm text-gray-200">
                            {chart.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevChart}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
                aria-label="Previous chart"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextChart}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
                aria-label="Next chart"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {chartImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToChart(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentChart
                        ? 'bg-amber-600 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to chart ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-amber-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-amber-500 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute top-1/2 right-8 w-3 h-3 bg-amber-600 rounded-full animate-ping opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};