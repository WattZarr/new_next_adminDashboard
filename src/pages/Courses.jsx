import React, { useEffect, useState } from 'react'
import CourseCard from '../components/CourseCard'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Courses = () => {

  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_KEY}api`).then((response) => {
      setCourses(response.data);
      setLoading(false)
    })
  });
  

  return (
    <div>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold mx-4'>Courses</h1>
            <Link to='/home/create-course'><BsFillPlusCircleFill className='text-4xl text-dark-green mx-8 cursor-pointer' /></Link>
        </div>
        {loading && (
          <div className='w-full flex items-center h-screen justify-center'>
            <div className="loader loader--style1" title="0">
              <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" xmlSpace="preserve">
              <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
              <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                C22.32,8.481,24.301,9.057,26.013,10.047z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="0.5s"
                  repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
             <p>Loading</p>
          </div>
        )}
        <div className='mx-4 flex gap-4 flex-wrap'>
          {courses?.map((e) => (
            <CourseCard key={e._id} data={e}></CourseCard>
          ))}
            
        </div>
    </div>
  )
}

export default Courses