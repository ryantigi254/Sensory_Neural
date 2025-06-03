import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TeamMemberFullProfile } from './TeamMemberFullProfile';
import { teamProfiles, TeamMemberProfileData } from '../lib/teamProfileData';

// Helper function to find a profile by ID
const getProfileById = (id: string | null | undefined): TeamMemberProfileData | undefined => {
  if (!id) return undefined;
  return teamProfiles.find(p => p.id === id);
};

export const TeamProfilesPage: React.FC = () => {
  const { memberId: memberIdFromUrl } = useParams<{ memberId?: string }>();
  const [expandedId, setExpandedId] = useState<string | null>(memberIdFromUrl || null);
  const navigate = useNavigate();

  useEffect(() => {
    // If URL has a memberId, ensure it's the one expanded.
    // If not, and expandedId is set (e.g. from a previous direct URL visit then navigating back to /team),
    // clear it or update URL if we want to sync URL with expansion on /team page.
    // For now, if URL is /team, we primarily rely on clicks to set expandedId.
    // If memberIdFromUrl changes (e.g. user navigates directly), update expandedId.
    if (memberIdFromUrl) {
      setExpandedId(memberIdFromUrl);
    } else {
      // If on /team page and an ID was expanded (perhaps from direct URL then back), 
      // clicking a card will set expandedId. If nothing is expanded, expandedId is null.
      // No specific action needed here to clear expandedId if user lands on /team without memberId in URL,
      // unless we want to explicitly clear any prior state not tied to URL.
    }
  }, [memberIdFromUrl]);

  const handleCardClick = (profileId: string) => {
    const newExpandedId = expandedId === profileId ? null : profileId;
    setExpandedId(newExpandedId);
    // If we are on the /team page, and we expand a profile, update the URL
    // If we close an expansion, go back to /team
    if (!memberIdFromUrl) { 
      if (newExpandedId) {
        navigate(`/team/${newExpandedId}`, { replace: true });
      } else {
        navigate('/team', { replace: true });
      }
    }
  };

  // If memberId is present in the URL, we *must* show this profile.
  // This takes precedence and represents the direct navigation case.
  if (memberIdFromUrl) {
    const profileToShow = getProfileById(memberIdFromUrl);
    if (profileToShow) {
      // Render the single profile view, which might include a way to go back or see others
      return (
        <div className="container-custom py-12">
          <TeamMemberFullProfile profile={profileToShow} />
          <div className="text-center mt-8">
            <Link to="/team" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Back to Team List
            </Link>
          </div>
        </div>
      );
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

  // If no memberId in URL, we are on the main /team page.
  // Display all cards, and an expanded profile if one is selected via `expandedId` (which is synced with URL clicks).
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">Meet Our Team</h1>
      <div className="flex flex-col items-center gap-10">
        {teamProfiles.map(profile => {
          const imageHeightClass = (profile.name === "Toheeb A. Husain" || profile.name === "Imaan Soliman") ? "h-96" : "h-80";
          const isExpanded = expandedId === profile.id;

          return (
            <div key={profile.id} className="w-full max-w-2xl">
              <div 
                className={`bg-white rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer ${isExpanded ? 'ring-4 ring-indigo-500 ring-offset-2' : ''}`}
                onClick={() => handleCardClick(profile.id)}
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

              {isExpanded && (
                <div className="mt-1 pt-0 bg-white rounded-b-xl shadow-2xl overflow-hidden">
                  {/* Added a slight negative margin-top to connect visually if desired, or adjust padding below */}
                  <div className="border-t border-gray-200">
                    <TeamMemberFullProfile profile={profile} />
                    {/* The close button is implicitly handled by clicking the card again or another card */}
                    {/* Or, if direct navigation to /team happens, expandedId will clear if not in URL */}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}; 