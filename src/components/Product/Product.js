import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, price, image, quantity, minQuantity, description} = product;

    const navigate = useNavigate();
    return (
        <div className=''>
            <div className="flex justify-center my-[5vw]">
                <div className="rounded-3xl shadow-2xl shadow-[gray] hover:bg-indigo-50 max-w-sm p-2 md:p-5 h-[640px] bg-[#20242c] text-white mx-2 hover:text-[#20242c]  hover:shadow-[gray] hover:shadow-xl">
                    <a className='flex justify-center' href="#!">
                    <img className="rounded-3xl w-full h-[300px]" src={image} alt=""/>
                    </a>
                    <h4 className='text-[20px] font-bold mt-[20px]'>{name}</h4>
                    <p className='text-[16px] mt-[20px] font-medium'>{description}</p>
                    <h3 className='text-[24px] font-bold mt-[20px]'>Price: ${price}.00</h3>
                    <h4 className='text-[18px] font-bold mt-[10px]'>Available Stock: {quantity}</h4>
                    <h4 className='text-[20px] font-bold mt-[10px]'>Atleast Order: {minQuantity}</h4>
                    
                    <div className="flex justify-center mt-8">
                        <button onClick={()=>navigate(`/Inventory/${_id}`)} type="button" className="block px-6 py-2.5 w-80 md:w-80 bg-[goldenrod] text-white font-medium text-lg leading-tight uppercase rounded-3xl shadow-md hover:bg-[#c6910c] hover:shadow-lg focus:bg-[#876309] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#a07407] active:shadow-lg transition duration-150 ease-in-out">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;