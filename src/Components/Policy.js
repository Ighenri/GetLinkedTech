import React from "react";
import policy from "../Assets/Imgs/08 1.png";
import Mark from "../Assets/Imgs/list terms.png";

function Policy() {
  return (
    <section className="text-white grid lg:grid-cols-2 h-screen mx-auto w-[90%] place-items-center text-center lg:text-left text-sm sm:text-base">
      <div className="policyTextContainer w-[300px]">
        <div className="policyText">
          <h4 className="text-2xl font-bold md:text-4xl">Privacy Policy and</h4>
          <h4 className="text-2xl font-bold md:text-4xl text-light-purple">
            Terms
          </h4>
          <p className="my-8 text-sm text">
            Last updated on September 12, 2023
          </p>
          <p className="sm:w-[400px] mx-auto md:mx-0">
            Below are out privacy & policy, ehich outline a lot of goodies. It's
            our aim to always take of participant
          </p>
        </div>

        <div className="border-2 border-light-purple p-10 mt-14 sm:w-[500px] mx-auto flex flex-col justify-center items-center text-left ">
          <p className="tracking-wide">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className="mt-10">
            <h4 className="text-light-purple text-xl font-bold  mb-4">
              Licensing Policy
            </h4>
            <div>
              <p className="mb-4"> Here are terms of our standard License:</p>
              <div>
                <div className="flex justify-center items-center">
                  <img className="mr-2" src={Mark} alt="Mark" />
                  <p className=" tracking-wide">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <img className="mr-2" src={Mark} alt="Mark" />
                  <p className=" tracking-wide">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="px-8 mt-8 py-2 rounded-md font-bold bg-gradient-to-r from-light-purple to-linear  hover:bg-gradient-to-r hover:from-linear to hover:to-black hover:border hover:border-white">
            Read More
          </button>
        </div>
      </div>

      <div className="policyImageContainer w-[350px] md:w-[400px] lg:w-[420px] lg:place-self-center">
        <img src={policy} alt="" />
      </div>
    </section>
  );
}

export default Policy;
