import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/footerAndNav/user/Nav'
import Footer from '../components/footerAndNav/user/footer'
import Alert from '../components/alert/Alert'

const userLayout = () => {
  return (
    <>
    <Nav/>
    <Alert/>
   <Outlet/>
   {/* <Footer/> */}
    </>
  )
}

export default userLayout