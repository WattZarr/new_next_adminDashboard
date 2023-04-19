import React, { useState } from 'react'
import Logo from '../assets/NNU_Logo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = ({token,setToken,setEmailState}) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLoginFail,setIsLoginFail] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async(e) => {
      e.preventDefault();
      console.log(email,password);
      await axios.post('http://localhost:4000/api/login',{email,password}).then((response) => {
        if(response.data.msg == "OK"){
          setToken();
          setEmailState(email);
          navigate('/home/courses')
        }
        else{
          setIsLoginFail(true);
          console.log(isLoginFail);
        }
      }).catch((error) => console.log(error));
  }

  return (
    <div className='w-full h-[90vh]'>
      <div>
        <img src={Logo} className='w-24 mx-auto pt-16' />
        <div className='mx-4 my-4'>
          <h1 className='text-3xl font-bold text-center'>Welcome Back</h1>
          <p className='text-center text-sm'>Log in to your account</p>
          {isLoginFail && (
            <p className='text-center text-xs mt-4 text-red-500'>Login Failed:Your email or password is incorrect! Please Try again.</p>
          ) }
          <form className='mt-8 text-black w-[40%] mx-auto border-2 rounded-lg px-8 py-8' method='post' onSubmit={loginHandler}>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" onChange={(e)=> setEmail(e.target.value)} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email <span></span> </label>
                
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" onChange={(e)=> setPassword(e.target.value)} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button type="submit" className="flex mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          </form>

        </div>
      </div>
              
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token : state.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken : () =>  {dispatch({type : 'SET_TOKEN'})},
    setEmailState : (email) => {dispatch({type : 'SET_EMAIL',email : email})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)