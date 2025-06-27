
import React, { useState } from 'react';
import SearchSection from '@/components/SearchSection';
import DestinationCard from '@/components/DestinationCard';
import Header from '@/components/Header';

const destinations = [
  {
    id: 1,
    name: 'Brac House',
    location: 'Korčula, Dubrovnik, Ireland',
    type: 'Boutique Hotel',
    priceRange: '€290+',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A slow, design-focused hideaway in Domegal where we feel like sleeping in sea and forgetting time.',
    category: 'Design Hotel'
  },
  {
    id: 2,
    name: 'Areias do Seixo',
    location: 'Torres Vedras, Portugal',
    type: 'Design Hotel',
    priceRange: '€310+',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'This is architectural poetry written in wood, stone and glass amidst the wildness of endless ocean.',
    category: 'Design Hotel'
  },
  {
    id: 3,
    name: 'Etxe Ondo',
    location: 'Mundaka, Basque Country',
    type: 'Farmhouse',
    priceRange: '€195-€300',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Here, hospitality isn\'t a service — it\'s a way of life passed down through generations.',
    category: 'Pastoral Retreat'
  }
];

const Index = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  const handleSearch = (filters: { location: string; type: string; budget: string }) => {
    let filtered = destinations;
    
    if (filters.location && filters.location !== 'Any region') {
      filtered = filtered.filter(dest => 
        dest.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.type && filters.type !== 'Any type') {
      filtered = filtered.filter(dest => 
        dest.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }
    
    setFilteredDestinations(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4 leading-tight">
            Quiet places.
          </h1>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-700 mb-8">
            Trusted voices.
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-2">
              Carefully selected stays from the world's most respected travel writers.
            </p>
            <p className="text-gray-600 mb-12">
              No algorithms. No sponsored content. Just authentic recommendations.
            </p>
          </div>
          
          <SearchSection onSearch={handleSearch} />
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif text-gray-900 mb-2">All quiet finds</h3>
            <p className="text-gray-600">{filteredDestinations.length} carefully curated stays</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
