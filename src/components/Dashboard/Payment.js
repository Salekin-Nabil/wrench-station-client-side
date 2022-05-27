import React from 'react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Payment = () => {
    const {id} = useParams();

    const url = `http://localhost:5000/order/${id}`;

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
            <h3 className='text-3xl ml-4'>Please pay for: {id}</h3>
        </div>
    );
};

export default Payment;