import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming React Router for dynamic segments
import { TeamMemberFullProfile } from './TeamMemberFullProfile';
import { teamProfiles, TeamMemberProfileData } from '../lib/teamProfileData';
import { Navbar } from './Navbar'; // Assuming a Navbar component exists
import { Footer } from './Footer'; // Assuming a Footer component exists

// Helper function to find a profile by ID
const getProfileById = (id: string): TeamMemberProfileData | undefined => {
  return teamProfiles.find(p => p.id === id);
};

export const TeamProfilesPage: React.FC = () => {
  const { memberId } = useParams<{ memberId?: string }>();

  // Determine which profile to show
  // If no memberId, or memberId is invalid, show Ryan's by default or a not found message.
  // For now, defaults to Ryan's profile if no ID or ID not found.
  let profileToShow: TeamMemberProfileData | undefined;

  if (memberId) {
    profileToShow = getProfileById(memberId);
  }

  // Fallback or default profile
  if (!profileToShow) {
    profileToShow = getProfileById('ryan-gichuru'); // Default to Ryan's profile
  }
  
  // If still no profile (e.g., ryan-gichuru was not found for some reason), show error or redirect
  if (!profileToShow) {
    return (
      <>
        <Navbar />
        <div className="container-custom py-20 text-center">
          <h1 className="text-3xl font-bold text-red-600">Profile not found!</h1>
          <p className="mt-4">The requested team member profile could not be located.</p>
          <a href="/" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg">Go to Homepage</a>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <TeamMemberFullProfile profile={profileToShow} />
      <Footer />
    </>
  );
}; 