import React from 'react';
import { Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700 mb-4">
              <Award className="h-4 w-4 mr-1" />
              <span>Finalist in the Elevate Great AI Competition</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight mb-4">
              Empowering Neurodivergent Children Through AI-Driven Sensory Support
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              90% of children with autism and sensory processing disorders experience sensory dysregulation. 
              SensoryNeural predicts and prevents sensory overload before it happens.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#signup" className="btn btn-primary text-base">
                Join the Waitlist
              </a>
              <a href="#features" className="btn btn-secondary text-base">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Child in a calming sensory environment" 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-sm font-medium text-indigo-900">
                SensoryNeural uses AI to create adaptive environments that respond to your child's changing sensory needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};