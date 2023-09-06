import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const userProfileLayout = () => {
  const location = useLocation();

  return (
    <>
      <div className='flex justify-center py-2'>
        <div className="tabs mt-2">
          <Link to="/profile">
            <a className={` tab tab-lifted ${location.pathname === '/profile' ? 'tab-active' : ''}`}>Profile</a>
          </Link>
          <Link to="/request">
            <a className={`tab tab-lifted ${location.pathname === '/request' ? 'tab-active' : ''}`}>Request</a>
          </Link>
          {/* <Link to="/tab3"> */}
            <a className={`tab tab-lifted ${location.pathname === '/chat' ? 'tab-active' : ''}`}>chat</a>
          {/* </Link> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default userProfileLayout;
