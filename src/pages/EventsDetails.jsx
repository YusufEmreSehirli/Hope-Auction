import React from "react";
import SideBar from "../components/SideBar";
import EventsDet from "../components/EventsDet";

const EventsDetails = () => {
  return (
    <div className="flex">
      <SideBar />
      <EventsDet />
    </div>
  );
};

export default EventsDetails;
