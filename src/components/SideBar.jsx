import {
  IoHomeOutline,
  IoLaptopOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { LiaBookSolid, LiaInfoCircleSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { RiAuctionLine } from "react-icons/ri";
import { MdOutlinePlayLesson } from "react-icons/md";
import { PiTShirt } from "react-icons/pi";

const SideBar = () => {
  return (
    <div className="flex  flex-col p-1 md:p-1">
      <Link to="/">
        <div className="flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <IoHomeOutline />
          </span>
          <span id="home" className="max-md:hidden line-clamp-1">
            Home
          </span>
        </div>
      </Link>
      <Link to="/auctions">
        <div className="flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <RiAuctionLine />
          </span>
          <span id="auctions" className="max-md:hidden line-clamp-1">
            Auctions
          </span>
        </div>
      </Link>
      <Link to="/courses">
        <div className="flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <MdOutlinePlayLesson />
          </span>
          <span id="courses" className="max-md:hidden line-clamp-1">
            E-Courses
          </span>
        </div>
      </Link>
      <Link to="/books">
        <div className="flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <LiaBookSolid />
          </span>
          <span className="max-md:hidden line-clamp-1">Books</span>
        </div>
      </Link>
      <Link to="/electronics">
        <div className="flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <IoLaptopOutline />
          </span>
          <span className="max-md:hidden line-clamp-1">Electronics</span>
        </div>
      </Link>
      <Link to="/events">
        <div className="flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <IoTicketOutline />
          </span>
          <span className="max-md:hidden line-clamp-1">Events</span>
        </div>
      </Link>

      <Link to="/profile">
        <div className="  divide-y-[1px] divide-black flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <FaRegUser />
          </span>
          <span className="max-md:hidden line-clamp-1">Profile</span>
        </div>
      </Link>
      <Link to="https://neu.edu.tr/hakkimizda/">
        <div className=" flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <LiaInfoCircleSolid />
          </span>
          <span className="max-md:hidden line-clamp-1">About Us</span>
        </div>
      </Link>
      <Link to="/login">
        <div className=" flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl ">
            <IoSettingsOutline />
          </span>
          <span className="max-md:hidden line-clamp-1">Log Out</span>
        </div>
      </Link>
      <Link>
        <div className=" flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl "></span>
          <span className="max-md:hidden line-clamp-1"></span>
        </div>
      </Link>
      <Link>
        <div className=" flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl "></span>
          <span className="max-md:hidden line-clamp-1"></span>
        </div>
      </Link>
      <Link>
        <div className=" flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl "></span>
          <span className="max-md:hidden line-clamp-1"></span>
        </div>
      </Link>
      <Link>
        <div className=" flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl "></span>
          <span className="max-md:hidden line-clamp-1"></span>
        </div>
      </Link>

      <Link>
        <div className=" flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl "></span>
          <span className="max-md:hidden line-clamp-1"></span>
        </div>
      </Link>
      <Link>
        <div className=" flex gap-2 py-4 px-4 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#adabac]">
          <span className="max-md:text-2xl "></span>
          <span className="max-md:hidden line-clamp-1"></span>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
