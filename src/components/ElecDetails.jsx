import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideBar from "./SideBar";

const ElectronicsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/electronics/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product!", error);
      });
  }, [id]);

  const addToCart = () => {
    if (product) {
      axios
        .post("http://localhost:5000/basket", product)
        .then((response) => {
          setShowPopup(true);
        })
        .catch((error) => {
          console.error("Error adding product to cart:", error);
        });
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="container mx-auto mt-8">
        {product ? (
          <div>
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 overflow-hidden">
                  <img
                    className="w-full h-96 object-cover rounded-md"
                    src={`../${product.image}`}
                    alt={product.title}
                  />
                </div>
                <div className="md:w-1/2 md:pl-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                    <h3 className="text-xl mb-2 text-gray-700">
                      {product.date}
                    </h3>
                    <h4 className="text-lg mb-2 text-gray-600">
                      {product.location}
                    </h4>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                  </div>
                  <div className="mt-6">
                    <button
                      className="w-full px-6 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                      onClick={addToCart}
                    >
                      Add to Cart
                    </button>
                    <p className="text-lg font-bold text-gray-900 mt-4">
                      {product.price} $
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <section className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 overflow-hidden">
              <h2 className="text-2xl font-bold mb-4">Event Details</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p>{product.name}</p>
            </section>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Product added to cart!</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-blue-600"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectronicsDetail;
