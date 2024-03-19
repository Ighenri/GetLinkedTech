import React from "react";
import Header from "../Components/Header";
import RegisterPic from "../Assets/Imgs/man_registrar.png";
import "./Register.css"

const Register = () => {
  return (
    <div>
      <Header />
      <section className="text-white grid lg:grid-cols-2 place-content-center w-[90%] mx-auto translate-y-32 mb-28">
        <div className="w-[400px] lg:w-auto">
          <img cl src={RegisterPic} alt="" />
        </div>
        <div className=" w-[300px] md:w-[500px] mx-auto">
          <div>
            <h3 className="hidden md:block text-2xl md:text-4xl text-light-purple font-bold mb-8">
              Register
            </h3>
            <p className="mb-4 text-slate-400">Be part of this movement 🚶🏽🚶🏽</p>
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-6">
              Create your account
            </h2>
          </div>
          <form action="" className="">
            <div className="formLine  flex-col md:flex-row flex gap-10 mb-10">
              <div className="grid grid-cols-1 ">
                <label htmlFor="TeamName">Team's Name</label>
                <input
                  className="border rounded-md p-2 focus:ring-4 focus:ring-light-purple md:w-[200px] "
                  type="text"
                  name="TeamName"
                  id="TeamName"
                  placeholder="Enter the name if your group"
                />
              </div>
              <div className="grid grid-cols-1 ">
                <label htmlFor="phoneNo">Phone</label>
                <input
                  className="border rounded-md p-2 focus:ring-4 focus:ring-light-purple md:w-[200px] "
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="+2348169433973"
                />
              </div>
            </div>
            <div className="formLine flex-col md:flex-row flex gap-10 mb-10">
              <div className="grid grid-cols-1 ">
                <label htmlFor="Email">Email</label>
                <input
                  className="border rounded-md p-2 focus:ring-4 focus:ring-light-purple md:w-[200px] "
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="Enter the email address"
                />
              </div>
              <div className="grid grid-cols-1 ">
                <label htmlFor="projectTopic">Project Topic</label>
                <input
                  className="border rounded-md p-2 focus:ring-4 focus:ring-light-purple md:w-[200px] "
                  type="text"
                  name="projectTopic"
                  id="projectTopic"
                  placeholder="what is your group project for"
                />
              </div>
            </div>
            <div className="formLine flex-col md:flex-row flex gap-10 mb-10">
              <div className="grid grid-cols-1 ">
                <label htmlFor="category">Category</label>
                <select
                  className="border rounded-md p-2 focus:ring-4 focus:ring-light-purple  md:w-[200px] "
                  name="country"
                  id="country"
                  autoComplete="country-name"
                >
                  <option value="">Nigeria</option>
                  <option value="">Ghana</option>
                  <option value="">South Africa</option>
                  <option value="">Ivory Coast</option>
                  <option value="">others</option>
                </select>
              </div>
              <div className="grid grid-cols-1 ">
                <label htmlFor="groupSize">Group Size</label>
                <input
                  className="border rounded-md p-2 focus:ring-4 focus:ring-light-purple md:w-[200px] "
                  type="number"
                  name="groupSize"
                  id="groupSize"
                  min={0}
                  max={1000}
                  step={2}
                />
              </div>
            </div>
            <p className="italic text-light-purple mb-3">
              Please review your registration details before submitting
            </p>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                {" "}
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            <button className=" grid place-content-center w-[90%] rounded-md py-2 md:py-4 text-xl bg-light-purple text-white font-bold mt-4 mb-36">
              Register Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
