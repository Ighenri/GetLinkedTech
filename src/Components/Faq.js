import React from 'react'
import faq from "../Assets/Imgs/faq.png"

function Faq() {
  return (
    <section className="container flex flex-col md:flex-row justify-evenly items-center min-h-screen text-white mx-auto w-[90%] border-b-2 border-gray-800">
      <div className="writeup w-[80%] mx-auto md:w-1/2">
        <h4 className="text-white font-bold text-lg md:text-4xl text-center md:text-left">
          Frequently Ask
        </h4>
        <h4 className=" text-light-purple font-bold text-lg md:text-4xl mb-4 text-center md:text-left">
          Question
        </h4>
        <p className="text-base mb-8 leading-8 text-center md:text-left">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <ul className="md:flex flex-col mb-4 sm:mb-0">
          <li className="flex justify-between items-center border-b border-light-purple py-2 md:py-4">
            Can I work on a project I started before the hackathon?{" "}
            <span className=" text-light-purple">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-light-purple py-2 md:py-4">
            What happens if I need help during the hackathon?{" "}
            <span className=" text-light-purple">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-light-purple py-2 md:py-4">
            What happens if I don't have an idea for a project?{" "}
            <span className=" text-light-purple">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-light-purple py-2 md:py-4">
            Can I join a team or do I have to come with one?{" "}
            <span className=" text-light-purple">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-light-purple py-2 md:py-4">
            What happens after the hackathon ends{" "}
            <span className=" text-light-purple">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-light-purple py-2 md:py-4">
            Can I work on a project I started before the hackathon?{" "}
            <span className=" text-light-purple">+</span>
          </li>
        </ul>
      </div>
      <div className="Rules w-[80%] mx-auto md:w-1/2 md:mr-10">
        <img className="w-full " src={faq} alt="rules" />
      </div>
    </section>
  );
}

export default Faq