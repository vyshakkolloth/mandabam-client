import React, { useEffect, useState } from 'react'
import { venueList } from '../../../service/UserApi'
import { Link, Navigate } from 'react-router-dom'

const Cards = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        venueList()
            .then((res) => {
                setData(res.data.data)

            })
            .catch((err) => {

            })
    }, [])

    const handelClick = (id) => {
        Navigate("/details", { state: { query: id } });
    };


    return (
        <section className="flex flex-col items-center justify-center text-center py-5 px-4  sm:px-20">
            <h1 className="sm:text-[3rem] text-[2.4rem]  font-bold text-gray-800 mb-2 font-fancy ">Experience the Magic of Seamless Planning</h1>
            <div className="w-[150px]  h-[55px] sm:w-[110px] sm:h-[60px] ">
                <img src="/images/Flower.png" alt="flower" className="w-full h-auto mx-auto" />
            </div>
            <div className="flex flex-row   items-center justify-evenly flex-wrap gap-6 mt-4 ">

                {data.map((values, index) => (
                    <Link to="/details" state={{ query: values._id }} key={index}>
                    
                    <div  className='max-w-sm flex flex-col items-center justify-center  glass p-4 rounded-lg border-2
                         border-red-100 hover:pointer:shadow-lg hover:border-red-200 transition-all duration-300 ease-in-out'>
                        <img src={values.image[0]} alt="wedding" className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] rounded-lg shadow-lg object-cover" />
                        <div className='flex flex-col items-start justify-start text-left w-[15rem] sm:w-[20rem]  '>
                            <h4 className='text-gray-800 font-bold text-[1.2rem] mt-2'>{values.name}</h4>
                            <p className='text-gray-600 text-[.9rem] '>{values.location}</p>
                            <p className='text-gray-600 text-[.9rem] line-clamp-3 '>{values.information}.</p>
                        </div>

                    </div>
                    </Link>))}


            </div>
        </section>
    )
}

export default Cards