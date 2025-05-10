import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

type UserType = 'parent' | 'healthcare' | 'educator' | 'researcher' | 'other';

export const EmailSignup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<UserType>('parent');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          {
            name: name.trim(),
            email: email.trim(),
            user_type: userType
          }
        ]);

      if (supabaseError) {
        if (supabaseError.code === '23505') { // Unique violation
          setError('This email is already on the waitlist');
        } else {
          setError('An error occurred. Please try again.');
        }
        return;
      }

      setIsSubmitted(true);
      setName('');
      setEmail('');
      setUserType('parent');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="signup" className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Join the Waitlist for Early Access</h2>
          <p className="text-lg opacity-90 mb-8">
            Be the first to experience SensoryNeural and receive exclusive updates on our development journey.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="opacity-90">
                You've been added to our waitlist. We'll keep you updated on our progress and let you know when early access becomes available.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
              {error && (
                <div className="bg-red-500/20 text-white p-4 rounded-lg mb-6">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium opacity-90 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Jane Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium opacity-90 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="jane@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="userType" className="block text-sm font-medium opacity-90 mb-2">I am a...</label>
                  <select
                    id="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value as UserType)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <option value="parent" className="text-gray-800">Parent/Caregiver</option>
                    <option value="healthcare" className="text-gray-800">Healthcare Provider</option>
                    <option value="educator" className="text-gray-800">Educator</option>
                    <option value="researcher" className="text-gray-800">Researcher</option>
                    <option value="other" className="text-gray-800">Other</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn bg-white text-indigo-700 hover:bg-indigo-100 focus:ring-white w-full py-3"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 mr-3 text-indigo-700" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Join the Waitlist"}
                </button>
              </div>
              
              <p className="text-xs opacity-70 mt-4">
                By signing up, you agree to our Privacy Policy and Terms of Service. We'll never share your information without your permission.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};