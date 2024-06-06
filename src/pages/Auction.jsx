import React from "react";
import SideBar from "../components/SideBar";
import Auctions from "../components/Auctions";

const Auction = () => {
  return (
    <div className="flex">
      <SideBar />
      <Auctions />
    </div>
  );
};

export default Auction;
