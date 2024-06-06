import React from "react";
import SideBar from "../components/SideBar";
import Events from "../components/Events";

const EventsPage = () => {
  return (
    <div className="flex">
      <SideBar />
      <Events />
    </div>
  );
};

export default EventsPage;
