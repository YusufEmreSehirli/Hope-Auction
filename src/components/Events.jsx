import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  return (
    <div className="w-fit events mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14 mt-3 mb-20">
      {events.map((event) => (
        <div
          key={event.id}
          className="w-72 h-[450px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <Link to={`/events/${event.id}`}>
            <img
              className="h-80 w-72 object-cover rounded-t-xl"
              src={event.image}
              alt={event.title}
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {event.location}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {event.title}
              </p>
              <div className="flex items-center">
                {event.price === "Free" ? (
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {event.price}
                  </p>
                ) : (
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${event.price}
                  </p>
                )}
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

export default Events;
