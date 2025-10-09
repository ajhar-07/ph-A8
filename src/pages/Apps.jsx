import React, { useState, useEffect } from 'react';
import useApps from '../Hooks/useApps';
import Allapps from './Allapps';
import notfound from '../assets/App-Error.png';
import { Link } from 'react-router';

const Apps = () => {
  const { Apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState(Apps);

  // 🔹 Handle Search Input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setIsSearching(true);
  };

  // 🔹 Debounce Search Logic
  useEffect(() => {
    const delay = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const results = term
        ? Apps.filter((App) => App.title.toLowerCase().includes(term))
        : Apps;
      setFilteredApps(results);
      setIsSearching(false);
    }, 600); // 0.6 second delay

    return () => clearTimeout(delay);
  }, [search, Apps]);

  // 🔹 Show global loader (from API)
  if (loading)
    return (
      <div className="my-40 flex flex-col items-center justify-center">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );

  return (
    <div className="w-11/12 mx-auto px-4">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold pt-7">Our All Applications</h1>
        <p className="py-3">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
        
      </div>

      {/* Search + Count */}
      <div className="flex flex-col md:flex-row justify-between items-center my-5 flex-wrap gap-3">
        <h1 className="text-lg font-bold">
          ({filteredApps?.length || 0}) Apps Found
        </h1>

        <div className="relative">
          
          <input
            onChange={handleSearch}
            type="search"
            placeholder="Search Apps"
            value={search}
            className="input input-bordered w-full max-w-xs pr-10"
          />

         
        </div>
    
      </div>
{/* 🔹 Show spinner while typing */}
          {isSearching && (
            <div className="my-40 flex flex-col items-center justify-center">
        <span className="loading loading-spinner text-error"></span>
      </div>
          )}
      {/* Not Found */}
      {filteredApps.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-10">
          <img src={notfound} alt="Not found" />
          <Link to="/">
            <button className="relative px-8 py-2 mt-5 font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-400 rounded-md hover:opacity-90 transition-all duration-300">
              Home
            </button>
          </Link>
        </div>
      ) : (
        // Show Apps Grid
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5 justify-items-center">
          {filteredApps.map((App) => (
            <Allapps key={App.id} App={App} />
          ))}
          
        </div>
      )}
    </div>
  );
};

export default Apps;
