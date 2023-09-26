import React from "react";
import Shimmer from "../components/admin/Shimmer";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const UserLogin =lazy(()=>import( "../pages/user/userLogin"))
import UserHome from "../pages/user/home";
import UserLayout from "../layout/userLayout";
import UserProfileLayout from "../layout/userProfileLayout";
const  UserSIgnin =lazy(()=>import( "../pages/user/UserSIgnin"))
const  VenueDetail =lazy(()=>import(  "../pages/user/VenueDetail"))
const  Profile =lazy(()=>import(  "../pages/user/Profile"))
const  Request =lazy(()=>import(  "../pages/user/Request"))
const SearchResult =lazy(()=>import( "../pages/user/SearchResult"))
import Errors from "../components/errors/Errors"
import ServerError from "../components/errors/ServerError";
import PrivateRoutes from "../ProtectectedRoute/PrivateRoutes";
import BookedVenusList from "../components/user/BookedVenusList";
import View_Contaxt from "../components/user/View_Contaxt";
 const ForgetPassword=lazy(()=> import( "../pages/user/ForgetPassword"))
const Chat=lazy(()=>import("../pages/chat/Chat")) ;

const userRoutes = () => {
  return (
    <>
      <Routes>
        
        <Route element={<UserLayout />}>
          <Route path="/" element={<UserHome />} />
          <Route path="/forget" element={
             <Suspense fallback={<Shimmer />}>
              <ForgetPassword />
             </Suspense>
          }/>
          <Route exact path="/login" element={
          <Suspense fallback={<Shimmer />}><UserLogin /></Suspense>} />
          <Route path="/signUp" element={ <Suspense fallback={<Shimmer />}><UserSIgnin /> </Suspense>} />
          <Route path="/details" element={<Suspense fallback={<Shimmer />}>
          <VenueDetail /></Suspense>} />
          <Route path="/SearchResult" element={<Suspense fallback={<Shimmer />}>
          <SearchResult/></Suspense>}/>
          
          <Route element={<PrivateRoutes role={"user"} route={"/"}/>}>
            <Route element={<UserProfileLayout/>}>
              <Route path="/profile" element={<Suspense fallback={<Shimmer />}>
              <Profile/> </Suspense>} />
              <Route path="/request" element={
              <Suspense fallback={<Shimmer />}><Request/></Suspense>} />
              <Route path="/Chat" element={
              <Suspense fallback={<Shimmer />}><Chat user={"user"}/></Suspense>}/>
              <Route path="/BookedVenue" element={<BookedVenusList/>}/>
              {/* <Route path="/map" element={<View_Contaxt/>}/> */}
            </Route>
            
          </Route>

        </Route>
        
        <Route path="/*"element={<Errors/>}/>
        
        <Route path="/500" element={<ServerError/>}/>
      </Routes>
    </>
  );
};

export default userRoutes;
