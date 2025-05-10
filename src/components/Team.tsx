import React from 'react';

const teamMembers = [
  {
    name: "Dr. Godwin Mwisomba",
    role: "Psychiatrist & Clinical Lead",
    bio: "Psychiatrist specializing in child and adolescent mental health, ensuring clinical relevance, ethical practices, and effective mental health integration.",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Ryan Gichuru",
    role: "AI Research Lead",
    bio: "AI specialist proficient in machine learning, large language models (LLMs), retrieval-augmented generation (RAG), and AI frameworks including TensorFlow, PyTorch, and Scikit-Learn.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Taofeek O. Abimbolu",
    role: "Software Engineering Lead",
    bio: "Software engineering expert skilled in Python, JavaScript, C++, backend and frontend development, and user-centered design.",
    image: "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Toheeb Husain",
    role: "Full Stack Development Lead",
    bio: "Specialist in backend software development, frontend software development, app development, and IoT integrations, ensuring robust software architecture and intuitive user interfaces.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Imaan Soliman",
    role: "Systems Integration Lead",
    bio: "Specialist in app development, AI and data analytics, engineering, and hardware integration, ensuring seamless software-hardware alignment and effective data-driven decision-making.",
    image: "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-900">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
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