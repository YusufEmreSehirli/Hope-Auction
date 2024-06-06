import React from "react";
import SideBar from "../components/SideBar";
import CourseDetail from "../components/CourseDetail";

const CoursesDetails = () => {
  return (
    <div className="flex">
      <SideBar />
      <CourseDetail />
    </div>
  );
};

export default CoursesDetails;
