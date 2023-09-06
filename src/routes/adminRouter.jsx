import React from 'react'
import { Route,Routes } from 'react-router'
import AdminLogin from '../pages/admin/adminLogin'
import AdminHome from '../pages/admin/adminHome'
import AdminLayouts from '../layout/adminLayouts'
import UserManagment from '../pages/admin/UserManagment'
import AdminVendorMangment from '../pages/admin/AdminVendorMangment'
import AdminVenuemanagemnt from '../pages/admin/AdminVenuemanagemnt'
// import PrivateRoutes from '../ProtectectedRoute/protectedRoute'
import Errors from '../components/errors/Errors'

const adminRouter = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<AdminLogin/>}/>
    {localStorage.getItem("adminToken")?(<>

 <Route element={<AdminLayouts/>}>
 
     
        <Route exact path="/home" element={<AdminHome/>}/>

        <Route path='/user'element={<UserManagment/>}/>
        <Route path='/vendor'element={<AdminVendorMangment/>}/>
        <Route path='/chat'element={<AdminVenuemanagemnt/>}/>
     
       
        </Route> </>
        ):null}
         
         <Route path="*"element={<Errors/>}/>
     
    </Routes>
    </>
    
  )
}

export default adminRouter