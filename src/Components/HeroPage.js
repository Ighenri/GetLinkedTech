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
    <section className="text-white px-10 h-screen translate-y-1/4">
      <div className="flex justify-end">
        <p>Igniting a Revolution in HR Innovation</p>
      </div>

      <div className="Hero flex ">
        <div className="countdownSection w-1/2">
          <p className="text-6xl font-extrabold">
            getlinked Tech Hackathon{" "}
            <span className="text-light-purple">1.0</span>
            <img className="h-12 inline px-1" src={chain} alt="" />
            <img className="h-12 inline" src={fire} alt="" />
          </p>
          <p className="">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button />
          <div className="countdown">
            <p>
              00 <span>H</span>
            </p>
            <p>
              00 <span>M</span>
            </p>
            <p>
              00 <span>S</span>
            </p>
          </div>
        </div>

        <div className="smartglass relative w-1/2">
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
