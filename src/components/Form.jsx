import React, { useState } from "react";
import { Calendar, MapPin, Search } from "lucide-react";

const Form = () => {
  const [isOpenFrom, setIsOpenFrom] = useState(false);
  const [isOpenTo, setIsOpenTo] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("Select District");
  const [selectedTo, setSelectedTo] = useState("Select District");

  const districts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Monaragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  const handleSelectFrom = (district) => {
    setSelectedFrom(district);
    setIsOpenFrom(false);

    if (selectedTo === district) {
      setSelectedTo("Select District");
    }
  };

  const handleSelectTo = (district) => {
    setSelectedTo(district);
    setIsOpenTo(false);
  };

  // Filter out the selected From district from To options
  const filteredToDistricts = districts.filter(
    (district) => district !== selectedFrom
  );

  const DestinationDropdown = ({
    isOpen,
    setIsOpen,
    selected,
    handleSelect,
    options,
  }) => {
    return (
      <div className="relative mt-3">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left px-4 py-2 border rounded bg-white text-gray-600 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none flex justify-between items-center"
        >
          <span>{selected}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#6B7280"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md mt-1 max-h-60 overflow-auto">
            {options.map((district) => (
              <li
                key={district}
                className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                onClick={() => handleSelect(district)}
              >
                {district}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <form className="bg-white shadow-2xl text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto">
      {/* From Field */}
      <div className="w-full md:w-auto flex-1 min-w-[200px]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <label htmlFor="destinationInput" className="text-sm font-medium">
            From
          </label>
        </div>
        <DestinationDropdown
          isOpen={isOpenFrom}
          setIsOpen={setIsOpenFrom}
          selected={selectedFrom}
          handleSelect={handleSelectFrom}
          options={districts}
        />
      </div>

      {/* To Field */}
      <div className="w-full md:w-auto flex-1 min-w-[200px]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <label htmlFor="destinationInput" className="text-sm font-medium">
            To
          </label>
        </div>
        <DestinationDropdown
          isOpen={isOpenTo}
          setIsOpen={setIsOpenTo}
          selected={selectedTo}
          handleSelect={handleSelectTo}
          options={filteredToDistricts} // Filtered districts for To
        />
      </div>

      {/* Check Out Field */}
      <div className="w-full md:w-auto">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <label htmlFor="checkOut" className="text-sm font-medium">
            Check out
          </label>
        </div>
        <input
          id="checkOut"
          type="date"
          className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Guests Field */}
      <div className="w-full md:w-auto">
        <label htmlFor="guests" className="text-sm font-medium">
          Guests
        </label>
        <div className="flex items-center gap-2 mt-1.5">
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="rounded border border-gray-200 px-3 py-2 text-sm outline-none w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0"
          />
        </div>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="cursor-pointer w-full md:w-auto flex items-center justify-center gap-2 rounded-md bg-[#5a189a] py-3 px-6 text-white hover:bg-[#7b2cbf] transition-colors mt-6 md:mt-auto"
      >
        <Search className="w-4 h-4" />
        <span>Search</span>
      </button>
    </form>
  );
};

export default Form;
