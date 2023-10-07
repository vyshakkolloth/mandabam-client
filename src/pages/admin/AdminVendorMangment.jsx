import React from 'react'
// import VenueList from '../../components/admin/VenueList'
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminVendorMangment = () => {
  const location = useLocation();
  return (
    <div>
      <div className="tabs flex justify-center bg-rose-50 shadow-lg rounded-lg mb-5 pb-2 ">
 <Link to="/admin/venueList" > <p className={` tab tab-lifted ${location.pathname === '/admin/venueList' ? 'tab-active' : ''}`}>Vendor List</p> </Link>
  <Link to="/admin/VenderAcceptance"><p className={` tab tab-lifted ${location.pathname === '/admin/VenderAcceptance' ? 'tab-active' : ''}`}>Verify New User</p> </Link>
  <Link to="/admin/VenueReporting"><p className={` tab tab-lifted ${location.pathname === '/admin/VenueReporting' ? 'tab-active' : ''}`}>Reported User</p></Link>
</div>
<Outlet/>
      {/* <VenueList/>  */}
      </div>
  )
}

export default AdminVendorMangment