import React from 'react';
import { Users, Briefcase, Home, GraduationCap, AlertTriangle } from 'lucide-react';

export const WhySellGold: React.FC = () => {
  const reasons = [
    { 
      icon: Users, 
      title: 'OLD AGE', 
      description: 'Senior citizens can convert unused jewelry into liquid assets',
      color: 'from-blue-400 to-blue-600' 
    },
    { 
      icon: Briefcase, 
      title: 'NEW BUSINESS', 
      description: 'Start your dream business with immediate capital from gold',
      color: 'from-green-400 to-green-600' 
    },
    { 
      icon: Home, 
      title: 'NEW HOME', 
      description: 'Use gold value as down payment for your new home',
      color: 'from-purple-400 to-purple-600' 
    },
    { 
      icon: GraduationCap, 
      title: 'EDUCATION', 
      description: 'Fund higher education with your valuable gold assets',
      color: 'from-orange-400 to-orange-600' 
    },
    { 
      icon: AlertTriangle, 
      title: 'EMERGENCY', 
      description: 'Get instant cash during medical or financial emergencies',
      color: 'from-red-400 to-red-600' 
    }
  ];

  const benefits = [
    'Awarded Most Trusted Buyer Of Gold In Delhi And NCR Region',
    'Get Instant Cash, Cheque And Online NEFT, RTGS',
    'Check Your Gold Items On The German Technology KARATMETER Machine',
    'Selling Stolen Jewellery Is a Criminal Offence',
    'It Is Mandatory To Have a Photo ID Proof & One Address Proof For Carrying Out The Transaction And You Should Be Over 21 Years Of Age'
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L50 100M0 50L100 50' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Circular Reasons Diagram */}
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-amber-300 mb-4">
                Get Cash For YOUR GOLD
              </h2>
            </div>

            {/* Central Circle */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Get Cash For</h3>
                  <h4 className="text-3xl font-bold text-amber-300">YOUR GOLD</h4>
                </div>
              </div>

              {/* Surrounding Reason Circles */}
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                const angle = (index * 360) / reasons.length - 90; // Start from top
                const x = Math.cos(angle * Math.PI / 180) * 140;
                const y = Math.sin(angle * Math.PI / 180) * 140;
                
                return (
                  <div
                    key={index}
                    className="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `50%`,
                      top: `50%`,
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer group animate-circle-rotate`}>
                      <Icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                      <p className="text-xs font-semibold text-amber-200 text-center whitespace-nowrap group-hover:text-amber-100 transition-colors duration-300">
                        {reason.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-amber-300 mb-4">
                SONA DO - PAISE LO
              </h2>
              <div className="w-24 h-1 bg-amber-400 mb-6"></div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                We Buy Gold & Silver At Live Rate
              </h3>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-amber-100 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-amber-500 hover:bg-amber-600 text-amber-900 px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
                Sell Your Gold Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};