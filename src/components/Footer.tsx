import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Blue Sentry AI</span>
            </div>
            <p className="text-gray-400">
              Protecting our oceans through innovative AI solutions
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@bluesentryai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <Link to = "/mission">
              <li><a href="#mission" className="hover:text-blue-400">Our Mission</a></li>
              </Link>
              <Link to = "/solution">
              <li><a href="#solution" className="hover:text-blue-400">Solution</a></li>
              </Link>
              <Link to = "/services">
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              </Link>
              <Link to = "/impact">
              <li><a href="#impact" className="hover:text-blue-400">Impact</a></li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest developments</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blue Sentry AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}