import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the course details!", error);
      });
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 overflow-hidden">
            <img
              className="w-full h-96 object-cover rounded-md"
              src={`../${course.image}`}
              alt={course.title}
            />
          </div>
          <div className="md:w-1/2 md:pl-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
              <h3 className="text-xl mb-2 text-gray-700">
                Price: ${course.price}
              </h3>
              <h4 className="text-lg mb-2 text-gray-600">
                Category: {course.category}
              </h4>
              <p className="text-gray-700 mb-4"></p>
            </div>
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                Enroll Now
              </button>
              <p className="text-lg font-bold text-gray-900 mt-4">
                {course.price} $
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">Course Details</h2>
        <p className="text-gray-700 mb-4">{course.description}</p>
      </section>
    </div>
  );
};

export default CourseDetail;
