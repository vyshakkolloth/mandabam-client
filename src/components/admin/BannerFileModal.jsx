import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { postBanner } from '../../service/AdminApi';
import { toast,Toaster } from "react-hot-toast";


const BannerFileModal = () => {
    const validationSchema = Yup.object().shape({
        head: Yup.string().required('Title is required'),
        text: Yup.string().required('Matter is required'),
        file: Yup.mixed()
          .required('File is required')
          .test('is-image', 'Only image files are allowed', (value) => {
            if (!value) return true; // Allow empty files (optional)
    
            return value && value.type.startsWith('image/');
          }),
      });

      const formik = useFormik({
        initialValues: {
          head: '',
          text: '',
          file: null,
        },
        validationSchema,
        onSubmit:async (values) => {
            const formData = new FormData();
            formData.append('head', values.head);
            formData.append('text', values.text);
            formData.append('image', values.file);
            try {
                postBanner(formData).then((res)=>{
                    console.log(res.data)
                    if(res.status===200){
                        toast.success("upload Complete")
                    }
                }).catch((err)=>{
                    console.log(err)
                })

            } catch (error) {
                
            }

      
        }


      });


  return (
    <>
      <Toaster toastOptions={3000} />
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-xl">
    <h3 className="font-bold text-lg">Add banner</h3>
    <div className='flex justify-around'>
    <div className='flex flex-col gap-3'>
        <label>Title</label>
        <label>Matter</label>
        <label className='mt-10'>select file </label>

    </div>
    <div className='flex flex-col gap-3'>
    <form className='flex flex-col gap-3' onSubmit={formik.handleSubmit}>
    <input name="head" 
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.head}
    type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />

{formik.touched.head && formik.errors.head ? (
                  <div className="error-text">{formik.errors.head}</div>
                ) : null}
        
    <textarea name="text" placeholder="Bio" 
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.text}
    className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
    {formik.touched.text && formik.errors.text ? (
                  <div className="error-text">{formik.errors.text}</div>
                ) : null}
    <input type="file" accept="image/*"
    onChange={(event) => {
        formik.setFieldValue('file', event.currentTarget.files[0]);
      }}
       className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
       {formik.touched.file && formik.errors.file ? (
                  <div className="error-text">{formik.errors.file}</div>
                ) : null}

<div className='flex p-5'>
<button type="submit" className="btn">
Submit
              </button>
</div>
               

    </form>
    </div>

    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  )
}

export default BannerFileModal