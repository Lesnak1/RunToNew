import React from 'react';
import { Users, Heart, Globe, Shield } from 'lucide-react';
import { IMAGES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 dark:text-white mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
            <img
              src={IMAGES.boat}
              alt="Run To New Team"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-white mb-6">{t.about.storyTitle}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {t.about.story}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.about.storyEnd}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.about.missionTitle}</h3>
            <p className="text-slate-600 dark:text-slate-400">
              {t.about.mission}
            </p>
          </div>
          <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.about.valuesTitle}</h3>
            <p className="text-slate-600 dark:text-slate-400">
              {t.about.values}
            </p>
          </div>
          <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.features.localExpertise}</h3>
            <p className="text-slate-600 dark:text-slate-400">
              {t.features.localExpertiseDesc}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">{t.about.ctaTitle}</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t.about.ctaDesc}
            </p>
            <a
              href="/tours"
              className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.about.ctaButton}
            </a>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
