import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { Tour } from '../types';
import TourCard from '../components/TourCard';
import { Filter } from 'lucide-react';

// Expanded tour data with centralized images
const ALL_TOURS: Tour[] = [
  {
    id: '1',
    title: 'Paragliding Adventure',
    description: 'Soar above the famous Blue Lagoon. Photos and video service available.',
    image: IMAGES.paragliding,
    duration: '2 Hours',
    category: 'Adrenaline',
    isBestSeller: true
  },
  {
    id: '2',
    title: 'Private Boat Trip',
    description: 'Explore hidden coves, crystal clear waters, and secluded islands.',
    image: IMAGES.boat,
    duration: 'Full Day',
    category: 'Boat',
    isBestSeller: true
  },
  {
    id: '3',
    title: 'Saklıkent Gorge Safari',
    description: 'Hike through the gorge, visit Tlos ruins, and enjoy a riverside lunch.',
    image: IMAGES.canyon,
    duration: '8 Hours',
    category: 'Nature'
  },
  {
    id: '4',
    title: 'Butterfly Valley Cruise',
    description: 'A classic boat tour visiting Butterfly Valley, St. Nicholas Island and more.',
    image: IMAGES.butterflyValley,
    duration: 'Full Day',
    category: 'Boat'
  },
  {
    id: '5',
    title: 'Dalyan Mud Baths & Turtles',
    description: 'River cruise, ancient tombs, mud baths and Caretta Caretta turtles.',
    image: IMAGES.dalyan,
    duration: 'Full Day',
    category: 'History'
  },
  {
    id: '6',
    title: 'Sunset Cruise',
    description: 'Romantic evening on the Mediterranean with dinner included.',
    image: IMAGES.sunset,
    duration: '4 Hours',
    category: 'Boat'
  }
];

const CATEGORIES = ['All', 'Boat', 'Adrenaline', 'History', 'Nature'];

const Tours: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTours = activeCategory === 'All' 
    ? ALL_TOURS 
    : ALL_TOURS.filter(t => t.category === activeCategory);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light dark:bg-dark">
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 dark:text-white mb-4">
          Explore Fethiye
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          From high-adrenaline adventures to relaxing cruises along the turquoise coast, find the perfect experience for your holiday.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-20">
            <Filter className="mx-auto h-12 w-12 text-slate-300 mb-4" />
            <p className="text-slate-500 text-lg">No tours found in this category.</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="text-primary font-bold mt-2 hover:underline"
            >
              View all tours
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;