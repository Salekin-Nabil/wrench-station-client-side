import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import Loading from '../Loading/Loading';

const MakeAdmin = () => {
    const [user] = useAuthState(auth);
    const {email} = user;
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect( () => {
        const getUser = async() =>{
            
            const url = `http://localhost:5000/userAll/${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setUserInfo(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/Login')
                }
            }
        }
        getUser();
    },[user]);

    const handleMakeAdmin = (userEmail) => {
        const data = {
            "admin": true
        };
        console.log(data);
        
        const url = `http://localhost:5000/userAdmin/${userEmail}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
                const getUser = async() =>{
            
                    const url = `http://localhost:5000/userAll/${email}`;
                    try{
                        const {data} = await axiosPrivate.get(url);
                        setUserInfo(data);
                    }
                    catch(error){
                        console.log(error.message);
                        if(error.response.status === 401 || error.response.status === 403){
                            signOut(auth);
                            navigate('/Login')
                        }
                    }
                }
                getUser();
                toast.success(`Successfully made an admin`);
        });
    };

    const data = Array.from(userInfo);

    return (
        <div>
        <Helmet>
            <title>Wrench Station-Make Admin</title>
        </Helmet>
            <h1 className='text-[goldenrod] text-5xl mb-8 font-bold shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray] mx-[1vw] py-[1vw] rounded-lg'>Make <span className='text-[#20242c]'>Admin</span></h1>
            <div className='md:flex items-center'>
            <div className='hidden md:block'>
                    <img src={logo} alt=''/>
                    <h3 className='text-4xl font-semibold text-[#20242c]'><span className='bg-[#20242c] px-1 rounded text-white mb-4 md:mb-0'>Wrench</span>Station</h3>
                </div>
            <div className="flex flex-col mx-6 ">
                <div className="overflow-x-auto sm:-mx-2 lg:-mx-4 ">
                    <div className="py-2 inline-block min-w-full sm:px-4 lg:px-6 ">
                    <div className="overflow-hidden rounded-lg shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]">
                        <table className="min-w-full ">
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th scope="col" className="text-lg font-bold text-[#20242c] px-6 py-4 ">
                                        Email
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-[#20242c] px-6 py-4 ">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                data.map(info =>
                                
                                    <tr key={info._id} className="bg-[#20242c] border-b transition duration-300 ease-in-out hover:bg-gray-400">
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {info.email}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {
                                                info?.admin ? 
                                                <h4 className=''>Admin</h4>
                                                :
                                                <button onClick={()=>handleMakeAdmin(info.email)} className='rounded-2xl bg-[goldenrod] text-white py-2 px-3 hover:bg-[#b9880d]'>Make Admin</button>
                                            }
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
            <div className='hidden md:block'>
                    <img src={logo} alt=''/>
                    <h3 className='text-4xl font-semibold text-[#20242c]'><span className='bg-[#20242c] px-1 rounded text-white mb-4 md:mb-0'>Wrench</span>Station</h3>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;