import React, { useEffect, useState } from "react";
import "./HeroPage.css";
import Button from "./ReUse/Button";
import chain from "../Assets/Icons/chain.png";
import fire from "../Assets/Icons/fire.png";
import bulb from "../Assets/Icons/bulb.png";
import earth from "../Assets/Imgs/earth.png";
import smartglass from "../Assets/Imgs/man-wearing-smart-glasses.png";
import vector from "../Assets/Icons/Vector 4.png";
import purpleFlare from "../Assets/Icons/purple_flare_circle.png";

export default function HeroPage() {
  const textToType = "Iggniting a Revolution in HR Innovation!";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const textToShow = setInterval(() => {
      setDisplayText((prevState) => prevState + textToType[index]);
      index++;

      if (index === textToType.length - 1) {
        clearInterval(textToShow);
      }
    }, 50);
// https://youtube.com/watch?v=LCEgHntqBps
    return () => clearInterval(textToShow);
  }, [textToType]);

  return (
    <section className="text-white px-5 md:px-20 min-h-screen translate-y-32 md:translate-y-1/4 mb-40 border-b-2 border-gray-800">
      <div className="flex justify-end md:text-2xl mr-4">
        <p className="relative italic text-light-purple">{displayText}</p>
        <img
          className="absolute top-8 w-28 md:w-40"
          src={vector}
          alt="vector"
        />
      </div>

      <div className="Hero grid grid-cols-1 mt-8 text-center md:text-left md:flex relative mix-blend-lighten">
        <img
          className="absolute md:w-[700px] z-0 -top-[20%] -left-[20%] md:-left-[25%] md:-top-[50%] lg:-top-[40%] lg:-left-[5%] opacity-50 mix-blend-lighten"
          src={purpleFlare}
          alt=""
        />
        <div className="countdownSection flex flex-col mt-10 items-center w-full md:w-1/2 md:block ">
          <p className=" block text-4xl lg:text-6xl font-extrabold relative mix-blend-lighten">
            getlinked Tech Hackathon{" "}
            <span className="bulbanimation absolute -top-10 sm:left-40 md:left-auto md:-top-14">
              <img className="bulb w-5 md:w-10 " src={bulb} alt="bulb" />
            </span>
            <span className="text-light-purple mix-blend-lighten">1.0</span>
            <img className="h-6 md:h-8 lg:10 inline px-1" src={chain} alt="" />
            <img className="h-6 md:h-8 lg:10 inline" src={fire} alt="" />
          </p>
          <p className="mt-4 leading-6 md:text-base lg:w-[70%]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button children="Register" styleList="changeThis" />

          <div className="countdown grid grid-cols-3 w-fit lg:w-1/2 text-center items-center">
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

        <div className="smartglass relative w-[80%] md:w-[60%] mx-auto lg:w-1/2">
          <img className="bulbanimation w-full" src={earth} alt="" />
          <img
            className=" absolute top-0 left-0 w-full opacity-50"
            src={smartglass}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
