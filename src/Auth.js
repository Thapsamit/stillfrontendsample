import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Razorpay from "./Razorpay";
const Auth = () => {
  const googleSuccess = async (res) => {
    const { name, picture, email, sub } = jwt_decode(res.credential);
    const token = res.credential;
    console.log(jwt_decode(res.credential));

    const result = { name, picture, email, sub };
    const { data } = await axios.post(
      "http://43.205.7.209:4000/google-login/",
      {
        result,
        token,
      }
    );
    console.log(data);
  };
  const googleFailure = (err) => {
    console.log(err);
  };
  return (
    <>
      <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />
      <Razorpay />
    </>
  );
};

export default Auth;
