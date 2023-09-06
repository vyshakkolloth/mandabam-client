import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "../pages/user/userLogin";
import UserHome from "../pages/user/home";
import UserLayout from "../layout/userLayout";
import UserProfileLayout from "../layout/userProfileLayout";
import UserSIgnin from "../pages/user/UserSIgnin";
import VenueDetail from "../pages/user/VenueDetail";
import Profile from "../pages/user/Profile";
import Request from "../pages/user/Request";
import SearchResult from "../pages/user/SearchResult";
import Errors from "../components/errors/Errors"
import ServerError from "../components/errors/ServerError";
import PrivateRoutes from "../ProtectectedRoute/PrivateRoutes";
import ForgetPassword from "../pages/user/ForgetPassword";

const userRoutes = () => {
  return (
    <>
      <Routes>
        
        <Route element={<UserLayout />}>
          <Route path="/" element={<UserHome />} />
          <Route path="/forget" element={<ForgetPassword />}/>
          <Route exact path="/login" element={<UserLogin />} />
          <Route path="/signUp" element={<UserSIgnin />} />
          <Route path="/details" element={<VenueDetail />} />
          <Route path="/SearchResult" element={<SearchResult/>}/>
          
          <Route element={<PrivateRoutes role={"user"} route={"/"}      />}>
          <Route element={<UserProfileLayout/>}>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/request" element={<Request/>} />
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
