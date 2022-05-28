import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo.png';
import './Header.css';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <nav className='bg-white py-4  shadow-2xl shadow-[gray] sticky-top '>
            <div className='flex items-center'>
                <div onClick={()=>setOpen(!open)} className='w-20 h-20 md:hidden ml-4 mt-[40px]'>
                    {open ? <XIcon className='text-[#20242c]'></XIcon> : <MenuIcon className='text-[#20242c]'></MenuIcon>}
                </div>
                <div onClick={()=>navigate('/')} className='flex items-center md:justify-start justify-center md:pl-8 cursor-pointer'>
                    <h4 className='text-[26px] font-semibold text-[#20242c]'><span className='bg-[#20242c] px-1 rounded text-white'>Wrench</span>Station</h4>
                    <img className='w-[12%]' src={logo} alt='' />
                </div>
                <div className={`md:flex bg-white md:ml-52 justify-center md:static w-full absolute duration-500 ease-in ${open ? 'top-28' : 'top-[-220px]'}`}>
                    <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-gray-600 hover:text-gray-900 md:font-bold border-b-4 border-white' to="/">HOME</CustomLink>
                    {/* <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold' to="Home#services">SERVICES</CustomLink> */}
                    <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-gray-600 hover:text-gray-900 md:font-bold border-b-4 border-white' to="/Blogs">BLOGS</CustomLink>
                    {
                        user ?
                            <div className='md:flex justify-center'>
                                <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-gray-600 hover:text-gray-900 md:font-bold border-b-4 border-white' to='/Dashboard'>DASHBOARD</CustomLink>
                                <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-gray-600 hover:text-gray-900 md:font-bold border-b-4 border-white' to="/About">PORTFOLIO</CustomLink>
                                <CustomLink onClick={handleSignOut} className='mr-[2vw] md:py-[5px] px-[20px] text-gray-600 hover:text-gray-900 md:font-bold border-b-4 border-white' to='/Login'>LOG OUT</CustomLink>
                            </div>
                        :
                        <div className='md:flex justify-center'>
                            <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-gray-600 hover:text-gray-900 md:font-bold border-b-4 border-white' to="/About">Portfolio</CustomLink>
                            <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-gray-600 hover:text-gray-900 md:font-bold border-b-4 border-white' to="/Login">LOG IN</CustomLink>
                            <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-gray-600 hover:text-gray-900 md:font-bold border-b-4 border-white' to="/Register">REGISTER</CustomLink> 
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;