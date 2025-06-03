import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TeamMemberFullProfile } from './TeamMemberFullProfile';
import { teamProfiles, TeamMemberProfileData } from '../lib/teamProfileData';

// Helper function to find a profile by ID
const getProfileById = (id: string | null | undefined): TeamMemberProfileData | undefined => {
  if (!id) return undefined;
  return teamProfiles.find(p => p.id === id);
};

export const TeamProfilesPage: React.FC = () => {
  const { memberId: memberIdFromUrl } = useParams<{ memberId?: string }>();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // If memberId is present in the URL, show that profile directly and ignore expansion state
  if (memberIdFromUrl) {
    const profileToShow = getProfileById(memberIdFromUrl);
    if (profileToShow) {
      return <TeamMemberFullProfile profile={profileToShow} />;
    } else {
      return (
        <div className="container-custom py-20 text-center">
          <h1 className="text-3xl font-bold text-red-600">Profile not found!</h1>
          <p className="mt-4">The team member profile for ID '{memberIdFromUrl}' could not be located.</p>
          <Link to="/team" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg">View Team List</Link>
        </div>
      );
    }
  }

  // If no memberId in URL, we are on the /team page - show grid and handle expansion
  const expandedProfile = getProfileById(expandedId);

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {teamProfiles.map(profile => {
          const imageHeightClass = (profile.name === "Toheeb A. Husain" || profile.name === "Imaan Soliman") ? "h-96" : "h-80";
          return (
            <div 
              key={profile.id} 
              className={`bg-white rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer ${expandedId === profile.id ? 'ring-4 ring-indigo-500 ring-offset-2' : ''}`}
              onClick={() => setExpandedId(expandedId === profile.id ? null : profile.id)}
            >
              <img 
                src={profile.profileImage} 
                alt={profile.name} 
                className={`w-full ${imageHeightClass} object-cover ${profile.imagePosition || 'object-center'}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-900">{profile.name}</h3>
                <p className="text-indigo-600 mb-2">{profile.role}</p>
                <p className="text-gray-600 text-sm">{profile.cardBio}</p>
              </div>
            </div>
          );
        })}
      </div>

      {expandedProfile && (
        <div className="mt-12 pt-8 border-t border-gray-300">
          <TeamMemberFullProfile profile={expandedProfile} />
          {/* Button to close the expanded view */} 
          <div className="text-center mt-8">
            <button 
              onClick={() => setExpandedId(null)} 
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 