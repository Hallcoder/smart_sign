import React, { useRef, useState } from 'react';
import Input from '../components/common/input';
import logo from "../assets/images/logo.png";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';
import { loginFormSchema } from '../lib/constants';
import handleFormSubmission from '../lib/FormSubmission';
import { handleChange } from '../lib/handleChange';
function Login() {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
      email:'',
      password:'',
    });
    const buttonRef = useRef();
    const handleSubmit = async(e) => {
   e.preventDefault()
  buttonRef.current.innerHTML = `
Loading...
  `;
  let validate = loginFormSchema.validate(formData);
  if(validate.error){
    swal(validate.error.details[0].message);
    buttonRef.current.innerHTML = 'Login'
    return
  }else{
  let data = await handleFormSubmission(formData,`${api}/login`,POST);
  if(data.data.status == 200){
    swal('Log in successfully',{icon:'success'});
    navigate(`/options`);
   }
  }
    }
    return (  
        <div>
          <div className='border-2 border-blue-400 rounded-md sm:w-4/12 w-full mt-40 h-[60vh] m-auto  items-center flex flex-col'>
            <img src={logo} alt="" className='w-20 h-20 mt-4' />
            <h1 className='text-3xl font-bold mt-6'>Login</h1>
            <form  onSubmit={(e) => handleSubmit(e)} className='mt-16 sm:w-10/12 w-full flex flex-col'>
                <Input type={'text'} onChange={(e) => handleChange(e,setFormData,formData)} value={formData['email']} name={'email'} placeholder={'Enter your email...'} label={'Email'}/>
                <Input type={'password'} onChange={(e) => handleChange(e,setFormData,formData)} value={formData['password']} name={'password'} placeholder={'Your password...'} label={'Password'}/>
                <button ref={buttonRef}  className='bg-blue-700 text-white font-bold text-2xl rounded-md h-16 w-40 m-auto mt-4'>Login</button>
            </form>
          </div>
        </div>
    );
}

export default Login;