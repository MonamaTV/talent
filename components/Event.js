import Image from "next/image";
import React from "react";

const Event = () => {
  return (
    <div className="border rounded-md px-5 py-3 my-3">
      <h5>Fill Up The Dome</h5>
      <h4 className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        illum.
      </h4>
      <p className="flex flex-row items-center text-xs my-2 gap-x-2">
        <Image className="block" src={"/location.png"} width={12} height={12} />
        <span className=" block ml-4"> Pretoria, UNISA</span>
      </p>
      <p className="flex flex-row items-center text-xs my-2 gap-x-2">
        <Image className="block" src={"/date.png"} width={12} height={12} />
        <span className=" block ml-4"> 12 Jul 2023</span>
      </p>
      <p className="flex flex-row items-center text-xs my-2 gap-x-2">
        <Image className="block" src={"/payment.png"} width={12} height={12} />
        <span className="text-green-400 block ml-4">
          {" "}
          Paid | Pending | Cancelled
        </span>
      </p>
    </div>
  );
};

export default Event;
