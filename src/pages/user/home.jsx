import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
// import { useSelector } from 'react-redux';
import {  City } from "country-state-city";
import Selector from "../../components/Vendor/Selector"; // Make sure this path is correct
import { FaStore } from '@react-icons/all-files/fa/FaStore';
// import { FaSearchLocation } from '@react-icons/all-files/fa/FaSearchLocation';
import { getBanner } from '../../service/AdminApi';
const home = () => {
  const navigate = useNavigate()
  // const dd = useSelector((state) => state.user);
  // console.log(dd.value.isUserAuth);
  const stateData = City.getCitiesOfState("IN", "KL"); // State.getStatesOfCountry("IN");
  const [state, setstate] = useState(stateData[0]);
  
  const handleClick = ()=>{
    console.log(state)
    navigate("/SearchResult", {state : {'query':state.name}} );
  }

  useEffect(() => {
    dataFetch()
   }, [])

  const [data, setdata] = useState()
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
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // alert(userLocation.lat)
      // Use userLocation to perform location-based search.
    });
  } else {
    // Handle the case where geolocation is not available.
    // alert()
  }
}, [])



  return (
    <div className='mx-auto '>
      

 

<div className="hero  min-h-fit" style={{backgroundImage: 'url("/images/Banner.png")'}}>
  {/* <div className="hero-overlay bg-opacity-10"></div> */}
  <div className="hero-content text-center text-neutral-content ">
    <div className="max-w-md text-white" >
      <h1 data-aos="zoom-in" className="mb-5 text-5xl font-bold">Plan your wedding with Us</h1>
      <p data-aos="zoom-in" className="mb-5">Mandabam.com is an Indian Wedding Planning Website  where you can find the best wedding 
      venues, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in India,
      </p>
     
      
      
      <div className="flex  ">
    <div className=" mx-auto  p-4  bg-red rounded flex border-none">
      <div className='bg-rose-500 p-4'><FaStore/></div>
      {/* <input
        type="text"
        placeholder="Search "
        className="w-full py-2 px-3 bg-white"
      /> */}
      <Selector
                data={stateData}
                selected={state}
                setSelected={setstate}
                className="bg-white w-28 shadow-none"
              />
       {/* <div onClick={handleClick} className='bg-rose-500 py-4 px-6'><FaSearchLocation/></div> */}
    </div>
  </div>
  <button onClick={handleClick} className="btn ">Get Started</button>
    </div>
  </div>
</div>
<div className='container mx-auto mt-5'> 


<div className="carousel gap-4  bg-gradient-to-br from-transparent -px-5 via-white to-transparent   ">
{data?.map((item,index)=>(
 
      <div className="carousel-item">
   
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md: md:w-48" src={item.Image} alt="Modern building architecture"/>
    </div>
    <div className="p-8 xl:max-h-[26vh] xl:overflow-y-hidden">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Mandabam .com</div>
      <p href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item?.Title}</p>
      <p className="mt-2 text-slate-500  overflow-ellipsis">{item?.Text}</p>
    </div>
  </div>
</div>

  </div> 
))}

 
   <div className="carousel-item ">
    
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h- md:w-48" src="/images/01.jpg" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">A Beautiful Kerala Wedding With A Bride In A Customised Kanjeevaram</a>
      <p className="mt-2 text-slate-500">A Beautiful Kerala Wedding With A Bride In A Customised Kanjeevaram
BY Aakanksha|21 Feb, 2019|1028 views|</p>
    </div>
  </div>
</div>
  </div>
</div>



<section>
            <div className="pb-36">
                <div className="mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="text-center">
                        <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Built by the Community <br/> for the Community</h2>
                        <p className="mt-6 text-gray-700 dark:text-gray-300">Harum quae dolore orrupti aut temporibus ariatur.</p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto flex justify-center flex-wrap gap-3">
                        {[1,2,3,4,5,6,7,8,9,10].map(index => (
                            <a key={index} href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="size-16 rounded-full border border-gray-950/5 dark:border-white/5">
                                <img alt="John Doe" src={`https://randomuser.me/api/portraits/men/${index}.jpg`} className="rounded-full" loading="lazy" width="120" height="120"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>

</div> 




</div> 

  )
}

export default home