import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Easy_Cart-removebg-preview.png";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className=" p-10 mt-16 bg-secondary  rounded-xl "
      
    >
            <div className='footer'>
            <div>
          <span className="footer-title font-extrabold ">Services</span> 
          <Link to="/" className="link link-hover font-bold">Branding</Link>
          <Link to="/" className="link link-hover font-bold">Design</Link>
          <Link to="/" className="link link-hover font-bold">Marketing</Link>
          <Link to="/" className="link link-hover font-bold">Advertisement</Link>
        </div> 
        <div>
          <span className="footer-title font-extrabold ">Company</span> 
          <Link to="/" className="link link-hover font-bold">About us</Link>
          <Link to="/" className="link link-hover font-bold">Contact</Link>
          <Link to="/" className="link link-hover font-bold">Jobs</Link>
          <Link to="/" className="link link-hover font-bold">Press kit</Link>
        </div> 
        <div>
          <span className="footer-title font-extrabold ">Legal</span> 
          <Link to="/" className="link link-hover font-bold">Terms of use</Link>
          <Link to="/" className="link link-hover font-bold">Privacy policy</Link>
          <Link to="/" className="link link-hover font-bold">Cookie policy</Link>
        </div>
        </div>
        <div className='mt-16'>
    <p className='text-center font-bold'>Copyright © 2023 - All right reserved by <img className='logo1 ml-6' src={logo} alt="" srcset="" /> EasyCart Ltd</p>
  </div>
       
      </footer>
    );
};

export default Footer;