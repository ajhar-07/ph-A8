import React from 'react';
import { BiDownload, BiStar } from 'react-icons/bi';

const Allapps = ({App}) => {
    console.log(App);
    
    return (
        <div className="w-[300px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
             {/* Image Section */}
             <div className="w-full h-[180px] flex items-center justify-center bg-gray-100">
               <img
                 src=""
                 alt={App.title}
                 className="w-[90px] h-[90px] object-cover rounded-xl shadow-sm"
               />
             </div>
       
             {/* Title */}
             <div className="px-4 py-3">
               <h3 className="text-sm font-semibold text-gray-800 text-center line-clamp-1">
                 {App.title}
               </h3>
             </div>
       
             {/* Bottom Section */}
             <div className="flex items-center justify-between px-4 pb-3">
               <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                 <BiDownload size={16} />
                 <span>{App.downloads}M</span>
               </div>
               <div className="flex items-center gap-1 text-orange-500 text-sm font-medium">
                 <BiStar size={16} fill="currentColor" />
                 <span>{App.ratingAvg}</span>
               </div>
             </div>
           </div>
    );
};

export default Allapps;