import React from "react";
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../assets/logokecilbewarna.png";
const SearchBar = () => {
  return (
    <header className="lg:sticky top-0 p-4 flex justify-between items-center bg-white shadow z-10">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-10 mr-3 " />
        <p className="hidden md:block text-2xl text-primary">BrainStore</p>
      </div>
      <div className="relative flex items-center w-full md:w-1/2">
        <input type="text" placeholder="Search" className="border rounded-full py-2 px-4 pl-10 w-full" />
        <AiOutlineSearch className="absolute left-3 text-gray-500" />
      </div>
      <div className="hidden lg:flex items-center space-x-1">
        <NavLink to="/home" className={({ isActive }) => `flex items-center justify-center w-full py-2 rounded-full hover:bg-secondary hover:text-white font-roboto px-2 ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}>
          <AiOutlineHome size={24} className="mr-2" />
          Home
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => `flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white font-roboto px-2 ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}>
          <AiOutlineHeart size={24} className="mr-2" />
          Favorite
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
