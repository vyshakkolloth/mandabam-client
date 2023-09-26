import React from 'react'

import { Link, Outlet, useLocation } from 'react-router-dom';


const TabForEnquire = () => {
    let location= useLocation()
  return (
    <div>
      <div className="tabs flex justify-center bg-rose-50 shadow-lg rounded-lg mb-5 pb-2 ">
 <Link to="/venue/Enquiries" > <p className={` tab tab-lifted ${location.pathname === '/venue/Enquiries' ? 'tab-active' : ''}`}>Enquiries </p> </Link>
  <Link to="/venue/confirmedEnquire"><p className={` tab tab-lifted ${location.pathname === '/venue/confirmedEnquire' ? 'tab-active' : ''}`}>confirmed Enquiries</p></Link>
  <Link to="/venue/PreviousEnquire"><p className={` tab tab-lifted ${location.pathname === '/venue/PreviousEnquire' ? 'tab-active' : ''}`}>Previous Enquire</p> </Link>
</div>
<Outlet/>
      {/* <VenueList/>  */}
      </div>
  )
}

export default TabForEnquire