import React from 'react'
import Partner from "../Assets/Imgs/partners_sponsors.png"

function Sponsors() {
  return (
    <section className="grid place-items-center text-white h-[60vh] md:h-screen mt-8 mx-auto w-[350px] sm:w-[450px] lg:w-[800px] border-b-2 border-gray-800">
      <div className="text-center w-[320px] md:w-[500px] mx-auto">
        <h4 className="text-2xl font-bold mb-5 md:text-4xl">
          Partners and Sponsors
        </h4>
        <p>
          GetLinked Hackathon 1.0 is honoured to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="grid place-content-center w-[300px] sm:w-auto p-10 border-2 border-light-purple ">
        <img src={Partner} alt="Partner" />
      </div>
    </section>
  );
}

export default Sponsors