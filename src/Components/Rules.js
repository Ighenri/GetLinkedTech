import React from 'react'
import rules from "../Assets/Imgs/rules.png"

function Rules() {
  return (
    <section className="container flex flex-col md:flex-row justify-evenly items-center min-h-screen text-white mx-auto w-[90%] ">
      <div className="writeup w-[80%]  mx-auto md:w-1/2">
        <h4 className="text-white font-bold md:text-4xl">Rules and</h4>
        <h5 className=" text-light-purple font-bold md:text-4xl mb-4">
          Guildines
        </h5>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="Rules w-[80%] mx-auto md:w-1/2 md:mr-10">
        <img className="w-full " src={rules} alt="rules" />
      </div>
    </section>
  );
}

export default Rules