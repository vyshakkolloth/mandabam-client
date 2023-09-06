import React from 'react'
import { Routes, Route } from "react-router-dom";
import Vendorlogin from "../pages/vendor/Vendorlogin"
import VendorSIgnin from '../pages/vendor/vendorSIgnin';
import VendorHome from '../pages/vendor/vendorHome';
import VendorLayouts from "../layout/VendorLayouts"
import VendorInfo from '../pages/vendor/VendorInfo';
import Project from "../pages/vendor/Project"
import Enquiries from '../pages/vendor/Enquiries';
import Errors from '../components/errors/Errors';
import PrivateRoutes from '../ProtectectedRoute/PrivateRoutes';

const vendorRouter = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Vendorlogin/>}/>
        <Route path="/loginVenue" element={<VendorSIgnin/>}/>
       <Route element={<PrivateRoutes  role={"venue"} route={"/venue/"}/>}>
        <Route element={<VendorLayouts/>}>
        
       
        <Route path="/home" element={<VendorHome/>}/>
        <Route path="/information" element={<VendorInfo/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path="/Enquiries" element={<Enquiries/>}/>
        </Route>
        </Route>
        <Route path="*"element={<Errors/>}/>

      
      </Routes>
  )
}

export default vendorRouter