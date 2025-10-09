import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
} from 'recharts';
import { LuTriangleAlert } from 'react-icons/lu';

const Appdetails = () => {
  const { id } = useParams();
  const { Apps, loading, error } = useApps();
  const [isInstalled, setIsInstalled] = useState(false); // ✅ new state

  if (loading)
    return (
      <div className="my-40 flex flex-col items-center justify-center">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );

  const App = Apps.find((p) => String(p.id) === id);
  if (!App) return <p className='text-center flex flex-col items-center justify-center my-20 font-bold text-4xl'><LuTriangleAlert size={68} color="#e21d1d" />App not found</p>;

  const handleawishlist = () => {
    toast("App Installed Successfully");

    const existinglist = JSON.parse(localStorage.getItem('wishlist'));
    let updatelist = [];

    if (existinglist) {
      const isDuplicate = existinglist.some((p) => p.id === App.id);
      if (isDuplicate) {
        alert('Already added this item');
        setIsInstalled(true);
        return;
      }
      updatelist = [...existinglist, App];
    } else {
      updatelist.push(App);
    }

    localStorage.setItem('wishlist', JSON.stringify(updatelist));

    setIsInstalled(true); // ✅ disable the button after click
  };

  return (
    <div className='mx-auto w-11/12'>
      <div className="mx-auto  p-4 bg-white shadow-lg rounded-lg border border-gray-200 w-full my-5">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-24 h-24 p-2 bg-blue-50 rounded-xl flex items-center justify-center">
            <img
              src={App.image}
              alt={App.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex-grow">
            <h1 className="text-xl font-bold text-gray-800">{App.title}</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Developed by{' '}
              <span className="font-medium text-gray-600">
                {App.companyName}
              </span>
            </p>

            {/* Stats Section */}
            <div className="flex justify-start space-x-6 mt-4 mb-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center text-green-600">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <p className="text-xs text-gray-500 mt-1">Downloads</p>
                <p className="text-lg font-bold text-gray-800">
                  {App.downloads}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center text-yellow-500">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 mt-1">Average Ratings</p>
                <p className="text-lg font-bold text-gray-800">
                  {App.ratingAvg}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center text-purple-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.69A9.705 9.705 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 mt-1">Total Reviews</p>
                <p className="text-lg font-bold text-gray-800">
                  {App.reviews}
                </p>
              </div>
            </div>

            {/* ✅ Button disabled after install */}
            <button
              onClick={handleawishlist}
              disabled={isInstalled}
              className={`w-auto px-6 py-2 font-semibold rounded-lg shadow-md transition duration-150 ease-in-out
                ${
                  isInstalled
                    ? 'bg-green-700 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
            >
              {isInstalled ? 'Installed' : 'Install Now'}{' '}
              {!isInstalled && (
                <span className="text-sm opacity-80">({App.size} MB)</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="space-y-3 mt-10">
        <h3 className="text-2xl font-bold">Rating Summary</h3>
        <div className="bg-base-100 border p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              data={App.ratings}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Area dataKey="count" fill="#ffff" stroke="#8884d8" />
              <Bar dataKey="count" barSize={20} fill="#F5D327" />
              <Line dataKey="count" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="my-10">
        <h1 className="text-3xl font-bold pb-3">Description</h1>
        <p>{App.description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Appdetails;
