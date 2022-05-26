import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getProducts = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/myOrders?buyer=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/Login')
                }
            }
        }
        getProducts();

    }, [user]);
    return (
        <div>
        <Helmet>
            <title>Wrench Station-My Orders</title>
        </Helmet>
            <h1 className='text-[goldenrod] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>My <span className='text-[#20242c]'>Orders</span></h1>
            <div className="flex flex-col mx-6 ">
                <div className="overflow-x-auto sm:-mx-2 lg:-mx-4 ">
                    <div className="py-2 inline-block min-w-full sm:px-4 lg:px-6 ">
                    <div className="overflow-hidden rounded-lg shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]">
                        <table className="min-w-full ">
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th scope="col" className="text-lg font-bold text-[#20242c] px-6 py-4 ">
                                        Product Image
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-[#20242c] px-6 py-4 ">
                                        Product Name
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-[#20242c] px-6 py-4 ">
                                        Bill
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-[#20242c] px-6 py-4 ">
                                        Ordered Quantity
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-[#20242c] px-6 py-4 ">
                                        Status
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-[#20242c] px-6 py-4 ">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                orders.map(order =>
                                
                                    <tr key={order._id} className="bg-[#20242c] border-b transition duration-300 ease-in-out hover:bg-gray-400">
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap flex justify-center">
                                            <img className="rounded-lg w-full md:w-1/6" src={order.productImage} alt=""/>
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {order.productName}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            ${order.bill}.00
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {order.quantity}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {order.status}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            <button className='rounded-full bg-red-700 text-white py-3 px-4'><FontAwesomeIcon className='text-white' icon={faTrashCan}></FontAwesomeIcon></button>
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
        </div>
    );
};

export default MyOrders;