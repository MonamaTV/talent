"use client";
import React from "react";

const PaymentHandler = ({ bookingFee, email }) => {
  console.log(process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY);
  const handlePayment = async (event) => {
    try {
      const response = await fetch(
        "https://api.paystack.co/transaction/initialize",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer " + process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            amount: bookingFee * 100,
            currency: "ZAR",
            callback_url: "https://9d2b-197-184-176-9.ngrok-free.app/payments",
          }),
        }
      );
      const data = await response.json();
      window.location.href = data.data.authorization_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col px-5 py-3 w-[100%] border border-gray-100/30 rounded-md mx-5">
      <h3 className="">Confirm payment</h3>
      <p className="text-sm text-gray-600">
        You are about to make R{bookingFee} payment...
      </p>
      <input
        type="text"
        placeholder="Account holderr"
        className="outline-none w-full rounded-md py-2 text-sm my-2 block px-3 border"
      />
      <input
        type="text"
        placeholder="Card number"
        className="outline-none w-full rounded-md py-2 text-sm block px-3 border"
      />
      <div className="flex flex-row gap-1">
        <input
          type="text"
          placeholder="Expiry date"
          className="outline-none w-full rounded-md py-2 text-sm my-2 block px-3 border"
        />{" "}
        <input
          type="text"
          placeholder="CVC"
          className="outline-none w-full rounded-md py-2 text-sm my-2 block px-3 border"
        />
      </div>
      <div className="my-2">
        <input type="checkbox" className="accent-primary-color" />
        <span className="text-sm"> You agree to our terms and conditions</span>
      </div>
      <button
        onClick={handlePayment}
        className=" w-full text-sm py-2 rounded-md bg-primary-color text-white"
      >
        Confirm payment
      </button>
    </div>
  );
};

export default PaymentHandler;
