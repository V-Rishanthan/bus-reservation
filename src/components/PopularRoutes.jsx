import React from "react";
// Import your local images
import colomboKandy from "../assets/kandy.jpg";
import colomboGalle from "../assets/batticaloa.jpg";
import kandyNuwaraEliya from "../assets/galle (1).jpg";
import colomboTrincomalee from "../assets/negombo.jpg";
import galleElla from "../assets/ELLA (1).jpg";

const PopularRoutes = () => {
  const routes = [
    {
      name: "Colombo → Kandy",
      duration: "2h 30m",
      price: "From LKR 1,200",
      image: colomboKandy,
    },
    {
      name: "Colombo → Galle",
      duration: "1h 45m",
      price: "From LKR 900",
      image: colomboGalle,
    },
    {
      name: "Kandy → Nuwara Eliya",
      duration: "3h 15m",
      price: "From LKR 1,500",
      image: kandyNuwaraEliya,
    },
    {
      name: "Colombo → Trincomalee",
      duration: "6h 30m",
      price: "From LKR 2,800",
      image: colomboTrincomalee,
    },
    {
      name: "Galle → Ella",
      duration: "45m",
      price: "From LKR 500",
      image: galleElla,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 mt-5 mb-5">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Popular Sri Lanka Routes
      </h2>
      <p className="text-gray-600 mb-8">
        Discover the most traveled destinations in Sri Lanka
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={route.image}
                alt={route.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {route.name}
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{route.duration}</span>
                </div>
                <span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                  {route.price}
                </span>
              </div>
              <button className="mt-4 w-full bg-[#9d4edd] hover:bg-[#7b2cbf] cursor-pointer text-white py-2 px-4 rounded-md transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;
