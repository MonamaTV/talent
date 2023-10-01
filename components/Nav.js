import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-row justify-between mx-10">
      <h3 className="text-tertiary-color bg-red-50">
        <Link href={"/"} className="font-bold text-tertiary-color">
          Talent.
        </Link>
      </h3>
      <nav className="flex flex-row space-x-3 items-center">
        <ul className="flex flex-row space-x-4 text-xs items-center">
          <li className="mx-5 text-sm text-gray-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="mx-5 text-sm text-gray-500">
            <Link href={"/artists"}>Artists</Link>
          </li>
          <li className="mx-5 text-sm text-gray-500">
            <Link href={"/account/artist/events"}>Bookings</Link>
          </li>
          <li className="mx-5 text-sm text-gray-500">
            <Link href={"/account/artist/"}>Profile</Link>
          </li>
          <li className="mx-5 text-sm text-gray-500">
            <Image src={"/logout.png"} width={12} height={12} alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
