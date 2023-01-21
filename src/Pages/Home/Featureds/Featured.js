import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Featured = ({service}) => {
    const {img,description,price}=service;
    return (
        <div className="card card-compact  mt-3 w-90 h-80 bg-base-100 shadow-xl">
<PhotoProvider>
 <PhotoView src={img}>
     <figure>
    <img className='h-80 w-80' src={img} alt="Shoes" /></figure>  
      </PhotoView>
    </PhotoProvider>
  <div className="card-body">
    <h2 className="card-title">{description}</h2>
    <p className='text-xl'>Price:${price}</p>
    <p>rating:
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        </p>    
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default Featured;