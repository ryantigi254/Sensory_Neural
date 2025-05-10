import React from 'react';

const milestones = [
  {
    date: "Q2 2025",
    title: "Research & Development",
    description: "Sensor development, algorithm training, and initial prototyping.",
    isActive: true,
    isCompleted: true
  },
  {
    date: "Q3 2025",
    title: "Elevate Great AI Competition Finals",
    description: "SensoryNeural competing as a finalist with live demonstration.",
    isActive: true,
    isCompleted: false
  },
  {
    date: "Q4 2025",
    title: "Beta Testing Program",
    description: "Limited release to select families and clinical partners.",
    isActive: false,
    isCompleted: false
  },
  {
    date: "Q1 2026",
    title: "Product Launch",
    description: "Initial commercial release and expanded availability.",
    isActive: false,
    isCompleted: false
  }
];

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Development Timeline</h2>
          <p className="section-subtitle">
            Follow our journey as we develop and refine SensoryNeural to support neurodivergent children and their families.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-indigo-200"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Content for left side on desktop (even indexes) */}
                    {index % 2 === 0 && (
                      <div className="hidden md:block md:w-1/2 pr-12"></div>
                    )}
                    
                    {/* Dot indicator */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                      <div className={`w-6 h-6 rounded-full border-4 ${
                        milestone.isCompleted ? 'bg-green-500 border-green-200' : 
                        milestone.isActive ? 'bg-indigo-500 border-indigo-200' : 
                        'bg-gray-300 border-gray-100'
                      }`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`pl-10 md:pl-0 ${index % 2 === 0 ? 'md:w-1/2' : 'md:w-1/2 md:pl-12'}`}>
                      <div className={`bg-white rounded-xl p-6 shadow-md border ${
                        milestone.isCompleted ? 'border-green-200' : 
                        milestone.isActive ? 'border-indigo-200' : 
                        'border-gray-200'
                      }`}>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          milestone.isCompleted ? 'bg-green-100 text-green-800' : 
                          milestone.isActive ? 'bg-indigo-100 text-indigo-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {milestone.date}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Content for right side on desktop (odd indexes) */}
                    {index % 2 !== 0 && (
                      <div className="hidden md:block md:w-1/2"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};