import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../assets/logokecilbewarna.png";
import { FaStore } from "react-icons/fa";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search/${search}`;
  };

  return (
    <header className="lg:sticky top-0 p-4 flex justify-between items-center bg-white shadow z-10">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-10 mr-3 " />
        <p className="hidden md:block text-2xl text-primary">BrainStore</p>
      </div>
      <form onSubmit={handleSubmit} className="relative flex items-center w-full md:w-1/2">
        <input type="text" placeholder="Search" className="border rounded-full py-2 px-4 pl-10 w-full" value={search} onChange={(e) => setSearch(e.target.value)} />
        <AiOutlineSearch className="absolute left-3 text-gray-500" />
      </form>
      <div className="hidden lg:flex items-center space-x-1">
        <NavLink to="/home" className={({ isActive }) => `flex items-center justify-center w-full py-2 rounded-full hover:bg-secondary hover:text-white font-roboto px-2 ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}>
          <AiOutlineHome size={24} className="mr-2" />
          Home
        </NavLink>
        <NavLink to="/store" className={({ isActive }) => `flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white font-roboto px-2 ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}>
          <FaStore size={24} className="mr-2" />
          Store
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white font-roboto px-2  ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}>
          <AiOutlineUser size={24} className="mr-2" />
          Profile
        </NavLink>
      </div>
    </header>
  );
};

export default SearchBar;
