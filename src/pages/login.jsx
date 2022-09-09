import React, {  useState } from 'react';
import Input from '../components/common/input';
import logo from "../assets/images/logo.png";
import swal from 'sweetalert';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../lib/firebase-config';
function Login() {
    const navigate = useNavigate();
    const [formData,setData] = useState({
      email:'',
      password:''
    })

    // useEffect(() =>{
    //   swal(import.meta.env.VITE_FIREBASE_APIDB)
    // },[])
    const handleSubmit = (e) => {
   e.preventDefault();
  const auth = getAuth(app)
  signInWithEmailAndPassword(auth,formData.email,formData.password)
   .then((userCredential) => {
     swal(userCredential.user)
     swal('Login successfully!');
     navigate('/options');
   }).catch(err =>{
    swal(err.message)
   })
  
    }

    return (  
        <div>
          <div className='border-2 border-blue-400 rounded-md sm:w-4/12 w-full mt-40 h-[60vh] m-auto  items-center flex flex-col'>
            <img src={logo} alt="" className='w-20 h-20 mt-4' />
            <h1 className='text-3xl font-bold mt-6'>Login</h1>
            <form  onSubmit={(e) => handleSubmit(e)} className='mt-16 sm:w-10/12 w-full flex flex-col'>
                <Input type={'text'} onChange={(e) => handleCh} value={formData['email']} name={'email'} placeholder={'Enter your email...'} label={'Email'}/>
                <Input type={'text'} value={formData['password']} name={'password'} placeholder={'Your password...'} label={'Password'}/>
                <button  className='bg-blue-700 text-white font-bold text-2xl rounded-md h-16 w-40 m-auto mt-4'>Login</button>
            </form>
          </div>
        </div>
    );
}

export default Login;