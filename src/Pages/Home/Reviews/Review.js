import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Review = ({review}) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <p>rating:
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        </p>    
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;