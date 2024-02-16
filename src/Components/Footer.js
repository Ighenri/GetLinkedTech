import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function Footer() {
  return (
    <footer className="text-white grid md:place-items-center my-10 mx-auto w-[90%] text-sm h-[60vh]">
      <div className="footerContainer grid   md:place-items-center md:grid-cols-3">
        <div className="grid gap-8">
          <div>
            <a href="html" className="mr-auto text-2xl md:text-3xl">
              {" "}
              get<span className="text-light-purple">linked</span>
            </a>
            <p className="text-sm mt-4 leading-6">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <p className="text-sm font-bold mb-4 md:mb-auto">
            Terms of Use{" "}
            <span className=" text-light-purple  font-bold outline-0  ">|</span>{" "}
            Privacy Policy
          </p>
        </div>
        <div className="links leading-8 mb-4 md:mb-auto">
          <h4 className=" text-light-purple font-bold">Useful Links</h4>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div className="flex items-center">
            <p className="text-light-purple mr-4">Follow us</p>
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
        <div className="contacts leading-10 mb-4 md:mb-auto ">
          <h4 className="text-light-purple font-bold">Contact Us</h4>
          <p>
            <span>
              <CallIcon />
            </span>{" "}
            +234 6707653444
          </p>
          <p>
            <span>
              {" "}
              <LocationOnIcon />
            </span>{" "}
            +27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
        </div>
      </div>
      <div className="mt-4">All rights reserved. © getlinked Ltd.</div>
    </footer>
  );
}

export default Footer;
