import React from "react";
import menu from "../Icons/menu.png";
import CloseMenu from "../Icons/close.png";

export default function NarBar() {
  return (
    <nav className="flex justify-between px-10 py-6 md:flex-row items-center lg:px-12 text-white md:h-24 md:w-screen md:px-8 md:border-b-2 md:border-white">
      <a href="html" className="mr-auto text-2xl">
        {" "}
        get<span className="text-light-purple">linked</span>
      </a>
      <div className="md:flex hidden">
        <ul className="flex flex-col items-center md:flex-row md:mr-auto">
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            <a href="html"> Timeline</a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="html">Overview </a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="html">FAQs </a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="html">Contact </a>
          </li>
        </ul>
        <button className=" px-8 py-2  rounded-md text-center bg-gradient-to-r from-light-purple to-linear md:ml-20">
          Register
        </button>
      </div>
      <div>
        <img className=" w-6 md:hidden" src={menu} alt="" />
        <img className="hidden" src={CloseMenu} alt="" />
      </div>
    </nav>
  );
}
