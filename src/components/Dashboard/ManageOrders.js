import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts';

const ManageOrders = () => {
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

    const [orders, setOrders] = useProducts("http://localhost:5000/orders");
    const [products, setProducts] = useProducts("http://localhost:5000/products");

    const handleOnShipped = id =>{
        const data = {
            "status": "approved"
        };
        
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            fetch("http://localhost:5000/orders")
            .then(res=>res.json())
            .then(data=>{
                setOrders(data);

                const order = orders.find( ({ _id }) => _id === id );
                const product = products.find( ({ _id }) => _id === order.productId );
                let updatedProduct = product.quantity - order.quantity;
                const url = `http://localhost:5000/products/${product._id}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedProduct)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log('success', data);
                    toast('The products inventory has been successfully updated!!!');
                })
            });
            toast('Successfully shipped the order.')
        });
    };
    
    const handleOnDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            })
        }
    };

    return (
        <div>
        <Helmet>
            <title>Wrench Station-Manage Orders</title>
        </Helmet>
            <h1 className='text-[#20242c] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>Manage <span className='text-[goldenrod]'>Orders</span></h1>
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
                                        Order Quantity
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Bill
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Buyer Name
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Status
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                orders.map(order =>
                                
                                    <tr key={order._id} className="bg-[#20242c] border-b transition duration-300 ease-in-out hover:bg-gray-400">
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap flex justify-center">
                                            <img className="rounded-lg border-white w-full md:w-1/6" src={order.productImage} alt=""/>
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {order.productName}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {order.quantity}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            ${order.bill}.00
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {order.buyerName}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {order.status}
                                        </td>
                                        {
                                            order.status==="unpaid" && 
                                            <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            <button onClick={()=>handleOnDelete(order._id)} className='rounded-full bg-red-700 text-white py-3 px-4 shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]'><FontAwesomeIcon className='text-white' icon={faTrashCan}></FontAwesomeIcon></button>
                                        </td>
                                        }
                                        {
                                            order.status==="pending" && 
                                            <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            <button onClick={()=>handleOnShipped(order._id)} className='rounded-xl bg-green-700 text-white py-1 px-3 shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]'>Ship Now</button>
                                        </td>
                                        }
                                        {
                                            order.status==="approved" && 
                                            <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            Shipped
                                        </td>
                                        }
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

export default ManageOrders;