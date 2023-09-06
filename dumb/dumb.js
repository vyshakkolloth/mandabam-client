import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } from "firebase/auth";
  
import { app } from "../../firebase/config";
const auth = getAuth(app);

const handleSendOtp = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': () => {
            console.log('recaptcha resolved..')
        }
    }, auth)
    const appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(auth, '+91'+phone, appVerifier)
        .then((confirmationResult) => {
          toast.success('OTP sent to your phone number. Please Verify')
            window.confirmationResult = confirmationResult;
            
                      setdisable(false);
                      setotpsent(true)
                      setLoading(true)
           
        }).catch((error) => {
            alert('something went wrong: otp not sent:  ' + error)
        })
}
const confirmation= ()=>{
    let confirmationResult= window.confirmationResult 
    confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
        console.log(user.phoneNumber)
        loginService(user.phoneNumber,"otp").then((res)=>{
  
        }).catch((err)=>{
  
        })
  
      
    }).catch((error) => {
     alert(error)
    });
  }