import React from 'react';
import useApps from '../Hooks/useApps';
import { useState } from 'react';
import Showlessapp from './Showlessapp';
import Allapps from './Allapps';

const Apps = () => {
    const {Apps}=useApps()
    const [search,setSearch]=useState('')
      const term=search.trim().toLowerCase()

    const searchApps=term?Apps.filter(App=>App.title.toLowerCase().includes(term)):Apps

    const handlesearch=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
       console.log(search);
       
        
    }
    return (
        <div>
       
        <div className='flex justify-between items-center my-5'>
 <h1 className='text-lg font-bold'>All Products-{searchApps.length}</h1>
       <input onChange={handlesearch} type="search" placeholder="Search Products" className="input" />
        </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-5 mx-auto'>
        
        {
            searchApps.map(App=><Allapps App={App} key={App}></Allapps>)
        }  
        </div>
      </div>
    );
};

export default Apps;