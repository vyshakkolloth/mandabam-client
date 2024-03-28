import React, { useState } from 'react'
import { deleteBanner, getBanner } from '../../service/AdminApi'
import { useEffect } from 'react'
import BannerFileModal from '../../components/admin/BannerFileModal'
import { toast,Toaster } from "react-hot-toast";


const BannerManagment = () => {
    const [data, setdata] = useState()
    useEffect(() => {
     dataFetch()
    }, [])

    const dataFetch =()=>{
        try {
            getBanner().then((res)=>{
                
                console.log(res.data)
                if(res.status===200){
                    setdata(res.data?.result)
                }
            }).catch((err)=>{
                console.log(err)
            }

            )

        } catch (error) {
            console.log(error)
        }
    }

    const deleteHandle=(id)=>{
        try {
            deleteBanner(id).then((res)=>{
                if(res.status==200){
                    dataFetch()
                    toast.success("file Deleted")
                }
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        } catch (error) {
            
        }
    }
    
  return (
    <div className='h-[86vh]'>
         <Toaster toastOptions={3000} />
        <div className=' p-5 box-border text-center' >
    Banner Management
        </div>
        <div className=' p-5 box-border text-center' >
    Click to upload
    <button className="btn ml-4" onClick={()=>document.getElementById('my_modal_4').showModal()}>upload </button>

        </div>
        
        <div className="carousel rounded-box pt-3 gap-3">
  <div className="carousel-item"> 
    {/* <img className=' object-cover h-25 w-25' src="/images/Banner.png" alt="Burger" /> */}
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/RKS02577.jpg" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Mandabam .com</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Intimate Wedding Planned By The Bride's Mother With Just The Right Amount Of Bling!</a>
      <p className="mt-2 text-slate-500">An intimate wedding with the closest ones on the guest-list, a food station boasting of lip-smacking delicacies and just the right amount of bling to top it all- does it sound like an ideal wedding plan to you too? Because it surely did to us when we first read through Ayesha & Sarfras’s wedding anecdotes!</p>
    </div>
  </div>
</div>

  </div> 
 
  
{data?.map((item,index)=>(
      <div key={index} className="carousel-item indicator">
        <span className="indicator-item badge badge-primary z-20" onClick={()=>deleteHandle(item._id)}>Delete </span> 
      {/* <img className=' object-cover h-25 w-25' src="/images/Banner.png" alt="Burger" /> */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0 ">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={item.Image} alt="Modern building architecture"/>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Mandabam .com</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item?.Title}</a>
        <p className="mt-2 text-slate-500">{item?.Text}.</p>
      </div>
    </div>
  </div>
  
    </div> 
))}
 
</div>
<BannerFileModal/>

    </div>
  )
}

export default BannerManagment