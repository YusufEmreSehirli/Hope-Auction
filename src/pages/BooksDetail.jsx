import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Details from "../components/Details";

const BooksDetail = () => {
  const { id } = useParams();
  console.log(id); // id bilgisini kontrol etmek için
  return (
    <div className="flex">
      <SideBar />
      <Details />
    </div>
  );
};

export default BooksDetail;
