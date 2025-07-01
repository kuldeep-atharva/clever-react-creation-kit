
import React from 'react';
import { Button } from '@/components/ui/button';

interface Destination {
  id: number;
  name: string;
  location: string;
  type: string;
  priceRange: string;
  image: string;
  description: string;
  category: string;
  readURL: string;
  bookURL: string;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100 hover:border-stone-200 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-stone-700 shadow-sm">
            {destination.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-serif text-stone-900 font-semibold leading-tight">{destination.name}</h3>
          <span className="text-xl font-semibold text-stone-900 bg-stone-50 px-3 py-1 rounded-lg text-sm">
            {destination.priceRange}
          </span>
        </div>
        
        <p className="text-stone-600 text-sm mb-4 font-light">{destination.location}</p>
        
        <p className="text-stone-700 text-sm mb-6 leading-relaxed font-light italic border-l-2 border-stone-200 pl-4">
          "{destination.description}"
        </p>
        
        <div className="space-y-4">
          <p className="text-xs text-stone-500 uppercase tracking-wide font-medium">{destination.type}</p>
          
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-sm border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-stone-400 transition-colors rounded-xl"
              onClick={() => window.open(destination.readURL)}
            >
              Read review
            </Button>
            <Button 
              className="flex-1 bg-stone-900 hover:bg-stone-800 text-white text-sm shadow-md hover:shadow-lg transition-all duration-200 rounded-xl"
              onClick={() => window.open(destination.bookURL)}
            >
              Visit & book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
