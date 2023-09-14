import theChi from "../images/posters/landscape/the.chi.png";
import theChi2 from "../images/posters/portrait/the.chi.jpg";
import React, { useState, useEffect } from "react";

function MainSlider() {
  return (
    <div className="flex-shrink-0 w-full lg:w-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <a href="/series/the-chi">
        <img className="rounded-lg object-cover" src={theChi} alt="The Chi" />
      </a>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent text-white rounded-lg">
        <a href="/series/the-chi">
          <h5 className="text-4xl font-semibold tracking-tight hover:text-blue-600">
            The Chi
          </h5>
        </a>
        <div className="flex w-full space-x-2 overflow-hidden">
          <span className="text-sm">S06E05</span>
          <span className="text-sm">|</span>
          <span className="text-sm">genre</span>
          <span className="text-sm">|</span>
          <div className="p-0.5 rounded flex">
            <span className="text-sm">5.0</span>
            <span className="text-xs">/5</span>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
