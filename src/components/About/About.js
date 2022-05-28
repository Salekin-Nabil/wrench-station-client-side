import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
    return (
        <div className='mt-[5vw] md:flex items-center justify-around md:mx-[5vw] order-first mb-20'>
            <Helmet>
                <title>Wrench Station-Portfolio</title>
            </Helmet>
            <div className='my-[10vw] md:my-0 flex justify-center order-last'>
                <img className='w-[80vw] md:w-[40vw] rounded-full bg-gray-200 border-8 border-[#20242c] shadow-lg shadow-[gray]' src='victory.png' alt=''/>
            </div>
            <div className='md:text-left'>
                <h1 className='md:text-5xl text-3xl text-[#20242c] font-bold'>Shirajus Salekin Nabil</h1>
                <h1 className='md:text-4xl text-2xl text-[#deb347] font-bold'>Junior Developer</h1>
                <p className='md:w-7/12 mt-[2vw] text-[#20242c]'>My objective is to obtain a challenging position in a high quality engineering environment where my <span className='text-[goldenrod] font-semibold'>resourceful
                experience</span> and <span className='text-[goldenrod] font-semibold'>academic skills</span> will add value to organizational operations.</p>
                <p className='md:w-7/12 mt-[2vw] text-[#20242c]'>Education: <span className='text-indigo-500'>B.Sc. in C.S.E.</span> from <span className='text-[goldenrod]'>Daffodil International University</span>.</p>
                <p className='md:w-7/12 mt-[1vw] text-[#20242c]'>Interested areas: <span className='text-indigo-500'>Blockchain, Web Development, Machine Learning</span></p>
                <p className='md:w-7/12 mt-[1vw] text-[#20242c]'>Expertise: <span className='text-[goldenrod]'>Solidity, Java Script, Python, React js, Node js</span></p>
                <p className='md:w-7/12 mt-[1vw] mb-[40px] text-[#20242c]'>Familiar with: <span className='text-indigo-500'>Android Studio, NFT, HyperLedger, Web3 js</span></p>
                <p className='md:w-7/12 mt-[1vw] text-[#20242c]'>1. Live site link: <a target="_blank" href='https://gymniac-d9a71.web.app/' className='text-[goldenrod]'>Gymniac</a></p>
                <p className='md:w-7/12 mt-[1vw] text-[#20242c]'>2. Live site link: <a target="_blank" href='https://defense-on-demand.web.app/' className='text-indigo-500'>Defense on Demand</a></p>
                <p className='md:w-7/12 mt-[1vw] mb-[40px] text-[#20242c]'>3. Live site link: <a target="_blank" href='https://pixel-analytica.netlify.app' className='text-[goldenrod]'>Pixel Analytica</a></p>
            </div>
        </div>
    );
};

export default About;