import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Roadmap } from './components/Roadmap';
import { EmailSignup } from './components/EmailSignup';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Team />
        <Roadmap />
        <EmailSignup />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;