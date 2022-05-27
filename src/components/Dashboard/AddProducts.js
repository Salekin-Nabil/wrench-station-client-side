import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';

const AddProducts = () => {
    const imageRef = useRef('');
    const nameRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const minQuantityRef = useRef('');
    const descriptionRef = useRef('');

    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = () => {
        const data = {
            "image": imageRef.current.value,
            "name": nameRef.current.value,
            "price": priceRef.current.value,
            "quantity": quantityRef.current.value,
            "minQuantity": minQuantityRef.current.value,
            "description": descriptionRef.current.value
        };
        console.log(data);
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            toast('The new product is successfully added.');
        } );
        // const url1 = `http://localhost:5000/stock`;
        // fetch(url1, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res=> res.json())
        // .then(result =>{
        //     console.log(result);
        // } );
        // toast('The new product is successfully added.');
    };
    return (
        <div className=''>
        <Helmet>
            <title>Wrench Station-Add Products</title>
        </Helmet>
            <h1 className='text-[goldenrod] text-5xl font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg my-6'>Product <span className='text-[#20242c]'>Insertion</span></h1>
            <div className='md:flex items-center'>
                <div className='hidden md:block'>
                    <img src={logo} alt=''/>
                    <h3 className='text-4xl font-semibold text-[#20242c]'><span className='bg-[#20242c] px-1 rounded text-white mb-4 md:mb-0'>Wrench</span>Station</h3>
                </div>
            <div className='flex justify-center my-10'>
                <div className="block p-6 rounded-xl shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] bg-white w-full mx-4 md:mx-20">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='text-2xl font-semibold mb-4 text-[goldenrod]'>Add New Item</p>
                        <div className='md:flex justify-center'>
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
                                    focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none" id="exampleInput7"
                                    placeholder="Product's Image URL" {...register("image")} ref={imageRef} required/>
                                </div>
                                <div className="form-group mb-6 w-full">
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
                                        focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none" id="exampleInput7"
                                        placeholder="Product's Name" {...register("name")} ref={nameRef} required/>
                                </div>
                            </div>
                            <div className='md:flex justify-center'>
                                <div className="form-group mb-6 w-full mr-2">
                                    <input type="number" className="form-control block
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
                                        focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none" id="exampleInput8"
                                        placeholder="Price per Unit" {...register("price")} ref={priceRef} required/>
                                </div>
                                <div className="form-group mb-6 w-full">
                                    <input type="number" className="form-control block
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
                                        focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none" id="exampleInput9"
                                        placeholder="Stocking Quantity" {...register("quantity")} ref={quantityRef} required/>
                                </div>
                            </div>
                            <label className='text-[goldenrod] text-base font-semibold block mb-2'>Minimum Quantity to Order: </label>
                            <div className="form-group mb-6 w-full flex justify-center">
                            <input type="number" className="form-control block
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
                                        focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none" id="exampleInput9"
                                        placeholder="Minimum quantity" {...register("minQuantity")} ref={minQuantityRef} required/>
                            </div>
                            <div className="form-group mb-6">
                            <input type="text" className="form-control block
                                        w-full
                                        h-24
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
                                        focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none" id="exampleInput9"
                                        placeholder="Product Description" {...register("description")} ref={descriptionRef} required/>
                            </div>
                            <div className="form-group form-check text-center mb-6">
                            <input type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-[goldenrod] rounded-sm bg-white checked:bg-[goldenrod] checked:border-[goldenrod] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                id="exampleCheck87"/>
                            <label className="form-check-label inline-block text-[goldenrod]" htmlFor="exampleCheck87">Send me a copy of this message</label>
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
                            hover:bg-[#b28209]
                            focus:bg-[#9e7610] focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-[#a87c0e] active:shadow-lg
                            shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]
                            transition
                            duration-150
                            ease-in-out">Add Product</button>
                        </form>
                    </div>                
                </div>
                <div className='hidden md:block'>
                    <img src={logo} alt=''/>
                    <h3 className='text-4xl font-semibold text-[#20242c]'><span className='bg-[#20242c] px-1 rounded text-white mb-4 md:mb-0'>Wrench</span>Station</h3>
                </div>
                </div>
            </div>
    );
};

export default AddProducts;