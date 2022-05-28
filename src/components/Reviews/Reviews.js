import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews] = useState({});

    useEffect(()=>{
        fetch("https://ancient-scrubland-39146.herokuapp.com/reviews_6")
        .then(res=>res.json())
        .then(data=>setReviews(data));
    }, []);

    const data = Array.from(reviews);
    
    return (
        <div id='services'>
            <h1 className='text-[#20242c] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>Client's <span className='text-[goldenrod]'>Opinion</span></h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                {
                    data.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;