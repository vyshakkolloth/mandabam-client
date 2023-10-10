import React, { useEffect, useState } from 'react'
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { getReview, postReview } from '../../service/UserApi';
import { useNavigate } from 'react-router-dom';
import {IoPersonCircleOutline} from "@react-icons/all-files/io5/IoPersonCircleOutline"

const Review = ({names,venueid}) => {
  const [data, setdata] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
    
    getReview(venueid).then((res)=>{
      if(res.status===200){
        setdata(res.data?.result?.reviews)
        

      }else{
       alert("error")
      }
      // console.log(res.data.result?.reviews)
    }).catch((err)=>{
      if(err.response.status===500){
        navigate("/500")
      }else if(err.code==="ERR_BAD_REQUEST"){
        navigate("/conerr")
      }
      console.log(err,"jjjj")
    })
   
  }, [])
  const formatDate = (receivedDate) => {
    if (!receivedDate) {
      return "";
    }
    const date = new Date(receivedDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}/${day}/${year}`;
  };
  

    const validationSchema = Yup.object({
        rating: Yup.number().required('Rating is required'),
        reviewText: Yup.string().required('Review text is required'),
        spending: Yup.number().required('Spending amount is required'),
      });
       const formik = useFormik({
    initialValues: {
        venueid:venueid,
      rating: 0,
      reviewText: '',
      spending: "",
    },validationSchema,
    onSubmit: (values,{ resetForm }) => {
        resetForm();
  try {

    postReview(values).then((res)=>{
      if(res.status===200){
        toast.success("Review Post")
      }

        console.log(res.data,"response")

    }).catch((err)=>{
        console.log(err,"error")
        if(err?.response?.status===401){
          toast.error("Please Log in")
        }
    })

  } catch (error) {
    console.log(error,"try catch error")
  }
      
      console.log(values);
    },
  });

  return (
    <div className="container bg-rose-100 mt-5 mx-auto">
       <Toaster toastOptions={3000} />
      <div className='flex capitalize justify-start text-right p-4 font-medium border-b-2 border-black'>
        Reviews for {names.name} auditorium( {data?.length})
      </div>
      <div className='flex flex-wrap pt-2 pb-5 border border-b-black'>
        <div className='px-5 capitalize '>
          <form onSubmit={formik.handleSubmit}>
            <p className='font-medium my-5'>Review {names.name} Auditoriium </p>
            <p className='mb-5'>Rate Vendor* </p>
            <div className="rating rating-md flex mb-5">
              {[1, 2, 3, 4, 5].map((value) => (
                // <label key={value} className={`mask mask-star-2 bg-orange-400 ${formik.values.rating >= value ? 'checked' : ''}`}>
                  <input
                  key={value}
                    type="radio"
                    name="rating"
                    value={value}
                    onChange={formik.handleChange}
                    className="mask mask-star-2 bg-orange-400"
                    onBlur={formik.handleBlur}

                   checked={formik?.values?.rating >= value ? true : false}
                    
                  />
                //  </label>
              ))}
            </div>
            {formik.touched.rating && formik.errors.rating && (
              <div className="text-red-500">{formik.errors.rating}</div>
            )}
            <textarea
              name="reviewText"
              placeholder="Tell us about your experience*"
              className="textarea rounded-none textarea-bordered textarea-lg w-full max-w-xs"
              value={formik.values.reviewText}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.reviewText && formik.errors.reviewText && (
              <div className="text-red-500">{formik.errors.reviewText}</div>
            )}
            <input
              type='number'
              name="spending"
              placeholder="How much you spend on this vendor"
              className="input input-bordered rounded-none input-md w-full max-w-xs"
              value={formik.values.spending}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.spending && formik.errors.spending && (
              <div className="text-red-500">{formik.errors.spending}</div>
            )}
            <div className='flex justify-end'>
              <button type="submit" className="btn btn-active rounded-none bg-pink-500 text-white m-1">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
     <div className='max-h-72 overflow-auto'>
     {data?.map((item,index)=>{
          return(
            <div key={index} className='flex flex-col mx-5 p-2'>
       
            <div className='flex justify-start'>
            <div className="avatar">
              <div className='w-12'>
                <img src="images/profile.png" alt="" />
              </div>
       
           {/* <IoPersonCircleOutline className=''/> */}
        
          </div>
          <div className=' pl-5 flex flex-col'>
            <div>{item?.userid?.name}<label className='bg-green-500 p-1'> *{item.rating}.0</label></div> 
            
            
            <div>
              {formatDate(item?.timestamp)}
            </div>
          </div>
            </div>
            <div className='flex'>
             {item?.text}
            </div>
    
          </div>
           )
        })} 
     </div>
     
    </div>
  )
}

export default Review