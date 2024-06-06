import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the book details!", error);
      });
  }, [id]);

  const addToCart = () => {
    if (book) {
      axios
        .post("http://localhost:5000/basket", book)
        .then((response) => {
          setShowPopup(true);
        })
        .catch((error) => {
          console.error("Error adding book to cart:", error);
        });
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:flex-shrink-0">
          <img
            className="rounded-lg md:w-72"
            src={`../${book.image}`}
            alt={book.title}
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
            {book.author}
          </div>
          <h2 className="text-gray-900 text-2xl font-semibold">{book.title}</h2>
          <p className="mt-2 text-gray-600">{book.description}</p>
          <div className="mt-4">
            <span className="text-gray-900 font-semibold">${book.price}</span>
            <button
              onClick={addToCart}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p>Product added to cart!</p>
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Description</h3>
        <p className="mt-2 text-gray-600">{book.description}</p>
      </div>
    </div>
  );
};

export default Details;
