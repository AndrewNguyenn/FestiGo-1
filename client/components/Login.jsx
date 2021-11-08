import React from "react";
import { GoogleLogin } from 'react-google-login';


const Login = () => {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res)
  }  
  const onFailure = (res) => {
    console.log('Login Failure:', res);
  }


  return (
    <div className="login">
      <greeting>Hey</greeting>
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login with Google"
      cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default Login;