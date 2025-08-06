import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300">
        {/* Company Info & Social */}
        <div className="max-w-96">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
              RICH TRAVELS
            </span>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            We're here for you. Providing comfortable and reliable bus travel
            experiences worldwide.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">HELP</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">GET TO KNOW US</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Customer reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">LEGAL</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">TRAVEL</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  All operators
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Global routes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Cities & stations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-500">
          Copyright © {new Date().getFullYear()} Rich Travels. All rights
          reserved.
        </p>
        <div className="mt-4 md:mt-0 space-x-6">
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
          >
            Work with us
          </a>
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
          >
            Become a provider
          </a>
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
          >
            Affiliate program
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
