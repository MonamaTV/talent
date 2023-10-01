import Image from "next/image";
import React from "react";
import Link from "next/link";
const Artist = ({ data }) => {
  return (
    <Link
      href={`/${data.id}`}
      className="space-y-3 my-4 flex flex-row items-center rounded-md border border-gray-100 py-3 px-5 mb-10"
    >
      <Image
        src={data.profilePicture}
        className="rounded-md mx-3"
        height={80}
        width={80}
      />
      <div className="mx-3 block px-4">
        <h3>{data.lastname}</h3>
        <p className="text-xs text-gray-500 underline">Category: Hip Hop</p>
        <p className="text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, velit.
        </p>
        <small className="text-xs text-gray-300">Fee: {data.bookingFee}</small>
        <small className="text-xs">* excluding logistics</small>
        <div className="flex flex-row">
          <Image src={"/star.png"} height={10} width={10} alt="" />
          <Image src={"/star.png"} height={10} width={10} alt="" />
          <Image src={"/star.png"} height={10} width={10} alt="" />
        </div>
        <button className="text-white bg-secondary-color text-xs rounded-md px-3 py-1 my-2">
          Book artist
        </button>
      </div>
    </Link>
  );
};

export default Artist;
