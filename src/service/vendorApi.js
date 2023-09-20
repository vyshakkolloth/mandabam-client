import { vendorAxiosInstance } from "../axios/instance";

const signUp = (data) => {
  return vendorAxiosInstance.post("/signup", { data });
};
const Venderlogin = (email, password) => {
  return vendorAxiosInstance.post("/login", { email, password });
};
const informationPost = (data) => {
  return vendorAxiosInstance.post("/information", { data });
};
const getInformation = () => {
  
  return vendorAxiosInstance.get("/getInformation");
};
const projectUpload=(data)=>{
  
  return vendorAxiosInstance.post("/project",{data})
}
const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};
const VenueGallery=(data)=>vendorAxiosInstance.post("/VenueGallery",data ,config)
const VenueImageDelete=(data)=>vendorAxiosInstance.post("/VenueImageDelete",{data})
const acceptEnquire=(data)=>vendorAxiosInstance.post("/acceptEnquire",{data})
const getImages=()=>vendorAxiosInstance.get("/getImages")
const booking=()=>vendorAxiosInstance.get("/booking")
const changeBooking=(id)=>vendorAxiosInstance.get(`/changeBooking/${id}`)
const authVenue=()=>vendorAxiosInstance.get("/authVenue")
const msguserList=()=>vendorAxiosInstance.get("/userList")
const PostVedorMessage=(data)=>vendorAxiosInstance.post("/PostVedorMessage",{data})
const PreviousEnquire=()=>vendorAxiosInstance.get("/PreviousEnquire")
const ConfirmEnquire=()=>vendorAxiosInstance.get("/ConfirmEnquire")

export { ConfirmEnquire,signUp,PostVedorMessage,VenueGallery,VenueImageDelete, Venderlogin, informationPost, authVenue,msguserList,PreviousEnquire,
  getInformation ,projectUpload,getImages,booking,changeBooking,acceptEnquire};
