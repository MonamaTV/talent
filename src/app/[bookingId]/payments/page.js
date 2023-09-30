import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] py-5 ">
      <div className="border justify-center    border-gray-100 rounded-md container py-3 my-5 mx-10 px-10 flex flex-row">
        <div className="w-[50%]">
          <div className="relative px-5 flex flex-row items-baseline border bg-primary-color text-white h-36 rounded-md">
            <div className="flex flex-row items-center absolute top-5 mx-5">
              <Image
                src={"/aka.jpg"}
                width={100}
                height={100}
                alt="Profile"
                className="rounded-md shadow-lg"
              />
              <div className="mx-5 pr-14">
                <h2 className=" font-bold text-2xl">Stogie T</h2>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </small>
              </div>
            </div>
          </div>
          <div className="my-5 px-3">
            <h4 className="my-2 mt-3">Booking details</h4>
            <hr />
            <p className="flex items-center text-sm my-2">
              <Image
                src="/fee.png"
                width={15}
                className="mr-2"
                height={15}
                alt="Alt"
              />
              Charging fee:{" "}
              <span className="font-bold mx-2"> R300 per 30min</span>{" "}
            </p>
            <p className="flex items-center text-sm my-2">
              <Image
                src="/booking.png"
                width={15}
                className="mr-2"
                height={15}
                alt="Alt"
              />
              Bookings:{" "}
              <span className="font-bold mx-2"> 4 gigs in last 4 days</span>{" "}
            </p>
            <p className="flex items-center text-sm my-2">
              <Image
                src="/available.png"
                width={15}
                className="mr-2"
                height={15}
                alt="Alt"
              />
              Email: <span className="font-bold mx-2"> tadima@tc.com</span>{" "}
            </p>
            <p className="flex items-center text-sm my-2">
              <Image
                src="/phone.png"
                width={15}
                className="mr-2"
                height={15}
                alt="Alt"
              />
              Contacts: <span className="font-bold mx-2"> 066 773 3222</span>{" "}
            </p>
          </div>
        </div>
        <div className="px-5 py-3 w-[50%] border border-gray-100/30 rounded-md mx-5">
          <h3 className="">Confirm payment</h3>
          <p className="text-sm text-gray-600">
            You are about to make R3400 payment...
          </p>
          <input
            type="text"
            placeholder="Account holderr"
            className=" w-full rounded-md py-2 text-sm my-2 block px-3 border"
          />
          <input
            type="text"
            placeholder="Card number"
            className=" w-full rounded-md py-2 text-sm block px-3 border"
          />
          <div className="flex flex-row gap-1">
            <input
              type="text"
              placeholder="Expiry date"
              className=" w-full rounded-md py-2 text-sm my-2 block px-3 border"
            />{" "}
            <input
              type="text"
              placeholder="CVC"
              className=" w-full rounded-md py-2 text-sm my-2 block px-3 border"
            />
          </div>
          <div className="my-2">
            <input type="checkbox" className="accent-primary-color" />
            <span className="text-sm">
              {" "}
              You agree to our terms and conditions
            </span>
          </div>
          <button className=" w-full text-sm py-2 rounded-md bg-primary-color text-white">
            Confirm booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
