import React from "react";
import Header from "../Components/Header";
import RegisterPic from "../Assets/Imgs/man_registrar.png";

const Register = () => {
  return (
    <div>
      <Header />
      <section className="text-white grid grid-cols-2 place-content-center w-[90%] mx-auto translate-y-32">
        <div>
          <img src={RegisterPic} alt="" />
        </div>
        <div className="">
          <div>
            <h3>Register</h3>
            <p>Be part of this movement!</p>
            <h2>Create your account</h2>
          </div>
          <form action="">
            <div className="formLine">
              <div>
                <label htmlFor="TeamName">Team's Name</label>
                <input
                  type="text"
                  name="TeamName"
                  id="TeamName"
                  placeholder="Enter the name if your group"
                />
              </div>
              <div>
                <label htmlFor="phoneNo">Phone</label>
                <input
                  type="number"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="+234"
                />
              </div>
            </div>
            <div className="formLine">
              <div>
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="Enter the email address"
                />
              </div>
              <div>
                <label htmlFor="projectTopic">Project Topic</label>
                <input
                  type="text"
                  name="projectTopic"
                  id="projectTopic"
                  placeholder="what is your group project for"
                />
              </div>
            </div>
            <div className="formLine">
              <div>
                <label htmlFor="category">Category</label>
                <select name="country" id="country" autoComplete="country-name">
                  <option value="">Nigeria</option>
                  <option value="">Ghana</option>
                  <option value="">South Africa</option>
                  <option value="">Ivory Coast</option>
                  <option value="">others</option>
                </select>
              </div>
              <div>
                <label htmlFor="groupSize">Group Size</label>
                <input
                  type="number"
                  name="groupSize"
                  id="groupSize"
                  min={0}
                  max={1000}
                  step={2}
                />
              </div>
            </div>
            <p>Please review your registration details before submitting</p>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                {" "}
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            <button>Register Now</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
