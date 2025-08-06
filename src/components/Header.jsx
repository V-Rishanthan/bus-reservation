import React, { useState } from "react";
import Form from "../components/Form";

// import { Navigation } from "lucide-react";

const Header = () => {
  return (
    <>
      <main className="mx-auto px-6 sm:px-8 lg:px-12 mt-8 pb-16">
        <section className="mt-8 md:mt-28 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto">
          <div className="text-center md:text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black">
              Your Journey Starts Here
            </h1>
          </div>
        </section>
        <p className="mt-8 text-center text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
          Reserve Your Seat Instantly – Comfort,
          <br />
          Convenience & Confidence for Every Journey
        </p>
        <div className="mt-6 flex flex-col items-center">
          <div>
            <Form />
          </div>

          <p className="mt-3 text-gray-500 text-xs">
            No credit card required. Cancel anytime.
          </p>
        </div>
        <section className="mt-6 md:mt-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-xs md:text-sm">
          <div className="flex items-center gap-2 px-4 max-md:py-3 md:px-6 max-md:border-b md:border-r border-gray-300">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex items-center gap-2 px-4 max-md:py-3 md:px-6 max-md:border-b md:border-r border-gray-300">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex items-center gap-2 px-4 max-md:py-3 md:px-6 max-md:border-b md:border-r border-gray-300">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Header;
