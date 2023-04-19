import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Users from './pages/Users'
import CreateCourse from './pages/CreateCourse'
import Edit from './pages/Edit'
import Courses from './pages/Courses'
import CreateUser from './pages/CreateUser'
import Register from './pages/Register'
import UserEdit from './pages/UserEdit'

const App = () => {
  return (
    <div className='font-roboto max-w-[80%] mx-auto my-8 bg-slate-50 shadow-xl rounded-xl'>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='home' element={<Home/>}>
          <Route path='courses' element={<Courses/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='create-course' element={<CreateCourse/>}></Route>
          <Route path='edit-page/:id' element={<Edit></Edit>}></Route>
          <Route path='create-user' element={<CreateUser></CreateUser>}></Route>
          <Route path='register-info' element={<Register></Register>}></Route>
          <Route path='edit-user/:id' element={<UserEdit></UserEdit>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App