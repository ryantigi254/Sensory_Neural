import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TeamMemberFullProfile } from './TeamMemberFullProfile';
import { teamProfiles, TeamMemberProfileData } from '../lib/teamProfileData';

// Helper function to find a profile by ID
const getProfileById = (id: string): TeamMemberProfileData | undefined => {
  return teamProfiles.find(p => p.id === id);
};

export const TeamProfilesPage: React.FC = () => {
  const { memberId } = useParams<{ memberId?: string }>();

  if (memberId) {
    const profileToShow = getProfileById(memberId);
    if (profileToShow) {
      return (
        <TeamMemberFullProfile profile={profileToShow} />
      );
    } else {
      // Invalid memberId, show profile not found
      return (
        <div className="container-custom py-20 text-center">
          <h1 className="text-3xl font-bold text-red-600">Profile not found!</h1>
          <p className="mt-4">The team member profile for ID '{memberId}' could not be located.</p>
          <Link to="/team" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg">View Team List</Link>
        </div>
      );
    }
  } else {
    // No memberId, show a list of team members
    return (
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamProfiles.map(profile => (
            <Link key={profile.id} to={`/team/${profile.id}`} className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-indigo-700 hover:text-indigo-500">{profile.name}</h2>
              {/* Optional: Add role or a short snippet here if available in teamProfiles data */}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}; 