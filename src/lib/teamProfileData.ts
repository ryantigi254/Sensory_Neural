export interface ProfileSection {
  title: string;
  content: string;
}

export interface TeamMemberProfileData {
  id: string; // To be used for URL slugs or keys
  name: string;
  // title?: string; // Optional: if different from Team.tsx role
  profileImage?: string; // Optional: if different or needed here
  sections: ProfileSection[];
}

export const teamProfiles: TeamMemberProfileData[] = [
  {
    id: "ryan-gichuru",
    name: "Ryan Gichuru",
    sections: [
      {
        title: "Why I Joined SensoryNeural",
        content: "I joined SensoryNeural because leading the UniMind mental health chatbot project showed me how AI can genuinely transform lives when built with safety and empathy at its core. After achieving 100% crisis detection accuracy and seeing real students get help when they needed it most, I realised we could use the same predictive approach to prevent sensory overload in children before it happens."
      },
      {
        title: "My Relevant Experience",
        content: "I've been leading AI projects that actually help vulnerable people, not just theoretical research. With UniMind, I developed a multi-agent therapeutic system that achieved 8.2/10 user satisfaction whilst maintaining perfect safety records. I've also participated in multiple university-based research projects including warehouse optimisation work with GXO, where I applied machine learning to improve operational efficiency. I've spent months fine-tuning custom language models and building systems that need to work reliably when people depend on them."
      },
      {
        title: "What I Bring to the Team",
        content: "I bring proven experience turning complex AI concepts into working systems that people actually trust and use. My technical stack covers everything from Python and machine learning frameworks to deployment on AWS, but more importantly, I know how to lead teams through the messy reality of building AI that works. I'm handling our technical architecture, AI safety protocols, and making sure we can actually deliver what we're promising."
      },
      {
        title: "My Vision",
        content: "Success for SensoryNeural means every neurodivergent child can walk into any room, any event, any new experience without their parents worrying about a meltdown - because our AI saw it coming and quietly made everything comfortable first."
      }
    ]
  },
  {
    id: "toheeb-husain",
    name: "Toheeb A. Husain",
    sections: [
      {
        title: "Why I Joined SensoryNeural",
        content: "As a Computer Science student with a consistently innovative mindset and a deep passion for technology, I am always seeking ways to contribute positively to society's safety and well-being. Upon seeing the announcement for the Elevate Great AI competition from the AI Society—of which I am an active member—I did not perceive it merely as a competition, but as a valuable opportunity to be part of a team that strives to make a meaningful impact on people's lives through technological innovation."
      },
      {
        title: "My Relevant Experience",
        content: "Artificial Intelligence represents both the present and the future of technology. I bring relevant experience in this field: I hold a Microsoft AI certification and have gained practical experience by integrating an AI chatbot into a website. In addition, I have completed several individual projects using cutting-edge technologies such as Next.js, MySQL, and Oracle SQL, and have also collaborated on group projects with my peers."
      },
      {
        title: "What I Bring to the Team",
        content: "I consider myself a versatile and dynamic individual, capable of excelling both independently and in team environments. I possess strong soft skills, including leadership, effective communication, and the ability to motivate others—qualities that enable me to foster a collaborative and productive atmosphere within any group I am part of."
      },
      {
        title: "My Vision for SensoryNeural",
        content: "I believe that SensoryNeural has the potential to evolve beyond this competition into a viable real-world project. What the SensoryNeural team needs is the necessary support, mentorship, and funding to bring our vision and ideas to life."
      }
    ]
  },
  {
    id: "godwin-mwisomba",
    name: "Dr. Godwin Mwisomba",
    sections: [
      {
        title: "About Me",
        content: "Profile information for Dr. Godwin Mwisomba coming soon."
      },
      {
        title: "My Role in SensoryNeural",
        content: "Details about Dr. Mwisomba's contributions will be updated here."
      }
    ]
  },
  {
    id: "taofeek-abimbolu",
    name: "Taofeek O. Abimbolu",
    sections: [
      {
        title: "About Me",
        content: "Profile information for Taofeek O. Abimbolu coming soon."
      },
      {
        title: "My Role in SensoryNeural",
        content: "Details about Taofeek's contributions will be updated here."
      }
    ]
  },
  {
    id: "imaan-soliman",
    name: "Imaan Soliman",
    sections: [
      {
        title: "About Me",
        content: "Profile information for Imaan Soliman coming soon."
      },
      {
        title: "My Role in SensoryNeural",
        content: "Details about Imaan's contributions will be updated here."
      }
    ]
  }
]; 