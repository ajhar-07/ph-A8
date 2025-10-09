import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Installation = () => {
  const [sortorder, setSortorder] = useState('none');
  const [wishlist, setWishlist] = useState([]);
  const [isSearching, setIsSearching] = useState(true); // 🔹 Start with loading spinner

  useEffect(() => {
    // Simulate loading when navigating to this page
    const timer = setTimeout(() => {
      const savelist = JSON.parse(localStorage.getItem('wishlist'));
      if (savelist) setWishlist(savelist);
      setIsSearching(false);
    }, 800); // Spinner shows for 0.8s (adjust if needed)

    return () => clearTimeout(timer);
  }, []);

  const sortItm = (() => {
    if (sortorder === 'price-ase') {
      return [...wishlist].sort((a, b) => a.downloads - b.downloads);
    } else if (sortorder === 'price-desc') {
      return [...wishlist].sort((a, b) => b.downloads - a.downloads);
    } else {
      return wishlist;
    }
  })();

  const handleremove = (id) => {
    const existinglist = JSON.parse(localStorage.getItem('wishlist'));
    const updatelist = existinglist.filter((p) => p.id !== id);
    setWishlist(updatelist);
    toast('App Uninstalled Successfully');
    localStorage.setItem('wishlist', JSON.stringify(updatelist));
  };

  // 🔹 Show spinner when entering Installation page
  if (isSearching)
    return (
      <div className="my-40 flex flex-col items-center justify-center">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );

  return (
    <div className="mx-auto w-11/12">
      {/* Header */}
      <div className="flex justify-between items-center my-5">
        <h1 className="text-lg font-bold">({wishlist.length}) Apps Found</h1>

        <select
          value={sortorder}
          onChange={(e) => setSortorder(e.target.value)}
          className="border rounded-md px-2 py-1"
        >
          <option value="none">Sort By Downloads</option>
          <option value="price-ase">Low → High</option>
          <option value="price-desc">High → Low</option>
        </select>
      </div>

      {/* Apps List */}
      <div className="space-y-3">
        {sortItm.map((p) => (
          <div key={p.id} className="p-4 bg-white my-7 shadow-md rounded-lg mx-auto border border-gray-200 w-full">
            <div className="flex items-center justify-between space-x-4">
              {/* App Icon + Info */}
              <div className="flex items-center space-x-4 flex-grow min-w-0">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover rounded-md" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 truncate">{p.title}</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mt-0.5">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      <span className="font-semibold text-green-600">{p.downloads}M</span>
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-400 mr-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.62-.921 1.92 0l1.24 3.829a1 1 0 00.95.69h4.037c.969 0 1.371 1.24.588 1.812l-3.264 2.373a1 1 0 00-.363 1.118l1.24 3.829c.3.921-.755 1.688-1.539 1.118l-3.264-2.373a1 1 0 00-1.176 0l-3.264 2.373c-.784.57-1.838-.197-1.539-1.118l1.24-3.829a1 1 0 00-.363-1.118L2.051 9.258c-.783-.572-.381-1.812.588-1.812h4.037a1 1 0 00.95-.69l1.24-3.829z"></path>
                      </svg>
                      <span className="font-semibold">{p.ratingAvg}</span>
                    </span>
                    <span className="text-gray-400">|</span>
                    <span>{p.size} MB</span>
                  </div>
                </div>
              </div>

              {/* Uninstall Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleremove(p.id)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
