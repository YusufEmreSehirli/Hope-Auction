import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventsDet = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the event details!", error);
      });
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 overflow-hidden">
            <img
              className="w-full h-96 object-cover rounded-md"
              src={`../${event.image}`}
              alt={event.title}
            />
          </div>
          <div className="md:w-1/2 md:pl-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
              <h3 className="text-xl mb-2 text-gray-700">{event.date}</h3>
              <h4 className="text-lg mb-2 text-gray-600">{event.location}</h4>
              <p className="text-gray-700 mb-4">{event.description}</p>
            </div>
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                Attend Event
              </button>
              <p className="text-lg font-bold text-gray-900 mt-4">
                {event.price} $
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">Event Details</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          urna sed ex dapibus, ut consequat neque placerat. Nulla volutpat urna
          nunc, eget interdum nunc commodo vitae.
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          urna sed ex dapibus, ut consequat neque placerat. Nulla volutpat urna
          nunc, eget interdum nunc commodo vitae.
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          urna sed ex dapibus, ut consequat neque placerat. Nulla volutpat urna
          nunc, eget interdum nunc commodo vitae.
        </p>
      </section>
    </div>
  );
};

export default EventsDet;
