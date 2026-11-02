import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Is Remote Viewing scientifically validated or just pseudoscience?',
    answer: 'Remote Viewing is the most heavily scrutinized anomalous cognition protocol in scientific history. Developed between 1972 and 1995 at Stanford Research Institute (SRI) under CIA and DIA sponsorship (Project Stargate), researchers including physicists Russell Targ and Harold Puthoff published their findings in peer-reviewed journals such as Nature and IEEE Proceedings. The protocol was specifically designed to eliminate telepathic leakage, subliminal cues, and subjective validation through rigorous double-blind screening.',
  },
  {
    question: 'Do I need special psychic ability or prior meditation experience to begin?',
    answer: 'No. The entire premise of Ingo Swann\'s Coordinate Remote Viewing (CRV) protocol is that the autonomic nervous system already registers non-local signal instinctively. The training does not require "psychic gifts"—instead, it trains you to silence Analytical Overlay (AOL), prevent premature cognitive naming, and record raw physical textures before your ego invents a story.',
  },
  {
    question: 'How does the double-blind 4-way decoy scoring work mathematically?',
    answer: 'In each trial, the target is referenced only by an arbitrary 8-digit coordinate unknown to both you and the interface. Once you finish recording your ideogram and sensory matrix, Skry presents the true target alongside three randomized decoy locations. Because there are four possible targets, selecting by random chance yields an expected hit rate of exactly 25.0%. Consistently scoring above 35–45% across repeated sessions provides statistically significant evidence of non-local signal transfer.',
  },
  {
    question: 'Is a credit card required to use the training app?',
    answer: 'No credit card is ever required for the core training laboratory. You can immediately launch the app, generate coordinates, use the somatosensory canvas, take advantage of binaural audio entrainment, and evaluate your sessions for free.',
  },
  {
    question: 'What is the Companion Manual and what do I get with it?',
    answer: 'The Companion Manual is "SCRY: A Journey Through Dimensions" by Malychite—a 73-page illustrated monograph that breaks down coordinate psychology, ideogram mechanics, sensory calibration exercises, and a structured 30-day training curriculum. Purchasing the manual for a one-time fee of $19 includes immediate PDF download access plus one month of included full app membership with curriculum tracking.',
  },
  {
    question: 'Where is my session data stored and is my training history private?',
    answer: 'Your privacy is paramount. Your sketches, sensory selections, and score journals are stored locally in your browser storage. No session data is sold, monetized, or shared with third parties.',
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="py-20 px-4 sm:px-8 border-b border-white/5 bg-[#070815]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Answers to common questions regarding scientific rigor, scoring mathematics, and how to get started.
          </p>
        </div>

        {/* Keyboard Accessible FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group p-5 rounded-2xl bg-[#0d1022] border border-white/10 open:border-teal-500/30 transition-colors focus-within:ring-2 focus-within:ring-teal-400/50"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif text-base sm:text-lg font-medium text-white group-hover:text-teal-300 transition-colors focus:outline-none">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-teal-400 shrink-0 ml-4" />
              </summary>
              <div className="pt-4 text-slate-300 text-xs sm:text-sm leading-relaxed font-light border-t border-white/5 mt-4">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
