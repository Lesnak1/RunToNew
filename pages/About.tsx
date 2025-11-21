import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Target, Heart } from 'lucide-react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 flex flex-col gap-16 bg-light dark:bg-dark">
      
      {/* Intro */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 dark:text-white mb-6">
            Welcome to Run To New Travel
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We are a Fethiye-based travel agency passionate about sharing the beauty of our home. 
            We specialize in tailored tours and excursions, providing stress-free and enjoyable 
            travel experiences from start to finish.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={IMAGES.team} 
              alt="Our Team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Born from a love for Fethiye's stunning landscapes and rich culture, Run To New Travel was founded 
              by a group of local experts. We wanted to share the authentic beauty of our home, moving beyond 
              typical tourist trails to offer truly memorable experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Today, we are proud to be the trusted partner for hundreds of travelers seeking reliability, 
              comfort, and a touch of local magic.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-dark-card p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400">
              To provide seamless, personalized, and unforgettable travel adventures in Fethiye that create lasting memories for every guest.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-card p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Values</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Local expertise, customer-first approach, safety, and a deep commitment to sustainable and responsible tourism.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <Rocket size={48} className="mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Ready for an Adventure?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Let our local experts craft the perfect Fethiye experience for you. 
              Explore our curated tours and start planning today.
            </p>
            <Link 
              to="/tours" 
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Our Tours
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
