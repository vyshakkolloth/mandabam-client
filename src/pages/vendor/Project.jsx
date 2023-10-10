import React, { useEffect, useState } from 'react';
import {projectUpload,getImages,VenueGallery,VenueImageDelete} from "../../service/vendorApi"
import { toast,Toaster } from "react-hot-toast";
import { MdDeleteSweep} from '@react-icons/all-files/md/MdDeleteSweep';

const Project = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);


  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileInputChange = (event) => {
    const files = event.target.files;

    // Check if any files were selected
    if (files.length > 0) {
      const imageFiles = [];

      // Loop through the selected files and filter out only image files
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.startsWith("image/")) {
          imageFiles.push(files[i]);
        }
       
      }

      // Set the selected image files in state
      setSelectedImages((prevImages) => [...prevImages, ...imageFiles]);
    }
  };
  const upload =()=>{
    if(selectedImages.length>0){
      // console.log(selectedImages,"4545")
      try {
        const formData = new FormData();
        for (let i = 0; i < selectedImages.length; i++) {
          // You can't directly append URLs to FormData, so you should append the files from the original input
          const fileInput = document.getElementById("fileInput"); // Assuming your input has the id "fileInput"
          const file = selectedImages[i];
          formData.append("image", file); // Use a unique key ("image" in this case) for each file
        }
        if(formData){
          VenueGallery(formData).then((res)=>{
            console.log(res.data)
            if(res.status===200){
              toast.success("upload success")
              getimage()
              setUploadedFiles([])
            }
          }).catch((err)=>{
            console.log(err,"err")
            alert(err.message)
          })
        }
        
      } catch (error) {
        console.log(error,"sellected Image try catch")
      }

    }else{
      toast.error("select image")
    }
  }


  // const handleUpload = (result) => {
  //   if (result.event === 'success') {
  //     const newUploadedFile = result.info.secure_url;
  //     setUploadedFiles([...uploadedFiles, newUploadedFile]);
  //   }
  // };
  
  
  const [files, setfiles] = useState([])

  useEffect(() => {
    getimage()

  }, [])

  const getimage=()=>{
    try {
      getImages().then((res)=>{
        setfiles(res?.data?.images.image)})
      .catch((err)=>console.log(err))
      
    } catch (error) {
      console.log(error)
    }
  }


  const deleteImage=(id)=>{
    try {
      // alert("yes")
      if(id){
        VenueImageDelete(id).then((res)=>{
          console.log(res.data)
          toast.success("sucess")
          if(res.status===200){
            
            getimage()
          }
        }).catch((err)=>{
          alert(err.message)
        })
      }
      
      
    } catch (error) {
      alert(error)
    }

  }
  

  // const submit=()=>{
  //   projectUpload(uploadedFiles).then((res)=>{
  //     console.log(res)
  //     toast.success("uploaded")
  //     }).catch((err)=>{
  //       toast.error("axios error")
  //       console.log(err)
  //     })
  // }
  

  return (
    <div className='bg-white w-full h-full  p-5'>
      <Toaster toastOptions={3000} />
      <div className='flex p-5 justify-end mx-10 mb-5 bg-rose-100 rounded-xl'>

      <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs"  accept="image/*"  multiple onChange={handleFileInputChange}/>
      <button className="btn  mx-5" onClick={upload}> Upload</button>

      {/* <button className="btn  mx-5" onClick={submit}> submit</button> */}

      </div>



      {/* <div className='bg-red-500 mt-5 p-5 grid'> */}<div className='bg-rose-100 rounded flex flex-wrap gap-5 mx-10 p-5 h-full'>
        {
          files.map((image, index)=> (
            <div key={index} className="avatar indicator">
            <span onClick={()=>deleteImage(image)} className="indicator-item badge badge-secondary"><MdDeleteSweep/></span> 
            <div className="w-56 h-56 rounded-lg">
              <img src={image}  />
            </div>
          
          
        
            </div>))
        }
        
      </div>

      
      
    </div>
  );
};

export default Project;
