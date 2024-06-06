import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import axios from "axios";

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auctions")
      .then((response) => {
        setAuctions(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the auctions!", error);
      });
  }, []);

  return (
    <div className="w-fit books mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14 mt-3 mb-20">
      {auctions.map((auction) => (
        <div
          key={auction.id}
          className="w-72 h-[450px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <Link to={`/auctions/${auction.id}`}>
            <img
              className="h-80 w-72 object-cover rounded-t-xl"
              src={`../${auction.image}`}
              alt={auction.title}
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {auction.category}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {auction.title}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  {auction.currentBid} $
                </p>
                <div className="ml-auto w-4 h-4">
                  <IoBagAddOutline />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Auctions;
