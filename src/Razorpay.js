import axios from "axios";
import React from "react";

const Razorpay = () => {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const handlePayment = async (e) => {
    e.preventDefault();
    const loadRazorpayScript = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    const config = {
      headers: {
        Authorization: "Token de956d85a63fda8fd7dcea79d6824d084bae8eb7",
      },
    };
    const res = await axios.post(
      "http://43.205.7.209:4000/home/payment/",
      { data: "Payment Request sent" },
      config
    );
    const context = res.data.context;
    console.log(context);
    const rzp1 = new window.Razorpay(context);
    rzp1.open();
  };

  return (
    <>
      <button onClick={handlePayment}>Make Payment</button>
    </>
  );
};
export default Razorpay;
