import React from 'react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Payment = () => {
    const {id} = useParams();

    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-24'>
            <Helmet>
                <title>Wrench Station-Payment</title>
            </Helmet>
            <h1 className='text-[#20242c] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>Payment <span className='text-[goldenrod]'>Section</span></h1>
            <div class="flex justify-center mb-8">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-left">
                    <h5 class="text-[goldenrod] font-bold text-2xl leading-tight mb-2">Hello, {order.buyerName}!</h5>
                    <p class="text-[#20242c] text-xl mb-4">
                        You have ordered <span className='text-[goldenrod] font-semibold'>{order.quantity} {order.productName}</span>
                    </p>
                    <p class="text-[#20242c] text-xl mb-4">
                        Please pay <span className='text-[goldenrod] font-semibold'>${order.bill}.00</span>
                    </p>
                    {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                </div>
            </div>
            <div class="flex justify-center mb-24">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-left">
                    <h5 class="text-[goldenrod] font-bold text-2xl leading-tight mb-2">Hello, {order.buyerName}!</h5>
                    <p class="text-[#20242c] text-xl mb-4">
                        You have ordered <span className='text-[goldenrod] font-semibold'>{order.quantity} {order.productName}</span>
                    </p>
                    <p class="text-[#20242c] text-xl mb-4">
                        Please pay <span className='text-[goldenrod] font-semibold'>${order.bill}.00</span>
                    </p>
                    {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;