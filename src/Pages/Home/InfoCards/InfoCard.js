import React from 'react';

const InfoCard = ({card}) => {
    const {description,icons,bgClass} =card
    return (
        <div className={`card px-6  card-side  shadow-xl ${bgClass}`}>
        <figure><img  className="w-20 h-20"src={icons} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{description}</h2>
        
          
        </div>
      </div>
    );
};

export default InfoCard;