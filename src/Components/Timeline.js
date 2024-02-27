import React, { useEffect, useState } from "react";
import "./Timeline.css";

function Timeline() {
  const Timeline = [
    {
      id: 1,
      title: "Hackathon Announcement",
      text: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      id: 2,
      title: "Teams Registration begins",
      text: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      id: 3,
      title: "Teams Registration ends",
      text: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      id: 4,
      title: "Announcement of the accepted teams and ideas",
      text: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      id: 5,
      title: "Getlinked Hackathon 1.0 Offically Begins",
      text: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      id: 6,
      title: "Demo Day",
      text: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const currentPosition = 3800

    if(scrollPosition > currentPosition) {
      setIsVisible(true);
    } else (
      setIsVisible(false)
    )
  }
  console.log(window.scrollY);

  useEffect(()=> {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <section
      id="timeline"
      className="container grid text-white mb-20 w-[90%] mx-auto border-b-2 border-gray-800"
    >
      <div className="grid text-center text-base mt-10">
        <h4 className=" text-lg md:text-4xl font-bold">Timeline</h4>
        <p className="text-sm mb-4 mx-auto md:w-[400px]  md:text-lg ">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      {/* mobile view */}
      {Timeline.map((timeline) => (
        <div key={timeline.id} className="flex mb-8 md:hidden">
          <div className="flex flex-col items-center mr-2">
            <div className={`animation_line ${isVisible ? "visible": ""} h-[8rem] w-[2px] border bg-light-purple border-light-purple my-4`}></div>

            <p className="timelineNumber bg-light-purple rounded-full flex items-center justify-center text-white w-6 h-6 text-xs">
              {timeline.id}
            </p>
          </div>
          <div>
            <h3 className="text-light-purple mb-2 text-sm sm:text-lg">
              {timeline.title}
            </h3>
            <p className="text-sm md:text-lg ">{timeline.text}</p>
            <p className="text-sm  text-light-purple mt-2 sm:text-lg">
              {timeline.date}
            </p>
          </div>
        </div>
      ))}
      <div></div>

      {/* desktop view */}
      {Timeline.map((timeline) => (
        <div
          key={timeline.id}
          className={`${
            timeline.id % 2 !== 0 ? "flip" : ""
          } hidden md:grid grid-cols-3 gap-4 justify-evenly items-center`}
        >
          <div
            className={`${timeline.id % 2 !== 0 ? "flip" : ""} timelineDetails`}
          >
            <h4 className="text-light-purple text-lg">{timeline.title}</h4>
            <p className=" text-md">{timeline.text}</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className={`animation_line ${isVisible ? "visible" : " "}  h-[8rem] w-[2px] border bg-light-purple border-light-purple my-4`}></div>
            <p
              className={`${
                timeline.id % 2 !== 0 ? "flip" : ""
              } timelineNumber bg-light-purple rounded-full flex items-center justify-center text-white w-6 h-6 text-xs`}
            >
              {timeline.id}
            </p>
          </div>
          <div
            className={`${
              timeline.id % 2 !== 0 ? "flip" : ""
            } text-lg timelineDate text-light-purple`}
          >
            <p>{timeline.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Timeline;
