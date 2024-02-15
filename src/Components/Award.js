import React from "react";
import Reward from "../Assets/Imgs/Rewards.png";
import Cup from "../Assets/Imgs/cup.png";

function Award() {
  return (
    <section className=" grid place-items-center md:flex items-center justify-center text-white w-[90%] mx-auto">
      {/* MOBILE VIEW */}
      <div className="md:hidden medalText grid place-items-center text-center mb-8 md:mb-20">
        <h4 className="text-xl font-bold">Prizes and </h4>
        <h4 className="text-xl text-light-purple">Rewards</h4>
        <p className="text-sm">
          Highline of the prize or reward for winners and for participants
        </p>
      </div>

      {/* DESKTOP */}
      <div className="cupContainer w-[350px] md:w-[50%] my-10 md:mb-auto">
        <img className="" src={Cup} alt="cup" />
      </div>
      <div className="medalsContainer w-[350px] md:w-[50%] ">
        <div className="medalText hidden md:grid place-content-center mb-8 md:mb-20">
          <h4 className="text-4xl font-bold">Prizes and </h4>
          <h4 className="text-4xl text-light-purple">Rewards</h4>
          <p className=" text-lg mt-4">
            Highline of the prize or reward for winners and for <br />
            participants
          </p>
        </div>
        <div className="medals w-[90%]">
          <img className="w-full" src={Reward} alt="medal" />
        </div>
      </div>
    </section>
  );
}

export default Award;
