import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link to="/" className="flex items-center gap-3">
        <img className="w-[50px]" src="../images/indir (1).png" />
        <h1 className="text-2xl  max-sm:hidden italic">Hope Auction</h1>
      </Link>

      <form className="flex group border border-gray-400 rounded-[20px] overflow-hidden">
        <input
          className=" group-hover:border-[#8E1C3F]  text-white outline-none px-5 py-2   "
          type="text"
          placeholder="Aramak istediğiniz ürünü giriniz..."
        />
        <button className="px-4 text-xl hover:bg-[#8E1C3F]">
          <IoSearch />
        </button>
      </form>
      <div className="flex text-2xl cursor-pointer gap-4">
        <Link to="/basket">
          <IoBagHandleOutline className=" hover:text-[#8E1C3F] transition duration-[250ms]" />
        </Link>

        <Link to="/profile">
          <FaRegUserCircle className=" hover:text-[#8E1C3F] transition duration-[250ms]" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
