import React from 'react';
import { teamProfiles } from '../lib/teamProfileData';

export const Team: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our interdisciplinary team combines expertise in pediatric psychiatry, AI engineering, 
            sensory processing, and healthcare technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamProfiles.map((member, index) => {
            const imageHeightClass = (member.name === "Toheeb A. Husain" || member.name === "Imaan Soliman") ? "h-96" : "h-80";
            return (
              <div key={index} className="bg-white rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <img 
                    src={member.profileImage}
                  alt={member.name} 
                    className={`w-full ${imageHeightClass} object-cover ${member.imagePosition || 'object-center'}`}
                />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-900">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.cardBio}</p>
                </div>
              </div>
            );
          })}
            </div>

        <div className="mt-12 text-center">
          <a 
            href="/team"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Read more about the team
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're united by a shared mission: to create technology that truly understands and adapts to the
            needs of neurodivergent children, helping them thrive in a world that's finally designed for them.
          </p>
        </div>
      </div>
    </section>
  );
};