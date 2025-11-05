import React from 'react';
import { Calendar } from 'lucide-react';

function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 py-4">
          <a 
            href="#" 
            className="text-brand-blue hover:text-blue-600 font-medium text-lg px-4 py-2 rounded-md transition-colors"
          >
            Населенню
          </a>
          <a 
            href="#" 
            className="text-brand-red hover:text-red-700 font-medium text-lg px-4 py-2 rounded-md transition-colors flex items-center space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Графіки відключень</span>
          </a>
          <a 
            href="#" 
            className="text-brand-yellow hover:text-yellow-600 font-medium text-lg px-4 py-2 rounded-md transition-colors"
          >
            Підприємствам
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;