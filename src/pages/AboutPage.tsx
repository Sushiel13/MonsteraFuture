import React from 'react';
import { Building, Users, Target, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Monstera Future
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in global trade solutions with expertise, reliability, and innovation.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Building className="h-12 w-12 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Company</h2>
              <p className="mt-2 text-gray-600">
                Founded with a vision to revolutionize international trade, Monstera Future has grown
                into a trusted name in import-export services across the globe.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Users className="h-12 w-12 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
              <p className="mt-2 text-gray-600">
                Our experienced professionals bring decades of combined expertise in international
                trade, logistics, and customer service.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Target className="h-12 w-12 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-2 text-gray-600">
                To facilitate seamless global trade by providing innovative solutions and exceptional
                service to our clients worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Award className="h-12 w-12 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
              <p className="mt-2 text-gray-600">
                Integrity, excellence, and customer satisfaction are at the core of everything we do,
                driving our commitment to quality service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}