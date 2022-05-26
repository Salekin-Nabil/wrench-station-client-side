import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCircleUser, faEnvelopeOpenText, faUser } from '@fortawesome/free-solid-svg-icons';
import Helmet from 'react-helmet';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const {displayName} = user;

    return (
        <div className='md:flex'>
        <Helmet>
            <title>Wrench Station-Dashboard Profile</title>
        </Helmet>
            <div className="w-60 h-auto shadow-md bg-white hidden lg:block" id="sidenavSecExample">
                <div className=''>
                <div className="pt-4 pb-2 px-6">
                    <a href="#!">
                        <div className="relative px-1">
                            <div className="">
                            <FontAwesomeIcon className='text-[goldenrod] text-4xl' icon={faCircleUser}></FontAwesomeIcon>
                            </div>
                            <div className="">
                                <p className="text-base font-semibold text-[#20242c] font-bold">{displayName}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <ul className="relative px-1">
                    <li className="relative">
                        <Link to="/Dashboard" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faUser}></FontAwesomeIcon>
                            <span>My Profile</span>
                        </Link>
                    </li>
                </ul>
                <ul className="relative px-1">
                    <li className="relative">
                        <Link to="/Dashboard/Orders" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faCartArrowDown}></FontAwesomeIcon>
                            <span>My Orders</span>
                        </Link>
                    </li>
                </ul>
                <ul className="relative px-1">
                    <li className="relative">
                        <Link to="/Dashboard/Reviews" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faEnvelopeOpenText}></FontAwesomeIcon>
                            <span>Add a Review</span>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className=''>
                <h1 className='md:text-[4vw] text-3xl md:py-6 text-[#20242c] font-bold md:w-96 md:mx-auto my-8'>Dash<span className='text-[goldenrod]'>board</span></h1>
                <div className='hidden md:block'>
                    <Outlet></Outlet>
                </div>
            <div className='md:hidden flex flex-col items-center justify-center'>
                
                <ul className="relative px-1">
                    <li className="relative">
                        <Link to="/Dashboard" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faUser}></FontAwesomeIcon>
                            <span>My Profile</span>
                        </Link>
                    </li>
                </ul>
                <ul className="relative px-1">
                    <li className="relative">
                        <Link to="/Dashboard/Orders" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faCartArrowDown}></FontAwesomeIcon>
                            <span>My Orders</span>
                        </Link>
                    </li>
                </ul>
                <ul className="relative px-1">
                    <li className="relative">
                        <Link to="/Dashboard/Reviews" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faEnvelopeOpenText}></FontAwesomeIcon>
                            <span>Add a Review</span>
                        </Link>
                    </li>
                </ul>
                </div>
                <div className='md:hidden mt-4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;