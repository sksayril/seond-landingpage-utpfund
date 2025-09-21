import React from 'react';

export const CityRatesMarquee: React.FC = () => {
  const cityRates = [
    { city: 'Mumbai', rate: '₹6,440 /gm', change: '+₹15' },
    { city: 'Delhi', rate: '₹6,435 /gm', change: '+₹12' },
    { city: 'Chennai', rate: '₹6,445 /gm', change: '+₹18' },
    { city: 'Kolkata', rate: '₹6,430 /gm', change: '+₹10' },
    { city: 'Pune', rate: '₹6,438 /gm', change: '+₹14' },
    { city: 'Hyderabad', rate: '₹6,442 /gm', change: '+₹16' },
    { city: 'Bangalore', rate: '₹6,447 /gm', change: '+₹20' },
    { city: 'Ahmedabad', rate: '₹6,433 /gm', change: '+₹8' },
  ];

  return (
    <div className="bg-amber-900 text-white py-4 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <div className="inline-flex items-center space-x-8">
          {[...cityRates, ...cityRates].map((item, index) => (
            <div key={index} className="flex items-center space-x-2 px-6">
              <span className="font-semibold text-amber-200">{item.city}:</span>
              <span className="font-bold">{item.rate}</span>
              <span className="text-green-400 text-sm">{item.change}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};