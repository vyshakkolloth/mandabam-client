import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/footerAndNav/user/Nav'
import Footer from '../components/footerAndNav/user/footer'
import Alert from '../components/alert/Alert'

const userLayout = () => {
  return (
    <>
    
    <div className=' '>
    <Nav/>
      <div className='pt-[4.5rem] sm:pt-[4rem] '>
        <Alert/>
   <Outlet/>
   <Footer/>
      </div>
    </div>
    
    </>
  )
}

export default userLayout