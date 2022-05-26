import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews] = useState({});

    useEffect(()=>{
        fetch("http://localhost:5000/reviews_6")
        .then(res=>res.json())
        .then(data=>setReviews(data));
    }, []);

    const data = Array.from(reviews);
    
    return (
        <div id='services'>
            <h1 className='text-3xl font-bold mt-[5vw] text-[#20242c]  shadow-2xl shadow-[gray]'>Client's <span className='text-[goldenrod]'>Opinion</span></h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                {
                    data.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;