import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    // Sync expandedId with the memberId from the URL when the component mounts or URL changes.
    setExpandedId(memberIdFromUrl || null);
  }, [memberIdFromUrl]);

  const handleCardClick = (profileId: string) => {
    const newExpandedId = expandedId === profileId ? null : profileId;
    setExpandedId(newExpandedId);
    if (newExpandedId) {
      navigate(`/team/${newExpandedId}`, { replace: true });
    } else {
      navigate('/team', { replace: true });
    }
  };
  
  // Check if the memberIdFromUrl is valid. If not, and a URL was provided, 
  // redirect to /team to clear the invalid memberId from URL and show the list.
  // This also handles the case where an invalid ID might have been in expandedId state initially.
  if (memberIdFromUrl && !getProfileById(memberIdFromUrl)) {
    useEffect(() => {
      navigate('/team', { replace: true });
    }, [navigate]); // navigate dependency to avoid stale closure
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold text-yellow-600">Redirecting...</h1>
        <p className="mt-4">Invalid team member ID in URL. Returning to team list.</p>
      </div>
    );
  }

  // Always render the list of team members. 
  // The `expandedId` state (synced with URL) determines which profile is shown expanded.
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {teamProfiles.map(profile => {
          const imageHeightClass = (profile.name === "Toheeb A. Husain" || profile.name === "Imaan Soliman") ? "h-96" : "h-80";
          const isExpanded = expandedId === profile.id;

          return (
            <div key={profile.id} className="flex flex-col">
              <div 
                className={`bg-white rounded-xl shadow-2xl transition-all duration-300 overflow-hidden ${isExpanded ? 'ring-4 ring-indigo-500 ring-offset-2' : 'hover:shadow-2xl'}`}
              >
                <img 
                  src={profile.profileImage} 
                  alt={profile.name} 
                  className={`w-full ${imageHeightClass} object-cover ${profile.imagePosition || 'object-center'}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-900">{profile.name}</h3>
                  <p className="text-indigo-600 mb-2">{profile.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{profile.cardBio}</p>
                  <button
                    onClick={() => handleCardClick(profile.id)}
                    className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    {isExpanded ? 'Hide details' : 'Read more'}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="mt-4 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                  <TeamMemberFullProfile profile={profile} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}; 