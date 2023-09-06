import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { authUser } from "../service/UserApi";
import { login, logout } from "../redux/user";
// import { authAdmin } from "../service/AdminApi";
// import { adminlogin, adminlogout } from "../redux/admin";
import { authVenue } from "../service/vendorApi";
import { vlogin,vlogout} from "../redux/vendor";

function PrivateRoutes({ role, route }) {
  const dispatch = useDispatch();
  let [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "user") {
      authUser()
        .then((response) => {
          if (!response.data.auth) {
            localStorage.removeItem("userToken");
            dispatch(logout());
          } else if (response.data.auth) {
            dispatch(login(response.data));
          }
          setAuth(response.data?.auth);
        })
        .catch((response) => {
         
          if(response.message==="Network Error"){
            navigate("/500")
          }else{
            console.log(response);
            setAuth(response.data?.auth);
            navigate("/");
          }
        });
    }  else if (role === "venue") {
      authVenue()
        .then((resp) => {
          if (!resp.data.auth) {
            localStorage.removeItem("venderToken");
            dispatch(vlogout());
          } else {
            dispatch(vlogin(resp.data));
          }
          setAuth(resp.data.auth);
        })
        .catch((resp) => {
          setAuth(resp.data?.auth || null);
          navigate("/venue/");
          console.log(resp)
        });
    }
  }, []);

  if (auth == null) return;

  return auth ? <Outlet /> : <Navigate to={route} />;
}

export default PrivateRoutes;
