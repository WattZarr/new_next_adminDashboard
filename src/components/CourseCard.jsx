import React, { useEffect } from 'react'
import {IoMdInformationCircleOutline} from 'react-icons/io'
import {AiOutlineClockCircle} from 'react-icons/ai'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CourseCard = (data) => {

  const handleDelete = () => {
    if(confirm("Are you sure to delete this course?")){
      axios.delete(`http://localhost:4000/api/${data.data._id}`).then((response) => console.log(response.data)).catch((error) => console.log(error));
    }
  }

  const handleEdit = () => {
    axios.patch(`http://localhost:4000/api/${data.data._id}`).then((response) => console.log(response.data)).catch((error) => console.log(error));
  }

  useEffect(()=>{
  },[])

  return (
        <div className='w-[30%] my-2 transform ease-in hover:scale-105 transition duration-200 border-2 px-2 py-2'>
            <img src={`http://localhost:4000/upload/${data.data.image}`} className='w-full h-[25vh]' alt="" />
            <h2 className='font-semibold text-lg'>{data.data.title}</h2>
            <div className='flex gap-3 items-center'>
                    <p className='flex items-center gap-2 text-slate-500'><IoMdInformationCircleOutline className='text-xl'/>{data.data.level}</p>
                    <p className='flex items-center gap-2 text-slate-500'><AiOutlineClockCircle className='text-xl'/>{data.data.duration}</p>
            </div>
        <Link to={`/home/edit-page/${data.data._id}`}><button className='mx-4 px-2 py-1 text-sm bg-dark-green hover:bg-white hover:text-dark-green trasnform trasnition duration-100 border-2 border-dark-green rounded-lg mt-4 text-white'>Edit</button></Link>
        <button onClick={handleDelete} className='mx-4 px-2 py-1 text-sm bg-red-500 hover:bg-white hover:text-red-500 trasnform trasnition duration-100 border-2 border-red-500 rounded-lg mt-4 text-white'>Delete</button>
        </div>
  )
}

export default CourseCard