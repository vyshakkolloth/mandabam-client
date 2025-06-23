import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";



import { City } from "country-state-city";
import Selector from "../../components/Vendor/Selector"; // Make sure this path is correct
import { FaStore } from '@react-icons/all-files/fa/FaStore';

import { getBanner } from '../../service/AdminApi';
const home = () => {
  const navigate = useNavigate()
    ;
  const stateData = City.getCitiesOfState("IN", "KL");
  const [state, setstate] = useState(stateData[0]);

  const handleClick = () => {

    navigate("/SearchResult", { state: { 'query': state.name } });
  }

  useEffect(() => {
    dataFetch()
  }, [])

  const [data, setdata] = useState()
  const dataFetch = () => {
    try {
      getBanner().then((res) => {

        console.log(res.data)
        if (res.status === 200) {
          setdata(res.data?.result)
        }
      }).catch((err) => {
        console.log(err)
      }

      )

    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       var userLocation = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };

  //     });
  //   } else {

  //   }
  // }, [])



  return (
    <div className="max-w-[1920px] relative overflow-clip bg-black/10  mx-auto" >




      <div className="flex min-h-full flex-col justify-center items-center sm:h-[90vh] bg-no-repeat sm:bg-cover bg-center " style={{ backgroundImage: 'url("/images/Banner.png")' }}>

        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md text-white" >
            <h1 data-aos="zoom-in" className="mb-5 text-5xl font-bold">Plan your wedding with Us</h1>
            <p data-aos="zoom-in" className="mb-5">Mandabam.com is an Indian Wedding Planning Website  where you can find the best wedding
              venues, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in India,
            </p>



            <div className="flex  ">
              <div className=" mx-auto  p-4  bg-red rounded flex border-none">
                <div className='bg-rose-500 p-4'><FaStore /></div>

                <Selector
                  data={stateData}
                  selected={state}
                  setSelected={setstate}
                  className="bg-white w-28 shadow-none"
                />
                {/* <div onClick={handleClick} className='bg-rose-500 py-4 px-6'><FaSearchLocation/></div> */}
              </div>
            </div>
            <button onClick={handleClick} className="btn md:text-[1rem] text-[.9rem] shadow-rose-200 font-bold text-shadow-sm drop-shadow-xl ring-1 ring-pink-300">Get Started</button>
          </div>
        </div>
      </div>



      {/* video center */}
      <div className="flex flex-col items-center justify-center text-center py-5 px-4  sm:px-20">

        <div className="w-[150px]  h-[55px] sm:w-[110px] sm:h-[60px] ">
          <img src="/images/Flower.png" alt="flower" className="w-full h-auto mx-auto" />
        </div>
        <h1 className="sm:text-[3rem] text-[2.4rem]  font-bold text-gray-800 mb-2 font-fancy ">The finest wedding moments made possible</h1>
        <p className="text-gray-600 text-justify font-fancy font-stretch-ultra-condensed sm:text-[1.2rem]">
          A wedding is a ceremony where two people formally commit to a life-long partnership through marriage. It's a celebration often marked by traditions, rituals, and festivities, with the core being the exchange of vows and rings. Weddings vary greatly in style and customs depending on culture, religion, and individual preferences. </p>

        <div className='btn-group mt-4'>

          <a href='https://www.youtube.com/results?search_query=wedding+planning+in+kerala' target="_blank" rel="noopener noreferrer">
            <button className="btn sm:text-[1rem] font-sans flex flex-row items-center justify-center bg-slate-950 text-white hover:bg-slate-800 transition-colors duration-300 shadow-lg rounded-lg px-4 py-2">
              <svg className=' w-[1rem] rounded fill-white ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="black" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              Watch video
            </button>
          </a>

        </div>

      </div>
      {/* what over client say */}
      <section className="flex flex-row items-start justify-center text-center py-5 sm:px-20 flex-wrap bg-slate-400/20">

        <div className="flex-1  relative ">
          <div className="relative w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem]  mx-auto">
            <img src="/images/FlowerBg.png" alt="flower" className="w-full h-auto mx-auto" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full  overflow-hidden  flex items-center justify-center'>
              <img src="/images/client.jpg" alt="client image" className="w-full h-full mx-auto object-cover " />

            </div>
          </div>
        </div>
        {/* text area */}
        <div className='flex relative  '>
          <div className='absolute top-6 left-6 sm:top-10 sm:left-1 sm-translate-y-1/2 w-[8%] h-[15%]  '>
            <img src="/images/comment.png" alt="flower" className="w-full h-auto mx-auto" />
          </div>
          <div className=' flex flex-col   items-start justify-start   text-center py-4 px-10 sm:px-20 '>
            <h1 className="sm:text-[3rem] text-[2.5rem] not-italic font-bold text-gray-800 mb-2 font-fancy ">What our clients say</h1>
            <p className="text-gray-600 font-fancy text-[1rem] text-left sm:text-[1.1rem] pt-[1rem] max-w-xl">Our wedding day was truly a dream come true, and we owe it all to the incredible team behind the scenes. From the breathtaking decor to the flawless coordination, everything was beyond perfect. You understood our vision better than we did and turned it into a reality. Our guests are still talking about how magical the whole day felt. Thank you for making our most important day unforgettable</p>
            <p className='font-fancy font-bold sm:text-[1.5rem] text-[1.6rem] text-black '>Jonah Roach</p>
            <p className='font-sans sm:text-sm text-slate-600 text-[.9rem]'>wedding 09.05.2024</p>
          </div>

        </div>

      </section>

      {/* logos */}
      <section className='flex flex-col items-center justify-center text-center py-5 sm:px-20'>
        <div className=' max-w-[80rem]  '>
          <img src="/images/weddinglogos.png" alt="wedding logos" className="w-full h-auto mx-auto" />
        </div>
      </section>

      <section className='flex flex-col items-center justify-center text-center py-5 sm:px-20'>
        <div className='flex flex-col min-w-[80%] items-center justify-center text-center py-5 sm:px-20 bg-slate-500/20  rounded-lg shadow-slate-400 ring-2 ring-slate-500/10 shadow-xl'>
          <div className="w-[110px] h-[60px]">
            <img src="/images/Flower.png" alt="flower" className="w-full h-auto mx-auto" />
          </div>
          <h1 className="sm:text-[3rem] not-italic  text-center font-bold text-gray-800 mb-2 font-fancy ">Looking for Something best,<br /> Contact us</h1>
          {/* <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 border-red-500 border-2 '>
        </div> */}

          <section className='flex flex-wrap flex-col gap-5 sm:grid  sm:grid-col-3 sm:grid-rows-4 sm:gap-4'>
            <div className='flex flex-col items-center justify-center'>
              <input type="text" placeholder="Enter your name" className=" input rounded-sm  max-w-xs" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <input type="email" name='email' placeholder="Email" className=" input  rounded-sm max-w-xs" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <input type="tel" placeholder="Phone" className=" input rounded-sm  max-w-xs" />
            </div>
            <div className='col-span-3 flex flex-col items-center justify-center '>
              <input type="text" placeholder="Subject" className=" input  w-full rounded-sm" />
            </div>
            <div className='col-span-3 flex flex-col items-center row-span-2 justify-center '>
              <textarea type="text" placeholder="Message" className=" input min-h-[7rem]  w-full h-full rounded-sm" />
            </div>
            <div className='col-span-3 flex flex-col items-center justify-center'>
              <button className="btn sm:text-[.9rem] font-sans flex flex-row items-center justify-center bg-slate-900 text-white hover:bg-slate-700 transition-colors duration-300 shadow-lg rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Send Message

              </button>
            </div>
          </section>
        </div>

      </section>




      <div className='container mx-auto mt-5'>


        <div className="carousel gap-4  bg-gradient-to-br from-transparent -px-5 via-white to-transparent   ">
          {/* {data?.map((item,index)=>(
 
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
))} */}


          {/* <div className="carousel-item ">
    
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
  </div> */}
        </div>


        {/* 
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
        </section> */}

      </div>




    </div>

  )
}

export default home