import React from 'react'
import Partner from "../Assets/Imgs/partners_sponsors.png"
import purpleFlare from "../Assets/Icons/purple_flare_circle.png";

function Sponsors() {
  return (
    <section className="relative grid place-items-center text-white h-[60vh] md:h-screen mt-8 mx-auto w-[350px] sm:w-[450px] lg:w-[800px] border-b-2 border-gray-800">
      <img
        className="absolute md:w-[800px] z-0 -top-[20%] -left-[20%] md:-left-[70%] md:-top-[40%] opacity-50 mix-blend-lighten"
        src={purpleFlare}
        alt=""
      />
      <div className=" text-center w-[320px] md:w-[500px] mx-auto">
        <h4 className="text-2xl font-bold mb-5 md:text-4xl">
          Partners and Sponsors
        </h4>
        <p>
          GetLinked Hackathon 1.0 is honoured to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="relative grid place-content-center w-[300px] sm:w-auto p-10 border-2 border-light-purple ">
        <img src={Partner} alt="Partner" />
        <img
          className="absolute md:w-[800px] z-0 left-[70%] md:top-[50%] opacity-50 mix-blend-lighten"
          src={purpleFlare}
          alt=""
        />
      </div>
    </section>
  );
}

export default Sponsors