import React from 'react';
import Review from './Review'; 
import people1 from "../../../Assets/people1.png";
import people2 from "../../../Assets/people2.png";
import people3 from "../../../Assets/people3.png";
import blog from "../../../Assets/review.png";

const Reviews = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'Thomas Herry',
            img: people1,
            review: 'Good service...',
            location: 'London'
        },
        {
            _id: 2, 
            name: 'Nikita Perry',
            img: people2,
            review: 'Very quick service.',
            location: 'Birmingham'
        },
        {
            _id: 3, 
            name: 'Tim Kim',
            img: people3,
            review: 'I love your products...',
            location: 'New Castle'
        },
    ]
    return (
        <section className='my-16'>
        <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Reviews</h4>
                <h2 className="text-4xl">What Our Customer Says</h2>
            </div>
            <figure>
                <img className='w-24 lg:w-48' src={blog} alt="" />
            </figure>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review =><Review
                    key={review._id}
                    review={review}
                >
                </Review>)
            }
        </div>
    </section>
    );
};

export default Reviews;