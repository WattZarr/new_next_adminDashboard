import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Edit = () => {

   const {id} = useParams();
   const [title,setTitle] = useState("");
   const [duration,setDuration] = useState("");
   const [level,setLevel] = useState("");
   const [image,setImage] = useState("");
   const [price,setPrice] = useState("");
   const [isHandleImage,setIsHandleImage] = useState(false);
   const navigate = useNavigate();

   const getCourseData = () => {
        axios.get(`${import.meta.env.VITE_API_KEY}api/${id}`)
                .then((response) => {
                    setTitle(response.data.title)
                    setDuration(response.data.duration)
                    setLevel(response.data.level)
                    setPrice(response.data.price)
                    setImage(response.data.image)
                }).catch((error) => {
                    console.log(error)
                })
   }

   const handleSubmit = (e) => {
      e.preventDefault();

        const fData = new FormData();
        fData.append("image",image)
        fData.append("title",title)
        fData.append("duration",duration)
        fData.append("level",level)
        fData.append("price",price)
        fData.append("isImage",isHandleImage)

      axios.patch(`${import.meta.env.VITE_API_KEY}api/${id}`,fData)
      .then((response)=>{
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
      
  
      navigate('/');

   }

   const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
    setIsHandleImage(true);
   }

   useEffect(()=>{
    getCourseData()
   },[])

  return (
    <div className='mx-4'>
    <h1 className='text-3xl font-bold'>Edit Course</h1>
    <form className='mt-8 text-black' onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="courseTitle" id="courseTitle" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="courseTitle" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Course Title</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} name="duration" id="duration" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="duration" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Duration</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} name="level" id="level" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="level" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Level</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="file" onChange={handleImageUpload} name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image<span className='text-xs text-red-500'>(If no image is chosen, we will use your previous image.)</span></label>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

  </div>
  )
}

export default Edit