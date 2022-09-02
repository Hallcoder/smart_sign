import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo.png";
function Welcome() {
    const navigate  = useNavigate();
    return ( 
        <div className='flex min-h-screen'>
         <div className='flex flex-col w-full h-screen  justify-center items-center'>
            <img src={logo} alt="" className='min-w-2/12 mr-auto mb-10 ml-auto min-h-2/6' />
            <p className='text-2xl text-center m-2'>Signing permissions has never been easier than today</p>
            <button onClick={() => navigate('/login') } className='bg-blue-700 h-20 w-60 text-white text-xl rounded-md font-bold'>Get Started</button>
         </div>
        </div>
     );
}

export default Welcome;