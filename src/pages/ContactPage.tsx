import React from 'react';
import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert team for any inquiries
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}