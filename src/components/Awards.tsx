import React from 'react';
import { Award, Star } from 'lucide-react';

export const Awards: React.FC = () => {
  const awards = [
    {
      title: 'Millennium Awards',
      subtitle: 'AWARDED BEST GOLD BUYING COMPANY',
      year: '2023',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      title: 'International Excellence',
      subtitle: 'INTERNATIONAL AWARD OF EXCELLENCE',
      year: '2023',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Iconic Achievers',
      subtitle: 'AWARDED TRUSTED BUYER IN NORTH INDIA',
      year: '2022',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-amber-600 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-500 rounded-full opacity-10 animate-bounce"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content and Awards List */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Awards & Honours
              </h2>
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                Achieved By UTpFund
              </h3>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              
              {/* Additional Content */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our commitment to excellence and customer satisfaction has been recognized by prestigious organizations across India and internationally.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-700 bg-opacity-60 rounded-lg border border-gray-600">
                    <div className="text-2xl font-bold text-amber-400">15+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700 bg-opacity-60 rounded-lg border border-gray-600">
                    <div className="text-2xl font-bold text-amber-400">100%</div>
                    <div className="text-sm text-gray-300">Trusted Service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards List */}
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  {/* Award Badge */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Award Content */}
                  <div className="flex-1 bg-gray-800 bg-opacity-80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500 border border-gray-700">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {award.title}
                    </h4>
                    <p className="text-xs text-amber-400 font-semibold mb-2">
                      {award.subtitle}
                    </p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-amber-500 fill-current" />
                      <span className="text-xs text-gray-300">{award.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Trophy */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-600 transform rotate-12 rounded-full opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative transform hover:rotate-6 transition-transform duration-500">
                  {/* Trophy Base */}
                  <div className="w-32 h-10 bg-gradient-to-r from-amber-600 to-amber-800 rounded-lg shadow-lg"></div>
                  
                  {/* Trophy Cup */}
                  <div className="relative -mt-3 mx-auto w-28 h-32 bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-500 rounded-t-full shadow-2xl">
                    <div className="absolute inset-3 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-t-full"></div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-amber-200 rounded-full opacity-70"></div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-amber-100 rounded-full opacity-50"></div>
                  </div>
                  
                  {/* Trophy Handles */}
                  <div className="absolute top-12 -left-6 w-10 h-16 border-4 border-amber-400 rounded-full"></div>
                  <div className="absolute top-12 -right-6 w-10 h-16 border-4 border-amber-400 rounded-full"></div>
                  
                  {/* Trophy Details */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-300 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-6 h-6 bg-amber-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute bottom-12 left-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute top-1/2 right-4 w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};