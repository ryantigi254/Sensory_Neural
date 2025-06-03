import React from 'react';

const teamMembers = [
  {
    name: "Dr. Godwin Mwisomba",
    role: "Psychiatrist & Clinical Lead",
    bio: "Psychiatrist specializing in child and adolescent mental health, ensuring clinical relevance, ethical practices, and effective mental health integration.",
    image: "/img/cd765dff-8ff4-40bd-bd4b-b8555d5ea8da.JPG",
    imagePosition: "object-left-top"
  },
  {
    name: "Ryan Gichuru",
    role: "AI Research Lead",
    bio: "AI specialist proficient in machine learning, large language models (LLMs), retrieval-augmented generation (RAG), and AI frameworks including TensorFlow, PyTorch, and Scikit-Learn.",
    image: "/img/IMG_2320.jpg",
    imagePosition: "object-left scale-110"
  },
  {
    name: "Taofeek O. Abimbolu",
    role: "Software Engineering Lead",
    bio: "Software engineering expert skilled in Python, JavaScript, C++, backend and frontend development, and user-centered design.",
    image: "/img/41079fc9-a165-439f-ae74-b755beab929b.JPG",
    imagePosition: "object-bottom"
  },
  {
    name: "Toheeb Husain",
    role: "Full Stack Development Lead",
    bio: "Specialist in backend software development, frontend software development, app development, and IoT integrations, ensuring robust software architecture and intuitive user interfaces.",
    image: "/img/WhatsApp Image May 10 2025 copy.jpeg",
    imagePosition: "object-bottom scale-110"
  },
  {
    name: "Imaan Soliman",
    role: "Systems Integration Lead",
    bio: "Specialist in app development, AI and data analytics, engineering, and hardware integration, ensuring seamless software-hardware alignment and effective data-driven decision-making.",
    image: "/img/WhatsApp Image May 10 2025.jpeg",
    imagePosition: "object-bottom scale-125"
  }
];

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
          {teamMembers.map((member, index) => {
            const imageHeightClass = (member.name === "Toheeb Husain" || member.name === "Imaan Soliman") ? "h-96" : "h-80";
            return (
              <div key={index} className="bg-white rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full ${imageHeightClass} object-cover ${member.imagePosition || 'object-center'}`}
                  />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-900">{member.name}</h3>
                  <p className="text-indigo-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            );
          })}
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