import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";

const Ecoursedetail = () => {
  const [courses, setCourses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [addedToCart, setAddedToCart] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  const addToCart = (id) => {
    axios
      .post("http://localhost:5000/basket", { id })
      .then((response) => {
        setAddedToCart(response.data);
        setShowPopup(true);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Link to={`/courses/${course.id}`}>
            <img
              className="w-full h-48 object-cover object-center"
              src={course.image}
              alt={course.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{course.category}</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800">
                  ${course.price}
                </p>
                <button
                  onClick={() => addToCart(course.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <IoBagAddOutline />
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg font-semibold">
              {addedToCart ? "Added to cart!" : "Error adding to cart!"}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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

export default Ecoursedetail;
