import React from 'react';
import { Brain, Activity, Fingerprint, BarChart, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-10 w-10 text-indigo-600" />,
    title: "Biometric Monitoring",
    description: "Wearable devices collect physiological data that serves as early indicators of sensory overload or distress."
  },
  {
    icon: <Activity className="h-10 w-10 text-indigo-600" />,
    title: "Predictive AI",
    description: "Machine learning models identify patterns and predict potential sensory triggers, allowing for proactive intervention."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-indigo-600" />,
    title: "Parent Dashboard",
    description: "Comprehensive interface providing real-time alerts, insights, and visualizations of your child's sensory status."
  },
  {
    icon: <BarChart className="h-10 w-10 text-indigo-600" />,
    title: "Data-Driven Insights",
    description: "Helps identify specific triggers and patterns to better understand your child's unique sensory needs."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How SensoryNeural Works</h2>
          <p className="section-subtitle">
            Our comprehensive AI-driven system monitors and supports children's sensory well-being through
            continuous tracking, analysis, and adaptive environmental control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-indigo-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-indigo-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-indigo-900 mb-4">
                Key Benefits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Early intervention through predictive alerts before full sensory overload
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Personalized adaptation to each child's unique sensory profile
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  IoT integration for automatic environmental adjustments
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Comprehensive support across different environments
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8187079/pexels-photo-8187079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Child using SensoryNeural wearable device" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};