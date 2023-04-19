import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [role,setRole] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/create-user',{name,email,role,password}).then((response)=>console.log(response.data)).catch((error) => console.log(error));
    navigate('/home/users')
  }

  return (
    <div className='mx-4'>
    <h1 className='text-3xl font-bold'>Add New User</h1>
    <form className='mt-8 text-black' encType="multipart/form-data" method='post' onSubmit={submitHandler}>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={(e)=>setName(e.target.value)} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
      <label htmlFor="role" className="block mb-2 text-sm font-medium text-black">Select an option</label>
        <select id="role" onChange={(e)=>setRole(e.target.value)} className="text-sm rounded-lg block w-full p-2.5 bg-white border-2 border-black placeholder-black text-black">
        <option defaultValue={""} disabled>Choose role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        </select>
        </div>
      <button type="submit" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </div>
  )
}

export default CreateUser