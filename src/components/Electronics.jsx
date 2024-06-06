import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import axios from "axios";
import SideBar from "./SideBar";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/electronics")
      .then((response) => {
        setElectronics(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the electronics!", error);
      });
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full md:w-fit mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-y-10 gap-x-6 mt-3 mb-20">
        {electronics &&
          electronics.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-md bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <Link to={`/electronics/${item.id}`}>
                <img
                  className="h-64 w-full object-cover rounded-t-xl"
                  src={item.image}
                  alt={item.name}
                />
                <div className="px-4 py-3">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {item.category}
                  </span>
                  <p className="text-lg font-bold text-black truncate capitalize mb-2">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black mr-2">
                      ${item.price}
                    </p>
                    <div className="w-6 h-6">
                      <IoBagAddOutline />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Electronics;
