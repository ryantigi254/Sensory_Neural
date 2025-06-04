import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TeamMemberFullProfile } from './TeamMemberFullProfile';
import { teamProfiles, TeamMemberProfileData } from '../lib/teamProfileData';

// Helper function to find a profile by ID
const getProfileById = (id: string | null | undefined): TeamMemberProfileData | undefined => {
  if (!id) return undefined;
  return teamProfiles.find(p => p.id === id);
};

export const TeamProfilesPage: React.FC = () => {
  const { memberId: memberIdFromUrl } = useParams<{ memberId?: string }>();
  const navigate = useNavigate();

  const currentProfile = getProfileById(memberIdFromUrl);

  // Handle invalid memberId in URL by redirecting to /team
  useEffect(() => {
    if (memberIdFromUrl && !currentProfile) {
      navigate('/team', { replace: true });
    }
  }, [memberIdFromUrl, currentProfile, navigate]);

  if (memberIdFromUrl) {
    if (currentProfile) {
      // Display individual profile page
      return (
        <div className="container-custom py-12">
          <TeamMemberFullProfile profile={currentProfile} />
          <div className="mt-8 text-center">
            <Link 
              to="/team"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              &larr; Back to Team List
            </Link>
          </div>
        </div>
      );
    } else {
      // This case should ideally be handled by the useEffect redirect,
      // but as a fallback, show a loading/not found message.
      return (
        <div className="container-custom py-20 text-center">
          <h1 className="text-3xl font-bold text-yellow-600">Profile not found</h1>
          <p className="mt-4">Redirecting to team list...</p>
        </div>
      );
    }
  }

  // Display the grid of team members if no memberIdFromUrl (i.e., on /team)

  // Create a new array with the desired order for team members
  const sortedProfiles: TeamMemberProfileData[] = [];
  const memberIdsInOrder = [
    "godwin-mwisomba",
    "ryan-gichuru",
    "taofeek-abimbolu",
    "imaan-soliman",
    "toheeb-husain"
  ];

  memberIdsInOrder.forEach(id => {
    const profile = teamProfiles.find(p => p.id === id);
    if (profile) {
      sortedProfiles.push(profile);
    }
  });

  // Fallback for any members not in memberIdsInOrder (though ideally all should be)
  teamProfiles.forEach(p => {
    if (!sortedProfiles.find(sp => sp.id === p.id)) {
      sortedProfiles.push(p);
    }
  });

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
        {sortedProfiles.map(profile => {
          const imageHeightClass = (profile.name === "Toheeb A. Husain" || profile.name === "Imaan Soliman") ? "h-96" : "h-80";
          
          return (
            <div key={profile.id} className="bg-white rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <img 
                src={profile.profileImage} 
                alt={profile.name} 
                className={`w-full ${imageHeightClass} object-cover ${profile.imagePosition || 'object-center'}`}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-indigo-900">{profile.name}</h3>
                <p className="text-indigo-600 mb-2">{profile.role}</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{profile.cardBio}</p>
                <Link
                  to={`/team/${profile.id}`}
                  className="mt-auto inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg text-sm text-center"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 