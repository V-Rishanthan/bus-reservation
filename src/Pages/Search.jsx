import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const busOptions = [
    {
      id: 1,
      operator: "Express Travel",
      busType: "AC Sleeper",
      departure: "08:00",
      duration: "6h 30m",
      arrival: "14:30",
      amenities: [],
      seatType: "R",
      seatsAvailable: 12,
      price: 45,
      features: ["WiFi", "Coffee", "Charging"],
    },
    {
      id: 2,
      operator: "Comfort Lines",
      busType: "AC Sester",
      departure: "10:30",
      duration: "6h 45m",
      arrival: "17:15",
      amenities: [],
      seatType: "R",
      seatsAvailable: 8,
      price: 38,
      features: ["WiFi", "Charging"],
    },
    {
      id: 3,
      operator: "Premium Bus",
      busType: "Luxury AC",
      departure: "15:00",
      duration: "6h 30m",
      arrival: "21:30",
      amenities: [],
      seatType: "R",
      seatsAvailable: 15,
      price: 52,
      features: ["WiFi", "Coffee", "Charging", "Entertainment"],
    },
  ];

  const popularRoutes = [
    {
      name: "Colombo → Kandy",
      duration: "2h 30m",
      price: "From LKR 1,200",
    },
    {
      name: "Colombo → Galle",
      duration: "1h 45m",
      price: "From LKR 900",
    },
    {
      name: "Kandy → Nuwara Eliya",
      duration: "3h 15m",
      price: "From LKR 1,500",
    },
    {
      name: "Colombo → Trincomalee",
      duration: "6h 30m",
      price: "From LKR 2,800",
    },
    {
      name: "Galle → Ella",
      duration: "45m",
      price: "From LKR 500",
    },
  ];

  return (
    <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32  bg-white rounded-lg  my-5">
      {/* Search Header */}

      {/* Popular Routes */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Popular Routes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularRoutes.map((route, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200 cursor-pointer"
            >
              <h3 className="font-medium text-gray-800">{route.name}</h3>
              <p className="text-sm text-gray-500">{route.duration}</p>
              <p className="text-sm font-semibold text-[#9d4edd] mt-2">
                {route.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Available Buses
        </h2>
        <div className="space-y-6">
          {busOptions.map((bus) => (
            <div
              key={bus.id}
              className={`border rounded-lg p-6 hover:shadow-md transition duration-200 ${
                selectedOption === bus.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedOption(bus.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Bus Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-bold text-lg">{bus.operator}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {bus.busType}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-xl font-semibold">{bus.departure}</p>
                      <p className="text-sm text-gray-500">Departure</p>
                    </div>
                    <div className="relative">
                      <div className="h-px w-16 bg-gray-300 mt-3"></div>
                      <p className="text-xs text-gray-500 text-center mt-1">
                        {bus.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">{bus.arrival}</p>
                      <p className="text-sm text-gray-500">Arrival</p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {bus.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded flex items-center gap-1"
                      >
                        {feature === "WiFi" && (
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                          </svg>
                        )}
                        {feature === "Coffee" && (
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                          </svg>
                        )}
                        {feature === "Charging" && (
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                          </svg>
                        )}
                        {feature === "Entertainment" && (
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                          </svg>
                        )}
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">{bus.seatType}</span>,{" "}
                    {bus.seatsAvailable} seats available
                  </p>
                </div>

                {/* Price and Action */}
                <div className="flex flex-col items-end">
                  <p className="text-2xl font-bold text-gray-800">
                    ${bus.price}
                  </p>
                  <button
                    onClick={() => navigate("/seatSelection")}
                    className="mt-2 bg-[#9d4edd] hover:bg-[#7b2cbf] text-white px-4 py-2 rounded-md  transition duration-200 text-sm"
                  >
                    Select Seats
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
