import React from "react";

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

  return (
    <section className="container grid  text-white mb-20">
      <div className="grid text-center text-base mb-10">
        <h4 className=" text-2xl font-bold">Timeline</h4>
        <p className="">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div className="flex justify-evenly items-center ">
        <div className="timelineDetails w-[450px] ">
          <h4 className="text-light-purple text-center">
            Hackathon Announcement
          </h4>
          <p className="text-right ">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <div className=" h-20 w-[2px] border bg-light-purple border-light-purple mb-3"></div>
          <p className="timelineNumber bg-light-purple rounded-full flex items-center justify-center text-white w-8 h-8">
            1
          </p>
        </div>

        <div className="timelineDate  ">
          <p>November 18, 2023</p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
