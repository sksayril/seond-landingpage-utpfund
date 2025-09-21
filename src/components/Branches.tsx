import React from 'react';
import { MapPin, ArrowRight, Building } from 'lucide-react';

export const Branches: React.FC = () => {
  const locations = [
    { name: 'New Delhi', count: 30, icon: Building },
    { name: 'Gurgaon', count: 6, icon: Building },
    { name: 'Noida', count: 2, icon: Building },
    { name: 'Faridabad', count: 1, icon: Building },
    { name: 'Ghaziabad', count: 5, icon: Building }
  ];

  const areas = [
    'South Delhi',
    'North Delhi', 
    'Central Delhi',
    'East Delhi',
    'West Delhi'
  ];

  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            We Have 44 Branches In Delhi NCR
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* Branch Count Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {locations.map((location, index) => {
            const Icon = location.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-600">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">
                  {location.count}
                </h3>
                <p className="text-gray-300 font-semibold">
                  {location.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Area Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {areas.map((area, index) => (
            <button key={index} className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-between group transition-all duration-300 transform hover:scale-105">
              <span>{area}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Find Your Nearest Branch
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Visit any of our 44+ branches across Delhi NCR for instant gold evaluation 
              and payment. All branches are equipped with German technology KARATMETER machines.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors">
              <MapPin className="w-5 h-5" />
              <span>Locate Branch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};