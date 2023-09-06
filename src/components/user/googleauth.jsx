import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { login } from "../../redux/user";
import { Toaster, toast } from 'react-hot-toast'

import {loginService} from "../../service/UserApi";
const googleauth = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <>
      <GoogleOAuthProvider clientId="68646621678-96cg9j6sac91nu080bp1ckldcnbmgbci.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decoded = jwtDecode(credentialResponse.credential);
            loginService(decoded, "google")
              .then((res) => {
                
                if(res.data.status==200){
                  localStorage.setItem("userToken", res.data.token);
                  toast.success('sucess')
                  dispatch(login(res.data.result));
                  navigate("/")
                 }
                })
              .catch((err) => {
                console.log(err);
                toast.error('axios error')

              });
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      <Toaster toastOptions={3000} />
    </>
  );
};

export default googleauth;
