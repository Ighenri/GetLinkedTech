import React from 'react'
import idea from "../Assets/Imgs/The big idea.png"

function BigIdea() {
  return (
    <section className="container flex flex-col md:flex-row justify-evenly items-center mt-60 md:mt-0 lg:mt-0 h-screen text-white mx-auto w-[90%] border-b-2 border-gray-800">
      <div className="bigIdeal w-[80%] mx-auto md:w-1/2 md:mr-10">
        <img className="w-full " src={idea} alt="bigidea" />
      </div>
      <div className="writeup w-[80%]  mx-auto md:w-1/2">
        <h4 className="text-white font-bold md:text-4xl">
          Introduction to getlinked
        </h4>
        <h5 className=" text-light-purple font-bold md:text-4xl mb-4">
          tech Hackatheon 1.0
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
    </section>
  );
}

export default BigIdea