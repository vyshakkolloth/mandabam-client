import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const userProfileLayout = () => {
  const location = useLocation();

  return (
    <>
      <div className='flex justify-center  py-2'>
        <div className="tabs mt-2">
          <Link to="/profile">
            <p className={` tab tab-lifted ${location.pathname === '/profile' ? 'tab-active' : ''}`}>Profile</p>
          </Link>
          <Link to="/request">
            <p className={`tab tab-lifted ${location.pathname === '/request' ? 'tab-active' : ''}`}>Request</p>
          </Link >
          <Link to="/BookedVenue">
            <p className={`tab tab-lifted ${location.pathname === '/BookedVenue' ? 'tab-active' : ''}`}>Booked Venue</p>
          </Link >
          

          <Link to="/Chat">
            <p className={`tab tab-lifted ${location.pathname === '/Chat' ? 'tab-active' : ''}`}>chat</p>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default userProfileLayout;
