import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed lg:static bottom-0 left-0 right-0 bg-white shadow-md  lg:my-1">
      <nav className="flex justify-around p-4 lg:hidden">
        <NavLink to="/home" className={({ isActive }) => `flex items-center justify-center w-full py-2 rounded-full hover:bg-secondary hover:text-white font-roboto px-4 ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}>
          <AiOutlineHome size={24} className="mr-2" />
          Home
        </NavLink>
        <NavLink to="/store" className={({ isActive }) => `flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white font-roboto px-4 ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}>
          <FaStore size={24} className="mr-2" />
          Store
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white font-roboto px-4  ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}>
          <AiOutlineUser size={24} className="mr-2" />
          Profile
        </NavLink>
      </nav>
      <div className="hidden lg:flex lg:flex-col bg-slate-200">
        <p className="text-center pb-1">
          Copyright © 2024 <span className="text-secondary">BrainStore</span>. All rights reserved.
        </p>
        <p className="text-center pb-1">Faiz Nur Budi</p>
        <p className="text-center pb-1">Carissa Chandra</p>
        <p className="text-center pb-1">Patricia Ho</p>
        <p className="text-center pb-1">Frederic Davidsen</p>
        <p className="text-center pb-1">Cecilia</p>
        <p className="text-center pb-1">Dhany Aulia Fajrianto</p>
      </div>
    </footer>
  );
};

export default Footer;
