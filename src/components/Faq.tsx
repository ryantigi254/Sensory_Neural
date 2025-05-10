import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "How does SensoryNeural work?",
    answer: "SensoryNeural uses wearable biometric sensors to collect data on heart rate variability, galvanic skin response, and movement patterns. Our AI algorithms analyze this data in real-time to predict potential sensory overload before visible signs appear. The system then communicates with smart home devices to automatically adjust environmental factors like lighting, sound, and temperature to maintain optimal sensory conditions for your child."
  },
  {
    question: "Is it safe for young children?",
    answer: "Absolutely. Safety is our top priority. Our wearable devices are designed specifically for children aged 0-5, using hypoallergenic materials and child-safe design principles. The sensors are non-invasive and comfortable to wear. All our products undergo rigorous testing to meet or exceed safety standards for children's products."
  },
  {
    question: "When will SensoryNeural be available?",
    answer: "SensoryNeural is currently in the development and testing phase. We're participating in the Elevate Great AI Competition, and pending our success there, we expect to launch a limited beta testing program in Q4 2025, followed by a wider release in early 2026. By joining our waitlist, you'll be among the first to know when early access becomes available."
  },
  {
    question: "How is this different from existing sensory tools?",
    answer: "Unlike traditional sensory tools that react to visible signs of distress or require manual adjustment, SensoryNeural is proactive and automated. Our system predicts sensory needs before visible symptoms appear, automatically adjusts the environment, and continuously learns your child's unique sensory profile. This shifts the paradigm from reactive management to preventative support, potentially avoiding sensory overload altogether."
  },
  {
    question: "Will this replace therapies my child currently receives?",
    answer: "No, SensoryNeural is designed to complement, not replace, professional therapies. Our system enhances human care by providing consistent support between therapy sessions and gathering valuable data that can inform therapeutic approaches. We encourage collaboration with your child's healthcare providers, and our platform includes features for sharing insights with your child's care team."
  },
  {
    question: "How does SensoryNeural protect my child's privacy?",
    answer: "We take privacy extremely seriously, especially when it comes to children's data. SensoryNeural employs end-to-end encryption, anonymous data processing techniques, and strict access controls. Personal identifying information is kept separate from biometric data, and parents have complete control over what data is collected and who can access it. We comply with all relevant privacy regulations including COPPA and GDPR."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-indigo-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about SensoryNeural and how it can support your child.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-medium text-indigo-900">{item.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
            <a 
              href="mailto:info@sensoryneural.com" 
              className="btn btn-secondary inline-flex items-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};