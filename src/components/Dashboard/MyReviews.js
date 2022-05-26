import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Helmet from 'react-helmet';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';

const MyReviews = () => {
    const [user] = useAuthState(auth);
    const {displayName, email} = user;
    const reviewRef = useRef('');
    const [review, setReview] = useState(0);

    const ratingChanged = (newRating) => {
        setReview(newRating);
      };

    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        const data = {
            "userName": user.displayName,
            "userEmail": user.email,
            "ratings": reviewRef.current.value,
            "reviews": review
        };
        console.log(data);
        
        const url = `http://localhost:5000/reviews/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            toast('Thanks for your valuable review.');
        });
    };
    return (
        <div>
            <Helmet>
                <title>Wrench Station-Add a Review</title>
            </Helmet>
             <h1 className='text-[goldenrod] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>My <span className='text-[#20242c]'>Review</span></h1>
             <div className='flex items-center'>
                <div className="block p-6 rounded-xl shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] bg-white w-full md:mx-1 mb-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='text-2xl font-semibold mb-4 text-[goldenrod]'>Add a Review</p>
                        <div className="form-group mb-6 w-full mr-2">
                            <input type="text" className="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border-4 border-solid border-[goldenrod]
                                    shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]
                                    rounded-xl
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none"
                                    value={displayName} readOnly required/>
                        </div>
                        <div className="form-group mb-6 w-full">
                            <input type="email" className="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border-4 border-solid border-[goldenrod]
                                    shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]
                                    rounded-xl
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none"
                                    value={email} readOnly required/>
                        </div>
                        <div className='flex justify-center mb-4'>
                            <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                            />
                        </div>
                        <div className="form-group mb-6 w-full mr-2">
                            <input type="text" className="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border-4 border-solid border-[goldenrod]
                                    shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]
                                    rounded-xl
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none"
                                    ref={reviewRef}
                                    placeholder="Review Description" required/>
                        </div>
                                
                        <div className="form-group form-check text-center mb-6">
                            <input type="checkbox"
                                    className="form-check-input appearance-none h-4 w-4 border border-[goldenrod] rounded-sm bg-white checked:bg-[goldenrod] checked:border-[goldenrod] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            />
                            <label className="form-check-label inline-block text-[#20242c]" htmlFor="exampleCheck87">Send me a copy of this message</label>
                            </div>
                            <button type="submit" className="
                                w-full
                                px-6
                                py-2.5
                                bg-[goldenrod]
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded-xl
                                hover:bg-[#c4900c]
                                focus:bg-[#aa7d0a] 
                                active:bg-[#bd8b0b] focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg
                                shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]
                                transition
                                duration-150
                                ease-in-out">Send</button>
                    </form>
                </div>
                <div className='hidden md:block'>
                    <img src={logo} alt=''/>
                    <h3 className='text-4xl font-semibold text-[#20242c]'><span className='bg-[#20242c] px-1 rounded text-white mb-4 md:mb-0'>Wrench</span>Station</h3>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;