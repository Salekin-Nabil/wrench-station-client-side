import React from 'react';
import Rating from 'react-rating';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({review}) => {
    const {userName, userEmail, ratings, reviews} = review;
    return (
        <div className=''>
            <div className="flex justify-center my-[5vw]">
                <div className="rounded-xl shadow-2xl text-white hover:text-[#20242c] shadow-white bg-[#20242c] w-[300px] max-w-sm p-5 h-[350px] hover:bg-indigo-50 mx-2">
                    {/* <a className='flex justify-center' href="#!">
                    <img className="rounded-full border-[10px] border-white" src={image} alt=""/>
                    </a> */}
                    <h4 className='text-[24px] font-bold mt-[40px]'>{userName}</h4>
                    <h5 className='text-[20px] font-bold mt-[40px]'>{userEmail}</h5>
                    <Rating className='mt-[2vw]'
                        initialRating={reviews}
                        emptySymbol={<FontAwesomeIcon className='mr-[15px] text-xl' style={{color: 'gray'}} icon={faStar} />}
                        
                        fullSymbol={<FontAwesomeIcon className='mr-[15px] text-xl text-yellow-400 hover:text-yellow-800' style={{color: ''}} icon={faStar} />}
                    
                        readonly
                    ></Rating>
                    <p className='text-[14px] mt-[40px] font-medium'>{ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;