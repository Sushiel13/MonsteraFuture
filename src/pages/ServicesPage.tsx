import React from 'react';
import { Services } from '../components/Services';

export function ServicesPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive import and export solutions tailored to your business needs
          </p>
        </div>
        <Services />
      </div>
    </div>
  );
}