import React from "react";
import SideBar from "../components/SideBar";
import Electronics from "../components/Electronics";

const ElectronicsPage = () => {
  return (
    <div className="flex">
      <SideBar />
      <Electronics />
    </div>
  );
};

export default ElectronicsPage;
