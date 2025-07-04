import React, { useState, useEffect } from "react";
import SearchSection from "@/components/SearchSection";
import DestinationCard from "@/components/DestinationCard";
import Header from "@/components/Header";
import axios from "axios";

import { supabase } from "@/utils/supabaseClient";
import ScrapeButton from "@/components/ScrapeButton";

// const destinations = [
//   {
//     id: 1,
//     name: "Brac House",
//     location: "Korčula, Dubrovnik, Ireland",
//     type: "Boutique Hotel",
//     priceRange: "€290+",
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description:
//       "A slow, design-focused hideaway in Domegal where we feel like sleeping in sea and forgetting time.",
//     category: "Design Hotel",
//     readURL: "https://www.google.com",
//     bookURL: "https://www.google.com",
//   },
//   {
//     id: 2,
//     name: "Areias do Seixo",
//     location: "Torres Vedras, Portugal",
//     type: "Design Hotel",
//     priceRange: "€310+",
//     image:
//       "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description:
//       "This is architectural poetry written in wood, stone and glass amidst the wildness of endless ocean.",
//     category: "Design Hotel",
//     readURL: "https://www.google.com",
//     bookURL: "https://www.google.com",
//   },
//   {
//     id: 3,
//     name: "Etxe Ondo",
//     location: "Mundaka, Basque Country",
//     type: "Farmhouse",
//     priceRange: "€195-€300",
//     image:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description:
//       "Here, hospitality isn't a service — it's a way of life passed down through generations.",
//     category: "Pastoral Retreat",
//     readURL: "https://www.google.com",
//     bookURL: "https://www.google.com",
//   },
// ];

const Index = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const { data } = await supabase
      //   .from("stays")
      //   .select("*")
      //   .order("created_at", { ascending: false });
      // // Gyandipsinh
      // const updatedJson = data.map((hotel) => {
      //   return {
      //     id: hotel.id,
      //     name: hotel.name,
      //     location: hotel.location,
      //     category: hotel.source,
      //     priceRange: hotel.price_range,
      //     image: hotel.photos?.[0]?.url,
      //     description: hotel.description,
      //     type: hotel.kind,
      //     source: hotel.source,
      //     readURL: hotel.article_url,
      //     bookURL: hotel.direct_url,
      //   };
      // });
      // setFilteredDestinations(updatedJson);
      // setDestinations(updatedJson);

      const { data: hotels, error: err } = await supabase
        .from("hotels")
        .select("*");
      console.log("hotel Data", hotels);

      const updatedJson = hotels.map((hotel) => {
        return {
          id: hotel.id,
          name: hotel.stay_name,
          location: hotel.location,
          type: hotel.type,
          priceRange: hotel.price_range,
          image: hotel.image_url,
          description: hotel.quote,
          category: hotel.source,
          readURL: hotel.article_url,
          bookURL: hotel.hotel_url,
        };
      });
      setFilteredDestinations(updatedJson);
      setDestinations(updatedJson);
    };
    fetchData();
  }, []);

  const handleSearch = (filters: {
    location: string;
    type: string;
    budget: string;
  }) => {
    let filtered = destinations;
    // let filtered = filteredDestinations;

    if (filters.location && filters.location !== "Any region") {
      filtered = filtered.filter((dest) =>
        dest.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.type && filters.type !== "Any type") {
      filtered = filtered.filter((dest) => 
        // console.log("dest type", dest.type);
        // console.log("filters type", filters.type);
        dest.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    // if (filters.budget && filters.budget !== "Any region") {
    //   filtered = filtered.filter((dest) =>
    //     dest.priceRange?.includes(filters.budget)
    //   );
    // }

    if (filters.budget && filters.budget !== "Any budget") {
      const getMinPrice = (priceStr: string): number => {
        if (!priceStr) return Infinity;
    
        // Clean: remove £, €, + and spaces
        const clean = priceStr.replace(/[^\d\-]/g, "");
    
        if (clean.includes("-")) {
          const [min] = clean.split("-").map(Number);
          return min || Infinity;
        }
    
        return parseInt(clean) || Infinity;
      };
    
      let minRange = 0;
      let maxRange = Infinity;
    
      if (filters.budget === "Under £150") {
        minRange = 0;
        maxRange = 150;
      } else if (filters.budget === "£150-£300") {
        minRange = 150;
        maxRange = 300;
      } else if (filters.budget === "£300+") {
        minRange = 300;
        maxRange = Infinity;
      }
    
      filtered = filtered.filter((dest) => {
        const price = getMinPrice(dest.priceRange);
        return price >= minRange && price < maxRange;
      });
    }
    

    if (filters.location === "Any region" && filters.type === "Any type" && filters.budget === "Any region") {
      filtered = destinations;
    }

    console.log("data", filtered);

    setFilteredDestinations(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

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
              Carefully selected stays from the world's most respected travel
              writers.
            </p>
            <p className="text-gray-600 mb-12">
              No algorithms. No sponsored content. Just authentic
              recommendations.
            </p>
          </div>

          <SearchSection onSearch={handleSearch} />
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif text-gray-900 mb-2">
              All quiet finds
            </h3>
            <p className="text-gray-600">
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
