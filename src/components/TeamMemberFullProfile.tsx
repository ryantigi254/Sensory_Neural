import React from 'react';
import { TeamMemberProfileData, ProfileSection } from '../lib/teamProfileData';

interface TeamMemberFullProfileProps {
  profile: TeamMemberProfileData;
}

const SectionCard: React.FC<{ section: ProfileSection }> = ({ section }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-4">{section.title}</h2>
    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
      {section.content}
    </p>
  </div>
);

export const TeamMemberFullProfile: React.FC<TeamMemberFullProfileProps> = ({ profile }) => {
  // Find the original team member data to get their role and image if not in profile data
  // This part would ideally fetch from a shared data source or have roles/images in teamProfileData
  // For now, we'll just display the name from the profile prop.

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <header className="text-center mb-12 md:mb-16">
          {/* Optional: Add profile image here if available */}
          {/* <img src={profile.profileImage || '/img/default-avatar.png'} alt={profile.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-xl" /> */}
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">
            {profile.name}
          </h1>
          {/* Optional: Display role here if available */}
          {/* <p className="text-xl md:text-2xl text-indigo-600">{profile.title || 'Team Member'}</p> */}
        </header>

        <div className="max-w-3xl mx-auto">
          {profile.sections.map((section, index) => (
            <SectionCard key={index} section={section} />
          ))}
        </div>

        {/* Optional: Add a button to go back to the main team page */}
        {/* <div className="mt-12 text-center"> */}
        {/*   <a href="/team" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Back to Team</a> */}
        {/* </div> */}
      </div>
    </div>
  );
}; 