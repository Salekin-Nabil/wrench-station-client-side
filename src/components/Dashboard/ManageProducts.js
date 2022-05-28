import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const ManageProducts = () => {
    const navigate = useNavigate();

    // useEffect( () =>{
    //     fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
    //     .then(res => res.json())
    //     .then(data => setProducts(data));
    // }, [page, size]);

    // useEffect( () =>{
    //     fetch('http://localhost:5000/productCount')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const count = data.count;
    //         const pages = Math.ceil(count/10);
    //         setPageCount(pages);
    //     })
    // }, [page]);

    const [products, setProducts] = useProducts("http://localhost:5000/products");

    
    const handleOnDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    };

    return (
        <div>
        <Helmet>
            <title>Wrench Station-Manage Products</title>
        </Helmet>
            <h1 className='text-[#20242c] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>Manage <span className='text-[goldenrod]'>Inventories</span></h1>
            <div className="flex flex-col mx-8 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden rounded-lg shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]">
                        <table className="min-w-full ">
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Image
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Name
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Price/PC
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Stocked
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Deletion
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                products.map(product =>
                                
                                    <tr key={product._id} className="bg-[#20242c] border-b transition duration-300 ease-in-out hover:bg-gray-400">
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap flex justify-center">
                                            <img className="rounded-lg border-white w-full md:w-1/6" src={product.image} alt=""/>
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {product.name}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            ${product.price}.00
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {product.quantity}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            <button onClick={()=>handleOnDelete(product._id)} className='rounded-full bg-red-700 text-white py-3 px-4 shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]  transition duration-150 ease-in-out' data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><FontAwesomeIcon className='text-white' icon={faTrashCan}></FontAwesomeIcon></button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' '>
                    {/* {
                        [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? ' text-white bg-green-600 py-1 px-3 rounded-lg mr-4': 'text-black bg-white py-1 px-3 rounded-lg mr-4'}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }
                    
                    <select className='py-1 px-3 rounded-lg' onChange={e => setSize(e.target.value)}>
                        <option value="10" defaultValue={10}>10</option>
                        <option value="15">15</option>
                        <option value="20" >20</option>
                    </select> */}
            </div>
                <button onClick={()=>navigate('/Add')} className='rounded-3xl text-white text-2xl font-semibold bg-[goldenrod] active:bg-[#af810c] focus:bg-[#b3840c] hover:bg-[#c4900b] shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] my-20 py-2 px-20 md:px-60 lg:px-[550px]'>Add New Item</button>
        </div>
    );
};

export default ManageProducts;