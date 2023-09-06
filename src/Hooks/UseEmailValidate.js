import { useEffect } from "react";
import { useState } from "react";

import React from 'react'


const UseEmailValidate = (intial=false) => {
const [emailValidate, setEmailValidate] = useState(intial)


 

const setvalidate=(email)=>{
    const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    if(pattern.test(email)){
        setEmailValidate(true)
       

    }else{ 
        setEmailValidate(false)
       
    }
}

return {setvalidate,emailValidate}
    
  
}

export default UseEmailValidate