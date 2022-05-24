import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
// import useToken from '../../Hooks/useToken';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const [token, setToken] = useToken(user);

    const navigate = useNavigate();

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');  
    }

    // if (token) {
    //     navigate('/home');  
    // }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div className='container w-50 mx-auto mt-[4vw]'>
        <Helmet>
            <title>Gymniac-Register</title>
        </Helmet>
            <h1 className='md:text-[4vw] md:py-6 text-2xl text-[#20242c] font-bold shadow-2xl shadow-[gray] mx-16'>Registration <span className='text-[golden]'>Form</span></h1>
            <section className="h-screen mb-96">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleRegister}>
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]"
                            name="name"
                            placeholder="Username"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]"
                            name="email"
                            placeholder="Email address"
                            required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[goldenrod] focus:outline-none shadow-lg shadow-[gray] hover:shadow-xl hover:shadow-[gray]"
                            name="password"
                            placeholder="Password"
                            required
                            />
                        </div>

                        <div className="md:flex justify-between items-center mb-6">
                            <div className="form-group form-check">
                            <input
                                onClick={() => setAgree(!agree)}
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border-2 border-gray-300 rounded-sm bg-white checked:bg-[goldenrod] checked:border-[goldenrod] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck3"
                            />
                            <label className="form-check-label inline-block text-[#20242c]" htmlFor="exampleCheck2">Accept Terms and Conditions</label>
                            </div>
                            <p
                            className="text-[golden] hover:text-yellow-400 focus:text-yellow-500 active:text-[golden] duration-200 transition ease-in-out cursor-pointer"
                            >Update profile?</p
                            >
                        </div>
                        <button
                            disabled={!agree}
                            type="submit"
                            className="inline-block px-7 py-3 bg-[goldenrod] text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:bg-[#bb8d17] hover:shadow-xl hover:shadow-[gray] focus:bg-[#d69f11] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#dca007] active:shadow-2xl active:shadow-[gray] transition duration-150 ease-in-out w-full shadow-[gray] cursor-pointer"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Sign Up
                        </button>

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0 text-[#20242c]">OR</p>
                        </div>
                        <SocialLogin></SocialLogin>
                        <div className='flex items-center mt-6'>
                            <p className='text-[#20242c] text-left'> Already have an account?</p>
                            <Link to="/Login" className="text-[goldenrod] font-bold ml-2 hover:text-yellow-400 focus:text-yellow-500 active:text-[goldenrod] duration-200 transition ease-in-out">Login</Link>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
            <ToastContainer />
        </div>
    );
};

export default Register;