import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts("http://localhost:5000/products_6");
    const navigate = useNavigate();
    
    return (
        <div id='products'>
            <h1 className='text-[#20242c] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>Trending <span className='text-[goldenrod]'>Products</span> Inventory</h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            {/* <button onClick={()=>navigate('/Manage')} className='rounded-3xl text-white text-2xl font-semibold bg-[goldenrod] active:bg-[#ba890c] focus:bg-[#7f5e0b] hover:bg-[#b8880d] shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mt-10 py-2 px-20 md:px-60'>Manage Inventories</button> */}
        </div>
    );
};

export default Products;