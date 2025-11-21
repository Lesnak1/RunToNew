import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-800">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        
        {tour.isBestSeller && (
          <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Best Seller
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-xs font-bold bg-primary/90 px-2 py-1 rounded backdrop-blur-sm">
            {tour.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-serif line-clamp-1">
          {tour.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
          {tour.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs font-medium">
            <Clock size={14} />
            <span>{tour.duration}</span>
          </div>
          
          <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
