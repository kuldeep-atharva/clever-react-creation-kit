import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/utils/supabaseClient";

interface SearchSectionProps {
  onSearch: (filters: {
    location: string;
    type: string;
    budget: string;
  }) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const [fetchFilterData, setFetchFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const { data: allData, error: err } = await supabase
      //   .from("stays")
      //   .select("region, kind, price_range");
      // console.log("fetched Data", allData);
      const { data: allData, error: err } = await supabase
        .from("hotels")
        .select("location, type, price_range");
      setFetchFilterData(allData);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    console.log("Search clicked", { location, type, budget });
    onSearch({ location, type, budget });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            WHERE
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any region">Any region</SelectItem>
              {/* {fetchFilterData.map((type, index) => {
                if (type.region) {
                  return (
                    <SelectItem key={index} value={type?.region}>
                      {type?.region?.charAt(0)?.toUpperCase() +
                        type?.region?.slice(1)}
                    </SelectItem>
                  );
                }
              })} */}
              {/* {fetchFilterData.map((type, index) => {
                if (type.location) {
                  return (
                    <SelectItem key={index} value={type?.location}>
                      {type?.location?.charAt(0)?.toUpperCase() +
                        type?.location?.slice(1)}
                    </SelectItem>
                  );
                }
              })} */}
              {[
                ...new Set(
                  fetchFilterData.map((item) => item.location?.trim())
                ),
              ]
                .filter(Boolean)
                .map((location, index) => (
                  <SelectItem key={index} value={location}>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            TYPE
          </label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any type">Any type</SelectItem>
              {/* {fetchFilterData.map((type, index) => {
                return (
                  <SelectItem key={index} value={type.kind}>
                    {type.kind?.charAt(0)?.toUpperCase() + type.kind?.slice(1)}
                  </SelectItem>
                );
              })} */}
              {/* {fetchFilterData.map((type, index) => {
                return (
                  <SelectItem key={index} value={type.type}>
                    {type.type?.charAt(0)?.toUpperCase() + type.type?.slice(1)}
                  </SelectItem>
                );
              })} */}
              {[
                ...new Set(
                  fetchFilterData.map((item) => item.type?.trim())
                ),
              ]
                .filter(Boolean)
                .map((type, index) => (
                  <SelectItem key={index} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            BUDGET
          </label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any price">Any price</SelectItem>
              {/* {fetchFilterData.map((type, index) => {
                if (type.price_range) {
                  return (
                    <SelectItem key={index} value={type.price_range}>
                      {type.price_range}
                    </SelectItem>
                  );
                }
              })} */}
              <SelectItem value="Under £150"> Under £150 </SelectItem>
              <SelectItem value="£150-£300"> £150-£300 </SelectItem>
              <SelectItem value="£300+"> £300+ </SelectItem>
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
