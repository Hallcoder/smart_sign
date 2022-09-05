import React, { useRef } from 'react';
import Input from '../components/common/input';
import logo from "../assets/images/logo.png";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';
function Login() {
    const navigate = useNavigate();
    const
    const buttonRef = useRef();
    const handleSubmit = (e) => {
   e.preventDefault()
  buttonRef.current.innerHTML = `
Loading...
  `;
  setTimeout(()=>{
    swal('Logged in succesfully!');
    navigate('/options');
  },2000)
  
    }
    return (  
        <div>
          <div className='border-2 border-blue-400 rounded-md sm:w-4/12 w-full mt-40 h-[60vh] m-auto  items-center flex flex-col'>
            <img src={logo} alt="" className='w-20 h-20 mt-4' />
            <h1 className='text-3xl font-bold mt-6'>Login</h1>
            <form  onSubmit={(e) => handleSubmit(e)} className='mt-16 sm:w-10/12 w-full flex flex-col'>
                <Input type={'text'} name={'email'} placeholder={'Enter your email...'} label={'Email'}/>
                <Input type={'text'} name={'password'} placeholder={'Your password...'} label={'Password'}/>
                <button ref={buttonRef}  className='bg-blue-700 text-white font-bold text-2xl rounded-md h-16 w-40 m-auto mt-4'>Login</button>
            </form>
          </div>
        </div>
    );
}

export default Login;