import React, { useEffect, useState } from 'react'
import {TfiTrash} from 'react-icons/tfi'
import {FcApproval} from 'react-icons/fc'
import axios from 'axios'

const Register = () => {

  const [data,setData] = useState([]);

  const getData = () => {
    axios.get(`${import.meta.env.VITE_API_KEY}api/register-info`).then((response) => setData(response.data)).catch((error) => console.log(error))
  }

  const deleteHandle = () => {
    if(confirm("Are you sure to delete this registration? This action can't be undone.")){
        axios.delete(`${import.meta.env.VITE_API_KEY}api/delete-register/${data[0]._id}`).then((response) => console.log(response.data)).catch((error) => console.log(error));
    }

    getData();
  }

  useEffect(() => {
    getData();
  })

  return (
<div>
    <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold mx-4'>Register Information</h1>
    </div>

     <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg mx-8">
      <table className="bg-white w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-700">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Education
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Course
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody>
            {data?.map((e) => (
                <tr className="bg-white border-b dark:bg-white dark:text-black">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {e.name}
                    </th>
                    <td className="px-6 py-4">
                        +95{e.phone}
                    </td>
                    <td className="px-6 py-4">
                        {e.email}
                    </td>
                    <td className="px-6 py-4">
                        {e.education}
                    </td>
                    <td className="px-6 py-4">
                        {e.course}
                    </td>
                    <td className="px-6 py-4 flex items-center gap-3 text-2xl">
                    <button onClick={deleteHandle} className="text-red-600"> <TfiTrash/> </button>
                    </td>
                </tr>
            ))}
                            
          </tbody>
      </table>
  </div>

</div>
  )
}

export default Register