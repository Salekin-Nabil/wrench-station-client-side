import React from 'react';
import './Seperator..css';

const Seperator = () => {
    return (
        <div className='flex justify-center items-center my-24 md:my-32'>
            <div className='border-[2px] border-[#beafa7] mx-2 md:mr-10 md:ml-10 w-full'></div>
            <div className='border-[2px] border-[#beafa7] mx-2 md:ml-10 md:mr-10 w-full'></div>
        </div>
    );
};

export default Seperator;