import React from "react";
import "./HeroPage.css";
import Button from "./ReUse/Button";
import chain from "../Icons/chain.png";
import fire from "../Icons/fire.png";
import bulb from "../Icons/bulb.png";
import earth from "../Imgs/earth.png";
import smartglass from "../Imgs/man-wearing-smart-glasses.png";

export default function HeroPage() {
  return (
    <section className="text-white px-20 h-screen translate-y-32 md:translate-y-1/4 ">
      <div className="flex justify-end">
        <p>Igniting a Revolution in HR Innovation</p>
      </div>

      <div className="Hero grid grid-cols-1 text-center md:text-left md:flex ">
        <div className="countdownSection w-full md:w-1/2">
          <p className="text-4xl md:text-6xl font-extrabold">
            getlinked Tech Hackathon{" "}
            <span className="text-light-purple">1.0</span>
            <img className="h-12 inline px-1" src={chain} alt="" />
            <img className="h-12 inline" src={fire} alt="" />
          </p>
          <p className="mt-4 leading-6">
            Participate in getlinked tech Hackathon 2023 stand <br /> a chance
            to win a Big prize
          </p>
          <Button children="Register" styleList="changeThis" />

          <div className="countdown grid grid-cols-3 w-fit md:w-1/2 bg-lemon text-center items-center">
            <div>
              <span id="hour0" className="text-5xl">
                0
              </span>
              <span id="hour1" className="text-5xl">
                0
              </span>
              <span>H</span>
            </div>
            <div>
              <span id="minute0" className="text-5xl">
                0
              </span>
              <span id="minute1" className="text-5xl">
                0
              </span>
              <span>M</span>
            </div>
            <div>
              <span id="second0" className="text-5xl">
                0
              </span>
              <span id="second1" className="text-5xl">
                0
              </span>
              <span>S</span>
            </div>
          </div>
        </div>

        <div className="smartglass relative w-full md:w-1/2">
          <img className="w-full h-auto" src={earth} alt="" />
          <img
            className="absolute top-0 left-0 w-full h-auto opacity-50"
            src={smartglass}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
