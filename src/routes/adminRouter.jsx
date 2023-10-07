import React from 'react'
import { Route,Routes } from 'react-router'
import AdminLogin from '../pages/admin/adminLogin'
import AdminHome from '../pages/admin/adminHome'
import AdminLayouts from '../layout/adminLayouts'
import UserManagment from '../pages/admin/UserManagment'
import AdminVendorMangment from '../pages/admin/AdminVendorMangment'
import VenueList from '../components/admin/VenueList'
import AdminVenuemanagemnt from '../pages/admin/AdminVenuemanagemnt'
import Errors from '../components/errors/Errors'
import ReportVenor from '../pages/admin/ReportVenor'
import PaymentManagment from '../pages/admin/PaymentManagment'
import BannerManagment from '../pages/admin/BannerManagment'

const adminRouter = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<AdminLogin/>}/>
    {localStorage.getItem("adminToken")?(<>

 <Route element={<AdminLayouts/>}>
 
     
        <Route exact path="/home" element={<AdminHome/>}/>

        <Route path='/user'element={<UserManagment/>}/>

            <Route element={<AdminVendorMangment/>}>
              <Route path="/venueList" element={<VenueList/>}/>
              <Route path="/VenderAcceptance" element={<AdminVenuemanagemnt/>}/>
              <Route path="/VenueReporting" element={<ReportVenor/>}/>

            </Route>
        <Route path='/Payment'element={<PaymentManagment/>}/>
        <Route path='/bannerManagemnt' element={<BannerManagment/>}/>
     
       
        </Route> </>
        ):null}
         
     <Route path="*"element={<Errors/>}/>
     
    </Routes>
    </>
    
  )
}

export default adminRouter