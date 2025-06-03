import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Roadmap } from './components/Roadmap';
import { EmailSignup } from './components/EmailSignup';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { GamifiedQuests } from './components/GamifiedQuests';
import { TeamProfilesPage } from './components/TeamProfilesPage';

// A new component to represent your main page layout
const MainPageLayout = () => (
  <>
    <Hero />
    <Features />
    <GamifiedQuests />
    <Team />
    <Roadmap />
    <EmailSignup />
    <Faq />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPageLayout />} />
            <Route path="/team" element={<TeamProfilesPage />} />
            <Route path="/team/:memberId" element={<TeamProfilesPage />} />
            {/* Add a catch-all route for 404 if desired, or handle it within TeamProfilesPage for /team/* paths */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;