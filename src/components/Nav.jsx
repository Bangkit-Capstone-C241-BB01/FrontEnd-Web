import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiPackage, BiArrowFromBottom, BiSolidUser, BiSolidBarChartAlt2, BiSpreadsheet } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logokecil.png";
import { logout } from "../redux/features/auth/authSlice";
import { removeToken } from "../utils/cookies";
import { useDispatch } from "react-redux";

const Nav = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    removeToken(role);
    navigate("/seller");
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-full">
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-200 ease-in-out bg-primary text-white w-64 z-40`}>
        <div className="flex justify-between items-center p-4 border-b ">
          <div className="flex items-center">
            <img src={logo} alt="Logo" />
            <p className="ml-3 text-3xl font-roboto">BrainStore</p>
          </div>
          <button className="lg:hidden focus:outline-none mb-14" onClick={toggleSidebar}>
            <AiOutlineClose size={24} color="red" />
          </button>
        </div>
        <nav className="mt-4 flex flex-col h-3/4 justify-between">
          <ul>
            {role === "admin" ? (
              <>
                <li className="p-2 cursor-pointer">
                  <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) => `flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white font-roboto ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}
                  >
                    <BiSolidBarChartAlt2 size={20} className="mr-2" />
                    Dashboard
                  </NavLink>
                </li>
                <li className="p-2 cursor-pointer">
                  <NavLink
                    to="/admin/appeals"
                    className={({ isActive }) => `font-roboto flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}
                  >
                    <BiSpreadsheet size={20} className="mr-2" />
                    Appeal List
                  </NavLink>
                </li>
                <li className="p-2 cursor-pointer">
                  <NavLink
                    to="/admin/profile"
                    className={({ isActive }) => `font-roboto flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}
                  >
                    <BiSolidUser size={20} className="mr-2" />
                    Profile
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="p-2 cursor-pointer">
                  <NavLink
                    to="/seller/products"
                    className={({ isActive }) => `flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white font-roboto ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}
                  >
                    <BiPackage size={20} className="mr-2" />
                    Products
                  </NavLink>
                </li>
                <li className="p-2 cursor-pointer">
                  <NavLink
                    to="/seller/addProduct"
                    className={({ isActive }) => `font-roboto flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}
                  >
                    <BiArrowFromBottom size={20} className="mr-2" />
                    Add Product
                  </NavLink>
                </li>
                <li className="p-2 cursor-pointer">
                  <NavLink
                    to="/seller/profile"
                    className={({ isActive }) => `font-roboto flex items-center justify-center w-full p-2 rounded-full hover:bg-secondary hover:text-white ${isActive ? "bg-secondary text-white" : "text-black bg-white"}`}
                  >
                    <BiSolidUser size={20} className="mr-2" />
                    Profile
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <button onClick={handleLogOut} className="font-roboto p-2 m-4 rounded-full bg-red-700 text-white hover:bg-red-900">
            Log Out
          </button>
        </nav>
      </div>

      {!isOpen && (
        <div className="lg:hidden fixed top-0 left-0 z-50">
          <button className="m-2 focus:outline-none bg-secondary rounded-md p-1" onClick={toggleSidebar}>
            <FaBars size={24} color="white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
