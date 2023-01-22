import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 import cap from "../../../Assets/featured/adidas black cap.webp" ;
 import watch  from "../../../Assets/featured/fossil watch.jfif" ;
 import headphone from "../../../Assets/featured/one plus headphone.jpg" ;
 import tshirt  from "../../../Assets/featured/puma green.webp" ;
import Featured from './Featured';
import "./Featureds.css";
const Featureds = () => {
  const [services,setServices] = useState([]);
  useEffect(()=>{
    fetch("fakeData.json")
    .then(res=>res.json())
    .then(data=>setServices(data))
 }
    ,[])
    return (
        <div className='mt-16 '>
            <div className='text-center'>
                <h3 className='text-xl font-bold  uppercase  '>Featured <span className='text-xl font-bold text-primary'>Products</span></h3>
                <h2 className='text-3xl'>Products We Provide</h2>
        </div>
        <div className= "  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
               services.slice(0,3).map(service =>
                 <Featured
                  key={service.id}
                  service={service}
                 ></Featured>
                )
            }
        </div>
        <div className='mt-6 button'>
           <Link to ="/product"> <button className='btn btn-primary '>See more</button></Link>
        </div>
        </div>
    );
};

export default Featureds;