import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts';

const ProductDetails = () => {
    let params = useParams();
    const navigate = useNavigate();
    const restockedRef = useRef('');
    const [products, setProducts] = useProducts(`http://localhost:5000/products/${params.productId}`);
    let {_id, name, price, image, quantity, minQuantity, description} = products;
    let sold = "";
    if(quantity == 0){
        sold = "Sold Out";
    }
    else{
        sold = "Available in Stock";
    }

    const handleOnDelivery = event => {
        // const name = event.target.name.value;
        // const email = event.target.email.value;

        let {quantity, ...rest} = products;

        const number = parseInt(quantity);
        if(quantity == 0){
            toast('Stock Out...!!!!')
            return;
        }
        quantity = number-1;

        const updatedProduct = {quantity};

        
        const newProduct = {quantity, ...rest};


        // send data to the server
        const url = `http://localhost:5000/products/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(newProduct);
            setProducts(newProduct);
            console.log('success', data);
            toast('The product has been delivered successfully!!!');
        })
    }
    const handleOnRestock = event => {
        const restocked = restockedRef.current.value;
        const restock = parseInt(restocked);
        let {quantity, ...rest} = products;
        const number = parseInt(quantity);
        quantity = number+restock;

        const updatedProduct = {quantity};
        
        const newProduct = {quantity, ...rest};

        // send data to the server
        const url = `http://localhost:5000/products/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(newProduct);
            setProducts(newProduct);
            console.log('success', data);
            toast('The product has been restocked successfully!!!');
        });
    }

    return (
        <div className='mb-20'>
        <Helmet>
            <title>Wrench Station-Product Details</title>
        </Helmet>
            <h1 className='text-[#20242c] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg my-6'>Product <span className='text-[goldenrod]'>Details</span></h1>
            <div className="flex justify-center mt-20 mx-2">
                <div className="flex flex-col md:flex-row md:w-1/2 rounded-lg bg-[#20242c] shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]">
                    <img className=" w-full h-96 md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-white text-3xl font-medium mb-4">{name}</h5>
                        <div className='md:flex justify-evenly'>
                            <h5 className="text-white text-xl font-bold mb-4 mr-4">Price: ${price}.00</h5>
                            <h5 className="text-white text-xl font-bold mb-4">Stocked: {quantity}</h5>
                        </div>
                        <h5 className="text-white text-xl font-medium mb-4">Atleast Order: {minQuantity}</h5>
                        <p className="text-gray-200 text-base mb-4">
                            {description}
                        </p>
                        <h5 className="text-[#d7ab3a] text-xl font-medium mb-4">{sold}</h5>
                        <p className="text-gray-300 text-xs">Product ID: {_id}</p>
                        <div className='flex justify-center items-center my-4'>
                            <button onClick={handleOnDelivery} className='text-[#20242c] bg-white hover:bg-red-500 rounded-xl px-4 py-1 font-bold text-xl mr-1 md:mr-4'>-</button>
                            <input name='restocked' ref={restockedRef} className='border-2 border-[goldenrod] focus:border-[goldenrod] rounded-lg' type="number" value={minQuantity}></input>
                            <button onClick={handleOnRestock} className='text-[#20242c] bg-white hover:bg-[#8db914] active:bg-[#698c0a] rounded-xl px-4 py-1 font-bold text-xl ml-1 md:ml-4'>+</button>
                        </div>
                        <button onClick={handleOnDelivery} className='text-white bg-[goldenrod] active:bg-[#ca9614] focus:bg-[#9f750b] hover:bg-[#b58409] rounded-xl px-9 py-1 font-bold text-xl mr-4'>Buy Now</button>
                    </div>
                </div>
            </div>
            <button onClick={()=>navigate('/Manage')} className='rounded-3xl text-white text-2xl font-semibold bg-[goldenrod] active:bg-[#ca9614] focus:bg-[#9f750b] hover:bg-[#b58409] shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mt-10 py-2 px-20 md:px-60'>Manage Inventories</button>
        </div>
    );
};

export default ProductDetails;