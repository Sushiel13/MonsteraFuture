import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Monstera Future</h3>
            <p className="text-gray-400">
              Your trusted partner in global trade and logistics solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +91 99607 97128
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                monsterafuture@outlook.com
              </p>
              <p className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Pune, India
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Monstera Future. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}