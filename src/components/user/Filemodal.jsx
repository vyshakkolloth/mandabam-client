import React, { useState } from 'react';
import { changeDp } from '../../service/UserApi';

const Filemodal = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        // Get the selected file from the input element
        const file = event.target.files[0];
        setSelectedFile(file);
      };


  const handleUpload = () => {
    if (selectedFile) {
      // Create a new FormData object to send the file
      const formData = new FormData();
    //   formData.append(formData, selectedFile);
      formData.append("image",selectedFile)
      // console.log(formData)

      // Make a POST request to your server or API endpoint
      changeDp(formData).then((res)=>{
        console.log(res,"+changedp")
      }).catch((err)=>{console.log(err,"+changedp")})
     
      }}
// console.log(selectedFile)
  return (
    <div>{/* The button to open modal */}
    
    
    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">select your profile photo!</h3>
        <input type="file" onChange={handleFileChange} accept="image/*" className=" mt-3 file-input w-full max-w-xs" />
        <input type="submit" onClick={handleUpload} value="Submit" className="btn m-2" />
        <div className="modal-action">
          <label htmlFor="my_modal_6" className="btn">Close!</label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Filemodal