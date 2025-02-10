"use client"
import { useState } from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select";
import Flag from "react-world-flags"; // Import the flag component


const countries = [
  { code: "US", name: "United States", flag: "US" },
  { code: "CA", name: "Canada", flag: "CA" },
  { code: "GB", name: "United Kingdom", flag: "GB" },
  { code: "AU", name: "Australia", flag: "AU" },
  { code: "IN", name: "India", flag: "IN" },
];

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");

  return (
    <div className="w-full">

      <Select
        value={selectedCountry}
        onValueChange={(value) => setSelectedCountry(value)}
        id="country"
      >
        <SelectTrigger className="w-full flex items-center ring-0 border-0 focus-visible:outline-none">
          <Flag code={selectedCountry} className="w-8 h-8" />
          {/* <span>
            {countries.find((country) => country.code === selectedCountry)?.name || "Select a country"}
          </span> */}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Countries</SelectLabel>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code} className="flex items-center">
                <Flag code={country.flag} className="w-5 h-5" />
                <span>{country.name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountrySelect;
