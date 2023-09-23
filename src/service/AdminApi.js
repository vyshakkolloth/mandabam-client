import {adminAxiosInstance} from "../axios/instance"


const Adminlogin = (email,passsword) => {
 
  
    return adminAxiosInstance.post("/login",{email,passsword});
  };
  const userData=()=>{
    return adminAxiosInstance.get("/userData")
  }
  const blockUser=(id)=>{
   
    return adminAxiosInstance.get(`/blockUser/${id}`)
  }
  
  const venueData=()=>{

    return adminAxiosInstance.get("/venueData")
  }
  const blockVendor=(id)=>{
   
    return adminAxiosInstance.get(`/blockVendor/${id}`)
  }
  const authAdmin=()=>{
   
    return adminAxiosInstance.get("/authAdmin")
  }
  const adminVenueVerification=()=>adminAxiosInstance.get("/adminVenueVerification")
  
 
  export{
    Adminlogin,userData,venueData,blockUser,blockVendor,authAdmin,adminVenueVerification
  }