import React, { useState } from "react";
import menu from "../Icons/menu.png";
import CloseMenu from "../Icons/close.png";
import "./Header.css";
import Button from "./ReUse/Button";

export default function NarBar() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between px-20 py-6 w-screen fixed z-20 top-0 right-0 left-0 md:flex-row md:items-center lg:px-12 text-white md:h-24 md:px-8 md:border-b-2 md:border-white ">
      <a href="html" className="mr-auto text-2xl md:text-4xl">
        {" "}
        get<span className="text-light-purple">linked</span>
      </a>
      {}
      <nav
        className={`NavBar-List ${
          isOpen ? "active" : ""
        } md:flex flex-col fixed items-start pl-8 md:pl-0 md:items-center md:sticky top-0 left-0 opacity-1 md:0 mx-auto md:flex-row w-full md:h-0 md:px-40  h-screen md:opacity-100`}
      >
        <ul className="flex flex-col leading-[3] text-xl font-semibold md:items-center md:flex-row md:ml-auto">
          <li className=" pt-24 md:pt-0 md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            <a href="#timeline"> Timeline</a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="#overview">Overview </a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="#faq">FAQs </a>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out">
            {" "}
            <a href="#contact">Contact </a>
          </li>
        </ul>
        <Button children="Register" />
      </nav>

      <div className="md:invisible flex items-center justify-center z-20">
        <img
          onClick={MenuToggle}
          className="w-6"
          src={isOpen ? CloseMenu : menu}
          alt=""
        />
      </div>
    </header>
  );
}
