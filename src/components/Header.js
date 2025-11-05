import React from 'react';
import { Menu, Phone } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Запорізька обленерго" 
              className="h-12 w-auto"
            />
          </div>

          {/* Right side - Contact info */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>Передати показ</span>
              <span className="font-semibold text-gray-900">0-800-304-502</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/images/call-center.png" alt="Call center" className="h-8 w-8" />
              <span className="text-sm text-gray-600">call-center</span>
            </div>
            <div className="flex space-x-1">
              <img src="/images/payment-1.png" alt="Payment" className="h-8 w-auto" />
              <img src="/images/payment-2.png" alt="Payment" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;