import React, { useEffect, useState } from 'react';
import {projectUpload,getImages} from "../../service/vendorApi"
import { toast,Toaster } from "react-hot-toast";

const Project = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = (result) => {
    if (result.event === 'success') {
      const newUploadedFile = result.info.secure_url;
      setUploadedFiles([...uploadedFiles, newUploadedFile]);
    }
  };
  
  useEffect(() => {
    // Create the upload widget
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'djrtauheh', 
        uploadPreset: 'ivjxri1i' ,
        maxFileSize: 5 * 1024 * 1024, // 5MB limit
        resourceType: 'image'

      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // console.log('Done! Here is the image info: ', result.info.secure_url  );
         
          handleUpload(result);
          // const newUploadedFile=result.info.secure_url
          // setUploadedFiles([...uploadedFiles, newUploadedFile]);
          

       
        }
      }
    );
  
    // Set up event listener
    const uploadButton = document.getElementById('upload_widget');
    if (uploadButton) {
      uploadButton.addEventListener('click', function () {
        myWidget.open();
      });
    }
  
    // Clean up the event listener when the component unmounts
    return () => {
      if (uploadButton) {
        uploadButton.removeEventListener('click', function () {
          myWidget.open();
        });
      }
    };
  }, []);
  const [files, setfiles] = useState([])

  useEffect(() => {
    getImages().then((res)=>{setfiles(res.data.images.image)}).catch((err)=>console.log(err))
  }, [])
  

  const submit=()=>{
    projectUpload(uploadedFiles).then((res)=>{
      console.log(res)
      toast.success("uploaded")
      }).catch((err)=>{
        toast.error("axios error")
        console.log(err)
      })
  }
  

  return (
    <div className='bg-white w-full h-full  p-5'>
      <Toaster toastOptions={3000} />
      <button id='upload_widget' className='cloudinary-button btn'>
        Upload files
      </button>
      <button className="btn  mx-5" onClick={submit}> submit</button>



      {/* <div className='bg-red-500 mt-5 p-5 grid'> */}<div className='bg-red-500 mt-5 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          files.map((image, index)=> (
            <div key={index} className='image-item'>
              <img src={image} alt={`Image ${index}`} className='w-full h-auto' />
            </div>))
        }
        
      </div>

      
      
    </div>
  );
};

export default Project;
