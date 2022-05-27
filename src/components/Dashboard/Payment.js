import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';
import logo from '../../images/logo.png';

const stripePromise = loadStripe('pk_test_51L4A74Hfd0Dg1f5ftju9pevdLs2UDTt8fG3yke03kDb7IMokWd8gl2hJCwd4W6f9Z0PuxdncyjxeWvVTApIbs6Ks00rbnCSs70');

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
            <div className='flex items-center'>
                <div className='hidden md:block'>
                    <img src={logo} alt=''/>
                    <h3 className='text-4xl font-semibold text-[#20242c]'><span className='bg-[#20242c] px-1 rounded text-white mb-4 md:mb-0'>Wrench</span>Station</h3>
                </div>
            <div className='mt-12 bg-[#20242c] p-2 rounded-lg h-[440px]'>
            <div class="flex justify-center mb-16">
                <div class="block p-6 rounded-lg shadow-xl shadow-white hover:shadow-lg hover:shadow-white bg-white max-w-sm w-full text-left">
                    <h5 class="text-[goldenrod] font-bold text-2xl leading-tight mb-2">Hello, {order.buyerName}!</h5>
                    <p class="text-[#20242c] text-xl mb-4">
                        You have ordered <span className='text-[goldenrod] font-semibold'>{order.quantity} {order.productName}</span>
                    </p>
                    <p class="text-[#20242c] text-xl mb-4">
                        Please pay <span className='text-[goldenrod] font-semibold'>${order.bill}.00</span>
                    </p>
                </div>
            </div>
            <div class="flex justify-center mb-24">
                <div class="block p-6 rounded-lg shadow-xl shadow-white hover:shadow-lg hover:shadow-white bg-white max-w-sm w-full text-left">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
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

export default Payment;