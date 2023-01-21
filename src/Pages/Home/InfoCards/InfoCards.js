import React from 'react';
import credit from "../../../Assets/icons/credit-card.png";
import premium from "../../../Assets/icons/premium.png";
import fast from "../../../Assets/icons/fast-delivery.png";
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData=[
        {
          id:1,
          description:"FAST SECURE PAYMENTS",
          icons:credit,
          bgClass:"bg-accent",
        },
        {
          id:2,
          description:"PREMIUM PRODUCTS",
          icons:premium,
          bgClass:"bg-secondary",
        },
        {
          id:3,
          description:"FREE & FAST DELIVERY",
          icons:fast,
          bgClass:"bg-accent",
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
            {
                cardData.map(card =><InfoCard
                 key={card.id}
                 card={card}
                ></InfoCard>
                    
                    )
            }
        </div>
    );
};

export default InfoCards;