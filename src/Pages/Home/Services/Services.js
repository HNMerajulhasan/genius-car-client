import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services,setServices] =useState([]);

  useEffect(()=>{
    fetch('https://genius-car-server-nine-smoky.vercel.app/services')
     .then(res=>res.json())
     .then(data=>setServices(data))
  },[])

    return (
      <div> 
        <div className='text-center mb-5'>
           <p className="text-2xl font-bold text-orange-600">Services</p> 
           <h2 className="text-5xl font-semibold text-pink-500">Our Service Area</h2>
           <p className='font-bold mt-3'>Below, The Some Services Area which we Offered To Our Customer.Please have a Look!!</p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
             services.map(service=><ServiceCard
                key={service._id}
                service={service}
             ></ServiceCard>)
           }
        </div>
    </div> 
    );
};

export default Services;
