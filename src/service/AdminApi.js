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
  const aproveVender=(id)=>adminAxiosInstance.post("/aproveVender",{id})
  const getReports=()=>adminAxiosInstance.get("/getReports")
  const AdminHome=()=>adminAxiosInstance.get("/adminHome")
  const bookinManagment=()=>adminAxiosInstance.get("/bookinManagment")
  const VenueBookingDetail=(id)=>adminAxiosInstance.get(`/VenueBookingDetail/${id}`)
  const deleteBanner=(id)=>adminAxiosInstance.get(`/deleteBanner/${id}`)

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
const postBanner=(data)=>{ 
  return adminAxiosInstance.post("/postBanner",data,config)
}
  const getBanner=()=>adminAxiosInstance.get("/getBanner")
 
  export{VenueBookingDetail,postBanner,getBanner,deleteBanner,
    Adminlogin,userData,venueData,blockUser,blockVendor,authAdmin,adminVenueVerification,aproveVender,getReports,AdminHome,bookinManagment
  }