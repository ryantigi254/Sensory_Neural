import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const GamifiedQuests: React.FC = () => (
  <section id="gamified-quests" className="scroll-section py-16">
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-900 flex items-center">
          <span className="mr-2 text-4xl animate-bounce">⭐️</span>
          Play that Builds Skills
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Introducing <strong>Lunar Jump</strong>: a gentle adventure prototype where the Star Child bounces on a low-gravity trampoline across moonlit craters.<br />
          A sensory-friendly cosmic journey in soft pastel skies.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="list-none space-y-4 text-gray-800">
              {[
                ["Lunar Jump", "match gentle beats to guide the Star Child on a low-gravity trampoline across moonlit craters."],
                ["Luminous Toy Hunt", "collect glowing plushies, arrange them in the Starlight Workshop."],
                ["Co-op Cloud Rescue", "invite a peer or carer to co-pilot, practising turn-taking."],
                ["Quiet Breath Quest", "watch colours soften as the child's heart-rate steadies."]
              ].map(([title, desc], i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block mt-1 mr-3 w-3 h-3 bg-indigo-300 rounded-full animate-pulse" />
                  <span><strong>{title}</strong> – {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-800">
              Our AI engine uses wearable sensors to spot rising heart-rate or changes in skin response. When stress signs appear, the game slows down, pastel colours soften, or a gentle "Let's breathe" voice-over invites a calming pause.
            </p>
            <p className="mt-4 text-gray-800">
              Parents and educators can access a caregiver dashboard with clear progress charts and stress-trigger logs. Track engagement time per quest, view gentle alerts when heart-rate rises, and get simple summaries to support personalised learning and emotional growth.
            </p>
            <span className="note text-sm text-gray-500">GDPR-compliant data, child agency, EU AI Act alignment.</span>
          </div>
          <div className="flex items-center justify-center">
            <Player
              src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
              loop
              autoplay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
); 