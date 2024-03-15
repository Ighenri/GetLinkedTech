import React from "react";
import Header from "../Components/Header";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Contact = () => {
  return (
    <section className="h-screen">
      <Header />` `
      <div className="text-white flex-col-reverse md:flex-row flex items-center justify-evenly w-[90%] mx-auto translate-y-32">
        <div>
          <div className="hidden md:grid">
            <h4 className="text-light-purple md:text-4xl font-bold mb-2">
              Get in touch
            </h4>
            <p className="my-4">
              Contact <br /> Information
            </p>
            <p className="my-4">
              27. Alara Street <br /> Yoba 100012 <br />
              lagos State
            </p>
            <p className="my-4">Call Us: 07067981819</p>
            <p className="my-4">
              We are open from Monday - Friday <br /> 08:00am - 05:00pm
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start mb-0">
            <p className="text-light-purple mr-4">Share on</p>
            <span>
              <a className="mr-2" href="#html">
                <InstagramIcon />
              </a>
              <a className="mr-2" href="#html">
                <XIcon />
              </a>
              <a className="mr-2" href="#html">
                <FacebookOutlinedIcon />
              </a>

              <a href="#html">
                <LinkedInIcon />
              </a>
            </span>
          </div>
        </div>

        <div className="w-[340px] md:w-[500px] ">
          <form className=" p-2 w-[100%]">
            <p className=" text-light-purple text-lg md:text-2xl">
              Questions or need assistance?
            </p>
            <p className=" text-light-purple mb-2  text-lg md:text-2xl">
              Let us know about it
            </p>
            <div className="bg-transparent mt-4">
              <input
                className=" border-2 w-full p-2"
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                className=" border-2 w-full my-6 p-2"
                type="text"
                name=""
                id=""
                placeholder="Mail"
              />
            </div>
            <div>
              <textarea
                className=" border-2 w-full p-2"
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="grid place-content-center mt-4">
              <button className="px-8 mt-6 md:mt-0 md:px-10 py-2 rounded-md text-center font-bold bg-gradient-to-r from-light-purple to-linear  hover:bg-gradient-to-r hover:from-linear to hover:to-black hover:border hover:border-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
