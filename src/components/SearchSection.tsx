
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
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">WHERE</label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any region">Any region</SelectItem>
              <SelectItem value="Portugal">Portugal</SelectItem>
              <SelectItem value="Ireland">Ireland</SelectItem>
              <SelectItem value="Basque Country">Basque Country</SelectItem>
              <SelectItem value="Spain">Spain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">TYPE</label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any type">Any type</SelectItem>
              <SelectItem value="Boutique Hotel">Boutique Hotel</SelectItem>
              <SelectItem value="Design Hotel">Design Hotel</SelectItem>
              <SelectItem value="Farmhouse">Farmhouse</SelectItem>
              <SelectItem value="Retreat">Retreat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">BUDGET</label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any price">Any price</SelectItem>
              <SelectItem value="€0-€200">€0-€200</SelectItem>
              <SelectItem value="€200-€400">€200-€400</SelectItem>
              <SelectItem value="€400+">€400+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleSearch}
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-2 rounded-md transition-colors"
        >
          Find stays
        </Button>
      </div>
    </div>
  );
};

export default SearchSection;
