import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import heroimg from '../assets/hero.png';
import StatsSection from './StatsSection';
import useApps from '../Hooks/useApps';
import Showlessapp from './Showlessapp';
import { Link, Links } from 'react-router';
import Allapps from './Allapps';

const Home = () => {
  const { Apps,loading,error} = useApps();
  const showlessapps = Apps.slice(0, 8);
if (loading) return <div className='my-40 flex flex-col items-center justify-center'><span className="loading loading-spinner text-error"></span></div>
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              We Build <span className="text-[#9F62F2]">Productive</span> Apps
            </h1>
            <p className="py-6">
              At <span className="font-semibold">HERO.IO</span>, we craft
              innovative apps designed to make everyday life simpler, smarter,
              and more exciting. Our goal is to turn your ideas into digital
              experiences that truly make an impact.
            </p>

            <div className="flex justify-center gap-3">
             <a href='https://play.google.com/store/games?hl=en'>
               <button className="btn font-bold">
                <IoLogoGooglePlaystore /> Google Play
              </button>
             </a>
             <a href='https://www.apple.com/app-store/'>
             <button className="btn font-bold">
                <FaAppStoreIos /> App Store
              </button>
             </a>
              
            </div>

            <img src={heroimg} alt="Hero" className="pt-8 mx-auto" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Apps Section */}
    
<div className='flex flex-col mx-auto items-center container'>
  
  <h1 className='text-3xl font-bold pt-7'>Trending Apps</h1>
  <p className='py-3'>Explore All Trending Apps on the Market developed by us</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        {
        showlessapps.map((App) => (
          <Allapps key={App.id} App={App} />
        ))}
        
      </div>
      
</div>

       <div className="flex justify-center my-6">
  <Link to={'/apps'}><button className="relative px-6 py-2 font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-400 rounded-md hover:opacity-90 transition-all duration-300">
    Show All
    
  </button></Link>
</div>
    </div>
  );
};

export default Home;
