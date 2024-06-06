import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/auctions/${id}`)
      .then((response) => {
        setAuction(response.data);
        setBidAmount(response.data.currentBid);
        startCountdown(response.data.endTime);
      })
      .catch((error) => {
        console.error("Error fetching auction details:", error);
      });
  }, [id]);

  const increaseBid = () => {
    setBidAmount(bidAmount + 10);
  };

  const startCountdown = (endTime) => {
    let minutesLeft = Math.floor(
      (new Date(endTime) - new Date()) / (1000 * 60)
    );

    const countdownInterval = setInterval(() => {
      if (minutesLeft <= 0) {
        clearInterval(countdownInterval);
        setTimeLeft(0);
      } else {
        const hours = Math.floor(minutesLeft / 60);
        const minutes = minutesLeft % 60;
        setTimeLeft({ hours, minutes });
        minutesLeft -= 1;
      }
    }, 60000);
  };

  if (!auction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:flex md:justify-center md:items-center">
          <img
            src={`../${auction.image}`}
            alt={auction.title}
            className="w-full rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{auction.title}</h1>
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Category: {auction.category}
          </h2>
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Current Bid: ${bidAmount}
          </h2>
          <p className="text-gray-700 mb-4">{auction.description}</p>
          <p className="text-sm text-gray-500 mb-2">
            Each click increases the bid by $10.
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Time Left: {timeLeft.hours} hours {timeLeft.minutes} minutes
          </p>
          <button
            onClick={increaseBid}
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            BID NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
