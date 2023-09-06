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
const getImages=()=>vendorAxiosInstance.get("/getImages")
const booking=()=>vendorAxiosInstance.get("/booking")
const changeBooking=(id)=>vendorAxiosInstance.get(`/changeBooking/${id}`)
const authVenue=()=>vendorAxiosInstance.get("/authVenue")


export { signUp, Venderlogin, informationPost, authVenue,
  getInformation ,projectUpload,getImages,booking,changeBooking};
