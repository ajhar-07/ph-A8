import React from 'react';

const Skeletonloader = ({count=6}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-5 mx-auto'>
          {Array.from({count}).map((_,i)=>(
            <div key={i} className="flex w-52 flex-col gap-4">
  <div className="skeleton h-48 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>  
          ))}
        </div>
    );
};

export default Skeletonloader;