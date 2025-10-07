import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Trusted By Millions, Built For You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {/* Total Downloads */}
        <div>
             <p className="mt-3 text-base font-medium opacity-90">
            Total Downloads
          </p>
          <h3 className="text-4xl md:text-5xl font-extrabold">29.6M</h3>
          <p className="text-sm text-purple-100 mt-1">
            21% More Than Last Month
          </p>
         
        </div>

        {/* Total Reviews */}
        <div>
             <p className="mt-3 text-base font-medium opacity-90">Total Reviews</p>
          <h3 className="text-4xl md:text-5xl font-extrabold">906K</h3>
          <p className="text-sm text-purple-100 mt-1">
            48% More Than Last Month
          </p>
         
        </div>

        {/* Active Apps */}
        <div>
            <p className="mt-3 text-base font-medium opacity-90">Active Apps</p>
          <h3 className="text-4xl md:text-5xl font-extrabold">132+</h3>
          <p className="text-sm text-purple-100 mt-1">31 More Will Launch</p>
          
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
