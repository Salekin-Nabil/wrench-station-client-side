import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faMagnifyingGlass, faPeopleGroup, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div>
            <h1 className='uppercase text-[goldenrod] text-6xl font-bold'>Millions Business Trusts Us</h1>
            <h3 className='uppercase text-[#20242c] text-4xl mb-16 mt-4'>Try To Understand Users Expectation</h3>
            <div className='md:flex items-center justify-around'>
                <div className=''>
                    <FontAwesomeIcon className='text-[goldenrod] text-6xl' icon={faPeopleGroup}></FontAwesomeIcon>
                    <h2 className='text-6xl  text-[#20242c]'>159+</h2>
                    <p className='text-2xl text-[goldenrod]'>Served Customers</p>
                </div>
                <div className=''>
                    <FontAwesomeIcon className='text-[goldenrod] text-6xl' icon={faHandHoldingDollar}></FontAwesomeIcon>
                    <h2 className='text-6xl  text-[#20242c]'>76K</h2>
                    <p className='text-2xl text-[goldenrod]'>Annual Revenue</p>
                </div>
                <div className=''>
                    <FontAwesomeIcon className='text-[goldenrod] text-6xl' icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <h2 className='text-6xl  text-[#20242c]'>89+</h2>
                    <p className='text-2xl text-[goldenrod]'>Client's Review</p>
                </div>
                <div className=''>
                    <FontAwesomeIcon className='text-[goldenrod] text-6xl' icon={faScrewdriverWrench}></FontAwesomeIcon>
                    <h2 className='text-6xl  text-[#20242c]'>1000+</h2>
                    <p className='text-2xl text-[goldenrod]'>Tools</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;