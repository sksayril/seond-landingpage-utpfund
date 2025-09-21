import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GoldBiscuits: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);

  const goldImages = [
    {
      src: '/gold-biscuits-1631193341-5983877.jpeg',
      alt: 'Premium Gold Biscuits Collection',
      title: 'Premium Gold Biscuits',
      description: 'High-quality 999.9 pure gold biscuits'
    },
    {
      src: '/goldbiscuitimage.jpg',
      alt: 'Gold Biscuit Investment',
      title: 'Investment Gold',
      description: 'Perfect for investment and wealth preservation'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % goldImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goldImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % goldImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + goldImages.length) % goldImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-600 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-amber-500 rounded-full opacity-5 animate-bounce"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Premium Gold Biscuits
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Invest in the finest quality gold biscuits with guaranteed purity
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-800">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {goldImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 md:h-[500px] flex items-center justify-center bg-gray-800">
                    {/* Loading State */}
                    {!imageLoaded[index] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                        imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageLoad(index)}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-200 mb-4">
                        {image.description}
                      </p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="bg-amber-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base">
                          999.9 Pure Gold
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base">
                          Investment Grade
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {goldImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-amber-600 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">999.9</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Highest Purity</h3>
            <p className="text-gray-300">Guaranteed 999.9 pure gold content</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">24K</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">24 Karat Gold</h3>
            <p className="text-gray-300">Premium quality investment grade gold</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certified</h3>
            <p className="text-gray-300">Hallmarked and certified authenticity</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
            View Gold Biscuits Collection
          </button>
        </div>
      </div>
    </section>
  );
};
