import React, { useEffect, useState } from 'react'
import {userList} from "../../service/UserApi"
const UserList = ({user}) => {
  const [List, setlist] = useState([])

const list= ()=>{
 try {
  userList().then((res)=>{
    // console.log(res.data.data);
    setlist(res.data.data)
  }).catch((err)=>{
    console.log(err,"error");
  })
 } catch (error) {
  console.log("userList err",error);
 }
}
useEffect(() => {
 list()
}, [])
 console.log(List,"list")

  return (
 
    <div className='bg-slate-400    rounded-sm'>
         {user}
       <div className='  p-2 flex items-center '>
              <div class="avatar online">
                  <div class="w-8 rounded-full">
                    <img src="https://res.cloudinary.com/djrtauheh/image/upload/v1693815968/e0lw1ndmesjdbkxc70n8.png" />
                  </div>
              </div>
              <div className='mx-5'> vyshak kolloth </div>
      </div>
      <div className='bg-rose-400  p-2 flex items-center '>
      <input type="text" placeholder="Type here" className="input rounded-md w-full max-w-xs" />
      <div className="dropdown dropdown-right mx-1">
  <label tabIndex={0} className="btn "> ...</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li>sort by name</li>
    <li>sort by time</li>
  </ul>
</div>

      </div>

      <div className=' '>
       
        {List?.map((iteam,index)=>{return(

<div key={index} className='flex px-2 py-1'>
<div class="avatar online">
            <div class="w-12 rounded-full">
              <img className='scale-125' src="https://res.cloudinary.com/djrtauheh/image/upload/v1693815968/e0lw1ndmesjdbkxc70n8.png" />
            </div>
        </div>
        <div className='flex-row  w-full border-b-2 border-rose-500 mx-1'>
          <div className='font-bold capitalize mx-2'>
           {iteam.venue.name}
          </div>
          <div className='text-sm capitalize mx-3'>
           last message
          </div>

        </div>
</div>
        )})}
     
     
      </div>

    </div>
  )
}

export default UserList