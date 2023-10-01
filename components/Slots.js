"use client";

import React, { useEffect, useState } from "react";
import DateCalendarValue from "./Calender";
import Link from "next/link";

const Slots = ({ params, name }) => {
  const [date, setDate] = useState("");
  const getArtistSlots = async () => {
    fetch("https://7d72-41-13-66-69.ngrok-free.app/api/organisers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
    //   const data = await response.json();
    //   return data;
  };

  useEffect(() => {
    console.log("Here");
    const fetchData = async () => {
      try {
        await getArtistSlots();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleDateChange = (e) => {
    // setDate(e)
    console.log(e.$d);
    const data = new Date(e.$d);
    // setDate(e);
    setDate(data);
  };
  return (
    <>
      <div className="w-[35%] mx-4 px-5 py-3 border border-gray-100/80 rounded-md">
        <h3 className="mx-4 text-sm">Select date & times</h3>
        <div className="">
          {/* <input type="datetime" name="" id="" /> */}
          <DateCalendarValue date={date} handleDate={handleDateChange} />
        </div>
        <input
          type="time"
          placeholder="Start time"
          className="ml-7 w-[80%] rounded-md py-2 text-sm my-2 block px-3 border"
        />
        <input
          type="time"
          placeholder="End time"
          className="ml-7 w-[80%] rounded-md py-2 text-sm my-2 block px-3 border"
        />
        <Link
          href={`/${params.bookingId}/payments`}
          className="ml-7 block text-center w-[80%] text-sm py-2 rounded-md bg-primary-color text-white"
        >
          Confirm booking
        </Link>
      </div>
      <div className="px-3 py-3 text-xs border border-gray-100/80 rounded-md mx-1">
        <p> Unavailable slots</p>
        <ul>
          <li className="text-red-500! underline my-2">08h00 - 10h00</li>
          <li className="text-red-500 underline my-2">08h00 - 10h00</li>
          <li className="text-red-500 underline my-2">08h00 - 10h00</li>
        </ul>
      </div>
    </>
  );
};

export default Slots;
