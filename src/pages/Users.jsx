import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {FaUserEdit} from 'react-icons/fa'
import {TfiTrash} from 'react-icons/tfi'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Users = ({stateEmail}) => {

  const [users,setUsers] = useState([]);

  const currentUser = users.filter((u) => u.email == stateEmail)
  const usersWithoutCurrent = users.filter((u) => u.email != stateEmail)

  const getAllUesrs = async() => {
    axios.get(`${import.meta.env.VITE_API_KEY}api/users`).then((response)=>setUsers(response.data)).catch((error) => console.log(error));
  }

  const deleteHandle = (id) => {
    if(confirm("Are you sure to delete this user?This action can't be undone")){
      axios.delete(`${import.meta.env.VITE_API_KEY}api/${id}`).then((response) => {
        console.log(response.data)
      }).catch((error) => console.log(error));
      
    }
  }

  useEffect(()=> {
    getAllUesrs();
  })

  return (
    <div>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold mx-4'>Users</h1>
            {currentUser[0]?.role == "admin" && (
              <Link to='/home/create-user'><BsFillPlusCircleFill className='text-4xl text-dark-green mx-8 cursor-pointer' /></Link>
            )}
        </div>

         <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg mx-8">
          <table className="bg-white w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-700">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Role
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
              <tr key={currentUser[0]?._id} className="bg-white border-b dark:bg-white dark:text-black">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {currentUser[0]?.name}
                  </th>
                  <td className="px-6 py-4">
                      {currentUser[0]?.role}
                  </td>
                  <td className="px-6 py-4">
                      {currentUser[0]?.email}
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3 text-2xl">
                  <Link to={`/home/edit-user/${currentUser[0]?._id}`}><button href="#" className="text-blue-600"> <FaUserEdit/> </button></Link>
                      <button onClick={()=>deleteHandle(currentUser._id)} className="text-red-600"> <TfiTrash/> </button>
                  </td>
                </tr>
                {usersWithoutCurrent?.map((user)=> 
                 (
                  <tr key={user._id} className="bg-white border-b dark:bg-white dark:text-black">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {user.name}
                  </th>
                  <td className="px-6 py-4">
                      {user.role}
                  </td>
                  <td className="px-6 py-4">
                      {user.email}
                  </td>
                  {currentUser[0]?.role == "admin" && (
                  <td className="px-6 py-4 flex items-center gap-3 text-2xl">
                    <Link to={`/home/edit-user/${user._id}`}><button className="text-blue-600"> <FaUserEdit/> </button></Link>
                    <button onClick={()=>deleteHandle(user._id)} className="text-red-600"> <TfiTrash/> </button>
                  </td>
                  )}
                </tr>
                ))}
                  
              </tbody>
          </table>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    stateEmail :  state.email
  }
}

export default connect(mapStateToProps)(Users)