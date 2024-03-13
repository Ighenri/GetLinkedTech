import React, { useState } from "react";
import { Link } from "react-scroll";
import menu from "../Assets/Icons/menu.png";
import CloseMenu from "../Assets/Icons/close.png";
import "./Header.css";
import Button from "./ReUse/Button";
import { NavLink } from "react-router-dom";

export default function NarBar() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between px-10 py-6 w-screen fixed z-20 top-0 right-0 left-0 md:flex-row md:items-center lg:px-12 text-white md:h-24 md:px-8 border-b-2 border-gray-800 bg-dark-purple">
      <a href="#html" className="mr-auto text-2xl md:text-3xl lg:text-4xl">
        {" "}
        get<span className="text-light-purple">linked</span>
      </a>
      {}
      <nav
        className={`NavBar-List ${
          isOpen ? "active" : ""
        } md:flex flex-col fixed items-start pl-8 md:pl-0 md:items-center md:sticky top-0 left-0 opacity-1 md:0 mx-auto md:flex-row w-full md:h-0 md:px-40  h-screen md:opacity-100 bg-dark-purple`}
      >
        <ul className="flex flex-col leading-[3] text-xl font-semibold md:items-center md:flex-row md:ml-auto">
          <li className=" pt-24 md:pt-0 md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out cursor-pointer">
            <Link
              to="timeline"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              isDynamic={true}
              onClick={MenuToggle}
            >
              {" "}
              Timeline
            </Link>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out cursor-pointer">
            {" "}
            <Link
              to="overview"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              isDynamic={true}
              onClick={MenuToggle}
            >
              {" "}
              Overview
            </Link>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out cursor-pointer">
            {" "}
            <Link
              to="faq"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              isDynamic={true}
              onClick={MenuToggle}
            >
              {" "}
              FAQ
            </Link>
          </li>
          <li className="md:px-5 lg:px-8 md:text-lg hover:text-purple transition-colors ease-in-out cursor-pointer">
            {" "}
            <NavLink to="/Contact">Contact</NavLink>
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
