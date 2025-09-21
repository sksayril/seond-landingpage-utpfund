import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, MapPin, Star } from 'lucide-react';

// Custom hook for animated counter
const useAnimatedCounter = (end: number, duration: number = 2000, startAnimation: boolean = false) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!startAnimation) return;

    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = 0;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress >= 1) {
        clearInterval(timer);
        setIsAnimating(false);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, duration, startAnimation]);

  return { count, isAnimating };
};

export const Statistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Users,
      targetValue: 1560638,
      suffix: '+',
      label: 'HAPPY CUSTOMERS',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      targetValue: 3,
      suffix: '+',
      label: 'AWARDS',
      color: 'text-amber-500'
    },
    {
      icon: MapPin,
      targetValue: 44,
      suffix: '',
      label: 'BRANCHES',
      color: 'text-green-500'
    },
    {
      icon: Star,
      targetValue: 4.9,
      suffix: '/5',
      label: 'RATING',
      color: 'text-purple-500',
      isDecimal: true
    }
  ];

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const { count } = useAnimatedCounter(
              stat.targetValue, 
              2500 + (index * 500), // Staggered animation timing
              isVisible
            );
            
            const displayValue = stat.isDecimal 
              ? count.toFixed(1) 
              : count.toLocaleString();
            
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Icon Background */}
                  <div className="w-20 h-20 mx-auto bg-amber-100 bg-opacity-80 rounded-full flex items-center justify-center mb-4 group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <Icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-3">
                  <h3 className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {displayValue}{stat.suffix}
                  </h3>
                  <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-gray-700 tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Content */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-amber-700 mb-4">
            Trusted by Millions Across India
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over 15 lakh satisfied customers and a 4.9-star rating, 
            UTpFund has become India's most trusted gold buying platform.
          </p>
        </div>
      </div>
    </section>
  );
};