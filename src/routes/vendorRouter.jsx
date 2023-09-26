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

import Chat from '../pages/chat/Chat';
import TabForEnquire from '../components/Vendor/TabForEnquire';
import  PreviousEnquire  from '../components/Vendor/PreviousEnquires';
import ConfirmedEnquire from '../components/Vendor/ConfirmedEnquire';

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
        <Route element={<TabForEnquire/>}>
        <Route path="/Enquiries" element={<Enquiries/>}/>
        <Route path="/PreviousEnquire" element={<PreviousEnquire/>}/>
        <Route path="/confirmedEnquire" element={<ConfirmedEnquire/>}/>

        </Route>
        
        <Route path="/Chat" element={<Chat user={"venue"}/>}/>
        </Route>
        </Route>
        <Route path="*"element={<Errors/>}/>

      
      </Routes>
  )
}

export default vendorRouter