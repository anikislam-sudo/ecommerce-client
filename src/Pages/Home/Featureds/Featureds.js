import React from 'react';
 import cap from "../../../Assets/featured/adidas black cap.webp" ;
 import watch  from "../../../Assets/featured/fossil watch.jfif" ;
 import headphone from "../../../Assets/featured/one plus headphone.jpg" ;
 import tshirt  from "../../../Assets/featured/puma green.webp" ;
import Featured from './Featured';
import "./Featureds.css";
const Featureds = () => {
  const  services=[
    {
        id:1,
        img:cap,
        description:"Adidas Black Cap",
        price:23
        
      },
    {
        id:2,
        img: watch,
        description:"Fossil Brown Watch",
        price:70
        
      },
   
    {
        id:4,
        img:tshirt,
        description:"Puma Green Tshirt",
        price:10
        
      },
  ]
    return (
        <div className='mt-16 '>
            <div className='text-center'>
                <h3 className='text-xl font-bold  uppercase  '>Featured <span className='text-xl font-bold text-primary'>Products</span></h3>
                <h2 className='text-3xl'>Products We Provide</h2>
        </div>
        <div className= "  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
               services.map(service =>
                 <Featured
                  key={service.id}
                  service={service}
                 ></Featured>
                )
            }
        </div>
        <div className='mt-6 button'>
            <button className='btn btn-primary '>See more</button>
        </div>
        </div>
    );
};

export default Featureds;