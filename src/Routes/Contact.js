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
      <div className="text-white flex items-center justify-evenly w-[90%] mx-auto translate-y-32">
        <div>
          <div>
            <h4>Get in touch</h4>
            <p>
              Contact <br /> Information
            </p>
          </div>
          <p>
            27. Alara Street <br /> Yoba 100012 <br />
            lagos State
          </p>
          <p>Call Us: 07067981819</p>
          <p>
            We are open from Monday - Friday <br /> 08:00am - 05:00pm
          </p>
          <div className="flex items-center">
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
        <div>
          <p>Questions or need assistance?</p>
          <p>Let us know about it</p>
          <div>
            <input type="text" name="" id="" placeholder="First Name" />
          </div>
          <div>
            <input type="text" name="" id="" placeholder="Mail" />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};
