import React from 'react';
import banner from "../../../Assets/banner-removebg-preview.png";
const Banner = () => {
    return (
        <div className="hero rounded-lg my-3 bg-yellow-200">
        <div className="hero-content my-6 flex-col lg:flex-row-reverse">
          <img src={banner} alt='' className=" w-100% " />
          <div>
            <h1 className="text-5xl font-bold">END OF <br></br>SPRING COLLECTION!</h1>
            <p className="py-6 text-lg ">Save up to 25% + free shipping </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;