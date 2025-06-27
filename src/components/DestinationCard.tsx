
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
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {destination.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-serif text-gray-900">{destination.name}</h3>
          <span className="text-lg font-medium text-gray-900">{destination.priceRange}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{destination.location}</p>
        
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          "{destination.description}"
        </p>
        
        <div className="space-y-3">
          <p className="text-xs text-gray-500">{destination.type}</p>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-sm"
            >
              Read full review
            </Button>
            <Button 
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-sm"
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
