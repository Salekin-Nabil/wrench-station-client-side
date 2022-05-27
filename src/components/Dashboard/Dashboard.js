import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCartFlatbedSuitcase, faCircleUser, faDolly, faEnvelopeOpenText, faLayerGroup, faShieldHalved, faTableList, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import Helmet from 'react-helmet';
import axiosPrivate from '../../api/axiosPrivate';
import { signOut } from 'firebase/auth';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const {email} = user;
    const {displayName} = user;

    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect( () => {
        const getUser = async() =>{
            
            const url = `http://localhost:5000/user/${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setUserInfo(data[0]);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/Login');
                }
            }
        }
        getUser();
    },[user]);

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
                {
                    userInfo?.admin ?
                    <>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link to="/Dashboard/MakeAdmin" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faShieldHalved}></FontAwesomeIcon>
                                    <span>Make Admin</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link to="/Dashboard/ManageProducts" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faTableList}></FontAwesomeIcon>
                                    <span>Manage Products</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link to="/Dashboard/ManageOrders" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faCartFlatbedSuitcase}></FontAwesomeIcon>
                                    <span>Manage Orders</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link to="/Dashboard/AddProducts" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faLayerGroup}></FontAwesomeIcon>
                                    <span>Add Products</span>
                                </Link>
                            </li>
                        </ul>
                    </>
                    :
                    <>
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
                    </>
                }
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
                {
                    userInfo?.admin ?
                    <>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link to="/Dashboard/MakeAdmin" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faShieldHalved}></FontAwesomeIcon>
                                    <span>Make Admin</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link to="/Dashboard/ManageProducts" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faTableList}></FontAwesomeIcon>
                                    <span>Manage Products</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link to="/Dashboard/ManageOrders" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faCartFlatbedSuitcase}></FontAwesomeIcon>
                                    <span>Manage Orders</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link to="/Dashboard/AddProducts" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#20242c] text-ellipsis whitespace-nowrap rounded hover:text-[goldenrod] hover:bg-blue-50 transition duration-300 ease-in-out font-bold" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                <FontAwesomeIcon className='text-[goldenrod] text-sm mr-3' icon={faLayerGroup}></FontAwesomeIcon>
                                    <span>Add Products</span>
                                </Link>
                            </li>
                        </ul>
                    </>
                    :
                    <>
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
                    </>
                }
                </div>
                <div className='md:hidden mt-4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;