import React from 'react';

export const RoundedSearchBar = () => {
  return (
    <div className="rounded bg-gray-100 mx-16 text-black shadow-lg">
      <input
        className="w-full py-2 px-4 rounded-md focus:ring focus:ring-blue-200"
        type="text"
        placeholder="Enter text..."
      />
    </div>
  );
};