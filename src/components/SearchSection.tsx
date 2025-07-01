
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchSectionProps {
  onSearch: (filters: { location: string; type: string; budget: string }) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    onSearch({ location, type, budget });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-stone-200/50 p-8 max-w-5xl mx-auto backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-stone-700 mb-2 tracking-wide uppercase text-xs">
            WHERE
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full h-12 border-stone-200 focus:border-stone-400 focus:ring-stone-400/20">
              <SelectValue placeholder="Any region" />
            </SelectTrigger>
            <SelectContent className="bg-white border-stone-200">
              <SelectItem value="Any region">Any region</SelectItem>
              <SelectItem value="Portugal">Portugal</SelectItem>
              <SelectItem value="Ireland">Ireland</SelectItem>
              <SelectItem value="Basque Country">Basque Country</SelectItem>
              <SelectItem value="Spain">Spain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-stone-700 mb-2 tracking-wide uppercase text-xs">
            TYPE
          </label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full h-12 border-stone-200 focus:border-stone-400 focus:ring-stone-400/20">
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent className="bg-white border-stone-200">
              <SelectItem value="Any type">Any type</SelectItem>
              <SelectItem value="Boutique Hotel">Boutique Hotel</SelectItem>
              <SelectItem value="Design Hotel">Design Hotel</SelectItem>
              <SelectItem value="Farmhouse">Farmhouse</SelectItem>
              <SelectItem value="Retreat">Retreat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-stone-700 mb-2 tracking-wide uppercase text-xs">
            BUDGET
          </label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger className="w-full h-12 border-stone-200 focus:border-stone-400 focus:ring-stone-400/20">
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent className="bg-white border-stone-200">
              <SelectItem value="Any price">Any price</SelectItem>
              <SelectItem value="€0-€200">€0-€200</SelectItem>
              <SelectItem value="€200-€400">€200-€400</SelectItem>
              <SelectItem value="€400+">€400+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleSearch}
          className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 h-12 rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Find stays
        </Button>
      </div>
    </div>
  );
};

export default SearchSection;
