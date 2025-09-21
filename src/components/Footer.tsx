import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full border-4 border-amber-400 p-1 bg-gradient-to-br from-amber-100 to-amber-200 shadow-lg">
                <img 
                  src="/utpfundlogo.jpeg" 
                  alt="UTP Fund Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-300">UTpFUND</h3>
                <p className="text-sm text-amber-200">WE BUY GOLD</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              India's most trusted gold buying platform with live rates, 
              instant payments, and guaranteed transparency.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Live Rates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Branches</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Gold Buying</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Silver Buying</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Diamond Buying</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Jewelry Evaluation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Instant Payment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-amber-300 mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-400">9861198611</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-400">info@utpfund.com</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-400">Delhi NCR, India</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <span className="text-gray-400">10 AM - 7 PM (7 Days)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 UTpFund. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};