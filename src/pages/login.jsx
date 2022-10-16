import React, { useRef, useState } from "react";
import { api, loginFormSchema } from "../lib/constants";
import { handleChange } from "../lib/handleChange";
import Input from "../components/common/input";
import logo from "../assets/images/logo.png";
import swal from "sweetalert";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../lib/firebase-config";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const[state,setState] = useState('Login');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const buttonRef = useRef();
  const handleSubmit = async e => {
    e.preventDefault();
    setState('Loading...');
    let validate = loginFormSchema.validate(formData);
    if (validate.error) {
      swal(validate.error.details[0].message);
      setState('Login')
      return;
    } else {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(userCredential => {
          setFormData({
            email:'',
            password:''
          });
          swal(userCredential.user.toString());
          localStorage.setItem('user', userCredential.user.accessToken);
          axios.post(`${api}/user/save`,{token:localStorage.getItem('user')})
          .then(res => {
            swal("Login successfully!");
            navigate("/options");
          }).catch(err => {
            swal(err.response.data);
            setState('Login')
            return;
          })
          
        })
        .catch(err => {
          swal(err.message);
          setState('Login')
        });
    }
  };
  return (
    <div>
      <div className="text-sm shadow-lg p-1 rounded-md sm:w-4/12 w-full mt-32 h-[70vh] m-auto  items-center flex flex-col">
        <img src={logo} alt="" className="w-20 h-20 mt-4" />
        <h1 className="text-3xl font-bold mt-6">Login</h1>
        <form
          onSubmit={e => handleSubmit(e)}
          className="mt-16 sm:w-10/12 w-full flex flex-col"
        >
          <Input
            type={"text"}
            onChange={e => handleChange(e, setFormData, formData)}
            value={formData["email"]}
            name={"email"}
            placeholder={"Enter your email..."}
            label={"Email"}
          />
          <Input
            type={"password"}
            onChange={e => handleChange(e, setFormData, formData)}
            value={formData["password"]}
            name={"password"}
            placeholder={"Your password..."}
            label={"Password"}
          />
          <button
            ref={buttonRef}
            className="bg-blue-700 text-white    text-xl rounded-md h-14 w-40 m-auto mt-4"
          >
            {state}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
