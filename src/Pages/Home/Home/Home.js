import React from 'react';
import Banner from '../Banner/Banner';
import Featureds from '../Featureds/Featureds';
import InfoCards from '../InfoCards/InfoCards';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Featureds></Featureds>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;