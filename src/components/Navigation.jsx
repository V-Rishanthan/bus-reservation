import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const Navigation = () => {
  // Nav Links

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="border-b border-gray-300">
        <nav className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between py-4 md:py-5 relative">
          <Link to="/" className="flex items-center gap-2">
            <MapPin /> <span className="text-2xl font-bold">Rich Travels</span>
          </Link>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            id="menu"
            className="hidden absolute top-full left-0 w-full bg-white md:static md:flex md:space-x-10 md:items-center text-gray-600 text-sm font-medium md:w-auto md:bg-transparent md:mt-0 mt-4 shadow md:shadow-none z-10 px-6 py-4 md:py-0"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="block py-2 hover:text-gray-900 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/login"
              className="text-gray-700 font-semibold hover:text-gray-900 transition"
            >
              Log In
            </Link>
            <Link
              to="/trial"
              className="bg-[#5a189a] hover:bg-[#7b2cbf] text-white text-sm font-semibold px-4 py-2 rounded-md transition"
            >
              Get free trial
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
