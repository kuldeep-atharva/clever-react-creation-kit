
import React, { useState } from "react";
import SearchSection from "@/components/SearchSection";
import DestinationCard from "@/components/DestinationCard";

const destinations = [
  {
    id: 1,
    name: "Brac House",
    location: "Korčula, Dubrovnik, Ireland",
    type: "Boutique Hotel",
    priceRange: "€290+",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A slow, design-focused hideaway in Domegal where we feel like sleeping in sea and forgetting time.",
    category: "Design Hotel",
    readURL: "https://www.google.com",
    bookURL: "https://www.google.com",
  },
  {
    id: 2,
    name: "Areias do Seixo",
    location: "Torres Vedras, Portugal",
    type: "Design Hotel",
    priceRange: "€310+",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "This is architectural poetry written in wood, stone and glass amidst the wildness of endless ocean.",
    category: "Design Hotel",
    readURL: "https://www.google.com",
    bookURL: "https://www.google.com",
  },
  {
    id: 3,
    name: "Etxe Ondo",
    location: "Mundaka, Basque Country",
    type: "Farmhouse",
    priceRange: "€195-€300",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Here, hospitality isn't a service — it's a way of life passed down through generations.",
    category: "Pastoral Retreat",
    readURL: "https://www.google.com",
    bookURL: "https://www.google.com",
  },
];

const Index = () => {
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);

  const handleSearch = (filters: {
    location: string;
    type: string;
    budget: string;
  }) => {
    let filtered = destinations;

    if (filters.location && filters.location !== "Any region") {
      filtered = filtered.filter((dest) =>
        dest.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.type && filters.type !== "Any type") {
      filtered = filtered.filter((dest) =>
        dest.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100">
      {/* Hero Section */}
      <div className="relative bg-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/30 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-serif text-stone-800 mb-4 leading-tight tracking-tight">
              Quiet places.
            </h1>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-600 mb-12 font-light">
              Trusted voices.
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-stone-700 mb-3 font-light leading-relaxed">
              Carefully selected stays from the world's most respected travel writers.
            </p>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              No algorithms. No sponsored content. Just authentic recommendations.
            </p>
          </div>

          <SearchSection onSearch={handleSearch} />
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-stone-800 mb-4 font-semibold">
              All quiet finds
            </h3>
            <p className="text-stone-600 text-lg font-light">
              {filteredDestinations.length} carefully curated stays
            </p>
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
