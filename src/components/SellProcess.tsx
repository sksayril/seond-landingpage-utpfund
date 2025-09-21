import React from 'react';
import { HandCoins, TestTube, Banknote, ArrowRight } from 'lucide-react';

export const SellProcess: React.FC = () => {
  const steps = [
    {
      icon: HandCoins,
      step: 'STEP 1',
      title: 'Bring Any Gold, Silver Or Diamonds Items',
      description: 'Bring your old or unwanted gold jewelry, coins, or any gold items to our store.',
      image: 'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: TestTube,
      step: 'STEP 2',
      title: 'Our Karat Meter Testing',
      description: 'We use German technology KARATMETER machine for accurate gold purity testing.',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Banknote,
      step: 'STEP 3',
      title: 'Get Instant Cash, Cheque, NEFT, RTGS',
      description: 'Receive instant payment through cash, cheque, or direct bank transfer.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sell Your Gold In 3 Easy Steps
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden border border-gray-700">
                  {/* Background Circle */}
                  <div className="absolute top-4 right-4 w-32 h-32 bg-amber-600 rounded-full opacity-10 transform translate-x-8 -translate-y-8"></div>
                  
                  {/* Step Number */}
                  <div className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-amber-600 bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* 3D Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Arrow Between Steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
            Start Selling Process
          </button>
        </div>
      </div>
    </section>
  );
};