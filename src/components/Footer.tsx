import React from 'react';
import { Brain, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 mr-2 text-indigo-300" />
              <span className="text-2xl font-bold">SensoryNeural</span>
            </div>
            <p className="text-indigo-200 mb-4">
              Empowering neurodivergent children through AI-driven sensory support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-indigo-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#team" className="text-indigo-200 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#roadmap" className="text-indigo-200 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#faq" className="text-indigo-200 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#signup" className="text-indigo-200 hover:text-white transition-colors">Join Waitlist</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-300" />
                <a href="mailto:info@sensoryneural.uk" className="text-indigo-200 hover:text-white transition-colors">
                  info@sensoryneural.uk
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-300" />
                <a href="mailto:admin@sensoryneural.uk" className="text-indigo-200 hover:text-white transition-colors">
                  admin@sensoryneural.uk
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-indigo-300 mt-1" />
                <span className="text-indigo-200">
                  University of Northampton<br />
                  Waterside Campus, University Dr<br />
                  Northampton NN1 5PH
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-indigo-800 text-center text-indigo-400 text-sm">
          <p className="mb-4">
            SensoryNeural is a proud semi-finalist in the Elevate Great AI Competition.
          </p>
          <p>
            &copy; {new Date().getFullYear()} SensoryNeural Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};