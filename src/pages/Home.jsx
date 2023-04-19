import React, { useEffect } from 'react'
import logo from '../assets/NNU_Logo.png'
import {GoBook} from 'react-icons/go'
import {FaUsers} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {BiLogOut} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import { connect } from 'react-redux';

const Home = ({token,logout}) => {

  const navigate = useNavigate();

  const isLogin = () => {
   if(token == "empty"){
      navigate('/');
   }
  }

  const logoutHandler = () => {
    logout();
    navigate('/');
  }

  useEffect(()=> {
    isLogin()
  })

  return (
    <div className='flex'>
        <div className='w-[25%] py-8 relative h-[90vh]'>
            <div className='flex items-center'>
              <img src={logo} className='w-[30%]' />
              <h1 className='font-bold text-xl'>New Next University</h1>
            </div>
            <div className='my-8 mx-8'>
              <ul>
                <li className='text-slate-500 mb-4'>Main Menu</li>
                <NavLink to='/home/courses' 
                className={({ isActive }) => 
                (isActive ? "active-sidebar" : "text-slate-500")}>
                  <li className='side-bar-item'> <GoBook className='text-2xl font-semibold'/> Courses</li></NavLink>
                <NavLink to='/home/users'
                  className={({ isActive }) => 
                  (isActive ? "active-sidebar" : "text-slate-500")}
                ><li className='side-bar-item'> <FaUsers className='text-2xl font-semibold'/> Users</li></NavLink>
                <NavLink to='/home/register-info'
                  className={({ isActive }) => 
                  (isActive ? "active-sidebar" : "text-slate-500")}
                ><li className='side-bar-item'> <BsFillInfoSquareFill className='text-2xl font-semibold'/> Register Info</li></NavLink>
              </ul>
            </div>
            <div className='absolute bottom-4 left-8 flex items-center gap-4 font-bold text-lg cursor-pointer border-2 rounded-lg border-black px-2 py-1 hover:bg-black hover:text-white transition ease-in duration-200' onClick={logoutHandler}> <BiLogOut className='text-xl'/> Log out</div>
        </div>
        <div className='w-[75%] bg-slate-100 py-8 h-[90vh] overflow-scroll overflow-x-hidden'>
          <Outlet></Outlet>
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
    logout : () =>  {dispatch({type : 'LOGOUT'})}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)